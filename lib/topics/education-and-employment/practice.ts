import type { TopicPractice } from "../../types.ts";
import { acceptedForms } from "../../spanish/verbs.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "education-and-employment-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "school-life-and-facilities",
      question:
        "Which verb accurately completes: *Si repaso cada tarde, sé que voy a _______ todos mis exámenes finales*?",
      options: [
        "aprobar",
        "suspender",
        "asistir",
        "gastar",
      ],
      answerIndex: 0,
      hints: [
        "If you revise every afternoon, you expect a positive exam result ('to pass').",
        "*Suspender* means to fail!",
      ],
      explanation:
        "**aprobar** means 'to pass (an exam)'. *Suspender* means 'to fail', *asistir (a)* means 'to attend', and *gastar* means 'to spend (money)'.",
    },
    {
      id: "education-and-employment-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "school-life-and-facilities",
      question:
        "Write the single Spanish preposition that completes this superlative: *La biología es la asignatura más interesante _______ mi instituto.*",
      answer: {
        type: "text",
        accept: ["de"],
        display: "de",
      },
      traps: [
        {
          spec: { type: "text", accept: ["en"] },
          feedback: "Trap! After a Spanish superlative, 'in' is ALWAYS translated by **de**, never *en*.",
        },
        {
          spec: { type: "text", accept: ["que"] },
          feedback: "*Que* is for comparisons (*más interesante que…*); superlatives take **de**.",
        },
      ],
      hints: [
        "Notice *la asignatura más interesante* — a relative superlative ('the most interesting subject in…').",
        "Spanish translates 'in' after a superlative as 'of' (a two-letter preposition starting with *d*).",
      ],
      solution: [
        "Identify the superlative structure: *la asignatura más interesante*.",
        "Use **de** (never *en*) after a superlative: *la asignatura más interesante **de** mi instituto*.",
      ],
      commonError: "Writing *en* by translating English 'in my school' literally.",
    },
    {
      id: "education-and-employment-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "school-rules-and-pressure",
      question:
        "Complete the school rule using the **bare infinitive** of **usar**: *En nuestro colegio está prohibido _______ el teléfono móvil durante las clases.* (Write ONLY the single missing word.)",
      answer: {
        type: "text",
        accept: ["usar"],
        display: "usar",
      },
      traps: [
        {
          spec: { type: "text", accept: ["para usar"] },
          feedback: "Never insert *para* after *está prohibido* — go straight to the infinitive **usar**!",
        },
        {
          spec: { type: "text", accept: ["usando"] },
          feedback: "Never use the *-ndo* gerund for English '-ing' verbal nouns; use the infinitive **usar**.",
        },
      ],
      hints: [
        "Impersonal rule phrases (*está prohibido, se debe, hay que*) do NOT have *que*.",
        "Follow *está prohibido* directly with the unconjugated infinitive.",
      ],
      solution: [
        "After *está prohibido* (no *que*), Spanish uses the bare infinitive directly.",
        "Write **usar**.",
      ],
    },
    {
      id: "education-and-employment-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "school-rules-and-pressure",
      question:
        "Complete the sentence: *Es injusto que nosotros _______ tantos exámenes en una sola semana.*",
      options: [
        "tenemos",
        "tengamos",
        "tener",
        "tendremos",
      ],
      answerIndex: 1,
      hints: [
        "*Es injusto que* is a WEIRDO value-judgement trigger introducing a new subject (*nosotros*).",
        "Form the *nosotros* **present subjunctive** of *tener* (from *yo tengo*).",
      ],
      explanation:
        "**tengamos** is the *nosotros* present subjunctive of *tener* (*tengo → teng- + -amos*), triggered by *es injusto que*.",
    },
    {
      id: "education-and-employment-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "post-16-and-university",
      question:
        "Complete the future time clause with the **present subjunctive** form of **terminar** (*yo*): *Cuando _______ el bachillerato, solicitaré una plaza en la universidad.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("hablar", "subjunctive", "yo").map((s) =>
          s.replace("hable", "termine")
        ),
        display: "termine",
      },
      traps: [
        {
          spec: { type: "text", accept: ["terminaré", "yo terminaré"] },
          feedback: "Grade-9 Alert: NEVER put the simple future after future *cuando*! Use the present subjunctive **termine**.",
        },
        {
          spec: { type: "text", accept: ["termino", "yo termino"] },
          feedback: "*Termino* is habitual present; future *cuando* ('when I finish Sixth Form') requires present subjunctive **termine**.",
        },
      ],
      hints: [
        "Look at the main verb *solicitaré* (future) — finishing Sixth Form has not happened yet!",
        "Future *cuando* triggers the **present subjunctive** of *terminar* (*yo*): drop *-o* from *termino* and add *-e*.",
      ],
      solution: [
        "Future *cuando* + unfulfilled event requires the present subjunctive.",
        "*yo termino* → *termin-* + *-e* = **termine**.",
      ],
    },
    {
      id: "education-and-employment-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "post-16-and-university",
      question:
        "Which verb (with NO preposition needed after it!) means **'to apply for'** in *_______ una beca universitaria*?",
      options: [
        "aplicar para",
        "asistir a",
        "solicitar",
        "aprobar",
      ],
      answerIndex: 2,
      hints: [
        "Avoid the English false friend *aplicar*!",
        "Remember the verb that takes *una plaza / una beca / un puesto* directly without *para*.",
      ],
      explanation:
        "**solicitar** means 'to apply for' and takes a direct object with zero preposition (*solicitar una beca*).",
    },
    {
      id: "education-and-employment-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "part-time-jobs-and-work-experience",
      question:
        "Complete the work-experience sentence with the **preterite** form of **hacer** (*yo*): *El año pasado _______ mis prácticas laborales en un hospital.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("hacer", "preterite", "yo"),
        display: "hice",
      },
      traps: [
        {
          spec: { type: "text", accept: ["hacía", "yo hacía"] },
          feedback: "*El año pasado* frames a single completed placement, so use the preterite **hice** (not imperfect *hacía*).",
        },
        {
          spec: { type: "text", accept: ["hicé", "yo hicé"] },
          feedback: "Strong preterite stems (*hice, tuve, estuve, pude, puse*) NEVER carry written accents!",
        },
      ],
      hints: [
        "*El año pasado* marks a bounded, completed past event.",
        "Recall the irregular strong preterite stem *hic-* of *hacer* (*yo*, unaccented!).",
      ],
      solution: [
        "*Hacer* has an irregular strong preterite stem *hic-*.",
        "1st person singular (*yo*) preterite = **hice** (no accent!).",
      ],
    },
    {
      id: "education-and-employment-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "part-time-jobs-and-work-experience",
      question:
        "Complete with the **imperfect** background description: *Durante mis prácticas en la librería, mi jefa _______ muy comprensiva y siempre me ayudaba.*",
      options: [
        "fue",
        "era",
        "estuvo",
        "será",
      ],
      answerIndex: 1,
      hints: [
        "Describing someone's ongoing personality in the past uses **ser** (not *estar*).",
        "Ongoing background traits use the **imperfect**, not the preterite!",
      ],
      explanation:
        "**era** (imperfect of *ser*) describes the boss's ongoing character trait throughout the placement.",
    },
    {
      id: "education-and-employment-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "careers-and-interviews",
      question:
        "Write the Spanish noun (including the definite article **el**) for **'unemployment'**.",
      answer: {
        type: "text",
        accept: ["el paro", "el desempleo"],
        display: "el paro",
      },
      hints: [
        "Think of the phrase *estar en …* ('to be unemployed') or the prefix *des-* + *empleo*.",
        "Both five-letter *el p…* and *el desempleo* are accepted — include **el**!",
      ],
      solution: [
        "In Spanish, 'unemployment' is **el paro** (or **el desempleo**).",
      ],
        commonError: "Remember the masculine article *el*: *el paro* or *el desempleo* (not *la para*).",
    },
    {
      id: "education-and-employment-quiz-q10",
      kind: "mcq",
      difficulty: "core",
      guideRef: "careers-and-interviews",
      question:
        "Translate accurately: **'My father is an architect, and he is a brilliant architect.'**",
      options: [
        "Mi padre es un arquitecto, y es arquitecto brillante.",
        "Mi padre es arquitecto, y es un arquitecto brillante.",
        "Mi padre está arquitecto, y está un arquitecto brillante.",
        "Mi padre es un arquitecto, y es un arquitecto brillante.",
      ],
      answerIndex: 1,
      hints: [
        "First clause: unmodified profession after *es* → drop *un*!",
        "Second clause: modified by *brillante* → restore *un*!",
      ],
      explanation:
        "**Mi padre es arquitecto, y es un arquitecto brillante** demonstrates the exact contrast: omit *un* before an unmodified profession, and restore *un* when modified by an adjective.",
    },
  ],
  papers: [
    {
      id: "education-and-employment-p1",
      title: "Practice Paper 1 — School, Rules & Post-16 Grammar + Writing (4SP0 Paper 2 Style)",
      questions: [
        {
          id: "education-and-employment-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-life-and-facilities",
          question:
            "Write the Spanish noun (including the definite article **el** or **la**) for **'timetable / schedule'** at school.",
          answer: {
            type: "text",
            accept: ["el horario"],
            display: "el horario",
          },
          traps: [
            {
              spec: { type: "text", accept: ["la hora"] },
              feedback: "*La hora* means 'the hour / time'; 'timetable' is **el horario**.",
            },
          ],
          hints: [
            "It is a masculine noun ending in *-ario*, related to *la hora*.",
            "Include the masculine article **el**.",
          ],
          solution: ["'Timetable / schedule' in Spanish is **el horario**."],
        },
        {
          id: "education-and-employment-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "school-life-and-facilities",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **present indicative** form of **repasar** (*nosotros*): *Antes de los exámenes finales, mis amigos y yo _______ juntos en la biblioteca.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("repasar", "present", "nosotros"),
            display: "repasamos",
          },
          hints: [
            "*Mis amigos y yo* = **nosotros** ('we').",
            "*Repasar* is a regular *-ar* verb in the present tense.",
          ],
          solution: [
            "Subject *mis amigos y yo* = *nosotros*.",
            "Regular *-ar* present ending for *nosotros*: *repas-* + *-amos* = **repasamos**.",
          ],
        commonError: "Keep the *-ar* ending *-amos*: *repasamos* (do not confuse *repasar* = revise with *revisar* = check/inspect).",
        },
        {
          id: "education-and-employment-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "school-life-and-facilities",
          question:
            "Complete the sentence with the mandatory single-word Spanish preposition after **asistir**: *Desde septiembre asisto _______ un instituto muy exigente.*",
          answer: {
            type: "text",
            accept: ["a"],
            display: "a",
          },
          traps: [
            {
              spec: { type: "text", accept: ["en"] },
              feedback: "*Asistir* ('to attend') always takes **a**, never *en*!",
            },
          ],
          hints: [
            "Remember the C-A-L-A mnemonic: **asistir ___** = 'to attend'.",
            "It is a single-letter preposition.",
          ],
          solution: [
            "**asistir a** ('to attend') always requires the preposition **a**: *asisto **a** un instituto*.",
          ],
        },
        {
          id: "education-and-employment-p1-q04",
          kind: "mcq",
          difficulty: "core",
          guideRef: "school-life-and-facilities",
          question:
            "Reading stimulus: *«Nuestro colegio acaba de inaugurar un laboratorio de física moderno, aunque las pistas deportivas siguen siendo bastante antiguas y el comedor es demasiado pequeño.»* Which facility has JUST been newly opened?",
          options: [
            "The sports courts",
            "The dining hall",
            "A modern physics laboratory",
            "A new library",
          ],
          answerIndex: 2,
          hints: [
            "*Acaba de inaugurar* (*acabar de + infinitive*) means 'has just opened/inaugurated'!",
            "Contrast that with *siguen siendo bastante antiguas* ('continue to be quite old').",
          ],
          explanation:
            "*Acaba de inaugurar un laboratorio de física moderno* means the school has **just opened a modern physics laboratory**, whereas the sports courts remain old and the canteen is too small.",
        },
        {
          id: "education-and-employment-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "school-life-and-facilities",
          question:
            "Paper 2 Q3c gap-fill — Write the **plural** of **examen** to complete: *En junio tenemos nueve _______ finales.* (Write ONLY the single missing plural noun, minding the accent!)",
          answer: {
            type: "text",
            accept: ["exámenes"],
            display: "exámenes",
          },
          hints: [
            "Nouns ending in *-n* add **-es** in the plural (*examen → examenes*).",
            "Now count three syllables back from the end (*e-**xá**-me-nes*) — where MUST the written accent go?",
          ],
          solution: [
            "Add *-es* to *examen* → *exámenes*.",
            "Because stress stays on the *a* (now third syllable from the end — *esdrújula*), add the acute accent: **exámenes**.",
          ],
          commonError: "Writing *examenes* without the mandatory accent on **á**.",
        },
        {
          id: "education-and-employment-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "school-rules-and-pressure",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **present subjunctive** form of **llegar** (*nosotros*): *El reglamento exige que todos _______ puntuales a las ocho.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("llegar", "subjunctive", "nosotros"),
            display: "lleguemos",
          },
          traps: [
            {
              spec: { type: "text", accept: ["llegemos", "nosotros llegemos"] },
              feedback: "Spelling shift! *-gar* verbs change **g → gu** before *-e* in ALL persons of the present subjunctive: **lleguemos**.",
            },
            {
              spec: { type: "text", accept: ["llegamos", "nosotros llegamos"] },
              feedback: "*Exige que* ('demands that') triggers the present subjunctive (**lleguemos**), not indicative *llegamos*.",
            },
          ],
          hints: [
            "*El reglamento exige que…* triggers the **present subjunctive**.",
            "*Llegar* ends in **-gar**, so change **g → gu** before the *-emos* subjunctive ending!",
          ],
          solution: [
            "*Exige que* triggers present subjunctive for *nosotros*.",
            "Apply the *-gar → -gu-* spelling change before *-emos*: **lleguemos**.",
          ],
        },
        {
          id: "education-and-employment-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "school-rules-and-pressure",
          question:
            "Write the Spanish noun phrase (including the definite article **el**) for **'school bullying'**.",
          answer: {
            type: "text",
            accept: ["el acoso escolar"],
            display: "el acoso escolar",
          },
          hints: [
            "Literally 'school harassment': *el a_____ escolar*.",
            "Starts with *el acoso…*.",
          ],
          solution: [
            "'School bullying' in Spanish is **el acoso escolar**.",
          ],
        commonError: "Avoid Anglicisms — school bullying in Edexcel 4SP0 Spanish is *el acoso escolar*.",
        },
        {
          id: "education-and-employment-p1-q08",
          kind: "mcq",
          difficulty: "core",
          guideRef: "school-rules-and-pressure",
          question:
            "Reading stimulus: *«En mi instituto público en Valencia nadie lleva uniforme. Por un lado podemos expresar nuestra personalidad, pero por otro lado hay más presión para comprar ropa de marca cara.»* What disadvantage of NOT wearing uniform does the writer identify?",
          options: [
            "Students get detention every morning.",
            "Teachers cannot tell which year group students are in.",
            "There is greater peer pressure to buy expensive designer clothes.",
            "Students waste half an hour ironing blazers.",
          ],
          answerIndex: 2,
          hints: [
            "Focus on the second half after *pero por otro lado* ('on the other hand').",
            "*Ropa de marca cara* = expensive designer/branded clothing.",
          ],
          explanation:
            "*Hay más presión para comprar ropa de marca cara* means there is more pressure to buy expensive designer clothes.",
        },
        {
          id: "education-and-employment-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "post-16-and-university",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **simple future** form of **tener** (*yo*): *El año que viene _______ que elegir tres asignaturas para el bachillerato.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("tener", "future", "yo"),
            display: "tendré",
          },
          traps: [
            {
              spec: { type: "text", accept: ["teneré", "yo teneré"] },
              feedback: "Irregular stem! *Tener* uses **tendr-** in the simple future and conditional: **tendré**.",
            },
          ],
          hints: [
            "Recall the irregular future stem of *tener*: drop *e* and insert *d* (**tendr-**).",
            "Add the *yo* future ending **-é** (with an accent!).",
          ],
          solution: [
            "Irregular future stem of *tener* = *tendr-*.",
            "Add *yo* ending *-é* = **tendré**.",
          ],
        },
        {
          id: "education-and-employment-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "post-16-and-university",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **gerund** (*-ndo* form) of **estudiar**: *Después de los exámenes IGCSE, pienso seguir _______ idiomas extranjeros.* (Write ONLY the single missing word.)",
          answer: {
            type: "text",
            accept: ["estudiando"],
            display: "estudiando",
          },
          traps: [
            {
              spec: { type: "text", accept: ["estudiar"] },
              feedback: "After *seguir* ('to keep on / continue'), Spanish requires the gerund **estudiando**, never the infinitive!",
            },
          ],
          hints: [
            "*Seguir + gerund* expresses 'to carry on doing something'.",
            "Form the *-ar* gerund by replacing *-ar* with **-ando**.",
          ],
          solution: [
            "*Seguir* takes the gerund: *estudiar →* **estudiando**.",
          ],
        },
        {
          id: "education-and-employment-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "post-16-and-university",
          question:
            "Paper 2 Q3c gap-fill — Complete the future time clause with the **present subjunctive** form of **ir** (*yo*): *Cuando _______ a la universidad, compartiré piso con otros estudiantes.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("ir", "subjunctive", "yo"),
            display: "vaya",
          },
          traps: [
            {
              spec: { type: "text", accept: ["iré", "yo iré"] },
              feedback: "Never put simple future *iré* after future *cuando*! Use the DISHES present subjunctive **vaya**.",
            },
            {
              spec: { type: "text", accept: ["voy", "yo voy"] },
              feedback: "Future *cuando* ('when I go to university') requires the present subjunctive **vaya**, not indicative *voy*.",
            },
          ],
          hints: [
            "Future *cuando* + future *compartiré* triggers the **present subjunctive**.",
            "*Ir* is one of the 6 DISHES irregular subjunctives (*dé, vaya, sea, haya, esté, sepa*).",
          ],
          solution: [
            "Future *cuando* triggers present subjunctive.",
            "1st person singular present subjunctive of *ir* = **vaya**.",
          ],
        },
        {
          id: "education-and-employment-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "careers-and-interviews",
          question:
            "Write the Spanish noun (including the definite article **la**) for **'scholarship / grant'** for university.",
          answer: {
            type: "text",
            accept: ["la beca"],
            display: "la beca",
          },
          hints: [
            "A short four-letter feminine noun starting with *b*: *la b___*.",
            "Think of *conseguir / solicitar una ____*.",
          ],
          solution: [
            "'Scholarship / grant' in Spanish is **la beca**.",
          ],
        commonError: "Remember *la beca* (feminine) for a university grant or scholarship.",
        },
        {
          id: "education-and-employment-p1-q13",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "school-life-and-facilities",
          question:
            "Edexcel Paper 2 Q6 Short Writing (60–75 words in Spanish): Write a short blog post for a Spanish partner school about your life as a student. You MUST include:\n1. One subject you enjoy and why.\n2. One facility your school has (e.g. library, laboratories, or sports courts).\n3. What you did in lessons yesterday (past tense).\n4. One school rule (e.g. uniform or mobile phones).",
          modelAnswer:
            "En mi instituto mi asignatura favorita es la biología porque hacemos experimentos fascinantes y la profesora explica todo con claridad. Nuestro centro cuenta con una biblioteca moderna y laboratorios excelentes. Ayer en clase repasé para un examen de ciencias y escribí un ensayo en español. En cuanto a las normas, tenemos que llevar uniforme escolar todos los días y está prohibido usar el móvil en los pasillos.",
          markScheme: [
            {
              point: "Names a school subject + clear opinion/reason in Spanish",
              keywords: [
                "asignatura",
                "biologia",
                "quimica",
                "fisica",
                "historia",
                "matematicas",
                "ciencias",
                "espanol",
                "informatica",
                "dibujo",
                "geografia",
              ],
            },
            {
              point: "Describes at least one school facility in Spanish",
              keywords: [
                "biblioteca",
                "laboratorio",
                "laboratorios",
                "instalaciones",
                "comedor",
                "gimnasio",
                "pistas",
                "aula",
                "aulas",
                "salon de actos",
              ],
            },
            {
              point: "Narrates a completed yesterday classroom action in the past tense",
              keywords: [
                "ayer",
                "repase",
                "escribi",
                "estudie",
                "aprendi",
                "hice",
                "hicimos",
                "tuvimos",
                "lei",
                "aprobe",
              ],
            },
            {
              point: "States a school rule using obligation/prohibition vocabulary",
              keywords: [
                "prohibido",
                "uniforme",
                "normas",
                "permite",
                "hay que",
                "se debe",
                "obligatorio",
                "tenemos que",
                "movil",
                "corbata",
              ],
            },
          ],
          hints: [
            "Hit all four bullet points in Spanish — don't leave out the past tense (*ayer estudié / hice / escribí*)!",
            "Use *cuenta con* or *dispone de* for facilities, and *está prohibido + infinitive* for a rule.",
          ],
          commonError: "Writing *la librería* instead of *la biblioteca*, or forgetting to switch to the preterite for yesterday's lessons.",
        },
        {
          id: "education-and-employment-p1-q14",
          kind: "written",
          difficulty: "challenge",
          marks: 4,
          guideRef: "school-rules-and-pressure",
          question:
            "Edexcel Paper 2 Q7 Extended Paragraph (Spanish): Write a balanced paragraph evaluating school rules, dress codes, and exam stress, including what you would reform if you were headteacher. Cover:\n1. One benefit of wearing uniform.\n2. One criticism or rule you think is unfair (aim for a subjunctive trigger!).\n3. How academic stress affects teenagers.\n4. What you would change if you were the headteacher (*Si + imperfect subjunctive + conditional*).",
          modelAnswer:
            "Por un lado, llevar uniforme escolar fomenta la igualdad entre todos los alumnos y evita la envidia por la ropa cara. Sin embargo, por otro lado me parece injusto que tengamos tantos deberes cada noche y que esté prohibido descansar en las aulas durante el recreo. Hoy en día muchos jóvenes se sienten agobiados por el estrés de los exámenes finales. Si yo fuera la directora del colegio, reduciría el número de pruebas y permitiría ropa más cómoda en verano.",
          markScheme: [
            {
              point: "Gives a positive argument for school uniform in Spanish",
              keywords: [
                "igualdad",
                "uniforme",
                "practico",
                "ahorra",
                "acoso",
                "identidad",
                "disciplina",
              ],
            },
            {
              point: "Expresses a criticism or unfair rule (ideally with subjunctive)",
              keywords: [
                "injusto",
                "molesta",
                "tengamos",
                "prohibido",
                "permitan",
                "deberes",
                "corbata",
                "incómodo",
                "incomodo",
              ],
            },
            {
              point: "Addresses student stress or academic pressure in Spanish",
              keywords: [
                "estres",
                "agobiados",
                "agobiado",
                "agobiada",
                "presion",
                "examenes",
                "ansiedad",
                "cansados",
              ],
            },
            {
              point: "Uses hypothetical reform frame (imperfect subjunctive + conditional)",
              keywords: [
                "fuera",
                "fuese",
                "reduciria",
                "cambiaria",
                "permitiria",
                "eliminaria",
                "daria",
              ],
            },
          ],
          hints: [
            "Contrast both sides with *Por un lado… Sin embargo, por otro lado…*.",
            "Trigger the subjunctive with *me parece injusto que tengamos…*.",
            "Finish strong with *Si fuera el director / la directora, cambiaría / reduciría…*.",
          ],
          commonError: "Putting conditional *sería* directly after *si* instead of imperfect subjunctive *fuera*.",
        },
        {
          id: "education-and-employment-p1-q15",
          kind: "written",
          difficulty: "core",
          marks: 3,
          guideRef: "post-16-and-university",
          question:
            "Edexcel Paper 3 Speaking Follow-Up (Spanish): Answer the examiner's prompt about what you plan to do after finishing secondary school, mentioning:\n1. A future time clause ('When I finish my exams / turn eighteen…').\n2. Your academic or vocational study choice.\n3. Whether you would like to take a gap year or win a scholarship.",
          modelAnswer:
            "Cuando termine mis exámenes este verano, seguiré estudiando el bachillerato porque me apasionan las ciencias. Después tengo la intención de solicitar una plaza en la universidad para licenciarme en medicina, y ojalá consiga una beca. Antes de empezar la carrera, me encantaría tomarme un año sabático para viajar y hacer voluntariado en Perú.",
          markScheme: [
            {
              point: "Uses a future time trigger with present subjunctive in Spanish",
              keywords: [
                "cuando termine",
                "cuando acabe",
                "cuando apruebe",
                "cuando tenga",
                "en cuanto termine",
              ],
            },
            {
              point: "States next study pathway (Sixth Form, vocational, or university degree)",
              keywords: [
                "bachillerato",
                "universidad",
                "formacion profesional",
                "licenciarme",
                "graduarme",
                "carrera",
                "aprendizaje",
              ],
            },
            {
              point: "Mentions a gap year or scholarship ambition in Spanish",
              keywords: [
                "sabatico",
                "beca",
                "voluntariado",
                "viajar",
              ],
            },
          ],
          hints: [
            "Open with *Cuando termine mis exámenes…* (present subjunctive!).",
            "Include *el bachillerato / la universidad* plus *un año sabático* or *una beca*.",
          ],
          commonError: "Saying *Cuando terminaré* instead of *Cuando termine*, or *colegio* instead of *universidad*.",
        },
      ],
    },
    {
      id: "education-and-employment-p2",
      title: "Practice Paper 2 — Part-Time Jobs, Work Experience & Careers (4SP0 Paper 2 Style)",
      questions: [
        {
          id: "education-and-employment-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "part-time-jobs-and-work-experience",
          question:
            "Write the plural Spanish noun phrase (including the definite article **las**) for **'work experience'**.",
          answer: {
            type: "text",
            accept: ["las prácticas laborales", "las prácticas"],
            display: "las prácticas laborales",
          },
          hints: [
            "In Spanish this phrase is feminine plural and takes an accent on *á*: *las p_______ laborales*.",
            "Don't forget the accent on *prácticas*!",
          ],
          solution: [
            "'Work experience' in Spanish is **las prácticas laborales** (or **las prácticas**).",
          ],
        commonError: "Work experience is feminine plural in Spain: *las prácticas laborales* (not *la experiencia de trabajo*).",
        },
        {
          id: "education-and-employment-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "part-time-jobs-and-work-experience",
          question:
            "Complete the job phrase with the single correct Spanish preposition: *Los domingos mi hermana trabaja _______ cajera en un supermercado.*",
          answer: {
            type: "text",
            accept: ["de"],
            display: "de",
          },
          traps: [
            {
              spec: { type: "text", accept: ["como una", "de una"] },
              feedback: "Use bare **de** with NO indefinite article: *trabaja **de** cajera*!",
            },
          ],
          hints: [
            "Spanish uses a two-letter preposition after *trabajar* to mean 'to work as'.",
            "Recall *trabajar ___ camarero / cajero*.",
          ],
          solution: [
            "**trabajar de** + bare job noun means 'to work as': *trabaja **de** cajera*.",
          ],
        },
        {
          id: "education-and-employment-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "part-time-jobs-and-work-experience",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **imperfect** form of **trabajar** (*yo*): *Durante mis prácticas en el hotel, todos los días _______ desde las nueve hasta las cinco.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("trabajar", "imperfect", "yo"),
            display: "trabajaba",
          },
          traps: [
            {
              spec: { type: "text", accept: ["trabajé", "yo trabajé"] },
              feedback: "*Todos los días* during the placement describes a repeated daily routine → use the imperfect **trabajaba**!",
            },
          ],
          hints: [
            "*Todos los días* signals habitual daily routine during that past period → **imperfect**.",
            "Regular *-ar* imperfect *yo* ending is **-aba**.",
          ],
          solution: [
            "Repeated past routine (*todos los días*) uses the imperfect.",
            "*trabaj-* + *-aba* = **trabajaba**.",
          ],
        },
        {
          id: "education-and-employment-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "part-time-jobs-and-work-experience",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **preterite** form of **escribir** (*yo*): *El último día de mis prácticas _______ un informe sobre la empresa.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("escribir", "preterite", "yo"),
            display: "escribí",
          },
          hints: [
            "*El último día* marks a single completed action → **preterite**.",
            "Regular *-ir* preterite *yo* ending is **-í** (with an accent!).",
          ],
          solution: [
            "*El último día* = single completed past event → preterite.",
            "*escrib-* + *-í* = **escribí**.",
          ],
        commonError: "Don't forget the written accent on the final *-í* in *escribí* — without an accent it isn't a valid form.",
        },
        {
          id: "education-and-employment-p2-q05",
          kind: "mcq",
          difficulty: "core",
          guideRef: "part-time-jobs-and-work-experience",
          question:
            "Reading stimulus: *«El verano pasado trabajé de socorrista en la piscina municipal. Aunque el sueldo no era alto, aprendí primeros auxilios y conocí a compañeros muy majos.»* What skill did the writer learn?",
          options: [
            "How to teach toddlers to dive",
            "First aid",
            "Accounting and bookkeeping",
            "Cooking in the poolside café",
          ],
          answerIndex: 1,
          hints: [
            "Look at *aprendí primeros auxilios*.",
            "*Socorrista* = lifeguard; what emergency skill do lifeguards learn?",
          ],
          explanation:
            "*Aprendí primeros auxilios* means 'I learnt first aid'.",
        },
        {
          id: "education-and-employment-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "part-time-jobs-and-work-experience",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **preterite** form of **ser** (*él/ella*) to give the overall verdict: *En conjunto, mi semana en la clínica veterinaria _______ muy enriquecedora.* (Write ONLY the single missing verb.)",
          answer: {
            type: "text",
            accept: ["fue"],
            display: "fue",
          },
          traps: [
            {
              spec: { type: "text", accept: ["era"] },
              feedback: "For an overall summary verdict (*En conjunto…*) on a completed week, Spanish uses the preterite **fue**, not imperfect *era*!",
            },
            {
              spec: { type: "text", accept: ["fué"] },
              feedback: "Monosyllabic preterite forms (*fui, fue, dio, vio*) NEVER carry a written accent in modern Spanish!",
            },
          ],
          hints: [
            "*En conjunto* ('all in all / overall') sums up a finished event → **preterite** of *ser*.",
            "Remember: 3rd person singular preterite of *ser* is one syllable with NO accent!",
          ],
          solution: [
            "Summary verdict on a completed past event takes the preterite of *ser*: **fue** (no accent).",
          ],
        },
        {
          id: "education-and-employment-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "careers-and-interviews",
          question:
            "Write the Spanish noun (including the definite article **el**) for **'salary / wage'**.",
          answer: {
            type: "text",
            accept: ["el sueldo", "el salario"],
            display: "el sueldo",
          },
          hints: [
            "Either *el s_____o* (6 letters: *sueldo*) or *el salario* is accepted — include **el**!",
            "Think of *un ______ bien pagado*.",
          ],
          solution: [
            "'Salary / wage' in Spanish is **el sueldo** (or **el salario**).",
          ],
        commonError: "Both *el sueldo* and *el salario* are masculine singular nouns.",
        },
        {
          id: "education-and-employment-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "careers-and-interviews",
          question:
            "Complete the sentence with the single Spanish word for **'journalist'** (no article!): *A mi primo le encanta investigar noticias y quiere ser _______.*",
          answer: {
            type: "text",
            accept: ["periodista"],
            display: "periodista",
          },
          traps: [
            {
              spec: { type: "text", accept: ["un periodista"] },
              feedback: "Drop *un* after *ser* before an unmodified profession: just **periodista**!",
            },
            {
              spec: { type: "text", accept: ["periodisto"] },
              feedback: "Nouns ending in **-ista** never change to *-isto* — it is **periodista** for both male and female!",
            },
          ],
          hints: [
            "Remember TWO rules: (1) NO *un* after *ser* for an unmodified profession; (2) *-ista* endings stay *-ista* even for *mi primo*!",
            "Related to *el periódico* ('newspaper').",
          ],
          solution: [
            "Omit *un* after *ser*, and keep invariable *-ista*: **periodista**.",
          ],
        },
        {
          id: "education-and-employment-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "careers-and-interviews",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **feminine singular** form of **trabajador**: *En la entrevista expliqué que soy una persona _______ y organizada.* (Write ONLY the single missing adjective.)",
          answer: {
            type: "text",
            accept: ["trabajadora"],
            display: "trabajadora",
          },
          traps: [
            {
              spec: { type: "text", accept: ["trabajador"] },
              feedback: "Adjectives ending in *-dor* add **-a** to agree with feminine *una persona*: **trabajadora**!",
            },
          ],
          hints: [
            "The noun modified is *una persona* (grammatically feminine singular!).",
            "Adjectives of trait ending in *-dor* form their feminine by adding **-a**.",
          ],
          solution: [
            "*Una persona* is feminine singular, so *trabajador* becomes **trabajadora**.",
          ],
        },
        {
          id: "education-and-employment-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "careers-and-interviews",
          question:
            "Paper 2 Q3c gap-fill — Complete with the **conditional** form of **gustar** (3rd person singular) to say 'I would like to work abroad': *En el futuro me _______ trabajar en el extranjero.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: ["gustaría"],
            display: "gustaría",
          },
          traps: [
            {
              spec: { type: "text", accept: ["gustaria"] },
              feedback: "Mind the written accent on **-ía** in every person of the conditional: **gustaría**!",
            },
          ],
          hints: [
            "Infinitive *gustar* + 3rd person singular conditional ending **-ía**.",
            "Don't forget the acute accent on the **í**!",
          ],
          solution: [
            "Conditional of *gustar* before an infinitive = *gustar* + *-ía* = **gustaría**.",
          ],
        },
        {
          id: "education-and-employment-p2-q11",
          kind: "mcq",
          difficulty: "core",
          guideRef: "careers-and-interviews",
          question:
            "Reading stimulus: *«Buscamos un recepcionista bilingüe con experiencia en atención al cliente. Se ofrece contrato a jornada completa, horario flexible y tres semanas de vacaciones pagadas.»* What working hours are offered in this job advert?",
          options: [
            "Saturday-only shifts",
            "Night shifts only",
            "Full-time contract with flexible hours",
            "Unpaid internship during school holidays",
          ],
          answerIndex: 2,
          hints: [
            "Translate *contrato a jornada completa* and *horario flexible*.",
            "Contrast *a jornada completa* with *a tiempo parcial*.",
          ],
          explanation:
            "*Contrato a jornada completa, horario flexible* means a **full-time contract with flexible hours**.",
        },
        {
          id: "education-and-employment-p2-q12",
          kind: "short",
          difficulty: "challenge",
          guideRef: "careers-and-interviews",
          question:
            "Paper 2 Q3c gap-fill — Complete the subjunctive relative clause with the **present subjunctive** of **ofrecer** (3rd person singular): *Busco una empresa que _______ formación continua y buen ambiente.* (Write ONLY the missing verb.)",
          answer: {
            type: "text",
            accept: acceptedForms("ofrecer", "subjunctive", "él"),
            display: "ofrezca",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ofrece", "él ofrece"] },
              feedback: "Because *una empresa* is hypothetical/not yet found (*Busco una empresa que…*), use the present subjunctive **ofrezca**!",
            },
            {
              spec: { type: "text", accept: ["ofreca"] },
              feedback: "Remember the *yo* stem of *-cer* verbs: *yo ofrezco* → **ofrezca**!",
            },
          ],
          hints: [
            "Unfound ideal employer (*Busco una empresa que…*) triggers the **present subjunctive**.",
            "Build from *yo* present **ofrezco** → drop *-o* → add **-a**!",
          ],
          solution: [
            "Hypothetical antecedent triggers present subjunctive.",
            "Yo-flip from *ofrezco*: *ofrezc-* + *-a* = **ofrezca**.",
          ],
        },
        {
          id: "education-and-employment-p2-q13",
          kind: "written",
          difficulty: "core",
          marks: 4,
          guideRef: "part-time-jobs-and-work-experience",
          question:
            "Edexcel Paper 2 Q7 Narrative Paragraph (Spanish): Write an account for your school magazine about a work-experience placement you completed recently. You MUST include:\n1. Where you did your placement and how long it lasted (Preterite).\n2. What your boss or the workplace was like (Imperfect description).\n3. Specific tasks you carried out during the week (Preterite).\n4. Your overall verdict on the placement and how it helped you.",
          modelAnswer:
            "El trimestre pasado hice mis prácticas laborales durante cinco días en una clínica dental cerca de mi casa. El edificio era muy moderno y mi jefa era súper amable y paciente conmigo. Todos los días contestaba al teléfono, pero el miércoles también atendí a los clientes en recepción y archivé documentos importantes. En resumen, fue una experiencia inolvidable porque adquirí confianza y aprendí muchísimo sobre el mundo laboral.",
          markScheme: [
            {
              point: "States where/when the placement took place using Preterite",
              keywords: [
                "hice",
                "trabaje",
                "practicas",
                "clinica",
                "oficina",
                "tienda",
                "hotel",
                "hospital",
                "empresa",
                "colegio",
              ],
            },
            {
              point: "Describes boss, colleagues, or workplace using Imperfect",
              keywords: [
                "era",
                "eran",
                "estaba",
                "habia",
                "amable",
                "simpatico",
                "simpatica",
                "paciente",
              ],
            },
            {
              point: "Mentions specific duties performed (e.g. serving customers, filing, answering phones)",
              keywords: [
                "atendi",
                "archive",
                "escribi",
                "ayude",
                "organice",
                "contestaba",
                "conteste",
                "clientes",
                "documentos",
              ],
            },
            {
              point: "Gives an overall evaluation and benefit gained",
              keywords: [
                "fue",
                "inolvidable",
                "util",
                "enriquecedora",
                "adquiri",
                "aprendi",
                "confianza",
              ],
            },
          ],
          hints: [
            "Open with *El trimestre pasado hice mis prácticas laborales en…*.",
            "Include Imperfect scene-setting (*mi jefa era…*) + Preterite duties (*atendí a los clientes, archivé documentos*) + closing verdict (*fue…*).",
          ],
          commonError: "Forgetting the personal *a* in *atendí a los clientes*, or writing *era* instead of *fue* for the final overall verdict.",
        },
        {
          id: "education-and-employment-p2-q14",
          kind: "written",
          difficulty: "challenge",
          marks: 4,
          guideRef: "careers-and-interviews",
          question:
            "Edexcel Paper 2 Q7 Formal Application (Spanish): Write a short formal message applying for a summer holiday job at a tourist hotel in Spain. Cover:\n1. Why you are writing and the post you are applying for (formal *usted*).\n2. Your personal qualities that suit the role.\n3. Your language skills or previous part-time experience.\n4. Your future career ambition and polite closing wish.",
          modelAnswer:
            "Estimado director: Le escribo para solicitar el puesto de recepcionista durante los meses de verano en su hotel. Me considero una candidata trabajadora, puntual, organizada y muy fiable. Además, soy bilingüe en inglés y español, y el año pasado trabajé de camarera a tiempo parcial los sábados. En el futuro quisiera ser periodista o dirigir un negocio turístico, por eso espero tener noticias suyas pronto.",
          markScheme: [
            {
              point: "Formal opening applying for a specific post with solicitar + usted register",
              keywords: [
                "le escribo",
                "solicitar",
                "puesto",
                "recepcionista",
                "camarero",
                "camarera",
                "socorrista",
                "su hotel",
                "su empresa",
              ],
            },
            {
              point: "Lists relevant personal qualities with accurate agreement",
              keywords: [
                "trabajador",
                "trabajadora",
                "puntual",
                "organizado",
                "organizada",
                "fiable",
                "ambicioso",
                "ambiciosa",
              ],
            },
            {
              point: "Highlights languages spoken or prior Saturday/summer job",
              keywords: [
                "bilingue",
                "idiomas",
                "ingles",
                "tiempo parcial",
                "trabaje",
                "experiencia",
              ],
            },
            {
              point: "States a future profession (dropping un/una!) or polite conditional/quisiera",
              keywords: [
                "quisiera",
                "me gustaria",
                "ser periodista",
                "ser medico",
                "ser medica",
                "ser abogado",
                "ser abogada",
                "ser ingeniero",
                "ser ingeniera",
                "negocio",
              ],
            },
          ],
          hints: [
            "Keep formal *usted* throughout (*Le escribo… su hotel…*) and use *solicitar el puesto de* (never *aplicar para*!).",
            "Mention *soy bilingüe* and drop *un/una* after *ser* when naming your future profession!",
          ],
          commonError: "Mixing informal *tu hotel* with formal *Le escribo*, or writing *quiero ser una periodista*.",
        },
        {
          id: "education-and-employment-p2-q15",
          kind: "written",
          difficulty: "core",
          marks: 3,
          guideRef: "part-time-jobs-and-work-experience",
          question:
            "Edexcel Paper 3 Speaking Role-Play & Opinion (Spanish): Explain the pros and cons of teenagers having a weekend job while still at school:\n1. What weekend job you or your friends do.\n2. One financial or personal advantage.\n3. One drawback for schoolwork or rest.",
          modelAnswer:
            "Los sábados trabajo de dependienta en una tienda de ropa durante cuatro horas. La mayor ventaja es que me permite ganar mi propio dinero y ahorrar para el futuro sin depender de mis padres. No obstante, a veces resulta agotador y me deja menos tiempo libre para descansar o hacer todos mis deberes.",
          markScheme: [
            {
              point: "Names a realistic weekend/part-time job in Spanish",
              keywords: [
                "trabajo de",
                "camarero",
                "camarera",
                "cajero",
                "cajera",
                "dependiente",
                "dependienta",
                "canguro",
                "socorrista",
                "repartir",
              ],
            },
            {
              point: "States a clear financial or independence benefit",
              keywords: [
                "ganar",
                "dinero",
                "ahorrar",
                "independiente",
                "sueldo",
              ],
            },
            {
              point: "States a clear academic or tiredness drawback",
              keywords: [
                "agotador",
                "cansado",
                "cansada",
                "deberes",
                "repasar",
                "descansar",
                "mal pagado",
              ],
            },
          ],
          hints: [
            "Use *trabajo de + bare job noun*.",
            "Contrast *ganar dinero y ahorrar* against *agotador / menos tiempo para los deberes*.",
          ],
          commonError: "Using *pasar dinero* instead of *gastar dinero / ganar dinero*.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "education-and-employment-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "school-rules-and-pressure",
      question:
        "Complete the Grade-9 subjunctive trigger with the **present subjunctive** of **prohibir** (*ellos* — mind the written accent on the stem vowel!): *A los alumnos les molesta que los profesores _______ el uso del móvil en el patio.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: ["prohíban", "ellos prohíban"],
        display: "prohíban",
      },
      traps: [
        {
          spec: { type: "text", accept: ["prohiban", "ellos prohiban"] },
          feedback: "Accent alert! In boot forms (*prohíbo, prohíbe, prohíba, prohíban*), *prohibir* needs an accent on **í** to break the *oi* diphthong!",
        },
        {
          spec: { type: "text", accept: ["prohíben", "ellos prohíben"] },
          feedback: "*Les molesta que* ('it annoys them that') is an Emotion WEIRDO trigger requiring the present subjunctive **prohíban**!",
        },
      ],
      hints: [
        "*Les molesta que* triggers the **present subjunctive** of *prohibir* (*ellos*).",
        "Start from *yo* present indicative **prohíbo** (notice the written accent on **í** in the boot forms!).",
        "Drop *-o* and add the *-ir* 3rd-person plural subjunctive ending **-an**.",
      ],
      solution: [
        "Emotion trigger *les molesta que* → present subjunctive (*ellos*).",
        "*yo prohíbo* → *prohíb-* + *-an* = **prohíban** (keeping the hiatus accent on *í*).",
      ],
    },
    {
      id: "education-and-employment-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "post-16-and-university",
      question:
        "Complete the future time clause with the **present subjunctive** of **saber** (*yo*): *En cuanto _______ mis notas en agosto, elegiré mis asignaturas de bachillerato.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("saber", "subjunctive", "yo"),
        display: "sepa",
      },
      traps: [
        {
          spec: { type: "text", accept: ["sabré", "yo sabré"] },
          feedback: "Never put the simple future after future *en cuanto*! Use the DISHES present subjunctive **sepa**.",
        },
        {
          spec: { type: "text", accept: ["sabo", "saba"] },
          feedback: "*Saber* is one of the 6 DISHES irregular subjunctive verbs: **sepa**!",
        },
      ],
      hints: [
        "*En cuanto* ('as soon as') pointing to August + future *elegiré* requires the **present subjunctive**.",
        "Check DISHES (*Dar, Ir, Ser, Haber, Estar, Saber*) — *saber* has a completely irregular subjunctive stem.",
        "1st person singular present subjunctive of *saber* starts with *sep-*.",
      ],
      solution: [
        "Future *en cuanto* triggers the present subjunctive.",
        "Irregular DISHES subjunctive of *saber* (*yo*) = **sepa**.",
      ],
    },
    {
      id: "education-and-employment-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "school-life-and-facilities",
      question:
        "Which sentence combines **el aula** with **100% accurate articles and adjective agreement** in both singular and plural?",
      options: [
        "El aula nuevo está limpio, pero los aulas viejos son pequeños.",
        "La aula nueva está limpia, y las aulas viejas son pequeñas.",
        "El aula nueva está limpia, aunque las aulas antiguas son más pequeñas.",
        "El aula nuevo está limpia, aunque las aulas antiguos son más pequeñas.",
      ],
      answerIndex: 2,
      hints: [
        "*Aula* is a **feminine** noun starting with stressed /a/.",
        "In the singular, only the article immediately before *aula* becomes *el* (*el aula*); every adjective (*nueva, limpia*) MUST remain feminine!",
        "In the plural, stressed /a/ is preceded by *-s*, so both article and adjectives use normal feminine plural (*las aulas antiguas… pequeñas*).",
      ],
      explanation:
        "**El aula nueva está limpia, aunque las aulas antiguas son más pequeñas** gets every detail right: singular *el* before stressed *a-*, feminine singular adjectives *nueva / limpia*, and feminine plural *las aulas antiguas / pequeñas*.",
    },
    {
      id: "education-and-employment-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "school-rules-and-pressure",
      question:
        "Complete the hypothetical school-reform sentence with the **conditional** form of **poner** (*yo*): *Si fuera el director de mi instituto, _______ menos exámenes y más actividades prácticas.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("poner", "conditional", "yo"),
        display: "pondría",
      },
      traps: [
        {
          spec: { type: "text", accept: ["ponería", "yo ponería"] },
          feedback: "Irregular conditional stem! *Poner* shares the future stem **pondr-** → **pondría**.",
        },
        {
          spec: { type: "text", accept: ["pusiera", "yo pusiera"] },
          feedback: "The *si* clause already has *fuera* (imperfect subjunctive); the main clause needs the conditional **pondría**!",
        },
      ],
      hints: [
        "*Si + imperfect subjunctive (fuera)* must be completed by the **conditional** in the main clause.",
        "Recall the irregular future/conditional stem of *poner* (drop *e*, insert *d*: **pondr-**).",
        "Add the *yo* conditional ending **-ía** (with accent on *í*!).",
      ],
      solution: [
        "Main clause of a Type-2 *si* sentence takes the conditional.",
        "Irregular stem *pondr-* + *-ía* = **pondría**.",
      ],
    },
    {
      id: "education-and-employment-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "post-16-and-university",
      question:
        "Complete with the **present subjunctive** form of **elegir** (*tú* — mind BOTH the *e → i* stem change AND the *g → j* spelling shift!): *Mi orientadora recomienda que tú _______ asignaturas que te apasionen.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("elegir", "subjunctive", "tú"),
        display: "elijas",
      },
      traps: [
        {
          spec: { type: "text", accept: ["eligas", "tú eligas"] },
          feedback: "Spelling trap! Before *-a*, *g* would sound hard like *gato* — change **g → j** (*yo elijo → tú **elijas***)!",
        },
        {
          spec: { type: "text", accept: ["elejas", "tú elejas"] },
          feedback: "*Elegir* is also an *e → i* stem-changing *-ir* verb (*yo elijo*): write **elijas**!",
        },
      ],
      hints: [
        "*Recomienda que* is a Recommendation WEIRDO trigger → **present subjunctive**.",
        "Use the 3-step Yo-Flip rule: what is the *yo* present indicative of *elegir*?",
        "*Yo elijo* (both *e → i* AND *g → j*!) → drop *-o* → add *-as* for *tú*.",
      ],
      solution: [
        "Start from *yo* present indicative: **elijo**.",
        "Drop *-o* (*elij-*) and add *-as* (*tú* subjunctive ending for *-ir*): **elijas**.",
      ],
    },
    {
      id: "education-and-employment-ch-q06",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "careers-and-interviews",
      question:
        "Compare these two sentences carefully:\n- Sentence 1: *Tengo un jefe que **habla** tres idiomas.*\n- Sentence 2: *Busco un jefe que **hable** tres idiomas.*\nWhy does Sentence 2 switch to **hable**?",
      options: [
        "Because hablar is always in the subjunctive after que.",
        "Because Sentence 2 refers to the past tense whereas Sentence 1 is present.",
        "Because in Sentence 2 the boss is hypothetical / not yet found, triggering the subjunctive in the relative clause.",
        "Because buscar is a reflexive verb requiring subjunctive agreement.",
      ],
      answerIndex: 2,
      hints: [
        "In Sentence 1 (*Tengo un jefe…*), does this multilingual boss already exist as a known person? Yes!",
        "In Sentence 2 (*Busco un jefe…*), do we know if we will find such a boss yet?",
        "Known/existent antecedent → indicative (*habla*); unknown/hypothetical antecedent → subjunctive (*hable*)!",
      ],
      explanation:
        "In Spanish relative clauses, an **existent, known antecedent** (*Tengo un jefe que…*) takes the **indicative** (*habla*), whereas an **indefinite, hypothetical antecedent** (*Busco un jefe que…*) takes the **present subjunctive** (*hable*).",
    },
    {
      id: "education-and-employment-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "part-time-jobs-and-work-experience",
      question:
        "Complete with the **preterite** form of **conducir** (*yo*) in this work-experience sentence: *Durante mis prácticas en la granja, por primera vez _______ un tractor.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("conducir", "preterite", "yo"),
        display: "conduje",
      },
      traps: [
        {
          spec: { type: "text", accept: ["conducí", "yo conducí"] },
          feedback: "All *-ducir* verbs (*conducir, producir, traducir*) take the irregular **-j-** preterite stem: **conduje**!",
        },
        {
          spec: { type: "text", accept: ["condujé", "yo condujé"] },
          feedback: "Strong *-j-* preterite stems (*conduje, dije, traje*) NEVER carry a written accent!",
        },
      ],
      hints: [
        "*Por primera vez* ('for the first time') signals a single completed action → **preterite**.",
        "Every verb ending in **-ducir** uses an irregular strong **-duj-** stem in the preterite.",
        "Strong preterite *yo* ending is unaccented **-e** (*conduj-* + *-e*).",
      ],
      solution: [
        "*-ducir* verbs form the preterite with strong stem *conduj-*.",
        "1st person singular (*yo*) = **conduje** (unaccented!).",
      ],
    },
    {
      id: "education-and-employment-ch-q08",
      kind: "short",
      difficulty: "challenge",
      guideRef: "post-16-and-university",
      question:
        "Complete the purpose clause with the **present subjunctive** of **poder** (*yo*): *Mis padres ahorran dinero todos los meses para que yo _______ estudiar en una universidad extranjera.* (Write ONLY the missing verb.)",
      answer: {
        type: "text",
        accept: acceptedForms("poder", "subjunctive", "yo"),
        display: "pueda",
      },
      traps: [
        {
          spec: { type: "text", accept: ["puedo", "yo puedo"] },
          feedback: "**para que** ('so that / in order that') ALWAYS triggers the subjunctive (**pueda**), never indicative *puedo*!",
        },
        {
          spec: { type: "text", accept: ["podré", "yo podré"] },
          feedback: "**para que** is an always-subjunctive conjunction — use **pueda**, never future *podré*!",
        },
      ],
      hints: [
        "Spot the conjunction **para que** ('so that'): unlike *para + infinitive*, **para que** + new subject ALWAYS requires the **present subjunctive**!",
        "*Poder* is an *o → ue* boot verb in the present subjunctive (*yo puedo*).",
        "Drop *-o* from *puedo* and add **-a**.",
      ],
      solution: [
        "*Para que* always triggers the subjunctive.",
        "*yo puedo* → *pued-* + *-a* = **pueda**.",
      ],
    },
  ],
};
