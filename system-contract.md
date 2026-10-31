# System contract de Iuris Balance

Versión: 1.1.1  
Fecha: 30 de octubre de 2026  
Responsable del proyecto: Cecilia Web Studio  
Entrega regulada: página principal `/`, en español

## 1. Propósito y autoridad

Construir la página principal de **Iuris Balance**, un despacho jurídico-contable en Puebla. La página debe ayudar a encontrar el despacho en internet, entender sus servicios jurídicos y solicitar contacto. Debe expresar la identidad del logo aprobado: verde profundo, dorado y tipografía serif robusta.

Este archivo es una especificación de implementación para el agente de desarrollo. **DEBE** indica una condición obligatoria; **PUEDE** indica una opción dentro del alcance. Las decisiones visuales indicadas aquí son instrucciones para esta implementación, no afirmaciones sobre hechos del despacho.

Orden de autoridad: instrucciones posteriores de Cecilia → este contrato y los SVG incluidos → convenciones técnicas del repositorio. Si hay una contradicción real, registrar el conflicto antes de cambiar el alcance; no inventar requisitos para resolverla. Las decisiones rutinarias dentro de estas reglas no requieren otra aprobación.

## 2. Decisiones ya tomadas

| Tema | Decisión |
| --- | --- |
| Marca | Iuris Balance. El nombre está definido y es el mismo para ambas áreas. No volver a pedirlo como requisito pendiente. |
| Descriptor | Despacho Jurídico-Contable. |
| Arquitectura del sitio | General jurídico y contable comparten una web: `/` y `/contable`. El despacho fiscal tiene una web completamente independiente. |
| Esta entrega | Solamente la principal general jurídica `/` y su formulario. Se prepara la integración con `/contable`; su página completa y la web fiscal independiente no se construyen en esta entrega. |
| Fuente de servicios | Los archivos con los servicios están en la carpeta del proyecto. El agente debe localizarlos y leerlos antes de redactar las secciones. |
| Tecnología y hosting | Proyecto nuevo en Astro + TypeScript, con páginas prerenderizadas y despliegue en Vercel Pro. |
| Idioma | Español de México. La versión en inglés es futura. |
| Edición | Sitio informativo sin panel de administración ni editor de contenido. |
| Identidad | Usar la versión verde y dorada del logo con platillos reducidos y remate inferior de la I alargado. |
| Conversión | Formulario, WhatsApp y teléfono cuando sus datos reales estén configurados. |
| CRM o SaaS | Fuera del alcance. No incluir acceso, demostración, panel ni promoción del sistema en esta landing. |

El sitio se desarrolla en un repositorio de Cecilia. La entrega del código fuente al cliente no forma parte del servicio comercial acordado; esto no impide organizar correctamente el proyecto ni documentarlo para su mantenimiento.

### 2.1 Separación obligatoria de las tres áreas

| Área | Sitio y destino | Tratamiento en este contrato |
| --- | --- | --- |
| General jurídico | Principal `/` del sitio de Iuris Balance. | Página que se implementa. |
| Contable | `/contable` dentro del mismo sitio, dominio y proyecto de Vercel que la principal. | Bloque de presentación y enlace en la principal; página completa fuera de esta entrega. |
| Fiscal | Web independiente, con su propio proyecto de Vercel y URL de producción. | Fuera de este contrato y del contenido comercial de esta landing. |

**Contable y fiscal no son nombres intercambiables de una sola sección.** La instrucción actual de Cecilia sustituye cualquier referencia anterior a un área combinada “fiscal contable”. No crear `/fiscal` ni alojar el sitio fiscal dentro de `/contable`. No asumir el nombre, dominio o identidad de ese otro sitio. Un futuro enlace externo solo se añadirá cuando Cecilia proporcione la URL y pida integrarlo.

Compartir la cuenta de Vercel Pro no combina el contenido ni el SEO de los sitios: el sitio general/contable y el fiscal se configuran y publican como proyectos independientes. No implementar redirecciones ni canonical cruzadas entre ellos.

## 3. Alcance y exclusiones

La página DEBE contener un encabezado, **exactamente cinco secciones de contenido** y un pie. La navegación móvil, el aviso de privacidad y los estados del formulario son componentes auxiliares y no añaden secciones comerciales.

Incluye diseño adaptable, contenido semántico disponible en el HTML inicial, metadatos para búsqueda y redes, formulario funcional, enlaces de contacto y acceso a ubicación. No incluye blog, noticias, reservas con calendario, pagos, cuentas de usuario, carga de documentos, expedientes, chatbot, traducción, CMS ni base de datos de clientes. No generar páginas nuevas por especialidad en esta entrega.

La web fiscal independiente requiere su propia especificación. Esta entrega tampoco incluye su construcción, ni publicar sus servicios fiscales en el bloque contable de la principal.

