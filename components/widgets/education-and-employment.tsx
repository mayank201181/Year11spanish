"use client";

import { useState, useSyncExternalStore } from "react";
import { RichInline } from "@/components/Rich";
import {
  Readout,
  Segmented,
  WidgetFrame,
  type WidgetDef,
} from "@/components/widgets/kit";
import { conjugate, type Person } from "@/lib/spanish/verbs";
import { speakSpanish, speechAvailable } from "@/lib/speech";

const noop = () => () => {};
function useSpeech(): boolean {
  return useSyncExternalStore(noop, speechAvailable, () => false);
}

function SpeakButton({
  text,
  slow,
  label,
}: {
  text: string;
  slow?: boolean;
  label?: string;
}) {
  const ok = useSpeech();
  if (!ok) return null;
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm min-h-10 px-3 font-bold"
      onClick={() => speakSpanish(text, { slow })}
      aria-label={label ?? (slow ? `Hear slowly: ${text}` : `Hear: ${text}`)}
      title={slow ? "Hear slowly (🐢)" : "Hear at normal speed (🔊)"}
    >
      {slow ? "🐢 Lento" : "🔊 Escuchar"}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Widget 1: Interactive School Rules Modal & Subjunctive Transformer
// ---------------------------------------------------------------------------

type RuleMode = "impersonal" | "subjunctive" | "hypothetical";

interface SchoolAction {
  id: string;
  label: string;
  inf: string;
  complement: string;
  condVerb: string;
  condComplement: string;
  polarity: "ban" | "duty";
}

const SCHOOL_ACTIONS: readonly SchoolAction[] = [
  {
    id: "movil",
    label: "📱 Apagar el móvil",
    inf: "apagar",
    complement: "el móvil antes de entrar en el aula",
    condVerb: "permitiría",
    condComplement: "consultar el móvil durante el recreo",
    polarity: "duty",
  },
  {
    id: "uniforme",
    label: "👔 Traer corbata",
    inf: "traer",
    complement: "corbata y chaqueta todos los días",
    condVerb: "eliminaría",
    condComplement: "la corbata obligatoria en verano",
    polarity: "duty",
  },
  {
    id: "puntual",
    label: "⏰ Llegar puntual",
    inf: "llegar",
    complement: "a clase antes de las ocho y media",
    condVerb: "empezaría",
    condComplement: "las clases a las nueve de la mañana",
    polarity: "duty",
  },
  {
    id: "deberes",
    label: "📚 Hacer deberes",
    inf: "hacer",
    complement: "tantos deberes cada fin de semana",
    condVerb: "reduciría",
    condComplement: "la cantidad de deberes para aliviar el estrés",
    polarity: "ban",
  },
  {
    id: "chicle",
    label: "🍬 Comer chicle",
    inf: "comer",
    complement: "chicle o bocadillos en el laboratorio",
    condVerb: "abriría",
    condComplement: "una cafetería más grande para el recreo",
    polarity: "ban",
  },
];

const SUBJECT_OPTIONS: { value: Person; label: string; esSubject: string }[] = [
  { value: "nosotros", label: "nosotros (we)", esSubject: "nosotros" },
  { value: "tú", label: "tú (you)", esSubject: "tú" },
  { value: "él", label: "el alumno (he/she)", esSubject: "cada alumno" },
  { value: "ellos", label: "los alumnos (they)", esSubject: "los alumnos" },
];

function SchoolRulesTransformer() {
  const [mode, setMode] = useState<RuleMode>("subjunctive");
  const [actionId, setActionId] = useState<string>("movil");
  const [person, setPerson] = useState<Person>("nosotros");
  const [feminineHead, setFeminineHead] = useState<boolean>(true);

  const action =
    SCHOOL_ACTIONS.find((a) => a.id === actionId) ?? SCHOOL_ACTIONS[0];
  const subjMeta =
    SUBJECT_OPTIONS.find((s) => s.value === person) ?? SUBJECT_OPTIONS[0];

  const subjVerb = conjugate(action.inf, "subjunctive", person);
  const indTrap = conjugate(action.inf, "present", person);

  let spanishSentence = "";
  let englishGloss = "";
  let grammarRule = "";
  let examTrap = "";
  let gradeTag = "";

  if (mode === "impersonal") {
    const opener =
      action.polarity === "ban"
        ? "En mi instituto está prohibido"
        : "En mi instituto hay que";
    spanishSentence = `${opener} ${action.inf} ${action.complement}.`;
    englishGloss =
      action.polarity === "ban"
        ? `In my school it is forbidden to (${action.inf}) …`
        : `In my school one must (${action.inf}) …`;
    grammarRule = "Impersonal modal (NO 'que') → BARE INFINITIVE directly";
    examTrap = `Never write "${opener.toLowerCase()} para ${action.inf}" or use an -ndo gerund!`;
    gradeTag = "Solid Core / Higher";
  } else if (mode === "subjunctive") {
    const opener =
      action.polarity === "ban"
        ? "Me parece injusto que no permitan que"
        : "El reglamento exige que";
    spanishSentence = `${opener} ${subjMeta.esSubject} ${subjVerb} ${action.complement}.`;
    englishGloss =
      action.polarity === "ban"
        ? `It seems unfair to me that they don't allow (${subjMeta.esSubject}) to …`
        : `The rulebook demands that (${subjMeta.esSubject}) …`;
    grammarRule = `WEIRDO trigger + QUE + ${subjMeta.esSubject} → PRESENT SUBJUNCTIVE (${subjVerb})`;
    examTrap = `Never use present indicative "${indTrap}" after "${opener.toLowerCase()}"!`;
    gradeTag = "Band 5 · Grade 9";
  } else {
    const headRole = feminineHead ? "la directora" : "el director";
    spanishSentence = `Si yo fuera ${headRole} de mi colegio, ${action.condVerb} ${action.condComplement}.`;
    englishGloss = `If I were the headteacher of my school, I would …`;
    grammarRule = `Si + IMPERFECT SUBJUNCTIVE (fuera) → CONDITIONAL (${action.condVerb})`;
    examTrap = `Never write "Si sería ${headRole}" — conditional NEVER goes right after si!`;
    gradeTag = "Band 5 · Grade 9 Gold";
  }

  return (
    <WidgetFrame
      title="⚖️ School Rules Modal & Subjunctive Switchboard"
      tryThis={[
        "Flip between **Impersonal Rule**, **WEIRDO Subjunctive**, and **Si fuera… Reform** to watch the verb morph live.",
        "Switch to *⏰ Llegar puntual* + *nosotros* in **WEIRDO Subjunctive** to spot the **-gar → -gu-** spelling shift (*lleguemos*)!",
        "Tap **🔊 Escuchar** or **🐢 Lento** to practise Paper 3 Speaking pronunciation.",
      ]}
      caption={
        <span>
          <strong>Grammar Rule Active:</strong> {grammarRule}.{" "}
          <span className="text-bad font-semibold">⚠️ Exam Trap: {examTrap}</span>
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Segmented<RuleMode>
            label="Grammar structure"
            value={mode}
            onChange={setMode}
            options={[
              { value: "impersonal", label: "1️⃣ Impersonal + Infinitive" },
              { value: "subjunctive", label: "2️⃣ WEIRDO + Subjunctive" },
              { value: "hypothetical", label: "3️⃣ Si fuera… + Conditional" },
            ]}
          />
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="School rule topic">
          {SCHOOL_ACTIONS.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setActionId(a.id)}
              aria-pressed={a.id === actionId}
              className={`chip font-bold ${
                a.id === actionId ? "border-brand bg-brand-soft text-brand" : ""
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        {mode === "subjunctive" ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-ink-2">
              Subject after &ldquo;que&rdquo;:
            </span>
            <Segmented<Person>
              label="Subject person"
              value={person}
              onChange={setPerson}
              options={SUBJECT_OPTIONS.map((s) => ({
                value: s.value,
                label: s.label,
              }))}
            />
          </div>
        ) : null}

        {mode === "hypothetical" ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-ink-2">
              Speaker gender:
            </span>
            <Segmented<"f" | "m">
              label="Speaker gender"
              value={feminineHead ? "f" : "m"}
              onChange={(v) => setFeminineHead(v === "f")}
              options={[
                { value: "f", label: "👩‍🏫 la directora (fem.)" },
                { value: "m", label: "👨‍🏫 el director (masc.)" },
              ]}
            />
          </div>
        ) : null}

        <div className="rounded-2xl border-2 border-brand/30 bg-surface-2 p-4 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand">
              Live Edexcel 4SP0 Sentence ({gradeTag})
            </span>
            <div className="flex items-center gap-2">
              <SpeakButton text={spanishSentence} />
              <SpeakButton text={spanishSentence} slow />
            </div>
          </div>
          <p className="text-lg sm:text-xl font-black text-ink" lang="es">
            {spanishSentence}
          </p>
          <p className="text-sm text-ink-2">{englishGloss}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout
            label="Target Verb Form"
            value={
              mode === "impersonal"
                ? action.inf
                : mode === "subjunctive"
                  ? subjVerb
                  : `fuera → ${action.condVerb}`
            }
            tone="good"
          />
          <Readout
            label="Mood / Tense"
            value={
              mode === "impersonal"
                ? "Bare Infinitive"
                : mode === "subjunctive"
                  ? "Present Subjunctive"
                  : "Imp. Subj + Cond."
            }
            tone="brand"
          />
          <Readout label="Paper 2/3 Tariff" value={gradeTag} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Post-16 & Job Interview Answer Upgrader (Band 3 → Grade 9)
// ---------------------------------------------------------------------------

type ScenarioId = "post16" | "workexp" | "career" | "interview";
type BandTier = "b3" | "b4" | "b5";

interface ScenarioSpec {
  id: ScenarioId;
  label: string;
  promptEs: string;
  tiers: Record<
    BandTier,
    {
      esF: string;
      esM: string;
      en: string;
      bandLabel: string;
      features: string[];
      pitfallAvoided: string;
    }
  >;
}

const SCENARIOS: readonly ScenarioSpec[] = [
  {
    id: "post16",
    label: "🎓 Post-16 & University",
    promptEs: "¿Qué planes tienes para cuando termines tus exámenes IGCSE?",
    tiers: {
      b3: {
        esF: "El año que viene voy a estudiar ciencias y luego quiero ir a la universidad.",
        esM: "El año que viene voy a estudiar ciencias y luego quiero ir a la universidad.",
        en: "Next year I am going to study sciences and afterwards I want to go to university.",
        bandLabel: "Band 3 (Safe Foundation)",
        features: ["Near future (voy a estudiar)", "quiero + infinitive"],
        pitfallAvoided: "Uses la universidad (never el colegio for university!).",
      },
      b4: {
        esF: "El curso próximo seguiré estudiando el bachillerato porque espero solicitar una plaza en la universidad.",
        esM: "El curso próximo seguiré estudiando el bachillerato porque espero solicitar una plaza en la universidad.",
        en: "Next academic year I will carry on studying Sixth Form because I hope to apply for a place at university.",
        bandLabel: "Band 4 (Strong Higher)",
        features: [
          "Simple future + seguir + gerund (seguiré estudiando)",
          "espero + infinitive (same subject)",
          "solicitar Ø una plaza (no para!)",
        ],
        pitfallAvoided: "Avoids the Anglicism 'aplicar para una plaza'.",
      },
      b5: {
        esF: "En cuanto apruebe mis exámenes en junio, haré el bachillerato; después me encantaría tomarme un año sabático antes de licenciarme en medicina.",
        esM: "En cuanto apruebe mis exámenes en junio, haré el bachillerato; después me encantaría tomarme un año sabático antes de licenciarme en medicina.",
        en: "As soon as I pass my exams in June, I will do Sixth Form; afterwards I would love to take a gap year before graduating in medicine.",
        bandLabel: "Band 5 (Grade 9 Gold 🏆)",
        features: [
          "Future time trigger + subjunctive (En cuanto apruebe)",
          "Irregular simple future (haré)",
          "Conditional idiom (me encantaría) + antes de + inf (licenciarme en)",
        ],
        pitfallAvoided: "Never puts simple future (*aprobaré*) after future *en cuanto / cuando*!",
      },
    },
  },
  {
    id: "workexp",
    label: "🏥 Work Experience",
    promptEs: "Háblame de tus prácticas laborales del año pasado.",
    tiers: {
      b3: {
        esF: "El año pasado trabajé en una farmacia durante cinco días y fue muy útil.",
        esM: "El año pasado trabajé en una farmacia durante cinco días y fue muy útil.",
        en: "Last year I worked in a pharmacy for five days and it was very useful.",
        bandLabel: "Band 3 (Preterite Only)",
        features: ["Regular preterite (trabajé)", "Summary preterite verdict (fue)"],
        pitfallAvoided: "Uses fue (not era) for the overall verdict.",
      },
      b4: {
        esF: "El trimestre pasado hice mis prácticas laborales en una clínica donde mi jefa era muy paciente y amable.",
        esM: "El trimestre pasado hice mis prácticas laborales en una clínica donde mi jefa era muy paciente y amable.",
        en: "Last term I did my work experience in a clinic where my boss was very patient and kind.",
        bandLabel: "Band 4 (Preterite + Imperfect)",
        features: [
          "Irregular preterite (hice)",
          "Imperfect character description (mi jefa era paciente)",
        ],
        pitfallAvoided: "Blends Preterite event with Imperfect background description.",
      },
      b5: {
        esF: "El trimestre pasado hice prácticas en un hospital: aunque al principio estaba nerviosa, atendí a los pacientes con confianza y aprendí muchísimo.",
        esM: "El trimestre pasado hice prácticas en un hospital: aunque al principio estaba nervioso, atendí a los pacientes con confianza y aprendí muchísimo.",
        en: "Last term I did work experience in a hospital: although at first I was nervous, I attended to patients with confidence and learnt a huge amount.",
        bandLabel: "Band 5 (Grade 9 Gold 🏆)",
        features: [
          "Imperfect emotional state (estaba nerviosa/o)",
          "Preterite + personal 'a' (atendí a los pacientes)",
          "Concessive connective (aunque) + superlative -ísimo",
        ],
        pitfallAvoided: "Includes mandatory personal 'a' before human direct object (a los pacientes)!",
      },
    },
  },
  {
    id: "career",
    label: "⚖️ Future Career & Articles",
    promptEs: "¿En qué te gustaría trabajar en el futuro y por qué?",
    tiers: {
      b3: {
        esF: "En el futuro quiero ser abogada porque es una profesión interesante.",
        esM: "En el futuro quiero ser abogado porque es una profesión interesante.",
        en: "In the future I want to be a lawyer because it is an interesting profession.",
        bandLabel: "Band 3 (Clean Article Drop)",
        features: ["ser + unmodified profession WITHOUT un/una (ser abogada/o)"],
        pitfallAvoided: "Drops una/un after ser before an unmodified profession!",
      },
      b4: {
        esF: "En el futuro quisiera ser una periodista excelente para viajar por el mundo y ganarme la vida escribiendo.",
        esM: "En el futuro quisiera ser un periodista excelente para viajar por el mundo y ganarme la vida escribiendo.",
        en: "In the future I would like to be an excellent journalist in order to travel the world and earn a living writing.",
        bandLabel: "Band 4 (Polite Quisiera + Modified Article)",
        features: [
          "Polite imperfect subjunctive (quisiera)",
          "Restores una/un because modified by excelente!",
          "-ista noun invariant (una/un periodista) + ganarme la vida",
        ],
        pitfallAvoided: "Restores un/una when an adjective modifies the profession, and keeps -ista!",
      },
      b5: {
        esF: "Todavía no estoy segura, pero busco un empleo que sea creativo, esté bien pagado y me permita ayudar a los demás.",
        esM: "Todavía no estoy seguro, pero busco un empleo que sea creativo, esté bien pagado y me permita ayudar a los demás.",
        en: "I am not sure yet, but I am looking for a job that is creative, is well paid, and allows me to help others.",
        bandLabel: "Band 5 (Grade 9 Gold 🏆)",
        features: [
          "Subjunctive relative clause for hypothetical job (que sea… esté… permita)",
          "Precision ser vs estar contrast (sea creativo vs esté bien pagado)",
        ],
        pitfallAvoided: "Uses subjunctive after 'busco un empleo que…' because the job is hypothetical!",
      },
    },
  },
  {
    id: "interview",
    label: "💼 Job Interview Pitch",
    promptEs: "¿Por qué deberíamos darle este puesto de verano en nuestro hotel?",
    tiers: {
      b3: {
        esF: "Soy una persona trabajadora y puntual, y hablo inglés y español.",
        esM: "Soy una persona trabajadora y puntual, y hablo inglés y español.",
        en: "I am a hard-working and punctual person, and I speak English and Spanish.",
        bandLabel: "Band 3 (Accurate Agreement)",
        features: ["Feminine agreement with una persona (trabajadora, puntual)"],
        pitfallAvoided: "Agrees trabajadora with feminine noun 'una persona' regardless of speaker!",
      },
      b4: {
        esF: "Me considero organizada, fiable y bilingüe; además, los sábados trabajo de recepcionista a tiempo parcial.",
        esM: "Me considero organizado, fiable y bilingüe; además, los sábados trabajo de recepcionista a tiempo parcial.",
        en: "I consider myself organised, reliable and bilingual; moreover, on Saturdays I work part-time as a receptionist.",
        bandLabel: "Band 4 (Strong Interview Register)",
        features: [
          "bilingüe with dieresis ü",
          "trabajar de + bare job noun (trabajo de recepcionista)",
        ],
        pitfallAvoided: "Uses 'trabajo de recepcionista' instead of 'trabajo como un/una recepcionista'.",
      },
      b5: {
        esF: "Si me dieran la oportunidad de trabajar en su hotel, aprendería rapidísimo porque soy bilingüe, ambiciosa y ya tengo experiencia atendiendo a los clientes.",
        esM: "Si me dieran la oportunidad de trabajar en su hotel, aprendería rapidísimo porque soy bilingüe, ambicioso y ya tengo experiencia atendiendo a los clientes.",
        en: "If you gave me the opportunity to work in your hotel, I would learn super fast because I am bilingual, ambitious, and already have experience serving customers.",
        bandLabel: "Band 5 (Grade 9 Gold 🏆)",
        features: [
          "Formal usted possessive (su hotel)",
          "Si + imperfect subjunctive (dieran) + conditional (aprendería)",
          "Gerund + personal 'a' (atendiendo a los clientes)",
        ],
        pitfallAvoided: "Sustains formal usted register and Type-2 hypothetical si clause flawlessly!",
      },
    },
  },
];

function InterviewUpgrader() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>("post16");
  const [tier, setTier] = useState<BandTier>("b5");
  const [gender, setGender] = useState<"f" | "m">("f");

  const scenario =
    SCENARIOS.find((s) => s.id === scenarioId) ?? SCENARIOS[0];
  const current = scenario.tiers[tier];
  const spanish = gender === "f" ? current.esF : current.esM;

  return (
    <WidgetFrame
      title="🚀 Post-16 & Job Interview Answer Upgrader (Band 3 → Grade 9)"
      tryThis={[
        "Pick an Edexcel Paper 2 / Paper 3 prompt, then step from **Band 3** → **Band 4** → **Band 5 (Grade 9)** to see exactly how top-band marks are earned.",
        "Toggle **Feminine (-a)** vs **Masculine (-o)** on *💼 Job Interview Pitch* (Band 3 vs Band 4) to see why *soy una persona trabajadora* stays feminine even for a boy!",
      ]}
      caption={
        <span>
          <strong>Mark-Saver Active:</strong> <RichInline text={current.pitfallAvoided} />
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Exam scenario">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setScenarioId(s.id)}
              aria-pressed={s.id === scenarioId}
              className={`chip font-bold ${
                s.id === scenarioId ? "border-brand bg-brand-soft text-brand" : ""
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented<BandTier>
            label="Target exam band"
            value={tier}
            onChange={setTier}
            options={[
              { value: "b3", label: "🥉 Band 3" },
              { value: "b4", label: "🥈 Band 4" },
              { value: "b5", label: "🏆 Band 5 (Grade 9)" },
            ]}
          />
          <Segmented<"f" | "m">
            label="Speaker agreement"
            value={gender}
            onChange={setGender}
            options={[
              { value: "f", label: "♀️ Feminine (-a)" },
              { value: "m", label: "♂️ Masculine (-o)" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-surface px-4 py-2.5 text-sm">
          <span className="font-extrabold text-ink-2">Examiner Prompt: </span>
          <span className="font-bold text-ink" lang="es">
            {scenario.promptEs}
          </span>
        </div>

        <div className="rounded-2xl border-2 border-brand/30 bg-surface-2 p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand">
              {current.bandLabel}
            </span>
            <div className="flex items-center gap-2">
              <SpeakButton text={spanish} />
              <SpeakButton text={spanish} slow />
            </div>
          </div>
          <p className="text-lg sm:text-xl font-black text-ink" lang="es">
            {spanish}
          </p>
          <p className="text-sm text-ink-2">{current.en}</p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {current.features.map((f) => (
              <span
                key={f}
                className="rounded-lg bg-surface px-2.5 py-1 text-xs font-bold text-brand border border-line"
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
    id: "education-and-employment.rules-transformer",
    title: "School Rules Modal & Subjunctive Switchboard",
    blurb:
      "Flip any school rule between impersonal infinitive, WEIRDO present subjunctive, and hypothetical 'Si fuera la directora…' with Spanish audio.",
    Component: SchoolRulesTransformer,
  },
  {
    id: "education-and-employment.interview-upgrader",
    title: "Post-16 & Job Interview Answer Upgrader",
    blurb:
      "Step real Edexcel Paper 2 & Paper 3 answers from Band 3 to Grade-9 Spanish across university plans, work experience, and job interviews.",
    Component: InterviewUpgrader,
  },
];
