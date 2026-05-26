"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function LegalEs() {
  return (
    <div className="legal-container">
      <style dangerouslySetInnerHTML={{
        __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
        .legal-container section { margin-bottom: 3rem; }
      `}} />

      <section>
        <h1>Términos y Condiciones</h1>

        <p>
          <em>
            Estos términos regulan toda relación entre
            <strong>SPOTLIGHT SALES, S.A. DE C.V.</strong>
            (en adelante la “Empresa”) y cualquier persona que use su sitio,
            consulte sus servicios o contrate alguno de sus planes. El acceso al
            sitio, el envío del formulario de contacto y el pago de cualquier
            servicio implican la aceptación íntegra de lo aquí descrito. Las
            proposiciones que siguen están ordenadas por su peso en la relación: las
            primeras son las más fundamentales; las últimas, las más específicas.
          </em>
        </p>

        <h2>1.- Quiénes somos y qué ofrecemos.</h2>

        <p>
          <strong>SPOTLIGHT SALES, S.A. DE C.V.</strong>
          es una agencia de marketing especializada en ecommerce, enfocada en
          diseñar, analizar y optimizar tiendas en línea para mejorar su desempeño
          comercial.
        </p>

        <p><strong>RFC:</strong> SSA190502GK8</p>

        <p>
          <strong>Domicilio:</strong>
          Av. Chapultepec N° 480, Piso 9, Dep. 901, Col. Roma Norte, C.P. 06700,
          Alcaldía Cuauhtémoc, Ciudad de México.
        </p>

        <p><strong>Teléfono:</strong> +52 1 55 2230 1576.</p>

        <p>
          <strong>Correo:</strong>
          webmaster@norexiodigital.com
        </p>

        <p>
          El catálogo de servicios y planes está organizado en diferentes secciones
          (por ejemplo, servicios express, estrategias de escalamiento,
          implementaciones avanzadas, ingeniería de crecimiento digital y soluciones
          personalizadas), y se encuentra descrito a detalle en el sitio web oficial
          de <strong>SPOTLIGHT SALES, S.A. DE C.V.</strong> en el apartado de
          servicios. Las características, alcances, entregables y precios de cada
          plan se rigen por lo publicado en dicho apartado al momento de la
          contratación.
        </p>

        <h2>2. Alcance de los servicios y entregables</h2>

        <p>
          Cada plan incluye únicamente los entregables descritos en su ficha en el
          sitio web y/o en la propuesta o confirmación enviada al cliente: análisis,
          diagnósticos, reportes de recomendaciones, optimizaciones de páginas de
          producto, ajustes de estructura, estrategias documentadas y planes de
          acción, todos entregados en formato digital.
        </p>

        <p>
          La Empresa no garantiza resultados de ventas específicos ni porcentajes
          concretos de mejora, ya que el desempeño de un ecommerce depende de
          múltiples factores externos (mercado, competencia, implementación interna,
          presupuesto publicitario, entre otros). Sí se compromete a la calidad
          técnica y a la completitud de los entregables comprometidos conforme a la
          descripción del plan contratado.
        </p>

        <p>
          Para la Estrategia Personalizada, el proceso inicia con el formulario de
          contacto; la Empresa evalúa el ecommerce del cliente y presenta una
          propuesta a medida con alcances, entregables y precio, la cual debe ser
          aceptada antes de que exista cualquier obligación de pago.
        </p>

        <h2>3. Precios, pagos, confirmación y derecho de revocación</h2>

        <p>
          Todos los precios de los servicios se expresan en pesos mexicanos (MXN).
          Salvo que en el sitio se indique expresamente que un precio incluye IVA, se
          entenderá que el IVA se agrega conforme a la tasa vigente al momento de la
          contratación. La información vigente sobre precios y su tratamiento de
          impuestos se muestra en la ficha de cada servicio en el sitio web.
        </p>

        <p>
          Los pagos se procesan a través de una pasarela de pago segura. Al completar
          el pago, el cliente recibe una confirmación electrónica al correo
          registrado con, al menos: servicio adquirido, monto pagado con IVA y folio
          de transacción.
        </p>

        <p>
          La Empresa emitirá el CFDI correspondiente. Para facturar a persona moral o
          persona física con actividad empresarial, el cliente debe proporcionar sus
          datos fiscales completos antes de que se emita el comprobante.
        </p>

        <p>
          Conforme al artículo 56 de la Ley Federal de Protección al Consumidor, en
          las contrataciones realizadas en línea el cliente puede revocar su
          consentimiento dentro de los cinco días hábiles siguientes a la transacción,
          siempre que el servicio no haya iniciado. Para ejercer este derecho, el
          cliente debe enviar un aviso escrito a correo indicando su nombre, el
          servicio contratado y el folio de la transacción dentro del plazo señalado.
        </p>

        <h2>4. Uso del sitio y propiedad intelectual</h2>

        <p>
          El sitio de la Empresa y todos los contenidos disponibles en él —textos,
          metodologías, estructura de los planes, nombre comercial, logotipo,
          elementos gráficos y software— son propiedad de la Empresa o de sus
          licenciantes y están protegidos por la Ley Federal del Derecho de Autor y
          demás legislación aplicable.
        </p>

        <p>Queda prohibido:</p>

        <ul>
          <li>
            Usar el sitio para actividades ilegales o fraudulentas.
          </li>
          <li>
            Reproducir, copiar, distribuir o explotar su contenido sin autorización
            escrita de la Empresa.
          </li>
          <li>
            Usar de forma no autorizada la marca, nombre comercial o logotipos de la
            Empresa.
          </li>
          <li>
            Intentar acceder sin autorización a sistemas, bases de datos o
            infraestructura tecnológica interna.
          </li>
        </ul>

        <p>
          Los entregables proporcionados al cliente se conceden para su uso interno
          exclusivo dentro de su ecommerce o negocio. No pueden ser revendidos,
          sublicenciados ni redistribuidos a terceros como servicios propios sin
          autorización expresa y por escrito.
        </p>

        <h2>5. Suspensión, cancelación y límites de responsabilidad</h2>

        <p>
          La Empresa puede suspender o cancelar un servicio en curso cuando detecte
          información falsa proporcionada por el cliente, incumplimiento de pagos,
          uso indebido del sitio o de los entregables, o cualquier conducta
          incompatible con la naturaleza del servicio. En tales casos, se aplicará la
          política de reembolsos y cancelaciones vigente publicada en el sitio de la
          Empresa, según el estado de avance del proyecto.
        </p>

        <p>
          La responsabilidad máxima de la Empresa frente a cualquier reclamación
          derivada de un servicio específico no excederá, en ningún caso, el monto
          efectivamente pagado por dicho servicio, en la medida permitida por la
          legislación mexicana aplicable.
        </p>

        <h2>6. Modificaciones a estos términos</h2>

        <p>
          La Empresa se reserva el derecho de modificar estos Términos y
          Condiciones. Cualquier actualización será publicada en el sitio web con la
          fecha de entrada en vigor de la nueva versión.
        </p>

        <p>
          Las modificaciones aplicarán únicamente hacia el futuro y no afectarán
          contratos o servicios ya formalizados bajo versiones anteriores; esos se
          mantendrán regidos por los términos vigentes al momento de su contratación.
        </p>

        <h2>7. Legislación aplicable y jurisdicción</h2>

        <p>
          Estos Términos y Condiciones se rigen por la legislación mexicana vigente,
          incluyendo la Ley Federal de Protección al Consumidor, el Código Civil
          Federal y el Código de Comercio.
        </p>

        <p>
          Cualquier controversia derivada de la interpretación o cumplimiento de
          estos términos se someterá a la jurisdicción de los tribunales competentes
          de la Ciudad de México, renunciando expresamente las partes a cualquier
          otro fuero que pudiera corresponderles por razón de su domicilio presente o
          futuro.
        </p>

        <p>
          <strong>Última actualización:</strong> Mayo de 2026
        </p>
      </section>
    </div>
  );
}

function LegalEn() {
  return (
    <div className="legal-container">
      <style dangerouslySetInnerHTML={{
        __html: `
        .legal-container {
          color: #1a1a1a;
          line-height: 1.6;
          font-family: sans-serif;
        }
        .legal-container h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 2rem; border-bottom: 2px solid #eee; padding-bottom: 1rem; }
        .legal-container h2 { font-size: 1.5rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #3048ab; }
        .legal-container h3 { font-size: 1.1rem; font-weight: 700; margin-top: 1.5rem; }
        .legal-container p { margin-bottom: 1.2rem; text-align: justify; }
        .legal-container ul { margin-bottom: 1.2rem; padding-left: 1.5rem; list-style-type: disc; }
        .legal-container li { margin-bottom: 0.5rem; }
      `}} />

      <section>
        <h1>Terms and Conditions</h1>

        <p>
          <em>
            These terms govern every relationship between
            <strong>SPOTLIGHT SALES, S.A. DE C.V.</strong>
            (hereinafter the “Company”) and any person who uses its website,
            consults its services, or purchases any of its plans. Access to the
            website, submission of the contact form, and payment for any service
            imply full acceptance of everything described herein. The provisions
            below are ordered according to their weight in the relationship: the
            first are the most fundamental; the last, the most specific.
          </em>
        </p>

        <h2>1.- Who We Are and What We Offer.</h2>

        <p>
          <strong>SPOTLIGHT SALES, S.A. DE C.V.</strong>
          is a marketing agency specialized in ecommerce, focused on designing,
          analyzing, and optimizing online stores to improve their commercial
          performance.
        </p>

        <p><strong>Tax ID:</strong> SSA190502GK8</p>

        <p>
          <strong>Address:</strong>
          Av. Chapultepec No. 480, Floor 9, Unit 901, Col. Roma Norte, ZIP Code
          06700, Cuauhtémoc Borough, Mexico City.
        </p>

        <p><strong>Phone:</strong> +52 1 55 2230 1576.</p>

        <p>
          <strong>Email:</strong>
          webmaster@norexiodigital.com
        </p>

        <p>
          The catalog of services and plans is organized into different sections
          (for example, express services, scaling strategies, advanced
          implementations, digital growth engineering, and customized solutions),
          and is described in detail on the official website of
          <strong>SPOTLIGHT SALES, S.A. DE C.V.</strong>
          in the services section. The characteristics, scope, deliverables, and
          prices of each plan are governed by what is published in that section at
          the time of contracting.
        </p>

        <h2>2. Scope of Services and Deliverables</h2>

        <p>
          Each plan includes only the deliverables described in its listing on the
          website and/or in the proposal or confirmation sent to the client:
          analyses, diagnostics, recommendation reports, product page
          optimizations, structural adjustments, documented strategies, and action
          plans, all delivered in digital format.
        </p>

        <p>
          The Company does not guarantee specific sales results or concrete
          percentages of improvement, since ecommerce performance depends on
          multiple external factors (market conditions, competition, internal
          implementation, advertising budget, among others). However, it does
          commit to the technical quality and completeness of the deliverables
          agreed upon according to the description of the contracted plan.
        </p>

        <p>
          For the Customized Strategy, the process begins with the contact form;
          the Company evaluates the client’s ecommerce business and presents a
          tailored proposal including scope, deliverables, and price, which must
          be accepted before any payment obligation exists.
        </p>

        <h2>3. Prices, Payments, Confirmation, and Right of Revocation</h2>

        <p>
          All service prices are expressed in Mexican pesos (MXN). Unless the
          website expressly states that a price includes VAT, it shall be
          understood that VAT is added according to the rate in force at the time
          of contracting. Current information regarding prices and tax treatment
          is shown in the listing of each service on the website.
        </p>

        <p>
          Payments are processed through a secure payment gateway. Upon completing
          payment, the client receives an electronic confirmation at the registered
          email address containing at least: the purchased service, the amount paid
          including VAT, and the transaction reference number.
        </p>

        <p>
          The Company will issue the corresponding CFDI tax invoice. To invoice a
          legal entity or an individual with business activity, the client must
          provide complete tax information before the invoice is issued.
        </p>

        <p>
          Pursuant to Article 56 of the Federal Consumer Protection Law, in online
          transactions the client may revoke their consent within five business
          days following the transaction, provided that the service has not yet
          begun. To exercise this right, the client must send written notice by
          email indicating their name, the contracted service, and the transaction
          reference number within the indicated period.
        </p>

        <h2>4. Website Use and Intellectual Property</h2>

        <p>
          The Company’s website and all content available on it — texts,
          methodologies, plan structures, trade name, logo, graphic elements, and
          software — are the property of the Company or its licensors and are
          protected by the Federal Copyright Law and other applicable legislation.
        </p>

        <p>It is prohibited to:</p>

        <ul>
          <li>
            Use the website for illegal or fraudulent activities.
          </li>

          <li>
            Reproduce, copy, distribute, or exploit its content without written
            authorization from the Company.
          </li>

          <li>
            Use the Company’s trademark, trade name, or logos without authorization.
          </li>

          <li>
            Attempt unauthorized access to systems, databases, or internal
            technological infrastructure.
          </li>
        </ul>

        <p>
          The deliverables provided to the client are granted for exclusive
          internal use within their ecommerce business or company. They may not be
          resold, sublicensed, or redistributed to third parties as proprietary
          services without express written authorization.
        </p>

        <h2>5. Suspension, Cancellation, and Limitation of Liability</h2>

        <p>
          The Company may suspend or cancel an ongoing service when it detects
          false information provided by the client, payment defaults, misuse of
          the website or deliverables, or any conduct incompatible with the nature
          of the service. In such cases, the refund and cancellation policy
          published on the Company’s website shall apply according to the progress
          status of the project.
        </p>

        <p>
          The Company’s maximum liability for any claim arising from a specific
          service shall not exceed, under any circumstances, the amount actually
          paid for such service, to the extent permitted by applicable Mexican law.
        </p>

        <h2>6. Modifications to These Terms</h2>

        <p>
          The Company reserves the right to modify these Terms and Conditions. Any
          update will be published on the website together with the effective date
          of the new version.
        </p>

        <p>
          Modifications shall apply only prospectively and will not affect
          contracts or services already formalized under previous versions; such
          contracts and services shall remain governed by the terms in effect at
          the time of contracting.
        </p>

        <h2>7. Applicable Law and Jurisdiction</h2>

        <p>
          These Terms and Conditions are governed by current Mexican legislation,
          including the Federal Consumer Protection Law, the Federal Civil Code,
          and the Commercial Code.
        </p>

        <p>
          Any dispute arising from the interpretation or enforcement of these
          terms shall be submitted to the jurisdiction of the competent courts of
          Mexico City, with the parties expressly waiving any other jurisdiction
          that may correspond to them due to their present or future domicile.
        </p>

        <p>
          <strong>Last update:</strong> May 2026
        </p>
      </section>
    </div>
  );
}

export default function LegalPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
        {locale === "es" ? <LegalEs /> : <LegalEn />}
      </main>
      <Footer />
    </div>
  );
}