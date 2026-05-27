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
          <td style="
            padding:14px 16px;
            border-bottom:1px solid #e5e7eb;
            background:#f0fdf4;
            color:#166534;
            font-weight:700;
            width:190px;
            vertical-align:top;
          ">
            ${escapeHtml(key)}
          </td>
          <td style="
            padding:14px 16px;
            border-bottom:1px solid #e5e7eb;
            color:#18181b;
            white-space:pre-wrap;
            word-break:break-word;
            vertical-align:top;
          ">
            ${escapeHtml(formatValue(value))}
          </td>
        </tr>
      `
    )
    .join("");

  return (
    rows ||
    `
    <tr>
      <td colspan="2" style="padding:16px;color:#52525b;">
        No se recibieron campos.
      </td>
    </tr>
  `
  );
}

function buildFooterLogo() {
  return `
    <div style="
      margin-top:28px;
      padding-top:20px;
      border-top:1px solid #dbe7de;
      text-align:center;
      background:transparent;
    ">
      <div style="
        display:inline-flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        background:transparent;
      ">
        <div style="
          font-family:Arial,Helvetica,sans-serif;
          font-size:20px;
          line-height:1;
          font-weight:900;
          letter-spacing:0.08em;
          color:#16a34a;
          background:transparent;
        ">ND</div>

        <div style="
          font-family:Arial,Helvetica,sans-serif;
          font-size:15px;
          line-height:1.2;
          font-weight:700;
          color:#14532d;
          background:transparent;
        ">${escapeHtml(SITE_NAME)}</div>
      </div>

      <div style="
        margin-top:10px;
        font-family:Arial,Helvetica,sans-serif;
        font-size:12px;
        line-height:1.5;
        color:#6b7280;
        background:transparent;
      ">
        Diseño limpio, crecimiento real.
      </div>
    </div>
  `;
}

function buildEmailHtml(title: string, data: Record<string, unknown>) {
  const fieldsHtml = buildFieldsHtml(data);

  return `
  <div style="
    margin:0;
    padding:0;
    background:#f0fdf4;
    font-family:Arial,Helvetica,sans-serif;
  ">
    <div style="max-width:680px;margin:0 auto;padding:24px;">
      <div style="
        background:#ffffff;
        border:1px solid #dbe7de;
        border-radius:28px;
        overflow:hidden;
        box-shadow:0 18px 50px rgba(22,163,74,0.10);
      ">
        <div style="
          padding:28px 28px 24px;
          background:linear-gradient(135deg,#16a34a 0%,#10b981 100%);
          color:#ffffff;
        ">
          <div style="
            display:inline-flex;
            align-items:center;
            gap:8px;
            border:1px solid rgba(255,255,255,0.25);
            border-radius:999px;
            padding:8px 14px;
            font-size:12px;
            font-weight:700;
            letter-spacing:0.08em;
            text-transform:uppercase;
            background:rgba(255,255,255,0.08);
          ">
            Nuevo mensaje
          </div>

          <h1 style="
            margin:16px 0 10px;
            font-size:28px;
            line-height:1.2;
            font-weight:900;
          ">${escapeHtml(title)}</h1>

          <p style="
            margin:0;
            font-size:14px;
            line-height:1.7;
            color:rgba(255,255,255,0.92);
          ">
            ${escapeHtml(SITE_NAME)} recibió un nuevo formulario de contacto.
          </p>
        </div>

        <div style="padding:28px;">
          <div style="
            margin-bottom:22px;
            border:1px solid #dbe7de;
            border-radius:22px;
            background:linear-gradient(180deg,#ffffff 0%,#f8fffb 100%);
            padding:18px;
          ">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="
                  font-size:12px;
                  font-weight:700;
                  color:#16a34a;
                  text-transform:uppercase;
                  letter-spacing:0.08em;
                  padding-bottom:6px;
                ">Resumen</td>
              </tr>
              <tr>
                <td style="font-size:14px;color:#374151;line-height:1.7;">
                  Se recibió un nuevo formulario con los datos siguientes:
                </td>
              </tr>
            </table>
          </div>

          <table style="
            width:100%;
            border-collapse:separate;
            border-spacing:0;
            border:1px solid #dbe7de;
            border-radius:20px;
            overflow:hidden;
            font-size:14px;
          ">
            ${fieldsHtml}
          </table>

          <div style="
            margin-top:22px;
            padding:16px 18px;
            border:1px solid #dbe7de;
            border-radius:18px;
            background:#f8fffb;
            color:#52525b;
            font-size:12px;
            line-height:1.6;
          ">
            Este correo fue generado automáticamente desde el formulario de ${escapeHtml(SITE_NAME)}.
          </div>

          ${buildFooterLogo()}
        </div>
      </div>
    </div>
  </div>
  `;
}

function buildClientReplyHtml(data: ContactPayload) {
  const nombre = formatValue(data.nombre) || "hola";

  return `
  <div style="
    margin:0;
    padding:0;
    background:#f0fdf4;
    font-family:Arial,Helvetica,sans-serif;
  ">
    <div style="max-width:680px;margin:0 auto;padding:24px;">
      <div style="
        background:#ffffff;
        border:1px solid #dbe7de;
        border-radius:28px;
        overflow:hidden;
        box-shadow:0 18px 50px rgba(22,163,74,0.10);
      ">
        <div style="
          padding:28px 28px 24px;
          background:linear-gradient(135deg,#16a34a 0%,#10b981 100%);
          color:#ffffff;
        ">
          <div style="
            display:inline-flex;
            align-items:center;
            gap:8px;
            border:1px solid rgba(255,255,255,0.25);
            border-radius:999px;
            padding:8px 14px;
            font-size:12px;
            font-weight:700;
            letter-spacing:0.08em;
            text-transform:uppercase;
            background:rgba(255,255,255,0.08);
          ">
            Mensaje recibido
          </div>

          <h1 style="
            margin:16px 0 10px;
            font-size:28px;
            line-height:1.2;
            font-weight:900;
          ">Gracias por escribirnos</h1>

          <p style="
            margin:0;
            font-size:14px;
            line-height:1.7;
            color:rgba(255,255,255,0.92);
          ">
            ${escapeHtml(SITE_NAME)}
          </p>
        </div>

        <div style="padding:28px;color:#18181b;">
          <p style="
            margin:0 0 14px;
            font-size:15px;
            line-height:1.8;
            color:#374151;
          ">
            Hola ${escapeHtml(nombre)}, recibimos tu mensaje correctamente.
          </p>

          <div style="
            margin:18px 0;
            padding:18px;
            border:1px solid #dbe7de;
            border-radius:22px;
            background:linear-gradient(180deg,#ffffff 0%,#f8fffb 100%);
          ">
            <p style="
              margin:0 0 8px;
              font-size:12px;
              font-weight:700;
              letter-spacing:0.08em;
              text-transform:uppercase;
              color:#16a34a;
            ">Tu mensaje</p>

            <p style="
              margin:0;
              font-size:14px;
              line-height:1.8;
              color:#374151;
              white-space:pre-wrap;
              word-break:break-word;
            ">
              ${escapeHtml(formatValue(data.mensaje) || "")}
            </p>
          </div>

          <p style="
            margin:0;
            font-size:14px;
            line-height:1.8;
            color:#374151;
          ">
            En breve revisaremos tu solicitud y te responderemos al correo que enviaste.
          </p>

          ${buildFooterLogo()}
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
    const asunto =
      formatValue(body.asunto || body.subject) ||
      `Nuevo contacto - ${SITE_NAME}`;

    if (!email || !mensaje) {
      return NextResponse.json(
        { success: false, error: "Faltan campos obligatorios: email y mensaje" },
        { status: 400 }
      );
    }

    const fromEmail = `${SITE_NAME} <${BUSINESS_EMAIL}>`;

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