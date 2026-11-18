import type { Drill, Rng } from "./types.ts";
import { acceptedForms, conjugate, gerund, type Person } from "../spanish/verbs.ts";

// ---------------------------------------------------------------------------
// Topic 5: Area E — Social Activities, Fitness & Health (social-fitness-health)
// 5 seeded 3-tier drills with >= 25 distinct prompts per tier.
// ---------------------------------------------------------------------------

interface HabitFrame {
  prefix: string;
  inf: string;
  reflexivePronoun?: string;
  subjectLabel: string;
  tail: string;
  wrongGerund: string;
  english: string;
}

const HABIT_FRAMES_T1: readonly HabitFrame[] = [
  { prefix: "Para", inf: "estar", subjectLabel: "yo", tail: "en forma, corro cada mañana.", wrongGerund: "estando", english: "In order to be fit" },
  { prefix: "Para", inf: "dormir", subjectLabel: "yo", tail: "ocho horas, apago el móvil a las diez.", wrongGerund: "durmiendo", english: "In order to sleep eight hours" },
  { prefix: "Para", inf: "llevar", subjectLabel: "tú", tail: "una vida sana, desayunas fruta.", wrongGerund: "llevando", english: "In order to lead a healthy life" },
  { prefix: "En vez de", inf: "comer", subjectLabel: "yo", tail: "comida basura, cocino en casa.", wrongGerund: "comiendo", english: "Instead of eating junk food" },
  { prefix: "En vez de", inf: "beber", subjectLabel: "ella", tail: "refrescos azucarados, toma agua.", wrongGerund: "bebiendo", english: "Instead of drinking sugary fizzy drinks" },
  { prefix: "En vez de", inf: "fumar", subjectLabel: "ellos", tail: "cigarrillos, hacen deporte.", wrongGerund: "fumando", english: "Instead of smoking cigarettes" },
  { prefix: "Sin", inf: "desayunar", subjectLabel: "tú", tail: "bien, no puedes concentrarte en clase.", wrongGerund: "desayunando", english: "Without having breakfast" },
  { prefix: "Sin", inf: "entrenar", subjectLabel: "nosotros", tail: "a diario, es difícil ganar el torneo.", wrongGerund: "entrenando", english: "Without training daily" },
  { prefix: "Antes de", inf: "cenar", subjectLabel: "yo", tail: "pescado, tomo una ensalada verde.", wrongGerund: "cenando", english: "Before having dinner" },
  { prefix: "Antes de", inf: "correr", subjectLabel: "él", tail: "diez kilómetros, bebe agua mineral.", wrongGerund: "corriendo", english: "Before running ten kilometres" },
  { prefix: "Después de", inf: "nadar", subjectLabel: "nosotros", tail: "en la piscina, comemos fruta fresca.", wrongGerund: "nadando", english: "After swimming in the pool" },
  { prefix: "Después de", inf: "almorzar", subjectLabel: "yo", tail: "verduras, descanso veinte minutos.", wrongGerund: "almorzando", english: "After having lunch" },
  { prefix: "A mi hermana le encanta", inf: "cocinar", subjectLabel: "ella", tail: "platos saludables los domingos.", wrongGerund: "cocinando", english: "My sister loves cooking" },
  { prefix: "A nosotros nos gusta", inf: "pasear", subjectLabel: "nosotros", tail: "al aire libre después del instituto.", wrongGerund: "paseando", english: "We like strolling" },
  { prefix: "Siempre intento evitar", inf: "tomar", subjectLabel: "yo", tail: "demasiado azúcar por la noche.", wrongGerund: "tomando", english: "I always try to avoid having" },
  { prefix: "Los médicos recomiendan evitar", inf: "consumir", subjectLabel: "ellos", tail: "grasas saturadas todos los días.", wrongGerund: "consumiendo", english: "Doctors recommend avoiding consuming" },
  { prefix: "Mi tío decidió dejar de", inf: "vapear", subjectLabel: "él", tail: "hace seis meses.", wrongGerund: "vapeando", english: "My uncle decided to quit vaping" },
  { prefix: "Mi padre quiere dejar de", inf: "fumar", subjectLabel: "él", tail: "porque es perjudicial para los pulmones.", wrongGerund: "fumando", english: "My father wants to quit smoking" },
  { prefix: "Para", inf: "mejorar", subjectLabel: "yo", tail: "mi resistencia, subo las escaleras.", wrongGerund: "mejorando", english: "In order to improve my stamina" },
  { prefix: "En vez de", inf: "pasar", subjectLabel: "nosotros", tail: "horas frente a la tele, jugamos al tenis.", wrongGerund: "pasando", english: "Instead of spending hours in front of the TV" },
];

const REFLEXIVE_PREP_ITEMS: ReadonlyArray<{
  prep: string;
  base: string;
  pron: string;
  subjectClue: string;
  tail: string;
  wrongSe: string;
}> = [
  { prep: "Para", base: "mantener", pron: "me", subjectClue: "(yo)", tail: "en forma, nado tres veces por semana.", wrongSe: "mantenerse" },
  { prep: "Para", base: "mantener", pron: "nos", subjectClue: "(nosotros)", tail: "sanos, seguimos una dieta equilibrada.", wrongSe: "mantenerse" },
  { prep: "Para", base: "mantener", pron: "te", subjectClue: "(tú)", tail: "activo, debes caminar al instituto.", wrongSe: "mantenerse" },
  { prep: "Para", base: "relajar", pron: "me", subjectClue: "(yo)", tail: "después de estudiar, escucho música clásica.", wrongSe: "relajarse" },
  { prep: "Para", base: "relajar", pron: "nos", subjectClue: "(nosotros)", tail: "el domingo, paseamos por la costa.", wrongSe: "relajarse" },
  { prep: "Antes de", base: "acostar", pron: "me", subjectClue: "(yo)", tail: "temprano, leo un capítulo en papel.", wrongSe: "acostarse" },
  { prep: "Antes de", base: "acostar", pron: "te", subjectClue: "(tú)", tail: "por la noche, apaga las pantallas.", wrongSe: "acostarse" },
  { prep: "Antes de", base: "acostar", pron: "nos", subjectClue: "(nosotros)", tail: "a las diez, tomamos una infusión caliente.", wrongSe: "acostarse" },
  { prep: "Después de", base: "duchar", pron: "me", subjectClue: "(yo)", tail: "con agua tibia, desayuno sin prisa.", wrongSe: "ducharse" },
  { prep: "Después de", base: "levantar", pron: "me", subjectClue: "(yo)", tail: "a las siete, estiro la espalda.", wrongSe: "levantarse" },
  { prep: "Después de", base: "levantar", pron: "nos", subjectClue: "(nosotros)", tail: "los sábados, salimos a correr.", wrongSe: "levantarse" },
  { prep: "En vez de", base: "quedar", pron: "me", subjectClue: "(yo)", tail: "en el sofá, voy al polideportivo.", wrongSe: "quedarse" },
  { prep: "En vez de", base: "quedar", pron: "te", subjectClue: "(tú)", tail: "en casa todo el día, ven a jugar al tenis.", wrongSe: "quedarse" },
  { prep: "En vez de", base: "emborrachar", pron: "se", subjectClue: "(ellos)", tail: "en la fiesta, prefirieron bailar toda la noche.", wrongSe: "emborracharme" },
  { prep: "Sin", base: "lesionar", pron: "se", subjectClue: "(él)", tail: "nunca, completó cinco maratones.", wrongSe: "lesionarme" },
  { prep: "Para no", base: "resfriar", pron: "me", subjectClue: "(yo)", tail: "en invierno, tomo mucha vitamina C.", wrongSe: "resfriarse" },
  { prep: "Para no", base: "agotar", pron: "te", subjectClue: "(tú)", tail: "antes de los exámenes, descansa bien.", wrongSe: "agotarse" },
  { prep: "Antes de", base: "entrenar", pron: "", subjectClue: "(ellos)", tail: "en la cancha, calientan diez minutos.", wrongSe: "entrenando" },
];

