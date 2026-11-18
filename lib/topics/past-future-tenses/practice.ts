import type { TopicPractice } from "../../types.ts";
import { acceptedForms, SUBJECT_PRONOUNS, type Person } from "../../spanish/verbs.ts";

function withPronouns(person: Person, baseForms: string[]): string[] {
  const out = [...baseForms];
  for (const subj of SUBJECT_PRONOUNS[person]) {
    for (const f of baseForms) out.push(`${subj} ${f}`);
  }
  return [...new Set(out)];
}

export const practice: TopicPractice = {
  quiz: [
    {
      id: "past-future-tenses-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "preterite-irregs-and-accents",
      question:
        "Complete with the **preterite** form of **buscar** (*yo*): Ayer _______ mis llaves por toda la casa. *(Write ONLY the missing verb.)*",
      answer: { type: "text", accept: acceptedForms("buscar", "preterite", "yo"), display: "busqué" },
      traps: [
        {
          spec: { type: "text", accept: ["buscé"] },
          feedback: "Watch the *-car* spelling rule before *-é*: *c → qu* (**busqué**) to keep the hard *k* sound!",
        },
      ],
      hints: ["*-car* verbs change *c → qu* in *yo* preterite, keeping the written accent on *-é*."],
      solution: [
        "*Ayer* requires the Preterite for *yo*.",
        "*Buscar* ends in *-car*, so *c → qu* before *-é*: **busqué**.",
      ],
      commonError: "Writing *buscé* (forgetting *c → qu*) or omitting the final accent (*busque*, which is present subjunctive).",
    },
    {
      id: "past-future-tenses-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "preterite-irregs-and-accents",
      question: "Select the accurate Preterite form: *El lunes pasado nosotros _______ en el hospital como voluntarios.*",
      options: ["estuvimos", "estábamos", "estabamos", "estuvieron"],
      answerIndex: 0,
      hints: ["*El lunes pasado* marks a bounded past event for *nosotros* using the strong stem of *estar* (*estuv-*)."],
      explanation: "**estuvimos** uses the strong preterite stem *estuv-* + *-imos* for *nosotros*; *estábamos* is Imperfect, and *estuvieron* is *ellos*.",
    },
    {
      id: "past-future-tenses-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "imperfect-and-contrast",
      question:
        "Complete with the **imperfect** form of **ser** (*nosotros*): Cuando _______ pequeños, vivíamos cerca de la playa. *(Write ONLY the missing verb.)*",
      answer: { type: "text", accept: acceptedForms("ser", "imperfect", "nosotros"), display: "éramos" },
      traps: [
        {
          spec: { type: "text", accept: ["fuimos"] },
          feedback: "*Cuando … pequeños* describes background childhood state, which requires the **Imperfect** (*éramos*), not Preterite (*fuimos*).",
        },
      ],
      hints: [
        "*Ser* is one of the 3 irregular Imperfect verbs (*era, eras, era…*).",
        "Remember the written accent on the first syllable of *nosotros*!",
      ],
      solution: [
        "Childhood state ('when we were young') takes the Imperfect of *ser*.",
        "For *nosotros*, the irregular Imperfect form is **éramos** (with a written accent on *é*).",
      ],
    },
    {
      id: "past-future-tenses-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "imperfect-and-contrast",
      question: "Complete the narrative: *Eran las siete de la tarde y _______ mucho frío cuando salí de la biblioteca.*",
      options: ["hizo", "hará", "hacía", "ha hecho"],
      answerIndex: 2,
      hints: [
        "Background weather in progress when another action happened (*cuando salí*) uses the Imperfect.",
        "Form the 3rd-person singular Imperfect of *hacer*.",
      ],
      explanation: "**hacía** sets the ongoing weather backdrop ('it was very cold') when the Preterite action (*salí*) occurred.",
    },
    {
      id: "past-future-tenses-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "perfect-and-pluperfect",
      question:
        "Complete with the **perfect** tense of **ver** (*yo*): Todavía no _______ _______ la nueva película española. *(Write BOTH words: auxiliary + past participle.)*",
      answer: { type: "text", accept: acceptedForms("ver", "perfect", "yo"), display: "he visto" },
      traps: [
        {
          spec: { type: "text", accept: ["he vido", "yo he vido"] },
          feedback: "*Ver* has an irregular past participle: **visto** (never *vido*).",
        },
      ],
      hints: [
        "Present Perfect *yo* uses auxiliary **he**.",
        "*Ver* has the irregular past participle **visto**.",
      ],
      solution: [
        "Combine *yo* present of *haber* (**he**) + irregular participle of *ver* (**visto**) → **he visto**.",
      ],
    },
    {
      id: "past-future-tenses-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "simple-future-and-conditional",
      question:
        "Complete with the **simple future** form of **salir** (*tú*): ¿A qué hora _______ mañana por la mañana? *(Write ONLY the missing verb.)*",
      answer: { type: "text", accept: acceptedForms("salir", "future", "tú"), display: "saldrás" },
      traps: [
        {
          spec: { type: "text", accept: ["salirás", "tú salirás"] },
          feedback: "*Salir* uses the irregular Cushion-*-d-* stem **saldr-**, not *salir-*!",
        },
      ],
      hints: [
        "*Salir* is one of the 12 irregular-stem Future verbs (*saldr-*).",
        "Add the *tú* Simple Future ending (**-ás** with a written accent).",
      ],
      solution: [
        "Irregular stem of *salir* = **saldr-** + *tú* ending **-ás** → **saldrás**.",
      ],
    },
    {
      id: "past-future-tenses-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "simple-future-and-conditional",
      question: "Choose the correct Conditional form: *Si tuviera más ahorros, yo _______ un curso de cocina en San Sebastián.*",
      options: ["haré", "hacería", "hacía", "haría"],
      answerIndex: 3,
      hints: [
        "After *Si tuviera…* ('If I had…'), the main clause takes the **Conditional** ('I would do').",
        "Use the shared irregular stem of *hacer* (*har-*).",
      ],
      explanation: "**haría** combines the irregular stem *har-* with the *yo* Conditional ending *-ía*; *hacería* regularises the stem, *haré* is Future, and *hacía* is Imperfect.",
    },
    {
      id: "past-future-tenses-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "grade9-verbal-idioms",
      question:
        "Complete the immediate-past idiom ('we have just arrived') with the **present** of **acabar** (*nosotros*) + **de**: _______ _______ llegar al aeropuerto. *(Write ONLY the two missing words.)*",
      answer: {
        type: "text",
        accept: withPronouns("nosotros", ["acabamos de"]),
        display: "acabamos de",
      },
      traps: [
        {
          spec: { type: "text", accept: ["acabamos a", "nosotros acabamos a"] },
          feedback: "Remember the preposition in *acabar **de** + infinitive* ('to have just done')!",
        },
      ],
      hints: [
        "Conjugate *acabar* in the Present tense for *nosotros*.",
        "Follow it with the preposition **de**.",
      ],
      solution: [
        "Present *nosotros* of *acabar* = **acabamos** + **de** (+ *llegar*) → **acabamos de**.",
      ],
    },
    {
      id: "past-future-tenses-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "grade9-verbal-idioms",
      question: "Choose the accurate verb form for ongoing duration: *Mis abuelos _______ en Valencia desde hace treinta años.*",
      options: ["vivieron", "viven", "vivirán", "viviendo"],
      answerIndex: 1,
      hints: [
        "They moved there thirty years ago and **still live there today**.",
        "Ongoing *desde hace + time* pairs with the **Present** tense!",
      ],
      explanation: "**viven** (Present tense) works with *desde hace treinta años* to express 'have been living for thirty years'; *vivieron* would mean they no longer live there.",
    },
    {
      id: "past-future-tenses-quiz-q10",
      kind: "short",
      difficulty: "challenge",
      guideRef: "perfect-and-pluperfect",
      question:
        "Complete with the **pluperfect** ('had already said') of **decir** (*ella*): Cuando llegué, ella ya _______ _______ todo. *(Write BOTH words: auxiliary + past participle.)*",
      answer: {
        type: "text",
        accept: withPronouns("él", ["había dicho"]),
        display: "había dicho",
      },
      traps: [
        {
          spec: { type: "text", accept: ["ha dicho", "ella ha dicho"] },
          feedback: "*Ha dicho* is Present Perfect ('has said'); after past *Cuando llegué*, use the **Pluperfect** (**había dicho** = 'had said')!",
        },
        {
          spec: { type: "text", accept: ["había decido", "ella había decido"] },
          feedback: "*Decir* has an irregular past participle: **dicho** (never *decido*).",
        },
      ],
      hints: [
        "Pluperfect = Imperfect of *haber* (*ella* → **había**) + past participle.",
        "*Decir* has an irregular past participle ending in *-cho*.",
        "Combine both words with the accent on *había*.",
      ],
      solution: [
        "Imperfect of *haber* for *ella* = **había**.",
        "Irregular past participle of *decir* = **dicho** → **había dicho**.",
      ],
    },
  ],
  papers: [
    {
      id: "past-future-tenses-p1",
      title: "Practice Paper 1 — Past Narratives & Paper 2 Q3c Manipulation",
      questions: [
        {
          id: "past-future-tenses-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "preterite-irregs-and-accents",
          question:
            "Edexcel Q3c gap-fill — Complete with the **preterite** form of **empezar** (*yo*): El mes pasado _______ a aprender guitarra española. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("empezar", "preterite", "yo"), display: "empecé" },
          traps: [
            {
              spec: { type: "text", accept: ["empezé", "yo empezé"] },
              feedback: "In *-zar* verbs, *z → c* before *-é* in the *yo* preterite (**empecé**).",
            },
          ],
          hints: ["*-zar* changes *z → c* before *-é* in *yo* preterite."],
          solution: ["*Empezar* (*yo* preterite): *z → c* + *-é* → **empecé**."],
        },
        {
          id: "past-future-tenses-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "preterite-irregs-and-accents",
          question:
            "Complete with the **preterite** form of **comprar** (*él*): Ayer mi tío _______ entradas para el teatro. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("comprar", "preterite", "él"), display: "compró" },
          traps: [
            {
              spec: { type: "text", accept: ["compro"] },
              feedback: "Mind the final accent! *Compro* = 'I buy' (present); **compró** = 'he bought' (preterite).",
            },
          ],
          hints: ["3rd-person singular regular *-ar* preterite ends in **-ó** with an accent."],
          solution: ["*Comprar* (*él*, preterite) → stem *compr-* + **-ó** = **compró**."],
        },
        {
          id: "past-future-tenses-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-irregs-and-accents",
          question:
            "Complete with the **preterite** form of **tener** (*nosotros*): Anoche _______ que estudiar hasta las diez. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("tener", "preterite", "nosotros"), display: "tuvimos" },
          traps: [
            {
              spec: { type: "text", accept: ["tenimos", "nosotros tenimos"] },
              feedback: "*Tener* uses the strong u-stem **tuv-** in the preterite (**tuvimos**).",
            },
          ],
          hints: [
            "*Tener* has the strong preterite stem **tuv-**.",
            "Add the *nosotros* strong-preterite ending **-imos** (zero accents!).",
          ],
          solution: ["Strong stem *tuv-* + *nosotros* ending *-imos* → **tuvimos**."],
        },
        {
          id: "past-future-tenses-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-irregs-and-accents",
          question:
            "Complete with the **preterite** form of **dormir** (*ellos*): Los niños _______ ocho horas anoche. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("dormir", "preterite", "ellos"), display: "durmieron" },
          traps: [
            {
              spec: { type: "text", accept: ["dormieron", "ellos dormieron"] },
              feedback: "*-ir* stem-changers shift *o → u* in 3rd-person preterite ('sandal' rule): **durmieron**.",
            },
          ],
          hints: [
            "*Dormir* is an *-ir* stem-changing verb (*o → ue* in present).",
            "In 3rd-person preterite (*él / ellos*), *o* shifts to **u**!",
          ],
          solution: ["3rd-person plural sandal shift *o → u* on *dormir* → **durmieron**."],
        },
        {
          id: "past-future-tenses-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-irregs-and-accents",
          question:
            "Complete with the **preterite** form of **conducir** (*ellos*): Mis padres _______ desde Madrid hasta Sevilla. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("conducir", "preterite", "ellos"), display: "condujeron" },
          traps: [
            {
              spec: { type: "text", accept: ["condujieron", "conducieron"] },
              feedback: "Verbs ending in *-ducir* take the *j*-stem **conduj-** and drop the *i* in **-eron** (**condujeron**).",
            },
          ],
          hints: [
            "All *-ducir* verbs use a strong **-duj-** stem in the preterite.",
            "After *j*, the *ellos* ending is **-eron** (without *i*!).",
          ],
          solution: ["*Conducir* → strong stem *conduj-* + *-eron* → **condujeron**."],
        },
        {
          id: "past-future-tenses-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "imperfect-and-contrast",
          question:
            "Complete with the **imperfect** form of **ir** (*yo*): De pequeña, siempre _______ al colegio a pie. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("ir", "imperfect", "yo"), display: "iba" },
          traps: [
            {
              spec: { type: "text", accept: ["fui", "yo fui"] },
              feedback: "*De pequeña, siempre…* is a repeated childhood habit, so use the **Imperfect** (**iba**), not Preterite (*fui*).",
            },
          ],
          hints: [
            "*Ir* is one of the 3 irregular Imperfect verbs (*SIV*).",
            "Write the *yo* Imperfect form (no written accent on *iba*!).",
          ],
          solution: ["Habitual past (*siempre*) requires Imperfect of *ir* (*yo*) → **iba**."],
        },
        {
          id: "past-future-tenses-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "imperfect-and-contrast",
          question:
            "Read the extract:\n\n*«El sábado pasado hacía un sol espléndido y había un ambiente muy animado en la plaza. Mientras sacábamos fotos, vimos a nuestro cantante favorito.»*\n\nWhy did the author write **sacábamos** in the Imperfect but **vimos** in the Preterite?",
          options: [
            "Because taking photos was the ongoing action in progress when the single sighting interrupted it.",
            "Because *sacar* has no Preterite form in the *nosotros* person.",
            "Because *vimos* describes a habitual childhood routine.",
            "Because *mientras* is always followed by the Future tense.",
          ],
          answerIndex: 0,
          hints: [
            "Apply the Camera-Snapshot vs Background-Video model.",
            "*Mientras* introduces what was already in progress when the sudden event happened.",
          ],
          explanation: "**sacábamos** (Imperfect after *mientras*) paints the ongoing background action ('while we were taking photos'), whereas **vimos** (Preterite) snaps the single completed sighting.",
        },
        {
          id: "past-future-tenses-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "perfect-and-pluperfect",
          question:
            "Write the **irregular past participle** ONLY of **descubrir**: Los científicos han _______ una solución sostenible.",
          answer: { type: "text", accept: ["descubierto"], display: "descubierto" },
          traps: [
            {
              spec: { type: "text", accept: ["descubrido"] },
              feedback: "Like *abrir → abierto* and *cubrir → cubierto*, *descubrir* forms **descubierto**!",
            },
          ],
          hints: [
            "*Descubrir* follows the exact same irregular participle pattern as *abrir → abierto*.",
            "Keep the invariable *-o* ending after *han*.",
          ],
          solution: ["*Descubrir* has the irregular past participle **descubierto**."],
        },
        {
          id: "past-future-tenses-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "perfect-and-pluperfect",
          question:
            "Complete with the **perfect** tense of **poner** (*tú*): ¿Dónde _______ _______ mi mochila? *(Write BOTH words: auxiliary + past participle.)*",
          answer: { type: "text", accept: acceptedForms("poner", "perfect", "tú"), display: "has puesto" },
          traps: [
            {
              spec: { type: "text", accept: ["has ponido", "tú has ponido"] },
              feedback: "*Poner* has an irregular past participle: **puesto** (never *ponido*).",
            },
          ],
          hints: [
            "Present Perfect *tú* uses **has**.",
            "Combine *has* with the irregular participle of *poner* (**puesto**).",
          ],
          solution: ["*Tú* present of *haber* (**has**) + irregular participle (**puesto**) → **has puesto**."],
        },
        {
          id: "past-future-tenses-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-future-and-conditional",
          question:
            "Complete with the **simple future** form of **poder** (*nosotros*): Después de los exámenes, _______ descansar. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("poder", "future", "nosotros"), display: "podremos" },
          traps: [
            {
              spec: { type: "text", accept: ["poderemos", "nosotros poderemos"] },
              feedback: "*Poder* drops the *-e-* in its Future stem: **podr-** → **podremos**.",
            },
          ],
          hints: [
            "*Poder* drops *-e-* to form the irregular stem **podr-**.",
            "Add the *nosotros* Simple Future ending **-emos** (no accent!).",
          ],
          solution: ["Irregular stem *podr-* + *nosotros* Future ending *-emos* → **podremos**."],
        },
        {
          id: "past-future-tenses-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-future-and-conditional",
          question:
            "Complete with the **conditional** form of **tener** (*yo*): En ese caso, yo _______ mucho cuidado. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("tener", "conditional", "yo"), display: "tendría" },
          traps: [
            {
              spec: { type: "text", accept: ["tenería", "yo tenería"] },
              feedback: "*Tener* uses the irregular Cushion-*-d-* stem **tendr-** in both Future and Conditional (**tendría**).",
            },
          ],
          hints: [
            "Conditional shares the exact same irregular stem as Simple Future (**tendr-**).",
            "Add the *yo* Conditional ending **-ía**.",
          ],
          solution: ["Shared stem *tendr-* + *yo* Conditional ending *-ía* → **tendría**."],
        },
        {
          id: "past-future-tenses-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "grade9-verbal-idioms",
          question:
            "Complete the duration idiom ('I have been playing for four years') with the **present** of **llevar** (*yo*): _______ cuatro años tocando el violín. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: withPronouns("yo", ["llevo"]), display: "llevo" },
          hints: [
            "The structure is **llevar (present) + time + gerund**.",
            "Conjugate regular *-ar* verb *llevar* for *yo*.",
          ],
          solution: ["*Yo* present of *llevar* → **llevo** (*Llevo cuatro años tocando el violín*)."],
        commonError: "Ongoing duration up to the present uses *llevar* in the present (*llevo*) + time + gerund, never *he estado*.",
        },
        {
          id: "past-future-tenses-p1-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "grade9-verbal-idioms",
          question:
            "Read Sofía's message:\n\n*«Acabo de volver del polideportivo. Antes solía quedarme en casa viendo series, pero llevo seis meses haciendo natación y el verano que viene cruzaré la bahía a nado.»*\n\nWhich activity has Sofía **just** finished doing right now?",
          options: [
            "Coming back from the sports centre",
            "Swimming across the bay",
            "Staying at home watching series",
            "Signing up for next summer's race",
          ],
          answerIndex: 0,
          hints: [
            "Look for the immediate-past idiom **acabo de + infinitive** ('I have just…').",
            "Distinguish *acabo de volver* from *solía quedarme* ('used to stay') and *cruzaré* ('will cross').",
          ],
          explanation: "**Acabo de volver del polideportivo** means 'I have just returned from the sports centre'; *solía quedarme* was her old habit, and *cruzaré* is her future goal.",
        },
        {
          id: "past-future-tenses-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "imperfect-and-contrast",
          marks: 3,
          question:
            "Edexcel Paper 2 Q6 Mini-Narrative (Spanish): Write 3–4 sentences in **Spanish** describing a memorable trip last weekend:\n- Set the **background weather or scene** using the **Imperfect** tense\n- Narrate **what you did** using at least one **Preterite** verb\n- Explain **how you felt** or give an **opinion** about the day",
          modelAnswer:
            "El sábado pasado hacía mucho sol y había un ambiente tranquilo en la costa. Por la mañana fui a la playa con mi familia, nadé en el mar y comimos paella deliciosa. Lo pasé fenomenal porque fue una excursión inolvidable.",
          markScheme: [
            {
              point: "Sets the past scene or weather in the Imperfect (e.g. hacía sol, llovía, había, era)",
              keywords: ["hacia", "llovia", "habia", "estaba", "eran"],
            },
            {
              point: "Narrates a completed action in the Preterite (e.g. fui, fuimos, visité, nadé, comimos, vi)",
              keywords: ["fui", "fuimos", "visite", "visitamos", "nade", "comi", "comimos", "vi", "vimos", "hice"],
            },
            {
              point: "Gives a clear past reaction or justified opinion (e.g. lo pasé bien, fue inolvidable, me gustó, emocionante)",
              keywords: ["inolvidable", "fenomenal", "gusto", "encanto", "divertido", "genial", "emocionante", "contento", "feliz"],
            },
          ],
          hints: [
            "Open with *El sábado pasado hacía…* or *Había…* to lock in your Imperfect mark.",
            "Follow with two crisp Preterite verbs (*fui, visité, comimos*) and a past opinion (*fue inolvidable / me encantó*).",
          ],
          commonError: "Writing the entire paragraph in Present tense or mixing up *fue* (it was — event evaluation) with *hablo* without accents.",
        },
        {
          id: "past-future-tenses-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "grade9-verbal-idioms",
          marks: 4,
          question:
            "Edexcel Paper 2 Q7 Time-Frame Paragraph (Spanish): Write a short Grade-9 paragraph (50–70 words) in **Spanish** about a hobby or skill you practise:\n- Mention **when you started** or **what you used to do** in the past\n- State **how long you have been doing it** using an idiomatic Spanish duration structure\n- Describe **what you usually do** in your current weekly routine\n- State **a future goal or conditional wish** for next year",
          modelAnswer:
            "Hace cuatro años empecé a tocar el piano porque de pequeña solía escuchar música clásica con mi abuela. Hoy en día llevo cuatro años practicando cada semana y suelo ensayar media hora después de cenar. El año que viene haré un concierto escolar y me encantaría aprender piezas más difíciles.",
          markScheme: [
            {
              point: "Includes an accurate Past verb (Preterite start or Imperfect habit, e.g. empecé, jugaba, solía)",
              keywords: ["empece", "comence", "solia", "jugaba", "tocaba", "aprendi", "fui"],
            },
            {
              point: "Uses an idiomatic duration structure (llevo / llevamos … -ndo, or present + desde hace)",
              keywords: ["llevo", "llevamos", "desde hace"],
            },
            {
              point: "Uses present routine idiom suelo / solemos + infinitive",
              keywords: ["suelo", "solemos"],
            },
            {
              point: "Includes an accurate Future or Conditional verb (e.g. haré, participaré, iré, viajaré, me gustaría, me encantaría)",
              keywords: ["hare", "participare", "ire", "viajare", "ganare", "jugare", "tocare", "gustaria", "encantaria", "querria"],
            },
          ],
          hints: [
            "Start in the past: *Hace tres años empecé a…* or *De niño solía…*.",
            "Add duration + routine: *Llevo tres años entrenando y suelo practicar los sábados.*",
            "Finish with Future + Conditional: *El próximo verano participaré en… y me encantaría ganar.*",
          ],
          commonError: "Translating 'I have been playing' literally as *he estado jugando por* instead of *llevo … jugando*.",
        },
      ],
    },
    {
      id: "past-future-tenses-p2",
      title: "Practice Paper 2 — Compound Tenses, Future Stems & Extended Writing",
      questions: [
        {
          id: "past-future-tenses-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "preterite-irregs-and-accents",
          question:
            "Complete with the **preterite** form of **pagar** (*yo*): En la cafetería yo _______ la cuenta con tarjeta. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("pagar", "preterite", "yo"), display: "pagué" },
          traps: [
            {
              spec: { type: "text", accept: ["pagé", "yo pagé"] },
              feedback: "*-gar* verbs insert a silent *u* before *-é* in *yo* preterite (**pagué**) to preserve the hard *g* sound.",
            },
          ],
          hints: ["*-gar → -gué* in *yo* preterite."],
          solution: ["*Pagar* (*yo* preterite): *g → gu* + *-é* → **pagué**."],
        },
        {
          id: "past-future-tenses-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "preterite-irregs-and-accents",
          question:
            "Complete with the **preterite** form of **poner** (*él*): Mi padre _______ las maletas en el coche. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("poner", "preterite", "él"), display: "puso" },
          traps: [
            {
              spec: { type: "text", accept: ["ponió", "pusó"] },
              feedback: "*Poner* uses the strong stem **pus-** with unaccented **-o** (**puso** — never *ponió* or *pusó*!).",
            },
          ],
          hints: ["*Poner* uses strong u-stem **pus-** + unaccented **-o** for *él*."],
          solution: ["Strong stem *pus-* + 3rd-person singular *-o* (no accent!) → **puso**."],
        },
        {
          id: "past-future-tenses-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "preterite-irregs-and-accents",
          question:
            "Complete with the **preterite** form of **preferir** (*ella*): Ayer Marta _______ quedarse en casa para descansar. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("preferir", "preterite", "él"), display: "prefirió" },
          traps: [
            {
              spec: { type: "text", accept: ["preferió", "ella preferió"] },
              feedback: "*Preferir* is an *-ir* sandal verb: the second *e* shifts *e → i* in 3rd-person preterite (**prefirió**).",
            },
          ],
          hints: [
            "*Preferir* is an *-ir* stem-changer (*e → ie* in present, *e → i* in 3rd-person preterite).",
            "Keep the written accent on **-ió**!",
          ],
          solution: ["3rd-person singular sandal shift *e → i* on *preferir* → **prefirió**."],
        },
        {
          id: "past-future-tenses-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "imperfect-and-contrast",
          question:
            "Complete with the **imperfect** form of **vivir** (*ellos*): En aquella época mis abuelos _______ en un pueblo pequeño. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("vivir", "imperfect", "ellos"), display: "vivían" },
          hints: [
            "*En aquella época* ('in those days') triggers the Imperfect.",
            "All *-er/-ir* Imperfect endings carry a written accent on **í** (*-ían*).",
          ],
          solution: ["*Vivir* (*ellos*, imperfect) → stem *viv-* + **-ían** = **vivían**."],
        commonError: "All *-er* and *-ir* verbs carry a written accent on the *í* throughout the imperfect: *vivían*.",
        },
        {
          id: "past-future-tenses-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "perfect-and-pluperfect",
          question:
            "Complete with the **perfect** tense of **volver** (*ellos*): Mis primos ya _______ _______ de sus vacaciones en Chile. *(Write BOTH words: auxiliary + past participle.)*",
          answer: { type: "text", accept: acceptedForms("volver", "perfect", "ellos"), display: "han vuelto" },
          traps: [
            {
              spec: { type: "text", accept: ["han volvido", "han vueltos"] },
              feedback: "The participle of *volver* is irregular (**vuelto**) and NEVER adds *-s* after *haber* (**han vuelto**).",
            },
          ],
          hints: [
            "Present Perfect *ellos* uses **han**.",
            "*Volver* has the irregular invariable past participle **vuelto**.",
          ],
          solution: ["*Ellos* present of *haber* (**han**) + irregular participle (**vuelto**) → **han vuelto**."],
        },
        {
          id: "past-future-tenses-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "perfect-and-pluperfect",
          question:
            "Complete with the **pluperfect** ('we had already read') of **leer** (*nosotros*): Antes de ver la película, ya _______ _______ la novela. *(Write BOTH words: auxiliary + past participle.)*",
          answer: {
            type: "text",
            accept: withPronouns("nosotros", ["habíamos leído"]),
            display: "habíamos leído",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hemos leído", "nosotros hemos leído"] },
              feedback: "Before a past reference point, 'had read' requires the **Pluperfect** (**habíamos leído**), not Present Perfect (*hemos leído*).",
            },
          ],
          hints: [
            "Pluperfect *nosotros* uses **habíamos** (accent on *í*).",
            "Participle of *leer* requires a written accent on **í** (**leído**).",
          ],
          solution: ["Imperfect of *haber* (*nosotros*) = **habíamos** + accented participle **leído** → **habíamos leído**."],
        },
        {
          id: "past-future-tenses-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-future-and-conditional",
          question:
            "Complete with the **simple future** form of **venir** (*ellos*): Mis tíos _______ a nuestra graduación en junio. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("venir", "future", "ellos"), display: "vendrán" },
          traps: [
            {
              spec: { type: "text", accept: ["venirán", "ellos venirán"] },
              feedback: "*Venir* uses the Cushion-*-d-* stem **vendr-** in the Simple Future (**vendrán**).",
            },
          ],
          hints: [
            "*Venir* swaps *-i-* for *-d-* → stem **vendr-**.",
            "Add the *ellos* Simple Future ending **-án** (with an accent!).",
          ],
          solution: ["Irregular stem *vendr-* + *ellos* Future ending *-án* → **vendrán**."],
        },
        {
          id: "past-future-tenses-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-future-and-conditional",
          question:
            "Complete with the **conditional** form of **saber** (*tú*): Sin un mapa, ¿_______ llegar al albergue juvenil? *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("saber", "conditional", "tú"), display: "sabrías" },
          traps: [
            {
              spec: { type: "text", accept: ["saberías", "tú saberías"] },
              feedback: "*Saber* drops the *-e-* to form the shared stem **sabr-** (**sabrías**).",
            },
          ],
          hints: [
            "*Saber* drops *-e-* → stem **sabr-**.",
            "Add the *tú* Conditional ending **-ías**.",
          ],
          solution: ["Irregular stem *sabr-* + *tú* Conditional ending *-ías* → **sabrías**."],
        },
        {
          id: "past-future-tenses-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "simple-future-and-conditional",
          question:
            "Complete with the **near-future** (*ir a + infinitive*) form of **relajarse** (*yo*): Este fin de semana _______ en casa. *(Write the full 3-word or 4-word verb phrase.)*",
          answer: { type: "text", accept: acceptedForms("relajarse", "near-future", "yo"), display: "voy a relajarme" },
          hints: [
            "Near future = present of *ir* (*yo* → **voy**) + **a** + infinitive.",
            "With reflexive *relajarse*, place *me* either attached to the infinitive (**voy a relajarme**) or before *voy* (**me voy a relajar**).",
          ],
          solution: [
            "Both pronoun placements are 100% correct in Spanish: **voy a relajarme** or **me voy a relajar**.",
          ],
        commonError: "Attach *me* to the infinitive (*voy a relajarme*) or place it before *voy* (*me voy a relajar*) — never drop the reflexive pronoun.",
        },
        {
          id: "past-future-tenses-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "grade9-verbal-idioms",
          question:
            "Complete with the **imperfect** form of **soler** (*nosotros*): En primaria _______ jugar en el patio cada recreo. *(Write ONLY the missing verb.)*",
          answer: { type: "text", accept: acceptedForms("soler", "imperfect", "nosotros"), display: "solíamos" },
          hints: [
            "*Soler* in the Imperfect means 'used to' and is 100% regular *-er*!",
            "Add the *-er* Imperfect *nosotros* ending **-íamos** onto *sol-*.",
          ],
          solution: ["*Soler* (*nosotros*, imperfect) → **solíamos** (*solíamos jugar* = 'we used to play')."],
        commonError: "Remember the written accent on *í* in *solíamos* (*soler* imperfect + infinitive = 'we used to').",
        },
        {
          id: "past-future-tenses-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "grade9-verbal-idioms",
          question:
            "Complete the continuity idiom with the **gerund** of **pedir**: El cliente sigue _______ más agua. *(Write ONLY the missing gerund.)*",
          answer: { type: "text", accept: ["pidiendo"], display: "pidiendo" },
          traps: [
            {
              spec: { type: "text", accept: ["pediendo", "pedir"] },
              feedback: "*Seguir* requires a gerund, and *-ir* stem-changer *pedir* shifts *e → i* in the gerund (**pidiendo**).",
            },
          ],
          hints: [
            "*Seguir* is followed by the gerund (*-iendo*).",
            "*-ir* stem-changing verb *pedir* shifts *e → i* in the gerund!",
          ],
          solution: ["*Pedir* shifts *e → i* in the gerund → **pidiendo**."],
        },
        {
          id: "past-future-tenses-p2-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "perfect-and-pluperfect",
          question:
            "Read Diego's diary entry:\n\n*«Cuando llegué a la estación de Atocha a las ocho, el tren rápido ya había salido porque mi autobús llevó retraso. Por suerte, he conseguido un billete para el próximo tren y llegaré a Córdoba a mediodía.»*\n\nWhich event happened **earliest** on Diego's timeline?",
          options: [
            "Diego arrived at Atocha station at eight.",
            "The high-speed train departed.",
            "Diego got a ticket for the next train.",
            "Diego arrived in Córdoba at noon.",
          ],
          answerIndex: 1,
          hints: [
            "Look for the **Pluperfect** ('the past before the past')!",
            "Compare *llegué* (Preterite) with *ya había salido* (Pluperfect).",
          ],
          explanation: "**el tren rápido ya había salido** (Pluperfect = 'had already left') happened **before** Diego arrived (*llegué*) at eight o'clock.",
        },
        {
          id: "past-future-tenses-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "simple-future-and-conditional",
          question:
            "In Paper 2 Q3c, you see: *El próximo sábado _______ (hacer, él) muy buen tiempo en toda la costa.* Which form is required?",
          options: ["hacía", "hizo", "hará", "hacerá"],
          answerIndex: 2,
          hints: [
            "*El próximo sábado* ('next Saturday') requires the Simple Future.",
            "Weather expressions with *hacer* use 3rd-person singular + irregular stem *har-*.",
          ],
          explanation: "**hará** (*hará muy buen tiempo* = 'the weather will be very good') uses *hacer*'s irregular Future stem *har-* + *-á*.",
        },
        {
          id: "past-future-tenses-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "simple-future-and-conditional",
          marks: 3,
          question:
            "Edexcel Paper 3 Speaking Follow-Up (Spanish): Write 3–4 sentences in **Spanish** answering an examiner's question about your life after IGCSE exams:\n- State **one definite plan** using the **Simple Future** tense\n- Express **a dream or hypothetical wish** using the **Conditional** tense\n- Give a **clear reason** using a Spanish causal conjunction",
          modelAnswer:
            "Después de terminar mis exámenes, viajaré a Japón con mis primos y estudiaré ciencias en el bachillerato. Además, me gustaría aprender a cocinar platos japoneses tradicionales ya que me apasiona su gastronomía.",
          markScheme: [
            {
              point: "Uses at least one accurate Simple Future verb (e.g. viajaré, estudiaré, haré, iré, trabajaré, tendré)",
              keywords: ["viajare", "estudiare", "hare", "ire", "trabajare", "tendre", "vivire", "visitare", "aprendere"],
            },
            {
              point: "Uses at least one accurate Conditional verb (e.g. me gustaría, me encantaría, iría, haría, sería, podría)",
              keywords: ["gustaria", "encantaria", "querria", "iria", "haria", "seria", "podria", "deberia"],
            },
            {
              point: "Justifies the plan or wish with a causal connector and detail",
              keywords: ["ya que", "dado que", "puesto que", "apasiona", "gastronomia", "interesa"],
            },
          ],
          hints: [
            "Use at least one true Simple Future verb (*estudiaré, viajaré, haré*) rather than only *voy a*.",
            "Pair it with *me gustaría / me encantaría + infinitive* and justify with *ya que* or *porque*.",
          ],
          commonError: "Forgetting the written accent on *-é* in the Simple Future (*viajare* instead of *viajaré*).",
        },
        {
          id: "past-future-tenses-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "grade9-verbal-idioms",
          marks: 4,
          question:
            "Edexcel Paper 2 Q7 Mini-Essay (Spanish): Write a cohesive 4-bullet response (70–95 words) in **Spanish** for your school magazine on how your daily routine has changed:\n- Describe what your life **used to be like** in primary school (Imperfect)\n- Mention a specific achievement or event you **have done recently** (Perfect tense)\n- Explain a healthy or academic habit you **keep on doing** or **have just started** using a Spanish verbal periphrasis\n- Predict how your routine **will change** at university (Simple Future or Conditional)",
          modelAnswer:
            "En la escuela primaria tenía muchísimo tiempo libre y jugaba en el parque todas las tardes sin preocuparme por las notas. Este trimestre he aprobado todos mis exámenes de prueba y acabo de organizar un calendario de repaso muy útil. Aunque a veces estoy cansada, sigo durmiendo ocho horas diarias para cuidar mi salud. En el futuro viviré en otra ciudad universitaria y tendré que ser mucho más independiente.",
          markScheme: [
            {
              point: "Describes past routine using Imperfect forms (e.g. tenía, jugaba, iba, era, veía, hacía)",
              keywords: ["tenia", "jugaba", "iba", "era", "veia", "hacia", "estudiaba", "pasaba"],
            },
            {
              point: "Mentions a recent action in the Present Perfect (e.g. he aprobado, he hecho, he ganado, he aprendido, hemos)",
              keywords: ["he aprobado", "he hecho", "he ganado", "he aprendido", "he terminado", "he escrito", "he leido", "hemos"],
            },
            {
              point: "Deploys a verbal periphrasis accurately (sigo / seguimos + gerund or acabo / acabamos de + inf.)",
              keywords: ["sigo", "seguimos", "acabo de", "acabamos de"],
            },
            {
              point: "Predicts future routine using Simple Future or Conditional (e.g. viviré, tendré, estudiaré, será, habría, gustaría)",
              keywords: ["vivire", "tendre", "estudiare", "sera", "hare", "trabajare", "ire", "habra", "gustaria", "seria"],
            },
          ],
          hints: [
            "Hit each bullet in order so all 4 tense structures shine clearly.",
            "Double-check that *he + participle* stays unsplit and *sigo* takes *-ndo* (*sigo estudiando / sigo durmiendo*).",
            "Use irregular Future stems like *tendré* or *haré* in your final sentence for Grade-9 flair.",
          ],
          commonError: "Writing *sigo dormir* (infinitive) instead of *sigo durmiendo* (gerund).",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "past-future-tenses-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "preterite-irregs-and-accents",
      question:
        "Aspect & Meaning Shift: Complete with the **preterite** form of **querer** (*yo*) to express 'I **refused** to accept the excuse': Ayer no _______ aceptar su excusa. *(Write ONLY the missing verb — do NOT repeat 'no'.)*",
      answer: { type: "text", accept: acceptedForms("querer", "preterite", "yo"), display: "quise" },
      traps: [
        {
          spec: { type: "text", accept: ["quería", "yo quería"] },
          feedback: "*No quería* means 'I didn't want to' (state of mind), whereas **no quise** (strong preterite) means 'I refused to'!",
        },
        {
          spec: { type: "text", accept: ["quisé"] },
          feedback: "Strong preterite stems (*quis-*) NEVER carry a written accent (**quise**).",
        },
      ],
      hints: [
        "In Spanish, *no querer* in the **Preterite** sharpens into the single completed act of refusing ('I refused').",
        "*Querer* uses the strong *i*-stem **quis-** in the preterite.",
        "Add the unaccented *yo* strong-preterite ending **-e**.",
      ],
      solution: [
        "*No querer* in Preterite = 'refused'.",
        "Strong stem *quis-* + *-e* (zero accent) → **quise**.",
      ],
    },
    {
      id: "past-future-tenses-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "preterite-irregs-and-accents",
      question:
        "Vowel-Bridge Preterite: Complete with the **preterite** form of **construir** (*ellos*): En 1992 _______ una estación nueva de trenes. *(Write ONLY the missing verb.)*",
      answer: { type: "text", accept: acceptedForms("construir", "preterite", "ellos"), display: "construyeron" },
      traps: [
        {
          spec: { type: "text", accept: ["construieron", "ellos construieron"] },
          feedback: "Unaccented *i* between *u* and *e* must shift *i → y* (**construyeron**).",
        },
      ],
      hints: [
        "Verbs ending in *-uir* (*construir, destruir, incluir*) are vowel-bridge verbs in the Preterite.",
        "In 3rd-person plural (*ellos*), unaccented *i* between vowels becomes **y**.",
        "Combine *constru-* + **-yeron**.",
      ],
      solution: [
        "In *-uir* verbs, *-ieron* becomes **-yeron** between vowels: **construyeron**.",
      ],
    },
    {
      id: "past-future-tenses-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "imperfect-and-contrast",
      question:
        "Subtle Aspect Contrast: Which pair accurately translates *'I **knew** the answer all week, because I **found out** the formula on Monday'*?",
      options: [
        "Supe la respuesta toda la semana, porque sabía la fórmula el lunes.",
        "Sabía la respuesta toda la semana, porque supe la fórmula el lunes.",
        "Sé la respuesta toda la semana, porque sabré la fórmula el lunes.",
        "Sabía la respuesta toda la semana, porque supó la fórmula el lunes.",
      ],
      answerIndex: 1,
      hints: [
        "Ongoing mental possession of knowledge ('knew all week') is an unbounded background state → **Imperfect**.",
        "Discovering a fact at a specific moment ('found out on Monday') is the bounded onset of knowledge → **Preterite**.",
        "Remember *yo* strong preterite of *saber* is *supe* (with no accent!).",
      ],
      explanation: "**Sabía … supe** contrasts ongoing state (*sabía* = 'I knew') with the exact instant knowledge was acquired (*supe* = 'I found out').",
    },
    {
      id: "past-future-tenses-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "perfect-and-pluperfect",
      question:
        "Complete with the **pluperfect** ('they had already solved') of **resolver** (*ellos*): Cuando llegó la profesora, los alumnos ya _______ _______ el problema. *(Write BOTH words: auxiliary + past participle.)*",
      answer: {
        type: "text",
        accept: withPronouns("ellos", ["habían resuelto"]),
        display: "habían resuelto",
      },
      traps: [
        {
          spec: { type: "text", accept: ["habían resolvido", "ellos habían resolvido"] },
          feedback: "Like *volver → vuelto*, *resolver* has the irregular participle **resuelto**!",
        },
        {
          spec: { type: "text", accept: ["han resuelto", "ellos han resuelto"] },
          feedback: "After past *Cuando llegó*, 'had already solved' requires the **Pluperfect** (**habían resuelto**), not Present Perfect.",
        },
      ],
      hints: [
        "'Had solved' before *llegó* = Pluperfect (*ellos* Imperfect of *haber* → **habían**).",
        "*Resolver* follows the exact same irregular participle pattern as *volver → vuelto*.",
        "Keep the participle invariable in *-o* (**resuelto**).",
      ],
      solution: [
        "Imperfect of *haber* (*ellos*) = **habían** + irregular participle of *resolver* = **resuelto** → **habían resuelto**.",
      ],
    },
    {
      id: "past-future-tenses-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "simple-future-and-conditional",
      question:
        "Sequence of Tenses in Past Reported Speech: Complete with the **conditional** of **poner** (*ella*): Ayer Elena prometió que _______ más atención en clase. *(Write ONLY the missing verb.)*",
      answer: { type: "text", accept: acceptedForms("poner", "conditional", "él"), display: "pondría" },
      traps: [
        {
          spec: { type: "text", accept: ["pondrá", "ella pondrá"] },
          feedback: "After past *Ayer prometió que…*, 'will pay' backshifts to 'would pay' (**pondría** — Conditional)!",
        },
        {
          spec: { type: "text", accept: ["ponería", "ella ponería"] },
          feedback: "*Poner* uses the Cushion-*-d-* irregular stem **pondr-** (**pondría**).",
        },
      ],
      hints: [
        "Reporting a promise made in the past (*Ayer prometió que…*) requires the **Conditional** ('she would put/pay').",
        "*Poner* uses the shared irregular stem **pondr-**.",
        "Add the 3rd-person singular Conditional ending **-ía**.",
      ],
      solution: [
        "Past reported promise → Conditional of *poner* (*ella*): stem **pondr-** + **-ía** = **pondría**.",
      ],
    },
    {
      id: "past-future-tenses-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "grade9-verbal-idioms",
      question:
        "Past Duration Idiom ('had been waiting for two hours'): Complete with the **imperfect** of **llevar** (*yo*) + *dos horas esperando*: Cuando por fin llegó el autobús, yo _______ dos horas esperando. *(Write ONLY the missing verb.)*",
      answer: { type: "text", accept: withPronouns("yo", ["llevaba"]), display: "llevaba" },
      traps: [
        {
          spec: { type: "text", accept: ["llevo", "yo llevo"] },
          feedback: "*Llevo* = 'I have been waiting (now)'; because the bus arrived in the past (*llegó*), shift *llevar* into the **Imperfect** (**llevaba** = 'I had been waiting')!",
        },
      ],
      hints: [
        "*Llevo + time + gerund* means 'I have been -ing' in the present.",
        "To shift that into the past ('I **had** been waiting when the bus arrived'), put *llevar* into the **Imperfect**!",
        "Write the *yo* Imperfect of regular *-ar* verb *llevar*.",
      ],
      solution: [
        "Past ongoing duration before a Preterite interruption uses **Imperfect of *llevar*** (*yo*) → **llevaba**.",
      ],
    },
    {
      id: "past-future-tenses-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "grade9-verbal-idioms",
      question:
        "Reflexive Gerund Accent Rule: Which option accurately completes *Mis hermanos pequeños siguen _______ (vestirse) muy despacio por la mañana*?",
      options: ["vestiéndose", "vistiéndose", "vistiendose", "se vistiendo"],
      answerIndex: 1,
      hints: [
        "*Vestirse* is an *-ir* stem-changing verb (*e → i*), so its gerund shifts *e → i* (*vistiendo*).",
        "With *seguir + gerund*, attach *se* onto the end of the gerund (or place *se* before *siguen* — here *siguen* is already printed!).",
        "Attaching *se* adds an extra syllable at the end, so you MUST add a written accent on **é** to keep stress on *-én-*!",
      ],
      explanation: "**vistiéndose** applies the *e → i* gerund stem shift AND adds the written accent on *é* to preserve natural stress when enclitic *-se* is attached.",
    },
    {
      id: "past-future-tenses-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "grade9-verbal-idioms",
      marks: 4,
      question:
        "Edexcel Paper 2 Q7 Grade-9 Challenge (Spanish): Write a polished 80–110 word Spanish response about a cultural event, concert, or festival:\n- Narrate **what was happening** when **something unexpected occurred** (Imperfect + Preterite)\n- Mention something memorable you **had never seen or done before** (Pluperfect)\n- Explain how you **continue enjoying** that culture today using a Spanish continuity or duration idiom\n- Say whether you **will attend again** and what **you would change** next time (Simple Future repetition idiom + Conditional)",
      modelAnswer:
        "El año pasado asistí a un concierto al aire libre en Valencia. Mientras la banda tocaba su mejor canción y todo el público cantaba, de repente empezó a llover muchísimo, pero nadie salió del estadio. Fue mágico porque nunca había visto tanta energía en directo. Desde entonces llevo diez meses escuchando música española todos los días y sigo aprendiendo las letras. El verano próximo volveré a ir con mis amigos, aunque llevaría un impermeable bueno.",
      markScheme: [
        {
          point: "Combines Imperfect background with a Preterite event (e.g. tocaba/cantaba/hacía + empezó/asistí/salió/fue)",
          keywords: ["mientras", "tocaba", "cantaba", "hacia", "habia"],
        },
        {
          point: "Includes an accurate Pluperfect clause (había / habíamos + past participle, e.g. había visto, había estado, había ido)",
          keywords: ["habia visto", "habia estado", "habia ido", "habia escuchado", "habia hecho", "habiamos"],
        },
        {
          point: "Uses an ongoing continuity/duration periphrasis (llevo / llevamos … -ndo or sigo / seguimos … -ndo)",
          keywords: ["llevo", "llevamos", "sigo", "seguimos"],
        },
        {
          point: "Combines Future repetition (volveré / volveremos a + inf.) or Simple Future with Conditional evaluation (llevaría, cambiaría, gustaría, compraría)",
          keywords: ["volvere", "volveremos", "llevaria", "cambiaria", "compraria", "gustaria", "encantaria", "iria"],
        },
      ],
      hints: [
        "Use *Mientras … -aba/-ía, de repente … (preterite)* for your opening narrative.",
        "Slip in *porque nunca había visto / nunca había estado…* for effortless Pluperfect credit.",
        "Close with *sigo escuchando / llevo meses…* plus *volveré a ir, aunque llevaría / cambiaría…*.",
      ],
      commonError: "Writing *volveré ir* (forgetting the mandatory *a* in *volver a + infinitive*).",
    },
  ],
};