La aparición o la posición en Google no se pueden garantizar. El trabajo de esta fase es preparar contenido y estructura para su rastreo y comprensión, no prometer primeros lugares.

## 4. Archivos de marca y tipografía

### 4.1 Logo como fuente visual de verdad

Archivos incluidos junto al contrato:

- `public/brand/iuris-balance-verde-dorado.svg`: versión principal aprobada.
- `public/brand/iuris-balance-negro.svg`: alternativa monocromática.

La principal DEBE usar el primer archivo. Conservar proporciones, separación entre palabras, balanza integrada en la I, platillos pequeños y base alargada. No redibujar el logo, no volver a generarlo con IA, no reemplazarlo por texto HTML y no aplicar filtros CSS que modifiquen sus colores. El SVG ya contiene las letras como trazados.

En el encabezado, mostrarlo sobre marfil o blanco. Ancho de referencia: 230–270 px en escritorio y 185–220 px en móvil, ajustado sin deformación. Mantener espacio libre alrededor equivalente, al menos, a la altura de la I. No recortar el descriptor ni reducirlo hasta volverlo ilegible. El logo enlaza a `/` y su nombre accesible es “Iuris Balance, inicio”.

### 4.2 Tipografía del sitio

La familia exacta del logo rasterizado original no está identificada: **los trazados del SVG son la forma de conservarla exactamente**. No afirmar que el logo está compuesto en una fuente identificada.

Para el texto web se fija una combinación complementaria:

| Uso | Familia | Pesos |
| --- | --- | --- |
| H1, H2 y títulos editoriales | Libre Baskerville | 700 |
| Párrafos, navegación, botones, formularios y microtexto | Source Sans 3 | 400 y 600 |

Libre Baskerville es una decisión para acompañar el logo, no una identificación de su fuente. No convertir todos los textos en imágenes ni repetir el wordmark como sustituto de los encabezados semánticos. Alojar los archivos de fuentes en el proyecto, conservar sus licencias y usar `font-display: swap`. Fallbacks: `Georgia, serif` y `Arial, sans-serif`, respectivamente.

Referencia de escala: H1 48–64 px en escritorio y 34–42 px en móvil; H2 32–40 / 26–32 px; cuerpo 18 / 17 px; interfaz 16 px mínimo; microtexto 14 px mínimo. Interlineado del cuerpo 1.55–1.7. Los títulos no deben cortarse por alturas fijas.

## 5. Sistema visual

### 5.1 Tokens de color

Los dos colores de marca se obtienen del SVG aprobado. Los demás son tokens de interfaz establecidos para esta web.

```css
:root {
  --color-brand-green: #073018;
  --color-brand-gold: #B08D3B;
  --color-gold-text: #806522;
  --color-ivory: #F7F5EF;
  --color-white: #FFFFFF;
  --color-text: #19271E;
  --color-text-muted: #4F5D53;
  --color-border: #D8DCCE;
  --color-error: #9B2929;
  --font-heading: 'Libre Baskerville', Georgia, serif;
  --font-body: 'Source Sans 3', Arial, sans-serif;
  --radius-control: 6px;
  --radius-panel: 10px;
  --content-max: 1200px;
}
```

El dorado principal es un acento: líneas cortas, detalles, iconos decorativos y ciertos textos sobre verde. Su contraste aproximado con blanco es 3.13:1, por lo que **no se usa para párrafos, etiquetas pequeñas ni enlaces sobre blanco o marfil**. Para texto dorado sobre superficies claras se permite el token más oscuro, verificando su contraste en el tamaño y estado reales. El SVG conserva sus colores de marca.

El texto blanco sobre verde y el texto verde sobre marfil son las combinaciones principales. El botón primario es verde con texto blanco en secciones claras; en el hero verde, marfil con texto verde. El dorado no debe ser el único indicio de foco, error o enlace.

### 5.2 Composición

Estética editorial, sobria y cálida: serif robusta, espacio amplio, fondos marfil y verde profundo, dorado contenido. El resultado debe sentirse relacionado con el logo y con papelería profesional.

- Encabezado claro; hero verde profundo; siguientes secciones principalmente marfil y blanco.
- Contenedor central de hasta 1200 px; márgenes laterales de 20 px en móvil, 32 px en tableta y 48 px o más en escritorio.
- Separación vertical orientativa por sección: 80–112 px en escritorio y 48–64 px en móvil.
- Párrafos de hasta aproximadamente 65 caracteres de ancho; evitar texto justificado.
- Esquinas discretas; botones sólidos; bordes finos; sombras mínimas.
- No usar efectos metálicos, degradados dorados, partículas, vidrio esmerilado, fondos de vídeo, carruseles ni animaciones de entrada que oculten el texto.
- No decorar con libros, mazos y balanzas repetidas. La balanza ya forma parte de la identidad.
- No introducir una paleta azul o morada ni un aspecto de dashboard. Tampoco convertir toda la web en una cuadrícula de tarjetas idénticas.

