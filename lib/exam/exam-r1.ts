import type { ExamPaper } from "../types.ts";
import { acceptedForms } from "../spanish/verbs.ts";

export const paper: ExamPaper = {
  id: "exam-r1",
  title: "Mock Paper 1A — Reading & Grammar (4SP0 Paper 2A)",
  calculator: false,
  minutes: 45,
  questions: [
    // ---------------- AREA A: HOME & ABROAD (Q01–Q05) ----------------
    {
      id: "exam-r1-q01",
      topicId: "home-and-abroad",
      guideRef: "regions-and-towns",
      kind: "mcq",
      difficulty: "warmup",
      strategy: "Scan for positive vs negative opinion markers",
      question:
        "Read Lucía's post about her hometown:\n\n*«Vivo en las afueras de Málaga, una ciudad situada en la costa del sur de España. Lo mejor de mi barrio es que es muy tranquilo y hay muchas zonas verdes; sin embargo, lo peor es que el transporte público pasa con poca frecuencia.»*\n\nWhat does Lucía dislike about her neighbourhood?",
      options: [
        "Buses and trains do not run very often.",
        "There are not enough parks and green spaces.",
        "It is right in the noisy city centre.",
        "It is too far inland from the coast.",
      ],
      answerIndex: 0,
      hints: [
        "Look for the negative structure *lo peor es que…* ('the worst thing is that…') after *sin embargo*.",
      ],
      explanation:
        "*Lo peor es que el transporte público pasa con poca frecuencia* means public transport runs infrequently. She praises the peace and green areas (*tranquilo y hay muchas zonas verdes*), lives on the outskirts (*las afueras*), and Málaga is on the coast (*en la costa*).",
    },
    {
      id: "exam-r1-q02",
      topicId: "home-and-abroad",
      guideRef: "holidays-and-accommodation",
      kind: "mcq",
      difficulty: "core",
      strategy: "Distinguish imperfect background problems from requests",
      question:
        "Read Mateo's hotel review:\n\n*«Reservamos una habitación doble con media pensión con dos meses de antelación. Al llegar, descubrimos que el aire acondicionado no funcionaba y no había toallas limpias en el baño, así que pedimos cambiar de habitación enseguida.»*\n\nWhich TWO details match Mateo's stay?",
      options: [
        "All three meals were included, and the shower had no hot water.",
        "They booked at the last minute, and the room was too noisy.",
        "Breakfast and dinner were included, and the air conditioning was broken.",
        "They stayed in a youth hostel, and the Wi-Fi did not work.",
      ],
      answerIndex: 2,
      hints: [
        "Check what *media pensión* (half board) covers compared with *pensión completa*.",
        "Look at *el aire acondicionado no funcionaba* for the fault in the room.",
      ],
      explanation:
        "*Media pensión* (half board) includes breakfast and evening meal, and *el aire acondicionado no funcionaba* means the air conditioning was not working. *Con dos meses de antelación* means two months in advance, not last minute.",
    },
    {
      id: "exam-r1-q03",
      topicId: "home-and-abroad",
      guideRef: "transport-and-directions",
      kind: "short",
      difficulty: "core",
      strategy: "Read station announcements for platform vs delay numbers",
      question:
        "Read the station announcement:\n\n*«Atención, pasajeros: el tren de alta velocidad con destino a Sevilla de las catorce treinta lleva veinte minutos de retraso. Saldrá del andén número ocho; recuerden que hay que hacer transbordo en Córdoba.»*\n\nFrom which platform number will the train depart? (Write ONLY the number as digits, e.g. `4`.)",
      answer: { type: "number", value: 8 },
      traps: [
        {
          spec: { type: "number", value: 20 },
          feedback: "20 (*veinte*) is the number of minutes the train is delayed (*minutos de retraso*), not the platform (*el andén*).",
        },
        {
          spec: { type: "number", value: 14 },
          feedback: "14:30 (*las catorce treinta*) is the scheduled departure time, not the platform (*el andén*).",
        },
      ],
      hints: [
        "Find the Spanish word for 'platform' (*el andén*) rather than 'delay' (*retraso*).",
        "Translate *el andén número ocho* into digits.",
      ],
      solution: [
        "Locate *Saldrá del andén número ocho* ('It will depart from platform number eight').",
        "*Veinte* (20) is a distractor giving the delay in minutes; the platform is **8**.",
      ],
    },
    {
      id: "exam-r1-q04",
      topicId: "home-and-abroad",
      guideRef: "weather-and-climate",
      kind: "mcq",
      difficulty: "core",
      strategy: "Track weather expressions across past, present and future",
      question:
        "Read the weather report for northern Spain:\n\n*«Ayer llovió a cántaros durante toda la tarde y hubo tormenta. Hoy el cielo está despejado y hace sol, pero mañana por la mañana habrá niebla en la carretera.»*\n\nWhat is the weather like **today**?",
      options: [
        "Cloudy with heavy showers",
        "Clear skies and sunny",
        "Thick fog on the roads",
        "Thunderstorms and strong wind",
      ],
      answerIndex: 1,
      hints: [
        "Separate *ayer* (yesterday), *hoy* (today) and *mañana* (tomorrow).",
        "What do *está despejado* and *hace sol* describe?",
      ],
      explanation:
        "For *hoy* (today), the report states *el cielo está despejado y hace sol* ('the sky is clear and it is sunny'). Heavy rain and storms happened *ayer* (yesterday), while fog (*niebla*) is forecast for *mañana* (tomorrow).",
    },
    {
      id: "exam-r1-q05",
      topicId: "home-and-abroad",
      guideRef: "festivals-and-customs",
      kind: "short",
      difficulty: "core",
      strategy: "Passive 'se' agrees with plural nouns",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the sentence about Las Fallas in Valencia with the **present indicative** passive-*se* form of **quemar** (*ellos*, agreeing with *monumentos*):\n\n*La última noche de marzo, se _______ monumentos gigantes de cartón.*\n\n(Write ONLY the single verb word after *se*, without repeating *se*.)",
      answer: { type: "text", accept: ["queman"] },
      traps: [
        {
          spec: { type: "text", accept: ["quema"] },
          feedback: "In passive *se* constructions, the verb agrees with the noun that follows: *monumentos* is plural, so use 3rd-person plural!",
        },
        {
          spec: { type: "text", accept: ["se queman"] },
          feedback: "The pronoun *se* is already printed before the blank — write ONLY the verb *queman*.",
        },
      ],
      hints: [
        "In *se + verb + plural noun*, the verb must be 3rd-person plural.",
        "Conjugate regular *-ar* verb *quemar* for *ellos* in the present indicative.",
      ],
      solution: [
        "Because *monumentos gigantes* is plural, passive *se* requires the 3rd-person plural form.",
        "Present indicative *ellos* of *quemar* → **queman** (*se queman monumentos*).",
      ],
    },

    // ---------------- AREA B: EDUCATION & EMPLOYMENT (Q06–Q09) ----------------
    {
      id: "exam-r1-q06",
      topicId: "education-and-employment",
      guideRef: "school-life-and-facilities",
      kind: "mcq",
      difficulty: "warmup",
      strategy: "Watch false friends: aprobar vs suspender, biblioteca vs librería",
      question:
        "Read Alejandro's message:\n\n*«Las instalaciones de mi instituto son modernas: paso el recreo repasando en la biblioteca porque no quiero suspender el examen de química. Mi asignatura optativa favorita es informática.»*\n\nWhy does Alejandro spend break time in the library?",
      options: [
        "He wants to buy new chemistry textbooks.",
        "He has been suspended from chemistry lessons.",
        "He is revising so that he does not fail his chemistry exam.",
        "He is setting up computers for an optional club.",
      ],
      answerIndex: 2,
      hints: [
        "Beware of two classic false friends: *la biblioteca* (library, not bookshop) and *suspender un examen* (to fail an exam, not be suspended).",
      ],
      explanation:
        "*Repasando en la biblioteca porque no quiero suspender el examen de química* means revising in the library so he does not fail his chemistry exam. *Librería* is a bookshop, and *suspender* in exam contexts means 'to fail' (opposite of *aprobar*).",
    },
    {
      id: "exam-r1-q07",
      topicId: "education-and-employment",
      guideRef: "school-rules-and-pressure",
      kind: "mcq",
      difficulty: "core",
      strategy: "Impersonal prohibitions take a direct infinitive",
      question:
        "Which sentence is grammatically accurate for an Edexcel 4SP0 essay about school rules?",
      options: [
        "En mi instituto está prohibido para usar el móvil en los pasillos.",
        "En mi instituto no se permite usando el móvil en los pasillos.",
        "En mi instituto hay usar el móvil en los pasillos.",
        "En mi instituto está prohibido usar el móvil en los pasillos.",
      ],
      answerIndex: 3,
      hints: [
        "Check what follows impersonal obligation/prohibition phrases like *se debe*, *hay que*, *no se permite* and *está prohibido*.",
        "Spanish uses the bare infinitive (never *para + inf* or the *-ndo* gerund) after *está prohibido*.",
      ],
      explanation:
        "*Está prohibido + infinitive* (*está prohibido usar*) is the correct structure. Translating English 'forbidden to use' as *prohibido para usar* or 'not allowed using' as *no se permite usando* loses grammar marks, and *hay que* requires *que*.",
    },
    {
      id: "exam-r1-q08",
      topicId: "education-and-employment",
      guideRef: "part-time-jobs-and-work-experience",
      kind: "mcq",
      difficulty: "core",
      strategy: "Separate past work-experience duties from current weekend job",
      question:
        "Read Sofía's interview extract:\n\n*«El trimestre pasado hice mis prácticas laborales en una clínica veterinaria: limpiaba las jaulas, pero aprendí muchísimo. Ahora trabajo los sábados de dependienta en una tienda de ropa para ahorrar dinero.»*\n\nHow does Sofía earn money **now**?",
      options: [
        "Cleaning cages at a veterinary clinic",
        "Babysitting for neighbours on Saturday evenings",
        "Waiting tables in a local café",
        "Working as a shop assistant in a clothes shop",
      ],
      answerIndex: 3,
      hints: [
        "Distinguish *El trimestre pasado* (last term's unpaid work experience) from *Ahora* (now).",
        "What job is *dependienta en una tienda de ropa*?",
      ],
      explanation:
        "*Ahora trabajo los sábados de dependienta en una tienda de ropa* means she now works on Saturdays as a shop assistant in a clothes shop. The veterinary clinic was her work experience (*prácticas laborales*) last term.",
    },
    {
      id: "exam-r1-q09",
      topicId: "education-and-employment",
      guideRef: "careers-and-interviews",
      kind: "short",
      difficulty: "warmup",
      strategy: "Omit un/una after ser before unmodified professions",
      question:
        "Complete the sentence with the **present indicative** form of **ser** (*ella*):\n\n*Mi hermana mayor _______ abogada en Madrid y tiene un sueldo bien pagado.*\n\n(Write ONLY the single missing verb.)",
      answer: { type: "text", accept: ["es", "ella es"] },
      traps: [
        {
          spec: { type: "text", accept: ["está", "ella está"] },
          feedback: "Professions and identity always take *ser* (DOCTOR), never *estar*!",
        },
        {
          spec: { type: "text", accept: ["es una"] },
          feedback: "Never add *una* before an unmodified profession after *ser* (*es abogada*, not *es una abogada*).",
        },
      ],
      hints: [
        "Professions belong to DOCTOR (*ser*), and take no *un/una* when unmodified.",
      ],
      solution: [
        "3rd-person singular (*mi hermana mayor = ella*) of *ser* in the present indicative is **es**.",
      ],
    },

    // ---------------- AREA C: PERSONAL LIFE & RELATIONSHIPS (Q10–Q13) ----------------
    {
      id: "exam-r1-q10",
      topicId: "personal-life-relationships",
      guideRef: "family-and-descriptions",
      kind: "mcq",
      difficulty: "warmup",
      strategy: "Check reciprocal verbs and character adjectives",
      question:
        "Read Javier's description of his family:\n\n*«Me llevo fenomenal con mi madre porque siempre me apoya y puedo confiar en ella. En cambio, a veces me peleo con mi hermano menor porque es bastante terco y egoísta.»*\n\nWhy does Javier sometimes argue with his younger brother?",
      options: [
        "Because his brother is stubborn and selfish.",
        "Because his brother never keeps secrets.",
        "Because his brother is too quiet and shy.",
        "Because his brother looks just like him.",
      ],
      answerIndex: 0,
      hints: [
        "Look at the adjectives after *me peleo con mi hermano menor porque es bastante…*.",
      ],
      explanation:
        "*Terco* means 'stubborn' and *egoísta* means 'selfish'. In contrast, Javier gets along brilliantly (*me llevo fenomenal*) with his supportive mother (*me apoya*).",
    },
    {
      id: "exam-r1-q11",
      topicId: "personal-life-relationships",
      guideRef: "marriage-and-partnerships",
      kind: "mcq",
      difficulty: "core",
      strategy: "Identify nuanced attitudes towards marriage vs independence",
      question:
        "Read Elena's forum comment:\n\n*«En mi opinión, hoy en día el matrimonio ya no es imprescindible para ser feliz. Prefiero licenciarme, encontrar un empleo estable e independizarme antes de plantearme una boda.»*\n\nWhat is Elena's attitude towards marriage?",
      options: [
        "She wants to get married immediately after leaving school.",
        "She believes marriage is essential for everyone's happiness.",
        "She wants to graduate and become independent before considering a wedding.",
        "She refuses ever to live with a partner in the future.",
      ],
      answerIndex: 2,
      hints: [
        "Notice *ya no es imprescindible* ('is no longer essential') and the sequence after *Prefiero… antes de…*.",
        "What do *licenciarme* and *independizarme* mean?",
      ],
      explanation:
        "Elena says marriage is no longer essential (*ya no es imprescindible*) and prefers to graduate (*licenciarme*), find a stable job, and become independent (*independizarme*) before considering a wedding (*antes de plantearme una boda*).",
    },
    {
      id: "exam-r1-q12",
      topicId: "personal-life-relationships",
      guideRef: "childhood-memories-imperfect",
      kind: "short",
      difficulty: "core",
      strategy: "Use soler in the imperfect for 'used to'",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the childhood memory with the **imperfect** form of **soler** (*nosotros*):\n\n*Cuando éramos pequeños, _______ jugar al escondite en la calle hasta las ocho.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("soler", "imperfect", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["solemos", "nosotros solemos"] },
          feedback: "*Solemos* is present ('we usually…'). With *Cuando éramos pequeños*, use the imperfect of *soler* ('we used to…')!",
        },
      ],
      hints: [
        "*Soler* is a regular *-er* verb in the imperfect tense (no boot change in the imperfect!).",
        "Add the *nosotros* imperfect ending *-íamos* (remember the accent on the *í*!) to *sol-*.",
      ],
      solution: [
        "Drop *-er* from *soler* → *sol-* and add *-íamos* for *nosotros* in the imperfect.",
        "Answer: **solíamos**.",
      ],
    },
    {
      id: "exam-r1-q13",
      topicId: "personal-life-relationships",
      guideRef: "role-models",
      kind: "mcq",
      difficulty: "core",
      strategy: "Apply personal 'a' before a specific human direct object",
      question:
        "Choose the grammatically accurate sentence describing a role model:",
      options: [
        "Admiro mucho mi abuela porque superó muchos obstáculos.",
        "Admiro mucho a mi abuela porque superó muchos obstáculos.",
        "Admiro mucho en mi abuela porque superó muchos obstáculos.",
        "Admiro mucho por mi abuela porque superó muchos obstáculos.",
      ],
      answerIndex: 1,
      hints: [
        "In Spanish, when the direct object of a verb like *admirar*, *conocer*, *ayudar* or *visitar* is a specific person, what short word must precede them?",
        "Check the **personal *a*** rule!",
      ],
      explanation:
        "Spanish requires the **personal *a*** before a specific person acting as a direct object: *Admiro mucho **a** mi abuela*. Leaving it out (*Admiro mi abuela*) is one of the commonest Paper 2 writing slips.",
    },

    // ---------------- AREA D: THE WORLD AROUND US (Q14–Q17) ----------------
    {
      id: "exam-r1-q14",
      topicId: "world-around-us",
      guideRef: "climate-and-pollution",
      kind: "short",
      difficulty: "core",
      strategy: "Greek-origin -ma nouns take masculine 'el'",
      question:
        "Vocabulary Precision — Write the Spanish noun (INCLUDING its definite article **el** or **la**) for **'climate change'**.\n\n(Write ONLY the article + two-word Spanish noun phrase.)",
      answer: { type: "text", accept: ["el cambio climático"] },
      traps: [
        {
          spec: { type: "text", accept: ["la cambio climático", "el cambio climatico"] },
          feedback: "*Cambio* is masculine (*el cambio climático*), and *climático* needs an acute accent on the *á* (esdrújula stress rule!).",
        },
      ],
      hints: [
        "Start with masculine *el cambio* ('the change') and add the adjective *climático*.",
        "Remember the written accent on *climático*!",
      ],
      solution: [
        "'Climate change' in Spanish is **el cambio climático**.",
      ],
    },
    {
      id: "exam-r1-q15",
      topicId: "world-around-us",
      guideRef: "sustainability-and-action",
      kind: "mcq",
      difficulty: "warmup",
      strategy: "Match household eco-verbs to appliances and resources",
      question:
        "Read the school eco-poster:\n\n*«Para proteger el planeta, deberíamos desenchufar los aparatos eléctricos por la noche, reutilizar las bolsas de tela y ducharnos en vez de bañarnos para ahorrar agua.»*\n\nWhich action does the poster recommend to save electricity at night?",
      options: [
        "Installing solar panels on the school roof",
        "Taking shorter cold showers before bed",
        "Recycling plastic bottles in the yellow bin",
        "Unplugging electrical appliances at night",
      ],
      answerIndex: 3,
      hints: [
        "Look at *desenchufar los aparatos eléctricos por la noche*.",
      ],
      explanation:
        "*Desenchufar los aparatos eléctricos por la noche* means unplugging electrical appliances at night. Reusing fabric bags reduces waste, and showering instead of bathing saves water (*ahorrar agua*).",
    },
    {
      id: "exam-r1-q16",
      topicId: "world-around-us",
      guideRef: "charity-and-volunteering",
      kind: "mcq",
      difficulty: "core",
      strategy: "Track charity vocabulary: recaudar fondos vs comedor social",
      question:
        "Read Valeria's blog about volunteering:\n\n*«Todos los domingos colaboro con una ONG local en un comedor social donde servimos platos calientes a los sin techo. Además, el mes que viene organizaremos un maratón solidario para recaudar fondos.»*\n\nWhat does Valeria do every Sunday?",
      options: [
        "She runs charity marathons to raise money.",
        "She serves hot meals to homeless people at a soup kitchen.",
        "She collects second-hand clothes from neighbours.",
        "She sponsors a school in South America.",
      ],
      answerIndex: 1,
      hints: [
        "Separate *Todos los domingos* (every Sunday) from *el mes que viene* (next month).",
        "*Un comedor social* = soup kitchen; *los sin techo* = homeless people.",
      ],
      explanation:
        "Every Sunday (*Todos los domingos*), she helps at a soup kitchen (*un comedor social*) serving hot dishes to homeless people (*los sin techo*). The charity marathon to raise funds (*recaudar fondos*) takes place next month.",
    },
    {
      id: "exam-r1-q17",
      topicId: "world-around-us",
      guideRef: "digital-media-and-tech",
      kind: "mcq",
      difficulty: "core",
      strategy: "Spot balanced pros-and-cons connectives",
      question:
        "Read the extract from a teen magazine:\n\n*«Por un lado, las redes sociales nos permiten mantenernos en contacto con amigos en el extranjero al instante; no obstante, el mayor riesgo es que muchos adolescentes están enganchados a la pantalla y sufren ciberacoso.»*\n\nAccording to the text, what is a **benefit** of social media?",
      options: [
        "Instant contact with friends living abroad",
        "Preventing identity theft and fake news",
        "Helping teenagers sleep more soundly",
        "Reducing screen addiction at school",
      ],
      answerIndex: 0,
      hints: [
        "Look at the positive side introduced by *Por un lado…* before *no obstante* ('however').",
        "What does *mantenernos en contacto con amigos en el extranjero al instante* mean?",
      ],
      explanation:
        "*Mantenernos en contacto con amigos en el extranjero al instante* means keeping in touch instantly with friends abroad. Screen addiction (*enganchados a la pantalla*) and cyberbullying (*ciberacoso*) are given after *no obstante* as risks.",
    },

    // ---------------- AREA E: SOCIAL ACTIVITIES, FITNESS & HEALTH (Q18–Q21) ----------------
    {
      id: "exam-r1-q18",
      topicId: "social-fitness-health",
      guideRef: "healthy-living-and-diet",
      kind: "mcq",
      difficulty: "warmup",
      strategy: "Recognise avoid/quit structures: evitar + inf, dejar de + inf",
      question:
        "Read Carmen's fitness resolution:\n\n*«Para llevar una vida más sana, intento seguir una dieta equilibrada: he dejado de tomar bebidas azucaradas, evito la comida basura y duermo ocho horas diarias.»*\n\nWhat has Carmen **stopped** doing?",
      options: [
        "Sleeping eight hours a night",
        "Eating fruit and vegetables",
        "Drinking sugary drinks",
        "Training at the local gym",
      ],
      answerIndex: 2,
      hints: [
        "Remember the idiom *dejar de + infinitive* = 'to stop / quit doing something'.",
      ],
      explanation:
        "*He dejado de tomar bebidas azucaradas* uses *dejar de + infinitive* in the perfect tense: 'I have stopped drinking sugary drinks'.",
    },
    {
      id: "exam-r1-q19",
      topicId: "social-fitness-health",
      guideRef: "sports-and-events",
      kind: "short",
      difficulty: "core",
      strategy: "Duration idiom: llevar + time + gerund (-ando / -iendo)",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the duration idiom (*llevar + time + gerund*) using the **gerund** of **jugar**:\n\n*Mi primo lleva seis años _______ al baloncesto en el equipo regional.*\n\n(Write ONLY the single gerund word.)",
      answer: { type: "text", accept: ["jugando"] },
      traps: [
        {
          spec: { type: "text", accept: ["jugar"] },
          feedback: "After *llevar + length of time*, Spanish uses the gerund (*-ando / -iendo*), never the infinitive (*lleva seis años jugando*)!",
        },
        {
          spec: { type: "text", accept: ["juegando"] },
          feedback: "*-ar* verbs NEVER stem-change in the gerund: drop *-ar* from *jugar* and add *-ando*!",
        },
      ],
      hints: [
        "The idiom 'has been playing for X years' is *llevar + X años + gerund*.",
        "Drop *-ar* from *jugar* and add *-ando*.",
      ],
      solution: [
        "With *llevar + time expression*, Spanish requires the gerund.",
        "Regular gerund of *jugar* → **jugando**.",
      ],
    },
    {
      id: "exam-r1-q20",
      topicId: "social-fitness-health",
      guideRef: "cinema-music-reading",
      kind: "mcq",
      difficulty: "core",
      strategy: "Distinguish praise for soundtrack from criticism of plot",
      question:
        "Read Pablo's film review:\n\n*«Anoche vi una película de ciencia ficción en el cine. Aunque la banda sonora era inolvidable y los efectos especiales eran impresionantes, la trama me pareció demasiado predecible.»*\n\nWhat did Pablo criticise about the film?",
      options: [
        "The soundtrack was boring and repetitive.",
        "The special effects looked cheap.",
        "The lead actor's performance was weak.",
        "The plot seemed too predictable.",
      ],
      answerIndex: 3,
      hints: [
        "Notice the contrast marker *Aunque…* ('Although…') followed by the main clause.",
        "What does *la trama me pareció demasiado predecible* mean?",
      ],
      explanation:
        "*La trama* means 'the plot', and *demasiado predecible* means 'too predictable'. He praised both the soundtrack (*la banda sonora era inolvidable*) and the special effects (*los efectos especiales eran impresionantes*).",
    },
    {
      id: "exam-r1-q21",
      topicId: "social-fitness-health",
      guideRef: "eating-out-and-complaints",
      kind: "short",
      difficulty: "core",
      strategy: "pedir (order/ask for) vs preguntar (ask a question) + -ir sandal preterite",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the restaurant sentence with the **preterite** form of **pedir** (*él*):\n\n*Al final de la cena, mi padre _______ la cuenta al camarero.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("pedir", "preterite", "él") },
      traps: [
        {
          spec: { type: "text", accept: ["pedió", "él pedió"] },
          feedback: "*Pedir* is an *-ir* stem-changing ('sandal') verb: *e → i* in 3rd-person preterite (*él / ellos*), AND the *-ió* ending keeps its accent!",
        },
        {
          spec: { type: "text", accept: ["preguntó", "él preguntó"] },
          feedback: "*Preguntar* means to ask a question; to ask for the bill (*la cuenta*), use *pedir*!",
        },
      ],
      hints: [
        "*Pedir* is an *-ir* sandal verb (*e → i* in *él/ella* and *ellos/ellas* preterite).",
        "Add the 3rd-person singular *-ió* ending to the stem *pid-*.",
      ],
      solution: [
        "In the preterite, *-ir* stem-changer *pedir* shifts *e → i* in the 3rd person: *pid-* + *-ió* → **pidió**.",
      ],
    },

    // ---------------- IGCSE TENSE MASTERY (Q22–Q26) ----------------
    {
      id: "exam-r1-q22",
      topicId: "past-future-tenses",
      guideRef: "preterite-irregs-and-accents",
      kind: "short",
      difficulty: "core",
      strategy: "Apply -gar → -gué spelling change in yo preterite",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete with the **preterite** form of **llegar** (*yo*):\n\n*Ayer por la noche _______ a casa a las diez y media.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("llegar", "preterite", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["llegé", "yo llegé"] },
          feedback: "Verbs ending in *-gar* insert a silent *u* before *-é* in the *yo* preterite (*g → gu*) so the hard 'g' sound is kept!",
        },
        {
          spec: { type: "text", accept: ["llego", "yo llego"] },
          feedback: "*Llego* is present tense; *Ayer por la noche* requires the *yo* preterite!",
        },
      ],
      hints: [
        "Check the *-car / -gar / -zar* spelling rule in the *yo* form of the preterite.",
        "Change *g → gu* before adding *-é*.",
      ],
      solution: [
        "For *-gar* verbs in *yo* preterite, *lleg-* becomes *llegu-* + *-é* → **llegué**.",
      ],
    },
    {
      id: "exam-r1-q23",
      topicId: "past-future-tenses",
      guideRef: "imperfect-and-contrast",
      kind: "mcq",
      difficulty: "core",
      strategy: "Imperfect ongoing background + Preterite interrupting event",
      question:
        "Choose the pair of verbs that accurately completes this narrative sentence:\n\n*Mientras nosotros _______ por el centro histórico de Salamanca, _______ a nuestro profesor de historia.*",
      options: [
        "caminamos … veíamos",
        "caminábamos … vimos",
        "caminaremos … vemos",
        "hemos caminado … veíamos",
      ],
      answerIndex: 1,
      hints: [
        "*Mientras* ('while') introduces the ongoing background action (video clip in progress → imperfect).",
        "Spotting the teacher is a single completed event that interrupts the walk (camera snapshot → preterite).",
      ],
      explanation:
        "*Mientras caminábamos* uses the imperfect for the ongoing walk in progress, and *vimos* uses the preterite for the sudden, single event of seeing the teacher.",
    },
    {
      id: "exam-r1-q24",
      topicId: "past-future-tenses",
      guideRef: "perfect-and-pluperfect",
      kind: "short",
      difficulty: "core",
      strategy: "haber (present) + irregular past participle",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete with the **perfect tense** (*pretérito perfecto*) of **hacer** (*yo*):\n\n*Esta mañana ya _______ todos mis deberes de español.*\n\n(Write ONLY the two-word auxiliary + past participle verb form.)",
      answer: { type: "text", accept: acceptedForms("hacer", "perfect", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["he hacido", "yo he hacido"] },
          feedback: "*Hacer* has an irregular past participle — never *hacido*!",
        },
        {
          spec: { type: "text", accept: ["tengo hecho"] },
          feedback: "The Spanish perfect tense ALWAYS uses *haber* (*he, has, ha, hemos, habéis, han*), never *tener*!",
        },
      ],
      hints: [
        "Combine the *yo* present of *haber* (*he*) with the irregular past participle of *hacer*.",
        "Remember: *hacer* → *hecho*!",
      ],
      solution: [
        "Auxiliary *haber* (*yo*) = *he*; irregular past participle of *hacer* = *hecho*.",
        "Answer: **he hecho**.",
      ],
    },
    {
      id: "exam-r1-q25",
      topicId: "past-future-tenses",
      guideRef: "simple-future-and-conditional",
      kind: "short",
      difficulty: "core",
      strategy: "Use the irregular future stem tendr- + accented ending",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete with the **simple future** form of **tener** (*nosotros*):\n\n*En el futuro _______ coches eléctricos más baratos.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("tener", "future", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["teneremos", "nosotros teneremos"] },
          feedback: "*Tener* is one of the 12 irregular future/conditional verbs: its stem is *tendr-*, not *tener-*!",
        },
        {
          spec: { type: "text", accept: ["tendríamos", "nosotros tendríamos"] },
          feedback: "*Tendríamos* is conditional ('would have'); *En el futuro* here asks for the simple future ('will have')!",
        },
      ],
      hints: [
        "Recall the irregular future stem of *tener*: *tendr-*.",
        "Add the *nosotros* simple future ending *-emos* (the only future ending WITHOUT an accent!).",
      ],
      solution: [
        "Irregular future stem *tendr-* + *nosotros* ending *-emos* → **tendremos**.",
      ],
    },
    {
      id: "exam-r1-q26",
      topicId: "past-future-tenses",
      guideRef: "grade9-verbal-idioms",
      kind: "mcq",
      difficulty: "core",
      strategy: "Distinguish acabar de + inf ('have just') from volver a + inf ('do again')",
      question:
        "Read the sentence:\n\n*Mi mejor amiga acaba de aprobar el examen de conducir, así que nunca volverá a perder el autobús.*\n\nWhat is the exact meaning of the two underlined-style verbal idioms here?",
      options: [
        "She is about to pass her driving test, so she keeps missing the bus.",
        "She has just passed her driving test, so she will never miss the bus again.",
        "She finally passed her driving test, so she used to miss the bus.",
        "She stopped taking her driving test, so she refuses to catch the bus.",
      ],
      answerIndex: 1,
      hints: [
        "*Acabar de + infinitive* in the present tense means 'to have just done something'.",
        "*Volver a + infinitive* means 'to do something again' (with *nunca*, 'never … again').",
      ],
      explanation:
        "*Acaba de aprobar* = 'she has just passed'; *nunca volverá a perder* = 'she will never miss … again'. Both verbal idioms are top-band Edexcel 4SP0 structures.",
    },

    // ---------------- GRADE-9 SUBJUNCTIVE & PRECISION (Q27–Q30) ----------------
    {
      id: "exam-r1-q27",
      topicId: "subjunctive-grade9",
      guideRef: "forming-present-subjunctive",
      kind: "short",
      difficulty: "core",
      strategy: "DISHES irregular present subjunctive",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete with the **present subjunctive** form of **ir** (*tú*):\n\n*Te recomiendo que _______ al médico si te duele la garganta.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("ir", "subjunctive", "tú") },
      traps: [
        {
          spec: { type: "text", accept: ["vas", "tú vas"] },
          feedback: "*Vas* is present indicative! *Te recomiendo que…* is a WEIRDO recommendation trigger requiring the present subjunctive.",
        },
      ],
      hints: [
        "*Ir* is one of the 6 DISHES irregular verbs in the present subjunctive (*yo vaya*).",
        "Write the *tú* form of *vaya*.",
      ],
      solution: [
        "*Ir* has irregular present subjunctive stem *vay-*: *vaya, vayas, vaya, vayamos, vayáis, vayan*.",
        "For *tú*, the answer is **vayas**.",
      ],
    },
    {
      id: "exam-r1-q28",
      topicId: "subjunctive-grade9",
      guideRef: "weirdo-and-impersonal",
      kind: "mcq",
      difficulty: "core",
      strategy: "Affirmative creo que (indicative) vs negative no creo que (subjunctive)",
      question:
        "Compare these two opinion openers and choose the ONLY pair where BOTH verbs are in the correct mood:\n\n1. *Creo que el uniforme escolar _______ útil.*\n2. *No creo que el uniforme escolar _______ cómodo.*",
      options: [
        "1. sea  /  2. sea",
        "1. es  /  2. es",
        "1. sea  /  2. es",
        "1. es  /  2. sea",
      ],
      answerIndex: 3,
      hints: [
        "Affirmative *Creo que / Pienso que* declares certainty/belief → indicative!",
        "Negated *No creo que / No pienso que* expresses doubt/denial (WEIRDO) → present subjunctive!",
      ],
      explanation:
        "Affirmative *Creo que* takes the **indicative** (*es*), whereas negated *No creo que* triggers the **present subjunctive** (*sea*). Writing *Creo que sea* is a classic hyper-correction error.",
    },
    {
      id: "exam-r1-q29",
      topicId: "subjunctive-grade9",
      guideRef: "cuando-and-time-clauses",
      kind: "short",
      difficulty: "challenge",
      strategy: "Future cuando ALWAYS triggers the present subjunctive",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the future time clause with the **present subjunctive** of **tener** (*yo*):\n\n*Cuando _______ dieciocho años, me tomaré un año sabático para viajar por Perú.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("tener", "subjunctive", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["tengo", "yo tengo"] },
          feedback: "*Tengo* is present indicative (used only for habitual facts like *Cuando tengo hambre, como*). Because *me tomaré* refers to a future event not yet experienced, *cuando* requires the present subjunctive!",
        },
        {
          spec: { type: "text", accept: ["tendré", "yo tendré"] },
          feedback: "NEVER put the simple future (*tendré*) immediately after *cuando* in a time clause — Spanish uses the present subjunctive!",
        },
      ],
      hints: [
        "Look at the main verb *me tomaré* (future): *Cuando* referring to a future action MUST take the present subjunctive.",
        "Take present *yo* (*tengo*), drop *-o*, and add the opposite *-er* subjunctive ending *-a*.",
      ],
      solution: [
        "Future *cuando* triggers the present subjunctive.",
        "From *yo tengo* → drop *-o* → *teng-* + *-a* → **tenga**.",
      ],
    },
    {
      id: "exam-r1-q30",
      topicId: "subjunctive-grade9",
      guideRef: "pronouns-por-para-ser-estar",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Replace le/les with se before lo/la/los/las + check por vs para",
      question:
        "Which option accurately replaces both objects in *«Compré este regalo **para mi madre** y **le** di **el regalo** ayer»* without any pronoun clash?",
      options: [
        "Compré este regalo para mi madre y se lo di ayer.",
        "Compré este regalo por mi madre y le lo di ayer.",
        "Compré este regalo para mi madre y le lo di ayer.",
        "Compré este regalo por mi madre y se la di ayer.",
      ],
      answerIndex: 0,
      hints: [
        "First check the recipient preposition: a gift intended FOR a recipient uses *para mi madre*.",
        "Second check double object pronouns: *le* + *lo* (*el regalo*, masculine singular) can NEVER stay *le lo*!",
      ],
      explanation:
        "A recipient takes **para** (*para mi madre*), and indirect object *le* changes to **se** before direct object *lo* (*el regalo*): **se lo di ayer**. *Le lo* is ungrammatical in Spanish.",
    },
  ],
};
