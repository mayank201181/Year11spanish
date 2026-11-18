import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortsHub } from "@/components/ShortsHub";

export const metadata: Metadata = {
  title: "Concept Shorts — IGCSE Spanish (4SP0)",
  description: "Bite-sized vertical 9:16 concept Shorts for every topic in Pearson Edexcel IGCSE Spanish (4SP0).",
};

export default function ShortsPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading Concept Shorts…</p>}>
      <ShortsHub subjectLabel="IGCSE Spanish (4SP0)" />
    </Suspense>
  );
}
