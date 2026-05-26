import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLocale } from "next-intl";

function TermsConditionsPageSpanish() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-32 pb-24 text-stone-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-[2rem] border border-stone-200 shadow-sm">

            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-8">
              Términos y Condiciones
            </h1>

            <div className="space-y-6 text-stone-600 leading-relaxed font-medium">
              <p>Los presentes Términos y Condiciones establecen las normas que regulan el acceso, uso y contratación de servicios a través de Norexio Digitalmkt.com (en lo sucesivo, “Norexio Digital MKT”), propiedad de SEVEN MARKETING DIGITAL, S.A. DE C.V. (en adelante, “la Empresa”), con domicilio en Avenida Insurgentes Sur, N°933, INT 102 Piso 1, Colonia Nápoles, Alcaldía Benito Juárez, C.P. 03810, Ciudad de México. {/* [cite: 259, 260, 261] */}</p>
              <p>Dichas disposiciones son aplicables a cualquier persona que acceda, navegue y/o contrate los servicios ofrecidos en Norexio Digital MKT (en adelante, “el Usuario”). El acceso, uso y/o adquisición de servicios implica la lectura previa, comprensión y aceptación expresa y sin reservas del contenido íntegro de este documento. {/* [cite: 261, 262] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">I. Objeto</h2>
              <p>El presente documento tiene por finalidad regular las condiciones bajo las cuales la Empresa pone a disposición del Usuario Norexio Digital MKT y los servicios que en él se ofrecen. El acceso al sitio no implica, por sí mismo, la existencia de una relación contractual entre la Empresa y el Usuario, salvo que este último formalice la contratación de un servicio. {/* [cite: 265, 266] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">II. Condiciones de acceso</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>El Usuario declara y garantiza que cuenta con la capacidad legal suficiente para contratar conforme a las leyes mexicanas. {/* [cite: 268] */}</li>
                <li>El uso del sitio por parte de menores de edad deberá realizarse bajo la supervisión de un tutor legal, quien asumirá la responsabilidad. {/* [cite: 269] */}</li>
                <li>La Empresa se reserva el derecho de negar, suspender o cancelar el acceso al sitio si detecta actividades fraudulentas o ilícitas. {/* [cite: 270] */}</li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">III. Contratación de servicios</h2>
              <p>El proceso de contratación de un servicio se considerará concluido únicamente cuando el Usuario haya completado el formulario de solicitud, realizado el pago correspondiente y recibido una confirmación de compra enviada por la Empresa al correo electrónico registrado. {/* [cite: 272] */}</p>
              <p>La Empresa se reserva el derecho de modificar, actualizar o eliminar en cualquier momento la información, características, precios y disponibilidad de los servicios ofrecidos. {/* [cite: 273] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">IV. Precios y forma de pago</h2>
              <p>Todos los precios publicados en el sitio se expresan en moneda nacional (MXN) e incluyen los impuestos aplicables, salvo que se indique lo contrario. El pago podrá efectuarse mediante el pago en línea. {/* [cite: 276, 277] */}</p>
              <p>La Empresa no almacenará datos completos de tarjetas bancarias, ya que el procesamiento se realiza a través de proveedores externos certificados que cumplen con los estándares de seguridad PCI DSS. {/* [cite: 278] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">V. Uso permitido del sitio</h2>
              <p>El Usuario se compromete a utilizar Norexio Digital MKT y todo su contenido de forma lícita. Queda estrictamente prohibido: {/* [cite: 281, 282] */}</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Alterar o modificar, total o parcialmente, Norexio Digital MKT sin la autorización de la Empresa. {/* [cite: 283] */}</li>
                <li>Introducir virus, malware o cualquier código malicioso. {/* [cite: 284] */}</li>
                <li>Utilizar los contenidos del sitio con fines comerciales no autorizados. {/* [cite: 285] */}</li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">VI. Propiedad intelectual</h2>
              <p>Todos los elementos de Norexio Digital MKT, incluyendo textos, imágenes, logotipos, código fuente y demás materiales, son propiedad exclusiva de la Empresa o de terceros licenciantes. El Usuario no adquiere derecho alguno sobre dichos elementos. {/* [cite: 287, 288] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">VII. Limitación de responsabilidad</h2>
              <p>La Empresa realizará sus mejores esfuerzos para mantener el funcionamiento continuo y seguro del sitio, pero no garantiza la ausencia de interrupciones. El Usuario acepta que el uso del sitio se realiza bajo su propia responsabilidad. {/* [cite: 290, 291] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">VIII. Cancelaciones y reembolsos</h2>
              <p>Las solicitudes de cancelación y/o reembolso se regirán por lo establecido en la Política de Reembolsos y Devoluciones disponible en Norexio Digital MKT. {/* [cite: 293] */}</p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">IX. Jurisdicción y ley aplicable</h2>
              <p>El presente documento se rige por las leyes de los Estados Unidos Mexicanos. Para la interpretación y cumplimiento de lo aquí dispuesto, las partes se someten expresamente a la jurisdicción de los tribunales competentes de la Ciudad de México. {/* [cite: 295, 296] */}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function TermsConditionsPageEnglish() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fafafa] pt-32 pb-24 text-stone-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-10 md:p-16 rounded-[2rem] border border-stone-200 shadow-sm">

            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-8">
              Terms and Conditions
            </h1>

            <div className="space-y-6 text-stone-600 leading-relaxed font-medium">
              <p>
                These Terms and Conditions establish the rules governing the access, use, and contracting of services through NorexioDigitalmkt.com (hereinafter “Norexio Digital MKT”), owned by SEVEN MARKETING DIGITAL, S.A. DE C.V. (hereinafter, “the Company”), with address at Avenida Insurgentes Sur, No. 933, INT 102 Floor 1, Colonia Nápoles, Benito Juárez Borough, ZIP Code 03810, Mexico City. {/* [cite: 259, 260, 261] */}
              </p>

              <p>
                These provisions apply to any person who accesses, browses, and/or contracts the services offered on Norexio Digital MKT (hereinafter, “the User”). Access, use, and/or acquisition of services implies prior reading, understanding, and express acceptance without reservations of the full content of this document. {/* [cite: 261, 262] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                I. Purpose
              </h2>

              <p>
                The purpose of this document is to regulate the conditions under which the Company makes Norexio Digital MKT and the services offered therein available to the User. Access to the site does not, by itself, imply the existence of a contractual relationship between the Company and the User, unless the latter formally contracts a service. {/* [cite: 265, 266] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                II. Access Conditions
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The User declares and guarantees that they have sufficient legal capacity to contract in accordance with Mexican laws. {/* [cite: 268] */}
                </li>

                <li>
                  The use of the site by minors must be carried out under the supervision of a legal guardian, who shall assume responsibility. {/* [cite: 269] */}
                </li>

                <li>
                  The Company reserves the right to deny, suspend, or cancel access to the site if fraudulent or unlawful activities are detected. {/* [cite: 270] */}
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                III. Contracting of Services
              </h2>

              <p>
                The process of contracting a service shall be considered completed only when the User has completed the request form, made the corresponding payment, and received a purchase confirmation sent by the Company to the registered email address. {/* [cite: 272] */}
              </p>

              <p>
                The Company reserves the right to modify, update, or remove at any time the information, characteristics, prices, and availability of the services offered. {/* [cite: 273] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                IV. Prices and Payment Method
              </h2>

              <p>
                All prices published on the site are expressed in national currency (MXN) and include applicable taxes, unless otherwise indicated. Payment may be made through online payment methods. {/* [cite: 276, 277] */}
              </p>

              <p>
                The Company will not store complete bank card details, since processing is carried out through certified external providers that comply with PCI DSS security standards. {/* [cite: 278] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                V. Permitted Use of the Site
              </h2>

              <p>
                The User agrees to use Norexio Digital MKT and all its content lawfully. It is strictly prohibited to: {/* [cite: 281, 282] */}
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Alter or modify, totally or partially, Norexio Digital MKT without the authorization of the Company. {/* [cite: 283] */}
                </li>

                <li>
                  Introduce viruses, malware, or any malicious code. {/* [cite: 284] */}
                </li>

                <li>
                  Use the site’s content for unauthorized commercial purposes. {/* [cite: 285] */}
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                VI. Intellectual Property
              </h2>

              <p>
                All elements of Norexio Digital MKT, including texts, images, logos, source code, and other materials, are the exclusive property of the Company or third-party licensors. The User does not acquire any rights over such elements. {/* [cite: 287, 288] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                VII. Limitation of Liability
              </h2>

              <p>
                The Company shall make its best efforts to maintain the continuous and secure operation of the site, but does not guarantee the absence of interruptions. The User accepts that the use of the site is carried out under their own responsibility. {/* [cite: 290, 291] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                VIII. Cancellations and Refunds
              </h2>

              <p>
                Requests for cancellations and/or refunds shall be governed by the provisions established in the Refunds and Returns Policy available on Norexio Digital MKT. {/* [cite: 293] */}
              </p>

              <h2 className="text-2xl font-bold text-stone-900 mt-8">
                IX. Jurisdiction and Applicable Law
              </h2>

              <p>
                This document shall be governed by the laws of the United Mexican States. For the interpretation and enforcement of the provisions herein, the parties expressly submit to the jurisdiction of the competent courts of Mexico City. {/* [cite: 295, 296] */}
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

  return locale === "es" ? <TermsConditionsPageSpanish /> : <TermsConditionsPageEnglish />
}