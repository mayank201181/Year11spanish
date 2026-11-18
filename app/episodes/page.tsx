import { Suspense } from "react";
import type { Metadata } from "next";
import { EpisodesHub } from "@/components/EpisodesHub";

export const metadata: Metadata = {
  title: "Sitcom Episodes — ¡Rumbo al Nueve!",
  description: "Narrated bilingual sitcom episodes for every Pearson Edexcel IGCSE Spanish (4SP0) topic, featuring Examiner Grade-9 Traps and 3 pause challenges.",
};

export default function EpisodesPage() {
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Loading episodes…</p>}>
      <EpisodesHub />
    </Suspense>
  );
}
