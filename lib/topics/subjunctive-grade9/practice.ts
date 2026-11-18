import type { TopicPractice } from "../../types.ts";
import { acceptedForms } from "../../spanish/verbs.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "subjunctive-grade9-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "forming-present-subjunctive",
      question:
        "Choose the **present subjunctive** of **salir** (*tú*): *Espero que _______ temprano de casa.*",
      options: ["salgas", "sales", "saldrás", "saliste"],
      answerIndex: 0,
      hints: [
        "Start from present *yo* (**salgo**), drop *-o*, and add the *-ir* opposite ending **-as**.",
      ],
      explanation:
        "**salgas** is formed from *yo salgo* → *salg-* + *-as*. *sales* is present indicative.",
    },
    {
      id: "subjunctive-grade9-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "forming-present-subjunctive",
      question:
        "Complete with the **present subjunctive** of **ser** (*él/ella*): *Es importante que la dieta _______ equilibrada.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["sea", "ella sea"],
        display: "sea",
      },
      traps: [
        {
          spec: { type: "text", accept: ["es"] },
          feedback: "*es* is present indicative — after *es importante que*, use the DISHES subjunctive **sea**!",
        },
      ],
      hints: [
        "**ser** is one of the 6 DISHES irregulars (*dé, vaya, sea, haya, esté, sepa*).",
      ],
      solution: [
        "*Es importante que* triggers the present subjunctive.",
        "The 3rd-person singular DISHES subjunctive of **ser** is **sea**.",
      ],
    },
    {
      id: "subjunctive-grade9-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      guideRef: "weirdo-and-impersonal",
      question:
        "Select the accurate verb for *Pienso que los jóvenes hoy en día _______ demasiada presión académica.*",
      options: ["tengan", "tienen", "tuvieran", "tenían"],
      answerIndex: 1,
      hints: [
        "Look at affirmative **pienso que** and *hoy en día*.",
        "Affirmative *pienso que / creo que* declares certainty and takes the **present indicative**!",
      ],
      explanation:
        "**tienen** (present indicative) is required after affirmative *pienso que*. Only negated *no pienso que* triggers *tengan*.",
    },
    {
      id: "subjunctive-grade9-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "weirdo-and-impersonal",
      question:
        "Complete with the accurate mood of **ir** (*nosotros*): *No creo que nosotros _______ al cine esta noche.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("ir", "subjunctive", "nosotros"),
        display: "vayamos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["vamos"] },
          feedback: "*vamos* is indicative — negated **no creo que** triggers the DISHES subjunctive **vayamos**!",
        },
      ],
      hints: [
        "Negated **no creo que** introduces doubt → present subjunctive!",
        "Recall the DISHES subjunctive stem of *ir*: *vay-*.",
      ],
      solution: [
        "**No creo que** triggers the present subjunctive.",
        "Present subjunctive of **ir** for *nosotros* = **vayamos**.",
      ],
    },
    {
      id: "subjunctive-grade9-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "cuando-and-time-clauses",
      question:
        "Complete with the accurate form of **tener** (*yo*): *Cuando _______ dieciocho años, votaré en las elecciones.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("tener", "subjunctive", "yo"),
        display: "tenga",
      },
      traps: [
        {
          spec: { type: "text", accept: ["tendré"] },
          feedback: "NEVER put the future tense (*tendré*) directly after future *cuando*! Use the **present subjunctive** (**tenga**).",
        },
      ],
      hints: [
        "Notice future *votaré* — turning eighteen has not happened yet!",
        "Future *cuando* ALWAYS takes the **present subjunctive**.",
      ],
      solution: [
        "Future *cuando* + future main verb (*votaré*) requires the present subjunctive.",
        "From *yo tengo* → **tenga**.",
      ],
    },
    {
      id: "subjunctive-grade9-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "cuando-and-time-clauses",
      question:
        "Complete: *Te envío mis apuntes para que _______ repasar antes del examen.*",
      options: ["puedes", "podrás", "puedas", "podrías"],
      answerIndex: 2,
      hints: [
        "**Para que** belongs to ESCAPA.",
        "ESCAPA conjunctions ALWAYS trigger the present subjunctive!",
      ],
      explanation:
        "**puedas** (present subjunctive of *poder* for *tú*) is required after *para que*.",
    },
    {
      id: "subjunctive-grade9-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "si-clauses-and-imperfect-subj",
      question:
        "Complete the Grade-9 hypothetical *si* clause with the **imperfect subjunctive** of **poder** (*yo*): *Si _______ elegir, viviría cerca de la playa.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["pudiera", "pudiese", "yo pudiera", "yo pudiese"],
        display: "pudiera",
      },
      traps: [
        {
          spec: { type: "text", accept: ["podría"] },
          feedback: "NEVER write the conditional (*podría*) right after conditional *si*! Use **pudiera** (or **pudiese**).",
        },
      ],
      hints: [
        "Notice conditional *viviría* in the main clause → Type 2 hypothetical *si* clause!",
        "Take *ellos pudieron*, drop *-ron*, and add *-ra* (or *-se*).",
      ],
      solution: [
        "Conditional *viviría* pairs with **si + imperfect subjunctive**.",
        "*Ellos pudieron* − *-ron* + *-ra* = **pudiera** (or **pudiese**).",
      ],
    },
    {
      id: "subjunctive-grade9-quiz-q08",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "pronouns-por-para-ser-estar",
      question:
        "Choose **por** or **para**: *Pagué veinticinco euros _______ las entradas del concierto.*",
      options: ["para", "a", "de", "por"],
      answerIndex: 3,
      hints: [
        "Money given **in exchange for** something always uses the same preposition.",
      ],
      explanation:
        "**por** expresses financial exchange (*pagué 25 € por las entradas*).",
    },
    {
      id: "subjunctive-grade9-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "pronouns-por-para-ser-estar",
      question:
        "Replace *las llaves* and *a mi hermano* with two pronouns before the verb: *Encontré las llaves y _______ _______ di.* (Write ONLY the two Spanish pronouns.)",
      answer: {
        type: "text",
        accept: ["se las"],
        display: "se las",
      },
      traps: [
        {
          spec: { type: "text", accept: ["le las"] },
          feedback: "*Le* ALWAYS flips to **se** before *lo / la / los / las*!",
        },
      ],
      hints: [
        "Indirect *a mi hermano* (*le*) comes before feminine plural direct *las llaves* (*las*).",
        "Apply the Double-L rule (*le → se*)!",
      ],
      solution: [
        "Indirect *le* + feminine plural direct *las*.",
        "*Le* mutates to **se** before *las* → **se las**.",
      ],
    },
    {
      id: "subjunctive-grade9-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "pronouns-por-para-ser-estar",
      question:
        "Which sentence translates *'Do you know Madrid?'* ('Are you familiar with Madrid?') accurately?",
      options: [
        "¿Conoces Madrid?",
        "¿Conoces a Madrid?",
        "¿Sabes Madrid?",
        "¿Sabes a Madrid?",
      ],
      answerIndex: 0,
      hints: [
        "Being familiar with a **place** uses **conocer** (not *saber*).",
        "Personal *a* is ONLY used for people (and beloved pets), NOT cities!",
      ],
      explanation:
        "**¿Conoces Madrid?** uses *conocer* for familiarity with a place and omits personal *a* because Madrid is a city, not a person.",
    },
  ],

  papers: [
    {
      id: "subjunctive-grade9-p1",
      title: "Practice Paper 1 — Edexcel 4SP0 Paper 2 Q3c Grammar, Reading & Q6 Writing",
      questions: [
        {
          id: "subjunctive-grade9-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "forming-present-subjunctive",
          question:
            "**Paper 2 Q3c Gap-Fill:** Complete with the **present subjunctive** of **reciclar** (*nosotros*):\n\n*Es esencial que _______ el papel y el plástico en el instituto.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("reciclar", "subjunctive", "nosotros"),
            display: "reciclemos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["reciclamos"] },
              feedback: "*reciclamos* is indicative — swap *-a-* to the opposite vowel **-e-** (**reciclemos**)!",
            },
          ],
          hints: [
            "*-ar* verbs take **-e** endings in the present subjunctive.",
          ],
          solution: [
            "Take *yo reciclo* → drop *-o* (*recicl-*) → add *-emos* = **reciclemos**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "forming-present-subjunctive",
          question:
            "**Paper 2 Q3c Gap-Fill:** Complete with the **present subjunctive** of **sacar** (*tú*):\n\n*Mis padres esperan que _______ muy buenas notas este trimestre.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("sacar", "subjunctive", "tú"),
            display: "saques",
          },
          traps: [
            {
              spec: { type: "text", accept: ["saces", "sacas"] },
              feedback: "Watch the *-car → -qu* spelling shift before *-es*: **saques**!",
            },
          ],
          hints: [
            "**sacar** ends in *-car*.",
            "Change **c → qu** before the *-es* subjunctive ending!",
          ],
          solution: [
            "*Yo saco* → *sac-* → spelling shift *saqu-* + *-es* = **saques**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "forming-present-subjunctive",
          question:
            "**Paper 2 Q3c Gap-Fill:** Complete with the **present subjunctive** of **saber** (*ellos*):\n\n*Es importante que los turistas _______ respetar las costumbres locales.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("saber", "subjunctive", "ellos"),
            display: "sepan",
          },
          traps: [
            {
              spec: { type: "text", accept: ["saben"] },
              feedback: "*saben* is indicative — use the DISHES subjunctive **sepan**!",
            },
          ],
          hints: [
            "**saber** is a DISHES irregular (*yo sé* does not end in *-o*).",
            "Its present subjunctive stem is **sep-**.",
          ],
          solution: [
            "DISHES subjunctive of **saber** for *ellos* (*los turistas*) = **sepan**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "weirdo-and-impersonal",
          question:
            "**Mood Switchboard:** Complete with the accurate form of **tener** (*él/ella*):\n\n*Es verdad que mi barrio _______ muchas zonas verdes.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["tiene", "él tiene", "ella tiene"],
            display: "tiene",
          },
          traps: [
            {
              spec: { type: "text", accept: ["tenga"] },
              feedback: "Careful! Affirmative **es verdad que** declares a known fact, so it takes the **present indicative** (**tiene**), not the subjunctive!",
            },
          ],
          hints: [
            "Check Clause 1: **Es verdad que** ('It is true that') states certainty, NOT doubt or WEIRDO!",
            "Use the present indicative of *tener* for *mi barrio* (3rd person singular).",
          ],
          solution: [
            "Affirmative *es verdad que* requires the **present indicative**.",
            "3rd-person singular present indicative of **tener** = **tiene**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "weirdo-and-impersonal",
          question:
            "**Mood Switchboard:** Complete with the accurate form of **estar** (*él/ella*):\n\n*Me molesta mucho que la playa _______ tan sucia en agosto.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["esté", "ella esté"],
            display: "esté",
          },
          traps: [
            {
              spec: { type: "text", accept: ["está"] },
              feedback: "*está* is indicative — emotion trigger **me molesta que** requires the accented DISHES subjunctive **esté**!",
            },
          ],
          hints: [
            "**Me molesta que** is a WEIRDO emotion trigger.",
            "Remember the written accent on the final *-é* of *estar* in the subjunctive!",
          ],
          solution: [
            "Emotion trigger *me molesta que* requires the present subjunctive.",
            "3rd-person singular DISHES subjunctive of **estar** = **esté**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q06",
          kind: "mcq",
          difficulty: "core",
          guideRef: "weirdo-and-impersonal",
          question:
            "**Reading Comprehension (Area B — School Forum):**\n\n> *«En mi colegio está prohibido usar el móvil en los pasillos. Aunque el director cree que esta norma mejora la concentración, yo no pienso que sea justo prohibirlo durante el recreo. Ojalá nos dejen usarlo al menos a la hora de comer.»* — **Lucía, 16 años**\n\nWhat is Lucía's view of the mobile-phone ban?",
          options: [
            "She completely agrees with the headteacher that phones should be banned all day.",
            "She thinks banning phones during break time is unfair and hopes students will be allowed to use them at lunchtime.",
            "She says students are already allowed to use their phones during lunch in the corridors.",
            "She doubts that the headteacher wants to improve concentration.",
          ],
          answerIndex: 1,
          hints: [
            "Focus on *no pienso que sea justo prohibirlo durante el recreo* and *Ojalá nos dejen usarlo al menos a la hora de comer*.",
            "Notice how *ojalá nos dejen* expresses a wish for something NOT currently allowed.",
          ],
          explanation:
            "*no pienso que sea justo prohibirlo durante el recreo* = she doesn't think banning it at break is fair, and *Ojalá nos dejen usarlo… a la hora de comer* = she hopes they will let students use it at lunchtime.",
        },
        {
          id: "subjunctive-grade9-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "cuando-and-time-clauses",
          question:
            "**Paper 2 Q3c Gap-Fill:** Complete with the accurate form of **llegar** (*nosotros*):\n\n*Mañana, en cuanto _______ al hotel en Málaga, iremos directamente a la piscina.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("llegar", "subjunctive", "nosotros"),
            display: "lleguemos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["llegaremos", "llegamos"] },
              feedback: "Future *en cuanto* (*mañana… iremos*) requires the **present subjunctive** with *-gar → -gu*: **lleguemos**!",
            },
          ],
          hints: [
            "*Mañana… iremos* places the arrival in the **future** → present subjunctive after *en cuanto*!",
            "Apply the **g → gu** shift before *-emos*.",
          ],
          solution: [
            "Future time clause *en cuanto* requires the present subjunctive.",
            "**llegar** (*nosotros*) → *llegu-* + *-emos* = **lleguemos**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "cuando-and-time-clauses",
          question:
            "Complete with the **present subjunctive** of **hacer** (*él/ella*, impersonal weather):\n\n*Saldremos en bicicleta esta tarde a menos que _______ mucho viento.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["haga"],
            display: "haga",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hace", "hará"] },
              feedback: "**A menos que** ('unless') ALWAYS triggers the present subjunctive → **haga**!",
            },
          ],
          hints: [
            "**A menos que** belongs to ESCAPA and ALWAYS triggers the subjunctive.",
            "Take *yo hago* → drop *-o* → **haga**.",
          ],
          solution: [
            "*A menos que* requires the present subjunctive.",
            "Impersonal 3rd-person singular subjunctive of **hacer** = **haga**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "si-clauses-and-imperfect-subj",
          question:
            "**Grade-9 'Si' Clause:** Complete with the **imperfect subjunctive** of **ser** (*yo*):\n\n*Si yo _______ el alcalde de mi ciudad, construiría más carriles bici.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["fuera", "fuese", "yo fuera", "yo fuese"],
            display: "fuera",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sería", "sea"] },
              feedback: "NEVER write *sería* or *sea* after conditional *si*! Use the imperfect subjunctive **fuera** (or **fuese**).",
            },
          ],
          hints: [
            "Notice conditional *construiría* in the main clause → Type 2 hypothetical *si* clause!",
            "Take *ellos fueron*, drop *-ron*, and add *-ra* (or *-se*).",
          ],
          solution: [
            "Type 2 *si* clause requires the imperfect subjunctive.",
            "*Ellos fueron* − *-ron* + *-ra* = **fuera** (or **fuese**).",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "si-clauses-and-imperfect-subj",
          question:
            "Complete the main clause of this Type 2 *si* sentence with the **conditional** of **viajar** (*nosotros*):\n\n*Si tuviéramos un mes libre en verano, _______ por toda Sudamérica.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("viajar", "conditional", "nosotros"),
            display: "viajaríamos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["viajaremos"] },
              feedback: "*viajaremos* is simple future — pair imperfect subjunctive *si tuviéramos* with the **conditional** (**viajaríamos**)!",
            },
          ],
          hints: [
            "Pair *Si + imperfect subjunctive (tuviéramos)* with the **conditional**.",
            "Attach *-íamos* (with written accent on *í*!) to the full infinitive *viajar*.",
          ],
          solution: [
            "Main clause of a Type 2 *si* sentence takes the conditional.",
            "*viajar* + *-íamos* = **viajaríamos**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q11",
          kind: "short",
          difficulty: "warmup",
          guideRef: "pronouns-por-para-ser-estar",
          question:
            "Complete with **por** or **para**:\n\n*Tengo que terminar esta presentación _______ el viernes sin falta.* (Write ONLY **por** or **para**.)",
          answer: {
            type: "text",
            accept: ["para"],
            display: "para",
          },
          traps: [
            {
              spec: { type: "text", accept: ["por"] },
              feedback: "*El viernes* is a **deadline** ('by/for Friday'), which always takes **para**!",
            },
          ],
          hints: [
            "*El viernes* is a future **deadline** on the calendar.",
          ],
          solution: [
            "Deadlines ('for/by Friday') always use **para**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "pronouns-por-para-ser-estar",
          question:
            "Replace *los apuntes* and *a mi mejor amiga* with two pronouns before the verb:\n\n*Escaneé los apuntes y _______ _______ envié ayer.* (Write ONLY the two Spanish pronouns.)",
          answer: {
            type: "text",
            accept: ["se los"],
            display: "se los",
          },
          traps: [
            {
              spec: { type: "text", accept: ["le los", "se las"] },
              feedback: "*A mi mejor amiga* (*le*) flips to **se**, and *los apuntes* is masculine plural (**los**) → **se los**!",
            },
          ],
          hints: [
            "Indirect *a mi mejor amiga* (*le*) mutates to **se** before a 3rd-person direct pronoun.",
            "Check the gender and number of *los apuntes* (masculine plural)!",
          ],
          solution: [
            "Notice that the direct pronoun agrees with *los apuntes* (masc. pl. = **los**), while *a mi mejor amiga* (*le*) mutates to **se** → **se los**.",
          ],
        },
        {
          id: "subjunctive-grade9-p1-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "si-clauses-and-imperfect-subj",
          question:
            "**Reading Comprehension (Area D — Youth Eco-Blog):**\n\n> *«Me preocupa muchísimo que sigamos usando tantos envases de plástico. Si los supermercados cobraran más por las bolsas y ofrecieran descuentos a quienes lleven su propia botella, reduciríamos la basura a la mitad antes de que sea tarde.»*\n\nWhich **two** measures does the writer propose in the hypothetical *si* clause?",
          options: [
            "Banning supermarkets on Sundays and planting trees in city centres.",
            "Making schools recycle paper and fining drivers in the city centre.",
            "Charging more for plastic bags and offering discounts to shoppers who bring their own bottle.",
            "Giving out free plastic bottles and opening more recycling factories.",
          ],
          answerIndex: 2,
          hints: [
            "Read the *Si…* sentence carefully: *cobraran más por las bolsas* and *ofrecieran descuentos a quienes lleven su propia botella*.",
            "*Cobrar* = to charge money; *bolsas* = bags.",
          ],
          explanation:
            "*cobraran más por las bolsas* = charging more for bags, and *ofrecieran descuentos a quienes lleven su propia botella* = offering discounts to people who bring their own bottle.",
        },
        {
          id: "subjunctive-grade9-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "weirdo-and-impersonal",
          marks: 3,
          question:
            "**Edexcel Paper 2 Q6 Style (Short Grade-9 Upgrade — School Life):**\nWrite 2–3 sentences in Spanish (approx. 35–50 words) giving your views on school rules and academic life. You MUST include:\n1. A negated opinion with the present subjunctive (e.g. saying you do not think a rule or uniform is fair/comfortable).\n2. An impersonal WEIRDO recommendation for students or teachers.\n3. A high-tariff connector (such as 'however' or 'therefore').",
          modelAnswer:
            "En mi instituto tenemos muchas normas estrictas; sin embargo, no creo que el uniforme sea incómodo. Además, es imprescindible que los profesores escuchen nuestras ideas y que durmamos ocho horas diarias.",
          markScheme: [
            {
              point: "Negated opinion trigger + accurate present subjunctive (e.g. no creo que / no pienso que + sea / estén / tengan)",
              keywords: ["no creo que", "no pienso que", "dudo que", "no me parece que"],
            },
            {
              point: "Impersonal WEIRDO structure + subjunctive (e.g. es imprescindible que / es importante que / es aconsejable que / es mejor que)",
              keywords: ["imprescindible que", "importante que", "aconsejable que", "necesario que", "mejor que", "justo que"],
            },
            {
              point: "High-tariff Spanish discourse connector (e.g. sin embargo, no obstante, por lo tanto, además, dado que)",
              keywords: ["sin embargo", "no obstante", "por lo tanto", "por consiguiente", "además", "dado que"],
            },
          ],
          hints: [
            "Use *No creo que el uniforme sea…* for bullet 1.",
            "Use *Es imprescindible que los alumnos / profesores + subjunctive* for bullet 2, linked with *sin embargo* or *por lo tanto*.",
          ],
          commonError:
            "Writing *no creo que es* (indicative instead of subjunctive *sea*) or forgetting to change the subject after *que*.",
        },
        {
          id: "subjunctive-grade9-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "si-clauses-and-imperfect-subj",
          marks: 4,
          question:
            "**Edexcel Paper 2 Q7 Mini-Paragraph (Future Plans & Hypothetical 'Si' Clause):**\nWrite a short paragraph in Spanish (approx. 50–70 words) about your post-16 ambitions and ideal gap year. Include:\n1. A future time clause with 'when' or 'as soon as' + present subjunctive.\n2. A verb in the simple future tense.\n3. A Type 2 hypothetical 'if' clause using an imperfect subjunctive.\n4. A conditional verb stating what you would do.",
          modelAnswer:
            "Cuando termine mis exámenes en junio, estudiaré ciencias en el bachillerato porque me apasiona la biología. Por otro lado, si tuviera suficiente dinero el próximo verano, viajaría por Perú como voluntaria para que los niños aprendan inglés.",
          markScheme: [
            {
              point: "Future time conjunction + present subjunctive (e.g. cuando termine / cuando tenga / en cuanto pase / cuando vaya)",
              keywords: ["cuando termine", "cuando tenga", "cuando sea", "cuando vaya", "en cuanto termine", "cuando acabe"],
            },
            {
              point: "Simple future verb in the main clause (e.g. estudiaré, iré, trabajaré, haré, viviré)",
              keywords: ["estudiaré", "iré", "trabajaré", "haré", "viviré", "aprenderé", "viajaré", "seguiré"],
            },
            {
              point: "Type 2 hypothetical 'si' + imperfect subjunctive (e.g. si tuviera / si pudiera / si fuera / si ganara)",
              keywords: ["si tuviera", "si tuviese", "si pudiera", "si pudiese", "si fuera", "si fuese", "si ganara", "si ganase"],
            },
            {
              point: "Conditional verb paired with the 'si' clause (e.g. viajaría, haría, visitaría, trabajaría, viviría)",
              keywords: ["viajaría", "haría", "visitaría", "trabajaría", "viviría", "compraría", "aprendería", "ayudaría"],
            },
          ],
          hints: [
            "Open with *Cuando termine mis exámenes, estudiaré / iré…* (hits bullets 1 & 2!).",
            "Follow with *Además, si tuviera suficiente dinero / si pudiera, viajaría…* (hits bullets 3 & 4!).",
          ],
          commonError:
            "Writing *cuando terminaré* instead of *cuando termine*, or *si tendría* instead of *si tuviera*.",
        },
      ],
    },
    {
      id: "subjunctive-grade9-p2",
      title: "Practice Paper 2 — Higher Grammar Precision, Inference & Paper 3 Speaking",
      questions: [
        {
          id: "subjunctive-grade9-p2-q01",
          kind: "short",
          difficulty: "core",
          guideRef: "forming-present-subjunctive",
          question:
            "**Paper 2 Q3c Gap-Fill:** Complete with the **present subjunctive** of **decir** (*ellos*):\n\n*Pido que todos los testigos _______ la verdad.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("decir", "subjunctive", "ellos"),
            display: "digan",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dicen"] },
              feedback: "*dicen* is indicative — build from *yo digo* → **digan**!",
            },
          ],
          hints: [
            "Start from present *yo* of *decir*: **digo**.",
            "Drop *-o* and add *-an* for *ellos*.",
          ],
          solution: [
            "Present *yo* **digo** → *dig-* + *-an* = **digan**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "forming-present-subjunctive",
          question:
            "**Paper 2 Q3c Gap-Fill:** Complete with the **present subjunctive** of **construir** (*él/ella*):\n\n*Es aconsejable que el ayuntamiento _______ un nuevo polideportivo.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("construir", "subjunctive", "él"),
            display: "construya",
          },
          traps: [
            {
              spec: { type: "text", accept: ["construye"] },
              feedback: "*construye* is indicative — swap to the opposite *-a* ending from *yo construyo* → **construya**!",
            },
          ],
          hints: [
            "Start from present *yo* of *construir*: **construyo**.",
            "Drop *-o* and add *-a* for *el ayuntamiento*.",
          ],
          solution: [
            "*Yo construyo* → *construy-* + *-a* = **construya**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "weirdo-and-impersonal",
          question:
            "Complete with the accurate mood of **ir** (*yo*) — watch the **same-subject** rule!:\n\n*Este verano espero _______ de vacaciones a Menorca con mi familia.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["ir"],
            display: "ir",
          },
          traps: [
            {
              spec: { type: "text", accept: ["vaya", "voy"] },
              feedback: "Look closely: there is NO *que* and NO change of subject (*I* hope *to go*) → use the **infinitive** (**ir**)!",
            },
          ],
          hints: [
            "Notice there is NO *que* after *espero*, and the subject (*yo*) stays the same!",
            "Same subject after *espero / quiero / prefiero* takes the **infinitive**.",
          ],
          solution: [
            "Because there is no change of subject (*espero ___*), Spanish uses **esperar + infinitive** → **ir**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "weirdo-and-impersonal",
          question:
            "Now the subject **changes**: complete with the **present subjunctive** of **ir** (*tú*):\n\n*Este verano espero que tú _______ de vacaciones con nosotros.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("ir", "subjunctive", "tú"),
            display: "vayas",
          },
          traps: [
            {
              spec: { type: "text", accept: ["vas"] },
              feedback: "*vas* is indicative — *espero que tú…* requires the DISHES subjunctive **vayas**!",
            },
          ],
          hints: [
            "Here *yo* hopes that *tú* goes → subject change + *que* triggers the DISHES subjunctive!",
            "Use the *tú* subjunctive of *ir*.",
          ],
          solution: [
            "Change of subject after *espero que* triggers the DISHES present subjunctive of **ir** (*tú*) → **vayas**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "cuando-and-time-clauses",
          question:
            "Watch the **past narrative** contrast! Complete with the **preterite** of **empezar** (*él/ella*):\n\n*Anoche, cuando _______ la tormenta, cerramos todas las ventanas.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["empezó", "ella empezó"],
            display: "empezó",
          },
          traps: [
            {
              spec: { type: "text", accept: ["empiece"] },
              feedback: "Read the time frame (*Anoche… cerramos*): this event ALREADY happened last night, so *cuando* takes the **preterite** (**empezó**), not the subjunctive!",
            },
          ],
          hints: [
            "*Anoche* ('last night') and *cerramos* show a single completed past action — NOT a future event!",
            "Write the 3rd-person singular preterite of *empezar* (don't forget the final accent!).",
          ],
          solution: [
            "Completed past events after *cuando* take the **preterite indicative**.",
            "3rd-person singular preterite of **empezar** = **empezó**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "cuando-and-time-clauses",
          question:
            "Now contrast with **antes de que** in the present/future: complete with the **present subjunctive** of **empezar** (*él/ella*):\n\n*Vamos a cerrar las ventanas antes de que _______ la tormenta.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["empiece", "ella empiece"],
            display: "empiece",
          },
          traps: [
            {
              spec: { type: "text", accept: ["empieza"] },
              feedback: "**Antes de que** ALWAYS triggers the subjunctive (*e→ie* + *z→c*): **empiece**!",
            },
          ],
          hints: [
            "**Antes de que** ('before') ALWAYS triggers the subjunctive.",
            "Apply BOTH *e→ie* boot stem change and *z→c* spelling shift before *-e*!",
          ],
          solution: [
            "*Antes de que* requires the present subjunctive.",
            "**empezar** (*la tormenta*) → **empiece**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "si-clauses-and-imperfect-subj",
          question:
            "**Paper 2 Q3c Gap-Fill:** Complete with the **imperfect subjunctive** of **hacer** (*nosotros*):\n\n*Si nosotros _______ más ejercicio al aire libre, dormiríamos mucho mejor.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: [
              "hiciéramos",
              "hiciésemos",
              "nosotros hiciéramos",
              "nosotras hiciéramos",
              "nosotros hiciésemos",
              "nosotras hiciésemos",
            ],
            display: "hiciéramos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["haríamos"] },
              feedback: "NEVER write the conditional (*haríamos*) right after *si*! Use **hiciéramos** (or **hiciésemos**).",
            },
          ],
          hints: [
            "Take *ellos hicieron*, drop *-ron* (*hicie-*), and add *-ramos* (or *-semos*).",
            "Put the mandatory written accent on the **é** right before *-ramos / -semos*!",
          ],
          solution: [
            "*Ellos hicieron* − *-ron* = *hicie-*.",
            "Add *nosotros* ending with written accent → **hiciéramos** (or **hiciésemos**).",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "si-clauses-and-imperfect-subj",
          question:
            "Complete this Type 1 **real/likely** *si* clause with the accurate form of **tener** (*tú*):\n\n*Si _______ alguna duda mañana, pregúntale a la profesora.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("tener", "present", "tú"),
            display: "tienes",
          },
          traps: [
            {
              spec: { type: "text", accept: ["tengas", "tendrás"] },
              feedback: "Conditional *si* NEVER takes the present subjunctive (*tengas*) or future (*tendrás*)! Type 1 *si* + imperative (*pregúntale*) uses the **present indicative** (**tienes**).",
            },
          ],
          hints: [
            "Look at the imperative main verb *pregúntale* ('ask her') — this is a **Type 1 real condition**.",
            "Type 1 *si* clauses ALWAYS take the **present indicative**!",
          ],
          solution: [
            "Type 1 *si* + imperative requires the present indicative.",
            "**tener** (*tú*, present indicative) = **tienes**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "pronouns-por-para-ser-estar",
          question:
            "Complete with **por** or **para**:\n\n*Estuve estudiando en la biblioteca _______ tres horas seguidas.* (Write ONLY **por** or **para**.)",
          answer: {
            type: "text",
            accept: ["por"],
            display: "por",
          },
          traps: [
            {
              spec: { type: "text", accept: ["para"] },
              feedback: "Duration of time ('for three hours') takes **por** (or *durante*), NEVER *para*!",
            },
          ],
          hints: [
            "*Tres horas seguidas* measures **duration** ('for three hours straight'), not a calendar deadline.",
            "Remember: future deadlines use *para*, while length/duration of time uses **por**!",
          ],
          solution: [
            "Duration of time takes **por** (*por tres horas*).",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "pronouns-por-para-ser-estar",
          question:
            "Complete with the accurate present indicative form of **conocer** (*yo*) OR **saber** (*yo*):\n\n*No _______ a nadie en este club de tenis todavía.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["conozco", "yo conozco"],
            display: "conozco",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sé"] },
              feedback: "*A nadie* refers to **people** (notice personal *a*!) → use **conocer** (**conozco**), not *saber*!",
            },
          ],
          hints: [
            "Notice *a nadie* ('nobody' — people, with personal *a*!).",
            "What is the irregular *-zco* present *yo* form of *conocer*?",
          ],
          solution: [
            "Knowing people uses **conocer**.",
            "Present *yo* of **conocer** = **conozco**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q11",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "cuando-and-time-clauses",
          question:
            "**Reading & Inference (Area C — Family & Independence):**\n\n> *«Mis padres quieren que estudie derecho cerca de casa; no obstante, cuando cumpla dieciocho años me mudaré a otra ciudad a fin de que pueda aprender a valerme por mí mismo. No creo que nuestra relación empeore por la distancia: al contrario, nos valoraremos más.»* — **Mateo**\n\nWhich statement accurately reflects Mateo's plans and attitude?",
          options: [
            "He plans to study law near home because he fears moving away will ruin his relationship with his parents.",
            "He has already turned eighteen and moved to another city against his parents' wishes.",
            "He doubts he can look after himself without his parents' daily help.",
            "Despite his parents wanting him nearby, he intends to move away at eighteen to gain independence and believes distance will not harm their bond.",
          ],
          answerIndex: 3,
          hints: [
            "Check *cuando cumpla dieciocho años me mudaré* (future plan!) and *a fin de que pueda aprender a valerme por mí mismo* ('so that I can learn to fend for myself').",
            "Check *No creo que nuestra relación empeore por la distancia* ('I don't think our relationship will worsen because of the distance').",
          ],
          explanation:
            "Mateo has not turned 18 yet (*cuando cumpla… me mudaré*), plans to move to another city to become independent (*valerme por mí mismo*), and does not think distance will worsen his relationship with his parents.",
        },
        {
          id: "subjunctive-grade9-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "pronouns-por-para-ser-estar",
          question:
            "Write the affirmative *tú* command of **explicar** (*explica*) with BOTH pronouns attached for **'Explain it (la receta) to us!'** (*explica + nos + la* — watch the written accent!). (Write ONLY the single Spanish word.)",
          answer: {
            type: "text",
            accept: ["explícanosla"],
            display: "explícanosla",
          },
          traps: [
            {
              spec: { type: "text", accept: ["explicanosla"] },
              feedback: "Almost! Add the written accent on **í** (*explícanosla*) to preserve the natural stress on *-pli-*!",
            },
          ],
          hints: [
            "Start with affirmative *tú* command *explica* + indirect *nos* + feminine singular direct *la*.",
            "Keep the spoken stress on *-plí-* by adding a written accent mark!",
          ],
          solution: [
            "Combine *explica* + *nos* (indirect) + *la* (direct, *la receta*).",
            "Add the written accent on *í* (fourth syllable from the end) → **explícanosla**.",
          ],
        },
        {
          id: "subjunctive-grade9-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "pronouns-por-para-ser-estar",
          question:
            "Contrast **ser** vs **estar** with adjectives that shift meaning! What does *Mi primo **está** muy aburrido hoy* mean compared with *Mi primo **es** aburrido*?",
          options: [
            "My cousin feels bored today (temporary state, estar) vs my cousin is a boring person (character trait, ser).",
            "My cousin is a boring person today vs my cousin feels bored.",
            "Both sentences mean 'My cousin is a boring person'.",
            "My cousin is tired today vs my cousin is lazy.",
          ],
          answerIndex: 0,
          hints: [
            "Apply DOCTOR (*ser* = character trait) vs PLACE (*estar* = temporary emotion/state).",
            "*Ser aburrido* = boring; *estar aburrido* = bored!",
          ],
          explanation:
            "With *aburrido*, **es aburrido** describes a permanent trait ('he is boring'), whereas **está aburrido** describes a current feeling ('he is/feels bored').",
        },
        {
          id: "subjunctive-grade9-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "cuando-and-time-clauses",
          marks: 3,
          question:
            "**Edexcel Paper 3 Speaking Follow-Up (Area D — Environment & Community Action):**\nRespond in Spanish (2–3 sentences, approx. 35–55 words) to the examiner's question: *'How can young people protect the planet now and in the future?'* Include:\n1. A purpose clause meaning 'so that' + present subjunctive.\n2. Accurate use of the right preposition for 'in order to save energy' or 'because of plastics'.\n3. An expression of emotion or urgency + subjunctive (e.g. 'it worries me that…' or 'it is urgent that…').",
          modelAnswer:
            "Me preocupa mucho que haya tanta contaminación por culpa de los plásticos. Por eso apagamos las luces para ahorrar electricidad y reciclamos a diario para que las futuras generaciones vivan en un planeta limpio.",
          markScheme: [
            {
              point: "Purpose conjunction 'para que' or 'a fin de que' + present subjunctive",
              keywords: ["para que", "a fin de que"],
            },
            {
              point: "Accurate por/para phrase in context (e.g. para ahorrar, por culpa de, por desgracia, para proteger)",
              keywords: ["para ahorrar", "por culpa", "por desgracia", "para proteger", "para reducir", "por eso"],
            },
            {
              point: "Emotion or urgency WEIRDO trigger + subjunctive (e.g. me preocupa que, es urgente que, temo que)",
              keywords: ["me preocupa que", "me preocupa mucho que", "preocupa", "es urgente que", "temo que", "es vital que", "es esencial que"],
            },
          ],
          hints: [
            "Start with *Me preocupa mucho que haya…* or *Es urgente que reduzcamos…*.",
            "Add *para ahorrar energía* and finish with *para que todos vivan mejor*.",
          ],
          commonError:
            "Using *para que* with an infinitive (*para que vivir* ❌) instead of a new subject + subjunctive (*para que vivan* ✅).",
        },
        {
          id: "subjunctive-grade9-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "pronouns-por-para-ser-estar",
          marks: 4,
          question:
            "**Edexcel Paper 2 Q7 Top-Band Synthesis (Area E — Healthy Living & Technology):**\nWrite a rich 4-point paragraph in Spanish (approx. 60–80 words) advising a friend on balancing exam revision, sleep, and social media. You MUST demonstrate:\n1. Direct advice using a WEIRDO recommendation verb + present subjunctive.\n2. A combined indirect + direct double object pronoun (e.g. 'I send them to my classmates').\n3. A Type 2 hypothetical 'if' clause with imperfect subjunctive + conditional.\n4. A balanced two-part discourse frame ('on the one hand… however / on the other hand').",
          modelAnswer:
            "Por un lado las aplicaciones educativas son útiles, y cuando encuentro buenos resúmenes siempre se los envío a mis compañeros; sin embargo, recomiendo que apagues tu móvil por la noche. Si durmieras ocho horas diarias, tendrías mucha más energía durante el trimestre.",
          markScheme: [
            {
              point: "Recommendation verb + present subjunctive (recomiendo que, aconsejo que, sugiero que)",
              keywords: ["recomiendo que", "aconsejo que", "sugiero que"],
            },
            {
              point: "Accurate double object pronoun combination (se lo, se la, se los, se las, te lo, te la, me lo)",
              keywords: ["se lo", "se la", "se los", "se las", "te lo", "te la", "me lo", "nos lo"],
            },
            {
              point: "Hypothetical 'si' + imperfect subjunctive paired with conditional (e.g. si durmieras… tendrías / si hicieras… estarías)",
              keywords: ["si durmieras", "si durmieses", "si hicieras", "si hicieses", "si tuvieras", "si dejaras", "si usaras", "tendrías", "estarías", "sentirías"],
            },
            {
              point: "Balanced discourse markers (por un lado… sin embargo / por otro lado / no obstante)",
              keywords: ["por un lado", "por otro lado", "sin embargo", "no obstante", "en cambio"],
            },
          ],
          hints: [
            "Frame your contrast with *Por un lado…; sin embargo, recomiendo que apagues / duermas…*.",
            "Include *se los envío* (for notes/photos) and close with *Si durmieras ocho horas, tendrías más energía*.",
          ],
          commonError:
            "Writing *le los envío* instead of mutating *le/les* to **se** (*se los envío*).",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "subjunctive-grade9-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "forming-present-subjunctive",
      question:
        "**AoPS Dual-Rule Challenge (*-ir* Boot + Nosotros Subjunctive):**\nComplete with the **present subjunctive** of **preferir** (*nosotros*):\n\n*Es natural que nosotros _______ descansar después de los exámenes.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("preferir", "subjunctive", "nosotros"),
        display: "prefiramos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["preferamos", "prefieramos", "preferimos"] },
          feedback: "Remember the special *-ir* stem-changer rule in *nosotros* present subjunctive: *e→ie* reduces to single-vowel **e→i** → **prefiramos**!",
        },
      ],
      hints: [
        "First identify the mood: *Es natural que* is a WEIRDO impersonal trigger → present subjunctive.",
        "Unlike *-ar/-er* boot verbs, **-ir** stem-changing verbs DO change in *nosotros* and *vosotros* of the present subjunctive!",
        "Instead of diphthong *ie*, **preferir** shifts *e → i* in *nosotros* before *-amos*.",
      ],
      solution: [
        "*Es natural que* triggers the present subjunctive.",
        "Because **preferir** is an *-ir* stem-changing verb (*e→ie*), its *nosotros* present subjunctive undergoes the reduced **e → i** shift: **prefiramos**.",
      ],
    },
    {
      id: "subjunctive-grade9-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "weirdo-and-impersonal",
      question:
        "**Subjunctive Relative Clause (Non-Existent / Ideal Antecedent):**\nCompare *Tengo un amigo que **habla** chino* (a real person I already have) with looking for a hypothetical person who may or may not exist:\n\nComplete with the **present subjunctive** of **saber** (*él/ella*): *Busco un guía turístico que _______ hablar japonés y árabe.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["sepa", "él sepa", "ella sepa"],
        display: "sepa",
      },
      traps: [
        {
          spec: { type: "text", accept: ["sabe"] },
          feedback: "*sabe* means you already have a specific guide in mind; after *busco un… que* (an unspecified/sought ideal), Spanish uses the subjunctive **sepa**!",
        },
      ],
      hints: [
        "Does the speaker know whether such a tour guide exists yet, or are they searching for an ideal candidate (*busco un guía que…*)?",
        "Relative clauses describing an **indefinite, sought, or non-existent antecedent** (*busco un… que*, *no hay nadie que*) trigger the **present subjunctive**!",
        "Recall the 3rd-person singular DISHES subjunctive of **saber**.",
      ],
      solution: [
        "Searching for an unspecified person (*busco un guía que…*) requires the present subjunctive.",
        "3rd-person singular DISHES subjunctive of **saber** = **sepa**.",
      ],
    },
    {
      id: "subjunctive-grade9-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "cuando-and-time-clauses",
      question:
        "**Interrogative *Cuándo* vs Conjunction *Cuando*:**\nLook closely at both clauses below:\n- (1) *No sé **cuándo** _______ el próximo tren a Sevilla.*\n- (2) *Te llamaré **cuando** _______ el próximo tren a Sevilla.*\n\nWhich pair of forms of **salir** (*él*) completes (1) and (2) with 100% grammatical precision?",
      options: [
        "(1) saldrá  ;  (2) salga",
        "(1) salga  ;  (2) saldrá",
        "(1) salga  ;  (2) salga",
        "(1) saldrá  ;  (2) saldrá",
      ],
      answerIndex: 0,
      hints: [
        "In (1), accented **cuándo** introduces an **indirect question** ('I don't know *when* the next train *will leave*'), NOT a time clause!",
        "Indirect questions take the normal **future indicative** (*saldrá*).",
        "In (2), unaccented **cuando** is a **future time conjunction** ('when it leaves') → **present subjunctive** (*salga*)!",
      ],
      explanation:
        "**(1) saldrá ; (2) salga**: Accented *cuándo* in an indirect question (*No sé cuándo…*) takes the future indicative **saldrá**, whereas unaccented time-conjunction *cuando* referring to the future takes the present subjunctive **salga**.",
    },
    {
      id: "subjunctive-grade9-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "si-clauses-and-imperfect-subj",
      question:
        "**Irregular Preterite → Imperfect Subjunctive Chain:**\nComplete with the **imperfect subjunctive** of **conducir** (*ellos*):\n\n*Si todos los ciudadanos _______ con más prudencia, habría muchos menos accidentes.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: [
          "condujeran",
          "condujesen",
          "ellos condujeran",
          "ellos condujesen",
        ],
        display: "condujeran",
      },
      traps: [
        {
          spec: { type: "text", accept: ["conducieran", "condujieran", "conducirían"] },
          feedback: "Watch the *-ucir → -ujeron* preterite stem! After *j*, Spanish drops the *i* (*ellos condujeron*, NOT *condujieron*) → **condujeran** (or **condujesen**)!",
        },
      ],
      hints: [
        "Build the imperfect subjunctive from the **ellos preterite** of *conducir*.",
        "Remember that *-ucir* verbs take a strong **-j-** stem and drop the *i* in *ellos*: *condujeron* (NOT *conducieron* or *condujieron*!).",
        "Slice off *-ron* from *condujeron* and add **-ran** (or **-sen**) for *ellos*.",
      ],
      solution: [
        "*Ellos* preterite of **conducir** is **condujeron**.",
        "Drop *-ron* (*conduje-*) + *-ran* (or *-sen*) = **condujeran** (or **condujesen**).",
      ],
    },
    {
      id: "subjunctive-grade9-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "si-clauses-and-imperfect-subj",
      question:
        "**Past Sequence of Tenses (WEIRDO in the Past):**\nWhen a WEIRDO trigger itself is in the past (*Me sorprendió que…*, *Mis padres querían que…*), Spanish shifts from the present subjunctive to the **imperfect subjunctive**!\n\nComplete with the **imperfect subjunctive** of **decir** (*él/ella*): *Me sorprendió que nadie _______ nada en la reunión.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["dijera", "dijese", "él dijera", "él dijese"],
        display: "dijera",
      },
      traps: [
        {
          spec: { type: "text", accept: ["diga", "dijiera", "dijo"] },
          feedback: "After preterite *Me sorprendió que*, shift to the imperfect subjunctive from *ellos dijeron* (no *i* after *j*!) → **dijera** (or **dijese**)!",
        },
      ],
      hints: [
        "*Me sorprendió que* is a WEIRDO emotion trigger in the **preterite**, so the subordinate verb takes the **imperfect subjunctive**.",
        "What is the *ellos* preterite of **decir**? Remember *j* absorbs the *i*: **dijeron**!",
        "Drop *-ron* from *dijeron* and add *-ra* (or *-se*) for singular *nadie*.",
      ],
      solution: [
        "Past WEIRDO trigger *Me sorprendió que* requires the imperfect subjunctive.",
        "From *ellos dijeron* → drop *-ron* + *-ra* = **dijera** (or **dijese**).",
      ],
    },
    {
      id: "subjunctive-grade9-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "pronouns-por-para-ser-estar",
      question:
        "**Double Object Pronouns Attached to a Gerund:**\nWrite ONLY the single combined gerund+pronouns word for **'sending them (las postales) to him'** (*enviando + le + las*, applying BOTH the Double-L *se* mutation AND the required written accent!).",
      answer: {
        type: "text",
        accept: ["enviándoselas"],
        display: "enviándoselas",
      },
      traps: [
        {
          spec: { type: "text", accept: ["enviandoselas", "enviándolelas"] },
          feedback: "Check BOTH rules: (1) *le + las* mutates to **se las**, and (2) add the written accent on **á** (**enviándoselas**)!",
        },
      ],
      hints: [
        "Start with the gerund of *enviar*: **enviando** (stressed on *-an-*).",
        "Indirect *a él* (*le*) + feminine plural *las postales* (*las*) mutates via Double-L to **se las**.",
        "Join *enviando + se + las* into one word and place a written accent on **á** so the stress stays on *-án-*!",
      ],
      solution: [
        "*le + las* mutates to **se las**.",
        "Attach to *enviando* and mark the original stressed vowel *-án-* → **enviándoselas**.",
      ],
    },
    {
      id: "subjunctive-grade9-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "pronouns-por-para-ser-estar",
      question:
        "**Subtle Meaning Shifts (*Estar por* vs *Estar para* & *Ser listo* vs *Estar listo*):**\nRead: *«Ya **estoy lista** para el debate y **estoy por** prohibir los coches diésel en el centro.»*\nWhat is the exact English meaning of this sentence?",
      options: [
        "I am clever in the debate and I am about to ban diesel cars in the centre.",
        "I am ready for the debate and I am in favour of banning diesel cars in the centre.",
        "I am ready for the debate and I am about to ban diesel cars in the centre.",
        "I am clever in the debate and I am in favour of banning diesel cars in the centre.",
      ],
      answerIndex: 1,
      hints: [
        "Contrast *ser listo/a* ('to be clever/smart') with **estar listo/a** ('to be ready')!",
        "Contrast *estar para + inf* ('to be about to') with **estar por + inf** (with a person as subject).",
        "With a person, **estar por + infinitive** means **'to be inclined to / in favour of'**!",
      ],
      explanation:
        "**estar lista** means 'to be ready' (whereas *ser lista* = 'to be clever'), and **estoy por prohibir** means 'I am in favour of banning' (whereas *estar para* = 'to be about to').",
    },
    {
      id: "subjunctive-grade9-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "si-clauses-and-imperfect-subj",
      marks: 4,
      question:
        "**AoPS Grade-9 Master Synthesis (Edexcel Paper 2 Q7 Concluding Paragraph — 70–90 words):**\nWrite a powerhouse concluding paragraph in Spanish evaluating life in your city/region and how you would transform it. You MUST integrate ALL FOUR structures seamlessly:\n1. A negated opinion or impersonal WEIRDO clause with one of the 6 DISHES irregular present subjunctives.\n2. A future time or ESCAPA purpose clause with a present subjunctive.\n3. A Type 2 hypothetical 'if' clause (imperfect subjunctive + conditional).\n4. Accurate contrast between cause/area and purpose prepositions, OR a mutated 3rd-person double object pronoun.",
      modelAnswer:
        "En conclusión, aunque me encanta mi ciudad, no creo que haya suficientes espacios verdes por el centro. Si yo fuera la alcaldesa, invertiría en autobuses eléctricos para reducir el ruido y abriría parques gratuitos para que las familias disfruten al aire libre cuando llegue el fin de semana.",
      markScheme: [
        {
          point: "WEIRDO or negated opinion + DISHES present subjunctive (sea, sean, vaya, vayan, haya, que esté, estén, sepa, sepan)",
          keywords: ["sea", "sean", "vaya", "vayan", "haya", "estén", "sepa", "sepan"],
        },
        {
          point: "ESCAPA purpose or future time clause + subjunctive (para que, antes de que, a menos que, sin que, cuando llegue, cuando tenga, cuando sea)",
          keywords: ["para que", "antes de que", "a menos que", "sin que", "a fin de que", "cuando llegue", "cuando tenga", "cuando termine"],
        },
        {
          point: "Type 2 'si' + imperfect subjunctive paired with conditional (si fuera / si yo fuera / si tuviera / si hubiera / si pudiera)",
          keywords: ["si fuera", "si yo fuera", "si fuese", "si tuviera", "si tuviese", "si hubiera", "si hubiese", "si pudiera", "si pudiese"],
        },
        {
          point: "Precision por/para contrast OR mutated double pronoun (para reducir, por el centro, gracias por, por desgracia, se lo, se la, se los, se las)",
          keywords: ["para reducir", "para mejorar", "por el centro", "por desgracia", "gracias por", "se lo", "se la", "se los", "se las"],
        },
      ],
      hints: [
        "Open with *En conclusión, no creo que haya suficientes… por el centro* (hits bullet 1 DISHES *haya* + *por*!).",
        "Add *Si yo fuera el alcalde / la alcaldesa, invertiría en… para reducir…* (hits bullets 3 & 4!).",
        "Close with *…para que los vecinos disfruten cuando llegue el verano* (hits bullet 2!).",
      ],
      commonError:
        "Mixing *si fuera* with future *invertiré* instead of conditional *invertiría*, or writing *no creo que hay* instead of *no creo que haya*.",
    },
  ],
};
