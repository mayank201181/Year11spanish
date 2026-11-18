import type { Drill } from "./types.ts";
import { acceptedForms, conjugate, PERSON_LABEL, type Person } from "../spanish/verbs.ts";

interface NounItem {
  bare: string;
  en: string;
  art: "el" | "la" | "los" | "las";
  trueGender: "m" | "f";
  plural: boolean;
  adjM: string;
  adjF: string;
  adjEn: string;
  why: string;
}

const CLIMATE_NOUNS: readonly NounItem[] = [
  { bare: "problema", en: "problem", art: "el", trueGender: "m", plural: false, adjM: "serio", adjF: "seria", adjEn: "serious", why: "*problema* is a Greek-origin *-ma* masculine noun" },
  { bare: "clima", en: "climate", art: "el", trueGender: "m", plural: false, adjM: "extremo", adjF: "extrema", adjEn: "extreme", why: "*clima* is a Greek-origin *-ma* masculine noun" },
  { bare: "planeta", en: "planet", art: "el", trueGender: "m", plural: false, adjM: "entero", adjF: "entera", adjEn: "entire", why: "*planeta* is masculine despite ending in *-a*" },
  { bare: "sistema", en: "system", art: "el", trueGender: "m", plural: false, adjM: "ecológico", adjF: "ecológica", adjEn: "ecological", why: "*sistema* is a Greek-origin *-ma* masculine noun" },
  { bare: "ecosistema", en: "ecosystem", art: "el", trueGender: "m", plural: false, adjM: "marino", adjF: "marina", adjEn: "marine", why: "*ecosistema* is a Greek-origin *-ma* masculine noun" },
  { bare: "agua", en: "water", art: "el", trueGender: "f", plural: false, adjM: "limpio", adjF: "limpia", adjEn: "clean", why: "*agua* is feminine (so *limpia*), taking *el* only right before stressed *a-*" },
  { bare: "agua", en: "water", art: "el", trueGender: "f", plural: false, adjM: "contaminado", adjF: "contaminada", adjEn: "polluted", why: "*agua* is feminine (so *contaminada*), taking *el* only right before stressed *a-*" },
  { bare: "agua", en: "water", art: "el", trueGender: "f", plural: false, adjM: "frío", adjF: "fría", adjEn: "cold", why: "*agua* is feminine (so *fría*), taking *el* only right before stressed *a-*" },
  { bare: "hambre", en: "famine / hunger", art: "el", trueGender: "f", plural: false, adjM: "extremo", adjF: "extrema", adjEn: "extreme", why: "*hambre* is feminine (so *extrema*), taking *el* only right before stressed *ha-*" },
  { bare: "sequía", en: "drought", art: "la", trueGender: "f", plural: false, adjM: "prolongado", adjF: "prolongada", adjEn: "prolonged", why: "*la sequía* is a regular feminine noun" },
  { bare: "contaminación", en: "pollution", art: "la", trueGender: "f", plural: false, adjM: "urbano", adjF: "urbana", adjEn: "urban", why: "nouns ending in *-ción* are feminine (*la contaminación*)" },
  { bare: "deforestación", en: "deforestation", art: "la", trueGender: "f", plural: false, adjM: "masivo", adjF: "masiva", adjEn: "massive", why: "nouns ending in *-ción* are feminine (*la deforestación*)" },
  { bare: "capa de ozono", en: "ozone layer", art: "la", trueGender: "f", plural: false, adjM: "dañado", adjF: "dañada", adjEn: "damaged", why: "*la capa* is feminine singular" },
  { bare: "huella de carbono", en: "carbon footprint", art: "la", trueGender: "f", plural: false, adjM: "alto", adjF: "alta", adjEn: "high", why: "*la huella* is feminine singular" },
  { bare: "cambio climático", en: "climate change", art: "el", trueGender: "m", plural: false, adjM: "rápido", adjF: "rápida", adjEn: "rapid", why: "*el cambio* is masculine singular" },
  { bare: "calentamiento global", en: "global warming", art: "el", trueGender: "m", plural: false, adjM: "peligroso", adjF: "peligrosa", adjEn: "dangerous", why: "nouns ending in *-miento* are masculine" },
  { bare: "efecto invernadero", en: "greenhouse effect", art: "el", trueGender: "m", plural: false, adjM: "intenso", adjF: "intensa", adjEn: "intense", why: "*el efecto* is masculine singular" },
  { bare: "vertedero", en: "landfill site", art: "el", trueGender: "m", plural: false, adjM: "lleno", adjF: "llena", adjEn: "full", why: "*el vertedero* is masculine singular" },
  { bare: "basura", en: "rubbish", art: "la", trueGender: "f", plural: false, adjM: "acumulado", adjF: "acumulada", adjEn: "accumulated", why: "*la basura* is feminine singular" },
  { bare: "energía eólica", en: "wind energy", art: "la", trueGender: "f", plural: false, adjM: "limpio", adjF: "limpia", adjEn: "clean", why: "*la energía* is feminine singular" },
  { bare: "incendio forestal", en: "forest fire", art: "el", trueGender: "m", plural: false, adjM: "destructivo", adjF: "destructiva", adjEn: "destructive", why: "*el incendio* is masculine singular" },
  { bare: "selva tropical", en: "tropical rainforest", art: "la", trueGender: "f", plural: false, adjM: "protegido", adjF: "protegida", adjEn: "protected", why: "*la selva* is feminine singular" },
  { bare: "aire", en: "air", art: "el", trueGender: "m", plural: false, adjM: "puro", adjF: "pura", adjEn: "pure", why: "*el aire* is masculine singular" },
  { bare: "humo", en: "smoke", art: "el", trueGender: "m", plural: false, adjM: "tóxico", adjF: "tóxica", adjEn: "toxic", why: "*el humo* is masculine singular" },
];

