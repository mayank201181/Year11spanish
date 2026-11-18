import type { Drill } from "./types.ts";
import {
  PERSON_LABEL,
  TENSE_LABEL,
  acceptedForms,
  conjugate,
  type Person,
  type Tense,
} from "../spanish/verbs.ts";

const CITIES_F = [
  { name: "Sevilla", zone: "en el sur de España", trait: "histórica y muy animada" },
  { name: "Valencia", zone: "en la costa este", trait: "moderna y acogedora" },
  { name: "Barcelona", zone: "en el noreste del país", trait: "cosmopolita y turística" },
  { name: "Granada", zone: "cerca de la sierra", trait: "pintoresca e inolvidable" },
  { name: "Málaga", zone: "junto al mar Mediterráneo", trait: "soleada y alegre" },
  { name: "Salamanca", zone: "en el oeste de España", trait: "universitaria y tranquila" },
] as const;

const PLACES_M = [
  { name: "Mi pueblo", zone: "en el campo", trait: "tranquilo y seguro" },
  { name: "Mi barrio", zone: "en las afueras", trait: "residencial y limpio" },
  { name: "El casco antiguo", zone: "en el centro", trait: "antiguo y peatonal" },
  { name: "Toledo", zone: "en el centro de España", trait: "medieval y fascinante" },
  { name: "Cuzco", zone: "en los Andes de Perú", trait: "impresionante y cultural" },
] as const;

