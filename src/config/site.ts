/**
 * ============================================================================
 * CONFIGURACIÓN CENTRALIZADA - LANDING PAGE ATOMY / ISRAEL MALDONADO
 * ============================================================================
 * En este archivo puedes modificar fácilmente todos los datos del perfil,
 * enlaces de redes sociales, configuración de WhatsApp, SEO y metadatos.
 */

export interface SocialLink {
  id: string;
  platform: string;
  username: string;
  /** URL oficial directa al perfil o canal */
  url: string;
  /** Etiqueta descriptiva para accesibilidad y lectores de pantalla */
  ariaLabel: string;
  /** Identificador de color/estilo para el botón */
  theme: 'tiktok' | 'instagram' | 'youtube' | 'facebook' | 'whatsapp';
  /** Breve descripción del contenido o propósito del canal */
  badgeText?: string;
  /** Icono SVG identificador */
  icon: 'tiktok' | 'instagram' | 'youtube' | 'facebook' | 'whatsapp';
}

export interface SiteConfig {
  // --- IDENTIDAD Y PERFIL ---
  name: string;
  brand: string;
  role: string;
  tagline: string;
  bio: string;
  verifiedBadge: boolean;
  verifiedText: string;

  // --- CONFIGURACIÓN DE DOMINIO Y SEO ---
  /** Cambia aquí tu dominio oficial definitivo una vez publicado (ej. https://israelmaldonado.com) */
  siteUrl: string;
  siteName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  themeColor: string;
  locale: string;
  author: string;
  ogImage: string; // Ruta en /public o URL absoluta para compartir en WhatsApp, Facebook, etc.

  // --- CONFIGURACIÓN DE WHATSAPP (CTA PRINCIPAL) ---
  whatsapp: {
    /** Número telefónico en formato internacional sin espacios ni signos */
    phoneRaw: string;
    /** Número formateado visualmente para mostrar a los usuarios */
    phoneDisplay: string;
    /** Mensaje precargado configurable para iniciar la conversación */
    defaultMessage: string;
    /** Texto del botón principal (CTA) */
    buttonText: string;
    /** Subtexto o badge de llamado a la acción */
    badgeText: string;
    /** Indicador de disponibilidad */
    statusText: string;
  };

  // --- REDES SOCIALES OFICIALES ---
  socialLinks: SocialLink[];

  // --- INFORMACIÓN LEGAL Y FOOTER ---
  footer: {
    copyrightYear: number;
    rightsText: string;
    disclaimer: string;
  };
}

// Generador seguro de enlace de WhatsApp con mensaje precargado
const rawPhone = "19733804633"; // +1 973 380 4633
const defaultWaMsg = "Hola, vi tu página de ATOMY y quisiera más información.";
const whatsappUrl = `https://wa.me/${rawPhone}?text=${encodeURIComponent(defaultWaMsg)}`;

