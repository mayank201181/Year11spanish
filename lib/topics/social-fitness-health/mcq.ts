import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "social-fitness-health-m1",
    title: "Area E MCQ Paper 1 — Diet, Health & Addictions",
    questions: [
      {
        id: "social-fitness-health-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "healthy-living-and-diet",
        question: "Which phrase correctly means **'to follow a balanced diet'** in Spanish?",
        options: [
          "seguir una dieta equilibrada",
          "llevar una comida basura",
          "hacer una grasa saturada",
          "tomar un estilo sedentario",
        ],
        answerIndex: 0,
        hints: [
          "Look for the noun *la dieta* paired with an adjective meaning 'balanced'.",
          "*Equilibrada* comes from *el equilibrio* (balance).",
        ],
        explanation:
          "**Seguir una dieta equilibrada** (or *llevar una dieta sana*) means 'to follow a balanced diet'; *la comida basura* means 'junk food' and *sedentario* means 'inactive'.",
      },
      {
        id: "social-fitness-health-m1-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "healthy-living-and-diet",
        question:
          "Complete the sentence accurately: *Para _______ en forma, voy al polideportivo tres veces por semana.*",
        options: ["manteniendo", "mantenerme", "me mantengo", "mantuve"],
        answerIndex: 1,
        hints: [
          "Look at the word right before the gap: *para* is a preposition ('in order to').",
          "After any preposition in Spanish, use the infinitive with the *yo* reflexive pronoun attached to the end.",
        ],
        explanation:
          "After the preposition **para**, Spanish strictly requires the **infinitive** (*mantener*) with the reflexive pronoun matching *voy* (*yo → me*) attached: **mantenerme**. *Manteniendo* is an English-interference gerund error.",
      },
      {
        id: "social-fitness-health-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "healthy-living-and-diet",
        question:
          "Choose the grammatically accurate sentence to express **'Instead of eating fast food, I prefer homemade food.'**",
        options: [
          "En vez de comiendo comida rápida, prefiero la comida casera.",
          "En vez de como comida rápida, prefiero la comida casera.",
          "En vez de comer comida rápida, prefiero la comida casera.",
          "Por comer comida rápida, prefiero la comida casera.",
        ],
        answerIndex: 2,
        hints: [
          "*En vez de* ('instead of') ends in the preposition *de*.",
          "What verb form must always follow a Spanish preposition?",
        ],
        explanation:
          "**En vez de comer...** is right because prepositional phrases ending in *de* (*en vez de, antes de, después de*) always take the **infinitive** (*comer*), never the gerund (*comiendo*) or a conjugated verb (*como*).",
      },
      {
        id: "social-fitness-health-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "healthy-living-and-diet",
        question: "Which quantifier + noun pair uses **100% accurate gender and number agreement**?",
        options: [
          "muchos azúcar",
          "demasiadas azúcar",
          "demasiado azúcar",
          "las azúcares saturadas",
        ],
        answerIndex: 2,
        hints: [
          "*Azúcar* here is uncountable singular — eliminate plural quantifiers (*muchos, demasiadas, las*).",
          "Match singular masculine quantifier *demasiado* to singular *azúcar*.",
        ],
        explanation:
          "**Demasiado azúcar** is accurate because uncountable singular *azúcar* cannot take plural determiners (*muchos*, *demasiadas*, *las*).",
      },
      {
        id: "social-fitness-health-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "healthy-living-and-diet",
        question:
          "Complete the sentence: *A mi hermana menor le encanta _______ verduras frescas, pero evita _______ bebidas azucaradas.*",
        options: [
          "comiendo … bebiendo",
          "come … bebe",
          "comer … bebiendo",
          "comer … beber",
        ],
        answerIndex: 3,
        hints: [
          "Both *encantar* ('to love doing') and *evitar* ('to avoid doing') take a non-finite verb in Spanish.",
          "Unlike English ('loves eating / avoids drinking'), Spanish never uses the gerund as the object of *encantar* or *evitar*.",
        ],
        explanation:
          "Both *encantar* and *evitar* must be followed by the **infinitive**: **comer … beber**. Spanish never uses *-ndo* as a verbal noun.",
      },
      {
        id: "social-fitness-health-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "smoking-alcohol-stress",
        question:
          "At the pharmacy you want to say **'My throat hurts.'** Which Spanish sentence is accurate?",
        options: [
          "Me duele la garganta.",
          "Me duelen la garganta.",
          "Yo duelo mi garganta.",
          "Me duele mi garganta.",
        ],
        answerIndex: 0,
        hints: [
          "*La garganta* is singular, so pick the 3rd person singular form of *doler (o→ue)*.",
          "With body parts and *me/te/le*, Spanish uses the definite article (*la*), not the possessive *mi*.",
        ],
        explanation:
          "**Me duele la garganta** matches singular *duele* to singular *la garganta* and uses the definite article *la* rather than redundant *mi*.",
      },
      {
        id: "social-fitness-health-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "smoking-alcohol-stress",
        question:
          "Complete the gap accurately: *Después de correr el maratón, a nosotros nos _______ muchísimo las piernas.*",
        options: ["duele", "duelen", "dolemos", "dueles"],
        answerIndex: 1,
        hints: [
          "With reverse verb *doler*, ignore *nosotros* when choosing the verb ending — *nos* already represents 'us'!",
          "Look to the right of the gap: *las piernas* is 3rd person plural.",
        ],
        explanation:
          "*Doler* agrees with the body part that hurts (*las piernas*, plural), NOT with *nosotros*. Therefore 3rd person plural **duelen** (*nos duelen las piernas*) is required; *dolemos* would mean 'we cause pain'!",
      },
      {
        id: "social-fitness-health-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "smoking-alcohol-stress",
        question:
          "How do you say **'My uncle quit smoking two years ago'** in idiomatic Spanish?",
        options: [
          "Mi tío paró fumando hace dos años.",
          "Mi tío dejó fumando dos años atrás.",
          "Mi tío dejó de fumar hace dos años.",
          "Mi tío salió de fumar por dos años.",
        ],
        answerIndex: 2,
        hints: [
          "Which verbal idiom with *de* + infinitive means 'to stop / quit a habit'?",
          "For 'two years ago' with a preterite verb, Spanish uses *hace + time*.",
        ],
        explanation:
          "**Dejar de + infinitive** means 'to quit / stop doing something' (*dejó de fumar*), and *hace dos años* with the preterite means 'two years ago'.",
      },
      {
        id: "social-fitness-health-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "smoking-alcohol-stress",
        question:
          "Read the warning on a health poster: *«El tabaco es muy perjudicial para los pulmones y crea una fuerte adicción.»* What does **perjudicial** mean?",
        options: ["beneficial", "expensive", "illegal", "harmful"],
        answerIndex: 3,
        hints: [
          "Read the context: tobacco affects *los pulmones* (lungs) and creates *una fuerte adicción*.",
          "Think of English 'prejudicial / damaging' — *perjudicial para la salud* is the classic Area E phrase.",
        ],
        explanation:
          "**Perjudicial** means **harmful / damaging** (*ser perjudicial para la salud* = to be harmful to health). *Beneficioso* is its antonym.",
      },
      {
        id: "social-fitness-health-m1-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "smoking-alcohol-stress",
        question:
          "Complete the doctor's Grade-9 advice: *Para aliviar el estrés escolar, te aconsejo que _______ al menos ocho horas y no _______ bebidas energéticas.*",
        options: [
          "duermas … tomes",
          "duermes … tomas",
          "dormir … tomar",
          "durmiendo … tomando",
        ],
        answerIndex: 0,
        hints: [
          "*Te aconsejo que...* ('I advise you that...') is a WEIRDO recommendation trigger with a change of subject (*yo → tú*).",
          "Choose the *tú* present subjunctive forms of *dormir (o→ue)* and *tomar*.",
        ],
        explanation:
          "After **te aconsejo que**, Spanish requires the **present subjunctive**: *dormir → duermas* (*o→ue* boot + opposite ending *-as*) and *tomar → tomes* (*-ar* opposite ending *-es*).",
      },
      {
        id: "social-fitness-health-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-and-events",
        question:
          "Which sentence uses **jugar**, **hacer** and **tocar** with 100% accuracy?",
        options: [
          "Juego la natación, hago la flauta y toco al rugby.",
          "Hago natación, toco la flauta y juego al rugby.",
          "Toco natación, juego la flauta y hago al rugby.",
          "Juego a la natación, toco al rugby y hago la flauta.",
        ],
        answerIndex: 1,
        hints: [
          "Recall B-A-M: Ball/team game → *jugar a*; solo fitness Activity → *hacer*; Musical instrument → *tocar*.",
          "Check *a + el = al* before masculine *el rugby*.",
        ],
        explanation:
          "**Hago natación** (non-ball sport → *hacer*), **toco la flauta** (musical instrument → *tocar*), and **juego al rugby** (ball sport → *jugar a + el*). Mixing these up is a frequent English-interference error.",
      },
      {
        id: "social-fitness-health-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cinema-music-reading",
        question: "What does **la banda sonora** mean in a cinema review?",
        options: [
          "the box office",
          "the special effects",
          "the soundtrack",
          "the plot twist",
        ],
        answerIndex: 2,
        hints: [
          "Connect *sonora* with *el sonido* (sound).",
          "*Los efectos especiales* = special effects; *la trama* = the plot.",
        ],
        explanation:
          "**La banda sonora** means **the soundtrack** of a film; *la taquilla* is the box office, *los efectos especiales* are special effects, and *la trama* is the plot.",
      },
      {
        id: "social-fitness-health-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "eating-out-and-complaints",
        question:
          "At the end of dinner, how do you say **'My father asked for the bill'**?",
        options: [
          "Mi padre preguntó la cuenta.",
          "Mi padre pidió por la cuenta.",
          "Mi padre preguntó por la propina.",
          "Mi padre pidió la cuenta.",
        ],
        answerIndex: 3,
        hints: [
          "Requesting an item/object uses *pedir*, whereas *preguntar* is only for asking questions.",
          "Remember two traps: *pedir* shifts *e→i* in 3rd-person preterite (*pidió*), and NEVER takes *por*!",
        ],
        explanation:
          "**Mi padre pidió la cuenta** uses *pedir* (*e→i* preterite *pidió*) directly with no *por*. *Preguntar* means 'to enquire/ask a question', and *pedir por* is an Anglicism.",
      },
      {
        id: "social-fitness-health-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "smoking-alcohol-stress",
        question:
          "Read Lucia's comment: *«Llevo seis meses sin probar una gota de alcohol y duermo mucho mejor.»* Which statement is TRUE?",
        options: [
          "Lucia has not drunk any alcohol for six months.",
          "Lucia started drinking alcohol six months ago.",
          "Lucia drinks alcohol once every six months.",
          "Lucia plans to give up alcohol in six months' time.",
        ],
        answerIndex: 0,
        hints: [
          "Look closely at the negative duration pattern: *llevar + [time] + **sin** + infinitive*.",
          "*Sin probar* means 'without tasting/trying'.",
        ],
        explanation:
          "**Llevar + time + sin + infinitive** means 'to have NOT done something for [time]': Lucia has gone six months without touching a drop of alcohol.",
      },
      {
        id: "social-fitness-health-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "healthy-living-and-diet",
        question:
          "Which sentence accurately translates **'Before going to bed, my parents avoid drinking coffee'**?",
        options: [
          "Antes de acostarse, mis padres evitan bebiendo café.",
          "Antes de acostarse, mis padres evitan beber café.",
          "Antes de se acuestan, mis padres evitan beber café.",
          "Antes de acostarme, mis padres evitan beber café.",
        ],
        answerIndex: 1,
        hints: [
          "Check the reflexive pronoun on *acostarse* for *mis padres* (*ellos → se*), attached to the infinitive after *antes de*.",
          "Check the verb after *evitan*: infinitive (*beber*) or gerund (*bebiendo*)?",
        ],
        explanation:
          "**Antes de acostarse, mis padres evitan beber café** matches the 3rd-person reflexive pronoun *se* to *mis padres* on the infinitive *acostarse*, and follows *evitan* with the infinitive *beber*.",
      },
    ],
  },
  {
    id: "social-fitness-health-m2",
    title: "Area E MCQ Paper 2 — Sports, Duration & Cultural Reviews",
    questions: [
      {
        id: "social-fitness-health-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sports-and-events",
        question:
          "Complete the sentence with the accurate present-tense form of **jugar**: *Mis primos y yo _______ al voleibol en la playa los sábados.*",
        options: ["juegamos", "jugamos", "jugemos", "juegan"],
        answerIndex: 1,
        hints: [
          "*Mis primos y yo* = *nosotros* ('we').",
          "Remember boot verbs (*jugar: u→ue*) do NOT stem-change outside the boot in *nosotros* or *vosotros*!",
        ],
        explanation:
          "**Jugamos** is the *nosotros* present indicative of *jugar*. Stem-changing verbs keep their regular stem vowel (*u*) in *nosotros* (*jugamos*, never *juegamos*), while *-emos* belongs to the subjunctive (*juguemos*).",
      },
      {
        id: "social-fitness-health-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-and-events",
        question:
          "Which sentence expresses **'I have been swimming for eight years'** (and I still swim now) in natural Grade-9 Spanish?",
        options: [
          "He estado nadando por ocho años.",
          "Nadé desde hace ocho años.",
          "Llevo ocho años haciendo natación.",
          "Llevo ocho años hacer natación.",
        ],
        answerIndex: 2,
        hints: [
          "Reject literal English *he estado -ndo por...*!",
          "Check the exact formula after *llevar + time*: does it take an infinitive or a gerund (*-ando / -iendo*)?",
        ],
        explanation:
          "**Llevo ocho años haciendo natación** uses **llevar (present) + time + gerund** accurately. *Nadé* is preterite (clashing with *desde hace*), and *he estado nadando por...* is an Anglicism.",
      },
      {
        id: "social-fitness-health-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-and-events",
        question:
          "Choose the exact equivalent of *«Lleva tres años tocando el violín»* using **desde hace**:",
        options: [
          "Tocó el violín desde hace tres años.",
          "Ha tocado el violín por tres años.",
          "Tocando el violín desde hace tres años.",
          "Toca el violín desde hace tres años.",
        ],
        answerIndex: 3,
        hints: [
          "*Lleva* is 3rd person singular present (*él / ella*).",
          "Pair **desde hace + time** with the **present indicative** of *tocar*.",
        ],
        explanation:
          "**Toca el violín desde hace tres años** pairs the 3rd-person singular **present tense** (*toca*) with **desde hace tres años** to express an action continuing into the present.",
      },
      {
        id: "social-fitness-health-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-and-events",
        question:
          "Complete the Paper 2 Q3c preterite gap: *El sábado pasado yo _______ (jugar) en la final del campeonato regional.*",
        options: ["jugué", "jugé", "jugó", "juguaste"],
        answerIndex: 0,
        hints: [
          "Look at the subject *yo* + time marker *el sábado pasado* (preterite).",
          "Verbs ending in *-gar* change *g → gu* before *-é* in the *yo* preterite to keep the hard 'g' sound!",
        ],
        explanation:
          "**Jugué** applies the mandatory *-gar → -gué* spelling shift in the *yo* preterite (with the acute accent on *-é*). *Jugé* would change the pronunciation of *g* to a throat 'j' sound!",
      },
      {
        id: "social-fitness-health-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-and-events",
        question:
          "In a reading passage on the Olympics you see: *«El atleta español batió el récord mundial tras lesionarse el invierno anterior.»* What happened to the athlete?",
        options: [
          "He missed the tournament because of a current injury.",
          "He broke the world record after getting injured the previous winter.",
          "He failed a doping test despite winning a gold medal.",
          "He retired from athletics after losing his world record.",
        ],
        answerIndex: 1,
        hints: [
          "*Batir un récord* = to break/beat a record.",
          "*Tras + infinitive* = 'after -ing' (*lesionarse* = to get injured).",
        ],
        explanation:
          "*Batió el récord mundial* means **he broke the world record**, and *tras lesionarse el invierno anterior* means **after getting injured the previous winter**.",
      },
      {
        id: "social-fitness-health-m2-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cinema-music-reading",
        question:
          "Complete the plot summary naturally: *La última novela policíaca que leí _______ un robo misterioso en Madrid.*",
        options: ["es acerca", "habla sobre de", "trata de", "trata a"],
        answerIndex: 2,
        hints: [
          "Which two-word verb with *de* means 'is about' for films and books?",
          "Avoid literal *es acerca* or *trata a*.",
        ],
        explanation:
          "**Trata de** (*tratar de + noun*) is the idiomatic Spanish expression for 'is about' when describing the plot of a book, play or film.",
      },
      {
        id: "social-fitness-health-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cinema-music-reading",
        question:
          "Read Álvaro's cinema review: *«Aunque los efectos especiales eran impresionantes, el final me pareció decepcionante y demasiado predecible.»* What is Álvaro's opinion?",
        options: [
          "Both the special effects and the ending were unforgettable.",
          "The special effects were poor, though the ending surprised him.",
          "He thought the ending was deceptive and confusing.",
          "The special effects were impressive, but the ending was disappointing and predictable.",
        ],
        answerIndex: 3,
        hints: [
          "Beware the false friend! *Decepcionante* comes from *la decepción* (disappointment), NOT English 'deceptive'.",
          "*Aunque* ('although') contrasts positive *impresionantes* with two criticisms.",
        ],
        explanation:
          "**Decepcionante** is a classic IGCSE false friend meaning **disappointing** (not 'deceptive' = *engañoso*), so Álvaro admired the special effects but found the ending disappointing and predictable.",
      },
      {
        id: "social-fitness-health-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cinema-music-reading",
        question:
          "Which phrase has **100% accurate gender and number agreement**?",
        options: [
          "el protagonista carismático",
          "el protagonista carismática",
          "la protagonista carismático",
          "un novela conmovedor",
        ],
        answerIndex: 0,
        hints: [
          "Nouns ending in *-ista* or *protagonista* keep *-a* for both male and female, so the article (*el* vs *la*) and adjective must match the person's gender!",
          "Check *la novela* (feminine) → *una novela conmovedora*.",
        ],
        explanation:
          "**El protagonista carismático** matches masculine *el* with masculine adjective *carismático* (*protagonista* itself never changes to *-o*!). For a female lead, you write *la protagonista carismática*.",
      },
      {
        id: "social-fitness-health-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cinema-music-reading",
        question:
          "Complete the preterite sentence accurately: *Anoche mis amigos y yo fuimos a un concierto en directo y yo _______ (tocar) la guitarra en el escenario.*",
        options: ["tocé", "toqué", "tocó", "toco"],
        answerIndex: 1,
        hints: [
          "*Anoche* ('last night') requires the preterite tense, and the subject is *yo*.",
          "Verbs ending in *-car* change *c → qu* before *-é*.",
        ],
        explanation:
          "**Toqué** is the *yo* preterite of *tocar*: *c → qu* preserves the hard 'k' sound before *-é* (*tocé* would sound like 'th'/'s').",
      },
      {
        id: "social-fitness-health-m2-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cinema-music-reading",
        question:
          "Which adjective best describes an emotional drama that moved the audience to tears?",
        options: ["asqueroso", "salado", "conmovedor", "sedentario"],
        answerIndex: 2,
        hints: [
          "Eliminate food/health words (*asqueroso* = disgusting, *salado* = salty, *sedentario* = inactive).",
          "*Conmover* means 'to move emotionally'.",
        ],
        explanation:
          "**Conmovedor** (fem. *conmovedora*) means **moving / touching**, an A*-level review adjective for emotional films and novels.",
      },
      {
        id: "social-fitness-health-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sports-and-events",
        question:
          "Complete the past narrative: *_______ dos años jugando en el equipo juvenil cuando me _______ la rodilla.*",
        options: [
          "Llevo … lesionaba",
          "Llevé … lesionaba",
          "He llevado … lesiono",
          "Llevaba … lesioné",
        ],
        answerIndex: 3,
        hints: [
          "This is the past-tense version of *llevar + gerund*: 'I **had been** playing for two years when I **injured** my knee.'",
          "Ongoing background duration in the past = Imperfect (*llevaba*); sudden interrupting injury = Preterite (*me lesioné*).",
        ],
        explanation:
          "**Llevaba … lesioné** pairs the **Imperfect** (*llevaba dos años jugando* = 'had been playing for two years') with the interrupting **Preterite** event (*me lesioné* = 'I injured').",
      },
      {
        id: "social-fitness-health-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cinema-music-reading",
        question:
          "Spot the ONLY accurate preterite form of **ver** in: *El domingo pasado mi hermana _______ un documental apasionante.*",
        options: ["vio", "vió", "veió", "viste"],
        answerIndex: 0,
        hints: [
          "*Mi hermana* is 3rd person singular (*ella*).",
          "Does RAE spelling put written accents on one-syllable preterite words like *vi, vio, di, dio, fui, fue*?",
        ],
        explanation:
          "**Vio** has **NO written accent** because it is a single syllable (*i + o* form a diphthong). Writing *vió* is an orthographic error in Spanish.",
      },
      {
        id: "social-fitness-health-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "eating-out-and-complaints",
        question:
          "How do you say **'For main course I ordered roast fish'** in a restaurant narrative?",
        options: [
          "Por segundo plato pregunté el pescado asado.",
          "De segundo plato pedí el pescado asado.",
          "Para segundo plato pedí por el pescado asado.",
          "En segundo plato pregunté por el pescado asado.",
        ],
        answerIndex: 1,
        hints: [
          "Spanish uses the preposition **de** before courses (*de primer plato, de segundo plato, de postre*).",
          "Use *pedí* (no *por*!) for 'I ordered'.",
        ],
        explanation:
          "**De segundo plato pedí el pescado asado** uses idiomatic **de** for meal courses and **pedí** (1st-person preterite of *pedir*) for ordering.",
      },
      {
        id: "social-fitness-health-m2-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "healthy-living-and-diet",
        question:
          "What does the leisure idiom **recargar las pilas** literally and idiomatically mean?",
        options: [
          "to waste electricity",
          "to buy new sports shoes",
          "to recharge one's batteries",
          "to download music onto a phone",
        ],
        answerIndex: 2,
        hints: [
          "*Las pilas* means 'batteries'.",
          "Students use it in Area E to explain why hobbies and sleep matter: *Hago deporte para desconectar y recargar las pilas*.",
        ],
        explanation:
          "**Recargar las pilas** means **to recharge one's batteries** — a top-scoring Area E idiom for relaxing and recovering from academic stress.",
      },
      {
        id: "social-fitness-health-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cinema-music-reading",
        question:
          "Complete the Paper 2 Q3c gap with the **preterite** of **leer**: *Durante las vacaciones de verano, mis hermanos _______ tres novelas históricas.*",
        options: ["leieron", "leyían", "leeron", "leyeron"],
        answerIndex: 3,
        hints: [
          "*Mis hermanos* is 3rd person plural (*ellos*) in the preterite.",
          "Between two vowels (*le + ieron*), unstressed *i* turns into **y**!",
        ],
        explanation:
          "**Leyeron** applies the mandatory *i → y* spelling rule in 3rd-person preterite of vowel-stem *-er/-ir* verbs (*leer → leyó, leyeron*; *oír → oyó, oyeron*).",
      },
    ],
  },
  {
    id: "social-fitness-health-m3",
    title: "Area E MCQ Paper 3 — Eating Out, Complaints & Mixed Grade-9 Mastery",
    questions: [
      {
        id: "social-fitness-health-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "eating-out-and-complaints",
        question:
          "You need a clean knife and napkin at a café in Valencia. Which vocabulary pair do you ask for?",
        options: [
          "una cuchara y la propina",
          "un cuchillo y una servilleta",
          "un tenedor y la cuenta",
          "un vaso y el postre",
        ],
        answerIndex: 1,
        hints: [
          "*El tenedor* = fork, *la cuchara* = spoon — so which word means 'knife'?",
          "*La servilleta* = napkin (*la cuenta* = bill, *la propina* = tip).",
        ],
        explanation:
          "**Un cuchillo y una servilleta** means **a knife and a napkin**.",
      },
      {
        id: "social-fitness-health-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "eating-out-and-complaints",
        question:
          "Choose the accurate pair of verbs (*ser* vs *estar*) in: *Normalmente el gazpacho andaluz _______ frío, pero hoy mi sopa de pollo también _______ fría.*",
        options: [
          "está … es",
          "es … es",
          "es … está",
          "está … está",
        ],
        answerIndex: 2,
        hints: [
          "Gazpacho is a cold tomato soup **by definition/nature** → *ser* or *estar*?",
          "Chicken soup is supposed to be hot, so being cold today is an unwanted **temporary state** → *ser* or *estar*?",
        ],
        explanation:
          "**Es … está**: *el gazpacho **es** frío* describes an inherent characteristic of gazpacho (**ser**), whereas *mi sopa de pollo **está** fría* complains about its temporary temperature right now (**estar**).",
      },
      {
        id: "social-fitness-health-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "eating-out-and-complaints",
        question:
          "What is the difference between *«El dueño del restaurante es muy rico»* and *«¡El postre está muy rico!»*?",
        options: [
          "Both sentences mean the food is expensive.",
          "The first means the owner is friendly; the second means the dessert is sweet.",
          "The first means the owner is famous; the second means the dessert is rich in fat.",
          "The first means the owner is wealthy; the second means the dessert tastes delicious.",
        ],
        answerIndex: 3,
        hints: [
          "*Rico* is a classic meaning-shifter between *ser* and *estar*.",
          "Think of *ser rico* (money/wealth) vs *¡Qué rico está!* at the dinner table.",
        ],
        explanation:
          "With **ser**, *rico* means **wealthy/rich** (*el dueño es muy rico*); with **estar**, *rico* means **tasty/delicious** (*el postre está muy rico*).",
      },
      {
        id: "social-fitness-health-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "eating-out-and-complaints",
        question:
          "Complete the preterite sentence accurately: *Como soy alérgica a los mariscos, le _______ al camarero qué ingredientes llevaba la salsa y luego _______ la ensalada.*",
        options: [
          "pregunté … pedí",
          "pedí … pregunté",
          "pregunté … pedí por",
          "pedí por … pregunté",
        ],
        answerIndex: 0,
        hints: [
          "Clause 1 asks a **question** (*qué ingredientes llevaba...*) → *pedir* or *preguntar*?",
          "Clause 2 **orders** a dish (*la ensalada*) → *pedir* (with no *por*!).",
        ],
        explanation:
          "**Pregunté … pedí**: you **ask** a question about ingredients with *preguntar* (*le pregunté qué llevaba*), and **order** the salad with *pedir* (*pedí la ensalada*).",
      },
      {
        id: "social-fitness-health-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "eating-out-and-complaints",
        question:
          "Complete the preterite 3rd-person plural gap: *Mis abuelos _______ (pedir) el menú del día porque incluía bebida y postre.*",
        options: ["pedieron", "pidieron", "pediron", "pidió"],
        answerIndex: 1,
        hints: [
          "*Mis abuelos* is 3rd person plural (*ellos*).",
          "*Pedir* is an *-ir* sandal verb in the preterite: *e → i* in the 3rd person singular and plural!",
        ],
        explanation:
          "**Pidieron** shows the mandatory *-ir* preterite sandal change *e → i* in 3rd person (*él pidió, ellos pidieron*, whereas *yo pedí / nosotros pedimos* keep *e*).",
      },
      {
        id: "social-fitness-health-m3-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "eating-out-and-complaints",
        question:
          "In a Paper 3 role-play with a waiter (formal *usted*), which is the most polite and accurate way to complain that a glass is missing?",
        options: [
          "¡Oye, tú! Dame un vaso ahora mismo.",
          "Perdona, ¿me puedes traer un vaso?",
          "Perdone, falta un vaso; ¿me puede traer uno, por favor?",
          "Perdone, pregunta un vaso; ¿puedes traerme uno?",
        ],
        answerIndex: 2,
        hints: [
          "Check formal *usted* consistency across both verbs (*perdone* + *puede*, not informal *perdona / puedes*!).",
          "*Falta un vaso* = a glass is missing.",
        ],
        explanation:
          "**Perdone, falta un vaso; ¿me puede traer uno, por favor?** keeps formal *usted* consistently (*perdone … puede*) and uses *faltar* naturally.",
      },
      {
        id: "social-fitness-health-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "smoking-alcohol-stress",
        question:
          "Complete the sentence with the correct pronoun and verb: *A mis amigos les _______ mucho los deportes acuáticos, pero a mí me _______ más el ciclismo.*",
        options: [
          "gusta … gustan",
          "gustan … gustan",
          "gusta … gusta",
          "gustan … gusta",
        ],
        answerIndex: 3,
        hints: [
          "First gap: look right to *los deportes acuáticos* (plural).",
          "Second gap: look right to *el ciclismo* (singular).",
        ],
        explanation:
          "**Gustan … gusta**: *los deportes acuáticos* is plural (*les **gustan***), whereas *el ciclismo* is singular (*me **gusta***).",
      },
      {
        id: "social-fitness-health-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "eating-out-and-complaints",
        question:
          "Read this online restaurant review: *«Teníamos una reserva a las nueve, pero tardaron casi una hora en servirnos y el arroz estaba tan salado que no pudimos comerlo.»* Why was the reviewer unhappy?",
        options: [
          "Despite booking for 9:00, service took nearly an hour and the rice was too salty to eat.",
          "They had no reservation, so they waited an hour and were served cold rice.",
          "They arrived an hour late for their 9:00 booking and the restaurant had run out of rice.",
          "The waiter forgot their starter and overcharged them on the bill.",
        ],
        answerIndex: 0,
        hints: [
          "*Tardar [tiempo] en + infinitive* means 'to take [time] to do something'.",
          "*Tan salado que...* means 'so salty that...'.",
        ],
        explanation:
          "*Teníamos una reserva a las nueve* = they had a 9 o'clock booking; *tardaron casi una hora en servirnos* = they took nearly an hour to serve us; *el arroz estaba tan salado que no pudimos comerlo* = the rice was so salty we couldn't eat it.",
      },
      {
        id: "social-fitness-health-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "healthy-living-and-diet",
        question:
          "Complete the habit verb (**soler**, present tense): *Entre semana yo _______ acostarme antes de las diez y media para rendir bien en clase.*",
        options: ["solo", "suelo", "solío", "suele"],
        answerIndex: 1,
        hints: [
          "*Soler* ('to usually do') is an *o → ue* stem-changing *-er* verb in the present tense.",
          "Do NOT confuse *suelo* ('I usually...') with the adjective/adverb *solo* ('alone / only')!",
        ],
        explanation:
          "**Suelo** is the *yo* present indicative of *soler (o→ue)*: *suelo acostarme* = 'I usually go to bed'. Writing *solo* is a classic stem-change slip!",
      },
      {
        id: "social-fitness-health-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sports-and-events",
        question:
          "Which preposition completes *«Los Juegos Olímpicos sirven _______ fomentar el espíritu deportivo entre países»*?",
        options: ["por", "en", "para", "con"],
        answerIndex: 2,
        hints: [
          "The phrase expresses **purpose / goal** ('serve in order to promote...').",
          "*Servir para + infinitive* = to be useful for / serve to.",
        ],
        explanation:
          "**Para** expresses purpose or intended function (**servir para + infinitive** = 'to serve to / be used for promoting').",
      },
      {
        id: "social-fitness-health-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "smoking-alcohol-stress",
        question:
          "Complete the past pharmacy narrative accurately: *Ayer no fui al instituto porque tenía fiebre y me _______ muchísimo los oídos.*",
        options: ["dolió", "duele", "dolían", "dolieronse"],
        answerIndex: 2,
        hints: [
          "Check the time frame (*ayer … tenía fiebre* = ongoing background symptom in the past) AND the number of *los oídos* (plural!).",
          "Pick the 3rd-person plural **imperfect** of *doler*.",
        ],
        explanation:
          "**Dolían** matches BOTH the ongoing past symptom time frame (*tenía fiebre* → imperfect) and the plural grammatical subject *los oídos* (*me dolían los oídos*).",
      },
      {
        id: "social-fitness-health-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cinema-music-reading",
        question:
          "Read Clara's podcast quote: *«Prefiero ir a conciertos en directo antes que escuchar música con auriculares, porque el ambiente vale mucho la pena.»* Why does Clara prefer live concerts?",
        options: [
          "Headphones hurt her ears after an hour.",
          "Live concert tickets are cheaper than streaming subscriptions.",
          "Her favourite band never releases recorded songs.",
          "The live atmosphere is really worth it.",
        ],
        answerIndex: 3,
        hints: [
          "*El ambiente* means 'the atmosphere' (NOT 'the environment' = *el medio ambiente*!).",
          "*Valer la pena* means 'to be worth it'.",
        ],
        explanation:
          "**El ambiente vale mucho la pena** means **the atmosphere is really worth it** — watch out for the classic partial false friend *el ambiente* (atmosphere/vibe) vs *el medio ambiente* (natural environment)!",
      },
      {
        id: "social-fitness-health-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "healthy-living-and-diet",
        question:
          "Which Grade-9 conditional sentence has **100% accurate grammar** for an Area E essay?",
        options: [
          "Si tendría más tiempo libre, haría artes marciales y cocinaría platos más sanos.",
          "Si tuviera más tiempo libre, haría artes marciales y cocinaría platos más sanos.",
          "Si tenga más tiempo libre, haría artes marciales y cocinaría platos más sanos.",
          "Si tuviera más tiempo libre, hice artes marciales y cociné platos más sanos.",
        ],
        answerIndex: 1,
        hints: [
          "Recall the golden *si*-clause law: NEVER put conditional (*tendría*) or present subjunctive (*tenga*) right after *si*!",
          "Pair *Si + imperfect subjunctive (-ra)* with *conditional (-ía)*.",
        ],
        explanation:
          "**Si tuviera más tiempo libre, haría… y cocinaría…** follows the classic Grade-9 hypothetical formula (*Si + imperfect subjunctive → conditional*).",
      },
      {
        id: "social-fitness-health-m3-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "smoking-alcohol-stress",
        question:
          "Which Spanish verb specifically means **'to get drunk'**?",
        options: [
          "emborracharse",
          "entrenarse",
          "equivocarse",
          "enamorarse",
        ],
        answerIndex: 0,
        hints: [
          "Connect it to the adjective *borracho/a* (drunk).",
          "*Equivocarse* = to make a mistake; *enamorarse* = to fall in love.",
        ],
        explanation:
          "**Emborracharse** means **to get drunk**; *equivocarse* means 'to make a mistake' and *enamorarse* means 'to fall in love'.",
      },
      {
        id: "social-fitness-health-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "eating-out-and-complaints",
        question:
          "Choose the sentence that combines **acabar de + infinitive** accurately in a restaurant setting:",
        options: [
          "El camarero acaba trayendo el primer plato.",
          "Acabamos de pedir la cuenta porque tenemos prisa.",
          "Acabo pedir el menú del día sin pan.",
          "Ellos acaban de pidieron dos postres caseros.",
        ],
        answerIndex: 1,
        hints: [
          "The idiom meaning 'to have just done something' requires THREE parts: conjugated *acabar* + **de** + **infinitive**.",
          "Check that *de* is present and followed by *pedir* (not *pidieron* or *trayendo*).",
        ],
        explanation:
          "**Acabamos de pedir la cuenta** ('We have just asked for the bill') follows **acabar (present) + de + infinitive** cleanly.",
      },
    ],
  },
];
