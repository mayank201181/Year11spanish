import type { Drill, Rng } from "./types.ts";
import {
  acceptedForms,
  conjugate,
  gerund,
  participle,
  PERSONS,
  SUBJECT_PRONOUNS,
  verbInfo,
  type Person,
} from "../spanish/verbs.ts";

const PERSON_CUE: Record<Person, string> = {
  yo: "yo",
  tú: "tú",
  él: "él / ella",
  nosotros: "nosotros",
  vosotros: "vosotros",
  ellos: "ellos / ellas",
};

const SUBJECT_DISPLAY: Record<Person, string> = {
  yo: "yo",
  tú: "tú",
  él: "mi hermano",
  nosotros: "nosotros",
  vosotros: "vosotros",
  ellos: "mis amigos",
};

const HABER_IMPERFECT: Record<Person, string> = {
  yo: "había",
  tú: "habías",
  él: "había",
  nosotros: "habíamos",
  vosotros: "habíais",
  ellos: "habían",
};

const LLEVAR_PRESENT: Record<Person, string> = {
  yo: "llevo",
  tú: "llevas",
  él: "lleva",
  nosotros: "llevamos",
  vosotros: "lleváis",
  ellos: "llevan",
};

const LLEVAR_IMPERFECT: Record<Person, string> = {
  yo: "llevaba",
  tú: "llevabas",
  él: "llevaba",
  nosotros: "llevábamos",
  vosotros: "llevabais",
  ellos: "llevaban",
};

const ACABAR_PRESENT: Record<Person, string> = {
  yo: "acabo",
  tú: "acabas",
  él: "acaba",
  nosotros: "acabamos",
  vosotros: "acabáis",
  ellos: "acaban",
};

const ACABAR_IMPERFECT: Record<Person, string> = {
  yo: "acababa",
  tú: "acababas",
  él: "acababa",
  nosotros: "acabábamos",
  vosotros: "acababais",
  ellos: "acababan",
};

function withSubj(person: Person, phrases: string[]): string[] {
  const out = [...phrases];
  for (const s of SUBJECT_PRONOUNS[person]) {
    for (const p of phrases) out.push(`${s} ${p}`);
  }
  return [...new Set(out)];
}

const PRET_TIER1_VERBS = [
  "hablar",
  "comprar",
  "visitar",
  "comer",
  "beber",
  "vivir",
  "escribir",
  "buscar",
  "llegar",
  "pagar",
  "jugar",
  "empezar",
  "organizar",
] as const;

const PRET_TIER2_VERBS = [
  "tener",
  "estar",
  "poder",
  "poner",
  "saber",
  "hacer",
  "querer",
  "venir",
  "ir",
  "ser",
  "dar",
  "ver",
] as const;

const PRET_TIER3_VERBS = [
  "decir",
  "traer",
  "conducir",
  "producir",
  "leer",
  "oír",
  "construir",
  "destruir",
  "pedir",
  "preferir",
  "dormir",
  "seguir",
] as const;

const PRET_MARKERS = [
  "Ayer",
  "Anoche",
  "El sábado pasado",
  "Hace dos semanas",
  "El mes pasado",
] as const;

interface AspectContext {
  frame: string;
  inf: string;
  target: "preterite" | "imperfect";
  reason: string;
}

const ASPECT_TIER1: readonly AspectContext[] = [
  { frame: "Ayer {S} _______ en la biblioteca durante dos horas.", inf: "estudiar", target: "preterite", reason: "*Ayer* marks a bounded, completed past action → Preterite." },
  { frame: "En la infancia, {S} _______ en el parque cada verano.", inf: "jugar", target: "imperfect", reason: "*En la infancia … cada verano* marks a repeated childhood habit → Imperfect." },
  { frame: "Anoche {S} _______ una película de ciencia ficción.", inf: "ver", target: "preterite", reason: "*Anoche* marks a single completed event → Preterite." },
  { frame: "Antes {S} _______ cerca del centro comercial.", inf: "vivir", target: "imperfect", reason: "*Antes* describes an ongoing past state → Imperfect." },
  { frame: "El martes pasado {S} _______ al museo de ciencias.", inf: "ir", target: "preterite", reason: "*El martes pasado* is a single completed visit → Preterite." },
  { frame: "Todos los domingos {S} _______ paella en casa de los abuelos.", inf: "comer", target: "imperfect", reason: "*Todos los domingos* signals a habitual past routine → Imperfect." },
  { frame: "Hace tres días {S} _______ un regalo para mamá.", inf: "comprar", target: "preterite", reason: "*Hace tres días* ('three days ago') pinpoints a completed purchase → Preterite." },
  { frame: "En aquella época {S} _______ mucho tiempo libre.", inf: "tener", target: "imperfect", reason: "*En aquella época* sets an unbounded background state → Imperfect." },
];

