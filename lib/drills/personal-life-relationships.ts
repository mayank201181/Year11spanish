import type { Drill } from "./types.ts";
import { acceptedForms, conjugate, PERSON_LABEL, type Person, type Tense } from "../spanish/verbs.ts";

const CORE_PERSONS: readonly Person[] = ["yo", "tú", "él", "nosotros", "ellos"];
const ALL_PERSONS: readonly Person[] = ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];

const SUBJECT_CONTEXT: Record<Person, { label: string; phrase: string }> = {
  yo: { label: "yo", phrase: "Yo" },
  tú: { label: "tú", phrase: "Tú" },
  él: { label: "él / ella", phrase: "Mi prima" },
  nosotros: { label: "nosotros", phrase: "Mi hermano y yo" },
  vosotros: { label: "vosotros", phrase: "Vosotros" },
  ellos: { label: "ellos / ellas", phrase: "Mis primos" },
};

export const drills: Drill[] = [
  {
    id: "personal-life-relationships.reflexive-verbs",
    topicId: "personal-life-relationships",
    title: "Reflexive & Reciprocal Relationship Verbs",
    level: 1,
    guideRef: "family-and-descriptions",
    generate(rng, tier) {
      const verbs: readonly { inf: string; tail: string }[] =
        tier === 1
          ? [
              { inf: "llevarse", tail: "muy bien con toda la familia" },
              { inf: "pelearse", tail: "rara vez por tonterías" },
              { inf: "casarse", tail: "en una ceremonia civil sencilla" },
              { inf: "divorciarse", tail: "de mutuo acuerdo" },
            ]
          : [
              { inf: "llevarse", tail: "fenomenal desde la infancia" },
              { inf: "pelearse", tail: "por el mando de la televisión" },
              { inf: "casarse", tail: "con su pareja en Sevilla" },
              { inf: "divorciarse", tail: "tras varios años de convivencia" },
              { inf: "sentirse", tail: "muy apoyado/a en casa" },
            ];

      const tenses: readonly { tense: Tense; label: string; cue: string }[] =
        tier === 1
          ? [
              { tense: "present", label: "present indicative", cue: "Normalmente," },
              { tense: "near-future", label: "near future (ir a + infinitive)", cue: "El año próximo," },
            ]
          : tier === 2
            ? [
                { tense: "present", label: "present indicative", cue: "Hoy en día," },
                { tense: "preterite", label: "preterite", cue: "El año pasado," },
                { tense: "imperfect", label: "imperfect", cue: "En aquella época," },
              ]
            : [
                { tense: "preterite", label: "preterite", cue: "Hace dos años," },
                { tense: "future", label: "simple future", cue: "En el futuro," },
                { tense: "conditional", label: "conditional", cue: "En esa situación," },
                { tense: "subjunctive", label: "present subjunctive", cue: "Es importante que" },
              ];

      const v = rng.pick(verbs);
      const t = rng.pick(tenses);
      const p = rng.pick(tier === 1 ? CORE_PERSONS : ALL_PERSONS);
      const sub = SUBJECT_CONTEXT[p];
      const ans = conjugate(v.inf, t.tense, p);
      const accept = acceptedForms(v.inf, t.tense, p);

      // Bare non-reflexive form as targeted trap
      const bareWord = ans.replace(/^(me|te|se|nos|os)\s+/, "");
      const traps =
        bareWord !== ans && !accept.includes(bareWord)
          ? [
              {
                spec: { type: "text" as const, accept: [bareWord] },
                feedback: `Don't drop the reflexive pronoun! *${v.inf}* requires **me / te / se / nos / os** → **${ans}**.`,
              },
            ]
          : undefined;

      const sentence =
        t.tense === "subjunctive"
          ? `${t.cue} ${sub.phrase.toLowerCase()} _______ ${v.tail}.`
          : `${t.cue} ${sub.phrase.toLowerCase()} _______ ${v.tail}.`;

      return {
        prompt: `Complete with the **${t.label}** form of **${v.inf}** (*${sub.label}*): ${sentence} (Write ONLY the missing reflexive verb phrase.)`,
        answer: { type: "text", accept, display: ans },
        solution: [
          `Identify person: *${PERSON_LABEL[p]}* and tense/mood: **${t.label}**.`,
          `Conjugate reflexive **${v.inf}** including its matching reflexive pronoun → **${ans}**.`,
        ],
        hint: `Remember that **${v.inf}** is reflexive — include the pronoun (*me, te, se, nos, os*) with the ${t.label} form!`,
        traps,
      };
    },
  },

  {
    id: "personal-life-relationships.childhood-imperfect",
    topicId: "personal-life-relationships",
    title: "Childhood Imperfect (Solía, Era, Iba, Veía) vs Preterite",
    level: 2,
    guideRef: "childhood-memories-imperfect",
    generate(rng, tier) {
      if (tier === 1) {
        const items: readonly { inf: string; tail: string }[] = [
          { inf: "ser", tail: "muy hablador/a de pequeño/a" },
          { inf: "ir", tail: "al parque con los abuelos cada tarde" },
          { inf: "ver", tail: "dibujos animados los sábados" },
          { inf: "jugar", tail: "al escondite en la plaza" },
          { inf: "vivir", tail: "en un barrio muy tranquilo" },
          { inf: "compartir", tail: "todos los juguetes con los primos" },
        ];
        const it = rng.pick(items);
        const p = rng.pick(CORE_PERSONS);
        const ans = conjugate(it.inf, "imperfect", p);
        const accept = acceptedForms(it.inf, "imperfect", p);
        const pret = conjugate(it.inf, "preterite", p);
        return {
          prompt: `Complete the childhood memory with the **imperfect** form of **${it.inf}** (*${SUBJECT_CONTEXT[p].label}*): Cuando era joven, ${SUBJECT_CONTEXT[p].phrase.toLowerCase()} _______ ${it.tail}. (Write ONLY the missing verb.)`,
          answer: { type: "text", accept, display: ans },
          solution: [
            `Ongoing childhood habits and states require the **Imperfect** tense.`,
            `**${it.inf}** (*${SUBJECT_CONTEXT[p].label}*, imperfect) → **${ans}**.`,
          ],
          hint:
            it.inf === "ser" || it.inf === "ir" || it.inf === "ver"
              ? `**${it.inf}** is one of the ONLY 3 irregular verbs in the Imperfect (S-I-V: *era, iba, veía*)!`
              : `Regular Imperfect: *-ar → -aba…*, *-er/-ir → -ía…* (no stem changes!).`,
          traps: !accept.includes(pret)
            ? [
                {
                  spec: { type: "text", accept: [pret] },
                  feedback: `*${pret}* is the preterite (single event). Repeated childhood memories need the **Imperfect**: **${ans}**!`,
                },
              ]
            : undefined,
        };
      }

      if (tier === 2) {
        const habits: readonly { inf: string; activity: string }[] = [
          { inf: "jugar", activity: "jugar en la calle sin móvil" },
          { inf: "visitar", activity: "visitar a nuestros tíos los domingos" },
          { inf: "comer", activity: "comer paella en casa de la abuela" },
          { inf: "leer", activity: "leer cuentos antes de dormir" },
          { inf: "escuchar", activity: "escuchar las historias del abuelo" },
          { inf: "cocinar", activity: "cocinar galletas en invierno" },
        ];
        const h = rng.pick(habits);
        const p = rng.pick(ALL_PERSONS);
        const solia = conjugate("soler", "imperfect", p);
        const fullAns = `${solia} ${h.inf}`;
        const accept = acceptedForms("soler", "imperfect", p).map((f) => `${f} ${h.inf}`);
        const presentTrap = `${conjugate("soler", "present", p)} ${h.inf}`;
        return {
          prompt: `Express **'used to ${h.inf === "jugar" ? "play" : "do this"}'** using the **imperfect of soler + infinitive** for *${SUBJECT_CONTEXT[p].label}* with **${h.inf}**: De pequeño/a, _______ ${h.activity.slice(h.inf.length + 1)}. (Write ONLY *solía… + ${h.inf}*.)`,
          answer: { type: "text", accept, display: fullAns },
          solution: [
            `Conjugate **soler** in the imperfect for *${SUBJECT_CONTEXT[p].label}*: **${solia}** (no *o → ue* stem change in the imperfect!).`,
            `Follow directly with the infinitive **${h.inf}** → **${fullAns}**.`,
          ],
          hint: `Use imperfect **solía / solías / solíamos / solían** (with an accent on *í*) + infinitive **${h.inf}**.`,
          traps: !accept.includes(presentTrap)
            ? [
                {
                  spec: { type: "text", accept: [presentTrap] },
                  feedback: `That uses the present tense (*suelo…* = usually do now). For childhood 'used to', use the imperfect: **${fullAns}**!`,
                },
              ]
            : undefined,
        };
      }

      // Tier 3: Aspect contrast — choose Imperfect vs Preterite from explicit cue
      const scenarios: readonly {
        cue: string;
        inf: string;
        person: Person;
        tense: "imperfect" | "preterite";
        tail: string;
        why: string;
      }[] = [
        { cue: "Todos los veranos de mi niñez,", inf: "ir", person: "nosotros", tense: "imperfect", tail: "al pueblo de mis abuelos", why: "Repeated childhood routine (*todos los veranos*) → Imperfect **íbamos**." },
        { cue: "El día en que cumplí diez años,", inf: "ir", person: "nosotros", tense: "preterite", tail: "a un parque de atracciones por primera vez", why: "Single dated birthday milestone (*por primera vez*) → Preterite **fuimos**." },
        { cue: "Cuando mis abuelos eran jóvenes,", inf: "ver", person: "ellos", tense: "imperfect", tail: "la televisión en blanco y negro", why: "Ongoing historical background (*cuando eran jóvenes*) → Imperfect **veían**." },
        { cue: "Anoche después de la cena,", inf: "ver", person: "yo", tense: "preterite", tail: "un documental sobre mi deportista favorita", why: "Bounded single event last night (*anoche*) → Preterite **vi**." },
        { cue: "De pequeña, mi hermana siempre", inf: "ser", person: "él", tense: "imperfect", tail: "muy tímida con los desconocidos", why: "Ongoing childhood character (*de pequeña, siempre*) → Imperfect **era**." },
        { cue: "La boda de mi primo el sábado pasado", inf: "ser", person: "él", tense: "preterite", tail: "absolutamente inolvidable", why: "Completed event last Saturday (*el sábado pasado*) → Preterite **fue**." },
        { cue: "En aquella época, nosotros no", inf: "tener", person: "nosotros", tense: "imperfect", tail: "redes sociales ni teléfonos inteligentes", why: "Ongoing past state (*en aquella época*) → Imperfect **teníamos**." },
        { cue: "Ayer por la tarde, yo", inf: "tener", person: "yo", tense: "preterite", tail: "una discusión tonta con mi hermano", why: "Single completed incident yesterday (*ayer por la tarde*) → Preterite **tuve**." },
        { cue: "Mientras vivía en Madrid, mi tía", inf: "conocer", person: "él", tense: "preterite", tail: "a su futuro marido en el metro", why: "Single interrupting event ('met for the first time') → Preterite **conoció**." },
        { cue: "Cuando tenía seis años, yo ya", inf: "saber", person: "yo", tense: "imperfect", tail: "nadar sin flotador", why: "Ongoing ability at age six → Imperfect **sabía**." },
        { cue: "Finalmente, tras meses de esfuerzo, ella", inf: "conseguir", person: "él", tense: "preterite", tail: "superar todos sus miedos", why: "Completed breakthrough (*finalmente*) → Preterite **consiguió**." },
        { cue: "Cada domingo después de comer, mis padres", inf: "hablar", person: "ellos", tense: "imperfect", tail: "durante horas en la sobremesa", why: "Habitual Sunday routine (*cada domingo*) → Imperfect **hablaban**." },
        { cue: "El verano pasado, mis amigos y yo", inf: "hacer", person: "nosotros", tense: "preterite", tail: "un viaje juntos al norte de España", why: "Single bounded trip (*el verano pasado*) → Preterite **hicimos**." },
        { cue: "De niños, vosotros siempre", inf: "compartir", person: "vosotros", tense: "imperfect", tail: "el bocadillo en el recreo", why: "Habitual childhood action (*de niños, siempre*) → Imperfect **compartíais**." },
        { cue: "Hace cinco años, mi hermano mayor", inf: "hacer", person: "él", tense: "preterite", tail: "las paces con su antiguo amigo", why: "Single completed event (*hace cinco años*) → Preterite **hizo**." },
        { cue: "En mi infancia, yo", inf: "recordar", person: "yo", tense: "imperfect", tail: "todos los cumpleaños de mis primos", why: "Habitual mental state (*en mi infancia*) → Imperfect **recordaba**." },
        { cue: "El mes pasado, mis tíos", inf: "celebrar", person: "ellos", tense: "preterite", tail: "sus bodas de plata con toda la familia", why: "Single completed anniversary (*el mes pasado*) → Preterite **celebraron**." },
        { cue: "Cuando íbamos al colegio primario, tú", inf: "ser", person: "tú", tense: "imperfect", tail: "el más hablador de la pandilla", why: "Ongoing childhood description → Imperfect **eras**." },
      ];

      const sc = rng.pick(scenarios);
      const ans = conjugate(sc.inf, sc.tense, sc.person);
      const accept = acceptedForms(sc.inf, sc.tense, sc.person);
      const otherTense = sc.tense === "imperfect" ? "preterite" : "imperfect";
      const wrongForm = conjugate(sc.inf, otherTense, sc.person);

      return {
        prompt: `Imperfect or Preterite? Complete with the correct past form of **${sc.inf}** (*${SUBJECT_CONTEXT[sc.person].label}*): ${sc.cue} _______ ${sc.tail}. (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: ans },
        solution: [
          sc.why,
          `Correct form of **${sc.inf}** (*${SUBJECT_CONTEXT[sc.person].label}*, ${sc.tense}) → **${ans}**.`,
        ],
        hint: `Read the time marker (*${sc.cue}*) carefully: ongoing/repeated past = Imperfect; single completed event = Preterite!`,
        traps: !accept.includes(wrongForm)
          ? [
              {
                spec: { type: "text", accept: [wrongForm] },
                feedback: `Check the time marker! ${sc.why}`,
              },
            ]
          : undefined,
      };
    },
  },

  {
    id: "personal-life-relationships.agreement-and-personal-a",
    topicId: "personal-life-relationships",
    title: "Personal 'a', Adjective Agreement & Ideal-Friend Subjunctive",
    level: 2,
    guideRef: "friends-and-peer-pressure",
    generate(rng, tier) {
      if (tier === 1) {
        // Adjective agreement including collective la familia & false friends
        const adjItems: readonly {
          stem: string;
          base: string;
          ans: string;
          wrong: string;
          note: string;
        }[] = [
          { stem: "Me llevo bien con **mi familia** porque es muy _______", base: "unido", ans: "unida", wrong: "unidos", note: "*La familia* is singular feminine → **unida**." },
          { stem: "Quiero mucho a **mi familia** porque es súper _______", base: "comprensivo", ans: "comprensiva", wrong: "comprensivos", note: "*La familia* is singular feminine → **comprensiva**." },
          { stem: "**Mis padres** siempre me escuchan; son muy _______", base: "comprensivo", ans: "comprensivos", wrong: "comprensiva", note: "*Mis padres* is masculine plural → **comprensivos**." },
          { stem: "**Mis hermanas menores** son chicas muy _______", base: "hablador", ans: "habladoras", wrong: "habladores", note: "Adjectives in *-dor* add *-as* in feminine plural → **habladoras**." },
          { stem: "**Mi abuela** es una mujer sumamente _______", base: "trabajador", ans: "trabajadora", wrong: "trabajador", note: "Adjectives in *-dor* add *-a* in feminine singular → **trabajadora**." },
          { stem: "Aunque **mi hermano** tiene quince años, a veces es _______", base: "egoísta", ans: "egoísta", wrong: "egoísto", note: "Adjectives ending in *-ista* NEVER change to *-isto* → **egoísta**." },
          { stem: "**Mis mejores amigos** son siempre _______ y sinceros", base: "fiel", ans: "fieles", wrong: "fiels", note: "Consonant-ending *fiel* adds *-es* in the plural → **fieles**." },
          { stem: "**Mi madre** toma decisiones sabias; es muy _______ (level-headed / sensible)", base: "sensato", ans: "sensata", wrong: "sensible", note: "English 'sensible' = *sensato/a* (*sensible* = sensitive!) → **sensata**." },
          { stem: "**Mi primo** nunca cambia de opinión; es demasiado _______", base: "terco", ans: "terco", wrong: "terca", note: "Masculine singular *mi primo* → **terco**." },
          { stem: "**Mis abuelas** son personas muy _______ con todos sus nietos", base: "cariñoso", ans: "cariñosas", wrong: "cariñosos", note: "Feminine plural *mis abuelas* → **cariñosas**." },
          { stem: "Cuando se mudó de ciudad, **mi amiga** se sintió _______", base: "aislado", ans: "aislada", wrong: "aislado", note: "Feminine singular *mi amiga* → **aislada**." },
          { stem: "**La pareja** de mi tío es una persona muy _______", base: "paciente", ans: "paciente", wrong: "pacienta", note: "Adjectives in *-e* stay *-e* for both genders → **paciente**." },
          { stem: "**Mis tías** están muy _______ de mis notas", base: "orgulloso", ans: "orgullosas", wrong: "orgullosos", note: "Feminine plural *mis tías* → **orgullosas**." },
          { stem: "**Mi mejor amigo** es muy _______ (sensible / level-headed)", base: "sensato", ans: "sensato", wrong: "sensible", note: "Masculine singular of *sensato* ('sensible') → **sensato**." },
          { stem: "**Las familias monoparentales** suelen ser muy _______", base: "independiente", ans: "independientes", wrong: "independientas", note: "Plural of *-e* adjective *independiente* → **independientes**." },
          { stem: "**Mi hermana gemela** nunca miente; es muy _______", base: "sincero", ans: "sincera", wrong: "sincero", note: "Feminine singular *mi hermana gemela* → **sincera**." },
          { stem: "**Nuestros vecinos** son mayores pero muy _______", base: "generoso", ans: "generosos", wrong: "generosas", note: "Masculine plural *nuestros vecinos* → **generosos**." },
          { stem: "**Mi madrina** es una mujer muy _______ y optimista", base: "maduro", ans: "madura", wrong: "maduro", note: "Feminine singular *mi madrina* → **madura**." },
        ];
        const it = rng.pick(adjItems);
        return {
          prompt: `Complete with the accurately agreed form of **${it.base}**: ${it.stem}. (Write ONLY the single Spanish adjective.)`,
          answer: { type: "text", accept: [it.ans], display: it.ans },
          solution: [it.note],
          hint: `Check the exact grammatical gender and number of the highlighted subject!`,
          traps: [
            {
              spec: { type: "text", accept: [it.wrong] },
              feedback: it.note,
            },
          ],
        };
      }

      if (tier === 2) {
        // Personal 'a' vs al vs no preposition (write 1-2 words with the article/possessive)
        const paItems: readonly {
          verb: string;
          obj: string;
          enObj: string;
          ans: string[];
          disp: string;
          trap: string;
          why: string;
        }[] = [
          { verb: "Admiro muchísimo", obj: "mi abuela", enObj: "my grandmother", ans: ["a mi abuela"], disp: "a mi abuela", trap: "mi abuela", why: "Specific person as direct object requires **personal *a*** → **a mi abuela**." },
          { verb: "Siempre apoyo", obj: "mis amigos", enObj: "my friends", ans: ["a mis amigos"], disp: "a mis amigos", trap: "mis amigos", why: "Specific people as direct object require **personal *a*** → **a mis amigos**." },
          { verb: "Todos respetan", obj: "el entrenador", enObj: "the coach (male)", ans: ["al entrenador"], disp: "al entrenador", trap: "a el entrenador", why: "Personal *a* + *el* contracts obligatorily to **al** → **al entrenador**." },
          { verb: "La fundación ayuda", obj: "los jóvenes", enObj: "the young people", ans: ["a los jóvenes"], disp: "a los jóvenes", trap: "los jóvenes", why: "People receiving *ayudar* take **personal *a*** → **a los jóvenes**." },
          { verb: "Echo mucho de menos", obj: "mis primos", enObj: "my cousins", ans: ["a mis primos"], disp: "a mis primos", trap: "mis primos", why: "*Echar de menos* before people takes **personal *a*** → **a mis primos**." },
          { verb: "Ayer conocí", obj: "el novio de Ana", enObj: "Ana's boyfriend", ans: ["al novio de Ana"], disp: "al novio de Ana", trap: "el novio de Ana", why: "*Conocer* + person needs personal *a*, contracting *a + el* → **al novio de Ana**." },
          { verb: "Mi modelo a seguir superó", obj: "muchos obstáculos", enObj: "many obstacles", ans: ["muchos obstáculos"], disp: "muchos obstáculos", trap: "a muchos obstáculos", why: "*Obstáculos* are inanimate things — NO personal *a*! → **muchos obstáculos**." },
          { verb: "Admiro profundamente", obj: "su valentía", enObj: "her bravery", ans: ["su valentía"], disp: "su valentía", trap: "a su valentía", why: "Abstract quality *su valentía* is NOT a person — NO personal *a*! → **su valentía**." },
          { verb: "En casa cuidamos mucho", obj: "nuestros abuelos", enObj: "our grandparents", ans: ["a nuestros abuelos"], disp: "a nuestros abuelos", trap: "nuestros abuelos", why: "*Cuidar* before people takes **personal *a*** → **a nuestros abuelos**." },
          { verb: "El voluntario escucha", obj: "el paciente", enObj: "the male patient", ans: ["al paciente"], disp: "al paciente", trap: "el paciente", why: "*Escuchar* has no 'to' of its own, but before *el paciente* it takes personal *a + el* → **al paciente**." },
          { verb: "Ella defiende siempre", obj: "los derechos humanos", enObj: "human rights", ans: ["los derechos humanos"], disp: "los derechos humanos", trap: "a los derechos humanos", why: "*Los derechos humanos* is an abstract noun phrase — NO personal *a*! → **los derechos humanos**." },
          { verb: "En mi familia tenemos", obj: "tres primos pequeños", enObj: "three young cousins", ans: ["tres primos pequeños"], disp: "tres primos pequeños", trap: "a tres primos pequeños", why: "Standard family possession with **tener** omits personal *a* → **tres primos pequeños**." },
          { verb: "Respeto profundamente", obj: "la directora", enObj: "the headteacher (female)", ans: ["a la directora"], disp: "a la directora", trap: "la directora", why: "Specific person takes **personal *a*** → **a la directora**." },
          { verb: "Nunca debemos criticar", obj: "nuestros compañeros", enObj: "our classmates", ans: ["a nuestros compañeros"], disp: "a nuestros compañeros", trap: "nuestros compañeros", why: "People as direct object of *criticar* take **personal *a*** → **a nuestros compañeros**." },
          { verb: "La científica logró", obj: "el éxito internacional", enObj: "international success", ans: ["el éxito internacional"], disp: "el éxito internacional", trap: "al éxito internacional", why: "*El éxito* is an abstract thing — NO personal *a*! → **el éxito internacional**." },
          { verb: "Siempre visito", obj: "mi padrastro", enObj: "my stepfather", ans: ["a mi padrastro"], disp: "a mi padrastro", trap: "mi padrastro", why: "Visiting a person requires **personal *a*** → **a mi padrastro**." },
        ];
        const it = rng.pick(paItems);
        return {
          prompt: `Personal *a* Check — Complete the sentence using **${it.obj}** (${it.enObj}), adding **a** (or contracting to **al**) ONLY if Spanish grammar requires it: *${it.verb} _______.*`,
          answer: { type: "text", accept: it.ans, display: it.disp },
          solution: [it.why],
          hint: "Ask: 1) Is the direct object a specific person/people (and not basic *tener*)? 2) If *a* comes before *el*, remember *a + el → al*!",
          traps: [
            {
              spec: { type: "text", accept: [it.trap] },
              feedback: it.why,
            },
          ],
        };
      }

      // Tier 3: Ideal friend / advice subjunctive vs known friend indicative
      const openers: readonly { text: string; subj: boolean; person: Person }[] = [
        { text: "Busco un buen amigo que", subj: true, person: "él" },
        { text: "No conozco a nadie que", subj: true, person: "él" },
        { text: "Quiero una pareja que", subj: true, person: "él" },
        { text: "Tengo un mejor amigo que", subj: false, person: "él" },
        { text: "Conozco a dos primas que", subj: false, person: "ellos" },
        { text: "Necesito amigos sinceros que", subj: true, person: "ellos" },
      ];
      const predicates: readonly { inf: string; rest: string }[] = [
        { inf: "ser", rest: "totalmente leal(es) en los momentos duros" },
        { inf: "saber", rest: "guardar un secreto importante" },
        { inf: "decir", rest: "siempre la verdad sin mentir" },
        { inf: "tener", rest: "mucho sentido del humor" },
        { inf: "apoyar", rest: "mis decisiones personales" },
        { inf: "respetar", rest: "las opiniones de los demás" },
      ];
      const op = rng.pick(openers);
      const pr = rng.pick(predicates);
      const targetTense: Tense = op.subj ? "subjunctive" : "present";
      const ans = conjugate(pr.inf, targetTense, op.person);
      const accept = acceptedForms(pr.inf, targetTense, op.person);
      const wrong = conjugate(pr.inf, op.subj ? "present" : "subjunctive", op.person);

      return {
        prompt: `Indicative or Subjunctive? Complete with the correct present form of **${pr.inf}** (*${SUBJECT_CONTEXT[op.person].label}*): *${op.text} _______ ${pr.rest.replace("(es)", op.person === "ellos" ? "es" : "")}.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: ans },
        solution: [
          op.subj
            ? `*${op.text}…* refers to a **hypothetical or non-existent** person → **present subjunctive**!`
            : `*${op.text}…* refers to a **real, known** person → **present indicative**!`,
          `Correct form of **${pr.inf}** → **${ans}**.`,
        ],
        hint: op.subj
          ? "Unknown, desired, or negated antecedent (*busco…, quiero…, no conozco a nadie…*) triggers the **present subjunctive**!"
          : "Specific existing friend (*tengo…, conozco a…*) takes the **present indicative**!",
        traps: !accept.includes(wrong)
          ? [
              {
                spec: { type: "text", accept: [wrong] },
                feedback: op.subj
                  ? `*${op.text}…* describes an ideal/non-existent person, so use the **present subjunctive**: **${ans}**!`
                  : `*${op.text}…* describes a real, known person, so keep the **present indicative**: **${ans}**!`,
              },
            ]
          : undefined,
      };
    },
  },

  {
    id: "personal-life-relationships.role-models-and-prepositions",
    topicId: "personal-life-relationships",
    title: "Preposition Mark-Savers, Partnerships & Role-Model Tenses",
    level: 3,
    guideRef: "marriage-and-partnerships",
    generate(rng, tier) {
      if (tier === 1) {
        const prepItems: readonly { sentence: string; ans: string[]; disp: string; trap: string; rule: string }[] = [
          { sentence: "En el futuro quiero casarme _______ alguien que comparta mis valores.", ans: ["con"], disp: "con", trap: "a", rule: "**casarse CON alguien** = to marry someone (never *a*!)." },
          { sentence: "Siempre confío _______ mi abuela porque sabe escuchar.", ans: ["en"], disp: "en", trap: "a", rule: "**confiar EN alguien** = to trust someone (never *a*!)." },
          { sentence: "Desde pequeña, Vanishree sueña _______ cambiar el mundo.", ans: ["con"], disp: "con", trap: "de", rule: "**soñar CON** = to dream of/about (never *de*!)." },
          { sentence: "Físicamente me parezco mucho _______ mi padre.", ans: ["a"], disp: "a", trap: "con", rule: "**parecerse A alguien** = to look like / resemble someone." },
          { sentence: "Mi modelo a seguir lucha incansablemente _______ los derechos humanos.", ans: ["por"], disp: "por", trap: "para", rule: "**luchar POR una causa** = to fight/campaign for a cause." },
          { sentence: "Me llevo de maravilla _______ mis compañeros de clase.", ans: ["con"], disp: "con", trap: "de", rule: "**llevarse bien CON alguien** = to get along well with someone." },
          { sentence: "Está muy mal burlarse _______ los alumnos más tímidos.", ans: ["de"], disp: "de", trap: "a", rule: "**burlarse DE alguien** = to make fun of someone." },
          { sentence: "Las redes sociales influyen muchísimo _______ la autoestima juvenil.", ans: ["en"], disp: "en", trap: "a", rule: "**influir EN** = to influence." },
          { sentence: "Sé que siempre puedo contar _______ mi hermana mayor.", ans: ["con"], disp: "con", trap: "en", rule: "**contar CON alguien** = to count/rely on someone." },
          { sentence: "Mis tíos se enamoraron _______ primera vista en la universidad... wait: mi tío se enamoró _______ mi tía en Granada.", ans: ["de"], disp: "de", trap: "con", rule: "**enamorarse DE alguien** = to fall in love with someone." },
          { sentence: "Sus padres se divorciaron _______ mutuo acuerdo... wait: ella se divorció _______ su primer marido hace años.", ans: ["de"], disp: "de", trap: "con", rule: "**divorciarse DE alguien** = to get divorced from someone." },
          { sentence: "Un buen amigo siempre te ayuda _______ superar los momentos difíciles.", ans: ["a"], disp: "a", trap: "de", rule: "**ayudar A + infinitive** = to help to do something." },
          { sentence: "Estoy súper orgullosa _______ mi hermano menor por su esfuerzo.", ans: ["de"], disp: "de", trap: "por", rule: "**estar orgulloso/a DE** = to be proud of." },
          { sentence: "Prefiero ahorrar dinero antes _______ independizarme.", ans: ["de"], disp: "de", trap: "que", rule: "**antes DE + infinitive** = before doing something." },
          { sentence: "Mi primo mayor siempre se pelea _______ su hermana por el ordenador.", ans: ["con"], disp: "con", trap: "a", rule: "**pelearse CON alguien** = to argue/fight with someone." },
          { sentence: "Después _______ casarse, vivieron dos años en Lisboa.", ans: ["de"], disp: "de", trap: "a", rule: "**después DE + infinitive** = after doing something." },
        ];
        // Clean sentence 10 & 11 cleanly without internal notes
        const cleanPrepItems = prepItems.map((x) => ({
          ...x,
          sentence: x.sentence
            .replace("Mis tíos se enamoraron _______ primera vista en la universidad... wait: mi", "Mi")
            .replace("Sus padres se divorciaron _______ mutuo acuerdo... wait: ella", "Ella"),
        }));
        const it = rng.pick(cleanPrepItems);
        return {
          prompt: `Write the **single Spanish preposition** that completes the sentence: *${it.sentence}*`,
          answer: { type: "text", accept: it.ans, display: it.disp },
          solution: [it.rule],
          hint: "Recall the exact fixed Spanish verb + preposition chunk rather than translating from English!",
          traps: [
            {
              spec: { type: "text", accept: [it.trap] },
              feedback: it.rule,
            },
          ],
        };
      }

      if (tier === 2) {
        // Preposition + infinitive with person-matched reflexive pronoun
        const connectors = ["antes de", "después de", "en vez de", "sin"] as const;
        const subjects: readonly { starter: string; pron: string; label: string }[] = [
          { starter: "Quiero viajar por el mundo", pron: "me", label: "yo" },
          { starter: "¿Prefieres terminar tus estudios", pron: "te", label: "tú" },
          { starter: "Mi prima decidió ahorrar dinero", pron: "se", label: "ella" },
          { starter: "Preferimos tener un empleo estable", pron: "nos", label: "nosotros" },
          { starter: "Muchos jóvenes eligen convivir", pron: "se", label: "ellos" },
        ];
        const infs: readonly { base: string; reflexive: string }[] = [
          { base: "casar", reflexive: "casarse" },
          { base: "independizar", reflexive: "independizarse" },
          { base: "comprometer", reflexive: "comprometerse" },
        ];
        const conn = rng.pick(connectors);
        const sub = rng.pick(subjects);
        const inf = rng.pick(infs);
        const ans = `${inf.base}${sub.pron}`;
        const gerundTrap = `${inf.base === "comprometer" ? "comprometiéndo" : inf.base + "ándo"}${sub.pron}`;
        const punct = sub.starter.startsWith("¿") ? "?" : ".";

        return {
          prompt: `Complete after **${conn}** using the **infinitive + attached reflexive pronoun** of **${inf.reflexive}** matching *${sub.label}*: *${sub.starter} ${conn} _______${punct}* (Write ONLY the single word.)`,
          answer: { type: "text", accept: [ans], display: ans },
          solution: [
            `After preposition **${conn}**, Spanish ALWAYS uses the **infinitive** (*${inf.base}-*), never the gerund.`,
            `Match the attached reflexive pronoun to *${sub.label}* (**-${sub.pron}**) → **${ans}**.`,
          ],
          hint: `Keep infinitive *${inf.base}* and attach the reflexive pronoun for *${sub.label}* (*me / te / se / nos*) onto the end as one word!`,
          traps: [
            {
              spec: { type: "text", accept: [gerundTrap] },
              feedback: `Never use an *-ando/-iendo* gerund after a preposition in Spanish! Use the infinitive + pronoun: **${ans}**.`,
            },
          ],
        };
      }

      // Tier 3: Role-model Preterite achievements & Conditional/Future aspirations
      const roleVerbs: readonly { inf: string; tense: "preterite" | "conditional" | "future"; cue: string; tail: string }[] = [
        { inf: "superar", tense: "preterite", cue: "A pesar de las dificultades,", tail: "todos los obstáculos con coraje" },
        { inf: "conseguir", tense: "preterite", cue: "Tras años de estudio,", tail: "una beca internacional histórica" },
        { inf: "hacer", tense: "preterite", cue: "Durante la crisis,", tail: "todo lo posible por ayudar al barrio" },
        { inf: "apoyar", tense: "preterite", cue: "Desde el primer día,", tail: "a las familias más vulnerables" },
        { inf: "ayudar", tense: "conditional", cue: "Si tuviera millones de euros,", tail: "a construir escuelas rurales" },
        { inf: "seguir", tense: "future", cue: "Gracias a su inspiración,", tail: "luchando por la igualdad" },
        { inf: "tener", tense: "conditional", cue: "Con más recursos,", tail: "un impacto aún mayor en el mundo" },
      ];
      const rv = rng.pick(roleVerbs);
      const p = rng.pick(["yo", "él", "nosotros", "ellos"] as const);
      const ans = conjugate(rv.inf, rv.tense, p);
      const accept = acceptedForms(rv.inf, rv.tense, p);
      const tenseLabel =
        rv.tense === "preterite" ? "preterite" : rv.tense === "conditional" ? "conditional" : "simple future";
      const presTrap = conjugate(rv.inf, "present", p);

      return {
        prompt: `Role-Model Narrative — Complete with the **${tenseLabel}** form of **${rv.inf}** (*${SUBJECT_CONTEXT[p].label}*): *${rv.cue} ${SUBJECT_CONTEXT[p].phrase.toLowerCase()} _______ ${rv.tail}.* (Write ONLY the missing verb.)`,
        answer: { type: "text", accept, display: ans },
        solution: [
          `Time frame / structure (*${rv.cue}*) calls for the **${tenseLabel}** of **${rv.inf}** (*${SUBJECT_CONTEXT[p].label}*).`,
          `Answer: **${ans}**.`,
        ],
        hint: `Check irregular stems and accents carefully in the **${tenseLabel}** of **${rv.inf}**!`,
        traps: !accept.includes(presTrap)
          ? [
              {
                spec: { type: "text", accept: [presTrap] },
                feedback: `*${presTrap}* is present indicative — this clause needs the **${tenseLabel}**: **${ans}**!`,
              },
            ]
          : undefined,
      };
    },
  },
];
