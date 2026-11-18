// ---------------------------------------------------------------------------
// Spanish verb conjugation library for Pearson Edexcel IGCSE Spanish (4SP0).
//
// Supports all 8 core IGCSE tenses & moods:
//   present · preterite · imperfect · near-future · future · conditional ·
//   perfect · subjunctive (present subjunctive)
// plus past participles & gerunds.
//
// Pure data + functions (no React) so it is safe to import from drills,
// widgets, Vocab/Verb pages, Node scripts and unit tests.
// ---------------------------------------------------------------------------

export type Person = "yo" | "tú" | "él" | "nosotros" | "vosotros" | "ellos";

export const PERSONS: readonly Person[] = ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];

export const PERSON_LABEL: Record<Person, string> = {
  yo: "yo (I)",
  tú: "tú (you)",
  él: "él / ella / usted (he / she / you formal)",
  nosotros: "nosotros / as (we)",
  vosotros: "vosotros / as (you all)",
  ellos: "ellos / ellas / ustedes (they / you plural)",
};

/** Subject pronouns a learner may type in front of the verb (first = canonical). */
export const SUBJECT_PRONOUNS: Record<Person, readonly string[]> = {
  yo: ["yo"],
  tú: ["tú"],
  él: ["él", "ella", "usted"],
  nosotros: ["nosotros", "nosotras"],
  vosotros: ["vosotros", "vosotras"],
  ellos: ["ellos", "ellas", "ustedes"],
};

export type Tense =
  | "present"
  | "preterite"
  | "imperfect"
  | "near-future"
  | "future"
  | "conditional"
  | "perfect"
  | "subjunctive";

export const TENSES: readonly Tense[] = [
  "present",
  "preterite",
  "imperfect",
  "near-future",
  "future",
  "conditional",
  "perfect",
  "subjunctive",
];

export const TENSE_LABEL: Record<Tense, string> = {
  present: "Present (presente)",
  preterite: "Preterite (pretérito indefinido)",
  imperfect: "Imperfect (pretérito imperfecto)",
  "near-future": "Near future (ir a + infinitive)",
  future: "Simple future (futuro simple)",
  conditional: "Conditional (condicional)",
  perfect: "Perfect (pretérito perfecto)",
  subjunctive: "Present subjunctive (presente de subjuntivo)",
};

export interface VerbInfo {
  /** Infinitive, including -se for reflexives (e.g. "levantarse", "llevarse"). */
  inf: string;
  /** English meaning, e.g. "to get along (with)". */
  en: string;
  reflexive: boolean;
  group: "ar" | "er" | "ir";
  /** Grammar & topic tags ("regular", "stem-e-ie", "yo-go", "dishes", "topic:home-and-abroad", ...). */
  tags: string[];
}

type StemChange = "e-ie" | "o-ue" | "u-ue" | "e-i";
type Forms = Partial<Record<Person, string>>;

interface EnglishForms {
  base: string;
  s3: string;
  past: string;
  participle: string;
  future: string;
}

interface VerbDef {
  info: VerbInfo;
  stemChange?: StemChange;
  present: Forms;
  preterite: Forms;
  imperfect: Forms;
  subjunctive: Forms;
  futureStem?: string;
  participle?: string;
  gerund?: string;
  eng: EnglishForms;
}

interface DefOpts {
  stem?: StemChange;
  topics?: string[];
  tags?: string[];
  present?: Forms;
  preterite?: Forms;
  imperfect?: Forms;
  subjunctive?: Forms;
  futureStem?: string;
  participle?: string;
  gerund?: string;
  s3?: string;
  future?: string;
}

function six(list: string): Forms {
  const parts = list.split(",").map((s) => s.trim());
  if (parts.length !== 6) throw new Error(`six(): expected 6 forms, got ${parts.length} in "${list}"`);
  const out: Forms = {};
  PERSONS.forEach((p, i) => {
    out[p] = parts[i];
  });
  return out;
}

function englishS3(base: string): string {
  const [head, ...rest] = base.split(" ");
  const tail = rest.length ? " " + rest.join(" ") : "";
  const special: Record<string, string> = { have: "has", be: "is", can: "can", must: "must", do: "does", go: "goes" };
  let s: string;
  if (special[head]) s = special[head];
  else if (/(s|sh|ch|x|z|o)$/.test(head)) s = head + "es";
  else if (/[^aeiou]y$/.test(head)) s = head.slice(0, -1) + "ies";
  else s = head + "s";
  return s + tail;
}

function splitInf(inf: string): { base: string; reflexive: boolean; group: "ar" | "er" | "ir"; stem: string } {
  const reflexive = inf.endsWith("se") && /(ar|er|ir|ír)se$/.test(inf);
  const base = reflexive ? inf.slice(0, -2) : inf;
  const rawEnding = base.slice(-2);
  const ending = rawEnding === "ír" ? "ir" : rawEnding;
  if (ending !== "ar" && ending !== "er" && ending !== "ir") throw new Error(`Not an infinitive: ${inf}`);
  return { base, reflexive, group: ending, stem: base.slice(0, -2) };
}

/**
 * d(infinitive, English meaning, "base|past|participle" (participle defaults to past), options)
 */