## 6. Arquitectura y navegación

### 6.1 Encabezado

Logo a la izquierda. Navegación: Inicio → `#inicio`; Servicios → `#servicios`; El despacho → `#despacho`; Área contable → comportamiento de la sección 6.2; Contacto → `#contacto`. CTA “Solicitar orientación” → `#contacto`.

En móvil, botón de menú con nombre accesible, estado expandido y control por teclado. Cerrar con Escape y después de elegir un enlace; restituir el foco al botón al cerrar con Escape. El encabezado puede ser fijo, siempre que no tape títulos, foco ni contenido. Usar `scroll-margin-top`.

### 6.2 Relación con la sección contable

`/contable` es una página del mismo sitio y marca. No usar subdominio ni marca distinta. El componente de enlace DEBE depender de `accountingPageEnabled`:

- `true`: el enlace del menú y el CTA “Ver servicios contables” llevan a `/contable`; comprobar que esa ruta responde correctamente.
- `false`: el menú lleva a `#area-contable` y el bloque ofrece “Consultar por el área contable” hacia `#contacto`. No crear un enlace que termine en un 404 ni inventar una página contable completa para resolverlo.

Valor inicial si esa página aún no existe: `false`. La implementación de `/contable` y la activación de ese enlace pertenecen a su integración posterior. La principal puede operar con el bloque de información y contacto mientras tanto.

## 7. Las cinco secciones obligatorias

### S1 — Presentación `#inicio`

Hero tipográfico sobre verde profundo. Una columna de texto alineada a la izquierda, con espacio generoso; en pantallas grandes, ancho de texto de unos 760 px. No necesita fotografía para estar completo.

Copy inicial propuesto:

- Antetítulo: “Iuris Balance · Puebla”.
- H1 único: “Asesoría jurídica en Puebla”.
- Apoyo: “Cuéntanos tu asunto. En Iuris Balance te orientamos sobre los servicios jurídicos que puedes solicitar y los siguientes pasos para una consulta.”
- CTA principal: “Solicitar orientación” → `#contacto`.
- CTA secundario: “Escribir por WhatsApp”, solo con número válido configurado.

Usar el dorado en un detalle breve, sin sustituir la jerarquía tipográfica. No añadir “consulta gratuita”, atención 24/7, resultados garantizados o años de experiencia sin confirmación del despacho.

### S2 — Servicios jurídicos `#servicios`

Título propuesto: “Servicios jurídicos para tu asunto”. Introducción breve y lista editorial basada en los servicios **reales documentados en la carpeta del proyecto**. Localizar y leer esos archivos antes de construir el catálogo; no pedir de nuevo una lista que ya está disponible. Cada servicio o grupo contiene nombre y descripción breve, preferiblemente de 25–45 palabras, conservando condiciones y alcance de la fuente. Si hay muchos servicios, agruparlos por tema dentro de esta sección sin omitirlos ni añadir especialidades. En escritorio puede organizarse en dos columnas con divisores finos; en móvil, una columna.

No usar tarjetas clicables si no tienen destino. El único CTA del bloque es “Consultar mi asunto” → `#contacto`. Conservar nombres de servicios en el HTML y no solo en iconos o imágenes.

Los archivos del proyecto son la fuente inicial del catálogo. Solo si faltan o no se pueden leer se permite contenido de prueba identificado como tal en desarrollo; primero registrar el archivo o dato faltante. No sustituir documentación disponible por servicios genéricos. La publicación se bloquea si la lista real sigue vacía.

### S3 — El despacho y su equipo `#despacho`

Título propuesto: “Conoce Iuris Balance”. Presentación real del despacho y de las personas que lo integran, dentro de este mismo bloque. La información de equipo no genera una sexta sección.

Mostrar nombres, funciones y fotografías únicamente cuando estén proporcionados y autorizados. No inventar credenciales, cédulas, asociaciones, premios, estadísticas ni testimonios. Si no hay fotografías, resolver con tipografía y composición editorial; no generar retratos que parezcan abogados reales del despacho. Tampoco usar contadores de asuntos ganados o reseñas ficticias.

Una introducción del despacho aprobada es obligatoria para publicar. La lista de perfiles individuales es opcional y puede omitirse sin dejar huecos ni fichas vacías.

### S4 — Área contable `#area-contable`

Bloque breve dentro de la principal que explique que la misma marca ofrece otra área de atención. Título propuesto: “También contamos con un área contable”. Texto inicial: “Conoce el área contable de Iuris Balance y consulta los servicios disponibles para tu situación.”

