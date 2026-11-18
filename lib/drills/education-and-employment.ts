import type { Drill } from "./types.ts";
import {
  acceptedForms,
  conjugate,
  PERSON_LABEL,
  type Person,
} from "../spanish/verbs.ts";

const SCHOOL_VERBS_T1: readonly {
  inf: string;
  context: string;
}[] = [
  { inf: "estudiar", context: "tres ciencias en el instituto" },
  { inf: "repasar", context: "en la biblioteca todas las tardes" },
  { inf: "aprender", context: "mucho vocabulario nuevo en español" },
  { inf: "comprender", context: "las explicaciones del profesor" },
  { inf: "escribir", context: "un ensayo en el aula de informática" },
  { inf: "leer", context: "una novela histórica para la clase" },
  { inf: "trabajar", context: "en equipo en el laboratorio" },
  { inf: "suspender", context: "ningún examen este trimestre" },
];

const SCHOOL_VERBS_T2: readonly {
  inf: string;
  context: string;
}[] = [
  { inf: "aprobar", context: "todos los exámenes finales" },
  { inf: "empezar", context: "las clases a las ocho y media" },
  { inf: "pensar", context: "elegir biología y química" },
  { inf: "almorzar", context: "con los amigos en el comedor" },
  { inf: "preferir", context: "las ciencias a las letras" },
  { inf: "repetir", context: "las frases difíciles en voz alta" },
  { inf: "elegir", context: "dos asignaturas optativas" },
  { inf: "seguir", context: "el horario del trimestre" },
];

const SCHOOL_NOUN_DRILLS: readonly {
  en: string;
  accept: string[];
  display: string;
  trap?: string;
  trapMsg?: string;
  note: string;
}[] = [
  {
    en: "library (at school)",
    accept: ["la biblioteca"],
    display: "la biblioteca",
    trap: "la librería",
    trapMsg: "*La librería* is a false friend meaning 'bookshop' — library is **la biblioteca**!",
    note: "False friend alert: *la biblioteca* = library; *la librería* = bookshop.",
  },
  {
    en: "secondary school / high school",
    accept: ["el instituto", "el colegio"],
    display: "el instituto",
    note: "*El instituto* (or *el colegio*) means secondary school — never university!",
  },
  {
    en: "timetable / schedule",
    accept: ["el horario"],
    display: "el horario",
    trap: "la hora",
    trapMsg: "*La hora* means 'the hour/time'; timetable is **el horario**.",
    note: "Masculine noun: **el horario**.",
  },
  {
    en: "school subject",
    accept: ["la asignatura", "la materia"],
    display: "la asignatura",
    note: "Feminine noun: **la asignatura** (or **la materia**).",
  },
  {
    en: "language (e.g. Spanish or English)",
    accept: ["el idioma", "la lengua"],
    display: "el idioma",
    trap: "la idioma",
    trapMsg: "Greek-origin *-ma* nouns are masculine: **el idioma**!",
    note: "Masculine *-ma* noun: **el idioma**.",
  },
  {
    en: "scholarship / grant",
    accept: ["la beca"],
    display: "la beca",
    note: "Feminine noun: **la beca**.",
  },
  {
    en: "unemployment",
    accept: ["el paro", "el desempleo"],
    display: "el paro",
    note: "Masculine noun: **el paro** or **el desempleo**.",
  },
  {
    en: "salary / wage",
    accept: ["el sueldo", "el salario"],
    display: "el sueldo",
    note: "Masculine noun: **el sueldo** or **el salario**.",
  },
];

const RULE_ACTIONS: readonly {
  inf: string;
  rest: string;
  gerundTrap: string;
}[] = [
  { inf: "apagar", rest: "el móvil antes de entrar en el aula", gerundTrap: "apagando" },
  { inf: "traer", rest: "el uniforme deportivo los martes", gerundTrap: "trayendo" },
  { inf: "comer", rest: "chicle durante las clases", gerundTrap: "comiendo" },
  { inf: "correr", rest: "por los pasillos del instituto", gerundTrap: "corriendo" },
  { inf: "respetar", rest: "a todos los compañeros", gerundTrap: "respetando" },
  { inf: "llegar", rest: "puntual por la mañana", gerundTrap: "llegando" },
  { inf: "escuchar", rest: "las instrucciones en el laboratorio", gerundTrap: "escuchando" },
  { inf: "salir", rest: "del colegio a la hora de comer", gerundTrap: "saliendo" },
  { inf: "organizar", rest: "bien el tiempo de repaso", gerundTrap: "organizando" },
  { inf: "hablar", rest: "en voz baja en la biblioteca", gerundTrap: "hablando" },
];

