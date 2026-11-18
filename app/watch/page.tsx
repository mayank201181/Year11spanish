import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { WatchHub } from "@/components/WatchHub";

export const metadata: Metadata = {
  title: "Watch — ¡Rumbo al Nueve! IGCSE Sitcom",
  description: "Narrated bilingual sitcom episodes for every Edexcel IGCSE Spanish (4SP0) topic, with Examiner Grade-9 Traps and pause challenges.",
};

export default function WatchPage() {
  const items = TOPICS.map((t, idx) => ({
    id: t.id,
    num: idx + 1,
    title: t.title,
    icon: t.icon,
    strand: t.strand,
    summary: t.summary,
  }));
  return <WatchHub topics={items} />;
}