interface EcoAction {
  inf: string;
  obj: string;
  en: string;
}

const ECO_ACTIONS: readonly EcoAction[] = [
  { inf: "reciclar", obj: "el vidrio y el cartón", en: "recycle glass and cardboard" },
  { inf: "ahorrar", obj: "agua en casa", en: "save water at home" },
  { inf: "apagar", obj: "las luces al salir", en: "switch off the lights when leaving" },
  { inf: "reutilizar", obj: "las bolsas de tela", en: "reuse cloth bags" },
  { inf: "proteger", obj: "el medio ambiente", en: "protect the environment" },
  { inf: "producir", obj: "menos basura", en: "produce less rubbish" },
  { inf: "evitar", obj: "los plásticos de un solo uso", en: "avoid single-use plastics" },
  { inf: "organizar", obj: "campañas ecológicas", en: "organise green campaigns" },
  { inf: "limpiar", obj: "las playas locales", en: "clean local beaches" },
  { inf: "construir", obj: "más carriles bici", en: "build more cycle lanes" },
];

const ECO_PERSONS: readonly Person[] = ["yo", "tú", "él", "nosotros", "ellos"];

interface SocialConcern {
  nounEs: string;
  nounEn: string;
  plural: boolean;
  bareForHaya: string;
}

const SOCIAL_CONCERNS: readonly SocialConcern[] = [
  { nounEs: "la pobreza infantil", nounEn: "child poverty", plural: false, bareForHaya: "tanta pobreza infantil" },
  { nounEs: "el paro juvenil", nounEn: "youth unemployment", plural: false, bareForHaya: "tanto paro juvenil" },
  { nounEs: "la desigualdad social", nounEn: "social inequality", plural: false, bareForHaya: "tanta desigualdad social" },
  { nounEs: "el hambre en el mundo", nounEn: "world hunger", plural: false, bareForHaya: "tanta hambre en el mundo" },
  { nounEs: "la delincuencia callejera", nounEn: "street crime", plural: false, bareForHaya: "tanta delincuencia callejera" },
  { nounEs: "el racismo", nounEn: "racism", plural: false, bareForHaya: "tanto racismo" },
  { nounEs: "la falta de vivienda", nounEn: "homelessness", plural: false, bareForHaya: "tanta falta de vivienda" },
  { nounEs: "el analfabetismo", nounEn: "illiteracy", plural: false, bareForHaya: "tanto analfabetismo" },
  { nounEs: "la brecha digital", nounEn: "the digital divide", plural: false, bareForHaya: "tanta brecha digital" },
  { nounEs: "el ciberacoso", nounEn: "cyberbullying", plural: false, bareForHaya: "tanto ciberacoso" },
  { nounEs: "el coste de la vida", nounEn: "the cost of living", plural: false, bareForHaya: "tanta inflación" },
  { nounEs: "los sin techo", nounEn: "homeless people", plural: true, bareForHaya: "tantos sin techo" },
  { nounEs: "los derechos humanos", nounEn: "human rights", plural: true, bareForHaya: "tantos abusos contra los derechos humanos" },
  { nounEs: "las guerras actuales", nounEn: "current wars", plural: true, bareForHaya: "tantas guerras" },
  { nounEs: "las noticias falsas", nounEn: "fake news", plural: true, bareForHaya: "tantas noticias falsas" },
  { nounEs: "los incendios forestales", nounEn: "forest fires", plural: true, bareForHaya: "tantos incendios forestales" },
  { nounEs: "las inundaciones graves", nounEn: "severe floods", plural: true, bareForHaya: "tantas inundaciones graves" },
  { nounEs: "los refugiados", nounEn: "refugees", plural: true, bareForHaya: "tantos refugiados sin hogar" },
  { nounEs: "los problemas ambientales", nounEn: "environmental problems", plural: true, bareForHaya: "tantos problemas ambientales" },
  { nounEs: "las desigualdades económicas", nounEn: "economic inequalities", plural: true, bareForHaya: "tantas desigualdades económicas" },
];

