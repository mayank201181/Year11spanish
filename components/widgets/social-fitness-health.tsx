"use client";

import { useState, useSyncExternalStore } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "@/components/widgets/kit";
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
      className="btn btn-ghost btn-sm min-h-10 min-w-10 px-2"
      onClick={(e) => {
        e.stopPropagation();
        speakSpanish(text, { slow });
      }}
      aria-label={label ?? `Hear “${text}”`}
      title={slow ? "Hear slowly" : "Hear at natural speed"}
    >
      {slow ? "🐢" : "🔊"}
    </button>
  );
}

type RVerb = "doler" | "gustar" | "encantar";
type DativeKey = "yo" | "tú" | "él" | "nosotros" | "ellos";
type RTense = "present" | "imperfect" | "preterite";

const DATIVE_MAP: Record<DativeKey, { a: string; iop: string; en: string; poss: string }> = {
  yo: { a: "A mí", iop: "me", en: "I / my", poss: "My" },
  tú: { a: "A ti", iop: "te", en: "you / your", poss: "Your" },
  él: { a: "A mi hermana", iop: "le", en: "my sister / her", poss: "My sister's" },
  nosotros: { a: "A nosotros", iop: "nos", en: "we / our", poss: "Our" },
  ellos: { a: "A los atletas", iop: "les", en: "the athletes / their", poss: "The athletes'" },
};

const DOLER_SUBJECTS = [
  { id: "cabeza", es: "la cabeza", plural: false, kind: "singular noun", en: "head" },
  { id: "garganta", es: "la garganta", plural: false, kind: "singular noun", en: "throat" },
  { id: "espalda", es: "la espalda", plural: false, kind: "singular noun", en: "back" },
  { id: "muelas", es: "las muelas", plural: true, kind: "plural noun", en: "back teeth" },
  { id: "pulmones", es: "los pulmones", plural: true, kind: "plural noun", en: "lungs" },
  { id: "piernas", es: "las piernas", plural: true, kind: "plural noun", en: "legs" },
] as const;

const GUSTAR_SUBJECTS = [
  { id: "tenis", es: "jugar al tenis", plural: false, kind: "infinitive (always singular!)", en: "playing tennis" },
  { id: "natacion", es: "hacer natación", plural: false, kind: "infinitive (always singular!)", en: "going swimming" },
  { id: "dieta", es: "la comida casera", plural: false, kind: "singular noun", en: "homemade food" },
  { id: "conciertos", es: "los conciertos en directo", plural: true, kind: "plural noun", en: "live concerts" },
  { id: "peliculas", es: "las películas de acción", plural: true, kind: "plural noun", en: "action films" },
  { id: "verduras", es: "las verduras frescas", plural: true, kind: "plural noun", en: "fresh vegetables" },
] as const;

function reverseForm(verb: RVerb, tense: RTense, plural: boolean): string {
  if (verb === "doler") {
    if (tense === "present") return plural ? "duelen" : "duele";
    if (tense === "imperfect") return plural ? "dolían" : "dolía";
    return plural ? "dolieron" : "dolió";
  }
  if (verb === "gustar") {
    if (tense === "present") return plural ? "gustan" : "gusta";
    if (tense === "imperfect") return plural ? "gustaban" : "gustaba";
    return plural ? "gustaron" : "gustó";
  }
  if (tense === "present") return plural ? "encantan" : "encanta";
  if (tense === "imperfect") return plural ? "encantaban" : "encantaba";
  return plural ? "encantaron" : "encantó";
}