Mantener la identidad de Iuris Balance. Usar exclusivamente la información identificada como contable en los archivos del proyecto; no incorporar automáticamente el catálogo del despacho fiscal independiente. No duplicar aquí el contenido completo previsto para `/contable`. CTA y destino según 6.2.

### S5 — Contacto y ubicación `#contacto`

Título propuesto: “Cuéntanos tu asunto”. Dos columnas en escritorio: formulario y datos reales de contacto/ubicación. En móvil, formulario y después datos. Incluir dirección, horario, enlace de ubicación, teléfono y correo solo cuando estén configurados.

Usar enlace de mapa, sin iframe obligatorio ni carga de mapas de terceros al abrir la página. El formulario está regulado por la sección 8. No permitir documentos adjuntos.

### Pie de página

Nombre del despacho, descriptor, datos de contacto disponibles y acceso al aviso de privacidad. No añadir redes con enlaces vacíos ni iconos sin destino. El año puede calcularse automáticamente. El pie no debe contener texto técnico sobre framework, APIs o implementación.

## 8. Contrato del formulario

### 8.1 Campos

| Campo | Regla |
| --- | --- |
| `name` | Obligatorio; texto recortado, de 2 a 100 caracteres. Etiqueta “Nombre”. |
| `contact` | Obligatorio; correo o teléfono. Etiqueta “Correo electrónico o teléfono”. Máximo 254 caracteres. |
| `message` | Obligatorio; de 10 a 2000 caracteres tras recortar. Etiqueta “Cuéntanos brevemente tu asunto”. |
| `website` | Honeypot, oculto para personas y tecnologías de asistencia; debe quedar vacío. |

Si `contact` contiene `@`, validarlo como correo. De lo contrario, aceptar caracteres habituales de teléfono, normalizar a entre 7 y 15 dígitos y conservar su forma legible para el correo enviado. No exigir un número mexicano a quien escriba desde otro país. Esto no introduce una versión en inglés.

Mostrar un texto breve junto al formulario indicando que se trata de una consulta inicial y solicitando no enviar datos sensibles ni detalles confidenciales innecesarios. El aviso de privacidad debe ser el texto proporcionado por el despacho, accesible desde el formulario y el pie, por ejemplo mediante un diálogo accesible. No generar una política jurídica definitiva ni exigir una casilla adicional sin que el texto y el flujo hayan sido definidos.

### 8.2 Envío real

Para un proyecto nuevo, endpoint `POST /api/contact`, mismo origen, `Content-Type: application/json`. Si el repositorio ya tiene un endpoint válido, se permite un adaptador que mantenga exactamente estos campos y estados.

```json
{
  "name": "Nombre de la persona",
  "contact": "correo o teléfono",
  "message": "Descripción breve del asunto",
  "website": ""
}
```

El receptor jurídico es una configuración del servidor, nunca un dato aceptado desde el navegador. No añadir base de datos. Usar el proveedor de correo que se configure para el proyecto; no contratar uno automáticamente. Credenciales y dirección receptora permanecen en servidor.

- Validar también en servidor; limitar tamaño de petición y rechazar campos inesperados.
- Revisar el origen de las peticiones y aplicar un límite básico de frecuencia en el proveedor o en el servidor. Un contador en memoria que se pierde en cada función no se acepta como única protección en un despliegue distribuido.
- El honeypot no vacío no envía correos; la respuesta puede ser genérica para no revelar el filtro.
- No insertar entradas del usuario como HTML sin escapar; no permitir inyección en cabeceras de correo.
- No guardar el mensaje ni el medio de contacto en logs o herramientas de analítica.
- Un mensaje válido solo muestra éxito cuando el proveedor ha aceptado el correo. Esa aceptación no equivale a garantizar entrega en bandeja.
- No usar `mailto:` como sustituto del formulario ni simular el envío con un temporizador.

Respuestas JSON:

| HTTP | Cuerpo y uso |
| --- | --- |
| 200 | `{"ok":true}`; envío aceptado. |
| 400 | `{"ok":false,"code":"VALIDATION_ERROR","fieldErrors":{}}`; errores por campo. |
| 413 | `{"ok":false,"code":"PAYLOAD_TOO_LARGE"}`. |
| 429 | `{"ok":false,"code":"RATE_LIMITED"}`. |
| 503 | `{"ok":false,"code":"SERVICE_UNAVAILABLE"}`; credenciales ausentes, proveedor caído o fallo de envío. |

No devolver credenciales, trazas ni el error interno del proveedor. Para fallos de origen u otros rechazos, responder con un error genérico adecuado y sin procesar el envío.

### 8.3 Estados y textos

Estados: `idle`, `invalid`, `submitting`, `success`, `error`.

