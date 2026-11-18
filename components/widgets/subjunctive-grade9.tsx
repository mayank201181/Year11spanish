"use client";

import { useState, useSyncExternalStore } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "@/components/widgets/kit";
import { speakSpanish, speechAvailable } from "@/lib/speech";
import { conjugate, type Person } from "@/lib/spanish/verbs";

const noopSubscribe = () => () => {};

function useSpeechReady(): boolean {
  return useSyncExternalStore(noopSubscribe, speechAvailable, () => false);
}

function SpeakButton({ text, slow }: { text: string; slow?: boolean }) {
  const ready = useSpeechReady();
  if (!ready) return null;
  return (
    <button
      type="button"
      onClick={() => speakSpanish(text, { slow })}
      className="btn btn-ghost btn-sm min-h-10 min-w-10 rounded-lg border border-line px-2.5 text-sm font-bold"
      aria-label={slow ? `Hear slowly: ${text}` : `Hear in Spanish: ${text}`}
      title={slow ? "Listen slowly (0.7x)" : "Listen at natural speed"}
    >
      {slow ? "🐢 Slow" : "🔊 Listen"}
    </button>
  );
}

type TriggerKey = "creo" | "no-creo" | "imprescindible" | "ojala" | "cuando-fut" | "para-que";

interface TriggerOption {
  key: TriggerKey;
  es: string;
  en: string;
  mood: "present" | "subjunctive";
  category: string;
  why: string;
}

const TRIGGERS: readonly TriggerOption[] = [
  {
    key: "creo",
    es: "Creo que",
    en: "I think / believe that",
    mood: "present",
    category: "Affirmative Certainty",
    why: "Affirmative 'creo que / pienso que' declares what the speaker holds to be TRUE → Present Indicative!",
  },
  {
    key: "no-creo",
    es: "No creo que",
    en: "I do not think that",
    mood: "subjunctive",
    category: "WEIRDO — Doubt / Negated Belief",
    why: "Adding 'no' flips belief into doubt ('no creo que') → Present Subjunctive!",
  },
  {
    key: "imprescindible",
    es: "Es imprescindible que",
    en: "It is essential that",
    mood: "subjunctive",
    category: "WEIRDO — Impersonal Judgment",
    why: "Value judgments ('es imprescindible / importante / mejor que') frame necessity rather than declared fact → Present Subjunctive!",
  },
  {
    key: "ojala",
    es: "Ojalá que",
    en: "Hopefully / If only",
    mood: "subjunctive",
    category: "WEIRDO — Ojalá Wish",
    why: "'Ojalá (que)' ALWAYS expresses a wish or hope → 100% Subjunctive!",
  },
  {
    key: "cuando-fut",
    es: "Mañana, cuando",
    en: "Tomorrow, when",
    mood: "subjunctive",
    category: "Future Time Clause",
    why: "Future 'cuando' describes an event not yet realised → Present Subjunctive (NEVER future tense right after 'cuando'!).",
  },
  {
    key: "para-que",
    es: "Trabajo duro para que",
    en: "I work hard so that",
    mood: "subjunctive",
    category: "ESCAPA Purpose Conjunction",
    why: "'Para que' ('so that') ALWAYS triggers the Present Subjunctive!",
  },
];

type VerbKey = "tener" | "ser" | "ir" | "hacer" | "saber" | "llegar";

const VERB_CHOICES: Record<VerbKey, { en: string; tail: string; ruleNote: string }> = {
  tener: {
    en: "have good opportunities",
    tail: "buenas oportunidades",
    ruleNote: "Yo-Go verb: yo tengo → drop -o (teng-) → add -a endings (tenga, tengas, tengamos…).",
  },
  ser: {
    en: "be responsible",
    tail: "responsable",
    ruleNote: "DISHES irregular (yo soy does not end in -o) → sea, seas, sea, seamos, sean.",
  },
  ir: {
    en: "go to university",
    tail: "a la universidad",
    ruleNote: "DISHES irregular (yo voy) → vaya, vayas, vaya, vayamos, vayan.",
  },
  hacer: {
    en: "do more sport",
    tail: "más deporte",
    ruleNote: "Yo-Go verb: yo hago → drop -o (hag-) → add -a endings (haga, hagas, hagamos…).",
  },
  saber: {
    en: "know the truth",
    tail: "la verdad",
    ruleNote: "DISHES irregular (yo sé) → sepa, sepas, sepa, sepamos, sepan.",
  },
  llegar: {
    en: "arrive on time",
    tail: "a tiempo",
    ruleNote: "-GAR spelling shift: g → gu before -e across all persons (llegue, llegues, lleguemos…).",
  },
};