function ReverseVerbBuilder() {
  const [verb, setVerb] = useState<RVerb>("doler");
  const [who, setWho] = useState<DativeKey>("yo");
  const [tense, setTense] = useState<RTense>("present");
  const [subjIdx, setSubjIdx] = useState<number>(0);

  const pool = verb === "doler" ? DOLER_SUBJECTS : GUSTAR_SUBJECTS;
  const safeIdx = subjIdx < pool.length ? subjIdx : 0;
  const subj = pool[safeIdx];
  const dat = DATIVE_MAP[who];
  const conjugated = reverseForm(verb, tense, subj.plural);
  const fullSentence = `${dat.a} ${dat.iop} ${conjugated} ${subj.es}.`;

  const englishMeaning =
    verb === "doler"
      ? `${dat.poss} ${subj.en} ${
          tense === "present"
            ? subj.plural
              ? "hurt"
              : "hurts"
            : tense === "imperfect"
              ? "used to hurt / was hurting"
              : "hurt (suddenly)"
        }.`
      : `${dat.a === "A mí" ? "I" : dat.a === "A ti" ? "You" : dat.a === "A nosotros" ? "We" : dat.a === "A mi hermana" ? "My sister" : "The athletes"} ${
          tense === "present" ? "" : tense === "imperfect" ? "used to " : ""
        }${
          verb === "gustar"
            ? tense === "preterite"
              ? "liked"
              : dat.a === "A mi hermana" && tense === "present"
                ? "likes"
                : "like"
            : tense === "preterite"
              ? "loved"
              : dat.a === "A mi hermana" && tense === "present"
                ? "loves"
                : "love"
        } ${subj.en}.`;

  return (
    <WidgetFrame
      title="Doler, Gustar & Encantar Reverse-Verb Switchboard"
      tryThis={[
        "Keep the person on **yo (A mí me)** and toggle between *la cabeza* and *las muelas* — watch **duele** flip to **duelen**!",
        "Switch to **gustar** + *jugar al tenis*: notice an infinitive ALWAYS takes singular **gusta** (never a gerund *jugando*!).",
        "Switch **doler** to **Preterite** (*dolió / dolieron*): notice *-er* verbs NEVER stem-change in the preterite!",
      ]}
      caption={
        <span>
          <strong>Arrow-Right Rule:</strong> <em>{dat.iop}</em> tells us <strong>who</strong> feels it, while{" "}
          <strong>{conjugated}</strong> agrees strictly with <em>{subj.es}</em> ({subj.kind}).
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <div>
            <div className="mb-1 text-xs font-bold uppercase text-ink-2">1. Reverse Verb</div>
            <Segmented
              label="Reverse verb"
              value={verb}
              onChange={(v) => {
                setVerb(v);
                setSubjIdx(0);
              }}
              options={[
                { value: "doler", label: "doler (hurt)" },
                { value: "gustar", label: "gustar (like)" },
                { value: "encantar", label: "encantar (love)" },
              ]}
            />
          </div>
          <div>
            <div className="mb-1 text-xs font-bold uppercase text-ink-2">2. Time Frame</div>
            <Segmented
              label="Tense"
              value={tense}
              onChange={setTense}
              options={[
                { value: "present", label: "Present" },
                { value: "imperfect", label: "Imperfect" },
                { value: "preterite", label: "Preterite" },
              ]}
            />
          </div>
        </div>

        <div>
          <div className="mb-1 text-xs font-bold uppercase text-ink-2">3. Experiencer (Indirect Object)</div>
          <Segmented
            label="Experiencer"
            value={who}
            onChange={setWho}
            options={[
              { value: "yo", label: "yo (me)" },
              { value: "tú", label: "tú (te)" },
              { value: "él", label: "ella (le)" },
              { value: "nosotros", label: "nosotros (nos)" },
              { value: "ellos", label: "ellos (les)" },
            ]}
          />
        </div>

        <div>
          <div className="mb-1 text-xs font-bold uppercase text-ink-2">4. Grammatical Subject (Drives Singular vs Plural!)</div>
          <div className="flex flex-wrap gap-1.5">
            {pool.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSubjIdx(idx)}
                className={`min-h-10 rounded-xl border px-3 py-1.5 text-sm font-bold transition ${
                  idx === safeIdx
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-line bg-surface text-ink-2 hover:text-ink"
                }`}
              >
                {item.es}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface-2 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Live Grade-9 Sentence</div>
              <div className="mt-1 text-xl font-extrabold text-ink">
                <span className="text-brand">{dat.a} {dat.iop}</span>{" "}
                <span className="underline decoration-2 underline-offset-4">{conjugated}</span>{" "}
                <span>{subj.es}.</span>
              </div>
              <div className="mt-1 text-sm text-ink-2">{englishMeaning}</div>
            </div>
            <div className="flex items-center gap-1">
              <SpeakButton text={fullSentence} />
              <SpeakButton text={fullSentence} slow />
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Readout label="Indirect Pronoun" value={`${dat.a} → ${dat.iop}`} tone="brand" />
            <Readout label="Verb Form" value={conjugated} tone="good" />
            <Readout label="Subject Number" value={subj.plural ? "Plural (+n)" : "Singular (no -n)"} tone="ink" />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type InspectorTab = "ser-estar" | "pedir-preguntar";

const FOOD_CASES = [
  {
    id: "sopa",
    label: "la sopa / el gazpacho",
    estarEs: "Perdone, camarero, esta sopa de pollo está completamente fría.",
    estarEn: "Excuse me, waiter, this chicken soup is completely cold (right now — complaint!).",
    serEs: "El gazpacho andaluz es una sopa fría muy saludable.",
    serEn: "Andalusian gazpacho is a very healthy cold soup (by nature / definition).",
    trapNote: "Writing «la sopa es fría» claims soup is cold by definition instead of complaining that yours went cold!",
  },
  {
    id: "rico",
    label: "rico (wealthy vs delicious!)",
    estarEs: "¡Qué maravilla! La paella casera está riquísima esta noche.",
    estarEn: "How wonderful! The homemade paella tastes delicious tonight.",
    serEs: "El dueño de aquel restaurante de cinco estrellas es muy rico.",
    serEn: "The owner of that five-star restaurant is very wealthy.",
    trapNote: "Classic meaning-shifter: ser rico = rich/wealthy, whereas estar rico = tasty/delicious!",
  },
  {
    id: "cubierto",
    label: "el tenedor / el vaso",
    estarEs: "Disculpe, ¿me puede traer otro tenedor? Es que este está sucio.",
    estarEn: "Excuse me, could you bring me another fork? This one is dirty (temporary state).",
    serEs: "Los vasos de esta cafetería son de vidrio reciclado.",
    serEn: "The glasses in this café are made of recycled glass (material = ser).",
    trapNote: "Cleanliness and damage (está limpio, está sucio, está roto) ALWAYS require estar.",
  },
  {
    id: "sabor",
    label: "salado / picante",
    estarEs: "No pudimos comer el arroz porque estaba demasiado salado.",
    estarEn: "We couldn't eat the rice because it was too salty (that specific dish).",
    serEs: "Los chiles mexicanos son picantes por naturaleza.",
    serEn: "Mexican chillies are spicy by nature.",
    trapNote: "Notice imperfect estaba salado (how that plate turned out) vs son picantes (inherent trait).",
  },
] as const;

const ORDER_CASES = [
  {
    id: "cuenta",
    label: "la cuenta vs el precio",
    pedirEs: "Al terminar el postre, mi padre pidió la cuenta al camarero.",
    pedirEn: "After finishing dessert, my father asked for the bill (pedir = request an item, NO por!).",
    preguntarEs: "Antes de entrar, mi padre preguntó cuánto costaba el menú del día.",
    preguntarEn: "Before going in, my father asked how much the set menu cost (preguntar = ask a question).",
  },
  {
    id: "alergia",
    label: "alergias y platos",
    pedirEs: "De segundo plato yo pedí el pescado a la plancha con verduras.",
    pedirEn: "For main course I ordered grilled fish with vegetables (yo pedí).",
    preguntarEs: "Como soy alérgica, le pregunté a la camarera si la salsa llevaba frutos secos.",
    preguntarEn: "As I am allergic, I asked the waitress whether the sauce contained nuts (pregunté si...).",
  },
  {
    id: "plural",
    label: "ellos (pidieron vs preguntaron)",
    pedirEs: "Mis abuelos pidieron dos raciones de calamares y agua sin gas.",
    pedirEn: "My grandparents ordered two portions of squid and still water (e→i sandal: pidieron!).",
    preguntarEs: "Mis abuelos preguntaron dónde estaban los servicios.",
    preguntarEn: "My grandparents asked where the toilets were (preguntaron dónde...).",
  },
] as const;

function RestaurantInspector() {
  const [tab, setTab] = useState<InspectorTab>("ser-estar");
  const [foodIdx, setFoodIdx] = useState(0);
  const [lens, setLens] = useState<"estar" | "ser">("estar");
  const [orderIdx, setOrderIdx] = useState(0);
  const [verbChoice, setVerbChoice] = useState<"pedir" | "preguntar">("pedir");

  const food = FOOD_CASES[foodIdx];
  const order = ORDER_CASES[orderIdx];

  const activeEs =
    tab === "ser-estar"
      ? lens === "estar"
        ? food.estarEs
        : food.serEs
      : verbChoice === "pedir"
        ? order.pedirEs
        : order.preguntarEs;

  const activeEn =
    tab === "ser-estar"
      ? lens === "estar"
        ? food.estarEn
        : food.serEn
      : verbChoice === "pedir"
        ? order.pedirEn
        : order.preguntarEn;

  return (
    <WidgetFrame
      title="Restaurant Complaint & Ser vs Estar / Pedir vs Preguntar Inspector"
      tryThis={[
        "Inspect **rico**: toggle between **ESTAR (Plate Today)** and **SER (Inherent Nature)** to hear why *está riquísima* ≠ *es rico*!",
        "Switch to **Pedir vs Preguntar**: compare **pidió la cuenta** (no *por*!) against **preguntó cuánto costaba**.",
      ]}
      caption={
        tab === "ser-estar" ? (
          <span>
            <strong>Mark-Saver:</strong> {food.trapNote}
          </span>
        ) : (
          <span>
            <strong>Mark-Saver:</strong> Never write <em>pedir por</em> or <em>preguntar la cuenta</em> —{" "}
            <strong>pedir</strong> (<em>pido, pidió, pidieron</em>) orders objects; <strong>preguntar</strong> asks questions!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Inspector mode"
          value={tab}
          onChange={setTab}
          options={[
            { value: "ser-estar", label: "Ser vs Estar (Food & Cutlery)" },
            { value: "pedir-preguntar", label: "Pedir vs Preguntar (Ordering)" },
          ]}
        />

        {tab === "ser-estar" ? (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {FOOD_CASES.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setFoodIdx(i)}
                  className={`min-h-10 rounded-xl border px-3 py-1.5 text-sm font-bold transition ${
                    i === foodIdx
                      ? "border-brand bg-brand/10 text-brand"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <Segmented
              label="Ser or estar lens"
              value={lens}
              onChange={setLens}
              options={[
                { value: "estar", label: "ESTAR — Plate / State Right Now" },
                { value: "ser", label: "SER — Inherent Nature / Identity" },
              ]}
            />
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {ORDER_CASES.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setOrderIdx(i)}
                  className={`min-h-10 rounded-xl border px-3 py-1.5 text-sm font-bold transition ${
                    i === orderIdx
                      ? "border-brand bg-brand/10 text-brand"
                      : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <Segmented
              label="Pedir or preguntar"
              value={verbChoice}
              onChange={setVerbChoice}
              options={[
                { value: "pedir", label: "PEDIR — Order / Request an Item" },
                { value: "preguntar", label: "PREGUNTAR — Ask a Question" },
              ]}
            />
          </div>
        )}

        <div className="rounded-2xl border border-line bg-surface-2 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Authentic Restaurant Spanish</div>
              <div className="mt-1 text-lg font-extrabold text-ink">{activeEs}</div>
              <div className="mt-1 text-sm text-ink-2">{activeEn}</div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <SpeakButton text={activeEs} />
              <SpeakButton text={activeEs} slow />
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "social-fitness-health-reverse-verbs",
    title: "Doler, Gustar & Encantar Reverse-Verb Builder",
    blurb: "Toggle experiencer, tense, and singular/plural body parts or hobbies to see why reverse verbs agree to the right.",
    Component: ReverseVerbBuilder,
  },
  {
    id: "social-fitness-health-restaurant-inspector",
    title: "Restaurant Complaint & Ser vs Estar / Pedir vs Preguntar Inspector",
    blurb: "Compare temporary plate states (estar) against menu definitions (ser), and ordering (pedir) against asking questions (preguntar).",
    Component: RestaurantInspector,
  },
];
