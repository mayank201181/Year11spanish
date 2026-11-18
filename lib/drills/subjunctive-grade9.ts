import type { Drill } from "./types.ts";
import { PERSONS, PERSON_LABEL, SUBJECT_PRONOUNS, acceptedForms, conjugate, verbInfo, type Person } from "../spanish/verbs.ts";

const TIER1_VERBS = [
  "hablar",
  "comer",
  "vivir",
  "estudiar",
  "trabajar",
  "viajar",
  "comprar",
  "aprender",
  "escribir",
  "reciclar",
] as const;

const TIER2_VERBS = [
  "tener",
  "hacer",
  "salir",
  "venir",
  "decir",
  "poner",
  "conocer",
  "pedir",
  "dormir",
  "pensar",
  "poder",
  "buscar",
  "llegar",
  "empezar",
] as const;

const TIER3_VERBS = [
  "ser",
  "ir",
  "estar",
  "dar",
  "saber",
  "tener",
  "hacer",
  "conducir",
  "construir",
  "preferir",
  "proteger",
  "seguir",
  "organiz" in {} ? "organizar" : "organizar",
  "pagar",
  "sacar",
] as const;

interface SwitchCase {
  trigger: string;
  enTrigger: string;
  mood: "present" | "subjunctive";
  inf: string;
  person: Person;
  subjectLabel: string;
  tail: string;
  why: string;
}

const SWITCH_POOL: readonly SwitchCase[] = [
  // Tier 1-3 rich pool (30 distinct items!)
  { trigger: "Es importante que", enTrigger: "It is important that", mood: "subjunctive", inf: "estudiar", person: "tú", subjectLabel: "tú", tail: "todos los días", why: "Impersonal judgment (*es importante que*) triggers the present subjunctive." },
  { trigger: "Creo que", enTrigger: "I think that", mood: "present", inf: "ser", person: "él", subjectLabel: "el examen", tail: "bastante fácil", why: "Affirmative *creo que* declares belief/certainty → present indicative **es**." },
  { trigger: "No creo que", enTrigger: "I don't think that", mood: "subjunctive", inf: "ser", person: "él", subjectLabel: "el examen", tail: "demasiado difícil", why: "Negated *no creo que* introduces doubt → present subjunctive **sea**." },
  { trigger: "Pienso que", enTrigger: "I think that", mood: "present", inf: "tener", person: "ellos", subjectLabel: "mis amigos", tail: "razón", why: "Affirmative *pienso que* takes the present indicative **tienen**." },
  { trigger: "No pienso que", enTrigger: "I don't think that", mood: "subjunctive", inf: "tener", person: "ellos", subjectLabel: "los políticos", tail: "la solución", why: "Negated *no pienso que* triggers the present subjunctive **tengan**." },
  { trigger: "Es imprescindible que", enTrigger: "It is essential that", mood: "subjunctive", inf: "reciclar", person: "nosotros", subjectLabel: "nosotros", tail: "el plástico y el vidrio", why: "*Es imprescindible que* is a classic WEIRDO impersonal trigger → **reciclemos**." },
  { trigger: "Es verdad que", enTrigger: "It is true that", mood: "present", inf: "hacer", person: "él", subjectLabel: "él", tail: "mucho deporte", why: "*Es verdad que* states a declared fact → present indicative **hace**." },
  { trigger: "No es verdad que", enTrigger: "It is not true that", mood: "subjunctive", inf: "hacer", person: "él", subjectLabel: "él", tail: "sus deberes tarde", why: "Denial (*no es verdad que*) triggers the present subjunctive **haga**." },
  { trigger: "Dudo que", enTrigger: "I doubt that", mood: "subjunctive", inf: "ir", person: "ellos", subjectLabel: "ellos", tail: "a la fiesta esta noche", why: "Doubt (*dudo que*) triggers the DISHES subjunctive **vayan**." },
  { trigger: "Está claro que", enTrigger: "It is clear that", mood: "present", inf: "ir", person: "nosotros", subjectLabel: "nosotros", tail: "por buen camino", why: "Certainty (*está claro que*) takes the present indicative **vamos**." },
  { trigger: "Quiero que", enTrigger: "I want", mood: "subjunctive", inf: "venir", person: "tú", subjectLabel: "tú", tail: "a mi cumpleaños", why: "Wish with a new subject (*quiero que tú…*) triggers the subjunctive **vengas**." },
  { trigger: "Espero que", enTrigger: "I hope that", mood: "subjunctive", inf: "saber", person: "usted" in {} ? "él" : "él", subjectLabel: "la profesora", tail: "la fecha", why: "*Espero que* triggers the DISHES subjunctive **sepa**." },
  { trigger: "Es evidente que", enTrigger: "It is obvious that", mood: "present", inf: "saber", person: "tú", subjectLabel: "tú", tail: "hablar español", why: "*Es evidente que* expresses certainty → present indicative **sabes**." },
  { trigger: "Me molesta que", enTrigger: "It annoys me that", mood: "subjunctive", inf: "llegar", person: "ellos", subjectLabel: "los trenes", tail: "con retraso", why: "Emotion (*me molesta que*) triggers the *-gar → -gu* subjunctive **lleguen**." },
  { trigger: "Me alegra que", enTrigger: "It makes me happy that", mood: "subjunctive", inf: "estar", person: "tú", subjectLabel: "tú", tail: "más tranquilo hoy", why: "Emotion (*me alegra que*) triggers the accented DISHES subjunctive **estés**." },
  { trigger: "Recomiendo que", enTrigger: "I recommend that", mood: "subjunctive", inf: "visitar", person: "vosotros", subjectLabel: "vosotros", tail: "el museo del Prado", why: "Recommendation (*recomiendo que*) triggers the subjunctive **visitéis**." },
  { trigger: "Aconsejo que", enTrigger: "I advise that", mood: "subjunctive", inf: "dormir", person: "tú", subjectLabel: "tú", tail: "ocho horas diarias", why: "Advice (*aconsejo que*) triggers the subjunctive **duermas**." },
  { trigger: "Ojalá que", enTrigger: "Hopefully", mood: "subjunctive", inf: "salir", person: "nosotros", subjectLabel: "nosotros", tail: "pronto de dudas", why: "*Ojalá (que)* ALWAYS triggers the subjunctive → **salgamos**." },
  { trigger: "Puede que", enTrigger: "Maybe", mood: "subjunctive", inf: "llover" in {} ? "hacer" : "hacer", person: "él", subjectLabel: "(impersonal weather)", tail: "viento mañana", why: "*Puede que* ALWAYS triggers the subjunctive → **haga**." },
  { trigger: "Creo que", enTrigger: "I believe that", mood: "present", inf: "vivir", person: "ellos", subjectLabel: "mis primos", tail: "en las afueras", why: "Affirmative *creo que* takes the present indicative **viven**." },
  { trigger: "No creo que", enTrigger: "I don't believe that", mood: "subjunctive", inf: "vivir", person: "ellos", subjectLabel: "mis primos", tail: "en el centro", why: "Negated *no creo que* triggers the present subjunctive **vivan**." },
  { trigger: "Es aconsejable que", enTrigger: "It is advisable that", mood: "subjunctive", inf: "beber", person: "nosotros", subjectLabel: "nosotros", tail: "dos litros de agua", why: "Impersonal advice (*es aconsejable que*) triggers the subjunctive **bebamos**." },
  { trigger: "Es injusto que", enTrigger: "It is unfair that", mood: "subjunctive", inf: "pagar", person: "ellos", subjectLabel: "los jóvenes", tail: "tanto por el alquiler", why: "*Es injusto que* triggers the *-gar → -gu* subjunctive **paguen**." },
  { trigger: "Opino que", enTrigger: "I think / reckon that", mood: "present", inf: "poder", person: "nosotros", subjectLabel: "nosotros", tail: "mejorar el transporte", why: "Affirmative *opino que* states an opinion as fact → present indicative **podemos**." },
  { trigger: "Pido que", enTrigger: "I ask that", mood: "subjunctive", inf: "decir", person: "tú", subjectLabel: "tú", tail: "siempre la verdad", why: "Request (*pido que*) triggers the *yo-go* subjunctive **digas**." },
  { trigger: "Me preocupa que", enTrigger: "It worries me that", mood: "subjunctive", inf: "contaminar", person: "ellos", subjectLabel: "las fábricas", tail: "el río", why: "Emotion (*me preocupa que*) triggers the subjunctive **contaminen**." },
  { trigger: "Es una lástima que", enTrigger: "It is a shame that", mood: "subjunctive", inf: "perder", person: "tú", subjectLabel: "tú", tail: "el concierto", why: "*Es una lástima que* triggers the stem-changing subjunctive **pierdas**." },
  { trigger: "Sé que", enTrigger: "I know that", mood: "present", inf: "conocer", person: "tú", subjectLabel: "tú", tail: "muy bien Barcelona", why: "*Sé que* declares knowledge/fact → present indicative **conoces**." },
  { trigger: "No me parece que", enTrigger: "It doesn't seem to me that", mood: "subjunctive", inf: "dar", person: "él", subjectLabel: "este trabajo", tail: "suficiente tiempo libre", why: "Negated *no me parece que* triggers the accented DISHES subjunctive **dé**." },
  { trigger: "Prefiero que", enTrigger: "I prefer that", mood: "subjunctive", inf: "buscar", person: "nosotros", subjectLabel: "nosotros", tail: "un albergue juvenil", why: "*Prefiero que* triggers the *-car → -qu* subjunctive **busquemos**." },
];

