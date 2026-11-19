"use client";

import { useState, useSyncExternalStore } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "@/components/widgets/kit";
import { conjugate, type Person } from "@/lib/spanish/verbs";
import { speakSpanish, speechAvailable } from "@/lib/speech";

const noop = () => () => {};
function useSpeech(): boolean {
  return useSyncExternalStore(noop, speechAvailable, () => false);
}

function SpeakButton({ text, slow, label }: { text: string; slow?: boolean; label?: string }) {
  const ok = useSpeech();
  if (!ok) return null;
  return (
    <button
      type="button"
      className="btn btn-ghost btn-sm min-h-10 min-w-10 px-2.5"
      onClick={(e) => {
        e.stopPropagation();
        speakSpanish(text, { slow });
      }}
      aria-label={label ?? (slow ? `Hear slowly: ${text}` : `Hear: ${text}`)}
      title={slow ? "Hear slowly (🐢)" : "Hear Spanish audio (🔊)"}
    >
      {slow ? "🐢 Lento" : "🔊 Escuchar"}
    </button>
  );
}

type FrameKey = "hay-que" | "se-deberia" | "deberiamos" | "es-urgente" | "es-imprescindible" | "si-clause";

interface ActionSpec {
  id: string;
  label: string;
  inf: string;
  impSubj3s: string;
  tail: string;
  en: string;
  shiftNote: string;
}

const ECO_SPECS: readonly ActionSpec[] = [
  {
    id: "proteger",
    label: "proteger el planeta",
    inf: "proteger",
    impSubj3s: "protegiera",
    tail: "el planeta y los ecosistemas",
    en: "protect the planet and ecosystems",
    shiftNote: "Subjunctive keeps soft /x/ with g → j before -a: proteja, protejamos, protejan!",
  },
  {
    id: "reducir",
    label: "reducir emisiones",
    inf: "reducir",
    impSubj3s: "redujera",
    tail: "nuestra huella de carbono",
    en: "reduce our carbon footprint",
    shiftNote: "Subjunctive builds from yo reduzco (-zc-): reduzca, reduzcamos, reduzcan!",
  },
  {
    id: "apagar",
    label: "apagar las luces",
    inf: "apagar",
    impSubj3s: "apagara",
    tail: "las luces para ahorrar energía",
    en: "switch off lights to save energy",
    shiftNote: "Subjunctive preserves hard /g/ with g → gu before -e: apague, apaguemos, apaguen!",
  },
  {
    id: "reutilizar",
    label: "reutilizar envases",
    inf: "reutilizar",
    impSubj3s: "reutilizara",
    tail: "las bolsas y los envases",
    en: "reuse bags and packaging",
    shiftNote: "Subjunctive shifts z → c before -e: reutilice, reutilicemos, reutilicen!",
  },
  {
    id: "reciclar",
    label: "reciclar vidrio",
    inf: "reciclar",
    impSubj3s: "reciclara",
    tail: "el vidrio, el papel y el plástico",
    en: "recycle glass, paper and plastic",
    shiftNote: "Regular -ar vowel flip (-a → -e): recicle, reciclemos, reciclen.",
  },
];

const SUBJECT_META: Record<Exclude<Person, "vosotros" | "yo">, { es: string; en: string }> = {
  tú: { es: "tú", en: "you" },
  él: { es: "el gobierno", en: "the government" },
  nosotros: { es: "todos nosotros", en: "all of us" },
  ellos: { es: "las empresas", en: "companies" },
};

