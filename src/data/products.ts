//import type { Plan } from "@/context/CartContext";

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

export const plans: Plan[] = [
  {
    id: "evaluacion-express-pagina-inicio",
    title: "Evaluación Express de Página de Inicio",
    category: "express",
    price: 180.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Análisis de la estructura de la sección principal.",
      "Sugerencias para optimizar la experiencia de navegación."
    ]
  },
  {
    id: "analisis-basico-experiencia-compra",
    title: "Análisis Básico de Experiencia de Compra",
    category: "express",
    price: 215.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Evaluación del trayecto de navegación en el comercio.",
      "Análisis de la etapa de elección de artículos.",
      "Listado de sugerencias elementales."
    ]
  },
  {
    id: "arranque-express-tienda",
    title: "Arranque Express de Tienda",
    category: "express",
    price: 295.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Inspección elemental del sitio comercial.",
      "Sugerencias ágiles de optimización.",
      "Lista de verificación para el perfeccionamiento primario."
    ]
  },
  {
    id: "radiografia-conversion-ecommerce",
    title: "Radiografía de Conversión Ecommerce",
    category: "advanced",
    price: 1230.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Examen de la interacción del usuario.",
      "Auditoría de secciones fundamentales.",
      "Sugerencias para incrementar las transacciones."
    ]
  },
  {
    id: "optimizacion-inicial-productos",
    title: "Optimización Inicial de Productos",
    category: "advanced",
    price: 2510.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Refinamiento de los textos explicativos.",
      "Perfeccionamiento estético de 50 artículos.",
      "Modificación en la organización de los datos."
    ]
  },
  {
    id: "acelerador-ventas-ecommerce",
    title: "Acelerador de Ventas Ecommerce",
    category: "advanced",
    price: 4340.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Perfeccionamiento de las secciones de artículos.",
      "Refinamiento del trayecto de adquisición.",
      "Modificaciones planificadas orientadas a las transacciones."
    ]
  },
  {
    id: "ajuste-estrategico-checkout",
    title: "Ajuste Estratégico de Checkout",
    category: "advanced",
    price: 5790.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Perfeccionamiento de la etapa de facturación.",
      "Refinamiento de la vivencia de adquisición.",
      "Disminución de obstáculos en el paso de cierre."
    ]
  },
  {
    id: "motor-inicial-conversion",
    title: "Motor Inicial de Conversión",
    category: "advanced",
    price: 7560.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Perfeccionamiento de secciones fundamentales.",
      "Modificación de elementos interactivos y leyendas de conversión.",
      "Optimización del diseño gráfico y maquetación."
    ]
  },
  {
    id: "impulso-comercial-ecommerce",
    title: "Impulso Comercial para Ecommerce",
    category: "advanced",
    price: 9780.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Planificación comercial para el negocio digital.",
      "Perfeccionamiento de las secciones esenciales.",
      "Refinamiento del flujo de adquisición."
    ]
  },
  {
    id: "optimizacion-comercial-tienda",
    title: "Optimización Comercial de Tienda",
    category: "advanced",
    price: 12325.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Perfeccionamiento de las secciones de artículos.",
      "Refinamiento del módulo de compra.",
      "Modificaciones en la vivencia de adquisición."
    ]
  },
  {
    id: "sistema-conversion-inteligente",
    title: "Sistema de Conversión Inteligente",
    category: "advanced",
    price: 18925.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Perfeccionamiento total de la ruta de compra.",
      "Modificaciones planificadas en secciones esenciales.",
      "Optimización de la experiencia del usuario."
    ]
  },
  {
    id: "arquitectura-ventas-digitales",
    title: "Arquitectura de Ventas Digitales",
    category: "advanced",
    price: 21795.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Estructuración del embudo de la tienda en línea.",
      "Perfeccionamiento del trayecto de adquisición.",
      "Planificación enfocada en elevar las transacciones."
    ]
  },
  {
    id: "dominio-comercial-ecommerce",
    title: "Dominio Comercial Ecommerce",
    category: "advanced",
    price: 25665.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Ajuste exhaustivo del sitio comercial.",
      "Optimización de las secciones de artículos.",
      "Refinamiento de los pasos de pago."
    ]
  },
  {
    id: "ecosistema-conversion-ecommerce",
    title: "Ecosistema de Conversión Ecommerce",
    category: "digital",
    price: 28910.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Análisis profundo del sitio comercial.",
      "Planificación para el desarrollo del negocio.",
      "Perfeccionamiento integral de las ventas."
    ]
  },
  {
    id: "ingenieria-ventas-ecommerce",
    title: "Ingeniería de Ventas Ecommerce",
    category: "digital",
    price: 32931.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Modelado del esquema comercial.",
      "Perfeccionamiento del proceso de adquisición.",
      "Ajustes planificados en secciones fundamentales."
    ]
  },
  {
    id: "arquitectura-escalamiento-digital",
    title: "Arquitectura de Escalamiento Digital",
    category: "digital",
    price: 36650.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Perfeccionamiento de nivel alto para la tienda digital.",
      "Planificación para la captación de usuarios.",
      "Modificaciones orientadas a la expansión sostenible."
    ]
  },
  {
    id: "dominio-estrategico-ecommerce",
    title: "Dominio Estratégico Ecommerce",
    category: "digital",
    price: 49990.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Perfeccionamiento completo del sitio comercial.",
      "Planificación para la atracción de compradores.",
      "Refinamiento de nivel alto en la ruta de adquisición."
    ]
  },
  {
    id: "imperio-digital-ecommerce",
    title: "Imperio Digital Ecommerce",
    category: "digital",
    price: 52357.0,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    features: [
      "Estructuración total de la estrategia comercial digital.",
      "Perfeccionamiento absoluto de las ventas.",
      "Planificación para el crecimiento de las transacciones.",
      "Despliegue de sistemas automáticos de venta."
    ]
  }
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(price);
}