const IMPERSONAL_MODALS: readonly string[] = [
  "Está prohibido",
  "No se permite",
  "Hay que",
  "Se debe",
  "Es obligatorio",
];

const SUBJUNCTIVE_TRIGGERS: readonly string[] = [
  "Es obligatorio que",
  "Es importante que",
  "Es imprescindible que",
  "Es justo que",
  "Es necesario que",
  "El director exige que",
];

const POST16_CLAUSES: readonly {
  inf: string;
  clause: string;
  enHint: string;
}[] = [
  { inf: "estudiar", clause: "ciencias en el bachillerato", enHint: "study" },
  { inf: "solicitar", clause: "una plaza en la universidad", enHint: "apply for" },
  { inf: "licenciarse", clause: "en medicina o derecho", enHint: "graduate" },
  { inf: "trabajar", clause: "en el extranjero un año", enHint: "work" },
  { inf: "ahorrar", clause: "dinero para la residencia", enHint: "save" },
  { inf: "hacer", clause: "formación profesional", enHint: "do" },
  { inf: "tener", clause: "más independencia personal", enHint: "have" },
  { inf: "poder", clause: "conseguir una buena beca", enHint: "be able to" },
  { inf: "saber", clause: "mis notas finales de agosto", enHint: "find out / know" },
  { inf: "ir", clause: "a una facultad prestigiosa", enHint: "go" },
  { inf: "salir", clause: "del instituto con buenos recuerdos", enHint: "leave" },
  { inf: "elegir", clause: "una carrera universitaria útil", enHint: "choose" },
];

const WORK_IMPERFECT_ITEMS: readonly {
  inf: string;
  person: Person;
  sentence: string;
}[] = [
  { inf: "ser", person: "él", sentence: "Durante mis prácticas, mi jefe _______ muy paciente y amable." },
  { inf: "ser", person: "ellos", sentence: "En aquella oficina, todos los compañeros _______ muy acogedores." },
  { inf: "estar", person: "él", sentence: "La tienda donde hice prácticas _______ en pleno centro." },
  { inf: "trabajar", person: "yo", sentence: "Todos los días de la semana _______ desde las nueve hasta las cuatro." },
  { inf: "trabajar", person: "nosotros", sentence: "Mi compañera y yo _______ juntos en la recepción del hotel." },
  { inf: "tener", person: "yo", sentence: "Al principio _______ un poco de miedo de contestar al teléfono." },
  { inf: "ir", person: "yo", sentence: "Cada mañana _______ a la empresa en autobús a las ocho." },
  { inf: "aprender", person: "yo", sentence: "Mientras _______ cómo usar la caja, mi supervisora me ayudaba." },
  { inf: "escribir", person: "yo", sentence: "Cada tarde _______ correos electrónicos sencillos para los clientes." },
  { inf: "almorzar", person: "nosotros", sentence: "A la una siempre _______ en el comedor del personal." },
];

