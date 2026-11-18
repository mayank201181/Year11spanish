import type { Metadata } from "next";
import { VerbsReference } from "@/components/VerbsReference";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "8-Tense IGCSE Verb Conjugator",
  description:
    "Interactive Pearson Edexcel IGCSE Spanish (4SP0) verb conjugator across Present, Preterite, Imperfect, Near Future, Simple Future, Conditional, Perfect and Present Subjunctive.",
};

export default function VerbsPage() {
  return <VerbsReference />;
}
