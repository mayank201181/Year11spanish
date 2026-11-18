import { Suspense } from "react";
import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";

export const metadata: Metadata = {
  title: "Edexcel 4SP0 Exam Cram & Marks-Savers",
  description: "Custom Pearson Edexcel IGCSE Spanish (4SP0) Exam Cram & Grade-9 Mark-Savers Sheet across Paper 1, Paper 2 and Paper 3.",
};

export default function CramPage() {
  const packs = TOPICS.map(buildTopicCramPack);
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Building Edexcel 4SP0 Exam Cram Sheet…</p>}>
      <CramSheet packs={packs} subjectLabel="IGCSE Spanish (4SP0)" />
    </Suspense>
  );
}