const SUBJECTS: { value: Person; es: string; pluralAdj: boolean }[] = [
  { value: "yo", es: "yo", pluralAdj: false },
  { value: "tú", es: "tú", pluralAdj: false },
  { value: "él", es: "mi hermana", pluralAdj: false },
  { value: "nosotros", es: "nosotros", pluralAdj: true },
  { value: "ellos", es: "los jóvenes", pluralAdj: true },
];

function SubjunctiveWorkbench() {
  const [triggerKey, setTriggerKey] = useState<TriggerKey>("creo");
  const [verbKey, setVerbKey] = useState<VerbKey>("tener");
  const [person, setPerson] = useState<Person>("ellos");

  const trig = TRIGGERS.find((t) => t.key === triggerKey) ?? TRIGGERS[0];
  const subj = SUBJECTS.find((s) => s.value === person) ?? SUBJECTS[4];
  const vMeta = VERB_CHOICES[verbKey];

  const indVerb = conjugate(verbKey, "present", person);
  const subjVerb = conjugate(verbKey, "subjunctive", person);
  const activeVerb = trig.mood === "subjunctive" ? subjVerb : indVerb;

  const tail =
    verbKey === "ser" && subj.pluralAdj ? "responsables" : vMeta.tail;
  const suffix =
    triggerKey === "cuando-fut" ? ", todo saldrá bien." : ".";
  const fullSentence = `${trig.es} ${subj.es} ${activeVerb} ${tail}${suffix}`;

  return (
    <WidgetFrame
      title="🔀 WEIRDO Subjunctive Trigger Workbench"
      tryThis={[
        "Start on **Creo que** (Indicative) and click **No creo que** — watch the verb flip instantly to the Subjunctive!",
        "Switch the verb to **ser**, **ir**, or **llegar** and test *nosotros* and *los jóvenes*.",
        "Select **Mañana, cuando** to see why Spanish says *cuando tengan* rather than *cuando tendrán*.",
      ]}
      caption={
        <span>
          <strong>Why this mood?</strong> {trig.why} <span className="text-ink-2">({vMeta.ruleNote})</span>
        </span>
      }
    >
      <div className="space-y-4">
        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">1. Choose Trigger / Conjunction</div>
          <Segmented
            label="Trigger phrase"
            value={triggerKey}
            onChange={setTriggerKey}
            options={TRIGGERS.map((t) => ({ value: t.key, label: t.es }))}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">2. Choose Subject</div>
            <Segmented
              label="Subject"
              value={person}
              onChange={setPerson}
              options={SUBJECTS.map((s) => ({ value: s.value, label: s.es }))}
            />
          </div>
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">3. Choose IGCSE Verb</div>
            <Segmented
              label="Verb"
              value={verbKey}
              onChange={setVerbKey}
              options={(Object.keys(VERB_CHOICES) as VerbKey[]).map((v) => ({ value: v, label: v }))}
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout
            label="Mood Selected"
            value={trig.mood === "subjunctive" ? "SUBJUNCTIVE 🏆" : "INDICATIVE 📘"}
            tone={trig.mood === "subjunctive" ? "good" : "brand"}
          />
          <Readout label="Indicative Form" value={indVerb} tone={trig.mood === "present" ? "brand" : "ink"} />
          <Readout label="Subjunctive Form" value={subjVerb} tone={trig.mood === "subjunctive" ? "good" : "ink"} />
        </div>

        <div className="rounded-2xl border-2 border-brand/30 bg-surface p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand">{trig.category}</span>
            <div className="flex items-center gap-2">
              <SpeakButton text={fullSentence} />
              <SpeakButton text={fullSentence} slow />
            </div>
          </div>
          <p className="mt-2 text-lg font-extrabold leading-snug text-ink sm:text-xl">
            <span>{trig.es} </span>
            <span className="underline decoration-dotted underline-offset-4">{subj.es}</span>{" "}
            <span className="rounded-md bg-brand/15 px-2 py-0.5 text-brand">{activeVerb}</span>{" "}
            <span>
              {tail}
              {suffix}
            </span>
          </p>
          <p className="mt-1 text-sm text-ink-2">
            Meaning: “{trig.en} {subj.es === "mi hermana" ? "my sister" : subj.es === "los jóvenes" ? "young people" : subj.es} — {vMeta.en}
            {triggerKey === "cuando-fut" ? ", everything will turn out well." : ".”"}
          </p>
        </div>
      </div>
    </WidgetFrame>
  );
}

