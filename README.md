# IMS Tool — Operaciones (rediseño 2026)

Herramienta de operaciones para el departamento de Candycon en Lindon, reconstruida a partir del archivo monolítico original en una estructura mantenible, con la interfaz traducida al español.

## Estructura

```
FullTool/
├── index.html          # Estructura HTML (sin CSS/JS inline salvo lo estrictamente necesario)
├── css/
│   └── styles.css      # Todo el CSS: original normalizado + capa de diseño 2026
├── js/
│   ├── app.js          # Lógica completa (4 scripts originales concatenados en orden)
│   └── ui.js           # Mejoras de UI: tarjetas de resumen del turno
└── favicon.svg         # Ícono IMS (hexágono carmesí)
```

## Qué se mejoró

- **Navegación agrupada** en el encabezado fijo: Resumen, Inventario, Producción, Personal y Sistema (antes era una fila plana de botones).
- **Tarjetas de resumen** bajo el encabezado con los contadores de cada módulo; al tocarlas navegan al módulo.
- **Botón «Tablero»** ahora vive en el grupo Resumen (antes se inyectaba al final de la fila).
- **«Reporte diario»** (Day Word) movido del tablero al grupo Producción, junto a las demás acciones de producción.
- **Interfaz en español**: navegación, paneles, formularios, guía, mensajes y reportes Word. No se tradujeron identificadores internos, claves de `localStorage`, nombres de columnas de archivos importados ni valores lógicos.
- **Sistema visual**: paleta carmesí `#9B1C2E` + ámbar, escala tipográfica de 8 pasos, componentes uniformes (botones, tarjetas, tablas, alertas, badges, inputs) y diseño responsive.
- **Accesibilidad**: todos los botones con `type` explícito, todos los campos con etiqueta asociada, sin estilos inline (convertidos a clases).

## Invariantes (verificados)

- Configuración de Supabase (`IMS_CONFIG`) byte-idéntica a la original.
- CDN sin modificar: `xlsx@0.18.5`, `jszip@3.10.1`, `@supabase/supabase-js@2` (jsDelivr).
- Clave de `localStorage`: `shifthub_pro_v1`.
- Los 257 IDs estáticos y las 230 referencias de JS se resuelven; los 12 paneles son navegables.
- Funciona con `file://` (no usa `fetch`).

## Uso

Abrir `index.html` en el navegador. No requiere servidor ni instalación.