interface CharityTechTask {
  inf: string;
  tail: string;
  en: string;
}

const CHARITY_TECH_TASKS: readonly CharityTechTask[] = [
  { inf: "recaudar", tail: "fondos para una ONG", en: "raise funds for an NGO" },
  { inf: "donar", tail: "ropa a una tienda solidaria", en: "donate clothes to a charity shop" },
  { inf: "organizar", tail: "una carrera benéfica", en: "organise a charity run" },
  { inf: "ayudar", tail: "a los necesitados en un comedor social", en: "help those in need in a soup kitchen" },
  { inf: "apoyar", tail: "a los sin techo del barrio", en: "support homeless people in the neighbourhood" },
  { inf: "compartir", tail: "información sobre campañas solidarias", en: "share information about solidarity campaigns" },
  { inf: "descargar", tail: "una aplicación educativa", en: "download an educational app" },
  { inf: "subir", tail: "un vídeo sobre el comercio justo", en: "upload a video about fair trade" },
];

export const drills: Drill[] = [
  {
    id: "world-around-us.gender-and-climate",
    topicId: "world-around-us",
    title: "Climate Lexicon & Deceptive Noun Genders (-ma & el agua)",
    level: 1,
    guideRef: "climate-and-pollution",
    generate(rng, tier) {
      const item = rng.pick(CLIMATE_NOUNS);
      const rightAdj = item.trueGender === "m" ? item.adjM : item.adjF;
      const wrongAdj = item.trueGender === "m" ? item.adjF : item.adjM;
      const wrongArt = item.art === "el" ? "la" : "el";

      if (tier === 1) {
        return {
          prompt: `Write the correct singular definite article (**el** or **la**) directly before **${item.bare}** (*${item.en}*): **_______ ${item.bare}**. (Write ONLY **el** or **la**.)`,
          answer: { type: "text", accept: [item.art] },
          solution: [
            `Reason: ${item.why}.`,
            `Correct singular article: **${item.art}** (*${item.art} ${item.bare}*).`,
          ],
          hint: "Watch out for Greek *-ma* masculine nouns (*el problema, el clima*) and feminine stressed *a-/ha-* nouns (*el agua, el hambre*)!",
          traps: [
            {
              spec: { type: "text", accept: [wrongArt] },
              feedback: `Careful — ${item.why}, so use **${item.art} ${item.bare}**!`,
            },
          ],
        };
      }

      if (tier === 2) {
        return {
          prompt: `Complete the phrase for *'the ${item.adjEn} ${item.en}'* with the accurate gender of **${item.adjM}/${item.adjF}**: **${item.art} ${item.bare} _______**. (Write ONLY the missing adjective.)`,
          answer: { type: "text", accept: [rightAdj] },
          solution: [
            `True gender check: ${item.why}.`,
            `Matching singular adjective: **${rightAdj}** (*${item.art} ${item.bare} ${rightAdj}*).`,
          ],
          hint: "Match the adjective to the noun's TRUE grammatical gender (not necessarily *el* if the noun is *agua* or *hambre*!).",
          traps:
            wrongAdj !== rightAdj
              ? [
                  {
                    spec: { type: "text", accept: [wrongAdj] },
                    feedback: `Check gender agreement: ${item.why} → **${item.art} ${item.bare} ${rightAdj}**!`,
                  },
                ]
              : undefined,
        };
      }

      const full = `${item.art} ${item.bare} ${rightAdj}`;
      const trap1 = `${wrongArt} ${item.bare} ${rightAdj}`;
      const trap2 = `${item.art} ${item.bare} ${wrongAdj}`;
      const trapAccept = [...new Set([trap1, trap2])].filter((t) => t !== full);
      return {
        prompt: `Write the complete Spanish noun phrase (definite article **el/la** + **${item.bare}** + **${item.adjM}/${item.adjF}**) for **'the ${item.adjEn} ${item.en}'**:`,
        answer: { type: "text", accept: [full] },
        solution: [
          `Article before *${item.bare}*: **${item.art}** (${item.why}).`,
          `Adjective agreement (${item.trueGender === "m" ? "masculine" : "feminine"}): **${rightAdj}**.`,
          `Full phrase: **${full}**.`,
        ],
        hint: `Combine the right article (*el/la*) + *${item.bare}* + matching adjective (*${item.adjM}/${item.adjF}*).`,
        traps: trapAccept.length
          ? [
              {
                spec: { type: "text", accept: trapAccept },
                feedback: `Mind both article and adjective: ${item.why} → **${full}**!`,
              },
            ]
          : undefined,
      };
    },
  },

  {
    id: "world-around-us.eco-switchboard",
    topicId: "world-around-us",
    title: "Eco-Action Switchboard: Infinitive vs Present Subjunctive",
    level: 2,
    guideRef: "sustainability-and-action",
    generate(rng, tier) {
      const act = rng.pick(ECO_ACTIONS);
      const person = rng.pick(ECO_PERSONS);

      if (tier === 1) {
        const frame = rng.pick([
          { es: "Se debería", en: "People should" },
          { es: "Hay que", en: "It is necessary to" },
          { es: "Se debe", en: "One must" },
          { es: "Para el planeta, vale la pena", en: "For the planet, it is worth" },
        ]);
        const wrongConj = conjugate(act.inf, "present", "nosotros");
        return {
          prompt: `Complete the impersonal eco-advice (*${frame.en} ${act.en}*) using **${act.inf}**: **${frame.es} _______ ${act.obj}.** (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [act.inf] },
          solution: [
            `*${frame.es}* has NO *que*, so it must be followed directly by an **infinitive**.`,
            `Keep **${act.inf}** unchanged: *${frame.es} ${act.inf} ${act.obj}.*`,
          ],
          hint: "No *que* after an impersonal modal expression = use the unchanged infinitive!",
          traps: [
            {
              spec: { type: "text", accept: [wrongConj] },
              feedback: `Never conjugate a second verb after *${frame.es}* — keep the infinitive **${act.inf}**!`,
            },
          ],
        };
      }

      if (tier === 2) {
        const trigger = rng.pick([
          "Es urgente que",
          "Es imprescindible que",
          "Es esencial que",
        ]);
        const subj = conjugate(act.inf, "subjunctive", person);
        const accept = acceptedForms(act.inf, "subjunctive", person);
        const indTrap = conjugate(act.inf, "present", person);
        return {
          prompt: `Complete the WEIRDO trigger with the **present subjunctive** of **${act.inf}** (*${PERSON_LABEL[person]}*): **${trigger} _______ ${act.obj}.** (Write ONLY the missing verb.)`,
          answer: { type: "text", accept },
          solution: [
            `*${trigger}* triggers the **present subjunctive**.`,
            `Start from present *yo* (*${conjugate(act.inf, "present", "yo")}*), flip to opposite subjunctive vowel (keeping any consonant spelling shift): **${subj}**.`,
          ],
          hint: "Take present *yo*, drop *-o*, and add opposite endings (*-ar → -e*, *-er/-ir → -a*); watch *-gar/-zar/-ger/-ucir* shifts!",
          traps:
            indTrap !== subj
              ? [
                  {
                    spec: { type: "text", accept: [indTrap] },
                    feedback: `*${indTrap}* is present indicative! After *${trigger}*, flip to present subjunctive **${subj}**.`,
                  },
                ]
              : undefined,
        };
      }

      // Tier 3: Mixed Switchboard — learner must read whether the prompt has "que" + subject OR no "que"!
      const useSubj = rng.bool(0.65);
      if (!useSubj) {
        const modal = rng.pick(["Deberíamos", "Podríamos", "Habría que", "Antes de salir, hay que"]);
        const wrongSubj = conjugate(act.inf, "subjunctive", "nosotros");
        return {
          prompt: `Switchboard Check (Infinitive vs Subjunctive) — Complete accurately with the right form of **${act.inf}**: **${modal} _______ ${act.obj}.** (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [act.inf] },
          solution: [
            `*${modal}* has NO *que* + new subject, so it takes the **infinitive** directly.`,
            `Answer: **${act.inf}**.`,
          ],
          hint: "Does the frame end in *que* + a subject, or is it a modal/preposition phrase taking an infinitive?",
          traps: [
            {
              spec: { type: "text", accept: [wrongSubj] },
              feedback: `There is no *que* here! After *${modal}*, use the infinitive **${act.inf}**.`,
            },
          ],
        };
      }
      const trigger = rng.pick(["Es urgente que", "Es imprescindible que", "El alcalde pide que"]);
      const p3 = rng.pick(["tú", "nosotros", "ellos"] as const);
      const subj = conjugate(act.inf, "subjunctive", p3);
      const accept = acceptedForms(act.inf, "subjunctive", p3);
      const indTrap = conjugate(act.inf, "present", p3);
      return {
        prompt: `Switchboard Check (Infinitive vs Subjunctive) — Complete accurately with **${act.inf}** for *${PERSON_LABEL[p3]}*: **${trigger} _______ ${act.obj}.** (Write ONLY the missing verb.)`,
        answer: { type: "text", accept },
        solution: [
          `*${trigger}* ends in **que** after a WEIRDO urgency/request trigger → **present subjunctive**!`,
          `Conjugate *${act.inf}* for *${p3}* in the present subjunctive: **${subj}**.`,
        ],
        hint: "Spot *que* after an urgency/request trigger → flip to the present subjunctive!",
        traps: [
          {
            spec: { type: "text", accept: [indTrap, act.inf] },
            feedback: `After *${trigger}* + subject, conjugate in the present subjunctive: **${subj}**!`,
          },
        ],
      };
    },
  },

  {
    id: "world-around-us.social-concern-agreement",
    topicId: "world-around-us",
    title: "Global Issues: Me preocupa(n) & Existential 'Haya'",
    level: 2,
    guideRef: "global-and-social-issues",
    generate(rng, tier) {
      const issue = rng.pick(SOCIAL_CONCERNS);

      if (tier === 1) {
        const verbPairs = rng.pick([
          { sing: "preocupa", plur: "preocupan", inf: "preocupar" },
          { sing: "molesta", plur: "molestan", inf: "molestar" },
        ]);
        const ans = issue.plural ? verbPairs.plur : verbPairs.sing;
        const wrong = issue.plural ? verbPairs.sing : verbPairs.plur;
        return {
          prompt: `Choose the accurate singular or plural form of **${verbPairs.inf}** (**${verbPairs.sing}** or **${verbPairs.plur}**): **Me _______ mucho ${issue.nounEs}.** (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [ans] },
          solution: [
            `Subject causing the feeling: *${issue.nounEs}* (${issue.plural ? "plural" : "singular"}).`,
            `Like *gustar*, *${verbPairs.inf}* agrees with that subject → **${ans}**.`,
          ],
          hint: `Check whether *${issue.nounEs}* is singular or plural!`,
          traps: [
            {
              spec: { type: "text", accept: [wrong] },
              feedback: `*${issue.nounEs}* is ${issue.plural ? "plural" : "singular"}, so use **${ans}**!`,
            },
          ],
        };
      }

      if (tier === 2) {
        const pron = rng.pick([
          { a: "A mí me", io: "me" },
          { a: "A los jóvenes nos", io: "nos" },
          { a: "A mi profesora le", io: "le" },
        ]);
        const ans = `${pron.io} ${issue.plural ? "preocupan" : "preocupa"}`;
        const bareAns = issue.plural ? "preocupan" : "preocupa";
        const wrong = issue.plural ? "preocupa" : "preocupan";
        return {
          prompt: `Complete with the present tense of **preocupar** (agreeing with *${issue.nounEn}*): **${pron.a.split(" ").slice(0, -1).join(" ")} ${pron.io} _______ muchísimo ${issue.nounEs}.** (Write ONLY **preocupa** or **preocupan**.)`,
          answer: { type: "text", accept: [bareAns, ans] },
          solution: [
            `Indirect object *${pron.io}* tells WHO worries, while the verb agrees with *${issue.nounEs}* (${issue.plural ? "plural" : "singular"}).`,
            `Result: **${bareAns}**.`,
          ],
          hint: "Ignore the person at the start — match *-a* vs *-an* strictly to the social issue at the end!",
          traps: [
            {
              spec: { type: "text", accept: [wrong] },
              feedback: `Match the verb to *${issue.nounEs}* (${issue.plural ? "plural → preocupan" : "singular → preocupa"})!`,
            },
          ],
        };
      }

      const judge = rng.pick([
        "Es injusto que",
        "Es una vergüenza que",
        "Me indigna que",
        "Es inaceptable que",
      ]);
      return {
        prompt: `Grade-9 Existential Subjunctive — Complete with the present subjunctive of impersonal **haber** ('there is / there are'): **${judge} todavía _______ ${issue.bareForHaya}.** (Write ONLY the 4-letter verb.)`,
        answer: { type: "text", accept: ["haya"] },
        solution: [
          `*${judge}* triggers the present subjunctive.`,
          `Impersonal existential *hay* becomes **haya** (invariable singular even before plural *${issue.bareForHaya}*!).`,
        ],
        hint: "What is the H in DISHES? Remember existential *haber* never adds *-n*!",
        traps: [
          {
            spec: { type: "text", accept: ["hay", "hayan"] },
            feedback: `After *${judge}*, *hay* flips to invariable singular subjunctive **haya** (never indicative *hay* and never plural *hayan*)!`,
          },
        ],
      };
    },
  },

  {
    id: "world-around-us.volunteering-three-timeframes",
    topicId: "world-around-us",
    title: "Volunteering & Digital Action Across 3 Time Frames",
    level: 3,
    guideRef: "charity-and-volunteering",
    generate(rng, tier) {
      const task = rng.pick(CHARITY_TECH_TASKS);
      const person = rng.pick(["yo", "tú", "él", "nosotros", "ellos"] as const);

      if (tier === 1) {
        const form = conjugate(task.inf, "present", person);
        const accept = acceptedForms(task.inf, "present", person);
        const pretTrap = conjugate(task.inf, "preterite", person);
        return {
          prompt: `Present Habitual — Complete with the **present** tense of **${task.inf}** (*${PERSON_LABEL[person]}*): **Todos los meses _______ ${task.tail}.** (Write ONLY the missing verb.)`,
          answer: { type: "text", accept },
          solution: [
            `*Todos los meses* indicates a habitual present action.`,
            `*${task.inf}* in present (*${person}*): **${form}**.`,
          ],
          hint: "Conjugate in the present indicative to match the given person.",
          traps:
            pretTrap !== form
              ? [
                  {
                    spec: { type: "text", accept: [pretTrap] },
                    feedback: `*Todos los meses* is habitual present (**${form}**), not preterite!`,
                  },
                ]
              : undefined,
        };
      }

      if (tier === 2) {
        const timeMarker = rng.pick(["El sábado pasado", "Ayer", "La semana pasada"]);
        const form = conjugate(task.inf, "preterite", person);
        const accept = acceptedForms(task.inf, "preterite", person);
        const presTrap = conjugate(task.inf, "present", person);
        return {
          prompt: `Completed Past Campaign — Complete with the **preterite** tense of **${task.inf}** (*${PERSON_LABEL[person]}*): **${timeMarker} _______ ${task.tail}.** (Write ONLY the missing verb, with any required accent.)`,
          answer: { type: "text", accept },
          solution: [
            `*${timeMarker}* triggers the **preterite** tense.`,
            `*${task.inf}* in preterite (*${person}*): **${form}** (mind *-zar → -cé* and *-gar → -gué* in *yo*!).`,
          ],
          hint: "Check preterite accents (*-é, -ó, -í, -ió*) and *yo* shifts (*organicé, descargué*).",
          traps:
            presTrap !== form
              ? [
                  {
                    spec: { type: "text", accept: [presTrap] },
                    feedback: `*${timeMarker}* requires the preterite (**${form}**), not the present!`,
                  },
                ]
              : undefined,
        };
      }

      const useFuture = rng.bool(0.5);
      if (useFuture) {
        const marker = rng.pick(["El próximo trimestre", "El año que viene"]);
        const form = conjugate(task.inf, "future", person);
        const accept = acceptedForms(task.inf, "future", person);
        const condTrap = conjugate(task.inf, "conditional", person);
        return {
          prompt: `Future Volunteering Plan — Complete with the **simple future** of **${task.inf}** (*${PERSON_LABEL[person]}*): **${marker} _______ ${task.tail}.** (Write ONLY the missing verb, with any required accent.)`,
          answer: { type: "text", accept },
          solution: [
            `*${marker}* requires the **simple future** (*infinitive + -é, -ás, -á, -emos, -éis, -án*).`,
            `Result: **${form}**.`,
          ],
          hint: "Keep the full infinitive and add the future ending (every person except *nosotros* carries an accent!).",
          traps: [
            {
              spec: { type: "text", accept: [condTrap] },
              feedback: `*${condTrap}* is conditional ('would…'); *${marker}* takes the simple future **${form}**!`,
            },
          ],
        };
      }

      const form = conjugate(task.inf, "conditional", person);
      const accept = acceptedForms(task.inf, "conditional", person);
      const futTrap = conjugate(task.inf, "future", person);
      return {
        prompt: `Grade-9 Hypothetical 'Si' Clause — Complete the main clause with the **conditional** of **${task.inf}** (*${PERSON_LABEL[person]}*): **Si tuviera más tiempo libre, _______ ${task.tail}.** (Write ONLY the missing verb, with its accent.)`,
        answer: { type: "text", accept },
        solution: [
          `*Si tuviera más tiempo libre* (*si + imperfect subjunctive*) requires the **conditional** (*-ía, -ías, -ía, -íamos, -íais, -ían*) in the main clause.`,
          `Result: **${form}**.`,
        ],
        hint: "Add *-ía, -ías, -ía, -íamos, -íais, -ían* (with an accent on **í**) to the infinitive!",
        traps: [
          {
            spec: { type: "text", accept: [futTrap] },
            feedback: `After *Si tuviera…*, use the conditional (**${form}**), not the simple future (*${futTrap}*)!`,
          },
        ],
      };
    },
  },
];
