"use client";

import { useState, useSyncExternalStore } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";
import { speakSpanish, speechAvailable } from "@/lib/speech";
import { conjugate, type Person } from "@/lib/spanish/verbs";

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
      title={slow ? "Hear slowly (0.7x)" : "Hear in Spanish"}
    >
      {slow ? "🐢 Lento" : "🔊 Escuchar"}
    </button>
  );
}

type TargetKey = "familia" | "padres" | "hermana" | "entrenador" | "abuelas";
type RelActionKey = "llevarse" | "parecerse" | "confiar" | "admirar" | "apoyar";
type TraitKey = "comprensivo" | "hablador" | "egoista" | "sensato" | "fiel";

interface TargetSpec {
  label: string;
  noun: string;
  en: string;
  gender: "m" | "f";
  number: "sg" | "pl";
  serPres: string;
  personalA: string;
  collectiveTrap?: string;
}

const TARGETS: Record<TargetKey, TargetSpec> = {
  familia: {
    label: "mi familia",
    noun: "mi familia",
    en: "my family",
    gender: "f",
    number: "sg",
    serPres: "es",
    personalA: "a mi familia",
    collectiveTrap:
      "Collective noun trap avoided! Even though 'family' can take 'are' in British English, *la familia* is strictly singular feminine in Spanish (*es… -a*).",
  },
  padres: {
    label: "mis padres",
    noun: "mis padres",
    en: "my parents",
    gender: "m",
    number: "pl",
    serPres: "son",
    personalA: "a mis padres",
  },
  hermana: {
    label: "mi hermana",
    noun: "mi hermana mayor",
    en: "my older sister",
    gender: "f",
    number: "sg",
    serPres: "es",
    personalA: "a mi hermana mayor",
  },
  entrenador: {
    label: "el entrenador",
    noun: "el entrenador",
    en: "the coach",
    gender: "m",
    number: "sg",
    serPres: "es",
    personalA: "al entrenador",
    collectiveTrap:
      "Contraction lock! Personal *a* + *el entrenador* contracts obligatorily into **al entrenador** (never *a el*).",
  },
  abuelas: {
    label: "mis abuelas",
    noun: "mis abuelas",
    en: "my grandmothers",
    gender: "f",
    number: "pl",
    serPres: "son",
    personalA: "a mis abuelas",
  },
};

const TRAITS: Record<
  TraitKey,
  {
    label: string;
    en: string;
    forms: { msg: string; fsg: string; mpl: string; fpl: string };
    tip: string;
  }
> = {
  comprensivo: {
    label: "comprensivo",
    en: "understanding",
    forms: { msg: "comprensivo", fsg: "comprensiva", mpl: "comprensivos", fpl: "comprensivas" },
    tip: "4-form *-o / -a / -os / -as* adjective matching gender & number.",
  },
  hablador: {
    label: "hablador",
    en: "talkative",
    forms: { msg: "hablador", fsg: "habladora", mpl: "habladores", fpl: "habladoras" },
    tip: "Adjectives ending in *-dor* add **-a / -as** in the feminine (*habladora / habladoras*)!",
  },
  egoista: {
    label: "nunca egoísta",
    en: "never selfish",
    forms: { msg: "nunca egoísta", fsg: "nunca egoísta", mpl: "nunca egoístas", fpl: "nunca egoístas" },
    tip: "Adjectives ending in **-ista** keep *-a* for BOTH masculine and feminine (*nunca egoísta* — never *-isto*!).",
  },
  sensato: {
    label: "sensato",
    en: "sensible / level-headed",
    forms: { msg: "sensato", fsg: "sensata", mpl: "sensatos", fpl: "sensatas" },
    tip: "False-friend guard: **sensato/a** = sensible/wise, whereas *sensible* means emotionally sensitive!",
  },
  fiel: {
    label: "fiel",
    en: "loyal",
    forms: { msg: "fiel", fsg: "fiel", mpl: "fieles", fpl: "fieles" },
    tip: "Consonant-ending adjective: invariable for gender, adds **-es** in the plural (*fieles*).",
  },
};

function conjugateParecerse(tense: "present" | "preterite" | "imperfect" | "future", person: Person): string {
  const pron: Record<Person, string> = { yo: "me", tú: "te", él: "se", nosotros: "nos", vosotros: "os", ellos: "se" };
  return `${pron[person]} ${conjugate("parecer", tense, person)}`;
}

