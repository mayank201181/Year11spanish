import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "education-and-employment-m1",
    title: "Paper 1 — School Life, Facilities & Rules (Foundation → Higher)",
    questions: [
      {
        id: "education-and-employment-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-life-and-facilities",
        question:
          "Which sentence accurately says **'I hope to pass all my exams in June'** in Spanish?",
        options: [
          "Espero aprobar todos mis exámenes en junio.",
          "Espero suspender todos mis exámenes en junio.",
          "Espero pasar a todos mis exámenes en junio.",
          "Espero asistir todos mis exámenes en junio.",
        ],
        answerIndex: 0,
        hints: [
          "Watch out for the false friend *pasar*: Spanish uses a specific *-ar* verb (*o → ue*) for passing an exam.",
          "*Suspender* means to fail, whereas *aprobar* means to pass.",
        ],
        explanation:
          "**Espero aprobar todos mis exámenes en junio** is correct: **aprobar** means 'to pass (an exam)', whereas *suspender* means 'to fail', *pasar* is an Anglicism here, and *asistir* requires *a* and means 'to attend'.",
      },
      {
        id: "education-and-employment-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-life-and-facilities",
        question:
          "Complete the sentence: *Todas las tardes voy a _______ del instituto para pedir prestada una novela y repasar en silencio.*",
        options: [
          "la librería",
          "la biblioteca",
          "la carpeta",
          "la asignatura",
        ],
        answerIndex: 1,
        hints: [
          "You are borrowing (*pedir prestada*) a novel at school, not buying one in a shop.",
          "Mind the false friend between *la librería* (bookshop) and the word for library.",
        ],
        explanation:
          "**la biblioteca** means 'the library' (where you borrow books and study quietly). *La librería* is a classic false friend meaning 'bookshop', *la carpeta* means 'folder', and *la asignatura* means 'school subject'.",
      },
      {
        id: "education-and-employment-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-life-and-facilities",
        question:
          "Choose the grammatically accurate superlative for: **'Chemistry is the hardest subject in my school.'**",
        options: [
          "La química es la asignatura más difícil en mi instituto.",
          "La química es la asignatura más difícil que mi instituto.",
          "La química es la asignatura más difícil de mi instituto.",
          "La química es más difícil asignatura de mi instituto.",
        ],
        answerIndex: 2,
        hints: [
          "In a Spanish superlative, the noun comes before *más + adjective*: *la asignatura más difícil*.",
          "How does Spanish translate 'in' after a superlative — *en*, *que*, or *de*?",
        ],
        explanation:
          "**La química es la asignatura más difícil de mi instituto** is right: Spanish places *más difícil* after *la asignatura* and ALWAYS uses **de** (never *en* or *que*) for 'in' after a superlative.",
      },
      {
        id: "education-and-employment-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-life-and-facilities",
        question:
          "Complete the sentence accurately: *A Vanishree _______ muchísimo las ciencias porque hace experimentos en el laboratorio.*",
        options: [
          "le gusta",
          "se gustan",
          "les gusta",
          "le encantan",
        ],
        answerIndex: 3,
        hints: [
          "With *gustar / encantar*, the verb agrees with the thing liked (*las ciencias* — plural!), while the indirect object pronoun matches Vanishree (singular).",
          "Singular person = *le*; plural subject *las ciencias* = *-an*.",
        ],
        explanation:
          "**le encantan** is correct: *le* refers to one person (*a Vanishree*), while plural *encantan* agrees with the plural grammatical subject *las ciencias*. *Le gusta* fails plural agreement, *les* would mean 'to them', and *se gustan* is reflexive.",
      },
      {
        id: "education-and-employment-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-life-and-facilities",
        question:
          "Which phrase correctly completes: *En mi colegio tenemos _______ con pizarras interactivas*?",
        options: [
          "un aula muy espaciosa",
          "una aula muy espacioso",
          "un aula muy espacioso",
          "el aulas muy espaciosas",
        ],
        answerIndex: 0,
        hints: [
          "*Aula* starts with a stressed /a/ sound, so singular *la/una* switches to *el/un* immediately in front of it.",
          "However, *aula* is still a **feminine** noun — what ending must the adjective *espacioso/a* take?",
        ],
        explanation:
          "**un aula muy espaciosa** is correct: feminine nouns beginning with stressed *a-* (*aula, agua*) take *el/un* right before the singular noun to avoid a vowel clash, while any modifying adjective stays feminine (*espaciosa*).",
      },
      {
        id: "education-and-employment-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-life-and-facilities",
        question:
          "Complete the sentence: *Todos los días _______ un instituto mixto en las afueras de la ciudad.*",
        options: [
          "asisto en",
          "asisto a",
          "atiendo a",
          "asisto",
        ],
        answerIndex: 1,
        hints: [
          "'To attend' a school or lesson uses *asistir*, whereas *atender* means to serve customers.",
          "Which preposition is mandatory after *asistir* when it means 'to attend'?",
        ],
        explanation:
          "**asisto a** is correct: **asistir a** ('to attend') ALWAYS takes the preposition **a** (*asisto a un instituto*). Bare *asisto* without *a* is ungrammatical, *asisto en* uses the wrong preposition, and *atiendo a* means 'I serve / attend to'.",
      },
      {
        id: "education-and-employment-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-rules-and-pressure",
        question:
          "Choose the grammatically correct school rule: **'Chewing gum in class is forbidden.'**",
        options: [
          "Está prohibido para comer chicle en clase.",
          "Está prohibido comiendo chicle en clase.",
          "Está prohibido comer chicle en clase.",
          "Está prohibido que comer chicle en clase.",
        ],
        answerIndex: 2,
        hints: [
          "Never translate an English *-ing* verbal noun ('chewing') with a Spanish *-ndo* gerund.",
          "Impersonal rule expressions like *está prohibido* take the bare infinitive with no preposition.",
        ],
        explanation:
          "**Está prohibido comer chicle en clase** is correct: impersonal obligation and prohibition phrases (*está prohibido, no se permite, se debe, hay que*) are followed directly by the **bare infinitive** — never *para*, *que + infinitive*, or a gerund.",
      },
      {
        id: "education-and-employment-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-rules-and-pressure",
        question:
          "Complete the sentence with the correct verb form: *En nuestro instituto no _______ pendientes largos ni joyas caras.*",
        options: [
          "se permite",
          "se permiten",
          "permite",
          "hay que permitir",
        ],
        answerIndex: 1,
        hints: [
          "Look at the noun following the gap: *pendientes largos ni joyas caras* is **plural**.",
          "In a passive *se* rule (*no se permite / no se permiten*), the verb agrees in number with the noun permitted or banned!",
        ],
        explanation:
          "**se permiten** is correct because the grammatical subject (*pendientes largos ni joyas caras*) is plural. Singular *se permite* is used before an infinitive (*no se permite llevar joyas*) or a singular noun.",
      },
      {
        id: "education-and-employment-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-rules-and-pressure",
        question:
          "Complete the complaint: *Me parece totalmente injusto que los profesores nos _______ tantos deberes cada fin de semana.*",
        options: [
          "mandan",
          "mandar",
          "mandarán",
          "manden",
        ],
        answerIndex: 3,
        hints: [
          "Spot the trigger *Me parece totalmente injusto que…* + a new subject (*los profesores*).",
          "Value judgements with *que* trigger the **present subjunctive** of *mandar* (*ellos*).",
        ],
        explanation:
          "**manden** (3rd person plural present subjunctive of *mandar*) is required after the WEIRDO value-judgement trigger *me parece injusto que*. *Mandan* is indicative, *mandar* is an unconjugated infinitive, and *mandarán* is simple future.",
      },
      {
        id: "education-and-employment-m1-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-rules-and-pressure",
        question:
          "Complete the Grade-9 hypothetical sentence: *Si yo _______ la directora de mi colegio, eliminaría la corbata en verano.*",
        options: [
          "fuera",
          "sería",
          "soy",
          "sea",
        ],
        answerIndex: 0,
        hints: [
          "Look at the main clause: *eliminaría* is in the **conditional** ('would abolish').",
          "In a hypothetical Type-2 *si* clause, NEVER put the conditional or present subjunctive after *si*!",
          "Use the **imperfect subjunctive** of *ser* (*yo*).",
        ],
        explanation:
          "**fuera** (imperfect subjunctive of *ser*) pairs with the conditional *eliminaría* in *Si fuera la directora, eliminaría…*. Spanish NEVER allows conditional (*sería*) or present subjunctive (*sea*) directly after *si*, and *soy* would require indicative future/present.",
      },
      {
        id: "education-and-employment-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-life-and-facilities",
        question:
          "Read the extract: *«Aunque se me da bastante bien el dibujo, prefiero la informática porque es más práctica que la historia.»* Which statement is true?",
        options: [
          "The speaker is bad at art.",
          "The speaker finds history more practical than computing.",
          "The speaker is fairly good at art, yet prefers computing.",
          "The speaker thinks art and computing are equally practical.",
        ],
        answerIndex: 2,
        hints: [
          "*Se me da bastante bien* is an idiom for ability/aptitude.",
          "*Aunque* means 'although', contrasting art with the speaker's preference for computing (*la informática*).",
        ],
        explanation:
          "*Se me da bastante bien el dibujo* means 'I am fairly good at art', and *prefiero la informática porque es más práctica que la historia* means 'I prefer computing because it is more practical than history'.",
      },
      {
        id: "education-and-employment-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "school-rules-and-pressure",
        question:
          "What does the Spanish school idiom **hacer novillos** mean?",
        options: [
          "to do extra homework",
          "to bully younger pupils",
          "to revise for mock exams",
          "to skip school / play truant",
        ],
        answerIndex: 3,
        hints: [
          "It is a serious breach of school attendance rules (*las normas de asistencia*).",
          "Compare *faltar a clase sin permiso*.",
        ],
        explanation:
          "**hacer novillos** is the classic idiomatic expression for playing truant / skipping lessons without permission. Bullying is *el acoso escolar*, revising is *repasar*, and doing homework is *hacer los deberes*.",
      },
      {
        id: "education-and-employment-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "post-16-and-university",
        question:
          "Choose the correct form to complete: *El año que viene quiero seguir _______ ciencias porque me apasiona la biología.*",
        options: [
          "estudiar",
          "estudiando",
          "estudio",
          "estudiado",
        ],
        answerIndex: 1,
        hints: [
          "How does Spanish express 'to keep on / carry on doing something' with *seguir*?",
          "*Seguir* (and *continuar*) takes the **gerund** (*-ando / -iendo*), never the infinitive!",
        ],
        explanation:
          "**estudiando** is correct: **seguir + gerund** (*seguir estudiando*) means 'to continue / carry on studying'. *Seguir estudiar* is an English calque, *estudio* is finite present, and *estudiado* is the past participle.",
      },
      {
        id: "education-and-employment-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "Complete the sentence: *Los sábados trabajo _______ camarero en una cafetería para ahorrar dinero.*",
        options: [
          "de",
          "por un",
          "como un",
          "a",
        ],
        answerIndex: 0,
        hints: [
          "Spanish uses a two-letter preposition after *trabajar* before an unmodified job title.",
          "Remember: drop *un/una* before the job noun!",
        ],
        explanation:
          "**de** is the idiomatic Spanish choice in **trabajar de camarero** ('to work as a waiter'), with NO indefinite article *un*. *Como un camarero* literally means 'like a waiter' (simile) rather than holding the job!",
      },
      {
        id: "education-and-employment-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "careers-and-interviews",
        question:
          "Which sentence about career ambitions is 100% grammatically accurate?",
        options: [
          "Mi hermana mayor quiere ser una ingeniera.",
          "Mi hermana mayor quiere ser un ingeniero.",
          "Mi hermana mayor quiere ser ingeniera.",
          "Mi hermana mayor quiere estar ingeniera.",
        ],
        answerIndex: 2,
        hints: [
          "Professions take **ser** (never *estar*), and match the gender of *mi hermana*.",
          "Do we include *una* before an unmodified profession after *ser*?",
        ],
        explanation:
          "**Mi hermana mayor quiere ser ingeniera** is right: professions take **ser**, agree in gender (*ingeniera*), and omit *un/una* when unmodified.",
      },
    ],
  },
  {
    id: "education-and-employment-m2",
    title: "Paper 2 — Post-16, University & Work Experience (Higher)",
    questions: [
      {
        id: "education-and-employment-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "post-16-and-university",
        question:
          "Complete the future time clause accurately: *Cuando _______ mis exámenes en junio, viajaré por España con mis amigos.*",
        options: [
          "terminaré",
          "termino",
          "termine",
          "terminaba",
        ],
        answerIndex: 2,
        hints: [
          "Notice *viajaré* (future) — the exams have NOT finished yet!",
          "Future *cuando* ('when I finish') MUST be followed by the **present subjunctive**, never the future tense.",
        ],
        explanation:
          "**termine** (1st person singular present subjunctive) is mandatory after future **cuando**. Putting future *terminaré* after *cuando* is one of the biggest mark-losers in Edexcel Paper 2, while *termino* is habitual present.",
      },
      {
        id: "education-and-employment-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "post-16-and-university",
        question:
          "Which sentence accurately translates: **'I am going to apply for a place at university'**?",
        options: [
          "Voy a aplicar para una plaza en el colegio.",
          "Voy a solicitar una plaza en la universidad.",
          "Voy a solicitar para una plaza en la universidad.",
          "Voy a pedir por una plaza en el colegio.",
        ],
        answerIndex: 1,
        hints: [
          "Eliminate two classic traps: *el colegio* is NOT university, and *aplicar* is an Anglicism!",
          "Does **solicitar** need *para*, or does it take a direct object directly?",
        ],
        explanation:
          "**Voy a solicitar una plaza en la universidad** is correct: **solicitar** ('to apply for') takes a direct object with NO preposition, and 'university' is **la universidad** (never *el colegio*).",
      },
      {
        id: "education-and-employment-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "post-16-and-university",
        question:
          "Complete: *Después de cinco años en la facultad, mi primo acaba de licenciarse _______ medicina.*",
        options: [
          "de",
          "por",
          "con",
          "en",
        ],
        answerIndex: 3,
        hints: [
          "Think of the English equivalent 'to graduate **in** medicine'.",
          "Both *licenciarse* and *graduarse* take the same preposition before the academic field.",
        ],
        explanation:
          "**en** is required: **licenciarse en** / **graduarse en** + degree subject (*licenciarse en medicina / derecho*). Note also the Grade-9 idiom *acaba de + infinitive* ('has just graduated')!",
      },
      {
        id: "education-and-employment-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "post-16-and-university",
        question:
          "Choose the grammatically correct sentence when **'I'** is the subject of both 'hope' and 'get a scholarship':",
        options: [
          "Espero conseguir una beca el año que viene.",
          "Espero que consiga una beca el año que viene.",
          "Espero consiguiendo una beca el año que viene.",
          "Espero a consigo una beca el año que viene.",
        ],
        answerIndex: 0,
        hints: [
          "Does the subject change between 'I hope' and '(I) get a scholarship'?",
          "Same subject = *esperar + bare infinitive* (only use *espero que + subjunctive* when the subject changes!).",
        ],
        explanation:
          "**Espero conseguir una beca el año que viene** is right: when there is **no change of subject**, *esperar* takes the **infinitive** directly (*espero conseguir*), not *que + subjunctive*.",
      },
      {
        id: "education-and-employment-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "post-16-and-university",
        question:
          "Read: *«No quiero ir directamente a la universidad; prefiero hacer formación profesional porque quiero aprender un oficio práctico como electricista.»* Why does the speaker reject going straight to university?",
        options: [
          "University tuition fees are too expensive.",
          "They failed their secondary school exams.",
          "They want to take a gap year travelling abroad.",
          "They prefer vocational training to learn a practical trade.",
        ],
        answerIndex: 3,
        hints: [
          "Translate *la formación profesional* and *un oficio práctico*.",
          "Look at *como electricista* ('such as electrician').",
        ],
        explanation:
          "*Hacer formación profesional* means 'to do vocational training' and *aprender un oficio práctico* means 'to learn a practical trade'. Fees, failed exams, and travel are not mentioned.",
      },
      {
        id: "education-and-employment-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "Choose the best pair of verbs to complete this work-experience narrative: *El trimestre pasado (1) _______ mis prácticas en una tienda donde el jefe (2) _______ muy paciente.*",
        options: [
          "(1) hacía — (2) fue",
          "(1) hice — (2) era",
          "(1) hago — (2) estaba",
          "(1) haré — (2) era",
        ],
        answerIndex: 1,
        hints: [
          "*El trimestre pasado* ('last term') frames doing the placement as a completed past event → Preterite for (1).",
          "Describing the boss's ongoing personality (*muy paciente*) uses Imperfect of *ser* for (2).",
        ],
        explanation:
          "**(1) hice — (2) era** combines the **preterite** *hice* (completed placement last term) with the **imperfect** *era* (ongoing character description of the boss). *Hacía / fue* flips the aspect backwards.",
      },
      {
        id: "education-and-employment-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "Complete the sentence accurately: *Durante mis prácticas en el hotel, aprendí a atender _______ con una sonrisa.*",
        options: [
          "los clientes",
          "para los clientes",
          "a los clientes",
          "de los clientes",
        ],
        answerIndex: 2,
        hints: [
          "*Los clientes* are human beings acting as the direct object of *atender*.",
          "Remember Spanish's **personal *a*** rule before specific or general people as direct objects here!",
        ],
        explanation:
          "**a los clientes** is correct: **atender a los clientes** ('to serve/attend to customers') requires the **personal *a*** because the direct object refers to people.",
      },
      {
        id: "education-and-employment-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "Which verb accurately completes: *No quiero _______ todo mi sueldo en ropa; prefiero ahorrar para la universidad*?",
        options: [
          "pasar",
          "gastar",
          "asistir",
          "aprobar",
        ],
        answerIndex: 1,
        hints: [
          "Mind the difference between 'spending time' and 'spending money' in Spanish!",
          "*Pasar* = spend time; which verb means to spend money (*mi sueldo*)?",
        ],
        explanation:
          "**gastar** means 'to spend (money)' (*gastar todo mi sueldo*), whereas *pasar* is used for spending time (*pasar dos semanas*), *asistir* = attend, and *aprobar* = pass.",
      },
      {
        id: "education-and-employment-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "Choose the right verb to give a final overall verdict on a completed work-experience week: *En resumen, la semana de prácticas _______ una experiencia inolvidable.*",
        options: [
          "fue",
          "era",
          "estuvo",
          "estaba",
        ],
        answerIndex: 0,
        hints: [
          "*Ser* (not *estar*) links a subject to a noun phrase (*una experiencia inolvidable*).",
          "A summary verdict on a finished, bounded week takes the **preterite**, not the imperfect!",
        ],
        explanation:
          "**fue** (preterite of *ser*) is used for overall summary evaluations of completed past events (*fue una experiencia inolvidable*), whereas *era* describes ongoing background states and *estuvo/estaba* cannot link to a noun phrase.",
      },
      {
        id: "education-and-employment-m2-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "What does *El primer día conocí a la directora* mean in English?",
        options: [
          "On the first day I already knew the headteacher well.",
          "On the first day I recognised the school building.",
          "On the first day I found out the headteacher's rules.",
          "On the first day I met the headteacher (for the first time).",
        ],
        answerIndex: 3,
        hints: [
          "*Conocer* in the Imperfect (*conocía*) means 'knew'.",
          "What happens to the meaning of *conocer* when put into the **Preterite** (*conocí*)?",
        ],
        explanation:
          "In the **preterite**, *conocer* shifts meaning to the moment acquaintance begins: **conocí a la directora** = 'I **met** the headteacher (for the first time)'. ('Found out' would be *supe*, preterite of *saber*!)",
      },
      {
        id: "education-and-employment-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "careers-and-interviews",
        question:
          "Which sentence correctly uses an indefinite article with a profession?",
        options: [
          "Mi tío es un médico.",
          "Mi tío quiere ser un cirujano.",
          "Mi tío trabaja de un médico.",
          "Mi tío es un médico muy respetado.",
        ],
        answerIndex: 3,
        hints: [
          "Normally Spanish drops *un/una* after *ser* and *trabajar de*.",
          "When MUST *un/una* be restored in front of a profession?",
        ],
        explanation:
          "**Mi tío es un médico muy respetado** is right because the profession *médico* is **modified by the adjective phrase** *muy respetado*, which restores *un*. Without an adjective (*es médico, ser cirujano, trabaja de médico*), *un* must be omitted.",
      },
      {
        id: "education-and-employment-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "careers-and-interviews",
        question:
          "How do you refer to a **male journalist** in Spanish?",
        options: [
          "el periodista",
          "el periodisto",
          "la periodista",
          "un periodiste",
        ],
        answerIndex: 0,
        hints: [
          "Think about Spanish nouns ending in the suffix **-ista** (*dentista, recepcionista, socorrista, artista*).",
          "Does *-ista* ever change to *-isto*, or does only the article (*el / la*) change?",
        ],
        explanation:
          "**el periodista** is correct: all **-ista** profession nouns keep *-ista* for both genders and distinguish male vs female solely via the article/adjectives (*el periodista talentoso* vs *la periodista talentosa*).",
      },
      {
        id: "education-and-employment-m2-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "careers-and-interviews",
        question:
          "Which word is spelled accurately for **'bilingual'** ('I am bilingual in English and Spanish')?",
        options: [
          "bilingue",
          "bilingüe",
          "bilengüe",
          "bilingúo",
        ],
        answerIndex: 1,
        hints: [
          "In Spanish, *gue* normally has a silent *u* (as in *guerra*).",
          "Which diacritic above the *u* signals that the *u* IS pronounced before *e*?",
        ],
        explanation:
          "**bilingüe** requires the dieresis (**ü**) so that the *u* is pronounced before *-e*, and ends in *-e* for both masculine and feminine singular (*un candidato bilingüe / una candidata bilingüe*).",
      },
      {
        id: "education-and-employment-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "careers-and-interviews",
        question:
          "Complete the Grade-9 job-search sentence: *En el futuro busco un puesto de trabajo que _______ creativo y me permita viajar.*",
        options: [
          "es",
          "está",
          "sea",
          "esté",
        ],
        answerIndex: 2,
        hints: [
          "First decide between *ser* and *estar*: *creativo* is an inherent trait of the job → *ser*.",
          "Second, *busco un puesto que…* describes an **unfound, hypothetical** job (notice *permita* is already subjunctive!).",
          "Choose the 3rd person singular present subjunctive of *ser*.",
        ],
        explanation:
          "**sea** (present subjunctive of *ser*) is required because *creativo* is an inherent characteristic (*ser*, not *estar*) AND the antecedent *un puesto de trabajo* is hypothetical/not yet found, triggering the subjunctive.",
      },
      {
        id: "education-and-employment-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-life-and-facilities",
        question:
          "Which plural form of **el examen** is spelled with 100% accuracy?",
        options: [
          "los examenes",
          "los exámenes",
          "los examénes",
          "las exámenes",
        ],
        answerIndex: 1,
        hints: [
          "Singular *examen* stresses the syllable *xa* naturally without an accent.",
          "When adding *-es* adds an extra syllable (*e-xa-me-nes*), it becomes an *esdrújula* word stressed three syllables from the end!",
        ],
        explanation:
          "**los exámenes** is masculine plural and gains a written accent on **á** because all *esdrújula* words (stressed on the third-to-last syllable) require an accent mark in Spanish.",
      },
    ],
  },
  {
    id: "education-and-employment-m3",
    title: "Paper 3 — Exam Traps, Reading Inference & Grade-9 Stretch",
    questions: [
      {
        id: "education-and-employment-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-life-and-facilities",
        question:
          "Complete the comparison of equality: *Para mí, la geografía no es _______ fascinante _______ la historia.*",
        options: [
          "tanto … como",
          "tan … que",
          "tan … como",
          "más … como",
        ],
        answerIndex: 2,
        hints: [
          "*Fascinante* is an **adjective** (not a noun or verb).",
          "How do you say 'as + adjective + as' in Spanish?",
        ],
        explanation:
          "**tan … como** is used around adjectives and adverbs (*tan fascinante como*). *Tanto/a/os/as … como* is used before nouns, while *que* belongs with *más / menos*, never *tan*.",
      },
      {
        id: "education-and-employment-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-life-and-facilities",
        question:
          "Choose the ONLY grammatically correct comparative sentence:",
        options: [
          "Las instalaciones de mi colegio son más buenas que las tuyas.",
          "Las instalaciones de mi colegio son mejor que las tuyas.",
          "Las instalaciones de mi colegio son mejores de las tuyas.",
          "Las instalaciones de mi colegio son mejores que las tuyas.",
        ],
        answerIndex: 3,
        hints: [
          "Never write *más bueno/a* in standard comparative Spanish — use the irregular comparative!",
          "*Las instalaciones* is plural, so the comparative adjective must also be plural, followed by *que*.",
        ],
        explanation:
          "**Las instalaciones de mi colegio son mejores que las tuyas** is right: the plural of irregular comparative *mejor* is **mejores** (agreeing with *las instalaciones*), followed by **que** ('than').",
      },
      {
        id: "education-and-employment-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "school-rules-and-pressure",
        question:
          "Read: *«Aunque el uniforme escolar fomenta la igualdad, me molesta que tengamos que llevar americana incluso cuando hace treinta grados.»* What is the student's exact complaint?",
        options: [
          "Uniform destroys equality among students.",
          "Having to wear a blazer even in 30-degree heat is annoying.",
          "Students are forbidden from wearing blazers in winter.",
          "Uniform is far too expensive for families.",
        ],
        answerIndex: 1,
        hints: [
          "Break down *me molesta que tengamos que llevar americana*.",
          "*La americana* = blazer/jacket; *incluso cuando hace treinta grados* = even when it's 30 degrees.",
        ],
        explanation:
          "The student concedes that uniform promotes equality (*aunque… fomenta la igualdad*), and specifically complains (*me molesta que…*) about having to wear a blazer (*americana*) even in 30-degree heat.",
      },
      {
        id: "education-and-employment-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-rules-and-pressure",
        question:
          "Complete the Paper 2 Q3c gap: *Para aprobar todos los exámenes sin estrés, es imprescindible que tú _______ un horario de estudio realista.*",
        options: [
          "organizas",
          "organizarás",
          "organices",
          "organizes",
        ],
        answerIndex: 2,
        hints: [
          "*Es imprescindible que* ('it is essential that') triggers the **present subjunctive**.",
          "*Organizar* ends in **-zar**: what spelling shift happens to *z* before *-es*?",
        ],
        explanation:
          "**organices** is the *tú* present subjunctive of *organizar*: *-zar* verbs change **z → c** before *-e* across ALL persons of the present subjunctive (*organice, organices…*). Spanish never writes *ze* in native words like *organizes*!",
      },
      {
        id: "education-and-employment-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "post-16-and-university",
        question:
          "Complete with the irregular **simple future** of **hacer** (*yo*): *Si saco buenas notas este verano, el año que viene _______ el Bachillerato Internacional.*",
        options: [
          "haré",
          "haceré",
          "hago",
          "hiciera",
        ],
        answerIndex: 0,
        hints: [
          "Type-1 real condition: *Si + present indicative (saco)* pairs with the **simple future** for *el año que viene*.",
          "Remember the irregular future stem of *hacer* (it is NOT *hacer-*!).",
        ],
        explanation:
          "**haré** uses the irregular future stem **har-** + **-é**. *Haceré* is a classic regularised stem error, *hago* clashes with *el año que viene* here when simple future is asked, and *hiciera* is imperfect subjunctive.",
      },
      {
        id: "education-and-employment-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "post-16-and-university",
        question:
          "Contrast the two *cuando* clauses and pick the pair that makes **100% grammatical sense**:\n*(1) Normalmente, cuando _______ exámenes, repaso en la biblioteca.*\n*(2) El mes próximo, en cuanto _______ los exámenes, iré a la playa.*",
        options: [
          "(1) tenga — (2) termino",
          "(1) tengo — (2) terminaré",
          "(1) tengo — (2) termine",
          "(1) tendré — (2) termine",
        ],
        answerIndex: 2,
        hints: [
          "Sentence (1) has *Normalmente* (habitual routine every term) → **present indicative**.",
          "Sentence (2) has *El mes próximo* + *iré* (unfulfilled future event) → **present subjunctive**!",
        ],
        explanation:
          "**(1) tengo — (2) termine** nails the contrast: habitual *cuando* takes the **present indicative** (*tengo*), whereas future-referring *en cuanto / cuando* MUST take the **present subjunctive** (*termine*).",
      },
      {
        id: "education-and-employment-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "post-16-and-university",
        question:
          "What does **tomarse un año sabático** mean, and which reason fits it logically?",
        options: [
          "To repeat a school year because of poor marks.",
          "To take a gap year, for example to volunteer or travel before university.",
          "To drop out of school permanently at age sixteen.",
          "To study only on Saturdays at a vocational college.",
        ],
        answerIndex: 1,
        hints: [
          "Do not be tricked by the lookalike *sábado* ('Saturday')!",
          "In education contexts, *un año sabático* happens between Sixth Form and university.",
        ],
        explanation:
          "**tomarse un año sabático** means **to take a gap year** (often to travel, work, or do volunteering before starting university). Repeating a year is *repetir curso*, and dropping out is *dejar los estudios*.",
      },
      {
        id: "education-and-employment-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "Complete the sentence with the correct **preterite** form of **llegar** (*yo*): *El primer día de mis prácticas laborales me puse nervioso, pero _______ diez minutos antes.*",
        options: [
          "llegé",
          "llegó",
          "llegaba",
          "llegué",
        ],
        answerIndex: 3,
        hints: [
          "*El primer día* is a single completed past action (*yo*).",
          "*Llegar* is a **-gar** verb: how do you keep the hard /g/ sound before *-é* in *yo* preterite?",
        ],
        explanation:
          "**llegué** is the *yo* preterite of *llegar*: *-gar* verbs insert **u** (**g → gu**) before *-é* to preserve the hard /g/ sound (*llegé* would sound like /x/!). *Llegó* is 3rd person, and *llegaba* is imperfect.",
      },
      {
        id: "education-and-employment-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "Read: *«Trabajar de canguro los viernes por la noche no está muy bien pagado; sin embargo, como los niños se acuestan a las ocho, aprovecho para hacer mis deberes.»* Why does the speaker like babysitting?",
        options: [
          "It pays an unusually high hourly wage.",
          "They only work on Sunday mornings.",
          "Once the children go to bed at 8 p.m., they can get their homework done.",
          "They do not get any homework from school on Fridays.",
        ],
        answerIndex: 2,
        hints: [
          "*No está muy bien pagado* rules out high pay!",
          "Look at *como los niños se acuestan a las ocho, aprovecho para hacer mis deberes*.",
        ],
        explanation:
          "Although babysitting (*trabajar de canguro*) isn't very well paid, the children go to bed (*se acuestan*) at eight, so the speaker takes advantage (*aprovecho*) of the quiet time to do homework.",
      },
      {
        id: "education-and-employment-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "part-time-jobs-and-work-experience",
        question:
          "Complete the sentence where an ongoing background action is interrupted: *Mientras _______ documentos en la oficina, sonó la alarma de incendios.*",
        options: [
          "archivé",
          "archivaba",
          "he archivado",
          "archivaré",
        ],
        answerIndex: 1,
        hints: [
          "Notice *Mientras* ('while') + an interrupting Preterite event (*sonó la alarma*).",
          "Which past tense expresses 'was filing' (ongoing action in progress when interrupted)?",
        ],
        explanation:
          "**archivaba** (imperfect) expresses the ongoing background action ('while I was filing documents') interrupted by the sudden preterite event *sonó la alarma*.",
      },
      {
        id: "education-and-employment-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "careers-and-interviews",
        question:
          "In a formal cover letter (*carta de presentación*), which opening is polite, idiomatic Grade-9 Spanish?",
        options: [
          "Quiero el trabajo en tu empresa ahora.",
          "Dudo que me das el puesto de contable.",
          "Le escribo para solicitar el puesto de recepcionista publicado en su página web.",
          "Te escribo para aplicar por el trabajo en tu tienda.",
        ],
        answerIndex: 2,
        hints: [
          "A formal cover letter uses **usted** pronouns/possessives (*le, su*), never informal *tú/tu/te*!",
          "Use *solicitar el puesto de…*, never *aplicar por*.",
        ],
        explanation:
          "**Le escribo para solicitar el puesto de recepcionista publicado en su página web** uses polite formal *usted* (*le, su*) and idiomatic *solicitar el puesto de*.",
      },
      {
        id: "education-and-employment-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "careers-and-interviews",
        question:
          "Which adjective agreement is 100% accurate when **Elena** describes herself in a job interview?",
        options: [
          "Me considero una joven trabajador, puntual y ambicioso.",
          "Me considero una joven trabajadora, puntuala y bilingüa.",
          "Me considero una joven trabajadora, puntual y ambiciosa.",
          "Me considero un joven trabajadora, puntual y ambiciosa.",
        ],
        answerIndex: 2,
        hints: [
          "*Trabajador* (ending in *-or*) adds **-a** in the feminine (*trabajadora*), and *ambicioso → ambiciosa*.",
          "Do *puntual* (ends in *-l*) or *bilingüe* (ends in *-e*) change for feminine?",
        ],
        explanation:
          "**Me considero una joven trabajadora, puntual y ambiciosa** is right: nationality/trait adjectives in *-or* add *-a* (*trabajadora*), *-o → -a* (*ambiciosa*), while *-l* (*puntual*) and *-e* (*bilingüe*) are invariable for gender (*puntuala* and *bilingüa* do not exist!).",
      },
      {
        id: "education-and-employment-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "careers-and-interviews",
        question:
          "Why does **estar en paro** use **estar** rather than *ser*?",
        options: [
          "Because all jobs and professions in Spanish use estar.",
          "Because unemployment is a temporary state/situation (PLACE), not a permanent identity.",
          "Because paro is a feminine plural noun.",
          "Because estar en paro means to stand up in an interview.",
        ],
        answerIndex: 1,
        hints: [
          "Recall *ser* (DOCTOR: permanent occupation *es contable*) vs *estar* (PLACE: Condition / State).",
          "Is being unemployed (*en paro*) a permanent profession or a changeable employment state?",
        ],
        explanation:
          "**estar en paro** ('to be unemployed') describes a temporary state/condition (**estar** under PLACE), whereas actual professions classify identity and take **ser** (*es contable*).",
      },
      {
        id: "education-and-employment-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "school-life-and-facilities",
        question:
          "Check the noun genders: which option pairs **ONLY correct masculine/feminine articles**?",
        options: [
          "la idioma · la diploma · la problema",
          "el idioma · el diploma · el horario",
          "la horario · el asignatura · la recreo",
          "el biblioteca · el beca · el empresa",
        ],
        answerIndex: 1,
        hints: [
          "Greek-origin nouns ending in **-ma** (*idioma, diploma, programa, problema, sistema*) are a famous gender trap!",
          "Are Greek *-ma* nouns masculine (*el*) or feminine (*la*)?",
        ],
        explanation:
          "**el idioma · el diploma · el horario** are all masculine! *El idioma* ('language') and *el diploma* ('diploma') belong to the Greek-origin *-ma* masculine group despite ending in *-a*.",
      },
      {
        id: "education-and-employment-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "careers-and-interviews",
        question:
          "Complete the polite Grade-9 ambition: *En el futuro _______ trabajar en una empresa internacional para practicar idiomas y ganarme la vida.*",
        options: [
          "quisiera",
          "querré que",
          "gustaría",
          "quiero que",
        ],
        answerIndex: 0,
        hints: [
          "*Gustaría* cannot stand alone without the indirect object pronoun *me* (*me gustaría*)!",
          "*Quiero que* would require a change of subject + subjunctive, not an infinitive (*trabajar*).",
          "Which single verb form means 'I would like (to)' politely before an infinitive?",
        ],
        explanation:
          "**quisiera** (polite imperfect subjunctive of *querer*, 'I would like to') is followed directly by the infinitive *trabajar*. *Gustaría* lacks *me*, and *quiero que / querré que* cannot precede an infinitive.",
      },
    ],
  },
];