// Drill 2 data: Reverse verbs (doler, gustar, encantar, hacer falta)
interface ReverseTarget {
  noun: string;
  plural: boolean;
  en: string;
}

const BODY_PARTS: readonly ReverseTarget[] = [
  { noun: "la cabeza", plural: false, en: "head" },
  { noun: "la garganta", plural: false, en: "throat" },
  { noun: "el estómago", plural: false, en: "stomach" },
  { noun: "la espalda", plural: false, en: "back" },
  { noun: "la rodilla derecha", plural: false, en: "right knee" },
  { noun: "el tobillo", plural: false, en: "ankle" },
  { noun: "las muelas", plural: true, en: "back teeth / molars" },
  { noun: "los ojos", plural: true, en: "eyes" },
  { noun: "los oídos", plural: true, en: "inner ears" },
  { noun: "las piernas", plural: true, en: "legs" },
  { noun: "los pulmones", plural: true, en: "lungs" },
  { noun: "los pies", plural: true, en: "feet" },
];

const LEISURE_TARGETS: readonly ReverseTarget[] = [
  { noun: "el baloncesto", plural: false, en: "basketball" },
  { noun: "la comida casera", plural: false, en: "homemade food" },
  { noun: "hacer natación", plural: false, en: "going swimming" },
  { noun: "tocar la guitarra", plural: false, en: "playing the guitar" },
  { noun: "las películas de ciencia ficción", plural: true, en: "sci-fi films" },
  { noun: "los conciertos en directo", plural: true, en: "live concerts" },
  { noun: "las novelas policíacas", plural: true, en: "crime novels" },
  { noun: "los deportes acuáticos", plural: true, en: "water sports" },
];

const DATIVES: ReadonlyArray<{ aPhrase: string; iop: string; label: string }> = [
  { aPhrase: "A mí", iop: "me", label: "yo → me" },
  { aPhrase: "A ti", iop: "te", label: "tú → te" },
  { aPhrase: "A mi hermano", iop: "le", label: "él → le" },
  { aPhrase: "A mi abuela", iop: "le", label: "ella → le" },
  { aPhrase: "A nosotros", iop: "nos", label: "nosotros → nos" },
  { aPhrase: "A los atletas", iop: "les", label: "ellos → les" },
];

// Drill 3 data: Sports verbs (jugar a / hacer / tocar) + Duration idioms
interface SportEntry {
  kind: "jugar" | "hacer" | "tocar";
  phraseAfterVerb: string;
  prepWord?: string;
  en: string;
}

const SPORT_ENTRIES: readonly SportEntry[] = [
  { kind: "jugar", phraseAfterVerb: "al tenis", prepWord: "al", en: "play tennis" },
  { kind: "jugar", phraseAfterVerb: "al fútbol", prepWord: "al", en: "play football" },
  { kind: "jugar", phraseAfterVerb: "al baloncesto", prepWord: "al", en: "play basketball" },
  { kind: "jugar", phraseAfterVerb: "al voleibol", prepWord: "al", en: "play volleyball" },
  { kind: "jugar", phraseAfterVerb: "al bádminton", prepWord: "al", en: "play badminton" },
  { kind: "jugar", phraseAfterVerb: "a las cartas", prepWord: "a", en: "play cards" },
  { kind: "hacer", phraseAfterVerb: "natación", en: "go swimming" },
  { kind: "hacer", phraseAfterVerb: "atletismo", en: "do athletics" },
  { kind: "hacer", phraseAfterVerb: "artes marciales", en: "do martial arts" },
  { kind: "hacer", phraseAfterVerb: "ciclismo", en: "do cycling" },
  { kind: "hacer", phraseAfterVerb: "gimnasia", en: "do gymnastics" },
  { kind: "hacer", phraseAfterVerb: "piragüismo", en: "go canoeing" },
  { kind: "tocar", phraseAfterVerb: "la guitarra", en: "play the guitar" },
  { kind: "tocar", phraseAfterVerb: "el piano", en: "play the piano" },
  { kind: "tocar", phraseAfterVerb: "el violín", en: "play the violin" },
  { kind: "tocar", phraseAfterVerb: "la batería", en: "play the drums" },
  { kind: "tocar", phraseAfterVerb: "la flauta", en: "play the flute" },
];

// Drill 4 data: Cinema, music & reading reviews
const REVIEW_VERBS: ReadonlyArray<{ inf: string; person: Person; subject: string; obj: string }> = [
  { inf: "ver", person: "yo", subject: "Anoche yo", obj: "un documental apasionante sobre el océano." },
  { inf: "ver", person: "tú", subject: "¿El viernes pasado tú", obj: "el estreno de ciencia ficción?" },
  { inf: "ver", person: "él", subject: "El sábado mi primo", obj: "una película de terror en el cine." },
  { inf: "ver", person: "nosotros", subject: "El fin de semana pasado nosotros", obj: "una comedia romántica muy entretenida." },
  { inf: "ver", person: "ellos", subject: "Mis padres", obj: "las noticias culturales en televisión." },
  { inf: "leer", person: "yo", subject: "Durante las vacaciones yo", obj: "dos novelas policíacas en papel." },
  { inf: "leer", person: "tú", subject: "¿En verano tú", obj: "la crítica de la obra en el periódico?" },
  { inf: "leer", person: "él", subject: "Mi hermana mayor", obj: "la biografía del director en tres días." },
  { inf: "leer", person: "nosotros", subject: "En clase de literatura nosotros", obj: "un poema conmovedor." },
  { inf: "leer", person: "ellos", subject: "Los alumnos de mi clase", obj: "una obra de teatro española." },
  { inf: "oír", person: "yo", subject: "En la radio esta mañana yo", obj: "la nueva canción del grupo." },
  { inf: "oír", person: "él", subject: "Desde la primera fila ella", obj: "cada nota de la banda sonora." },
  { inf: "oír", person: "nosotros", subject: "Desde el balcón nosotros", obj: "los aplausos del público." },
  { inf: "oír", person: "ellos", subject: "Los aficionados", obj: "el concierto en directo desde la plaza." },
  { inf: "tocar", person: "yo", subject: "En el festival escolar yo", obj: "el violín frente a doscientas personas." },
  { inf: "tocar", person: "él", subject: "La solista", obj: "el piano con muchísima emoción." },
  { inf: "tocar", person: "ellos", subject: "Los músicos invitados", obj: "tres canciones inolvidables." },
  { inf: "preferir", person: "yo", subject: "Ayer por la tarde yo", obj: "quedarme leyendo en el jardín." },
  { inf: "preferir", person: "él", subject: "Mi mejor amigo", obj: "sacar un libro de la biblioteca." },
  { inf: "preferir", person: "ellos", subject: "Mis abuelos", obj: "ir al teatro clásico en vez del cine." },
  { inf: "descargar", person: "yo", subject: "Antes del vuelo yo", obj: "tres audiolibros en mi móvil." },
  { inf: "sacar", person: "yo", subject: "Después del concierto yo", obj: "una foto con el cantante." },
  { inf: "escribir", person: "él", subject: "La autora chilena", obj: "una trilogía inolvidable." },
  { inf: "asistir" in ({} as Record<string, never>) ? "ver" : "bailar", person: "nosotros", subject: "En el concierto nosotros", obj: "al ritmo de la batería." },
];