type TopicScenario = "school" | "environment" | "holidays" | "health" | "tech";

interface UpgradeStage {
  bandLabel: string;
  tariffScore: string;
  es: string;
  en: string;
  features: string[];
}

const UPGRADE_SCENARIOS: Record<TopicScenario, { label: string; stages: [UpgradeStage, UpgradeStage, UpgradeStage] }> = {
  school: {
    label: "🎓 Area B: School Rules",
    stages: [
      {
        bandLabel: "Band 3 — Flat Indicative",
        tariffScore: "Basic (Grade 5–6)",
        es: "En mi instituto llevamos uniforme todos los días pero no me gusta porque es incómodo.",
        en: "In my school we wear a uniform every day, but I don't like it because it is uncomfortable.",
        features: ["Present indicative only", "Basic connectors (pero, porque)"],
      },
      {
        bandLabel: "Band 4 — Elevated Connectives & WEIRDO",
        tariffScore: "Strong (Grade 7–8)",
        es: "Aunque llevamos uniforme a diario, no creo que sea práctico; por lo tanto, es importante que el colegio escuche a los alumnos.",
        en: "Although we wear a uniform daily, I don't think it is practical; therefore, it is important that the school listens to students.",
        features: ["Negated opinion + subjunctive (no creo que sea)", "High-tariff connector (por lo tanto)", "WEIRDO trigger (es importante que escuche)"],
      },
      {
        bandLabel: "Band 5 — Full Grade-9 Paper 2 Q7 Powerhouse",
        tariffScore: "Top Band (Grade 9 🏆)",
        es: "Sin embargo, no creo que el uniforme sea cómodo; si yo fuera la directora, permitiría ropa más flexible para que los jóvenes se sientan a gusto cuando tengan exámenes.",
        en: "However, I don't think the uniform is comfortable; if I were the headteacher, I would allow more flexible clothing so that young people feel comfortable when they have exams.",
        features: [
          "Negated opinion + DISHES subjunctive (no creo que sea)",
          "Type 2 Si-clause (si fuera…, permitiría)",
          "ESCAPA purpose clause (para que se sientan)",
          "Future 'cuando' + subjunctive (cuando tengan)",
        ],
      },
    ],
  },
  environment: {
    label: "🌍 Area D: Environment",
    stages: [
      {
        bandLabel: "Band 3 — Flat Indicative",
        tariffScore: "Basic (Grade 5–6)",
        es: "El cambio climático es un problema muy grande y tenemos que reciclar más en mi ciudad.",
        en: "Climate change is a very big problem and we have to recycle more in my city.",
        features: ["Simple present only", "Generic vocabulary (muy grande)"],
      },
      {
        bandLabel: "Band 4 — Elevated Connectives & WEIRDO",
        tariffScore: "Strong (Grade 7–8)",
        es: "Dado que el calentamiento global amenaza el planeta, es imprescindible que reduzcamos los residuos y que usemos el transporte público.",
        en: "Given that global warming threatens the planet, it is essential that we reduce waste and use public transport.",
        features: ["Causal connector (dado que)", "WEIRDO + -zco subjunctive (es imprescindible que reduzcamos)"],
      },
      {
        bandLabel: "Band 5 — Full Grade-9 Paper 2 Q7 Powerhouse",
        tariffScore: "Top Band (Grade 9 🏆)",
        es: "Es urgente que protejamos la Tierra; si hubiera más energías renovables, reduciríamos la contaminación antes de que sea demasiado tarde.",
        en: "It is urgent that we protect the Earth; if there were more renewable energies, we would reduce pollution before it is too late.",
        features: [
          "WEIRDO + spelling-shift subjunctive (es urgente que protejamos)",
          "Impersonal imperfect subjunctive + conditional (si hubiera…, reduciríamos)",
          "ESCAPA conjunction + DISHES (antes de que sea)",
        ],
      },
    ],
  },
  holidays: {
    label: "✈️ Area A: Holidays",
    stages: [
      {
        bandLabel: "Band 3 — Flat Indicative",
        tariffScore: "Basic (Grade 5–6)",
        es: "En el futuro quiero ir a España porque hace buen tiempo y la comida es deliciosa.",
        en: "In the future I want to go to Spain because the weather is nice and the food is delicious.",
        features: ["Simple present + infinitive", "Basic 'porque'"],
      },
      {
        bandLabel: "Band 4 — Future 'Cuando' & Idioms",
        tariffScore: "Strong (Grade 7–8)",
        es: "En cuanto termine mis exámenes en junio, viajaré por Andalucía dado que vale la pena conocer su cultura.",
        en: "As soon as I finish my exams in June, I will travel through Andalusia since it is worth getting to know its culture.",
        features: ["Future 'en cuanto' + subjunctive (termine)", "Simple future (viajaré)", "Por for movement through + vale la pena"],
      },
      {
        bandLabel: "Band 5 — Full Grade-9 Paper 2 Q7 Powerhouse",
        tariffScore: "Top Band (Grade 9 🏆)",
        es: "Cuando tenga dieciocho años, recorreré Sudamérica; además, si tuviera suficiente dinero, me alojaría en un parador histórico — ¡ojalá haga sol todos los días!",
        en: "When I turn eighteen, I will tour South America; moreover, if I had enough money, I would stay in a historic parador — hopefully it is sunny every day!",
        features: [
          "Future 'cuando' + yo-go subjunctive (cuando tenga)",
          "Type 2 Si-clause (si tuviera…, me alojaría)",
          "Ojalá + subjunctive (¡ojalá haga sol!)",
        ],
      },
    ],
  },
  health: {
    label: "🏃 Area E: Healthy Living",
    stages: [
      {
        bandLabel: "Band 3 — Flat Indicative",
        tariffScore: "Basic (Grade 5–6)",
        es: "Comer fruta es bueno para la salud pero muchos jóvenes comen comida basura.",
        en: "Eating fruit is good for health, but many young people eat junk food.",
        features: ["Single tense", "Basic contrast (pero)"],
      },
      {
        bandLabel: "Band 4 — WEIRDO Advice & Contrast",
        tariffScore: "Strong (Grade 7–8)",
        es: "Por un lado la comida rápida es barata; sin embargo, recomiendo que los jóvenes sigan una dieta equilibrada y duerman ocho horas.",
        en: "On the one hand fast food is cheap; however, I recommend that young people follow a balanced diet and sleep eight hours.",
        features: ["Discourse frame (por un lado… sin embargo)", "WEIRDO + irregular subjunctives (sigan, duerman)"],
      },
      {
        bandLabel: "Band 5 — Full Grade-9 Paper 2 Q7 Powerhouse",
        tariffScore: "Top Band (Grade 9 🏆)",
        es: "Me preocupa que tantos adolescentes estén estresados; si hiciéramos deporte a diario, nos sentiríamos mucho mejor sin que la presión escolar nos afecte.",
        en: "It worries me that so many teenagers are stressed; if we did sport daily, we would feel much better without school pressure affecting us.",
        features: [
          "Emotion trigger + accented DISHES (me preocupa que estén)",
          "Nosotros imperfect subjunctive + conditional (si hiciéramos…, nos sentiríamos)",
          "ESCAPA 'sin que' + subjunctive (sin que nos afecte)",
        ],
      },
    ],
  },
  tech: {
    label: "📱 Area D: Digital Media",
    stages: [
      {
        bandLabel: "Band 3 — Flat Indicative",
        tariffScore: "Basic (Grade 5–6)",
        es: "Uso mi móvil todos los días y mando fotos a mis amigos porque es divertido.",
        en: "I use my phone every day and send photos to my friends because it is fun.",
        features: ["Repetitive simple present", "Noun repetition instead of pronouns"],
      },
      {
        bandLabel: "Band 4 — Double Pronouns & Balance",
        tariffScore: "Strong (Grade 7–8)",
        es: "Saco muchas fotos y se las envío a mis amigos al instante; no obstante, es aconsejable que limitemos el tiempo frente a la pantalla.",
        en: "I take lots of photos and send them to my friends instantly; nonetheless, it is advisable that we limit screen time.",
        features: ["Double object pronoun mutation (se las envío)", "Elevated connector (no obstante)", "WEIRDO subjunctive (limitemos)"],
      },
      {
        bandLabel: "Band 5 — Full Grade-9 Paper 2 Q7 Powerhouse",
        tariffScore: "Top Band (Grade 9 🏆)",
        es: "A pesar de que las redes sociales son útiles, cuando saco fotos solo se las envío a mis amigos íntimos para que nadie robe mis datos; si pudiera, usaría menos el móvil.",
        en: "Despite social media being useful, when I take photos I only send them to my close friends so that nobody steals my data; if I could, I would use my phone less.",
        features: [
          "Concessive frame (a pesar de que)",
          "Double pronoun 'se las envío'",
          "Purpose 'para que' + subjunctive (robe)",
          "Si pudiera + conditional (usaría)",
        ],
      },
    ],
  },
};

