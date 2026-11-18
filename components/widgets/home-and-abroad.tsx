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
      className="btn btn-ghost btn-sm min-h-9 min-w-9 px-2 text-sm"
      onClick={(e) => {
        e.stopPropagation();
        speakSpanish(text, { slow });
      }}
      aria-label={label ?? (slow ? `Hear slowly: ${text}` : `Hear: ${text}`)}
      title={slow ? "Hear slowly (🐢)" : "Hear in Spanish (🔊)"}
    >
      {slow ? "🐢" : "🔊"}
    </button>
  );
}

type DestKey = "valencia" | "sevilla" | "cuzco" | "mallorca";
type TransKey = "avion" | "ave" | "barco";
type StayKey = "parador" | "albergue" | "pension";
type WeatherKey = "sol" | "lluvia" | "niebla";
type FutureKey = "si" | "futuro";

const DESTS: Record<DestKey, { name: string; zone: string; act: string; extraDest: string }> = {
  valencia: {
    name: "Valencia",
    zone: "está situada en la costa este de España",
    act: "asistimos a Las Fallas y probamos una paella auténtica",
    extraDest: "Granada",
  },
  sevilla: {
    name: "Sevilla",
    zone: "está situada en el sur de Andalucía",
    act: "paseamos por el casco antiguo y visitamos la Giralda",
    extraDest: "Córdoba",
  },
  cuzco: {
    name: "Cuzco",
    zone: "está situada en los Andes de Perú",
    act: "subimos a Machu Picchu y sacamos muchísimas fotos",
    extraDest: "Lima",
  },
  mallorca: {
    name: "Mallorca",
    zone: "es una isla pintoresca en el Mediterráneo",
    act: "nadamos en calas cristalinas y alquilamos bicicletas",
    extraDest: "Menorca",
  },
};

const TRANS: Record<TransKey, { es: string; en: string }> = {
  avion: { es: "en avión", en: "by plane (no article!)" },
  ave: { es: "en tren de alta velocidad", en: "by AVE bullet train" },
  barco: { es: "en barco", en: "by ferry/boat" },
};

const STAYS: Record<StayKey, { es: string; note: string }> = {
  parador: { es: "en un parador histórico", note: "state-run castle hotel" },
  albergue: { es: "en un albergue juvenil céntrico", note: "youth hostel" },
  pension: { es: "en una pensión con vistas al mar", note: "guesthouse with sea view" },
};

const WEATHERS: Record<WeatherKey, { past: string; pres: string; pillar: string }> = {
  sol: {
    past: "hizo muchísimo sol",
    pres: "hace buen tiempo y el cielo está despejado",
    pillar: "HACER + noun (mucho, never muy!) & ESTAR + adj",
  },
  lluvia: {
    past: "llovió a cántaros el primer día",
    pres: "ya no llueve y hace fresco",
    pillar: "Pure verb LLOVER (preterite llovió, present llueve)",
  },
  niebla: {
    past: "había mucha niebla por la mañana",
    pres: "hace viento suave pero está soleado",
    pillar: "Impersonal HABER (singular había!) + por la mañana",
  },
};