const WORK_PRETERITE_ITEMS: readonly {
  inf: string;
  person: Person;
  sentence: string;
}[] = [
  { inf: "hacer", person: "yo", sentence: "El trimestre pasado _______ mis prácticas laborales en una farmacia." },
  { inf: "hacer", person: "nosotros", sentence: "El mes pasado mi amigo y yo _______ prácticas en un museo." },
  { inf: "aprender", person: "yo", sentence: "En solo cinco días _______ muchísimo sobre el mundo laboral." },
  { inf: "escribir", person: "yo", sentence: "El viernes por la tarde _______ un informe final para mi tutor." },
  { inf: "llegar", person: "yo", sentence: "El primer día me levanté temprano y _______ quince minutos antes." },
  { inf: "empezar", person: "yo", sentence: "El lunes a las nueve _______ mi turno en el supermercado." },
  { inf: "organizar", person: "yo", sentence: "El miércoles _______ todos los archivos del departamento." },
  { inf: "recibir", person: "yo", sentence: "Al final de la semana _______ una carta de recomendación excelente." },
  { inf: "conseguir", person: "él", sentence: "Gracias a sus prácticas, mi hermano _______ un empleo de verano." },
  { inf: "tener", person: "yo", sentence: "Ayer _______ una entrevista de trabajo con la directora." },
  { inf: "estar", person: "yo", sentence: "La semana pasada _______ cinco días ayudando en una escuela primaria." },
  { inf: "ir", person: "yo", sentence: "El verano pasado _______ a Madrid para trabajar de canguro." },
];

const PROFESSIONS_DRILL: readonly {
  subject: string;
  roleEs: string;
  roleEn: string;
  modifiedAdj?: { adjEs: string; adjEn: string; art: "un" | "una" };
}[] = [
  { subject: "Mi hermana quiere ser", roleEs: "médica", roleEn: "a (female) doctor" },
  { subject: "En el futuro quiero ser", roleEs: "ingeniero", roleEn: "an (male) engineer" },
  { subject: "Mi prima quiere ser", roleEs: "abogada", roleEn: "a (female) lawyer" },
  { subject: "Mi hermano mayor es", roleEs: "periodista", roleEn: "a (male) journalist" },
  { subject: "Mi tía trabaja de", roleEs: "enfermera", roleEn: "a (female) nurse" },
  { subject: "Mi padre es", roleEs: "contable", roleEn: "an accountant" },
  {
    subject: "Mi madre es",
    roleEs: "una médica excelente",
    roleEn: "an excellent (female) doctor",
    modifiedAdj: { adjEs: "excelente", adjEn: "excellent", art: "una" },
  },
  {
    subject: "Mi tío es",
    roleEs: "un abogado famoso",
    roleEn: "a famous (male) lawyer",
    modifiedAdj: { adjEs: "famoso", adjEn: "famous", art: "un" },
  },
  {
    subject: "Elena quiere ser",
    roleEs: "una periodista bilingüe",
    roleEn: "a bilingual (female) journalist",
    modifiedAdj: { adjEs: "bilingüe", adjEn: "bilingual", art: "una" },
  },
];