const REVIEW_VOCAB_ITEMS: ReadonlyArray<{ clue: string; es: string[]; display: string; wrong?: string; wrongHint?: string }> = [
  { clue: "the soundtrack (include **la**)", es: ["la banda sonora"], display: "la banda sonora" },
  { clue: "the plot (of a film/novel — 5-letter noun with **la**)", es: ["la trama"], display: "la trama" },
  { clue: "the special effects (include **los**)", es: ["los efectos especiales"], display: "los efectos especiales" },
  { clue: "a live concert (include **el**)", es: ["el concierto en directo", "un concierto en directo"], display: "el concierto en directo" },
  { clue: "a horror film (include **la**)", es: ["la película de terror", "una película de terror"], display: "la película de terror" },
  { clue: "science fiction (include **la**)", es: ["la ciencia ficción"], display: "la ciencia ficción" },
  { clue: "disappointing (adjective — beware the false friend!)", es: ["decepcionante"], display: "decepcionante" },
  { clue: "unforgettable (adjective)", es: ["inolvidable"], display: "inolvidable" },
  { clue: "predictable (adjective)", es: ["predecible"], display: "predecible" },
  { clue: "moving / emotionally touching (masculine singular adjective)", es: ["conmovedor"], display: "conmovedor" },
  { clue: "is about (*La novela _______ _______ un misterio* — two words)", es: ["trata de"], display: "trata de", wrong: "es sobre", wrongHint: "Use idiomatic **trata de** rather than literal *es sobre*!" },
];

// Drill 5 data: Restaurant pedir vs preguntar & ser vs estar
const RESTAURANT_SER_ESTAR: ReadonlyArray<{
  sentence: string;
  ans: string[];
  display: string;
  trap: string;
  why: string;
}> = [
  { sentence: "Perdone, camarero, no puedo tomar esta sopa porque _______ fría.", ans: ["está", "ella está"], display: "está", trap: "es", why: "Soup being cold right now is an unwanted temporary state (**estar**)." },
  { sentence: "El gazpacho andaluz tradicional _______ una sopa fría de tomate.", ans: ["es", "él es"], display: "es", trap: "está", why: "Defining what gazpacho inherently is uses **ser**." },
  { sentence: "¡Qué maravilla! La paella de marisco _______ riquísima esta noche.", ans: ["está", "ella está"], display: "está", trap: "es", why: "With **estar**, *rico/riquísimo* means 'tastes delicious right now' (*ser rico* = wealthy!)." },
  { sentence: "El dueño de esta cadena de restaurantes _______ multimillonario y muy rico.", ans: ["es", "él es"], display: "es", trap: "está", why: "Wealth/identity uses **ser** (*es muy rico*)." },
  { sentence: "Disculpe, ¿me trae otro tenedor? Es que este _______ sucio.", ans: ["está", "él está"], display: "está", trap: "es", why: "Cleanliness right now (*sucio / limpio*) is a temporary condition (**estar**)." },
  { sentence: "No comas ese yogur: huele mal y _______ pasado de fecha.", ans: ["está", "él está"], display: "está", trap: "es", why: "Resultant state (*pasado / roto*) takes **estar**." },
  { sentence: "La dieta mediterránea _______ muy saludable para el corazón.", ans: ["es", "ella es"], display: "es", trap: "está", why: "Inherent nutritional quality uses **ser** (*es saludable*)." },
  { sentence: "No pudimos terminar los filetes porque _______ demasiado salados.", ans: ["estaban", "ellos estaban"], display: "estaban", trap: "eran", why: "How that specific meal tasted that night (imperfect state) uses **estaban**." },
  { sentence: "Ten cuidado con ese vaso: _______ roto en el borde.", ans: ["está", "él está"], display: "está", trap: "es", why: "A broken state (*está roto*) always takes **estar**." },
  { sentence: "Mi hermana no puede pedir merluza porque _______ vegetariana.", ans: ["es", "ella es"], display: "es", trap: "está", why: "Identity / dietary category uses **ser** (*es vegetariana*)." },
  { sentence: "Los chiles habaneros mexicanos _______ extremadamente picantes por naturaleza.", ans: ["son", "ellos son"], display: "son", trap: "están", why: "Permanent characteristic by nature uses **ser** (*son picantes*)." },
  { sentence: "Ayer las patatas fritas _______ blandas y frías cuando llegaron.", ans: ["estaban", "ellas estaban"], display: "estaban", trap: "eran", why: "Temporary food condition on arrival in the past uses **estaban**." },
];

