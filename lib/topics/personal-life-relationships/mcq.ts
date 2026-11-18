import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "personal-life-relationships-m1",
    title: "MCQ Paper 1 — Family Dynamics, Descriptions & Partnerships",
    questions: [
      {
        id: "personal-life-relationships-m1-q01",
        kind: "mcq",
        question:
          "Choose the grammatically accurate Spanish sentence for **'I am sixteen years old and I am an only child (girl).'**",
        options: [
          "Tengo dieciséis años y soy hija única.",
          "Soy dieciséis años y soy una hija única.",
          "Tengo dieciséis años y estoy hijo único.",
          "Estoy dieciséis años y tengo hija única.",
        ],
        answerIndex: 0,
        difficulty: "warmup",
        guideRef: "family-and-descriptions",
        strategy: "Use tener for age and ser without un/una for identity labels",
        hints: [
          "Spanish expresses age with *tener*, never *ser* or *estar*.",
          "Identity roles like *hija única* take *ser* and match the feminine gender (*-a*).",
        ],
        explanation:
          "**Tengo dieciséis años y soy hija única** is right: Spanish uses *tener* for age and *ser* for family status/identity with feminine agreement (*hija única*). *Soy dieciséis años* and *Estoy dieciséis años* wrongly translate English 'am' literally.",
      },
      {
        id: "personal-life-relationships-m1-q02",
        kind: "mcq",
        question:
          "Complete the sentence accurately: *Me llevo de maravilla con **mi familia** porque _______.*",
        options: [
          "son muy comprensivos",
          "es muy comprensiva y unida",
          "están muy comprensivas",
          "es muy comprensivos",
        ],
        answerIndex: 1,
        difficulty: "core",
        guideRef: "family-and-descriptions",
        strategy: "Match collective singular nouns in gender and number",
        hints: [
          "Check the grammatical number and gender of *mi familia* in Spanish.",
          "Even though a family contains several people, *la familia* is singular and feminine!",
        ],
        explanation:
          "**es muy comprensiva y unida** is correct because *la familia* is a singular feminine noun in Spanish, requiring 3rd-person singular *es* and feminine singular adjectives (*comprensiva*, *unida*). *son muy comprensivos* would only be grammatical after a plural subject like *mis padres*.",
      },
      {
        id: "personal-life-relationships-m1-q03",
        kind: "mcq",
        question:
          "Which verb form correctly completes the gap? *Físicamente, yo _______ mucho a mi madre porque las dos tenemos el pelo rizado.*",
        options: [
          "parezco",
          "me pareces",
          "me parezco",
          "se parece",
        ],
        answerIndex: 2,
        difficulty: "core",
        guideRef: "family-and-descriptions",
        strategy: "Combine reflexive pronoun + -zco yo shift",
        hints: [
          "'To look like / resemble someone' is the reflexive idiom *parecerse a*.",
          "For *yo*, *parecer* inserts *-zc-* before *-o* and needs the *yo* reflexive pronoun.",
        ],
        explanation:
          "**me parezco** combines the mandatory *yo* reflexive pronoun *me* (from *parecerse a*) with the irregular *-zco* first-person stem *parezco*. Bare *parezco* without *me* means 'I seem' rather than 'I resemble'.",
      },
      {
        id: "personal-life-relationships-m1-q04",
        kind: "mcq",
        question:
          "Read Lucía's comment: *«Mi hermano mayor es muy **sensato**, aunque a veces es un poco **egoísta**.»* What is she saying about her older brother?",
        options: [
          "He is very sensitive, although sometimes he is a bit stubborn.",
          "He is very talkative, although sometimes he is a bit jealous.",
          "He is very sensible, although sometimes he is a bit lazy.",
          "He is very sensible, although sometimes he is a bit selfish.",
        ],
        answerIndex: 3,
        difficulty: "warmup",
        guideRef: "family-and-descriptions",
        strategy: "Spot the sensible vs sensato false friend",
        hints: [
          "Beware the Spanish false friend: *sensible* means 'sensitive', whereas *sensato* means something else!",
          "*Egoísta* (ending in *-a* even for masculine *mi hermano*) means 'selfish'.",
        ],
        explanation:
          "**He is very sensible, although sometimes he is a bit selfish** is accurate: *sensato* means level-headed/sensible (whereas *sensible* = sensitive), and *egoísta* means selfish (invariable *-a* for both masculine and feminine).",
      },
      {
        id: "personal-life-relationships-m1-q05",
        kind: "mcq",
        question:
          "Select the correct preposition and verb form: *Siempre _______ mi hermana mayor porque nunca cuenta mis secretos.*",
        options: [
          "confío en",
          "confío a",
          "confio de",
          "me confío con",
        ],
        answerIndex: 0,
        difficulty: "core",
        guideRef: "family-and-descriptions",
        strategy: "Memorise verb + fixed preposition + hiatus accent",
        hints: [
          "Which preposition always follows *confiar* to mean 'to trust (in)'?",
          "Check the written accent on *yo* present of *confiar* (*-iar* hiatus verb like *enviar*).",
        ],
        explanation:
          "**confío en** is right: *confiar* takes an acute accent on the *í* in boot forms (*confío, confías, confía, confían*) and always governs the preposition **en** (never *confío a*).",
      },
      {
        id: "personal-life-relationships-m1-q06",
        kind: "mcq",
        question:
          "What does **los parientes** mean in *«Durante las fiestas navideñas visitamos a todos nuestros parientes»*?",
        options: [
          "parents",
          "relatives",
          "partners",
          "stepbrothers",
        ],
        answerIndex: 1,
        difficulty: "warmup",
        guideRef: "family-and-descriptions",
        strategy: "Distinguish los parientes from los padres",
        hints: [
          "*Los padres* means 'parents' — don't fall for the English lookalike!",
          "Think of extended family members (aunts, uncles, cousins).",
        ],
        explanation:
          "**relatives** is right: *los parientes* is a classic Edexcel Paper 1/2 false friend meaning extended relatives, whereas 'parents' is *los padres*.",
      },
      {
        id: "personal-life-relationships-m1-q07",
        kind: "mcq",
        question:
          "Choose the accurate Spanish translation for **'My cousin wants to marry her partner next year.'**",
        options: [
          "Mi prima quiere casar a su pareja el año que viene.",
          "Mi prima quiere se casar de su pareja el año que viene.",
          "Mi prima quiere casarse con su pareja el año que viene.",
          "Mi prima quiere casarse a su pareja el año que viene.",
        ],
        answerIndex: 2,
        difficulty: "core",
        guideRef: "marriage-and-partnerships",
        strategy: "Use reflexive casarse + con",
        hints: [
          "'To get married to someone' requires reflexive *casarse* plus a fixed preposition.",
          "Attach the matching 3rd-person reflexive pronoun *-se* onto the infinitive *casar*, followed by *con*.",
        ],
        explanation:
          "**Mi prima quiere casarse con su pareja el año que viene** is correct: 'to marry someone' in Spanish is always reflexive **casarse con** (*casar a alguien* means to officiate someone's wedding!).",
      },
      {
        id: "personal-life-relationships-m1-q08",
        kind: "mcq",
        question:
          "Complete the sentence with the grammatically correct phrase: *En mi opinión, es mejor _______ antes de formar una familia.*",
        options: [
          "independizando económicamente",
          "me independizo económicamente",
          "independizar económicamente",
          "independizarse económicamente",
        ],
        answerIndex: 3,
        difficulty: "core",
        guideRef: "marriage-and-partnerships",
        strategy: "Use impersonal es mejor + reflexive infinitive",
        hints: [
          "After an impersonal expression (*es mejor*) with no `que`, Spanish uses an infinitive.",
          "'To become independent' is reflexive *independizarse* (unlike transitive *independizar*).",
        ],
        explanation:
          "**independizarse económicamente** is correct: impersonal *es mejor* (without *que*) takes the infinitive, and 'to become independent / move out' requires reflexive **independizarse** rather than bare *independizar* or the gerund *independizando*.",
      },
      {
        id: "personal-life-relationships-m1-q09",
        kind: "mcq",
        question:
          "Which word accurately completes: *La ceremonia fue preciosa: hubo más de cien invitados en _______ de mi tía.*",
        options: [
          "la boda",
          "el matrimonio",
          "el estado civil",
          "la luna de miel",
        ],
        answerIndex: 0,
        difficulty: "warmup",
        guideRef: "marriage-and-partnerships",
        strategy: "Distinguish wedding ceremony (la boda) from marriage (el matrimonio)",
        hints: [
          "Over 100 guests attended a specific one-day ceremony.",
          "*El matrimonio* is the legal/social institution; which feminine noun means the wedding ceremony itself?",
        ],
        explanation:
          "**la boda** means the wedding ceremony/reception that guests attend, whereas *el matrimonio* refers to the state or institution of marriage and *la luna de miel* is the honeymoon.",
      },
      {
        id: "personal-life-relationships-m1-q10",
        kind: "mcq",
        question:
          "Complete the sentence with the correct form after **antes de**: *Prefiero ahorrar suficiente dinero antes de _______.*",
        options: [
          "casándome",
          "casarme",
          "me caso",
          "casarse",
        ],
        answerIndex: 1,
        difficulty: "core",
        guideRef: "marriage-and-partnerships",
        strategy: "Preposition + infinitive with person-matched reflexive pronoun",
        hints: [
          "After any Spanish preposition (*antes de*, *después de*, *sin*), you must use an infinitive, never a gerund (*-ando*).",
          "Who prefers to save money? *Prefiero* = *yo*, so match the attached reflexive pronoun to *yo*!",
        ],
        explanation:
          "**casarme** is right: *antes de* must be followed by an infinitive (*casar-*), and because the subject of *prefiero* is *yo*, the reflexive pronoun adjusts from *-se* to **-me** (*casarme*).",
      },
      {
        id: "personal-life-relationships-m1-q11",
        kind: "mcq",
        question:
          "Read the survey excerpt: *«Hoy en día, cada vez más jóvenes españoles eligen **convivir** con su novio o novia porque los alquileres son carísimos y consideran que un papel legal no cambia el amor.»* According to the text, what are more young Spaniards choosing to do?",
        options: [
          "Get divorced early because rent is too expensive.",
          "Have a huge traditional church wedding.",
          "Live together with their partner without getting married.",
          "Stay living with their grandparents until age forty.",
        ],
        answerIndex: 2,
        difficulty: "core",
        guideRef: "marriage-and-partnerships",
        strategy: "Decode convivir + context clue un papel legal",
        hints: [
          "*Con-* (together) + *vivir* (to live) gives the core meaning of *convivir*.",
          "*Un papel legal no cambia el amor* confirms they are skipping formal marriage.",
        ],
        explanation:
          "**Live together with their partner without getting married** matches *convivir con su novio o novia* and their belief that *un papel legal* (a marriage certificate) does not change love.",
      },
      {
        id: "personal-life-relationships-m1-q12",
        kind: "mcq",
        question:
          "Choose the sentence with **100% accurate adjective agreement**:",
        options: [
          "Mis hermanas menores son muy habladores y cariñosas.",
          "Mi padre es una persona muy comprensivo y trabajadora.",
          "Mi hermano gemelo es egoísto pero muy leal.",
          "Mis abuelas son mujeres muy habladoras y generosas.",
        ],
        answerIndex: 3,
        difficulty: "core",
        guideRef: "family-and-descriptions",
        strategy: "Check -or → -ora/-oras, la persona agreement, and invariable -ista",
        hints: [
          "Adjectives ending in *-dor* (*hablador*, *trabajador*) add *-a* / *-as* in the feminine!",
          "Remember *egoísta* never becomes *-isto*, and after *una persona* adjectives agree with feminine *persona* (*comprensiva*).",
        ],
        explanation:
          "**Mis abuelas son mujeres muy habladoras y generosas** is completely accurate. *Habladores* fails feminine *hermanas*; *comprensivo* fails feminine noun *una persona*; and *egoísto* does not exist (*egoísta* is invariable for gender).",
      },
      {
        id: "personal-life-relationships-m1-q13",
        kind: "mcq",
        question:
          "Which phrase correctly completes: *Mi hermana y yo tenemos caracteres opuestos, así que a veces _______ por tonterías, pero enseguida hacemos las paces.*",
        options: [
          "nos peleamos",
          "se pelean",
          "me peleo",
          "nos pelearon",
        ],
        answerIndex: 0,
        difficulty: "warmup",
        guideRef: "family-and-descriptions",
        strategy: "Match reciprocal nosotros in the habitual present",
        hints: [
          "*Mi hermana y yo* = *nosotros/nosotras*.",
          "*A veces* + *hacemos las paces* signals habitual present tense.",
        ],
        explanation:
          "**nos peleamos** matches the compound subject *mi hermana y yo* (*nosotros*) in the habitual present tense ('we quarrel with each other').",
      },
      {
        id: "personal-life-relationships-m1-q14",
        kind: "mcq",
        question:
          "What is **una familia monoparental**?",
        options: [
          "A family where grandparents, parents and cousins share one house.",
          "A single-parent family where one parent raises the children.",
          "A family with only one child and no siblings.",
          "A blended family with stepbrothers and stepsisters.",
        ],
        answerIndex: 1,
        difficulty: "warmup",
        guideRef: "marriage-and-partnerships",
        strategy: "Break down mono- (one) + parental",
        hints: [
          "Prefix *mono-* means 'one / single'.",
          "Don't confuse *monoparental* (one parent) with *hijo único* (only child)!",
        ],
        explanation:
          "**A single-parent family where one parent raises the children** is the exact meaning of *una familia monoparental* (an only child is *hijo/a único/a*, and a blended stepfamily is *una familia reconstituida*).",
      },
      {
        id: "personal-life-relationships-m1-q15",
        kind: "mcq",
        question:
          "Select the correct Spanish pronoun contraction: *Mi prima mayor es súper leal; sé que siempre puedo contar _______.*",
        options: [
          "con ella y ella cuenta con mí",
          "con ella y ella cuenta conmigo",
          "en ella y ella cuenta con yo",
          "a ella y ella cuenta conmigo",
        ],
        answerIndex: 1,
        difficulty: "challenge",
        guideRef: "family-and-descriptions",
        strategy: "Apply contar con + con mí → conmigo",
        hints: [
          "'To count on someone' is *contar con alguien*.",
          "In Spanish, *con + mí* NEVER stays two words — it fuses into a special single form!",
          "Check *conmigo* ('with me') vs invalid *con mí* or *con yo*.",
        ],
        explanation:
          "**con ella y ella cuenta conmigo** is right: *contar con* takes regular *con ella* in the 3rd person, while *con + mí* obligatorily contracts to **conmigo** (just as *con + ti* becomes *contigo*).",
      },
    ],
  },
  {
    id: "personal-life-relationships-m2",
    title: "MCQ Paper 2 — Friendship, Peer Pressure & Childhood Imperfect",
    questions: [
      {
        id: "personal-life-relationships-m2-q01",
        kind: "mcq",
        question:
          "Complete this Grade-9 sentence about an ideal friend: *Para mí, es fundamental encontrar un amigo sincero que _______ guardar un secreto.*",
        options: [
          "sabe",
          "sabría",
          "sepa",
          "supo",
        ],
        answerIndex: 2,
        difficulty: "challenge",
        guideRef: "friends-and-peer-pressure",
        strategy: "Use present subjunctive after an indefinite/hypothetical antecedent",
        hints: [
          "*Encontrar un amigo que…* describes a hypothetical, desired friend rather than one known individual.",
          "Unknown/ideal relative clauses trigger the **present subjunctive**.",
          "*Saber* is one of the 6 DISHES irregulars in the present subjunctive!",
        ],
        explanation:
          "**sepa** is the present subjunctive of *saber*, required because *encontrar un amigo sincero que…* refers to a hypothetical ideal friend rather than a specific person you already have (*tengo un amigo que sabe…*).",
      },
      {
        id: "personal-life-relationships-m2-q02",
        kind: "mcq",
        question:
          "Contrast with Q01 — choose the right verb when the friend IS real and known: *Tengo una mejor amiga que se llama Sofía y que siempre me _______ la verdad.*",
        options: [
          "diga",
          "digas",
          "decir",
          "dice",
        ],
        answerIndex: 3,
        difficulty: "core",
        guideRef: "friends-and-peer-pressure",
        strategy: "Use present indicative for a specific known antecedent",
        hints: [
          "Sofía is a named, real person (*Tengo una mejor amiga que se llama Sofía*).",
          "Known facts about an existing person take the **present indicative** of *decir* (*e → i*).",
        ],
        explanation:
          "**dice** (present indicative of *decir*) is correct because Sofía is a specific, existing friend. The subjunctive *diga* would only be used for an unknown or sought-after friend (*busco una amiga que me diga la verdad*).",
      },
      {
        id: "personal-life-relationships-m2-q03",
        kind: "mcq",
        question:
          "Which phrase accurately translates **'peer pressure influences young people'**?",
        options: [
          "La presión del grupo influye en los jóvenes.",
          "La presión del grupo influye a los jóvenes.",
          "El grupo de presión influya de los jóvenes.",
          "La presión de amigos influyen sobre el joven.",
        ],
        answerIndex: 0,
        difficulty: "core",
        guideRef: "friends-and-peer-pressure",
        strategy: "Pair influir (-uir → -uye) with preposition en",
        hints: [
          "Singular subject *la presión del grupo* requires 3rd-person singular verb *influye* (verbs in *-uir* insert *y*).",
          "'To influence someone' in Spanish is *influir **en** alguien*.",
        ],
        explanation:
          "**La presión del grupo influye en los jóvenes** uses the standard IGCSE collocation *la presión del grupo*, the *-uir* spelling change *influye*, and the fixed preposition **en**.",
      },
      {
        id: "personal-life-relationships-m2-q04",
        kind: "mcq",
        question:
          "Choose the natural Spanish way to say **'My grandfather always gives me very good advice.'**",
        options: [
          "Mi abuelo siempre me da muy buen consejo.",
          "Mi abuelo siempre me da muy buenos consejos.",
          "Mi abuelo siempre me pide muy buenas consejas.",
          "Mi abuelo siempre me hace muy buen aviso.",
        ],
        answerIndex: 1,
        difficulty: "core",
        guideRef: "friends-and-peer-pressure",
        strategy: "Use countable plural buenos consejos for general advice",
        hints: [
          "English 'advice' is uncountable singular, but Spanish treats pieces of advice as a countable masculine plural noun!",
          "Watch false friend *aviso* (= warning/notice, not advice).",
        ],
        explanation:
          "**Mi abuelo siempre me da muy buenos consejos** is idiomatic Spanish: *dar buenos consejos* uses masculine plural *consejos* where English uses uncountable singular 'good advice'.",
      },
      {
        id: "personal-life-relationships-m2-q05",
        kind: "mcq",
        question:
          "Complete the WEIRDO advice clause: *Cuando tengo problemas en el instituto, mi madre me aconseja que _______ con mi tutor.*",
        options: [
          "hablo",
          "hablaré",
          "hable",
          "hablando",
        ],
        answerIndex: 2,
        difficulty: "core",
        guideRef: "friends-and-peer-pressure",
        strategy: "Trigger present subjunctive after aconsejar que",
        hints: [
          "*Me aconseja que…* is a WEIRDO recommendation verb with a change of subject (*mi madre → yo*).",
          "Flip regular *-ar* verb *hablar* to its *yo* present subjunctive ending!",
        ],
        explanation:
          "**hable** is the *yo* present subjunctive of *hablar*, triggered by the recommendation structure *me aconseja que…* ('she advises me to speak'). Indicative *hablo* or future *hablaré* is ungrammatical after *aconsejar que*.",
      },
      {
        id: "personal-life-relationships-m2-q06",
        kind: "mcq",
        question:
          "Read Diego's message: *«Cambié de colegio en septiembre y durante el primer mes **me sentía aislado** porque algunos compañeros **se burlaban de** mi acento.»* How did Diego feel during the first month?",
        options: [
          "Excited because his classmates admired his accent.",
          "Proud because he fitted in straight away.",
          "Relieved because nobody noticed his accent.",
          "Isolated because some classmates made fun of his accent.",
        ],
        answerIndex: 3,
        difficulty: "warmup",
        guideRef: "friends-and-peer-pressure",
        strategy: "Link sentirse aislado + burlarse de",
        hints: [
          "*Sentirse aislado* = to feel isolated/left out.",
          "*Burlarse de* = to mock / make fun of.",
        ],
        explanation:
          "**Isolated because some classmates made fun of his accent** translates *me sentía aislado* and *se burlaban de mi acento* accurately.",
      },
      {
        id: "personal-life-relationships-m2-q07",
        kind: "mcq",
        question:
          "Which three verbs are the **ONLY irregular verbs** in the entire Spanish Imperfect tense?",
        options: [
          "ser (era), ir (iba), ver (veía)",
          "ser (fue), ir (iba), tener (tenía)",
          "hacer (hacía), ver (veía), dar (daba)",
          "estar (estaba), ir (iba), saber (sabía)",
        ],
        answerIndex: 0,
        difficulty: "warmup",
        guideRef: "childhood-memories-imperfect",
        strategy: "Recall the S-I-V Imperfect trio",
        hints: [
          "Think of the mnemonic **S · I · V**.",
          "*Hacía*, *tenía*, *daba*, *estaba*, and *sabía* all follow standard *-aba* / *-ía* rules!",
        ],
        explanation:
          "**ser (era), ir (iba), ver (veía)** are the only three irregular verbs in the Spanish Imperfect. Notice *ver* keeps its stem *e* (*veía*), while *hacer → hacía* and *tener → tenía* are completely regular *-er* verbs!",
      },
      {
        id: "personal-life-relationships-m2-q08",
        kind: "mcq",
        question:
          "Select the exact **nosotros** Imperfect forms with correct accents: *Cuando _______ niños, _______ al parque cada tarde.*",
        options: [
          "eramos / ibamos",
          "éramos / íbamos",
          "fuimos / íbamos",
          "éramos / fuimos",
        ],
        answerIndex: 1,
        difficulty: "core",
        guideRef: "childhood-memories-imperfect",
        strategy: "Check esdrújula accents on nosotros imperfect forms",
        hints: [
          "*Cuando… niños* + *cada tarde* describes an ongoing childhood stage and repeated habit → Imperfect in both gaps!",
          "Both *nosotros* forms are stressed on the third-from-last syllable and require written accents.",
        ],
        explanation:
          "**éramos / íbamos** uses the Imperfect for both ongoing childhood age (*cuando éramos niños*) and habitual action (*cada tarde*), including the mandatory written accents on *é* and *í*.",
      },
      {
        id: "personal-life-relationships-m2-q09",
        kind: "mcq",
        question:
          "Which sentence uses **soler** accurately to describe a childhood habit?",
        options: [
          "De pequeña, solí jugar al escondite con mis vecinos.",
          "De pequeña, suelo jugar al escondite ayer por la tarde.",
          "De pequeña, solía jugar al escondite con mis vecinos.",
          "De pequeña, solía jugaba al escondite con mis vecinos.",
        ],
        answerIndex: 2,
        difficulty: "core",
        guideRef: "childhood-memories-imperfect",
        strategy: "Use imperfect solía + infinitive (never preterite or two conjugated verbs)",
        hints: [
          "'Used to do' in Spanish is the **imperfect** of *soler* (*solía*) followed directly by an **infinitive**.",
          "*Soler* is never used in the preterite (*solí*), and you cannot put two conjugated verbs (*solía jugaba*) side by side!",
        ],
        explanation:
          "**De pequeña, solía jugar al escondite con mis vecinos** pairs *solía* (imperfect of *soler*) with the infinitive *jugar*. *Solí* is invalid preterite, *suelo* is present tense, and *solía jugaba* wrongly conjugates both verbs.",
      },
      {
        id: "personal-life-relationships-m2-q10",
        kind: "mcq",
        question:
          "Choose the best Imperfect vs Preterite combination: *Cuando _______ ocho años, mi familia y yo _______ a vivir a Valencia.*",
        options: [
          "tuve / nos mudábamos",
          "tenía / nos mudábamos",
          "tuve / nos mudamos",
          "tenía / nos mudamos",
        ],
        answerIndex: 3,
        difficulty: "challenge",
        guideRef: "childhood-memories-imperfect",
        strategy: "Imperfect for background age + Preterite for single life move",
        hints: [
          "Background age in the past ('when I was eight') always takes the **Imperfect** of *tener*.",
          "Moving house to Valencia is a single completed change of residence → **Preterite**!",
        ],
        explanation:
          "**tenía / nos mudamos** sets the background age in the Imperfect (*cuando tenía ocho años*) and narrates the single completed move in the Preterite (*nos mudamos*).",
      },
      {
        id: "personal-life-relationships-m2-q11",
        kind: "mcq",
        question:
          "Complete the generation-gap contrast: *En aquella época mis abuelos escribían cartas a mano, _______ hoy en día enviamos mensajes instantáneos.*",
        options: [
          "mientras que",
          "por lo tanto",
          "ya que",
          "para que",
        ],
        answerIndex: 0,
        difficulty: "warmup",
        guideRef: "childhood-memories-imperfect",
        strategy: "Select contrast connectives over causal or purpose ones",
        hints: [
          "The sentence contrasts how grandparents communicated then vs how we communicate today.",
          "Which connector means 'whereas / while'?",
        ],
        explanation:
          "**mientras que** ('whereas') cleanly contrasts past habits (*escribían cartas*) with present habits (*enviamos mensajes*). *Por lo tanto* = therefore, *ya que* = since/because, and *para que* = so that (+ subjunctive).",
      },
      {
        id: "personal-life-relationships-m2-q12",
        kind: "mcq",
        question:
          "Check the spelling of **ver** in the Imperfect: *De niños, mis primos y yo siempre _______ dibujos animados los sábados por la mañana.*",
        options: [
          "víamos",
          "veíamos",
          "vimos",
          "veamos",
        ],
        answerIndex: 1,
        difficulty: "core",
        guideRef: "childhood-memories-imperfect",
        strategy: "Keep the stem 'e' in ver imperfect (veía, veíamos)",
        hints: [
          "*Siempre… los sábados por la mañana* signals a repeated childhood habit (Imperfect).",
          "*Ver* is irregular in the Imperfect precisely because it retains the **e** before *-íamos*!",
        ],
        explanation:
          "**veíamos** is the *nosotros* imperfect of *ver*. Dropping the *e* (*víamos*) is a classic spelling trap, *vimos* is preterite, and *veamos* is present subjunctive.",
      },
      {
        id: "personal-life-relationships-m2-q13",
        kind: "mcq",
        question:
          "Which verb form completes this negative relative clause? *En mi clase no hay nadie que _______ de los alumnos nuevos.*",
        options: [
          "se burla",
          "burlarse",
          "se burle",
          "se burló",
        ],
        answerIndex: 2,
        difficulty: "challenge",
        guideRef: "friends-and-peer-pressure",
        strategy: "Use present subjunctive after non-existent nadie que",
        hints: [
          "Look at the antecedent: *no hay nadie que…* ('there is nobody who…').",
          "Denying the existence of such a person ALWAYS triggers the **present subjunctive**!",
          "Flip regular *-ar* reflexive *burlarse* from indicative *se burla* to subjunctive.",
        ],
        explanation:
          "**se burle** is the 3rd-person singular present subjunctive of *burlarse*, mandatory after negative existential clauses like *no hay nadie que…* or *no conozco a nadie que…*.",
      },
      {
        id: "personal-life-relationships-m2-q14",
        kind: "mcq",
        question:
          "What does **la brecha generacional** refer to in Area C?",
        options: [
          "A traditional wedding anniversary party.",
          "A school exchange programme abroad.",
          "A childhood game played in town squares.",
          "The generation gap in values and habits between young and older people.",
        ],
        answerIndex: 3,
        difficulty: "warmup",
        guideRef: "childhood-memories-imperfect",
        strategy: "Connect brecha (gap/divide) + generacional",
        hints: [
          "*Una brecha* means a gap or divide (just like *la brecha digital* in Area D).",
          "*Generacional* relates to different generations (*jóvenes* vs *abuelos/padres*).",
        ],
        explanation:
          "**The generation gap in values and habits between young and older people** is the exact meaning of *la brecha generacional*.",
      },
      {
        id: "personal-life-relationships-m2-q15",
        kind: "mcq",
        question:
          "Complete the sentence accurately: *Un verdadero amigo nunca te critica a tus espaldas; al contrario, te ayuda _______ tus problemas.*",
        options: [
          "a superar",
          "superando",
          "de superar",
          "en superas",
        ],
        answerIndex: 0,
        difficulty: "core",
        guideRef: "friends-and-peer-pressure",
        strategy: "Remember ayudar + a + infinitive",
        hints: [
          "Which preposition connects the verb *ayudar* (like *empezar* and *aprender*) to a following infinitive?",
          "'Helps you to overcome' = *te ayuda ___ superar*.",
        ],
        explanation:
          "**a superar** is correct because **ayudar** always requires the preposition **a** before an infinitive (*ayudar a hacer algo*).",
      },
    ],
  },
  {
    id: "personal-life-relationships-m3",
    title: "MCQ Paper 3 — Role Models, Reading Inference & Grade-9 Structures",
    questions: [
      {
        id: "personal-life-relationships-m3-q01",
        kind: "mcq",
        question:
          "Choose the sentence that applies the Spanish **personal *a*** with 100% accuracy:",
        options: [
          "Admiro mucho mi tía porque superó a muchos obstáculos.",
          "Admiro mucho a mi tía porque superó muchos obstáculos.",
          "Admiro mucho a su valentía porque ayudó los enfermos.",
          "Tengo a dos hermanos mayores y respeto sus opiniones.",
        ],
        answerIndex: 1,
        difficulty: "core",
        guideRef: "role-models",
        strategy: "Insert personal 'a' before specific people, never before inanimate nouns",
        hints: [
          "*Mi tía* is a specific person (direct object of *admiro*), whereas *muchos obstáculos* are inanimate things!",
          "Standard possession with *tener* (*tengo dos hermanos*) omits personal *a*.",
        ],
        explanation:
          "**Admiro mucho a mi tía porque superó muchos obstáculos** puts the personal *a* before the person (*a mi tía*) and omits it before things (*muchos obstáculos*). The other options omit *a* before people (*mi tía*, *los enfermos*) or wrongly add it before things/numbers (*a muchos obstáculos*, *a su valentía*, *tengo a dos hermanos*).",
      },
      {
        id: "personal-life-relationships-m3-q02",
        kind: "mcq",
        question:
          "Fill in the gap accurately: *Desde joven, mi prima sueña _______ trabajar como cirujana sin fronteras.*",
        options: [
          "de",
          "en",
          "con",
          "sobre",
        ],
        answerIndex: 2,
        difficulty: "warmup",
        guideRef: "role-models",
        strategy: "Lock in soñar con (never de)",
        hints: [
          "English says 'dream of / about', which tempts students to write *de* — resist it!",
          "Spanish pairs *soñar* with the same preposition used in *casarse ___*.",
        ],
        explanation:
          "**con** is right: 'to dream of / about' in Spanish is always **soñar con** (+ noun or infinitive), never *soñar de*.",
      },
      {
        id: "personal-life-relationships-m3-q03",
        kind: "mcq",
        question:
          "Select the accurate noun phrase for **'she is a very good role model / good example'**:",
        options: [
          "es una modelo seguir muy bueno",
          "es un bueno ejemplo para mí",
          "es un ejemplo buen para todos",
          "es un buen ejemplo y un gran modelo a seguir",
        ],
        answerIndex: 3,
        difficulty: "core",
        guideRef: "role-models",
        strategy: "Apocopate bueno → buen and grande → gran before singular nouns",
        hints: [
          "Before a masculine singular noun (*ejemplo*), *bueno* drops its final *-o*!",
          "Similarly, *grande* shortens to *gran* ('great') before any singular noun (*un gran modelo a seguir*).",
        ],
        explanation:
          "**es un buen ejemplo y un gran modelo a seguir** applies Spanish apocopation (*bueno → buen* before masculine singular *ejemplo*; *grande → gran* before singular *modelo*) and includes the preposition *a* in *un modelo a seguir*.",
      },
      {
        id: "personal-life-relationships-m3-q04",
        kind: "mcq",
        question:
          "Complete the role-model sentence with the **preterite** of **conseguir** (*ella*): *A pesar de su origen humilde, _______ una beca universitaria y cambió su comunidad.*",
        options: [
          "consiguió",
          "conseguió",
          "consigo",
          "conseguía",
        ],
        answerIndex: 0,
        difficulty: "challenge",
        guideRef: "role-models",
        strategy: "Apply -ir sandal shift e → i + preterite accent -ió",
        hints: [
          "*Conseguir* is a stem-changing *-ir* verb (*e → i*), just like *pedir* and *seguir*.",
          "In the preterite, *-ir* stem-changers shift **e → i** in 3rd-person singular and plural (*él/ella*, *ellos/ellas*) and keep *gu* before *i*!",
        ],
        explanation:
          "**consiguió** shifts stem vowel *e → i* in the 3rd-person singular preterite of *-ir* verb *conseguir* and carries the final accent *-ió*. *Conseguió* forgets the sandal vowel change, *consigo* is *yo* present, and *conseguía* is imperfect.",
      },
      {
        id: "personal-life-relationships-m3-q05",
        kind: "mcq",
        question:
          "Choose the correct contraction and preposition: *Los voluntarios apoyan _______ director de la fundación porque lucha _______ los derechos humanos.*",
        options: [
          "a el / para",
          "al / por",
          "el / por",
          "al / con",
        ],
        answerIndex: 1,
        difficulty: "core",
        guideRef: "role-models",
        strategy: "Contract personal a + el → al and pair luchar por + cause",
        hints: [
          "*El director* is a specific person receiving the action of *apoyan* → personal *a* + *el* contracts!",
          "'To fight / campaign for a cause' uses *luchar ___*.",
        ],
        explanation:
          "**al / por** contracts mandatory personal *a + el* into **al** (*apoyan al director*) and uses **luchar por** for campaigning/fighting on behalf of a cause (*por los derechos humanos*).",
      },
      {
        id: "personal-life-relationships-m3-q06",
        kind: "mcq",
        question:
          "Read this Paper 2 passage about Vanishree's grandmother:\n*«La persona a quien más admiro es mi abuela materna. Cuando era joven, tuvo que dejar los estudios para cuidar a sus cinco hermanos menores. Sin embargo, a los cuarenta años volvió a estudiar por las noches y se licenció en enfermería.»*\nWhich statement is **TRUE** according to the text?",
        options: [
          "She qualified as a nurse when she was a teenager.",
          "She was an only child with plenty of free time to study.",
          "She left school young to care for her siblings, then earned a nursing degree at forty.",
          "She worked as a night-shift doctor until she retired at forty.",
        ],
        answerIndex: 2,
        difficulty: "core",
        guideRef: "role-models",
        strategy: "Track time markers: cuando era joven vs a los cuarenta años",
        hints: [
          "Check why she had to leave school (*tuvo que dejar los estudios*) when young.",
          "Then check what *a los cuarenta años volvió a estudiar… y se licenció en enfermería* means.",
        ],
        explanation:
          "**She left school young to care for her siblings, then earned a nursing degree at forty** matches *tuvo que dejar los estudios para cuidar a sus cinco hermanos menores* followed by *a los cuarenta años… se licenció en enfermería*.",
      },
      {
        id: "personal-life-relationships-m3-q07",
        kind: "mcq",
        question:
          "Look carefully at the accent in: *«Mi deportista favorito **superó** una enfermedad grave en 2023.»* What would happen to the meaning if you forgot the accent and wrote **supero**?",
        options: [
          "It would become the future tense ('he will overcome').",
          "It would become the present subjunctive ('that he overcome').",
          "It would become the plural preterite ('they overcame').",
          "It would become the yo present tense ('I overcome').",
        ],
        answerIndex: 3,
        difficulty: "core",
        guideRef: "role-models",
        strategy: "Distinguish él preterite -ó from yo present -o",
        hints: [
          "Compare *hablo* vs *habló* or *trabajo* vs *trabajó*.",
          "Without the acute accent, *-o* is the standard 1st-person singular ending in the present indicative!",
        ],
        explanation:
          "**It would become the yo present tense ('I overcome')** — in regular *-ar* verbs, only the written accent distinguishes *yo supero* (present) from *él/ella superó* (preterite), which is why Edexcel penalises missing preterite accents heavily.",
      },
      {
        id: "personal-life-relationships-m3-q08",
        kind: "mcq",
        question:
          "Complete the relative pronoun after a preposition for a person: *La científica _______ más admiro ganó el Premio Nobel por sus investigaciones.*",
        options: [
          "a quien",
          "que la",
          "cuyo",
          "donde",
        ],
        answerIndex: 0,
        difficulty: "challenge",
        guideRef: "role-models",
        strategy: "Use personal a + quien for 'whom' in relative clauses",
        hints: [
          "*Admirar* requires the personal *a* before a person (*admiro a la científica*).",
          "When turning that person into a relative clause ('the scientist **whom** I admire most'), keep **a** + the person-relative pronoun!",
        ],
        explanation:
          "**a quien** ('whom', also *a la que*) preserves the personal *a* required by *admirar* before the human relative pronoun *quien*. *Cuyo* means 'whose' and *donde* means 'where'.",
      },
      {
        id: "personal-life-relationships-m3-q09",
        kind: "mcq",
        question:
          "Read Marcos's opinion:\n*«Aunque mis padres llevan veinticinco años felizmente casados, yo no tengo prisa por pasar por el altar. Primero quiero viajar por Sudamérica y ahorrar para mi propio piso.»*\nWhat is Marcos's attitude towards marriage?",
        options: [
          "He refuses ever to get married because his parents are divorced.",
          "He respects his parents' happy marriage, but wants to travel and buy a flat before marrying.",
          "He plans to get married immediately so he can travel with his wife.",
          "He wants his parents to pay for his wedding in South America.",
        ],
        answerIndex: 1,
        difficulty: "core",
        guideRef: "marriage-and-partnerships",
        strategy: "Unpack idiom no tener prisa por pasar por el altar",
        hints: [
          "*Llevan veinticinco años felizmente casados* = his parents have been happily married for 25 years.",
          "*No tengo prisa por pasar por el altar* = I'm in no rush to walk down the aisle; *primero quiero viajar… y ahorrar* gives his priority.",
        ],
        explanation:
          "**He respects his parents' happy marriage, but wants to travel and buy a flat before marrying** captures both the *aunque* concession about his parents and *no tengo prisa por pasar por el altar; primero quiero viajar… y ahorrar*.",
      },
      {
        id: "personal-life-relationships-m3-q10",
        kind: "mcq",
        question:
          "Which verb form completes this Grade-9 *si*-clause on family harmony? *Si las familias _______ más durante la cena sin mirar el móvil, habría menos malentendidos.*",
        options: [
          "hablarán",
          "hablan",
          "hablaran",
          "hablarían",
        ],
        answerIndex: 2,
        difficulty: "challenge",
        guideRef: "family-and-descriptions",
        strategy: "Pair conditional habría with si + imperfect subjunctive (-ran)",
        hints: [
          "Look at the main clause: *habría menos malentendidos* uses the **conditional** ('there would be').",
          "A hypothetical conditional main clause requires **si + imperfect subjunctive** (never future *hablarán* with an accent or conditional *hablarían* after *si*!).",
        ],
        explanation:
          "**hablaran** (imperfect subjunctive, no accent — distinct from future *hablarán*!) pairs with conditional *habría* in a Type-2 hypothetical *si* clause ('If families talked more…, there would be fewer misunderstandings').",
      },
      {
        id: "personal-life-relationships-m3-q11",
        kind: "mcq",
        question:
          "Choose the correct form of **caer bien** in: *Los nuevos amigos de mi hermana me _______ muy bien porque tienen mucho sentido del humor.*",
        options: [
          "cae",
          "caigo",
          "caemos",
          "caen",
        ],
        answerIndex: 3,
        difficulty: "core",
        guideRef: "friends-and-peer-pressure",
        strategy: "Conjugate caer bien like gustar — agree with the people making the impression",
        hints: [
          "*Caer bien* works grammatically just like *gustar*: the indirect object *me* shows who likes them, while the verb agrees with the subject!",
          "Who makes a good impression on me? *Los nuevos amigos* (3rd-person plural *ellos*).",
        ],
        explanation:
          "**caen** agrees with the plural grammatical subject *los nuevos amigos* ('My sister's new friends make a great impression on me / I really like them'), just like *me gustan*.",
      },
      {
        id: "personal-life-relationships-m3-q12",
        kind: "mcq",
        question:
          "Which time phrase signals a **single completed Preterite** action rather than an Imperfect childhood habit?",
        options: [
          "el verano en que cumplí doce años",
          "todos los domingos de mi infancia",
          "cuando era pequeño",
          "siempre que íbamos al pueblo",
        ],
        answerIndex: 0,
        difficulty: "core",
        guideRef: "childhood-memories-imperfect",
        strategy: "Spot bounded one-off past milestones vs habitual markers",
        hints: [
          "Three options describe repeated routines or ongoing childhood background.",
          "Turning twelve (*cumplí doce años*) happened once in one specific summer!",
        ],
        explanation:
          "**el verano en que cumplí doce años** ('the summer I turned twelve') pins down one specific, completed milestone (*cumplí*), whereas *todos los domingos*, *cuando era pequeño*, and *siempre que íbamos* trigger the Imperfect.",
      },
      {
        id: "personal-life-relationships-m3-q13",
        kind: "mcq",
        question:
          "Complete the sentence with the correct **preterite** form of **independizarse** (*yo*): *Después de encontrar mi primer empleo fijo, _______ a los veintitrés años.*",
        options: [
          "me independizé",
          "me independicé",
          "independicé",
          "me independizaba",
        ],
        answerIndex: 1,
        difficulty: "challenge",
        guideRef: "marriage-and-partnerships",
        strategy: "Apply -zar → -cé spelling shift in yo preterite + reflexive me",
        hints: [
          "Moving out at age twenty-three is a single completed milestone → *yo* preterite of reflexive *independizarse*.",
          "Verbs ending in **-zar** (*empezar, organizar, independizarse*) change **z → c** before *-é* in the *yo* preterite!",
        ],
        explanation:
          "**me independicé** combines reflexive pronoun *me* with the mandatory *-zar → -cé* spelling shift before *é* (Spanish avoids writing *ze*). *Me independizé* has a spelling error and *independicé* drops the reflexive pronoun.",
      },
      {
        id: "personal-life-relationships-m3-q14",
        kind: "mcq",
        question:
          "Read Elena's reflection:\n*«Antes me importaba demasiado caerles bien a todos en las redes sociales; sin embargo, aprendí que más vale tener tres amigos leales en la vida real que mil seguidores desconocidos.»*\nWhat lesson did Elena learn?",
        options: [
          "Having a thousand followers online guarantees career success.",
          "Real-life friends are less trustworthy than online followers.",
          "Having three loyal friends in real life is worth far more than a thousand unknown followers.",
          "She needs to delete her three friends on social media.",
        ],
        answerIndex: 2,
        difficulty: "warmup",
        guideRef: "friends-and-peer-pressure",
        strategy: "Decode idiom más vale X que Y ('better X than Y')",
        hints: [
          "*Más vale… que…* means 'it is worth more / it is better to… than…'.",
          "Compare *tres amigos leales en la vida real* with *mil seguidores desconocidos*.",
        ],
        explanation:
          "**Having three loyal friends in real life is worth far more than a thousand unknown followers** translates *más vale tener tres amigos leales en la vida real que mil seguidores desconocidos*.",
      },
      {
        id: "personal-life-relationships-m3-q15",
        kind: "mcq",
        question:
          "Which sentence seamlessly combines **three distinct time frames** (Past + Present + Future/Conditional) to hit Band 5 in Edexcel Paper 2 Q7?",
        options: [
          "Admiro a mi madre porque es médica, trabaja mucho y ayuda a los pacientes cada día.",
          "Cuando era niña jugaba con mi abuelo, íbamos al parque y veíamos películas antiguas.",
          "En el futuro me casaré, tendré dos hijos y viviré cerca de mis padres.",
          "Admiro a mi abuelo porque fundó un comedor social hace diez años y en el futuro me gustaría seguir su ejemplo.",
        ],
        answerIndex: 3,
        difficulty: "core",
        guideRef: "role-models",
        strategy: "Audit finite verbs for Present + Past + Conditional/Future",
        hints: [
          "Check the tense of every verb in each option — three options stay locked inside a single time frame!",
          "Look for Present (*admiro*) + Preterite (*fundó*) + Conditional future wish (*en el futuro me gustaría seguir*).",
        ],
        explanation:
          "**Admiro a mi abuelo porque fundó un comedor social hace diez años y en el futuro me gustaría seguir su ejemplo** spans Present (*admiro*), Preterite (*fundó*), and Conditional future intent (*me gustaría seguir*), whereas the other three options each remain in only one time frame.",
      },
    ],
  },
];