function d(inf: string, en: string, gloss: string, o: DefOpts = {}): VerbDef {
  const { reflexive, group, stem } = splitInf(inf);
  const parts = gloss.split("|");
  const base = parts[0];
  const past = parts[1];
  const partEn = parts[2] ?? past;
  if (!base || !past) throw new Error(`Bad gloss for ${inf}: "${gloss}"`);

  const tags: string[] = [];
  if (o.stem) tags.push(`stem-${o.stem}`);
  if (group === "ar") {
    if (stem.endsWith("c")) tags.push("spelling-car");
    else if (stem.endsWith("g")) tags.push("spelling-gar");
    else if (stem.endsWith("z")) tags.push("spelling-zar");
  }
  if ((group === "er" || group === "ir") && stem.endsWith("g")) tags.push("spelling-ger");
  if (o.futureStem) tags.push("irregular-future");
  if (o.participle) tags.push("irregular-participle");
  for (const t of o.tags ?? []) if (!tags.includes(t)) tags.push(t);
  if (tags.length === 0 && !o.present && !o.preterite && !o.imperfect && !o.subjunctive) tags.unshift("regular");
  if (reflexive) tags.push("reflexive");
  for (const t of o.topics ?? []) tags.push(`topic:${t}`);

  return {
    info: { inf, en, reflexive, group, tags },
    stemChange: o.stem,
    present: o.present ?? {},
    preterite: o.preterite ?? {},
    imperfect: o.imperfect ?? {},
    subjunctive: o.subjunctive ?? {},
    futureStem: o.futureStem,
    participle: o.participle,
    gerund: o.gerund,
    eng: { base, s3: o.s3 ?? englishS3(base), past, participle: partEn, future: o.future ?? base },
  };
}

// ---------------------------------------------------------------------------
// Complete IGCSE 4SP0 Verb List (~115 verbs across all 7 topics)
// ---------------------------------------------------------------------------

