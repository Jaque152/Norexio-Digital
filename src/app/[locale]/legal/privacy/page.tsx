import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLocale } from "next-intl";

function PrivacyPageSpanish() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-32 pb-24 text-stone-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-[2rem] border border-stone-200 shadow-sm">

            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-8">
              Aviso de Privacidad
            </h1>

            <div className="space-y-6 text-stone-600 leading-relaxed font-medium">
              <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-stone-200 text-sm">
                <p className="font-bold text-stone-900 mb-2">SEVEN MARKETING DIGITAL, S.A. DE C.V. • Norexio Digital MKT</p>
                <p>Portal: Norexio Digitalmkt.com • Línea de Atención: contacto@Norexio Digitalmkt.com</p>
                <p>Domicilio: Avenida Insurgentes Sur, N°933, INT 102 Piso 1, Colonia Nápoles, Alcaldía Benito Juárez, C.P. 03810, Ciudad de México.</p>
              </div>

              <p>En SEVEN MARKETING DIGITAL, S.A. DE C.V. (en adelante “Norexio Digital MKT”), asumimos un compromiso serio y permanente con la protección y el manejo responsable de los datos personales que recabamos de nuestros clientes, usuarios y visitantes del sitio web Norexio Digitalmkt.com. {/* [cite: 186, 187] */}</p>
              <p>Este Aviso de Privacidad se emite en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normatividad aplicable, y tiene como objetivo informarle, de forma clara y detallada, sobre la manera en que recabamos, utilizamos, almacenamos, transferimos y protegemos su información personal, así como los derechos que puede ejercer respecto de la misma. {/* [cite: 188] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">1. Datos personales recabados</h2>
              <p>La información que Norexio Digital MKT solicita es únicamente la necesaria para poder prestar sus servicios, procesar pagos, atender solicitudes y cumplir con las obligaciones contractuales y legales derivadas de la relación con el usuario. {/* [cite: 190] */}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre completo del titular. {/* [cite: 192] */}</li>
                <li>Correo electrónico de contacto. {/* [cite: 193] */}</li>
                <li>Número telefónico. {/* [cite: 194] */}</li>
                <li>Información derivada de interacciones en línea, como dirección IP, tipo de navegador y sistema operativo, recopilada de forma automática mediante tecnologías de rastreo como cookies. {/* [cite: 195] */}</li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">2. Finalidades del tratamiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Procesar, confirmar y dar seguimiento a solicitudes de servicios adquiridos a través de la página web. {/* [cite: 198] */}</li>
                <li>Establecer y mantener comunicación para la atención a consultas, quejas, aclaraciones o soporte técnico. {/* [cite: 199] */}</li>
                <li>Cumplir con obligaciones contractuales, fiscales y legales derivadas de la prestación de servicios. {/* [cite: 200] */}</li>
                <li>Generar registros internos para control operativo, estadístico y de calidad. {/* [cite: 201] */}</li>
                <li>Implementar mejoras en el sitio web y en la experiencia del usuario, a partir de análisis de uso y navegación. {/* [cite: 202] */}</li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">3. Transferencia de datos personales</h2>
              <p>Norexio Digital MKT podrá compartir los datos personales del titular únicamente en los siguientes casos: {/* [cite: 204] */}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Con proveedores de servicios tecnológicos que faciliten el procesamiento de pagos, alojamiento de datos, mensajería y soporte técnico, siempre bajo acuerdos de confidencialidad. {/* [cite: 205] */}</li>
                <li>Con autoridades administrativas o judiciales que, en el ejercicio de sus funciones, soliciten la información de conformidad con la ley. {/* [cite: 206] */}</li>
                <li>Con empresas relacionadas o filiales para fines administrativos y operativos vinculados con la prestación de los servicios contratados. {/* [cite: 207] */}</li>
              </ul>
              <p>En ningún caso Norexio Digital MKT venderá, alquilará o comercializará los datos personales a terceros ajenos a las finalidades aquí descritas. {/* [cite: 208] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">4. Derechos ARCO y medios para ejercerlos</h2>
              <p>El titular podrá ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO), así como limitar el uso o revocar el consentimiento previamente otorgado. Para ello, deberá enviar una solicitud a contacto@Norexio Digitalmkt.com, la cual deberá contener: {/* [cite: 210, 211] */}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre completo del titular y un medio para recibir respuesta. {/* [cite: 212] */}</li>
                <li>Descripción clara y precisa de los datos sobre los que se pretende ejercer derechos. {/* [cite: 213] */}</li>
                <li>Copia de identificación oficial vigente o documento que acredite la representación legal. {/* [cite: 214] */}</li>
              </ul>
              <p>Norexio Digital MKT responderá a la solicitud en un plazo máximo de 20 días hábiles a partir de su recepción y notificará al solicitante a través del medio indicado en la misma. {/* [cite: 215] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">5. Limitación del uso y divulgación</h2>
              <p>Si el titular desea limitar el uso o divulgación de sus datos personales para fines no esenciales, podrá manifestarlo expresamente en la solicitud de derechos ARCO o enviando un correo electrónico con la indicación correspondiente. {/* [cite: 217] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">6. Uso de cookies y tecnologías similares</h2>
              <p>El sitio web de Norexio Digital MKT puede utilizar cookies y tecnologías similares para optimizar el funcionamiento del sitio, recordar preferencias del usuario y obtener métricas de navegación. El usuario puede deshabilitar dichas tecnologías desde la configuración de su navegador, aunque esto podría afectar el funcionamiento de ciertas funciones. {/* [cite: 219, 220] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">7. Medidas de seguridad</h2>
              <p>Norexio Digital MKT implementa medidas técnicas, administrativas y físicas razonables para proteger los datos personales contra pérdida, uso indebido, acceso no autorizado, alteración o destrucción. No obstante, el titular reconoce que ninguna transmisión de datos por Internet es completamente segura y que Norexio Digital MKT no puede garantizar la invulnerabilidad absoluta de sus sistemas. {/* [cite: 222, 223] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">8. Cambios al Aviso de Privacidad</h2>
              <p>Norexio Digital MKT podrá modificar en cualquier momento el presente Aviso de Privacidad para atender cambios legislativos, políticas internas o nuevos requerimientos para la prestación de servicios. Las modificaciones se publicarán en el sitio web y entrarán en vigor a partir de su publicación. {/* [cite: 225, 226] */}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function PrivacyPageEnglish() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-32 pb-24 text-stone-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-[2rem] border border-stone-200 shadow-sm">

            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-8">
              Privacy Notice
            </h1>

            <div className="space-y-6 text-stone-600 leading-relaxed font-medium">
              <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-stone-200 text-sm">
                <p className="font-bold text-stone-900 mb-2">
                  SEVEN MARKETING DIGITAL, S.A. DE C.V. • Norexio Digital MKT
                </p>

                <p>
                  Website: NorexioDigitalmkt.com • Support Line: contacto@NorexioDigitalmkt.com
                </p>

                <p>
                  Address: Avenida Insurgentes Sur, No. 933, INT 102 Floor 1,
                  Colonia Nápoles, Benito Juárez Borough, ZIP Code 03810,
                  Mexico City.
                </p>
              </div>

              <p>
                At SEVEN MARKETING DIGITAL, S.A. DE C.V. (hereinafter “Norexio Digital MKT”), we assume a serious and ongoing commitment to the protection and responsible handling of the personal data we collect from our clients, users, and visitors of the website NorexioDigitalmkt.com. {/* [cite: 186, 187] */}
              </p>

              <p>
                This Privacy Notice is issued in compliance with the Federal Law on the Protection of Personal Data Held by Private Parties and other applicable regulations, and aims to inform you, clearly and in detail, about the manner in which we collect, use, store, transfer, and protect your personal information, as well as the rights you may exercise regarding such information. {/* [cite: 188] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                1. Personal Data Collected
              </h2>

              <p>
                The information requested by Norexio Digital MKT is only that which is necessary to provide its services, process payments, respond to requests, and comply with contractual and legal obligations arising from the relationship with the user. {/* [cite: 190] */}
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Full name of the data subject. {/* [cite: 192] */}</li>

                <li>Contact email address. {/* [cite: 193] */}</li>

                <li>Telephone number. {/* [cite: 194] */}</li>

                <li>
                  Information derived from online interactions, such as IP address, browser type, and operating system, automatically collected through tracking technologies such as cookies. {/* [cite: 195] */}
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                2. Purposes of Data Processing
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  To process, confirm, and follow up on service requests purchased through the website. {/* [cite: 198] */}
                </li>

                <li>
                  To establish and maintain communication for responding to inquiries, complaints, clarifications, or technical support. {/* [cite: 199] */}
                </li>

                <li>
                  To comply with contractual, tax, and legal obligations arising from the provision of services. {/* [cite: 200] */}
                </li>

                <li>
                  To generate internal records for operational, statistical, and quality control purposes. {/* [cite: 201] */}
                </li>

                <li>
                  To implement improvements to the website and user experience based on usage and navigation analysis. {/* [cite: 202] */}
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                3. Transfer of Personal Data
              </h2>

              <p>
                Norexio Digital MKT may share the data subject’s personal data only in the following cases: {/* [cite: 204] */}
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  With technology service providers that facilitate payment processing, data hosting, messaging, and technical support, always under confidentiality agreements. {/* [cite: 205] */}
                </li>

                <li>
                  With administrative or judicial authorities that, in the exercise of their functions, request the information in accordance with the law. {/* [cite: 206] */}
                </li>

                <li>
                  With related companies or affiliates for administrative and operational purposes linked to the provision of contracted services. {/* [cite: 207] */}
                </li>
              </ul>

              <p>
                Under no circumstances will Norexio Digital MKT sell, lease, or commercialize personal data to third parties unrelated to the purposes described herein. {/* [cite: 208] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                4. ARCO Rights and Means to Exercise Them
              </h2>

              <p>
                The data subject may exercise at any time their rights of Access, Rectification, Cancellation, or Opposition (ARCO), as well as limit the use or revoke the consent previously granted. To do so, they must send a request to contacto@NorexioDigitalmkt.com, which must include: {/* [cite: 210, 211] */}
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Full name of the data subject and a means to receive a response. {/* [cite: 212] */}
                </li>

                <li>
                  Clear and precise description of the data for which rights are intended to be exercised. {/* [cite: 213] */}
                </li>

                <li>
                  Copy of a valid official identification or document proving legal representation. {/* [cite: 214] */}
                </li>
              </ul>

              <p>
                Norexio Digital MKT will respond to the request within a maximum period of 20 business days from its receipt and will notify the applicant through the means indicated therein. {/* [cite: 215] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                5. Limitation on Use and Disclosure
              </h2>

              <p>
                If the data subject wishes to limit the use or disclosure of their personal data for non-essential purposes, they may expressly state so in the ARCO rights request or by sending an email with the corresponding indication. {/* [cite: 217] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                6. Use of Cookies and Similar Technologies
              </h2>

              <p>
                Norexio Digital MKT’s website may use cookies and similar technologies to optimize website functionality, remember user preferences, and obtain navigation metrics. The user may disable such technologies through their browser settings, although this could affect the operation of certain features. {/* [cite: 219, 220] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                7. Security Measures
              </h2>

              <p>
                Norexio Digital MKT implements reasonable technical, administrative, and physical measures to protect personal data against loss, misuse, unauthorized access, alteration, or destruction. However, the data subject acknowledges that no data transmission over the Internet is completely secure and that Norexio Digital MKT cannot guarantee the absolute invulnerability of its systems. {/* [cite: 222, 223] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                8. Changes to the Privacy Notice
              </h2>

              <p>
                Norexio Digital MKT may modify this Privacy Notice at any time to address legislative changes, internal policies, or new requirements for the provision of services. The modifications will be published on the website and shall enter into force upon publication. {/* [cite: 225, 226] */}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function LegalPage() {
  const locale = useLocale();

  return locale === "es" ? <PrivacyPageSpanish /> : <PrivacyPageEnglish />
}