function PostcardBuilder() {
  const [dest, setDest] = useState<DestKey>("valencia");
  const [trans, setTrans] = useState<TransKey>("ave");
  const [stay, setStay] = useState<StayKey>("parador");
  const [weather, setWeather] = useState<WeatherKey>("sol");
  const [futMode, setFutMode] = useState<FutureKey>("si");

  const d = DESTS[dest];
  const tr = TRANS[trans];
  const st = STAYS[stay];
  const w = WEATHERS[weather];

  const pastSentence = `El verano pasado fui de vacaciones a ${d.name} ${tr.es} y nos alojamos ${st.es}. Durante el viaje ${w.past}, así que ${d.act}.`;
  const presentSentence = `¡Me encanta esta región porque ${d.zone}! Acabo de comprar recuerdos en la plaza mayor, donde hoy ${w.pres}.`;
  const futureSentence =
    futMode === "si"
      ? `Si tuviera más tiempo y ahorros el año que viene, volvería sin duda y visitaría también ${d.extraDest} para que mis padres conozcan su cultura.`
      : `Mañana haremos una excursión guiada y el próximo verano volveré a viajar al extranjero porque merece muchísimo la pena.`;

  const fullText = `${pastSentence} ${presentSentence} ${futureSentence}`;
  const wordCount = fullText.trim().split(/\s+/).length;

  return (
    <WidgetFrame
      title="📮 Interactive 3-Time-Frame Holiday Postcard Builder (Paper 2 Q7)"
      tryThis={[
        "Switch destination, transport, weather pillar, and future upgrade to hear how every grammar trap snaps into place.",
        "Toggle **Type-2 Si Clause + Subjunctive** to unlock Band-5 Edexcel `4SP0` linguistic range, then tap 🔊 or 🐢!",
      ]}
      caption={
        <span>
          <strong>Mark-Scheme Check:</strong> Notice zero personal <em>a</em> before <strong>{d.name}</strong> (<em>fui de vacaciones a {d.name}</em> / <em>visitaría {d.extraDest}</em>), <strong>{tr.es}</strong> ({tr.en}), and weather pillar <strong>{w.pillar}</strong>.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">1. Destination (Ser vs Estar)</div>
            <Segmented
              label="Destination"
              value={dest}
              onChange={setDest}
              options={[
                { value: "valencia", label: "🔥 Valencia" },
                { value: "sevilla", label: "💃 Sevilla" },
                { value: "cuzco", label: "🏔️ Cuzco" },
                { value: "mallorca", label: "🏝️ Mallorca" },
              ]}
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">2. Transport (en + no article)</div>
            <Segmented
              label="Transport"
              value={trans}
              onChange={setTrans}
              options={[
                { value: "ave", label: "🚄 AVE" },
                { value: "avion", label: "✈️ Avión" },
                { value: "barco", label: "⛴️ Barco" },
              ]}
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">3. Accommodation (alojarse en)</div>
            <Segmented
              label="Accommodation"
              value={stay}
              onChange={setStay}
              options={[
                { value: "parador", label: "🏰 Parador" },
                { value: "pension", label: "🌊 Pensión" },
                { value: "albergue", label: "🎒 Albergue" },
              ]}
            />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">4. Weather Pillar</div>
            <Segmented
              label="Weather"
              value={weather}
              onChange={setWeather}
              options={[
                { value: "sol", label: "☀️ Hacer + sol" },
                { value: "lluvia", label: "🌧️ Llover" },
                { value: "niebla", label: "🌫️ Haber + niebla" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">5. Future / Grade-9 Stretch Frame</div>
            <Segmented
              label="Future Stretch"
              value={futMode}
              onChange={setFutMode}
              options={[
                { value: "si", label: "🏆 Si tuviera… + para que (Grade 9)" },
                { value: "futuro", label: "🚀 Simple Future (haré / volveré)" },
              ]}
            />
          </div>
          <div className="flex items-center gap-1 rounded-xl border border-line bg-surface-2 px-3 py-1.5">
            <span className="text-xs font-bold text-ink-2">Hear full postcard:</span>
            <SpeakButton text={fullText} label="Hear full Spanish postcard" />
            <SpeakButton text={fullText} slow label="Hear full Spanish postcard slowly" />
          </div>
        </div>

        <div className="grid gap-2.5">
          <div className="rounded-xl border border-blue-300/60 bg-blue-50/70 p-3 dark:bg-blue-950/30">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wide text-blue-800 dark:text-blue-300">
                ⏪ Past Frame (Preterite + Imperfect)
              </span>
              <div className="flex items-center">
                <SpeakButton text={pastSentence} />
                <SpeakButton text={pastSentence} slow />
              </div>
            </div>
            <p className="mt-1 font-semibold text-ink" lang="es">
              {pastSentence}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-300/60 bg-emerald-50/70 p-3 dark:bg-emerald-950/30">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
                📍 Present + Acabar de + Location
              </span>
              <div className="flex items-center">
                <SpeakButton text={presentSentence} />
                <SpeakButton text={presentSentence} slow />
              </div>
            </div>
            <p className="mt-1 font-semibold text-ink" lang="es">
              {presentSentence}
            </p>
          </div>

          <div className="rounded-xl border border-amber-300/60 bg-amber-50/70 p-3 dark:bg-amber-950/30">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wide text-amber-900 dark:text-amber-300">
                🔮 Future / Hypothetical Grade-9 Clincher
              </span>
              <div className="flex items-center">
                <SpeakButton text={futureSentence} />
                <SpeakButton text={futureSentence} slow />
              </div>
            </div>
            <p className="mt-1 font-semibold text-ink" lang="es">
              {futureSentence}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Time Frames" value="3 / 3 ✅" tone="good" />
          <Readout label="Words" value={`${wordCount} w`} tone="brand" />
          <Readout label="Paper 2 Band" value={futMode === "si" ? "Band 5 (Gr 9)" : "Band 4–5"} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

type RoleTab = "directions" | "complaint";
type Register = "usted" | "tu";
type LandmarkKey = "museo" | "estacion" | "ayuntamiento";
type FaultKey = "aire" | "ascensor" | "ducha";
type MissingKey = "toallas" | "llave" | "jabon";
type TimeMode = "live" | "past";

const LANDMARKS: Record<
  LandmarkKey,
  {
    title: string;
    usted: string;
    tu: string;
    verbsUsted: string;
    verbsTu: string;
    destLabel: string;
  }
> = {
  museo: {
    title: "el Museo de Arte",
    destLabel: "Museo",
    usted: "Perdone: siga todo recto, cruce el puente y en el primer semáforo gire a la izquierda.",
    tu: "Oye: sigue todo recto, cruza el puente y en el primer semáforo gira a la izquierda.",
    verbsUsted: "siga · cruce (-zar→-ce) · gire",
    verbsTu: "sigue · cruza · gira",
  },
  estacion: {
    title: "la estación de trenes",
    destLabel: "Estación AVE",
    usted: "Disculpe: tome la segunda calle a la derecha, pase la rotonda y vaya a pie hasta la plaza.",
    tu: "Mira: toma la segunda calle a la derecha, pasa la rotonda y ve a pie hasta la plaza.",
    verbsUsted: "tome · pase · vaya (DISHES ir!)",
    verbsTu: "toma · pasa · ve (irreg. tú!)",
  },
  ayuntamiento: {
    title: "el ayuntamiento",
    destLabel: "Ayuntamiento",
    usted: "Buenos días: coja esta avenida peatonal, suba hasta el tercer cruce y tuerza a la derecha.",
    tu: "Hola: coge esta avenida peatonal, sube hasta el tercer cruce y tuerce a la derecha.",
    verbsUsted: "coja (g→j) · suba · tuerza (o→ue)",
    verbsTu: "coge · sube · tuerce",
  },
};

const FAULTS: Record<FaultKey, { live: string; past: string; en: string }> = {
  aire: {
    live: "el aire acondicionado no funciona y hace muchísimo calor",
    past: "el aire acondicionado no funcionaba y hacía muchísimo calor",
    en: "the air conditioning isn't/wasn't working",
  },
  ascensor: {
    live: "el ascensor está averiado y la habitación está sucia",
    past: "el ascensor estaba averiado y la habitación estaba sucia",
    en: "the lift is/was out of order and the room dirty",
  },
  ducha: {
    live: "la ducha está rota y hay mucho ruido en el pasillo",
    past: "la ducha estaba rota y había mucho ruido en el pasillo",
    en: "the shower is/was broken and the corridor noisy",
  },
};

const MISSING: Record<MissingKey, { live: string; past: string }> = {
  toallas: { live: "tampoco hay toallas limpias en el baño", past: "tampoco había toallas limpias cuando llegamos" },
  llave: { live: "la tarjeta de la puerta no abre bien", past: "no había segunda llave en recepción" },
  jabon: { live: "no hay jabón ni papel higiénico", past: "no había jabón ni mantas en el armario" },
};

function RolePlayExplorer() {
  const [tab, setTab] = useState<RoleTab>("directions");
  const [reg, setReg] = useState<Register>("usted");
  const [landmark, setLandmark] = useState<LandmarkKey>("museo");
  const [fault, setFault] = useState<FaultKey>("aire");
  const [missing, setMissing] = useState<MissingKey>("toallas");
  const [timeMode, setTimeMode] = useState<TimeMode>("live");

  const lm = LANDMARKS[landmark];
  const dirText = reg === "usted" ? lm.usted : lm.tu;

  const f = FAULTS[fault];
  const m = MISSING[missing];
  const complaintText =
    timeMode === "live"
      ? `Perdone, buenas tardes: tengo un problema con mi habitación. Por desgracia, ${f.live}, y ${m.live}. ¿Podría cambiarme a otra habitación más tranquila, por favor?`
      : `Cuando llegamos al hotel, ${f.past}, y ${m.past}. Por eso me quejé inmediatamente en recepción y nos dieron otra habitación doble sin coste adicional.`;

  return (
    <WidgetFrame
      title="🧭 Directions & Hotel Complaint Role-Play Explorer (Paper 3 + Paper 2)"
      tryThis={[
        "In **🧭 Directions**, flip between **Polite usted** and **Informal tú** to watch every imperative ending vowel swap live!",
        "In **🛎️ Hotel Complaint**, switch from **Live Paper 3 Role-Play (Present)** to **Paper 2 Q7 Narrative (Imperfect + Preterite)**.",
      ]}
      caption={
        tab === "directions" ? (
          <span>
            <strong>Imperative Vowel Flip:</strong> Active forms = <strong>{reg === "usted" ? lm.verbsUsted : lm.verbsTu}</strong>. Never mix <em>siga</em> and <em>cruza</em> in the same conversation!
          </span>
        ) : (
          <span>
            <strong>Impersonal Haber Guard:</strong> Notice singular <strong>hay / había</strong> even before plural <em>toallas</em> or <em>mantas</em> — never write <em>habían</em>!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Explorer mode"
          value={tab}
          onChange={setTab}
          options={[
            { value: "directions", label: "🧭 Street Navigator (tú vs usted)" },
            { value: "complaint", label: "🛎️ Hotel Reception Complaint" },
          ]}
        />

        {tab === "directions" ? (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Register</div>
                <Segmented
                  label="Register"
                  value={reg}
                  onChange={setReg}
                  options={[
                    { value: "usted", label: "🎩 Polite usted (Paper 3)" },
                    { value: "tu", label: "👟 Informal tú (friend)" },
                  ]}
                />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Target Landmark</div>
                <Segmented
                  label="Landmark"
                  value={landmark}
                  onChange={setLandmark}
                  options={[
                    { value: "museo", label: "🖼️ Museo" },
                    { value: "estacion", label: "🚉 Estación" },
                    { value: "ayuntamiento", label: "🏛️ Ayuntamiento" },
                  ]}
                />
              </div>
            </div>

            <svg
              viewBox="0 0 560 150"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Street map route to ${lm.title}`}
              className="w-full rounded-xl border border-line bg-surface-2"
            >
              <rect x="0" y="0" width="560" height="150" rx="12" fill="#f8fafc" />
              <rect x="24" y="64" width="512" height="28" fill="#cbd5e1" />
              <rect x="270" y="16" width="30" height="118" fill="#cbd5e1" />
              <rect x="145" y="58" width="52" height="40" rx="4" fill="#bae6fd" stroke="#0284c7" strokeWidth="1.5" />
              <text x="171" y="51" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0369a1">
                puente / rotonda
              </text>
              <circle cx="56" cy="78" r="9" fill="#dc2626" />
              <text x="56" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991b1b">
                Salida
              </text>
              <path
                d={landmark === "museo" ? "M 68 78 L 285 78 L 285 34" : "M 68 78 L 285 78 L 285 122"}
                fill="none"
                stroke="#2563eb"
                strokeWidth="3.5"
                strokeDasharray="6,4"
              />
              <rect
                x="312"
                y={landmark === "museo" ? 16 : 98}
                width="145"
                height="34"
                rx="8"
                fill="#dcfce7"
                stroke="#16a34a"
                strokeWidth="1.5"
              />
              <text
                x="384"
                y={landmark === "museo" ? 37 : 119}
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#14532d"
              >
                🏁 {lm.destLabel}
              </text>
            </svg>

            <div className="rounded-xl border border-line bg-surface p-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
                  {reg === "usted" ? "Polite Usted Instruction" : "Informal Tú Instruction"} → {lm.title}
                </span>
                <div className="flex items-center">
                  <SpeakButton text={dirText} />
                  <SpeakButton text={dirText} slow />
                </div>
              </div>
              <p className="mt-1 text-base font-bold text-ink" lang="es">
                «{dirText}»
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Exam Context</div>
                <Segmented
                  label="Time mode"
                  value={timeMode}
                  onChange={setTimeMode}
                  options={[
                    { value: "live", label: "🎙️ Paper 3 Live" },
                    { value: "past", label: "✍️ Paper 2 Past" },
                  ]}
                />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Room Fault</div>
                <Segmented
                  label="Room fault"
                  value={fault}
                  onChange={setFault}
                  options={[
                    { value: "aire", label: "❄️ Aire" },
                    { value: "ascensor", label: "🛗 Ascensor" },
                    { value: "ducha", label: "🚿 Ducha" },
                  ]}
                />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Missing / Extra</div>
                <Segmented
                  label="Missing item"
                  value={missing}
                  onChange={setMissing}
                  options={[
                    { value: "toallas", label: "🧺 Toallas" },
                    { value: "jabon", label: "🧼 Jabón" },
                    { value: "llave", label: "🔑 Llave" },
                  ]}
                />
              </div>
            </div>

            <div className="rounded-xl border border-line bg-surface p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wide text-brand">
                  {timeMode === "live"
                    ? "Paper 3 Reception Role-Play (Present + ¿Podría…?)"
                    : "Paper 2 Q7 Past Narrative (Imperfect Background + Preterite Action)"}
                </span>
                <div className="flex items-center">
                  <SpeakButton text={complaintText} />
                  <SpeakButton text={complaintText} slow />
                </div>
              </div>
              <p className="mt-2 text-base font-bold leading-relaxed text-ink" lang="es">
                «{complaintText}»
              </p>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "home-and-abroad-postcard-builder",
    title: "3-Time-Frame Holiday Postcard Builder",
    blurb: "Assemble a Band-5 Edexcel Paper 2 Q7 holiday narrative across Past, Present & Hypothetical Future with live Spanish audio.",
    Component: PostcardBuilder,
  },
  {
    id: "home-and-abroad-roleplay-explorer",
    title: "Directions & Hotel Complaint Role-Play Explorer",
    blurb: "Master tú vs polite usted street imperatives and Paper 3 / Paper 2 hotel complaints with instant pronunciation.",
    Component: RolePlayExplorer,
  },
];