const DEFS: VerbDef[] = [
  // ----- Regular & Spelling-Change -AR -----
  d("hablar", "to speak, to talk", "speak|spoke|spoken", { topics: ["personal-life-relationships", "education-and-employment"] }),
  d("escuchar", "to listen (to)", "listen|listened", { topics: ["social-fitness-health", "personal-life-relationships"] }),
  d("bailar", "to dance", "dance|danced", { topics: ["social-fitness-health", "home-and-abroad"] }),
  d("cantar", "to sing", "sing|sang|sung", { topics: ["social-fitness-health"] }),
  d("nadar", "to swim", "swim|swam|swum", { topics: ["social-fitness-health", "home-and-abroad"] }),
  d("cocinar", "to cook", "cook|cooked", { topics: ["social-fitness-health", "personal-life-relationships"] }),
  d("limpiar", "to clean", "clean|cleaned", { topics: ["world-around-us", "home-and-abroad"] }),
  d("ayudar", "to help", "help|helped", { topics: ["world-around-us", "personal-life-relationships"] }),
  d("visitar", "to visit", "visit|visited", { topics: ["home-and-abroad"] }),
  d("comprar", "to buy", "buy|bought", { topics: ["home-and-abroad", "social-fitness-health"] }),
  d("trabajar", "to work", "work|worked", { topics: ["education-and-employment"] }),
  d("estudiar", "to study", "study|studied", { topics: ["education-and-employment"] }),
  d("repasar", "to revise", "revise|revised", { topics: ["education-and-employment"] }),
  d("viajar", "to travel", "travel|travelled", { topics: ["home-and-abroad"] }),
  d("reservar", "to book, to reserve", "book|booked", { topics: ["home-and-abroad"] }),
  d("facturar", "to check in (luggage)", "check in luggage|checked in luggage", { topics: ["home-and-abroad"] }),
  d("celebrar", "to celebrate", "celebrate|celebrated", { topics: ["home-and-abroad", "personal-life-relationships"] }),
  d("llegar", "to arrive", "arrive|arrived", { topics: ["home-and-abroad", "education-and-employment"] }),
  d("pagar", "to pay (for)", "pay|paid", { topics: ["home-and-abroad", "social-fitness-health"] }),
  d("practicar", "to practise", "practise|practised", { topics: ["social-fitness-health"] }),
  d("tocar", "to play (an instrument), to touch", "play an instrument|played an instrument", { topics: ["social-fitness-health"] }),
  d("buscar", "to look for, to search", "look for|looked for", { topics: ["education-and-employment", "home-and-abroad"] }),
  d("sacar", "to get (grades), to take (photos)", "get good grades|got good grades", { topics: ["education-and-employment", "home-and-abroad"] }),
  d("explicar", "to explain", "explain|explained", { topics: ["education-and-employment"] }),
  d("cruzar", "to cross", "cross|crossed", { topics: ["home-and-abroad"] }),
  d("organizar", "to organise", "organise|organised", { topics: ["world-around-us", "education-and-employment"] }),
  d("reutilizar", "to reuse", "reuse|reused", { topics: ["world-around-us"] }),
  d("reciclar", "to recycle", "recycle|recycled", { topics: ["world-around-us"] }),
  d("ahorrar", "to save (money, energy, water)", "save|saved", { topics: ["world-around-us", "education-and-employment"] }),
  d("contaminar", "to pollute", "pollute|polluted", { topics: ["world-around-us"] }),
  d("malgastar", "to waste", "waste|wasted", { topics: ["world-around-us"] }),
  d("apagar", "to switch off, to turn off", "switch off|switched off", { topics: ["world-around-us"] }),
  d("recaudar", "to raise (funds)", "raise funds|raised funds", { topics: ["world-around-us"] }),
  d("donar", "to donate", "donate|donated", { topics: ["world-around-us"] }),
  d("descargar", "to download", "download|downloaded", { topics: ["world-around-us", "social-fitness-health"] }),
  d("fumar", "to smoke", "smoke|smoked", { topics: ["social-fitness-health"] }),
  d("evitar", "to avoid", "avoid|avoided", { topics: ["social-fitness-health", "world-around-us"] }),
  d("mejorar", "to improve", "improve|improved", { topics: ["education-and-employment", "social-fitness-health"] }),
  d("entrenar", "to train", "train|trained", { topics: ["social-fitness-health"] }),
  d("descansar", "to rest", "rest|rested", { topics: ["social-fitness-health", "home-and-abroad"] }),
  d("cenar", "to have dinner", "have dinner|had dinner", { topics: ["social-fitness-health"] }),
  d("desayunar", "to have breakfast", "have breakfast|had breakfast", { topics: ["social-fitness-health"] }),
  d("ganar", "to earn, to win", "earn|earned", { topics: ["education-and-employment", "social-fitness-health"] }),
  d("gastar", "to spend (money)", "spend money|spent money", { topics: ["education-and-employment"] }),
  d("solicitar", "to apply for", "apply for|applied for", { topics: ["education-and-employment"] }),
  d("suspender", "to fail (an exam)", "fail|failed", { topics: ["education-and-employment"] }),
  d("apoyar", "to support", "support|supported", { topics: ["personal-life-relationships", "world-around-us"] }),
  d("respetar", "to respect", "respect|respected", { topics: ["personal-life-relationships", "world-around-us"] }),
  d("superar", "to overcome", "overcome|overcame|overcome", { topics: ["personal-life-relationships"] }),
  d("pasar", "to spend (time), to pass", "spend time|spent time", { topics: ["home-and-abroad", "social-fitness-health"] }),
  d("tomar", "to take, to have (food/drink)", "take|took|taken", { topics: ["home-and-abroad", "social-fitness-health"] }),
  d("navegar", "to surf (the internet)", "surf the internet|surfed the internet", { topics: ["world-around-us", "social-fitness-health"] }),
  d("esquiar", "to ski", "ski|skied", {
    topics: ["home-and-abroad", "social-fitness-health"],
    tags: ["accent-i"],
    present: six("esquío, esquías, esquía, esquiamos, esquiáis, esquían"),
    subjunctive: six("esquíe, esquíes, esquíe, esquiemos, esquiéis, esquíen"),
  }),
  d("enviar", "to send", "send|sent", {
    topics: ["world-around-us", "education-and-employment"],
    tags: ["accent-i"],
    present: six("envío, envías, envía, enviamos, enviáis, envían"),
    subjunctive: six("envíe, envíes, envíe, enviemos, enviéis, envíen"),
  }),
  d("confiar", "to trust", "trust|trusted", {
    topics: ["personal-life-relationships"],
    tags: ["accent-i"],
    present: six("confío, confías, confía, confiamos, confiáis, confían"),
    subjunctive: six("confíe, confíes, confíe, confiemos, confiéis, confíen"),
  }),
  d("andar", "to walk", "walk|walked", {
    topics: ["home-and-abroad"],
    tags: ["irregular-preterite"],
    preterite: six("anduve, anduviste, anduvo, anduvimos, anduvisteis, anduvieron"),
  }),

  // ----- Stem-Changing -AR -----
  d("empezar", "to start, to begin", "start|started", { stem: "e-ie", topics: ["education-and-employment", "past-future-tenses"] }),
  d("pensar", "to think, to intend", "think|thought", { stem: "e-ie", topics: ["education-and-employment", "subjunctive-grade9"] }),
  d("recomendar", "to recommend", "recommend|recommended", { stem: "e-ie", topics: ["subjunctive-grade9", "social-fitness-health"] }),
  d("jugar", "to play (a sport / game)", "play|played", { stem: "u-ue", topics: ["social-fitness-health"] }),
  d("almorzar", "to have lunch", "have lunch|had lunch", { stem: "o-ue", topics: ["social-fitness-health", "education-and-employment"] }),
  d("aprobar", "to pass (an exam)", "pass|passed", { stem: "o-ue", topics: ["education-and-employment"] }),
  d("recordar", "to remember", "remember|remembered", { stem: "o-ue", topics: ["personal-life-relationships", "past-future-tenses"] }),
  d("encontrar", "to find", "find|found", { stem: "o-ue", topics: ["home-and-abroad", "education-and-employment"] }),

  // ----- Reflexive Verbs -----
  d("levantarse", "to get up", "get up|got up", { topics: ["social-fitness-health"] }),
  d("despertarse", "to wake up", "wake up|woke up|woken up", { stem: "e-ie", topics: ["social-fitness-health"] }),
  d("acostarse", "to go to bed", "go to bed|went to bed|gone to bed", { stem: "o-ue", topics: ["social-fitness-health"] }),
  d("ducharse", "to have a shower", "have a shower|had a shower", { topics: ["social-fitness-health"] }),
  d("quedarse", "to stay", "stay|stayed", { topics: ["home-and-abroad"] }),
  d("alojarse", "to stay (in accommodation)", "stay in a hotel|stayed in a hotel", { topics: ["home-and-abroad"] }),
  d("quejarse", "to complain", "complain|complained", { topics: ["home-and-abroad", "social-fitness-health"] }),
  d("llevarse", "to get along (with)", "get along|got along", { topics: ["personal-life-relationships"] }),
  d("pelearse", "to argue, to fight", "argue|argued", { topics: ["personal-life-relationships"] }),
  d("casarse", "to get married", "get married|got married", { topics: ["personal-life-relationships"] }),
  d("divorciarse", "to get divorced", "get divorced|got divorced", { topics: ["personal-life-relationships"] }),
  d("relajarse", "to relax", "relax|relaxed", { topics: ["social-fitness-health", "home-and-abroad"] }),
  d("emborracharse", "to get drunk", "get drunk|got drunk", { topics: ["social-fitness-health"] }),
  d("licenciarse", "to graduate (from university)", "graduate|graduated", { topics: ["education-and-employment"] }),
  d("sentirse", "to feel", "feel|felt", { stem: "e-ie", gerund: "sintiéndose", topics: ["personal-life-relationships", "social-fitness-health"] }),
  d("divertirse", "to have fun, to enjoy oneself", "have fun|had fun", { stem: "e-ie", gerund: "divirtiéndose", topics: ["social-fitness-health", "home-and-abroad"] }),
  d("vestirse", "to get dressed", "get dressed|got dressed", { stem: "e-i", gerund: "vistiéndose", topics: ["personal-life-relationships", "home-and-abroad"] }),

  // ----- Regular, Stem-Changing & Irregular -ER -----
  d("comer", "to eat", "eat|ate|eaten", { topics: ["social-fitness-health"] }),
  d("beber", "to drink", "drink|drank|drunk", { topics: ["social-fitness-health"] }),
  d("aprender", "to learn", "learn|learnt", { topics: ["education-and-employment"] }),
  d("comprender", "to understand", "understand|understood", { topics: ["education-and-employment"] }),
  d("correr", "to run", "run|ran|run", { topics: ["social-fitness-health"] }),
  d("deber", "must, should, to owe", "must|had to|had to", { future: "have to", topics: ["education-and-employment", "world-around-us"] }),
  d("proteger", "to protect", "protect|protected", {
    topics: ["world-around-us"],
    present: { yo: "protejo" },
    subjunctive: six("proteja, protejas, proteja, protejamos, protejáis, protejan"),
  }),
  d("coger", "to catch, to take (transport)", "catch|caught", {
    topics: ["home-and-abroad"],
    present: { yo: "cojo" },
    subjunctive: six("coja, cojas, coja, cojamos, cojáis, cojan"),
  }),
  d("romper", "to break", "break|broke|broken", {
    participle: "roto",
    topics: ["social-fitness-health", "past-future-tenses"],
  }),
  d("leer", "to read", "read|read|read", {
    topics: ["social-fitness-health", "education-and-employment"],
    tags: ["spelling-y"],
    preterite: six("leí, leíste, leyó, leímos, leísteis, leyeron"),
    participle: "leído",
    gerund: "leyendo",
  }),
  d("perder", "to lose, to miss (a train)", "miss|missed", { stem: "e-ie", topics: ["home-and-abroad", "social-fitness-health"] }),
  d("volver", "to return, to go back", "return|returned", {
    stem: "o-ue",
    participle: "vuelto",
    topics: ["home-and-abroad", "past-future-tenses"],
  }),
  d("resolver", "to solve, to resolve", "solve|solved", {
    stem: "o-ue",
    participle: "resuelto",
    topics: ["world-around-us", "education-and-employment"],
  }),
  d("soler", "to usually (do)", "usually do|usually did|usually done", {
    stem: "o-ue",
    topics: ["personal-life-relationships", "past-future-tenses"],
  }),
  d("conocer", "to know (people / places), to meet", "know|met|known", {
    topics: ["personal-life-relationships", "subjunctive-grade9"],
    tags: ["zco"],
    present: { yo: "conozco" },
    subjunctive: six("conozca, conozcas, conozca, conozcamos, conozcáis, conozcan"),
  }),
  d("parecer", "to seem", "seem|seemed", {
    topics: ["personal-life-relationships"],
    tags: ["zco"],
    present: { yo: "parezco" },
    subjunctive: six("parezca, parezcas, parezca, parezcamos, parezcáis, parezcan"),
  }),
  d("ofrecer", "to offer", "offer|offered", {
    topics: ["education-and-employment", "world-around-us"],
    tags: ["zco"],
    present: { yo: "ofrezco" },
    subjunctive: six("ofrezca, ofrezcas, ofrezca, ofrezcamos, ofrezcáis, ofrezcan"),
  }),
  d("ver", "to see, to watch", "watch|watched", {
    topics: ["social-fitness-health", "past-future-tenses"],
    tags: ["irregular"],
    present: six("veo, ves, ve, vemos, veis, ven"),
    preterite: six("vi, viste, vio, vimos, visteis, vieron"),
    imperfect: six("veía, veías, veía, veíamos, veíais, veían"),
    subjunctive: six("vea, veas, vea, veamos, veáis, vean"),
    participle: "visto",
  }),
  d("hacer", "to do, to make", "do|did|done", {
    topics: ["education-and-employment", "social-fitness-health", "past-future-tenses"],
    tags: ["irregular", "yo-go"],
    present: { yo: "hago" },
    preterite: six("hice, hiciste, hizo, hicimos, hicisteis, hicieron"),
    subjunctive: six("haga, hagas, haga, hagamos, hagáis, hagan"),
    futureStem: "har",
    participle: "hecho",
  }),
  d("tener", "to have", "have|had|had", {
    stem: "e-ie",
    topics: ["personal-life-relationships", "education-and-employment", "past-future-tenses", "subjunctive-grade9"],
    tags: ["irregular", "yo-go"],
    present: { yo: "tengo" },
    preterite: six("tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron"),
    subjunctive: six("tenga, tengas, tenga, tengamos, tengáis, tengan"),
    futureStem: "tendr",
  }),
  d("poner", "to put", "put|put|put", {
    topics: ["past-future-tenses", "subjunctive-grade9"],
    tags: ["irregular", "yo-go"],
    present: { yo: "pongo" },
    preterite: six("puse, pusiste, puso, pusimos, pusisteis, pusieron"),
    subjunctive: six("ponga, pongas, ponga, pongamos, pongáis, pongan"),
    futureStem: "pondr",
    participle: "puesto",
  }),
  d("querer", "to want, to love", "want|wanted", {
    stem: "e-ie",
    topics: ["education-and-employment", "subjunctive-grade9", "past-future-tenses"],
    tags: ["irregular"],
    preterite: six("quise, quisiste, quiso, quisimos, quisisteis, quisieron"),
    futureStem: "querr",
  }),
  d("poder", "to be able to, can", "can|could|been able to", {
    stem: "o-ue",
    future: "be able to",
    topics: ["past-future-tenses", "subjunctive-grade9"],
    tags: ["irregular"],
    preterite: six("pude, pudiste, pudo, pudimos, pudisteis, pudieron"),
    futureStem: "podr",
    gerund: "pudiendo",
  }),
  d("saber", "to know (a fact / how to)", "know|found out|known", {
    topics: ["subjunctive-grade9", "past-future-tenses", "education-and-employment"],
    tags: ["irregular", "dishes"],
    present: { yo: "sé" },
    preterite: six("supe, supiste, supo, supimos, supisteis, supieron"),
    subjunctive: six("sepa, sepas, sepa, sepamos, sepáis, sepan"),
    futureStem: "sabr",
  }),
  d("traer", "to bring", "bring|brought", {
    topics: ["social-fitness-health", "past-future-tenses"],
    tags: ["irregular", "yo-go"],
    present: { yo: "traigo" },
    preterite: six("traje, trajiste, trajo, trajimos, trajisteis, trajeron"),
    subjunctive: six("traiga, traigas, traiga, traigamos, traigáis, traigan"),
    participle: "traído",
    gerund: "trayendo",
  }),
  d("ser", "to be (identity, traits, origin)", "be|was|been", {
    topics: ["personal-life-relationships", "subjunctive-grade9", "past-future-tenses"],
    tags: ["irregular", "dishes"],
    present: six("soy, eres, es, somos, sois, son"),
    preterite: six("fui, fuiste, fue, fuimos, fuisteis, fueron"),
    imperfect: six("era, eras, era, éramos, erais, eran"),
    subjunctive: six("sea, seas, sea, seamos, seáis, sean"),
  }),

  // ----- Regular, Stem-Changing & Irregular -IR -----
  d("vivir", "to live", "live|lived", { topics: ["home-and-abroad", "personal-life-relationships"] }),
  d("compartir", "to share", "share|shared", { topics: ["world-around-us", "personal-life-relationships"] }),
  d("recibir", "to receive", "receive|received", { topics: ["education-and-employment"] }),
  d("subir", "to go up, to upload", "upload|uploaded", { topics: ["world-around-us", "home-and-abroad"] }),
  d("discutir", "to argue, to discuss", "discuss|discussed", { topics: ["personal-life-relationships"] }),
  d("escribir", "to write", "write|wrote|written", {
    participle: "escrito",
    topics: ["education-and-employment", "past-future-tenses"],
  }),
  d("abrir", "to open", "open|opened", {
    participle: "abierto",
    topics: ["home-and-abroad", "past-future-tenses"],
  }),
  d("descubrir", "to discover", "discover|discovered", {
    participle: "descubierto",
    topics: ["home-and-abroad", "past-future-tenses"],
  }),
  d("salir", "to go out, to leave", "go out|went out|gone out", {
    topics: ["social-fitness-health", "past-future-tenses", "subjunctive-grade9"],
    tags: ["yo-go"],
    present: { yo: "salgo" },
    subjunctive: six("salga, salgas, salga, salgamos, salgáis, salgan"),
    futureStem: "saldr",
  }),
  d("ir", "to go", "go|went|gone", {
    topics: ["home-and-abroad", "past-future-tenses", "subjunctive-grade9"],
    tags: ["irregular", "dishes"],
    present: six("voy, vas, va, vamos, vais, van"),
    preterite: six("fui, fuiste, fue, fuimos, fuisteis, fueron"),
    imperfect: six("iba, ibas, iba, íbamos, ibais, iban"),
    subjunctive: six("vaya, vayas, vaya, vayamos, vayáis, vayan"),
    gerund: "yendo",
  }),
  d("venir", "to come", "come|came|come", {
    stem: "e-ie",
    topics: ["home-and-abroad", "past-future-tenses", "subjunctive-grade9"],
    tags: ["irregular", "yo-go"],
    present: { yo: "vengo" },
    preterite: six("vine, viniste, vino, vinimos, vinisteis, vinieron"),
    subjunctive: six("venga, vengas, venga, vengamos, vengáis, vengan"),
    futureStem: "vendr",
    gerund: "viniendo",
  }),
  d("decir", "to say, to tell", "say|said|said", {
    stem: "e-i",
    topics: ["personal-life-relationships", "past-future-tenses", "subjunctive-grade9"],
    tags: ["irregular", "yo-go"],
    present: { yo: "digo" },
    preterite: six("dije, dijiste, dijo, dijimos, dijisteis, dijeron"),
    subjunctive: six("diga, digas, diga, digamos, digáis, digan"),
    futureStem: "dir",
    participle: "dicho",
    gerund: "diciendo",
  }),
  d("oír", "to hear", "hear|heard", {
    topics: ["social-fitness-health", "past-future-tenses"],
    tags: ["irregular", "yo-go", "spelling-y"],
    present: six("oigo, oyes, oye, oímos, oís, oyen"),
    preterite: six("oí, oíste, oyó, oímos, oísteis, oyeron"),
    subjunctive: six("oiga, oigas, oiga, oigamos, oigáis, oigan"),
    participle: "oído",
    gerund: "oyendo",
  }),
  d("conducir", "to drive", "drive|drove|driven", {
    topics: ["home-and-abroad", "past-future-tenses"],
    tags: ["irregular", "zco"],
    present: { yo: "conduzco" },
    preterite: six("conduje, condujiste, condujo, condujimos, condujisteis, condujeron"),
    subjunctive: six("conduzca, conduzcas, conduzca, conduzcamos, conduzcáis, conduzcan"),
  }),
  d("producir", "to produce", "produce|produced", {
    topics: ["world-around-us"],
    tags: ["irregular", "zco"],
    present: { yo: "produzco" },
    preterite: six("produje, produjiste, produjo, produjimos, produjisteis, produjeron"),
    subjunctive: six("produzca, produzcas, produzca, produzcamos, produzcáis, produzcan"),
  }),
  d("construir", "to build", "build|built", {
    topics: ["world-around-us", "home-and-abroad"],
    tags: ["spelling-y"],
    present: six("construyo, construyes, construye, construimos, construís, construyen"),
    preterite: six("construí, construiste, construyó, construimos, construisteis, construyeron"),
    subjunctive: six("construya, construyas, construya, construyamos, construyáis, construyan"),
    gerund: "construyendo",
  }),
  d("destruir", "to destroy", "destroy|destroyed", {
    topics: ["world-around-us"],
    tags: ["spelling-y"],
    present: six("destruyo, destruyes, destruye, destruimos, destruís, destruyen"),
    preterite: six("destruí, destruiste, destruyó, destruimos, destruisteis, destruyeron"),
    subjunctive: six("destruya, destruyas, destruya, destruyamos, destruyáis, destruyan"),
    gerund: "destruyendo",
  }),
  d("dormir", "to sleep", "sleep|slept", { stem: "o-ue", gerund: "durmiendo", topics: ["social-fitness-health", "past-future-tenses"] }),
  d("morir", "to die", "die|died", { stem: "o-ue", participle: "muerto", gerund: "muriendo", topics: ["world-around-us", "past-future-tenses"] }),
  d("preferir", "to prefer", "prefer|preferred", { stem: "e-ie", gerund: "prefiriendo", topics: ["social-fitness-health", "education-and-employment", "subjunctive-grade9"] }),
  d("pedir", "to ask for, to order", "order|ordered", { stem: "e-i", gerund: "pidiendo", topics: ["social-fitness-health", "subjunctive-grade9", "past-future-tenses"] }),
  d("repetir", "to repeat", "repeat|repeated", { stem: "e-i", gerund: "repitiendo", topics: ["education-and-employment"] }),
  d("elegir", "to choose", "choose|chose|chosen", {
    stem: "e-i",
    present: { yo: "elijo" },
    subjunctive: six("elija, elijas, elija, elijamos, elijáis, elijan"),
    gerund: "eligiendo",
    topics: ["education-and-employment"],
  }),
  d("seguir", "to follow, to continue", "continue|continued", {
    stem: "e-i",
    tags: ["spelling-gu"],
    present: { yo: "sigo" },
    subjunctive: six("siga, sigas, siga, sigamos, sigáis, sigan"),
    gerund: "siguiendo",
    topics: ["education-and-employment", "home-and-abroad"],
  }),
  d("conseguir", "to achieve, to get", "achieve|achieved", {
    stem: "e-i",
    tags: ["spelling-gu"],
    present: { yo: "consigo" },
    subjunctive: six("consiga, consigas, consiga, consigamos, consigáis, consigan"),
    gerund: "consiguiendo",
    topics: ["education-and-employment", "personal-life-relationships"],
  }),

  // ----- Irregular -AR (estar, dar) -----
  d("estar", "to be (location, state, feelings)", "be|was|been", {
    topics: ["home-and-abroad", "social-fitness-health", "subjunctive-grade9"],
    tags: ["irregular", "dishes"],
    present: six("estoy, estás, está, estamos, estáis, están"),
    preterite: six("estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron"),
    subjunctive: six("esté, estés, esté, estemos, estéis, estén"),
  }),
  d("dar", "to give", "give|gave|given", {
    topics: ["personal-life-relationships", "world-around-us", "subjunctive-grade9"],
    tags: ["irregular", "dishes"],
    present: six("doy, das, da, damos, dais, dan"),
    preterite: six("di, diste, dio, dimos, disteis, dieron"),
    subjunctive: six("dé, des, dé, demos, deis, den"),
  }),
];

