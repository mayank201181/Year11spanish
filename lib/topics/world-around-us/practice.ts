import type { TopicPractice } from "../../types.ts";
import { acceptedForms } from "../../spanish/verbs.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "world-around-us-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "climate-and-pollution",
      question:
        "Write the Spanish noun phrase (including definite article **el** or **la**) for **'climate change'**.",
      answer: { type: "text", accept: ["el cambio climático"] },
      traps: [
        {
          spec: { type: "text", accept: ["la cambio climático", "la cambio climática"] },
          feedback: "*Cambio* is masculine (*el cambio climático*), and remember the accent on *climático*!",
        },
      ],
      hints: [
        "Start with masculine *el cambio* ('the change') + the adjective *climático*.",
      ],
      solution: [
        "*Cambio* is masculine singular → **el cambio**.",
        "Add esdrújula adjective **climático** (with an accent on *á*): **el cambio climático**.",
      ],
      commonError: "Forgetting the written accent on *climático* or using feminine *la*.",
    },
    {
      id: "world-around-us-quiz-q02",
      kind: "mcq",
      difficulty: "core",
      guideRef: "climate-and-pollution",
      question:
        "Choose the ONLY phrase with 100% accurate article and adjective agreement for *'the serious problem'*:",
      options: [
        "el problema grave",
        "la problema grave",
        "el problema grava",
        "una problema grave",
      ],
      answerIndex: 0,
      hints: [
        "Greek-origin nouns ending in *-ma* (*problema, clima, sistema*) are masculine.",
        "Adjectives ending in *-e* (*grave*) have one form for both masculine and feminine singular.",
      ],
      explanation:
        "**el problema grave** uses masculine *el* with the Greek *-ma* noun *problema* and the invariable *-e* adjective *grave*.",
    },
    {
      id: "world-around-us-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "sustainability-and-action",
      question:
        "Complete the impersonal eco-advice with the correct form of **ahorrar**: *«En casa, se debería _______ electricidad.»* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: ["ahorrar"] },
      traps: [
        {
          spec: { type: "text", accept: ["ahorramos", "ahorra", "ahorrando"] },
          feedback: "After *se debería*, never conjugate a second verb or use a gerund — use the infinitive!",
        },
      ],
      hints: [
        "Look at *se debería* ('one/people should'). What verb form always follows a modal structure without *que*?",
        "Keep the verb unchanged in the infinitive.",
      ],
      solution: [
        "*Se debería* is an impersonal conditional modal phrase without *que*.",
        "Follow it directly with the infinitive: **ahorrar**.",
      ],
      commonError: "Writing *ahorramos* (conjugating two verbs side by side).",
    },
    {
      id: "world-around-us-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "sustainability-and-action",
      question:
        "Complete the WEIRDO subjunctive sentence with the **present subjunctive** of **reciclar** (*nosotros*): *«Es urgente que _______ el vidrio y el cartón.»* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("reciclar", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["reciclamos"] },
          feedback: "*Reciclamos* is indicative! After *Es urgente que*, flip the *-ar* ending from *-amos* to *-emos*.",
        },
      ],
      hints: [
        "*Es urgente que* triggers the present subjunctive.",
        "*Reciclar* is an *-ar* verb, so swap *-amos* to opposite vowel *-emos*.",
      ],
      solution: [
        "Take present *yo* (*reciclo*), drop *-o*, and add the *-ar* subjunctive *nosotros* ending *-emos*.",
        "Result: **reciclemos**.",
      ],
      commonError: "Leaving *-amos* (present indicative) after *Es urgente que*.",
    },
    {
      id: "world-around-us-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "global-and-social-issues",
      question:
        "Complete the sentence: *«A mi hermana le _______ mucho las guerras y la desigualdad social.»*",
      options: [
        "preocupa",
        "preocupan",
        "preocupo",
        "preocupas",
      ],
      answerIndex: 1,
      hints: [
        "*Preocupar* agrees with the grammatical subject causing the worry.",
        "*Las guerras y la desigualdad social* is plural!",
      ],
      explanation:
        "**preocupan** agrees with the plural compound subject (*las guerras y la desigualdad social*).",
    },
    {
      id: "world-around-us-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      guideRef: "global-and-social-issues",
      question:
        "Write the Spanish noun (including definite article **el**) for **'unemployment'**.",
      answer: { type: "text", accept: ["el paro", "el desempleo"] },
      traps: [
        {
          spec: { type: "text", accept: ["la pobreza"] },
          feedback: "*La pobreza* means 'poverty'; 'unemployment' is *el paro* or *el desempleo*.",
        },
      ],
      hints: [
        "Either common 4SP0 masculine term (*el p…* or *el d…*) is accepted!",
      ],
      solution: [
        "In Edexcel 4SP0, 'unemployment' is **el paro** or **el desempleo**.",
      ],
    },
    {
      id: "world-around-us-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "charity-and-volunteering",
      question:
        "Complete the sentence with the **preterite** form of **recaudar** (*nosotros*): *«El mes pasado _______ ochocientos euros para una ONG.»* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("recaudar", "preterite", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["recaudábamos", "recaudaremos"] },
          feedback: "*El mes pasado* + a single completed fundraising total takes the preterite (*recaudamos*).",
        },
      ],
      hints: [
        "*Recaudar* is a regular *-ar* verb.",
        "In regular *-ar* verbs, the *nosotros* preterite is spelled identically to the *nosotros* present!",
      ],
      solution: [
        "Drop *-ar* from *recaudar* and add the *nosotros* preterite ending *-amos*.",
        "Result: **recaudamos**.",
      ],
    },
    {
      id: "world-around-us-quiz-q08",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "charity-and-volunteering",
      question:
        "Which Spanish noun phrase means **'a soup kitchen'** (where free meals are served to people in need)?",
      options: [
        "un envase de plástico",
        "un incendio forestal",
        "un comedor social",
        "un vehículo eléctrico",
      ],
      answerIndex: 2,
      hints: [
        "Look for the noun built from *comer* ('to eat').",
      ],
      explanation:
        "**un comedor social** means 'a soup kitchen / community dining hall'.",
    },
    {
      id: "world-around-us-quiz-q09",
      kind: "short",
      difficulty: "warmup",
      guideRef: "digital-media-and-tech",
      question:
        "Write the Spanish noun (including definite article **el**) for **'cyberbullying'**.",
      answer: { type: "text", accept: ["el ciberacoso", "el acoso cibernético"] },
      traps: [
        {
          spec: { type: "text", accept: ["la ciberacoso"] },
          feedback: "*Acoso* ends in *-o* and is masculine: **el ciberacoso**!",
        },
      ],
      hints: [
        "Combine *ciber-* with masculine *acoso* ('bullying/harassment'), preceded by *el*.",
      ],
      solution: [
        "Masculine singular: **el ciberacoso** (also accepted: **el acoso cibernético**).",
      ],
    },
    {
      id: "world-around-us-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "digital-media-and-tech",
      question:
        "Complete the online-safety advice: *«Para evitar virus, no descargues archivos sospechosos en tu _______ .»*",
      options: [
        "sequía",
        "pobreza",
        "basura",
        "ordenador",
      ],
      answerIndex: 3,
      hints: [
        "Which noun is an electronic device onto which you download files (*archivos*)?",
        "*El ordenador* (Castilian) = computer.",
      ],
      explanation:
        "**ordenador** ('computer') is the only digital device in the list (*sequía* = drought, *pobreza* = poverty, *basura* = rubbish).",
    },
  ],

  papers: [
    {
      id: "world-around-us-p1",
      title: "Area D Practice Paper 1 — Paper 2 Reading, Q3c Grammar & Q6 Writing",
      questions: [
        {
          id: "world-around-us-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "climate-and-pollution",
          question:
            "Write the Spanish noun phrase (including definite article **la**) for **'carbon footprint'**.",
          answer: { type: "text", accept: ["la huella de carbono"] },
          traps: [
            {
              spec: { type: "text", accept: ["el huella de carbono", "la huella de carbón"] },
              feedback: "*Huella* is feminine (**la huella**), and the chemical element carbon is **carbono** (*carbón* means coal!).",
            },
          ],
          hints: [
            "*La huella* = footprint; add *de* + the Spanish word for the element carbon (*carbono*, not *carbón*!).",
          ],
          solution: [
            "'Footprint' = **la huella**; 'of carbon' = **de carbono** → **la huella de carbono**.",
          ],
          commonError: "Confusing *el carbono* (carbon) with *el carbón* (coal).",
        },
        {
          id: "world-around-us-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "climate-and-pollution",
          question:
            "Edexcel Q3c Gender Agreement — Complete with the accurate singular feminine or masculine form of **limpio**: *«En algunas aldeas rurales todavía falta el agua _______ .»* (Write ONLY the missing adjective.)",
          answer: { type: "text", accept: ["limpia"] },
          traps: [
            {
              spec: { type: "text", accept: ["limpio"] },
              feedback: "Trap spotted! *Agua* takes *el* before stressed *a-*, yet *agua* is a **feminine** noun, so the adjective must end in *-a*!",
            },
          ],
          hints: [
            "Don't let the article *el* fool you! What is the true grammatical gender of *agua*?",
            "Think of the plural *las aguas…* — the adjective must be feminine singular.",
          ],
          solution: [
            "*Agua* is a feminine noun (*el* replaces *la* solely to avoid the *la-a* vowel clash).",
            "Therefore *limpio* must take its feminine singular form: **limpia** (*el agua limpia*).",
          ],
          commonError: "Writing *limpio* to match the article *el*.",
        },
        {
          id: "world-around-us-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "climate-and-pollution",
          question:
            "Edexcel Q3c Grammar — Complete the sentence with the **preterite** form of **destruir** (*ellos*): *«El año pasado los incendios forestales _______ muchos bosques.»* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("destruir", "preterite", "ellos") },
          traps: [
            {
              spec: { type: "text", accept: ["destruieron", "destruían"] },
              feedback: "In *-uir* verbs (*destruir, construir*), unstressed *i* between vowels becomes **y** in 3rd-person preterite: *destruyeron*!",
            },
          ],
          hints: [
            "*El año pasado* triggers the preterite for plural *los incendios forestales* (*ellos*).",
            "Apply the *i → y* spelling rule in *-uir* verbs (*-ieron → -yeron*).",
          ],
          solution: [
            "Stem *destru-* + 3rd-person plural preterite *-ieron* shifts unstressed intervocalic *i → y*.",
            "Result: **destruyeron**.",
          ],
          commonError: "Writing *destruieron* without the *i → y* change.",
        },
        {
          id: "world-around-us-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "climate-and-pollution",
          question:
            "Read the environmental notice: *«Se ruega a los excursionistas no encender fuego en el monte ni tirar colillas o botellas de vidrio, ya que el calor extremo facilita los incendios.»* Which two specific items must hikers NOT drop?",
          options: [
            "Plastic bags and tin cans",
            "Cigarette butts and glass bottles",
            "Paper maps and cardboard boxes",
            "Old batteries and mobile phones",
          ],
          answerIndex: 1,
          hints: [
            "Focus on *ni tirar colillas o botellas de vidrio*.",
            "*Botellas de vidrio* = glass bottles (which can focus sunlight like a lens), and *colillas* = cigarette butts.",
          ],
          explanation:
            "**Cigarette butts and glass bottles** translates *colillas o botellas de vidrio*.",
        },
        {
          id: "world-around-us-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "sustainability-and-action",
          question:
            "Edexcel Q3c Grammar — Complete with the **preterite** form of **reutilizar** (*yo*): *«Durante la campaña ecológica del colegio, _______ mis cuadernos viejos.»* (Write ONLY the missing verb, with its accent.)",
          answer: { type: "text", accept: acceptedForms("reutilizar", "preterite", "yo") },
          traps: [
            {
              spec: { type: "text", accept: ["reutilizé", "reutilizo"] },
              feedback: "Verbs ending in *-zar* change *z → c* before *-é* in the *yo* preterite: **reutilicé**!",
            },
          ],
          hints: [
            "The campaign is a completed past event, requiring the *yo* preterite.",
            "Apply the *-zar → -cé* spelling rule before *e*.",
          ],
          solution: [
            "Drop *-zar* from *reutilizar* and add *-cé* to keep the /θ/ or /s/ sound before *e*.",
            "Result: **reutilicé**.",
          ],
          commonError: "Writing *reutilizé* with *z* before *é*.",
        },
        {
          id: "world-around-us-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "sustainability-and-action",
          question:
            "Complete with the correct Spanish preposition (**por** or **para**): *«_______ reducir la contaminación del aire, voy al instituto en autobús.»* (Write ONLY the single missing preposition.)",
          answer: { type: "text", accept: ["para"] },
          traps: [
            {
              spec: { type: "text", accept: ["por"] },
              feedback: "Use **para** + infinitive to express purpose / goal ('in order to reduce'); *por* expresses cause or exchange!",
            },
          ],
          hints: [
            "Ask yourself: does the gap mean 'in order to' (purpose/goal) or 'because of' (cause)?",
            "'In order to' + infinitive is always one 4-letter preposition.",
          ],
          solution: [
            "Purpose ('in order to reduce air pollution') always requires **para** + infinitive.",
          ],
          commonError: "Translating English 'for / to' of purpose as *por*.",
        },
        {
          id: "world-around-us-p1-q07",
          kind: "short",
          difficulty: "challenge",
          guideRef: "sustainability-and-action",
          question:
            "Edexcel Q3c Grammar — Complete with the **present subjunctive** of **apagar** (*nosotros*): *«El director nos pide que _______ el aire acondicionado al salir del aula.»* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("apagar", "subjunctive", "nosotros") },
          traps: [
            {
              spec: { type: "text", accept: ["apagamos", "apagemos"] },
              feedback: "*Pedir que* triggers the present subjunctive, and *-gar* verbs insert **u** before *e*: **apaguemos**!",
            },
          ],
          hints: [
            "*Nos pide que* ('asks us to / asks that we') is a WEIRDO request triggering the present subjunctive.",
            "Insert **u** after *g* before the *-emos* subjunctive ending so the hard /g/ sound is preserved!",
          ],
          solution: [
            "*Apagar* is a *-gar* verb → stem shifts to *apagu-* before *e*.",
            "Add *nosotros* subjunctive ending *-emos*: **apaguemos**.",
          ],
          commonError: "Writing *apagemos* (missing *u*) or indicative *apagamos*.",
        },
        {
          id: "world-around-us-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "global-and-social-issues",
          question:
            "Write the invariable 3-word Spanish phrase (beginning with **los**) for **'homeless people'**.",
          answer: { type: "text", accept: ["los sin techo"] },
          traps: [
            {
              spec: { type: "text", accept: ["los sin techos"] },
              feedback: "Keep *techo* singular! Literally 'those without a roof' → **los sin techo**.",
            },
          ],
          hints: [
            "Literally 'the without roof': *los* + *sin* + singular noun for roof.",
            "Never add *-s* to the last word!",
          ],
          solution: [
            "The standard IGCSE Spanish expression for homeless people is **los sin techo**.",
          ],
          commonError: "Adding a plural *-s* to write *los sin techos*.",
        },
        {
          id: "world-around-us-p1-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "global-and-social-issues",
          question:
            "Read the interview extract: *«Me llamo Javier. Lo que más me indigna de mi barrio no es la basura en los parques, sino que muchas personas mayores viven solas y con pensiones muy bajas.»* What upsets Javier **most** about his neighbourhood?",
          options: [
            "Litter left behind in local parks",
            "Noisy traffic jams at rush hour",
            "Elderly residents living alone on very low pensions",
            "A lack of recycling bins outside flats",
          ],
          answerIndex: 2,
          hints: [
            "Look at the *no es X, sino que Y* ('is not X, but rather that Y') structure!",
            "Examiners put *la basura en los parques* right after *no es* as a classic distractor.",
          ],
          explanation:
            "**Elderly residents living alone on very low pensions** matches the *sino que* clause (*muchas personas mayores viven solas y con pensiones muy bajas*), while *la basura en los parques* is explicitly negated (*no es…*).",
        },
        {
          id: "world-around-us-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "charity-and-volunteering",
          question:
            "Edexcel Q3c Grammar — Complete with the **simple future** of **hacer** (*yo*): *«El verano próximo _______ trabajo voluntario en un hospital infantil.»* (Write ONLY the missing verb, with its accent.)",
          answer: { type: "text", accept: acceptedForms("hacer", "future", "yo") },
          traps: [
            {
              spec: { type: "text", accept: ["haceré", "hago"] },
              feedback: "*Hacer* has an irregular future stem (**har-**), never *haceré*!",
            },
          ],
          hints: [
            "*El verano próximo* triggers the future tense.",
            "Use the irregular future stem **har-** + *yo* ending **-é**.",
          ],
          solution: [
            "*Hacer* drops *-ce-* in the future/conditional stem → **har-**.",
            "Add *yo* future ending **-é**: **haré**.",
          ],
          commonError: "Regularising the stem to write *haceré*.",
        },
        {
          id: "world-around-us-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "charity-and-volunteering",
          question:
            "Complete the volunteering sentence with the single missing preposition: *«Nuestra escuela apoya _______ los refugiados con clases gratuitas de español.»* (Write ONLY the 1-letter word.)",
          answer: { type: "text", accept: ["a"] },
          traps: [
            {
              spec: { type: "text", accept: ["para", "por", "en"] },
              feedback: "*Apoyar* takes a direct object, and because *los refugiados* are people, Spanish inserts the **personal a**!",
            },
          ],
          hints: [
            "*Los refugiados* is a specific group of people acting as the direct object of *apoya*.",
            "What 1-letter marker does Spanish place before human direct objects?",
          ],
          solution: [
            "Human direct objects require the **personal *a***: *apoya **a** los refugiados*.",
          ],
        },
        {
          id: "world-around-us-p1-q12",
          kind: "short",
          difficulty: "warmup",
          guideRef: "digital-media-and-tech",
          question:
            "Write the Spanish noun (including definite article **la**) for **'password'**.",
          answer: { type: "text", accept: ["la contraseña", "la clave"] },
          traps: [
            {
              spec: { type: "text", accept: ["la contrasena"] },
              feedback: "Check the *ñ*! Spanish 'password' is **la contraseña**.",
            },
          ],
          hints: [
            "Starts with *la contra…* and contains the letter **ñ**.",
          ],
          solution: [
            "Feminine singular noun: **la contraseña** (also accepted: **la clave**).",
          ],
        },
        {
          id: "world-around-us-p1-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "digital-media-and-tech",
          question:
            "Read Carmen's opinion: *«Uso las redes para seguir campañas ecologistas, aunque reconozco que pierdo demasiado tiempo viendo vídeos cortos por la noche.»* What is Carmen's attitude to social media?",
          options: [
            "Totally negative — she deleted all her accounts last month",
            "Totally positive — she sees zero drawbacks to using them at night",
            "Balanced — she values eco-campaigns on them, yet admits wasting too much time on short videos at night",
            "Indifferent — she only uses her phone to call her grandparents",
          ],
          answerIndex: 2,
          hints: [
            "Check both clauses linked by *aunque reconozco que* ('although I admit that').",
            "She mentions a constructive purpose AND a personal time-wasting drawback.",
          ],
          explanation:
            "**Balanced — she values eco-campaigns on them, yet admits wasting too much time on short videos at night** captures both sides connected by *aunque*.",
        },
        {
          id: "world-around-us-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "sustainability-and-action",
          marks: 4,
          question:
            "Edexcel Paper 2 Q6 Style (60–75 words in Spanish) — Write a short blog post for your partner school in Madrid about **protecting the environment**. You must address all four bullet points in **Spanish**:\n- which environmental threat worries you most\n- what you and your family currently do at home to save resources\n- a green activity you took part in recently\n- one measure authorities ought to introduce soon",
          modelAnswer:
            "Hoy en día me preocupa muchísimo el cambio climático porque provoca sequías extremas. En casa reciclamos el vidrio y el cartón todos los días, y además apagamos las luces para ahorrar electricidad. El sábado pasado planté árboles en el parque municipal con mis amigos. En el futuro, es urgente que el gobierno invierta más dinero en las energías renovables y el transporte público.",
          markScheme: [
            {
              point: "Names a specific environmental threat with an opinion/concern verb (e.g. me preocupa el cambio climático / la contaminación / la sequía).",
              keywords: ["preocupa", "climatico", "contaminacion", "sequia", "calentamiento", "deforestacion"],
            },
            {
              point: "Describes present household eco-actions (e.g. reciclamos vidrio/plástico, apagamos luces, ahorramos agua/electricidad).",
              keywords: ["reciclamos", "reciclo", "apagamos", "apago", "ahorramos", "ahorrar", "reutilizamos"],
            },
            {
              point: "Narrates a recent past green activity in the Preterite/Perfect (e.g. planté / plantamos, limpiamos, recogimos, participé).",
              keywords: ["plante", "plantamos", "recogimos", "limpiamos", "participe", "organice", "pasado", "ayer"],
            },
            {
              point: "Proposes a policy measure for authorities using obligation/conditional/subjunctive (e.g. se debería, es urgente que, gobierno, energías renovables).",
              keywords: ["deberia", "urgente", "imprescindible", "gobierno", "ayuntamiento", "renovables", "invierta"],
            },
          ],
          hints: [
            "Dedicate one clear Spanish sentence (~15–18 words) to each of the 4 bullet points.",
            "Verify your three time frames: Present (*reciclamos*), Preterite (*El sábado pasado planté…*), and Conditional/Subjunctive policy advice (*Se debería… / Es urgente que el gobierno invierta…*).",
          ],
          commonError: "Using present tense for the recent activity instead of a clear Preterite form (*planté, recogimos, participé*).",
        },
        {
          id: "world-around-us-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "charity-and-volunteering",
          marks: 4,
          question:
            "Edexcel Paper 2 Q7 / Paper 3 Extended Response (Spanish) — Write a structured paragraph explaining **why community volunteering matters to young people**. Cover all four points in **Spanish**:\n- which vulnerable group or cause you care about and why\n- a fundraising or charity event you helped with in the past\n- what personal skills volunteers gain from helping others\n- how you plan to contribute after finishing your school exams",
          modelAnswer:
            "Me preocupan mucho los sin techo porque es injusto que haya personas durmiendo en la calle. El trimestre pasado organicé una carrera benéfica en mi instituto y recaudamos seiscientos euros para un comedor social; fue agotador pero valió la pena. Creo que el voluntariado nos enseña a ser más solidarios, empáticos y maduros. Cuando termine mis exámenes este verano, trabajaré de voluntaria en un banco de alimentos para aportar mi granito de arena.",
          markScheme: [
            {
              point: "Identifies a vulnerable group/cause and justifies concern (e.g. los sin techo, la pobreza, los refugiados, es injusto que haya).",
              keywords: ["techo", "pobreza", "necesitados", "refugiados", "injusto", "haya", "desigualdad"],
            },
            {
              point: "Narrates a past charity/fundraising event in the Preterite + Imperfect/opinion (e.g. organicé, recaudamos, donamos, carrera benéfica).",
              keywords: ["organice", "organizamo", "recaudamos", "recaude", "benefica", "donamos", "colabore"],
            },
            {
              point: "Explains personal qualities/benefits gained (e.g. solidarios, empáticos, maduros, experiencia, confianza).",
              keywords: ["solidario", "solidarios", "empatico", "empaticos", "maduros", "experiencia", "valorar"],
            },
            {
              point: "States future post-exam volunteering plan using future tense and/or cuando + subjunctive (e.g. cuando termine, trabajaré, ayudaré, banco de alimentos).",
              keywords: ["termine", "trabajare", "ayudare", "hare", "alimentos", "granito", "ong"],
            },
          ],
          hints: [
            "Include personal *a* if you write *ayudar a los necesitados* or *apoyar a los sin techo*.",
            "Use *Cuando termine… + future tense* on bullet 4 to score an effortless Grade-9 subjunctive structure!",
          ],
          commonError: "Writing *Cuando terminaré* instead of *Cuando termine* for future time clauses.",
        },
      ],
    },

    {
      id: "world-around-us-p2",
      title: "Area D Practice Paper 2 — Higher Inference, Subjunctive & Digital Ethics",
      questions: [
        {
          id: "world-around-us-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "climate-and-pollution",
          question:
            "Write the Spanish noun phrase (including definite article **el**) for **'global warming'**.",
          answer: { type: "text", accept: ["el calentamiento global"] },
          traps: [
            {
              spec: { type: "text", accept: ["la calentamiento global"] },
              feedback: "Nouns ending in *-miento* are always masculine: **el calentamiento global**!",
            },
          ],
          hints: [
            "From *calentar* ('to heat/warm') → masculine *-miento* noun + *global*.",
          ],
          solution: [
            "Masculine *-miento* noun: **el calentamiento global**.",
          ],
        },
        {
          id: "world-around-us-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "climate-and-pollution",
          question:
            "Edexcel Q3c Gender Agreement — Complete with the accurate masculine or feminine singular form of **extremo**: *«En el desierto de Atacama, el clima es _______ .»* (Write ONLY the missing adjective.)",
          answer: { type: "text", accept: ["extremo"] },
          traps: [
            {
              spec: { type: "text", accept: ["extrema"] },
              feedback: "*El clima* is a Greek-origin *-ma* masculine noun, so the adjective must end in *-o*!",
            },
          ],
          hints: [
            "Look at the article right before *clima*: **el** clima!",
            "Greek *-ma* nouns take masculine adjectives.",
          ],
          solution: [
            "*El clima* is masculine singular → **extremo**.",
          ],
          commonError: "Writing *extrema* because *clima* ends in *-a*.",
        },
        {
          id: "world-around-us-p2-q03",
          kind: "short",
          difficulty: "challenge",
          guideRef: "sustainability-and-action",
          question:
            "Edexcel Q3c Grammar — Complete with the **present subjunctive** of **producir** (*ellas*): *«Es fundamental que las empresas _______ menos envases de plástico.»* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("producir", "subjunctive", "ellos") },
          traps: [
            {
              spec: { type: "text", accept: ["producen", "produjeron", "produzcanse"] },
              feedback: "*Es fundamental que* triggers the present subjunctive! Build from *yo produzco* → **produzcan**.",
            },
          ],
          hints: [
            "*Es fundamental que* requires the present subjunctive for 3rd-person plural (*las empresas*).",
            "Take *yo produzco*, drop *-o*, and add *-an*.",
          ],
          solution: [
            "Present *yo* of *producir* is *produzco*.",
            "Drop *-o* and add 3rd-person plural *-an*: **produzcan**.",
          ],
          commonError: "Using indicative *producen* or forgetting the *-zc-* stem (*produgan*).",
        },
        {
          id: "world-around-us-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "sustainability-and-action",
          question:
            "Edexcel Q3c Grammar — Complete with the **conditional** form of **deber** (*nosotros*): *«Todos nosotros _______ usar bolsas reutilizables al hacer la compra.»* (Write ONLY the missing verb, with its accent.)",
          answer: { type: "text", accept: acceptedForms("deber", "conditional", "nosotros") },
          traps: [
            {
              spec: { type: "text", accept: ["debemos", "deberiamos"] },
              feedback: "The conditional 'we should' adds **-íamos** (with a written accent on **í**) to the full infinitive *deber*!",
            },
          ],
          hints: [
            "*Deber* is regular in the conditional: keep the full infinitive *deber* + *nosotros* conditional ending.",
            "Don't forget the tilde on the **í** of *-íamos*!",
          ],
          solution: [
            "Infinitive *deber* + conditional *nosotros* ending *-íamos* → **deberíamos**.",
          ],
        },
        {
          id: "world-around-us-p2-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "sustainability-and-action",
          question:
            "Read the town-hall announcement: *«A partir del lunes se instalarán placas solares en el polideportivo municipal para ahorrar un cuarenta por ciento en la factura de luz.»* Why is the council installing solar panels?",
          options: [
            "To heat the outdoor swimming pool in winter",
            "To cut the sports centre's electricity bill by 40%",
            "To sell electricity to neighbouring villages",
            "To replace the roof damaged by a storm",
          ],
          answerIndex: 1,
          hints: [
            "Look at the purpose clause *para ahorrar un cuarenta por ciento en la factura de luz*.",
            "*La factura de luz* = the electricity bill.",
          ],
          explanation:
            "**To cut the sports centre's electricity bill by 40%** matches *para ahorrar un cuarenta por ciento en la factura de luz*.",
        },
        {
          id: "world-around-us-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "global-and-social-issues",
          question:
            "Write the 3-word Spanish noun phrase (including definite article **el**) for **'fair trade'**.",
          answer: { type: "text", accept: ["el comercio justo"] },
          traps: [
            {
              spec: { type: "text", accept: ["el mercado libre"] },
              feedback: "*El mercado libre* is 'the free market'; 'fair trade' is **el comercio justo**.",
            },
          ],
          hints: [
            "*El comercio* ('trade/commerce') + masculine adjective *justo* ('fair/just').",
            "Place the adjective *justo* after the noun *el comercio*.",
          ],
          solution: [
            "'Fair trade' in Spanish is **el comercio justo**.",
          ],
        },
        {
          id: "world-around-us-p2-q07",
          kind: "short",
          difficulty: "challenge",
          guideRef: "global-and-social-issues",
          question:
            "Complete the sentence with **mucha** or **mucho**: *«Por desgracia, tras la sequía millones de personas pasan _______ hambre.»* (Write ONLY the missing word.)",
          answer: { type: "text", accept: ["mucha"] },
          traps: [
            {
              spec: { type: "text", accept: ["mucho"] },
              feedback: "Careful! *Hambre* is **feminine**! Only *la/una* switch to *el/un*; *mucha* keeps its feminine **-a**: **mucha hambre**!",
            },
          ],
          hints: [
            "Recall the gender of *hambre* (just like *agua*).",
            "Does *mucho/mucha* ever change to masculine before stressed *ha-*? No — it stays feminine!",
          ],
          solution: [
            "*Hambre* is a feminine noun (*el hambre* takes *el* only for the definite article).",
            "Adjectives like *mucho/a* MUST agree with its true feminine gender: **mucha** (*pasan mucha hambre*).",
          ],
          commonError: "Writing *mucho hambre* by false analogy with *el hambre*.",
        },
        {
          id: "world-around-us-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "charity-and-volunteering",
          question:
            "Edexcel Q3c Grammar — Complete with the **imperfect** form of **ser** (*ellos*): *«Cuando ayudaba en la residencia de ancianos, todos los residentes _______ muy agradecidos.»* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("ser", "imperfect", "ellos") },
          traps: [
            {
              spec: { type: "text", accept: ["fueron", "estaban", "son"] },
              feedback: "*Ser* is one of the 3 irregular verbs in the imperfect: *era, eras, era, éramos, erais, **eran***!",
            },
          ],
          hints: [
            "Ongoing background description in the past (*Cuando ayudaba…*) uses the imperfect.",
            "Conjugate irregular *ser* in the 3rd-person plural imperfect.",
          ],
          solution: [
            "The imperfect of *ser* is *era, eras, era, éramos, erais, eran*.",
            "For plural *todos los residentes*: **eran**.",
          ],
        },
        {
          id: "world-around-us-p2-q09",
          kind: "mcq",
          difficulty: "core",
          guideRef: "charity-and-volunteering",
          question:
            "Read Lucas's message: *«Mi familia apadrina a un niño en Guatemala desde hace tres años; gracias a las donaciones mensuales, su aldea ya tiene agua potable y una escuela nueva.»* How long has Lucas's family been sponsoring the child?",
          options: [
            "Since last month",
            "For thirteen years",
            "Only during the summer holidays",
            "For three years",
          ],
          answerIndex: 3,
          hints: [
            "Spot the duration idiom *apadrina… desde hace tres años* (present tense + *desde hace* = 'has been sponsoring for…').",
            "Distinguish *tres* (3) from *trece* (13)!",
          ],
          explanation:
            "**For three years** translates *desde hace tres años* with present-tense *apadrina*.",
        },
        {
          id: "world-around-us-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "digital-media-and-tech",
          question:
            "Write a Spanish noun (including definite article **el** or **la**) for **'mobile phone'** (either Castilian or Latin American Spanish is accepted).",
          answer: { type: "text", accept: ["el móvil", "el celular", "el teléfono móvil", "el teléfono celular"] },
          traps: [
            {
              spec: { type: "text", accept: ["el movil"] },
              feedback: "Remember the written accent on **ó** in **el móvil** (llana word ending in *-l*)!",
            },
          ],
          hints: [
            "Castilian uses *el m…* (with an accent on *ó*); Latin America uses *el c…*.",
            "Include the masculine definite article *el* at the start.",
          ],
          solution: [
            "Accepted IGCSE Spanish forms: **el móvil** (Spain) or **el celular** (Latin America).",
          ],
        },
        {
          id: "world-around-us-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "digital-media-and-tech",
          question:
            "Edexcel Q3c Grammar — Complete with the **preterite** form of **descargar** (*yo*): *«Ayer _______ una aplicación gratuita para aprender vocabulario.»* (Write ONLY the missing verb, with its accent.)",
          answer: { type: "text", accept: acceptedForms("descargar", "preterite", "yo") },
          traps: [
            {
              spec: { type: "text", accept: ["descargé", "descargo"] },
              feedback: "Verbs ending in *-gar* insert **u** before *-é* in the *yo* preterite: **descargué**!",
            },
          ],
          hints: [
            "*Ayer* triggers the preterite tense.",
            "Apply the *-gar → -gué* spelling shift in the *yo* form.",
          ],
          solution: [
            "*Descargar* ends in *-gar* → change *-gar* to **-gué** in *yo* preterite: **descargué**.",
          ],
          commonError: "Writing *descargé* without the silent *u*.",
        },
        {
          id: "world-around-us-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "digital-media-and-tech",
          question:
            "Edexcel Q3c Grammar — Complete with the **present subjunctive** of **subir** (*tú*): *«Te recomiendo que no _______ fotos con el uniforme del colegio a Internet.»* (Write ONLY the missing verb.)",
          answer: { type: "text", accept: acceptedForms("subir", "subjunctive", "tú") },
          traps: [
            {
              spec: { type: "text", accept: ["subes", "subiras"] },
              feedback: "*Te recomiendo que no…* triggers the present subjunctive (also identical to a negative *tú* command): swap *-es* to **-as**!",
            },
          ],
          hints: [
            "*Te recomiendo que* is a WEIRDO recommendation trigger.",
            "*Subir* is an *-ir* verb, so its present subjunctive uses opposite vowel **-a-** (*suba, subas…*).",
          ],
          solution: [
            "Take *yo subo*, drop *-o*, and add *-ir* subjunctive *tú* ending *-as*: **subas**.",
          ],
        },
        {
          id: "world-around-us-p2-q13",
          kind: "mcq",
          difficulty: "core",
          guideRef: "digital-media-and-tech",
          question:
            "Read the cybersecurity tip: *«Desconfía de cualquier enlace que prometa premios gratis; suele ser una estafa diseñada para robar tus datos bancarios.»* What does the tip warn users to distrust?",
          options: [
            "Any link promising free prizes",
            "Official software updates from your school",
            "Strong passwords containing numbers and symbols",
            "Educational podcasts in Spanish",
          ],
          answerIndex: 0,
          hints: [
            "*Desconfía de* = 'distrust / be wary of'; *cualquier enlace* = 'any link'.",
            "*Que prometa premios gratis* = 'that promises free prizes' (*una estafa* = a scam).",
          ],
          explanation:
            "**Any link promising free prizes** translates *cualquier enlace que prometa premios gratis*.",
        },
        {
          id: "world-around-us-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "digital-media-and-tech",
          marks: 4,
          question:
            "Edexcel Paper 2 Q6 / Q7 Style (Spanish) — Write a balanced article for your school magazine on **young people and smartphones**. Address all four points in **Spanish**:\n- how you use apps or websites in your daily routine\n- one clear benefit of modern connectivity\n- one serious online danger facing teenagers\n- how you will manage your screen habits next month",
          modelAnswer:
            "Todos los días uso mi móvil para escuchar música y descargar aplicaciones educativas. Por un lado, una gran ventaja de las redes es que nos permiten mantenernos en contacto con familiares en el extranjero. Sin embargo, por otro lado, el peligro principal es el ciberacoso y el robo de identidad. El mes que viene pasaré menos horas frente a la pantalla y apagaré mi ordenador antes de las diez.",
          markScheme: [
            {
              point: "Describes daily digital/app use in the present tense (e.g. uso mi móvil / celular, descargar aplicaciones, navegar).",
              keywords: ["movil", "celular", "ordenador", "computadora", "aplicaciones", "escuchar", "navego"],
            },
            {
              point: "States a concrete benefit using evaluative language (e.g. permiten, contacto, informarse).",
              keywords: ["permiten", "permite", "contacto", "informarse", "aprender", "util"],
            },
            {
              point: "Identifies a serious online risk with contrast connector (e.g. sin embargo, peligro, ciberacoso, robo de identidad, noticias falsas, enganchado).",
              keywords: ["peligro", "riesgo", "ciberacoso", "robo", "falsas", "enganchado", "enganchada", "privacidad"],
            },
            {
              point: "Expresses a future screen-time commitment in the Future or Near Future (e.g. pasaré, apagaré, voy a limitar, pantalla).",
              keywords: ["pasare", "apagare", "limitare", "usare", "pantalla", "reducire"],
            },
          ],
          hints: [
            "Use *Por un lado… sin embargo, por otro lado…* to link bullets 2 and 3 smoothly.",
            "Make sure bullet 4 clearly uses a future form (*pasaré menos horas / voy a apagar…*).",
          ],
          commonError: "Listing advantages and risks without contrast connectives or forgetting the future tense on the final bullet.",
        },
        {
          id: "world-around-us-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "global-and-social-issues",
          marks: 3,
          question:
            "Edexcel Paper 3 Speaking Follow-Up (Spanish) — Your examiner asks what challenges face big cities today and how life could improve. Write a 3-part Grade-9 response in **Spanish** covering:\n- two urban or economic problems affecting residents today\n- how your neighbourhood used to be cleaner or quieter years ago\n- what you would change if you were the mayor",
          modelAnswer:
            "Actualmente, los dos problemas más graves son el paro juvenil y la contaminación del aire causada por el tráfico. Hace diez años mi barrio era mucho más tranquilo, había menos basura y los vecinos se conocían mejor. Si yo fuera la alcaldesa, construiría más viviendas asequibles para ayudar a los sin techo y prohibiría los coches contaminantes en el centro.",
          markScheme: [
            {
              point: "Names two urban/social/environmental issues in the present (e.g. el paro / desempleo, la contaminación, la delincuencia, la basura, el alquiler).",
              keywords: ["paro", "desempleo", "contaminacion", "delincuencia", "pobreza", "trafico", "atascos"],
            },
            {
              point: "Contrasts the past neighbourhood using the Imperfect tense (e.g. era, había, vivíamos, conocían).",
              keywords: ["era", "habia", "viviamos", "estaba", "conocian", "respiraba"],
            },
            {
              point: "Uses a Grade-9 hypothetical 'si' clause + conditional (e.g. si fuera / fuese, construiría, prohibiría, invertiría, crearía).",
              keywords: ["fuera", "fuese", "construiria", "prohibiria", "invertiria", "crearia", "mejoraria"],
            },
          ],
          hints: [
            "Use Imperfect (*era*, *había*) for how your neighbourhood used to be.",
            "Unlock top-band grammar on bullet 3 with **Si fuera el alcalde / la alcaldesa, + conditional (-ía)**!",
          ],
          commonError: "Writing *Si sería* instead of **Si fuera / fuese** in the *si*-clause!",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "world-around-us-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "climate-and-pollution",
      question:
        "Double Gender Trap! Translate the 3-word phrase **'the polluted water'** (singular) into Spanish, paying close attention to BOTH the article before stressed *a-* and the adjective ending.",
      answer: { type: "text", accept: ["el agua contaminada"] },
      traps: [
        {
          spec: { type: "text", accept: ["la agua contaminada", "el agua contaminado", "la agua contaminado"] },
          feedback: "Halfway there! Singular *agua* takes **el** before stressed *a-*, AND because *agua* is feminine, the adjective MUST end in **-a**: **el agua contaminada**!",
        },
      ],
      hints: [
        "Step 1: Choose the singular definite article directly before stressed initial *a-* in *agua* (*el* or *la*?).",
        "Step 2: Remember that *agua* itself is 100% feminine (*las aguas*), never masculine!",
        "Step 3: Combine **el agua** with the feminine singular form of *contaminado*.",
      ],
      solution: [
        "Before stressed initial *a-*, feminine singular *la* becomes **el** → *el agua*.",
        "The noun remains feminine, so *contaminado* takes feminine singular **-a** → **el agua contaminada**.",
      ],
      commonError: "Writing *el agua contaminado* or *la agua contaminada*.",
    },
    {
      id: "world-around-us-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sustainability-and-action",
      question:
        "Grade-9 Subjunctive + Orthographic Shift — Complete with the **present subjunctive** of **proteger** (*ellos*): *«Es imprescindible que los gobiernos _______ la selva amazónica.»* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("proteger", "subjunctive", "ellos") },
      traps: [
        {
          spec: { type: "text", accept: ["protegen", "protegan"] },
          feedback: "Mind both mood and spelling! *Es imprescindible que* requires present subjunctive, and *g* shifts to **j** before *-an* (**protejan**).",
        },
      ],
      hints: [
        "Step 1: *Es imprescindible que* is a WEIRDO impersonal necessity trigger → present subjunctive.",
        "Step 2: Start from present *yo* of *proteger*: **protejo** (spelled with **j**!).",
        "Step 3: Drop *-o* and add 3rd-person plural *-er* subjunctive ending **-an**.",
      ],
      solution: [
        "Present *yo*: *protejo* → stem *protej-*.",
        "Add 3rd-person plural subjunctive ending *-an*: **protejan**.",
      ],
      commonError: "Writing *protegan* (which would sound like a hard /g/) or indicative *protegen*.",
    },
    {
      id: "world-around-us-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "sustainability-and-action",
      question:
        "Irregular Strong Preterite — Complete with the **preterite** form of **reducir** (*él*): *«Gracias a las placas solares, el instituto _______ su consumo eléctrico a la mitad el año pasado.»* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["redujo", "él redujo", "ella redujo", "usted redujo"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["redució", "reducío", "redujó"] },
          feedback: "Verbs ending in *-ducir* (*reducir, producir, conducir*) have strong **-uj-** preterite stems with UNACCENTED *-e / -o* endings: **redujo**!",
        },
      ],
      hints: [
        "Step 1: *El año pasado* + singular *el instituto* requires 3rd-person singular preterite.",
        "Step 2: All *-ducir* verbs (*conducir → condujo*, *producir → produjo*) use the strong preterite stem **-duj-**.",
        "Step 3: Strong preterite stems take unaccented **-o** (never *-ió* and never an accent!).",
      ],
      solution: [
        "Strong *-ducir* preterite stem: *reduj-*.",
        "Add unaccented 3rd-person singular ending *-o*: **redujo**.",
      ],
      commonError: "Regularising to *redució* or putting an accent on *redujó*.",
    },
    {
      id: "world-around-us-ch-q04",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "sustainability-and-action",
      question:
        "Select the sentence that combines a **Type-2 hypothetical 'si' clause** and **conditional main clause** with 100% Grade-9 accuracy:",
      options: [
        "Si todo el mundo reciclaría más, habría menos vertederos.",
        "Si todo el mundo recicle más, habría menos vertederos.",
        "Si todo el mundo reciclara más, habrá menos vertederos.",
        "Si todo el mundo reciclara más, habría menos vertederos.",
      ],
      answerIndex: 3,
      hints: [
        "Step 1: Never place a conditional (*-ía*) or present subjunctive (*recicle*) right after conditional *si*!",
        "Step 2: Check the tense pairing: **Si + imperfect subjunctive (-ra / -se)** must pair with the **conditional (-ía)** in the main clause.",
        "Step 3: Eliminate the option that mixes *reciclara* with future *habrá*.",
      ],
      explanation:
        "**Si todo el mundo reciclara más, habría menos vertederos.** pairs imperfect subjunctive *reciclara* in the *si*-clause with conditional *habría* in the main clause.",
    },
    {
      id: "world-around-us-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "global-and-social-issues",
      question:
        "Existential Subjunctive Trap — Complete with the single accurate form of **haber**: *«Me indigna que todavía _______ tantos niños sin acceso a la educación.»* (Write ONLY the missing 4-letter verb.)",
      answer: { type: "text", accept: ["haya"] },
      traps: [
        {
          spec: { type: "text", accept: ["hay", "hayan", "hubiera"] },
          feedback: "*Me indigna que* (present emotion) requires the **present subjunctive** of impersonal *hay*, which is always singular **haya** (never plural *hayan*!).",
        },
      ],
      hints: [
        "Step 1: *Me indigna que* ('It outrages me that') is a present-tense WEIRDO emotion trigger.",
        "Step 2: Identify the present subjunctive of *haber* from DISHES (*dé, vaya, sea, **haya**, esté, sepa*).",
        "Step 3: Does existential 'there is / there are' ever add *-n* for plural nouns? Never!",
      ],
      solution: [
        "After *Me indigna que*, indicative *hay* shifts to present subjunctive **haya**.",
        "Existential *haber* stays 3rd-person singular even before plural *tantos niños*: **haya**.",
      ],
      commonError: "Adding a plural *-n* to write *hayan* before plural nouns.",
    },
    {
      id: "world-around-us-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "charity-and-volunteering",
      question:
        "Future Time-Clause Subjunctive — Complete with the accurate form of **cumplir** (*yo*): *«En cuanto _______ dieciocho años, me haré voluntario de Cruz Roja.»* (Write ONLY the missing verb.)",
      answer: { type: "text", accept: ["cumpla", "yo cumpla"] },
      traps: [
        {
          spec: { type: "text", accept: ["cumpliré", "cumplo"] },
          feedback: "After *en cuanto* ('as soon as') referring to a **future** action (*me haré*), Spanish requires the **present subjunctive** (*cumpla*), never the future tense!",
        },
      ],
      hints: [
        "Step 1: Look at the main clause *me haré voluntario* (future!).",
        "Step 2: Time conjunctions (*cuando, en cuanto, tan pronto como*) pointing to the future ALWAYS take the **present subjunctive**.",
        "Step 3: Form the *yo* present subjunctive of regular *-ir* verb *cumplir* (*cumplo* → drop *-o* → add *-a*).",
      ],
      solution: [
        "*En cuanto* + future reference triggers the present subjunctive.",
        "*Cumplir* (*-ir* verb) in *yo* present subjunctive: **cumpla**.",
      ],
      commonError: "Writing *cumpliré* or indicative *cumplo* when referring to a future milestone.",
    },
    {
      id: "world-around-us-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "digital-media-and-tech",
      question:
        "Read the complex higher-tier extract: *«Lejos de acercarnos a los demás, el uso desmedido de las pantallas ha hecho que muchos adolescentes se sientan más aislados que nunca, a pesar de tener cientos de seguidores virtuales.»* What paradox does the author highlight?",
      options: [
        "Teenagers have stopped using smartphones altogether despite cheaper data plans",
        "Having hundreds of online followers has eliminated loneliness among young people",
        "Despite having hundreds of virtual followers, excessive screen use has made many teenagers feel more isolated than ever",
        "Schools have banned all screens even though students need them for homework",
      ],
      answerIndex: 2,
      hints: [
        "Step 1: Decode *Lejos de acercarnos a los demás* ('Far from bringing us closer to others') and *el uso desmedido* ('excessive use').",
        "Step 2: Translate *ha hecho que… se sientan más aislados que nunca* ('has made… feel more isolated than ever').",
        "Step 3: Connect the concession *a pesar de tener cientos de seguidores virtuales* ('despite having hundreds of virtual followers').",
      ],
      explanation:
        "**Despite having hundreds of virtual followers, excessive screen use has made many teenagers feel more isolated than ever** captures the exact contrast between *más aislados que nunca* and *a pesar de tener cientos de seguidores virtuales*.",
    },
    {
      id: "world-around-us-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "sustainability-and-action",
      marks: 4,
      question:
        "Grade-9 Synthesis Challenge (Spanish) — Write a rich 70–90 word speech for a Model UN youth summit linking **climate action** and **social solidarity**. Hit all four targets in **Spanish**:\n- describe a serious environmental AND human problem using accurate gender agreement\n- recount one concrete community or eco project completed last year\n- use an impersonal *es imprescindible / urgente que + subjunctive* call to action\n- include a hypothetical *si + imperfect subjunctive + conditional* vision of a fairer world",
      modelAnswer:
        "Hoy el problema más grave de nuestro planeta es que el cambio climático destruye cosechas y aumenta la pobreza y el hambre. El año pasado participamos en una campaña solidaria y recaudamos fondos para instalar pozos de agua limpia en zonas rurales. Ahora es imprescindible que todos los países reduzcan los combustibles fósiles y protejan los derechos humanos. Si los líderes mundiales invirtieran más en las energías renovables, habría menos desigualdad y viviríamos en un mundo mucho más justo.",
      markScheme: [
        {
          point: "Links an environmental threat and a human/social issue with accurate gender (e.g. el problema, nuestro planeta, el cambio climático, la pobreza, el hambre).",
          keywords: ["problema", "planeta", "climatico", "pobreza", "hambre", "sequia", "contaminacion"],
        },
        {
          point: "Narrates a completed past eco/community project in the Preterite (e.g. participamos, recaudamos, plantamos, organizamos, pasado).",
          keywords: ["participamos", "participe", "recaudamos", "organizamos", "organice", "plantamos", "pasado"],
        },
        {
          point: "Uses WEIRDO present subjunctive call to action (e.g. reduzcamos, reduzcan, protejamos, protejan, reciclemos, ayudemos).",
          keywords: ["reduzcan", "reduzcamos", "protejan", "protejamos", "reciclemos", "invirtamos", "actuen"],
        },
        {
          point: "Includes a Type-2 'si + imperfect subjunctive + conditional' sentence (e.g. invirtieran, reciclara, hubiera + habría, viviríamos, sería).",
          keywords: ["invirtieran", "invirtiese", "reciclara", "hubiera", "habria", "viviriamos", "seria"],
        },
      ],
      hints: [
        "Step 1: Watch *el problema grave*, *nuestro planeta*, and *el agua limpia* for spotless gender accuracy.",
        "Step 2: Use *El año pasado + preterite* (*recaudamos / plantamos / organizamos*) for your past project.",
        "Step 3: Finish with *Es imprescindible que + subjunctive* (*reduzcan / protejamos*) AND *Si… -ra/-ran, habría / viviríamos…*!",
      ],
      commonError: "Mixing future or conditional right after *si* (*Si invertirían*) instead of imperfect subjunctive (*Si invirtieran*).",
    },
  ],
};