const ASPECT_TIER2: readonly AspectContext[] = [
  { frame: "Mientras {S} _______ por el parque, empezó a llover.", inf: "correr", target: "imperfect", reason: "After *mientras*, the action in progress ('was running') uses the Imperfect." },
  { frame: "Hacía mucho sol cuando {S} _______ del hotel.", inf: "salir", target: "preterite", reason: "Against the sunny backdrop, leaving the hotel is the single completed event → Preterite." },
  { frame: "Cuando era joven, {S} _______ al instituto en autobús.", inf: "ir", target: "imperfect", reason: "Habitual routine during youth (*cuando era joven*) → Imperfect of *ir* (*iba…*)." },
  { frame: "Estábamos cenando cuando de repente {S} _______ a la puerta.", inf: "llegar", target: "preterite", reason: "*De repente* introduces the single interrupting event → Preterite." },
  { frame: "Mientras el profesor hablaba, {S} _______ apuntes en el cuaderno.", inf: "tomar", target: "imperfect", reason: "Two simultaneous ongoing past actions with *mientras* both take the Imperfect." },
  { frame: "Llovía mucho, así que {S} _______ esperar dentro de la cafetería.", inf: "preferir", target: "preterite", reason: "*Así que* introduces the completed decision that resulted → Preterite." },
  { frame: "En primaria {S} _______ parte del coro del colegio.", inf: "ser", target: "imperfect", reason: "Background membership/state in childhood → Imperfect of *ser* (*era / éramos / eran*)." },
  { frame: "El año pasado {S} _______ un proyecto ecológico excelente.", inf: "hacer", target: "preterite", reason: "*El año pasado* marks a completed past achievement → strong Preterite of *hacer*." },
];

const ASPECT_TIER3: readonly AspectContext[] = [
  { frame: "En cuanto sonó la alarma, {S} _______ las luces enseguida.", inf: "apagar", target: "preterite", reason: "*En cuanto … enseguida* marks an immediate completed action → Preterite (watch *-gar* in *yo*!)." },
  { frame: "Mientras {S} _______ una novela en el sofá, se fue la luz.", inf: "leer", target: "imperfect", reason: "Ongoing reading interrupted by *se fue la luz* → Imperfect (*leía…*)." },
  { frame: "Nadie sabía qué pasaba hasta que {S} _______ toda la verdad.", inf: "decir", target: "preterite", reason: "*Hasta que* introduces the single plot-turning revelation → strong Preterite of *decir*." },
  { frame: "De niños {S} _______ documentales sobre animales cada tarde.", inf: "ver", target: "imperfect", reason: "Habitual childhood viewing → irregular Imperfect of *ver* (*veía…*)." },
  { frame: "Ayer en el restaurante {S} _______ el menú del día.", inf: "pedir", target: "preterite", reason: "*Ayer* requires Preterite (watch *-ir* sandal *e → i* in 3rd person!)." },
  { frame: "Eran las once de la noche y {S} _______ muchísimo sueño.", inf: "tener", target: "imperfect", reason: "Ongoing physical/mental state accompanying past clock time → Imperfect (*tenía…*)." },
  { frame: "Cuando se rompió el autobús, {S} _______ hasta la estación.", inf: "andar", target: "preterite", reason: "Completed action resulting from the breakdown → strong Preterite of *andar* (*anduve…*)." },
  { frame: "Anoche los invitados {S_DROP} _______ postres caseros a la fiesta.", inf: "traer", target: "preterite", reason: "*Anoche* requires strong *j*-stem Preterite of *traer*." },
];

