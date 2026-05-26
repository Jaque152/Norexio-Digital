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
        <h1>Política de Reembolsos y Cancelaciones</h1>

        <p>
          En esta política hablamos de dinero, tiempos y expectativas, no de
          conceptos abstractos. Cada proyecto que tomamos implica trabajo creativo y
          estratégico hecho a la medida, y eso influye en qué tanto podemos devolver
          cuando hay una cancelación. Para hacerlo claro, organizamos las reglas en
          tres actos que corresponden a las fases del servicio: antes de empezar,
          mientras está en marcha y cuando ya terminó; en cada una cambian los
          derechos del cliente y las condiciones de cualquier reembolso.
        </p>

        <h2>ACTO I – Antes de que empiece</h2>

        <h3>El servicio no ha iniciado – El dinero aún no tiene compromisos.</h3>

        <p>
          Si realizó un pago y no hemos confirmado el inicio del servicio ni hemos
          comenzado ningún trabajo (ningún análisis, ninguna revisión, ningún
          diagnóstico parcial), el dinero sigue siendo completamente suyo. El
          reembolso es del 100% del monto pagado, incluido IVA, procesado en un
          máximo de quince días hábiles al mismo método de pago utilizado.
        </p>

        <p>
          Conforme al artículo 56 de la Ley Federal de Protección al Consumidor, en
          contrataciones realizadas a través de medios electrónicos usted tiene
          derecho a revocar su consentimiento dentro de los cinco días hábiles
          siguientes a la fecha de la transacción, siempre que el servicio no haya
          iniciado. Para ejercer este derecho, escríbanos al correo
          <a href="mailto:webmaster@norexiodigital.com">
            webmaster@norexiodigital.com
          </a>
          con el folio de su transacción dentro del plazo. En este escenario, el
          reembolso es del 100%.
        </p>

        <p>
          Si ya confirmamos el servicio e iniciamos actividades preparatorias
          (revisión inicial del ecommerce, configuración del proceso de diagnóstico,
          asignación del equipo, diseño inicial de la ruta de trabajo), pero el
          cliente cancela antes de recibir cualquier entregable, el reembolso es del
          70% del monto pagado. El 30% restante cubre el trabajo técnico ya iniciado
          que no puede recuperarse ni reutilizarse. Este porcentaje aplica a los
          planes del catálogo y a las estrategias personalizadas, conforme a la
          descripción vigente publicada en nuestro sitio web.
        </p>

        <h2>ACTO II – Mientras transcurre</h2>

        <h3>El servicio está en ejecución – Los entregables parciales ya existen.</h3>

        <p>
          Una vez que el cliente ha recibido cualquier entregable parcial —un primer
          análisis, un reporte inicial, recomendaciones preliminares, una sección del
          diagnóstico o cualquier documento intermedio del servicio— el trabajo
          intelectual entregado no puede revertirse ni devolverse. En este punto no
          procede reembolso por cancelación anticipada.
        </p>

        <p>
          El cliente conserva todos los entregables recibidos hasta el momento de la
          cancelación. No estamos obligados a continuar con el trabajo restante si el
          pago no está al corriente. Si el motivo de la cancelación es una
          reclamación por calidad sobre un entregable ya recibido, aplica el proceso
          de reclamación descrito en el Acto III.
        </p>

        <p>
          Si durante la ejecución el cliente solicita modificar el alcance original
          del servicio, evaluaremos y cotizaremos el trabajo adicional antes de
          ejecutarlo. Ninguna modificación de alcance se ejecuta sin aprobación
          escrita del cliente y sin definir el costo adicional correspondiente. Las
          reducciones de alcance no generan reembolso proporcional si el trabajo en
          esa área ya fue iniciado.
        </p>

        <p>
          Si circunstancias de fuerza mayor afectan la capacidad de ejecutar o
          recibir el servicio, ambas partes explorarán la reprogramación sin costo
          adicional como primera opción. Si no es viable, se aplicarán los
          porcentajes de reembolso correspondientes al estado de avance del proyecto,
          con un detalle por escrito de los costos ya incurridos.
        </p>

        <h2>ACTO III – Cuando termina</h2>

        <h3>El servicio concluyó – Los entregables finales fueron entregados.</h3>

        <p>
          Cuando todos los entregables comprometidos han sido entregados y el
          servicio está completo, no procede reembolso. Los análisis, diagnósticos,
          optimizaciones y estrategias ya realizados son de naturaleza intelectual;
          no pueden recuperarse ni revertirse.
        </p>

        <p>
          Si el cliente considera que un entregable final no corresponde a las
          especificaciones acordadas en la propuesta o confirmación del servicio,
          puede presentar una reclamación formal. Para hacerlo, debe escribir al
          correo
          <a href="mailto:webmaster@expertcommerce.com.mx">
            webmaster@expertcommerce.com.mx
          </a>
          o llamar al
          <a href="tel:+5215522301576">
            +52 1 55 2230 1576
          </a>
          indicando el nombre del servicio, el folio de la transacción, una
          descripción específica de en qué punto el entregable no corresponde a lo
          acordado y adjuntando la propuesta o confirmación como referencia.
          Acusaremos recibo en un plazo máximo de 48 horas hábiles y emitiremos una
          resolución en un máximo de siete días hábiles.
        </p>

        <p>
          Si la reclamación procede, realizaremos las correcciones pertinentes sin
          costo adicional o, si no es posible corregir en términos razonables,
          tramitaremos un reembolso parcial proporcional al elemento incumplido, de
          acuerdo con esta política y la legislación aplicable.
        </p>

        <p>
          Si quienes cancelamos somos nosotros por causas imputables a la propia
          agencia —incapacidad para ejecutar el trabajo comprometido, error
          sustancial en la propuesta o circunstancias internas que impidan la
          entrega— el cliente recibe el reembolso del 100% del monto pagado en un
          máximo de quince días hábiles, además de una notificación escrita con las
          razones.
        </p>

        <p>
          Todos los reembolsos aprobados se procesan en un plazo máximo de quince
          días hábiles desde la resolución,
          <strong>
            al mismo método de pago de la transacción original
          </strong>,
          salvo que por imposibilidad técnica sea necesario acordar un medio distinto
          con el cliente. En caso de desacuerdo con nuestra resolución, el cliente
          puede acudir a la PROFECO o a los tribunales competentes de la Ciudad de
          México conforme a la legislación aplicable.
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
        <h1>Refund and Cancellation Policy</h1>

        <p>
          This policy addresses money, timelines, and expectations, not abstract
          concepts. Every project we undertake involves customized creative and
          strategic work, and that directly affects how much we can refund when a
          cancellation occurs. To make this clear, we organize the rules into three
          acts corresponding to the phases of the service: before it begins, while it
          is in progress, and once it has been completed; in each phase, the client’s
          rights and the conditions for any refund change.
        </p>

        <h2>ACT I – Before It Begins</h2>

        <h3>The service has not started – The money still has no commitments.</h3>

        <p>
          If you made a payment and we have not confirmed the start of the service
          nor begun any work (no analysis, no review, no partial diagnosis), the
          money still fully belongs to you. The refund is 100% of the amount paid,
          including VAT, processed within a maximum of fifteen business days to the
          same payment method used.
        </p>

        <p>
          Pursuant to Article 56 of the Federal Consumer Protection Law, for
          agreements made through electronic means you have the right to revoke your
          consent within five business days following the transaction date, provided
          that the service has not begun. To exercise this right, write to us at
          <a href="mailto:webmaster@norexiodigital.com">
            webmaster@norexiodigital.com
          </a>
          with your transaction reference number within the indicated period. In this
          scenario, the refund is 100%.
        </p>

        <p>
          If we have already confirmed the service and initiated preparatory
          activities (initial ecommerce review, setup of the diagnostic process, team
          assignment, initial workflow design), but the client cancels before
          receiving any deliverable, the refund is 70% of the amount paid. The
          remaining 30% covers technical work already started that cannot be recovered
          or reused. This percentage applies to catalog plans and customized
          strategies, according to the current description published on our website.
        </p>

        <h2>ACT II – While It Is in Progress</h2>

        <h3>The service is being executed – Partial deliverables already exist.</h3>

        <p>
          Once the client has received any partial deliverable — a first analysis, an
          initial report, preliminary recommendations, a section of the diagnosis, or
          any intermediate service document — the intellectual work delivered cannot
          be reversed or returned. At this stage, no refund applies for early
          cancellation.
        </p>

        <p>
          The client retains all deliverables received up to the moment of
          cancellation. We are not obligated to continue the remaining work if payment
          is not up to date. If the reason for cancellation is a quality claim
          regarding a deliverable already received, the claims process described in
          Act III shall apply.
        </p>

        <p>
          If during execution the client requests modifications to the original scope
          of the service, we will evaluate and quote the additional work before
          proceeding. No scope modification is executed without the client’s written
          approval and without defining the corresponding additional cost. Scope
          reductions do not generate proportional refunds if work in that area has
          already begun.
        </p>

        <p>
          If force majeure circumstances affect the ability to execute or receive the
          service, both parties will first explore rescheduling at no additional cost.
          If that is not viable, the applicable refund percentages according to the
          project’s stage of progress will apply, together with a written breakdown
          of costs already incurred.
        </p>

        <h2>ACT III – When It Ends</h2>

        <h3>The service concluded – Final deliverables were delivered.</h3>

        <p>
          Once all committed deliverables have been delivered and the service is
          complete, no refund applies. The analyses, diagnostics, optimizations, and
          strategies already performed are intellectual in nature; they cannot be
          recovered or reversed.
        </p>

        <p>
          If the client believes that a final deliverable does not correspond to the
          specifications agreed upon in the proposal or service confirmation, they may
          submit a formal claim. To do so, they must write to
          <a href="mailto:webmaster@expertcommerce.com.mx">
            webmaster@expertcommerce.com.mx
          </a>
          or call
          <a href="tel:+5215522301576">
            +52 1 55 2230 1576
          </a>
          indicating the service name, the transaction reference number, a specific
          description of how the deliverable does not match what was agreed upon, and
          attaching the proposal or confirmation as reference. We will acknowledge
          receipt within a maximum of 48 business hours and issue a resolution within
          a maximum of seven business days.
        </p>

        <p>
          If the claim is valid, we will make the corresponding corrections at no
          additional cost or, if correction is not reasonably possible, process a
          proportional partial refund corresponding to the unmet element, in
          accordance with this policy and applicable legislation.
        </p>

        <p>
          If we are the ones who cancel due to causes attributable to the agency
          itself — inability to execute the committed work, substantial error in the
          proposal, or internal circumstances preventing delivery — the client will
          receive a 100% refund of the amount paid within a maximum of fifteen
          business days, together with a written notification explaining the reasons.
        </p>

        <p>
          All approved refunds are processed within a maximum period of fifteen
          business days from the resolution,
          <strong>
            to the same payment method used in the original transaction
          </strong>,
          unless technical impossibility requires agreeing on a different method with
          the client. In case of disagreement with our resolution, the client may
          contact PROFECO or the competent courts of Mexico City in accordance with
          applicable legislation.
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