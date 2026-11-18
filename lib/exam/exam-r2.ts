import type { ExamPaper } from "../types.ts";
import { acceptedForms } from "../spanish/verbs.ts";

export const paper: ExamPaper = {
  id: "exam-r2",
  title: "Mock Paper 2A — Higher Reading & Inference (4SP0 Paper 2B)",
  calculator: false,
  minutes: 45,
  questions: [
    // ---------------- AREA A: HOME & ABROAD (Q01–Q04) ----------------
    {
      id: "exam-r2-q01",
      topicId: "home-and-abroad",
      guideRef: "regions-and-towns",
      kind: "mcq",
      difficulty: "core",
      strategy: "Watch comparative structures: no es tan… como vs más… que",
      question:
        "Read Gonzalo's comparison between Oviedo and Madrid:\n\n*«Aunque Oviedo no es tan cosmopolita como Madrid ni tiene tantos museos famosos, prefiero vivir aquí en el norte porque el ritmo de vida es mucho menos estresante y todo queda a diez minutos a pie.»*\n\nWhat can we infer from Gonzalo's comment?",
      options: [
        "Gonzalo values a calmer pace of life and walkability over big-city glamour.",
        "Oviedo has more world-famous museums than Madrid.",
        "Gonzalo finds Oviedo just as stressful and crowded as Madrid.",
        "It takes longer to walk anywhere in Oviedo than in Madrid.",
      ],
      answerIndex: 0,
      hints: [
        "Look at *no es tan cosmopolita como Madrid* ('is not as cosmopolitan as Madrid').",
        "Then check why he still says *prefiero vivir aquí*: *mucho menos estresante* and *a diez minutos a pie*.",
      ],
      explanation:
        "Gonzalo admits Oviedo is less cosmopolitan and has fewer famous museums than Madrid, yet prefers living there because the pace of life is far less stressful (*mucho menos estresante*) and everything is a ten-minute walk away.",
    },
    {
      id: "exam-r2-q02",
      topicId: "home-and-abroad",
      guideRef: "holidays-and-accommodation",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Spot subtle negation words: ni siquiera, apenas, en absoluto",
      question:
        "Read Inés's travel diary from Cusco:\n\n*«Nos alojamos en un albergue juvenil cerca de la plaza mayor. Aunque la calefacción apenas calentaba por la noche, el recepcionista fue tan amable que ni siquiera nos quejamos; además, el ambiente entre los viajeros era inmejorable.»*\n\nHow did Inés react to the weak heating in the hostel?",
      options: [
        "She demanded a full refund at reception immediately.",
        "She moved to a five-star hotel on the main square.",
        "She did not even complain because the receptionist was so kind and the atmosphere was unbeatable.",
        "She left a furious review warning other travellers not to stay there.",
      ],
      answerIndex: 2,
      hints: [
        "Look closely at two Higher-tier qualifiers: *apenas* ('hardly / barely') and *ni siquiera* ('not even').",
        "Also check *inmejorable* (from *mejor*: 'unbeatable / could not be better').",
      ],
      explanation:
        "*Apenas calentaba* means the heating barely warmed the room, yet *ni siquiera nos quejamos* means 'we did not even complain' thanks to the kind receptionist and unbeatable atmosphere (*ambiente inmejorable*).",
    },
    {
      id: "exam-r2-q03",
      topicId: "home-and-abroad",
      guideRef: "transport-and-directions",
      kind: "short",
      difficulty: "core",
      strategy: "Polite usted commands use the 3rd-person present subjunctive",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — A tourist asks a stranger for polite (*usted*) directions to the cathedral. Complete with the **polite *usted* imperative** (= present subjunctive *él/usted*) of **cruzar**:\n\n*Siga todo recto hasta el semáforo y luego _______ el puente de piedra.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: ["cruce", "usted cruce"] },
      traps: [
        {
          spec: { type: "text", accept: ["cruza", "tú cruza"] },
          feedback: "*Cruza* is the informal *tú* command; notice *Siga* (*usted*) in the first half of the sentence, so keep the polite *usted* form!",
        },
        {
          spec: { type: "text", accept: ["cruze"] },
          feedback: "Verbs ending in *-zar* change *z → c* before *-e* (*cruce*, never *cruze*)!",
        },
      ],
      hints: [
        "Match the register of *Siga* (polite *usted* command = 3rd-person singular present subjunctive).",
        "Apply the *-zar* spelling change (*z → c* before *-e*) to *cruzar*.",
      ],
      solution: [
        "Polite *usted* commands use the *usted* present subjunctive form.",
        "For *-zar* verb *cruzar*, *z → c* before *-e* → **cruce**.",
      ],
    },
    {
      id: "exam-r2-q04",
      topicId: "home-and-abroad",
      guideRef: "weather-and-climate",
      kind: "short",
      difficulty: "core",
      strategy: "Use mucho (adjective agreeing with noun), NEVER muy, before calor/frío/viento",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the weather sentence with the correct intensifier (**muy** or **mucho**):\n\n*En Sevilla en agosto hace _______ calor, con temperaturas de cuarenta grados.*\n\n(Write ONLY the single missing Spanish word.)",
      answer: { type: "text", accept: ["mucho"] },
      traps: [
        {
          spec: { type: "text", accept: ["muy"] },
          feedback: "Trap alert! In *hacer calor*, *calor* is a masculine noun ('heat'), NOT an adjective — so Spanish says *hace mucho calor*, NEVER *hace muy calor*!",
        },
        {
          spec: { type: "text", accept: ["mucha"] },
          feedback: "*El calor* is masculine, so use masculine singular *mucho*!",
        },
      ],
      hints: [
        "Ask yourself whether *el calor* in *hacer calor* is a noun ('heat') or an adjective ('hot').",
        "Nouns take *mucho/a*, whereas adjectives (*caluroso*) take *muy*.",
      ],
      solution: [
        "Because *el calor* is a masculine singular noun ('makes much heat'), Spanish requires **mucho** (*hace mucho calor*).",
      ],
    },

    // ---------------- AREA B: EDUCATION & EMPLOYMENT (Q05–Q08) ----------------
    {
      id: "exam-r2-q05",
      topicId: "education-and-employment",
      guideRef: "school-rules-and-pressure",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Distinguish writer's own view from other people's views",
      question:
        "Read the school newspaper editorial:\n\n*«Muchos padres aseguran que los deberes diarios fomentan la disciplina. Sin embargo, a mi modo de ver, es injusto que los alumnos de dieciséis años tengamos que estudiar hasta medianoche sin tiempo para desconectar.»*\n\nWhat is the **student author's** opinion?",
      options: [
        "Daily homework is the best way to build self-discipline.",
        "Parents should check their teenagers' homework every evening.",
        "Sixteen-year-olds already have too much free time on weekdays.",
        "It is unfair that 16-year-olds have to study until midnight with no time to switch off.",
      ],
      answerIndex: 3,
      hints: [
        "*Muchos padres aseguran que…* gives parents' view — do not confuse that with the author's view!",
        "Look after *Sin embargo, a mi modo de ver…* ('However, in my view…').",
      ],
      explanation:
        "Parents claim homework builds discipline, whereas the author (*a mi modo de ver*) argues *es injusto que… tengamos que estudiar hasta medianoche sin tiempo para desconectar*.",
    },
    {
      id: "exam-r2-q06",
      topicId: "education-and-employment",
      guideRef: "post-16-and-university",
      kind: "mcq",
      difficulty: "core",
      strategy: "Track conditional plans vs confirmed decisions",
      question:
        "Read Daniel's post-16 plan:\n\n*«Cuando apruebe el bachillerato, tengo la intención de solicitar una plaza para estudiar ingeniería en Bilbao. Antes pensaba tomarme un año sabático en Australia, pero he cambiado de idea porque prefiero no retrasar mis estudios.»*\n\nWhat has Daniel decided to do after finishing *el bachillerato*?",
      options: [
        "Spend a gap year travelling around Australia first",
        "Leave education immediately to do an apprenticeship",
        "Apply for a university place to study engineering in Bilbao without taking a gap year",
        "Delay his university degree for two years to save money",
      ],
      answerIndex: 2,
      hints: [
        "Watch the time markers: *Antes pensaba… pero he cambiado de idea* ('Previously I intended to… but I have changed my mind').",
        "What is his current plan introduced by *tengo la intención de…*?",
      ],
      explanation:
        "Daniel *used* to plan a gap year (*Antes pensaba tomarme un año sabático*), but changed his mind (*he cambiado de idea*) and now intends to apply directly to study engineering in Bilbao (*solicitar una plaza para estudiar ingeniería*).",
    },
    {
      id: "exam-r2-q07",
      topicId: "education-and-employment",
      guideRef: "part-time-jobs-and-work-experience",
      kind: "short",
      difficulty: "core",
      strategy: "Check strong irregular preterite stem hic-/hiz-",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete with the **preterite** form of **hacer** (*ella*):\n\n*El año pasado mi prima _______ sus prácticas laborales en una farmacia.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("hacer", "preterite", "él") },
      traps: [
        {
          spec: { type: "text", accept: ["hico", "ella hico"] },
          feedback: "Watch the spelling change in 3rd-person singular preterite of *hacer*: *c → z* before *-o* to keep the soft sound!",
        },
        {
          spec: { type: "text", accept: ["hizó", "ella hizó"] },
          feedback: "Strong preterite stems NEVER take a written accent on *-o* (*hizo*, not *hizó*)!",
        },
      ],
      hints: [
        "*Hacer* has a strong preterite stem (*hic-*), which changes *c → z* before *-o* in the 3rd-person singular.",
        "Strong preterites take NO written accents!",
      ],
      solution: [
        "3rd-person singular (*ella*) preterite of *hacer* changes *c → z* before *-o* with no accent: **hizo**.",
      ],
    },
    {
      id: "exam-r2-q08",
      topicId: "education-and-employment",
      guideRef: "careers-and-interviews",
      kind: "mcq",
      difficulty: "core",
      strategy: "When an adjective modifies a profession after ser, restore un/una",
      question:
        "Examine the rule for articles with professions after *ser*. Which sentence is 100% accurate?",
      options: [
        "Mi tío es un arquitecto en Valencia.",
        "Mi tío es arquitecto muy creativo en Valencia.",
        "Quiero ser una cirujana.",
        "Mi tía es una arquitecta muy creativa en Valencia.",
      ],
      answerIndex: 3,
      hints: [
        "Unmodified professions omit *un/una* (*Mi tío es arquitecto*, *Quiero ser cirujana*).",
        "However, when a descriptive adjective (*muy creativa*) modifies the profession, *un/una* comes back!",
      ],
      explanation:
        "Unmodified professions drop the indefinite article (*es arquitecto*, *ser cirujana*), whereas a profession qualified by an adjective requires *un/una*: *es **una** arquitecta muy creativa*.",
    },

    // ---------------- AREA C: PERSONAL LIFE & RELATIONSHIPS (Q09–Q12) ----------------
    {
      id: "exam-r2-q09",
      topicId: "personal-life-relationships",
      guideRef: "family-and-descriptions",
      kind: "short",
      difficulty: "core",
      strategy: "Preposition trap: confiar EN (never confiar a)",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the sentence with the single missing Spanish preposition (**en**, **a**, **de** or **con**):\n\n*Mi hermana gemela nunca miente; por eso siempre confío _______ ella.*\n\n(Write ONLY the single Spanish preposition.)",
      answer: { type: "text", accept: ["en"] },
      traps: [
        {
          spec: { type: "text", accept: ["a"] },
          feedback: "English has no preposition ('trust her'), and French uses *à*, but Spanish ALWAYS says *confiar **en** alguien* ('to trust in someone')!",
        },
      ],
      hints: [
        "Recall the fixed verb + preposition pair for 'to trust someone': *confiar ___ alguien*.",
        "Unlike English (no preposition), Spanish uses the preposition meaning 'in/on'.",
      ],
      solution: [
        "In Spanish, 'to trust someone' is *confiar en alguien* → **en**.",
      ],
    },
    {
      id: "exam-r2-q10",
      topicId: "personal-life-relationships",
      guideRef: "friends-and-peer-pressure",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Unknown/hypothetical antecedent in a relative clause triggers subjunctive",
      question:
        "Read Clara's reflection on friendship:\n\n*«Después de mudarme de ciudad me sentía bastante aislada. Ahora busco un grupo de amigos que me acepte tal como soy y que no intente presionarme.»*\n\nWhy does Clara use the subjunctive verbs *acepte* and *intente* here?",
      options: [
        "Because she is describing friends she already met last year.",
        "Because *buscar* is followed by a hypothetical/not-yet-found friend group rather than a specific known one.",
        "Because every verb after *que* in Spanish must be in the subjunctive.",
        "Because *aceptar* and *intentar* have no present indicative forms.",
      ],
      answerIndex: 1,
      hints: [
        "Compare *Tengo un amigo que me acepta* (known friend → indicative) with *Busco un amigo que me acepte* (ideal friend not yet found → subjunctive).",
        "Is Clara describing a specific friend she already has, or an ideal group she is still looking for?",
      ],
      explanation:
        "In relative clauses (*un grupo… que…*), Spanish uses the **present subjunctive** (*acepte, intente*) when the antecedent is indefinite, hypothetical, or not yet found.",
    },
    {
      id: "exam-r2-q11",
      topicId: "personal-life-relationships",
      guideRef: "childhood-memories-imperfect",
      kind: "mcq",
      difficulty: "core",
      strategy: "Spot the ONLY 3 irregular imperfect verbs: era, iba, veía",
      question:
        "Read the grandparent's memory:\n\n*«En aquella época no teníamos televisión en color; los sábados íbamos todos juntos al cine del pueblo y veíamos películas en blanco y negro.»*\n\nWhich two infinitives correspond to the imperfect forms *íbamos* and *veíamos*?",
      options: [
        "ir and ver",
        "ser and venir",
        "ir and vivir",
        "estar and volver",
      ],
      answerIndex: 0,
      hints: [
        "There are ONLY three irregular verbs in the entire Spanish imperfect tense: *ser*, *ir*, and *ver*.",
        "Match *íbamos* and *veíamos* to two of those three!",
      ],
      explanation:
        "*Íbamos* is the *nosotros* imperfect of **ir** (*iba, ibas, iba, íbamos…*) and *veíamos* is the *nosotros* imperfect of **ver** (*veía, veías, veía, veíamos…*), keeping its *e*.",
    },
    {
      id: "exam-r2-q12",
      topicId: "personal-life-relationships",
      guideRef: "marriage-and-partnerships",
      kind: "mcq",
      difficulty: "core",
      strategy: "Read statistics and causal connectors carefully",
      question:
        "Read the sociological summary:\n\n*«Según las últimas encuestas en España, la edad media para casarse supera ya los treinta y cuatro años, dado que muchos jóvenes priorizan la estabilidad laboral o prefieren convivir sin pasar por el altar.»*\n\nWhich two reasons explain why people in Spain marry later?",
      options: [
        "Young people prioritise job stability, or prefer cohabiting without getting married.",
        "Weddings are banned before thirty, and fewer people go to university.",
        "Divorce is illegal, and young couples must buy a house first.",
        "Parents insist that children live at home until forty.",
      ],
      answerIndex: 0,
      hints: [
        "Look after the causal connector *dado que* ('given that / since').",
        "What do *priorizan la estabilidad laboral* and *convivir sin pasar por el altar* mean?",
      ],
      explanation:
        "*Dado que* introduces the two causes: prioritising job stability (*la estabilidad laboral*) and choosing to live together (*convivir*) without getting married (*sin pasar por el altar*).",
    },

    // ---------------- AREA D: THE WORLD AROUND US (Q13–Q17) ----------------
    {
      id: "exam-r2-q13",
      topicId: "world-around-us",
      guideRef: "climate-and-pollution",
      kind: "mcq",
      difficulty: "core",
      strategy: "Check gender of Greek -ma / -ta nouns!",
      question:
        "Four students wrote sentences about environmental issues. Which sentence has **100% accurate noun-adjective gender agreement**?",
      options: [
        "La problema climática amenaza toda nuestra planeta.",
        "El problema climático amenaza todo nuestro planeta.",
        "El problema climática amenaza toda nuestra planeta.",
        "La problema climático amenaza todo nuestro planeta.",
      ],
      answerIndex: 1,
      hints: [
        "Check the gender of *problema* (Greek *-ma* noun!) and *planeta* (Greek *-ta* noun!).",
        "Both *el problema* and *el planeta* are MASCULINE despite ending in *-a*!",
      ],
      explanation:
        "Both *el problema* and *el planeta* are masculine Greek-origin nouns ending in *-a*, so every determiner and adjective must be masculine: *El problema climático amenaza todo nuestro planeta*.",
    },
    {
      id: "exam-r2-q14",
      topicId: "world-around-us",
      guideRef: "sustainability-and-action",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Decode conditional criticism vs past achievement",
      question:
        "Read the news excerpt on drought in Andalusia:\n\n*«A pesar de que se han instalado miles de paneles solares este año, los agricultores advierten que la sequía seguirá empeorando a menos que el gobierno invierta urgentemente en sistemas de riego más eficientes.»*\n\nWhat warning do the farmers give?",
      options: [
        "Solar panels have caused the drought to worsen this year.",
        "The drought has already ended thanks to new irrigation systems.",
        "Farmers refuse to use renewable energy on their farms.",
        "The drought will carry on getting worse unless the government invests urgently in more efficient irrigation.",
      ],
      answerIndex: 3,
      hints: [
        "Look at *seguir + gerund* (*la sequía seguirá empeorando* = 'the drought will carry on worsening').",
        "Check the subjunctive conjunction *a menos que* ('unless').",
      ],
      explanation:
        "*Los agricultores advierten que la sequía seguirá empeorando a menos que el gobierno invierta… en sistemas de riego más eficientes* means the drought will continue getting worse unless the government urgently invests in more efficient irrigation.",
    },
    {
      id: "exam-r2-q15",
      topicId: "world-around-us",
      guideRef: "global-and-social-issues",
      kind: "short",
      difficulty: "core",
      strategy: "Exact high-frequency social-issue vocabulary",
      question:
        "Vocabulary Precision — Write the Spanish noun (INCLUDING its definite article **el** or **la**) for **'unemployment'**.\n\n(Write ONLY the article + noun, e.g. `el ...`.)",
      answer: { type: "text", accept: ["el paro", "el desempleo"] },
      traps: [
        {
          spec: { type: "text", accept: ["la pobreza"] },
          feedback: "*La pobreza* means 'poverty'; for 'unemployment', use *el paro* or *el desempleo*!",
        },
      ],
      hints: [
        "Edexcel 4SP0 accepts two common masculine nouns for 'unemployment': one short 4-letter noun (*el p___*) and one starting with *des-* (*el des______*).",
        "Include the masculine singular definite article *el* before the noun.",
      ],
      solution: [
        "'Unemployment' in Spanish is **el paro** (or **el desempleo**).",
      ],
    },
    {
      id: "exam-r2-q16",
      topicId: "world-around-us",
      guideRef: "charity-and-volunteering",
      kind: "short",
      difficulty: "core",
      strategy: "Recognise fair-trade collocation",
      question:
        "Read the ethical shopping label:\n\n*«Al comprar café y chocolate de comercio justo, garantizamos que los productores reciban un salario digno.»*\n\nWhat two-word English phrase translates *comercio justo*? (Write ONLY the two-word English term.)",
      answer: { type: "text", accept: ["fair trade", "fair-trade"] },
      hints: [
        "*El comercio* = trade; *justo* = fair.",
        "Combine those two English words into the standard ethical-shopping phrase.",
      ],
      solution: [
        "*El comercio justo* translates to **fair trade**.",
      ],
        commonError: "Don't translate *justo* literally as 'just/only' here — *el comercio justo* is the fixed term for **fair trade**.",
    },
    {
      id: "exam-r2-q17",
      topicId: "world-around-us",
      guideRef: "digital-media-and-tech",
      kind: "mcq",
      difficulty: "core",
      strategy: "Match digital-safety vocabulary accurately",
      question:
        "Read the cybersecurity tip:\n\n*«Para evitar el robo de identidad, nunca compartas tu contraseña ni abras enlaces sospechosos; además, comprueba siempre las fuentes antes de difundir noticias falsas.»*\n\nWhy does the text say you should check sources before sharing posts?",
      options: [
        "To avoid spreading fake news",
        "To make your Wi-Fi connection faster",
        "To download free applications safely",
        "To get more followers on social media",
      ],
      answerIndex: 0,
      hints: [
        "Look at *comprueba siempre las fuentes antes de difundir noticias falsas*.",
        "*Difundir* = to spread/share widely; *noticias falsas* = fake news.",
      ],
      explanation:
        "*Antes de difundir noticias falsas* means 'before spreading fake news'. Avoiding sharing passwords prevents *el robo de identidad* (identity theft).",
    },

    // ---------------- AREA E: SOCIAL ACTIVITIES, FITNESS & HEALTH (Q18–Q21) ----------------
    {
      id: "exam-r2-q18",
      topicId: "social-fitness-health",
      guideRef: "smoking-alcohol-stress",
      kind: "mcq",
      difficulty: "core",
      strategy: "Understand health campaign cause-and-effect verbs: provocar, aliviar",
      question:
        "Read the youth health leaflet:\n\n*«Muchos jóvenes creen erróneamente que vapear es inofensivo; sin embargo, los médicos insisten en que la nicotina crea adicción y es perjudicial para los pulmones. Para aliviar el estrés de los exámenes, es mucho mejor hacer ejercicio al aire libre.»*\n\nWhat mistaken belief do many young people hold, according to the leaflet?",
      options: [
        "That outdoor exercise increases exam stress",
        "That vaping is harmless",
        "That nicotine damages the lungs",
        "That doctors recommend energy drinks during exams",
      ],
      answerIndex: 1,
      hints: [
        "Focus on *creen erróneamente que…* ('mistakenly believe that…').",
        "What does *inofensivo* mean (*in-* + *ofensivo*)?",
      ],
      explanation:
        "*Creen erróneamente que vapear es inofensivo* means they mistakenly believe that vaping is harmless (*inofensivo*). Doctors warn that nicotine causes addiction and harms the lungs (*perjudicial para los pulmones*).",
    },
    {
      id: "exam-r2-q19",
      topicId: "social-fitness-health",
      guideRef: "sports-and-events",
      kind: "mcq",
      difficulty: "core",
      strategy: "Duration with desde hace takes the PRESENT indicative for ongoing habits",
      question:
        "How do you express *'I have been swimming in a club for four years'* (and I still swim there now) using **desde hace**?",
      options: [
        "He nadado en un club desde hace cuatro años.",
        "Nadé en un club desde hace cuatro años.",
        "Nado en un club desde hace cuatro años.",
        "Nadaré en un club desde hace cuatro años.",
      ],
      answerIndex: 2,
      hints: [
        "English says 'I have been swimming…', which tempts students to write *he nadado*.",
        "In Spanish, an action that started in the past and **continues now** uses **present indicative + *desde hace* + time**!",
      ],
      explanation:
        "Spanish expresses ongoing duration with **present tense + *desde hace* + time**: *Nado en un club desde hace cuatro años* (equivalent to *Llevo cuatro años nadando en un club*).",
    },
    {
      id: "exam-r2-q20",
      topicId: "social-fitness-health",
      guideRef: "cinema-music-reading",
      kind: "short",
      difficulty: "core",
      strategy: "Idiomatic 'is about' = tratar de (never ser sobre in formal reviews)",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the book review idiom (*tratar de* = 'to be about') with the **present indicative** of **tratar** (*ella*, referring to *la novela*):\n\n*La última novela de Isabel Allende _______ de una familia que emigra a Chile.*\n\n(Write ONLY the single missing verb.)",
      answer: { type: "text", accept: ["trata"] },
      hints: [
        "In Spanish reviews, 'the novel/film is about…' is *la novela / la película ___ de…*.",
        "Conjugate regular *-ar* verb *tratar* for 3rd-person singular (*ella*) in the present indicative.",
      ],
      solution: [
        "3rd-person singular present indicative of *tratar* → **trata** (*trata de* = 'is about').",
      ],
        commonError: "In *la novela trata de...* ('the novel is about'), *tratar* is singular 3rd-person present (*trata*), never *es sobre*.",
    },
    {
      id: "exam-r2-q21",
      topicId: "social-fitness-health",
      guideRef: "eating-out-and-complaints",
      kind: "mcq",
      difficulty: "core",
      strategy: "ser (inherent quality) vs estar (current temperature/state of this dish)",
      question:
        "In a restaurant, you want to say: *'Fish is very healthy, but this soup is cold.'* Which pair of verbs is correct?",
      options: [
        "El pescado está muy sano, pero esta sopa es fría.",
        "El pescado es muy sano, pero esta sopa es fría.",
        "El pescado está muy sano, pero esta sopa está fría.",
        "El pescado es muy sano, pero esta sopa está fría.",
      ],
      answerIndex: 3,
      hints: [
        "Saying fish in general is healthy describes an inherent characteristic → DOCTOR (*ser*).",
        "Saying this bowl of soup in front of you is cold describes a temporary physical state → PLACE (*estar*).",
      ],
      explanation:
        "General nutritional character takes **ser** (*El pescado es muy sano*), while the temporary temperature/condition of food on your plate takes **estar** (*esta sopa está fría*).",
    },

    // ---------------- IGCSE TENSE MASTERY (Q22–Q25) ----------------
    {
      id: "exam-r2-q22",
      topicId: "past-future-tenses",
      guideRef: "preterite-irregs-and-accents",
      kind: "short",
      difficulty: "challenge",
      strategy: "-ir sandal verb o→u in 3rd-person plural preterite",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete with the **preterite** form of **dormir** (*ellos*):\n\n*Como estaban agotados tras el vuelo, los niños _______ diez horas seguidas.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("dormir", "preterite", "ellos") },
      traps: [
        {
          spec: { type: "text", accept: ["dormieron", "ellos dormieron"] },
          feedback: "*Dormir* is an *-ir* sandal verb: *o → u* in 3rd-person singular and plural of the preterite (*durmió, durmieron*)!",
        },
        {
          spec: { type: "text", accept: ["duermieron", "ellos duermieron"] },
          feedback: "In the preterite sandal, *o* shifts to single *u* (*durmieron*), NOT the present-tense boot *ue*!",
        },
      ],
      hints: [
        "In the preterite, *-ir* stem-changing verbs shift *o → u* in *él/ella* and *ellos/ellas* ('sandal' pattern).",
        "Combine *durm-* with *-ieron*.",
      ],
      solution: [
        "3rd-person plural preterite of *-ir* sandal verb *dormir*: *o → u* → **durmieron**.",
      ],
    },
    {
      id: "exam-r2-q23",
      topicId: "past-future-tenses",
      guideRef: "perfect-and-pluperfect",
      kind: "short",
      difficulty: "challenge",
      strategy: "Pluperfect = imperfect of haber (había…) + irregular participle",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete with the **pluperfect** (*pluscuamperfecto*: *había…*) form of **abrir** (*ellos*):\n\n*Cuando llegamos al museo a las nueve, todavía no _______ las puertas.*\n\n(Write ONLY the two-word verb form, with its written accent!)",
      answer: {
        type: "text",
        accept: ["habían abierto", "ellos habían abierto", "ellas habían abierto", "ustedes habían abierto"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["habían abrido", "han abierto"] },
          feedback: "Check both parts: *Cuando llegamos… todavía no…* ('had not yet opened') needs imperfect *habían* + irregular participle *abierto* (never *abrido*)!",
        },
      ],
      hints: [
        "Form the pluperfect with the *ellos* imperfect of *haber* (*habían*) + the past participle of *abrir*.",
        "*Abrir* has an irregular past participle ending in *-ierto*!",
      ],
      solution: [
        "*Ellos* imperfect of *haber* = *habían*; irregular past participle of *abrir* = *abierto*.",
        "Answer: **habían abierto**.",
      ],
    },
    {
      id: "exam-r2-q24",
      topicId: "past-future-tenses",
      guideRef: "simple-future-and-conditional",
      kind: "short",
      difficulty: "core",
      strategy: "Conditional shares the 12 irregular stems (dir-, har-, podr-, sabr-…)",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete with the **conditional** form of **decir** (*yo*):\n\n*En esa situación tan difícil, yo le _______ la verdad inmediatamente.*\n\n(Write ONLY the missing verb, with its written accent!)",
      answer: { type: "text", accept: acceptedForms("decir", "conditional", "yo") },
      traps: [
        {
          spec: { type: "text", accept: ["deciría", "yo deciría"] },
          feedback: "*Decir* uses the irregular stem *dir-* in both the future and conditional (never *deciría*)!",
        },
      ],
      hints: [
        "Recall the irregular future/conditional stem of *decir*: *dir-*.",
        "Add the *yo* conditional ending *-ía* (with an accent on the *í*).",
      ],
      solution: [
        "Irregular stem *dir-* + *yo* conditional ending *-ía* → **diría**.",
      ],
    },
    {
      id: "exam-r2-q25",
      topicId: "past-future-tenses",
      guideRef: "grade9-verbal-idioms",
      kind: "mcq",
      difficulty: "core",
      strategy: "al + infinitive = 'upon / on doing something'",
      question:
        "What is the best translation of the Grade-9 opener *«Al ver el humo en el bosque, llamamos a los bomberos enseguida»*?",
      options: [
        "Before seeing the smoke in the forest, we called the firefighters straight away.",
        "Upon seeing the smoke in the forest, we called the firefighters straight away.",
        "Despite seeing the smoke in the forest, we did not call the firefighters.",
        "Instead of seeing the smoke in the forest, we called the firefighters.",
      ],
      answerIndex: 1,
      hints: [
        "Recall the concise time-clause structure **al + infinitive** (*al llegar, al salir, al ver*).",
        "How does *al + infinitive* link an immediate trigger action to the next event?",
      ],
      explanation:
        "**Al + infinitive** (*Al ver el humo…*) means *'Upon seeing / When we saw the smoke…'*. It is a concise, high-scoring alternative to *Cuando vimos…* in Paper 2 narratives.",
    },

    // ---------------- GRADE-9 SUBJUNCTIVE & PRECISION (Q26–Q30) ----------------
    {
      id: "exam-r2-q26",
      topicId: "subjunctive-grade9",
      guideRef: "forming-present-subjunctive",
      kind: "short",
      difficulty: "challenge",
      strategy: "-ir stem-changers shift e→i / o→u in nosotros present subjunctive!",
      question:
        "Paper 2 Q3c Higher Grammar — Complete with the **present subjunctive** of **pedir** (*nosotros*):\n\n*El médico nos aconseja que _______ ayuda si nos sentimos agobiados.*\n\n(Write ONLY the missing verb.)",
      answer: { type: "text", accept: acceptedForms("pedir", "subjunctive", "nosotros") },
      traps: [
        {
          spec: { type: "text", accept: ["pedamos", "nosotros pedamos"] },
          feedback: "Watch out! *-ir* stem-changing verbs (*pedir, dormir, preferir*) ALSO shift *e → i* or *o → u* in *nosotros* and *vosotros* of the present subjunctive!",
        },
        {
          spec: { type: "text", accept: ["pedimos", "nosotros pedimos"] },
          feedback: "*Pedimos* is indicative; *aconseja que* triggers the present subjunctive!",
        },
      ],
      hints: [
        "Start from *yo pido* → drop *-o* → *pid-*.",
        "For *-ir* stem-changer *pedir*, *e → i* applies in ALL six persons of the present subjunctive, including *nosotros* (*-amos*).",
      ],
      solution: [
        "Present subjunctive of *pedir* keeps *pid-* throughout: *pida, pidas, pida, **pidamos**, pidáis, pidan*.",
        "Answer: **pidamos**.",
      ],
    },
    {
      id: "exam-r2-q27",
      topicId: "subjunctive-grade9",
      guideRef: "weirdo-and-impersonal",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "Same subject → infinitive; change of subject + que → subjunctive!",
      question:
        "Compare *querer / esperar* with one subject vs two subjects. Which sentence is **grammatically INCORRECT**?",
      options: [
        "Espero aprobar todos mis exámenes este verano.",
        "Mis padres esperan que yo apruebe todos mis exámenes este verano.",
        "Espero que yo apruebe todos mis exámenes este verano.",
        "Es imprescindible que repasemos un poco cada día.",
      ],
      answerIndex: 2,
      hints: [
        "When the person hoping and the person passing are the **same** (*yo* and *yo*), Spanish does NOT use *que + subjunctive*!",
        "Check which sentence unnecessarily repeats the same subject (*yo … que yo …*) instead of using an infinitive.",
      ],
      explanation:
        "When there is **no change of subject**, Spanish uses the **infinitive** (*Espero aprobar…*, 'I hope to pass…'), NEVER *Espero que yo apruebe…*. *Que + subjunctive* is used when the subject changes (*Mis padres esperan que yo apruebe*) or after impersonal *Es imprescindible que…*.",
    },
    {
      id: "exam-r2-q28",
      topicId: "subjunctive-grade9",
      guideRef: "cuando-and-time-clauses",
      kind: "mcq",
      difficulty: "challenge",
      strategy: "SPACE conjunctions (para que, sin que, antes de que, a menos que) ALWAYS take subjunctive",
      question:
        "Which conjunction below **ALWAYS** requires the subjunctive in Spanish (never the indicative), regardless of time frame?",
      options: [
        "porque (because)",
        "antes de que (before)",
        "dado que (given that)",
        "ya que (since)",
      ],
      answerIndex: 1,
      hints: [
        "Causal connectors (*porque, dado que, ya que, puesto que*) state real causes/facts, so they take the indicative.",
        "Look for the ESCAPA / SPACE conjunction meaning 'before (someone does something)'.",
      ],
      explanation:
        "**Antes de que** ('before') ALWAYS triggers the subjunctive (*Salgo temprano antes de que haya atasco*), because at the moment of the main verb the second action has not yet happened. *Porque*, *dado que* and *ya que* introduce known causes in the indicative.",
    },
    {
      id: "exam-r2-q29",
      topicId: "subjunctive-grade9",
      guideRef: "si-clauses-and-imperfect-subj",
      kind: "short",
      difficulty: "challenge",
      strategy: "Si + imperfect subjunctive (-ra / -se) → conditional",
      question:
        "Paper 2 Q3c Grade-9 'Si' Clause — Complete the hypothetical *si* clause with the **imperfect subjunctive** of **ser** (*yo*):\n\n*Si yo _______ el alcalde de mi ciudad, construiría más carriles bici gratuitos.*\n\n(Write ONLY the missing verb; either the *-ra* or *-se* imperfect subjunctive form is accepted.)",
      answer: {
        type: "text",
        accept: ["fuera", "fuese", "yo fuera", "yo fuese"],
      },
      traps: [
        {
          spec: { type: "text", accept: ["sería", "yo sería"] },
          feedback: "NEVER put the conditional (*sería*) immediately after *si* in a hypothetical condition! Use *Si + imperfect subjunctive* (*fuera / fuese*) → conditional (*construiría*).",
        },
        {
          spec: { type: "text", accept: ["sea", "yo sea"] },
          feedback: "*Si* NEVER takes the present subjunctive (*sea*)! With conditional *construiría*, use the imperfect subjunctive (*fuera / fuese*).",
        },
      ],
      hints: [
        "Look at the main-clause verb *construiría* (conditional): this requires *Si + imperfect subjunctive*.",
        "Take 3rd-person plural preterite of *ser* (*fueron*), drop *-ron*, and add *-ra* (or *-se*).",
      ],
      solution: [
        "From 3rd-person plural preterite *fueron* → drop *-ron* → *fue-* + *-ra / -se*.",
        "Answer: **fuera** (or **fuese**).",
      ],
    },
    {
      id: "exam-r2-q30",
      topicId: "subjunctive-grade9",
      guideRef: "pronouns-por-para-ser-estar",
      kind: "short",
      difficulty: "core",
      strategy: "Idiomatic por vs para: gracias POR, pagar POR, luchar POR",
      question:
        "Paper 2 Q3c Grammar Gap-Fill — Complete the sentence with **por** or **para**:\n\n*Muchas gracias _______ haberme ayudado a preparar mi presentación oral.*\n\n(Write ONLY `por` or `para`.)",
      answer: { type: "text", accept: ["por"] },
      traps: [
        {
          spec: { type: "text", accept: ["para"] },
          feedback: "Never write *gracias para*! Thanking someone expresses the cause/reason for your gratitude ('on account of your help'), which is ALWAYS *gracias **por***!",
        },
      ],
      hints: [
        "Does 'thank you for helping me' express a future goal (*para*) or the cause/reason for gratitude (*por*)?",
        "Remember the golden mark-saver: *gracias ___ tu ayuda*!",
      ],
      solution: [
        "Cause, motive and exchange always take **por**: *Muchas gracias **por** haberme ayudado…*.",
      ],
    },
  ],
};
