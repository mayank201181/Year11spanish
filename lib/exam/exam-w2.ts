import type { ExamPaper } from "../types.ts";
import { SUBJECT_PRONOUNS, acceptedForms, type Person } from "../spanish/verbs.ts";

/** Accept both -ra and -se imperfect subjunctive forms, with or without optional subject pronouns. */
function impSubjAccept(ra: string, se: string, person: Person): string[] {
  const out = [ra, se];
  for (const sub of SUBJECT_PRONOUNS[person]) {
    out.push(`${sub} ${ra}`, `${sub} ${se}`);
  }
  return out;
}

export const paper: ExamPaper = {
  id: "exam-w2",
  title: "Mock Paper 2B — Grade-9 Structures & Extended Writing",
  calculator: true,
  minutes: 50,
  questions: [
    // ---------------- AREA A: HOME & ABROAD (Q01–Q04) ----------------
    {
      id: "exam-w2-q01",
      topicId: "home-and-abroad",
      guideRef: "regions-and-towns",
      kind: "mcq",
      difficulty: "core",
      strategy: "Superlative structure: el/la más + adj + DE (never 'en' for 'in the world/country')",
      question:
        "Precision Check — How do you write *'San Sebastián is the cleanest city in the country'* in idiomatic Grade-9 Spanish?",
      options: [
        "San Sebastián es la ciudad más limpia en el país.",
        "San Sebastián es la más limpia ciudad del país.",
        "San Sebastián es la ciudad más limpia del país.",
        "San Sebastián está la ciudad más limpia del país.",
      ],
      answerIndex: 2,
      hints: [
        "In Spanish superlatives, the adjective stays AFTER the noun (*la ciudad más limpia*).",
        "After a superlative, 'in the country / in the world' translates with **de** (*de + el = del país*), NEVER *en*!",
      ],
      explanation:
        "Spanish superlatives follow **article + noun + más/menos + adjective + de**: *es la ciudad más limpia **del** país*.",
    },
    {
      id: "exam-w2-q02",
      topicId: "home-and-abroad",
      guideRef: "weather-and-climate",
      kind: "short",
      difficulty: "core",
      strategy: "Impersonal haber in the simple future: habrá ('there will be')",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete the weather forecast with the **simple future** impersonal form of **haber** ('there will be'):\n\n*Según el pronóstico, mañana por la tarde _______ tormentas eléctricas en la costa.*\n\n(Write ONLY the single missing verb, with its written accent!)",
      answer: { type: "text", accept: ["habrá"] },
      traps: [
        {
          spec: { type: "text", accept: ["habrán"] },
          feedback: "Trap alert! Impersonal *haber* ('there is/was/will be') is ALWAYS 3rd-person SINGULAR, even before plural *tormentas* (*habrá tormentas*, never *habrán*)!",
        },
        {
          spec: { type: "text", accept: ["haberá"] },
          feedback: "*Haber* drops the *e* in the future/conditional stem: *habr-* → **habrá**!",
        },
      ],
      hints: [
        "Impersonal *haber* ('there will be') stays 3rd-person singular even before a plural noun.",
        "Use the irregular future stem *habr-* + *-á*.",
      ],
      solution: [
        "Irregular future stem *habr-* + 3rd-person singular *-á* → **habrá**.",
      ],
    },
    {
      id: "exam-w2-q03",
      topicId: "home-and-abroad",
      guideRef: "holidays-and-accommodation",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      strategy: "Disastrous holiday narrative: Imperfect background + Preterite mishaps + Future lesson learnt",
      question:
        "Edexcel Paper 2 Q7 Narrative Task (100–130 words in Spanish): Write an account for a travel competition titled **A Holiday I Will Never Forget**. Address ALL FOUR bullet points in Spanish:\n\n1. Where you travelled and what the weather or hotel was like when you arrived (imperfect).\n2. Two unexpected things that happened during the trip (preterite).\n3. How you felt and how you resolved the situation.\n4. Where you will go next summer and what you will make sure to do beforehand.",
      hints: [
        "Open with imperfect scene-setting (*hacía muchísimo calor, la habitación estaba sucia*).",
        "Use preterite events (*perdimos las maletas, nos quejamos en recepción*), a feeling (*me sentí frustrada*), and a future plan with *antes de* or *cuando reserve…*.",
      ],
      modelAnswer:
        "El agosto pasado viajé a Menorca con mis padres; cuando llegamos al puerto hacía un viento terrible y nuestro apartamento turístico no tenía electricidad. El primer día mi hermano perdió su pasaporte en la playa y tuvimos que ir a la comisaría enseguida. Al principio nos sentimos muy estresados, pero el recepcionista nos cambió a una habitación estupenda con vistas al mar. El próximo verano iremos a Costa Rica y leeré todas las reseñas antes de reservar alojamiento.",
      markScheme: [
        {
          point: "Sets the holiday scene/weather/hotel using the imperfect tense",
          keywords: ["hacia", "estaba", "tenia", "era", "habia", "llovia", "apartamento", "alojamiento", "albergue"],
        },
        {
          point: "Narrates specific completed events/mishaps in the preterite",
          keywords: ["perdio", "perdimos", "tuvimos", "fuimos", "robo", "rompio", "cancelaron", "llegamos"],
        },
        {
          point: "Describes feelings and how the issue was resolved",
          keywords: ["senti", "sentimos", "enfadado", "estresados", "aliviada", "quejamos", "cambio", "resolvio", "ayudo"],
        },
        {
          point: "Explains next summer's destination and preparation in the future/subjunctive",
          keywords: ["iremos", "viajare", "visitaremos", "leere", "reservare", "comprobare", "antelacion", "cuando"],
        },
      ],
      commonError:
        "Using only the preterite throughout without imperfect background descriptions (*hacía, estaba, había*).",
    },
    {
      id: "exam-w2-q04",
      topicId: "home-and-abroad",
      guideRef: "transport-and-directions",
      kind: "short",
      difficulty: "core",
      strategy: "yo-go verb salir in polite/subjunctive frame",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **salir** (*nosotros*):\n\n*Mi padre insiste en que _______ hacia el aeropuerto tres horas antes del vuelo.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("salir", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["salimos", "nosotros salimos"] },
          feedback: "*Salimos* is indicative! *Insiste en que…* expresses will/influence (WEIRDO) and requires the present subjunctive from *yo salgo*!",
        },
        {
          spec: { type: "text", accept: ["salamos"] },
          feedback: "Remember Step 1 of the Yo-Flip rule: *yo salgo* keeps its *g* across the entire present subjunctive (*salga, salgas…*)!",
        },
      ],
      hints: [
        "*Insiste en que…* triggers the present subjunctive.",
        "Start from *yo salgo* → drop *-o* → add *-amos*.",
      ],
      solution: [
        "From *yo salgo* → *salg-* + *-amos* → **salgamos**.",
      ],
    },

    // ---------------- AREA B: EDUCATION & EMPLOYMENT (Q05–Q08) ----------------
    {
      id: "exam-w2-q05",
      topicId: "education-and-employment",
      guideRef: "school-life-and-facilities",
      kind: "mcq",
      difficulty: "core",
      strategy: "Irregular comparatives: mejor/peor (never más bueno / más malo)",
      question:
        "Accuracy Check — Which sentence expresses a comparison of school subjects and facilities WITHOUT any English-calque error?",
      options: [
        "Las pistas deportivas de mi colegio son más buenas que las del polideportivo.",
        "Saco más mejores notas en biología que en historia.",
        "Las instalaciones de este instituto son mejores que las de mi antiguo colegio.",
        "Física es más peor que literatura para mí.",
      ],
      answerIndex: 2,
      hints: [
        "Never combine *más* with *mejor* or *peor* (*más mejor* and *más peor* are double comparatives!), and never write *más bueno* for quality.",
        "Remember that *mejor / peor* become plural (*mejores / peores*) when describing plural nouns like *las instalaciones*!",
      ],
      explanation:
        "*Mejores que* agrees in plural with *las instalaciones* and avoids both *más buenas* and the double comparative *más mejores*.",
    },
    {
      id: "exam-w2-q06",
      topicId: "education-and-employment",
      guideRef: "post-16-and-university",
      kind: "short",
      difficulty: "challenge",
      strategy: "Reflexive -ar verb in future cuando subjunctive: licenciarse → me licencie",
      question:
        "Paper 2 Q3c Higher Manipulation — Complete the future time clause with the **present subjunctive** of the reflexive verb **licenciarse** (*yo*):\n\n*Cuando _______ en medicina, trabajaré en un hospital público.*\n\n(Write ONLY the two-word reflexive pronoun + verb form.)",
      answer: { type: "text", accept: acceptedForms("licenciarse", "subjunctive", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["me licencio", "yo me licencio"] },
          feedback: "*Me licencio* is present indicative; future *Cuando… trabajaré* requires the present subjunctive (*-e*)!",
        },
        {
          spec: { type: "text", accept: ["licencie"] },
          feedback: "*Licenciarse* ('to graduate with a degree') is reflexive — include *me* before *licencie*!",
        },
      ],
      hints: [
        "Future *Cuando… trabajaré* requires the present subjunctive.",
        "Place *me* before the *yo* present subjunctive of *licenciar* (*licenci-* + *-e*, no accent on the final *e*!).",
      ],
      solution: [
        "Reflexive pronoun *me* + *yo* present subjunctive of *licenciar* (*licencie*) → **me licencie**.",
      ],
    },
    {
      id: "exam-w2-q07",
      topicId: "education-and-employment",
      guideRef: "careers-and-interviews",
      kind: "short",
      difficulty: "core",
      strategy: "saber + infinitive = 'to know how to do something' (never saber cómo + inf)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete the CV sentence with the **present indicative** of **saber** (*yo*):\n\n*Soy una candidata ideal para el puesto porque _______ programar en Python y hablar español con fluidez.*\n\n(Write ONLY the single missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("saber", "present", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["conozco", "yo conozco"] },
          feedback: "*Conocer* is for people and places; 'to know how to do a skill' ALWAYS uses **saber + infinitive**!",
        },
        {
          spec: { type: "text", accept: ["se"] },
          feedback: "Without an accent, *se* is the reflexive pronoun! The *yo* form of *saber* requires a tilde diacritical accent: **sé**.",
        },
      ],
      hints: [
        "'To know how to' + infinitive uses *saber* (never *conocer*).",
        "Remember the irregular *yo* present form of *saber* — and its diacritical accent distinguishing it from reflexive *se*!",
      ],
      solution: [
        "Irregular *yo* present indicative of *saber* → **sé** (*sé programar*).",
      ],
    },
    {
      id: "exam-w2-q08",
      topicId: "education-and-employment",
      guideRef: "school-rules-and-pressure",
      kind: "written",
      difficulty: "core",
      marks: 4,
      strategy: "Balanced debate on school uniform & exam stress with WEIRDO + si clause",
      question:
        "Edexcel Paper 2 Q6/Q7 Debate Prompt (80–110 words in Spanish): Write your response to a student forum debating **school rules, uniform and exam pressure**. Cover ALL FOUR points in Spanish:\n\n1. One rule at your school that you think is reasonable.\n2. One advantage and one disadvantage of wearing a school uniform.\n3. What you did last week to cope with revision stress (past tense).\n4. One change you would introduce if you were the headteacher.",
      hints: [
        "Use *se debe / está prohibido + inf* for bullet 1, and *por un lado… por otro lado…* for uniform pros & cons.",
        "Include a preterite stress-relief action (*salí a correr / escuché música*) and *Si yo fuera el director / la directora, permitiría…*.",
      ],
      modelAnswer:
        "En mi instituto está prohibido usar el teléfono durante las clases, lo cual me parece lógico para concentrarnos mejor. Por un lado, la ropa escolar fomenta la igualdad entre todos; sin embargo, la chaqueta resulta incómoda y cara. La semana pasada estaba agobiada con los simulacros, así que salí a correr por el parque para despejar la mente. Si yo fuera la directora, reduciría los deberes y ofrecería talleres de relajación.",
      markScheme: [
        {
          point: "States a reasonable school rule using an impersonal structure",
          keywords: ["prohibido", "permite", "debe", "hay que", "obligatorio", "telefono", "movil", "puntual", "pasillos"],
        },
        {
          point: "Gives both a positive and negative point about school uniform/clothing",
          keywords: ["igualdad", "practico", "ahorra", "incomodo", "incomoda", "caro", "cara", "personalidad", "corbata"],
        },
        {
          point: "Narrates a past action taken to relieve revision stress",
          keywords: ["sali", "correr", "escuche", "hable", "dormi", "practique", "paseo", "despejar", "aliviar"],
        },
        {
          point: "Uses Si fuera… + conditional for a headteacher reform",
          keywords: ["fuera", "fuese", "reduciria", "cambiaria", "permitiria", "quitaria", "ofreceria", "pondria"],
        },
      ],
      commonError:
        "Writing *está prohibido usando* instead of *está prohibido usar*, or forgetting to give BOTH an advantage and a disadvantage.",
    },

    // ---------------- AREA C: PERSONAL LIFE & RELATIONSHIPS (Q09–Q12) ----------------
    {
      id: "exam-w2-q09",
      topicId: "personal-life-relationships",
      guideRef: "marriage-and-partnerships",
      kind: "short",
      difficulty: "core",
      strategy: "antes de + infinitive (same subject) vs antes de que + subjunctive (new subject)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **casarse** (*ellos*):\n\n*Hoy en día muchas parejas prefieren convivir varios años antes de que _______ por lo civil.*\n\n(Write ONLY the two-word reflexive pronoun + verb form.)",
      answer: { type: "text", accept: acceptedForms("casarse", "subjunctive", "ellos") },
      traps: [
        {
          spec: { type: "text", accept: ["se casan", "ellos se casan"] },
          feedback: "*Antes de que* ALWAYS triggers the subjunctive (*se casen*, never indicative *se casan*)!",
        },
      ],
      hints: [
        "*Antes de que* ALWAYS requires the present subjunctive.",
        "Place reflexive *se* before the *ellos* present subjunctive of *casar* (*-en*).",
      ],
      solution: [
        "Reflexive *se* + *casen* (*-ar* opposite ending *-en*) → **se casen**.",
      ],
    },
    {
      id: "exam-w2-q10",
      topicId: "personal-life-relationships",
      guideRef: "friends-and-peer-pressure",
      kind: "short",
      difficulty: "core",
      strategy: "-ir stem-changer sentirse → nos sintamos in present subjunctive!",
      question:
        "Paper 2 Q3c Higher Manipulation — Complete with the **present subjunctive** of **sentirse** (*nosotros*):\n\n*Un verdadero amigo evita hacer comentarios crueles para que nunca _______ excluidos.*\n\n(Write ONLY the two-word reflexive pronoun + verb form.)",
      answer: { type: "text", accept: acceptedForms("sentirse", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["nos sentamos", "nosotros nos sentamos"] },
          feedback: "Careful! *Nos sentamos* means 'we sit down' (from *sentarse*)! Because *sentirse* is an *-ir* stem-changer (*e → ie*), *nosotros* in the present subjunctive shifts *e → i*: **nos sintamos**!",
        },
      ],
      hints: [
        "*Para que* ('so that') ALWAYS triggers the present subjunctive.",
        "In *-ir* stem-changing verbs like *sentirse*, *nosotros* shifts *e → i* in the present subjunctive (*nos sintamos*).",
      ],
      solution: [
        "Reflexive *nos* + *-ir* subjunctive *nosotros* stem *sint-* + *-amos* → **nos sintamos**.",
      ],
    },
    {
      id: "exam-w2-q11",
      topicId: "personal-life-relationships",
      guideRef: "family-and-descriptions",
      kind: "mcq",
      difficulty: "warmup",
      strategy: "Age, hunger, thirst, heat, cold & fear ALWAYS take tener (never ser/estar)",
      question:
        "Mark-Saver Check — Which sentence expresses age and family resemblance accurately?",
      options: [
        "Mi primo tiene diecisiete años y se parece a su padre.",
        "Mi primo es diecisiete años y parece como su padre.",
        "Mi primo está diecisiete años y se parece con su padre.",
        "Mi primo tiene diecisiete anos y parece a su padre.",
      ],
      answerIndex: 0,
      hints: [
        "Check age (*tener X años*, with tilde *ñ* on *años*!).",
        "Check 'to look like / resemble someone': reflexive *parecerse **a** alguien*!",
      ],
      explanation:
        "*Tiene diecisiete años* uses *tener* (with *ñ* in *años*), and *se parece a su padre* uses reflexive *parecerse a* for physical/character resemblance.",
    },
    {
      id: "exam-w2-q12",
      topicId: "personal-life-relationships",
      guideRef: "role-models",
      kind: "written",
      difficulty: "core",
      marks: 4,
      strategy: "Combine present admiration + childhood background + preterite achievements + personal impact",
      question:
        "Paper 3 Picture-Card / Paper 2 Q7 Task (90–110 words in Spanish): Write about **a person you admire (a family member, athlete, scientist or activist)**. Cover ALL FOUR bullet points in Spanish:\n\n1. Who this person is and what qualities make them special (present tense, remember personal *a*!).\n2. What difficulties they faced earlier in life (imperfect).\n3. One major achievement they accomplished (preterite).\n4. How they inspire your own goals for the future.",
      hints: [
        "Start with *La persona a quien más admiro es…* or *Admiro muchísimo a…* + adjectives (*trabajadora, valiente, solidario*).",
        "Contrast imperfect background (*cuando era joven no tenía recursos*) with preterite triumph (*fundó, ganó, logró*) and future inspiration (*me inspira a luchar por…*).",
      ],
      modelAnswer:
        "Admiro profundamente a mi abuela materna porque es una mujer generosa, valiente e incansable. Cuando era adolescente vivía en una aldea humilde donde apenas había oportunidades educativas para las chicas. A pesar de todo, consiguió una beca universitaria y fundó una clínica gratuita para familias necesitadas. Su ejemplo me motiva cada día; en el futuro espero estudiar medicina para que más personas reciban atención digna.",
      markScheme: [
        {
          point: "Introduces the role model and character traits in the present tense",
          keywords: ["admiro", "generosa", "valiente", "trabajador", "trabajadora", "solidario", "incansable", "ejemplo"],
        },
        {
          point: "Describes early-life background or obstacles using the imperfect tense",
          keywords: ["era", "vivia", "tenia", "habia", "sufria", "humilde", "dificil", "pobre"],
        },
        {
          point: "Narrates a concrete achievement in the preterite tense",
          keywords: ["consiguio", "fundo", "gano", "logro", "supero", "recaudo", "cambio"],
        },
        {
          point: "Explains how they inspire future goals (future / espero + inf / para que + subjunctive)",
          keywords: ["espero", "motiva", "inspira", "estudiar", "estudiare", "ayudar", "reciban", "luchar"],
        },
      ],
      commonError:
        "Omitting the personal *a* (*Admiro mi abuela* ❌ instead of *Admiro a mi abuela* ✅).",
    },

    // ---------------- AREA D: THE WORLD AROUND US (Q13–Q16) ----------------
    {
      id: "exam-w2-q13",
      topicId: "world-around-us",
      guideRef: "sustainability-and-action",
      kind: "short",
      difficulty: "core",
      strategy: "-ger → -ja spelling shift in present subjunctive (proteger → protejamos)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **proteger** (*nosotros*):\n\n*Es urgente que _______ las especies marinas antes de que sea demasiado tarde.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("proteger", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["protegamos", "nosotros protegamos"] },
          feedback: "Spelling trap! In *-ger / -gir* verbs, *g* changes to **j** before *-a* (*yo protejo → protejamos*) so it keeps the 'kh/h' sound!",
        },
        {
          spec: { type: "text", accept: ["protegemos"] },
          feedback: "*Protegemos* is indicative; *Es urgente que…* triggers the present subjunctive!",
        },
      ],
      hints: [
        "Start from present *yo* of *proteger*: *yo protejo* (with a **j**!).",
        "Drop *-o* and add the *-er* *nosotros* subjunctive ending *-amos*.",
      ],
      solution: [
        "From *yo protejo* → *protej-* + *-amos* → **protejamos**.",
      ],
    },
    {
      id: "exam-w2-q14",
      topicId: "world-around-us",
      guideRef: "climate-and-pollution",
      kind: "short",
      difficulty: "challenge",
      strategy: "Impersonal imperfect subjunctive hubiera / hubiese in Si clauses ('If there were…')",
      question:
        "Paper 2 Q3c Grade-9 'Si' Clause — Complete with the **imperfect subjunctive** impersonal form of **haber** ('if there were'):\n\n*Si _______ más carriles bici seguros, menos gente conduciría al centro cada mañana.*\n\n(Write ONLY the single missing verb; either *-ra* or *-se* form is accepted.)",
      answer: { type: "text", accept: ["hubiera", "hubiese"] },
      traps: [
        {
          spec: { type: "text", accept: ["habría"] },
          feedback: "NEVER put conditional *habría* immediately after *si*! 'If there were…' = *Si **hubiera** / **hubiese**…*.",
        },
        {
          spec: { type: "text", accept: ["hubieran", "hubiesen"] },
          feedback: "Impersonal *haber* ('there were') stays SINGULAR (*hubiera / hubiese*), even before plural *carriles bici*!",
        },
      ],
      hints: [
        "Take the 3rd-person plural preterite of *haber* (*hubieron*), drop *-ron*, and add *-ra* (or *-se*).",
        "Remember impersonal 'there were' stays 3rd-person singular!",
      ],
      solution: [
        "From *hub-* + *-iera / -iese* (singular impersonal) → **hubiera** (or **hubiese**).",
      ],
    },
    {
      id: "exam-w2-q15",
      topicId: "world-around-us",
      guideRef: "global-and-social-issues",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "High-scoring causal vs concessive connectors: a pesar de vs a pesar de que",
      question:
        "Connector Precision — Which sentence uses **a pesar de** / **dado que** with 100% grammatical accuracy?",
      options: [
        "A pesar de que el paro juvenil ha bajado, muchos licenciados ganan sueldos bajos.",
        "A pesar de el paro juvenil ha bajado, muchos licenciados ganan sueldos bajos.",
        "Dado de que hay pobreza, colaboro con una ONG.",
        "Sin embargo hay desigualdad, el gobierno no actúa.",
      ],
      answerIndex: 0,
      hints: [
        "*A pesar de* + noun/infinitive (*a pesar del frío*), whereas before a conjugated verb (*ha bajado*) you MUST include **que** (*a pesar de que…*)!",
        "Also check: *dado que* has NO *de*, and *sin embargo* ('however') is an adverbial linker, not a conjunction like *aunque*!",
      ],
      explanation:
        "Before a finite verb (*ha bajado*), 'despite the fact that' is **a pesar de que** (*A pesar de que el paro juvenil ha bajado…*).",
    },
    {
      id: "exam-w2-q16",
      topicId: "world-around-us",
      guideRef: "digital-media-and-tech",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      strategy: "Critical evaluation of smartphones & AI/social media across 3 time frames",
      question:
        "Edexcel Paper 2 Q7 Essay Task (110–140 words in Spanish): Write a magazine column on **Living Connected: Smartphones and Social Media**. Address ALL FOUR bullet points in Spanish:\n\n1. How you use technology every day for schoolwork or leisure.\n2. An occasion in the past when technology helped you or caused a problem (past tense).\n3. The main danger of social media for young people and how to prevent it (use a subjunctive advice phrase).\n4. How you think digital life will change in ten years' time (future tense).",
      hints: [
        "Include rich Area D vocab (*descargar aplicaciones, las noticias falsas, el ciberacoso, el robo de identidad*).",
        "Check your 3 time frames + WEIRDO advice (*es aconsejable que configuremos la privacidad / no compartamos datos personales*).",
      ],
      modelAnswer:
        "Hoy en día utilizo mi tableta a diario para buscar recursos académicos, escuchar pódcast en español y chatear con mis primos en Singapur. Sin embargo, el invierno pasado se me rompió la pantalla justo antes de entregar un proyecto de historia y perdí mis archivos porque no había hecho copia de seguridad. A mi modo de ver, el mayor peligro actual es el ciberacoso; por consiguiente, es imprescindible que los adolescentes protejan su privacidad y bloqueen perfiles desconocidos. Dentro de diez años habrá gafas inteligentes y estudiaremos en aulas virtuales interactivas.",
      markScheme: [
        {
          point: "Describes daily educational or leisure uses of technology (present)",
          keywords: ["utilizo", "uso", "descargo", "busco", "tableta", "ordenador", "chatear", "podcast", "recursos"],
        },
        {
          point: "Narrates a specific past incident involving technology (preterite / pluperfect)",
          keywords: ["rompio", "perdi", "olvide", "ayudo", "descargue", "estropeo", "habia", "pasado"],
        },
        {
          point: "Identifies a risk and gives WEIRDO subjunctive prevention advice",
          keywords: ["ciberacoso", "privacidad", "falsas", "adiccion", "imprescindible", "aconsejable", "protejan", "compartan", "bloqueen"],
        },
        {
          point: "Predicts changes in ten years using simple future forms",
          keywords: ["habra", "estudiaremos", "tendremos", "usaremos", "seran", "reemplazara", "inteligentes", "virtuales"],
        },
      ],
      commonError:
        "Writing *buscar para recursos* instead of *buscar recursos* (*buscar* already contains 'for'!).",
    },

    // ---------------- AREA E: SOCIAL ACTIVITIES, FITNESS & HEALTH (Q17–Q20) ----------------
    {
      id: "exam-w2-q17",
      topicId: "social-fitness-health",
      guideRef: "healthy-living-and-diet",
      kind: "short",
      difficulty: "core",
      strategy: "-ir stem-changer dormir → duermas / durmamos in present subjunctive",
      question:
        "Paper 2 Q3c Higher Manipulation — Complete with the **present subjunctive** of **dormir** (*nosotros*):\n\n*Nuestra entrenadora quiere que _______ al menos ocho horas la noche antes del torneo.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("dormir", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["duermamos", "dormamos"] },
          feedback: "Grade-9 trap! In *-ir* stem-changing verbs (*dormir, morir*), *nosotros* and *vosotros* of the present subjunctive shift *o → u* (**durmamos**), NOT *ue* or *o*!",
        },
      ],
      hints: [
        "*Quiere que…* triggers the present subjunctive.",
        "Remember the *-ir* stem-changer rule in *nosotros* present subjunctive: *o → u* (*durm-* + *-amos*).",
      ],
      solution: [
        "*-ir* stem-changer *dormir* shifts *o → u* in *nosotros* present subjunctive → **durmamos**.",
      ],
    },
    {
      id: "exam-w2-q18",
      topicId: "social-fitness-health",
      guideRef: "smoking-alcohol-stress",
      kind: "mcq",
      difficulty: "core",
      strategy: "provocar / ser perjudicial PARA la salud",
      question:
        "Preposition & Vocabulary Check — Which sentence accurately warns against alcohol abuse?",
      options: [
        "Emborracharse cada fin de semana es muy perjudicial por la salud.",
        "Emborracharse cada fin de semana está muy perjudicial a la salud.",
        "Emborracharse cada fin de semana hace muy perjudicial de la salud.",
        "Emborracharse cada fin de semana es muy perjudicial para la salud.",
      ],
      answerIndex: 3,
      hints: [
        "'Harmful to / bad for one's health' expresses an impact on a recipient/target (*la salud*).",
        "Check whether *ser bueno / malo / perjudicial* takes *por* or *para* before *la salud*!",
      ],
      explanation:
        "Spanish always uses **ser perjudicial / bueno / malo PARA la salud** ('harmful/good/bad for health').",
    },
    {
      id: "exam-w2-q19",
      topicId: "social-fitness-health",
      guideRef: "cinema-music-reading",
      kind: "short",
      difficulty: "core",
      strategy: "-car → -que spelling shift in present subjunctive (tocar)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **tocar** (*ella*):\n\n*Ojalá mi cantante favorita _______ su nueva canción en el concierto de esta noche.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("tocar", "subjunctive", "él") },
      traps: [
        {
          spec: { type: "text", accept: ["toce", "ella toce"] },
          feedback: "Verbs ending in *-car* change *c → qu* before *-e* across ALL persons of the present subjunctive (*toque*, never *toce*)!",
        },
        {
          spec: { type: "text", accept: ["toca", "ella toca"] },
          feedback: "*Ojalá (que)…* ('Hopefully / I wish…') ALWAYS triggers the subjunctive, never the indicative!",
        },
      ],
      hints: [
        "*Ojalá* ALWAYS triggers the subjunctive (even when *que* is omitted!).",
        "Apply the *-car* spelling change (*c → qu*) before *-e*.",
      ],
      solution: [
        "*Tocar* changes *c → qu* before *-e* in the 3rd-person singular present subjunctive → **toque**.",
      ],
    },
    {
      id: "exam-w2-q20",
      topicId: "social-fitness-health",
      guideRef: "sports-and-events",
      kind: "written",
      difficulty: "core",
      marks: 4,
      strategy: "Duration idiom + past tournament + review opinion + future fitness goal",
      question:
        "Edexcel Paper 2 Q7 / Paper 3 Topic Card (90–120 words in Spanish): Write about **sport, leisure and staying healthy during exam year**. Cover ALL FOUR points in Spanish:\n\n1. How long you have been doing a sport or hobby (use an idiomatic Spanish duration structure).\n2. A memorable match, concert or film you went to recently (past tense + review adjective).\n3. Why balancing leisure and study is vital for Year 11 students.\n4. A new sport or cultural activity you would try if you had more time.",
      hints: [
        "Open with *Llevo cinco años jugando al bádminton* or *Toco el piano desde hace seis años*.",
        "Use a vivid review adjective (*inolvidable, emocionante, conmovedora*), a WEIRDO phrase (*es esencial que descansemos*), and *Si tuviera más tiempo, probaría…*.",
      ],
      modelAnswer:
        "Llevo cuatro años jugando al bádminton en un club deportivo cerca de mi casa porque me ayuda a mantenerme ágil. El sábado pasado asistí a un concierto benéfico con mis amigas y el ambiente en directo fue absolutamente inolvidable. En mi opinión, es esencial que los estudiantes desconectemos después de repasar para reducir la ansiedad. Si tuviera más tardes libres este invierno, aprendería escalada o me apuntaría a clases de fotografía.",
      markScheme: [
        {
          point: "Uses an idiomatic duration structure (llevo… + gerund or present + desde hace)",
          keywords: ["llevo", "desde", "jugando", "nadando", "tocando", "practicando", "haciendo"],
        },
        {
          point: "Narrates a past sporting or cultural outing with an evaluative adjective",
          keywords: ["asisti", "fui", "vi", "jugamos", "concierto", "partido", "pelicula", "inolvidable", "emocionante", "conmovedora"],
        },
        {
          point: "Explains why leisure balance matters (subjunctive or infinitive structure)",
          keywords: ["esencial", "es importante que", "fundamental", "desconectemos", "descansar", "ansiedad", "estres", "salud"],
        },
        {
          point: "Uses hypothetical si + imperfect subjunctive + conditional for a new hobby",
          keywords: ["tuviera", "tuviese", "pudiera", "pudiese", "aprenderia", "probaria", "apuntaria", "haria"],
        },
      ],
      commonError:
        "Writing *he jugado desde hace cuatro años* instead of present *juego desde hace cuatro años* / *llevo cuatro años jugando*.",
    },

    // ---------------- IGCSE TENSE MASTERY (Q21–Q25) ----------------
    {
      id: "exam-w2-q21",
      topicId: "past-future-tenses",
      guideRef: "preterite-irregs-and-accents",
      kind: "short",
      difficulty: "challenge",
      strategy: "j-stem preterites drop the 'i' in ellos (-jeron, NEVER -jieron!)",
      question:
        "Paper 2 Q3c Higher Manipulation — Complete with the **preterite** form of **traer** (*ellos*):\n\n*Mis tíos _______ una tarta casera para celebrar el cumpleaños de mi madre.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("traer", "preterite", "ellos") },
      traps: [
        {
          spec: { type: "text", accept: ["trajieron", "ellos trajieron"] },
          feedback: "Classic Paper 2 Q3c trap! Verbs with a **j-stem** in the preterite (*decir → dij-, traer → traj-, conducir → conduj-, producir → produj-*) DROP the *i* in *ellos*: *-eron* (**trajeron**), NEVER *-ieron*!",
        },
        {
          spec: { type: "text", accept: ["traeron"] },
          feedback: "*Traer* has the strong irregular preterite stem *traj-* (*traje, trajiste, trajo, trajimos, trajisteis, trajeron*)!",
        },
      ],
      hints: [
        "*Traer* has a strong **j-stem** in the preterite (*traj-*).",
        "After *j*, the 3rd-person plural ending drops the *i*: *-eron* instead of *-ieron*!",
      ],
      solution: [
        "Strong *j*-stem *traj-* + *-eron* (dropping *i* after *j*) → **trajeron**.",
      ],
    },
    {
      id: "exam-w2-q22",
      topicId: "past-future-tenses",
      guideRef: "imperfect-and-contrast",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Meaning change between Imperfect (knew / wanted) and Preterite (found out / tried-refused)",
      question:
        "Nuance Check — In Spanish, **saber** changes its English nuance between the imperfect (*sabía*) and the preterite (*supe*). What does *«Ayer supe la nota del examen»* mean?",
      options: [
        "Yesterday I already knew my exam mark for weeks.",
        "Yesterday I found out my exam mark.",
        "Yesterday I knew how to write the exam.",
        "Yesterday I used to know my exam mark.",
      ],
      answerIndex: 1,
      hints: [
        "*Sabía* (imperfect) = ongoing state of knowing ('I knew').",
        "Putting *saber* into the preterite (*supe*) turns 'knowing' into a single moment of discovery!",
      ],
      explanation:
        "In the preterite, **supe** captures the moment knowledge began — *'I found out / learnt'* — whereas imperfect **sabía** means *'I knew'*.",
    },
    {
      id: "exam-w2-q23",
      topicId: "past-future-tenses",
      guideRef: "perfect-and-pluperfect",
      kind: "short",
      difficulty: "core",
      strategy: "NEVER split haber and the past participle; reflexive pronoun goes BEFORE haber!",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **perfect tense** (*pretérito perfecto*) of the reflexive verb **levantarse** (*yo*):\n\n*Hoy es sábado, pero _______ a las siete para repasar vocabulario.*\n\n(Write ONLY the three-word `pronoun + haber + participle` form.)",
      answer: { type: "text", accept: acceptedForms("levantarse", "perfect", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["he me levantado", "he levantádome"] },
          feedback: "Auxiliary *haber* (*he*) and the past participle (*levantado*) are glued together — NEVER put *me*, *ya* or *nunca* between them! Put *me* BEFORE *he*!",
        },
      ],
      hints: [
        "Reflexive pronouns ALWAYS go immediately BEFORE the auxiliary *haber*.",
        "Combine *me* + *he* + regular participle *levantado*.",
      ],
      solution: [
        "Reflexive *me* + *he* + *levantado* → **me he levantado**.",
      ],
    },
    {
      id: "exam-w2-q24",
      topicId: "past-future-tenses",
      guideRef: "simple-future-and-conditional",
      kind: "short",
      difficulty: "core",
      strategy: "Double-r stem in querer: querré / querría",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **conditional** form of **querer** (*nosotros*):\n\n*En las vacaciones de Pascua, _______ recorrer Andalucía en tren.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("querer", "conditional", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["quereríamos", "queríamos"] },
          feedback: "Watch the double **rr**! *Queríamos* (one *r*) is imperfect ('we wanted'); the conditional of *querer* uses the irregular stem **querr-** (*querríamos* = 'we would like')!",
        },
      ],
      hints: [
        "*Querer* drops the *e* of *-er* in the future/conditional stem, leaving double **rr** (*querr-*).",
        "Add the *nosotros* conditional ending *-íamos* (with an accent on *í*).",
      ],
      solution: [
        "Irregular stem *querr-* + *-íamos* → **querríamos**.",
      ],
    },
    {
      id: "exam-w2-q25",
      topicId: "past-future-tenses",
      guideRef: "grade9-verbal-idioms",
      kind: "short",
      difficulty: "challenge",
      strategy: "seguir + gerund with -ir stem-changer (pedir → pidiendo, decir → diciendo)",
      question:
        "Paper 2 Q3c Higher Manipulation — Complete the idiom *seguir + gerund* ('keep on asking for') using the **gerund** of **pedir**:\n\n*Los científicos siguen _______ medidas urgentes contra la contaminación plástica.*\n\n(Write ONLY the single gerund word.)",
      answer: { type: "text", accept: ["pidiendo"] },
      traps: [
        {
          spec: { type: "text", accept: ["pediendo"] },
          feedback: "*-ir* stem-changing verbs shift *e → i* (or *o → u*) in the gerund too (*pedir → pidiendo, dormir → durmiendo, decir → diciendo*)!",
        },
        {
          spec: { type: "text", accept: ["pedir"] },
          feedback: "*Seguir* meaning 'to carry on / keep doing' takes the **gerund** (*-ando / -iendo*), never the infinitive!",
        },
      ],
      hints: [
        "*Seguir + gerund* means 'to continue / keep on -ing'.",
        "Remember that *-ir* stem-changer *pedir* shifts *e → i* in the gerund!",
      ],
      solution: [
        "Gerund of *-ir* stem-changer *pedir*: *e → i* → **pidiendo**.",
      ],
    },

    // ---------------- GRADE-9 SUBJUNCTIVE & PRECISION (Q26–Q30) ----------------
    {
      id: "exam-w2-q26",
      topicId: "subjunctive-grade9",
      guideRef: "forming-present-subjunctive",
      kind: "short",
      difficulty: "challenge",
      strategy: "Diacritical accent on dé (present subjunctive of dar) vs preposition de",
      question:
        "Paper 2 Q3c Precision Check — Complete with the **present subjunctive** of **dar** (*él*, referring to *el ayuntamiento*):\n\n*Esperamos que el ayuntamiento _______ más ayudas económicas a las familias jóvenes.*\n\n(Write ONLY the missing verb — watch the diacritical accent!)",
      answer: { type: "text", accept: acceptedForms("dar", "subjunctive", "él") },
      traps: [
        {
          spec: { type: "text", accept: ["de"] },
          feedback: "Accent alert! Without an accent, *de* is the preposition 'of/from'; the *yo* and *él/ella* present subjunctive of *dar* MUST carry an accent (**dé**)!",
        },
        {
          spec: { type: "text", accept: ["da", "él da"] },
          feedback: "*Da* is present indicative; *Esperamos que…* (change of subject!) triggers the DISHES present subjunctive!",
        },
      ],
      hints: [
        "*Dar* is the **D** in DISHES (*dé, des, dé, demos, deis, den*).",
        "Remember the written accent on *yo* and *él/ella* (**dé**) to distinguish it from the preposition *de*!",
      ],
      solution: [
        "3rd-person singular present subjunctive of *dar* carries a diacritical accent → **dé**.",
      ],
    },
    {
      id: "exam-w2-q27",
      topicId: "subjunctive-grade9",
      guideRef: "weirdo-and-impersonal",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Impersonal certainty (es verdad / evidente / obvio que) vs negated certainty (no es verdad que)",
      question:
        "Subjunctive Switchboard — Three of the sentences below require **sea** (present subjunctive), while ONE requires **es** (present indicative). Which sentence requires **es**?",
      options: [
        "Es imprescindible que el transporte público _______ puntual.",
        "No es cierto que la comida sana _______ siempre cara.",
        "Es una lástima que el polideportivo _______ tan pequeño.",
        "Es evidente que el cambio climático _______ una amenaza real.",
      ],
      answerIndex: 3,
      hints: [
        "Check whether each impersonal expression declares an **undisputed fact** or expresses necessity / denial / emotion.",
        "Affirmative *Es evidente / cierto / verdad / obvio que…* declares certainty → **indicative**!",
      ],
      explanation:
        "Affirmative **Es evidente que…** ('It is obvious that…') declares a factual certainty, so it takes the **indicative** (*es*). Necessity (*Es imprescindible que*), negated certainty (*No es cierto que*), and emotion (*Es una lástima que*) all trigger *sea*.",
    },
    {
      id: "exam-w2-q28",
      topicId: "subjunctive-grade9",
      guideRef: "cuando-and-time-clauses",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Contrast habitual cuando (indicative) with future cuando (subjunctive)",
      question:
        "Mood Contrast — Choose the ONLY option that puts both *cuando* clauses into the right mood:\n\n1. Habitual routine: *Normalmente, cuando _______ a casa del instituto, meriendo fruta.*\n2. Future plan: *Mañana, cuando _______ a casa del instituto, llamaré a mi abuela.*",
      options: [
        "1. llegue  /  2. llego",
        "1. llego  /  2. llegue",
        "1. llego  /  2. llegaré",
        "1. llegue  /  2. llegue",
      ],
      answerIndex: 1,
      hints: [
        "Sentence 1 describes a regular, repeated fact (*Normalmente … meriendo*) → present indicative!",
        "Sentence 2 points to an unfulfilled future event (*Mañana … llamaré*) → present subjunctive (*-gar → -gue*)!",
      ],
      explanation:
        "Habitual *cuando* takes the **present indicative** (*llego*), whereas future *cuando* (paired with *llamaré*) MUST take the **present subjunctive** (*llegue*).",
    },
    {
      id: "exam-w2-q29",
      topicId: "subjunctive-grade9",
      guideRef: "si-clauses-and-imperfect-subj",
      kind: "short",
      difficulty: "challenge",
      strategy: "Type 1 real Si clause vs Type 2 hypothetical Si clause",
      question:
        "Paper 2 Q3c Grade-9 'Si' Clause — Complete with the **imperfect subjunctive** of **poder** (*nosotros*):\n\n*Si _______ viajar a cualquier país hispanohablante este verano, elegiríamos Argentina.*\n\n(Write ONLY the missing verb, with its written accent! Either *-ra* or *-se* form is accepted.)",
      answer: { type: "text", accept: impSubjAccept("pudiéramos", "pudiésemos", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["pudieramos", "pudiesemos"] },
          feedback: "So close — remember that *nosotros* in the imperfect subjunctive ALWAYS carries an acute accent on the vowel right before *-ramos / -semos*: **pudiéramos** / **pudiésemos**!",
        },
        {
          spec: { type: "text", accept: ["podríamos", "podiéramos"] },
          feedback: "Build from 3rd-person plural preterite *pudieron* (with *u*, never *o*, and never conditional *podríamos* after *si*)!",
        },
      ],
      hints: [
        "Start from *ellos* preterite of *poder* (*pudieron*), drop *-ron* (*pudie-*), and add *-ramos* (or *-semos*).",
        "CRITICAL accent rule: every *nosotros* imperfect subjunctive form takes a written accent on the vowel immediately before *-ramos / -semos*!",
      ],
      solution: [
        "From *pudieron* → *pudie-* + *-ramos / -semos* with esdrújula accent on *é*.",
        "Answer: **pudiéramos** (or **pudiésemos**).",
      ],
    },
    {
      id: "exam-w2-q30",
      topicId: "subjunctive-grade9",
      guideRef: "pronouns-por-para-ser-estar",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      strategy: "Full 130–150w Edexcel Paper 2 Q7 Synthesis across Areas A–E + Grade-9 Checklist",
      question:
        "Edexcel Paper 2 Q7 Full Grade-9 Showcase (130–150 words in Spanish): Your penfriend in Madrid has asked about **your Year 11 life, values and future dreams**. Write a rich reply in Spanish hitting ALL FOUR Grade-9 criteria:\n\n1. Describe your daily routine, a relationship that matters to you, and a past memory together (past + present).\n2. Express a strong opinion on a global or school issue using a WEIRDO subjunctive trigger.\n3. Outline your post-16 / university plans using a future time clause (*cuando / en cuanto* + subjunctive).\n4. Include BOTH a hypothetical *si* clause (*si + imperfect subjunctive + conditional*) AND a double object pronoun (*se lo / se la*) or idiomatic *por / para* phrase.",
      hints: [
        "Weave each structure naturally into a coherent letter (*Querido Mateo:*).",
        "Double-check accents (*éramos, estudiaré, gustaría*), gender (*el problema*), *por desgracia / para siempre*, and *se lo conté*!",
      ],
      modelAnswer:
        "Querido Mateo: Este curso llevo una rutina bastante intensa, pero me llevo genial con mi hermana mayor porque siempre confío en ella. Cuando éramos niñas solíamos cocinar postres los domingos; ayer preparé una tarta y se la di por su cumpleaños. Por otro lado, me preocupa muchísimo el cambio climático, así que es imprescindible que todos reduzcamos los residuos plásticos. En cuanto apruebe mis exámenes en junio, solicitaré una plaza para estudiar ciencias ambientales. Por desgracia los vuelos son caros, pero si tuviera suficientes ahorros, viajaría por Latinoamérica para siempre en verano.",
      markScheme: [
        {
          point: "Combines present family/routine detail with a past memory (imperfect + preterite)",
          keywords: ["llevo", "confio", "eramos", "soliamos", "prepare", "fuimos", "cocinar", "hermana", "madre", "mejor"],
        },
        {
          point: "Uses a WEIRDO trigger + present subjunctive on a global or school issue",
          keywords: ["imprescindible", "urgente", "aconsejable", "injusto", "reduzcamos", "protejamos", "reciclemos", "cambiemos"],
        },
        {
          point: "Uses future cuando / en cuanto + present subjunctive + simple future for post-16 plans",
          keywords: ["apruebe", "termine", "cumpla", "acabe", "solicitare", "estudiare", "ire", "tomare"],
        },
        {
          point: "Includes hypothetical si + imperfect subjunctive + conditional AND por/para idiom or se lo/la",
          keywords: ["tuviera", "tuviese", "pudiera", "pudiese", "fuera", "viajaria", "haria", "desgracia", "siempre"],
        },
      ],
      commonError:
        "Writing *le la di* instead of *se la di*, or forgetting to switch to the subjunctive after *en cuanto* when referring to next June.",
    },
  ],
};
