import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "world-around-us-m1",
    title: "Area D MCQ Paper 1 — Climate, Gender Traps & Eco-Action",
    questions: [
      {
        id: "world-around-us-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "climate-and-pollution",
        question:
          "Choose the grammatically accurate phrase to complete the sentence: *«El cambio climático es _______ para toda la humanidad.»*",
        options: [
          "un problema muy serio",
          "una problema muy seria",
          "un problema muy seria",
          "una problema muy serio",
        ],
        answerIndex: 0,
        hints: [
          "Check the gender of Greek-origin nouns ending in *-ma* such as *problema*, *clima*, and *sistema*.",
          "Because *problema* is masculine, both the indefinite article and the adjective must be masculine singular.",
        ],
        explanation:
          "**un problema muy serio** is right because *problema* is a Greek-origin masculine *-ma* noun, requiring masculine *un* and *serio* (not feminine *una* or *seria*).",
      },
      {
        id: "world-around-us-m1-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "climate-and-pollution",
        question:
          "Select the ONLY grammatically accurate phrase for *'clean drinking water'* in Spanish:",
        options: [
          "la agua limpia y potable",
          "el agua limpia y potable",
          "el agua limpio y potable",
          "un agua limpio y potable",
        ],
        answerIndex: 1,
        hints: [
          "What gender is the noun *agua*, and what happens to singular *la* immediately before a stressed initial *a-*?",
          "Singular *la* becomes *el* before stressed *a-*, yet *agua* stays feminine so any adjective modifying it must stay feminine!",
        ],
        explanation:
          "**el agua limpia y potable** is correct: *agua* is feminine (requiring feminine *limpia*), while singular *la* changes to *el* directly before stressed *a-* to avoid the double-*a* sound (*la agua* and masculine *limpio* are both wrong).",
      },
      {
        id: "world-around-us-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "climate-and-pollution",
        question:
          "Which Spanish term means **'the greenhouse effect'**?",
        options: [
          "la capa de ozono",
          "la lluvia ácida",
          "el efecto invernadero",
          "la marea negra",
        ],
        answerIndex: 2,
        hints: [
          "*Un invernadero* is a glasshouse where plants trap heat.",
          "Eliminate *la capa de ozono* (ozone layer), *la lluvia ácida* (acid rain), and *la marea negra* (oil spill).",
        ],
        explanation:
          "**el efecto invernadero** means 'the greenhouse effect'. *La capa de ozono* is the ozone layer, *la lluvia ácida* is acid rain, and *la marea negra* is an oil spill.",
      },
      {
        id: "world-around-us-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "climate-and-pollution",
        question:
          "Read the headline: *«La prolongada falta de lluvia en el sur de España ha provocado una grave _______ este verano.»* Which noun fits the gap?",
        options: [
          "inundación",
          "basura",
          "huella",
          "sequía",
        ],
        answerIndex: 3,
        hints: [
          "Look at the clue *la prolongada falta de lluvia* ('prolonged lack of rain').",
          "Contrast *inundación* (flood) with the word related to *seco* (dry).",
        ],
        explanation:
          "**sequía** ('drought') is caused by a prolonged lack of rain (*falta de lluvia*), whereas *inundación* means 'flood' (the exact opposite).",
      },
      {
        id: "world-around-us-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sustainability-and-action",
        question:
          "Complete the impersonal eco-advice: *«En casa, se debería _______ los aparatos eléctricos por la noche.»*",
        options: [
          "desenchufar",
          "desenchufamos",
          "desenchufando",
          "desenchufado",
        ],
        answerIndex: 0,
        hints: [
          "What verb form always follows modal and impersonal obligation structures like *se debe*, *se debería*, and *hay que*?",
          "Never put a conjugated verb or gerund directly after *se debería*.",
        ],
        explanation:
          "**desenchufar** (infinitive) is required directly after *se debería* ('one/people should unplug'); *desenchufamos* conjugates two verbs in a row.",
      },
      {
        id: "world-around-us-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainability-and-action",
        question:
          "Which sentence accurately expresses **'In order to protect the planet, I use public transport'**?",
        options: [
          "Por proteger la planeta, uso el transporte público.",
          "Para proteger el planeta, uso el transporte público.",
          "Para protegiendo el planeta, uso el transporte público.",
          "Por proteger el planeta, uso el transporte público.",
        ],
        answerIndex: 1,
        hints: [
          "Check two traps at once: *por* vs *para* for purpose ('in order to'), and the gender of *planeta*.",
          "Purpose takes *para + infinitive* (never *por* and never the *-ndo* gerund), and *planeta* is masculine (*el planeta*).",
        ],
        explanation:
          "**Para proteger el planeta, uso el transporte público.** is right: *para + infinitive* expresses 'in order to', and *el planeta* is masculine (*por proteger* expresses cause/reason rather than purpose, and *protegiendo* misuses the gerund after a preposition).",
      },
      {
        id: "world-around-us-m1-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sustainability-and-action",
        question:
          "Complete the Grade-9 WEIRDO subjunctive sentence: *«Es imprescindible que todos nosotros _______ el medio ambiente.»*",
        options: [
          "protegemos",
          "protegamos",
          "protejamos",
          "protegeremos",
        ],
        answerIndex: 2,
        hints: [
          "*Es imprescindible que* triggers the present subjunctive.",
          "Start from present *yo* of *proteger* (*protejo*), drop *-o*, and keep the consonant shift that preserves the /x/ sound before *-a*!",
          "Writing *g* before *a* (*protegamos*) would change the pronunciation to a hard /g/.",
        ],
        explanation:
          "**protejamos** is the *nosotros* present subjunctive of *proteger* (from *yo protejo*, keeping **j** before *-amos*). *Protegemos* is present indicative, and *protegamos* misses the mandatory *g → j* spelling shift.",
      },
      {
        id: "world-around-us-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sustainability-and-action",
        question:
          "In Spain, what should you throw into **el contenedor verde (el iglú)**?",
        options: [
          "Las cajas de cartón y los periódicos",
          "Las bolsas de plástico y las latas",
          "Las pilas usadas y los móviles viejos",
          "Las botellas y los tarros de vidrio",
        ],
        answerIndex: 3,
        hints: [
          "Recall Spain's street container colours: *azul* = paper/cardboard, *amarillo* = plastic packaging & cans, *verde* = ?",
          "Glass bottles and jars belong in the green igloo bin.",
        ],
        explanation:
          "**Las botellas y los tarros de vidrio** go into *el contenedor verde*. Cardboard/newspapers go into *el contenedor azul*, and plastic packaging/cans go into *el contenedor amarillo*.",
      },
      {
        id: "world-around-us-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-and-social-issues",
        question:
          "Complete the sentence accurately: *«En mi ciudad, me _______ muchísimo el paro juvenil y la falta de vivienda.»*",
        options: [
          "preocupan",
          "preocupa",
          "preocupo",
          "preocupas",
        ],
        answerIndex: 0,
        hints: [
          "*Preocupar* works like *gustar*: the verb agrees with the things causing worry.",
          "Look at the compound subject *el paro juvenil y la falta de vivienda* — two things together make a plural subject!",
        ],
        explanation:
          "**preocupan** agrees with the plural compound subject (*el paro juvenil y la falta de vivienda*). *Preocupa* is only for a single noun or clause, and *preocupo* would mean 'I worry someone else'.",
      },
      {
        id: "world-around-us-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-and-social-issues",
        question:
          "Which word is an exact Edexcel 4SP0 synonym for **el desempleo**?",
        options: [
          "el desarrollo",
          "el paro",
          "el delito",
          "el vertedero",
        ],
        answerIndex: 1,
        hints: [
          "Both words mean 'unemployment' (*estar sin trabajo*).",
          "Eliminate *el desarrollo* (development), *el delito* (crime/offence), and *el vertedero* (landfill).",
        ],
        explanation:
          "**el paro** and **el desempleo** both mean 'unemployment'. *El desarrollo* means development, *el delito* means crime/offence, and *el vertedero* means landfill site.",
      },
      {
        id: "world-around-us-m1-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "global-and-social-issues",
        question:
          "Complete the Grade-9 social-justice sentence: *«Es una vergüenza que todavía _______ tantos niños pasando hambre.»*",
        options: [
          "hay",
          "son",
          "haya",
          "hayan",
        ],
        answerIndex: 2,
        hints: [
          "*Es una vergüenza que* ('It is a disgrace that') is an emotional/impersonal judgement that triggers the present subjunctive.",
          "What is the present subjunctive of impersonal existential *hay* ('there are')?",
          "Existential *haber* ('there is / there are') NEVER takes a plural *-n*!",
        ],
        explanation:
          "**haya** is the 3rd-person singular present subjunctive of impersonal *haber* ('that there is/are'). *Hay* fails to use the subjunctive, and *hayan* is wrong because existential *haber* stays invariable in the singular even before plural *tantos niños*.",
      },
      {
        id: "world-around-us-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charity-and-volunteering",
        question:
          "Choose the grammatically accurate sentence about volunteering:",
        options: [
          "Los sábados ayudo los sin techo en un comedor social.",
          "Los sábados ayudo para los sin techo en un comedor social.",
          "Los sábados ayudo a los sin techos en un comedor social.",
          "Los sábados ayudo a los sin techo en un comedor social.",
        ],
        answerIndex: 3,
        hints: [
          "Check two rules: 1) Do human direct objects after *ayudar* need the personal *a*? 2) Does *los sin techo* add an *-s* to *techo*?",
          "*Los sin techo* literally means 'those without a roof', so *techo* stays singular, and *ayudar* requires personal *a* before people.",
        ],
        explanation:
          "**Los sábados ayudo a los sin techo en un comedor social.** includes the mandatory personal *a* before a human group (*a los sin techo*) and keeps *sin techo* invariable (never *sin techos*).",
      },
      {
        id: "world-around-us-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "charity-and-volunteering",
        question:
          "What does the charity phrase **recaudar fondos** mean in English?",
        options: [
          "to raise funds",
          "to waste money",
          "to sponsor a child",
          "to recycle cardboard",
        ],
        answerIndex: 0,
        hints: [
          "*Los fondos* = funds; *recaudar* = to collect/raise for a cause.",
          "Remember: 'to waste' is *malgastar* and 'to sponsor' is *apadrinar*.",
        ],
        explanation:
          "**to raise funds** is the meaning of *recaudar fondos* (e.g. *recaudamos quinientos euros para una ONG*).",
      },
      {
        id: "world-around-us-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "digital-media-and-tech",
        question:
          "Which Spanish noun phrase refers to **'fake news'** on social media?",
        options: [
          "las redes inalámbricas",
          "las noticias falsas",
          "las contraseñas seguras",
          "las aplicaciones gratuitas",
        ],
        answerIndex: 1,
        hints: [
          "*Una noticia* is a piece of news (NOT 'a notice'!).",
          "Combine *noticias* with the feminine plural adjective *falsas*.",
        ],
        explanation:
          "**las noticias falsas** means 'fake news'. Watch the false friend: *noticias* = news, whereas 'notices/ads' = *anuncios / avisos*.",
      },
      {
        id: "world-around-us-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "digital-media-and-tech",
        question:
          "Complete the online-safety sentence: *«Piensa dos veces antes de _______ tu ubicación en las redes sociales.»*",
        options: [
          "compartes",
          "compartiendo",
          "compartir",
          "compartido",
        ],
        answerIndex: 2,
        hints: [
          "Look at the preposition *antes de* ('before -ing') right before the gap.",
          "In Spanish, every verb directly after a preposition (*antes de, después de, sin, para*) must be in the infinitive!",
        ],
        explanation:
          "**compartir** (infinitive) is required after the preposition *antes de*. English uses '-ing' ('before sharing'), which tempts learners into the trap *compartiendo*, but Spanish strictly requires the infinitive after prepositions.",
      },
    ],
  },
  {
    id: "world-around-us-m2",
    title: "Area D MCQ Paper 2 — Reading Inference, Preterite Shifts & Social Action",
    questions: [
      {
        id: "world-around-us-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "climate-and-pollution",
        question:
          "Read Elena's blog post: *«Antes iba al instituto en el coche de mi padre todos los días, pero desde que vimos un documental sobre el deshielo ártico, voy en bicicleta salvo cuando llueve a cántaros.»* How does Elena travel to school **most days now**?",
        options: [
          "By car with her father every day",
          "On foot through the park",
          "By public bus",
          "By bicycle (except in heavy rain)",
        ],
        answerIndex: 3,
        hints: [
          "Distinguish imperfect habitual past (*Antes iba… en el coche*) from present tense (*voy…*).",
          "*Salvo cuando llueve a cántaros* means 'except when it pours with rain'.",
        ],
        explanation:
          "**By bicycle (except in heavy rain)** matches *voy en bicicleta salvo cuando llueve a cántaros*. *Iba en el coche* is Imperfect ('used to go by car'), describing only her past habit.",
      },
      {
        id: "world-around-us-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "climate-and-pollution",
        question:
          "Choose the correct plural phrase for *'all the ecosystems of our planet'*:",
        options: [
          "todos los ecosistemas de nuestro planeta",
          "todas las ecosistemas de nuestra planeta",
          "todos los ecosistemas de nuestra planeta",
          "todas las ecosistemas de nuestro planeta",
        ],
        answerIndex: 0,
        hints: [
          "Check the gender of BOTH nouns: *ecosistema* (Greek *-ma*) and *planeta*.",
          "Both *el ecosistema* and *el planeta* are masculine!",
        ],
        explanation:
          "**todos los ecosistemas de nuestro planeta** is right because both *ecosistema* (Greek *-ma* noun) and *planeta* are masculine, requiring *todos los* and *nuestro*.",
      },
      {
        id: "world-around-us-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "climate-and-pollution",
        question:
          "Which verb means **'to waste'** in *«No debemos _______ ni una gota de agua durante la sequía»*?",
        options: [
          "ahorrar",
          "malgastar",
          "reutilizar",
          "proteger",
        ],
        answerIndex: 1,
        hints: [
          "Look at *No debemos… ni una gota de agua* ('We must not… even a drop of water').",
          "*Gastar* = spend + *mal-* = badly → to waste (the antonym of *ahorrar*).",
        ],
        explanation:
          "**malgastar** means 'to waste' (water, electricity, money). *Ahorrar* means 'to save', which would contradict *No debemos*.",
      },
      {
        id: "world-around-us-m2-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sustainability-and-action",
        question:
          "Complete the Grade-9 *si*-clause: *«Si el ayuntamiento _______ más carriles bici, habría menos atascos en el centro.»*",
        options: [
          "construirá",
          "construiría",
          "construyera",
          "construye",
        ],
        answerIndex: 2,
        hints: [
          "Look at the main clause verb *habría* (conditional: 'there would be').",
          "A hypothetical conditional main clause requires **Si + imperfect subjunctive** (*-ra / -se*) — NEVER future or conditional right after *si*!",
          "*Construir* inserts *y* in the 3rd-person preterite (*construyeron*), giving the imperfect subjunctive stem *construyer-*.",
        ],
        explanation:
          "**construyera** (imperfect subjunctive of *construir*, from *ellos construyeron*) pairs with conditional *habría*. Spanish never allows the conditional (*construiría*) or future (*construirá*) immediately after conditional *si*.",
      },
      {
        id: "world-around-us-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainability-and-action",
        question:
          "Complete the *yo* preterite sentence: *«Anoche _______ todas las luces y el ordenador antes de acostarme.»*",
        options: [
          "apago",
          "apagé",
          "apaguó",
          "apagué",
        ],
        answerIndex: 3,
        hints: [
          "*Anoche* ('last night') requires the preterite tense in the *yo* form.",
          "Verbs ending in *-gar* (*apagar*) insert **u** before *-é* so the hard /g/ sound isn't lost!",
        ],
        explanation:
          "**apagué** is the *yo* preterite of *apagar* (*-gar → -gué*). *Apagé* forgets the silent *u*, *apago* is present tense, and *apaguó* mixes up persons and stems.",
      },
      {
        id: "world-around-us-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainability-and-action",
        question:
          "What is **la energía eólica**?",
        options: [
          "Wind energy",
          "Solar energy",
          "Coal power",
          "Nuclear energy",
        ],
        answerIndex: 0,
        hints: [
          "Named after Aeolus (*Eolo*), the ancient Greek keeper of the winds!",
          "Think of giant white turbines (*aerogeneradores*) spinning on Spanish hills in Castilla-La Mancha.",
        ],
        explanation:
          "**Wind energy** is *la energía eólica* (generated by wind turbines). Solar energy is *la energía solar*, coal is *el carbón*, and nuclear is *la energía nuclear*.",
      },
      {
        id: "world-around-us-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-and-social-issues",
        question:
          "Read Mateo's comment: *«Compro café y chocolate de comercio justo porque garantiza un sueldo digno a los agricultores en los países en vías de desarrollo, aunque cueste un poco más.»* What downside of fair-trade products does Mateo mention?",
        options: [
          "They taste worse than normal brands",
          "They cost slightly more",
          "They are impossible to find in supermarkets",
          "They harm local farmers",
        ],
        answerIndex: 1,
        hints: [
          "Look at the concession clause introduced by *aunque* at the end of the sentence.",
          "*Cueste* comes from *costar* ('to cost'), and *un poco más* = 'a little more'.",
        ],
        explanation:
          "**They cost slightly more** matches *aunque cueste un poco más* ('even if / although it costs a little more'). Its positive benefit is guaranteeing a fair wage (*un sueldo digno*) to farmers in developing countries.",
      },
      {
        id: "world-around-us-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-and-social-issues",
        question:
          "Which phrase correctly translates **'extreme hunger'** in Spanish?",
        options: [
          "un hambre extremo",
          "el hambre extremo",
          "un hambre extrema",
          "mucho hambre extremo",
        ],
        answerIndex: 2,
        hints: [
          "Like *agua*, *hambre* starts with a stressed *a-* sound (the *h* is silent!) and is a **feminine** noun.",
          "Singular *una* shortens to *un* before *hambre*, while the adjective after *hambre* MUST stay feminine (*-a*)!",
        ],
        explanation:
          "**un hambre extrema** is right: *hambre* is feminine (so feminine *extrema* and *mucha hambre*), taking *el/un* only directly before its stressed initial *ha-*.",
      },
      {
        id: "world-around-us-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-and-social-issues",
        question:
          "What does **el analfabetismo** mean in an Area D reading text on global inequality?",
        options: [
          "Homelessness",
          "Global warming",
          "Cyberbullying",
          "Illiteracy",
        ],
        answerIndex: 3,
        hints: [
          "Spot the root *alfabeto* ('alphabet') with the negative prefix *an-*.",
          "Being unable to read and write (*no saber leer ni escribir*).",
        ],
        explanation:
          "**Illiteracy** is *el analfabetismo* (from *an-* + *alfabeto*). Homelessness is *la falta de vivienda*, global warming is *el calentamiento global*, and cyberbullying is *el ciberacoso*.",
      },
      {
        id: "world-around-us-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charity-and-volunteering",
        question:
          "Complete the preterite volunteering narrative: *«El sábado pasado yo _______ un mercadillo solidario y mis amigos _______ ropa de segunda mano.»*",
        options: [
          "organicé … donaron",
          "organizé … donaron",
          "organizo … donaban",
          "organicé … donan",
        ],
        answerIndex: 0,
        hints: [
          "*El sábado pasado* ('last Saturday') places both completed event verbs in the preterite.",
          "Remember the *-zar → -cé* spelling change for *organizar* in the *yo* preterite!",
        ],
        explanation:
          "**organicé … donaron** puts both completed actions in the preterite and applies the mandatory *z → c* shift before *-é* in *organicé* (*organizé* is a classic spelling error).",
      },
      {
        id: "world-around-us-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "charity-and-volunteering",
        question:
          "Complete the future volunteering time clause: *«Cuando _______ dieciocho años, trabajaré de voluntaria para una ONG en Perú.»*",
        options: [
          "tendré",
          "tenga",
          "tengo",
          "tenía",
        ],
        answerIndex: 1,
        hints: [
          "Look at the main verb *trabajaré* (future tense!).",
          "Whenever *cuando* refers to a **future** action that has not happened yet, Spanish forbids the future tense after *cuando* and triggers the **present subjunctive**!",
          "Form the *yo* present subjunctive of *tener* from *tengo* → *tenga*.",
        ],
        explanation:
          "**tenga** (present subjunctive) is mandatory after *cuando* referring to the future (*Cuando tenga dieciocho años, trabajaré…*). Writing future *tendré* right after *cuando* is one of the biggest IGCSE tense traps!",
      },
      {
        id: "world-around-us-m2-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "charity-and-volunteering",
        question:
          "Where do volunteers prepare and serve free hot meals to people in need?",
        options: [
          "En un vertedero municipal",
          "En un atasco de tráfico",
          "En un comedor social",
          "En una placa solar",
        ],
        answerIndex: 2,
        hints: [
          "*Comedor* comes from *comer* ('to eat' / 'dining room').",
          "A community dining hall / soup kitchen is *un comedor social*.",
        ],
        explanation:
          "**En un comedor social** ('in a soup kitchen / community dining room') is where volunteers serve meals. *Un vertedero* is a landfill site, *un atasco* is a traffic jam, and *una placa solar* is a solar panel.",
      },
      {
        id: "world-around-us-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "digital-media-and-tech",
        question:
          "Complete the sentence describing phone addiction for **Lucía** (feminine singular): *«Mi hermana menor _______ al móvil; mira la pantalla cada dos minutos.»*",
        options: [
          "es enganchado",
          "está enganchado",
          "es enganchada",
          "está enganchada",
        ],
        answerIndex: 3,
        hints: [
          "Check both *ser* vs *estar* for states resulting from a participle AND feminine agreement with *mi hermana menor*.",
          "The idiom 'to be hooked on' is *estar enganchado/a a*.",
        ],
        explanation:
          "**está enganchada** uses *estar* (temporary/acquired state with past participle) and feminine *-a* to agree with *mi hermana menor*.",
      },
      {
        id: "world-around-us-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "digital-media-and-tech",
        question:
          "What does **la brecha digital** refer to?",
        options: [
          "Inequality between those with and without reliable access to internet and digital devices",
          "A cracked smartphone screen",
          "A fast wireless fibre-optic cable",
          "A popular video-sharing app",
        ],
        answerIndex: 0,
        hints: [
          "*Una brecha* is a gap or divide.",
          "Think about rural or low-income households lacking broadband or computers.",
        ],
        explanation:
          "**Inequality between those with and without reliable access to internet and digital devices** is *la brecha digital* ('the digital divide').",
      },
      {
        id: "world-around-us-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "digital-media-and-tech",
        question:
          "Choose the Grade-9 safety recommendation with accurate WEIRDO subjunctive:",
        options: [
          "Mis padres me aconsejan que configuro mi perfil en privado.",
          "Mis padres me aconsejan que configure mi perfil en privado.",
          "Mis padres me aconsejan que configuraré mi perfil en privado.",
          "Mis padres me aconsejan que configurando mi perfil en privado.",
        ],
        answerIndex: 1,
        hints: [
          "*Aconsejar que* ('to advise that') is a WEIRDO recommendation trigger with a change of subject (*mis padres* → *yo*).",
          "*Configurar* is an *-ar* verb, so its *yo* present subjunctive flips the ending to *-e*!",
        ],
        explanation:
          "**Mis padres me aconsejan que configure mi perfil en privado.** correctly triggers the *yo* present subjunctive **configure** after *aconsejar que* (*configuro* is indicative and *configuraré* is future).",
      },
    ],
  },
  {
    id: "world-around-us-m3",
    title: "Area D MCQ Paper 3 — Higher Grammar Precision & Exam Distractors",
    questions: [
      {
        id: "world-around-us-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "climate-and-pollution",
        question:
          "Watch the false friend! What does *«Actualmente, muchas ciudades españolas restringen los coches más contaminantes»* mean?",
        options: [
          "Actually, no Spanish cities restrict polluting cars.",
          "Eventually, Spanish cities might restrict polluting cars.",
          "Currently / Nowadays, many Spanish cities restrict the most polluting cars.",
          "In the past, many Spanish cities restricted polluting cars.",
        ],
        answerIndex: 2,
        hints: [
          "*Actual* = current/present, so *actualmente* does NOT mean 'actually'!",
          "'Actually / in fact' in Spanish is *en realidad* or *de hecho*.",
        ],
        explanation:
          "**Currently / Nowadays, many Spanish cities restrict the most polluting cars.** *Actualmente* is a classic IGCSE false friend meaning 'currently / nowadays' (*hoy en día*), never 'actually'.",
      },
      {
        id: "world-around-us-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "climate-and-pollution",
        question:
          "Complete the preterite report on forest fires: *«El verano pasado, el incendio forestal _______ miles de hectáreas de bosque.»*",
        options: [
          "destruió",
          "destruyé",
          "destruiste",
          "destruyó",
        ],
        answerIndex: 3,
        hints: [
          "*El verano pasado* + singular subject *el incendio forestal* requires 3rd-person singular preterite.",
          "In verbs ending in *-uir* (*destruir, construir*), unstressed *i* between two vowels turns into **y** (*-ió → -yó*)!",
        ],
        explanation:
          "**destruyó** is the 3rd-person singular preterite of *destruir* (with *i → y* between vowels and an accent on *-ó*). *Destruió* violates Spanish orthography.",
      },
      {
        id: "world-around-us-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainability-and-action",
        question:
          "Which verb means **'to save'** specifically when talking about **saving a document on your computer** (as opposed to saving water or rescuing wildlife)?",
        options: [
          "guardar",
          "ahorrar",
          "salvar",
          "malgastar",
        ],
        answerIndex: 0,
        hints: [
          "Recall the 3 ways Spanish splits English 'to save': *ahorrar* (water/energy/money), *salvar* (rescue from danger), and ? (files/secrets).",
          "On a Spanish keyboard menu, 'Ctrl + S' says *Guardar archivo*.",
        ],
        explanation:
          "**guardar** means to save a computer file (*guardar un archivo*) or keep a secret. *Ahorrar* is for resources/money (*ahorrar electricidad*), and *salvar* means to rescue (*salvar las ballenas*).",
      },
      {
        id: "world-around-us-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sustainability-and-action",
        question:
          "Complete the WEIRDO subjunctive sentence: *«Es esencial que las fábricas _______ las emisiones de dióxido de carbono.»*",
        options: [
          "reducen",
          "reduzcan",
          "redujeron",
          "reducirán",
        ],
        answerIndex: 1,
        hints: [
          "*Es esencial que* triggers the present subjunctive for plural *las fábricas*.",
          "Start from present *yo* of *reducir*: *reduzco* → drop *-o* → add *-an*!",
        ],
        explanation:
          "**reduzcan** is the 3rd-person plural present subjunctive of *reducir* (built from *yo reduzco*). *Reducen* is present indicative, *redujeron* is preterite, and *reducirán* is future.",
      },
      {
        id: "world-around-us-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sustainability-and-action",
        question:
          "Choose the sentence that accurately uses **en vez de** ('instead of'):",
        options: [
          "Llevo una botella reutilizable en vez de compro botellas de plástico.",
          "Llevo una botella reutilizable en vez de comprando botellas de plástico.",
          "Llevo una botella reutilizable en vez de comprar botellas de plástico.",
          "Llevo una botella reutilizable en vez que comprar botellas de plástico.",
        ],
        answerIndex: 2,
        hints: [
          "The preposition phrase is *en vez de* (never *en vez que*).",
          "After *de*, Spanish requires the **infinitive** (*comprar*), never the *-ndo* gerund or conjugated verb!",
        ],
        explanation:
          "**Llevo una botella reutilizable en vez de comprar botellas de plástico.** follows *en vez de* directly with the infinitive *comprar*.",
      },
      {
        id: "world-around-us-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "global-and-social-issues",
        question:
          "Read the radio excerpt: *«Aunque la tasa de paro ha bajado un poco este año, el alquiler sigue subiendo y cada vez más jóvenes no pueden independizarse.»* Why can young people still not move out on their own?",
        options: [
          "Unemployment has doubled this year",
          "Public transport has been cancelled",
          "Universities have closed down",
          "Rent keeps rising despite slightly lower unemployment",
        ],
        answerIndex: 3,
        hints: [
          "Look at both halves: *la tasa de paro ha bajado un poco* (unemployment has fallen slightly) + *el alquiler sigue subiendo*.",
          "*El alquiler* = rent; *seguir + gerund* (*sigue subiendo*) = keeps going up.",
        ],
        explanation:
          "**Rent keeps rising despite slightly lower unemployment** matches *Aunque la tasa de paro ha bajado un poco… el alquiler sigue subiendo*.",
      },
      {
        id: "world-around-us-m3-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "global-and-social-issues",
        question:
          "Which Spanish noun means **'inequality'**?",
        options: [
          "la desigualdad",
          "la delincuencia",
          "la sequía",
          "la contraseña",
        ],
        answerIndex: 0,
        hints: [
          "*Igual* = equal → *igualdad* = equality → add negative prefix *des-*.",
          "Eliminate *la delincuencia* (crime), *la sequía* (drought), and *la contraseña* (password).",
        ],
        explanation:
          "**la desigualdad** means 'inequality' (*des-* + *igualdad*). *La delincuencia* is crime, *la sequía* is drought, and *la contraseña* is password.",
      },
      {
        id: "world-around-us-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "global-and-social-issues",
        question:
          "Complete the sentence with the accurate subjunctive form: *«Me entristece que muchas familias refugiadas no _______ acceso al agua potable.»*",
        options: [
          "tienen",
          "tengan",
          "tuvieron",
          "tendrán",
        ],
        answerIndex: 1,
        hints: [
          "*Me entristece que* ('It saddens me that') is a WEIRDO emotion trigger!",
          "Form the *ellas* present subjunctive of *tener* from *yo tengo* → drop *-o* → add *-an*.",
        ],
        explanation:
          "**tengan** is the 3rd-person plural present subjunctive of *tener*, triggered by the emotion clause *Me entristece que…* (*tienen* stays in the indicative).",
      },
      {
        id: "world-around-us-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charity-and-volunteering",
        question:
          "What does the idiomatic Volunteering/Eco expression **aportar mi granito de arena** mean?",
        options: [
          "to clean sandy beaches every weekend",
          "to build houses out of brick and sand",
          "to do my bit / make my small contribution",
          "to waste time on small details",
        ],
        answerIndex: 2,
        hints: [
          "Literally 'to contribute my tiny grain of sand' toward a bigger collective effort.",
          "Think of how many tiny grains build something worthwhile when volunteers work together.",
        ],
        explanation:
          "**to do my bit / make my small contribution** is the idiomatic meaning of *aportar mi granito de arena* — a top-band phrase for Paper 2 Q7 and Paper 3!",
      },
      {
        id: "world-around-us-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "charity-and-volunteering",
        question:
          "Read Sofía's reflection: *«El año pasado colaboré en un banco de alimentos; clasificábamos latas y arroz mientras charlábamos, y aprendí a valorar lo que tenemos.»* Why are *clasificábamos* and *charlábamos* in the **imperfect**, whereas *aprendí* is in the **preterite**?",
        options: [
          "Because *clasificar* and *charlar* do not exist in the preterite",
          "Because Sofía is talking about next year's plans",
          "Because *aprendí* means 'I used to learn every week'",
          "Because ongoing background tasks take the imperfect, while the overall lesson learnt is a completed takeaway in the preterite",
        ],
        answerIndex: 3,
        hints: [
          "Notice *mientras* ('while'): two ongoing background actions happening together take the Imperfect (*-ábamos*).",
          "Summing up the overall realisation (*aprendí a valorar*) frames it as a completed takeaway in the Preterite.",
        ],
        explanation:
          "**Because ongoing background tasks take the imperfect, while the overall lesson learnt is a completed takeaway in the preterite** — blending Imperfect + Preterite like this is hallmark Grade-9 past narration.",
      },
      {
        id: "world-around-us-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "charity-and-volunteering",
        question:
          "Look closely at personal *a* and the subjunctive! Which sentence means *'Our NGO is looking for a volunteer (any suitable person) who speaks Arabic'*?",
        options: [
          "Nuestra ONG busca un voluntario que hable árabe.",
          "Nuestra ONG busca a un voluntario que habla árabe.",
          "Nuestra ONG busca por un voluntario que hable árabe.",
          "Nuestra ONG busca para un voluntario que habla árabe.",
        ],
        answerIndex: 0,
        hints: [
          "First: *buscar* already includes 'for' ('to look for'), so NEVER add *por* or *para* after *buscar*!",
          "Second: when the person sought is hypothetical/unspecified ('any volunteer who might speak Arabic'), Spanish drops personal *a* AND puts the relative clause in the present subjunctive (*hable*)!",
        ],
        explanation:
          "**Nuestra ONG busca un voluntario que hable árabe.** omits personal *a* and uses subjunctive *hable* because the volunteer is hypothetical/not yet identified (whereas *busca a un voluntario que habla árabe* would refer to a specific volunteer they already know!). Also, *buscar* never takes *por/para*.",
      },
      {
        id: "world-around-us-m3-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "digital-media-and-tech",
        question:
          "Which pair gives BOTH valid Spanish words (Castilian & Latin American) for **'computer'**?",
        options: [
          "el teclado / la pantalla",
          "el ordenador / la computadora",
          "el enlace / el archivo",
          "el seguidor / el perfil",
        ],
        answerIndex: 1,
        hints: [
          "Spain typically uses a masculine noun starting with *o-*; Latin America uses a feminine noun starting with *c-*.",
          "*El teclado* is keyboard and *la pantalla* is screen.",
        ],
        explanation:
          "**el ordenador / la computadora** both mean 'computer' and are equally accepted in Pearson Edexcel 4SP0.",
      },
      {
        id: "world-around-us-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "digital-media-and-tech",
        question:
          "What online danger is described here: *«Un desconocido usó los datos bancarios y las fotos de mi tío para hacerse pasar por él en Internet»*?",
        options: [
          "el comercio justo",
          "el desarrollo sostenible",
          "el robo de identidad",
          "la conexión inalámbrica",
        ],
        answerIndex: 2,
        hints: [
          "*Hacerse pasar por él* = 'to impersonate him / pass oneself off as him' using his bank details and photos.",
          "Match this to the Spanish phrase for 'identity theft'.",
        ],
        explanation:
          "**el robo de identidad** ('identity theft') matches stealing someone's personal/banking details to impersonate them online.",
      },
      {
        id: "world-around-us-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "digital-media-and-tech",
        question:
          "Choose the connector pair that cleanly introduces **two contrasting sides** of a technology debate:",
        options: [
          "Primero… y además…",
          "Porque… puesto que…",
          "Así que… por lo tanto…",
          "Por un lado… sin embargo, por otro lado…",
        ],
        answerIndex: 3,
        hints: [
          "You want 'On the one hand… however, on the other hand…'.",
          "*Además* adds another point on the same side; *puesto que* gives a reason; *por lo tanto* gives a result.",
        ],
        explanation:
          "**Por un lado… sin embargo, por otro lado…** structures a balanced evaluation (*ventajas vs peligros*), whereas the other pairs express addition, cause, or consequence.",
      },
      {
        id: "world-around-us-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "digital-media-and-tech",
        question:
          "Complete the purpose-with-subject-change sentence: *«El instituto organiza talleres sobre seguridad digital _______ los alumnos sepan detectar las noticias falsas.»*",
        options: [
          "para",
          "por que",
          "para que",
          "antes de",
        ],
        answerIndex: 2,
        hints: [
          "Look after the gap: there is a new subject (*los alumnos*) + a present subjunctive verb (*sepan* from DISHES *saber*)!",
          "Bare *para* and *antes de* require an infinitive, whereas 'in order that / so that' + a new subject + subjunctive requires a two-word conjunction.",
        ],
        explanation:
          "**para que** ('so that / in order that') introduces a purpose clause with a new subject (*los alumnos*) and ALWAYS triggers the present subjunctive (*sepan*). Bare *para* can only precede an infinitive or noun.",
      },
    ],
  },
];