interface TimeClauseItem {
  stemBefore: string;
  stemAfter: string;
  inf: string;
  person: Person;
  expectedTense: "subjunctive" | "present" | "preterite";
  trapTense: "future" | "present" | "subjunctive";
  rule: string;
}

const TIME_CLAUSE_POOL: readonly TimeClauseItem[] = [
  { stemBefore: "Cuando _______", stemAfter: "dieciocho años, iré a la universidad.", inf: "tener", person: "yo", expectedTense: "subjunctive", trapTense: "future", rule: "Future *cuando* (signalled by *iré*) takes the **present subjunctive** (**tenga**), NEVER future *tendré*!" },
  { stemBefore: "En cuanto _______", stemAfter: "mis exámenes en junio, viajaré a Madrid.", inf: "pasar", person: "yo", expectedTense: "subjunctive", trapTense: "future", rule: "Future *en cuanto* + *viajaré* requires the **present subjunctive** (**pase**)." },
  { stemBefore: "Cuando _______", stemAfter: "mayor, quiero trabajar como ingeniera.", inf: "ser", person: "yo", expectedTense: "subjunctive", trapTense: "present", rule: "*Cuando sea mayor* refers to an unrealised future stage → DISHES subjunctive **sea**." },
  { stemBefore: "Tan pronto como _______", stemAfter: "al aeropuerto mañana, facturaremos el equipaje.", inf: "llegar", person: "nosotros", expectedTense: "subjunctive", trapTense: "future", rule: "Future *tan pronto como* + *-gar* verb → **lleguemos** (never *llegaremos*!)." },
  { stemBefore: "Mis padres ahorran dinero para que yo _______", stemAfter: "estudiar en el extranjero.", inf: "poder", person: "yo", expectedTense: "subjunctive", trapTense: "present", rule: "**Para que** (ESCAPA) ALWAYS triggers the present subjunctive → **pueda**." },
  { stemBefore: "Te explico la regla otra vez para que la _______", stemAfter: "sin problemas.", inf: "comprender", person: "tú", expectedTense: "subjunctive", trapTense: "present", rule: "**Para que** ALWAYS triggers the present subjunctive → **comprendas**." },
  { stemBefore: "Repaso el vocabulario antes de que _______", stemAfter: "la prueba oral.", inf: "empezar", person: "él", expectedTense: "subjunctive", trapTense: "present", rule: "**Antes de que** ALWAYS triggers the subjunctive (*-zar → -c* + *e→ie*) → **empiece**." },
  { stemBefore: "Iremos de excursión mañana a menos que _______", stemAfter: "un tiempo horrible.", inf: "hacer", person: "él", expectedTense: "subjunctive", trapTense: "present", rule: "**A menos que** ('unless') ALWAYS triggers the subjunctive → **haga**." },
  { stemBefore: "Salí de mi habitación sin que mi hermano me _______", stemAfter: ".", inf: "oír", person: "él", expectedTense: "subjunctive", trapTense: "present", rule: "**Sin que** ALWAYS triggers the subjunctive → *yo oigo* → **oiga**." },
  { stemBefore: "Llevo una botella de agua en caso de que _______", stemAfter: "mucho calor.", inf: "hacer", person: "él", expectedTense: "subjunctive", trapTense: "present", rule: "**En caso de que** ALWAYS triggers the subjunctive → **haga**." },
  { stemBefore: "Te presto mi portátil con tal de que lo _______", stemAfter: "con cuidado.", inf: "usar" in {} ? "limpiar" : "limpiar", person: "tú", expectedTense: "subjunctive", trapTense: "present", rule: "**Con tal de que** ALWAYS triggers the subjunctive → **limpies**." },
  { stemBefore: "Todos los sábados, cuando _______", stemAfter: "tiempo libre, juego al tenis.", inf: "tener", person: "yo", expectedTense: "present", trapTense: "subjunctive", rule: "*Todos los sábados… juego* is a **habitual present routine**, so *cuando* takes the **present indicative** (**tengo**)!" },
  { stemBefore: "Normalmente, cuando mis amigos _______", stemAfter: "del instituto, meriendan juntos.", inf: "salir", person: "ellos", expectedTense: "present", trapTense: "subjunctive", rule: "*Normalmente… meriendan* is habitual → **present indicative** (**salen**)." },
  { stemBefore: "Ayer, en cuanto _______", stemAfter: "a casa, cené con mi familia.", inf: "llegar", person: "yo", expectedTense: "preterite", trapTense: "subjunctive", rule: "*Ayer… cené* is a **completed single past event** → **preterite indicative** (**llegué** with *-gu-* and accent!)." },
  { stemBefore: "El verano pasado, cuando _______", stemAfter: "Barcelona, sacamos cien fotos.", inf: "visitar", person: "nosotros", expectedTense: "preterite", trapTense: "subjunctive", rule: "*El verano pasado… sacamos* is a completed past trip → **preterite** (**visitamos**)." },
  { stemBefore: "Cuando _______", stemAfter: "a España el verano próximo, probarás la paella.", inf: "ir", person: "tú", expectedTense: "subjunctive", trapTense: "future", rule: "*El verano próximo… probarás* is a future event → DISHES subjunctive **vayas**." },
  { stemBefore: "Esperaré en el andén hasta que _______", stemAfter: "tu tren.", inf: "venir", person: "él", expectedTense: "subjunctive", trapTense: "future", rule: "Future *hasta que* (*esperaré*) takes the present subjunctive → **venga**." },
  { stemBefore: "El alcalde abre parques a fin de que los vecinos _______", stemAfter: "aire puro.", inf: "tener", person: "ellos", expectedTense: "subjunctive", trapTense: "present", rule: "**A fin de que** ('so that') ALWAYS triggers the subjunctive → **tengan**." },
  { stemBefore: "Cuando nosotros _______", stemAfter: "un buen sueldo en el futuro, ahorraremos más.", inf: "ganar", person: "nosotros", expectedTense: "subjunctive", trapTense: "future", rule: "Future *cuando* (*ahorraremos*) takes the present subjunctive → **ganemos**." },
  { stemBefore: "Aunque mañana _______", stemAfter: "mucho frío, entrenaremos al aire libre. *(meaning: even if)*", inf: "hacer", person: "él", expectedTense: "subjunctive", trapTense: "present", rule: "*Aunque* meaning **'even if'** for a hypothetical future condition takes the subjunctive → **haga**." },
  { stemBefore: "Aunque hoy _______", stemAfter: "cansada, voy a terminar mis deberes. *(meaning: although — known fact)*", inf: "estar", person: "yo", expectedTense: "present", trapTense: "subjunctive", rule: "*Aunque* meaning **'although'** for an actual fact right now (*hoy*) takes the **present indicative** (**estoy**)." },
  { stemBefore: "Recogeré la mesa antes de que mis abuelos _______", stemAfter: "a cenar.", inf: "venir", person: "ellos", expectedTense: "subjunctive", trapTense: "present", rule: "**Antes de que** ALWAYS triggers the subjunctive → **vengan**." },
  { stemBefore: "Cuando ustedes _______", stemAfter: "el formulario mañana, recibirán un correo.", inf: "enviar", person: "ellos", expectedTense: "subjunctive", trapTense: "future", rule: "Future *cuando* (*recibirán*) takes the present subjunctive → **envíen**." },
  { stemBefore: "Hablo despacio para que todos me _______", stemAfter: "claramente.", inf: "oír", person: "ellos", expectedTense: "subjunctive", trapTense: "present", rule: "**Para que** ALWAYS triggers the subjunctive → **oigan**." },
];