const PERF_REG_VERBS = [
  "hablar",
  "comprar",
  "visitar",
  "comer",
  "aprender",
  "vivir",
  "recibir",
  "leer",
  "oír",
  "traer",
] as const;

const PERF_IRREG_VERBS = [
  "hacer",
  "ver",
  "escribir",
  "poner",
  "decir",
  "romper",
  "volver",
  "abrir",
  "descubrir",
  "resolver",
] as const;

const FUT_REG_VERBS = [
  "hablar",
  "viajar",
  "estudiar",
  "trabajar",
  "comer",
  "aprender",
  "vivir",
  "escribir",
  "comprar",
  "ayudar",
] as const;

const FUT_IRREG_VERBS = [
  "tener",
  "poner",
  "salir",
  "venir",
  "poder",
  "saber",
  "querer",
  "hacer",
  "decir",
] as const;

const IDIOM_INFINITIVES = [
  { inf: "comer", tail: "una ensalada fresca" },
  { inf: "llegar", tail: "a la estación" },
  { inf: "terminar", tail: "los deberes" },
  { inf: "repasar", tail: "para el examen" },
  { inf: "hacer", tail: "natación" },
  { inf: "leer", tail: "el periódico" },
  { inf: "salir", tail: "con amigos" },
  { inf: "entrenar", tail: "en el polideportivo" },
] as const;

const GERUND_VERBS = [
  { inf: "estudiar", tail: "español" },
  { inf: "jugar", tail: "al tenis" },
  { inf: "vivir", tail: "en esta ciudad" },
  { inf: "tocar", tail: "la guitarra" },
  { inf: "leer", tail: "esa novela" },
  { inf: "pedir", tail: "ayuda" },
  { inf: "dormir", tail: "en el sofá" },
  { inf: "seguir", tail: "las instrucciones" },
  { inf: "preferir", tail: "comida casera" },
] as const;

const DURATIONS = [
  "dos horas",
  "tres meses",
  "cuatro años",
  "cinco años",
  "mucho tiempo",
] as const;

