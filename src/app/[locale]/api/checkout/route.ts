import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      orderId,
      items,
      totals,
      customer,
      payment,
    } = body;

    const customerName = `${customer.nombre} ${customer.apellido}`;

    const itemsHtml = items
      .map(
        (item: any) => `
          <tr>
            <td style="padding:16px;border-bottom:1px solid #e5e7eb;">
              <div style="display:flex;align-items:center;gap:12px;">
                <img 
                  src="${item.image}" 
                  alt="${item.title}" 
                  width="64" 
                  height="64"
                  style="border-radius:16px;object-fit:cover;"
                />

                <div>
                  <p style="margin:0;font-size:16px;font-weight:700;color:#18181b;">
                    ${item.title}
                  </p>

                  <p style="margin:4px 0 0;color:#71717a;font-size:14px;">
                    ${item.category}
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

    const html = `
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
              Pago confirmado
            </div>

            <h1 style="
              margin:0 0 12px;
              font-size:36px;
              line-height:1.1;
              font-weight:800;
            ">
              Gracias por tu compra
            </h1>

            <p style="
              margin:0;
              color:rgba(255,255,255,0.9);
              font-size:16px;
              line-height:1.7;
            ">
              Tu pago fue procesado correctamente mediante Octano Payments.
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
                      ${orderId}
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
                  <strong>Nombre:</strong> ${customerName}
                </p>

                <p style="margin:0 0 10px;color:#18181b;">
                  <strong>Email:</strong> ${customer.email}
                </p>

                <p style="margin:0 0 10px;color:#18181b;">
                  <strong>Teléfono:</strong> ${customer.telefono}
                </p>

                <p style="margin:0;color:#18181b;line-height:1.7;">
                  <strong>Dirección:</strong>
                  ${customer.direccion}
                  ${
                    customer.direccion2
                      ? `, ${customer.direccion2}`
                      : ""
                  },
                  ${customer.ciudad},
                  ${customer.estado},
                  ${customer.cp},
                  ${customer.pais}
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

            <!-- FOOTER -->
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
                Norexio Digital
              </p>

              <p style="
                margin:0;
                color:#71717a;
                font-size:14px;
                line-height:1.7;
              ">
                Gracias por confiar en nosotros para impulsar tu ecommerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Norexio Digital <webmaster@norexiodigital.com>",
      to: [
        customer.email,
        "webmaster@norexiodigital.com",
      ],
      subject: `Ticket de compra - ${orderId}`,
      html,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Checkout email error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "No se pudo enviar el ticket.",
      },
      {
        status: 500,
      }
    );
  }
}