- Botón normal: “Enviar consulta”. Durante envío: “Enviando…”, deshabilitado para evitar duplicados.
- Éxito: “Tu consulta fue enviada. El despacho podrá contactarte por el medio que indicaste.”
- Error: “No pudimos enviar tu consulta. Inténtalo de nuevo o utiliza otro medio de contacto disponible.”
- No prometer un plazo de respuesta no acordado.
- Los errores conservan los datos y se anuncian de forma accesible. Tras éxito, limpiar el formulario. El estado de envío tiene un tiempo máximo y vuelve a un estado recuperable si falla la red.
- En una vista previa sin integración, indicar claramente que el envío no está habilitado y desactivar el botón. Esa vista no cumple los criterios de producción.

## 9. Datos y contenido

### 9.1 Servicios disponibles en la carpeta

**Los servicios ya están en la carpeta del proyecto que recibirá el agente de desarrollo.** Antes de redactar o implementar:

1. Enumerar los archivos del proyecto, empezando con `rg --files` o el explorador disponible. Respetar las exclusiones de dependencias y archivos generados.
2. Localizar y leer completos los documentos de servicios en PDF, Word, Markdown, texto, hojas de cálculo o imágenes. No asumir un nombre o subcarpeta que no se haya comprobado; usar extracción de texto u OCR si hace falta.
3. Identificar qué corresponde al despacho general jurídico, qué es contable y qué pertenece al despacho fiscal independiente. Los documentos de servicios de Cecilia Web Studio u otros clientes no son el catálogo de Iuris Balance.
4. Poblar la principal con los servicios jurídicos documentados. Usar los contables únicamente para el breve bloque del área contable y su posterior página. Mantener el contenido del sitio fiscal fuera de esta web salvo instrucción explícita posterior.
5. Crear `docs/content-sources.md` con ruta de cada documento y página, hoja o sección utilizada. Ese inventario es interno y no se muestra como texto técnico en la landing.
6. Si una fuente agrupa fiscal y contable de forma ambigua, aplicar la separación de 2.1, avanzar con lo inequívoco y registrar solo la duda concreta que no pueda resolverse. No inventar la clasificación ni detener las demás secciones.

El ZIP de este contrato incluye los logos, pero no debe presumirse que incluye esos documentos de servicios: el agente debe consultar también los archivos existentes en la carpeta de trabajo de Cecilia. No declarar “servicios pendientes de proporcionar” sin revisar primero esa carpeta.

### 9.2 Configuración de la web

Centralizar la configuración y el contenido en archivos tipados del repositorio. No dispersar teléfono, nombre o dirección por componentes. La siguiente estructura define los datos mínimos; no obliga a añadir un CMS.

```ts
type SiteContent = {
  brand: { name: 'Iuris Balance'; descriptor: 'Despacho Jurídico-Contable' };
  siteUrl: string | null;
  accountingPageEnabled: boolean;
  legalServices: Array<{ id: string; name: string; description: string }>;
  firmIntroduction: string | null;
  team: Array<{ name: string; role: string; photoUrl?: string; photoAlt?: string }>;
  contact: {
    email: string | null;
    phoneDisplay: string | null;
    phoneE164: string | null;
    whatsappE164: string | null;
    address: string | null;
    mapUrl: string | null;
    businessHours: string | null;
  };
  privacyNotice: string | null;
};
```

Los textos del hero y los títulos propuestos pueden implementarse como borrador editorial; deben revisarse antes de publicar. No tratar esos textos como evidencia de experiencia o especialización. Nombre y descriptor ya están resueltos y los servicios deben extraerse de la carpeta. Para presentación del despacho, perfiles, contacto, ubicación, horario, dominio final y aviso de privacidad, revisar también los documentos y la configuración existentes antes de marcar algo como pendiente. Solo se reportan como faltantes los datos que no se encuentren o sean contradictorios; las credenciales del correo se configuran por separado.

En desarrollo, los datos ausentes se identifican para la persona que mantiene el sitio. En producción, no mostrar corchetes, `lorem ipsum`, teléfonos de ejemplo, correos inventados ni promesas comerciales de prueba. Omitir datos opcionales y sus controles; los requisitos de publicación de la sección 13 no se omiten.

## 10. SEO y contenido indexable