interface ImpSubjRow {
  inf: string;
  en: string;
  ra: Record<Person, string>;
  se: Record<Person, string>;
}

const IMP_SUBJ_VERBS: readonly ImpSubjRow[] = [
  {
    inf: "tener",
    en: "have / had",
    ra: { yo: "tuviera", tú: "tuvieras", él: "tuviera", nosotros: "tuviéramos", vosotros: "tuvierais", ellos: "tuvieran" },
    se: { yo: "tuviese", tú: "tuvieses", él: "tuviese", nosotros: "tuviésemos", vosotros: "tuvieseis", ellos: "tuviesen" },
  },
  {
    inf: "ser",
    en: "be / were",
    ra: { yo: "fuera", tú: "fueras", él: "fuera", nosotros: "fuéramos", vosotros: "fuerais", ellos: "fueran" },
    se: { yo: "fuese", tú: "fueses", él: "fuese", nosotros: "fuésemos", vosotros: "fueseis", ellos: "fuesen" },
  },
  {
    inf: "poder",
    en: "could / were able to",
    ra: { yo: "pudiera", tú: "pudieras", él: "pudiera", nosotros: "pudiéramos", vosotros: "pudierais", ellos: "pudieran" },
    se: { yo: "pudiese", tú: "pudieses", él: "pudiese", nosotros: "pudiésemos", vosotros: "pudieseis", ellos: "pudiesen" },
  },
  {
    inf: "hacer",
    en: "did / made",
    ra: { yo: "hiciera", tú: "hicieras", él: "hiciera", nosotros: "hiciéramos", vosotros: "hicierais", ellos: "hicieran" },
    se: { yo: "hiciese", tú: "hicieses", él: "hiciese", nosotros: "hiciésemos", vosotros: "hicieseis", ellos: "hiciesen" },
  },
  {
    inf: "ir",
    en: "went",
    ra: { yo: "fuera", tú: "fueras", él: "fuera", nosotros: "fuéramos", vosotros: "fuerais", ellos: "fueran" },
    se: { yo: "fuese", tú: "fueses", él: "fuese", nosotros: "fuésemos", vosotros: "fueseis", ellos: "fuesen" },
  },
  {
    inf: "vivir",
    en: "lived",
    ra: { yo: "viviera", tú: "vivieras", él: "viviera", nosotros: "viviéramos", vosotros: "vivierais", ellos: "vivieran" },
    se: { yo: "viviese", tú: "vivieses", él: "viviese", nosotros: "viviésemos", vosotros: "vivieseis", ellos: "viviesen" },
  },
  {
    inf: "ganar",
    en: "earned / won",
    ra: { yo: "ganara", tú: "ganaras", él: "ganara", nosotros: "ganáramos", vosotros: "ganarais", ellos: "ganaran" },
    se: { yo: "ganase", tú: "ganases", él: "ganase", nosotros: "ganásemos", vosotros: "ganaseis", ellos: "ganasen" },
  },
  {
    inf: "estudiar",
    en: "studied",
    ra: { yo: "estudiara", tú: "estudiaras", él: "estudiara", nosotros: "estudiáramos", vosotros: "estudiarais", ellos: "estudiaran" },
    se: { yo: "estudiase", tú: "estudiases", él: "estudiase", nosotros: "estudiásemos", vosotros: "estudiaseis", ellos: "estudiasen" },
  },
  {
    inf: "estar",
    en: "were (in a place/position)",
    ra: { yo: "estuviera", tú: "estuvieras", él: "estuviera", nosotros: "estuviéramos", vosotros: "estuvierais", ellos: "estuvieran" },
    se: { yo: "estuviese", tú: "estuvieses", él: "estuviese", nosotros: "estuviésemos", vosotros: "estuvieseis", ellos: "estuviesen" },
  },
  {
    inf: "saber",
    en: "knew",
    ra: { yo: "supiera", tú: "supieras", él: "supiera", nosotros: "supiéramos", vosotros: "supierais", ellos: "supieran" },
    se: { yo: "supiese", tú: "supieses", él: "supiese", nosotros: "supiésemos", vosotros: "supieseis", ellos: "supiesen" },
  },
];

