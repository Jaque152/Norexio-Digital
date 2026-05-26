import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BUSINESS_EMAIL = "webmaster@norexiodigital.com";
const SITE_NAME = "Norexio Digital";

type ContactPayload = Record<string, unknown> & {
    nombre?: string;
    email?: string;
    mensaje?: string;
    asunto?: string;
    subject?: string;
    telefono?: string;
};

function escapeHtml(value: unknown) {
    const text = String(value ?? "");
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatValue(value: unknown) {
    if (value === null || value === undefined) return "";
    if (typeof value === "boolean") return value ? "Sí" : "No";
    if (typeof value === "object") return JSON.stringify(value, null, 2);
    return String(value).trim();
}

function buildFieldsHtml(data: Record<string, unknown>) {
    const excluded = new Set(["_csrf", "captcha", "token"]);
    const rows = Object.entries(data)
        .filter(([key, value]) => !excluded.has(key) && formatValue(value) !== "")
        .map(
            ([key, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:180px;">
            ${escapeHtml(key)}
          </td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;white-space:pre-wrap;word-break:break-word;">
            ${escapeHtml(formatValue(value))}
          </td>
        </tr>
      `
        )
        .join("");

    return rows || `
    <tr>
      <td colspan="2" style="padding:12px;border:1px solid #e5e7eb;">
        No se recibieron campos.
      </td>
    </tr>
  `;
}

function buildEmailHtml(title: string, data: Record<string, unknown>) {
    const fieldsHtml = buildFieldsHtml(data);

    return `
  <div style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;padding:24px;">
      <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <div style="padding:24px;background:#111827;color:#ffffff;">
          <h1 style="margin:0;font-size:22px;line-height:1.3;">${escapeHtml(title)}</h1>
          <p style="margin:8px 0 0;font-size:14px;opacity:.9;">${escapeHtml(SITE_NAME)}</p>
        </div>

        <div style="padding:24px;">
          <p style="margin:0 0 16px;color:#374151;font-size:14px;line-height:1.6;">
            Se recibió un nuevo formulario de contacto con la siguiente información:
          </p>

          <table style="width:100%;border-collapse:collapse;font-size:14px;color:#111827;">
            ${fieldsHtml}
          </table>

          <p style="margin:20px 0 0;color:#6b7280;font-size:12px;line-height:1.5;">
            Este correo fue generado automáticamente desde el formulario de ${escapeHtml(SITE_NAME)}.
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
}

function buildClientReplyHtml(data: ContactPayload) {
    const nombre = formatValue(data.nombre) || "hola";

    return `
  <div style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;padding:24px;">
      <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <div style="padding:24px;background:#111827;color:#ffffff;">
          <h1 style="margin:0;font-size:22px;line-height:1.3;">Gracias por escribirnos</h1>
          <p style="margin:8px 0 0;font-size:14px;opacity:.9;">${escapeHtml(SITE_NAME)}</p>
        </div>

        <div style="padding:24px;color:#111827;">
          <p style="margin:0 0 12px;font-size:15px;line-height:1.7;">
            Hola ${escapeHtml(nombre)}, recibimos tu mensaje correctamente.
          </p>

          <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#374151;">
            En breve revisaremos tu solicitud y te responderemos al correo que enviaste.
          </p>

          <div style="padding:16px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;">
            <p style="margin:0 0 8px;font-size:13px;color:#6b7280;">Tu mensaje</p>
            <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(formatValue(data.mensaje) || "")}</p>
          </div>

          <p style="margin:20px 0 0;font-size:12px;color:#6b7280;">
            ${escapeHtml(SITE_NAME)}
          </p>
        </div>
      </div>
    </div>
  </div>
  `;
}

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as ContactPayload;

        const email = formatValue(body.email);
        const nombre = formatValue(body.nombre);
        const mensaje = formatValue(body.mensaje);
        const asunto = formatValue(body.asunto || body.subject) || `Nuevo contacto - ${SITE_NAME}`;

        if (!email || !mensaje) {
            return NextResponse.json(
                { success: false, error: "Faltan campos obligatorios: email y mensaje" },
                { status: 400 }
            );
        }

        const fromEmail =
            process.env.RESEND_FROM_EMAIL ||
            `${SITE_NAME} <onboarding@resend.dev>`;

        const businessHtml = buildEmailHtml(`Nuevo mensaje - ${SITE_NAME}`, body);
        const clientHtml = buildClientReplyHtml(body);

        const [businessResult, clientResult] = await Promise.allSettled([
            resend.emails.send({
                from: fromEmail,
                to: BUSINESS_EMAIL,
                subject: asunto,
                html: businessHtml,
                replyTo: email,
            }),
            resend.emails.send({
                from: fromEmail,
                to: email,
                subject: `Hemos recibido tu mensaje - ${SITE_NAME}`,
                html: clientHtml,
            }),
        ]);

        const businessOk = businessResult.status === "fulfilled";
        const clientOk = clientResult.status === "fulfilled";

        if (!businessOk || !clientOk) {
            return NextResponse.json(
                {
                    success: false,
                    error: "No se pudieron enviar todos los correos",
                    businessSent: businessOk,
                    clientSent: clientOk,
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Correos enviados correctamente",
            name: nombre,
            email,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Error desconocido";
        return NextResponse.json(
            { success: false, error: message },
            { status: 500 }
        );
    }
}