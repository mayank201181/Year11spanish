import type { Metadata } from "next";
import { GlobalVocabHub } from "@/components/GlobalVocabHub";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "IGCSE 4SP0 Vocabulary Bank",
  description:
    "Browse, listen (normal 🔊 + slow 🐢), flip cards and self-test across ~850 high-frequency Pearson Edexcel IGCSE Spanish (4SP0) words and idioms.",
};

export default function VocabPage() {
  return <GlobalVocabHub />;
}
