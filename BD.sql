-- 1. Eliminamos las tablas conflictivas
DROP TABLE IF EXISTS nx_cart_items CASCADE;
DROP TABLE IF EXISTS nx_order_items CASCADE;
DROP TABLE IF EXISTS nx_plans CASCADE;

-- 2. Recreamos nx_plans forzando el UUID
CREATE TABLE nx_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    features JSONB DEFAULT '[]'::jsonb,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Recreamos el carrito forzando el UUID
CREATE TABLE nx_cart_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    plan_id UUID REFERENCES nx_plans(id) ON DELETE CASCADE,
    quantity INT NOT NULL DEFAULT 1,
    custom_price NUMERIC(10, 2),
    quote_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Aplicamos reglas de seguridad
ALTER TABLE nx_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE nx_cart_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Lectura publica planes NX" ON nx_plans FOR SELECT USING (is_active = true);
CREATE POLICY "Acceso carrito NX" ON nx_cart_items FOR ALL USING (true) WITH CHECK (true);

-- 5. Insertamos los planes limpios
INSERT INTO nx_plans (title, price, features) VALUES
('Evaluación Express de Página de Inicio', 180.00, '["Análisis de la estructura de la sección principal.", "Sugerencias para optimizar la experiencia de navegación."]'::jsonb),
('Análisis Básico de Experiencia de Compra', 215.00, '["Evaluación del trayecto de navegación en el comercio.", "Análisis de la etapa de elección de artículos.", "Listado de sugerencias elementales."]'::jsonb),
('Arranque Express de Tienda', 295.00, '["Inspección elemental del sitio comercial.", "Sugerencias ágiles de optimización.", "Lista de verificación para el perfeccionamiento primario."]'::jsonb),
('Radiografía de Conversión Ecommerce', 1230.00, '["Examen de la interacción del usuario.", "Auditoría de secciones fundamentales.", "Sugerencias para incrementar las transacciones."]'::jsonb),
('Optimización Inicial de Productos', 2510.00, '["Refinamiento de los textos explicativos.", "Perfeccionamiento estético de 50 artículos.", "Modificación en la organización de los datos."]'::jsonb),
('Acelerador de Ventas Ecommerce', 4340.00, '["Perfeccionamiento de las secciones de artículos.", "Refinamiento del trayecto de adquisición.", "Modificaciones planificadas orientadas a las transacciones."]'::jsonb),
('Ajuste Estratégico de Checkout', 5790.00, '["Perfeccionamiento de la etapa de facturación.", "Refinamiento de la vivencia de adquisición.", "Disminución de obstáculos en el paso de cierre."]'::jsonb),
('Motor Inicial de Conversión', 7560.00, '["Perfeccionamiento de secciones fundamentales.", "Modificación de elementos interactivos y leyendas de conversión.", "Optimización del diseño gráfico y maquetación."]'::jsonb),
('Impulso Comercial para Ecommerce', 9780.00, '["Planificación comercial para el negocio digital.", "Perfeccionamiento de las secciones esenciales.", "Refinamiento del flujo de adquisición."]'::jsonb),
('Optimización Comercial de Tienda', 12325.00, '["Perfeccionamiento de las secciones de artículos.", "Refinamiento del módulo de compra.", "Modificaciones en la vivencia de adquisición."]'::jsonb),
('Sistema de Conversión Inteligente', 18925.00, '["Perfeccionamiento total de la ruta de compra.", "Modificaciones planificadas en secciones esenciales.", "Optimización de la experiencia del usuario."]'::jsonb),
('Arquitectura de Ventas Digitales', 21795.00, '["Estructuración del embudo de la tienda en línea.", "Perfeccionamiento del trayecto de adquisición.", "Planificación enfocada en elevar las transacciones."]'::jsonb),
('Dominio Comercial Ecommerce', 25665.00, '["Ajuste exhaustivo del sitio comercial.", "Optimización de las secciones de artículos.", "Refinamiento de los pasos de pago."]'::jsonb),
('Ecosistema de Conversión Ecommerce', 28910.00, '["Análisis profundo del sitio comercial.", "Planificación para el desarrollo del negocio.", "Perfeccionamiento integral de las ventas."]'::jsonb),
('Ingeniería de Ventas Ecommerce', 32931.00, '["Modelado del esquema comercial.", "Perfeccionamiento del proceso de adquisición.", "Ajustes planificados en secciones fundamentales."]'::jsonb),
('Arquitectura de Escalamiento Digital', 36650.00, '["Perfeccionamiento de nivel alto para la tienda digital.", "Planificación para la captación de usuarios.", "Modificaciones orientadas a la expansión sostenible."]'::jsonb),
('Dominio Estratégico Ecommerce', 49990.00, '["Perfeccionamiento completo del sitio comercial.", "Planificación para la atracción de compradores.", "Refinamiento de nivel alto en la ruta de adquisición."]'::jsonb),
('Imperio Digital Ecommerce', 52357.00, '["Estructuración total de la estrategia comercial digital.", "Perfeccionamiento absoluto de las ventas.", "Planificación para el crecimiento de las transacciones.", "Despliegue de sistemas automáticos de venta."]'::jsonb),
('Cotización Personalizada', 0.00, '["Diseño de arquitectura E-commerce a medida.", "Folio asignado por asesor.", "Pago seguro de proyectos especiales."]'::jsonb);