export const drills: Drill[] = [
  {
    id: "education-and-employment.subjects-and-school-verbs",
    topicId: "education-and-employment",
    title: "School Verbs, Stem-Changers & False-Friend Vocabulary",
    level: 1,
    guideRef: "school-life-and-facilities",
    generate(rng, tier) {
      const persons: readonly Person[] =
        tier === 1
          ? ["yo", "tú", "él", "nosotros"]
          : ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];

      if (tier === 3 && rng.bool(0.35)) {
        // Superlative vs comparative preposition or noun false-friend check
        if (rng.bool(0.5)) {
          const item = rng.pick(SCHOOL_NOUN_DRILLS);
          return {
            prompt: `Write the Spanish noun (including **el** or **la**) for **'${item.en}'**.`,
            answer: {
              type: "text",
              accept: item.accept,
              display: item.display,
            },
            solution: [item.note, `Answer: **${item.display}**.`],
            hint: "Include the definite article (*el* or *la*) and watch out for false friends!",
            ...(item.trap && item.trapMsg
              ? {
                  traps: [
                    {
                      spec: { type: "text", accept: [item.trap] },
                      feedback: item.trapMsg,
                    },
                  ],
                }
              : {}),
          };
        }
        const adjs = [
          ["útil", "la asignatura más útil"],
          ["moderno", "el laboratorio más moderno"],
          ["exigente", "el examen más exigente"],
          ["grande", "la biblioteca más grande"],
          ["interesante", "la clase más interesante"],
        ] as const;
        const places = ["mi instituto", "la ciudad", "nuestro colegio", "toda la región"] as const;
        const [, phrase] = rng.pick(adjs);
        const place = rng.pick(places);
        return {
          prompt: `Complete the relative superlative with the single correct Spanish preposition: *Es ${phrase} _______ ${place}.*`,
          answer: { type: "text", accept: ["de"], display: "de" },
          solution: [
            ` relative superlatives (*${phrase}*) translate English 'in' with **de** (never *en*).`,
            `Complete phrase: *${phrase} **de** ${place}*.`,
          ],
          hint: "After a Spanish superlative (*el/la más…*), 'in' is ALWAYS translated as 'of'.",
          traps: [
            {
              spec: { type: "text", accept: ["en"] },
              feedback: "Never write *en* after a superlative! Always use **de**.",
            },
          ],
        };
      }

      const pool = tier === 1 ? SCHOOL_VERBS_T1 : [...SCHOOL_VERBS_T1, ...SCHOOL_VERBS_T2];
      const v = rng.pick(pool);
      const person = rng.pick(persons);
      const form = conjugate(v.inf, "present", person);
      const accept = acceptedForms(v.inf, "present", person);

      return {
        prompt: `Complete with the **present indicative** form of **${v.inf}** (*${PERSON_LABEL[person]}*): *Normalmente _______ ${v.context}.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: form },
        solution: [
          `Identify verb **${v.inf}** in the present indicative for *${person}*.`,
          `Correct conjugated form: **${form}**.`,
        ],
        hint: "Check the ending (-ar / -er / -ir) and whether the verb is a boot stem-changer (e→ie, o→ue, e→i)!",
      };
    },
  },
  {
    id: "education-and-employment.rules-infinitive-vs-subjunctive",
    topicId: "education-and-employment",
    title: "School Rules: Impersonal Infinitive vs Present Subjunctive",
    level: 2,
    guideRef: "school-rules-and-pressure",
    generate(rng, tier) {
      const action = rng.pick(RULE_ACTIONS);
      const useImpersonal = tier === 1 ? true : tier === 2 ? rng.bool(0.45) : rng.bool(0.25);

      if (useImpersonal) {
        const modal = rng.pick(IMPERSONAL_MODALS);
        return {
          prompt: `Complete the impersonal school rule using **${action.inf}**: *En mi instituto, ${modal.toLowerCase()} _______ ${action.rest}.* (Write ONLY the single missing verb form.)`,
          answer: { type: "text", accept: [action.inf], display: action.inf },
          solution: [
            `*${modal}* has NO *que* and no change of grammatical subject.`,
            `Follow it directly with the bare **infinitive**: **${action.inf}** (never *para ${action.inf}* or *${action.gerundTrap}*!).`,
          ],
          hint: "No *que* after an impersonal rule expression = bare infinitive directly!",
          traps: [
            {
              spec: { type: "text", accept: [`para ${action.inf}`] },
              feedback: `Never add *para* after *${modal.toLowerCase()}* — write the bare infinitive **${action.inf}**!`,
            },
            {
              spec: { type: "text", accept: [action.gerundTrap] },
              feedback: `Never use the *-ndo* gerund (*${action.gerundTrap}*) as a verbal noun; use the infinitive **${action.inf}**!`,
            },
          ],
        };
      }

      const trigger = rng.pick(SUBJUNCTIVE_TRIGGERS);
      const persons: readonly Person[] =
        tier === 2 ? ["tú", "nosotros", "ellos"] : ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];
      const person = rng.pick(persons);
      const subjForm = conjugate(action.inf, "subjunctive", person);
      const indTrap = conjugate(action.inf, "present", person);
      const accept = acceptedForms(action.inf, "subjunctive", person);

      const subjLabel: Record<Person, string> = {
        yo: "yo",
        tú: "tú",
        él: "cada alumno",
        nosotros: "nosotros",
        vosotros: "vosotros",
        ellos: "los estudiantes",
      };

      return {
        prompt: `Complete the rule opinion with the **present subjunctive** of **${action.inf}** (*${PERSON_LABEL[person]}*): *${trigger} ${subjLabel[person]} _______ ${action.rest}.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: subjForm },
        solution: [
          `*${trigger}* introduces a WEIRDO obligation/judgement + *que* + specific subject (*${subjLabel[person]}*).`,
          `Present subjunctive of **${action.inf}** (*${person}*): **${subjForm}**.`,
        ],
        hint: "Spot *que* + a subject! Take present *yo*, drop *-o*, add the opposite ending (watch -car/-gar/-zar!).",
        ...(indTrap !== subjForm
          ? {
              traps: [
                {
                  spec: { type: "text", accept: [indTrap] },
                  feedback: `*${trigger}* triggers the **present subjunctive** (**${subjForm}**), not indicative *${indTrap}*!`,
                },
              ],
            }
          : {}),
      };
    },
  },
  {
    id: "education-and-employment.post16-future-and-cuando",
    topicId: "education-and-employment",
    title: "Post-16 Plans: Simple Future & Future 'Cuando + Subjunctive'",
    level: 3,
    guideRef: "post-16-and-university",
    generate(rng, tier) {
      const item = rng.pick(POST16_CLAUSES);
      const persons: readonly Person[] =
        tier === 1
          ? ["yo", "tú", "nosotros"]
          : ["yo", "tú", "él", "nosotros", "ellos"];
      const person = rng.pick(persons);

      if (tier === 1) {
        // Near future vs simple future foundations
        const useSimple = rng.bool(0.5);
        const tense = useSimple ? "future" : "near-future";
        const form = conjugate(item.inf, tense, person);
        const accept = acceptedForms(item.inf, tense, person);
        return {
          prompt: useSimple
            ? `Complete with the **simple future** (*futuro simple*) form of **${item.inf}** (*${PERSON_LABEL[person]}*): *Después de los exámenes, _______ ${item.clause}.* (Write ONLY the missing verb.)`
            : `Complete with the **near future** (*ir a + infinitive*) form of **${item.inf}** (*${PERSON_LABEL[person]}*): *El año que viene _______ ${item.clause}.* (Write ONLY the missing *ir a + infinitive* phrase.)`,
          answer: { type: "text", accept, display: form },
          solution: [
            useSimple
              ? `Form the simple future of **${item.inf}** for *${person}* (mind irregular stems *har-, tendr-, podr-, sabr-, saldr-* and written accents!): **${form}**.`
              : `Form present of *ir* (*${person}*) + **a** + infinitive (**${item.inf}**): **${form}**.`,
          ],
          hint: useSimple
            ? "Add *-é, -ás, -á, -emos, -éis, -án* to the infinitive (or irregular *dr/r* stem)!"
            : "Use *voy / vas / va / vamos / vais / van + a + infinitive*.",
        };
      }

      if (tier === 2 && rng.bool(0.45)) {
        // Irregular & regular simple future
        const form = conjugate(item.inf, "future", person);
        const accept = acceptedForms(item.inf, "future", person);
        return {
          prompt: `Complete with the **simple future** (*futuro simple*) of **${item.inf}** (*${PERSON_LABEL[person]}*): *El curso próximo _______ ${item.clause}.* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept, display: form },
          solution: [
            `Simple future of **${item.inf}** for *${person}*: **${form}**.`,
          ],
          hint: "Check whether the verb has one of the 12 irregular future stems (*tendr-, har-, podr-, sabr-, saldr-*) and add the future ending!",
        };
      }

      // Future cuando / en cuanto / tan pronto como + present subjunctive!
      const conj = rng.pick(["Cuando", "En cuanto", "Tan pronto como"] as const);
      const subjForm = conjugate(item.inf, "subjunctive", person);
      const futTrap = conjugate(item.inf, "future", person);
      const accept = acceptedForms(item.inf, "subjunctive", person);

      return {
        prompt: `Complete the future time clause with the **present subjunctive** of **${item.inf}** (*${PERSON_LABEL[person]}*): *${conj} _______ ${item.clause}, empezaré una etapa nueva.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: subjForm },
        solution: [
          `*${conj}* refers to an unfulfilled future event (paired with future *empezaré*).`,
          `NEVER put the future tense after future *${conj.toLowerCase()}* — use the **present subjunctive**: **${subjForm}**.`,
        ],
        hint: `Future *${conj.toLowerCase()}* MUST take the present subjunctive (never *${futTrap}*)!`,
        traps: [
          {
            spec: { type: "text", accept: [futTrap] },
            feedback: `Grade-9 Trap! NEVER use the simple future (*${futTrap}*) after future *${conj.toLowerCase()}* — use the present subjunctive **${subjForm}**!`,
          },
        ],
      };
    },
  },
  {
    id: "education-and-employment.work-experience-and-careers",
    topicId: "education-and-employment",
    title: "Work Experience (Preterite vs Imperfect) & Career Article Rule",
    level: 2,
    guideRef: "part-time-jobs-and-work-experience",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.35)) {
        const p = rng.pick(PROFESSIONS_DRILL);
        const unTrap = p.modifiedAdj
          ? p.roleEs.replace(/^una?\s+/, "")
          : `${p.roleEs.endsWith("a") && !p.subject.includes("hermano") && !p.subject.includes("padre") ? "una" : "un"} ${p.roleEs}`;
        return {
          prompt: `Complete the career sentence in Spanish for **'${p.roleEn}'** (apply the profession article rule carefully!): *${p.subject} _______.*`,
          answer: {
            type: "text",
            accept: [p.roleEs],
            display: p.roleEs,
          },
          solution: [
            p.modifiedAdj
              ? `Because the profession is modified by the adjective *${p.modifiedAdj.adjEs}*, KEEP **${p.modifiedAdj.art}**: **${p.roleEs}**.`
              : `Because the profession is unmodified after *ser / trabajar de*, DROP *un/una*: **${p.roleEs}**.`,
          ],
          hint: p.modifiedAdj
            ? "An adjective modifies the profession here, so restore *un / una*!"
            : "Unmodified profession after *ser* or *trabajar de* → NO *un / una*!",
          traps: [
            {
              spec: { type: "text", accept: [unTrap] },
              feedback: p.modifiedAdj
                ? `When a profession is modified by an adjective (*${p.modifiedAdj.adjEs}*), you MUST include **${p.modifiedAdj.art}**!`
                : `Drop *un/una* before an unmodified profession in Spanish: write **${p.roleEs}**!`,
            },
          ],
        };
      }

      const askPreterite = tier === 1 ? rng.bool(0.55) : rng.bool(0.55);
      if (askPreterite) {
        const pool = WORK_PRETERITE_ITEMS;
        const q = rng.pick(pool);
        const form = conjugate(q.inf, "preterite", q.person);
        const impTrap = conjugate(q.inf, "imperfect", q.person);
        const accept = acceptedForms(q.inf, "preterite", q.person);
        return {
          prompt: `Complete the work-experience event using the **preterite** of **${q.inf}** (*${PERSON_LABEL[q.person]}*): *${q.sentence}* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept, display: form },
          solution: [
            `This sentence states a bounded, completed past action during work experience → **preterite**.`,
            `Preterite of **${q.inf}** (*${q.person}*): **${form}**.`,
          ],
          hint: "Single completed past action → Preterite! Watch strong stems (*hice, tuve, estuve, fui*) and *-gar/-zar* in *yo*.",
          traps: [
            {
              spec: { type: "text", accept: [impTrap] },
              feedback: `This is a single completed past action, so use the **preterite** (**${form}**), not imperfect *${impTrap}*.`,
            },
          ],
        };
      }

      const q = rng.pick(WORK_IMPERFECT_ITEMS);
      const form = conjugate(q.inf, "imperfect", q.person);
      const pretTrap = conjugate(q.inf, "preterite", q.person);
      const accept = acceptedForms(q.inf, "imperfect", q.person);
      return {
        prompt: `Complete the work-experience background/routine using the **imperfect** of **${q.inf}** (*${PERSON_LABEL[q.person]}*): *${q.sentence}* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: form },
        solution: [
          `This sentence describes ongoing background traits or repeated daily routine → **imperfect**.`,
          `Imperfect of **${q.inf}** (*${q.person}*): **${form}**.`,
        ],
        hint: "Ongoing description or daily routine in the past → Imperfect (*-aba / -ía*, or irregular *era, iba, veía*)!",
        traps: [
          {
            spec: { type: "text", accept: [pretTrap] },
            feedback: `Ongoing traits and daily routines take the **imperfect** (**${form}**), not preterite *${pretTrap}*.`,
          },
        ],
      };
    },
  },
];
