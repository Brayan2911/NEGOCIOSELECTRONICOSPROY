# Strydr — Plataforma E-Commerce de Calzado Deportivo

**Strydr** es una aplicación web integral de comercio electrónico especializada en calzado deportivo y urbano. Combina modelos de negocio **B2C** (tienda oficial), **C2C** (marketplace entre usuarios) y **subastas en tiempo real**, gestionando todo el flujo desde la exploración del catálogo hasta la generación de comprobantes digitales.

## Tecnologías Utilizadas
* **HTML5 Semántico:** Estructura modular multipágina.
* **CSS3 Personalizado:** Diseño responsivo, variables visuales, transiciones suaves y animaciones de interfaz (`assets/css/styles.css`).
* **JavaScript (ES6+):** Lógica de negocio, validaciones en tiempo real y manipulación dinámica del DOM.
* **Web Storage (`localStorage`):** Persistencia completa en el navegador para sesiones, roles, carrito de compras, publicaciones C2C, pujas, reseñas e historial de facturas.

## Roles y Control de Acceso

El sistema cuenta con autenticación simulada y protección de vistas mediante `strydr_session` en `localStorage`:
* **Visitante (Sin sesión):** Puede explorar el catálogo, campañas y detalles de productos, pero requiere iniciar sesión para comprar, pujar o publicar.
* **Usuario (`User`):** Acceso completo al checkout, generación de facturas, historial de compras, creación/edición de anuncios C2C y publicación de reseñas.
* **Administrador (`Admin`):** Desbloquea la pestaña **Admin** en la barra de navegación y obtiene permisos globales para moderar o eliminar anuncios C2C y reseñas de cualquier usuario.

## Estructura del Proyecto

```text
Strydr/
├── index.html          # Página principal y presentación de marca
├── catalogo.html       # Tienda oficial B2C
├── campana.html        # Cupones promocionales y reseñas de comunidad
├── publicar.html       # Marketplace C2C con modal de detalle
├── subasta.html        # Sala de subastas y pujas
├── carrito.html        # Checkout en 3 pasos, pasarela de pago y factura visual
├── perfil.html         # Historial de tickets, gestión C2C y reseñas del usuario
├── admin.html          # Panel de administración
├── login.html          # Inicio de sesión y asignación de roles
├── nosotros.html       # Información corporativa, misión y ubicación
├── README.md           # Documentación del proyecto
└── assets/
    └── css/
        └── styles.css  # Hoja de estilos principal y transiciones UI

## Versión de Entrega
* **Versión:** 1.0.0 (Bloque 4 completado — Checkout, Facturación Digital e Historial).        

## Credenciales de Demostración
* **Rol Usuario (`User`):** `brayanlealcl1129@gmail.com`
* **Rol Administrador (`Admin`):** Iniciar sesión seleccionando el rol `Admin` en `login.html` para habilitar moderación global.


## Flujo de Usuario (End-to-End)
1. **Exploración:** Selección de calzado oficial (`catalogo.html`) o de segunda mano (`publicar.html`).
2. **Promoción:** Aplicación opcional de cupón de descuento (`campana.html`).
3. **Checkout (`carrito.html`):** Captura de dirección de envío, selección de método de pago y confirmación.
4. **Comprobante e Historial (`perfil.html`):** Visualización inmediata de la factura electrónica y consulta posterior en el historial de compras.