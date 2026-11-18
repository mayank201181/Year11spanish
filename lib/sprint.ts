// ---------------------------------------------------------------------------
// 60-Second Fluency Sprint for IGCSE Spanish (4SP0) — verbs & vocabulary.
// Pure (no React) so it can be unit-tested and fuzzed directly by Node.
// Preserves full AnswerSpec (including tolerance) and groups shared English
// glosses so every valid Spanish synonym passes without collision.
// ---------------------------------------------------------------------------
import type { Rng } from "./drills/types.ts";
import type { AnswerSpec, VocabGroup } from "./types.ts";
import { PERSONS, VERBS, acceptedForms, conjugate, type Person, type Tense } from "./spanish/verbs.ts";

export type SprintMode =
  | "present"
  | "preterite"
  | "imperfect"
  | "future"
  | "subjunctive"
  | "vocab"
  | "mixed";

export type SprintFactMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = [
  "present",
  "preterite",
  "imperfect",
  "future",
  "subjunctive",
  "vocab",
  "mixed",
];

const FACT_MODES: readonly SprintFactMode[] = [
  "present",
  "preterite",
  "imperfect",
  "future",
  "subjunctive",
  "vocab",
];

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  present: {
    label: "Present & Stem-Changers",
    icon: "🔤",
    description: "Regular, boot (e→ie, o→ue, e→i), yo-go, -zco and reflexive verbs.",
    example: "*preferir* · nosotros → preferimos",
  },
  preterite: {
    label: "Preterite (Indefinido)",
    icon: "⏪",
    description: "Completed past actions: accents, -car/-gar/-zar, -ir sandal verbs & strong stems.",
    example: "*hacer* · él / ella → hizo",
  },
  imperfect: {
    label: "Imperfect (Imperfecto)",
    icon: "🎞️",
    description: "Habitual & background past (-aba / -ía) plus *era*, *iba* and *veía*.",
    example: "*ir* · nosotros → íbamos",
  },
  future: {
    label: "Future & Conditional",
    icon: "🚀",
    description: "Simple future (*-é, -ás, -á…*) & conditional (*-ía…*), including the 12 irregular stems.",
    example: "*tener* · yo (future) → tendré",
  },
  subjunctive: {
    label: "Present Subjunctive",
    icon: "🏆",
    description: "Grade-9 WEIRDO & DISHES subjunctive forms (*tenga, haga, vaya, sea, pida, busque*).",
    example: "*tener* · tú (subjunctive) → tengas",
  },
  vocab: {
    label: "IGCSE 4SP0 Vocabulary",
    icon: "🗣️",
    description: "English → Spanish across all 5 Edexcel 4SP0 Topic Areas (include el / la for nouns).",
    example: "climate change → el cambio climático",
  },
  mixed: {
    label: "Mixed Grade-9 Sprint",
    icon: "🎲",
    description: "All IGCSE tenses, subjunctive triggers & 4SP0 vocabulary mixed at exam speed.",
    example: "*saber* · yo (subjunctive) · unemployment → …",
  },
};