function RelationshipWorkbench() {
  const [speaker, setSpeaker] = useState<"yo" | "nosotros" | "él">("yo");
  const [action, setAction] = useState<RelActionKey>("llevarse");
  const [targetKey, setTargetKey] = useState<TargetKey>("familia");
  const [tense, setTense] = useState<"present" | "imperfect" | "preterite" | "future">("present");
  const [traitKey, setTraitKey] = useState<TraitKey>("comprensivo");

  const target = TARGETS[targetKey];
  const trait = TRAITS[traitKey];
  const formKey = `${target.gender}${target.number}` as "msg" | "fsg" | "mpl" | "fpl";
  const agreedAdj = trait.forms[formKey];

  const speakerSubject =
    speaker === "yo" ? "Yo" : speaker === "nosotros" ? "Mi primo y yo" : "Vanishree";
  const speakerEn =
    speaker === "yo" ? "I" : speaker === "nosotros" ? "My cousin and I" : "Vanishree";

  let verbChunk = "";
  let prepChunk = "";
  let enVerb = "";
  let prepRule = "";

  if (action === "llevarse") {
    verbChunk = `${conjugate("llevarse", tense, speaker)} muy bien`;
    prepChunk = `con ${target.noun}`;
    prepRule = "**llevarse bien CON** (reflexive pronoun + *con*)";
    enVerb =
      tense === "present"
        ? speaker === "él"
          ? "gets along really well with"
          : "get along really well with"
        : tense === "imperfect"
          ? "used to get along really well with"
          : tense === "preterite"
            ? "got along really well with"
            : "will get along really well with";
  } else if (action === "parecerse") {
    verbChunk = `${conjugateParecerse(tense, speaker)} mucho`;
    prepChunk = targetKey === "entrenador" ? "al entrenador" : `a ${target.noun}`;
    prepRule = "**parecerse A** (*yo me parezco* with *-zco* shift!)";
    enVerb =
      tense === "present"
        ? speaker === "él"
          ? "closely resembles"
          : "closely resemble"
        : tense === "imperfect"
          ? "used to resemble"
          : tense === "preterite"
            ? "resembled"
            : "will resemble";
  } else if (action === "confiar") {
    verbChunk = conjugate("confiar", tense, speaker);
    prepChunk = `en ${target.noun}`;
    prepRule = "**confiar EN** (never *confiar a*! Note accent on *confío / confía*)";
    enVerb =
      tense === "present"
        ? speaker === "él"
          ? "trusts"
          : "trust"
        : tense === "imperfect"
          ? "used to trust"
          : tense === "preterite"
            ? "trusted"
            : "will trust";
  } else if (action === "admirar") {
    const endings: Record<typeof tense, Record<typeof speaker, string>> = {
      present: { yo: "admiro", nosotros: "admiramos", él: "admira" },
      imperfect: { yo: "admiraba", nosotros: "admirábamos", él: "admiraba" },
      preterite: { yo: "admiré", nosotros: "admiramos", él: "admiró" },
      future: { yo: "admiraré", nosotros: "admiraremos", él: "admirará" },
    };
    verbChunk = `${endings[tense][speaker]} muchísimo`;
    prepChunk = target.personalA;
    prepRule = "**admirar + personal *a*** before people (*a + el → al*)";
    enVerb =
      tense === "present"
        ? speaker === "él"
          ? "deeply admires"
          : "deeply admire"
        : tense === "imperfect"
          ? "used to admire"
          : tense === "preterite"
            ? "deeply admired"
            : "will admire";
  } else {
    verbChunk = `${conjugate("apoyar", tense, speaker)} siempre`;
    prepChunk = target.personalA;
    prepRule = "**apoyar + personal *a*** before specific people (*a + el → al*)";
    enVerb =
      tense === "present"
        ? speaker === "él"
          ? "always supports"
          : "always support"
        : tense === "imperfect"
          ? "always used to support"
          : tense === "preterite"
            ? "always supported"
            : "will always support";
  }

  const serClauseVerb =
    tense === "imperfect"
      ? target.number === "sg"
        ? "era"
        : "eran"
      : target.serPres;
  const becauseConnector = agreedAdj.startsWith("nunca") ? "porque" : "porque";
  const qualifier = agreedAdj.startsWith("nunca") ? "" : "muy ";
  const sentenceEs = `${speakerSubject} ${verbChunk} ${prepChunk} ${becauseConnector} ${serClauseVerb} ${qualifier}${agreedAdj}.`;
  const sentenceEn = `${speakerEn} ${enVerb} ${target.en} because ${target.number === "sg" && targetKey !== "familia" ? (target.gender === "f" ? "she" : "he") : "they"} ${tense === "imperfect" ? "were" : target.number === "sg" && targetKey !== "familia" ? "is" : "are"} ${agreedAdj.startsWith("nunca") ? trait.en : `very ${trait.en}`}.`;

  return (
    <WidgetFrame
      title="Relationship Reflexive, Preposition & Agreement Workbench"
      tryThis={[
        "Switch between **mi familia** and **mis padres** and watch **es comprensiva** flip to **son comprensivos**.",
        "Pick **admirar** + **el entrenador** to see mandatory **personal a + el → al**.",
        "Test **parecerse** with **yo** (*me parezco*) and **hablador** with **mis abuelas** (*habladoras*).",
      ]}
      caption={
        <div className="space-y-1">
          <div>
            <strong>Active Grammar Guard:</strong> {target.collectiveTrap ?? trait.tip}
          </div>
          <div className="text-ink-2">
            Preposition rule: {prepRule.replace(/\*\*/g, "").replace(/\*/g, "")} · Adjective rule: {trait.tip.replace(/\*\*/g, "").replace(/\*/g, "")}
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">1. Speaker Subject</div>
            <Segmented
              label="Speaker subject"
              value={speaker}
              onChange={setSpeaker}
              options={[
                { value: "yo", label: "Yo" },
                { value: "nosotros", label: "Mi primo y yo" },
                { value: "él", label: "Vanishree" },
              ]}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">2. Time Frame</div>
            <Segmented
              label="Time frame"
              value={tense}
              onChange={setTense}
              options={[
                { value: "present", label: "Present" },
                { value: "imperfect", label: "Imperfect" },
                { value: "preterite", label: "Preterite" },
                { value: "future", label: "Future" },
              ]}
            />
          </div>
        </div>

        <div>
          <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">3. Relationship Verb + Preposition</div>
          <Segmented
            label="Relationship verb"
            value={action}
            onChange={setAction}
            options={[
              { value: "llevarse", label: "llevarse bien con" },
              { value: "parecerse", label: "parecerse a" },
              { value: "confiar", label: "confiar en" },
              { value: "admirar", label: "admirar (a)" },
              { value: "apoyar", label: "apoyar (a)" },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">4. Person / Collective Noun</div>
            <Segmented
              label="Target person or group"
              value={targetKey}
              onChange={setTargetKey}
              options={[
                { value: "familia", label: "mi familia (sg!)" },
                { value: "padres", label: "mis padres" },
                { value: "hermana", label: "mi hermana" },
                { value: "entrenador", label: "el entrenador" },
                { value: "abuelas", label: "mis abuelas" },
              ]}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">5. Character Adjective</div>
            <Segmented
              label="Character adjective"
              value={traitKey}
              onChange={setTraitKey}
              options={[
                { value: "comprensivo", label: "comprensivo" },
                { value: "hablador", label: "hablador" },
                { value: "sensato", label: "sensato" },
                { value: "egoista", label: "egoísta" },
                { value: "fiel", label: "fiel" },
              ]}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-brand/30 bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand">Live Grade-9 Sentence</span>
            <div className="flex items-center gap-1">
              <SpeakButton text={sentenceEs} />
              <SpeakButton text={sentenceEs} slow />
            </div>
          </div>
          <p className="mt-2 text-lg font-extrabold leading-snug text-ink">{sentenceEs}</p>
          <p className="mt-1 text-sm italic text-ink-2">“{sentenceEn}”</p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Verb Form" value={verbChunk} tone="brand" />
          <Readout label="Prep / Personal a" value={prepChunk} tone="good" />
          <Readout label="Agreed Clause" value={`${serClauseVerb} ${agreedAdj}`} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

type MemoryKey = "escondite" | "parque" | "dibujos" | "sobremesa";
type BridgeKey = "mientras" | "cambio" | "embargo";

const MEMORIES: Record<
  MemoryKey,
  {
    label: string;
    inf: string;
    restPast: string;
    presentClause: Record<"yo" | "nosotros" | "ellos", string>;
    enPast: string;
    enNow: Record<"yo" | "nosotros" | "ellos", string>;
  }
> = {
  escondite: {
    label: "jugar al escondite",
    inf: "jugar",
    restPast: "al escondite en la calle sin móvil",
    presentClause: {
      yo: "paso la tarde repasando para mis exámenes",
      nosotros: "nos comunicamos casi siempre por mensajes",
      ellos: "ven cómo los jóvenes están pegados a las pantallas",
    },
    enPast: "play hide-and-seek in the street without a phone",
    enNow: {
      yo: "I spend the afternoon revising for my exams",
      nosotros: "we communicate almost always by message",
      ellos: "they see how teenagers are glued to screens",
    },
  },
  parque: {
    label: "ir al parque (S·I·V!)",
    inf: "ir",
    restPast: "al parque del barrio todas las tardes",
    presentClause: {
      yo: "tengo muchas responsabilidades escolares",
      nosotros: "quedamos en una cafetería los sábados",
      ellos: "prefieren pasear tranquilamente por la mañana",
    },
    enPast: "go to the neighbourhood park every afternoon",
    enNow: {
      yo: "I have lots of school responsibilities",
      nosotros: "we meet up in a café on Saturdays",
      ellos: "they prefer strolling quietly in the morning",
    },
  },
  dibujos: {
    label: "ver dibujos (S·I·V!)",
    inf: "ver",
    restPast: "dibujos animados en familia los domingos",
    presentClause: {
      yo: "prefiero leer novelas o escuchar música",
      nosotros: "elegimos series diferentes en cada pantalla",
      ellos: "valoran muchísimo cada visita de sus nietos",
    },
    enPast: "watch cartoons together as a family on Sundays",
    enNow: {
      yo: "I prefer reading novels or listening to music",
      nosotros: "we choose different series on each screen",
      ellos: "they deeply treasure every visit from their grandchildren",
    },
  },
  sobremesa: {
    label: "hablar en la sobremesa",
    inf: "hablar",
    restPast: "durante horas en la sobremesa sin prisa",
    presentClause: {
      yo: "intento desconectar el móvil durante la cena",
      nosotros: "llevamos un ritmo de vida mucho más rápido",
      ellos: "nos aconsejan que cuidemos los lazos familiares",
    },
    enPast: "chat unhurriedly for hours after lunch",
    enNow: {
      yo: "I try to switch off my phone during dinner",
      nosotros: "we lead a much faster pace of life",
      ellos: "they advise us to look after family ties",
    },
  },
};

const BRIDGES: Record<BridgeKey, { es: string; en: string }> = {
  mientras: { es: "mientras que hoy en día", en: "whereas nowadays" },
  cambio: { es: "en cambio, actualmente", en: "by contrast, currently" },
  embargo: { es: "sin embargo, ahora", en: "however, now" },
};

function ChildhoodContrastBuilder() {
  const [person, setPerson] = useState<"yo" | "nosotros" | "ellos">("nosotros");
  const [style, setStyle] = useState<"direct" | "solia">("solia");
  const [memKey, setMemKey] = useState<MemoryKey>("parque");
  const [bridgeKey, setBridgeKey] = useState<BridgeKey>("mientras");
  const [subjunctiveBoost, setSubjunctiveBoost] = useState<"off" | "on">("on");

  const mem = MEMORIES[memKey];
  const bridge = BRIDGES[bridgeKey];

  const opener =
    person === "yo"
      ? "Cuando era pequeña,"
      : person === "nosotros"
        ? "Cuando éramos pequeños,"
        : "En aquella época, mis abuelos";

  const pastVerb =
    style === "direct"
      ? conjugate(mem.inf, "imperfect", person)
      : `${conjugate("soler", "imperfect", person)} ${mem.inf}`;

  const subjClauseEs =
    subjunctiveBoost === "on"
      ? " y busco amistades que valoren el tiempo cara a cara."
      : ".";
  const subjClauseEn =
    subjunctiveBoost === "on"
      ? ", and I look for friendships that value face-to-face time."
      : ".";

  const fullEs = `${opener} ${pastVerb} ${mem.restPast}, ${bridge.es} ${mem.presentClause[person]}${subjClauseEs}`;
  const subjEn = person === "yo" ? "When I was young, I" : person === "nosotros" ? "When we were young, we" : "Back then, my grandparents";
  const fullEn = `${subjEn} ${style === "solia" ? "used to " : "would "}${mem.enPast}, ${bridge.en} ${mem.enNow[person]}${subjClauseEn}`;

  const accentNote =
    person === "nosotros"
      ? "Mandatory esdrújula accents hit: éramos + " + pastVerb.split(" ")[0] + "!"
      : mem.inf === "ver" || style === "solia"
        ? "Mandatory imperfect í accent hit on " + pastVerb.split(" ")[0] + "!"
        : "Imperfect ending clean & accurate.";

  const bandFeatures = subjunctiveBoost === "on" ? "5 / 5 Band-5 Features" : "4 / 5 Band-5 Features";

  return (
    <WidgetFrame
      title="Childhood Imperfect vs Today Contrast Builder"
      tryThis={[
        "Select **nosotros** + **ir al parque** in **Direct Imperfect** to hear **Cuando éramos pequeños, íbamos…** with both accents.",
        "Toggle **solía + infinitive** to upgrade simple imperfect into a Grade-9 habitual verbal idiom.",
        "Switch **Subjunctive Tail** ON to append a hypothetical relative clause (*amistades que valoren…*).",
      ]}
      caption={
        <span>
          <strong>Paper 2 Q7 Examiner Tip:</strong> Pairing an Imperfect childhood clause with <em>{bridge.es}</em> + Present (plus an optional subjunctive relative clause) ticks multiple time frames and complex connectives in a single 25-word sentence! ({accentNote})
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">1. Subject</div>
            <Segmented
              label="Subject"
              value={person}
              onChange={setPerson}
              options={[
                { value: "yo", label: "Yo" },
                { value: "nosotros", label: "Nosotros" },
                { value: "ellos", label: "Mis abuelos" },
              ]}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">2. Imperfect Frame</div>
            <Segmented
              label="Imperfect style"
              value={style}
              onChange={setStyle}
              options={[
                { value: "solia", label: "solía + inf" },
                { value: "direct", label: "Direct (-aba/-ía)" },
              ]}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">3. Subjunctive Tail</div>
            <Segmented
              label="Subjunctive tail"
              value={subjunctiveBoost}
              onChange={setSubjunctiveBoost}
              options={[
                { value: "on", label: "+ que valoren 🌟" },
                { value: "off", label: "Standard" },
              ]}
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">4. Childhood Habit</div>
            <Segmented
              label="Childhood memory"
              value={memKey}
              onChange={setMemKey}
              options={[
                { value: "parque", label: "ir al parque" },
                { value: "dibujos", label: "ver dibujos" },
                { value: "escondite", label: "jugar fuera" },
                { value: "sobremesa", label: "la sobremesa" },
              ]}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">5. Contrast Bridge</div>
            <Segmented
              label="Contrast connector"
              value={bridgeKey}
              onChange={setBridgeKey}
              options={[
                { value: "mientras", label: "mientras que hoy…" },
                { value: "cambio", label: "en cambio…" },
                { value: "embargo", label: "sin embargo…" },
              ]}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-brand/30 bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand">Two-Era Contrast Paragraph</span>
            <div className="flex items-center gap-1">
              <SpeakButton text={fullEs} />
              <SpeakButton text={fullEs} slow />
            </div>
          </div>
          <p className="mt-2 text-lg font-extrabold leading-snug text-ink">{fullEs}</p>
          <p className="mt-1 text-sm italic text-ink-2">“{fullEn}”</p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Past Imperfect" value={pastVerb} tone="brand" />
          <Readout label="Contrast Connector" value={bridge.es} tone="ink" />
          <Readout label="Q7 Rubric Score" value={bandFeatures} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "relationship-reflexive-workbench",
    title: "Relationship Reflexive, Preposition & Agreement Workbench",
    blurb:
      "Test how reflexive verbs, fixed prepositions, personal 'a', and collective singular vs plural agreement click together in live Spanish.",
    Component: RelationshipWorkbench,
  },
  {
    id: "childhood-imperfect-contrast-builder",
    title: "Childhood Imperfect vs Today Contrast Builder",
    blurb:
      "Combine childhood Imperfect (solía + inf, era, iba, veía) with Grade-9 contrast connectors and optional subjunctive clauses — and hear every sentence aloud.",
    Component: ChildhoodContrastBuilder,
  },
];
