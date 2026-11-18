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
  id: "exam-w1",
  title: "Mock Paper 1B — Grammar Manipulation, Translation & Writing",
  calculator: true,
  minutes: 50,
  questions: [
    // ---------------- AREA A: HOME & ABROAD (Q01–Q04) ----------------
    {
      id: "exam-w1-q01",
      topicId: "home-and-abroad",
      guideRef: "regions-and-towns",
      kind: "short",
      difficulty: "warmup",
      strategy: "Location on a map ALWAYS takes estar (PLACE), agreed in gender",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present indicative** of **estar** (*ella*, referring to *Granada*) + the feminine past-participle adjective **situada** is already printed:\n\n*Granada _______ situada en el sur de España, cerca de Sierra Nevada.*\n\n(Write ONLY the single missing verb, with its written accent!)",
      answer: { type: "text", accept: ["está", "ella está"] },
      traps: [
        {
          spec: { type: "text", accept: ["es", "ella es"] },
          feedback: "Geographical location ALWAYS takes *estar* (PLACE: Position & Location), even when permanent (*Granada está situada…*, never *es situada*)!",
        },
        {
          spec: { type: "text", accept: ["esta"] },
          feedback: "Without the accent, *esta* means 'this' (feminine)! The verb 'is' requires an accent on the *á*: **está**.",
        },
      ],
      hints: [
        "Geographical location uses *estar* (PLACE), never *ser*.",
      ],
      solution: [
        "3rd-person singular present indicative of *estar* → **está**.",
      ],
    },
    {
      id: "exam-w1-q02",
      topicId: "home-and-abroad",
      guideRef: "holidays-and-accommodation",
      kind: "short",
      difficulty: "core",
      strategy: "Reflexive verb in the preterite: reflexive pronoun + accented -amos/-aste/-ó",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **preterite** form of the reflexive verb **alojarse** (*nosotros*):\n\n*Durante nuestras vacaciones en Tenerife, _______ en un parador histórico.*\n\n(Write ONLY the two-word reflexive pronoun + verb form.)",
      answer: { type: "text", accept: acceptedForms("alojarse", "preterite", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["alojamos", "nosotros alojamos"] },
          feedback: "*Alojarse* ('to stay in accommodation') is reflexive — remember the *nosotros* reflexive pronoun *nos* before the verb!",
        },
      ],
      hints: [
        "Place the *nosotros* reflexive pronoun (*nos*) directly before the conjugated verb.",
        "Conjugate regular *-ar* verb *alojar* for *nosotros* in the preterite.",
      ],
      solution: [
        "Reflexive pronoun for *nosotros* = *nos*; preterite of *alojar* (*nosotros*) = *alojamos*.",
        "Answer: **nos alojamos**.",
      ],
    },
    {
      id: "exam-w1-q03",
      topicId: "home-and-abroad",
      guideRef: "transport-and-directions",
      kind: "mcq",
      difficulty: "core",
      strategy: "Exact translation of travel & ticket collocations",
      question:
        "Translation Check — How do you translate *'We have just missed the train because we had to check in our luggage'* into accurate Spanish?",
      options: [
        "Acabamos de perder el tren porque tuvimos que facturar el equipaje.",
        "Terminamos perder el tren porque teníamos facturar la maleta.",
        "Acabamos a faltar el tren porque tuvimos que reservar el equipaje.",
        "Volvemos a perder el tren porque hay que facturar el billete.",
      ],
      answerIndex: 0,
      hints: [
        "'Have just done' = *acabar de + infinitive*; 'to miss a train' = *perder el tren* (never *faltar*).",
        "'To check in luggage' = *facturar el equipaje*.",
      ],
      explanation:
        "*Acabamos de perder el tren* ('we have just missed the train') + *tuvimos que facturar el equipaje* ('we had to check in the luggage') hits every idiomatic collocation accurately.",
    },
    {
      id: "exam-w1-q04",
      topicId: "home-and-abroad",
      guideRef: "festivals-and-customs",
      kind: "written",
      difficulty: "core",
      marks: 4,
      strategy: "Paper 2 Q6 4-bullet checklist across past, present & future",
      question:
        "Edexcel Paper 2 Q6 (Short Writing — 60–75 words in Spanish): Write a blog post for your school's exchange page about **a festival or celebration**. Address ALL FOUR bullet points in Spanish:\n\n1. Which festival you enjoy in your region or country.\n2. What people typically eat or wear during the celebration.\n3. What you did at a celebration last year (past tense).\n4. Which famous Hispanic festival you would like to attend in the future and why.",
      hints: [
        "Tick off each bullet in its own clear sentence and include at least three time frames (present, preterite/imperfect, conditional/future).",
        "Use passive *se* (*se celebra, se comen, se visten*) and a justified future wish (*me gustaría visitar… porque…*).",
      ],
      modelAnswer:
        "Todos los años en mi ciudad se celebra una fiesta tradicional muy animada con luces en las calles. Durante el festejo la gente lleva ropa colorida y se comen dulces deliciosos en familia. El verano pasado fui al desfile con mis primos, bailamos muchísimo y vimos fuegos artificiales espectaculares. En el futuro me encantaría asistir a Las Fallas en Valencia porque sería inolvidable ver los monumentos arder.",
      markScheme: [
        {
          point: "Describes a festival celebrated in their region/country (present tense)",
          keywords: ["celebra", "fiesta", "tradicional", "festejo", "navidad", "diwali", "feria"],
        },
        {
          point: "Mentions typical food or clothing worn during the celebration",
          keywords: ["ropa", "vestido", "traje", "visten", "lleva", "comen", "comida", "dulces", "platos"],
        },
        {
          point: "Narrates a specific past celebration activity using preterite/imperfect",
          keywords: ["fui", "fuimos", "vimos", "bailamos", "comimos", "hice", "celebre", "pasado", "anoche"],
        },
        {
          point: "States a future wish to attend a Hispanic festival with a reason",
          keywords: ["gustaria", "encantaria", "ire", "visitar", "fallas", "tomatina", "fermin", "muertos"],
        },
      ],
      commonError:
        "Writing everything in the present tense and forgetting the past event (bullet 3) or future conditional wish (bullet 4).",
    },

    // ---------------- AREA B: EDUCATION & EMPLOYMENT (Q05–Q08) ----------------
    {
      id: "exam-w1-q05",
      topicId: "education-and-employment",
      guideRef: "school-life-and-facilities",
      kind: "short",
      difficulty: "core",
      strategy: "Boot verb o→ue in present indicative (aprobar)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present indicative** form of **aprobar** (*yo*):\n\n*Siempre repaso mis apuntes cada tarde, así que normalmente _______ todos los exámenes.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("aprobar", "present", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["aprobo", "yo aprobo"] },
          feedback: "*Aprobar* is an *o → ue* stem-changing ('boot') verb in the present tense (*apruebo*, not *aprobo*)!",
        },
      ],
      hints: [
        "*Aprobar* ('to pass an exam') stem-changes *o → ue* inside the boot (*yo, tú, él, ellos*).",
        "Add *-o* for *yo* present indicative.",
      ],
      solution: [
        "Apply *o → ue* stem change to *aprob-* → *aprueb-* + *-o* → **apruebo**.",
      ],
    },
    {
      id: "exam-w1-q06",
      topicId: "education-and-employment",
      guideRef: "school-rules-and-pressure",
      kind: "short",
      difficulty: "core",
      strategy: "Impersonal evaluation es justo/injusto que + present subjunctive",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **deber** (*nosotros*):\n\n*En mi opinión, es injusto que nosotros los alumnos _______ llevar corbata cuando hace tanto calor.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("deber", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["debemos", "nosotros debemos"] },
          feedback: "*Debemos* is present indicative! After *es injusto que…* (impersonal value judgement), switch to the opposite *-a* ending for *-er* verbs!",
        },
      ],
      hints: [
        "*Es injusto que…* is a WEIRDO impersonal expression, so *deber* must be in the present subjunctive.",
        "Regular *-er* verb *deber* takes *-a* endings: write the *nosotros* form (*-amos*).",
      ],
      solution: [
        "From *yo debo* → drop *-o* → *deb-* + opposite *-er* *nosotros* ending *-amos* → **debamos**.",
      ],
    },
    {
      id: "exam-w1-q07",
      topicId: "education-and-employment",
      guideRef: "post-16-and-university",
      kind: "mcq",
      difficulty: "core",
      strategy: "Future time clause: En cuanto + present subjunctive → simple future",
      question:
        "Translation Check — Choose the accurate Grade-9 Spanish translation of: *'As soon as I finish my exams, I will apply for a place at university.'*",
      options: [
        "En cuanto terminaré mis exámenes, solicito una plaza en la universidad.",
        "En cuanto termino mis exámenes, solicitaría una plaza en la universidad.",
        "En cuanto termine mis exámenes, solicitaré una plaza en la universidad.",
        "En cuanto terminé mis exámenes, solicitaré una plaza en la universidad.",
      ],
      answerIndex: 2,
      hints: [
        "*En cuanto* ('as soon as') referring to a future action works identically to future *cuando*: it MUST take the **present subjunctive**!",
        "Check the second clause for 'I will apply' (simple future of *solicitar*).",
      ],
      explanation:
        "*En cuanto + present subjunctive* (*termine*) followed by the simple future (*solicitaré una plaza en la universidad*) is a textbook Band-5 Grade-9 future frame.",
    },
    {
      id: "exam-w1-q08",
      topicId: "education-and-employment",
      guideRef: "part-time-jobs-and-work-experience",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      strategy: "Combine Imperfect setting + Preterite events + Future career ambition",
      question:
        "Paper 3 Speaking Follow-Up / Paper 2 Q7 Paragraph (80–100 words in Spanish): Answer your examiner's prompts on **work experience and future career plans**. Cover ALL FOUR points in Spanish:\n\n1. Where you did work experience or a weekend job in the past.\n2. What your boss or colleagues were like (use the imperfect tense).\n3. One opinion on whether teenagers should have a part-time job.\n4. What career you hope to pursue in the future and why.",
      hints: [
        "Contrast preterite (*trabajé / hice mis prácticas*) with imperfect descriptions (*mi jefa era muy paciente*).",
        "Include a WEIRDO or conditional structure (*recomiendo que…, me gustaría ser… porque…*) and omit *un/una* before an unmodified profession!",
      ],
      modelAnswer:
        "El verano pasado hice mis prácticas laborales en una librería del centro donde ayudé a organizar el escaparate. Mi jefa era sumamente comprensiva y mis compañeros siempre estaban dispuestos a explicarme todo. A mi juicio, es aconsejable que los adolescentes trabajen unas horas los sábados para ganar dinero y adquirir madurez. Cuando me licencie en la universidad, quisiera ser periodista porque me apasiona investigar noticias internacionales.",
      markScheme: [
        {
          point: "States past work experience or weekend job place/activity (preterite)",
          keywords: ["practicas", "trabaje", "hice", "ayude", "tienda", "libreria", "oficina", "cafeteria", "hospital"],
        },
        {
          point: "Describes boss, colleagues or atmosphere using the imperfect tense",
          keywords: ["era", "eran", "estaba", "estaban", "amable", "paciente", "comprensiva", "simpaticos"],
        },
        {
          point: "Gives a reasoned opinion on teenagers working part-time",
          keywords: ["aconsejable", "opino", "juicio", "dinero", "ahorrar", "independencia", "madurez"],
        },
        {
          point: "Expresses future career ambition with justification",
          keywords: ["quisiera", "gustaria", "espero", "periodista", "medico", "abogada", "ingeniero", "arquitecta", "apasiona"],
        },
      ],
      commonError:
        "Writing *quiero ser un periodista* (inserting *un/una* before an unmodified profession) or mixing up preterite events with imperfect descriptions.",
    },

    // ---------------- AREA C: PERSONAL LIFE & RELATIONSHIPS (Q09–Q12) ----------------
    {
      id: "exam-w1-q09",
      topicId: "personal-life-relationships",
      guideRef: "family-and-descriptions",
      kind: "short",
      difficulty: "warmup",
      strategy: "Reciprocal llevarse bien/mal con in present tense",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present indicative** form of the reflexive verb **llevarse** (*yo*):\n\n*Por suerte, _______ muy bien con mis abuelos maternos.*\n\n(Write ONLY the two-word reflexive pronoun + verb form.)",
      answer: { type: "text", accept: acceptedForms("llevarse", "present", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["llevo", "yo llevo"] },
          feedback: "'To get along with' is reflexive *llevarse bien con* — don't forget the *yo* reflexive pronoun *me*!",
        },
      ],
      hints: [
        "Include the *yo* reflexive pronoun (*me*) before the present tense of *llevar*.",
      ],
      solution: [
        "*Yo* reflexive pronoun *me* + *llevo* → **me llevo**.",
      ],
    },
    {
      id: "exam-w1-q10",
      topicId: "personal-life-relationships",
      guideRef: "friends-and-peer-pressure",
      kind: "mcq",
      difficulty: "core",
      strategy: "Preposition accuracy: influir EN (to influence)",
      question:
        "Grammar & Idiom Check — Which sentence accurately translates *'Social media can negatively influence teenagers'*?",
      options: [
        "Las redes sociales pueden influir negativamente sobre a los jóvenes.",
        "Las redes sociales pueden influir negativamente en los jóvenes.",
        "Las redes sociales pueden influir negativamente para los jóvenes.",
        "Las redes sociales pueden influir negativamente de los jóvenes.",
      ],
      answerIndex: 1,
      hints: [
        "In English 'influence' takes no preposition, whereas Spanish *influir* requires a fixed preposition.",
        "Recall the Area C collocation: *influir ___ los jóvenes*.",
      ],
      explanation:
        "In Spanish, 'to influence someone' is **influir en alguien**: *pueden influir negativamente en los jóvenes*.",
    },
    {
      id: "exam-w1-q11",
      topicId: "personal-life-relationships",
      guideRef: "childhood-memories-imperfect",
      kind: "short",
      difficulty: "core",
      strategy: "Irregular imperfect of ser: era, eras, era, éramos, erais, eran",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **imperfect** form of **ser** (*nosotros*):\n\n*Cuando _______ niños, pasábamos todo el mes de julio en el pueblo de mis tíos.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("ser", "imperfect", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["eramos", "nosotros eramos"] },
          feedback: "Almost! *Éramos* is stressed on the third-to-last syllable (esdrújula), so the capital/initial *é* MUST carry a written accent!",
        },
        {
          spec: { type: "text", accept: ["fuimos", "nosotros fuimos"] },
          feedback: "*Fuimos* is preterite; describing ongoing childhood background ('When we were children…') requires the imperfect!",
        },
      ],
      hints: [
        "*Ser* is one of the three irregular verbs in the imperfect (*era, eras, era…*).",
        "Remember the written accent on the first vowel of the *nosotros* form!",
      ],
      solution: [
        "The *nosotros* imperfect of *ser* is **éramos** (with an acute accent on *é*).",
      ],
    },
    {
      id: "exam-w1-q12",
      topicId: "personal-life-relationships",
      guideRef: "role-models",
      kind: "short",
      difficulty: "core",
      strategy: "Strong preterite of ganar / fundar / superar with regular accents",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **preterite** form of **superar** (*ella*):\n\n*Admiro a esta deportista paralímpica porque _______ muchas dificultades desde joven.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("superar", "preterite", "él") },
      traps: [
        {
          spec: { type: "text", accept: ["supero"] },
          feedback: "Mind the accent! *Supero* (no accent) means 'I overcome' in the present; 3rd-person preterite requires *-ó* (**superó**)!",
        },
      ],
      hints: [
        "Regular *-ar* verb *superar* in the 3rd-person singular (*ella*) preterite ends in *-ó*.",
        "Do not forget the acute accent on the final *-ó*!",
      ],
      solution: [
        "Drop *-ar* from *superar* and add 3rd-person singular preterite *-ó* → **superó**.",
      ],
    },

    // ---------------- AREA D: THE WORLD AROUND US (Q13–Q17) ----------------
    {
      id: "exam-w1-q13",
      topicId: "world-around-us",
      guideRef: "climate-and-pollution",
      kind: "short",
      difficulty: "core",
      strategy: "-zco / -uya spelling shifts in present subjunctive (destruir → destruya)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **destruir** (*ellos*, referring to *los incendios*):\n\n*Me preocupa mucho que los incendios forestales _______ tantos bosques cada verano.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("destruir", "subjunctive", "ellos") },
      traps: [
        {
          spec: { type: "text", accept: ["destruyen", "ellos destruyen"] },
          feedback: "*Destruyen* is present indicative! Emotion trigger *Me preocupa mucho que…* (WEIRDO) requires the present subjunctive (*-an*).",
        },
      ],
      hints: [
        "*Me preocupa mucho que…* expresses emotion (WEIRDO) and triggers the present subjunctive.",
        "Take present *yo* (*destruyo*), drop *-o*, and add the *-ir* *ellos* subjunctive ending *-an*.",
      ],
      solution: [
        "From *yo destruyo* → *destruy-* + *-an* → **destruyan**.",
      ],
    },
    {
      id: "exam-w1-q14",
      topicId: "world-around-us",
      guideRef: "sustainability-and-action",
      kind: "short",
      difficulty: "core",
      strategy: "Conditional advice with deber (deberíamos + inf)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete the eco-advice sentence with the **conditional** form of **deber** (*nosotros*):\n\n*Para reducir la huella de carbono, todos nosotros _______ usar más el transporte público.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("deber", "conditional", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["debemos", "nosotros debemos"] },
          feedback: "*Debemos* means 'we must' (present); the question asks for the **conditional** ('we should' = *deberíamos*)!",
        },
      ],
      hints: [
        "*Deber* is regular in the conditional: keep the full infinitive *deber* and add the *nosotros* conditional ending.",
        "All conditional endings carry a written accent on *-í-*: *-íamos*.",
      ],
      solution: [
        "Infinitive *deber* + *nosotros* conditional ending *-íamos* → **deberíamos**.",
      ],
    },
    {
      id: "exam-w1-q15",
      topicId: "world-around-us",
      guideRef: "global-and-social-issues",
      kind: "mcq",
      difficulty: "core",
      strategy: "Plural agreement with preocupar / importar (gustar-type verb)",
      question:
        "Grammar Check — Because *las desigualdades sociales* is **plural**, which sentence uses **preocupar** accurately?",
      options: [
        "A mí me preocupa mucho las desigualdades sociales en mi país.",
        "Yo preocupo mucho las desigualdades sociales en mi país.",
        "A mí se preocupa mucho las desigualdades sociales en mi país.",
        "A mí me preocupan mucho las desigualdades sociales en mi país.",
      ],
      answerIndex: 3,
      hints: [
        "*Preocupar* works just like *gustar* and *encantar*: the grammatical subject is the thing causing worry!",
        "Since *las desigualdades sociales* is plural, must the verb end in *-a* or *-an*?",
      ],
      explanation:
        "*Preocupar* agrees with the grammatical subject (*las desigualdades sociales*, plural): *me **preocupan** mucho las desigualdades sociales*.",
    },
    {
      id: "exam-w1-q16",
      topicId: "world-around-us",
      guideRef: "digital-media-and-tech",
      kind: "short",
      difficulty: "core",
      strategy: "-gar → -gue spelling shift in present subjunctive (descargar)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **descargar** (*tú*):\n\n*Te aconsejo que no _______ aplicaciones desconocidas en tu ordenador.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("descargar", "subjunctive", "tú") },
      traps: [
        {
          spec: { type: "text", accept: ["descarges", "tú descarges"] },
          feedback: "Verbs ending in *-gar* insert a silent *u* (*g → gu*) before *-e* across ALL persons of the present subjunctive!",
        },
        {
          spec: { type: "text", accept: ["descargas", "tú descargas"] },
          feedback: "*Descargas* is indicative; negative advice (*Te aconsejo que no…*) requires the present subjunctive!",
        },
      ],
      hints: [
        "*Te aconsejo que no…* triggers the present subjunctive (also serves as the negative *tú* command rule!).",
        "Change *g → gu* in *descargar* before adding *-es*.",
      ],
      solution: [
        "Apply *-gar → -gu-* spelling change + opposite *-ar* *tú* ending *-es* → **descargues**.",
      ],
    },
    {
      id: "exam-w1-q17",
      topicId: "world-around-us",
      guideRef: "charity-and-volunteering",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      strategy: "Paper 2 Q7 Essay Paragraph: environment & community volunteering across 3 tenses",
      question:
        "Edexcel Paper 2 Q7 (Extended Writing Extract — 90–120 words in Spanish): Write an article for your school magazine about **protecting our planet and helping the local community**. Address ALL FOUR bullet points in Spanish:\n\n1. What environmental or social issue worries you most today.\n2. What eco-friendly or charity activity you took part in recently (past tense).\n3. What you would change in your town if you had the power (use a hypothetical *si* clause).\n4. Encourage fellow students to get involved next term (future or subjunctive).",
      hints: [
        "Use masculine *el problema / el cambio climático*, a preterite charity/eco action (*recaudamos fondos / plantamos árboles*), and *Si fuera… haría/pondría…*.",
        "Finish with a WEIRDO recommendation (*Es imprescindible que todos reciclemos / colaboremos…*) or future plan (*organizaremos*).",
      ],
      modelAnswer:
        "Actualmente lo que más me inquieta es el calentamiento global y la contaminación del aire en las grandes ciudades. El mes pasado participé en una campaña benéfica con mi instituto: limpiamos la playa y recaudamos fondos para un comedor social. Si yo fuera la alcaldesa de mi barrio, prohibiría los plásticos de un solo uso e instalaría más paneles solares gratuitos. El próximo trimestre organizaremos un mercadillo solidario, así que es fundamental que todos colaboremos.",
      markScheme: [
        {
          point: "Identifies a current environmental or social concern",
          keywords: ["calentamiento", "climatico", "contaminacion", "sequia", "pobreza", "desempleo", "basura", "inquieta", "preocupa"],
        },
        {
          point: "Narrates a past eco-friendly or charity activity in the preterite",
          keywords: ["participe", "limpiamos", "recaudamos", "plantamos", "donamos", "ayude", "reciclamos", "pasado"],
        },
        {
          point: "Uses a Grade-9 hypothetical si + imperfect subjunctive + conditional structure",
          keywords: ["fuera", "fuese", "tuviera", "tuviese", "pudiera", "pudiese", "prohibiria", "instalaria", "haria", "cambiaria"],
        },
        {
          point: "Encourages future action using future tense or present subjunctive",
          keywords: ["organizaremos", "haremos", "fundamental", "imprescindible", "colaboremos", "reciclemos", "ayudemos"],
        },
      ],
      commonError:
        "Writing *la calentamiento* or *la problema* (gender trap!) or putting the conditional directly after *si* (*si sería* instead of *si fuera*).",
    },

    // ---------------- AREA E: SOCIAL ACTIVITIES, FITNESS & HEALTH (Q18–Q21) ----------------
    {
      id: "exam-w1-q18",
      topicId: "social-fitness-health",
      guideRef: "healthy-living-and-diet",
      kind: "short",
      difficulty: "core",
      strategy: "para + infinitive expresses 'in order to'",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with **por** or **para**:\n\n*_______ mantenerme en forma, voy nadando al polideportivo tres veces por semana.*\n\n(Write ONLY `por` or `para`.)",
      answer: { type: "text", accept: ["para"] },
      traps: [
        {
          spec: { type: "text", accept: ["por"] },
          feedback: "To express purpose / goal ('in order to stay fit'), Spanish ALWAYS uses **para + infinitive**, never *por*!",
        },
      ],
      hints: [
        "Translate the blank as *'In order to stay fit…'*.",
        "Which preposition (*por* or *para*) expresses a goal or purpose before an infinitive?",
      ],
      solution: [
        "Purpose ('in order to' + infinitive) always takes **para** (*Para mantenerme en forma…*).",
      ],
    },
    {
      id: "exam-w1-q19",
      topicId: "social-fitness-health",
      guideRef: "smoking-alcohol-stress",
      kind: "short",
      difficulty: "core",
      strategy: "WEIRDO recommendation + negative present subjunctive",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **fumar** (*ellos*, referring to *los jóvenes*):\n\n*Los médicos recomiendan que los jóvenes nunca _______ cigarrillos electrónicos.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("fumar", "subjunctive", "ellos") },
      traps: [
        {
          spec: { type: "text", accept: ["fuman", "ellos fuman"] },
          feedback: "*Fuman* is present indicative! *Los médicos recomiendan que…* triggers the opposite *-e* ending for *-ar* verbs!",
        },
      ],
      hints: [
        "*Recomiendan que…* is a WEIRDO recommendation trigger.",
        "Swap the *-ar* ending of *fumar* to the opposite *-en* ending for *ellos*.",
      ],
      solution: [
        "From *yo fumo* → *fum-* + opposite *-ar* *ellos* ending *-en* → **fumen**.",
      ],
    },
    {
      id: "exam-w1-q20",
      topicId: "social-fitness-health",
      guideRef: "sports-and-events",
      kind: "mcq",
      difficulty: "warmup",
      strategy: "jugar al (ball/team sports) vs hacer / practicar (individual/martial/athletic sports)",
      question:
        "Collocation Check — Which sentence uses **jugar**, **hacer** and **practicar** accurately?",
      options: [
        "Juego a la natación los martes y hago al tenis los domingos.",
        "Practico natación los martes y juego al tenis los domingos.",
        "Juego el ciclismo los martes y hago el fútbol los domingos.",
        "Hago al baloncesto los martes y juego el atletismo los domingos.",
      ],
      answerIndex: 1,
      hints: [
        "*Jugar a (+ el = al)* is ONLY for ball, racquet or board games (*jugar al tenis, jugar al fútbol*).",
        "Non-ball sports like *natación, atletismo, ciclismo, judo* use *hacer* or *practicar*!",
      ],
      explanation:
        "Swimming (*la natación*) takes *hacer* or *practicar* (*Practico natación*), whereas tennis is a racquet/ball sport taking *jugar a + el = al* (*juego al tenis*).",
    },
    {
      id: "exam-w1-q21",
      topicId: "social-fitness-health",
      guideRef: "eating-out-and-complaints",
      kind: "written",
      difficulty: "core",
      marks: 3,
      strategy: "Paper 3 Role-Play / Short Complaint: polite request + estar for dish state + past detail",
      question:
        "Paper 3 Role-Play Task (Restaurant — 40–60 words in Spanish): You are having dinner in a restaurant in Madrid and there is a problem with your meal. Write what you say to the waiter covering ALL THREE points in Spanish:\n\n1. Explain what you ordered earlier (past tense).\n2. Explain what is wrong with the food or plate right now (use *estar*).\n3. Politely ask the waiter to bring a replacement or the bill.",
      hints: [
        "Use *pedí* ('I ordered') for bullet 1, and *estar* (*está frío / está sucio / está salado*) for the temporary condition of the food/plate!",
        "Use a polite question like *¿Me puede traer…?* with *¿ … ?*.",
      ],
      modelAnswer:
        "Perdone, hace media hora pedí el pollo asado con patatas de segundo plato. Por desgracia, la carne está completamente fría y además el tenedor está sucio. ¿Me puede traer otro plato caliente, por favor?",
      markScheme: [
        {
          point: "States what was ordered using a past tense (e.g. pedí / tomé)",
          keywords: ["pedi", "pedimos", "ordene", "pollo", "pescado", "sopa", "paella", "filete", "menu"],
        },
        {
          point: "Describes the current fault with the food/tableware using estar",
          keywords: ["esta", "estan", "fria", "frio", "sucio", "sucia", "salada", "crudo", "quemado"],
        },
        {
          point: "Makes a polite request to the waiter",
          keywords: ["¿", "puede", "podria", "traer", "cambiar", "cuenta", "otro", "otra"],
        },
      ],
      commonError:
        "Saying *la sopa es fría* (which would mean it is gazpacho — cold by nature!) instead of *la sopa está fría*, or confusing *pedí* with *pregunté*.",
    },

    // ---------------- IGCSE TENSE MASTERY (Q22–Q25) ----------------
    {
      id: "exam-w1-q22",
      topicId: "past-future-tenses",
      guideRef: "preterite-irregs-and-accents",
      kind: "short",
      difficulty: "core",
      strategy: "i→y spelling change in 3rd-person preterite (leer → leyó / leyeron)",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **preterite** form of **leer** (*ella*):\n\n*Durante el vuelo a Buenos Aires, Vanishree _______ una novela policíaca entera.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("leer", "preterite", "él") },
      traps: [
        {
          spec: { type: "text", accept: ["leió", "ella leió"] },
          feedback: "Between two vowels (*e-i-o*), unstressed *i* changes to **y** in 3rd-person preterite (*leyó, leyeron*)!",
        },
        {
          spec: { type: "text", accept: ["leyo"] },
          feedback: "Don't forget the acute accent on the final *-ó* (**leyó**)!",
        },
      ],
      hints: [
        "In *leer, oír, construir*, unstressed *i* between vowels turns into **y** in 3rd-person preterite.",
        "Keep the written accent on *-ó*!",
      ],
      solution: [
        "*Leer* (*ella*, preterite): *le-* + *-ió* → *i* becomes *y* → **leyó**.",
      ],
    },
    {
      id: "exam-w1-q23",
      topicId: "past-future-tenses",
      guideRef: "imperfect-and-contrast",
      kind: "short",
      difficulty: "core",
      strategy: "Irregular imperfect of ir: iba, ibas, iba, íbamos, ibais, iban",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **imperfect** form of **ir** (*yo*):\n\n*De pequeña, todos los domingos _______ al mercado con mi abuelo.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("ir", "imperfect", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["fui", "yo fui"] },
          feedback: "*Fui* is preterite ('I went once'); *De pequeña, todos los domingos* expresses a habitual past routine, requiring the imperfect!",
        },
        {
          spec: { type: "text", accept: ["ía", "íba"] },
          feedback: "*Ir* in the imperfect is *iba* (with a *b* and NO accent on *yo/tú/él/ellos* — only *nosotros íbamos* has an accent!).",
        },
      ],
      hints: [
        "*Todos los domingos* signals a repeated childhood habit → imperfect tense.",
        "Recall the irregular imperfect of *ir*: *iba, ibas, iba…*.",
      ],
      solution: [
        "The *yo* imperfect form of *ir* is **iba**.",
      ],
    },
    {
      id: "exam-w1-q24",
      topicId: "past-future-tenses",
      guideRef: "perfect-and-pluperfect",
      kind: "short",
      difficulty: "core",
      strategy: "Irregular past participle: escribir → escrito",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **perfect tense** (*pretérito perfecto*) of **escribir** (*nosotros*):\n\n*Hoy en clase _______ un ensayo sobre las energías renovables.*\n\n(Write ONLY the two-word auxiliary + past participle verb form.)",
      answer: { type: "text", accept: acceptedForms("escribir", "perfect", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["hemos escribido", "nosotros hemos escribido"] },
          feedback: "*Escribir* has an irregular past participle (*escrito*, never *escribido*)!",
        },
      ],
      hints: [
        "Combine *nosotros* present of *haber* (*hemos*) with the irregular past participle of *escribir*.",
        "Think of English 'script' → *escr___*.",
      ],
      solution: [
        "*Haber* (*nosotros*) = *hemos*; irregular participle of *escribir* = *escrito*.",
        "Answer: **hemos escrito**.",
      ],
    },
    {
      id: "exam-w1-q25",
      topicId: "past-future-tenses",
      guideRef: "simple-future-and-conditional",
      kind: "short",
      difficulty: "core",
      strategy: "Irregular future stem saldr- + accented ending",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **simple future** form of **salir** (*ellos*):\n\n*Mis primos _______ temprano mañana para no encontrar tráfico en la autopista.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("salir", "future", "ellos") },
      traps: [
        {
          spec: { type: "text", accept: ["salirán", "ellos salirán"] },
          feedback: "*Salir* inserts a *d* in the future/conditional stem (*saldr-*, never *salir-*)!",
        },
        {
          spec: { type: "text", accept: ["saldran"] },
          feedback: "All simple future endings except *nosotros* carry a written accent: **saldrán**!",
        },
      ],
      hints: [
        "*Salir* is a 'd-stem' irregular verb in the future (*tener → tendr-, poner → pondr-, salir → saldr-*).",
        "Add the *ellos* future ending *-án* (with an accent on *á*!).",
      ],
      solution: [
        "Irregular stem *saldr-* + *ellos* future ending *-án* → **saldrán**.",
      ],
    },

    // ---------------- GRADE-9 SUBJUNCTIVE & PRECISION (Q26–Q30) ----------------
    {
      id: "exam-w1-q26",
      topicId: "subjunctive-grade9",
      guideRef: "forming-present-subjunctive",
      kind: "short",
      difficulty: "core",
      strategy: "Yo-go stem in present subjunctive: hacer → yo hago → haga",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **hacer** (*nosotros*):\n\n*Es imprescindible que _______ más deporte al aire libre después de las clases.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("hacer", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["hacemos", "nosotros hacemos"] },
          feedback: "*Hacemos* is present indicative! *Es imprescindible que…* triggers the present subjunctive built from *yo hago*!",
        },
        {
          spec: { type: "text", accept: ["hacamos"] },
          feedback: "Never build the present subjunctive from the infinitive! Start from Step 1: *yo hago* → drop *-o* → *hag-*!",
        },
      ],
      hints: [
        "Follow the 3-step Yo-Flip rule: Step 1 *yo hago* → Step 2 drop *-o* (*hag-*).",
        "Step 3 add the opposite *-er* *nosotros* ending *-amos*.",
      ],
      solution: [
        "From *yo hago* → *hag-* + *-amos* → **hagamos**.",
      ],
    },
    {
      id: "exam-w1-q27",
      topicId: "subjunctive-grade9",
      guideRef: "weirdo-and-impersonal",
      kind: "short",
      difficulty: "core",
      strategy: "DISHES irregular saber → sepa in negative doubt clause",
      question:
        "Paper 2 Q3c Grammar Manipulation — Complete with the **present subjunctive** of **saber** (*él*):\n\n*Dudo que el nuevo empleado _______ hablar tres idiomas extranjeros.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("saber", "subjunctive", "él") },
      traps: [
        {
          spec: { type: "text", accept: ["sabe", "él sabe"] },
          feedback: "*Sabe* is indicative; *Dudo que…* ('I doubt that…') expresses WEIRDO doubt and triggers the DISHES subjunctive!",
        },
      ],
      hints: [
        "*Dudo que…* requires the present subjunctive.",
        "*Saber* is the **S** in DISHES (*yo sé* has no *-o* to drop, so its subjunctive stem is *sep-*).",
      ],
      solution: [
        "Irregular DISHES present subjunctive of *saber* (*él*) → **sepa**.",
      ],
    },
    {
      id: "exam-w1-q28",
      topicId: "subjunctive-grade9",
      guideRef: "si-clauses-and-imperfect-subj",
      kind: "short",
      difficulty: "challenge",
      strategy: "Si + imperfect subjunctive (tuviera / tuviese) → conditional",
      question:
        "Paper 2 Q3c Grade-9 'Si' Clause — Complete with the **imperfect subjunctive** of **tener** (*yo*):\n\n*Si _______ más tiempo libre entre semana, aprendería a tocar la guitarra española.*\n\n(Write ONLY the missing verb; either *-ra* or *-se* imperfect subjunctive is accepted.)",
      answer: { type: "text", accept: impSubjAccept("tuviera", "tuviese", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["tendría", "yo tendría"] },
          feedback: "Golden mark-saver: NEVER put the conditional (*tendría*) right after *si*! Use the imperfect subjunctive (*tuviera / tuviese*).",
        },
        {
          spec: { type: "text", accept: ["teniera", "tenga"] },
          feedback: "Build the imperfect subjunctive from 3rd-person plural preterite *tuvieron* (not the infinitive!): drop *-ron* → *tuvie-* + *-ra/-se*!",
        },
      ],
      hints: [
        "The main verb *aprendería* is conditional, so *Si…* requires the **imperfect subjunctive**.",
        "Take *ellos* preterite of *tener* (*tuvieron*), drop *-ron*, and add *-ra* (or *-se*).",
      ],
      solution: [
        "From *tuvieron* → drop *-ron* → *tuvie-* + *-ra / -se*.",
        "Answer: **tuviera** (or **tuviese**).",
      ],
    },
    {
      id: "exam-w1-q29",
      topicId: "subjunctive-grade9",
      guideRef: "pronouns-por-para-ser-estar",
      kind: "short",
      difficulty: "challenge",
      strategy: "Double object pronouns: le/les → se before lo/la/los/las",
      question:
        "Pronoun Transformation — Rewrite *le* + *las* (*las entradas*, feminine plural) before the verb *compré*:\n\n*Mis amigos querían las entradas para el concierto, así que _______ compré por internet.*\n\n(Write ONLY the **two-word** double-object pronoun sequence before *compré*.)",
      answer: { type: "text", accept: ["se las"] },
      traps: [
        {
          spec: { type: "text", accept: ["les las", "le las"] },
          feedback: "*Le* and *les* ALWAYS change to **se** immediately before *lo, la, los, las* (*se las compré*, never *les las compré*)!",
        },
        {
          spec: { type: "text", accept: ["se los"] },
          feedback: "Check the gender of *las entradas* (feminine plural → *las*, not *los*)!",
        },
      ],
      hints: [
        "Indirect object ('for my friends' = *les*) comes BEFORE direct object ('the tickets' = *las*).",
        "Remember the clash rule: *le / les* turns into **se** before *lo / la / los / las*!",
      ],
      solution: [
        "Indirect *les* + direct *las* (*las entradas*) → *les* becomes *se* → **se las** (*se las compré*).",
      ],
    },
    {
      id: "exam-w1-q30",
      topicId: "subjunctive-grade9",
      guideRef: "cuando-and-time-clauses",
      kind: "written",
      difficulty: "challenge",
      marks: 4,
      strategy: "Full Grade-9 Synthesis: WEIRDO + Future Cuando + Si Clause + High-Scoring Connective",
      question:
        "Edexcel Paper 2 Q7 Grade-9 Upgrade Task (90–120 words in Spanish): Write a personal reflection on **healthy habits, digital balance and plans for next year**. Demonstrate top-band grammatical range by including ALL FOUR elements in Spanish:\n\n1. A balanced contrast using a high-scoring connective (e.g. *on the one hand… however / nevertheless…*) about technology or daily life.\n2. A WEIRDO subjunctive opinion or recommendation.\n3. A future time clause (*when I finish… / as soon as I turn…* + present subjunctive).\n4. A hypothetical *si* clause (*if I could / if I had…* + conditional).",
      hints: [
        "Combine *Por un lado… sin embargo / no obstante…* with *Es aconsejable que desconectemos…*.",
        "Add *Cuando termine este curso, dedicaré más tiempo…* and *Si pudiera cambiar mi rutina, dormiría ocho horas…*.",
      ],
      modelAnswer:
        "Por un lado, la tecnología nos facilita el estudio diario; no obstante, pasar demasiadas horas frente al ordenador perjudica el descanso. Por eso es imprescindible que desconectemos el móvil una hora antes de acostarnos para aliviar la tensión. Cuando termine mis exámenes en junio, empezaré a practicar natación con mis amigos todas las mañanas. Además, si tuviera menos deberes entre semana, cocinaría platos más equilibrados en casa.",
      markScheme: [
        {
          point: "Uses a top-band contrast connective (sin embargo / no obstante / por un lado / a pesar de)",
          keywords: ["embargo", "obstante", "lado", "pesar", "cambio", "contrario"],
        },
        {
          point: "Includes an accurate WEIRDO subjunctive trigger + subjunctive verb",
          keywords: ["imprescindible", "es importante que", "aconsejable", "recomiendo", "espero que", "ojala", "desconectemos", "duerman", "hagamos"],
        },
        {
          point: "Includes a future time clause with present subjunctive + future tense",
          keywords: ["termine", "acabe", "cumpla", "tenga", "apruebe", "empezare", "ire", "hare", "practicare"],
        },
        {
          point: "Includes a hypothetical si + imperfect subjunctive + conditional sentence",
          keywords: ["tuviera", "tuviese", "pudiera", "pudiese", "fuera", "fuese", "hubiera", "cocinaria", "dormiria", "haria", "viajaria"],
        },
      ],
      commonError:
        "Using the future indicative after *cuando* (*cuando terminaré* ❌) instead of the present subjunctive (*cuando termine* ✅).",
    },
  ],
};