- Principal en `/`, `lang="es-MX"`, un único H1 y H2 para las otras cuatro secciones.
- Título inicial: `Abogados en Puebla | Iuris Balance`.
- Descripción inicial: `Conoce los servicios jurídicos de Iuris Balance en Puebla. Consulta las áreas de atención y contacta al despacho para recibir orientación sobre tu asunto.`
- Canonical absoluto de `/` solo con dominio real configurado. `despacho.com` fue un ejemplo, no el dominio confirmado.
- Contenido principal disponible en HTML inicial; navegación con enlaces reales, no botones que requieran JavaScript para descubrir el destino.
- Incluir Open Graph y una imagen social con la marca; no presentarla como fotografía de personas o instalaciones inexistentes.
- Publicar sitemap y robots coherentes con el entorno. Las anclas `#servicios`, etc., no son páginas separadas del sitemap.
- Añadir `/contable` al sitemap únicamente cuando exista y sea publicable; no duplicar la canonical de esa página con la de `/`.
- Datos estructurados `LegalService` solo con propiedades reales: nombre, URL, logo y datos de contacto disponibles. No inventar calificaciones, reseñas, precios, coordenadas o especialidades.
- Consistencia del nombre, dirección y teléfono con los datos aprobados y el Perfil de Empresa. La verificación del perfil y Search Console requieren los accesos correspondientes y se documentan como tareas de publicación.
- Entornos de revisión sin indexación. Al publicar, comprobar que no permanezcan bloqueos accidentales de `noindex` o robots. No usar robots como protección de información privada.

## 11. Implementación y accesibilidad

### 11.1 Stack y despliegue

Para un proyecto nuevo, la tecnología establecida es **Astro + TypeScript + CSS mediante tokens**, desplegada en la cuenta **Vercel Pro** de Cecilia. La principal y, al construirse, `/contable` pertenecen al mismo proyecto de Vercel. La web fiscal tendrá un proyecto distinto; no es un tercer directorio de esta web.

#### Tecnologías establecidas para el proyecto nuevo

| Capa | Tecnología | Uso obligatorio o condición |
| --- | --- | --- |
| Framework web | **Astro** | Componentes y páginas informativas generadas como HTML durante la construcción. |
| Lenguaje | **TypeScript** | Configuración tipada, datos de servicios, validación y endpoint del formulario. |
| Estilos | **CSS nativo con variables y estilos de componentes Astro** | Tokens de color, tipografía, espaciado y diseño responsive definidos en este contrato. No añadir Tailwind ni otra biblioteca visual por defecto. |
| Interactividad | **JavaScript nativo y Fetch API** | Menú móvil, estados del formulario y petición a `/api/contact`. No instalar React ni convertir la landing en una SPA para estas funciones. |
| Integración de despliegue | **`@astrojs/vercel`** | Adaptador oficial para ejecutar la ruta de contacto en Vercel y conservar las páginas informativas prerenderizadas. |
| Backend del formulario | **API Route de Astro + Vercel Functions, runtime Node.js compatible** | `src/pages/api/contact.ts`, con `POST` y `export const prerender = false`. Validación y secretos en servidor. |
| Correo transaccional | **API del proveedor de correo configurado** | Consumida desde la función de servidor. El proveedor y sus credenciales no están definidos todavía; usar el que Cecilia configure. No contratar servicios ni fingir envíos. |
| SEO técnico | **HTML semántico, etiquetas meta, canonical, Open Graph, JSON-LD y sitemap XML** | Generados durante la construcción. No se requiere una biblioteca SEO adicional. Canonical y datos estructurados basados en información real. |
| Contenido | **Archivos TypeScript, JSON o Markdown del repositorio** | Extraer primero los servicios de la carpeta y conservar su trazabilidad. Sin CMS ni base de datos para esta entrega. |
| Identidad y tipografías | **SVG vectorial + fuentes web WOFF2 locales** | Logos aprobados, Libre Baskerville para títulos y Source Sans 3 para cuerpo e interfaz. No convertir los títulos de la web en imágenes. |
| Herramientas de desarrollo | **Node.js LTS compatible con Astro/Vercel y el gestor del repositorio** | Si el proyecto es nuevo, usar npm y `package-lock.json`; si ya existe, respetar su gestor y archivo de bloqueo. Fijar versiones compatibles en el repositorio. |
| Control de versiones | **Git** | Repositorio de Cecilia y cambios trazables; no incluye entregar el código fuente al cliente. |
| Hosting y publicación | **Vercel Pro** | Un proyecto para general + contable; el sitio fiscal se despliega en otro proyecto independiente. |
| Verificación | **Comprobaciones de Astro/TypeScript y Lighthouse** | Construcción, errores de tipos, accesibilidad, SEO y rendimiento según los criterios de aceptación. Documentar las comprobaciones realmente ejecutadas. |

Esta tabla fija el stack de una implementación nueva. Para un repositorio ya implementado se aplica la excepción indicada al final de 11.1: conservar su tecnología y cumplir los mismos requisitos funcionales, visuales y de HTML inicial. Los proveedores de correo y sus credenciales son configuración externa pendiente, no una autorización para añadir otro backend o una base de datos.

La decisión responde a la naturaleza informativa del sitio: servir el contenido completo en el HTML inicial y limitar JavaScript a menú, formulario y otras interacciones necesarias. Google recomienda considerar el prerenderizado o la generación en servidor para facilitar la entrega del contenido a usuarios y rastreadores. La elección de Astro es una decisión de implementación para este alcance, no una garantía de mejor posición que cualquier otra tecnología. Vercel Pro es el plan de alojamiento; no sustituye contenido relevante, SEO local, metadatos ni configuración correcta.