export const drills: Drill[] = [
  {
    id: "home-and-abroad.regions-ser-estar",
    topicId: "home-and-abroad",
    title: "Towns & regions: ser vs estar, gender traps & comparisons",
    level: 1,
    guideRef: "regions-and-towns",
    generate(rng, tier) {
      if (tier === 1) {
        const askLocation = rng.bool();
        const useFem = rng.bool();
        if (askLocation) {
          const place = useFem ? rng.pick(CITIES_F) : rng.pick(PLACES_M);
          const part = useFem ? "situada" : "situado";
          return {
            prompt: `Complete with **es** or **está** (geographical location vs permanent trait): *${place.name} _______ ${part} ${place.zone}.* (Write ONLY the missing verb.)`,
            answer: { type: "text", accept: ["está"] },
            traps: [
              {
                spec: { type: "text", accept: ["es"] },
                feedback: "Geographical location on a map ALWAYS uses **estar** (*está*), never *ser*!",
              },
            ],
            hint: "Could you drop a map pin on it? Map location always takes *estar* (don't forget the accent!).",
            solution: [
              `${place.name} ${place.zone} describes geographical location.`,
              "Location takes 3rd-person singular **está** (with a written accent).",
            ],
          };
        }
        const place = useFem ? rng.pick(CITIES_F) : rng.pick(PLACES_M);
        const noun = useFem ? "una ciudad" : "un lugar";
        return {
          prompt: `Complete with **es** or **está** (inherent defining trait vs location): *${place.name} _______ ${noun} ${place.trait}.* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: ["es"] },
          traps: [
            {
              spec: { type: "text", accept: ["está"] },
              feedback: `Defining what a place inherently is (*${noun}…*) requires **ser** (**es**), not *estar*!`,
            },
          ],
          hint: "Defining identity and permanent character traits uses *ser*.",
          solution: [
            `*${noun} ${place.trait}* defines inherent identity and permanent character.`,
            "Use 3rd-person singular of *ser*: **es**.",
          ],
        };
      }

      if (tier === 2) {
        const compPool = [
          {
            sent: "El transporte en Singapur es _______ eficiente como en Madrid.",
            ans: "tan",
            trap: "tanto",
            why: "Before an adjective (*eficiente*), 'as … as' is **tan … como**.",
          },
          {
            sent: "Mi calle es _______ ruidosa como la avenida principal.",
            ans: "tan",
            trap: "tanta",
            why: "Before an adjective (*ruidosa*), 'as … as' stays invariable **tan**.",
          },
          {
            sent: "El campo es _______ tranquilo como seguro.",
            ans: "tan",
            trap: "tanto",
            why: "Before an adjective (*tranquilo*), use **tan**.",
          },
          {
            sent: "En mi ciudad hay _______ parques como centros comerciales.",
            ans: "tantos",
            trap: "tan",
            why: "Before masculine plural noun *parques*, use **tantos … como**.",
          },
          {
            sent: "En el casco antiguo hay _______ plazas peatonales como iglesias.",
            ans: "tantas",
            trap: "tan",
            why: "Before feminine plural noun *plazas*, use **tantas … como**.",
          },
          {
            sent: "Hoy en el centro hay _______ tráfico como ayer.",
            ans: "tanto",
            trap: "tan",
            why: "Before masculine singular noun *tráfico*, use **tanto … como**.",
          },
          {
            sent: "En agosto hay _______ gente en la costa como en la capital.",
            ans: "tanta",
            trap: "tan",
            why: "Before feminine singular noun *gente*, use **tanta … como**.",
          },
        ] as const;
        const genderPool = [
          { noun: "mapa turístico", art: "el", trap: "la", tip: "*El mapa* is masculine despite ending in *-a*!" },
          { noun: "clima mediterráneo", art: "el", trap: "la", tip: "*El clima* is a Greek *-ma* masculine noun!" },
          { noun: "paisaje montañoso", art: "el", trap: "la", tip: "All *-aje* nouns (*el paisaje*) are masculine!" },
          { noun: "viaje inolvidable", art: "el", trap: "la", tip: "All *-aje* nouns (*el viaje*) are masculine!" },
          { noun: "equipaje pesado", art: "el", trap: "la", tip: "All *-aje* nouns (*el equipaje*) are masculine!" },
          { noun: "idioma oficial", art: "el", trap: "la", tip: "*El idioma* is a Greek *-ma* masculine noun!" },
          { noun: "problema principal", art: "el", trap: "la", tip: "*El problema* is a Greek *-ma* masculine noun!" },
          { noun: "costumbre antigua", art: "la", trap: "el", tip: "*La costumbre* ('custom') is feminine!" },
          { noun: "zona peatonal", art: "la", trap: "el", tip: "*La zona* is feminine!" },
          { noun: "afueras tranquilas", art: "las", trap: "los", tip: "*Las afueras* ('outskirts') is feminine plural!" },
          { noun: "plaza mayor", art: "la", trap: "el", tip: "*La plaza* is feminine!" },
          { noun: "ayuntamiento histórico", art: "el", trap: "la", tip: "*El ayuntamiento* is masculine!" },
          { noun: "albergue juvenil", art: "el", trap: "la", tip: "*El albergue* is masculine!" },
        ] as const;

        if (rng.bool(0.45)) {
          const item = rng.pick(compPool);
          const extra = rng.pick(["Sin duda,", "En realidad,", "Para mí,"]);
          return {
            prompt: `Complete the comparison of equality with **tan, tanto, tanta, tantos** or **tantas**: *${extra} ${item.sent}* (Write ONLY the missing word.)`,
            answer: { type: "text", accept: [item.ans] },
            traps: [{ spec: { type: "text", accept: [item.trap] }, feedback: item.why }],
            hint: "Adjectives take *tan*; nouns take *tanto/a/os/as* agreeing in gender and number!",
            solution: [item.why, `Answer: **${item.ans}**.`],
          };
        }
        const g = rng.pick(genderPool);
        return {
          prompt: `Write the correct definite article (**el, la, los** or **las**) for the travel phrase: *_______ ${g.noun}* (Write ONLY the article.)`,
          answer: { type: "text", accept: [g.art] },
          traps: [{ spec: { type: "text", accept: [g.trap] }, feedback: g.tip }],
          hint: "Watch out for *-aje* nouns, *mapa*, and Greek *-ma* nouns!",
          solution: [g.tip, `Correct article: **${g.art}** (*${g.art} ${g.noun}*).`],
        };
      }

      // Tier 3: WEIRDO subjunctive & irregular comparatives in town/tourism debates
      const verbs: readonly { inf: string; clause: string }[] = [
        { inf: "proteger", clause: "el casco antiguo" },
        { inf: "construir", clause: "más carriles bici" },
        { inf: "mejorar", clause: "el transporte público" },
        { inf: "tener", clause: "más espacios verdes" },
        { inf: "ofrecer", clause: "alojamiento asequible" },
        { inf: "reducir", clause: "el tráfico en el centro" },
      ];
      const triggers = [
        "Es imprescindible que",
        "Es importante que",
        "Es urgente que",
        "Es aconsejable que",
        "Quiero que",
      ] as const;
      const subjects: readonly { label: string; person: Person }[] = [
        { label: "el ayuntamiento", person: "él" },
        { label: "las autoridades", person: "ellos" },
        { label: "nosotros", person: "nosotros" },
      ];
      const v = rng.pick(verbs.filter((x) => x.inf !== "reducir"));
      const trig = rng.pick(triggers);
      const sub = rng.pick(subjects);
      const ans = acceptedForms(v.inf, "subjunctive", sub.person);
      const indTrap = conjugate(v.inf, "present", sub.person);
      return {
        prompt: `Grade-9 WEIRDO Trigger — Complete with the **present subjunctive** of **${v.inf}** (*${sub.label}*): *${trig} ${sub.label === "nosotros" ? "" : sub.label + " "}_______ ${v.clause}.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept: ans },
        traps: [
          {
            spec: { type: "text", accept: [indTrap] },
            feedback: `*${trig}* triggers the **Present Subjunctive**, not Present Indicative (*${indTrap}*)!`,
          },
        ],
        hint: `Start from the *yo* present of *${v.inf}*, drop *-o*, and add the opposite subjunctive ending for *${PERSON_LABEL[sub.person]}*.`,
        solution: [
          `*${trig}* is a WEIRDO trigger requiring the Present Subjunctive.`,
          `Present subjunctive of *${v.inf}* for *${sub.label}* = **${ans[0]}**.`,
        ],
      };
    },
  },

  {
    id: "home-and-abroad.holiday-verbs-complaints",
    topicId: "home-and-abroad",
    title: "Holidays & accommodation complaints across tenses",
    level: 2,
    guideRef: "holidays-and-accommodation",
    generate(rng, tier) {
      if (tier === 1) {
        const items: readonly { inf: string; tail: string }[] = [
          { inf: "viajar", tail: "en avión a Mallorca" },
          { inf: "visitar", tail: "el castillo medieval" },
          { inf: "reservar", tail: "una habitación doble" },
          { inf: "nadar", tail: "en la piscina climatizada" },
          { inf: "comprar", tail: "recuerdos en el mercado" },
          { inf: "descansar", tail: "en la playa toda la tarde" },
          { inf: "cenar", tail: "en el restaurante del hotel" },
          { inf: "bailar", tail: "en la fiesta del pueblo" },
        ];
        const persons: readonly Person[] = ["yo", "tú", "él", "nosotros", "ellos"];
        const tenses: readonly Tense[] = ["present", "preterite", "near-future"];
        const it = rng.pick(items);
        const person = rng.pick(persons);
        const t = rng.pick(tenses);
        const marker =
          t === "present" ? "Todos los veranos" : t === "preterite" ? "El verano pasado" : "El mes que viene";
        const ans = acceptedForms(it.inf, t, person);
        // Note: -ar nosotros present === preterite ("visitamos"), so use imperfect as the contrasting trap whenever needed!
        const candidateTrap = conjugate(it.inf, t === "preterite" ? "present" : "preterite", person);
        const trapForm = ans.includes(candidateTrap) ? conjugate(it.inf, "imperfect", person) : candidateTrap;
        return {
          prompt: `Complete with the **${TENSE_LABEL[t]}** of **${it.inf}** (*${PERSON_LABEL[person]}*): *${marker} _______ ${it.tail}.* (Write ONLY the missing verb form.)`,
          answer: { type: "text", accept: ans },
          traps: [
            {
              spec: { type: "text", accept: [trapForm] },
              feedback: `Check the time marker (*${marker}*) and give the **${TENSE_LABEL[t]}**!`,
            },
          ],
          hint: `Time marker *${marker}* calls for ${TENSE_LABEL[t]} in person *${person}*.`,
          solution: [
            `Conjugate *${it.inf}* in ${TENSE_LABEL[t]} for *${person}*.`,
            `Answer: **${ans[0]}**.`,
          ],
        };
      }

      if (tier === 2) {
        // Preterite irregulars, -car/-gar/-zar, reflexives & Imperfect hotel complaints
        const places = ["en Málaga", "en Tenerife", "en Valencia", "en Sevilla"] as const;
        const placeTag = rng.pick(places);
        const complaints = [
          {
            prompt: `Hotel Complaint Background — Complete with the **imperfect** of **estar** (*la habitación*): *Cuando subimos al hotel ${placeTag}, la habitación _______ muy sucia.* (Write ONLY the missing verb.)`,
            accept: ["estaba", "ella estaba"],
            trap: "era",
            trapMsg: "Temporary state (*sucia*) uses **estar** (*estaba*), not *ser* (*era*)!",
            sol: "Ongoing past room state uses Imperfect of *estar*: **estaba**.",
          },
          {
            prompt: `Hotel Complaint Background — Complete with the **imperfect** of impersonal **haber** ('there were'): *En nuestro alojamiento ${placeTag}, en el baño no _______ toallas limpias.* (Write ONLY the missing verb.)`,
            accept: ["había"],
            trap: "habían",
            trapMsg: "Impersonal *haber* ('there was / there were') is ALWAYS singular **había**, never *habían*!",
            sol: "Impersonal past background 'there were' = **había**.",
          },
          {
            prompt: `Hotel Complaint Background — Complete with the **imperfect** of **estar** (*el ascensor*): *En la pensión ${placeTag}, el ascensor _______ averiado.* (Write ONLY the missing verb.)`,
            accept: ["estaba", "él estaba"],
            trap: "era",
            trapMsg: "Being broken down (*averiado*) is a state with **estar** (*estaba*)!",
            sol: "State *estar averiado* in the Imperfect = **estaba**.",
          },
        ] as const;

        if (rng.bool(0.3)) {
          const c = rng.pick(complaints);
          return {
            prompt: c.prompt,
            answer: { type: "text", accept: [...c.accept] },
            traps: [{ spec: { type: "text", accept: [c.trap] }, feedback: c.trapMsg }],
            hint: "Hotel background faults when you arrive use the Imperfect tense!",
            solution: [c.sol],
          };
        }

        const pretPool: readonly { inf: string; person: Person; ctx: string }[] = [
          { inf: "buscar", person: "yo", ctx: "un hotel céntrico en Internet" },
          { inf: "sacar", person: "yo", ctx: "muchas fotos de la catedral" },
          { inf: "llegar", person: "yo", ctx: "a la pensión a medianoche" },
          { inf: "pagar", person: "yo", ctx: "la cuenta en recepción" },
          { inf: "alojarse", person: "nosotros", ctx: "en un parador de cinco estrellas" },
          { inf: "alojarse", person: "yo", ctx: "en un albergue juvenil moderno" },
          { inf: "quedarse", person: "yo", ctx: "cinco noches frente al mar" },
          { inf: "quedarse", person: "ellos", ctx: "una semana entera en la isla" },
          { inf: "quejarse", person: "yo", ctx: "al recepcionista por el ruido" },
          { inf: "quejarse", person: "nosotros", ctx: "de la falta de aire acondicionado" },
          { inf: "divertirse", person: "ellos", ctx: "muchísimo en el parque acuático" },
          { inf: "divertirse", person: "él", ctx: "en la excursión en barco" },
          { inf: "ir", person: "nosotros", ctx: "de vacaciones a Andalucía" },
          { inf: "ir", person: "yo", ctx: "de vacaciones al extranjero" },
          { inf: "tener", person: "yo", ctx: "un problema con mi reserva" },
          { inf: "hacer", person: "nosotros", ctx: "turismo por el casco antiguo" },
        ];
        const timeCue = rng.pick(["Ayer", "Anoche", "El lunes pasado"]);
        const p = rng.pick(pretPool);
        const ans = acceptedForms(p.inf, "preterite", p.person);
        const imp = conjugate(p.inf, "imperfect", p.person);
        return {
          prompt: `Paper 2 Q3c — Complete with the **preterite** of **${p.inf}** (*${PERSON_LABEL[p.person]}*): *${timeCue} _______ ${p.ctx}.* (Write ONLY the missing verb${p.inf.endsWith("se") ? ", including the reflexive pronoun" : ""}.)`,
          answer: { type: "text", accept: ans },
          traps: [
            {
              spec: { type: "text", accept: [imp] },
              feedback: `*${timeCue}* marks a completed event in the **Preterite** (**${ans[0]}**), not Imperfect *${imp}*.`,
            },
          ],
          hint: "Watch *-car/-gar* spelling in *yo*, *-ir* sandal shifts in *él/ellos*, and reflexive pronouns (*me/nos/se*)!",
          solution: [
            `Preterite of *${p.inf}* for *${p.person}* = **${ans[0]}**.`,
          ],
        };
      }

      // Tier 3: Conditional, Perfect (irregular participles), & Type-2 Si Clauses
      const siClauses = [
        { inf: "tener", impSubj: ["tuviera", "tuviese", "yo tuviera", "yo tuviese"], main: "más vacaciones, iría a Argentina" },
        { inf: "tener", impSubj: ["tuviera", "tuviese", "yo tuviera", "yo tuviese"], main: "suficiente dinero, reservaría una suite" },
        { inf: "poder", impSubj: ["pudiera", "pudiese", "yo pudiera", "yo pudiese"], main: "elegir, me alojaría en un castillo" },
        { inf: "poder", impSubj: ["pudiera", "pudiese", "yo pudiera", "yo pudiese"], main: "viajar hoy, volaría a Perú" },
        { inf: "ser", impSubj: ["fuera", "fuese", "yo fuera", "yo fuese"], main: "rico, daría la vuelta al mundo" },
        { inf: "hacer", impSubj: ["hiciera", "hiciese"], main: "mejor tiempo, tomaríamos el sol" },
        { inf: "haber", impSubj: ["hubiera", "hubiese"], main: "vuelos baratos, viajaríamos mañana" },
      ] as const;

      if (rng.bool(0.4)) {
        const s = rng.pick(siClauses);
        const condTrap = conjugate(s.inf === "haber" ? "tener" : s.inf, "conditional", "yo");
        return {
          prompt: `Grade-9 *Si* Clause — Complete with the **imperfect subjunctive** (*-ra* or *-se*) of **${s.inf}**: *Si _______ ${s.main}.* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [...s.impSubj] },
          traps: [
            {
              spec: { type: "text", accept: [condTrap] },
              feedback: "NEVER put the Conditional directly after *si*! Use the Imperfect Subjunctive (*-ra / -se*).",
            },
          ],
          hint: "Build the Imperfect Subjunctive from the 3rd-person plural Preterite stem (*-ron → -ra*). Both *-ra* and *-se* are accepted!",
          solution: [
            `After hypothetical *si*, use the Imperfect Subjunctive of *${s.inf}*: **${s.impSubj[0]}** (or **${s.impSubj[1]}**).`,
          ],
        };
      }

      const advPool: readonly { inf: string; tense: "conditional" | "perfect"; person: Person; ctx: string }[] = [
        { inf: "alojarse", tense: "conditional", person: "yo", ctx: "en un hotel frente al mar" },
        { inf: "alojarse", tense: "conditional", person: "nosotros", ctx: "en un parador rural" },
        { inf: "viajar", tense: "conditional", person: "nosotros", ctx: "en primera clase" },
        { inf: "viajar", tense: "conditional", person: "ellos", ctx: "por toda Sudamérica" },
        { inf: "hacer", tense: "conditional", person: "yo", ctx: "una excursión en barco" },
        { inf: "ir", tense: "conditional", person: "tú", ctx: "de vacaciones a Costa Rica" },
        { inf: "tener", tense: "conditional", person: "él", ctx: "vistas panorámicas a la sierra" },
        { inf: "salir", tense: "conditional", person: "nosotros", ctx: "temprano para evitar las colas" },
        { inf: "volver", tense: "perfect", person: "nosotros", ctx: "de nuestro viaje a México" },
        { inf: "volver", tense: "perfect", person: "ellos", ctx: "encantados del crucero" },
        { inf: "descubrir", tense: "perfect", person: "yo", ctx: "una playa secreta preciosa" },
        { inf: "ver", tense: "perfect", person: "tú", ctx: "los monumentos de Valencia" },
        { inf: "abrir", tense: "perfect", person: "ellos", ctx: "un nuevo albergue juvenil" },
        { inf: "escribir", tense: "perfect", person: "yo", ctx: "tres postales a mis abuelos" },
        { inf: "hacer", tense: "perfect", person: "yo", ctx: "la maleta con antelación" },
      ];
      const item = rng.pick(advPool);
      const ans = acceptedForms(item.inf, item.tense, item.person);
      return {
        prompt: `Complete with the **${TENSE_LABEL[item.tense]}** of **${item.inf}** (*${PERSON_LABEL[item.person]}*): *_______ ${item.ctx}.* (Write ONLY the verb form.)`,
        answer: { type: "text", accept: ans },
        hint:
          item.tense === "perfect"
            ? "Use present of *haber* (*he, has, ha, hemos, habéis, han*) + past participle (watch irregular participles: *vuelto, descubierto, visto, abierto, escrito, hecho*!)."
            : "Add *-ía, -ías, -ía, -íamos, -íais, -ían* to the future/conditional stem (watch *hacer → har-*, *tener → tendr-*, *salir → saldr-*!).",
        solution: [
          `${TENSE_LABEL[item.tense]} of *${item.inf}* for *${item.person}* = **${ans[0]}**.`,
        ],
      };
    },
  },

  {
    id: "home-and-abroad.directions-and-transport",
    topicId: "home-and-abroad",
    title: "Transport prepositions, acabar de & polite directions",
    level: 2,
    guideRef: "transport-and-directions",
    generate(rng, tier) {
      if (tier === 1) {
        const preps = [
          { sent: "Siempre viajamos _______ avión cuando vamos a Europa.", ans: "en", trap: "por", why: "Means of transport take **en** with no article (*en avión*)." },
          { sent: "Fuimos desde Madrid hasta Sevilla _______ tren de alta velocidad.", ans: "en", trap: "por", why: "Means of transport take **en** (*en tren*)." },
          { sent: "Recorrimos toda la isla _______ autocar.", ans: "en", trap: "con", why: "Means of transport take **en** (*en autocar*)." },
          { sent: "Como el museo está cerca, vamos _______ pie.", ans: "a", trap: "en", why: "'On foot' is the famous exception **a pie** (never *en pie*!)." },
          { sent: "Nuestro vuelo sale mañana _______ la mañana.", ans: "por", trap: "en", why: "General parts of the day take **por** (*por la mañana*)." },
          { sent: "Llegamos al aeropuerto _______ la noche.", ans: "por", trap: "en", why: "General parts of the day take **por** (*por la noche*)." },
          { sent: "El tren sale exactamente a las nueve _______ la mañana.", ans: "de", trap: "por", why: "After a specific clock hour (*a las nueve*), Spanish uses **de** (*de la mañana*)." },
          { sent: "Ayer visité _______ Barcelona por primera vez (write **-** if NO preposition is needed!).", ans: "-", trap: "a", why: "NEVER use personal *a* before cities — write **-** (nothing)!" },
        ] as const;
        const vocabItems = [
          { en: "return ticket", es: ["el billete de ida y vuelta", "un billete de ida y vuelta"] },
          { en: "single (one-way) ticket", es: ["el billete sencillo", "un billete sencillo"] },
          { en: "boarding pass", es: ["la tarjeta de embarque", "una tarjeta de embarque"] },
          { en: "boarding gate", es: ["la puerta de embarque", "una puerta de embarque"] },
          { en: "ticket office", es: ["la taquilla", "una taquilla"] },
          { en: "train platform", es: ["el andén", "un andén"] },
          { en: "customs (border control)", es: ["la aduana"] },
          { en: "traffic lights", es: ["el semáforo", "los semáforos"] },
          { en: "roundabout", es: ["la rotonda", "una rotonda"] },
          { en: "bridge", es: ["el puente", "un puente"] },
        ] as const;

        if (rng.bool(0.5)) {
          const p = rng.pick(preps.slice(0, 7));
          return {
            prompt: `Complete the travel sentence with the single correct Spanish preposition: *${p.sent}* (Write ONLY the missing preposition.)`,
            answer: { type: "text", accept: [p.ans] },
            traps: [{ spec: { type: "text", accept: [p.trap] }, feedback: p.why }],
            hint: "Check *en* + transport vs *a pie*, and *por la mañana* vs *a las nueve de la mañana*.",
            solution: [p.why, `Answer: **${p.ans}**.`],
          };
        }
        const v = rng.pick(vocabItems);
        return {
          prompt: `Write the Spanish noun phrase (including **el** or **la**) for **'${v.en}'**.`,
          answer: { type: "text", accept: [...v.es] },
          hint: "Include the correct definite article (*el / la*) and check any written accents!",
          solution: [`'${v.en}' in Spanish = **${v.es[0]}**.`],
        };
      }

      const dirVerbs = [
        { inf: "seguir", tu: "sigue", ud: "siga", uds: "sigan", phrase: "todo recto hasta la plaza" },
        { inf: "girar", tu: "gira", ud: "gire", uds: "giren", phrase: "a la derecha en el semáforo" },
        { inf: "cruzar", tu: "cruza", ud: "cruce", uds: "crucen", phrase: "el puente romano" },
        { inf: "tomar", tu: "toma", ud: "tome", uds: "tomen", phrase: "la segunda calle a la izquierda" },
        { inf: "pasar", tu: "pasa", ud: "pase", uds: "pasen", phrase: "delante del ayuntamiento" },
        { inf: "coger", tu: "coge", ud: "coja", uds: "cojan", phrase: "la línea tres del metro" },
        { inf: "subir", tu: "sube", ud: "suba", uds: "suban", phrase: "por esta avenida peatonal" },
        { inf: "ir", tu: "ve", ud: "vaya", uds: "vayan", phrase: "a pie hasta la estación" },
      ] as const;

      if (tier === 2) {
        const d = rng.pick(dirVerbs);
        const formal = rng.bool(0.65);
        const dest = rng.pick(["el museo", "la catedral", "la oficina de turismo", "la farmacia"]);
        if (formal) {
          return {
            prompt: `Polite **usted** Direction — Complete with the formal **usted imperative** of **${d.inf}**: *Perdone, señor, para ir a ${dest}, _______ ${d.phrase}.* (Write ONLY the missing verb.)`,
            answer: { type: "text", accept: [d.ud, `usted ${d.ud}`] },
            traps: [
              {
                spec: { type: "text", accept: [d.tu] },
                feedback: `*${d.tu}* is the informal *tú* command — *Perdone, señor* requires polite **usted** (**${d.ud}**) !`,
              },
            ],
            hint: "Polite *usted* commands use the 3rd-person singular Present Subjunctive form!",
            solution: [
              `Formal *usted* imperative of *${d.inf}* = **${d.ud}**.`,
            ],
          };
        }
        return {
          prompt: `Informal **tú** Direction — Complete with the affirmative **tú imperative** of **${d.inf}** (speaking to a friend): *Oye, Marta, para llegar a ${dest}, _______ ${d.phrase}.* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [d.tu] },
          traps: [
            {
              spec: { type: "text", accept: [d.ud] },
              feedback: `*${d.ud}* is polite *usted* — speaking to your friend Marta uses informal **tú** (**${d.tu}**)!`,
            },
          ],
          hint: "Affirmative *tú* imperatives use the 3rd-person singular Present Indicative (irregular *ir → ve*).",
          solution: [`Informal *tú* imperative of *${d.inf}* = **${d.tu}**.`],
        };
      }

      // Tier 3: Plural ustedes commands + acabar de (present & imperfect) + future time clauses
      if (rng.bool(0.5)) {
        const d = rng.pick(dirVerbs);
        const dest = rng.pick(["la puerta de embarque", "el andén seis", "la aduana", "la salida"]);
        return {
          prompt: `Plural **ustedes** Announcement — Complete with the formal plural **ustedes imperative** of **${d.inf}**: *Señores pasajeros, para llegar a ${dest}, _______ ${d.phrase}.* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [d.uds, `ustedes ${d.uds}`] },
          traps: [
            {
              spec: { type: "text", accept: [d.ud] },
              feedback: `*Señores pasajeros* is plural (*ustedes*), so add **-n** to the *usted* form: **${d.uds}**!`,
            },
          ],
          hint: "Plural *ustedes* commands use the 3rd-person plural Present Subjunctive (*-en / -an*).",
          solution: [`Plural *ustedes* imperative of *${d.inf}* = **${d.uds}**.`],
        };
      }

      const acabarSubj: readonly { label: string; pres: string; imp: string }[] = [
        { label: "yo", pres: "acabo de", imp: "acababa de" },
        { label: "nosotros", pres: "acabamos de", imp: "acabábamos de" },
        { label: "el tren", pres: "acaba de", imp: "acababa de" },
        { label: "mis padres", pres: "acaban de", imp: "acababan de" },
      ];
      const actions = [
        "facturar el equipaje",
        "aterrizar en Madrid",
        "salir del andén tres",
        "cruzar la frontera",
        "comprar los billetes",
      ] as const;
      const s = rng.pick(acabarSubj);
      const act = rng.pick(actions);
      const isPast = rng.bool();
      const target = isPast ? `${s.imp} ${act}` : `${s.pres} ${act}`;
      const eng = isPast ? "had just" : "has/have just";
      return {
        prompt: `Grade-9 Verbal Idiom — Complete using **acabar de + ${act}** in the **${isPast ? "Imperfect ('had just…')" : "Present ('have/has just…')"}** for subject *${s.label}*: *${s.label === "yo" || s.label === "nosotros" ? `(${s.label}) ` : `${s.label} `}_______.* (Write *acabar de* conjugated + *${act}*.)`,
        answer: {
          type: "text",
          accept: s.label === "yo" || s.label === "nosotros" ? [target, `${s.label} ${target}`] : [target],
        },
        hint: `Conjugate *acabar* in the ${isPast ? "Imperfect (*acababa / acabábamos / acababan*)" : "Present (*acabo / acaba / acabamos / acaban*)"} + **de** + infinitive.`,
        solution: [
          `To express '${eng}', conjugate *acabar* in the ${isPast ? "Imperfect" : "Present"} + *de* + infinitive: **${target}**.`,
        ],
      };
    },
  },

  {
    id: "home-and-abroad.weather-three-tenses",
    topicId: "home-and-abroad",
    title: "Weather & climate across Past, Present, Future & Subjunctive",
    level: 3,
    guideRef: "weather-and-climate",
    generate(rng, tier) {
      const matrix = [
        {
          pillar: "hacer",
          tail: "mucho calor en la costa",
          pres: "hace",
          imp: "hacía",
          pret: "hizo",
          fut: "hará",
          subj: "haga",
          wrongVerb: "está",
        },
        {
          pillar: "hacer",
          tail: "mucho frío en la sierra",
          pres: "hace",
          imp: "hacía",
          pret: "hizo",
          fut: "hará",
          subj: "haga",
          wrongVerb: "es",
        },
        {
          pillar: "hacer",
          tail: "buen tiempo en la isla",
          pres: "hace",
          imp: "hacía",
          pret: "hizo",
          fut: "hará",
          subj: "haga",
          wrongVerb: "está",
        },
        {
          pillar: "hacer",
          tail: "mucho viento en el puerto",
          pres: "hace",
          imp: "hacía",
          pret: "hizo",
          fut: "hará",
          subj: "haga",
          wrongVerb: "está",
        },
        {
          pillar: "estar",
          tail: "muy nublado en el norte",
          pres: "está",
          imp: "estaba",
          pret: "estuvo",
          fut: "estará",
          subj: "esté",
          wrongVerb: "hace",
        },
        {
          pillar: "estar",
          tail: "totalmente despejado hoy",
          pres: "está",
          imp: "estaba",
          pret: "estuvo",
          fut: "estará",
          subj: "esté",
          wrongVerb: "es",
        },
        {
          pillar: "haber",
          tail: "mucha niebla en la autopista",
          pres: "hay",
          imp: "había",
          pret: "hubo",
          fut: "habrá",
          subj: "haya",
          wrongVerb: "está",
        },
        {
          pillar: "haber",
          tail: "una tormenta eléctrica fuerte",
          pres: "hay",
          imp: "había",
          pret: "hubo",
          fut: "habrá",
          subj: "haya",
          wrongVerb: "hace",
        },
        {
          pillar: "llover",
          tail: "a cántaros toda la tarde",
          pres: "llueve",
          imp: "llovía",
          pret: "llovió",
          fut: "lloverá",
          subj: "llueva",
          wrongVerb: "hace lluvioso",
        },
        {
          pillar: "nevar",
          tail: "en las montañas de Andorra",
          pres: "nieva",
          imp: "nevaba",
          pret: "nevó",
          fut: "nevará",
          subj: "nieve",
          wrongVerb: "hace nieve",
        },
      ] as const;

      if (tier === 1) {
        const w = rng.pick(matrix);
        const mode = rng.pick(["pres", "mucho-muy"] as const);
        if (mode === "mucho-muy" && (w.pillar === "hacer" || w.pillar === "estar")) {
          const isHacer = w.pillar === "hacer";
          const word = isHacer ? rng.pick(["calor", "frío", "viento", "sol"]) : rng.pick(["nublado", "despejado", "agradable"]);
          const ans = isHacer ? "mucho" : "muy";
          const trap = isHacer ? "muy" : "mucho";
          return {
            prompt: `Choose **mucho** or **muy** to complete the weather sentence accurately: *Hoy ${isHacer ? "hace" : "está"} _______ ${word}.* (Write ONLY **mucho** or **muy**.)`,
            answer: { type: "text", accept: [ans] },
            traps: [
              {
                spec: { type: "text", accept: [trap] },
                feedback: isHacer
                  ? `*${word}* is a masculine noun after *hace*, so use **mucho**, NEVER *muy*!`
                  : `*${word}* is an adjective after *está*, so use the adverb **muy**, NEVER *mucho*!`,
              },
            ],
            hint: "*Hacer* + noun takes *mucho*; *estar* + adjective takes *muy*.",
            solution: [
              isHacer
                ? `After *hace*, *${word}* is a noun → **mucho**.`
                : `After *está*, *${word}* is an adjective → **muy**.`,
            ],
          };
        }
        const cleanTail = w.tail.replace(" hoy", "");
        return {
          prompt: `Present Weather — Complete with the **present** (3rd person singular) of **${w.pillar}**: *Ahora mismo _______ ${cleanTail}.* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [w.pres] },
          traps: [
            {
              spec: { type: "text", accept: [w.wrongVerb] },
              feedback: `Don't mix weather pillars — this expression uses **${w.pillar}** (**${w.pres}**)!`,
            },
          ],
          hint: `Check the 3rd-person singular present of *${w.pillar}* (watch boot changes in *llover → llueve*, *nevar → nieva*!).`,
          solution: [`3rd-person singular present of *${w.pillar}* = **${w.pres}**.`],
        };
      }

      if (tier === 2) {
        const w = rng.pick(matrix);
        const cleanTail = w.tail.replace(" hoy", "");
        const t = rng.pick(["imp", "pret", "fut"] as const);
        const label =
          t === "imp"
            ? { name: "imperfect (ongoing background)", cue: "Cuando salimos del hotel," }
            : t === "pret"
              ? { name: "preterite (completed past day)", cue: "El martes pasado" }
              : { name: "simple future (forecast)", cue: "Mañana según el pronóstico" };
        const ans = w[t];
        const trap = t === "fut" ? w.pres : t === "pret" ? w.imp : w.pret;
        return {
          prompt: `3-Time-Frame Weather — Complete with the **${label.name}** (3rd person singular) of **${w.pillar}**: *${label.cue} _______ ${cleanTail}.* (Write ONLY the missing verb.)`,
          answer: { type: "text", accept: [ans] },
          traps: [
            {
              spec: { type: "text", accept: [trap] },
              feedback: `Mind the cue (*${label.cue}*) — you need the **${label.name}** (**${ans}**), not *${trap}*!`,
            },
          ],
          hint: "Check irregular stems: *hacer → hizo / hará*, *haber → había / hubo / habrá*, and accents on *-ía / -ó / -á*!",
          solution: [
            `Cue *${label.cue}* requires 3rd-person singular ${label.name} of *${w.pillar}*: **${ans}**.`,
          ],
        };
      }

      // Tier 3: Subjunctive weather triggers (Ojalá, Espero que, No creo que, Aunque)
      const w = rng.pick(matrix);
      const cleanTail = w.tail.replace(" hoy", "");
      const trig = rng.pick([
        "Ojalá no",
        "Espero que",
        "No creo que",
        "Dudo que",
        "Es posible que",
      ]);
      return {
        prompt: `Grade-9 Weather + Subjunctive — Complete with the **present subjunctive** (3rd person singular) of **${w.pillar}**: *${trig} _______ ${cleanTail} durante el festival.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept: [w.subj] },
        traps: [
          {
            spec: { type: "text", accept: [w.pres, w.fut] },
            feedback: `*${trig}* triggers the **Present Subjunctive** (**${w.subj}**), never indicative *${w.pres}* or future *${w.fut}*!`,
          },
        ],
        hint: "Recall weather DISHES & stem-changers in the subjunctive: *hacer → haga*, *estar → esté*, *haber → haya*, *llover → llueva*, *nevar → nieve*.",
        solution: [
          `Trigger *${trig}* requires 3rd-person singular Present Subjunctive of *${w.pillar}*: **${w.subj}**.`,
        ],
      };
    },
  },
];