const RESTAURANT_PEDIR_PREGUNTAR: ReadonlyArray<{
  sentence: string;
  tenseNote: string;
  ans: string[];
  display: string;
  trap: string;
  why: string;
}> = [
  { sentence: "Al terminar el postre, mi padre _______ la cuenta al camarero.", tenseNote: "preterite, *él*", ans: ["pidió", "él pidió"], display: "pidió", trap: "preguntó", why: "Asking for/ordering an item (*la cuenta*) uses **pedir** (*e→i* preterite **pidió**, no *por*!)." },
  { sentence: "Como soy alérgico, le _______ a la camarera si el plato llevaba nueces.", tenseNote: "preterite, *yo*", ans: ["pregunté", "yo pregunté"], display: "pregunté", trap: "pedí", why: "Asking a *si / qué / cuánto* question for information uses **preguntar** (**pregunté**)." },
  { sentence: "De primer plato yo _______ una ensalada mixta sin atún.", tenseNote: "preterite, *yo*", ans: ["pedí", "yo pedí"], display: "pedí", trap: "pregunté", why: "Ordering food from a menu uses **pedir** (**pedí**)." },
  { sentence: "Mis amigos _______ dos raciones de calamares para compartir.", tenseNote: "preterite, *ellos*", ans: ["pidieron", "ellos pidieron"], display: "pidieron", trap: "pedieron", why: "Ordering dishes uses **pedir** with its *-ir* sandal shift *e→i* in 3rd person: **pidieron**." },
  { sentence: "Antes de sentarnos, mis padres _______ cuánto tiempo tardaría la paella.", tenseNote: "preterite, *ellos*", ans: ["preguntaron", "ellos preguntaron"], display: "preguntaron", trap: "pidieron", why: "Enquiring 'how long it would take' (*cuánto tiempo...*) is a question → **preguntaron**." },
  { sentence: "Siempre que voy a ese café, _______ el menú del día porque es económico.", tenseNote: "present, *yo*", ans: ["pido", "yo pido"], display: "pido", trap: "pregunto", why: "Ordering *el menú del día* uses **pedir** (*e→i* boot → **pido**)." },
  { sentence: "Perdone, quería _______ a qué hora cierra la cocina esta noche.", tenseNote: "infinitive", ans: ["preguntar"], display: "preguntar", trap: "pedir", why: "Asking 'what time the kitchen closes' is a question for information → **preguntar**." },
  { sentence: "Como faltaba un cuchillo, tuvimos que _______ otro cubierto limpio.", tenseNote: "infinitive", ans: ["pedir"], display: "pedir", trap: "preguntar", why: "Requesting an object (*otro cubierto*) uses **pedir** (with no *por*)." },
  { sentence: "Mi madre siempre _______ agua sin gas cuando cenamos fuera.", tenseNote: "present, *ella*", ans: ["pide", "ella pide"], display: "pide", trap: "pregunta", why: "Ordering a drink uses **pedir** (*e→i* boot → **pide**)." },
  { sentence: "El turista le _______ al encargado dónde estaban los servicios.", tenseNote: "preterite, *él*", ans: ["preguntó", "él preguntó"], display: "preguntó", trap: "pidió", why: "Asking *dónde...* ('where the toilets were') is a question → **preguntó**." },
];

