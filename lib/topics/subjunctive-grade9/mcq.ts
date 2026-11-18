import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "subjunctive-grade9-m1",
    title: "MCQ Paper 1 — Present Subjunctive, DISHES & WEIRDO Foundations",
    questions: [
      {
        id: "subjunctive-grade9-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "forming-present-subjunctive",
        question:
          "Which verb form is the **present subjunctive** of **hablar** for *tú*?",
        options: ["hables", "hablas", "hablarás", "hablaste"],
        answerIndex: 0,
        hints: [
          "Take present *yo* (**hablo**), drop *-o*, and add the opposite *-e* ending for *tú*.",
        ],
        explanation:
          "**hables** swaps the *-ar* vowel *a* to *e* (*hablo → habl- + -es*). *hablas* is present indicative, *hablarás* is future, and *hablaste* is preterite.",
      },
      {
        id: "subjunctive-grade9-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "forming-present-subjunctive",
        question:
          "Complete the sentence with the **present subjunctive** of **comer** (*nosotros*): *Es importante que _______ más verdura fresca.*",
        options: ["comemos", "comamos", "comeremos", "comíamos"],
        answerIndex: 1,
        hints: [
          "*-er* verbs switch to **-a** endings in the present subjunctive.",
        ],
        explanation:
          "**comamos** applies the opposite *-a* ending to *com-* (*como → comamos*). *comemos* is the present indicative.",
      },
      {
        id: "subjunctive-grade9-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "forming-present-subjunctive",
        question:
          "Choose the correct **present subjunctive** of **tener** (*yo*): *Espero que no _______ problemas en la aduana.*",
        options: ["tengo", "tienes", "tenga", "tendré"],
        answerIndex: 2,
        hints: [
          "Never build from the infinitive *ten-* — start from present *yo* (**tengo**).",
          "Drop *-o* from *tengo* and add the *-er* opposite ending **-a**.",
        ],
        explanation:
          "**tenga** comes from *yo tengo* minus *-o* + *-a*. *tengo* is present indicative and *tendré* is simple future.",
      },
      {
        id: "subjunctive-grade9-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "forming-present-subjunctive",
        question:
          "Which option gives the **present subjunctive** of **buscar** (*tú*) in *Recomiendo que _______ un trabajo a tiempo parcial*?",
        options: ["buscas", "busces", "buscaste", "busques"],
        answerIndex: 3,
        hints: [
          "*-car* verbs must keep the hard /k/ sound before the *-e* subjunctive ending.",
          "Change **c → qu** before *-es*.",
        ],
        explanation:
          "**busques** changes *c → qu* before *e* to preserve the hard /k/ sound (*busco → busques*). *busces* would change the pronunciation to /θ/ or /s/.",
      },
      {
        id: "subjunctive-grade9-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "forming-present-subjunctive",
        question:
          "Complete with the **DISHES** present subjunctive of **ir** (*ellos*): *Dudo que mis primos _______ al festival este año.*",
        options: ["vayan", "van", "irán", "iban"],
        answerIndex: 0,
        hints: [
          "**ir** is one of the 6 DISHES irregulars because *yo voy* does not end in *-o*.",
          "The present subjunctive stem of *ir* is **vay-**.",
        ],
        explanation:
          "**vayan** is the 3rd-person plural present subjunctive of *ir* (*vaya, vayas, vaya, vayamos, vayáis, vayan*). *van* is indicative.",
      },
      {
        id: "subjunctive-grade9-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "forming-present-subjunctive",
        question:
          "Look closely at accents! Which form correctly completes *Espero que mi profesor me _______ (dar) una buena nota*?",
        options: ["da", "dé", "de", "dio"],
        answerIndex: 1,
        hints: [
          "*Espero que* + new subject triggers the DISHES present subjunctive of **dar**.",
          "How does Spanish distinguish the subjunctive of *dar* from the preposition *de* ('of/from')?",
        ],
        explanation:
          "**dé** carries a mandatory diacritical accent in *yo* and *él/ella* present subjunctive so it is never confused with the preposition *de*.",
      },
      {
        id: "subjunctive-grade9-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weirdo-and-impersonal",
        question:
          "Choose the accurate verb for *Creo que el transporte público en mi ciudad _______ muy eficiente.*",
        options: ["sea", "esté", "es", "vaya"],
        answerIndex: 2,
        hints: [
          "Does affirmative **creo que** declare belief/certainty (indicative) or doubt (subjunctive)?",
        ],
        explanation:
          "**es** (present indicative of *ser*) is required because affirmative *creo que* states an opinion as a declared fact, and *eficiente* is an inherent characteristic.",
      },
      {
        id: "subjunctive-grade9-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weirdo-and-impersonal",
        question:
          "Now negate the opinion: *No creo que el uniforme escolar _______ muy cómodo.*",
        options: ["es", "está", "será", "sea"],
        answerIndex: 3,
        hints: [
          "Compare affirmative *creo que* with negated **no creo que**.",
          "Negating belief opens up doubt, flipping the verb to the DISHES subjunctive of *ser*.",
        ],
        explanation:
          "**sea** is the present subjunctive of *ser*, triggered by negated belief (*no creo que*). *es* would only be valid after affirmative *creo que*.",
      },
      {
        id: "subjunctive-grade9-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weirdo-and-impersonal",
        question:
          "Both clauses have the **exact same subject** (*yo*): how do you say *'I want to study medicine at university'*?",
        options: [
          "Quiero estudiar medicina en la universidad.",
          "Quiero que estudio medicina en la universidad.",
          "Quiero que estudie medicina en la universidad.",
          "Quiero estudiando medicina en la universidad.",
        ],
        answerIndex: 0,
        hints: [
          "Check whether the subject changes between 'I want' and 'to study'.",
          "When there is NO change of subject, drop *que* and use the infinitive!",
        ],
        explanation:
          "**Quiero estudiar medicina en la universidad** uses **quiero + infinitive** because *yo* both wants and studies. *Quiero que estudie* means 'I want him/her/you(formal) to study'.",
      },
      {
        id: "subjunctive-grade9-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cuando-and-time-clauses",
        question:
          "Complete this classic Paper 2 future sentence: *Cuando _______ dieciocho años, aprenderé a conducir.*",
        options: ["tendré", "tenga", "tengo", "tenía"],
        answerIndex: 1,
        hints: [
          "*Aprenderé* shows that turning eighteen is still in the **future** — never put future tense after future *cuando*!",
        ],
        explanation:
          "**tenga** (present subjunctive) is mandatory after *cuando* when referring to an unrealised future event. *tendré* after *cuando* is an English-interference error.",
      },
      {
        id: "subjunctive-grade9-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cuando-and-time-clauses",
        question:
          "Contrast with a habitual routine: *Todos los días, cuando _______ del instituto, meriendo fruta.*",
        options: ["salga", "saldré", "salgo", "salía"],
        answerIndex: 2,
        hints: [
          "Look at *todos los días* and *meriendo* — is this a pending future event or a regular present habit?",
          "Habitual actions after *cuando* keep the present indicative!",
        ],
        explanation:
          "**salgo** (present indicative) is used because *todos los días… meriendo* describes a repeated present habit rather than a future event.",
      },
      {
        id: "subjunctive-grade9-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "si-clauses-and-imperfect-subj",
        question:
          "Complete this Grade-9 hypothetical *si* clause: *Si yo _______ más tiempo libre, haría trabajo voluntario.*",
        options: ["tendría", "tenga", "tengo", "tuviera"],
        answerIndex: 3,
        hints: [
          "Notice the conditional main verb **haría** ('I would do').",
          "Pair the conditional with **si + imperfect subjunctive** — never conditional right after *si*!",
        ],
        explanation:
          "**tuviera** (imperfect subjunctive of *tener*, from *tuvieron*) pairs with conditional *haría*. *tendría* after *si* is ungrammatical in conditional clauses, and *tenga* never follows conditional *si*.",
      },
      {
        id: "subjunctive-grade9-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Choose the accurate preposition: *¡Muchas gracias _______ tu regalo de cumpleaños!*",
        options: ["por", "para", "de", "a"],
        answerIndex: 0,
        hints: [
          "Gratitude looks back at the **cause / reason** for saying thank you.",
        ],
        explanation:
          "**por** expresses the cause or reason behind gratitude (*gracias por*). *gracias para* is one of the most common IGCSE errors.",
      },
      {
        id: "subjunctive-grade9-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Replace *el libro* and *a mi hermana* with double object pronouns: *Compré el libro y _______ di.*",
        options: ["le lo", "se lo", "lo se", "se la"],
        answerIndex: 1,
        hints: [
          "Put the indirect pronoun (*a mi hermana → le*) before the direct pronoun (*el libro → lo*).",
          "What happens whenever *le* or *les* meets *lo / la / los / las*?",
        ],
        explanation:
          "**se lo** applies ID order plus the Double-L rule: *le* mutates to **se** before masculine singular *lo* (*el libro*). *le lo* is impossible in Spanish.",
      },
      {
        id: "subjunctive-grade9-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "forming-present-subjunctive",
        question:
          "Watch *-ir* stem-changing verbs in *nosotros*! Which verb accurately completes *Es aconsejable que nosotros _______ (dormir) al menos ocho horas*?",
        options: ["dormamos", "duermamos", "durmamos", "dormimos"],
        answerIndex: 2,
        hints: [
          "After *es aconsejable que*, you need the **present subjunctive** of *dormir* for *nosotros*.",
          "Unlike *-ar/-er* boot verbs, *-ir* stem-changers (*o→ue* and *e→ie*) keep a reduced single-vowel shift (**o→u** or **e→i**) in *nosotros* and *vosotros* of the present subjunctive!",
        ],
        explanation:
          "**durmamos** reflects the *-ir* stem-change rule in *nosotros/vosotros* present subjunctive (*o → u*: *duerma, duermas, duerma, durmamos, durmáis, duerman*). *dormimos* is indicative.",
      },
    ],
  },
  {
    id: "subjunctive-grade9-m2",
    title: "MCQ Paper 2 — ESCAPA Conjunctions, Imperfect Subjunctive & Confusables",
    questions: [
      {
        id: "subjunctive-grade9-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weirdo-and-impersonal",
        question:
          "Complete the exclamation: *¡Ojalá _______ buen tiempo durante nuestra excursión mañana!*",
        options: ["hace", "hará", "hacer", "haga"],
        answerIndex: 3,
        hints: [
          "**Ojalá** ALWAYS triggers the subjunctive!",
        ],
        explanation:
          "**haga** (present subjunctive of *hacer*, from *yo hago*) is required because *ojalá* always triggers the subjunctive.",
      },
      {
        id: "subjunctive-grade9-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "forming-present-subjunctive",
        question:
          "Complete with the **present subjunctive** of **conocer** (*tú*): *Espero que _______ muchos lugares fascinantes en Perú.*",
        options: ["conozcas", "conoces", "conocerás", "conociste"],
        answerIndex: 0,
        hints: [
          "Start from present *yo* of *conocer*: **conozco**.",
          "Drop *-o* (*conozc-*) and add the *-er* opposite ending **-as**.",
        ],
        explanation:
          "**conozcas** preserves the *-zc-* stem from *yo conozco* across the entire present subjunctive (*conozca, conozcas, conozca, conozcamos…*).",
      },
      {
        id: "subjunctive-grade9-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weirdo-and-impersonal",
        question:
          "Which verb completes *Es urgente que _______ más papeleras de reciclaje en el patio* ('that there be…')?",
        options: ["hay", "haya", "habrá", "tiene"],
        answerIndex: 1,
        hints: [
          "In the indicative, 'there is / there are' is *hay* (from **haber**).",
          "After *es urgente que*, switch *hay* to its DISHES present subjunctive form!",
        ],
        explanation:
          "**haya** is the impersonal present subjunctive of *haber* ('that there be'), triggered by *es urgente que*. *hay* is indicative.",
      },
      {
        id: "subjunctive-grade9-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cuando-and-time-clauses",
        question:
          "Choose the right verb after **para que**: *Mis padres me dan una paga semanal para que yo _______ a ahorrar.*",
        options: ["aprendo", "aprenderé", "aprenda", "aprender"],
        answerIndex: 2,
        hints: [
          "**Para que** ('so that') introduces a new subject (*yo*) and belongs to the ESCAPA group.",
          "ESCAPA conjunctions ALWAYS trigger the subjunctive!",
        ],
        explanation:
          "**aprenda** (present subjunctive of *aprender*) is required because *para que* + conjugated clause always takes the subjunctive.",
      },
      {
        id: "subjunctive-grade9-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cuando-and-time-clauses",
        question:
          "Complete: *Limpio mi dormitorio antes de que _______ mis abuelos.*",
        options: ["llegan", "llegarán", "llegaron", "lleguen"],
        answerIndex: 3,
        hints: [
          "**Antes de que** ('before') ALWAYS triggers the subjunctive.",
          "Remember the *-gar → -gu* spelling shift before *-en*!",
        ],
        explanation:
          "**lleguen** combines the mandatory subjunctive after *antes de que* with the *g → gu* spelling shift of *llegar*.",
      },
      {
        id: "subjunctive-grade9-m2-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cuando-and-time-clauses",
        question:
          "Compare *aunque* + fact vs *aunque* + hypothetical! Which sentence accurately says *'Even if it rains tomorrow, we will play the match'*?",
        options: [
          "Aunque llueva mañana, jugaremos el partido.",
          "Aunque llueve mañana, jugaremos el partido.",
          "Aunque lloverá mañana, jugaremos el partido.",
          "Aunque llovió mañana, jugaremos el partido.",
        ],
        answerIndex: 0,
        hints: [
          "Tomorrow's rain is hypothetical ('even if'), not an established fact happening right now.",
          "*Aunque* + **present subjunctive** means 'even if' for uncertain future events!",
        ],
        explanation:
          "**Aunque llueva mañana, jugaremos el partido** uses *aunque + subjunctive* (*llueva*) to express hypothetical 'even if'. *Aunque llueve* (indicative) means 'Although it IS raining right now'.",
      },
      {
        id: "subjunctive-grade9-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "si-clauses-and-imperfect-subj",
        question:
          "Complete this Type 1 likely condition: *Si _______ buen tiempo este sábado, iremos a la costa.*",
        options: ["haga", "hace", "hará", "haría"],
        answerIndex: 1,
        hints: [
          "Notice future *iremos* in the main clause — Type 1 real *si* clauses use **present indicative** (NEVER present subjunctive!) after *si*.",
        ],
        explanation:
          "**hace** (present indicative) is required in a Type 1 *si* clause (*Si hace…, iremos…*). Conditional *si* never takes the present subjunctive *haga*.",
      },
      {
        id: "subjunctive-grade9-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "si-clauses-and-imperfect-subj",
        question:
          "Complete this Grade-9 Area B sentence: *Si yo _______ la directora de mi instituto, modernizaría los laboratorios.*",
        options: ["sería", "sea", "fuera", "soy"],
        answerIndex: 2,
        hints: [
          "The consequence verb **modernizaría** is conditional ('I would modernise').",
          "Form the imperfect subjunctive of *ser* from *ellos fueron* minus *-ron* + *-ra*.",
        ],
        explanation:
          "**fuera** (imperfect subjunctive of *ser*) pairs with conditional *modernizaría*. *sería* is banned right after conditional *si*.",
      },
      {
        id: "subjunctive-grade9-m2-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "si-clauses-and-imperfect-subj",
        question:
          "Check the written accent on *nosotros* in the imperfect subjunctive! Which form completes *Si nosotros _______ (poder) elegir, estudiaríamos menos asignaturas*?",
        options: ["pudieramos", "podríamos", "podamos", "pudiéramos"],
        answerIndex: 3,
        hints: [
          "*Ellos pudieron* minus *-ron* gives *pudie-* + *-ramos*.",
          "Every *nosotros* imperfect subjunctive carries a written accent on the vowel immediately before *-ramos*!",
        ],
        explanation:
          "**pudiéramos** places the required written accent on the *é* before *-ramos* (*pudiéramos*). *pudieramos* lacks the accent, and *podríamos* is conditional.",
      },
      {
        id: "subjunctive-grade9-m2-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Which sentence translates *'I am looking for my keys'* with **100% accuracy**?",
        options: [
          "Busco mis llaves.",
          "Busco para mis llaves.",
          "Busco por mis llaves.",
          "Busco a mis llaves.",
        ],
        answerIndex: 0,
        hints: [
          "Remember zero-preposition verbs: **buscar** already contains 'for' inside its meaning, and *mis llaves* is an inanimate object (no personal *a*).",
        ],
        explanation:
          "**Busco mis llaves** is right because *buscar* already means 'to look for' and takes a direct object with no preposition.",
      },
      {
        id: "subjunctive-grade9-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Choose the accurate pair of prepositions: *Salimos _______ Valencia mañana y viajaremos _______ tren.*",
        options: ["por … para", "para … por", "para … para", "por … por"],
        answerIndex: 1,
        hints: [
          "Valencia is the **final destination** ('bound for Valencia').",
          "Train is the **means of transport**.",
        ],
        explanation:
          "**para … por**: destination takes **para** (*salimos para Valencia*), while means of transport takes **por** (*por tren* / *en tren*).",
      },
      {
        id: "subjunctive-grade9-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Watch the Grade-9 *ser vs estar* trap! Which sentence accurately says *'The graduation ceremony is in the assembly hall'*?",
        options: [
          "La ceremonia de graduación está en el salón de actos.",
          "La ceremonia de graduación hay en el salón de actos.",
          "La ceremonia de graduación es en el salón de actos.",
          "La ceremonia de graduación tiene en el salón de actos.",
        ],
        answerIndex: 2,
        hints: [
          "*La ceremonia* is an **event** ('takes place in'), NOT a physical object or person!",
          "Where an **event** takes place uses **ser**, whereas physical objects/people use *estar*.",
        ],
        explanation:
          "**La ceremonia de graduación es en el salón de actos** uses **es** because Spanish uses *ser* for the venue where an event takes place (*es = se celebra*).",
      },
      {
        id: "subjunctive-grade9-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Select the accurate verb for *¿Tú _______ nadar en el mar, o prefieres la piscina?*",
        options: ["conoces", "sabes cómo", "pides", "sabes"],
        answerIndex: 3,
        hints: [
          "How does Spanish express 'know how to + verb'?",
          "Use **saber + infinitive** directly — never add *cómo* and never use *conocer*!",
        ],
        explanation:
          "**sabes** (*¿Tú sabes nadar…?*) uses *saber + infinitive* to express a learned skill. *sabes cómo nadar* is an anglicism, and *conoces* is only for people/places.",
      },
      {
        id: "subjunctive-grade9-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Choose the right verb: *Al final de la cena, mi padre _______ la cuenta al camarero.*",
        options: ["pidió", "preguntó", "buscó", "supo"],
        answerIndex: 0,
        hints: [
          "Did her father ask a question (*preguntar*) or request/order an item (*pedir*)?",
          "Check the 3rd-person preterite *e→i* sandal change of *pedir*!",
        ],
        explanation:
          "**pidió** (preterite of *pedir*, with *e→i* change in 3rd person) means 'asked for / requested' an item (*la cuenta*). *preguntó* is only for asking questions.",
      },
      {
        id: "subjunctive-grade9-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Which option accurately attaches BOTH pronouns (*a mí* + *las entradas*) onto *voy a comprar*?",
        options: [
          "Voy a comprarmelas.",
          "Voy a comprármelas.",
          "Voy a las comprarme.",
          "Voy a melas comprar.",
        ],
        answerIndex: 1,
        hints: [
          "Attach Indirect (**me**) then Direct (**las**) directly to the infinitive *comprar*.",
          "Count back three syllables (*com-PRÁR-me-las*) — you need a written accent on **á** to keep the original stress on *-prar*!",
        ],
        explanation:
          "**Voy a comprármelas** joins *comprar + me + las* in ID order and adds the required written accent on *á* so the spoken stress does not shift.",
      },
    ],
  },
  {
    id: "subjunctive-grade9-m3",
    title: "MCQ Paper 3 — Higher Paper 2 Q3c & Grade-9 Discourse Mastery",
    questions: [
      {
        id: "subjunctive-grade9-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "forming-present-subjunctive",
        question:
          "Complete with the **present subjunctive** of **empezar** (*nosotros*): *Es mejor que _______ el proyecto hoy mismo.*",
        options: ["empiezamos", "empezamos", "empecemos", "empiecemos"],
        answerIndex: 2,
        hints: [
          "Watch TWO rules at once on *empezar* (*e→ie* boot verb + *-zar* spelling shift)!",
          "In *nosotros*, *-ar* boot verbs do NOT diphthongise (*e* stays *e*), whereas **z → c** before *-emos* STILL applies!",
        ],
        explanation:
          "**empecemos** drops the boot change outside the boot (*nosotros*) while keeping the mandatory *z → c* consonant spelling shift before *e*.",
      },
      {
        id: "subjunctive-grade9-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "forming-present-subjunctive",
        question:
          "Complete with the **present subjunctive** of **estar** (*ellos*): *Me preocupa que tantos ríos _______ contaminados.*",
        options: ["están", "esten", "sean", "estén"],
        answerIndex: 3,
        hints: [
          "Pollution is a **state/result** (*estar*), and *me preocupa que* triggers the DISHES subjunctive.",
          "Don't miss the written accent on the final syllable of *estar* in the subjunctive!",
        ],
        explanation:
          "**estén** carries a written accent (*esté, estés, esté, estemos, estéis, estén*) and expresses the resulting state after *me preocupa que*.",
      },
      {
        id: "subjunctive-grade9-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weirdo-and-impersonal",
        question:
          "Which verb accurately completes *Es evidente que las energías renovables _______ el futuro del planeta*?",
        options: ["son", "sean", "estén", "fueran"],
        answerIndex: 0,
        hints: [
          "Does **es evidente que** ('it is obvious that') express doubt/WEIRDO or declared certainty?",
          "Impersonal expressions of certainty take the **indicative**!",
        ],
        explanation:
          "**son** (present indicative) is required because *es evidente que* declares an obvious fact, unlike *es importante que* or *es dudoso que*.",
      },
      {
        id: "subjunctive-grade9-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weirdo-and-impersonal",
        question:
          "Complete: *Puede que mañana _______ chubascos en el norte de España, así que lleva paraguas.*",
        options: ["hay", "haya", "había", "hubo"],
        answerIndex: 1,
        hints: [
          "**Puede que** ('maybe / it may be that') ALWAYS triggers the present subjunctive!",
          "Choose the impersonal subjunctive of *haber*.",
        ],
        explanation:
          "**haya** follows *puede que*, which invariably triggers the subjunctive (unlike *a lo mejor*, which takes the indicative).",
      },
      {
        id: "subjunctive-grade9-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cuando-and-time-clauses",
        question:
          "Which sentence translates *'We will go to the beach unless it is cold'*?",
        options: [
          "Iremos a la playa a menos que hace frío.",
          "Iremos a la playa a menos que hará frío.",
          "Iremos a la playa a menos que haga frío.",
          "Iremos a la playa para que haga frío.",
        ],
        answerIndex: 2,
        hints: [
          "'Unless' is **a menos que** (part of ESCAPA).",
          "**A menos que** ALWAYS triggers the present subjunctive (*hacer → haga*).",
        ],
        explanation:
          "**Iremos a la playa a menos que haga frío** pairs *a menos que* ('unless') with the present subjunctive *haga*. *para que* means 'so that'.",
      },
      {
        id: "subjunctive-grade9-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cuando-and-time-clauses",
        question:
          "Spot the difference between **sin + infinitive** and **sin que + subjunctive**: which option completes *Vanishree aprobó todo sin que nadie le _______ (ayudar)*?",
        options: ["ayuda", "ayudar", "ayudará", "ayudara"],
        answerIndex: 3,
        hints: [
          "**Sin que** introduces a new subject (*nadie*) and ALWAYS requires the subjunctive!",
          "Because the main verb *aprobó* is in the **past** (preterite), sequence of tenses uses the **imperfect subjunctive**!",
        ],
        explanation:
          "**ayudara** (imperfect subjunctive) is required because *sin que* always triggers the subjunctive and the main clause (*aprobó*) is in the past.",
      },
      {
        id: "subjunctive-grade9-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "si-clauses-and-imperfect-subj",
        question:
          "Complete BOTH halves of this Grade-9 sentence: *Si _______ menos coches en el centro, el aire _______ mucho más limpio.*",
        options: [
          "hubiera … sería",
          "habría … sería",
          "haya … será",
          "hubiera … será",
        ],
        answerIndex: 0,
        hints: [
          "'If there were fewer cars' needs the impersonal **imperfect subjunctive** of *haber*.",
          "'the air would be cleaner' needs the **conditional** of *ser*.",
        ],
        explanation:
          "**hubiera … sería** follows the Type 2 hypothetical formula: *Si + imperfect subjunctive (hubiera), + conditional (sería)*. *habría* cannot follow conditional *si*.",
      },
      {
        id: "subjunctive-grade9-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "si-clauses-and-imperfect-subj",
        question:
          "Complete the idiom **como si** ('as if'): *Mi hermano pequeño habla como si _______ veinte años.*",
        options: ["tiene", "tuviera", "tenga", "tendría"],
        answerIndex: 1,
        hints: [
          "**Como si** ('as if') describes a counterfactual comparison — even when the main verb (*habla*) is in the present!",
          "**Como si** ALWAYS takes the **imperfect subjunctive**.",
        ],
        explanation:
          "**tuviera** is mandatory because *como si* ('as if') ALWAYS takes the imperfect subjunctive (*tuviera / tuviese*), never present indicative or present subjunctive.",
      },
      {
        id: "subjunctive-grade9-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "si-clauses-and-imperfect-subj",
        question:
          "Which verb completes the main clause of *Si ganara un millón de euros, _______ una parte a una ONG*?",
        options: ["doné", "done", "donaría", "donaré"],
        answerIndex: 2,
        hints: [
          "Look at the *si* clause: *Si ganara* uses the **imperfect subjunctive**.",
          "Match *Si + imperfect subjunctive* with the **conditional** (*-ía*).",
        ],
        explanation:
          "**donaría** (conditional) completes the Type 2 hypothetical pair *Si ganara…, donaría…*. *donaré* (simple future) belongs with Type 1 *Si gano…*.",
      },
      {
        id: "subjunctive-grade9-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "What does the idiomatic verb phrase **estar para** mean in *Estábamos para salir cuando empezó a llover a cántaros*?",
        options: [
          "We were in favour of going out",
          "We had just gone out",
          "We used to go out",
          "We were about to go out",
        ],
        answerIndex: 3,
        hints: [
          "Contrast *estar por* ('to be in favour of') with **estar para + infinitive**.",
          "Think of *para* pointing right at the verge of the immediate next action!",
        ],
        explanation:
          "**We were about to go out**: **estar para + infinitive** is a classic Grade-9 idiom meaning 'to be just about to do something'.",
      },
      {
        id: "subjunctive-grade9-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Choose the accurate high-tariff connector for *Las redes sociales conectan a la gente; _______, pueden provocar adicción si no tenemos cuidado.*",
        options: ["sin embargo", "dado que", "puesto que", "para que"],
        answerIndex: 0,
        hints: [
          "Clause 1 states a benefit; Clause 2 introduces an opposing risk.",
          "Pick the contrast connector meaning **'however / nevertheless'**.",
        ],
        explanation:
          "**sin embargo** ('however') introduces a contrast. *dado que* and *puesto que* mean 'since/given that' (cause), and *para que* means 'so that'.",
      },
      {
        id: "subjunctive-grade9-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "pronouns-por-para-ser-estar",
        question:
          "Look carefully at negative commands with double pronouns! Which sentence accurately translates *'Don't tell it (la respuesta) to them!'* (*tú* negative command)?",
        options: [
          "¡No dísela!",
          "¡No se la digas!",
          "¡No les la digas!",
          "¡No dígasela!",
        ],
        answerIndex: 1,
        hints: [
          "Negative *tú* commands use **no + present subjunctive** (*decir → digas*), and pronouns MUST go **before** a negative command (never attached)!",
          "Apply ID order + Double-L mutation: *les + la → se la*.",
        ],
        explanation:
          "**¡No se la digas!** places the mutated pronouns *se la* BEFORE the negative *tú* subjunctive command *digas*. Pronouns only attach to *affirmative* commands (*¡Dísela!*).",
      },
      {
        id: "subjunctive-grade9-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "forming-present-subjunctive",
        question:
          "Complete with the **present subjunctive** of **proteger** (*nosotros*): *Es vital que _______ las especies en peligro de extinción.*",
        options: ["protegamos", "proteguemos", "protejamos", "protegemos"],
        answerIndex: 2,
        hints: [
          "Start from present *yo* of *proteger*: **protejo** (with **j** to keep the /x/ sound before *o*).",
          "Keep that *j* stem before the *-er* subjunctive ending **-amos**!",
        ],
        explanation:
          "**protejamos** comes directly from *yo protejo → protej- + -amos*, preserving the consonant sound before *a*. *protegemos* is indicative.",
      },
      {
        id: "subjunctive-grade9-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weirdo-and-impersonal",
        question:
          "Choose the accurate connector + mood: *_______ el alquiler es muy caro en Madrid, muchos jóvenes siguen viviendo con sus padres.*",
        options: [
          "Para que",
          "A menos que",
          "Sin que",
          "Dado que",
        ],
        answerIndex: 3,
        hints: [
          "Look at the indicative verb **es** ('the rent IS very expensive') — this states the **cause/reason**.",
          "Which Grade-9 causal connector means **'Given that / Since'** and takes the indicative?",
        ],
        explanation:
          "**Dado que** ('Given that / Since') introduces a factual cause with the indicative (*es*). *Para que*, *a menos que*, and *sin que* all require the subjunctive.",
      },
      {
        id: "subjunctive-grade9-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "si-clauses-and-imperfect-subj",
        question:
          "Which sentence combines **three** genuine Grade-9 structures with **zero** grammatical errors?",
        options: [
          "Cuando termine el colegio, viajaré por Chile; además, si tuviera tiempo, haría voluntariado para que los niños aprendan inglés.",
          "Cuando terminaré el colegio, viajaré por Chile; además, si tendría tiempo, haría voluntariado para que los niños aprenden inglés.",
          "Cuando termine el colegio, viajaré para Chile; además, si tenga tiempo, haría voluntariado para que los niños aprendan inglés.",
          "Cuando termino el colegio mañana, viajaría por Chile; además, si tuviera tiempo, haré voluntariado para que los niños aprendan inglés.",
        ],
        answerIndex: 0,
        hints: [
          "Check all three complex checkpoints: (1) future *cuando* + present subjunctive, (2) *si* + imperfect subjunctive + conditional, and (3) *para que* + present subjunctive.",
          "Also check **por** Chile ('travelling through/around Chile')!",
        ],
        explanation:
          "**Cuando termine el colegio, viajaré por Chile; además, si tuviera tiempo, haría voluntariado para que los niños aprendan inglés** nails future *cuando + termine*, *por* for travelling around a country, *si tuviera + haría*, and *para que + aprendan*.",
      },
    ],
  },
];