const BY_INF = new Map<string, VerbDef>();
for (const def of DEFS) {
  if (BY_INF.has(def.info.inf)) throw new Error(`Duplicate verb: ${def.info.inf}`);
  BY_INF.set(def.info.inf, def);
}

export const VERBS: readonly VerbInfo[] = DEFS.map((def) => def.info);

export function verbInfo(inf: string): VerbInfo | undefined {
  return BY_INF.get(inf.trim().toLowerCase())?.info;
}

export function verbsWithTag(tag: string): VerbInfo[] {
  return VERBS.filter((v) => v.tags.includes(tag));
}

function getDef(inf: string): VerbDef {
  const def = BY_INF.get(inf.trim().toLowerCase());
  if (!def) throw new Error(`Unknown verb: "${inf}"`);
  return def;
}

// ---------------------------------------------------------------------------
// Conjugation Engine
// ---------------------------------------------------------------------------

const IDX: Record<Person, number> = { yo: 0, tú: 1, él: 2, nosotros: 3, vosotros: 4, ellos: 5 };

const ENDINGS = {
  present: {
    ar: ["o", "as", "a", "amos", "áis", "an"],
    er: ["o", "es", "e", "emos", "éis", "en"],
    ir: ["o", "es", "e", "imos", "ís", "en"],
  },
  preterite: {
    ar: ["é", "aste", "ó", "amos", "asteis", "aron"],
    er: ["í", "iste", "ió", "imos", "isteis", "ieron"],
    ir: ["í", "iste", "ió", "imos", "isteis", "ieron"],
  },
  imperfect: {
    ar: ["aba", "abas", "aba", "ábamos", "abais", "aban"],
    er: ["ía", "ías", "ía", "íamos", "íais", "ían"],
    ir: ["ía", "ías", "ía", "íamos", "íais", "ían"],
  },
  future: ["é", "ás", "á", "emos", "éis", "án"],
  conditional: ["ía", "ías", "ía", "íamos", "íais", "ían"],
  subjunctive: {
    ar: ["e", "es", "e", "emos", "éis", "en"],
    er: ["a", "as", "a", "amos", "áis", "an"],
    ir: ["a", "as", "a", "amos", "áis", "an"],
  },
} as const;