export const drills: Drill[] = [
  {
    id: "social-fitness-health.healthy-idioms",
    topicId: "social-fitness-health",
    title: "Healthy Lifestyle Infinitives, Soler & Attached Pronouns",
    level: 1,
    guideRef: "healthy-living-and-diet",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const f = rng.pick(HABIT_FRAMES_T1);
        return {
          prompt: `Complete with the accurate non-finite form of **${f.inf}** (*${f.english}*):\n\n*${f.prefix} _______ ${f.tail}*\n\n(Write ONLY the single Spanish verb word.)`,
          answer: { type: "text", accept: [f.inf], display: f.inf },
          traps: [
            {
              spec: { type: "text", accept: [f.wrongGerund] },
              feedback: `Never copy the English *-ing* gerund after prepositions or preference/control verbs! Use the infinitive **${f.inf}**.`,
            },
          ],
          hint: "Look right before the gap: prepositions (*para, sin, en vez de, antes de*) and verbs like *evitar / dejar de / encantar* ALWAYS take the **infinitive**.",
          solution: [
            `In Spanish, prepositions and control/preference verbs must be followed by the **infinitive**, never *-ndo*.`,
            `Correct form: **${f.inf}**.`,
          ],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.45)) {
          const persons: Person[] = ["yo", "tú", "él", "nosotros", "ellos"];
          const p = rng.pick(persons);
          const verbs = ["desayunar fruta", "beber dos litros de agua", "dormir ocho horas", "evitar las grasas", "cocinar verduras", "correr por el parque"];
          const action = rng.pick(verbs);
          const tense = rng.bool(0.65) ? "present" : "imperfect";
          const ans = acceptedForms("soler", tense, p);
          const canon = conjugate("soler", tense, p);
          const timeMarker = tense === "present" ? "Normalmente" : "De pequeño/a";
          return {
            prompt: `Complete with the **${tense}** form of **soler** (*${p}*):\n\n*${timeMarker}, _______ ${action}.*\n\n(Write ONLY the missing verb.)`,
            answer: { type: "text", accept: ans, display: canon },
            traps:
              tense === "present" && p === "yo"
                ? [{ spec: { type: "text", accept: ["solo"] }, feedback: "*Soler* stem-changes *o → ue* in the present boot: **suelo** (*solo* means 'alone/only')!" }]
                : undefined,
            hint:
              tense === "present"
                ? "*Soler* ('to usually do') is an *o → ue* boot verb in the present (*suelo, sueles, suele, solemos, suelen*)."
                : "In the imperfect ('used to'), *soler* is 100% regular *-er*: *solía, solías, solía, solíamos, solían*.",
            solution: [
              `Conjugate *soler* in the **${tense}** for *${p}*: **${canon}**.`,
              `Notice *soler* is followed directly by the infinitive (*${action}*).`,
            ],
          };
        }
        const f = rng.pick(HABIT_FRAMES_T1);
        return {
          prompt: `Paper 2 Q3c Check — fill the gap with the correct form of **${f.inf}**:\n\n*${f.prefix} _______ ${f.tail}*\n\n(Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [f.inf], display: f.inf },
          traps: [
            {
              spec: { type: "text", accept: [f.wrongGerund] },
              feedback: `Reject the English *-ing* trap! After *${f.prefix.toLowerCase()}*, Spanish requires the infinitive **${f.inf}**.`,
            },
          ],
          hint: "Check the trigger before the gap: prepositions and verbs like *evitar / dejar de* always govern the infinitive.",
          solution: [`After *${f.prefix}*, Spanish requires the infinitive **${f.inf}**.`],
        };
      }

      // Tier 3: Reflexive infinitive attachment after prepositions + subjunctive health advice
      if (rng.bool(0.6)) {
        const r = rng.pick(REFLEXIVE_PREP_ITEMS.filter((x) => x.pron !== ""));
        const target = `${r.base}${r.pron}`;
        return {
          prompt: `Complete with the **infinitive + attached reflexive pronoun** of **${r.base}se** for **${r.subjectClue}**:\n\n*${r.prep} _______ ${r.tail}*\n\n(Write ONLY the single Spanish word.)`,
          answer: { type: "text", accept: [target], display: target },
          traps:
            r.wrongSe !== target
              ? [
                  {
                    spec: { type: "text", accept: [r.wrongSe] },
                    feedback: `Match the attached reflexive pronoun to **${r.subjectClue}** → **${target}**!`,
                  },
                ]
              : undefined,
          hint: `Keep the infinitive *${r.base}* after *${r.prep.toLowerCase()}* and attach the reflexive pronoun matching ${r.subjectClue} (*me / te / se / nos*).`,
          solution: [
            `After the preposition *${r.prep.toLowerCase()}*, keep the infinitive *${r.base}*.`,
            `Attach the reflexive pronoun for ${r.subjectClue}: **${target}**.`,
          ],
        };
      }

      const subjVerbs = ["dormir", "evitar", "comer", "beber", "hacer", "salir", "jugar"] as const;
      const v = rng.pick(subjVerbs);
      const p: Person = rng.pick(["tú", "él", "nosotros", "ellos"]);
      const triggers = ["Es imprescindible que", "El médico aconseja que", "Es fundamental que", "Recomiendo que"];
      const trig = rng.pick(triggers);
      const ans = acceptedForms(v, "subjunctive", p);
      const canon = conjugate(v, "subjunctive", p);
      const ind = conjugate(v, "present", p);
      return {
        prompt: `Grade-9 Health Advice — complete with the **present subjunctive** of **${v}** (*${p}*):\n\n*${trig} _______ más sano esta semana.*\n\n(Write ONLY the missing verb.)`,
        answer: { type: "text", accept: ans, display: canon },
        traps: [
          {
            spec: { type: "text", accept: [ind] },
            feedback: `*${trig}* is a WEIRDO trigger — flip from indicative *${ind}* to present subjunctive **${canon}**!`,
          },
        ],
        hint: `Take the *yo* present stem of *${v}* and add opposite subjunctive endings (mind boot/spelling shifts!).`,
        solution: [
          `*${trig}* triggers the present subjunctive.`,
          `For *${v}* (*${p}*), the present subjunctive is **${canon}**.`,
        ],
      };
    },
  },

  {
    id: "social-fitness-health.doler-gustar",
    topicId: "social-fitness-health",
    title: "Doler, Gustar & Reverse-Verb Agreement",
    level: 1,
    guideRef: "smoking-alcohol-stress",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const dat = rng.pick(DATIVES);
      if (tier === 1) {
        const bp = rng.pick(BODY_PARTS);
        const verb = bp.plural ? "duelen" : "duele";
        const wrong = bp.plural ? "duele" : "duelen";
        return {
          prompt: `Complete with the **present tense** of **doler** (*${bp.en}*):\n\n*${dat.aPhrase} ${dat.iop} _______ ${bp.noun}.*\n\n(Write ONLY **duele** or **duelen**.)`,
          answer: { type: "text", accept: [verb], display: verb },
          traps: [
            {
              spec: { type: "text", accept: [wrong] },
              feedback: `Look to the RIGHT of the gap: *${bp.noun}* is ${bp.plural ? "plural" : "singular"}, so *doler* must be **${verb}**!`,
            },
          ],
          hint: "Draw an arrow to the body part AFTER the gap: singular → *duele*, plural → *duelen*.",
          solution: [
            `The grammatical subject is *${bp.noun}* (${bp.plural ? "plural" : "singular"}).`,
            `Therefore *doler (o→ue)* conjugates as **${verb}**.`,
          ],
        };
      }

      if (tier === 2) {
        const useDoler = rng.bool(0.55);
        const target = useDoler ? rng.pick(BODY_PARTS) : rng.pick(LEISURE_TARGETS);
        const rVerb = useDoler ? "doler" : rng.pick(["gustar", "encantar"]);
        const form =
          rVerb === "doler"
            ? target.plural
              ? "duelen"
              : "duele"
            : rVerb === "gustar"
              ? target.plural
                ? "gustan"
                : "gusta"
              : target.plural
                ? "encantan"
                : "encanta";
        const full = `${dat.iop} ${form}`;
        const wrongNum =
          rVerb === "doler"
            ? target.plural
              ? "duele"
              : "duelen"
            : rVerb === "gustar"
              ? target.plural
                ? "gusta"
                : "gustan"
              : target.plural
                ? "encanta"
                : "encantan";
        return {
          prompt: `Write the **indirect object pronoun + present-tense verb** (*two words*) of **${rVerb}**:\n\n*${dat.aPhrase} _______ _______ ${target.noun}.*\n\n(Write ONLY the two missing Spanish words, e.g. \`me duele\`.)`,
          answer: { type: "text", accept: [full], display: full },
          traps: [
            {
              spec: { type: "text", accept: [`${dat.iop} ${wrongNum}`] },
              feedback: `Good pronoun (*${dat.iop}*), but check *${target.noun}* (${target.plural ? "plural → -n" : "singular / infinitive → no -n"}) → **${full}**!`,
            },
          ],
          hint: `Match the pronoun to *${dat.aPhrase}* (${dat.label}) and match the verb ending to *${target.noun}*.`,
          solution: [
            `*${dat.aPhrase}* requires indirect object pronoun **${dat.iop}**.`,
            `*${target.noun}* is ${target.plural ? "plural" : "singular/infinitive"}, giving **${full}**.`,
          ],
        };
      }

      // Tier 3: Imperfect vs Preterite reverse verbs
      const bp = rng.pick(BODY_PARTS);
      const isImp = rng.bool(0.5);
      const tenseLabel = isImp ? "imperfect (ongoing symptom)" : "preterite (sudden pain)";
      const timeCue = isImp ? "Durante toda la semana pasada," : "Ayer de repente, al levantar la maleta,";
      const verb = isImp ? (bp.plural ? "dolían" : "dolía") : bp.plural ? "dolieron" : "dolió";
      const full = `${dat.iop} ${verb}`;
      return {
        prompt: `Past Pharmacy Precision — write the **indirect pronoun + ${tenseLabel}** (*two words*) of **doler**:\n\n*${timeCue} ${dat.aPhrase.toLowerCase()} _______ _______ ${bp.noun}.*\n\n(Write ONLY the two missing Spanish words.)`,
        answer: { type: "text", accept: [full], display: full },
        traps: !isImp
          ? [
              {
                spec: { type: "text", accept: [`${dat.iop} ${bp.plural ? "dulieron" : "dulió"}`, `${dat.iop} ${bp.plural ? "duelieron" : "duelió"}`] },
                feedback: "*Doler* is an **-er** verb — *-er* boot verbs NEVER stem-change in the preterite! Write **" + full + "**.",
              },
            ]
          : undefined,
        hint: isImp
          ? `Use *${dat.iop}* + imperfect of *doler* (*dolía* for singular, *dolían* for plural).`
          : `Use *${dat.iop}* + preterite of *doler* (*dolió* for singular, *dolieron* for plural — no stem change!).`,
        solution: [
          `Indirect pronoun for *${dat.aPhrase.toLowerCase()}*: **${dat.iop}**.`,
          `${isImp ? "Imperfect" : "Preterite"} matching ${bp.plural ? "plural" : "singular"} *${bp.noun}*: **${verb}** → **${full}**.`,
        ],
      };
    },
  },

  {
    id: "social-fitness-health.sports-verbs",
    topicId: "social-fitness-health",
    title: "Jugar a vs Hacer vs Tocar & Ongoing Duration Idioms",
    level: 2,
    guideRef: "sports-and-events",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const persons: Person[] = ["yo", "tú", "él", "nosotros", "ellos"];
      const p = rng.pick(persons);

      if (tier === 1) {
        const s = rng.pick(SPORT_ENTRIES);
        const ans = acceptedForms(s.kind, "present", p);
        const canon = conjugate(s.kind, "present", p);
        const otherVerb = s.kind === "jugar" ? conjugate("tocar", "present", p) : conjugate("jugar", "present", p);
        return {
          prompt: `Choose the right verb (**jugar**, **hacer**, or **tocar**) and conjugate it in the **present tense** for **${p}** (*to ${s.en}*):\n\n*Los sábados (${p}) _______ ${s.phraseAfterVerb}.*\n\n(Write ONLY the missing conjugated verb.)`,
          answer: { type: "text", accept: ans, display: canon },
          traps: [
            {
              spec: { type: "text", accept: [otherVerb] },
              feedback: `Recall B-A-M: **jugar a** = ball/board games, **hacer** = solo/water/combat sports, **tocar** = musical instruments! Here you need **${s.kind}** → **${canon}**.`,
            },
          ],
          hint: "Ball/racket/card game → *jugar (u→ue)*; non-ball fitness sport → *hacer (yo hago)*; musical instrument → *tocar*.",
          solution: [
            `Activity *${s.phraseAfterVerb}* uses **${s.kind}**.`,
            `In the present tense for *${p}*, **${s.kind}** is **${canon}**.`,
          ],
        };
      }

      if (tier === 2) {
        const s = rng.pick(SPORT_ENTRIES);
        const years = rng.pick(["dos años", "tres años", "cuatro años", "cinco años", "seis meses", "ocho meses"]);
        if (rng.bool(0.55)) {
          // llevar + time + gerund -> write llevar + gerund around time? Pin exact 1-word gerund or llevar form!
          const llevarForm = conjugate("hablar", "present", p).replace(/^habl/, "llev");
          const ger = gerund(s.kind);
          const pair = `${llevarForm} ${ger}`;
          return {
            prompt: `Ongoing Duration (*llevar + time + gerund*) — write the **present form of llevar** (*${p}*) AND the **gerund of ${s.kind}** (*two words separated by a space*):\n\n*(${p}) [1]_______ ${years} [2]_______ ${s.phraseAfterVerb}.*\n\n(Write ONLY \`[1] [2]\`, e.g. \`llevo jugando\`.)`,
            answer: { type: "text", accept: [pair], display: pair },
            traps: [
              {
                spec: { type: "text", accept: [`${llevarForm} ${s.kind}`] },
                feedback: `After *llevar + time*, use the **gerund** (**${ger}**), not the infinitive *${s.kind}*!`,
              },
            ],
            hint: `Conjugate *llevar* in the present for *${p}* (*${llevarForm}*) and form the gerund of *${s.kind}* (*-ando / -iendo*).`,
            solution: [
              `Present of *llevar* for *${p}*: **${llevarForm}**.`,
              `Gerund of *${s.kind}*: **${ger}** → *${llevarForm} ${years} ${ger} ${s.phraseAfterVerb}*.`,
            ],
          };
        }
        // Preterite yo/él spelling & irregulars of jugar, tocar, hacer, practicar
        const pretInf = rng.pick(["jugar", "tocar", "hacer", "practicar"] as const);
        const pretPerson: Person = rng.pick(["yo", "él", "nosotros", "ellos"]);
        const ans = acceptedForms(pretInf, "preterite", pretPerson);
        const canon = conjugate(pretInf, "preterite", pretPerson);
        return {
          prompt: `Paper 2 Q3c Preterite — complete with the **preterite** of **${pretInf}** (*${pretPerson}*):\n\n*En el campeonato del sábado pasado, (${pretPerson}) _______ con mucho entusiasmo.*\n\n(Write ONLY the missing verb.)`,
          answer: { type: "text", accept: ans, display: canon },
          traps:
            pretInf === "jugar" && pretPerson === "yo"
              ? [{ spec: { type: "text", accept: ["jugé"] }, feedback: "*-gar* verbs change **g → gu** before *-é*: **jugué**!" }]
              : pretInf === "tocar" && pretPerson === "yo"
                ? [{ spec: { type: "text", accept: ["tocé"] }, feedback: "*-car* verbs change **c → qu** before *-é*: **toqué**!" }]
                : pretInf === "hacer" && pretPerson === "él"
                  ? [{ spec: { type: "text", accept: ["hico", "hicó", "hizó"] }, feedback: "*Hacer* changes *c → z* in 3rd-person singular preterite with NO accent: **hizo**!" }]
                  : undefined,
          hint: "Check for *yo* *-car/-gar* shifts (*toqué, practiqué, jugué*) or strong unaccented *hacer* stems (*hice, hizo, hicieron*).",
          solution: [`Preterite of *${pretInf}* for *${pretPerson}*: **${canon}**.`],
        };
      }

      // Tier 3: Negative llevar (llevar + time + sin + inf) OR past llevar (llevaba + time + gerund)
      const s = rng.pick(SPORT_ENTRIES);
      const dur = rng.pick(["dos semanas", "tres meses", "un mes", "cuatro meses", "medio año"]);
      if (rng.bool(0.5)) {
        const target = `sin ${s.kind}`;
        return {
          prompt: `Negative Duration Idiom — complete so the sentence means **'(${p}) have/has NOT done this activity for ${dur}'**:\n\n*(${p}) ${conjugate("hablar", "present", p).replace(/^habl/, "llev")} ${dur} _______ _______ ${s.phraseAfterVerb}.*\n\n(Write ONLY the two missing words using **sin** + **${s.kind}**.)`,
          answer: { type: "text", accept: [target], display: target },
          traps: [
            {
              spec: { type: "text", accept: [`sin ${gerund(s.kind)}`, `no ${gerund(s.kind)}`] },
              feedback: `After **sin**, Spanish ALWAYS uses the **infinitive** (**${target}**), never the gerund!`,
            },
          ],
          hint: "Negating *llevar + time + gerund* swaps the gerund for **sin + infinitive**.",
          solution: [`Negative *llevar* uses **sin + infinitive**: **${target}**.`],
        };
      }
      const impLlevar = conjugate("hablar", "imperfect", p).replace(/^habl/, "llev");
      const ger = gerund(s.kind);
      const pair = `${impLlevar} ${ger}`;
      return {
        prompt: `Past Duration (*'had been doing for ${dur} when...'*) — write the **imperfect of llevar** (*${p}*) + **gerund of ${s.kind}** (*two words*):\n\n*(${p}) [1]_______ ${dur} [2]_______ ${s.phraseAfterVerb} cuando empezó la tormenta.*\n\n(Write ONLY \`[1] [2]\`, e.g. \`llevaba jugando\`.)`,
        answer: { type: "text", accept: [pair], display: pair },
        hint: `Put *llevar* into the **imperfect** (*-aba/-ábamos/-aban*) for *${p}* and follow with the gerund **${ger}**.`,
        solution: [
          `'Had been doing' before a past interruption uses **imperfect of llevar + time + gerund**: **${pair}**.`,
        ],
      };
    },
  },

  {
    id: "social-fitness-health.cultural-reviews",
    topicId: "social-fitness-health",
    title: "Cinema, Music & Reading Reviews (Spelling Shifts & Lexicon)",
    level: 2,
    guideRef: "cinema-music-reading",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const extra: ReadonlyArray<{ clue: string; es: string[]; display: string; wrong?: string; wrongHint?: string }> = [
          { clue: "an action film (include **la**)", es: ["la película de acción", "una película de acción"], display: "la película de acción" },
          { clue: "a romantic comedy (include **la**)", es: ["la comedia romántica", "una comedia romántica"], display: "la comedia romántica" },
          { clue: "a documentary (include **el**)", es: ["el documental", "un documental"], display: "el documental" },
          { clue: "a crime / detective novel (include **la**)", es: ["la novela policíaca", "una novela policíaca"], display: "la novela policíaca" },
          { clue: "entertaining (masculine singular adjective)", es: ["entretenido"], display: "entretenido" },
          { clue: "the song (include **la**)", es: ["la canción"], display: "la canción" },
          { clue: "to act / perform (infinitive)", es: ["actuar"], display: "actuar" },
        ];
        const item = rng.pick([...REVIEW_VOCAB_ITEMS, ...extra]);
        return {
          prompt: `Area E Cultural Review Lexicon — write the Spanish expression for **${item.clue}**:`,
          answer: { type: "text", accept: item.es, display: item.display },
          traps:
            item.wrong
              ? [{ spec: { type: "text", accept: [item.wrong] }, feedback: item.wrongHint ?? "Check idiomatic Spanish!" }]
              : undefined,
          hint: "Mind any written accents (*película, ficción, policíaca, canción, romántica*) and include the requested article.",
          solution: [`Target Area E cultural term: **${item.display}**.`],
        };
      }

      if (tier === 2) {
        const rv = rng.pick(REVIEW_VERBS);
        const ans = acceptedForms(rv.inf, "preterite", rv.person);
        const canon = conjugate(rv.inf, "preterite", rv.person);
        return {
          prompt: `Cultural Review Preterite — complete with the **preterite** of **${rv.inf}** (*${rv.person}*):\n\n*${rv.subject} _______ ${rv.obj}*\n\n(Write ONLY the missing verb.)`,
          answer: { type: "text", accept: ans, display: canon },
          traps:
            rv.inf === "ver" && rv.person === "yo"
              ? [{ spec: { type: "text", accept: ["ví"] }, feedback: "Monosyllabic **vi** has NO written accent!" }]
              : rv.inf === "ver" && rv.person === "él"
                ? [{ spec: { type: "text", accept: ["vió"] }, feedback: "Monosyllabic **vio** has NO written accent!" }]
                : rv.inf === "leer" && rv.person === "él"
                  ? [{ spec: { type: "text", accept: ["leió"] }, feedback: "Unstressed *i* between vowels turns into **y**: **leyó**!" }]
                  : rv.inf === "leer" && rv.person === "ellos"
                    ? [{ spec: { type: "text", accept: ["leieron"] }, feedback: "Unstressed *i* between vowels turns into **y**: **leyeron**!" }]
                    : undefined,
          hint: "Watch for monosyllabic *vi/vio* (no accents!), *i → y* in *leyó/leyeron/oyó/oyeron*, and *e → i* in *prefirió/prefirieron*.",
          solution: [`Preterite of *${rv.inf}* (*${rv.person}*): **${canon}**.`],
        };
      }

      // Tier 3: Adjective agreement & tense contrast in reviews
      const adjNouns: ReadonlyArray<{
        nounPhrase: string;
        baseAdj: string;
        agreed: string;
        wrongAdj: string;
      }> = [
        { nounPhrase: "una película", baseAdj: "conmovedor", agreed: "conmovedora", wrongAdj: "conmovedor" },
        { nounPhrase: "una protagonista", baseAdj: "encantador", agreed: "encantadora", wrongAdj: "encantador" },
        { nounPhrase: "el protagonista", baseAdj: "conmovedor", agreed: "conmovedor", wrongAdj: "conmovedora" },
        { nounPhrase: "unos efectos especiales", baseAdj: "espectacular", agreed: "espectaculares", wrongAdj: "espectacular" },
        { nounPhrase: "unas canciones", baseAdj: "inolvidable", agreed: "inolvidables", wrongAdj: "inolvidable" },
        { nounPhrase: "una banda sonora", baseAdj: "entretenido", agreed: "entretenida", wrongAdj: "entretenido" },
        { nounPhrase: "unos capítulos finales", baseAdj: "decepcionante", agreed: "decepcionantes", wrongAdj: "decepcionante" },
        { nounPhrase: "unas tramas", baseAdj: "predecible", agreed: "predecibles", wrongAdj: "predecible" },
        { nounPhrase: "una novela histórica", baseAdj: "apasionante", agreed: "apasionante", wrongAdj: "apasionanta" },
        { nounPhrase: "el concierto en directo", baseAdj: "inolvidable", agreed: "inolvidable", wrongAdj: "inolvidablo" },
        { nounPhrase: "las actrices principales", baseAdj: "trabajador", agreed: "trabajadoras", wrongAdj: "trabajadores" },
        { nounPhrase: "dos comedias españolas", baseAdj: "divertido", agreed: "divertidas", wrongAdj: "divertidos" },
        { nounPhrase: "la última escena", baseAdj: "conmovedor", agreed: "conmovedora", wrongAdj: "conmovedores" },
        { nounPhrase: "los documentales científicos", baseAdj: "interesante", agreed: "interesantes", wrongAdj: "interesante" },
        { nounPhrase: "el argumento", baseAdj: "predecible", agreed: "predecible", wrongAdj: "predecibles" },
        { nounPhrase: "la letra de la canción", baseAdj: "emotivo", agreed: "emotiva", wrongAdj: "emotivo" },
        { nounPhrase: "los papeles secundarios", baseAdj: "creíble", agreed: "creíbles", wrongAdj: "creíble" },
        { nounPhrase: "una serie española", baseAdj: "entretenido", agreed: "entretenida", wrongAdj: "entretenido" },
        { nounPhrase: "dos novelas policíacas", baseAdj: "sorprendente", agreed: "sorprendentes", wrongAdj: "sorprendente" },
        { nounPhrase: "las entradas del teatro", baseAdj: "caro", agreed: "caras", wrongAdj: "caros" },
      ];
      const item = rng.pick(adjNouns);
      return {
        prompt: `Grade-9 Review Agreement — make the adjective **${item.baseAdj}** agree accurately with **${item.nounPhrase}**:\n\n*Ayer disfruté de ${item.nounPhrase} muy _______.*\n\n(Write ONLY the agreed Spanish adjective.)`,
        answer: { type: "text", accept: [item.agreed], display: item.agreed },
        traps: [
          {
            spec: { type: "text", accept: [item.wrongAdj] },
            feedback: `Check gender & number on *${item.nounPhrase}*: *-or* adjectives add *-a* in the feminine (*conmovedora*), while *-e* adjectives (*inolvidable, apasionante*) never change to *-a/-o*!`,
          },
        ],
        hint: "Adjectives ending in *-or* add *-a / -es / -as*; adjectives ending in *-e* or *-l* stay the same for masculine/feminine and add *-s / -es* in the plural.",
        solution: [`Matching **${item.baseAdj}** to *${item.nounPhrase}* gives **${item.agreed}**.`],
      };
    },
  },

  {
    id: "social-fitness-health.restaurant-precision",
    topicId: "social-fitness-health",
    title: "Restaurant Precision: Pedir vs Preguntar & Ser vs Estar",
    level: 3,
    guideRef: "eating-out-and-complaints",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const vocabItems: ReadonlyArray<{ en: string; accept: string[]; display: string }> = [
          { en: "starter / first course (include **el**)", accept: ["el primer plato"], display: "el primer plato" },
          { en: "main course / second course (include **el**)", accept: ["el segundo plato"], display: "el segundo plato" },
          { en: "dessert (include **el**)", accept: ["el postre"], display: "el postre" },
          { en: "set menu of the day (include **el**)", accept: ["el menú del día"], display: "el menú del día" },
          { en: "the bill (include **la**)", accept: ["la cuenta"], display: "la cuenta" },
          { en: "the tip / gratuity (include **la**)", accept: ["la propina"], display: "la propina" },
          { en: "the fork (include **el**)", accept: ["el tenedor"], display: "el tenedor" },
          { en: "the knife (include **el**)", accept: ["el cuchillo"], display: "el cuchillo" },
          { en: "the spoon (include **la**)", accept: ["la cuchara"], display: "la cuchara" },
          { en: "the napkin (include **la**)", accept: ["la servilleta"], display: "la servilleta" },
          { en: "the drinking glass (include **el**)", accept: ["el vaso"], display: "el vaso" },
          { en: "the waiter (include **el**)", accept: ["el camarero", "el mesero"], display: "el camarero" },
          { en: "spicy (singular adjective)", accept: ["picante"], display: "picante" },
          { en: "salty / savoury (masculine singular adjective)", accept: ["salado"], display: "salado" },
          { en: "tasty / delicious (masculine singular adjective, starts with **s-**)", accept: ["sabroso"], display: "sabroso" },
          { en: "disgusting (masculine singular adjective)", accept: ["asqueroso"], display: "asqueroso" },
          { en: "homemade (masculine singular adjective)", accept: ["casero"], display: "casero" },
          { en: "the waitress (include **la**)", accept: ["la camarera", "la mesera"], display: "la camarera" },
          { en: "to book a table (infinitive phrase)", accept: ["reservar una mesa"], display: "reservar una mesa" },
          { en: "to complain (reflexive infinitive)", accept: ["quejarse"], display: "quejarse" },
          { en: "to order / ask for (infinitive)", accept: ["pedir"], display: "pedir" },
        ];
        const it = rng.pick(vocabItems);
        return {
          prompt: `Restaurant Lexicon — write the Spanish word/phrase for **${it.en}**:`,
          answer: { type: "text", accept: it.accept, display: it.display },
          hint: "Include the requested definite article (*el / la*) and check any accents (*el menú del día*).",
          solution: [`Spanish term: **${it.display}**.`],
        };
      }

      if (tier === 2) {
        if (rng.bool(0.5)) {
          const item = rng.pick(RESTAURANT_SER_ESTAR);
          return {
            prompt: `*Ser* vs *Estar* at the Table — complete with the accurate form of **ser** or **estar**:\n\n*${item.sentence}*\n\n(Write ONLY the missing verb.)`,
            answer: { type: "text", accept: item.ans, display: item.display },
            traps: [{ spec: { type: "text", accept: [item.trap] }, feedback: item.why }],
            hint: "**Ser** = permanent nature, menu category or wealth (*es rico* = wealthy); **estar** = how this dish tastes or looks right now (*está fría, está sucio, está riquísimo*).",
            solution: [item.why, `Correct form: **${item.display}**.`],
          };
        }
        const pp = rng.pick(RESTAURANT_PEDIR_PREGUNTAR);
        return {
          prompt: `*Pedir* vs *Preguntar* — complete with the accurate form (${pp.tenseNote}) of **pedir** or **preguntar**:\n\n*${pp.sentence}*\n\n(Write ONLY the missing verb — NEVER add *por*!)`,
          answer: { type: "text", accept: pp.ans, display: pp.display },
          traps: [{ spec: { type: "text", accept: [pp.trap] }, feedback: pp.why }],
          hint: "**Pedir** (*e→i*) = order food/drinks or request an item (*la cuenta*); **preguntar** = ask a question (*si, qué, cuánto, dónde*).",
          solution: [pp.why, `Correct form: **${pp.display}**.`],
        };
      }

      // Tier 3: Mixed Ser/Estar + Pedir/Preguntar + Polite Usted requests (22+ combinations)
      const choice = rng.int(1, 3);
      if (choice === 1) {
        const item = rng.pick(RESTAURANT_SER_ESTAR);
        return {
          prompt: `Grade-9 Food Inspector — choose and conjugate **ser** or **estar** accurately:\n\n*${item.sentence}*\n\n(Write ONLY the missing Spanish verb.)`,
          answer: { type: "text", accept: item.ans, display: item.display },
          traps: [{ spec: { type: "text", accept: [item.trap] }, feedback: item.why }],
          hint: "Ask: is this an inherent trait on the menu forever (**ser**) or a temporary condition/taste on the plate tonight (**estar**)?",
          solution: [item.why, `Answer: **${item.display}**.`],
        };
      }
      if (choice === 2) {
        const pp = rng.pick(RESTAURANT_PEDIR_PREGUNTAR);
        return {
          prompt: `Paper 2 Q3c Precision — fill the gap (${pp.tenseNote}) choosing between **pedir** and **preguntar**:\n\n*${pp.sentence}*\n\n(Write ONLY the missing verb.)`,
          answer: { type: "text", accept: pp.ans, display: pp.display },
          traps: [{ spec: { type: "text", accept: [pp.trap] }, feedback: pp.why }],
          hint: "Mind both verb choice (*pedir* = object/order vs *preguntar* = question) AND *-ir* sandal shift (*pidió / pidieron*).",
          solution: [pp.why, `Answer: **${pp.display}**.`],
        };
      }
      const politeItems: ReadonlyArray<{ item: string; verbInf: "traer" | "dar" | "cambiar" | "limpiar"; verbUsted: string; trapTu: string }> = [
        { item: "otro tenedor limpio", verbInf: "traer", verbUsted: "trae", trapTu: "traes" },
        { item: "la carta de postres", verbInf: "traer", verbUsted: "trae", trapTu: "traes" },
        { item: "una jarra de agua fría", verbInf: "traer", verbUsted: "trae", trapTu: "traes" },
        { item: "la cuenta cuando pueda", verbInf: "traer", verbUsted: "trae", trapTu: "traes" },
        { item: "otra servilleta", verbInf: "dar", verbUsted: "da", trapTu: "das" },
        { item: "este plato porque está frío", verbInf: "cambiar", verbUsted: "cambia", trapTu: "cambias" },
        { item: "esta mesa, por favor", verbInf: "limpiar", verbUsted: "limpia", trapTu: "limpias" },
      ];
      const pol = rng.pick(politeItems);
      return {
        prompt: `Paper 3 Polite *Usted* Register — complete the polite request to the waiter with the **present tense usted** form of **${pol.verbInf}**:\n\n*Perdone, camarero, ¿me _______ ${pol.item}?*\n\n(Write ONLY the missing verb.)`,
        answer: { type: "text", accept: [pol.verbUsted, `usted ${pol.verbUsted}`], display: pol.verbUsted },
        traps: [
          {
            spec: { type: "text", accept: [pol.trapTu] },
            feedback: `Keep formal **usted** register consistent with *Perdone*! Drop the informal *-s* → **${pol.verbUsted}**.`,
          },
        ],
        hint: "Notice *Perdone* (formal *usted*): use the 3rd-person singular present form (no *-s*!).",
        solution: [`Polite *usted* takes 3rd-person singular endings: *${pol.verbInf} →* **${pol.verbUsted}**.`],
      };
    },
  },
];
