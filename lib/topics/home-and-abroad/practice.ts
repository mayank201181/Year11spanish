import type { TopicPractice } from "../../types.ts";
import { acceptedForms } from "../../spanish/verbs.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "home-and-abroad-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "regions-and-towns",
      question:
        "Choose the correct verb to complete: *Granada _______ situada en el sur de España, cerca de Sierra Nevada.*",
      options: ["está", "es", "tiene", "hay"],
      answerIndex: 0,
      hints: ["Geographical location on a map always takes **estar**."],
      explanation:
        "Geographical location ALWAYS uses **está** (from *estar*), never *es*.",
    },
    {
      id: "home-and-abroad-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "holidays-and-accommodation",
      question:
        "Complete the fixed holiday idiom with the single missing Spanish preposition: *Cada verano vamos _______ vacaciones a la costa.* (Write ONLY the missing preposition.)",
      answer: { type: "text", accept: ["de"] },
      traps: [
        {
          spec: { type: "text", accept: ["en"] },
          feedback: "Never write *en vacaciones*! Spanish always says **ir de vacaciones**.",
        },
      ],
      hints: ["Think of **ir ___ vacaciones** ('to go on holiday')."],
      solution: [
        "In Spanish, 'on holiday' is the fixed idiom **de vacaciones**.",
        "Complete phrase: *vamos **de** vacaciones a la costa*.",
      ],
      commonError: "Writing the English calque *en vacaciones* instead of **de vacaciones**.",
    },
    {
      id: "home-and-abroad-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "holidays-and-accommodation",
      question:
        "Edexcel Paper 2 Q3c style — Complete the sentence with the **preterite** form of **buscar** (*yo*): *Ayer _______ un albergue juvenil en Internet.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("buscar", "preterite", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["buscé", "yo buscé"] },
          feedback: "Watch the *-car* spelling rule: *c* changes to **qu** before *-é* to keep the hard /k/ sound!",
        },
      ],
      hints: [
        "*Buscar* ends in *-car*, which has a spelling shift in the *yo* Preterite.",
        "Change *c → qu* and add *-é* (with an accent).",
      ],
      solution: [
        "Take the stem *busc-* and apply the *-car → -qué* shift in the *yo* preterite.",
        "Answer: **busqué**.",
      ],
      commonError: "Forgetting *c → qu* (*buscé*) or omitting the accent (*busque* = subjunctive).",
    },
    {
      id: "home-and-abroad-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "transport-and-directions",
      question:
        "How do you tell a stranger politely (**usted**) **'Cross the bridge and turn right'**?",
      options: [
        "Cruza el puente y gira a la derecha.",
        "Cruce el puente y gire a la derecha.",
        "Cruces el puente y gires a la derecha.",
        "Cruzar el puente y girar a la derecha.",
      ],
      answerIndex: 1,
      hints: [
        "Polite *usted* imperatives use Present Subjunctive endings (*-ar → -e*).",
        "Check *-zar → -ce* in *cruzar*.",
      ],
      explanation:
        "Polite *usted* commands flip *-ar* endings to *-e*: **Cruce** (*z → c* before *-e*) and **gire**.",
    },
    {
      id: "home-and-abroad-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "transport-and-directions",
      question:
        "Write the Spanish noun (including the definite article **el** or **la**) for **'platform'** (at a train station).",
      answer: { type: "text", accept: ["el andén"] },
      traps: [
        {
          spec: { type: "text", accept: ["la plataforma"] },
          feedback: "At a Spanish railway station, a train platform is **el andén** (remember the accent on *-én*!).",
        },
      ],
      hints: [
        "It is a masculine noun starting with *a-* and carrying a written accent on the final *-én*.",
        "Example: *El tren sale del ___ cuatro.*",
      ],
      solution: [
        "'Train platform' in Edexcel `4SP0` station announcements is **el andén**.",
      ],
    },
    {
      id: "home-and-abroad-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "weather-and-climate",
      question:
        "Complete the weather forecast with the **simple future** (*él/ella* — 3rd person singular) of **hacer**: *Mañana _______ buen tiempo en toda la costa.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: ["hará"] },
      traps: [
        {
          spec: { type: "text", accept: ["hacerá"] },
          feedback: "*Hacer* has the irregular future stem **har-** — never *hacer-*!",
        },
      ],
      hints: [
        "Recall the irregular future stem of *hacer* (*har-*).",
        "Add the 3rd-person singular future ending *-á* with its accent.",
      ],
      solution: [
        "Irregular future stem of *hacer* = *har-* + 3rd-person singular *-á* → **hará**.",
      ],
    },
    {
      id: "home-and-abroad-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "weather-and-climate",
      question:
        "Which option accurately completes: *Cuando salimos del museo, _______ mucha niebla y _______ frío*?",
      options: [
        "hubo … hará",
        "habían … estaba",
        "había … hacía",
        "hay … hizo",
      ],
      answerIndex: 2,
      hints: [
        "Both verbs describe the ongoing background weather when we walked out (*salimos*) → Imperfect!",
        "Impersonal *haber* is always singular (*había*), and *frío* pairs with *hacer* (*hacía*).",
      ],
      explanation:
        "Ongoing background weather takes Imperfect **había** (singular impersonal *haber*) and **hacía** (*hacer frío*).",
    },
    {
      id: "home-and-abroad-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "festivals-and-customs",
      question:
        "Complete the passive *se* sentence about *La Tomatina* with the **present** tense (3rd person plural) of **lanzar**: *En agosto en Buñol se _______ toneladas de tomates.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: ["lanzan"] },
      traps: [
        {
          spec: { type: "text", accept: ["lanza"] },
          feedback: "Because *toneladas de tomates* is plural, passive *se* requires the 3rd-person plural verb!",
        },
      ],
      hints: [
        "In passive *se*, the verb agrees with *toneladas de tomates* (plural).",
        "Give the *ellos/ellas* present form of *lanzar*.",
      ],
      solution: [
        "Plural noun *toneladas de tomates* triggers 3rd-person plural present of *lanzar*: **lanzan** (*se lanzan*).",
      ],
    },
    {
      id: "home-and-abroad-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "regions-and-towns",
      question:
        "Choose the ONLY phrase with 100% accurate gender and agreement for **'the tropical climate and the clear map'**:",
      options: [
        "una clima tropical y una mapa clara",
        "el clima tropical y la mapa clara",
        "la clima tropical y el mapa claro",
        "el clima tropical y el mapa claro",
      ],
      answerIndex: 3,
      hints: [
        "Both *clima* (Greek *-ma* noun) and *mapa* are famous masculine exceptions ending in *-a*!",
        "Make both adjectives masculine singular (*tropical*, *claro*).",
      ],
      explanation:
        "Both **el clima** and **el mapa** are masculine nouns despite ending in *-a*, so **el clima tropical y el mapa claro** is right.",
    },
    {
      id: "home-and-abroad-quiz-q10",
      kind: "short",
      difficulty: "challenge",
      guideRef: "holidays-and-accommodation",
      question:
        "Complete the Grade-9 *si* clause with the **conditional** (*yo*) of **viajar**: *Si tuviera un mes libre, _______ por toda Latinoamérica.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("viajar", "conditional", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["viajaré", "yo viajaré"] },
          feedback: "After *Si tuviera…* (Imperfect Subjunctive), the main clause requires the **Conditional** (*-ía*), not the Simple Future!",
        },
      ],
      hints: [
        "*Si tuviera…* is a Type-2 hypothetical *si* clause.",
        "Add the *yo* conditional ending *-ía* to the full infinitive *viajar*.",
      ],
      solution: [
        "Infinitive *viajar* + *yo* conditional ending *-ía* → **viajaría**.",
      ],
    },
  ],

  papers: [
    {
      id: "home-and-abroad-p1",
      title: "Home & Abroad — Practice Paper 1 (Reading, Q3c Grammar & Short Writing)",
      questions: [
        {
          id: "home-and-abroad-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "regions-and-towns",
          question:
            "Write the Spanish noun phrase (including the definite article **las**) for **'the outskirts / suburbs'**.",
          answer: { type: "text", accept: ["las afueras"] },
          hints: ["It is a feminine plural word: *Vivo en ___ de la ciudad.*"],
          solution: ["'The outskirts / suburbs' in Spanish is **las afueras**."],
        commonError: "Watch out: *las afueras* is always feminine plural in Spanish (never *la afuera*).",
        },
        {
          id: "home-and-abroad-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "holidays-and-accommodation",
          question:
            "Q3c Grammar — Complete with the **preterite** form of **ir** (*nosotros*): *El julio pasado _______ de vacaciones a Menorca.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("ir", "preterite", "nosotros") },
          traps: [
            {
              spec: { type: "text", accept: ["íbamos", "nosotros íbamos"] },
              feedback: "*El julio pasado* marks a single completed trip, so use the **Preterite** (*fuimos*), not Imperfect *íbamos*.",
            },
          ],
          hints: ["*Ir* and *ser* share the exact same irregular Preterite forms (*fui, fuiste, fue…*)."],
          solution: ["The *nosotros* preterite of *ir* is **fuimos**."],
        },
        {
          id: "home-and-abroad-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "transport-and-directions",
          question:
            "Complete the sentence with the single missing Spanish preposition for **'in the morning'** (general time of day, no clock hour): *Preferimos viajar _______ la mañana.* (Write ONLY the missing preposition.)",
          answer: { type: "text", accept: ["por"] },
          traps: [
            {
              spec: { type: "text", accept: ["en"] },
              feedback: "Standard Edexcel `4SP0` Spanish uses **por la mañana**, never *en la mañana*!",
            },
          ],
          hints: ["Think of **___ la mañana / ___ la tarde / ___ la noche**."],
          solution: ["General parts of the day take **por**: *viajar **por** la mañana*."],
        },
        {
          id: "home-and-abroad-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "holidays-and-accommodation",
          question:
            "Read Elena's postcard:\n*«¡Hola desde San Sebastián! Nos alojamos en una pensión pequeña cerca de la playa. Aunque mi habitación no tiene vistas al mar, la comida es deliciosa y ayer alquilamos bicicletas.»*\nWhich detail is **TRUE** according to Elena?",
          options: [
            "Her room overlooks the sea and she is staying in a luxury five-star hotel.",
            "She is staying in a small guesthouse near the beach and rented bikes yesterday.",
            "She complained about the food at the guesthouse yesterday afternoon.",
            "She is going to rent bicycles tomorrow morning near the harbour.",
          ],
          answerIndex: 1,
          hints: [
            "*Una pensión pequeña cerca de la playa* = a small guesthouse near the beach.",
            "*Ayer alquilamos bicicletas* = yesterday we rented bikes (*no tiene vistas al mar* rules out a sea view!).",
          ],
          explanation:
            "Elena stays in *una pensión pequeña cerca de la playa* and says *ayer alquilamos bicicletas*; her room has NO sea view (*no tiene vistas al mar*).",
        },
        {
          id: "home-and-abroad-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "holidays-and-accommodation",
          question:
            "Q3c Grammar — Complete with the **imperfect** form of **estar** (*él/ella*) to describe the background state of the room: *Cuando entramos, la habitación _______ muy sucia.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: ["estaba", "ella estaba"] },
          traps: [
            {
              spec: { type: "text", accept: ["era"] },
              feedback: "Cleanliness (*sucia*) is a temporary state, so use **estar** (*estaba*), not *ser* (*era*)!",
            },
          ],
          hints: [
            "Temporary state (*sucia*) takes *estar*.",
            "Give the 3rd-person singular Imperfect (*-aba*) of *estar*.",
          ],
          solution: [
            "Temporary room condition uses *estar* in the Imperfect: **estaba**.",
          ],
        },
        {
          id: "home-and-abroad-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "holidays-and-accommodation",
          question:
            "Q3c Grammar — Complete with the **preterite** form of **quejarse** (*yo* — include the reflexive pronoun!): *Por eso, _______ inmediatamente al director del hotel.* (Write ONLY the reflexive pronoun + verb.)",
          answer: { type: "text", accept: acceptedForms("quejarse", "preterite", "yo") },
          traps: [
            {
              spec: { type: "text", accept: ["quejé", "yo quejé"] },
              feedback: "Don't forget the reflexive pronoun **me** before *quejé* (*quejarse* is reflexive)!",
            },
          ],
          hints: [
            "*Quejarse* is a reflexive *-ar* verb.",
            "Place **me** before the *yo* preterite (*-é*).",
          ],
          solution: [
            "Reflexive pronoun for *yo* = *me* + *yo* preterite of *quejar* (*quejé*) → **me quejé**.",
          ],
        },
        {
          id: "home-and-abroad-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "transport-and-directions",
          question:
            "Q3c Grammar — Complete the polite **usted** direction with the **usted imperative** (same as present subjunctive, 3rd person singular) of **girar**: *Al llegar al semáforo, _______ a la izquierda.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: ["gire", "usted gire"] },
          traps: [
            {
              spec: { type: "text", accept: ["gira"] },
              feedback: "*Gira* is the informal *tú* command — polite *usted* flips *-ar* to **-e** (*gire*)!",
            },
          ],
          hints: [
            "Take *yo giro*, drop *-o*, and add the opposite *-ar* vowel *-e*.",
            "Keep it in 3rd-person singular (*usted*).",
          ],
          solution: [
            "Polite *usted* command of *girar* = **gire**.",
          ],
        },
        {
          id: "home-and-abroad-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "transport-and-directions",
          question:
            "Q3c Grammar — Complete with the **preterite** form of **perder** (*nosotros*): *Por culpa del tráfico, _______ el avión a Lisboa.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("perder", "preterite", "nosotros") },
          hints: [
            "*Perder* is a regular *-er* verb in the Preterite (*-í, -iste, -ió, -imos…*).",
            "Give the *nosotros* form.",
          ],
          solution: [
            "Regular *-er* preterite for *nosotros*: *perd-* + *-imos* → **perdimos**.",
          ],
        commonError: "Don't use *-amos* here: *perder* is an *-er* verb, so *nosotros* preterite is *perdimos* (no stem change).",
        },
        {
          id: "home-and-abroad-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "weather-and-climate",
          question:
            "Q3c Grammar — Complete with the **preterite** (3rd person singular) of **hacer**: *El primer día _______ un tiempo maravilloso en Tenerife.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: ["hizo"] },
          traps: [
            {
              spec: { type: "text", accept: ["hico", "hacía"] },
              feedback: "In the 3rd-person singular Preterite of *hacer*, *c* changes to **z** before *-o*: **hizo**!",
            },
          ],
          hints: [
            "*El primer día* frames a single completed day → Preterite of *hacer*.",
            "Remember the spelling change *c → z* before *-o* (*hice, hiciste, ___*).",
          ],
          solution: [
            "3rd-person singular Preterite of *hacer* = **hizo** (*c → z* before *-o* to keep the soft sound).",
          ],
          commonError: "Writing *hico* instead of **hizo**.",
        },
        {
          id: "home-and-abroad-p1-q10",
          kind: "mcq",
          difficulty: "core",
          guideRef: "weather-and-climate",
          question:
            "Read the weather report:\n*«En el norte el cielo estará muy nublado con chubascos por la tarde, mientras que en el sur hará sol y subirán las temperaturas hasta los treinta grados.»*\nWhere should you go tomorrow if you want warm, sunny beach weather?",
          options: [
            "To the north in the afternoon",
            "To the south",
            "Nowhere, as storms will hit both regions",
            "To the northern mountains in the morning",
          ],
          answerIndex: 1,
          hints: [
            "*Chubascos* = rain showers (in the north).",
            "*En el sur hará sol y subirán las temperaturas* = in the south it will be sunny and temperatures will rise.",
          ],
          explanation:
            "The forecast states *en el sur hará sol y subirán las temperaturas hasta los treinta grados* ('sunny and temperatures rising to 30 °C in the south').",
        },
        {
          id: "home-and-abroad-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "regions-and-towns",
          question:
            "Complete the comparison of equality with the single missing Spanish word: *El metro de Madrid es _______ rápido como el metro de Singapur.* (Write ONLY the missing word.)",
          answer: { type: "text", accept: ["tan"] },
          traps: [
            {
              spec: { type: "text", accept: ["tanto"] },
              feedback: "Before an adjective (*rápido*), Spanish shortens *tanto* to **tan** (*tan rápido como*)!",
            },
          ],
          hints: [
            "*Rápido* is an adjective, not a noun.",
            "Use **___ + adjective + como**.",
          ],
          solution: [
            "Equality before an adjective uses **tan … como**: *es **tan** rápido como*.",
          ],
        },
        {
          id: "home-and-abroad-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "festivals-and-customs",
          question:
            "Write the Spanish noun (including the definite article **la**) for **'custom / tradition'** (beware the false friend *el disfraz* = costume!).",
          answer: { type: "text", accept: ["la costumbre", "la tradición"] },
          traps: [
            {
              spec: { type: "text", accept: ["el disfraz"] },
              feedback: "*El disfraz* means fancy-dress costume — 'custom / tradition' is **la costumbre** (or **la tradición**)!",
            },
          ],
          hints: [
            "It is a feminine noun starting with *c-* (*la c…*) or *t-* (*la t…*).",
            "Think of: *Es una ___ española muy antigua.*",
          ],
          solution: [
            "'Custom / tradition' in Spanish is **la costumbre** (also accepted: **la tradición**).",
          ],
        },
        {
          id: "home-and-abroad-p1-q13",
          kind: "short",
          difficulty: "challenge",
          guideRef: "festivals-and-customs",
          question:
            "Q3c Grammar — Complete with the **preterite** form of **vestirse** (*ellos/ellas* — watch the *-ir* sandal stem change *e → i* and include **se**!): *En Pamplona todos los participantes _______ de blanco y rojo.* (Write ONLY the reflexive pronoun + verb.)",
          answer: { type: "text", accept: acceptedForms("vestirse", "preterite", "ellos") },
          traps: [
            {
              spec: { type: "text", accept: ["se vestieron", "ellos se vestieron"] },
              feedback: "*Vestirse* is an *-ir* stem-changer (*e → i*), so 3rd-person plural Preterite shifts *e → i*: **se vistieron**!",
            },
          ],
          hints: [
            "*-ir* stem-changing verbs change *e → i* in the 3rd-person singular and plural of the Preterite ('sandal verbs').",
            "Don't forget the reflexive pronoun **se** before the verb!",
          ],
          solution: [
            "3rd-person plural reflexive pronoun = *se* + sandal preterite of *vestir* (*vistieron*) → **se vistieron**.",
          ],
        },
        {
          id: "home-and-abroad-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "regions-and-towns",
          marks: 4,
          question:
            "Edexcel Paper 2 Q6 Short Writing (60–75 words in **Spanish**).\nWrite a blog entry for a partner school describing your home town or city. You MUST address all four bullet points in Spanish:\n- geographical location where your town/city sits\n- two facilities or landmarks people can see there\n- one positive opinion about living there\n- where you will go next weekend in your local area",
          hints: [
            "Use **está situado/a en…** for geographical location and **hay…** for local facilities.",
            "Include **Lo mejor es que…** for your opinion and **iré / voy a ir…** for next weekend.",
          ],
          modelAnswer:
            "Vivo en Singapur, una metrópoli moderna que está situada en el sudeste asiático, junto a la costa. En mi barrio hay muchos espacios verdes, un polideportivo enorme y varios centros comerciales. Lo mejor de mi ciudad es que el transporte público funciona de maravilla y las calles son muy seguras. El próximo sábado iré al casco histórico con mis amigos y comeremos en una cafetería.",
          markScheme: [
            {
              point: "States geographical location in Spanish using estar/vivir + compass/coast/region.",
              keywords: ["esta situad", "en el norte", "en el sur", "en el este", "en el oeste", "sudeste", "costa", "afueras", "campo", "isla", "vivo en"],
            },
            {
              point: "Mentions facilities or landmarks in the town/neighbourhood (e.g. parks, shops, museum, sports centre).",
              keywords: ["parque", "espacios", "museo", "tienda", "comercial", "polideportivo", "biblioteca", "cine", "plaza", "playa"],
            },
            {
              point: "Gives a clear positive opinion/reason in Spanish.",
              keywords: ["mejor", "gusta", "encanta", "segur", "limpi", "modern", "tranquil", "animad", "bonit", "agradable"],
            },
            {
              point: "Uses a future reference (near future voy/iremos a or simple future iré/visitaremos) for next weekend.",
              keywords: ["ire", "iremos", "voy", "vamos", "visitare", "visitaremos", "saldre", "comere", "comeremos", "proximo", "manana"],
            },
          ],
          commonError: "Using *es* instead of **está** for geographical location, or forgetting the future tense on the final bullet.",
        },
        {
          id: "home-and-abroad-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "holidays-and-accommodation",
          marks: 4,
          question:
            "Edexcel Paper 3 Section A Role-Play Simulation (in **Spanish**, formal **usted**).\nYou are speaking to a hotel receptionist in Málaga because your room has problems. Write four short sentences in **Spanish** covering:\n- a polite greeting explaining that there is a problem with your room\n- one fault inside the bedroom or bathroom right now\n- something that was missing when you arrived\n- a polite question asking to change rooms or speak to the manager",
          hints: [
            "Open politely with **Perdone, buenas tardes: tengo un problema con mi habitación…**",
            "Use **está averiado / está sucio** for faults and singular **no había…** for what was missing.",
            "Ask politely in the *usted* register: **¿Podría darme otra habitación, por favor?**",
          ],
          modelAnswer:
            "Perdone, buenas tardes: tengo una queja sobre mi habitación doble. Por desgracia, el aire acondicionado está averiado y el cuarto de baño está bastante sucio. Además, cuando llegué ayer no había toallas limpias ni jabón. ¿Podría darme la llave de otra habitación más tranquila, por favor?",
          markScheme: [
            {
              point: "Polite opening in Spanish mentioning the bedroom/complaint.",
              keywords: ["perdone", "disculpe", "buenos dias", "buenas tardes", "buenas noches", "habitacion", "queja"],
            },
            {
              point: "Describes a fault in the bedroom/bathroom (broken AC/lift/shower, dirty, noisy).",
              keywords: ["funciona", "averiad", "rot", "suci", "ruidos", "aire", "ducha", "luz", "ascensor", "calefaccion"],
            },
            {
              point: "States an item that was missing on arrival (no hay / no había + towels/soap/water/wifi).",
              keywords: ["habia", "toalla", "jabon", "agua", "papel", "manta", "llave", "llegue", "llegamos"],
            },
            {
              point: "Includes a polite question in Spanish (¿...?) requesting a room change or solution.",
              keywords: ["¿", "podria", "puede", "cambiar", "otra", "director"],
            },
          ],
          commonError: "Addressing the receptionist with informal *tú* (*¿Puedes…?*) instead of formal **usted** (*¿Puede / Podría…?*), or writing plural *habían*.",
        },
      ],
    },

    {
      id: "home-and-abroad-p2",
      title: "Home & Abroad — Practice Paper 2 (Higher Reading, Q3c Manipulation & Paper 2 Q7 Essay)",
      questions: [
        {
          id: "home-and-abroad-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "transport-and-directions",
          question:
            "Write the 2-word Spanish verb phrase (infinitive) meaning **'to change trains / transfer'**.",
          answer: { type: "text", accept: ["hacer transbordo", "hacer trasbordo"] },
          hints: ["Uses the verb **hacer** + a noun starting with *trans-*."],
          solution: [
            "'To change trains/planes' is **hacer transbordo** (RAE also accepts *hacer trasbordo*).",
          ],
        commonError: "English speakers often write *cambiar trenes*; idiomatic Spanish uses *hacer transbordo*.",
        },
        {
          id: "home-and-abroad-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "transport-and-directions",
          question:
            "Q3c Grammar — Complete with the **preterite** form of **llegar** (*yo* — watch the *-gar* spelling rule!): *Anoche _______ a la estación cinco minutos antes de la salida.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("llegar", "preterite", "yo") },
          traps: [
            {
              spec: { type: "text", accept: ["llegé", "yo llegé"] },
              feedback: "In *-gar* verbs, *g* changes to **gu** before *-é* in the *yo* Preterite: **llegué**!",
            },
          ],
          hints: [
            "*Llegar* ends in *-gar*.",
            "Insert *u* after *g* before *-é* to keep the hard /g/ sound.",
          ],
          solution: [
            "*-gar* spelling rule in *yo* Preterite: *lleg-* → **llegué**.",
          ],
        },
        {
          id: "home-and-abroad-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "transport-and-directions",
          question:
            "Q3c Grammar — Complete the polite **usted** direction with the **usted imperative** of **cruzar** (watch *-zar → -ce*!): *Señora, _______ la avenida por el paso de peatones.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: ["cruce", "usted cruce"] },
          traps: [
            {
              spec: { type: "text", accept: ["cruze", "cruza"] },
              feedback: "Before *-e*, Spanish always changes *z* to **c** (**cruce**), and *cruza* is informal *tú*!",
            },
          ],
          hints: [
            "Polite *usted* command of *-ar* verbs takes *-e*.",
            "Apply the *z → c* spelling rule before *-e*.",
          ],
          solution: [
            "*Cruzar* → polite *usted* imperative **cruce**.",
          ],
        },
        {
          id: "home-and-abroad-p2-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "transport-and-directions",
          question:
            "Read Mateo's travel diary:\n*«Salimos rumbo a Mallorca a primera hora, pero al llegar al mostrador me di cuenta de que había dejado mi pasaporte en casa. Tuve que coger un taxi de vuelta rápidamente; menos mal que el avión llevaba una hora de retraso.»*\nWhy did Mateo STILL manage to catch his flight?",
          options: [
            "Because the airline let him board using only his school ID card.",
            "Because his parents brought his passport to the boarding gate by metro.",
            "Because the plane was delayed by an hour, giving him time to fetch his passport by taxi.",
            "Because he booked a later evening ferry from Barcelona instead.",
          ],
          answerIndex: 2,
          hints: [
            "*Me di cuenta de que había dejado mi pasaporte en casa* = Pluperfect ('I realised I had left my passport at home').",
            "*Menos mal que el avión llevaba una hora de retraso* = 'thank goodness the plane was an hour delayed'!",
          ],
          explanation:
            "Mateo took a taxi home and back (*coger un taxi de vuelta*), and *menos mal que el avión llevaba una hora de retraso* explains that the 1-hour flight delay saved him.",
        },
        {
          id: "home-and-abroad-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "holidays-and-accommodation",
          question:
            "Q3c Grammar — Complete with the **perfect** tense (*pretérito perfecto*: *haber + participio*) of **descubrir** (*nosotros*): *Este verano _______ calas preciosas en Baleares.* (Write ONLY the 2-word verb form.)",
          answer: { type: "text", accept: acceptedForms("descubrir", "perfect", "nosotros") },
          traps: [
            {
              spec: { type: "text", accept: ["hemos descubrido", "nosotros hemos descubrido"] },
              feedback: "*Descubrir* (like *abrir*) has an irregular past participle: **descubierto**, never *descubrido*!",
            },
          ],
          hints: [
            "*Nosotros* present of *haber* = **hemos**.",
            "Like *abrir → abierto*, what is the irregular past participle of *descubrir*?",
          ],
          solution: [
            "Auxiliary *hemos* + irregular participle *descubierto* → **hemos descubierto**.",
          ],
        },
        {
          id: "home-and-abroad-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "weather-and-climate",
          question:
            "Q3c Grammar — Complete with the **imperfect** (3rd person singular) of **llover**: *Mientras esperábamos el autobús, _______ sin parar.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: ["llovía"] },
          traps: [
            {
              spec: { type: "text", accept: ["llueva", "llovió"] },
              feedback: "*Mientras esperábamos…* sets two simultaneous ongoing past actions → Imperfect **llovía** (remember the accent on *-ía*!).",
            },
          ],
          hints: [
            "*Mientras* + Imperfect (*esperábamos*) calls for Imperfect on the simultaneous ongoing rain.",
            "*Llover* is a regular *-er* verb in the Imperfect (*-ía*).",
          ],
          solution: [
            "Stem *llov-* + *-er* imperfect ending *-ía* → **llovía**.",
          ],
        },
        {
          id: "home-and-abroad-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "weather-and-climate",
          question:
            "Q3c Grammar — Complete with the **simple future** (3rd person singular) of impersonal **haber**: *Según la radio, esta noche _______ una tormenta eléctrica.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: ["habrá"] },
          traps: [
            {
              spec: { type: "text", accept: ["haberá"] },
              feedback: "*Haber* drops the *-e-* in the Simple Future stem: **habr-** → **habrá**!",
            },
          ],
          hints: [
            "Irregular future stem of *haber* = **habr-**.",
            "Add 3rd-person singular *-á* (with an accent).",
          ],
          solution: [
            "Impersonal Simple Future of *haber* = **habrá**.",
          ],
        },
        {
          id: "home-and-abroad-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "regions-and-towns",
          question:
            "Q3c Grammar — Complete the WEIRDO subjunctive trigger with the **present subjunctive** of **tener** (*él/ella*): *Es una lástima que mi pueblo no _______ estación de tren.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: ["tenga"] },
          traps: [
            {
              spec: { type: "text", accept: ["tiene"] },
              feedback: "**Es una lástima que** ('It is a shame that') is an emotional/impersonal WEIRDO trigger requiring the **Present Subjunctive** (*tenga*), not indicative *tiene*!",
            },
          ],
          hints: [
            "*Es una lástima que* triggers the Present Subjunctive.",
            "Start from *yo tengo*, drop *-o*, and add *-a*.",
          ],
          solution: [
            "*Yo tengo* → *teng-* + *-a* (3rd-person singular Present Subjunctive) → **tenga**.",
          ],
        },
        {
          id: "home-and-abroad-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "festivals-and-customs",
          question:
            "Read Carmen's opinion on *Las Fallas*:\n*«Soy valenciana y me fascina el arte de los monumentos, pero reconozco que durante esa semana es casi imposible dormir en el centro por culpa de los petardos constantes.»*\nWhat is Carmen's attitude towards *Las Fallas*?",
          options: [
            "She dislikes the painted sculptures and travels out of Valencia every March to escape the tourist crowds.",
            "She loves the artistry of the sculptures, though the non-stop firecrackers make sleeping in the centre nearly impossible.",
            "She thinks the loud firecrackers are the highlight of the week and finds the traditional statues repetitive and dull.",
            "She wishes the city council extended the street festival to last an entire month instead of just one short week.",
          ],
          answerIndex: 1,
          hints: [
            "*Me fascina el arte de los monumentos* = positive attitude towards the sculptures.",
            "*Pero reconozco que … es casi imposible dormir … por culpa de los petardos* = balanced drawback!",
          ],
          explanation:
            "Carmen praises the art of the monuments (*me fascina el arte*) while admitting that constant firecrackers (*los petardos constantes*) make sleeping in the centre nearly impossible.",
        },
        {
          id: "home-and-abroad-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "festivals-and-customs",
          question:
            "Complete the sentence with the single missing Spanish preposition required after **asistir** ('to attend'): *El año pasado asistimos _______ un desfile increíble.* (Write ONLY the missing preposition.)",
          answer: { type: "text", accept: ["a"] },
          traps: [
            {
              spec: { type: "text", accept: ["en"] },
              feedback: "In Spanish, 'to attend an event' is ALWAYS **asistir a**, never *asistir en*!",
            },
          ],
          hints: [
            "Remember the Grade-9 mark-saver: **asistir ___** + event/class.",
            "It is the single-letter Spanish preposition meaning 'to/at'.",
          ],
          solution: ["*Asistir* ('to attend') always takes the preposition **a**: *asistimos **a** un desfile*."],
        },
        {
          id: "home-and-abroad-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "holidays-and-accommodation",
          question:
            "Q3c Grammar — Complete with the **preterite** form of **conducir** (*mi padre* — 3rd person singular, irregular *-j-* stem!): *Mi padre _______ seis horas desde Madrid hasta Cádiz.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: ["condujo", "él condujo"] },
          traps: [
            {
              spec: { type: "text", accept: ["condució", "condujó"] },
              feedback: "*Conducir* has the strong *-j-* preterite stem **conduj-**, and strong preterite stems take NO written accent (**condujo**)!",
            },
          ],
          hints: [
            "Verbs ending in *-ducir* use the irregular preterite stem **-duj-** (*conduje, condujiste, …*).",
            "Remember: strong preterite stems NEVER carry an accent on *-e* or *-o*!",
          ],
          solution: [
            "Irregular stem *conduj-* + unaccented *-o* → **condujo**.",
          ],
        },
        {
          id: "home-and-abroad-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "transport-and-directions",
          question:
            "Q3c Grammar — Complete the future time clause with the **present subjunctive** of **volver** (*nosotros*): *Cuando _______ de nuestras vacaciones, os enseñaremos las fotos.* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("volver", "subjunctive", "nosotros") },
          traps: [
            {
              spec: { type: "text", accept: ["volveremos", "volvamos a", "vuelvamos"] },
              feedback: "Future *cuando* requires Present Subjunctive, and *-er* boot verbs (*o → ue*) do NOT stem-change in *nosotros*: **volvamos**!",
            },
          ],
          hints: [
            "Future *cuando* ('when we return') ALWAYS takes the Present Subjunctive.",
            "Careful: *volver* is an *-er* boot verb, so *nosotros* keeps the un-diphthongised stem *volv-* + *-amos*!",
          ],
          solution: [
            "Present Subjunctive of *volver* in *nosotros* (outside the boot!) = **volvamos**.",
          ],
        },
        {
          id: "home-and-abroad-p2-q13",
          kind: "mcq",
          difficulty: "challenge",
          guideRef: "regions-and-towns",
          question:
            "Read this debate extract on mass tourism:\n*«Si el gobierno no limita los pisos turísticos en el centro, los jóvenes locales no podrán pagar el alquiler y los barrios perderán su identidad.»*\nWhich grammatical structure does the author use, and what is the warning?",
          options: [
            "Type-2 hypothetical si clause (Si + Imperfect Subjunctive → Conditional): foreign tourists can no longer afford central hotel rooms.",
            "Type-1 real si condition (Si + Present → Future): without limits on tourist flats, local youth won't afford rent and districts will lose their identity.",
            "Past completed narrative (Preterite + Imperfect): the national government banned all short-term tourist apartments across Spain last year.",
            "Present subjunctive wish (Ojalá + Subjunctive): young residents hope more short-term holiday flats open throughout their central neighbourhood.",
          ],
          answerIndex: 1,
          hints: [
            "Look at *Si … no limita* (Present Indicative) → *no podrán … y perderán* (Simple Future).",
            "*Los pisos turísticos* = holiday rental flats; *el alquiler* = rent.",
            "Match both the grammar label and the exact warning.",
          ],
          explanation:
            "The sentence uses a **Type-1 real condition** (*Si + Present Indicative → Simple Future*) warning that without limits on holiday flats, local young people won't be able to pay rent (*pagar el alquiler*) and neighbourhoods will lose their identity.",
        },
        {
          id: "home-and-abroad-p2-q14",
          kind: "written",
          difficulty: "challenge",
          guideRef: "holidays-and-accommodation",
          marks: 4,
          question:
            "Edexcel Paper 2 Q7 Extended Writing (130–150 words in **Spanish**).\nWrite an article for your school magazine about an unforgettable trip abroad. You MUST address all four bullet points in **Spanish**:\n- where you travelled last year, how you got there, and what the weather was like\n- what activities you did and one memorable moment or small setback\n- why travelling abroad benefits young people today (present tense)\n- your dream destination in the Hispanic world for the future (use Future or Conditional)",
          hints: [
            "Bullet 1 & 2 (Past): Use **fui de vacaciones a… en avión**, **hizo sol**, and Preterite actions (*visité, nadé, perdí*).",
            "Bullet 3 (Present): Use **En mi opinión, viajar permite ampliar horizontes y practicar idiomas…**",
            "Bullet 4 (Future/Conditional): Use **Si tuviera dinero, viajaría a…** or **El año que viene visitaré…**",
          ],
          modelAnswer:
            "El verano pasado fui de vacaciones a Valencia en avión con mi familia. Durante toda la estancia hizo mucho sol y el cielo estuvo despejado. Visitamos el casco antiguo, nadamos en el mar Mediterráneo y probamos una paella riquísima, aunque el primer día perdí mi cámara en el autobús. En mi opinión, viajar al extranjero hoy en día es imprescindible porque nos permite ampliar horizontes, practicar idiomas y comprender otras costumbres. Si tuviera suficiente dinero el próximo año, viajaría a Perú y subiría a Machu Picchu porque me fascina la historia inca.",
          markScheme: [
            {
              point: "Narrates past destination, transport, and past weather accurately in Spanish.",
              keywords: ["fui", "fuimos", "viaje", "viajamos", "avion", "tren", "autocar", "hizo", "hacia", "llovio", "sol", "calor"],
            },
            {
              point: "Describes past holiday activities/events in the Preterite (e.g. visited, swam, tried food, setback).",
              keywords: ["visite", "visitamos", "nade", "nadamos", "comi", "comimos", "probe", "probamos", "saque", "perdi", "alojamos"],
            },
            {
              point: "Explains present-day value of travel with a justified opinion.",
              keywords: ["permite", "ayuda", "imprescindible", "ampliar", "horizontes", "cultura", "costumbres", "idiomas"],
            },
            {
              point: "Expresses future/dream Hispanic travel plans using Conditional, Simple Future, or Si tuviera…",
              keywords: ["viajaria", "iria", "gustaria", "encantaria", "visitaré", "visitare", "ire", "tuviera", "pudiera", "futuro"],
            },
          ],
          commonError: "Writing only one or two time frames instead of all three (past + present + future/conditional), or writing *fui en vacaciones* / *visité a Valencia*.",
        },
        {
          id: "home-and-abroad-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "festivals-and-customs",
          marks: 4,
          question:
            "Edexcel Paper 2 Q7 / Paper 3 Topic Conversation Response (in **Spanish**).\nWrite a structured 90–120 word paragraph in **Spanish** about a famous Hispanic festival. Include all four elements:\n- name of a Hispanic festival, where and when it happens (using passive **se**)\n- two traditional customs or events spectators witness during the celebration\n- a past experience (real or imagined) of attending a festival\n- a balanced evaluation (one advantage AND one drawback of big street festivals)",
          hints: [
            "Open with passive *se*: **Las Fallas se celebran en marzo en Valencia…** (or *El Día de los Muertos se celebra…*).",
            "Add plural passive *se* customs (*se queman monumentos, se tiran fuegos artificiales*) and Preterite **asistí a…**",
            "Balance pros and cons with **Por un lado… sin embargo…**",
          ],
          modelAnswer:
            "Las Fallas se celebran cada mes de marzo en Valencia, en la costa este de España. Durante la fiesta se construyen enormes estatuas satíricas, hay desfiles con música y la última noche se queman todos los monumentos en grandes hogueras. Hace dos años asistí a una fiesta popular con mis primos y vimos unos fuegos artificiales espectaculares. Por un lado, estas tradiciones unen a los vecinos y atraen turismo; sin embargo, dejan mucha basura en las calles.",
          markScheme: [
            {
              point: "Names a Hispanic festival, place/month, and uses passive/impersonal se (se celebra / se celebran).",
              keywords: ["fallas", "tomatina", "sanfermines", "muertos", "semana santa", "celebra", "celebran", "marzo", "agosto", "noviembre", "julio"],
            },
            {
              point: "Describes at least two festival customs (parades, fireworks, statues, bonfires, altars, costumes).",
              keywords: ["fuegos", "desfile", "hoguera", "monumentos", "queman", "lanzan", "altares", "velas", "musica", "disfraz", "encierro"],
            },
            {
              point: "Includes a past-tense reference to attending/seeing a celebration.",
              keywords: ["asisti", "asistimos", "fui", "fuimos", "vi", "vimos", "baile", "bailamos", "pasado", "hace dos"],
            },
            {
              point: "Gives a balanced pro + con evaluation using contrast connectors.",
              keywords: ["embargo", "aunque", "otro lado", "turismo", "empleo", "ruido", "basura", "suciedad", "peligros"],
            },
          ],
          commonError: "Confusing *la costumbre* ('custom') with *el disfraz* ('costume'), or forgetting **a** after *asistir* (*asistí a*).",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "home-and-abroad-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "holidays-and-accommodation",
      question:
        "Grade-9 *Si* Clause — Complete the sentence with the **imperfect subjunctive** (*-ra* or *-se* form, *yo*) of **tener**: *Si _______ más ahorros este verano, me alojaría en un parador histórico.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: ["tuviera", "tuviese", "yo tuviera", "yo tuviese"] },
      traps: [
        {
          spec: { type: "text", accept: ["tendría", "tenga", "tenía"] },
          feedback: "NEVER use the Conditional (*tendría*) after *si*! Type-2 *si* clauses require the **Imperfect Subjunctive** built from the 3rd-person plural Preterite stem (*tuvieron → tuviera / tuviese*).",
        },
      ],
      hints: [
        "Notice the Conditional *me alojaría* in the main clause — this signals a Type-2 hypothetical *si* clause.",
        "Take the *ellos* Preterite of *tener* (*tuvieron*), drop *-ron*, and add *-ra* (or *-se*).",
        "Check your spelling: *tuv-* + *-iera*.",
      ],
      solution: [
        "3rd-person plural Preterite of *tener* = *tuvieron*.",
        "Drop *-ron* → *tuvie-* + *-ra* (or *-se*) → **tuviera** (or **tuviese**).",
      ],
    },
    {
      id: "home-and-abroad-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "transport-and-directions",
      question:
        "Future Time Clause — Complete with the **present subjunctive** of **llegar** (*nosotros* — watch *-gar → -gu*!): *En cuanto _______ al aeropuerto, facturaremos las maletas.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("llegar", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["llegaremos", "llegamos", "llegemos"] },
          feedback: "Future *en cuanto* ('as soon as') ALWAYS takes Present Subjunctive, and *-gar* changes *g → gu* before *-emos*: **lleguemos**!",
        },
      ],
      hints: [
        "The main clause is Simple Future (*facturaremos*), so *en cuanto* refers to an unfulfilled future event → Present Subjunctive!",
        "Flip *-ar* ending to *-emos* for *nosotros*.",
        "Insert **u** after *g* before *e* so the /g/ stays hard: *lleguemos*.",
      ],
      solution: [
        "Future time conjunction *en cuanto* triggers the Present Subjunctive.",
        "Apply *-gar → -gu-* before *-emos*: **lleguemos**.",
      ],
    },
    {
      id: "home-and-abroad-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "regions-and-towns",
      question:
        "Spot the **ONLY** sentence below that contains **ZERO** grammar, gender, or preposition errors:",
      options: [
        "El verano pasado visité a Sevilla, que es en el sur y tiene una clima calurosa.",
        "El verano pasado visité Sevilla, que está en el sur y tiene un clima caluroso.",
        "El verano pasado fui en vacaciones a Sevilla y busqué para un mapa gratuita.",
        "El verano pasado visité Sevilla, donde habían muchas plazas tan bonitos como parques.",
      ],
      answerIndex: 1,
      hints: [
        "Check 1: NO personal *a* before cities (*visité Sevilla*).",
        "Check 2: **estar** for location (*está en el sur*) and masculine **un clima caluroso**.",
        "Check why the other options fail: *en vacaciones*, *busqué para*, *una mapa*, and plural *habían*.",
      ],
      explanation:
        "**El verano pasado visité Sevilla, que está en el sur y tiene un clima caluroso** gets all three traps right: no personal *a* before *Sevilla*, *está* for map location, and masculine *un clima caluroso*.",
    },
    {
      id: "home-and-abroad-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "weather-and-climate",
      question:
        "Subjunctive Doubt Trigger — Complete with the **present subjunctive** (3rd person singular) of **llover** (*o → ue* boot verb!): *No creo que _______ mañana durante nuestra excursión.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: ["llueva"] },
      traps: [
        {
          spec: { type: "text", accept: ["llueve", "lloverá", "llova"] },
          feedback: "Negated opinion **No creo que** triggers the Present Subjunctive, and *llover* stem-changes *o → ue* in the singular: **llueva**!",
        },
      ],
      hints: [
        "Affirmative *creo que* takes indicative, whereas negated **no creo que** triggers the **Present Subjunctive**!",
        "Take present indicative *llueve* (*o → ue* stem change).",
        "Swap the *-er* indicative ending *-e* to the subjunctive ending **-a**.",
      ],
      solution: [
        "**No creo que** expresses doubt → Present Subjunctive.",
        "*Llover* (*o → ue*) in 3rd-person singular Present Subjunctive = **llueva**.",
      ],
    },
    {
      id: "home-and-abroad-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "transport-and-directions",
      question:
        "Polite Irregular Usted Command — Complete the direction to a tourist with the **usted imperative** (same as 3rd-person singular present subjunctive) of **ir** (DISHES irregular!): *Para ver la catedral, _______ a pie por esta calle peatonal.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: ["vaya", "usted vaya"] },
      traps: [
        {
          spec: { type: "text", accept: ["va", "ve", "fue"] },
          feedback: "*Ve* is the informal *tú* command of *ir*; the polite **usted** command uses the DISHES subjunctive form **vaya**!",
        },
      ],
      hints: [
        "*Ir* is one of the 6 DISHES irregulars in the Present Subjunctive / *usted* imperative.",
        "Informal *tú* is *ve*, whereas formal *usted* starts with *vay-*.",
        "Give the 3rd-person singular form: **vaya**.",
      ],
      solution: [
        "Polite *usted* imperative of *ir* = **vaya** (*vaya a pie* = go on foot).",
      ],
    },
    {
      id: "home-and-abroad-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "holidays-and-accommodation",
      question:
        "How do you say **'When we arrived at the guesthouse, the last bus had already left'** using Preterite + Pluperfect (*pluscuamperfecto*)?",
      options: [
        "Cuando llegamos a la pensión, el último autobús ya ha salido.",
        "Cuando llegábamos a la pensión, el último autobús ya salió.",
        "Cuando llegamos a la pensión, el último autobús ya había salido.",
        "Cuando llegaremos a la pensión, el último autobús ya habría salido.",
      ],
      answerIndex: 2,
      hints: [
        "'When we arrived' = completed past point in time → Preterite (*llegamos*).",
        "'Had already left' happened BEFORE that past arrival → Pluperfect (*imperfect of haber + past participle*).",
        "Check: *había salido* vs Present Perfect *ha salido*.",
      ],
      explanation:
        "**Cuando llegamos … ya había salido** pairs the Preterite (*llegamos*) with the Pluperfect (**había salido**, 'had left') for an action prior to another past action.",
    },
    {
      id: "home-and-abroad-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "festivals-and-customs",
      question:
        "Purpose Conjunction + Subjunctive — Complete with the **present subjunctive** of **conocer** (*tú* — remember the *-zco* stem!): *Te llevo a Valencia en marzo para que _______ Las Fallas en persona.* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("conocer", "subjunctive", "tú") },
      traps: [
        {
          spec: { type: "text", accept: ["conoces", "conocas"] },
          feedback: "**Para que** ALWAYS triggers Present Subjunctive built from *yo conozco*: **conozcas**!",
        },
      ],
      hints: [
        "**Para que** ('so that') always triggers the Present Subjunctive.",
        "Build the Present Subjunctive from the *yo* present form of *conocer*: **conozco**.",
        "Drop *-o* and add the *tú* subjunctive ending for *-er* verbs (**-as**).",
      ],
      solution: [
        "*Yo conozco* → stem *conozc-* + *-as* (*tú* Present Subjunctive) → **conozcas**.",
      ],
    },
    {
      id: "home-and-abroad-ch-q08",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "festivals-and-customs",
      question:
        "Read this complex review of *Los Sanfermines*:\n*«Por mucho que sea una tradición centenaria que genera millones de euros para Pamplona, cada vez más jóvenes dudan que el encierro respete el bienestar animal.»*\nWhich TWO subjunctive triggers appear in this sentence, and why?",
      options: [
        "genera and dudan — triggered by centenaria and bienestar.",
        "sea and genera — triggered by millones de euros and cada vez más.",
        "sea and respete — triggered by Por mucho que ('however much', concession) and dudan que (doubt).",
        "dudan and respete — triggered by Pamplona and el encierro.",
      ],
      answerIndex: 2,
      hints: [
        "Spot the two conjugated Present Subjunctive verbs in the sentence: *sea* (*ser*) and *respete* (*respetar*).",
        "Look immediately before *sea*: **Por mucho que** ('however much / no matter how much').",
        "Look immediately before *respete*: **dudan que** (WEIRDO expression of doubt).",
      ],
      explanation:
        "**Sea** is triggered by concessive **Por mucho que** ('however much it may be'), and **respete** is triggered by **dudan que** ('doubt that', WEIRDO Doubt).",
    },
  ],
};