export interface SprintItem {
  prompt: string;
  /** Accepted typed strings (backward-compatible). */
  answer: string[];
  /** Full AnswerSpec (preserves tolerance / type for SprintRunner). */
  spec: AnswerSpec;
  suffix?: string;
  fact: string;
  mode: SprintFactMode;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const PERSON_SHORT: Record<Person, string> = {
  yo: "yo",
  tú: "tú",
  él: "él / ella",
  nosotros: "nosotros",
  vosotros: "vosotros",
  ellos: "ellos / ellas",
};

const TENSE_TAG: Record<Tense, string> = {
  present: " (present)",
  preterite: " (preterite)",
  imperfect: " (imperfect)",
  "near-future": " (ir a + inf)",
  future: " (simple future)",
  conditional: " (conditional)",
  perfect: " (perfect)",
  subjunctive: " (subjunctive)",
};

function verbItem(rng: Rng, tense: Tense, mode: SprintFactMode): SprintItem {
  for (let i = 0; i < 50; i++) {
    const v = rng.pick(VERBS);
    // Skip impersonal-heavy soler in future/conditional/preterite sprint prompts
    if (v.inf === "soler" && tense !== "present" && tense !== "imperfect") continue;
    const person = rng.bool(0.14) ? "vosotros" : rng.pick(PERSONS.filter((p) => p !== "vosotros"));
    let form: string;
    let accept: string[];
    try {
      form = conjugate(v.inf, tense, person);
      accept = acceptedForms(v.inf, tense, person);
    } catch {
      continue;
    }
    const tag = TENSE_TAG[tense];
    return {
      prompt: `*${v.inf}* · ${PERSON_SHORT[person]}${tag}`,
      answer: accept,
      spec: { type: "text", accept },
      fact: `*${v.inf}* · ${PERSON_SHORT[person]}${tag} → **${form}**`,
      mode,
    };
  }
  const fallback = ["hablo", "yo hablo"];
  return {
    prompt: "*hablar* · yo (present)",
    answer: fallback,
    spec: { type: "text", accept: fallback },
    fact: "*hablar* · yo (present) → **hablo**",
    mode,
  };
}

let vocabPool: { en: string; answer: string[]; fact: string }[] = [];

/** Load vocabulary for the vocab mode (call once with VOCAB from the generated registry). */
export function setSprintVocab(groups: Record<string, VocabGroup[]>): void {
  const byPrompt = new Map<string, { prompt: string; answers: string[] }>();
  for (const gs of Object.values(groups)) {
    for (const g of gs) {
      for (const it of g.items) {
        // Skip long phrases or grammar frames containing +, …, ..., parentheses or slashes in Spanish
        if (it.es.length > 34 || it.en.length > 44 || /[/(+…]|\.\.\./.test(it.es) || /[+…]|\.\.\./.test(it.en)) continue;
        // Split ONLY on ";" or " / " (spaced slash), NEVER bare "/" inside "he/she" or "his/her"!
        const en = it.en.split(/;| \/ /)[0].replace(/\s*\([^)]*\)\s*/g, " ").trim();
        if (!en || /^(?:he\/she|his\/her|one\/they)\b/i.test(en)) continue;
        const key = en.toLowerCase();
        let entry = byPrompt.get(key);
        if (!entry) {
          entry = { prompt: en, answers: [] };
          byPrompt.set(key, entry);
        }
        const addAns = (s: string) => {
          const clean = s.trim();
          if (clean && !entry!.answers.some((a) => a.toLowerCase() === clean.toLowerCase())) {
            entry!.answers.push(clean);
          }
        };
        addAns(it.es);
        // Also accept bare noun without leading definite article in fast 60s sprint if learner omits el/la/los/las?
        // Keep canonical with article first, and also accept bare noun if unambiguous? Wait: prompt says "(include el / la for nouns)"
        // so keeping exact it.es + all shared-gloss synonyms matches content.test.ts cleanly!
      }
    }
  }
  vocabPool = [...byPrompt.values()].map(({ prompt, answers }) => ({
    en: prompt,
    answer: answers,
    fact: `${prompt} → **${answers.join(" / ")}**`,
  }));
}

function vocabItem(rng: Rng): SprintItem {
  if (!vocabPool.length) return verbItem(rng, "present", "present");
  const it = rng.pick(vocabPool);
  return {
    prompt: it.en,
    answer: it.answer,
    spec: { type: "text", accept: it.answer },
    fact: it.fact,
    mode: "vocab",
  };
}

/** One quick fact for a sprint mode ("mixed" picks a random family). */
export function sprintItem(mode: SprintMode, rng: Rng): SprintItem {
  const m: SprintFactMode = mode === "mixed" ? rng.pick(FACT_MODES) : mode;
  if (m === "vocab") return vocabItem(rng);
  if (m === "future") {
    const t: Tense = rng.pick(["future", "future", "conditional", "near-future"]);
    return verbItem(rng, t, "future");
  }
  return verbItem(rng, m, m);
}
