export interface Plan {
  id: string;
  title: string;
  category: string;
  price: number;
  image: string;
  features?: string[];
  description?: string;
}

export const categories = [
  { id: "all", name: "Todos" },
  { id: "express", name: "Servicios Express para Ecommerce" },
  { id: "advanced", name: "Implementaciones Avanzadas" },
  { id: "digital", name: "Ingeniería en Crecimiento Digital" },
];

const planImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop";

export const plansSpanish: Plan[] = [
  { id: "evaluacion-express-pagina-inicio", title: 'Evaluación Express de Página de Inicio', category: "express", price: 180.00, image: planImage, features: ['Análisis de la estructura de la sección principal.', 'Sugerencias para optimizar la experiencia de navegación.'] },
  { id: "analisis-basico-experiencia-compra", title: 'Análisis Básico de Experiencia de Compra', category: "express", price: 215.00, image: planImage, features: ['Evaluación del trayecto de navegación en el comercio.', 'Análisis de la etapa de elección de artículos.', 'Listado de sugerencias elementales.'] },
  { id: "arranque-express-tienda", title: 'Arranque Express de Tienda', category: "express", price: 295.00, image: planImage, features: ['Inspección elemental del sitio comercial.', 'Sugerencias ágiles de optimización.', 'Lista de verificación para el perfeccionamiento primario.'] },

  { id: "radiografia-conversion-ecommerce", title: 'Radiografía de Conversión Ecommerce', category: "advanced", price: 1230.00, image: planImage, features: ['Examen de la interacción del usuario.', 'Auditoría de secciones fundamentales.', 'Sugerencias para incrementar las transacciones.'] },
  { id: "optimizacion-inicial-productos", title: 'Optimización Inicial de Productos', category: "advanced", price: 2510.00, image: planImage, features: ['Refinamiento de los textos explicativos.', 'Perfeccionamiento estético de 50 artículos.', 'Modificación en la organización de los datos.'] },
  { id: "acelerador-ventas-ecommerce", title: 'Acelerador de Ventas Ecommerce', category: "advanced", price: 4340.00, image: planImage, features: ['Perfeccionamiento de las secciones de artículos.', 'Refinamiento del trayecto de adquisición.', 'Modificaciones planificadas orientadas a las transacciones.'] },
  { id: "ajuste-estrategico-checkout", title: 'Ajuste Estratégico de Checkout', category: "advanced", price: 5790.00, image: planImage, features: ['Perfeccionamiento de la etapa de facturación.', 'Refinamiento de la vivencia de adquisición.', 'Disminución de obstáculos en el paso de cierre.'] },
  { id: "motor-inicial-conversion", title: 'Motor Inicial de Conversión', category: "advanced", price: 7560.00, image: planImage, features: ['Perfeccionamiento de secciones fundamentales.', 'Modificación de elementos interactivos y leyendas de conversión.', 'Optimización del diseño gráfico y maquetación.'] },
  { id: "impulso-comercial-ecommerce", title: 'Impulso Comercial para Ecommerce', category: "advanced", price: 9780.00, image: planImage, features: ['Planificación comercial para el negocio digital.', 'Perfeccionamiento de las secciones esenciales.', 'Refinamiento del flujo de adquisición.'] },
  { id: "optimizacion-comercial-tienda", title: 'Optimización Comercial de Tienda', category: "advanced", price: 12325.00, image: planImage, features: ['Perfeccionamiento de las secciones de artículos.', 'Refinamiento del módulo de compra.', 'Modificaciones en la vivencia de adquisición.'] },
  { id: "sistema-conversion-inteligente", title: 'Sistema de Conversión Inteligente', category: "advanced", price: 18925.00, image: planImage, features: ['Perfeccionamiento total de la ruta de compra.', 'Modificaciones planificadas en secciones esenciales.', 'Optimización de la experiencia del usuario.'] },
  { id: "arquitectura-ventas-digitales", title: 'Arquitectura de Ventas Digitales', category: "advanced", price: 21795.00, image: planImage, features: ['Estructuración del embudo de la tienda en línea.', 'Perfeccionamiento del trayecto de adquisición.', 'Planificación enfocada en elevar las transacciones.'] },
  { id: "dominio-comercial-ecommerce", title: 'Dominio Comercial Ecommerce', category: "advanced", price: 25665.00, image: planImage, features: ['Ajuste exhaustivo del sitio comercial.', 'Optimización de las secciones de artículos.', 'Refinamiento de los pasos de pago.'] },
  { id: "ecosistema-conversion-ecommerce", title: 'Ecosistema de Conversión Ecommerce', category: "advanced", price: 28910.00, image: planImage, features: ['Análisis profundo del sitio comercial.', 'Planificación para el desarrollo del negocio.', 'Perfeccionamiento integral de las ventas.'] },
  { id: "ingenieria-ventas-ecommerce", title: 'Ingeniería de Ventas Ecommerce', category: "advanced", price: 32931.00, image: planImage, features: ['Modelado del esquema comercial.', 'Perfeccionamiento del proceso de adquisición.', 'Ajustes planificados en secciones fundamentales.'] },

  { id: "arquitectura-escalamiento-digital", title: 'Arquitectura de Escalamiento Digital', category: "digital", price: 36650.00, image: planImage, features: ['Perfeccionamiento de nivel alto para la tienda digital.', 'Planificación para la captación de usuarios.', 'Modificaciones orientadas a la expansión sostenible.'] },
  { id: "plataforma-crecimiento-comercial", title: 'Plataforma de Crecimiento Comercial', category: "digital", price: 40820.00, image: planImage, features: ['Estrategia de crecimiento comercial para ecommerce.', 'Optimización de canales digitales.', 'Planificación orientada al aumento de ventas.'] },
  { id: "sistema-maestro-conversion", title: 'Sistema Maestro de Conversión', category: "digital", price: 46780.00, image: planImage, features: ['Estructuración avanzada del sistema de conversión.', 'Optimización integral del flujo de compra.', 'Planificación estratégica para elevar transacciones.'] },
  { id: "dominio-estrategico-ecommerce", title: 'Dominio Estratégico Ecommerce', category: "digital", price: 49990.00, image: planImage, features: ['Perfeccionamiento completo del sitio comercial.', 'Planificación para la atracción de compradores.', 'Refinamiento de nivel alto en la ruta de adquisición.'] },
  { id: "imperio-digital-ecommerce", title: 'Imperio Digital Ecommerce', category: "digital", price: 52357.00, image: planImage, features: ['Estructuración total de la estrategia comercial digital.', 'Perfeccionamiento absoluto de las ventas.', 'Planificación para el crecimiento de las transacciones.', 'Despliegue de sistemas automáticos de venta.'] },
  { id: "cotizacion-personalizada", title: 'Cotización Personalizada', category: "digital", price: 0.00, image: planImage, features: ['Diseño de arquitectura E-commerce a medida.', 'Folio asignado por asesor.', 'Pago seguro de proyectos especiales.'] }
];

