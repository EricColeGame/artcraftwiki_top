export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "ArtCraft Wiki",
  shortName: "ArtCraft",
  logoText: "A",
  tagline: "AI Image, Video & 3D Creation Guides",
  description: "ArtCraft Wiki provides guides, tutorials, AI model information and workflow resources for the open-source AI image, video and 3D creative platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://artcraftwiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://artcraftwiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://getartcraft.com/",
  heroVideoId: "Ps5Dhc3Lh8U", // ArtCraft Studios showcase — "DOCUBOT" award-winning short film
  social: {
    discord: "https://discord.gg/artcraft",
    youtube: "https://www.youtube.com/@OfficialArtCraftStudios",
    twitter: "https://x.com/get_artcraft",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