function EcoSwitchboardWidget() {
  const [frame, setFrame] = useState<FrameKey>("se-deberia");
  const [actionId, setActionId] = useState<string>("proteger");
  const [subjPerson, setSubjPerson] = useState<Exclude<Person, "vosotros" | "yo">>("nosotros");

  const act = ECO_SPECS.find((a) => a.id === actionId) ?? ECO_SPECS[0];
  const sMeta = SUBJECT_META[subjPerson];

  let sentence = "";
  let english = "";
  let grammarMode = "";
  let badgeTone: "brand" | "good" | "bad" = "brand";

  if (frame === "hay-que") {
    sentence = `Hay que ${act.inf} ${act.tail}.`;
    english = `It is necessary to ${act.en}.`;
    grammarMode = "Impersonal + INFINITIVE (no 'que')";
  } else if (frame === "se-deberia") {
    sentence = `Se debería ${act.inf} ${act.tail}.`;
    english = `People / One should ${act.en}.`;
    grammarMode = "Conditional Impersonal + INFINITIVE";
  } else if (frame === "deberiamos") {
    sentence = `Deberíamos ${act.inf} ${act.tail}.`;
    english = `We should ${act.en}.`;
    grammarMode = "Modal Conditional + INFINITIVE";
  } else if (frame === "es-urgente" || frame === "es-imprescindible") {
    const head = frame === "es-urgente" ? "Es urgente que" : "Es imprescindible que";
    const headEn = frame === "es-urgente" ? "It is urgent that" : "It is essential that";
    let verbForm: string;
    if (act.inf === "reducir") {
      const map: Record<Exclude<Person, "vosotros" | "yo">, string> = {
        tú: "reduzcas",
        él: "reduzca",
        nosotros: "reduzcamos",
        ellos: "reduzcan",
      };
      verbForm = map[subjPerson];
    } else {
      verbForm = conjugate(act.inf, "subjunctive", subjPerson);
    }
    const subjLabel = subjPerson === "tú" ? "" : `${sMeta.es} `;
    sentence = `${head} ${subjLabel}${verbForm} ${act.tail}.`;
    english = `${headEn} ${sMeta.en} ${act.en}.`;
    grammarMode = "WEIRDO + QUE → PRESENT SUBJUNCTIVE";
    badgeTone = "good";
  } else {
    sentence = `Si todo el mundo ${act.impSubj3s} ${act.tail}, habría mucha menos contaminación.`;
    english = `If everyone were to ${act.en}, there would be much less pollution.`;
    grammarMode = "Grade-9 Si + Imperfect Subjunctive (-ra) → Conditional";
    badgeTone = "good";
  }

  return (
    <WidgetFrame
      title="Eco-Action Grammar Switchboard"
      tryThis={[
        "Switch from **Se debería** to **Es urgente que** and watch the infinitive flip into the **present subjunctive**!",
        "Select **proteger**, **reducir**, or **apagar** in subjunctive mode to hear and inspect the Grade-9 consonant spelling shifts.",
      ]}
      caption={
        <div>
          <strong>Exam Rule:</strong> {act.shiftNote}
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">1. Choose Sentence Frame</div>
          <Segmented<FrameKey>
            label="Sentence frame"
            value={frame}
            onChange={setFrame}
            options={[
              { value: "hay-que", label: "Hay que…" },
              { value: "se-deberia", label: "Se debería…" },
              { value: "deberiamos", label: "Deberíamos…" },
              { value: "es-urgente", label: "Es urgente que…" },
              { value: "es-imprescindible", label: "Es imprescindible que…" },
              { value: "si-clause", label: "Si todo el mundo…" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">2. Choose Eco-Action Verb</div>
            <Segmented<string>
              label="Eco action"
              value={actionId}
              onChange={setActionId}
              options={ECO_SPECS.map((a) => ({ value: a.id, label: a.id }))}
            />
          </div>

          {(frame === "es-urgente" || frame === "es-imprescindible") && (
            <div>
              <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">3. Choose Subjunctive Subject</div>
              <Segmented<Exclude<Person, "vosotros" | "yo">>
                label="Subjunctive subject"
                value={subjPerson}
                onChange={setSubjPerson}
                options={[
                  { value: "tú", label: "tú" },
                  { value: "él", label: "el gobierno" },
                  { value: "nosotros", label: "nosotros" },
                  { value: "ellos", label: "las empresas" },
                ]}
              />
            </div>
          )}
        </div>

        <div className="rounded-2xl border-2 border-brand/30 bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-extrabold text-brand">{grammarMode}</span>
            <div className="flex items-center gap-1">
              <SpeakButton text={sentence} />
              <SpeakButton text={sentence} slow />
            </div>
          </div>
          <p className="mt-3 text-lg font-extrabold leading-snug text-ink">{sentence}</p>
          <p className="mt-1 text-sm italic text-ink-2">“{english}”</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <Readout label="Target Verb Structure" value={frame === "es-urgente" || frame === "es-imprescindible" ? "Present Subjunctive" : frame === "si-clause" ? "Imp. Subj. (-ra) + Cond." : "Infinitive (+ -ar/-er/-ir)"} tone={badgeTone} />
          <Readout label="Edexcel 4SP0 Band" value={frame === "es-urgente" || frame === "es-imprescindible" || frame === "si-clause" ? "Band 5 (Grade 8–9)" : "Band 4–5 Solid Core"} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

type BenefitKey = "contacto" | "educacion" | "solidaridad";
type PivotKey = "sin-embargo" | "no-obstante" | "a-pesar-de";
type RiskKey = "ciberacoso" | "noticias-falsas" | "adiccion";
type AdviceKey = "privacidad" | "contraseñas" | "tiempo";

const BENEFITS: Record<BenefitKey, { label: string; es: string; en: string }> = {
  contacto: {
    label: "Stay in touch",
    es: "Por un lado, una gran ventaja de las redes sociales es que nos permiten mantenernos en contacto al instante con amigos en el extranjero.",
    en: "On the one hand, a major advantage of social media is that it lets us stay in touch instantly with friends abroad.",
  },
  educacion: {
    label: "Study & apps",
    es: "Por un lado, la tecnología digital facilita el aprendizaje porque podemos descargar aplicaciones educativas muy útiles.",
    en: "On the one hand, digital technology facilitates learning because we can download very useful educational apps.",
  },
  solidaridad: {
    label: "Charity awareness",
    es: "Por un lado, Internet es una herramienta poderosa para concienciar sobre el cambio climático y recaudar fondos para una ONG.",
    en: "On the one hand, the Internet is a powerful tool to raise awareness about climate change and raise funds for an NGO.",
  },
};

const PIVOTS: Record<PivotKey, { label: string; es: string; en: string }> = {
  "sin-embargo": { label: "Sin embargo", es: "Sin embargo, por otro lado,", en: "However, on the other hand," },
  "no-obstante": { label: "No obstante", es: "No obstante,", en: "Nevertheless," },
  "a-pesar-de": { label: "A pesar de todo", es: "A pesar de sus ventajas,", en: "Despite its advantages," },
};

const RISKS: Record<RiskKey, { label: string; es: string; en: string }> = {
  ciberacoso: {
    label: "El ciberacoso",
    es: "el peligro principal es que muchos adolescentes sufren el ciberacoso y el robo de identidad.",
    en: "the main danger is that many teenagers suffer cyberbullying and identity theft.",
  },
  "noticias-falsas": {
    label: "Noticias falsas",
    es: "me preocupan muchísimo las noticias falsas y la pérdida de privacidad en la red.",
    en: "fake news and the loss of privacy online worry me a great deal.",
  },
  adiccion: {
    label: "Adicción al móvil",
    es: "es preocupante que tantos jóvenes estén enganchados al móvil y duerman menos horas.",
    en: "it is worrying that so many young people are hooked on their phones and sleep fewer hours.",
  },
};

const ADVICE: Record<AdviceKey, { label: string; es: string; en: string }> = {
  privacidad: {
    label: "Configure privacy",
    es: "Por eso, es aconsejable que configuremos el perfil en privado y bloqueemos a los desconocidos.",
    en: "Therefore, it is advisable that we set our profile to private and block strangers.",
  },
  contraseñas: {
    label: "Protect passwords",
    es: "Por consiguiente, recomiendo que nunca compartas tu contraseña ni subas datos personales.",
    en: "Consequently, I recommend that you never share your password or upload personal details.",
  },
  tiempo: {
    label: "Unplug at night",
    es: "Para evitar estos riesgos, es imprescindible que apaguemos las pantallas una hora antes de dormir.",
    en: "To avoid these risks, it is essential that we switch off screens an hour before sleeping.",
  },
};

function DigitalDebateBuilderWidget() {
  const [benefit, setBenefit] = useState<BenefitKey>("contacto");
  const [pivot, setPivot] = useState<PivotKey>("sin-embargo");
  const [risk, setRisk] = useState<RiskKey>("ciberacoso");
  const [advice, setAdvice] = useState<AdviceKey>("privacidad");

  const fullParagraph = `${BENEFITS[benefit].es} ${PIVOTS[pivot].es} ${RISKS[risk].es} ${ADVICE[advice].es}`;
  const fullEnglish = `${BENEFITS[benefit].en} ${PIVOTS[pivot].en} ${RISKS[risk].en} ${ADVICE[advice].en}`;
  const wordCount = fullParagraph.trim().split(/\s+/).length;

  return (
    <WidgetFrame
      title="Digital Media Pros vs Risks Debate Builder"
      tryThis={[
        "Mix any **Ventaja**, **Contrast Pivot**, **Peligro**, and **WEIRDO Subjunctive Safety Rule** to assemble a ~55-word Paper 2 Q6/Q7 model paragraph!",
        "Tap **🔊 Escuchar** and shadow-read the paragraph aloud to practise Paper 3 Speaking fluency.",
      ]}
      caption={
        <div>
          <strong>Paper 2 &amp; Paper 3 Tip:</strong> Notice how every combination pairs balanced contrast (<em>Por un lado… {PIVOTS[pivot].label}…</em>) with a present-subjunctive safety recommendation at the end!
        </div>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">1. Por un lado (Benefit ✅)</div>
            <Segmented<BenefitKey>
              label="Benefit"
              value={benefit}
              onChange={setBenefit}
              options={(Object.keys(BENEFITS) as BenefitKey[]).map((k) => ({ value: k, label: BENEFITS[k].label }))}
            />
          </div>
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">2. Contrast Pivot (🔄)</div>
            <Segmented<PivotKey>
              label="Contrast pivot"
              value={pivot}
              onChange={setPivot}
              options={(Object.keys(PIVOTS) as PivotKey[]).map((k) => ({ value: k, label: PIVOTS[k].label }))}
            />
          </div>
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">3. Online Risk (⚠️)</div>
            <Segmented<RiskKey>
              label="Online risk"
              value={risk}
              onChange={setRisk}
              options={(Object.keys(RISKS) as RiskKey[]).map((k) => ({ value: k, label: RISKS[k].label }))}
            />
          </div>
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">4. Subjunctive Safety Advice (🛡️)</div>
            <Segmented<AdviceKey>
              label="Safety advice"
              value={advice}
              onChange={setAdvice}
              options={(Object.keys(ADVICE) as AdviceKey[]).map((k) => ({ value: k, label: ADVICE[k].label }))}
            />
          </div>
        </div>

        <div className="rounded-2xl border-2 border-brand/30 bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-extrabold text-emerald-700 dark:text-emerald-300">
              Model Debate Paragraph · {wordCount} Spanish words
            </span>
            <div className="flex items-center gap-1">
              <SpeakButton text={fullParagraph} />
              <SpeakButton text={fullParagraph} slow />
            </div>
          </div>
          <p className="mt-3 text-base font-bold leading-relaxed text-ink">{fullParagraph}</p>
          <p className="mt-2 text-sm italic leading-relaxed text-ink-2">“{fullEnglish}”</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          <Readout label="Word Count" value={`${wordCount} words`} tone="brand" />
          <Readout label="Discourse Structure" value="Pros + Pivot + Cons" tone="good" />
          <Readout label="Subjunctive Trigger" value="WEIRDO Advice ✓" tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "world-around-us-eco-switchboard",
    title: "Eco-Action Switchboard (Se debería vs Es urgente que)",
    blurb: "Toggle between infinitive modal frames and Grade-9 WEIRDO subjunctive triggers across core environmental verbs.",
    Component: EcoSwitchboardWidget,
  },
  {
    id: "world-around-us-digital-debate",
    title: "Digital Media Pros vs Risks Debate Builder",
    blurb: "Build balanced Band-5 paragraphs weighing online connectivity against cyberbullying, fake news, and screen addiction.",
    Component: DigitalDebateBuilderWidget,
  },
];
