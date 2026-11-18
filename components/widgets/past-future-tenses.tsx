"use client";

import { useState, useSyncExternalStore } from "react";
import { WidgetFrame, Segmented, Slider, Readout, type WidgetDef } from "@/components/widgets/kit";
import { speakSpanish, speechAvailable } from "@/lib/speech";
import {
  conjugate,
  englishGloss,
  participle,
  gerund,
  PERSONS,
  PERSON_LABEL,
  TENSES,
  TENSE_LABEL,
  verbInfo,
  type Person,
  type Tense,
} from "@/lib/spanish/verbs";

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
      className="btn btn-ghost btn-sm min-h-9 min-w-9 px-2 text-sm"
      onClick={(e) => {
        e.stopPropagation();
        speakSpanish(text, { slow });
      }}
      aria-label={label ?? (slow ? `Hear “${text}” slowly` : `Hear “${text}”`)}
      title={slow ? "Hear slowly (🐢)" : "Hear Spanish (🔊)"}
    >
      {slow ? "🐢" : "🔊"}
    </button>
  );
}

interface VerbPreset {
  inf: string;
  badge: string;
  contextTail: string;
  trapNote: string;
}

const VERB_PRESETS: readonly VerbPreset[] = [
  {
    inf: "hacer",
    badge: "Strong pret. + har- + hecho",
    contextTail: "deporte en el polideportivo",
    trapNote: "Preterite: hice / hizo (c→z, NO accent!) · Participle: hecho · Future/Cond. stem: har-.",
  },
  {
    inf: "tener",
    badge: "Strong tuv- + tendr- + yo-go",
    contextTail: "tiempo para descansar",
    trapNote: "Preterite: tuve / tuvo (NO accent!) · Future/Cond. cushion-d stem: tendr- · Subjunctive: tenga.",
  },
  {
    inf: "ir",
    badge: "fui / iba / vaya",
    contextTail: "a Valencia con amigos",
    trapNote: "Preterite: fui / fue (shared with ser, NO accent!) · Imperfect: iba / íbamos · Gerund: yendo.",
  },
  {
    inf: "pedir",
    badge: "-ir sandal e→i",
    contextTail: "el menú del día",
    trapNote: "3rd-person Preterite shifts e→i (pidió / pidieron) · Gerund: pidiendo · Subjunctive all persons: pida…",
  },
  {
    inf: "llegar",
    badge: "-gar → llegué",
    contextTail: "temprano al instituto",
    trapNote: "Yo Preterite inserts silent u (llegué) + all Present Subjunctive forms use -gu- (llegue, llegues…).",
  },
  {
    inf: "leer",
    badge: "i→y leyó + leído",
    contextTail: "una novela policíaca",
    trapNote: "Preterite 3rd person shifts i→y (leyó / leyeron) · Participle needs accent: leído · Gerund: leyendo.",
  },
  {
    inf: "volver",
    badge: "Boot o→ue + vuelto",
    contextTail: "a casa antes de cenar",
    trapNote: "Present boot o→ue (vuelvo), regular Preterite (volví / volvió), irregular participle: vuelto!",
  },
  {
    inf: "levantarse",
    badge: "Reflexive pronoun placement",
    contextTail: "a las siete de la mañana",
    trapNote: "Pronoun precedes simple & perfect verbs (me he levantado) or attaches to near-future infinitive (voy a levantarme).",
  },
];

const PERSON_SHORT: Record<Person, string> = {
  yo: "yo",
  tú: "tú",
  él: "él/ella",
  nosotros: "nosotros",
  vosotros: "vosotros",
  ellos: "ellos/as",
};