Configuración de referencia para un proyecto nuevo:

- Páginas informativas prerenderizadas durante la construcción, con el modo estático de Astro. No montar todo el sitio como SPA ni exigir JavaScript para leer los servicios.
- Usar `@astrojs/vercel` para la ruta dinámica del formulario. En `src/pages/api/contact.ts`, declarar `export const prerender = false` y procesar `POST` en servidor. Mantener `/` prerenderizada; aplicar lo mismo a `/contable` cuando exista.
- El adaptador permite ejecutar el envío mediante Vercel Functions. Una web totalmente estática sin función no puede procesar por sí sola ese `POST`; no entregar una falsa simulación del formulario como integración terminada.
- Mantener secretos y receptor de correo en las variables de entorno del servidor, diferenciando Preview y Production. Usar credenciales de prueba para los envíos de revisión cuando estén disponibles.
- Preparar `site` con la URL real, sitemap con las páginas publicadas y canonical propia por página. El sitio fiscal tendrá su dominio configurado, sitemap y canonical independientes.
- Fijar versiones compatibles mediante el archivo de bloqueo y la documentación oficial de la versión instalada; no asumir que los ejemplos de otra versión aplican sin comprobarlo.

Si ya existe un repositorio implementado, respetar su framework y convenciones. No migrar una web existente solo para usar Astro: verificar que entregue HTML prerenderizado o generado en servidor y que cumpla los mismos criterios. Esta excepción depende de un repositorio real, no de una preferencia inventada por el agente. No añadir una API persistente o un VPS solo para esta landing.

### 11.2 Componentes, accesibilidad y rendimiento

Usar componentes para encabezado, hero, servicios, despacho, área contable, contacto, pie y formulario. El contrato fija su comportamiento y aspecto, no una estructura de carpetas obligatoria. Las dependencias se fijan con el archivo de bloqueo del proyecto; no hacer actualizaciones mayores ajenas al alcance.

Requisitos de interfaz:

- HTML semántico y enlace para saltar al contenido; etiquetas visibles y asociadas a sus controles.
- Contraste mínimo de 4.5:1 para texto normal y 3:1 para texto grande y elementos gráficos de interfaz relevantes. Verificar también hover, foco y error.
- Recorrido completo por teclado; foco visible; menú y aviso de privacidad sin trampas de foco.
- Área táctil de los controles principales de al menos 44 × 44 px y separación suficiente.
- Sin desplazamiento horizontal a 320 px de ancho ni al ampliar texto al 200%.
- Respetar `prefers-reduced-motion`; no depender del movimiento o de hover para acceder a contenido.
- Imágenes con dimensiones reservadas y texto alternativo apropiado; decoraciones ignoradas por lectores de pantalla.
- Mostrar errores del formulario junto al campo y anunciarlos sin borrar la entrada.

Rendimiento: sin vídeos de fondo ni dependencias de animación voluminosas; optimizar imágenes autorizadas, cargar diferidamente las que estén fuera de pantalla y evitar fuentes/píxeles externos innecesarios. Objetivo de revisión Lighthouse móvil: rendimiento ≥90, accesibilidad ≥95 y SEO ≥95, con contenido final y medición documentada. Estos puntajes son objetivos de laboratorio; no equivalen a garantías de ranking o de métricas reales de campo.

## 12. Entregables para Cecilia

1. Página principal implementada en el repositorio y vista previa funcional en Vercel; separación del proyecto fiscal documentada.
2. Archivos de contenido/configuración, inventario `docs/content-sources.md` y uso de los SVG aprobados.
3. Formulario integrado o estado de configuración pendiente documentado, sin fingir éxito.
4. Variables de entorno documentadas en `.env.example`, sin secretos: URL pública cuando aplique, receptor jurídico y credenciales específicas del proveedor elegido. No imponer nombres de variables distintos de los existentes sin necesidad.
5. README con instalación, comandos de construcción, configuración, despliegue, cambio de contenido y comprobación del correo.
6. Evidencia breve de validación: escritorio/móvil, navegación, formulario, enlaces y metadatos. Reportar pendientes reales, no afirmar comprobaciones no realizadas.

## 13. Criterios de aceptación y publicación

