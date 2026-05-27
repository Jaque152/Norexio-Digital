import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BUSINESS_EMAIL = "webmaster@norexiodigital.com";
const SITE_NAME = "Norexio Digital";

type CheckoutPayload = {
  orderId: string;
  items: Array<{
    id?: string;
    title: string;
    category?: string;
    image: string;
    price: number;
    quantity: number;
  }>;
  totals: {
    subtotal: number;
    iva: number;
    total: number;
  };
  customer: {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    direccion: string;
    direccion2?: string;
    ciudad: string;
    estado: string;
    pais: string;
    cp: string;
    empresa?: string;
  };
  payment?: {
    amount?: number;
    currency?: string;
    gateway?: string;
    result?: unknown;
  };
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

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
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

function buildItemsHtml(items: CheckoutPayload["items"]) {
  return items
    .map(
      (item) => `
        <tr>
          <td style="padding:16px;border-bottom:1px solid #e5e7eb;">
            <div style="display:flex;align-items:center;gap:12px;">
              <img 
                src="${escapeHtml(item.image)}" 
                alt="${escapeHtml(item.title)}" 
                width="64" 
                height="64"
                style="border-radius:16px;object-fit:cover;"
              />

              <div>
                <p style="margin:0;font-size:16px;font-weight:700;color:#18181b;">
                  ${escapeHtml(item.title)}
                </p>

                <p style="margin:4px 0 0;color:#71717a;font-size:14px;">
                  ${escapeHtml(item.category || "Ecommerce")}
                </p>
              </div>
            </div>
          </td>

          <td style="padding:16px;border-bottom:1px solid #e5e7eb;text-align:center;color:#18181b;font-weight:600;">
            x${item.quantity}
          </td>

          <td style="padding:16px;border-bottom:1px solid #e5e7eb;text-align:right;color:#166534;font-weight:700;">
            ${formatCurrency(item.price * item.quantity)}
          </td>
        </tr>
      `
    )
    .join("");
}

function buildTicketHtml({
  title,
  badge,
  intro,
  footerText,
  orderId,
  items,
  totals,
  customer,
}: {
  title: string;
  badge: string;
  intro: string;
  footerText: string;
  orderId: string;
  items: CheckoutPayload["items"];
  totals: CheckoutPayload["totals"];
  customer: CheckoutPayload["customer"];
}) {
  const customerName = `${customer.nombre} ${customer.apellido}`.trim();
  const itemsHtml = buildItemsHtml(items);

  return `
    <div style="
      margin:0;
      padding:40px 20px;
      background:#f0fdf4;
      font-family:Arial,sans-serif;
    ">
      <div style="
        max-width:720px;
        margin:0 auto;
        background:#ffffff;
        border-radius:32px;
        overflow:hidden;
        border:1px solid #dcfce7;
        box-shadow:0 20px 60px rgba(0,0,0,0.08);
      ">
        
        <!-- HEADER -->
        <div style="
          background:linear-gradient(135deg,#16a34a,#10b981);
          padding:40px 32px;
          color:white;
        ">
          <div style="
            display:inline-block;
            background:rgba(255,255,255,0.16);
            padding:10px 18px;
            border-radius:999px;
            font-size:12px;
            font-weight:700;
            margin-bottom:18px;
          ">
            ${escapeHtml(badge)}
          </div>

          <h1 style="
            margin:0 0 12px;
            font-size:36px;
            line-height:1.1;
            font-weight:800;
          ">
            ${escapeHtml(title)}
          </h1>

          <p style="
            margin:0;
            color:rgba(255,255,255,0.9);
            font-size:16px;
            line-height:1.7;
          ">
            ${escapeHtml(intro)}
          </p>
        </div>

        <!-- CONTENT -->
        <div style="padding:32px;">
          
          <!-- ORDER INFO -->
          <div style="
            background:#f0fdf4;
            border:1px solid #dcfce7;
            border-radius:24px;
            padding:24px;
            margin-bottom:28px;
          ">
            <table width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td>
                  <p style="
                    margin:0 0 8px;
                    font-size:13px;
                    color:#166534;
                    font-weight:700;
                    text-transform:uppercase;
                  ">
                    ID de Orden
                  </p>

                  <p style="
                    margin:0;
                    font-size:20px;
                    color:#18181b;
                    font-weight:800;
                  ">
                    ${escapeHtml(orderId)}
                  </p>
                </td>

                <td align="right">
                  <p style="
                    margin:0 0 8px;
                    font-size:13px;
                    color:#166534;
                    font-weight:700;
                    text-transform:uppercase;
                  ">
                    Total Pagado
                  </p>

                  <p style="
                    margin:0;
                    font-size:28px;
                    color:#16a34a;
                    font-weight:900;
                  ">
                    ${formatCurrency(totals.total)}
                  </p>
                </td>
              </tr>
            </table>
          </div>

          <!-- CUSTOMER -->
          <div style="margin-bottom:32px;">
            <h2 style="
              margin:0 0 18px;
              font-size:22px;
              color:#18181b;
            ">
              Información del cliente
            </h2>

            <div style="
              background:#fafafa;
              border-radius:24px;
              padding:24px;
              border:1px solid #e5e7eb;
            ">
              <p style="margin:0 0 10px;color:#18181b;">
                <strong>Nombre:</strong> ${escapeHtml(customerName)}
              </p>

              <p style="margin:0 0 10px;color:#18181b;">
                <strong>Email:</strong> ${escapeHtml(customer.email)}
              </p>

              <p style="margin:0 0 10px;color:#18181b;">
                <strong>Teléfono:</strong> ${escapeHtml(customer.telefono)}
              </p>

              <p style="margin:0;color:#18181b;line-height:1.7;">
                <strong>Dirección:</strong>
                ${escapeHtml(customer.direccion)}
                ${customer.direccion2 ? `, ${escapeHtml(customer.direccion2)}` : ""},
                ${escapeHtml(customer.ciudad)},
                ${escapeHtml(customer.estado)},
                ${escapeHtml(customer.cp)},
                ${escapeHtml(customer.pais)}
              </p>
            </div>
          </div>

          <!-- PRODUCTS -->
          <div style="margin-bottom:32px;">
            <h2 style="
              margin:0 0 18px;
              font-size:22px;
              color:#18181b;
            ">
              Resumen de productos
            </h2>

            <div style="
              border:1px solid #e5e7eb;
              border-radius:24px;
              overflow:hidden;
            ">
              <table width="100%" cellspacing="0" cellpadding="0">
                ${itemsHtml}
              </table>
            </div>
          </div>

          <!-- TOTALS -->
          <div style="
            background:#18181b;
            border-radius:28px;
            padding:28px;
            color:white;
          ">
            <table width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td style="padding-bottom:12px;color:#d4d4d8;">
                  Subtotal
                </td>

                <td align="right" style="
                  padding-bottom:12px;
                  color:white;
                  font-weight:700;
                ">
                  ${formatCurrency(totals.subtotal)}
                </td>
              </tr>

              <tr>
                <td style="padding-bottom:12px;color:#d4d4d8;">
                  IVA
                </td>

                <td align="right" style="
                  padding-bottom:12px;
                  color:white;
                  font-weight:700;
                ">
                  ${formatCurrency(totals.iva)}
                </td>
              </tr>

              <tr>
                <td style="
                  padding-top:18px;
                  border-top:1px solid rgba(255,255,255,0.1);
                  font-size:18px;
                  font-weight:800;
                ">
                  Total Pagado
                </td>

                <td align="right" style="
                  padding-top:18px;
                  border-top:1px solid rgba(255,255,255,0.1);
                  font-size:28px;
                  font-weight:900;
                  color:#4ade80;
                ">
                  ${formatCurrency(totals.total)}
                </td>
              </tr>
            </table>
          </div>

          <div style="
            padding:18px 0 0;
            color:#374151;
            font-size:14px;
            line-height:1.8;
          ">
            ${escapeHtml(footerText)}
          </div>

          <!-- FOOTER LOGO -->
          <div style="
            padding-top:32px;
            text-align:center;
          ">
            <p style="
              margin:0 0 10px;
              color:#18181b;
              font-size:16px;
              font-weight:700;
            ">
              ${escapeHtml(SITE_NAME)}
            </p>

            <p style="
              margin:0;
              color:#71717a;
              font-size:14px;
              line-height:1.7;
            ">
              Gracias por confiar en nosotros para impulsar tu ecommerce.
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
    const body = (await req.json()) as CheckoutPayload;

    const { orderId, items, totals, customer, payment } = body;

    if (!orderId || !items?.length || !totals || !customer?.email) {
      return NextResponse.json(
        {
          success: false,
          error: "Faltan datos obligatorios para generar el ticket.",
        },
        { status: 400 }
      );
    }

    const fromEmail = `${SITE_NAME} <${BUSINESS_EMAIL}>`;

    const customerHtml = buildTicketHtml({
      title: "Tu compra fue confirmada",
      badge: "Pago confirmado",
      intro:
        "Gracias por tu compra. Tu pago fue procesado correctamente y aquí tienes el ticket con el resumen completo.",
      footerText:
        "Si necesitas ayuda con tu pedido, responde a este correo y con gusto te apoyaremos.",
      orderId,
      items,
      totals,
      customer,
    });

    const businessHtml = buildTicketHtml({
      title: "Nueva venta recibida",
      badge: "Nueva orden",
      intro:
        "Se registró un pago correctamente procesado. A continuación tienes el ticket con el detalle completo de la compra.",
      footerText:
        "Revisa la información del cliente y la orden para dar seguimiento interno o preparar la entrega del servicio.",
      orderId,
      items,
      totals,
      customer,
    });

    const [customerResult, businessResult] = await Promise.allSettled([
      resend.emails.send({
        from: fromEmail,
        to: customer.email,
        subject: `Ticket de compra - ${orderId}`,
        html: customerHtml,
        replyTo: BUSINESS_EMAIL,
      }),
      resend.emails.send({
        from: fromEmail,
        to: BUSINESS_EMAIL,
        subject: `Nueva venta recibida - ${orderId}`,
        html: businessHtml,
        replyTo: customer.email,
      }),
    ]);

    const customerOk = customerResult.status === "fulfilled";
    const businessOk = businessResult.status === "fulfilled";

    if (!customerOk || !businessOk) {
      return NextResponse.json(
        {
          success: false,
          error: "No se pudieron enviar todos los correos.",
          customerSent: customerOk,
          businessSent: businessOk,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Ticket enviado correctamente.",
      orderId,
      paymentGateway: payment?.gateway ?? "Octano",
    });
  } catch (error) {
    console.error("Checkout email error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "No se pudo enviar el ticket.",
      },
      { status: 500 }
    );
  }
}