export const siteConfig: SiteConfig = {
  // 1. IDENTIDAD DE LA MARCA & PERFIL
  name: "Israel Maldonado",
  brand: "ATOMY",
  role: "Líder & Distribuidor Independiente",
  tagline: "Calidad Absoluta, Precio Absoluto",
  bio: "Conectando personas con productos de excelencia global y una oportunidad real de crecimiento.",
  verifiedBadge: true,
  verifiedText: "Distribuidor Oficial Atomy",

  // 2. CONFIGURACIÓN SEO Y DOMINIO DEFINITIVO
  /**
   * 👉 COLOCA AQUÍ TU DOMINIO FINAL
   * Ej: "https://israelmaldonado.com" o "https://visionatomy.com"
   */
  siteUrl: "https://apaquig.github.io/HisraelMaldonado",
  siteName: "ATOMY | Israel Maldonado - Contacto y Redes Oficiales",
  metaTitle: "Israel Maldonado | Líder Oficial ATOMY - Contacto y Redes",
  metaDescription: "Página oficial de contacto de Israel Maldonado, líder y distribuidor independiente de ATOMY. Conéctate vía WhatsApp, Instagram, TikTok, YouTube y Facebook.",
  keywords: [
    "Atomy",
    "Israel Maldonado",
    "Vision ATOMY",
    "Atomy Estados Unidos",
    "Atomy Mexico",
    "Atomy Colombia",
    "Productos Atomy",
    "Negocio Atomy",
    "Calidad Absoluta Precio Absoluto",
    "Salud y Belleza Atomy"
  ],
  themeColor: "#00A0E9", // Azul Celeste Oficial ATOMY Cyan
  locale: "es_US",
  author: "Israel Maldonado",
  ogImage: "/images/israel-maldonado.png", // Imagen para preview en WhatsApp, Facebook, Telegram

  // 3. CONFIGURACIÓN DE WHATSAPP (CANAL PRINCIPAL)
  whatsapp: {
    phoneRaw: "+19733804633",
    phoneDisplay: "+1 973 380 4633",
    defaultMessage: defaultWaMsg,
    buttonText: "Contáctame por WhatsApp",
    badgeText: "Canal Directo y Asesoría Inmediata",
    statusText: "Disponible para asesoría"
  },

  // 4. REDES SOCIALES Y CANALES
  socialLinks: [
    {
      id: "whatsapp-primary",
      platform: "WhatsApp",
      username: "+1 973 380 4633",
      /** URL oficial directa y segura a WhatsApp */
      url: whatsappUrl,
      ariaLabel: "Contactar a Israel Maldonado directamente por WhatsApp al +1 973 380 4633",
      theme: "whatsapp",
      badgeText: "Atención Inmediata",
      icon: "whatsapp"
    },
    {
      id: "instagram-official",
      platform: "Instagram",
      username: "@israelmaldonado.atomy",
      /**
       * 👉 URL OFICIAL DE INSTAGRAM:
       */
      url: "https://www.instagram.com/israelmaldonado.atomy",
      ariaLabel: "Seguir la cuenta de Instagram de Israel Maldonado (@israelmaldonado.atomy)",
      theme: "instagram",
      badgeText: "Fotos y Novedades",
      icon: "instagram"
    },
    {
      id: "tiktok-official",
      platform: "TikTok",
      username: "@atomyisraelmaldonado",
      /**
       * 👉 COLOCA AQUÍ LA URL OFICIAL DE TIKTOK:
       * Formato: "https://www.tiktok.com/@atomyisraelmaldonado"
       */
      url: "https://www.tiktok.com/@atomyisraelmaldonado",
      ariaLabel: "Seguir la cuenta de TikTok de Israel Maldonado (@atomyisraelmaldonado)",
      theme: "tiktok",
      badgeText: "Videos y Testimonios",
      icon: "tiktok"
    },
    {
      id: "youtube-official",
      platform: "YouTube",
      username: "VisionATOMY",
      /**
       * 👉 COLOCA AQUÍ LA URL OFICIAL DE YOUTUBE:
       * Formato: "https://www.youtube.com/@VisionATOMY" o enlace a canal
       */
      url: "https://www.youtube.com/@VisionATOMY",
      ariaLabel: "Suscribirse al canal oficial de YouTube VisionATOMY",
      theme: "youtube",
      badgeText: "Presentaciones y Capacitación",
      icon: "youtube"
    },
    {
      id: "facebook-official",
      platform: "Facebook",
      username: "VisionAtomyIsrael",
      /**
       * 👉 COLOCA AQUÍ LA URL OFICIAL DE FACEBOOK:
       * Formato: "https://www.facebook.com/VisionAtomyIsrael"
       */
      url: "https://www.facebook.com/VisionAtomyIsrael",
      ariaLabel: "Visitar la página oficial de Facebook VisionAtomyIsrael",
      theme: "facebook",
      badgeText: "Comunidad y Noticias",
      icon: "facebook"
    }
  ],

  // 5. FOOTER Y LEYENDA LEGAL
  footer: {
    copyrightYear: new Date().getFullYear(),
    rightsText: "Todos los derechos reservados.",
    disclaimer: "Distribuidor Independiente de ATOMY. Las marcas y logotipos de ATOMY son propiedad registrada de Atomy Co., Ltd."
  }
};
