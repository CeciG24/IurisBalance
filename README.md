# Iuris Balance
Instalar Node 22 LTS y ejecutar `npm ci`, `npm run dev`. Abrir http://localhost:4321. Comprobar con `npm run check` y `npm run build`.

Contenido: src/data/site.ts y services.json. Fuentes: docs/content-sources.md. Cinco secciones estáticas; /contable desactivada hasta que se construya y compruebe su ruta. Fiscal corresponde a un proyecto independiente.

## Estado de entrega
Vista previa, no publicable. POST /api/contact valida origen, tamaño, campos y contenido; nunca simula éxito. Responde 503 para solicitudes válidas hasta implementar el proveedor elegido. El botón permanece deshabilitado. Falta elegir proveedor, configurar remitente autenticado, receptor y secretos de servidor, e implementar protección distribuida (Vercel Firewall o proveedor) antes de activar envíos. No se ha contratado ningún servicio.

Faltan dominio final, contacto confirmado, aviso de privacidad aprobado y revisión editorial de presentación y textos. El aviso debe agregarse a site.ts; sustituir también el enlace del pie al integrar el texto. CONTACT_ENABLED no debe activarse hasta completar integración y prueba de entrega. PUBLICATION_READY controla indexación; SITE_URL configura canonical y sitemap. No activar publicación hasta resolver todos los requisitos del contrato.

## Vercel
Importar repositorio en el proyecto general/contable de Vercel Pro, instalar con npm ci y construir con npm run build. Adaptador oficial incluido. Configurar variables por entorno; mantener Preview con PUBLICATION_READY=false. No hay despliegue realizado ni accesos de Vercel proporcionados. Search Console y Perfil de Empresa requieren sus accesos al publicar.

## Revisión pendiente
Verificar visualmente 320, 360, 768 y 1440 px, teclado, zoom 200%, Lighthouse y formulario con proveedor real (entrega, frecuencia, caída de red, doble clic). Sin estos controles no se considera completa la aceptación de producción.

## Validación del 30 de octubre de 2026
Actualizados Astro a 7.3.8 y @astrojs/vercel a 11.0.17, con lockfile. `npm run check`: 0 errores, advertencias e indicaciones. `npm run build`: correcto con principal prerenderizada y función Vercel.
Auditoría en línea posterior: 0 críticos, 7 altos transitivos relacionados con path-to-regexp y zod en el adaptador Vercel. No aplicar audit fix --force: propone retroceder el adaptador a una versión que vuelve a introducir otros avisos. Requiere resolver dependencias del adaptador y repetir auditoría antes de producción. La auditoría offline no sirve para confirmar ausencia de avisos.
La instalación advierte que undici requiere Node >=22.19.0; actualizar Node a una versión LTS compatible antes de continuar. El build funcionó con el Node actual 22.14, pero eso no elimina el requisito declarado.