function acceptedImpSubj(row: ImpSubjRow, person: Person): string[] {
  const base = [row.ra[person], row.se[person]];
  const out = [...base];
  for (const subj of SUBJECT_PRONOUNS[person]) {
    for (const f of base) out.push(`${subj} ${f}`);
  }
  return [...new Set(out)];
}

interface PrecisionItem {
  prompt: string;
  accept: string[];
  display: string;
  trap?: string;
  trapMsg?: string;
  steps: string[];
  hint: string;
}

const PRECISION_T1: readonly PrecisionItem[] = [
  { prompt: "Choose **por** or **para**: *Muchas gracias _______ tu ayuda con el proyecto.*", accept: ["por"], display: "por", trap: "para", trapMsg: "*Gracias* looks back at the cause/reason — Spanish ALWAYS says *gracias por*!", steps: ["Gratitude expresses the **cause** behind saying thank you.", "Cause takes **por** → *Muchas gracias **por** tu ayuda*."], hint: "Gratitude always looks back at the cause." },
  { prompt: "Choose **por** or **para**: *Compré estas entradas _______ mis padres.*", accept: ["para"], display: "para", trap: "por", trapMsg: "*Mis padres* are the **recipients** of the tickets → use *para*!", steps: ["*Mis padres* is the intended **recipient**.", "Recipients take **para**."], hint: "Think: who is the recipient target?" },
  { prompt: "Choose **por** or **para**: *Estudio mucho _______ aprobar mis exámenes IGCSE.*", accept: ["para"], display: "para", trap: "por", trapMsg: "'In order to' + infinitive is ALWAYS *para + infinitive*!", steps: ["*Aprobar* expresses **purpose** ('in order to pass').", "Purpose + infinitive takes **para**."], hint: "Can you translate the gap as 'in order to'?" },
  { prompt: "Choose **por** or **para**: *Pagué treinta euros _______ esta chaqueta.*", accept: ["por"], display: "por", trap: "para", trapMsg: "Money paid **in exchange for** an item always takes *por*!", steps: ["Thirty euros swapped for a jacket is an **exchange**.", "Exchange/money takes **por**."], hint: "Money swapped in exchange for an item." },
  { prompt: "Choose **por** or **para**: *Los deberes de español son _______ el lunes.*", accept: ["para"], display: "para", trap: "por", trapMsg: "A future **deadline** ('for/by Monday') always takes *para*!", steps: ["*El lunes* is the **deadline**.", "Deadlines take **para**."], hint: "Future deadline on the calendar." },
  { prompt: "Choose **por** or **para**: *El tren de alta velocidad sale _______ Barcelona a las nueve.*", accept: ["para"], display: "para", trap: "por", trapMsg: "Final **destination** ('bound for Barcelona') takes *para*!", steps: ["Barcelona is the **destination** target.", "Destination takes **para**."], hint: "Arrow pointing at the final destination." },
  { prompt: "Choose **por** or **para**: *Ayer paseamos _______ el centro histórico de Sevilla.*", accept: ["por"], display: "por", trap: "para", trapMsg: "Walking **through / around** a place takes *por*!", steps: ["Walking around/through a neighbourhood is **movement through**.", "Movement through takes **por**."], hint: "Walking through/along an area." },
  { prompt: "Choose **por** or **para**: *El vuelo fue cancelado _______ la tormenta.*", accept: ["por"], display: "por", trap: "para", trapMsg: "The storm is the **cause** ('because of the storm') → *por*!", steps: ["*La tormenta* is the **cause** of the cancellation.", "Cause takes **por**."], hint: "'Because of' = cause." },
  { prompt: "Choose **por** or **para**: *_______ mí, el reciclaje debería ser obligatorio.*", accept: ["para"], display: "para", trap: "por", trapMsg: "Personal opinion ('For me / In my opinion') is *Para mí*!", steps: ["*___ mí* introduces a **personal viewpoint**.", "Personal opinion takes **para** (*Para mí…*)."], hint: "How does Spanish say 'For me / In my opinion'?" },
  { prompt: "Choose **por** or **para**: *_______ desgracia, todavía hay mucha pobreza.*", accept: ["por"], display: "por", trap: "para", trapMsg: "'Unfortunately' is the fixed idiom *por desgracia*!", steps: ["'Unfortunately' is a fixed **por** idiom.", "Write **por** (*Por desgracia*)."], hint: "Fixed Spanish idiom for 'unfortunately'." },
  { prompt: "Choose **por** or **para**: *Hablé con mi abuela _______ teléfono ayer.*", accept: ["por"], display: "por", trap: "para", trapMsg: "Means of communication (*by phone / by email*) takes *por*!", steps: ["Telephone is the **means of communication**.", "Means of communication/transport takes **por**."], hint: "Means of communication." },
  { prompt: "Choose **por** or **para**: *_______ ejemplo, podemos ahorrar energía en casa.*", accept: ["por"], display: "por", trap: "para", trapMsg: "'For example' is ALWAYS *por ejemplo*!", steps: ["'For example' is the fixed idiom **por ejemplo**.", "Write **por**."], hint: "Fixed Spanish phrase for 'for example'." },
  { prompt: "Choose **es** or **está**: *La biblioteca de mi instituto _______ muy moderna.*", accept: ["es"], display: "es", trap: "está", trapMsg: "Inherent characteristic of a building (*moderna*) uses *ser* (DOCTOR)!", steps: ["*Moderna* describes an inherent **characteristic**.", "Characteristics take *ser* → **es**."], hint: "DOCTOR (permanent characteristic) vs PLACE." },
  { prompt: "Choose **es** or **está**: *Cuidado, el plato _______ muy caliente.*", accept: ["está"], display: "está", trap: "es", trapMsg: "Temporary temperature/condition of food or plates uses *estar* (PLACE)!", steps: ["Being hot right now is a **temporary condition**.", "Temporary conditions take *estar* → **está**."], hint: "Temporary condition of the plate right now." },
  { prompt: "Choose **es** or **está**: *El concierto benéfico _______ en el salón de actos.*", accept: ["es"], display: "es", trap: "está", trapMsg: "Watch the Grade-9 trap: the location where an **EVENT takes place** uses *ser* (*es en…*), not *estar*!", steps: ["*El concierto* is an **event** ('takes place in'), not a physical object.", "Event locations take *ser* → **es**."], hint: "Where an EVENT takes place!" },
  { prompt: "Choose **sé** or **conozco**: *Yo _______ tocar el piano desde los ocho años.*", accept: ["sé", "yo sé"], display: "sé", trap: "conozco", trapMsg: "'Know how to + infinitive' ALWAYS uses *saber* (*sé tocar*), never *conocer*!", steps: ["Skill + infinitive (*tocar*) uses **saber**.", "Present *yo* of *saber* (with accent!) = **sé**."], hint: "Saber + infinitive = know how to." },
  { prompt: "Choose **sé** or **conozco**: *Yo _______ muy bien a tu profesora de español.*", accept: ["conozco", "yo conozco"], display: "conozco", trap: "sé", trapMsg: "Knowing a **person** (notice personal *a*!) ALWAYS uses *conocer*!", steps: ["Being acquainted with a person (*a tu profesora*) uses **conocer**.", "Present *yo* of *conocer* = **conozco**."], hint: "Knowing a person (with personal 'a')." },
  { prompt: "Choose **pedí** or **pregunté**: *En el restaurante, _______ la cuenta al camarero.*", accept: ["pedí", "yo pedí"], display: "pedí", trap: "pregunté", trapMsg: "Requesting/ordering a thing (*la cuenta*) uses *pedir*, whereas *preguntar* asks a question!", steps: ["Asking **for** an item (*la cuenta*) uses **pedir**.", "Preterite *yo* of *pedir* = **pedí**."], hint: "Ask FOR an item vs ask a question." },
];