export const plansEnglish: Plan[] = [
  { id: "express-homepage-evaluation", title: 'Express Homepage Evaluation', category: "express", price: 180.00, image: planImage, features: ['Analysis of the main section structure.', 'Suggestions to optimize navigation experience.'] },
  { id: "basic-shopping-experience-analysis", title: 'Basic Shopping Experience Analysis', category: "express", price: 215.00, image: planImage, features: ['Evaluation of the e-commerce navigation path.', 'Analysis of the item selection stage.', 'List of basic suggestions.'] },
  { id: "express-store-launch", title: 'Express Store Launch', category: "express", price: 295.00, image: planImage, features: ['Elementary inspection of the commercial site.', 'Agile optimization suggestions.', 'Checklist for primary improvement.'] },

  { id: "ecommerce-conversion-x-ray", title: 'Ecommerce Conversion X-Ray', category: "advanced", price: 1230.00, image: planImage, features: ['User interaction examination.', 'Audit of fundamental sections.', 'Suggestions to increase transactions.'] },
  { id: "initial-product-optimization", title: 'Initial Product Optimization', category: "advanced", price: 2510.00, image: planImage, features: ['Refinement of explanatory texts.', 'Aesthetic improvement of 50 items.', 'Modification in data organization.'] },
  { id: "ecommerce-sales-accelerator", title: 'Ecommerce Sales Accelerator', category: "advanced", price: 4340.00, image: planImage, features: ['Improvement of item sections.', 'Refinement of the acquisition path.', 'Planned modifications oriented towards transactions.'] },
  { id: "strategic-checkout-adjustment", title: 'Strategic Checkout Adjustment', category: "advanced", price: 5790.00, image: planImage, features: ['Improvement of the billing stage.', 'Refinement of the acquisition experience.', 'Reduction of obstacles in the closing step.'] },
  { id: "initial-conversion-engine", title: 'Initial Conversion Engine', category: "advanced", price: 7560.00, image: planImage, features: ['Improvement of fundamental sections.', 'Modification of interactive elements and conversion legends.', 'Optimization of graphic design and layout.'] },
  { id: "ecommerce-commercial-boost", title: 'Ecommerce Commercial Boost', category: "advanced", price: 9780.00, image: planImage, features: ['Commercial planning for the digital business.', 'Improvement of essential sections.', 'Refinement of the acquisition flow.'] },
  { id: "store-commercial-optimization", title: 'Store Commercial Optimization', category: "advanced", price: 12325.00, image: planImage, features: ['Improvement of item sections.', 'Refinement of the purchase module.', 'Modifications in the acquisition experience.'] },
  { id: "intelligent-conversion-system", title: 'Intelligent Conversion System', category: "advanced", price: 18925.00, image: planImage, features: ['Total improvement of the purchase route.', 'Planned modifications in essential sections.', 'User experience optimization.'] },
  { id: "digital-sales-architecture", title: 'Digital Sales Architecture', category: "advanced", price: 21795.00, image: planImage, features: ['Structuring of the online store funnel.', 'Improvement of the acquisition path.', 'Planning focused on increasing transactions.'] },
  { id: "ecommerce-commercial-domain", title: 'Ecommerce Commercial Domain', category: "advanced", price: 25665.00, image: planImage, features: ['Comprehensive adjustment of the commercial site.', 'Optimization of item sections.', 'Refinement of payment steps.'] },
  { id: "ecommerce-conversion-ecosystem", title: 'Ecommerce Conversion Ecosystem', category: "advanced", price: 28910.00, image: planImage, features: ['Deep analysis of the commercial site.', 'Planning for business development.', 'Integral improvement of sales.'] },
  { id: "ecommerce-sales-engineering", title: 'Ecommerce Sales Engineering', category: "advanced", price: 32931.00, image: planImage, features: ['Modeling of the commercial scheme.', 'Improvement of the acquisition process.', 'Planned adjustments in fundamental sections.'] },

  { id: "digital-scaling-architecture", title: 'Digital Scaling Architecture', category: "digital", price: 36650.00, image: planImage, features: ['High-level improvement for the digital store.', 'Planning for user acquisition.', 'Modifications oriented to sustainable expansion.'] },
  { id: "commercial-growth-platform", title: 'Commercial Growth Platform', category: "digital", price: 40820.00, image: planImage, features: ['Commercial growth strategy for ecommerce.', 'Optimization of digital channels.', 'Planning focused on increasing sales.'] },
  { id: "master-conversion-system", title: 'Master Conversion System', category: "digital", price: 46780.00, image: planImage, features: ['Advanced structuring of the conversion system.', 'Integral optimization of the purchase flow.', 'Strategic planning to increase transactions.'] },
  { id: "strategic-ecommerce-domain", title: 'Strategic Ecommerce Domain', category: "digital", price: 49990.00, image: planImage, features: ['Complete improvement of the commercial site.', 'Planning for buyer attraction.', 'High-level refinement in the acquisition route.'] },
  { id: "ecommerce-digital-empire", title: 'Ecommerce Digital Empire', category: "digital", price: 52357.00, image: planImage, features: ['Total structuring of the digital commercial strategy.', 'Absolute improvement of sales.', 'Planning for transaction growth.', 'Deployment of automatic sales systems.'] },
  { id: "custom-quote", title: 'Custom Quote', category: "digital", price: 0.00, image: planImage, features: ['Custom E-commerce architecture design.', 'Quote ID assigned by advisor.', 'Secure payment for special projects.'] }
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(price);
}