| ID | Comprobación | Resultado obligatorio |
| --- | --- | --- |
| AC01 | Marca y activos | Iuris Balance en ambas áreas; SVG aprobado con platillos pequeños y base de la I alargada. |
| AC02 | Estilo | Verde `#073018`, dorado `#B08D3B`, fondos claros y tipografía definida; logo exacto sin reconstrucción. |
| AC03 | Alcance | Cinco secciones y un formulario en la principal; contable pertenece al mismo sitio y fiscal a una web independiente. Sin CMS, SaaS ni inglés. |
| AC04 | Navegación | Anclas, menú móvil y acceso a contacto funcionan; sin enlaces a `/contable` cuando está deshabilitada. |
| AC05 | Responsive | Revisión a 360, 768 y 1440 px; comprobación adicional de desbordamiento a 320 px. |
| AC06 | Formulario válido | Un envío de prueba llega al buzón jurídico real; datos y acentos son legibles. |
| AC07 | Formulario con fallos | Campos inválidos, doble clic, error del proveedor, caída de red, honeypot y exceso de frecuencia tienen el comportamiento definido. |
| AC08 | Privacidad y secretos | Aviso accesible; sin adjuntos, secretos en navegador ni mensajes de consulta en logs/analítica. |
| AC09 | SEO | H1 único, metadatos, canonical real, HTML indexable y sitemap coherente. |
| AC10 | Accesibilidad | Teclado, foco, contraste, etiquetas y reducción de movimiento comprobados. |
| AC11 | Contenido real | Servicios extraídos de los archivos del proyecto y trazables en `docs/content-sources.md`; presentación real; sin servicios del sitio fiscal importados por error ni credenciales, testimonios, fotos o contactos inventados. |
| AC12 | Calidad técnica | Construcción y verificaciones pasan; HTML informativo completo con JavaScript deshabilitado; formulario ejecutado en servidor en Vercel; sin errores de consola que afecten la página. |

Se puede entregar una vista previa con pendientes identificados. **No se considera lista para publicación** si faltan servicios reales y presentación aprobada, dominio final, medio de contacto válido, receptor e integración funcional del formulario o aviso de privacidad aprobado. La dirección y los perfiles individuales pueden omitirse mientras no estén disponibles; no fabricar esos datos para superar la revisión.

Un cambio visual de marca, una nueva especialidad, una sexta sección comercial o una nueva función modifica este contrato y su versión. Un ajuste de espaciado, corrección ortográfica o arreglo que cumpla el diseño existente no amplía el alcance.

## 14. Instrucción operativa para el agente

Lee este contrato completo y revisa el repositorio, los logos y los documentos de servicios disponibles en la carpeta antes de editar. Extrae el catálogo jurídico desde esos archivos y registra las fuentes. Después implementa la página principal dentro de estas reglas. Resuelve decisiones rutinarias sin detener el trabajo. Mantén los datos desconocidos separados del contenido real y avanza con una vista previa si falta configuración externa. No inventes hechos, no cambies el logo y no amplíes la entrega a la página completa de `/contable`, a la web fiscal independiente, al inglés o al SaaS. No mezcles el catálogo fiscal con el contable. Al terminar, ejecuta las comprobaciones aplicables y reporta qué funciona y qué falta para publicar.

## 15. Referencias

- Instrucción actual de Cecilia del 30 de octubre de 2026: general y contable en la misma web, fiscal completamente independiente, servicios disponibles en la carpeta y alojamiento en Vercel Pro. Sustituye cualquier combinación fiscal/contable de referencias anteriores.
- Propuesta “Propuesta Despacho Corregida”: alcance informativo, cinco bloques por página, formularios, inglés y SaaS fuera de esta fase, con la separación de sitios actualizada en este contrato.
- SVG verde/dorado y negro aprobados: autoridad para forma del logo y colores.
- Libre Baskerville y su licencia: https://github.com/impallari/Libre-Baskerville
- Source Sans y su licencia: https://github.com/adobe-fonts/source-sans
- Guía de Google Search Central: https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es
- HTML inicial y SEO con JavaScript: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- Astro en Vercel: https://docs.astro.build/en/guides/deploy/vercel/
- Prerenderizado y rutas dinámicas de Astro: https://docs.astro.build/en/guides/on-demand-rendering/
- Adaptador oficial para Vercel: https://docs.astro.build/en/guides/integrations-guide/vercel/

Las referencias técnicas orientan la implementación; no crean servicios, garantías comerciales ni requisitos de contenido adicionales a este contrato.

## 16. Historial de cambios

### Versión 1.1.1

- Se añade una matriz explícita de tecnologías por capa: Astro, TypeScript, CSS, JavaScript nativo, adaptador de Vercel, función del formulario, SEO, contenido, fuentes y herramientas de desarrollo.
- Se distingue el stack establecido de la configuración externa del proveedor de correo.

### Versión 1.1.0

- General y contable comparten sitio; fiscal queda definido como web y proyecto de Vercel independientes.
- Los servicios se leen de la carpeta del proyecto y se documentan sus fuentes; se elimina la suposición de que aún deben proporcionarse.
- Se concreta Astro + TypeScript para un proyecto nuevo en Vercel Pro, con HTML prerenderizado y función de servidor para el formulario.