const PRECISION_T2_T3: readonly PrecisionItem[] = [
  { prompt: "Replace *el regalo* and *a mi madre* with two pronouns: *Compré el regalo y _______ _______ di.* (Write ONLY the two pronouns.)", accept: ["se lo"], display: "se lo", trap: "le lo", trapMsg: "*Le* ALWAYS flips to **se** before *lo / la / los / las*!", steps: ["Indirect *a mi madre* (*le*) + masculine singular *el regalo* (*lo*).", "*Le + lo* mutates to **se lo**."], hint: "ID order, and remember the Double-L rule!" },
  { prompt: "Replace *las fotos* and *a mis amigos* with two pronouns: *Saqué las fotos y _______ _______ envié.* (Write ONLY the two pronouns.)", accept: ["se las"], display: "se las", trap: "les las", trapMsg: "*Les* ALWAYS flips to **se** before *las*!", steps: ["Indirect *a mis amigos* (*les*) + feminine plural *las fotos* (*las*).", "*Les + las* mutates to **se las**."], hint: "Feminine plural direct pronoun + le/les → se." },
  { prompt: "Replace *la regla* and *a nosotros* with two pronouns: *El profesor _______ _______ explicó.* (Write ONLY the two pronouns.)", accept: ["nos la"], display: "nos la", trap: "la nos", trapMsg: "Indirect object (*nos*) MUST come BEFORE direct object (*la*): ID order!", steps: ["Indirect *a nosotros* = **nos**; direct *la regla* (fem. sg.) = **la**.", "ID order → **nos la**."], hint: "Indirect (us) before Direct (la regla)." },
  { prompt: "Replace *los billetes* and *a mí* with two pronouns: *Mi padre _______ _______ compró.* (Write ONLY the two pronouns.)", accept: ["me los"], display: "me los", trap: "los me", trapMsg: "Put the indirect pronoun (*me*) BEFORE the direct pronoun (*los*)!", steps: ["Indirect *a mí* = **me**; direct *los billetes* (masc. pl.) = **los**.", "ID order → **me los**."], hint: "Indirect (me) + masculine plural Direct." },
  { prompt: "Replace *la entrada* and *a ti* with two pronouns: *Yo _______ _______ reservé ayer.* (Write ONLY the two pronouns.)", accept: ["te la"], display: "te la", trap: "la te", trapMsg: "Indirect (*te*) precedes direct (*la*): *te la reservé*!", steps: ["Indirect *a ti* = **te**; direct *la entrada* (fem. sg.) = **la**.", "ID order → **te la**."], hint: "Indirect (te) + feminine singular Direct." },
  { prompt: "Replace *los libros* and *al profesor* with two pronouns: *Leí los libros y _______ _______ devolví.* (Write ONLY the two pronouns.)", accept: ["se los"], display: "se los", trap: "le los", trapMsg: "*Le* flips to **se** before *los*!", steps: ["Indirect *al profesor* (*le*) + masculine plural *los libros* (*los*).", "*Le + los* → **se los**."], hint: "Le + los triggers the se-lo mutation!" },
  { prompt: "Replace *la verdad* and *a mis padres* with two pronouns: *Siempre _______ _______ digo.* (Write ONLY the two pronouns.)", accept: ["se la"], display: "se la", trap: "les la", trapMsg: "*Les* flips to **se** before *la*!", steps: ["Indirect *a mis padres* (*les*) + feminine singular *la verdad* (*la*).", "*Les + la* → **se la**."], hint: "Les + la → Double-L mutation." },
  { prompt: "Write the Spanish verb ONLY (no unneeded preposition!) for **'I look for'** in: *_______ mi pasaporte por toda la casa.*", accept: ["busco", "yo busco"], display: "busco", trap: "busco para", trapMsg: "Trap! *Buscar* ALREADY means 'to look for' — NEVER add *para* or *por*!", steps: ["*Buscar* includes 'for' inside its meaning.", "Present *yo* = **busco** (*Busco mi pasaporte*)."], hint: "Zero-preposition verb: never add por/para!" },
  { prompt: "Write the affirmative *tú* command with attached pronouns for **'Give it (masc. sg.) to me!'** (*dar + me + lo*).", accept: ["dámelo"], display: "dámelo", trap: "damelo", trapMsg: "Check the written accent: attaching two pronouns shifts the stress 3 syllables back → *dámelo*!", steps: ["Affirmative *tú* of *dar* = *da* + *me* + *lo*.", "Add written accent on the *á* (antepenultimate syllable) → **dámelo**."], hint: "da + me + lo + written accent on the first syllable!" },
  { prompt: "Write the affirmative *tú* command with attached pronouns for **'Tell it (fem. sg., e.g. la verdad) to me!'** (*decir → di + me + la*).", accept: ["dímela"], display: "dímela", trap: "dimela", trapMsg: "Add the written accent on *í* so stress stays on *di-*: *dímela*!", steps: ["Affirmative *tú* of *decir* = *di* + *me* + *la*.", "Add written accent on *í* → **dímela**."], hint: "di + me + la + written accent!" },
  ...PRECISION_T1,
];

