import type { MetadataRoute } from "next";

// Web app manifest: makes Year 11 IGCSE Spanish (4SP0) installable on iPad ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 11 IGCSE Spanish (4SP0)",
    short_name: "IGCSE Spanish",
    description:
      "Pearson Edexcel IGCSE Spanish (4SP0) — discovery lessons, 850+ audio vocab bank, Grade-9 marks-savers, 8-tense verb drills, mock papers and narrated sitcom episodes.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: "#4f46e5",
    categories: ["education"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
