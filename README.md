# 🌟 Landing Page Profesional ATOMY - Israel Maldonado

Landing page de alto rendimiento, moderna y elegante tipo "Link-in-bio / Linktree Premium" para la marca **ATOMY**, desarrollada con **Astro**, enfocada en diseño *mobile-first*, máxima velocidad (100 en Google Lighthouse), accesibilidad WCAG y alta conversión hacia WhatsApp.

---

## 🚀 Características Principales

- ⚡ **Rendimiento Ultrarrápido (0kb JS bloqueante)**: Construido con Astro para generar HTML estático puro.
- 📱 **Diseño Mobile-First Exclusivo**: Optimizado para pantallas de 320px, 375px, 390px, 430px, Tablets y Desktop.
- 💬 **CTA de WhatsApp de Alta Conversión**: Botón principal destacado con badge de atención en tiempo real y mensaje configurable precargado.
- 🎨 **Estética Premium Atomy**: Paleta corporativa (Azul Real `#003366`, Cian `#0099DA`, Verde WhatsApp `#25D366`), *glassmorphism* sutil y microanimaciones suaves.
- ♿ **Accesibilidad WCAG AA/AAA**: Contrastes cromáticos altos, navegación por teclado, estados `:focus-visible`, textos alternativos y respeto a `prefers-reduced-motion`.
- 🔍 **SEO Técnico & Schema.org**: Open Graph completo, Twitter Cards, canonical URL y datos estructurados JSON-LD (`Person` & `Organization`).
- 🛠️ **Configuración 100% Centralizada**: Todo el contenido se gestiona desde un único archivo (`src/config/site.ts`).

---

## 📁 Estructura del Proyecto

```text
ISRAELMALDONADO/
├── public/
│   ├── favicon.svg                # Favicon vectorial con colores Atomy
│   ├── robots.txt                 # Directivas de indexación para buscadores
│   └── images/
│       └── israel-maldonado.png   # Fotografía de perfil para fallback/Open Graph
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── israel-maldonado.png # Imagen procesada y optimizada por Astro (WebP/AVIF)
│   ├── components/
│   │   ├── Profile.astro          # Hero con foto, badge oficial verificado y bio
│   │   ├── WhatsAppButton.astro   # Botón CTA principal con microinteracción
│   │   ├── SocialButton.astro     # Botón modular para redes sociales con SVG nativos
│   │   ├── SocialLinks.astro      # Contenedor y mapeo semántico de enlaces
│   │   └── Footer.astro           # Pie con disclaimer legal, copyright y botón de compartir
│   ├── config/
│   │   └── site.ts                # ⚙️ ARCHIVO CENTRAL DE CONFIGURACIÓN
│   ├── layouts/
│   │   └── Layout.astro           # Layout base HTML5, Metatags y Schema.org JSON-LD
│   ├── pages/
│   │   └── index.astro            # Página principal
│   └── styles/
│       └── global.css             # Tokens de diseño, reset, tipografía y animaciones
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## ⚙️ Cómo Personalizar tus Enlaces y Datos

Abre el archivo [`src/config/site.ts`](./src/config/site.ts). Encontrarás todas las variables comentadas y listas para editar:

```typescript
// 1. Dominio Definitivo
siteUrl: "https://israelmaldonado-atomy.com",

// 2. Número y Mensaje de WhatsApp
whatsapp: {
  phoneRaw: "+19733804633",
  phoneDisplay: "+1 973 380 4633",
  defaultMessage: "Hola, vi tu página de ATOMY y quisiera más información.",
  buttonText: "Contáctame por WhatsApp",
}

// 3. URLs de Redes Sociales
socialLinks: [
  // TikTok
  { platform: "TikTok", url: "https://www.tiktok.com/@atomyisraelmaldonado", ... },
  // YouTube
  { platform: "YouTube", url: "https://www.youtube.com/@VisionATOMY", ... },
  // Facebook
  { platform: "Facebook", url: "https://www.facebook.com/VisionAtomyIsrael", ... }
]
```

---

## 💻 Ejecución en Local

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

3. **Compilar para producción**:
   ```bash
   npm run build
   ```

4. **Previsualizar la compilación**:
   ```bash
   npm run preview
   ```

---

## 🌐 Guía de Despliegue

### Opción 1: Vercel (Recomendado)
1. Sube tu código a GitHub.
2. Ve a [vercel.com](https://vercel.com) e inicia sesión.
3. Haz clic en **"Add New Project"** e importa tu repositorio.
4. El preset detectará **Astro** automáticamente.
5. Haz clic en **Deploy**. ¡Listo en 30 segundos!

### Opción 2: Netlify
1. Conecta tu repositorio en [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Haz clic en **Deploy Site**.

### Opción 3: Cloudflare Pages
1. En el panel de Cloudflare, ve a **Workers & Pages** > **Create application** > **Pages**.
2. Conecta tu repositorio de GitHub.
3. Framework preset: **Astro** (Build command: `npm run build`, Output directory: `dist`).
4. Haz clic en **Save and Deploy**.
