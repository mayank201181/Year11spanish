import type { TopicPractice } from "../../types.ts";
import { acceptedForms } from "../../spanish/verbs.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "personal-life-relationships-quiz-q01",
      kind: "short",
      question:
        "Complete the sentence with the **present indicative** form of **llevarse** (*yo*): _______ genial con mi hermana menor porque nunca me juzga. (Write ONLY the missing reflexive pronoun + verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("llevarse", "present", "yo"),
        display: "me llevo",
      },
      traps: [
        {
          spec: { type: "text", accept: ["llevo", "yo llevo"] },
          feedback: "Don't forget the reflexive pronoun *me* — bare *llevo* means 'I carry/wear', not 'I get along'!",
        },
      ],
      difficulty: "warmup",
      guideRef: "family-and-descriptions",
      strategy: "Include reflexive pronoun me before llevar",
      hints: [
        "*Llevarse bien/genial con* is reflexive — start with the *yo* reflexive pronoun.",
        "Regular *-ar* verb *llevar* in *yo* present ends in *-o*.",
      ],
      solution: [
        "*Llevarse* in *yo* present takes reflexive pronoun **me** + **llevo**.",
        "Answer: **me llevo**.",
      ],
      commonError: "Omitting *me* and writing bare *llevo*.",
    },
    {
      id: "personal-life-relationships-quiz-q02",
      kind: "mcq",
      question:
        "Which Spanish adjective accurately completes: *Mi madre siempre piensa antes de actuar; es una mujer muy _______ (sensible / level-headed).*",
      options: [
        "sensata",
        "sensible",
        "egoísta",
        "celosa",
      ],
      answerIndex: 0,
      difficulty: "warmup",
      guideRef: "family-and-descriptions",
      strategy: "Guard against the sensible false friend",
      hints: [
        "Remember: Spanish *sensible* means 'sensitive', NOT English 'sensible'!",
        "Look for the feminine form of *sensato*.",
      ],
      explanation:
        "**sensata** means level-headed/sensible (agreeing with *una mujer*), whereas *sensible* is a false friend meaning 'emotionally sensitive'.",
    },
    {
      id: "personal-life-relationships-quiz-q03",
      kind: "short",
      question:
        "Write the single Spanish preposition that completes: *En el futuro, mi hermano quiere casarse _______ su novia chilena.* (Write ONLY the one-word preposition.)",
      answer: {
        type: "text",
        accept: ["con"],
        display: "con",
      },
      traps: [
        {
          spec: { type: "text", accept: ["a"] },
          feedback: "Never translate English 'marry to' with *a* — Spanish always says *casarse CON alguien*!",
        },
      ],
      difficulty: "warmup",
      guideRef: "marriage-and-partnerships",
      strategy: "Lock in casarse con",
      hints: [
        "Spanish literally says 'to marry oneself WITH someone'.",
      ],
      solution: [
        "The fixed idiom is **casarse con alguien**.",
        "Answer: **con**.",
      ],
      commonError: "Writing *a* under English interference.",
    },
    {
      id: "personal-life-relationships-quiz-q04",
      kind: "mcq",
      question:
        "Select the accurate completion: *Muchos jóvenes prefieren _______ antes de pasar por una boda tradicional.*",
      options: [
        "conviviendo",
        "convivir",
        "conviven",
        "convivido",
      ],
      answerIndex: 1,
      difficulty: "core",
      guideRef: "marriage-and-partnerships",
      strategy: "Follow preferir (same subject) with an infinitive",
      hints: [
        "After *prefieren* with no change of subject, what verb form must follow?",
        "Never use the *-iendo* gerund as the object of *preferir*!",
      ],
      explanation:
        "**convivir** (infinitive: 'to live together / cohabit') follows *prefieren* directly when there is no change of subject.",
    },
    {
      id: "personal-life-relationships-quiz-q05",
      kind: "short",
      question:
        "Complete the ideal-friend sentence with the **present subjunctive** form of **ser** (*él/ella*): Busco un amigo verdadero que _______ sincero y leal. (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("ser", "subjunctive", "él"),
        display: "sea",
      },
      traps: [
        {
          spec: { type: "text", accept: ["es", "él es", "ella es"] },
          feedback: "*Es* is indicative; *busco un amigo que…* describes a hypothetical ideal friend and requires the present subjunctive!",
        },
      ],
      difficulty: "core",
      guideRef: "friends-and-peer-pressure",
      strategy: "Use DISHES subjunctive sea for an ideal friend",
      hints: [
        "*Busco un amigo que…* refers to an unknown/desired friend, triggering the present subjunctive.",
        "*Ser* is a DISHES irregular in the present subjunctive (*sea, seas, sea…*).",
      ],
      solution: [
        "Hypothetical relative clause → 3rd-person singular present subjunctive of *ser*: **sea**.",
      ],
      commonError: "Using present indicative *es* instead of subjunctive *sea*.",
    },
    {
      id: "personal-life-relationships-quiz-q06",
      kind: "mcq",
      question:
        "Choose the correct Spanish noun phrase for **'peer pressure'**:",
      options: [
        "el consejo de amigos",
        "la amistad obligatoria",
        "la presión del grupo",
        "el grupo de apoyo",
      ],
      answerIndex: 2,
      difficulty: "warmup",
      guideRef: "friends-and-peer-pressure",
      strategy: "Recall standard Edexcel Area C collocation",
      hints: [
        "Combine *la presión* (pressure) + *de + el* (*del*) + *grupo*.",
      ],
      explanation:
        "**la presión del grupo** is the standard Spanish expression for 'peer pressure' (*el grupo de apoyo* = support group).",
    },
    {
      id: "personal-life-relationships-quiz-q07",
      kind: "short",
      question:
        "Complete the childhood sentence with the **imperfect** form of **ser** (*yo*): Cuando yo _______ pequeño, vivía cerca del mar con mis abuelos. (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("ser", "imperfect", "yo"),
        display: "era",
      },
      traps: [
        {
          spec: { type: "text", accept: ["fui", "yo fui"] },
          feedback: "*Fui* is preterite (single event); childhood stage of life always uses the imperfect **era**!",
        },
      ],
      difficulty: "warmup",
      guideRef: "childhood-memories-imperfect",
      strategy: "Use imperfect era for childhood stage of life",
      hints: [
        "*Cuando… pequeño* describes an ongoing stage of childhood → Imperfect of *ser*.",
      ],
      solution: [
        "The *yo* imperfect of irregular verb *ser* is **era**.",
      ],
      commonError: "Writing preterite *fui* instead of imperfect *era*.",
    },
    {
      id: "personal-life-relationships-quiz-q08",
      kind: "short",
      question:
        "Complete the sentence with the **imperfect** form of **soler** (*nosotros*): De niños, mis primos y yo _______ jugar al escondite en la plaza. (Write ONLY the missing conjugated verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("soler", "imperfect", "nosotros"),
        display: "solíamos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["soliamos", "solemos"] },
          feedback: "Check tense and accent: *nosotros* imperfect of *-er* verb *soler* is **solíamos** (with an accent on *í*)!",
        },
      ],
      difficulty: "core",
      guideRef: "childhood-memories-imperfect",
      strategy: "Apply regular -íamos imperfect ending (no boot change in imperfect!)",
      hints: [
        "In the imperfect tense, stem-changing verbs like *soler* do NOT change stem — keep *sol-*!",
        "Add the *nosotros* *-er* imperfect ending with its written accent on **í**.",
      ],
      solution: [
        "Stem *sol-* + *-íamos* → **solíamos**.",
      ],
      commonError: "Writing present *solemos* or forgetting the tilde on *solíamos*.",
    },
    {
      id: "personal-life-relationships-quiz-q09",
      kind: "mcq",
      question:
        "Complete the role-model sentence accurately: *Respeto muchísimo _______ mi entrenadora porque nunca se rinde.*",
      options: [
        "en",
        "con",
        "por",
        "a",
      ],
      answerIndex: 3,
      difficulty: "warmup",
      guideRef: "role-models",
      strategy: "Insert personal 'a' before a specific person as direct object",
      hints: [
        "*Mi entrenadora* is a specific person receiving the direct action of *respeto*.",
      ],
      explanation:
        "**a** is the mandatory Spanish **personal *a*** placed before a specific person acting as direct object (*respeto a mi entrenadora*).",
    },
    {
      id: "personal-life-relationships-quiz-q10",
      kind: "short",
      question:
        "Write the Spanish noun phrase (including the indefinite article **un**) for **'a role model'** using *modelo* + *a* + *seguir*.",
      answer: {
        type: "text",
        accept: ["un modelo a seguir", "el modelo a seguir"],
        display: "un modelo a seguir",
      },
      difficulty: "core",
      guideRef: "role-models",
      strategy: "Use fixed collocation un modelo a seguir",
      hints: [
        "Combine *un modelo* + preposition *a* + infinitive *seguir*.",
        "Notice *modelo* stays masculine in the fixed phrase *un modelo a seguir* even for a woman!",
      ],
      solution: [
        "The idiomatic Spanish phrase for 'a role model' is **un modelo a seguir**.",
      ],
      commonError: "Writing *un modelo para seguir* or omitting *a*.",
    },
  ],

  papers: [
    {
      id: "personal-life-relationships-p1",
      title: "Practice Paper 1 — Grammar Manipulation (Q3c), Reading & Short Writing (Q6)",
      questions: [
        {
          id: "personal-life-relationships-p1-q01",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **present indicative** form of **tener** (*yo*): Actualmente _______ dieciséis años y vivo con mis padres y mi abuela. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("tener", "present", "yo"),
            display: "tengo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["soy", "yo soy"] },
              feedback: "Age in Spanish ALWAYS uses *tener* (*tengo*), never *ser*!",
            },
          ],
          difficulty: "warmup",
          guideRef: "family-and-descriptions",
          strategy: "Yo-go verb tener for age",
          hints: [
            "*Tener* is a *yo-go* verb in the present indicative.",
          ],
          solution: [
            "*Yo* present of *tener* is **tengo**.",
          ],
          commonError: "Writing *tiene* or *soy*.",
        },
        {
          id: "personal-life-relationships-p1-q02",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **present indicative** form of **confiar** (*yo*): Siempre _______ en mi hermano mayor porque es muy maduro. (Write ONLY the missing verb — check the accent!)",
          answer: {
            type: "text",
            accept: acceptedForms("confiar", "present", "yo"),
            display: "confío",
          },
          traps: [
            {
              spec: { type: "text", accept: ["confio"] },
              feedback: "Almost — *confiar* breaks the diphthong in boot forms and needs a written accent on **í**: **confío**!",
            },
          ],
          difficulty: "core",
          guideRef: "family-and-descriptions",
          strategy: "Place hiatus accent on confío",
          hints: [
            "Like *enviar → envío*, *confiar* stresses the *i* in singular and 3rd-person plural present forms.",
            "Write the *yo* form with an acute accent over the *i*.",
          ],
          solution: [
            "*Yo* present of *confiar* is **confío**.",
          ],
          commonError: "Forgetting the tilde on *confío*.",
        },
        {
          id: "personal-life-relationships-p1-q03",
          kind: "short",
          question:
            "Complete the sentence with the correct **feminine singular** form of the adjective **comprensivo**: Me llevo muy bien con mi familia porque es muy _______. (Write ONLY the missing adjective.)",
          answer: {
            type: "text",
            accept: ["comprensiva"],
            display: "comprensiva",
          },
          traps: [
            {
              spec: { type: "text", accept: ["comprensivos", "comprensivas", "comprensivo"] },
              feedback: "*Mi familia* is singular and feminine (*la familia es…*), so the adjective must be feminine singular **comprensiva**!",
            },
          ],
          difficulty: "core",
          guideRef: "family-and-descriptions",
          strategy: "Agree with collective singular feminine la familia",
          hints: [
            "Look at the singular verb *es* and the noun *mi familia* (*la familia*).",
            "Change *-o* to the feminine singular ending.",
          ],
          solution: [
            "*La familia* is singular feminine → **comprensiva**.",
          ],
          commonError: "Using masculine plural *comprensivos* for singular *mi familia*.",
        },
        {
          id: "personal-life-relationships-p1-q04",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **present indicative** form of **sentirse** (*él*): Cuando sus compañeros lo ignoran, Pablo _______ muy solo. (Write ONLY the missing reflexive pronoun + verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("sentirse", "present", "él"),
            display: "se siente",
          },
          traps: [
            {
              spec: { type: "text", accept: ["siente", "se senta", "se sente"] },
              feedback: "*Sentirse* is both reflexive (**se**) and stem-changing (*e → ie*): **se siente**!",
            },
          ],
          difficulty: "core",
          guideRef: "friends-and-peer-pressure",
          strategy: "Combine 3rd-person reflexive se + boot change e → ie",
          hints: [
            "*Sentirse* is a reflexive *-ir* boot verb (*e → ie*).",
            "Place 3rd-person reflexive pronoun *se* before the stem-changed *él* form.",
          ],
          solution: [
            "Reflexive pronoun **se** + stem-changed *siente* → **se siente**.",
          ],
          commonError: "Forgetting reflexive *se* or omitting the *e → ie* stem change.",
        },
        {
          id: "personal-life-relationships-p1-q05",
          kind: "short",
          question:
            "Write the Spanish noun (including the definite article **la**) for **'wedding'** (the ceremony, NOT *el matrimonio*).",
          answer: {
            type: "text",
            accept: ["la boda"],
            display: "la boda",
          },
          traps: [
            {
              spec: { type: "text", accept: ["el matrimonio"] },
              feedback: "*El matrimonio* is marriage (the institution); the wedding ceremony itself is **la boda**!",
            },
          ],
          difficulty: "warmup",
          guideRef: "marriage-and-partnerships",
          strategy: "Distinguish la boda from el matrimonio",
          hints: [
            "Starts with *la b-* (4 letters after *la*).",
          ],
          solution: [
            "'The wedding' = **la boda**.",
          ],
          commonError: "Confusing *la boda* with *el matrimonio*.",
        },
        {
          id: "personal-life-relationships-p1-q06",
          kind: "mcq",
          question:
            "Read Javier's forum post:\n*«Soy el mayor de cuatro hermanos en una familia numerosa. Aunque en casa nunca hay silencio y tengo que compartir dormitorio con mi hermano menor, aprendemos a ser generosos y nunca nos aburrimos.»*\nWhat disadvantage of a large family does Javier mention?",
          options: [
            "His brothers are selfish and never talk to him.",
            "He gets bored at weekends because nobody plays with him.",
            "There is never quiet at home and he has to share a bedroom.",
            "He has to cook dinner for all four brothers every night.",
          ],
          answerIndex: 2,
          difficulty: "warmup",
          guideRef: "family-and-descriptions",
          strategy: "Locate the concession inside the aunque clause",
          hints: [
            "Look right after *Aunque…* for the two downsides he concedes.",
            "*Nunca hay silencio* + *compartir dormitorio*.",
          ],
          explanation:
            "**There is never quiet at home and he has to share a bedroom** matches *en casa nunca hay silencio y tengo que compartir dormitorio con mi hermano menor*.",
        },
        {
          id: "personal-life-relationships-p1-q07",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **imperfect** form of **ver** (*nosotros*): Cuando éramos niños, _______ películas de aventuras todos los viernes en familia. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("ver", "imperfect", "nosotros"),
            display: "veíamos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["víamos", "viamos", "vimos"] },
              feedback: "*Ver* keeps its *e* in the imperfect and needs an accent on *í*: **veíamos**!",
            },
          ],
          difficulty: "core",
          guideRef: "childhood-memories-imperfect",
          strategy: "Retain stem 'e' in ver imperfect: veíamos",
          hints: [
            "*Ver* is one of the 3 irregular verbs in the Imperfect (*veía, veías, veía…*).",
            "Keep **ve-** and add **-íamos**.",
          ],
          solution: [
            "*Nosotros* imperfect of *ver* is **veíamos**.",
          ],
          commonError: "Dropping the *e* and writing *víamos*.",
        },
        {
          id: "personal-life-relationships-p1-q08",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **imperfect** form of **jugar** (*ellos*): En aquella época, mis abuelos _______ en la calle porque apenas pasaban coches. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("jugar", "imperfect", "ellos"),
            display: "jugaban",
          },
          traps: [
            {
              spec: { type: "text", accept: ["juegaban", "jugaron"] },
              feedback: "Remember: boot stem-changes (*u → ue*) do NOT happen in the imperfect, and habitual background takes **jugaban**!",
            },
          ],
          difficulty: "warmup",
          guideRef: "childhood-memories-imperfect",
          strategy: "No stem changes in the imperfect tense",
          hints: [
            "Regular *-ar* imperfect endings are *-aba, -abas, -aba, -ábamos, -abais, -aban*.",
            "Keep the unchanged stem *jug-* for *ellos*.",
          ],
          solution: [
            "Stem *jug-* + *-aban* → **jugaban**.",
          ],
          commonError: "Wrongly stem-changing to *juegaban* or using preterite *jugaron*.",
        },
        {
          id: "personal-life-relationships-p1-q09",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **present subjunctive** form of **tener** (*él/ella*): Quiero casarme con alguien que _______ buen sentido del humor y respete a mi familia. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("tener", "subjunctive", "él"),
            display: "tenga",
          },
          traps: [
            {
              spec: { type: "text", accept: ["tiene", "tienes"] },
              feedback: "*Alguien que…* refers to a hypothetical future partner, so it requires the present subjunctive **tenga** (from *yo tengo*)!",
            },
          ],
          difficulty: "core",
          guideRef: "marriage-and-partnerships",
          strategy: "Yo-flip tener (tengo → tenga) after hypothetical alguien que",
          hints: [
            "*Alguien que…* in a future wish describes an unknown/hypothetical partner → present subjunctive!",
            "Take *yo* present *tengo*, drop *-o*, and add *-a*.",
          ],
          solution: [
            "*Yo tengo* → stem *teng-* + *-a* → **tenga**.",
          ],
          commonError: "Using indicative *tiene* instead of subjunctive *tenga*.",
        },
        {
          id: "personal-life-relationships-p1-q10",
          kind: "mcq",
          question:
            "Read Carmen's interview:\n*«Mi modelo a seguir es mi hermano mayor, Mateo. Nació con sordera profunda, pero aprendió lengua de signos y lectura labial, se graduó en arquitectura el verano pasado y hoy diseña edificios accesibles para todos.»*\nWhy does Carmen admire Mateo?",
          options: [
            "Despite starting late, he became a famous sign-language teacher across local primary schools last year.",
            "Born profoundly deaf, he graduated in architecture last summer and now designs accessible buildings.",
            "After recovering from a serious leg injury, he won a national Olympic swimming medal last summer.",
            "Although still at sixth form, he plans to start studying architecture once he turns twenty next autumn.",
          ],
          answerIndex: 1,
          difficulty: "core",
          guideRef: "role-models",
          strategy: "Connect nació con sordera + se graduó en arquitectura + diseña edificios accesibles",
          hints: [
            "*Sordera profunda* = profound deafness; *se graduó en arquitectura* = graduated in architecture.",
            "Check his current job after *hoy diseña…*.",
          ],
          explanation:
            "**Born profoundly deaf, he graduated in architecture last summer and now designs accessible buildings** matches *nació con sordera profunda*, *se graduó en arquitectura el verano pasado*, and *hoy diseña edificios accesibles*.",
        },
        {
          id: "personal-life-relationships-p1-q11",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **preterite** form of **superar** (*ella*): Mi tía es un gran ejemplo porque _______ un momento muy duro con mucha valentía. (Write ONLY the missing verb — check the accent!)",
          answer: {
            type: "text",
            accept: acceptedForms("superar", "preterite", "él"),
            display: "superó",
          },
          traps: [
            {
              spec: { type: "text", accept: ["supero"] },
              feedback: "Don't forget the acute accent on **-ó**! Without it, *supero* means 'I overcome' (present).",
            },
          ],
          difficulty: "core",
          guideRef: "role-models",
          strategy: "Place mandatory -ó accent on 3rd-person singular -ar preterite",
          hints: [
            "Regular *-ar* preterite endings are *-é, -aste, -ó, -amos, -asteis, -aron*.",
            "*Mi tía* = *ella* (3rd-person singular).",
          ],
          solution: [
            "Stem *super-* + *-ó* → **superó**.",
          ],
          commonError: "Omitting the final accent (*supero*).",
        },
        {
          id: "personal-life-relationships-p1-q12",
          kind: "short",
          question:
            "Write the single Spanish preposition that completes: *Desde niña, Vanishree sueña _______ fundar una clínica médica gratuita.* (Write ONLY the one-word preposition.)",
          answer: {
            type: "text",
            accept: ["con"],
            display: "con",
          },
          traps: [
            {
              spec: { type: "text", accept: ["de", "en"] },
              feedback: "Spanish ALWAYS says **soñar CON** ('to dream of/about'), never *soñar de*!",
            },
          ],
          difficulty: "warmup",
          guideRef: "role-models",
          strategy: "Memorise soñar con + infinitive/noun",
          hints: [
            "Same 3-letter preposition used in *llevarse bien ___* and *casarse ___*.",
          ],
          solution: [
            "**soñar con** = to dream of/about → **con**.",
          ],
          commonError: "Writing *de*.",
        },
        {
          id: "personal-life-relationships-p1-q13",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **conditional** form of **apoyar** (*yo*): Si mi mejor amigo tuviera un problema grave, yo lo _______ sin dudarlo. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("apoyar", "conditional", "yo"),
            display: "apoyaría",
          },
          traps: [
            {
              spec: { type: "text", accept: ["apoyaria", "apoyaré"] },
              feedback: "Conditional adds **-ía** (with a written accent on *í*) onto the full infinitive *apoyar* → **apoyaría**!",
            },
          ],
          difficulty: "core",
          guideRef: "friends-and-peer-pressure",
          strategy: "Full infinitive + -ía for conditional after si + imperfect subjunctive",
          hints: [
            "Regular conditional keeps the whole infinitive *apoyar* and adds *-ía*.",
            "Remember the written tilde on the **í**!",
          ],
          solution: [
            "Infinitive *apoyar* + *-ía* → **apoyaría**.",
          ],
          commonError: "Omitting the accent on *apoyaría* or using simple future *apoyaré*.",
        },
        {
          id: "personal-life-relationships-p1-q14",
          kind: "written",
          marks: 4,
          question:
            "Edexcel Paper 2 Question 6 (Short Writing — 60–75 words): Write a short blog post in Spanish about your family relationships. You MUST address all four bullet points:\n- who is in your household and how you get along\n- one personality trait of a relative you trust\n- something you used to do together as a child\n- a family celebration you plan to enjoy soon",
          modelAnswer:
            "Vivo con mis padres y mi hermana menor, y nos llevamos genial porque mi familia es muy unida. Confío plenamente en mi madre ya que es una mujer comprensiva y sensata. Cuando era pequeña, solíamos cocinar postres caseros todos los domingos por la tarde. El mes próximo vamos a celebrar el cumpleaños de mi abuelo en un restaurante junto al mar.",
          markScheme: [
            {
              point: "Describes household members and getting along in Spanish (e.g. vivo con mis padres / nos llevamos bien / familia unida)",
              keywords: ["llevamos", "llevo", "padres", "madre", "padre", "hermano", "hermana", "unida"],
            },
            {
              point: "Names a character trait and/or trust using accurate vocabulary (e.g. confío en, comprensiva, cariñoso, leal, sensata, generoso)",
              keywords: ["confio", "comprensiv", "carinos", "leal", "sensat", "generos", "paciente", "sincer"],
            },
            {
              point: "Narrates a habitual childhood activity in the Imperfect (e.g. cuando era pequeño/a, solíamos, jugábamos, íbamos, veíamos)",
              keywords: ["era", "eramos", "solia", "soliamos", "jugaba", "ibamos", "veiamos", "pequen"],
            },
            {
              point: "States a future family celebration plan (e.g. vamos a celebrar, celebraremos, el mes próximo, cumpleaños, boda)",
              keywords: ["vamos a", "celebrar", "celebraremos", "proxim", "cumpleanos", "boda", "futuro"],
            },
          ],
          difficulty: "core",
          guideRef: "family-and-descriptions",
          strategy: "Cover all 4 bullet points across Past (Imperfect), Present & Near/Simple Future",
          hints: [
            "Use *nos llevamos genial* or *mi familia es muy unida* (singular feminine!) for bullet 1, and *confío en…* for bullet 2.",
            "Use *cuando era pequeño/a* + Imperfect (*solíamos…* / *íbamos…*) for bullet 3, and *vamos a celebrar* or simple future for bullet 4.",
          ],
          commonError: "Writing *mi familia son divertidos* or using preterite instead of imperfect for habitual childhood activities.",
        },
        {
          id: "personal-life-relationships-p1-q15",
          kind: "written",
          marks: 4,
          question:
            "Edexcel Paper 2 Question 7 (Extended Paragraph — Friendship & Peer Pressure): Write a structured paragraph in Spanish for your school magazine on friendship among teenagers. Include:\n- two qualities an ideal friend must have (use a subjunctive or obligation structure)\n- why peer pressure can harm teenagers\n- a past moment when a friend supported you\n- your advice for younger students starting secondary school",
          modelAnswer:
            "Para mí, es imprescindible buscar un amigo que sea leal y que sepa guardar secretos sin juzgarte. Desgraciadamente, la presión del grupo influye negativamente en muchos adolescentes porque algunos se sienten aislados si no encajan. El curso pasado suspendí una prueba difícil, pero mi mejor amiga me escuchó y me animó muchísimo. Por eso, aconsejo a los nuevos alumnos que elijan amistades sinceras.",
          markScheme: [
            {
              point: "Expresses ideal friend qualities using subjunctive or obligation (e.g. que sea leal, que sepa, debe escuchar, guardar secretos)",
              keywords: ["sea", "sepa", "apoye", "debe", "leal", "secretos", "sincer"],
            },
            {
              point: "Explains peer-pressure impact in Spanish (e.g. la presión del grupo, influye en, sentirse aislado/solo, encajar, burlarse)",
              keywords: ["presion", "influye", "aislad", "encajar", "burlan", "autoestima"],
            },
            {
              point: "Narrates a specific past episode in the Preterite (e.g. el año/curso pasado, me apoyó, me ayudó, me escuchó)",
              keywords: ["pasado", "apoyo", "ayudo", "escucho", "animo", "estuvo", "dio"],
            },
            {
              point: "Gives clear advice using aconsejar/recomendar + subjunctive or deberíamos (e.g. aconsejo que elijan, recomiendo que hablen)",
              keywords: ["aconsejo", "recomiendo", "deberian", "elijan", "sean", "confien"],
            },
          ],
          difficulty: "challenge",
          guideRef: "friends-and-peer-pressure",
          strategy: "Showcase hypothetical relative subjunctive + preterite anecdote + WEIRDO advice",
          hints: [
            "Open with *Busco / Es imprescindible tener un amigo que sea… y que sepa…* for top-band grammar.",
            "Include *la presión del grupo influye en…*, a clear Preterite event (*el curso pasado mi amiga me ayudó*), and *aconsejo que…*.",
          ],
          commonError: "Using indicative after *aconsejo que* (*aconsejo que eligen* instead of *elijan*).",
        },
      ],
    },

    {
      id: "personal-life-relationships-p2",
      title: "Practice Paper 2 — Higher Grammar, Inference & Speaking/Essay Prompts (Q7 / Paper 3)",
      questions: [
        {
          id: "personal-life-relationships-p2-q01",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **present indicative** form of **parecerse** (*ellos*): Mis hermanos gemelos _______ muchísimo tanto físicamente como de carácter. (Write ONLY the missing reflexive pronoun + verb.)",
          answer: {
            type: "text",
            accept: ["se parecen", "ellos se parecen", "ellas se parecen", "ustedes se parecen"],
            display: "se parecen",
          },
          traps: [
            {
              spec: { type: "text", accept: ["parecen", "se parezcan"] },
              feedback: "Include the 3rd-person reflexive pronoun **se** in the present indicative: **se parecen**!",
            },
          ],
          difficulty: "warmup",
          guideRef: "family-and-descriptions",
          strategy: "Reciprocal se + regular 3rd-person plural parecen",
          hints: [
            "Only *yo* has *-zco* (*me parezco*); *ellos* present indicative is regular!",
            "Put reciprocal pronoun *se* before *parecen*.",
          ],
          solution: [
            "*Ellos* present indicative of *parecerse* is **se parecen**.",
          ],
          commonError: "Omitting reciprocal *se*.",
        },
        {
          id: "personal-life-relationships-p2-q02",
          kind: "short",
          question:
            "Write the Spanish noun phrase (including the definite article **los**) for **'relatives'** (extended family — beware the false friend!).",
          answer: {
            type: "text",
            accept: ["los parientes", "los familiares"],
            display: "los parientes",
          },
          traps: [
            {
              spec: { type: "text", accept: ["los padres"] },
              feedback: "*Los padres* means 'parents'; 'relatives' is **los parientes** (or **los familiares**)!",
            },
          ],
          difficulty: "warmup",
          guideRef: "family-and-descriptions",
          strategy: "Use los parientes / los familiares for relatives",
          hints: [
            "Remember the famous lookalike false friend *los p_______* (or *los familiares*).",
          ],
          solution: [
            "'Relatives' = **los parientes** (also **los familiares**).",
          ],
          commonError: "Confusing *los parientes* (relatives) with *los padres* (parents).",
        },
        {
          id: "personal-life-relationships-p2-q03",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **preterite** form of **divorciarse** (*ellos*): Desafortunadamente, los padres de mi vecino _______ hace tres años, pero siguen llevándose con respeto. (Write ONLY the missing reflexive pronoun + verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("divorciarse", "preterite", "ellos"),
            display: "se divorciaron",
          },
          traps: [
            {
              spec: { type: "text", accept: ["divorciaron", "se divorciaban"] },
              feedback: "*Hace tres años* marks a completed event in the preterite AND requires reflexive **se**: **se divorciaron**!",
            },
          ],
          difficulty: "core",
          guideRef: "marriage-and-partnerships",
          strategy: "Preterite with hace + time + reflexive se",
          hints: [
            "*Hace tres años* ('three years ago') triggers the Preterite.",
            "Combine 3rd-person reflexive *se* + regular *-ar* *ellos* preterite ending *-aron*.",
          ],
          solution: [
            "*Ellos* preterite of *divorciarse* → **se divorciaron**.",
          ],
          commonError: "Dropping *se* or using imperfect *se divorciaban* with *hace tres años*.",
        },
        {
          id: "personal-life-relationships-p2-q04",
          kind: "short",
          question:
            "Complete the sentence with the correct **infinitive + attached yo reflexive pronoun** of **independizarse**: Quiero terminar mi carrera universitaria antes de _______. (Write ONLY the single word.)",
          answer: {
            type: "text",
            accept: ["independizarme"],
            display: "independizarme",
          },
          traps: [
            {
              spec: { type: "text", accept: ["independizarse", "independizándome", "me independizo"] },
              feedback: "After *antes de* use the infinitive, and match the attached pronoun to *quiero* (*yo* → **-me**): **independizarme**!",
            },
          ],
          difficulty: "core",
          guideRef: "marriage-and-partnerships",
          strategy: "Attach yo reflexive -me onto the infinitive after antes de",
          hints: [
            "After preposition *antes de*, keep the infinitive *independizar-*.",
            "Since the speaker says *Quiero* (*yo*), replace *-se* with **-me**.",
          ],
          solution: [
            "*independizar* + *me* → **independizarme**.",
          ],
          commonError: "Leaving *-se* unchanged (*independizarse*) when the subject is *yo*.",
        },
        {
          id: "personal-life-relationships-p2-q05",
          kind: "mcq",
          question:
            "Read Sofía's opinion on marriage:\n*«No estoy en contra del matrimonio, pero me parece absurdo gastarse treinta mil euros en un solo día de fiesta cuando ese dinero serviría para la entrada de un piso.»*\nWhat exactly does Sofía criticise?",
          options: [
            "Getting married too young before finishing a university degree and securing a job.",
            "Sharing a rented flat with university roommates instead of living with parents.",
            "Cohabiting with a long-term partner without signing a formal legal marriage contract.",
            "Spending thirty thousand euros on a one-day wedding party instead of a flat deposit.",
          ],
          answerIndex: 3,
          difficulty: "core",
          guideRef: "marriage-and-partnerships",
          strategy: "Unpack gastarse… en un solo día de fiesta vs la entrada de un piso",
          hints: [
            "*No estoy en contra del matrimonio* shows she is NOT against marriage itself.",
            "Look at *me parece absurdo gastarse treinta mil euros en un solo día de fiesta* and *la entrada de un piso* (deposit on a flat).",
          ],
          explanation:
            "**Spending thirty thousand euros on a one-day wedding party instead of a flat deposit** matches *gastarse treinta mil euros en un solo día de fiesta cuando ese dinero serviría para la entrada de un piso*.",
        },
        {
          id: "personal-life-relationships-p2-q06",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **present subjunctive** form of **decir** (*él/ella*): Valoro muchísimo a una amiga que siempre me _______ la verdad a la cara. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("decir", "subjunctive", "él"),
            display: "diga",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dice", "deca"] },
              feedback: "Hypothetical *una amiga que…* triggers the present subjunctive built from *yo digo* → **diga**!",
            },
          ],
          difficulty: "core",
          guideRef: "friends-and-peer-pressure",
          strategy: "Build present subjunctive from yo-go stem digo → diga",
          hints: [
            "*Una amiga que…* (indefinite article = any friend with that quality) triggers the present subjunctive.",
            "Take *yo* present of *decir* (*digo*), drop *-o*, and add *-a*.",
          ],
          solution: [
            "*Yo digo* → stem *dig-* + *-a* → **diga**.",
          ],
          commonError: "Writing indicative *dice* or inventing *deca*.",
        },
        {
          id: "personal-life-relationships-p2-q07",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **present subjunctive** form of **apoyar** (*tú*): Mi abuelo siempre me pide que _______ a mis hermanos menores. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["apoyes", "tú apoyes", "apoye", "yo apoye"],
            display: "apoye",
          },
          traps: [
            {
              spec: { type: "text", accept: ["apoyo", "apoyas"] },
              feedback: "*Pedir que* is a WEIRDO request trigger — use the present subjunctive (**apoye** / **apoyes**), never the indicative!",
            },
          ],
          difficulty: "core",
          guideRef: "friends-and-peer-pressure",
          strategy: "Flip -ar ending to -e/-es after pedir que",
          hints: [
            "*Pedir que* triggers the present subjunctive.",
            "Drop *-o* from *apoyo* and add the opposite *-e* / *-es* subjunctive ending.",
          ],
          solution: [
            "After *me pide que…*, the *yo* present subjunctive of *apoyar* is **apoye** (*tú apoyes* also accepted per bracket prompt).",
          ],
          commonError: "Using present indicative *apoyo / apoyas* after *pedir que*.",
        },
        {
          id: "personal-life-relationships-p2-q08",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **imperfect** form of **ser** (*nosotros*): Cuando mis primos y yo _______ adolescentes, pasábamos horas escuchando música juntos. (Write ONLY the missing verb — check the accent!)",
          answer: {
            type: "text",
            accept: acceptedForms("ser", "imperfect", "nosotros"),
            display: "éramos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["eramos", "fuimos"] },
              feedback: "Remember the mandatory esdrújula accent on the first syllable of *nosotros* imperfect: **éramos**!",
            },
          ],
          difficulty: "core",
          guideRef: "childhood-memories-imperfect",
          strategy: "Accent the first syllable of éramos",
          hints: [
            "*Ser* irregular imperfect: *era, eras, era, éramos, erais, eran*.",
            "Don't forget the acute accent on **é**!",
          ],
          solution: [
            "*Nosotros* imperfect of *ser* → **éramos**.",
          ],
          commonError: "Writing unaccented *eramos*.",
        },
        {
          id: "personal-life-relationships-p2-q09",
          kind: "mcq",
          question:
            "Read Don Antonio's memory:\n*«En mi juventud no teníamos calefacción central ni ordenadores, pero nos reuníamos todas las tardes en la plaza del pueblo y conocíamos el nombre de cada vecino. Hoy en día, en mi bloque de pisos, apenas nos saludamos en el ascensor.»*\nWhat contrast does Don Antonio draw between past and present?",
          options: [
            "People constantly argued with their neighbours in the village square, whereas nowadays everyone chats warmly in the lift.",
            "Without modern comforts, neighbours socialised every afternoon and knew everyone, whereas today flat-dwellers barely greet each other.",
            "He mainly misses having central heating and desktop computers in his childhood village square compared with his current flat.",
            "Young people today spend far too many afternoons gossiping in the village square instead of greeting neighbours indoors.",
          ],
          answerIndex: 1,
          difficulty: "core",
          guideRef: "childhood-memories-imperfect",
          strategy: "Contrast nos reuníamos… conocíamos with apenas nos saludamos",
          hints: [
            "Check *nos reuníamos todas las tardes… y conocíamos el nombre de cada vecino*.",
            "Now check *apenas nos saludamos en el ascensor* ('we barely greet each other in the lift').",
          ],
          explanation:
            "**Without modern comforts, neighbours socialised every afternoon and knew everyone, whereas today flat-dwellers barely greet each other** captures the exact generation-gap contrast.",
        },
        {
          id: "personal-life-relationships-p2-q10",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **preterite** form of **hacer** (*él*): Mi abuelo es mi héroe porque _______ enormes sacrificios para dar estudios a sus hijos. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("hacer", "preterite", "él"),
            display: "hizo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hico", "hacía", "hizó"] },
              feedback: "In 3rd-person singular preterite, *hacer* changes *c → z* before *-o* with NO accent: **hizo**!",
            },
          ],
          difficulty: "core",
          guideRef: "role-models",
          strategy: "Strong preterite stem hic- → hizo (c→z, no accent!)",
          hints: [
            "*Hacer* has a strong preterite stem (*hice, hiciste…*) with a spelling change in *él/ella* to keep the soft sound before *-o*.",
            "Strong preterite verbs NEVER carry written accents!",
          ],
          solution: [
            "3rd-person singular preterite of *hacer* is **hizo** (*c → z* before *o*, unaccented).",
          ],
          commonError: "Writing *hico* or adding a wrong accent (*hizó*).",
        },
        {
          id: "personal-life-relationships-p2-q11",
          kind: "short",
          question:
            "Write the single Spanish word (contracted preposition + article) that completes: *Todos respetan profundamente _______ médico voluntario que fundó el hospital.* (*el médico* — write ONLY the single word.)",
          answer: {
            type: "text",
            accept: ["al"],
            display: "al",
          },
          traps: [
            {
              spec: { type: "text", accept: ["a el", "el"] },
              feedback: "Personal *a* + *el* MUST contract into the single word **al**!",
            },
          ],
          difficulty: "warmup",
          guideRef: "role-models",
          strategy: "Contract personal a + el → al",
          hints: [
            "*Respetar* takes the personal *a* before *el médico*.",
            "Contract *a + el*.",
          ],
          solution: [
            "Personal *a* + *el* → **al**.",
          ],
          commonError: "Leaving *a el* uncontracted or omitting personal *a*.",
        },
        {
          id: "personal-life-relationships-p2-q12",
          kind: "short",
          question:
            "Edexcel Q3c Grammar — Complete with the **simple future** form of **tener** (*nosotros*): Aunque vivamos en ciudades distintas, mis amigos y yo siempre _______ una amistad muy fuerte. (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("tener", "future", "nosotros"),
            display: "tendremos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["teneremos", "tendrémos"] },
              feedback: "*Tener* uses irregular future stem **tendr-**, and *nosotros* is the ONLY future person without an accent: **tendremos**!",
            },
          ],
          difficulty: "core",
          guideRef: "friends-and-peer-pressure",
          strategy: "Irregular future stem tendr- + -emos (no accent on nosotros)",
          hints: [
            "*Tener* replaces *-er* with *-dr-* in the future stem (*tendr-*).",
            "Add *-emos* (no written accent in *nosotros* future!).",
          ],
          solution: [
            "Irregular stem *tendr-* + *-emos* → **tendremos**.",
          ],
          commonError: "Regularising to *teneremos*.",
        },
        {
          id: "personal-life-relationships-p2-q13",
          kind: "mcq",
          question:
            "Which sentence accurately expresses **'I really miss my grandparents when I am away'**?",
          options: [
            "Echo mucho de menos a mis abuelos cuando estoy lejos.",
            "Pierdo mucho mis abuelos cuando soy lejos.",
            "Falto mucho a mis abuelos cuando estoy lejos.",
            "Echo mucho menos de mis abuelos cuando estoy lejos.",
          ],
          answerIndex: 0,
          difficulty: "core",
          guideRef: "family-and-descriptions",
          strategy: "Use idiom echar de menos a + estar lejos",
          hints: [
            "'To miss a person' is NOT *perder* (= to lose/miss a train) — use *echar de menos* + personal *a*!",
            "Location ('away') uses *estar lejos*.",
          ],
          explanation:
            "**Echo mucho de menos a mis abuelos cuando estoy lejos** uses the authentic idiom *echar de menos* + personal *a* before *mis abuelos* and *estar* for location.",
        },
        {
          id: "personal-life-relationships-p2-q14",
          kind: "written",
          marks: 4,
          question:
            "Edexcel Paper 2 Question 7 (Extended Essay Extract — Marriage & Modern Partnerships): Write a balanced response in Spanish giving your views on marriage today. Address all four points:\n- why many young couples choose to live together instead of having a wedding\n- one benefit of marriage or committed family life\n- an example of a couple you know (past event or duration)\n- your personal plans regarding independence and starting a family in the future",
          modelAnswer:
            "Hoy en día, muchas parejas jóvenes deciden convivir sin pasar por una boda porque los pisos son caros y el matrimonio tradicional ya no parece obligatorio. Por otro lado, estar casado ofrece estabilidad emocional y compromiso mutuo. Por ejemplo, mis tíos se casaron en Madrid hace quince años y siguen muy felices. En cuanto a mí, prefiero independizarme y desarrollar mi profesión antes de formar una familia.",
          markScheme: [
            {
              point: "Explains why couples cohabit or delay weddings (e.g. convivir, vivir juntos, boda, caro, ya no es obligatorio)",
              keywords: ["convivir", "juntos", "boda", "matrimonio", "alquiler", "caros", "caro"],
            },
            {
              point: "Gives a positive aspect of marriage/partnership using balanced connectives (e.g. por otro lado, sin embargo, estabilidad, compromiso, apoyo)",
              keywords: ["estabilidad", "compromiso", "seguridad", "apoyo", "unida", "felicidad"],
            },
            {
              point: "Includes a concrete past reference to a couple (e.g. se casaron, se conocieron, convivieron, hace … años)",
              keywords: ["casaron", "conocieron", "convivieron", "divorciaron", "hace"],
            },
            {
              point: "Expresses personal future/infinitive plans on independence and family (e.g. independizarme, antes de, me casaré, me gustaría)",
              keywords: ["independizarme", "antes de", "casare", "gustaria", "formar", "futuro"],
            },
          ],
          difficulty: "challenge",
          guideRef: "marriage-and-partnerships",
          strategy: "Balance sociological arguments with por otro lado + preterite example + antes de independizarme",
          hints: [
            "Contrast *convivir* / *la boda* with *estabilidad y compromiso* using *Por un lado… por otro lado…*.",
            "Include a Preterite example (*mis tíos se casaron hace…*) and *prefiero independizarme antes de…*.",
          ],
          commonError: "Writing *antes de casándome* instead of *antes de casarme*.",
        },
        {
          id: "personal-life-relationships-p2-q15",
          kind: "written",
          marks: 4,
          question:
            "Edexcel Paper 3 Speaking / Paper 2 Q7 — Role Models & Inspiration: Write a detailed Spanish response describing a person you admire (a relative or public figure). Address all four points:\n- who this role model is and why you admire their character (remember personal 'a'!)\n- background difficulties they faced earlier in life (Imperfect)\n- one major achievement or obstacle they overcame (Preterite)\n- how they inspire your own dreams for the years ahead",
          modelAnswer:
            "Admiro profundamente a mi abuela materna porque es un gran modelo a seguir, muy trabajadora y generosa. Cuando era joven, su familia tenía pocos recursos y vivía en una aldea pequeña sin instituto. Sin embargo, nunca se rindió: consiguió una beca, estudió medicina y ayudó a cientos de pacientes. Gracias a su buen ejemplo, en el futuro sueño con luchar por la igualdad sanitaria.",
          markScheme: [
            {
              point: "Identifies role model with personal 'a' and character traits (e.g. admiro a…, modelo a seguir, trabajadora, generosa, valiente)",
              keywords: ["admiro a", "modelo a seguir", "buen ejemplo", "trabajador", "generos", "valiente"],
            },
            {
              point: "Describes past background circumstances in the Imperfect (e.g. era, tenía, vivía, había)",
              keywords: ["era", "tenia", "vivia", "habia", "trabajaba", "estudiaba"],
            },
            {
              point: "Narrates a specific completed achievement in the Preterite (e.g. consiguió, superó, fundó, ganó, estudió, ayudó)",
              keywords: ["consiguio", "supero", "fundo", "gano", "estudio", "ayudo", "logro"],
            },
            {
              point: "Links to own future aspirations (e.g. sueño con, me gustaría, seguiré, luchar por)",
              keywords: ["sueno con", "gustaria", "seguire", "intentare", "luchar por", "inspir"],
            },
          ],
          difficulty: "challenge",
          guideRef: "role-models",
          strategy: "Combine Present (admiro a) + Imperfect (era/tenía) + Preterite (consiguió/superó) + Future dream (sueño con)",
          hints: [
            "Start with *Admiro a…* (never forget personal *a*!) and call them *un gran modelo a seguir*.",
            "Use Imperfect (*cuando era joven, no tenía…*), Preterite (*superó / consiguió…*), and *sueño con + infinitive*.",
          ],
          commonError: "Omitting personal *a* in *admiro a…* or writing *sueño de* instead of *sueño con*.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "personal-life-relationships-ch-q01",
      kind: "short",
      question:
        "Grade-9 *Si* Clause — Complete with the **imperfect subjunctive** form of **tener** (*yo*): Si yo _______ más tiempo libre después del colegio, visitaría a mis abuelos entre semana. (Write ONLY the missing verb — both *-ra* and *-se* forms are accepted.)",
      answer: {
        type: "text",
        accept: ["tuviera", "yo tuviera", "tuviese", "yo tuviese"],
        display: "tuviera",
      },
      traps: [
        {
          spec: { type: "text", accept: ["tendría", "tenía", "tenga"] },
          feedback: "Never put the conditional (*tendría*) right after *si*! With conditional *visitaría* in the main clause, use the imperfect subjunctive **tuviera / tuviese**.",
        },
      ],
      difficulty: "challenge",
      guideRef: "family-and-descriptions",
      strategy: "Derive imperfect subjunctive from 3rd-person plural preterite tuvieron → tuviera",
      hints: [
        "The main clause has conditional *visitaría*, so *si* requires the **imperfect subjunctive**.",
        "Take the *ellos* preterite of *tener* (*tuvieron*), drop *-ron*, and add **-ra** (or **-se**).",
        "Check spelling: *tuvie-* + *-ra* → **tuviera**.",
      ],
      solution: [
        "3rd-person plural preterite *tuvieron* → drop *-ron* → **tuviera** (or **tuviese**).",
      ],
      commonError: "Writing conditional *si tendría* under English/French interference.",
    },
    {
      id: "personal-life-relationships-ch-q02",
      kind: "short",
      question:
        "Future Time Clause — Complete with the **present subjunctive** form of **independizarse** (*yo*): Cuando _______ de casa de mis padres en el futuro, adoptaré un perro. (Write ONLY the missing reflexive pronoun + verb — mind the *-zar* spelling shift!)",
      answer: {
        type: "text",
        accept: ["me independice", "yo me independice"],
        display: "me independice",
      },
      traps: [
        {
          spec: { type: "text", accept: ["me independizaré", "me independizo", "me independize", "independice"] },
          feedback: "Future *cuando* NEVER takes the future tense (*me independizaré*) — use present subjunctive with *z → c* before *e* plus reflexive **me**: **me independice**!",
        },
      ],
      difficulty: "challenge",
      guideRef: "marriage-and-partnerships",
      strategy: "Future cuando + present subjunctive + -zar → -ce + reflexive me",
      hints: [
        "Because the main verb *adoptaré* is in the future, *cuando* refers to an unrealized future event and requires the **present subjunctive**.",
        "Verbs ending in *-zar* shift **z → c** across all persons of the present subjunctive (*independice*).",
        "Include the *yo* reflexive pronoun **me** before the verb!",
      ],
      solution: [
        "Future *cuando* triggers *yo* present subjunctive of *independizarse*: **me independice**.",
      ],
      commonError: "Using simple future after *cuando* or writing *z* before *e* (*me independize*).",
    },
    {
      id: "personal-life-relationships-ch-q03",
      kind: "mcq",
      question:
        "Choose the ONLY sentence where **mood, preposition, and pronoun agreement** are all 100% Grade-9 accurate:",
      options: [
        "No conozco a ningún joven que se siente feliz cuando sus amigos se burlan de él.",
        "No conozco ningún joven que se sienta feliz cuando sus amigos se burlan a él.",
        "No conozco a ningún joven que se sienta feliz cuando sus amigos se burlan de él.",
        "No conozco a ninguno joven que se sienta feliz cuando sus amigos burlan de él.",
      ],
      answerIndex: 2,
      difficulty: "challenge",
      guideRef: "friends-and-peer-pressure",
      strategy: "Combine personal a + apocopated ningún + negative-antecedent subjunctive se sienta + burlarse de",
      hints: [
        "Check 1: *Conocer* before a person (even negative *ningún joven*) keeps the **personal *a*** (*a ningún joven*), and *ninguno* shortens to *ningún* before a masculine singular noun.",
        "Check 2: Negative antecedent *no conozco a ningún joven que…* requires the **present subjunctive** of *sentirse* (*se sienta*).",
        "Check 3: 'To make fun of' is reflexive **se burlan de**.",
      ],
      explanation:
        "**No conozco a ningún joven que se sienta feliz cuando sus amigos se burlan de él** gets all four points right: personal *a* + apocopated *ningún*, subjunctive *se sienta* after a negated antecedent, and reflexive *se burlan de*.",
    },
    {
      id: "personal-life-relationships-ch-q04",
      kind: "short",
      question:
        "Imperfect vs Preterite Precision — Complete the sentence with the **preterite** form of **conocer** (*él*): Mi padre vivía en Buenos Aires cuando _______ a mi madre en la universidad. (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("conocer", "preterite", "él"),
        display: "conoció",
      },
      traps: [
        {
          spec: { type: "text", accept: ["conocía", "conocio"] },
          feedback: "In the preterite, *conocer* means **'met for the first time'** (**conoció**, with an accent on *-ó*), whereas imperfect *conocía* means 'already knew'!",
        },
      ],
      difficulty: "challenge",
      guideRef: "childhood-memories-imperfect",
      strategy: "Aspect shift: conocer in preterite = 'met for the first time'",
      hints: [
        "*Vivía* sets the ongoing background; meeting someone for the first time is the single interrupting event!",
        "Regular *-er* 3rd-person singular preterite ends in **-ió**.",
        "Check the written accent on the final **ó** of **conoció**.",
      ],
      solution: [
        "3rd-person singular preterite of *conocer* ('met') is **conoció**.",
      ],
      commonError: "Using imperfect *conocía* when the meaning is 'met for the first time'.",
    },
    {
      id: "personal-life-relationships-ch-q05",
      kind: "short",
      question:
        "Subjunctive Spelling Shift — Complete with the **present subjunctive** form of **criticar** (*ellos*): Es una lástima que algunos usuarios anónimos _______ a los demás en internet sin motivo. (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["critiquen", "ellos critiquen", "ellas critiquen"],
        display: "critiquen",
      },
      traps: [
        {
          spec: { type: "text", accept: ["critican", "criticen"] },
          feedback: "*Es una lástima que* requires the present subjunctive, and *-car* verbs change **c → qu** before *e*: **critiquen**!",
        },
      ],
      difficulty: "challenge",
      guideRef: "friends-and-peer-pressure",
      strategy: "Es una lástima que + -car → -quen in present subjunctive",
      hints: [
        "*Es una lástima que…* is an impersonal emotion trigger requiring the **present subjunctive**.",
        "To preserve the hard /k/ sound before *-en*, *-car* verbs change **c → qu**.",
        "Combine *critiqu-* + *-en* for *ellos*.",
      ],
      solution: [
        "Stem *critic-* shifts *c → qu* before *-en* → **critiquen**.",
      ],
      commonError: "Writing indicative *critican* or forgetting *c → qu* (*criticen*).",
    },
    {
      id: "personal-life-relationships-ch-q06",
      kind: "short",
      question:
        "Sandal Subjunctive — Complete with the **present subjunctive** form of **seguir** (*nosotros*): Mi abuela nos inspira para que nosotros _______ luchando por nuestros sueños. (Write ONLY the missing verb — watch both the stem vowel and *gu → g*!)",
      answer: {
        type: "text",
        accept: acceptedForms("seguir", "subjunctive", "nosotros"),
        display: "sigamos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["seguimos", "sigamos", "siguamos", "segamos"].filter((x) => x !== "sigamos") },
          feedback: "Build from *yo sigo* (drops *u* before *a* so /g/ stays hard, and keeps *i* in *-ir* subjunctive nosotros!): **sigamos**!",
        },
      ],
      difficulty: "challenge",
      guideRef: "role-models",
      strategy: "Para que + nosotros subjunctive of seguir (yo sigo → sigamos)",
      hints: [
        "*Para que* ('so that') ALWAYS triggers the present subjunctive!",
        "Start from *yo* present of *seguir*: **sigo** (notice *gu* already simplified to *g* before *o*).",
        "Drop *-o* and add *-amos* (for *-ir* stem-changers like *seguir/pedir*, *nosotros* subjunctive keeps the *i*!) → **sigamos**.",
      ],
      solution: [
        "*Yo sigo* → drop *-o* → **sigamos**.",
      ],
      commonError: "Writing *siguamos* (keeping the silent *u* before *a*) or indicative *seguimos*.",
    },
    {
      id: "personal-life-relationships-ch-q07",
      kind: "mcq",
      question:
        "Read this complex higher-tier excerpt:\n*«Lejos de debilitar los lazos familiares, la distancia geográfica hizo que valoráramos mucho más cada videollamada dominical con nuestros abuelos.»*\nWhat exact point is the writer making?",
      options: [
        "Geographical distance destroyed their family bonds because video calls felt cold.",
        "Their grandparents refused to use video calls on Sundays.",
        "Far from weakening family ties, living far apart made them value every Sunday video call with their grandparents much more.",
        "They stopped calling their grandparents once they moved closer to them.",
      ],
      answerIndex: 2,
      difficulty: "challenge",
      guideRef: "family-and-descriptions",
      strategy: "Decode lejos de + infinitive ('far from -ing') + hizo que valoráramos",
      hints: [
        "*Lejos de debilitar los lazos familiares* = 'Far from weakening family ties' (NOT 'weakened them'!).",
        "*Hizo que valoráramos mucho más* uses *hacer que* + imperfect subjunctive = 'made us value much more'.",
        "Check *cada videollamada dominical* = every Sunday video call.",
      ],
      explanation:
        "**Far from weakening family ties, living far apart made them value every Sunday video call with their grandparents much more** accurately unpacks *lejos de debilitar* and *hizo que valoráramos mucho más*.",
    },
    {
      id: "personal-life-relationships-ch-q08",
      kind: "short",
      question:
        "Grade-9 *Si* Clause on Role Models — Complete with the **imperfect subjunctive** form of **poder** (*yo*): Si _______ conocer en persona a mi modelo a seguir, le daría las gracias por su valentía. (Write ONLY the missing verb — both *-ra* and *-se* forms accepted.)",
      answer: {
        type: "text",
        accept: ["pudiera", "yo pudiera", "pudiese", "yo pudiese"],
        display: "pudiera",
      },
      traps: [
        {
          spec: { type: "text", accept: ["podría", "podía", "pueda", "podiera"] },
          feedback: "Derive the imperfect subjunctive from *ellos* preterite **pudieron** (with **u** in the stem!): **pudiera / pudiese**.",
        },
      ],
      difficulty: "challenge",
      guideRef: "role-models",
      strategy: "Derive imperfect subjunctive from strong preterite pudieron → pudiera",
      hints: [
        "Main clause *le daría las gracias* is conditional → *si* takes the **imperfect subjunctive**.",
        "Recall the strong preterite stem of *poder*: *pude, pudiste, pudo, pudimos, pudisteis, **pudieron***.",
        "Drop *-ron* from *pudieron* and add **-ra** (or **-se**).",
      ],
      solution: [
        "*Ellos* preterite *pudieron* → drop *-ron* → **pudiera** (or **pudiese**).",
      ],
      commonError: "Keeping stem *pod-* (*podiera*) or writing conditional *podría* after *si*.",
    },
  ],
};