const REFLEXIVE_PRONOUN: Record<Person, string> = {
  yo: "me",
  tú: "te",
  él: "se",
  nosotros: "nos",
  vosotros: "os",
  ellos: "se",
};

const IR_PRESENT = six("voy, vas, va, vamos, vais, van");
const HABER_PRESENT = six("he, has, ha, hemos, habéis, han");

function replaceLast(stem: string, from: string, to: string): string {
  const i = stem.lastIndexOf(from);
  if (i < 0) return stem;
  return stem.slice(0, i) + to + stem.slice(i + from.length);
}

const BOOT: Record<StemChange, [string, string]> = {
  "e-ie": ["e", "ie"],
  "o-ue": ["o", "ue"],
  "u-ue": ["u", "ue"],
  "e-i": ["e", "i"],
};

function applyCarGarZar(stem: string): string {
  if (stem.endsWith("c")) return stem.slice(0, -1) + "qu";
  if (stem.endsWith("g")) return stem.slice(0, -1) + "gu";
  if (stem.endsWith("z")) return stem.slice(0, -1) + "c";
  return stem;
}

/** Past participle (e.g. "hablado", "comido", "hecho", "visto", "leído"). */
export function participle(inf: string): string {
  const def = getDef(inf);
  if (def.participle) return def.participle;
  const { group, stem } = splitInf(def.info.inf);
  return stem + (group === "ar" ? "ado" : "ido");
}