function TenseTransformerWidget() {
  const [verbIdx, setVerbIdx] = useState(0);
  const [person, setPerson] = useState<Person>("yo");
  const [focusTense, setFocusTense] = useState<Tense>("preterite");
  const [pastChoice, setPastChoice] = useState<"preterite" | "imperfect" | "perfect">("preterite");
  const [futureChoice, setFutureChoice] = useState<"future" | "conditional" | "near-future">("future");

  const preset = VERB_PRESETS[verbIdx] ?? VERB_PRESETS[0];
  const info = verbInfo(preset.inf)!;
  const activeForm = conjugate(preset.inf, focusTense, person);
  const activeGloss = englishGloss(preset.inf, focusTense, person);

  const pastMarker =
    pastChoice === "preterite" ? "El sábado pasado" : pastChoice === "imperfect" ? "Antes siempre" : "Esta semana ya";
  const futureMarker =
    futureChoice === "future" ? "y el año que viene" : futureChoice === "conditional" ? "y si pudiera" : "y mañana";

  const pastVerb = conjugate(preset.inf, pastChoice, person);
  const presVerb = conjugate(preset.inf, "present", person);
  const futVerb = conjugate(preset.inf, futureChoice, person);

  const trioSentence = `${pastMarker} ${pastVerb} ${preset.contextTail}, hoy en día ${presVerb} ${preset.contextTail}, ${futureMarker} ${futVerb} ${preset.contextTail}.`;

  return (
    <WidgetFrame
      title="3-Time-Frame Tense Transformer (8 Tenses × 6 Persons)"
      tryThis={[
        "Select **hacer** or **tener** and compare *yo* across Preterite, Simple Future, and Conditional — spot the unaccented strong preterite vs accented *-é / -ía*!",
        "Switch to **levantarse** and watch where the reflexive pronoun sits in **Perfect** (*me he levantado*) vs **Near Future** (*voy a levantarme*).",
        "Press 🔊 and 🐢 on the **Paper 2 Q7 3-Time-Frame Sentence** at the bottom to hear Past + Present + Future flow together.",
      ]}
      caption={
        <div className="space-y-1">
          <div className="font-bold text-ink">
            Grade-9 Watchpoint for <em>{preset.inf}</em> ({info.en}):
          </div>
          <div>{preset.trapNote}</div>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">1. Pick a High-Yield IGCSE Verb</div>
          <div className="flex flex-wrap gap-1.5">
            {VERB_PRESETS.map((v, idx) => (
              <button
                key={v.inf}
                type="button"
                onClick={() => setVerbIdx(idx)}
                className={`rounded-xl border px-3 py-1.5 text-left text-sm transition ${
                  idx === verbIdx ? "border-brand bg-surface font-extrabold text-brand shadow-sm" : "border-line bg-surface-2 text-ink-2 hover:text-ink"
                }`}
              >
                <span>{v.inf}</span>
                <span className="ml-1.5 text-xs opacity-75">({v.badge})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">2. Subject Person</div>
            <Segmented
              label="Subject person"
              value={person}
              onChange={setPerson}
              options={PERSONS.map((p) => ({ value: p, label: PERSON_SHORT[p] }))}
            />
          </div>
          <div className="flex gap-2">
            <Readout label="Past Participle" value={participle(preset.inf)} tone="ink" />
            <Readout label="Gerund (-ndo)" value={gerund(preset.inf)} tone="ink" />
          </div>
        </div>

        <div>
          <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
            3. Click Any Tense to Inspect &amp; Hear ({PERSON_LABEL[person]})
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {TENSES.map((t) => {
              const form = conjugate(preset.inf, t, person);
              const selected = t === focusTense;
              return (
                <div
                  key={t}
                  role="button"
                  tabIndex={0}
                  onClick={() => setFocusTense(t)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setFocusTense(t);
                    }
                  }}
                  className={`cursor-pointer rounded-xl border p-2.5 transition ${
                    selected ? "border-brand bg-surface shadow-sm ring-2 ring-brand/20" : "border-line bg-surface hover:bg-surface-2"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-ink-2">
                      {TENSE_LABEL[t].split(" (")[0]}
                    </span>
                    <div className="flex items-center">
                      <SpeakButton text={form} />
                      <SpeakButton text={form} slow />
                    </div>
                  </div>
                  <div className="mt-0.5 text-base font-extrabold text-brand">{form}</div>
                  <div className="text-xs text-ink-2">{englishGloss(preset.inf, t, person)}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface-2 p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
              Spotlight: {TENSE_LABEL[focusTense]} · {PERSON_SHORT[person]}
            </div>
            <div className="text-xs font-semibold text-ink-2">Meaning: “{activeGloss}” → <strong>{activeForm}</strong></div>
          </div>

          <div className="mt-3 border-t border-line pt-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
                Paper 2 Q7 Live 3-Time-Frame Builder
              </span>
              <div className="flex flex-wrap gap-2">
                <Segmented
                  label="Past pillar"
                  value={pastChoice}
                  onChange={setPastChoice}
                  options={[
                    { value: "preterite", label: "Preterite" },
                    { value: "imperfect", label: "Imperfect" },
                    { value: "perfect", label: "Perfect" },
                  ]}
                />
                <Segmented
                  label="Future pillar"
                  value={futureChoice}
                  onChange={setFutureChoice}
                  options={[
                    { value: "future", label: "Simple Future" },
                    { value: "conditional", label: "Conditional" },
                    { value: "near-future", label: "ir a + inf" },
                  ]}
                />
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between gap-3 rounded-xl bg-surface p-3">
              <p className="text-sm font-semibold leading-relaxed text-ink">{trioSentence}</p>
              <div className="flex shrink-0 items-center gap-1">
                <SpeakButton text={trioSentence} label="Hear full 3-time-frame sentence" />
                <SpeakButton text={trioSentence} slow label="Hear full 3-time-frame sentence slowly" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type AspectMode = "interrupted" | "parallel" | "sequence" | "habit-vs-once";

interface TimelineScene {
  title: string;
  bgImperfect: string;
  bgParallel: string;
  snapPreterite: string;
  seqStep1: string;
  habitClause: string;
  onceClause: string;
  enSummary: Record<AspectMode, string>;
  examTip: string;
}

const SCENES: readonly TimelineScene[] = [
  {
    title: "Study & Phone Call",
    bgImperfect: "estudiaba en mi cuarto",
    bgParallel: "mi hermano escuchaba música",
    snapPreterite: "sonó mi móvil",
    seqStep1: "terminé mis deberes",
    habitClause: "Antes estudiaba cada noche sin descanso",
    onceClause: "pero anoche apagué el ordenador a las nueve",
    enSummary: {
      interrupted: "While I was studying in my room (ongoing Imperfect film), my phone rang (single Preterite snapshot).",
      parallel: "While I was studying in my room, my brother was listening to music (two simultaneous Imperfect streams).",
      sequence: "First I finished my homework, and then my phone rang (two completed Preterite snapshots in order).",
      "habit-vs-once": "Previously I used to study every night non-stop (Imperfect habit), whereas last night I switched off my computer at nine (Preterite event).",
    },
    examTip: "Notice apagué (-gar → -gué in yo Preterite) and the accent on sonó (3rd-person singular Preterite).",
  },
  {
    title: "Beach Weather & Arrival",
    bgImperfect: "hacía muchísimo sol en la costa",
    bgParallel: "había un ambiente muy animado",
    snapPreterite: "llegamos a la playa",
    seqStep1: "salimos del hotel",
    habitClause: "De niños íbamos a la costa todos los veranos",
    onceClause: "pero el sábado pasado fuimos a la montaña",
    enSummary: {
      interrupted: "While it was very sunny on the coast (Imperfect background weather), we arrived at the beach (Preterite arrival).",
      parallel: "While it was very sunny on the coast, there was a very lively atmosphere (two Imperfect scene-setters: hacía + había).",
      sequence: "First we left the hotel, and then we arrived at the beach (two completed Preterite steps).",
      "habit-vs-once": "As children we used to go to the coast every summer (íbamos — Imperfect), whereas last Saturday we went to the mountains (fuimos — Preterite).",
    },
    examTip: "Contrast íbamos (irregular Imperfect of ir, accent on í) with fuimos (Preterite of ir, zero accent!).",
  },
  {
    title: "Restaurant Dinner & Bill",
    bgImperfect: "cenábamos en la terraza",
    bgParallel: "el camarero servía otras mesas",
    snapPreterite: "empezó a llover a cántaros",
    seqStep1: "pedimos la cuenta",
    habitClause: "Mis padres solían cenar en casa los viernes",
    onceClause: "pero ayer probaron un restaurante mexicano nuevo",
    enSummary: {
      interrupted: "While we were having dinner on the terrace (Imperfect), it started pouring with rain (Preterite interruption).",
      parallel: "While we were having dinner on the terrace, the waiter was serving other tables (parallel Imperfect background).",
      sequence: "First we asked for the bill, and then it started pouring with rain (completed Preterite sequence).",
      "habit-vs-once": "My parents used to have dinner at home on Fridays (solían cenar), whereas yesterday they tried a new Mexican restaurant (probaron).",
    },
    examTip: "Pedir (ask for/order) is regular in nosotros preterite (pedimos) and shifts e→i ONLY in 3rd person (pidió / pidieron).",
  },
  {
    title: "Concert & Power Cut",
    bgImperfect: "la banda tocaba su mejor canción",
    bgParallel: "todo el público cantaba",
    snapPreterite: "hubo un apagón total",
    seqStep1: "se apagaron las luces",
    habitClause: "En aquella época había pocos conciertos gratuitos",
    onceClause: "pero el mes pasado hubo un festival enorme",
    enSummary: {
      interrupted: "While the band was playing its best song (Imperfect), there was a total power cut (hubo — Preterite event!).",
      parallel: "While the band was playing its best song, the whole crowd was singing (simultaneous Imperfect scene).",
      sequence: "First the lights went out, and then there was a total power cut (Preterite sequence).",
      "habit-vs-once": "Back then there used to be few free concerts (había — Imperfect background), whereas last month there was a huge festival (hubo — Preterite event).",
    },
    examTip: "Exam gold: había = 'there was/were' (background description) vs hubo = 'there was/were' (sudden completed event)!",
  },
];

function PreteriteImperfectTimelineWidget() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [mode, setMode] = useState<AspectMode>("interrupted");
  const [snapPos, setSnapPos] = useState(65);

  const scene = SCENES[sceneIdx] ?? SCENES[0];

  let spanishSentence = "";
  if (mode === "interrupted") {
    spanishSentence = `Mientras ${scene.bgImperfect}, de repente ${scene.snapPreterite}.`;
  } else if (mode === "parallel") {
    spanishSentence = `Mientras ${scene.bgImperfect}, ${scene.bgParallel}.`;
  } else if (mode === "sequence") {
    spanishSentence = `Primero ${scene.seqStep1} y luego ${scene.snapPreterite}.`;
  } else {
    spanishSentence = `${scene.habitClause}, ${scene.onceClause}.`;
  }

  const snapX = Math.round(90 + (snapPos / 100) * 440);

  return (
    <WidgetFrame
      title="Preterite vs Imperfect Camera-Snapshot & Timeline Switcher"
      tryThis={[
        "Start on **Interrupted (Film + Snapshot)** and slide the interruption moment along the timeline — notice how the Imperfect background wave stays unchanged!",
        "Switch to **Parallel (2 Films)** vs **Sequence (2 Snapshots)** to watch *Mientras + Imperfect* flip into *Primero + Preterite, luego + Preterite*.",
        "Open Scene 4 (**Concert & Power Cut**) on **Habit vs Once** to hear **había** (background) vs **hubo** (event) side by side!",
      ]}
      caption={
        <div className="space-y-1">
          <div><strong>English Aspect Meaning:</strong> {scene.enSummary[mode]}</div>
          <div className="text-ink-2"><strong>Edexcel Mark-Saver:</strong> {scene.examTip}</div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">1. Story Scene</div>
            <Segmented
              label="Story scene"
              value={String(sceneIdx)}
              onChange={(v) => setSceneIdx(Number(v))}
              options={SCENES.map((s, idx) => ({ value: String(idx), label: s.title }))}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">2. Aspect Camera Mode</div>
            <Segmented
              label="Aspect camera mode"
              value={mode}
              onChange={setMode}
              options={[
                { value: "interrupted", label: "🎞️ + 📸 Interrupted" },
                { value: "parallel", label: "🎞️ + 🎞️ Parallel" },
                { value: "sequence", label: "📸 → 📸 Sequence" },
                { value: "habit-vs-once", label: "Habit vs Once" },
              ]}
            />
          </div>
        </div>

        {mode === "interrupted" ? (
          <Slider
            label="Interruption Moment Along the Past Timeline"
            value={snapPos}
            min={20}
            max={85}
            step={5}
            onChange={setSnapPos}
            format={(v) => `${v}% through scene`}
          />
        ) : null}

        <div className="overflow-hidden rounded-xl border border-line bg-surface p-2">
          <svg
            viewBox="0 0 620 155"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Timeline visualising ${mode} aspect for ${scene.title}`}
            className="w-full"
          >
            <line x1="36" y1="108" x2="584" y2="108" stroke="#64748b" strokeWidth="2" />
            <polygon points="584,108 574,103 574,113" fill="#64748b" />
            <text x="580" y="132" textAnchor="end" fontSize="11" fill="#64748b">
              Past Timeline →
            </text>

            {mode === "interrupted" && (
              <g>
                <path
                  d="M 50 72 Q 90 54, 130 72 T 210 72 T 290 72 T 370 72 T 450 72 T 530 72"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="4"
                />
                <text x="54" y="42" fontSize="12" fontWeight="700" fill="#1d4ed8">
                  🎞️ Imperfect: Mientras {scene.bgImperfect}
                </text>
                <line x1={snapX} y1="24" x2={snapX} y2="132" stroke="#dc2626" strokeWidth="3" strokeDasharray="5,3" />
                <circle cx={snapX} cy="108" r="8" fill="#dc2626" />
                <text x={Math.min(Math.max(snapX, 130), 490)} y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="#b91c1c">
                  📸 Preterite: {scene.snapPreterite}
                </text>
              </g>
            )}

            {mode === "parallel" && (
              <g>
                <path
                  d="M 50 56 Q 90 40, 130 56 T 210 56 T 290 56 T 370 56 T 450 56 T 530 56"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3.5"
                />
                <text x="54" y="30" fontSize="12" fontWeight="700" fill="#1d4ed8">
                  🎞️ Stream 1 (Imperfect): Mientras {scene.bgImperfect}
                </text>
                <path
                  d="M 50 88 Q 90 72, 130 88 T 210 88 T 290 88 T 370 88 T 450 88 T 530 88"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="3.5"
                />
                <text x="54" y="132" fontSize="12" fontWeight="700" fill="#0f766e">
                  🎞️ Stream 2 (Imperfect): {scene.bgParallel}
                </text>
              </g>
            )}

            {mode === "sequence" && (
              <g>
                <circle cx="190" cy="108" r="9" fill="#dc2626" />
                <line x1="190" y1="54" x2="190" y2="108" stroke="#dc2626" strokeWidth="2.5" />
                <text x="190" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#b91c1c">
                  📸 1. Primero {scene.seqStep1}
                </text>
                <circle cx="425" cy="108" r="9" fill="#dc2626" />
                <line x1="425" y1="54" x2="425" y2="108" stroke="#dc2626" strokeWidth="2.5" />
                <text x="425" y="44" textAnchor="middle" fontSize="12" fontWeight="700" fill="#b91c1c">
                  📸 2. luego {scene.snapPreterite}
                </text>
              </g>
            )}

            {mode === "habit-vs-once" && (
              <g>
                <path d="M 55 72 Q 85 55, 115 72 T 175 72 T 235 72 T 295 72" fill="none" stroke="#2563eb" strokeWidth="4" />
                <text x="175" y="42" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1d4ed8">
                  🎞️ Habitual Past (Imperfect)
                </text>
                <circle cx="465" cy="108" r="9" fill="#dc2626" />
                <line x1="465" y1="52" x2="465" y2="108" stroke="#dc2626" strokeWidth="3" />
                <text x="465" y="42" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#b91c1c">
                  📸 Single Occasion (Preterite)
                </text>
              </g>
            )}
          </svg>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface-2 p-3.5">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Live Spanish Sentence</div>
            <p className="mt-0.5 text-base font-extrabold text-ink">{spanishSentence}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <SpeakButton text={spanishSentence} label="Hear timeline sentence" />
            <SpeakButton text={spanishSentence} slow label="Hear timeline sentence slowly" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "tense-transformer-3tf",
    title: "3-Time-Frame Tense Transformer",
    blurb: "Transform high-frequency IGCSE verbs across all 8 tenses & 6 persons and assemble live Paper 2 Q7 sentences with audio.",
    Component: TenseTransformerWidget,
  },
  {
    id: "preterite-imperfect-timeline",
    title: "Preterite vs Imperfect Timeline Switcher",
    blurb: "Toggle between Interrupted, Parallel, Sequential, and Habit-vs-Once past narratives to hear and see Preterite vs Imperfect in action.",
    Component: PreteriteImperfectTimelineWidget,
  },
];
