import type { TopicPractice } from "../../types.ts";
import { acceptedForms } from "../../spanish/verbs.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "social-fitness-health-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "healthy-living-and-diet",
      question: "Which Spanish phrase means **'junk food'**?",
      options: [
        "la comida casera",
        "la comida basura",
        "la dieta equilibrada",
        "la fruta fresca",
      ],
      answerIndex: 1,
      hints: ["*La basura* literally means 'rubbish / trash'."],
      explanation:
        "**La comida basura** means **junk food**; *la comida casera* means 'homemade food'.",
    },
    {
      id: "social-fitness-health-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "healthy-living-and-diet",
      question:
        "Complete the sentence with the accurate non-finite form of **comer**: *Para llevar una vida sana, intento evitar _______ demasiadas grasas.* (Write ONLY the missing Spanish verb.)",
      answer: {
        type: "text",
        accept: ["comer"],
        display: "comer",
      },
      traps: [
        {
          spec: { type: "text", accept: ["comiendo"] },
          feedback:
            "English says 'avoid eating', but Spanish NEVER uses the gerund (*-ndo*) after *evitar* — use the infinitive **comer**!",
        },
      ],
      hints: [
        "Look at the verb right before the gap: *evitar* ('to avoid').",
        "After *evitar*, Spanish requires the infinitive (*-ar/-er/-ir*), never *-iendo*.",
      ],
      solution: [
        "After control and preference verbs such as *evitar, intentar, querer, me gusta*, Spanish uses the **infinitive**.",
        "Therefore the missing form of *comer* is **comer**.",
      ],
      commonError: "Writing *comiendo* by translating English 'eating' word-for-word.",
    },
    {
      id: "social-fitness-health-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "smoking-alcohol-stress",
      question:
        "Complete the pharmacy complaint with the **present tense** form of **doler**: *Doctor, desde ayer me _______ mucho las muelas.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["duelen"],
        display: "duelen",
      },
      traps: [
        {
          spec: { type: "text", accept: ["duele"] },
          feedback:
            "Look to the right of the gap: *las muelas* (back teeth/molars) is plural, so *doler* needs **-n**!",
        },
        {
          spec: { type: "text", accept: ["duelo", "dolen"] },
          feedback:
            "*Doler (o→ue)* agrees with *las muelas* (3rd person plural → **duelen**), not with *yo*!",
        },
      ],
      hints: [
        "*Doler (o→ue)* works like *gustar*: look to the noun AFTER the gap to choose singular vs plural.",
        "*Las muelas* is plural, so pick the 3rd-person plural *o→ue* form.",
      ],
      solution: [
        "The grammatical subject is *las muelas* (plural).",
        "*Doler* stem-changes *o → ue* in the present tense, giving **duelen**.",
      ],
    },
    {
      id: "social-fitness-health-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "smoking-alcohol-stress",
      question:
        "Which sentence accurately says **'My older sister quit vaping last month'**?",
      options: [
        "Mi hermana mayor dejó vapeando el mes pasado.",
        "Mi hermana mayor paró a vapear el mes pasado.",
        "Mi hermana mayor dejó de vapear el mes pasado.",
        "Mi hermana mayor salió de vapeando el mes pasado.",
      ],
      answerIndex: 2,
      hints: [
        "Recall the verbal idiom for quitting/stopping a habit: *dejar + ? + infinitive*.",
        "Never follow *dejar de* with a gerund (*-ando*).",
      ],
      explanation:
        "**Dejar de + infinitive** means 'to stop / quit doing something': **dejó de vapear**.",
    },
    {
      id: "social-fitness-health-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "sports-and-events",
      question:
        "Complete the Paper 2 Q3c gap with the **preterite** form of **jugar** (*yo*): *El domingo pasado _______ al tenis con mi primo.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("jugar", "preterite", "yo"),
        display: "jugué",
      },
      traps: [
        {
          spec: { type: "text", accept: ["jugé"] },
          feedback:
            "Mind the *-gar* spelling rule in *yo* preterite: *g → gu* before *-é* (**jugué**)!",
        },
        {
          spec: { type: "text", accept: ["juego", "yo juego"] },
          feedback:
            "*El domingo pasado* is a completed past time marker — use the preterite **jugué**, not present *juego*.",
        },
      ],
      hints: [
        "*El domingo pasado* signals the preterite tense, and the subject is *yo*.",
        "Verbs ending in *-gar* insert **u** before *-é* to keep the hard 'g' sound.",
      ],
      solution: [
        "*Jugar* is a *-gar* verb, so in the *yo* preterite *g → gu* before *-é*.",
        "Add the acute accent on the final *-é*: **jugué**.",
      ],
    },
    {
      id: "social-fitness-health-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "sports-and-events",
      question:
        "Complete the duration sentence: *Nosotros _______ cuatro años entrenando en este club de atletismo.*",
      options: ["hacemos", "estamos", "somos", "llevamos"],
      answerIndex: 3,
      hints: [
        "Look at the pattern: *[verb] + cuatro años + entrenando (gerund)*.",
        "Which verb ('to carry/wear') combines with *time + gerund* to mean 'have been doing for...'?",
      ],
      explanation:
        "**Llevamos** completes **llevar + time + gerund** (*llevamos cuatro años entrenando* = 'we have been training for four years').",
    },
    {
      id: "social-fitness-health-quiz-q07",
      kind: "short",
      difficulty: "warmup",
      guideRef: "cinema-music-reading",
      question:
        "Write the Spanish feminine noun (including definite article **la**) for **'the plot'** (of a film or novel).",
      answer: {
        type: "text",
        accept: ["la trama"],
        display: "la trama",
      },
      hints: [
        "It is a 5-letter feminine noun starting with **tr-**: *la tr___*.",
      ],
      solution: [
        "In Spanish cinema and book reviews, 'the plot' is **la trama**.",
      ],
        commonError: "Note the gender clue: *el argumento* is masculine, whereas the feminine synonym requested here is *la trama*.",
    },
    {
      id: "social-fitness-health-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "cinema-music-reading",
      question:
        "Read Sofia's review: *«La banda sonora de la película fue inolvidable, aunque la historia era un poco predecible.»* What did Sofia praise?",
      options: [
        "The soundtrack was unforgettable.",
        "The special effects were realistic.",
        "The storyline was completely unpredictable.",
        "The lead actor's performance was moving.",
      ],
      answerIndex: 0,
      hints: [
        "*La banda sonora* = the soundtrack.",
        "*Inolvidable* comes from *olvidar* (to forget) + *in-* (un-).",
      ],
      explanation:
        "*La banda sonora … fue inolvidable* means **the soundtrack was unforgettable**.",
    },
    {
      id: "social-fitness-health-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "eating-out-and-complaints",
      question:
        "Complete the restaurant sentence with the **preterite** form of **pedir** (*él*): *De primer plato, mi hermano _______ la sopa de marisco.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("pedir", "preterite", "él"),
        display: "pidió",
      },
      traps: [
        {
          spec: { type: "text", accept: ["pedió"] },
          feedback:
            "*Pedir* is an *-ir* sandal verb in the preterite: *e → i* in the 3rd person (**pidió**)!",
        },
        {
          spec: { type: "text", accept: ["preguntó"] },
          feedback:
            "Use **pedir** (→ **pidió**) to order food, never *preguntar*!",
        },
      ],
      hints: [
        "*Pedir* is an *-ir* stem-changing verb (*e→i*), so its 3rd-person preterite stem changes inside the 'sandal'.",
        "Don't forget the written accent on the final **-ó**!",
      ],
      solution: [
        "In the preterite, *-ir* stem-changers shift *e → i* in *él/ella/usted* and *ellos/ellas/ustedes*.",
        "Therefore *pedir (él)* becomes **pidió**.",
      ],
    },
    {
      id: "social-fitness-health-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "eating-out-and-complaints",
      question:
        "Choose the accurate verb for this restaurant complaint: *Perdone, camarero, no puedo beber en este vaso porque _______ sucio.*",
      options: ["es", "está", "tiene", "hay"],
      answerIndex: 1,
      hints: [
        "Being dirty (*sucio*) or clean (*limpio*) right now is a **temporary state/condition**.",
        "Choose between *ser* and *estar* (PLACE — Condition).",
      ],
      explanation:
        "**Está** is required because *sucio* describes the temporary state of the glass right now (*el vaso está sucio*).",
    },
  ],

  papers: [
    {
      id: "social-fitness-health-p1",
      title: "Area E Practice Paper 1 — Lifestyle, Addictions & Sports Grammar (4SP0 Style)",
      questions: [
        {
          id: "social-fitness-health-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "healthy-living-and-diet",
          question:
            "Write the Spanish noun (including definite article **el**) for **'sugar'**.",
          answer: {
            type: "text",
            accept: ["el azúcar"],
            display: "el azúcar",
          },
          traps: [
            {
              spec: { type: "text", accept: ["la azúcar"] },
              feedback:
                "Watch the article! Standard IGCSE Spanish uses masculine **el azúcar** (with an accent on the **ú**).",
            },
          ],
          hints: [
            "Remember the written accent on the **ú** (*az_car*) because it ends in *-r* yet is stressed on the second-to-last syllable!",
          ],
          solution: [
            "Because words ending in *-r* are normally stressed on the last syllable, **el azúcar** needs a written accent on **ú**.",
          ],
        },
        {
          id: "social-fitness-health-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "healthy-living-and-diet",
          question:
            "Complete the Paper 2 Q3c gap with the **present tense** form of **soler** (*yo*): *Entre semana _______ desayunar fruta fresca y yogur natural.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("soler", "present", "yo"),
            display: "suelo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["solo", "yo solo"] },
              feedback:
                "*Soler* stem-changes *o → ue* in the boot! *Solo* means 'alone / only' — write **suelo**.",
            },
          ],
          hints: [
            "*Soler* ('to usually do') is an *o → ue* boot verb in the present indicative.",
            "Conjugate for *yo* (*-o* ending with the *ue* stem).",
          ],
          solution: [
            "Apply the *o → ue* boot change to *soler*: stem *suel-* + *-o* → **suelo**.",
          ],
          commonError: "Forgetting the *o → ue* stem change and writing *solo*.",
        },
        {
          id: "social-fitness-health-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "healthy-living-and-diet",
          question:
            "Complete the sentence with the **present tense** form of **acostarse** (*nosotros*): *Los domingos _______ temprano para descansar bien.* (Write ONLY the missing reflexive verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("acostarse", "present", "nosotros"),
            display: "nos acostamos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["nos acuestamos", "acuestamos"] },
              feedback:
                "Remember the boot rule: *nosotros* stands OUTSIDE the boot, so *o* does NOT change to *ue* (**nos acostamos**)!",
            },
            {
              spec: { type: "text", accept: ["acostamos"] },
              feedback:
                "Don't forget the *nosotros* reflexive pronoun **nos** in front of *acostamos*!",
            },
          ],
          hints: [
            "Include the *nosotros* reflexive pronoun (*nos*) before the verb.",
            "Does an *o → ue* boot verb change stem in *nosotros*?",
          ],
          solution: [
            "*Acostarse* requires the *nosotros* reflexive pronoun **nos**.",
            "Because *nosotros* is outside the boot, the stem stays *acost-*: **nos acostamos**.",
          ],
        },
        {
          id: "social-fitness-health-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "healthy-living-and-diet",
          question:
            "Read Dr Martín's nutrition column:\n\n*«Hoy en día muchos adolescentes se saltan el desayuno por falta de tiempo y luego pican chocolatinas a media mañana. Sin embargo, desayunar cereales integrales y fruta mejora la concentración en el instituto.»*\n\nAccording to Dr Martín, why do many teenagers skip breakfast?",
          options: [
            "They want to lose weight quickly.",
            "They lack time in the morning.",
            "They prefer eating fruit at midday.",
            "School canteens open too late.",
          ],
          answerIndex: 1,
          hints: [
            "Find *se saltan el desayuno* ('skip breakfast') in the first sentence.",
            "What does *por falta de tiempo* mean?",
          ],
          explanation:
            "*Se saltan el desayuno por falta de tiempo* explicitly states they skip breakfast **due to a lack of time**.",
        },
        {
          id: "social-fitness-health-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "smoking-alcohol-stress",
          question:
            "Complete the patient's sentence with the **present tense** form of **doler**: *Cuando paso muchas horas frente al ordenador, me _______ la espalda.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["duele"],
            display: "duele",
          },
          traps: [
            {
              spec: { type: "text", accept: ["duelen"] },
              feedback:
                "*La espalda* ('my back') is singular, so *doler* takes singular **duele**!",
            },
          ],
          hints: [
            "Check the noun right after the gap: *la espalda* (singular).",
            "Use the 3rd-person singular *o → ue* present form of *doler*.",
          ],
          solution: [
            "Because *la espalda* is 3rd person singular, *doler (o→ue)* conjugates as **duele**.",
          ],
        },
        {
          id: "social-fitness-health-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "smoking-alcohol-stress",
          question:
            "Complete the anti-smoking slogan with the **two missing Spanish words** meaning **'stopped / quit'** (*él*, preterite of **dejar de**): *Mi abuelo _______ _______ fumar hace diez años y ahora se siente genial.* (Write ONLY the two missing words.)",
          answer: {
            type: "text",
            accept: ["dejó de", "él dejó de"],
            display: "dejó de",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dejo de"] },
              feedback:
                "Watch the accent! Without the accent, *dejo* means 'I quit' (present) — *mi abuelo* (*él* preterite) needs **dejó de**!",
            },
            {
              spec: { type: "text", accept: ["dejó"] },
              feedback:
                "Remember the preposition **de** in **dejar de + infinitive** ('to quit doing')!",
            },
          ],
          hints: [
            "Use the 3rd-person singular preterite of *dejar* (with an acute accent on *-ó*).",
            "Follow it with the mandatory preposition **de** before *fumar*.",
          ],
          solution: [
            "'To quit doing something' is **dejar de + infinitive**.",
            "In the *él* preterite (*hace diez años*), *dejar* becomes **dejó**, giving **dejó de**.",
          ],
        },
        {
          id: "social-fitness-health-p1-q07",
          kind: "mcq",
          difficulty: "core",
          guideRef: "smoking-alcohol-stress",
          question:
            "Read the youth survey extract:\n\n*«El 68 % de los encuestados opina que vapear es tan peligroso como el tabaco tradicional porque contiene nicotina, aunque muchos jóvenes creen erróneamente que es inofensivo por sus sabores dulces.»*\n\nWhy do many young people mistakenly think vaping is harmless (*inofensivo*)?",
          options: [
            "Because it contains zero nicotine.",
            "Because doctors recommend it to relieve stress.",
            "Because of its sweet flavours.",
            "Because 68% of adults vape regularly.",
          ],
          answerIndex: 2,
          hints: [
            "Look at the clause after *creen erróneamente que es inofensivo...*.",
            "Translate *por sus sabores dulces*.",
          ],
          explanation:
            "*Por sus sabores dulces* means **because of its sweet flavours**.",
        },
        {
          id: "social-fitness-health-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "sports-and-events",
          question:
            "Complete the Paper 2 Q3c gap with the **present tense** form of **hacer** (*yo*): *Para aliviar el estrés, _______ natación y artes marciales cada viernes.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("hacer", "present", "yo"),
            display: "hago",
          },
          traps: [
            {
              spec: { type: "text", accept: ["haco", "yo haco"] },
              feedback:
                "*Hacer* is a classic **yo-go** verb in the present tense: **hago**!",
            },
          ],
          hints: [
            "*Hacer* has an irregular *-go* ending in the *yo* present tense.",
            "Drop *-cer* and add *-go*: `ha__`.",
          ],
          solution: [
            "The *yo* present indicative of *hacer* is the irregular yo-go form **hago**.",
          ],
        },
        {
          id: "social-fitness-health-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "sports-and-events",
          question:
            "Complete the ongoing-duration sentence with the **two-word Spanish time expression** meaning **'for / since ... ago'**: *Practico el ciclismo _______ _______ seis años.* (Write ONLY the two missing Spanish words.)",
          answer: {
            type: "text",
            accept: ["desde hace"],
            display: "desde hace",
          },
          traps: [
            {
              spec: { type: "text", accept: ["por", "durante"] },
              feedback:
                "With a present-tense verb for an action still continuing today, Spanish uses **desde hace**, not *por*!",
            },
          ],
          hints: [
            "Notice the verb *practico* is in the **present tense** because the speaker still cycles today.",
            "Combine *desde* ('since') + *hace* ('it makes').",
          ],
          solution: [
            "With a present-tense verb expressing how long an ongoing habit has lasted, Spanish uses **desde hace** (*Practico el ciclismo desde hace seis años*).",
          ],
        },
        {
          id: "social-fitness-health-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "sports-and-events",
          question:
            "Complete the sentence with the **gerund** (*-ando/-iendo*) of **dormir**: *Últimamente mi hermano está _______ menos de seis horas por los exámenes.* (Write ONLY the missing verb form.)",
          answer: {
            type: "text",
            accept: ["durmiendo"],
            display: "durmiendo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["dormiendo"] },
              feedback:
                "Mind the *-ir* stem-changing gerund rule! *Dormir* shifts **o → u** in the gerund (**durmiendo**), just like in *él durmió*!",
            },
          ],
          hints: [
            "*Dormir* is an *-ir* stem-changing verb (*o→ue*).",
            "In the gerund (and 3rd-person preterite), *-ir* stem-changers shift *o → u*!",
          ],
          solution: [
            "Stem-changing *-ir* verbs change *o → u* (or *e → i*) in the gerund: *dormir →* **durmiendo**.",
          ],
          commonError: "Writing regularised *dormiendo* instead of **durmiendo**.",
        },
        {
          id: "social-fitness-health-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "sports-and-events",
          question:
            "Complete the Paper 2 Q3c gap with the **preterite** form of **practicar** (*yo*): *Durante el campamento de verano _______ piragüismo por primera vez.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("practicar", "preterite", "yo"),
            display: "practiqué",
          },
          traps: [
            {
              spec: { type: "text", accept: ["practicé"] },
              feedback:
                "Verbs ending in *-car* must change **c → qu** before *-é* in the *yo* preterite (**practiqué**)!",
            },
          ],
          hints: [
            "Identify the tense (*por primera vez* during a completed summer camp → preterite) and person (*yo*).",
            "Apply the *-car → -qué* spelling shift.",
          ],
          solution: [
            "In the *yo* preterite, *-car* verbs change *c → qu* before *-é*: *practicar →* **practiqué**.",
          ],
        },
        {
          id: "social-fitness-health-p1-q12",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sports-and-events",
          question:
            "Read the newspaper debate on hosting a major tournament:\n\n*«Organizar el torneo internacional creó miles de empleos y mejoró el transporte público de la ciudad; no obstante, los vecinos se quejaron del ruido nocturno y de la subida de los precios.»*\n\nWhich **negative** impact did local residents complain about?",
          options: [
            "Public transport broke down during the final.",
            "Thousands of workers lost their jobs afterwards.",
            "Late-night noise and rising prices.",
            "Local sports centres were closed to residents.",
          ],
          answerIndex: 2,
          hints: [
            "Look after the contrast connective *no obstante* ('nevertheless / however').",
            "*Se quejaron del ruido nocturno y de la subida de los precios*.",
          ],
          explanation:
            "Residents complained about **late-night noise (*el ruido nocturno*) and rising prices (*la subida de los precios*)**.",
        },
        {
          id: "social-fitness-health-p1-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "healthy-living-and-diet",
          question:
            "Complete the Paper 2 Q3c gap with the **present subjunctive** form of **dormir** (*tú*): *Es imprescindible que _______ ocho horas antes del examen.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("dormir", "subjunctive", "tú"),
            display: "duermas",
          },
          traps: [
            {
              spec: { type: "text", accept: ["duermes", "tú duermes"] },
              feedback:
                "*Es imprescindible que...* is a WEIRDO impersonal trigger — swap indicative *-es* for opposite subjunctive ending **-as** (**duermas**)!",
            },
          ],
          hints: [
            "*Es imprescindible que* triggers the present subjunctive.",
            "*Dormir* stem-changes *o → ue* in the *tú* boot and takes opposite *-ir* subjunctive ending *-as*.",
          ],
          solution: [
            "After *Es imprescindible que*, conjugate *dormir* in the *tú* present subjunctive: boot stem *duerm-* + opposite ending *-as* → **duermas**.",
          ],
        },
        {
          id: "social-fitness-health-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "healthy-living-and-diet",
          marks: 4,
          question:
            "Edexcel 4SP0 Paper 2 Q6 Style (Short Writing — 4 marks):\nWrite 4–5 connected sentences **in Spanish** about healthy living for your school magazine, addressing ALL four bullet points:\n1. What you usually eat or drink to stay healthy.\n2. One sport or exercise you do (using an ongoing duration idiom if possible).\n3. One unhealthy habit young people should avoid (and why).\n4. What you will do next weekend to relax and recharge.",
          modelAnswer:
            "Para mantenerme en forma, suelo seguir una dieta equilibrada con mucha verdura, fruta fresca y agua mineral. Además, llevo cuatro años haciendo natación en el polideportivo municipal porque me relaja muchísimo. En mi opinión, es imprescindible que los adolescentes eviten fumar o tomar comida basura, ya que es muy perjudicial para los pulmones y el corazón. El próximo fin de semana voy a descansar y pasear por el parque con mis amigos para desconectar y recargar las pilas.",
          markScheme: [
            {
              point: "States healthy food/drink habits in Spanish (e.g. dieta equilibrada, verdura, fruta, agua, sano)",
              keywords: ["equilibrada", "verdura", "verduras", "fruta", "agua", "sana", "saludable"],
            },
            {
              point: "Mentions a sport/exercise routine or duration idiom (e.g. llevo... haciendo/jugando, desde hace, natación, fútbol, tenis, entreno, corro)",
              keywords: ["llevo", "desde hace", "natacion", "futbol", "tenis", "baloncesto", "corro", "entreno", "deporte"],
            },
            {
              point: "Identifies an unhealthy habit to avoid + reason (e.g. fumar, vapear, alcohol, comida basura, grasas, perjudicial, enfermedades)",
              keywords: ["fumar", "vapear", "alcohol", "basura", "grasas", "azucar", "perjudicial", "enfermedades"],
            },
            {
              point: "Uses a future reference to explain next weekend's relaxation plan (e.g. voy a, descansaré, dormiré, pasear, relajarme, desconectar, pilas)",
              keywords: ["voy a", "descansare", "dormire", "relajarme", "desconectar", "pilas", "proximo"],
            },
          ],
          hints: [
            "Open Bullet 1 with *Para mantenerme en forma, suelo comer...* (infinitive after *para* and *suelo*!).",
            "Use *Llevo [X] años jugando al / haciendo...* for Bullet 2, and *evitar + infinitive* + *perjudicial para la salud* for Bullet 3.",
            "Use *El próximo fin de semana voy a...* or simple future (*descansaré*) for Bullet 4.",
          ],
          commonError:
            "Forgetting the future tense in Bullet 4 or writing *evitar fumando* instead of *evitar fumar*.",
        },
        {
          id: "social-fitness-health-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "smoking-alcohol-stress",
          marks: 4,
          question:
            "Edexcel 4SP0 Paper 3 Speaking Follow-Up (Written Practice — 4 marks):\nRespond **in Spanish** to your examiner's four-part prompt on teenage health & exam stress:\n- Why some teenagers start vaping or drinking alcohol.\n- A specific health consequence of tobacco or alcohol.\n- One past occasion when you felt exhausted or unwell during exams.\n- Subjunctive advice you would give a friend to manage academic stress.",
          modelAnswer:
            "Muchos jóvenes empiezan a beber o a probar cigarrillos electrónicos por la presión del grupo y la curiosidad. Sin embargo, el tabaco es peligrosísimo porque daña los pulmones y crea una adicción muy fuerte. El trimestre pasado estuve completamente agotada y me dolía muchísimo la cabeza porque dormía apenas cinco horas. Por eso, aconsejo a mi mejor amigo que duerma ocho horas diarias y que haga ejercicio al aire libre.",
          markScheme: [
            {
              point: "Explains why teenagers start (e.g. presión del grupo, curiosidad, amigos, parecer mayores)",
              keywords: ["presion", "curiosidad", "influencia", "grupo", "popular"],
            },
            {
              point: "States a concrete health harm (e.g. pulmones, hígado, adicción, enfermedades, perjudicial, cáncer)",
              keywords: ["pulmones", "higado", "adiccion", "enfermedades", "perjudicial", "daña"],
            },
            {
              point: "Narrates a past occasion of feeling unwell/exhausted using preterite/imperfect (e.g. estuve, tenía, dolía, dolió, agotado/a, fiebre)",
              keywords: ["estuve", "estaba", "dolia", "dolio", "agotada", "agotado", "fiebre", "pasado"],
            },
            {
              point: "Gives subjunctive health advice (e.g. aconsejo que / recomiendo que / es importante que + duerma/duermas, haga/hagas, descanse)",
              keywords: ["aconsejo que", "recomiendo que", "importante que", "imprescindible que", "duerma", "duermas", "descanse"],
            },
          ],
          hints: [
            "Use *la presión del grupo* for peer pressure and *dañar los pulmones / el hígado* for health damage.",
            "Remember *me dolía la cabeza* (imperfect) for an ongoing past symptom during exam week.",
            "Trigger the subjunctive cleanly with *Aconsejo que duerma / descanse...*.",
          ],
          commonError:
            "Using present indicative (*duerme*) instead of present subjunctive (*duerma*) after *aconsejo que*.",
        },
      ],
    },

    {
      id: "social-fitness-health-p2",
      title: "Area E Practice Paper 2 — Cinema, Music, Reading & Eating Out (4SP0 Style)",
      questions: [
        {
          id: "social-fitness-health-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "cinema-music-reading",
          question:
            "Write the Spanish noun phrase (including plural definite article **los**) for **'the special effects'**.",
          answer: {
            type: "text",
            accept: ["los efectos especiales"],
            display: "los efectos especiales",
          },
          hints: [
            "Start with masculine plural **los efectos** and make the adjective *especial* plural (*-es*).",
          ],
          solution: [
            "Adjectives ending in a consonant (*especial*) add **-es** in the plural: **los efectos especiales**.",
          ],
        commonError: "Make both noun and adjective masculine plural: *los efectos especiales* (not *especial*).",
        },
        {
          id: "social-fitness-health-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "cinema-music-reading",
          question:
            "Complete the Paper 2 Q3c gap with the **preterite** form of **ver** (*nosotros*): *El viernes por la noche _______ una comedia romántica en el cine.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("ver", "preterite", "nosotros"),
            display: "vimos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["veímos", "vemos"] },
              feedback:
                "*Vemos* is present tense, and *ver* drops the *e* in the preterite: *vi, viste, vio, **vimos**, visteis, vieron*!",
            },
          ],
          hints: [
            "*El viernes por la noche* signals the preterite tense, and the subject is *nosotros*.",
            "Recall the preterite stem of *ver* (*v-* + *-imos*).",
          ],
          solution: [
            "In the preterite, *ver* uses regular *-er/-ir* endings on stem *v-* (with no accents on *vi/vio*): *nosotros* → **vimos**.",
          ],
        },
        {
          id: "social-fitness-health-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "cinema-music-reading",
          question:
            "Complete the Paper 2 Q3c gap with the **preterite** form of **leer** (*ella*): *Mi prima _______ la novela entera en dos días.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("leer", "preterite", "él"),
            display: "leyó",
          },
          traps: [
            {
              spec: { type: "text", accept: ["leió", "leyo"] },
              feedback:
                "Between two vowels (*le + ió*), unstressed *i* turns into **y**, and the final **-ó** keeps its acute accent: **leyó**!",
            },
          ],
          hints: [
            "Vowel-stem *-er/-ir* verbs (*leer, oír, construir*) change *i → y* in 3rd-person preterite.",
            "Include the written accent on the final **-ó**.",
          ],
          solution: [
            "In the 3rd-person singular preterite of *leer*, *le + ió* becomes **leyó**.",
          ],
        },
        {
          id: "social-fitness-health-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "cinema-music-reading",
          question:
            "Complete the concert sentence with the **preterite** form of **oír** (*ellos*): *Desde la última fila, los aficionados apenas _______ al cantante.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("oír", "preterite", "ellos"),
            display: "oyeron",
          },
          traps: [
            {
              spec: { type: "text", accept: ["oieron", "oyieron"] },
              feedback:
                "*Oír* changes unstressed *i → y* in 3rd-person preterite: **oyeron** (not *oieron* or *oyieron*)!",
            },
          ],
          hints: [
            "Just like *leer → leyeron*, *oír* shifts *i → y* in 3rd-person plural preterite.",
            "Note that *oyeron* has NO written accent (unlike *oímos*).",
          ],
          solution: [
            "The 3rd-person plural preterite of *oír* replaces *-ieron* with *-yeron*: **oyeron**.",
          ],
        },
        {
          id: "social-fitness-health-p2-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "cinema-music-reading",
          question:
            "Read Mateo's blog post about reading:\n\n*«Antes descargaba libros electrónicos en mi tableta porque pesaban menos en la mochila, pero desde el verano pasado prefiero ir a la biblioteca del barrio y sacar novelas en papel: así no me distraigo con las notificaciones.»*\n\nWhy did Mateo switch back to printed paper novels?",
          options: [
            "His tablet screen broke last summer.",
            "The neighbourhood library charges nothing for e-books.",
            "He avoids getting distracted by notifications.",
            "Printed books weigh less in his school backpack.",
          ],
          answerIndex: 2,
          hints: [
            "Read the final clause after the colon (*así no me distraigo con...*).",
            "*Distraerse* = to get distracted.",
          ],
          explanation:
            "*Así no me distraigo con las notificaciones* means **so that I don't get distracted by notifications**.",
        },
        {
          id: "social-fitness-health-p2-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "eating-out-and-complaints",
          question:
            "Write the Spanish feminine noun (including definite article **la**) for **'the bill'** in a restaurant.",
          answer: {
            type: "text",
            accept: ["la cuenta"],
            display: "la cuenta",
          },
          traps: [
            {
              spec: { type: "text", accept: ["la propina"] },
              feedback:
                "*La propina* means 'the tip' — 'the bill' is **la cuenta**!",
            },
          ],
          hints: [
            "Think of the classic phrase *Pedí la c_____*.",
          ],
          solution: [
            "In a restaurant, 'the bill' is **la cuenta** (*la propina* is the tip).",
          ],
        },
        {
          id: "social-fitness-health-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "eating-out-and-complaints",
          question:
            "Complete the Paper 2 Q3c gap with the **preterite** form of **traer** (*él*): *El camarero nos _______ el menú del día enseguida.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("traer", "preterite", "él"),
            display: "trajo",
          },
          traps: [
            {
              spec: { type: "text", accept: ["trajó", "traí", "trayó"] },
              feedback:
                "*Traer* has a strong *j*-stem in the preterite (*traje, trajiste, **trajo***) — strong preterites NEVER take written accents!",
            },
          ],
          hints: [
            "*Traer* is a strong *j*-stem preterite verb (*traj-*).",
            "Remember: strong preterites (*tuve, hice, puse, dije, traje*) have NO written accents on *-e* or *-o*!",
          ],
          solution: [
            "*Traer* uses the irregular strong stem *traj-* in the preterite, so 3rd-person singular is unaccented **trajo**.",
          ],
          commonError: "Adding an incorrect accent (*trajó*) or treating it like *leer* (*trayó*).",
        },
        {
          id: "social-fitness-health-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "eating-out-and-complaints",
          question:
            "Complete the restaurant preference sentence with the **preterite** form of **preferir** (*ellos*): *Mis padres _______ pedir pescado a la plancha en lugar de carne.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("preferir", "preterite", "ellos"),
            display: "prefirieron",
          },
          traps: [
            {
              spec: { type: "text", accept: ["preferieron", "prefieron"] },
              feedback:
                "*Preferir* is an *-ir* sandal verb in the preterite: change the second *e → i* in 3rd person (**prefirieron**)!",
            },
          ],
          hints: [
            "*Preferir* is an *-ir* stem-changer (*e→ie* in present, **e→i** in 3rd-person preterite!).",
            "Keep *-ieron* after the *prefir-* stem.",
          ],
          solution: [
            "In 3rd-person plural preterite, *-ir* stem-changing verb *preferir* shifts *e → i*: **prefirieron**.",
          ],
        },
        {
          id: "social-fitness-health-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "eating-out-and-complaints",
          question:
            "Choose between **es** and **está** to complete this praise for Tonight's paella: *¡Qué sorpresa! Esta paella casera _______ riquísima hoy.* (Write ONLY **es** or **está**.)",
          answer: {
            type: "text",
            accept: ["está", "ella está"],
            display: "está",
          },
          traps: [
            {
              spec: { type: "text", accept: ["es"] },
              feedback:
                "Remember: *ser rico* = wealthy, whereas **estar rico/riquísimo** = tastes delicious right now!",
            },
          ],
          hints: [
            "Saying how a dish tastes today uses *estar* (and watch what *rico* means with *ser* vs *estar*!).",
            "Include the written accent on **á**.",
          ],
          solution: [
            "With food taste right now, Spanish uses **estar**: **está** (*está riquísima* = tastes delicious).",
          ],
        },
        {
          id: "social-fitness-health-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "eating-out-and-complaints",
          question:
            "Complete the past restaurant complaint with the **imperfect** form of **estar** (*ellos*): *Nos quejamos al encargado porque los platos _______ sucios y fríos.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("estar", "imperfect", "ellos"),
            display: "estaban",
          },
          traps: [
            {
              spec: { type: "text", accept: ["eran", "fueron"] },
              feedback:
                "Being dirty and cold right then is a temporary background condition (**estar** in the imperfect → **estaban**), not *ser*!",
            },
          ],
          hints: [
            "Check *los platos* (3rd person plural *ellos*) and the *-ar* imperfect ending (*-aban*).",
            "*Estar* is 100% regular in the imperfect tense (*estaba, estabas, estaba, estábamos, estabais, estaban*).",
          ],
          solution: [
            "Ongoing past condition of *los platos* uses the imperfect of *estar*: **estaban**.",
          ],
        },
        {
          id: "social-fitness-health-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "eating-out-and-complaints",
          question:
            "Read this dialogue in a tapas bar in Granada:\n\n*— Camarero: Buenas tardes, ¿qué van a tomar?*\n*— Cliente: De primer plato, una ensalada mixta. Pero antes quería preguntarle algo: ¿la tortilla española lleva cebolla? Es que mi hijo no la soporta.*\n\nWhy does the customer ask a question before ordering the omelette?",
          options: [
            "His son has a severe egg allergy.",
            "His son cannot stand onion.",
            "He wants to know whether bread is included in the price.",
            "He prefers the omelette served cold.",
          ],
          answerIndex: 1,
          hints: [
            "Look at *¿la tortilla española lleva cebolla?* (*la cebolla* = onion).",
            "*No soportar algo* = not to stand / bear something.",
          ],
          explanation:
            "*¿La tortilla española lleva cebolla? Es que mi hijo no la soporta* means he checks whether it contains onion because **his son cannot stand it**.",
        },
        {
          id: "social-fitness-health-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "eating-out-and-complaints",
          question:
            "Complete the Paper 2 Q3c gap with the **conditional** form of **recomendar** (*yo*): *Sinceramente, no _______ ese restaurante porque el servicio fue pésimo.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("recomendar", "conditional", "yo"),
            display: "recomendaría",
          },
          traps: [
            {
              spec: { type: "text", accept: ["recomendería", "recomendaré"] },
              feedback:
                "*Recomendar* has a 100% regular conditional stem: full infinitive **recomendar** + **-ía** (**recomendaría**)!",
            },
          ],
          hints: [
            "The conditional attaches *-ía* directly onto the full infinitive *recomendar* (with no *e→ie* boot change!).",
            "Don't forget the written accent on the **í** of **-ía**!",
          ],
          solution: [
            "Form the *yo* conditional from full infinitive *recomendar* + *-ía*: **recomendaría**.",
          ],
        },
        {
          id: "social-fitness-health-p2-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "sports-and-events",
          question:
            "Complete the sentence with the **missing contraction** (*one word*): *Mi hermana lleva siete años jugando _______ baloncesto en la selección escolar.* (Write ONLY the missing word.)",
          answer: {
            type: "text",
            accept: ["al"],
            display: "al",
          },
          traps: [
            {
              spec: { type: "text", accept: ["a el", "el", "en"] },
              feedback:
                "After *jugar*, Spanish obligatorily contracts **a + el → al** before masculine sports (*jugar al baloncesto*)!",
            },
          ],
          hints: [
            "*Jugar* takes the preposition *a*, and *el baloncesto* is masculine singular.",
            "Contract *a + el* into a single word!",
          ],
          solution: [
            "Before masculine singular *el baloncesto*, *a + el* contracts obligatorily to **al**.",
          ],
        },
        {
          id: "social-fitness-health-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "cinema-music-reading",
          marks: 4,
          question:
            "Edexcel 4SP0 Paper 2 Q7 Style (Cultural Review — 4 marks):\nWrite a short paragraph **in Spanish** reviewing a film, concert, or book for your school blog. Address ALL four points:\n1. What you watched, attended, or read recently (using the preterite).\n2. What the story/music was about (using *tratar de* or describing the style).\n3. A balanced opinion with two specific review adjectives (one positive, one critical or nuanced).\n4. What cultural activity you plan to enjoy next month.",
          modelAnswer:
            "El sábado pasado fui al cine con mis primos y vimos una película de ciencia ficción española. La trama trata de una astronauta valiente que descubre un planeta misterioso. Por un lado, la banda sonora y los efectos especiales fueron inolvidables, pero por otro lado el final me pareció un poco predecible. El mes que viene asistiré a un concierto en directo de mi grupo favorito.",
          markScheme: [
            {
              point: "Narrates a recent viewing/reading/concert event in the preterite (e.g. fui, vi, vimos, leí, escuché)",
              keywords: ["fui", "fuimos", "vimos", "lei", "escuche", "anoche", "pasado"],
            },
            {
              point: "Describes plot or content idiomatically (e.g. trata de, trama, historia, protagonista, canciones)",
              keywords: ["trata de", "trama", "protagonista", "historia", "argumento", "canciones"],
            },
            {
              point: "Gives a nuanced opinion using specific review vocabulary (e.g. inolvidable, conmovedor, entretenido, apasionante, predecible, decepcionante)",
              keywords: ["inolvidable", "inolvidables", "conmovedor", "conmovedora", "entretenida", "apasionante", "predecible", "decepcionante"],
            },
            {
              point: "Includes a clear future plan for next month (e.g. iré, asistiré, leeré, veré, voy a)",
              keywords: ["asistire", "ire", "leere", "vere", "voy a", "escuchare"],
            },
          ],
          hints: [
            "Start with *El sábado pasado fui al cine y vi...* (remember *vi/vio* have NO accents!).",
            "Use *La trama trata de...* in the present tense to explain what it is about.",
            "Contrast two Grade-9 adjectives (*inolvidable / apasionante* vs *predecible / decepcionante*) and finish with *El mes que viene iré / voy a ir...*.",
          ],
          commonError:
            "Writing literal *es sobre* instead of *trata de* or repeating generic *bueno/interesante*.",
        },
        {
          id: "social-fitness-health-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "eating-out-and-complaints",
          marks: 4,
          question:
            "Edexcel 4SP0 Paper 2 Q7 Style (Restaurant Narrative — 4 marks):\nWrite a short account **in Spanish** of eating out at a restaurant, covering ALL four bullet points:\n1. Who you went with and what dishes you ordered (*pedir*).\n2. One problem with the food or table (*estar* + state adjective).\n3. How you complained politely or how the staff responded.\n4. Whether you would recommend the place and where you will celebrate your next family meal.",
          modelAnswer:
            "El domingo pasado cené en un restaurante nuevo del centro con mis padres y de segundo plato pedí pescado asado. Por desgracia, la sopa estaba completamente fría y además un tenedor estaba sucio. Nos quejamos educadamente al camarero, quien nos pidió disculpas y nos trajo platos calientes enseguida. Aunque el postre casero estaba riquísimo, no recomendaría aquel local, así que el próximo mes iremos a una marisquería tradicional.",
          markScheme: [
            {
              point: "Narrates going out and ordering dishes using preterite pedir (e.g. cené, almorcé, pedí, pidió, pedimos, plato)",
              keywords: ["pedi", "pidio", "pedimos", "plato", "cene", "almorce"],
            },
            {
              point: "Describes a temporary food/table problem accurately with estar (e.g. estaba fría/frío/salada/sucio/roto)",
              keywords: ["estaba fria", "estaba frio", "estaba salada", "estaba salado", "estaba sucio", "estaba sucia", "estaban sucios"],
            },
            {
              point: "Explains the complaint or waiter's response (e.g. quejamos, camarero, encargado, trajo, cambió, disculpas)",
              keywords: ["quejamos", "queje", "camarero", "camarera", "encargado", "trajo", "cambio"],
            },
            {
              point: "Gives conditional recommendation + future meal plan (e.g. recomendaría, volvería, iremos, celebraremos, vamos a)",
              keywords: ["recomendaria", "volveria", "iremos", "celebraremos", "vamos a", "iriamos"],
            },
          ],
          hints: [
            "Use *pedí / pedimos* (never *pregunté* or *pedí por*!) for ordering your courses.",
            "Use **estaba** (*la sopa estaba fría / el tenedor estaba sucio*) for the past complaint.",
            "Close with conditional *no recomendaría...* + future *el próximo mes iremos a...*.",
          ],
          commonError:
            "Writing *era fría* instead of *estaba fría*, or *pregunté el pescado* instead of *pedí el pescado*.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "social-fitness-health-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sports-and-events",
      question:
        "Grade-9 Duration Transformation:\nComplete the second sentence so it means the **exact same thing** as *«Mis hermanos juegan al bádminton desde hace cinco años»* using **llevar + time + gerund**:\n*Mis hermanos _______ cinco años _______ al bádminton.* (Write ONLY the two missing verb words separated by a space — i.e. the conjugated form of *llevar* followed by the gerund of *jugar*, without *cinco años*.)",
      answer: {
        type: "text",
        accept: ["llevan jugando"],
        display: "llevan jugando",
      },
      traps: [
        {
          spec: { type: "text", accept: ["lleva jugando"] },
          feedback:
            "Check the subject *mis hermanos* (plural *ellos*) → **llevan**, not singular *lleva*!",
        },
        {
          spec: { type: "text", accept: ["llevan jugar"] },
          feedback:
            "After *llevar + time*, Spanish requires the **gerund** (**jugando**), not the infinitive!",
        },
      ],
      hints: [
        "Step 1: Conjugate *llevar* in the present indicative for *mis hermanos* (*ellos*).",
        "Step 2: Form the regular *-ar* gerund of *jugar* (*-ando*).",
        "Step 3: Write the two verb forms separated by a single space: `llevan ...`.",
      ],
      solution: [
        "*Mis hermanos* is 3rd person plural, so *llevar* conjugates in the present as **llevan**.",
        "The gerund of *jugar* is **jugando**, forming *Mis hermanos **llevan** cinco años **jugando** al bádminton*.",
      ],
    },
    {
      id: "social-fitness-health-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "smoking-alcohol-stress",
      question:
        "Negative *Llevar* Idiom:\nComplete the sentence to say **'My cousin has not smoked for six months'**:\n*Mi primo lleva seis meses _______ _______.* (Write ONLY the two missing Spanish words.)",
      answer: {
        type: "text",
        accept: ["sin fumar"],
        display: "sin fumar",
      },
      traps: [
        {
          spec: { type: "text", accept: ["no fumando", "sin fumando"] },
          feedback:
            "Never use a gerund here! Negative *llevar* swaps the gerund for **sin + infinitive** (**sin fumar**).",
        },
      ],
      hints: [
        "Step 1: Recall how *llevar + time* forms its negative ('has gone six months **without** smoking').",
        "Step 2: Use the Spanish preposition for 'without'.",
        "Step 3: Follow that preposition with the **infinitive** of 'to smoke' (never *-ndo*!).",
      ],
      solution: [
        "To negate *llevar + time + gerund*, Spanish replaces the gerund with **sin + infinitive**.",
        "Therefore 'without smoking' is **sin fumar**.",
      ],
    },
    {
      id: "social-fitness-health-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "eating-out-and-complaints",
      question:
        "Spot the **ONLY** sentence with zero grammar, spelling, or vocabulary errors:",
      options: [
        "Anoche fuimos a un restaurante mexicano; yo pedí por tacos, pero la salsa era demasiada picante.",
        "Anoche fuimos a un restaurante mexicano; yo pregunté tacos, pero el plato fue sucio.",
        "Anoche fuimos a un restaurante mexicano; yo pedí unos tacos, pero el arroz estaba frío y nos quejamos al encargado.",
        "Anoche fuiemos a un restaurante mexicano; yo pidió unos tacos y dejaron una buena cuenta.",
      ],
      answerIndex: 2,
      hints: [
        "Step 1: Eliminate any option with *pedir por* or *preguntar + food* — ordering food is always direct *pedir*!",
        "Step 2: Check *ser* vs *estar* for cold food or dirty plates right then (*estaba frío / estaba sucio*).",
        "Step 3: Also note *demasiado* as an adverb before an adjective is invariable (*demasiado picante*, never *demasiada picante*!).",
      ],
      explanation:
        "**Anoche fuimos… yo pedí unos tacos, pero el arroz estaba frío y nos quejamos al encargado** gets every detail right: *pedí* (no *por*), *estaba frío* (temporary state with *estar*), and *nos quejamos al encargado*. Notice *demasiada picante* is also wrong because adverbial *demasiado* never changes gender!",
    },
    {
      id: "social-fitness-health-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "healthy-living-and-diet",
      question:
        "Infinitive + Attached Reflexive Pronoun:\nComplete the sentence for **nosotros** using the verb **relajarse** after **para**:\n*Después de los exámenes, hacemos yoga para _______.* (Write ONLY the single Spanish word.)",
      answer: {
        type: "text",
        accept: ["relajarnos"],
        display: "relajarnos",
      },
      traps: [
        {
          spec: { type: "text", accept: ["relajarse"] },
          feedback:
            "Match the reflexive pronoun to *hacemos* (**nosotros** → **-nos**, not 3rd-person *-se*)!",
        },
        {
          spec: { type: "text", accept: ["relajándonos", "nos relajamos"] },
          feedback:
            "After *para*, keep the **infinitive** (*relajar*) and attach **nos**: **relajarnos**!",
        },
      ],
      hints: [
        "Step 1: After the preposition *para*, you must use the infinitive base *relajar*.",
        "Step 2: Look at the main verb *hacemos* — the subject is *nosotros*.",
        "Step 3: Replace *-se* at the end of *relajarse* with the *nosotros* reflexive pronoun!",
      ],
      solution: [
        "After *para*, keep the infinitive *relajar* and match the attached reflexive pronoun to *nosotros* (*hacemos*): **relajarnos**.",
      ],
    },
    {
      id: "social-fitness-health-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "smoking-alcohol-stress",
      question:
        "Preterite Reverse-Verb Precision:\nComplete the sentence with the **preterite** form of **doler** (sudden sharp pain yesterday): *Cuando levanté la caja pesada ayer, me _______ la espalda de repente.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["dolió"],
        display: "dolió",
      },
      traps: [
        {
          spec: { type: "text", accept: ["duelió", "dulió"] },
          feedback:
            "Careful! *Doler* is an **-er** verb — *-er* boot verbs NEVER stem-change in the preterite (only *-ir* verbs do)! Write **dolió**.",
        },
        {
          spec: { type: "text", accept: ["dolieron"] },
          feedback:
            "*La espalda* is singular, so use 3rd-person singular **dolió**!",
        },
      ],
      hints: [
        "Step 1: Check the grammatical subject: *la espalda* (3rd person singular) + sudden completed trigger *de repente* (preterite).",
        "Step 2: Ask whether *-er* boot verbs (*volver, poder, doler*) stem-change in the preterite — they do NOT!",
        "Step 3: Attach regular *-er* 3rd-person singular preterite ending *-ió* to stem *dol-*.",
      ],
      solution: [
        "Unlike *-ir* verbs (*dormir → durmió*), **-er** stem-changers have completely regular stems in the preterite.",
        "Matching singular *la espalda*, *doler* becomes **dolió**.",
      ],
    },
    {
      id: "social-fitness-health-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "cinema-music-reading",
      question:
        "Read this literary critic's paragraph carefully:\n\n*«A pesar de que la novela cuenta con una protagonista inolvidable, al autor le costó mantener el ritmo en los últimos capítulos; sin embargo, no me arrepiento de haberla leído.»*\n\nWhich statement accurately captures the critic's verdict?",
      options: [
        "He regrets reading the novel because the female lead was forgettable.",
        "Although the pacing sagged in the final chapters, the female lead was unforgettable and he does not regret reading it.",
        "The author maintained a fast pace right to the end despite a weak plot.",
        "He stopped reading before the final chapters because the book cost too much.",
      ],
      answerIndex: 1,
      hints: [
        "Step 1: Notice *una protagonista inolvidable* (an unforgettable female lead).",
        "Step 2: *Al autor le costó mantener el ritmo* = the author struggled to keep up the pace (*costar + inf* = to be hard to!).",
        "Step 3: *No me arrepiento de haberla leído* = 'I do not regret having read it' (*arrepentirse de* = to regret).",
      ],
      explanation:
        "**Costar + infinitive** here means 'to struggle / find it hard to' (*le costó mantener el ritmo*), and **no me arrepiento de haberla leído** means he **does not regret** having read it!",
    },
    {
      id: "social-fitness-health-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "smoking-alcohol-stress",
      question:
        "Subjunctive Health Advice (*-gar* Spelling + Opposite Vowel):\nComplete the doctor's advice with the **present subjunctive** form of **jugar** (*tú*): *Para dormir mejor por la noche, te recomiendo que no _______ con videojuegos violentos antes de acostarte.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("jugar", "subjunctive", "tú"),
        display: "juegues",
      },
      traps: [
        {
          spec: { type: "text", accept: ["juegas", "tú juegas"] },
          feedback:
            "*Te recomiendo que...* triggers the present subjunctive — swap *-as* for opposite *-ar* subjunctive ending **-es** (with *g → gu*)!",
        },
        {
          spec: { type: "text", accept: ["jueges", "jugues"] },
          feedback:
            "Combine BOTH rules in *tú* subjunctive of *jugar*: boot stem **u → ue** AND *-gar* spelling shift **g → gu** → **juegues**!",
        },
      ],
      hints: [
        "Step 1: *Te recomiendo que no...* requires the *tú* present subjunctive of *jugar*.",
        "Step 2: Apply the *u → ue* boot stem change (*jueg-*).",
        "Step 3: Before the opposite *-ar* subjunctive ending *-es*, change *g → gu* to preserve the hard 'g' sound!",
      ],
      solution: [
        "In the *tú* present subjunctive, *jugar* combines its *u → ue* boot stem with the *-gar → -gu-* spelling change before *-es*: **juegues**.",
      ],
    },
    {
      id: "social-fitness-health-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "sports-and-events",
      marks: 4,
      question:
        "Edexcel 4SP0 Paper 2 Q7 Stretch (130–150 Word Mini-Essay — 4 marks):\nWrite a cohesive Grade-9 response **in Spanish** evaluating the role of sport and leisure in young people's lives. Include ALL four elements:\n1. Your current weekly fitness/cultural routine using at least one idiom (*llevar + gerund*, *desde hace*, or *soler*).\n2. A specific past sporting tournament, match, or concert you took part in or attended (combining preterite and imperfect).\n3. One advantage AND one drawback of hosting major international sporting events.\n4. A hypothetical Grade-9 *si*-clause (*Si tuviera...*) OR a future resolution + subjunctive recommendation.",
      modelAnswer:
        "Para desconectar de los estudios y mantenerme sana, llevo cinco años jugando al tenis y suelo tocar el piano cada tarde. El verano pasado asistí a un torneo regional impresionante donde hacía muchísimo calor, pero el ambiente era inolvidable y nuestro equipo ganó una medalla. Por un lado, los Juegos Olímpicos fomentan el deporte y atraen turismo; sin embargo, por otro lado cuestan millones y provocan atascos enormes. Si tuviera más tiempo libre el año que viene, haría atletismo también, y recomiendo que todos los jóvenes practiquen algún deporte al aire libre.",
      markScheme: [
        {
          point: "Describes current fitness/leisure routine using idiomatic present structures (e.g. llevo... jugando/haciendo, desde hace, suelo)",
          keywords: ["llevo", "desde hace", "suelo", "mantenerme"],
        },
        {
          point: "Narrates a specific past sporting/cultural event combining preterite & imperfect (e.g. asistí, fui, participé, ganó + hacía, era, había)",
          keywords: ["asisti", "participe", "gano", "ganamos", "hacia", "habia", "era"],
        },
        {
          point: "Weighs both a benefit and a drawback of major sporting events (e.g. fomentan, turismo, inspiran vs cuestan, millones, atascos, ruido)",
          keywords: ["fomentan", "turismo", "cuestan", "millones", "atascos", "cara"],
        },
        {
          point: "Deploys a Grade-9 hypothetical si-clause or subjunctive recommendation (e.g. si tuviera... haría / recomiendo que practiquen)",
          keywords: ["tuviera", "pudiera", "haria", "practiquen", "recomiendo que", "aconsejo que"],
        },
      ],
      hints: [
        "Step 1: Open with *Para mantenerme en forma, llevo cinco años jugando al... y suelo...*.",
        "Step 2: Pair preterite event verbs (*asistí, ganó*) with imperfect scene-setters (*hacía calor, el ambiente era...*).",
        "Step 3: Contrast *Por un lado, los grandes eventos fomentan...; sin embargo, cuestan millones...*, and finish with *Si tuviera más tiempo libre, haría...*!",
      ],
      commonError:
        "Writing *Si tendría más tiempo* instead of *Si tuviera más tiempo*, or forgetting to weigh BOTH a benefit and a drawback.",
    },
  ],
};