/** Gerund / present participle (e.g. "hablando", "comiendo", "pidiendo", "leyendo"). */
export function gerund(inf: string): string {
  const def = getDef(inf);
  if (def.gerund) return def.gerund;
  const { group, stem } = splitInf(def.info.inf);
  return stem + (group === "ar" ? "ando" : "iendo");
}

function simpleForm(
  def: VerbDef,
  tense: "present" | "preterite" | "imperfect" | "future" | "conditional" | "subjunctive",
  person: Person
): string {
  const idx = IDX[person];
  const { base, group, stem: rawStem } = splitInf(def.info.inf);
  const boot = person !== "nosotros" && person !== "vosotros";

  if (tense === "future") {
    const fStem = def.futureStem ?? (base.endsWith("ír") ? base.slice(0, -2) + "ir" : base);
    return fStem + ENDINGS.future[idx];
  }
  if (tense === "conditional") {
    const fStem = def.futureStem ?? (base.endsWith("ír") ? base.slice(0, -2) + "ir" : base);
    return fStem + ENDINGS.conditional[idx];
  }
  if (tense === "imperfect") {
    const ov = def.imperfect[person];
    if (ov) return ov;
    return rawStem + ENDINGS.imperfect[group][idx];
  }
  if (tense === "present") {
    const ov = def.present[person];
    if (ov) return ov;
    const stem = def.stemChange && boot ? replaceLast(rawStem, ...BOOT[def.stemChange]) : rawStem;
    return stem + ENDINGS.present[group][idx];
  }
  if (tense === "preterite") {
    const ov = def.preterite[person];
    if (ov) return ov;
    let stem = rawStem;
    if (def.stemChange && group === "ir" && (person === "él" || person === "ellos")) {
      stem = def.stemChange === "o-ue" ? replaceLast(stem, "o", "u") : replaceLast(stem, "e", "i");
    }
    if (group === "ar" && person === "yo") {
      stem = applyCarGarZar(stem);
    }
    return stem + ENDINGS.preterite[group][idx];
  }

  // Present subjunctive
  const ov = def.subjunctive[person];
  if (ov) return ov;
  let stem = rawStem;
  if (def.stemChange) {
    if (boot) {
      stem = replaceLast(stem, ...BOOT[def.stemChange]);
    } else if (group === "ir") {
      // -ir stem-changers shift e→i / o→u in nosotros & vosotros of the present subjunctive!
      stem = def.stemChange === "o-ue" ? replaceLast(stem, "o", "u") : replaceLast(stem, "e", "i");
    }
  }
  if (group === "ar") {
    stem = applyCarGarZar(stem);
  }
  return stem + ENDINGS.subjunctive[group][idx];
}