export const drills: Drill[] = [
  {
    id: "past-future-tenses.preterite-stems",
    topicId: "past-future-tenses",
    title: "Preterite Accents, Spelling Shifts & Strong Stems",
    level: 1,
    guideRef: "preterite-irregs-and-accents",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pool = tier === 1 ? PRET_TIER1_VERBS : tier === 2 ? PRET_TIER2_VERBS : PRET_TIER3_VERBS;
      const inf = rng.pick(pool);
      const person = rng.pick(PERSONS);
      const marker = rng.pick(PRET_MARKERS);
      const form = conjugate(inf, "preterite", person);
      const accept = acceptedForms(inf, "preterite", person);
      const info = verbInfo(inf)!;

      const traps = [];
      if (tier === 2 && ["tener", "estar", "poder", "poner", "saber", "hacer", "querer", "venir"].includes(inf)) {
        const regGuess = inf.slice(0, -2) + (inf.endsWith("ar") ? "é" : "í");
        if (person === "yo" && regGuess !== form) {
          traps.push({
            spec: { type: "text" as const, accept: [regGuess] },
            feedback: `*${inf}* uses an irregular strong preterite stem (**${form}**) with zero written accent!`,
          });
        }
      }
      if (inf === "hacer" && person === "él") {
        traps.push({
          spec: { type: "text" as const, accept: ["hico", "hizó"] },
          feedback: "*Hacer* changes *c → z* before *-o* with NO accent: **hizo**.",
        });
      }

      return {
        prompt: `${marker}, conjugate **${inf}** (*${info.en}*) in the **preterite** for **${PERSON_CUE[person]}**. *(Write ONLY the conjugated verb.)*`,
        answer: { type: "text", accept, display: form },
        traps,
        hint:
          tier === 1
            ? "Check regular preterite accents (*-é/-ó* or *-í/-ió*) and *-car/-gar/-zar* spelling shifts in *yo*."
            : tier === 2
              ? "Strong preterites (*tuv-, estuv-, pud-, pus-, sup-, hic-, quis-, vin-*) and *fui/fue/vi/dio* NEVER take written accents!"
              : "Watch 3rd-person *-ir* sandal shifts (*e→i, o→u*), *i→y* bridges (*leyó, construyeron*), and *j*-stems dropping *i* in *-eron* (*dijeron*).",
        solution: [
          `Identify the infinitive (**${inf}**) and target person (**${PERSON_CUE[person]}**) in the Preterite.`,
          `Correct Preterite form: **${form}**.`,
        ],
      };
    },
  },
  {
    id: "past-future-tenses.imperfect-contrast",
    topicId: "past-future-tenses",
    title: "Preterite vs Imperfect in Narrative Context",
    level: 2,
    guideRef: "imperfect-and-contrast",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const pool = tier === 1 ? ASPECT_TIER1 : tier === 2 ? ASPECT_TIER2 : ASPECT_TIER3;
      const ctx = rng.pick(pool);
      const fixedEllos = ctx.frame.includes("{S_DROP}");
      const person: Person = fixedEllos ? "ellos" : rng.pick(["yo", "tú", "él", "nosotros", "ellos"] as const);
      const subjText = fixedEllos ? "" : SUBJECT_DISPLAY[person];
      const rawSentence = ctx.frame.replace("{S}", subjText).replace("{S_DROP} ", "");
      const sentence = rawSentence.charAt(0).toUpperCase() + rawSentence.slice(1);

      const form = conjugate(ctx.inf, ctx.target, person);
      const accept = acceptedForms(ctx.inf, ctx.target, person);
      const otherTense = ctx.target === "preterite" ? "imperfect" : "preterite";
      const wrongForm = conjugate(ctx.inf, otherTense, person);

      const traps =
        wrongForm !== form
          ? [
              {
                spec: { type: "text" as const, accept: [wrongForm] },
                feedback: `*${wrongForm}* is the ${otherTense === "imperfect" ? "Imperfect" : "Preterite"}! ${ctx.reason}`,
              },
            ]
          : [];

      return {
        prompt: `Choose **preterite** or **imperfect** from the context and conjugate **${ctx.inf}** (${ fixedEllos ? "*ellos*" : `*${PERSON_CUE[person]}*` }):\n\n*${sentence}*\n\n*(Write ONLY the missing verb.)*`,
        answer: { type: "text", accept, display: form },
        traps,
        hint: "Use Imperfect for ongoing background ('was -ing') or repeated past habits ('used to'); use Preterite for bounded, completed events.",
        solution: [
          ctx.reason,
          `Conjugate **${ctx.inf}** in the **${ctx.target}** for *${PERSON_CUE[person]}* → **${form}**.`,
        ],
      };
    },
  },
  {
    id: "past-future-tenses.perfect-pluperfect",
    topicId: "past-future-tenses",
    title: "Perfect (he hecho) & Pluperfect (había hecho)",
    level: 2,
    guideRef: "perfect-and-pluperfect",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const person = rng.pick(PERSONS);
      if (tier === 1) {
        const inf = rng.pick(PERF_REG_VERBS);
        const form = conjugate(inf, "perfect", person);
        const accept = acceptedForms(inf, "perfect", person);
        return {
          prompt: `Form the **present perfect** ('have/has done') of **${inf}** for **${PERSON_CUE[person]}**: *Esta semana _______ (${inf}, ${PERSON_CUE[person]}).* *(Write BOTH words: auxiliary + past participle.)*`,
          answer: { type: "text", accept, display: form },
          hint: "Present of *haber* (*he, has, ha, hemos, habéis, han*) + invariable past participle (*-ado / -ido*, with *-ído* on *leído, oído, traído*).",
          solution: [
            `Auxiliary *haber* for *${PERSON_CUE[person]}* + past participle **${participle(inf)}** → **${form}**.`,
          ],
        };
      }
      if (tier === 2) {
        const inf = rng.pick(PERF_IRREG_VERBS);
        const form = conjugate(inf, "perfect", person);
        const accept = acceptedForms(inf, "perfect", person);
        const aux = form.split(" ")[0];
        const regTrap = `${aux} ${inf.slice(0, -2)}${inf.endsWith("ar") ? "ado" : "ido"}`;
        return {
          prompt: `Form the **present perfect** of **${inf}** for **${PERSON_CUE[person]}**: *Hoy ya _______ (${inf}, ${PERSON_CUE[person]}).* *(Write BOTH words: auxiliary + irregular past participle.)*`,
          answer: { type: "text", accept, display: form },
          traps: [
            {
              spec: { type: "text", accept: [regTrap] },
              feedback: `*${inf}* has an **irregular** past participle: **${participle(inf)}** (never *${regTrap.split(" ")[1]}*)!`,
            },
          ],
          hint: "Recall *REVV MAC PHDD*: *hecho, visto, escrito, puesto, dicho, roto, vuelto, abierto, descubierto, resuelto*.",
          solution: [
            `Present of *haber* (**${aux}**) + irregular invariable participle (**${participle(inf)}**) → **${form}**.`,
          ],
        };
      }
      const allPool = [...PERF_IRREG_VERBS, "leer", "oír"] as const;
      const inf = rng.pick(allPool);
      const part = participle(inf);
      const form = `${HABER_IMPERFECT[person]} ${part}`;
      const accept = withSubj(person, [form]);
      const perfForm = conjugate(inf, "perfect", person);
      return {
        prompt: `Form the **pluperfect** ('had already done') of **${inf}** for **${PERSON_CUE[person]}**: *Cuando sonó el timbre, ya _______ (${inf}, ${PERSON_CUE[person]}).* *(Write BOTH words: imperfect of haber + past participle.)*`,
        answer: { type: "text", accept, display: form },
        traps: [
          {
            spec: { type: "text", accept: [perfForm] },
            feedback: `*${perfForm}* is Present Perfect ('have done'); for 'had done' before a past event, use the **Pluperfect** (**${form}**)!`,
          },
        ],
        hint: "Pluperfect = Imperfect of *haber* (*había, habías, había, habíamos, habíais, habían*) + invariable past participle.",
        solution: [
          `Imperfect of *haber* for *${PERSON_CUE[person]}* (**${HABER_IMPERFECT[person]}**) + participle (**${part}**) → **${form}**.`,
        ],
      };
    },
  },
  {
    id: "past-future-tenses.future-conditional",
    topicId: "past-future-tenses",
    title: "Simple Future & Conditional Irregular Stems",
    level: 2,
    guideRef: "simple-future-and-conditional",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const person = rng.pick(PERSONS);
      if (tier === 1) {
        const inf = rng.pick(FUT_REG_VERBS);
        const tense = rng.bool(0.5) ? "future" : "conditional";
        const form = conjugate(inf, tense, person);
        const accept = acceptedForms(inf, tense, person);
        const label = tense === "future" ? "simple future ('will')" : "conditional ('would')";
        return {
          prompt: `Conjugate **${inf}** in the **${label}** for **${PERSON_CUE[person]}**. *(Write ONLY the conjugated verb.)*`,
          answer: { type: "text", accept, display: form },
          hint:
            tense === "future"
              ? "Attach *-é, -ás, -á, -emos, -éis, -án* onto the full infinitive (accent on every person EXCEPT *nosotros*!)."
              : "Attach *-ía, -ías, -ía, -íamos, -íais, -ían* onto the full infinitive (accent on *í* in all six persons!).",
          solution: [
            `Keep the full infinitive **${inf}** and add the *${PERSON_CUE[person]}* ${tense} ending → **${form}**.`,
          ],
        };
      }
      const inf = rng.pick(FUT_IRREG_VERBS);
      const tense = tier === 2 ? "future" : "conditional";
      const form = conjugate(inf, tense, person);
      const accept = acceptedForms(inf, tense, person);
      const regEndingsFut: Record<Person, string> = { yo: "é", tú: "ás", él: "á", nosotros: "emos", vosotros: "éis", ellos: "án" };
      const regEndingsCond: Record<Person, string> = { yo: "ía", tú: "ías", él: "ía", nosotros: "íamos", vosotros: "íais", ellos: "ían" };
      const regTrap = inf + (tense === "future" ? regEndingsFut[person] : regEndingsCond[person]);
      const cue =
        tense === "future"
          ? `El año que viene, _______ (**${inf}**, *${PERSON_CUE[person]}*, **simple future**).`
          : `En esa situación, _______ (**${inf}**, *${PERSON_CUE[person]}*, **conditional**).`;

      return {
        prompt: `Complete with the irregular-stem **${tense === "future" ? "simple future" : "conditional"}** form:\n\n*${cue}*\n\n*(Write ONLY the missing verb.)*`,
        answer: { type: "text", accept, display: form },
        traps: [
          {
            spec: { type: "text", accept: [regTrap] },
            feedback: `Never regularise *${inf}*! Use its shared irregular Future/Conditional stem (**${form}**).`,
          },
        ],
        hint: "Recall the shared irregular stems: *tendr-, pondr-, saldr-, vendr-, podr-, sabr-, querr-, har-, dir-*.",
        solution: [
          `*${inf}* uses an irregular stem shared by Simple Future and Conditional.`,
          `For *${PERSON_CUE[person]}* (${tense}): **${form}**.`,
        ],
      };
    },
  },
  {
    id: "past-future-tenses.verbal-idioms",
    topicId: "past-future-tenses",
    title: "Grade-9 Verbal Idioms (acabar de, soler, llevar + gerund)",
    level: 3,
    guideRef: "grade9-verbal-idioms",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const person = rng.pick(["yo", "tú", "él", "nosotros", "ellos"] as const);
      if (tier === 1) {
        const act = rng.pick(IDIOM_INFINITIVES);
        if (rng.bool(0.5)) {
          const phrase = `${ACABAR_PRESENT[person]} de ${act.inf}`;
          return {
            prompt: `Express **'have/has just done'** using **acabar de + infinitive** in the **present** for **${PERSON_CUE[person]}** with **${act.inf}**:\n\n*_______ ${act.tail}.*\n\n*(Write the 3-word verbal idiom, e.g. acabo de hablar.)*`,
            answer: { type: "text", accept: withSubj(person, [phrase]), display: phrase },
            traps: [
              {
                spec: { type: "text", accept: [`${ACABAR_PRESENT[person]} ${act.inf}`] },
                feedback: "Don't forget the mandatory preposition **de** in *acabar **de** + infinitive*!",
              },
            ],
            hint: "Conjugate *acabar* in the Present + **de** + infinitive.",
            solution: [
              `Present of *acabar* (*${PERSON_CUE[person]}*) = **${ACABAR_PRESENT[person]}** + **de** + **${act.inf}** → **${phrase}**.`,
            ],
          };
        }
        const solerPres = conjugate("soler", "present", person);
        const phrase = `${solerPres} ${act.inf}`;
        return {
          prompt: `Express **'usually'** using **soler + infinitive** in the **present** for **${PERSON_CUE[person]}** with **${act.inf}**:\n\n*Normalmente _______ ${act.tail}.*\n\n*(Write BOTH words: conjugated soler + infinitive.)*`,
          answer: { type: "text", accept: withSubj(person, [phrase]), display: phrase },
          hint: "*Soler* is an *o → ue* boot verb in the present (*suelo, sueles, suele, solemos, soléis, suelen*) + infinitive.",
          solution: [
            `Present of *soler* (*${PERSON_CUE[person]}*) = **${solerPres}** + infinitive **${act.inf}** → **${phrase}**.`,
          ],
        };
      }

      if (tier === 2) {
        const gItem = rng.pick(GERUND_VERBS);
        const dur = rng.pick(DURATIONS);
        const ger = gerund(gItem.inf);
        if (rng.bool(0.6)) {
          const phrase = `${LLEVAR_PRESENT[person]} ${dur} ${ger}`;
          return {
            prompt: `Express ongoing duration (**'have/has been doing for ${dur}'**) using **llevar (present) + ${dur} + gerund** of **${gItem.inf}** for **${PERSON_CUE[person]}**:\n\n*_______ ${gItem.tail}.*\n\n*(Write the full phrase starting with conjugated llevar.)*`,
            answer: { type: "text", accept: withSubj(person, [phrase]), display: phrase },
            hint: "Formula: **llevar (present) + duration + gerund** (watch *-ir* stem shifts *pidiendo, durmiendo, siguiendo* and *leyendo*!).",
            solution: [
              `Present of *llevar* (**${LLEVAR_PRESENT[person]}**) + **${dur}** + gerund of *${gItem.inf}* (**${ger}**) → **${phrase}**.`,
            ],
          };
        }
        const seguirPres = conjugate("seguir", "present", person);
        const phrase = `${seguirPres} ${ger}`;
        return {
          prompt: `Express **'keep(s) on doing'** using **seguir (present) + gerund** of **${gItem.inf}** for **${PERSON_CUE[person]}**:\n\n*Hoy en día _______ ${gItem.tail}.*\n\n*(Write BOTH words: conjugated seguir + gerund.)*`,
          answer: { type: "text", accept: withSubj(person, [phrase]), display: phrase },
          traps: [
            {
              spec: { type: "text", accept: [`${seguirPres} ${gItem.inf}`] },
              feedback: "*Seguir* ('to keep on doing') MUST be followed by the **gerund** (*-ando / -iendo*), never the infinitive!",
            },
          ],
          hint: "*Seguir* (*yo sigo, tú sigues, él sigue, nosotros seguimos, ellos siguen*) + gerund.",
          solution: [
            `Present of *seguir* (**${seguirPres}**) + gerund (**${ger}**) → **${phrase}**.`,
          ],
        };
      }

      // Tier 3: Past-shifted idioms (acababa de, solía, llevaba + gerund) & Future volver a + inf
      const mode = rng.int(1, 3);
      if (mode === 1) {
        const act = rng.pick(IDIOM_INFINITIVES);
        const phrase = `${ACABAR_IMPERFECT[person]} de ${act.inf}`;
        return {
          prompt: `Express **'had just done'** using **acabar (imperfect) + de + infinitive** for **${PERSON_CUE[person]}** with **${act.inf}**:\n\n*Cuando empezó a llover, _______ ${act.tail}.*\n\n*(Write the 3-word phrase.)*`,
          answer: { type: "text", accept: withSubj(person, [phrase]), display: phrase },
          hint: "Put *acabar* into the **Imperfect** (*acababa, acababas, acababa, acabábamos, acababan*) + **de** + infinitive.",
          solution: [
            `Imperfect of *acabar* (**${ACABAR_IMPERFECT[person]}**) + **de** + **${act.inf}** → **${phrase}**.`,
          ],
        };
      }
      if (mode === 2) {
        const gItem = rng.pick(GERUND_VERBS);
        const dur = rng.pick(DURATIONS);
        const ger = gerund(gItem.inf);
        const phrase = `${LLEVAR_IMPERFECT[person]} ${dur} ${ger}`;
        return {
          prompt: `Express past duration (**'had been doing for ${dur}'**) using **llevar (imperfect) + ${dur} + gerund** of **${gItem.inf}** for **${PERSON_CUE[person]}**:\n\n*Cuando llegó el tren, _______ ${gItem.tail}.*\n\n*(Write the full phrase starting with imperfect llevar.)*`,
          answer: { type: "text", accept: withSubj(person, [phrase]), display: phrase },
          hint: "Imperfect of *llevar* (*llevaba / llevábamos…*) + duration + gerund.",
          solution: [
            `Imperfect of *llevar* (**${LLEVAR_IMPERFECT[person]}**) + **${dur}** + **${ger}** → **${phrase}**.`,
          ],
        };
      }
      const act = rng.pick(IDIOM_INFINITIVES);
      const volverFut = conjugate("volver", "future", person);
      const phrase = `${volverFut} a ${act.inf}`;
      return {
        prompt: `Express **'will do again'** using **volver (simple future) + a + infinitive** for **${PERSON_CUE[person]}** with **${act.inf}**:\n\n*El próximo mes _______ ${act.tail}.*\n\n*(Write the 3-word phrase.)*`,
        answer: { type: "text", accept: withSubj(person, [phrase]), display: phrase },
        traps: [
          {
            spec: { type: "text", accept: [`${volverFut} ${act.inf}`] },
            feedback: "Remember the mandatory preposition **a** in *volver **a** + infinitive* ('to do again')!",
          },
        ],
        hint: "Simple Future of *volver* (*volveré, volverás, volverá, volveremos, volverán*) + **a** + infinitive.",
        solution: [
          `Simple Future of *volver* (**${volverFut}**) + **a** + **${act.inf}** → **${phrase}**.`,
        ],
      };
    },
  },
];
