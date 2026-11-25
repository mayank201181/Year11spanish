// ---------------------------------------------------------------------------
// Topic registry for Pearson Edexcel IGCSE Spanish (4SP0) — Year 11.
// Covers all 5 Official Edexcel 4SP0 Topic Areas (A–E) + 2 IGCSE Grammar
// Mastery Units for Grade 9 in Paper 1 (Listening), Paper 2 (Reading, Grammar
// Q3c & Writing Q6/Q7), and Paper 3 (Speaking).
// Pure data — safe to import from Node scripts.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** IB / A-Level stretch flag. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which IGCSE year normally teaches this topic (Year 10 vs Year 11). */
  courseYear: 10 | 11;
  /** Teaching order used when ?year=10 is active (1..N). */
  courseOrder: number;
  /** Edexcel 4SP0 syllabus area + assessment objectives. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Home, Study & Work",
  "People, World & Health",
  "IGCSE Grammar Mastery",
];

const S = (id: string, heading: string, covers: string, stretch?: boolean): SectionPlan => ({
  id,
  heading,
  covers,
  ...(stretch ? { stretch } : {}),
});

export const TOPIC_META: TopicMeta[] = [
  // ---------------- STRAND 1: HOME, STUDY & WORK (AREAS A & B) ----------------
  {
    id: "home-and-abroad",
    title: "Area A — Home & Abroad (La vida en casa y en el extranjero)",
    strand: "Home, Study & Work",
    icon: "✈️",
    courseYear: 10,
    courseOrder: 1,
    curriculum: "Edexcel 4SP0 Area A: Regions & towns, accommodation, holidays, transport, weather, Hispanic festivals & directions",
    sections: [
      S(
        "regions-and-towns",
        "Regions, towns & describing where you live",
        "está situado/a en el norte/sur/la costa; vivir en las afueras / el centro / el campo; lo mejor y lo peor de mi región es que…; tan + adj + como, más/menos… que; ser vs estar for town character vs geographical location; Singapore vs Hispanic cities."
      ),
      S(
        "holidays-and-accommodation",
        "Holidays, accommodation & resolving problems",
        "el alojamiento (un hotel de cinco estrellas, un albergue juvenil, una pensión, un parador, un apartamento turístico); reservar con antelación, pensión completa / media pensión; hotel complaints in Preterite & Imperfect (el aire acondicionado no funcionaba, la habitación estaba sucia, no había toallas, quiero cambiar de habitación)."
      ),
      S(
        "transport-and-directions",
        "Transport, travel & polite directions",
        "un billete sencillo / de ida y vuelta, el andén, la vía, hacer transbordo, perder el vuelo/tren, llevar retraso, facturar el equipaje; asking & giving directions in tú and polite usted forms (siga todo recto, gire/tuerza a la segunda a la derecha, cruce el puente); acabar de + infinitive."
      ),
      S(
        "weather-and-climate",
        "Weather & climate across three time frames",
        "Present (hace calor/viento, llueve, nieva, está despejado/nublado, hay tormenta/niebla), Preterite events (hizo un tiempo horrible, llovió a cántaros, hubo relámpagos), Imperfect background (hacía sol cuando llegamos), Future forecasts (habrá chubascos, hará buen tiempo); trap: hace mucho calor (never muy calor)."
      ),
      S(
        "festivals-and-customs",
        "Hispanic festivals, traditions & passive 'se'",
        "Las Fallas (Valencia), La Tomatina (Buñol), San Fermín (Pamplona), El Día de los Muertos (México), Semana Santa; impersonal/passive se (se celebra, se queman monumentos, se lanzan tomates, se visten de…); narrating a festival visit across past, present & future.",
        true
      ),
    ],
  },
  {
    id: "education-and-employment",
    title: "Area B — Education & Employment (La educación y el trabajo)",
    strand: "Home, Study & Work",
    icon: "🎓",
    courseYear: 11,
    courseOrder: 5,
    curriculum: "Edexcel 4SP0 Area B: School life/rules, post-16 & university plans, part-time jobs, work experience & future careers",
    sections: [
      S(
        "school-life-and-facilities",
        "School subjects, facilities & superlative comparisons",
        "las asignaturas obligatorias y optativas, el horario, las instalaciones (el laboratorio, el salón de actos, la biblioteca, las pistas deportivas); el/la más/menos… de, mejor/peor que; aprobar vs suspender un examen; repasar para los exámenes IGCSE."
      ),
      S(
        "school-rules-and-pressure",
        "School rules, uniform debates & academic pressure",
        "impersonal obligation & prohibition: se debe, hay que, tenemos que, está prohibido + infinitive, no se permite + infinitive (never 'para' or gerund); pros & cons of el uniforme escolar; el acoso escolar (bullying) and exam pressure; es justo / injusto que + subjunctive."
      ),
      S(
        "post-16-and-university",
        "Post-16 choices, gap years & university",
        "seguir estudiando el bachillerato / el IB, hacer formación profesional, solicitar una plaza en la universidad, licenciarse en…, tomarse un año sabático (gap year); future plans with ir a + inf, el futuro simple (estudiaré), espero / tengo la intención de + inf, cuando termine mis exámenes + subjunctive."
      ),
      S(
        "part-time-jobs-and-work-experience",
        "Part-time jobs & narrating work experience",
        "trabajar a tiempo parcial (de cajero/a, camarero/a, canguro, dependiente/a), ganar dinero, ahorrar, adquirir experiencia; las prácticas laborales — combining Imperfect (mi jefe era amable, trabajaba ocho horas) with Preterite (aprendí mucho, atendí a los clientes, el último día hice…)."
      ),
      S(
        "careers-and-interviews",
        "Future careers, CVs & job interviews",
        "professions WITHOUT un/una after ser (soy médico, quiero ser abogada — unless modified: una abogada excelente); cualidades personales (trabajador, organizado, puntual, bilingüe), el currículum, una entrevista de trabajo, un sueldo bien pagado; quisiera / me gustaría trabajar en…",
        true
      ),
    ],
  },

  // ------------- STRAND 2: PEOPLE, WORLD & HEALTH (AREAS C, D & E) -------------
  {
    id: "personal-life-relationships",
    title: "Area C — Personal Life & Relationships (La vida personal y las relaciones)",
    strand: "People, World & Health",
    icon: "🤝",
    courseYear: 10,
    courseOrder: 2,
    curriculum: "Edexcel 4SP0 Area C: Family dynamics, marriage & partnerships, peer pressure, childhood memories in Imperfect & role models",
    sections: [
      S(
        "family-and-descriptions",
        "Family dynamics, character & reciprocal verbs",
        "llevarse bien/mal con, parecerse a, pelearse, discutir, apoyar, confiar en (not confiar a); physical & character adjectives (comprensivo, cariñoso, terco, egoísta, maduro, hablador/a); tener X años (never ser X años)."
      ),
      S(
        "marriage-and-partnerships",
        "Marriage, partnerships & modern family structures",
        "el matrimonio, casarse, la boda, la pareja, convivir, separarse, divorciarse, el estado civil, una familia monoparental; debating marriage vs independence (en mi opinión el matrimonio ya no es imprescindible; prefiero independizarme antes de casarme)."
      ),
      S(
        "friends-and-peer-pressure",
        "True friendship, loyalty & peer pressure",
        "un buen amigo debe saber escuchar / guardar secretos; la presión del grupo (peer pressure), influir en los jóvenes, sentirse aislado/a; aconsejar, ayudar a superar problemas; un amigo que me apoye (relative + subjunctive for hypothetical ideal)."
      ),
      S(
        "childhood-memories-imperfect",
        "Childhood memories & the generation gap",
        "cuando era niño/a / más joven, de pequeño/a, en aquella época; solía + infinitive (used to) and Imperfect tense (-aba / -ía, era, iba, veía); contrasting past & present (antes pasábamos horas jugando fuera, mientras que hoy en día los jóvenes están pegados a las pantallas)."
      ),
      S(
        "role-models",
        "Role models & people who inspire us",
        "un modelo a seguir / un buen ejemplo, admirar a (personal 'a' before a specific person!), luchar por los derechos humanos, recaudar fondos, superar obstáculos, lograr el éxito; combining Present admiration (admiro a…) with Preterite achievements (ganó, fundó, cambió…).",
        true
      ),
    ],
  },
  {
    id: "world-around-us",
    title: "Area D — The World Around Us (El mundo que nos rodea)",
    strand: "People, World & Health",
    icon: "🌍",
    courseYear: 11,
    courseOrder: 6,
    curriculum: "Edexcel 4SP0 Area D: Climate change, pollution, sustainability, global social issues, volunteering & digital media",
    sections: [
      S(
        "climate-and-pollution",
        "Climate change, global warming & environmental threats",
        "el cambio climático, el calentamiento global, el efecto invernadero, la capa de ozono, la deforestación, la sequía, las inundaciones, los combustibles fósiles, la contaminación del aire / del agua; Greek-origin masculine -ma nouns (el problema, el clima, el planeta, el sistema, el tema!)."
      ),
      S(
        "sustainability-and-action",
        "Recycling, renewable energy & eco-solutions",
        "las energías renovables (solar, eólica), reciclar vidrio/papel/plástico, reutilizar, apagar las luces, desenchufar los aparatos, usar el transporte público, ahorrar agua; conditional advice (deberíamos + inf, se debería + inf, habría que + inf) & es urgente que + subjunctive."
      ),
      S(
        "global-and-social-issues",
        "Poverty, homelessness & global inequality",
        "la pobreza, el hambre, los sin techo (homeless people), el paro / el desempleo, la desigualdad, la delincuencia, el comercio justo (fair trade); lo más preocupante es que…, me preocupa(n) mucho…"
      ),
      S(
        "charity-and-volunteering",
        "Volunteering, charities & community action",
        "hacer trabajo voluntario, una organización benéfica / una ONG, recaudar fondos, donar ropa/dinero, un comedor social, apadrinar, ayudar a los necesitados; narrating past charity events & future volunteering plans."
      ),
      S(
        "digital-media-and-tech",
        "Digital media & technology — benefits vs risks",
        "las redes sociales, compartir contenidos, descargar aplicaciones, estar enganchado/a al móvil, el ciberacoso, el robo de identidad, las noticias falsas; weighing pros & cons (por un lado… por otro lado…, una ventaja es que… sin embargo el peligro es que…).",
        true
      ),
    ],
  },
  {
    id: "social-fitness-health",
    title: "Area E — Social Activities, Fitness & Health (Ocio, deporte y salud)",
    strand: "People, World & Health",
    icon: "🏃",
    courseYear: 10,
    courseOrder: 3,
    curriculum: "Edexcel 4SP0 Area E: Healthy/unhealthy lifestyles, smoking/alcohol/stress, sports, cinema/music/reading & eating out",
    sections: [
      S(
        "healthy-living-and-diet",
        "Healthy vs unhealthy diet & daily habits",
        "llevar una vida sana, seguir una dieta equilibrada, la comida basura / rápida, las grasas, el azúcar, los nutrientes, mantenerse en forma, dormir ocho horas diarias; para + infinitive (para estar en forma, intento…); evitar + infinitive."
      ),
      S(
        "smoking-alcohol-stress",
        "Smoking, alcohol, addictions & managing stress",
        "fumar cigarrillos / vapear, el tabaco, beber alcohol, emborracharse, las drogas blandas/duras, ser perjudicial para la salud, provocar enfermedades, dejar de + infinitive (to quit), aliviar el estrés; aconsejo que no fumes."
      ),
      S(
        "sports-and-events",
        "Sports, duration idioms & major sporting events",
        "jugar al vs hacer vs practicar; duration idioms tested in Edexcel Paper 2: llevar + time + gerund (llevo cinco años jugando al tenis) & desde hace + present tense (juego al tenis desde hace cinco años); los Juegos Olímpicos / un torneo internacional."
      ),
      S(
        "cinema-music-reading",
        "Cinema, music, reading & cultural reviews",
        "los géneros cinematográficos y literarios, la trama (plot), el/la protagonista, la banda sonora, los efectos especiales, actuar, tratar de (la película trata de…); nuanced review adjectives (conmovedor, predecible, decepcionante, inolvidable, entretenido)."
      ),
      S(
        "eating-out-and-complaints",
        "Eating out, ordering & restaurant complaints",
        "el primer plato, el segundo plato, el postre, el menú del día, la propina, pedir la cuenta (pedir = ask for vs preguntar = ask a question); ser vs estar with food (el pescado es sano vs la sopa está fría / el plato está sucio); ¿me puede traer…?",
        true
      ),
    ],
  },

  // ---------------- STRAND 3: IGCSE GRAMMAR MASTERY (GRADE 9) ----------------
  {
    id: "past-future-tenses",
    title: "IGCSE Tense Mastery — Preterite, Imperfect, Perfect, Future & Conditional",
    strand: "IGCSE Grammar Mastery",
    icon: "⏳",
    courseYear: 10,
    courseOrder: 4,
    curriculum: "Edexcel 4SP0 Grammar List & Paper 2 Q3c / Q6 / Q7: Mastering 6 indicative tenses & narrating across 3+ time frames",
    sections: [
      S(
        "preterite-irregs-and-accents",
        "Preterite mastery: accents, spelling shifts & strong stems",
        "Regular accents (-é/-ó vs present -o: hablo vs habló!), -car/-gar/-zar in yo (busqué, llegué, empecé), i→y verbs (leyó, oyeron, construyó), -ir sandal verbs in 3rd person (pidió, durmieron, prefirió), strong unaccented stems (tuve, estuve, hice/hizo, pude, puse, supe, quise, vine, dije, traje, fui)."
      ),
      S(
        "imperfect-and-contrast",
        "Imperfect vs Preterite: camera photo vs video clip",
        "Imperfect endings (-aba / -ía) + the ONLY 3 irregulars (ser → era, ir → iba, ver → veía); Imperfect for habitual past, background weather/time/age/feelings & ongoing action vs Preterite for single completed interrupting action (Mientras caminaba por Madrid, vi a mi amigo)."
      ),
      S(
        "perfect-and-pluperfect",
        "Perfect (he hecho) & Pluperfect (había hecho)",
        "Present of haber (he, has, ha, hemos, habéis, han) / Imperfect of haber (había, habías…) + invariable past participle (-ado / -ido); irregular participles (hecho, visto, escrito, puesto, dicho, vuelto, abierto, roto, muerto, descubierto); never split haber and the participle!"
      ),
      S(
        "simple-future-and-conditional",
        "Simple Future (hablaré) & Conditional (hablaría)",
        "Infinitive + future endings (-é, -ás, -á, -emos, -éis, -án — accents on ALL except nosotros!) & conditional endings (-ía, -ías, -ía, -íamos, -íais, -ían); the 12 shared irregular stems (tendr-, pondr-, saldr-, vendr-, podr-, sabr-, habr-, querr-, cabr-, valdr-, har-, dir-)."
      ),
      S(
        "grade9-verbal-idioms",
        "Grade-9 verbal idioms & 3-time-frame architecture",
        "acabar de + inf (to have just…), soler + inf (to usually… / solía = used to), llevar + time + gerund, seguir/continuar + gerund, volver a + inf (to do again), al + inf (upon -ing), antes de / después de + inf; building top-band 130–150 word Paper 2 Q7 essays across past, present, future & conditional.",
        true
      ),
    ],
  },
  {
    id: "subjunctive-grade9",
    title: "Grade-9 Structures — Subjunctive, Si Clauses, Pronouns & Idioms",
    strand: "IGCSE Grammar Mastery",
    icon: "🏆",
    courseYear: 11,
    courseOrder: 7,
    curriculum: "Edexcel 4SP0 Top-Band Structures: Present Subjunctive, Imperfect Subjunctive 'Si' Clauses, Pronouns & Confusable Pairs",
    sections: [
      S(
        "forming-present-subjunctive",
        "Forming the Present Subjunctive: Yo-Flip & DISHES",
        "3-step rule: take present yo (tengo, hago, salgo, conozco, pido) → drop -o → add opposite endings (-ar: -e, -es, -e, -emos, -éis, -en; -er/-ir: -a, -as, -a, -amos, -áis, -an); -car/-gar/-zar spelling shifts across all persons (busque, llegue, empiece); DISHES irregulars (dé, vaya, sea, haya, esté, sepa)."
      ),
      S(
        "weirdo-and-impersonal",
        "WEIRDO triggers, Ojalá & negative opinions",
        "Wishes/Will (quiero que, espero que), Emotions (me alegra que), Impersonal expressions (es imprescindible / importante / necesario / mejor / una lástima que), Recommendations (recomiendo / aconsejo que), Doubt/Denial (dudo que, no creo que, no pienso que vs creo que + indicative!), Ojalá (que)."
      ),
      S(
        "cuando-and-time-clauses",
        "Future 'Cuando' & purpose conjunctions (para que, sin que)",
        "cuando + subjunctive for future events (Cuando tenga dieciocho años, iré a la universidad; En cuanto termine mis exámenes…) vs cuando + indicative for habitual/past; always-subjunctive conjunctions (para que, a fin de que, sin que, antes de que, a menos que); aunque + indicative (fact) vs subjunctive (even if)."
      ),
      S(
        "si-clauses-and-imperfect-subj",
        "Grade-9 'Si' Clauses: Si tuviera… haría…",
        "Type 1 real condition: Si + present indicative → future/imperative (Si tengo tiempo, iré — NEVER si + present subjunctive!); Type 2 hypothetical Grade-9 gold: Si + imperfect subjunctive (-ra) → conditional (Si tuviera más dinero, viajaría por Sudamérica; Si fuera el director, cambiaría…; Si hubiera menos tráfico…)."
      ),
      S(
        "pronouns-por-para-ser-estar",
        "Precision Mark-Savers: Por vs Para, Ser vs Estar & Object Pronouns",
        "por (cause, duration, exchange, means, through) vs para (purpose/in order to, recipient, destination, deadline, opinion 'para mí'); ser (DOCTOR) vs estar (PLACE); saber (facts/how to) vs conocer (people/places); pedir vs preguntar; direct (lo/la/los/las) & indirect (me/te/le/nos/os/les → se lo) pronouns.",
        true
      ),
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