/**
 * Canonical conjugated form.
 * - Simple tenses & perfect place reflexive pronouns before the finite verb ("me levanto", "me he levantado").
 * - Near future attaches reflexive pronouns to the infinitive ("voy a levantarme").
 */
export function conjugate(inf: string, tense: Tense, person: Person): string {
  const def = getDef(inf);
  const pron = REFLEXIVE_PRONOUN[person];
  if (tense === "near-future") {
    const base = splitInf(def.info.inf).base;
    const infinitive = def.info.reflexive ? base + pron : base;
    return `${IR_PRESENT[person]} a ${infinitive}`;
  }
  if (tense === "perfect") {
    const core = `${HABER_PRESENT[person]} ${participle(inf)}`;
    return def.info.reflexive ? `${pron} ${core}` : core;
  }
  const word = simpleForm(def, tense, person);
  return def.info.reflexive ? `${pron} ${word}` : word;
}

/**
 * Every acceptable typed answer, canonical first:
 * - Alternative pronoun placement for reflexive near-future ("me voy a levantar")
 * - Optional subject pronouns ("yo hablo", "ella habló", "usted hable", "ustedes hablarán")
 */
export function acceptedForms(inf: string, tense: Tense, person: Person): string[] {
  const def = getDef(inf);
  const forms = [conjugate(inf, tense, person)];
  if (tense === "near-future" && def.info.reflexive) {
    forms.push(`${REFLEXIVE_PRONOUN[person]} ${IR_PRESENT[person]} a ${splitInf(def.info.inf).base}`);
  }
  const out = [...forms];
  for (const subject of SUBJECT_PRONOUNS[person]) {
    for (const f of forms) out.push(`${subject} ${f}`);
  }
  return [...new Set(out)];
}