export const drills: Drill[] = [
  {
    id: "subjunctive-grade9.present-subjunctive-formation",
    topicId: "subjunctive-grade9",
    title: "Present Subjunctive Machine (Yo-Flip & DISHES)",
    level: 1,
    guideRef: "forming-present-subjunctive",
    generate(rng, tier) {
      const pool = tier === 1 ? TIER1_VERBS : tier === 2 ? TIER2_VERBS : TIER3_VERBS;
      const inf = rng.pick(pool);
      const person = rng.bool(0.15) ? "vosotros" : rng.pick(PERSONS.filter((p) => p !== "vosotros"));
      const form = conjugate(inf, "subjunctive", person);
      const accept = acceptedForms(inf, "subjunctive", person);
      const indForm = conjugate(inf, "present", person);
      const yoInd = conjugate(inf, "present", "yo");
      const vInfo = verbInfo(inf)!;
      const isDishes = vInfo.tags.includes("dishes");

      const traps =
        indForm !== form
          ? [
              {
                spec: { type: "text" as const, accept: [indForm] },
                feedback: `*${indForm}* is the **present indicative**! Swap to the **present subjunctive** (${isDishes ? "DISHES irregular" : `from *yo ${yoInd}* + opposite vowel`}).`,
              },
            ]
          : [];

      return {
        prompt: `Write the **present subjunctive** of **${inf}** (*${vInfo.en}*) for **${PERSON_LABEL[person]}**. (Write ONLY the conjugated verb.)`,
        answer: { type: "text", accept, display: form },
        traps,
        hint: isDishes
          ? `*${inf}* is one of the 6 **DISHES** irregulars (*dé, vaya, sea, haya, esté, sepa*)!`
          : `Start from present *yo* (**${yoInd}**), drop *-o*, and add the opposite **-${vInfo.group === "ar" ? "e" : "a"}** ending.`,
        solution: isDishes
          ? [
              `**${inf}** belongs to the 6 **DISHES** irregular subjunctives (its *yo* form *${yoInd}* does not end in *-o*).`,
              `For **${PERSON_LABEL[person]}**, the present subjunctive is **${form}**.`,
            ]
          : [
              `Step 1: Present indicative *yo* of **${inf}** → **${yoInd}**.`,
              `Step 2: Drop *-o*${vInfo.group === "ar" && /[cgz]ar$/.test(inf) ? " and apply the *-car/-gar/-zar* spelling shift before *e*" : ""}.`,
              `Step 3: Attach the opposite **-${vInfo.group === "ar" ? "e" : "a"}** ending for **${PERSON_LABEL[person]}** → **${form}**.`,
            ],
      };
    },
  },
  {
    id: "subjunctive-grade9.weirdo-vs-creo-switchboard",
    topicId: "subjunctive-grade9",
    title: "Switchboard: WEIRDO Subjunctive vs Creo que Indicative",
    level: 2,
    guideRef: "weirdo-and-impersonal",
    generate(rng, tier) {
      const slice =
        tier === 1
          ? SWITCH_POOL.slice(0, 18)
          : tier === 2
            ? SWITCH_POOL.slice(4, 24)
            : SWITCH_POOL.slice(10);
      const item = rng.pick(slice);
      const ans = conjugate(item.inf, item.mood, item.person);
      const accept = acceptedForms(item.inf, item.mood, item.person);
      const wrongMood = item.mood === "subjunctive" ? "present" : "subjunctive";
      const wrongForm = conjugate(item.inf, wrongMood, item.person);

      return {
        prompt: `Complete with the right mood (**present indicative** OR **present subjunctive**) of **${item.inf}** (*${item.subjectLabel}*):\n\n*${item.trigger} ${item.subjectLabel.startsWith("(") ? "" : item.subjectLabel + " "}_______ ${item.tail}.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: ans },
        traps:
          wrongForm !== ans
            ? [
                {
                  spec: { type: "text", accept: [wrongForm] },
                  feedback:
                    item.mood === "subjunctive"
                      ? `*${wrongForm}* is indicative — **${item.trigger}** triggers the **present subjunctive**!`
                      : `*${wrongForm}* is subjunctive — affirmative **${item.trigger}** declares certainty, so keep the **present indicative**!`,
                },
              ]
            : [],
        hint: `Ask: does **${item.trigger}** (*${item.enTrigger}*) declare certainty (indicative) or express WEIRDO / negated belief (subjunctive)?`,
        solution: [
          item.why,
          `Conjugating **${item.inf}** for *${item.subjectLabel}* in the **${item.mood === "subjunctive" ? "present subjunctive" : "present indicative"}** gives **${ans}**.`,
        ],
      };
    },
  },
  {
    id: "subjunctive-grade9.cuando-purpose-clauses",
    topicId: "subjunctive-grade9",
    title: "Future 'Cuando', Habitual 'Cuando' & ESCAPA Conjunctions",
    level: 2,
    guideRef: "cuando-and-time-clauses",
    generate(rng, tier) {
      const slice =
        tier === 1
          ? TIME_CLAUSE_POOL.slice(0, 17)
          : tier === 2
            ? TIME_CLAUSE_POOL.slice(3, 21)
            : TIME_CLAUSE_POOL.slice(6);
      const it = rng.pick(slice);
      const ans = conjugate(it.inf, it.expectedTense, it.person);
      const accept = acceptedForms(it.inf, it.expectedTense, it.person);
      const trapWord = conjugate(it.inf, it.trapTense, it.person);

      return {
        prompt: `Complete with the accurate form of **${it.inf}** (*${PERSON_LABEL[it.person]}*):\n\n*${it.stemBefore} ${it.stemAfter}* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: ans },
        traps:
          trapWord !== ans
            ? [
                {
                  spec: { type: "text", accept: [trapWord] },
                  feedback:
                    it.trapTense === "future"
                      ? `Grade-9 mark-saver: NEVER put the future tense (*${trapWord}*) directly after future *cuando / en cuanto*! Use the **present subjunctive** (*${ans}*).`
                      : `Check the conjunction and time frame carefully — *${trapWord}* uses the wrong mood/tense here!`,
                },
              ]
            : [],
        hint: "ESCAPA conjunctions (*para que, antes de que, sin que, a menos que*) ALWAYS take subjunctive; *cuando* takes subjunctive ONLY when the event is still in the future!",
        solution: [it.rule, `Required form of **${it.inf}** (*${PERSON_LABEL[it.person]}*): **${ans}**.`],
      };
    },
  },
  {
    id: "subjunctive-grade9.si-clauses-grade9",
    topicId: "subjunctive-grade9",
    title: "Grade-9 'Si' Clauses: Imperfect Subjunctive (-ra/-se) & Conditional",
    level: 3,
    guideRef: "si-clauses-and-imperfect-subj",
    generate(rng, tier) {
      const persons: readonly Person[] =
        tier === 1 ? ["yo", "tú", "él", "ellos"] : ["yo", "tú", "él", "nosotros", "ellos"];
      const row = rng.pick(IMP_SUBJ_VERBS);
      const person = rng.pick(persons);
      // Alternate between testing the Si-half (imperfect subjunctive) and the Main-half (conditional)
      const askSiHalf = tier === 1 ? true : rng.bool(0.7);
      const mainVerbs = ["viajar", "organizar", "mejorar", "ahorrar", "ayudar", "hacer", "poder", "salir"] as const;
      const mainInf = rng.pick(mainVerbs.filter((m) => m !== row.inf));
      const condForm = conjugate(mainInf, "conditional", person);

      if (askSiHalf) {
        const accept = acceptedImpSubj(row, person);
        const display = row.ra[person];
        const condTrap = conjugate(row.inf, "conditional", person);
        return {
          prompt: `Complete the **Type 2 hypothetical 'si' clause** with the **imperfect subjunctive** of **${row.inf}** (*${PERSON_LABEL[person]}*):\n\n*Si _______ (${row.inf}), ${condForm} enseguida.* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept, display },
          traps: [
            {
              spec: { type: "text", accept: [condTrap] },
              feedback: `NEVER put the conditional (*${condTrap}*) right after conditional *si*! Use the **imperfect subjunctive** (*${row.ra[person]}* / *${row.se[person]}*).`,
            },
          ],
          hint: `Take *ellos* preterite of **${row.inf}** (**${conjugate(row.inf, "preterite", "ellos")}**), drop *-ron*, and add **-ra** (or **-se**)${person === "nosotros" ? " — don't forget the accent before *-ramos*!" : ""}!`,
          solution: [
            `Notice the conditional main verb (*${condForm}*) → Type 2 hypothetical *si* clause requires the **imperfect subjunctive**.`,
            `*Ellos* preterite of **${row.inf}** is *${conjugate(row.inf, "preterite", "ellos")}* → drop *-ron* → **${row.ra[person]}** (or **${row.se[person]}**).`,
          ],
        };
      }

      const accept = acceptedForms(mainInf, "conditional", person);
      const futTrap = conjugate(mainInf, "future", person);
      return {
        prompt: `Complete the main clause of this **Type 2 hypothetical 'si' sentence** with the **conditional** of **${mainInf}** (*${PERSON_LABEL[person]}*):\n\n*Si ${row.ra[person]} la oportunidad, _______ (${mainInf}) sin dudarlo.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: condForm },
        traps: [
          {
            spec: { type: "text", accept: [futTrap] },
            feedback: `*${futTrap}* is the simple future (used with Type 1 *Si tengo…*); after imperfect subjunctive *Si ${row.ra[person]}*, pair it with the **conditional** (*${condForm}*)!`,
          },
        ],
        hint: `Pair *Si + imperfect subjunctive (${row.ra[person]})* with the **conditional** (*-ía, -ías, -ía, -íamos, -íais, -ían*).`,
        solution: [
          `*Si ${row.ra[person]}* is imperfect subjunctive, so the consequence clause takes the **conditional**.`,
          `Conditional of **${mainInf}** (*${PERSON_LABEL[person]}*) = **${condForm}**.`,
        ],
      };
    },
  },
  {
    id: "subjunctive-grade9.por-para-and-pronouns",
    topicId: "subjunctive-grade9",
    title: "Mark-Saver Precision: Por vs Para, Confusables & 'Se lo'",
    level: 3,
    guideRef: "pronouns-por-para-ser-estar",
    generate(rng, tier) {
      const pool = tier === 1 ? PRECISION_T1 : PRECISION_T2_T3;
      const it = rng.pick(pool);
      return {
        prompt: it.prompt,
        answer: { type: "text", accept: it.accept, display: it.display },
        traps: it.trap
          ? [
              {
                spec: { type: "text", accept: [it.trap] },
                feedback: it.trapMsg ?? "Check the rule carefully!",
              },
            ]
          : [],
        hint: it.hint,
        solution: it.steps,
      };
    },
  },
];