function Grade9WritingUpgrader() {
  const [scenario, setScenario] = useState<TopicScenario>("school");
  const [levelIdx, setLevelIdx] = useState<number>(2);

  const current = UPGRADE_SCENARIOS[scenario];
  const stage = current.stages[levelIdx] ?? current.stages[2];

  return (
    <WidgetFrame
      title="🚀 150-Word Grade-9 Writing Upgrader (Band 3 → Band 5)"
      tryThis={[
        "Drag the **Upgrade Level** slider from **1 (Band 3)** up to **3 (Band 5 Grade 9)** on any Edexcel topic.",
        "Tap **🔊 Listen** and **🐢 Slow** to shadow-read each Grade-9 sentence aloud for Paper 3 Speaking!",
        "Notice how every Band-5 sentence combines at least **three** high-tariff structures in ~25 words.",
      ]}
      caption={
        <span>
          <strong>Examiner Mark-Scheme Insight:</strong> Dropping just <strong>two</strong> Band-5 sentences like this into your 130–150-word Paper 2 Question 7 essay ticks every complex-grammar box in the top Linguistic Knowledge band!
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Edexcel 4SP0 Topic Area"
          value={scenario}
          onChange={setScenario}
          options={(Object.keys(UPGRADE_SCENARIOS) as TopicScenario[]).map((k) => ({
            value: k,
            label: UPGRADE_SCENARIOS[k].label,
          }))}
        />

        <Slider
          label="Linguistic Complexity Level"
          min={0}
          max={2}
          step={1}
          value={levelIdx}
          onChange={setLevelIdx}
          format={(v) => `Level ${v + 1}: ${current.stages[v]?.bandLabel ?? ""}`}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <Readout
            label="Edexcel Mark Band"
            value={stage.tariffScore}
            tone={levelIdx === 2 ? "good" : levelIdx === 1 ? "brand" : "ink"}
          />
          <Readout
            label="Word Count (Target Segment)"
            value={`${stage.es.split(/\s+/).length} words`}
            tone="brand"
          />
        </div>

        <div className="rounded-2xl border-2 border-line bg-surface p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand">{stage.bandLabel}</span>
            <div className="flex items-center gap-2">
              <SpeakButton text={stage.es} />
              <SpeakButton text={stage.es} slow />
            </div>
          </div>
          <p className="mt-2 text-lg font-extrabold leading-relaxed text-ink">{stage.es}</p>
          <p className="mt-1.5 text-sm italic text-ink-2">“{stage.en}”</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {stage.features.map((f) => (
              <span
                key={f}
                className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-ink"
              >
                ✓ {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "subjunctive-grade9-workbench",
    title: "WEIRDO Subjunctive Trigger Workbench",
    blurb: "Flip triggers, subjects and verbs to watch Indicative transform into Present Subjunctive live with audio.",
    Component: SubjunctiveWorkbench,
  },
  {
    id: "subjunctive-grade9-upgrader",
    title: "150-Word Grade-9 Writing Upgrader",
    blurb: "Transform flat Band-3 sentences into top-band Grade-9 Spanish across Areas A–E with Si clauses, WEIRDO and Se lo.",
    Component: Grade9WritingUpgrader,
  },
];