export function conjugationTable(inf: string, tense: Tense): Record<Person, string> {
  getDef(inf);
  const out = {} as Record<Person, string>;
  for (const p of PERSONS) out[p] = conjugate(inf, tense, p);
  return out;
}

export function presentTable(inf: string): Record<Person, string> {
  return conjugationTable(inf, "present");
}

export function preteriteTable(inf: string): Record<Person, string> {
  return conjugationTable(inf, "preterite");
}

export function imperfectTable(inf: string): Record<Person, string> {
  return conjugationTable(inf, "imperfect");
}

export function nearFutureTable(inf: string): Record<Person, string> {
  return conjugationTable(inf, "near-future");
}

export function futureTable(inf: string): Record<Person, string> {
  return conjugationTable(inf, "future");
}

export function conditionalTable(inf: string): Record<Person, string> {
  return conjugationTable(inf, "conditional");
}

export function perfectTable(inf: string): Record<Person, string> {
  return conjugationTable(inf, "perfect");
}

export function subjunctiveTable(inf: string): Record<Person, string> {
  return conjugationTable(inf, "subjunctive");
}

// ---------------------------------------------------------------------------
// English Glosses
// ---------------------------------------------------------------------------

const EN_SUBJECT: Record<Person, string> = {
  yo: "I",
  tú: "you",
  él: "he/she",
  nosotros: "we",
  vosotros: "you all",
  ellos: "they",
};
const EN_POSS: Record<Person, string> = {
  yo: "my",
  tú: "your",
  él: "his/her",
  nosotros: "our",
  vosotros: "your",
  ellos: "their",
};
const EN_BE_PRESENT: Record<Person, string> = {
  yo: "am",
  tú: "are",
  él: "is",
  nosotros: "are",
  vosotros: "are",
  ellos: "are",
};
const EN_BE_PAST: Record<Person, string> = {
  yo: "was",
  tú: "were",
  él: "was",
  nosotros: "were",
  vosotros: "were",
  ellos: "were",
};
const EN_HAVE_PRESENT: Record<Person, string> = {
  yo: "have",
  tú: "have",
  él: "has",
  nosotros: "have",
  vosotros: "have",
  ellos: "have",
};

/** Natural English gloss for a conjugated verb form. */
export function englishGloss(inf: string, tense: Tense, person: Person): string {
  const { eng } = getDef(inf);
  const subject = EN_SUBJECT[person];
  const isBe = eng.base === "be" || eng.base.startsWith("be ");
  const rest = isBe ? eng.base.slice(2) : "";
  let verb: string;
  switch (tense) {
    case "near-future":
      verb = `${EN_BE_PRESENT[person]} going to ${eng.future}`;
      break;
    case "future":
      verb = `will ${eng.future}`;
      break;
    case "conditional":
      verb = `would ${eng.future}`;
      break;
    case "imperfect":
      verb = isBe ? `${EN_BE_PAST[person]}${rest}` : `used to ${eng.future}`;
      break;
    case "perfect":
      verb = `${EN_HAVE_PRESENT[person]} ${eng.participle}`;
      break;
    case "subjunctive":
      verb = `${eng.base} (subjunctive)`;
      break;
    case "present":
      verb = isBe ? EN_BE_PRESENT[person] + rest : person === "él" ? eng.s3 : eng.base;
      break;
    case "preterite":
      verb = isBe ? EN_BE_PAST[person] + rest : eng.past;
      break;
  }
  return `${subject} ${verb.replace(/\{poss\}/g, EN_POSS[person])}`;
}
