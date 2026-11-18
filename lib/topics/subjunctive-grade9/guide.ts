import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "subjunctive-grade9",
  title: "Grade-9 Structures — Subjunctive, Si Clauses, Pronouns & Idioms",
  strand: "IGCSE Grammar Mastery",
  icon: "🏆",
  summary:
    "Unlock top-band Linguistic Knowledge & Accuracy marks in Edexcel 4SP0 with the Present Subjunctive, WEIRDO triggers, future 'cuando', 'si tuviera… haría…' clauses, 'por vs para', and double object pronouns.",
  intro:
    "What separates a solid Grade 7 script from an unmistakable **Grade 9** in Pearson Edexcel IGCSE Spanish (`4SP0`)? Examiners looking at Paper 2 Question 3c (grammar manipulation), Paper 2 Question 7 (130–150-word extended writing), and Paper 3 (Speaking) explicitly hunt for **mood control** and **structural precision**: flipping cleanly from the indicative into the **subjunctive** after WEIRDO triggers and future *cuando*, building hypothetical **si tuviera… haría…** sentences, choosing **por** vs **para** by logic rather than guesswork, and snapping double object pronouns into **se lo**. Every rule in this unit is an algorithmic mark-winner you can deploy across Areas A–E.",
  guide: [
    {
      id: "forming-present-subjunctive",
      heading: "Forming the Present Subjunctive: Yo-Flip & DISHES",
      discovery: {
        problem:
          "Look at three Grade-9 subjunctive forms: **tenga** (from *tener*), **conozca** (from *conocer*), and **busque** (from *buscar*). Notice that **tenga** keeps the *-g-* from *yo tengo*, NOT the infinitive stem *ten-*. Can you deduce the universal 3-step recipe that builds almost every regular, boot, *yo-go*, and *-zco* present subjunctive in Spanish?",
        idea:
          "Start from the **present indicative yo form** (*tengo, conozco, hago, salgo, pido*), **drop the -o**, and attach the **opposite vowel endings** (*-ar* verbs take **-e** endings; *-er/-ir* verbs take **-a** endings), adjusting *-car/-gar/-zar* spelling so the consonant sound stays identical!",
      },
      body:
        "### The 3-Step Subjunctive Machine (Yo-Flip)\n\n" +
        "Unlike a tense (which tells you *when* an action happens), the **subjunctive** is a **mood**: it signals wishes, doubts, recommendations, unfulfilled future conditions, and non-declared reality. Over 90% of Spanish verbs follow one mechanical 3-step algorithm:\n\n" +
        "1. **Take the present indicative *yo* form**: *hablo*, *como*, *tengo*, *hago*, *salgo*, *vengo*, *digo*, *conozco*, *pido*.\n" +
        "2. **Drop the final *-o***: *habl-*, *com-*, *teng-*, *hag-*, *salg-*, *veng-*, *dig-*, *conozc-*, *pid-*.\n" +
        "3. **Add the opposite theme vowel**:\n" +
        "   - **-AR verbs** flip from *a* to **e**: **-e, -es, -e, -emos, -éis, -en**\n" +
        "   - **-ER and -IR verbs** flip from *e/i* to **a**: **-a, -as, -a, -amos, -áis, -an**\n\n" +
        "| Verb & Group | Step 1 (*yo*) | Step 2 (stem) | Present Subjunctive (*yo, tú, él, nosotros, vosotros, ellos*) |\n" +
        "|---|---|---|---|\n" +
        "| **hablar** (*-ar*) | *hablo* | *habl-* | *hable, hables, hable, hablemos, habléis, hablen* |\n" +
        "| **comer** (*-er*) | *como* | *com-* | *coma, comas, coma, comamos, comáis, coman* |\n" +
        "| **tener** (*yo-go*) | *tengo* | *teng-* | *tenga, tengas, tenga, tengamos, tengáis, tengan* |\n" +
        "| **hacer** (*yo-go*) | *hago* | *hag-* | *haga, hagas, haga, hagamos, hagáis, hagan* |\n" +
        "| **conocer** (*-zco*) | *conozco* | *conozc-* | *conozca, conozcas, conozca, conozcamos, conozcáis, conozcan* |\n" +
        "| **pedir** (*e→i*) | *pido* | *pid-* | *pida, pidas, pida, pidamos, pidáis, pidan* |\n\n" +
        "### Three Sub-Rules Examiners Love to Test in Paper 2 Q3c\n\n" +
        "- **Spelling shifts (*-car / -gar / -zar*) across ALL six persons**: Because *-ar* verbs now take *-e*, the stem consonant must change spelling before *e* to preserve its sound: **c → qu** (*buscar → busque, busques…*), **g → gu** (*llegar → llegue, lleguemos…*), **z → c** (*empezar → empiece, empecemos…*).\n" +
        "- **Boot verbs (*-ar* / *-er* vs *-ir*)**: *-ar* and *-er* stem-changers revert to the plain infinitive vowel in *nosotros* and *vosotros* (*pensar → piense, pensemos*; *poder → pueda, podamos*), whereas **-ir stem-changers** keep a single-vowel shift (*e→i* or *o→u*) in *nosotros/vosotros*: *dormir → duerma, **durmamos***; *preferir → prefiera, **prefiramos***.\n" +
        "- **The 6 DISHES Irregulars** (verbs whose *yo* form does NOT end in *-o*): *soy, estoy, doy, voy, sé, he/hay*.\n\n" +
        "| Letter | Infinitive | Present *yo* | Present Subjunctive (*yo → ellos*) | Exam Watchpoint |\n" +
        "|---|---|---|---|---|\n" +
        "| **D** | **dar** (to give) | *doy* | *dé, des, dé, demos, deis, den* | Accent on **dé** (vs preposition *de*!) |\n" +
        "| **I** | **ir** (to go) | *voy* | *vaya, vayas, vaya, vayamos, vayáis, vayan* | Classic in *cuando vaya a la universidad* |\n" +
        "| **S** | **ser** (to be) | *soy* | *sea, seas, sea, seamos, seáis, sean* | Classic in *cuando sea mayor / es importante que sea* |\n" +
        "| **H** | **haber** (aux / there is) | *he / hay* | *haya, hayas, haya, hayamos, hayáis, hayan* | **haya** = 'there is/are' in subjunctive (*espero que haya*) |\n" +
        "| **E** | **estar** (to be) | *estoy* | *esté, estés, esté, estemos, estéis, estén* | Accents on **esté, estés, esté, estén** (NOT *estemos*) |\n" +
        "| **S** | **saber** (to know) | *sé* | *sepa, sepas, sepa, sepamos, sepáis, sepan* | *No creo que sepa la respuesta* |",
      diagram:
        '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-step Present Subjunctive Yo-Flip Machine plus DISHES irregulars">' +
        '<rect x="6" y="6" width="628" height="208" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="30" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#0f172a">Present Subjunctive Machine: Yo-Go → Drop -o → Swap Vowel</text>' +
        '<rect x="22" y="48" width="175" height="92" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>' +
        '<text x="109" y="69" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">1. Present YO</text>' +
        '<text x="109" y="91" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">hablar → habl-o</text>' +
        '<text x="109" y="110" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">tener → teng-o</text>' +
        '<text x="109" y="129" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">buscar → busc-o</text>' +
        '<line x1="199" y1="94" x2="225" y2="94" stroke="#64748b" stroke-width="2.2"/>' +
        '<polygon points="225,89 235,94 225,99" fill="#64748b"/>' +
        '<rect x="238" y="48" width="164" height="92" rx="12" fill="#fefce8" stroke="#eab308" stroke-width="1.8"/>' +
        '<text x="320" y="69" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#a16207">2. Drop -o &amp; Fix Spell</text>' +
        '<text x="320" y="91" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">habl-</text>' +
        '<text x="320" y="110" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">teng-</text>' +
        '<text x="320" y="129" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#b45309">busc- → busqu-</text>' +
        '<line x1="404" y1="94" x2="430" y2="94" stroke="#64748b" stroke-width="2.2"/>' +
        '<polygon points="430,89 440,94 430,99" fill="#64748b"/>' +
        '<rect x="443" y="48" width="175" height="92" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>' +
        '<text x="530" y="69" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#047857">3. Opposite Vowel!</text>' +
        '<text x="530" y="91" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#065f46">-AR → hable, hablen</text>' +
        '<text x="530" y="110" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#065f46">-ER/-IR → tenga, tengan</text>' +
        '<text x="530" y="129" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#065f46">-CAR → busque, busques</text>' +
        '<rect x="22" y="154" width="596" height="46" rx="10" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.5"/>' +
        '<text x="320" y="174" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#be123c">6 DISHES Irregulars (yo does NOT end in -o):</text>' +
        '<text x="320" y="192" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#881337">Dar → dé  |  Ir → vaya  |  Ser → sea  |  Haber → haya  |  Estar → esté  |  Saber → sepa</text>' +
        '</svg>',
      diagramCaption:
        "Every regular, yo-go, -zco, and spelling-change verb passes through the 3-step Yo-Flip Machine; only the 6 DISHES verbs bypass it.",
      workedExamples: [
        {
          title: "Edexcel Paper 2 Q3c Manipulation — Yo-Go & Spelling-Shift Subjunctives",
          problem:
            "Put the bracketed verbs into the **present subjunctive**: (a) *Es importante que tú _______ (salir) temprano.* (b) *Espero que nosotros _______ (llegar) a tiempo.*",
          steps: [
            "For (a) **salir** (*tú*): Step 1 take present *yo* → *salgo*. Step 2 drop *-o* → *salg-*. Step 3 *-ir* takes opposite **-a** endings (*tú* = *-as*) → **salgas**.",
            "For (b) **llegar** (*nosotros*): Step 1 *llego* → *lleg-*. Step 2 *-gar* needs **g → gu** before *e* so the hard *g* sound survives → *llegu-*. Step 3 *-ar* takes *-emos* → **lleguemos**.",
          ],
          answer: "(a) salgas; (b) lleguemos",
          yourTurn: {
            question:
              "Complete with the **present subjunctive** of **hacer** (*ellos*): Es imprescindible que los gobiernos _______ más por el planeta. (Write ONLY the missing verb.)",
            answer: {
              type: "text",
              accept: ["hagan", "ellos hagan"],
              display: "hagan",
            },
            solution:
              "Take present *yo* **hago** → drop *-o* (*hag-*) → add *-er* opposite ending *-an* for *ellos* = **hagan**.",
          },
        },
      ],
      keyPoints: [
        "Build the present subjunctive from **present yo** minus **-o**, NEVER straight from the infinitive (*tengo → tenga*, *digo → diga*, *conozco → conozca*).",
        "Swap the theme vowel: **-ar** verbs take **-e, -es, -e, -emos, -éis, -en**; **-er/-ir** verbs take **-a, -as, -a, -amos, -áis, -an**.",
        "Apply **-car → -qu**, **-gar → -gu**, and **-zar → -c** in **all six persons** of the present subjunctive (*busque, llegue, empiece*).",
        "Memorise **DISHES**: **dé, vaya, sea, haya, esté, sepa** — and keep the written accents on **dé** and **esté / estés / estén**.",
      ],
      whyItWorks:
        "Because present *yo* already reveals irregular consonant stems (*teng-, hag-, salg-, conozc-, pid-*), anchoring the subjunctive to *yo* lets one single rule generate hundreds of irregular-looking forms automatically.",
      strategies: [
        "Run the Yo-Go Check before writing any subjunctive ending",
        "Check -car/-gar/-zar consonant preservation before -e",
      ],
      thinkDeeper:
        "Why does **empezar** (*e→ie* stem-changer AND *-zar* verb) become **empiece** in *yo/él* but **empecemos** in *nosotros*? Trace both rules at once: why does the *z → c* change stay in *nosotros* while the *e → ie* boot change disappears?",
    },
    {
      id: "weirdo-and-impersonal",
      heading: "WEIRDO triggers, Ojalá & negative opinions",
      discovery: {
        problem:
          "Compare two authentic Spanish sentences about exams:\n- (1) *Creo que el examen **es** fácil.*\n- (2) *No creo que el examen **sea** fácil.*\nWhy did adding **no** force **es** (indicative) to flip to **sea** (subjunctive), and what happens if BOTH halves of a wish share the exact same subject (*I want to study* vs *I want you to study*)?",
        idea:
          "Affirmative **creo que / pienso que** declares what the speaker treats as a **fact** (indicative), whereas **no creo que / dudo que** opens up **doubt or denial** (subjunctive). And for wishes/emotions, Spanish needs **two clauses with a subject change** (*quiero que tú estudies*); if the subject stays the same, use the **infinitive** (*quiero estudiar*)!",
      },
      body:
        "### The Two-Subject Condition + WEIRDO\n\n" +
        "Most WEIRDO sentences follow the two-clause blueprint:\n\n" +
        "**[Trigger in Clause 1] + que + [New Subject + Present Subjunctive in Clause 2]**\n\n" +
        "- Same subject → **Infinitive** (NO *que*): *Espero **aprobar** todos mis exámenes.* ('I hope to pass all my exams.')\n" +
        "- Change of subject → **que + Subjunctive**: *Mis padres esperan **que** yo **apruebe** todos mis exámenes.*\n\n" +
        "| WEIRDO Trigger | High-Frequency 4SP0 Starters | Grade-9 Model Sentence |\n" +
        "|---|---|---|\n" +
        "| **W** — Wishes & Will | *quiero que, espero que, prefiero que, pido que* | *Mis profesores quieren que **saquemos** buenas notas.* |\n" +
        "| **E** — Emotions | *me alegra que, me molesta que, me preocupa que, temo que* | *Me preocupa mucho que **haya** tanta contaminación.* |\n" +
        "| **I** — Impersonal Expressions | *es imprescindible que, es importante que, es mejor que, es justo que, puede que* | *Es imprescindible que los jóvenes **duerman** ocho horas.* |\n" +
        "| **R** — Recommendations | *recomiendo que, aconsejo que, sugiero que* | *Recomiendo que **visites** Valencia en marzo.* |\n" +
        "| **D** — Doubt & Denial | *dudo que, no creo que, no pienso que, no es verdad que* | *No creo que el uniforme **sea** incómodo.* |\n" +
        "| **O** — Ojalá | *ojalá (que)* | *¡Ojalá **haga** buen tiempo durante las vacaciones!* |\n\n" +
        "### The #1 Edexcel Paper 2 Trap: Certainty (Indicative) vs Doubt (Subjunctive)\n\n" +
        "Never blindly put the subjunctive after every *que*! Impersonal and opinion phrases of **certainty, truth, or clear belief** take the **indicative**:\n" +
        "- **Indicative (Declared Fact)**: *creo que es*, *pienso que tiene*, *opino que va*, *es verdad que hay*, *es evidente que*, *está claro que*, *estoy seguro/a de que*.\n" +
        "- **Subjunctive (Doubt / Negated Belief)**: *no creo que sea*, *no pienso que tenga*, *dudo que vaya*, *no es verdad que haya*, *no está claro que*, *puede que sea*.",
      diagram:
        '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Switchboard comparing affirmative certainty with indicative versus negated opinion and WEIRDO with subjunctive">' +
        '<rect x="6" y="6" width="628" height="218" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="30" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#0f172a">The Mood Switchboard: Declared Fact vs WEIRDO / Doubt</text>' +
        '<rect x="24" y="48" width="282" height="158" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>' +
        '<text x="165" y="71" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#1d4ed8">CERTAINTY → INDICATIVE</text>' +
        '<text x="42" y="96" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">• Creo que es buena idea.</text>' +
        '<text x="42" y="118" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">• Pienso que tienen razón.</text>' +
        '<text x="42" y="140" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">• Es verdad que hay tráfico.</text>' +
        '<text x="42" y="162" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">• Está claro que sabe nadar.</text>' +
        '<text x="165" y="191" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e40af">Speaker declares it as TRUE</text>' +
        '<rect x="334" y="48" width="282" height="158" rx="12" fill="#fdf4ff" stroke="#a855f7" stroke-width="1.8"/>' +
        '<text x="475" y="71" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#7e22ce">WEIRDO / NO CREO → SUBJUNCTIVE</text>' +
        '<text x="352" y="96" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">• No creo que sea buena idea.</text>' +
        '<text x="352" y="118" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">• Dudo que tengan razón.</text>' +
        '<text x="352" y="140" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">• Es urgente que haya menos tráfico.</text>' +
        '<text x="352" y="162" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">• Ojalá sepa la respuesta.</text>' +
        '<text x="475" y="191" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#6b21a8">Wish, Emotion, Judgment or Doubt</text>' +
        '</svg>',
      diagramCaption:
        "Affirmative 'creo que / es evidente que' stays on the blue Indicative track; negating it ('no creo que') or using WEIRDO flips the switch to the purple Subjunctive track.",
      workedExamples: [
        {
          title: "Choosing Indicative vs Subjunctive in Context",
          problem:
            "Select and conjugate the right mood of **ser** (*él/ella*): (a) *Pienso que el cambio climático _______ grave.* (b) *No pienso que las redes sociales _______ malas si las usamos bien.*",
          steps: [
            "In (a), **pienso que** is an affirmative opinion declaring certainty → use the **present indicative** of *ser* (singular *el cambio climático*) = **es**.",
            "In (b), **no pienso que** negates the belief, triggering doubt → use the **present subjunctive** of *ser* (plural *las redes sociales*) = **sean**.",
          ],
          answer: "(a) es; (b) sean",
          yourTurn: {
            question:
              "Complete with the correct form of **ser** (*él/ella*): No creo que la película _______ aburrida. (Write ONLY the missing verb.)",
            answer: {
              type: "text",
              accept: ["sea", "ella sea"],
              display: "sea",
            },
            solution:
              "**No creo que** expresses negated belief/doubt, so it triggers the present subjunctive of *ser* (*la película* = 3rd person singular) → **sea**.",
          },
        },
      ],
      keyPoints: [
        "WEIRDO triggers (**W**ishes, **E**motions, **I**mpersonal judgments, **R**ecommendations, **D**oubt/denial, **O**jalá) require the subjunctive after *que* when the subject changes.",
        "Affirmative **creo que / pienso que / es verdad que / está claro que** take the **indicative** (*creo que es*); negated **no creo que / no pienso que / no es verdad que** take the **subjunctive** (*no creo que sea*).",
        "When there is **no change of subject**, drop *que* and use the **infinitive** (*quiero viajar*, *es importante reciclar*).",
        "**Ojalá (que)** ALWAYS triggers the subjunctive — present subjunctive for a realistic hope (*¡Ojalá apruebe!*) or imperfect subjunctive for a wistful wish (*¡Ojalá pudiera!*).",
      ],
      whyItWorks:
        "Spanish reserves the indicative for propositions the speaker commits to as part of reality (*creo que llueve*) and uses the subjunctive whenever the main clause frames the subordinate action as merely wished for, reacted to, advised, or doubted (*no creo que llueva*).",
      strategies: [
        "Ask two questions at every 'que': (1) Did the subject change? (2) Does Clause 1 declare certainty or WEIRDO?",
        "Drop 'Es imprescindible que + plural subjunctive' into every Paper 2 Q7 opinion paragraph",
      ],
      thinkDeeper:
        "Why does a question like *¿Crees que **es** buena idea?* normally keep the indicative in Spanish, even though the speaker is asking? Hint: the speaker isn't denying the idea — they are asking whether you hold it as a fact!",
    },
    {
      id: "cuando-and-time-clauses",
      heading: "Future 'Cuando' & purpose conjunctions (para que, sin que)",
      discovery: {
        problem:
          "Why does an examiner award full Grade-9 credit for *Cuando **tenga** dieciocho años, estudiaré medicina*, yet underline *Cuando **tendré** dieciocho años* as a grammar error — while *Cuando **tengo** tiempo libre, escucho música* is completely right in the indicative?",
        idea:
          "After time conjunctions like **cuando** and **en cuanto**, Spanish looks at whether the event has **already happened / happens regularly** (indicative: *cuando tengo*, *cuando tuve*) or lies **unrealised in the future** (present subjunctive: *cuando tenga* — NEVER the future tense directly after future *cuando*!).",
      },
      body:
        "### Group 1: ESCAPA Conjunctions — ALWAYS Subjunctive!\n\n" +
        "Certain purpose, condition, and 'before/without' conjunctions describe an action that is inherently anticipated or hypothetical relative to the main verb. Whenever there is a conjugated verb after *que*, these **always** take the subjunctive (**ESCAPA**):\n\n" +
        "| Conjunction | English Meaning | Same-Subject Shortcut (Infinitive) | Different-Subject Grade-9 Frame (+ Subjunctive) |\n" +
        "|---|---|---|---|\n" +
        "| **e**n caso de que | in case | *en caso de + inf* | *Llevo paraguas **en caso de que llueva**.* |\n" +
        "| **s**in que | without | *sin + inf* | *Salió de casa **sin que** sus padres lo **supieran**.* |\n" +
        "| **c**on tal de que | provided that | — | *Iré a la fiesta **con tal de que vengas** conmigo.* |\n" +
        "| **a**ntes de que | before | *antes de + inf* | *Repaso mis apuntes **antes de que empiece** la clase.* |\n" +
        "| **p**ara que / a fin de que | so that / in order that | *para + inf* | *Mis padres trabajan duro **para que** yo **tenga** futuro.* |\n" +
        "| **a** menos que | unless | — | *Iremos a la playa **a menos que haga** mal tiempo.* |\n\n" +
        "### Group 2: Time Conjunctions — Subjunctive ONLY When Future!\n\n" +
        "With **cuando** (when), **en cuanto** (as soon as), **tan pronto como** (just as soon as), **hasta que** (until), and **después de que** (after), test the **time frame**:\n\n" +
        "- **Habitual Present → Present Indicative**: *Cuando **llego** a casa todos los días, descanso media hora.*\n" +
        "- **Completed Past → Preterite Indicative**: *Ayer, en cuanto **terminé** mis deberes, cené.*\n" +
        "- **Pending Future → Present Subjunctive** (paired with a future, near-future, or imperative main verb!): *Cuando **termine** mis exámenes IGCSE, **viajaré** a España.* / *En cuanto **sea** mayor, **me independizaré**.*\n\n" +
        "### Bonus Grade-9 Nuance: *Aunque* ('Although' vs 'Even if')\n" +
        "- **Aunque + Indicative** = *although* (a known fact): *Aunque **llueve** hoy, salgo a correr.* ('Although it IS raining today, I'm going running.')\n" +
        "- **Aunque + Subjunctive** = *even if* (uncertain/hypothetical): *Aunque **llueva** mañana, saldré a correr.* ('Even if it rains tomorrow, I will go running.')",
      workedExamples: [
        {
          title: "Future 'Cuando' vs Habitual 'Cuando' & 'Para vs Para que'",
          problem:
            "Fill each gap accurately: (a) *Cuando _______ (ir, yo) a la universidad el año que viene, estudiaré informática.* (b) *Ahorro dinero para que mi hermano _______ (poder) comprar un portátil.*",
          steps: [
            "In (a), *el año que viene* and *estudiaré* show that going to university has NOT happened yet → future *cuando* requires the **present subjunctive** of *ir* (*yo*) = **vaya** (NEVER *iré* or *voy*!).",
            "In (b), **para que** introduces a new subject (*mi hermano*) and ALWAYS triggers the subjunctive → *poder* (*yo puedo → pued-* + *-a*) = **pueda**.",
          ],
          answer: "(a) vaya; (b) pueda",
          yourTurn: {
            question:
              "Complete with the **present subjunctive** of **terminar** (*yo*): En cuanto _______ mis exámenes en junio, iré a la playa. (Write ONLY the missing verb.)",
            answer: {
              type: "text",
              accept: ["termine", "yo termine"],
              display: "termine",
            },
            solution:
              "*En cuanto… en junio, iré…* points to a pending future action, so *terminar* (*yo*) takes the present subjunctive opposite ending *-e* → **termine**.",
          },
        },
      ],
      keyPoints: [
        "**NEVER** write the future tense (*tendré, iré, haré*) immediately after future **cuando / en cuanto / hasta que** — always use the **present subjunctive** (*cuando tenga, cuando vaya, cuando haga*).",
        "Keep the **indicative** after *cuando* for habitual routines (*cuando tengo tiempo, leo*) and completed past actions (*cuando llegué, comí*).",
        "**ESCAPA** conjunctions (**en caso de que, sin que, con tal de que, antes de que, para que, a menos que**) **always** trigger the subjunctive.",
        "Same subject = preposition + infinitive (*para aprobar*, *antes de salir*, *sin decir nada*); new subject = conjunction + *que* + subjunctive (*para que apruebes*).",
      ],
      whyItWorks:
        "A future event has not yet entered reality — you cannot point at 'turning 18 next year' as an accomplished fact — so Spanish marks its unfulfilled status with the subjunctive while letting the main clause carry the future tense (*iré*).",
      strategies: [
        "Spot the Future Main Verb ('iré / voy a ir') as your alarm bell for 'cuando + subjunctive'",
        "Use 'Cuando termine mis exámenes, …' in Paper 2 Q7 & Paper 3 to hit both Future AND Subjunctive in one breath",
      ],
      thinkDeeper:
        "Beware of question words vs time conjunctions! In *No sé **cuándo vendrá** el tren* ('I don't know **when** the train will come'), why has **cuándo** got a written accent AND a future indicative verb (*vendrá*)?",
    },
    {
      id: "si-clauses-and-imperfect-subj",
      heading: "Grade-9 'Si' Clauses: Si tuviera… haría…",
      discovery: {
        problem:
          "Inspect the 3rd person plural preterite of irregular verbs alongside their imperfect subjunctive:\n- *tener* → *ellos **tuvieron*** → *si yo **tuviera***\n- *hacer* → *ellos **hicieron*** → *si yo **hiciera***\n- *poder* → *ellos **pudieron*** → *si yo **pudiera***\n- *ser / ir* → *ellos **fueron*** → *si yo **fuera***\nWhat exact rule turns **every single verb in the Spanish language** (with zero exceptions!) from *ellos* preterite into the imperfect subjunctive?",
        idea:
          "Take the **ellos / ellas preterite**, slice off the final **-ron** (*tuvie-, hicie-, pudie-, fue-, habla-, comie-*), and add **-ra, -ras, -ra, -ramos, -rais, -ran** (or the equally valid **-se** endings, putting a written accent on the vowel right before *-ramos*!).",
      },
      body:
        "### Forming the Imperfect Subjunctive (Zero Exceptions!)\n\n" +
        "Every verb in Spanish — even *ser, ir, tener, hacer, haber, poder, saber, querer, decir* — obeys one 100% exception-free rule for the **imperfect subjunctive**:\n\n" +
        "**Step 1**: Take the **3rd person plural (*ellos*) preterite** (*hablaron, comieron, tuvieron, fueron, pudieron, hicieron, hubo → hubieron*).\n" +
        "**Step 2**: Drop **-ron** and add **-ra** endings (or **-se** endings — both are 100% accepted in Edexcel `4SP0`!):\n\n" +
        "| Infinitive | *Ellos* Preterite | Imperfect Subjunctive (*-ra* set) | Valid *-se* Twin | Watch the *Nosotros* Accent! |\n" +
        "|---|---|---|---|---|\n" +
        "| **hablar** | *hablaron* | *hablara, hablaras, hablara, habláramos, hablarais, hablaran* | *hablase…* | **habláramos** |\n" +
        "| **tener** | *tuvieron* | *tuviera, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran* | *tuviese…* | **tuviéramos** |\n" +
        "| **ser / ir** | *fueron* | *fuera, fueras, fuera, fuéramos, fuerais, fueran* | *fuese…* | **fuéramos** |\n" +
        "| **poder** | *pudieron* | *pudiera, pudieras, pudiera, pudiéramos, pudierais, pudieran* | *pudiese…* | **pudiéramos** |\n" +
        "| **hacer** | *hicieron* | *hiciera, hicieras, hiciera, hiciéramos, hicierais, hicieran* | *hiciese…* | **hiciéramos** |\n" +
        "| **haber** | *hubieron* | *hubiera* ('if there were': *si hubiera menos coches*) | *hubiese* | **hubiéramos** |\n\n" +
        "### The Two Golden 'Si' Clause Bridges (and Two Deadly Traps!)\n\n" +
        "1. **Type 1 — Likely / Real Condition**: **Si + Present Indicative → Future / Present / Imperative**\n" +
        "   - *Si **tengo** tiempo este fin de semana, **iré** al cine.* (NEVER write present subjunctive *si tenga* after *si*!)\n" +
        "2. **Type 2 — Hypothetical / Grade-9 Gold**: **Si + Imperfect Subjunctive → Conditional**\n" +
        "   - *Si **tuviera** más dinero, **viajaría** por Latinoamérica.*\n" +
        "   - *Si **fuera** el director de mi instituto, **quitaría** los deberes los viernes.*\n" +
        "   - *Si **hubiera** más carriles bici, menos gente **usaría** el coche.*\n" +
        "   - **DEADLY TRAP**: NEVER translate English *'If I would have / If I had'* as *si tendría*! Conditional (*-ía*) is banned right after conditional *si*.",
      diagram:
        '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Type 1 real si clauses and Type 2 hypothetical Grade-9 si clauses with imperfect subjunctive and conditional">' +
        '<rect x="6" y="6" width="628" height="203" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="29" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#0f172a">Two Si-Clause Bridges (and Why Present Subjunctive &amp; Conditional Never Follow Si!)</text>' +
        '<rect x="22" y="46" width="596" height="64" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.6"/>' +
        '<text x="40" y="68" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#1d4ed8">TYPE 1 (Real / Likely):   SI + Present Indicative   →   Simple Future / Imperative</text>' +
        '<text x="40" y="92" font-family="system-ui,sans-serif" font-size="12" fill="#1e293b">✅ Si tengo tiempo mañana, iré al polideportivo.        ❌ NEVER: Si tenga tiempo…</text>' +
        '<rect x="22" y="124" width="596" height="72" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>' +
        '<text x="40" y="146" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#047857">TYPE 2 (Grade-9 Hypothetical):   SI + Imperfect Subjunctive (-ra / -se)   →   Conditional (-ía)</text>' +
        '<text x="40" y="168" font-family="system-ui,sans-serif" font-size="12" fill="#064e3b">✅ Si tuviera / tuviese más dinero, viajaría a Perú.     ❌ NEVER: Si tendría dinero…</text>' +
        '<text x="40" y="186" font-family="system-ui,sans-serif" font-size="11" fill="#047857">Bonus: Si fuera el director, cambiaría el horario.  |  Si hubiera menos plástico, salvaríamos los océanos.</text>' +
        '</svg>',
      diagramCaption:
        "After conditional 'si', only Present Indicative (Type 1) or Imperfect Subjunctive (Type 2) is grammatical — never Present Subjunctive ('si tenga') and never Conditional ('si tendría').",
      workedExamples: [
        {
          title: "Building a Top-Band Paper 2 Question 7 'Si' Sentence",
          problem:
            "Complete this Grade-9 school-debate sentence: *Si yo _______ (ser) el director de mi colegio, _______ (permitir) el uso responsable del móvil.*",
          steps: [
            "Look at the *si* clause + hypothetical consequence ('If I were the headteacher, I would allow…') → this is a **Type 2 hypothetical** sentence.",
            "Clause 1 (*si* + imperfect subjunctive of *ser*): *ellos fueron* → drop *-ron* (*fue-*) + *-ra* (or *-se*) = **fuera** (or **fuese**).",
            "Clause 2 (conditional of *permitir*, *yo*): full infinitive *permitir* + *-ía* = **permitiría**.",
          ],
          answer: "fuera (or fuese) … permitiría",
          yourTurn: {
            question:
              "Complete the hypothetical *si* clause with the **imperfect subjunctive** of **tener** (*yo*): Si _______ más tiempo libre, aprendería a tocar la guitarra. (Write ONLY the missing verb.)",
            answer: {
              type: "text",
              accept: ["tuviera", "tuviese", "yo tuviera", "yo tuviese"],
              display: "tuviera",
            },
            solution:
              "Take *ellos tuvieron* → drop *-ron* (*tuvie-*) → add *-ra* (or *-se*) for *yo* = **tuviera** (or **tuviese**).",
          },
        },
      ],
      keyPoints: [
        "Form the imperfect subjunctive of **any** verb from *ellos* preterite minus **-ron** + **-ra, -ras, -ra, -ramos, -rais, -ran** (or **-se…**), with an accent before *-ramos* (*tuviéramos, fuéramos*).",
        "**Type 2 Grade-9 Formula**: **Si + Imperfect Subjunctive, + Conditional** (*Si pudiera, viviría cerca del mar*).",
        "**NEVER** write the conditional right after *si* (*❌ si tendría / ❌ si sería*) and **NEVER** write the present subjunctive after conditional *si* (*❌ si tenga*).",
        "**Como si** ('as if') and wistful **¡Ojalá…!** also take the imperfect subjunctive (*Habla como si **fuera** experto*; *¡Ojalá **pudiera** ir!*).",
      ],
      whyItWorks:
        "In Type 2 conditionals, the *si* clause steps outside reality into an imagined world (imperfect subjunctive *tuviera*), and the main clause computes what *would* follow from that premise (conditional *viajaría*).",
      strategies: [
        "Memorise the Big 5 'Si' Starters: Si tuviera, Si fuera, Si pudiera, Si hiciera, Si hubiera",
        "Check both halves of every 'si' sentence: '-ra/-se' on the 'si' side, '-ía' on the consequence side",
      ],
      thinkDeeper:
        "Wait — can *si* EVER be followed by a conditional in Spanish? Compare *Si **tuviera** tiempo, iría* ('If I had time…') with *No sé **si iría** sola* ('I don't know **whether** I would go alone'). Why does *si* meaning **whether** allow *iría* when conditional *if* bans it?",
    },
    {
      id: "pronouns-por-para-ser-estar",
      heading: "Precision Mark-Savers: Por vs Para, Ser vs Estar & Object Pronouns",
      discovery: {
        problem:
          "Three sentences frequently cost strong IGCSE candidates accuracy marks:\n1. ❌ *Gracias **para** tu regalo.*\n2. ❌ *Ayer compré las entradas y **le las** di a mi hermana.*\n3. ❌ *Busco **para** mis llaves.*\nCan you spot and explain the exact precision rule broken in each one?",
        idea:
          "(1) **Por** expresses the **cause/exchange** looking backward (*gracias **por** tu regalo*); **para** points forward to a goal/recipient (*este regalo es **para** ti*). (2) Indirect **le / les** automatically mutates into **se** before **lo / la / los / las** → **se las di**. (3) **Buscar** ALREADY means 'to look **for**' (just like *pedir* = 'ask for' and *esperar* = 'wait for'), so adding *para/por* is a literal-translation trap → **Busco mis llaves**!",
      },
      body:
        "### 1. *Por* (Backward Cause / Through / Exchange) vs *Para* (Forward Target / Purpose)\n\n" +
        "Think of **para** as a straight arrow pointing at a **forward target** (goal, recipient, destination, deadline) and **por** as the **cause, tunnel, duration, means, or swap** behind the action:\n\n" +
        "| Use **PARA** (Forward Target 🎯) | Use **POR** (Cause, Means & Exchange 🔄) |\n" +
        "|---|---|\n" +
        "| **Purpose ('in order to')**: *Estudio **para** sacar un nueve.* | **Cause / Reason / 'Thank you for'**: *Gracias **por** tu ayuda; cancelado **por** la lluvia.* |\n" +
        "| **Recipient**: *Compré flores **para** mi abuela.* | **Exchange / Money**: *Pagué veinte euros **por** la camiseta.* |\n" +
        "| **Destination**: *El tren sale **para** Sevilla.* | **Through / Along / Area**: *Paseamos **por** el casco antiguo.* |\n" +
        "| **Deadline**: *El ensayo es **para** el viernes.* | **Duration / Time of day**: *Estudié **por** dos horas / **por** la mañana.* |\n" +
        "| **Personal opinion**: ***Para** mí, el deporte es vital.* | **Means / Idioms**: ***por** avión, **por** correo, **por** desgracia, **por** ejemplo, **por** fin.* |\n\n" +
        "- **Zero-preposition verbs** (NEVER add *por/para*!): **buscar** (*busco trabajo* = I look for a job), **pedir** (*pido ayuda* = I ask for help), **esperar** (*espero el autobús* = I wait for the bus), **pagar** + item (*pago la cuenta* = I pay for the bill).\n\n" +
        "### 2. High-Frequency Confusable Verb Pairs\n\n" +
        "- **Ser (DOCTOR)** vs **Estar (PLACE)**:\n" +
        "  - **Ser**: **D**escription, **O**ccupation (*soy estudiante*), **C**haracteristic (*el pescado es sano*), **T**ime/date, **O**rigin/material, **R**elationship — **PLUS the location of EVENTS** (*El concierto **es** en el estadio*!).\n" +
        "  - **Estar**: **P**osition, **L**ocation of people/objects (*Madrid **está** en el centro*), **A**ction (*estoy estudiando*), **C**ondition (*la sopa **está** fría*), **E**motion (*estoy cansada*).\n" +
        "- **Saber** vs **Conocer**: **saber** = facts, information, or **saber + infinitive** for 'how to' (*sé nadar* — NEVER *sé cómo nadar*!); **conocer** = familiarity with places or people (with **personal a**: *conozco **a** tu primo*, *conozco Barcelona*).\n" +
        "- **Pedir** vs **Preguntar**: **pedir** = request/order a thing (*pedir la cuenta, pedir perdón*); **preguntar** = ask a question (*preguntar la hora, preguntar si…*).\n\n" +
        "### 3. Direct & Indirect Object Pronouns (`ID` Order & `Se lo`)\n\n" +
        "- **Direct Object Pronouns** (answer *whom?* / *what?*): *me, te, **lo / la**, nos, os, **los / las***.\n" +
        "- **Indirect Object Pronouns** (answer *to/for whom?*): *me, te, **le**, nos, os, **les***.\n" +
        "- **ID Order**: When used together, **Indirect comes BEFORE Direct** (*Me lo explicó* = He explained it to me).\n" +
        "- **The `Le lo → Se lo` Rule**: Two *l-* pronouns can NEVER sit side by side! **le** and **les** ALWAYS turn into **se** before *lo, la, los, las*: *Le di el libro → **Se lo** di*; *Les envié las fotos → **Se las** envié*.\n" +
        "- **Placement**: Put pronouns **before** a conjugated verb or negative command (*Se lo digo*, *¡No me lo digas!*), OR **attach** them to an infinitive, gerund, or affirmative command (adding an accent to preserve stress: *Voy a comprárselo*, *¡Dámelo!*).",
      diagram:
        '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual contrast of Por for cause, passage, duration and exchange versus Para for goal, recipient, destination and deadline, plus Se lo pronoun rule">' +
        '<rect x="6" y="6" width="628" height="218" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="29" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#0f172a">Por (Cause / Passage / Swap) vs Para (Destination / Goal / Recipient)</text>' +
        '<rect x="22" y="44" width="286" height="114" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.8"/>' +
        '<text x="165" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#b45309">POR — Through, Cause &amp; Exchange</text>' +
        '<circle cx="92" cy="100" r="20" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="4 3"/>' +
        '<line x1="48" y1="100" x2="132" y2="100" stroke="#d97706" stroke-width="2.5"/>' +
        '<polygon points="132,95 142,100 132,105" fill="#d97706"/>' +
        '<text x="155" y="93" font-family="system-ui,sans-serif" font-size="11" fill="#1e293b">• Gracias por tu ayuda</text>' +
        '<text x="155" y="111" font-family="system-ui,sans-serif" font-size="11" fill="#1e293b">• Pagué 15 € por el libro</text>' +
        '<text x="42" y="143" font-family="system-ui,sans-serif" font-size="11" fill="#92400e">• Paseamos por el parque  • Por desgracia</text>' +
        '<rect x="332" y="44" width="286" height="114" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="1.8"/>' +
        '<text x="475" y="65" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#047857">PARA — Target, Goal &amp; Deadline</text>' +
        '<line x1="352" y1="100" x2="416" y2="100" stroke="#059669" stroke-width="2.5"/>' +
        '<polygon points="416,95 426,100 416,105" fill="#059669"/>' +
        '<circle cx="438" cy="100" r="14" fill="none" stroke="#059669" stroke-width="2"/>' +
        '<circle cx="438" cy="100" r="5" fill="#059669"/>' +
        '<text x="462" y="93" font-family="system-ui,sans-serif" font-size="11" fill="#1e293b">• Para sacar buenas notas</text>' +
        '<text x="462" y="111" font-family="system-ui,sans-serif" font-size="11" fill="#1e293b">• Es para mi hermana</text>' +
        '<text x="352" y="143" font-family="system-ui,sans-serif" font-size="11" fill="#065f46">• Salimos para Madrid  • Es para mañana</text>' +
        '<rect x="22" y="170" width="596" height="42" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>' +
        '<text x="320" y="196" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#1e40af">Double Pronoun Rule (ID Order):   le / les + lo / la / los / las   →   SE LO / SE LA / SE LOS / SE LAS   (never "le lo"!)</text>' +
        '</svg>',
      diagramCaption:
        "Por looks at the tunnel, cause, duration or exchange; Para aims straight at the goal, recipient, destination or deadline — and 'le/les' always flips to 'se' before 'lo/la/los/las'.",
      workedExamples: [
        {
          title: "Double Object Pronouns & Por vs Para Precision",
          problem:
            "(a) Rewrite *Compré la revista para mi madre y di la revista a mi madre* replacing BOTH nouns in the second half with pronouns: *…y _______ _______ di.* (b) Choose **por** or **para**: *Estudio español _______ trabajar en Madrid, y gracias _______ tus consejos.*",
          steps: [
            "In (a), *a mi madre* = indirect object (*le*), and *la revista* = feminine singular direct object (*la*). Put Indirect before Direct (*le + la*), then apply the **le → se** rule before *la* → **se la** (*…y se la di*).",
            "In (b), *trabajar en Madrid* is an 'in order to' purpose → **para**; *gracias ___ tus consejos* expresses gratitude for a cause/exchange → **por**.",
          ],
          answer: "(a) se la; (b) para … por",
          yourTurn: {
            question:
              "Replace *el regalo* and *a mis abuelos* with two object pronouns before the verb: Ayer compré el regalo y _______ _______ di. (Write ONLY the two Spanish pronouns.)",
            answer: {
              type: "text",
              accept: ["se lo"],
              display: "se lo",
            },
            solution:
              "*A mis abuelos* (*les*) + *el regalo* (masc. sg. *lo*) → *les* becomes **se** before *lo* = **se lo** (*se lo di*).",
          },
        },
      ],
      keyPoints: [
        "**Para** = purpose (*para + inf*), recipient, destination, deadline, opinion (*para mí*); **por** = cause (*gracias por, por la lluvia*), exchange/money, duration, movement through, and fixed idioms (*por desgracia, por ejemplo, por fin*).",
        "**Buscar** (look for), **pedir** (ask for), and **esperar** (wait for) take **NO preposition** (*busco mi móvil* — never *busco para/por mi móvil*!).",
        "**Saber** = facts or *saber + infinitive* ('know how to': *sé cocinar*); **conocer** = people (with personal *a*) & places (*conozco a Elena, conozco Sevilla*).",
        "Double pronouns follow **ID order** (Indirect + Direct), and **le / les → se** before **lo / la / los / las** (*se lo di, se las envié*).",
      ],
      whyItWorks:
        "Mastering these four micro-contrasts (*por/para*, *ser/estar*, *saber/conocer*, *se lo*) eliminates the exact interference slips from English that hold otherwise fluent scripts back from full accuracy marks.",
      strategies: [
        "Test 'in order to' — if English can say 'in order to + verb', Spanish MUST be 'para + infinitive'",
        "Run the Double-L Alarm: if two pronouns both start with L ('le lo / les la'), flip the first one to 'se'",
      ],
      thinkDeeper:
        "Compare *La manzana **es** verde* with *La manzana **está** verde*. Both are 100% grammatical Spanish, yet they mean completely different things! What is the difference between a Granny Smith trait (*ser*) and an unripe condition (*estar*)?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "3-step rule for forming the Present Subjunctive",
        back: "1. Take present indicative **yo** (*tengo, conozco, pido*) → 2. Drop **-o** → 3. Add opposite vowel endings (**-ar → -e, -es, -e, -emos, -éis, -en**; **-er/-ir → -a, -as, -a, -amos, -áis, -an**).",
      },
      {
        front: "What are the 6 **DISHES** irregular present subjunctive verbs?",
        back: "**D**ar → *dé* · **I**r → *vaya* · **S**er → *sea* · **H**aber → *haya* · **E**star → *esté* · **S**aber → *sepa*.",
      },
      {
        front: "Subjunctive spelling shifts for **-car**, **-gar**, **-zar** verbs",
        back: "**-car → -qu** (*busque*), **-gar → -gu** (*llegue*), **-zar → -c** (*empiece*) across **all six persons**.",
      },
      {
        front: "*Creo que…* vs *No creo que…* — which takes the subjunctive?",
        back: "Affirmative **creo que / pienso que** takes **indicative** (*creo que es verdad*); negated **no creo que / no pienso que** takes **subjunctive** (*no creo que sea verdad*).",
      },
      {
        front: "When do you use the infinitive instead of *que + subjunctive* after *quiero / espero / es importante*?",
        back: "When there is **no change of subject** (or a general impersonal rule): *Quiero viajar* / *Es importante reciclar* vs *Quiero que viajes*.",
      },
      {
        front: "How do you say 'When I turn 18, I will go to university' in Spanish?",
        back: "**Cuando tenga dieciocho años, iré a la universidad.** (Future *cuando* ALWAYS takes present subjunctive, NEVER future *tendré*!)",
      },
      {
        front: "What are the 6 **ESCAPA** conjunctions that ALWAYS trigger the subjunctive?",
        back: "**e**n caso de que · **s**in que · **c**on tal de que · **a**ntes de que · **p**ara que · **a** menos que.",
      },
      {
        front: "Difference between *aunque llueve* and *aunque llueva*",
        back: "**Aunque llueve** (indicative) = 'although it IS raining' (known fact); **aunque llueva** (subjunctive) = 'even if it rains' (hypothetical).",
      },
      {
        front: "How do you form the Imperfect Subjunctive of ANY Spanish verb?",
        back: "Take **ellos preterite** (*tuvieron, fueron, pudieron, hablaron*), drop **-ron**, and add **-ra, -ras, -ra, -ramos, -rais, -ran** (or **-se…**, with an accent before *-ramos*: *tuviéramos*).",
      },
      {
        front: "Grade-9 Type 2 'Si' Clause formula",
        back: "**Si + Imperfect Subjunctive (-ra / -se), + Conditional (-ía)**: *Si tuviera más dinero, viajaría por Sudamérica.* (NEVER *si tendría*!)",
      },
      {
        front: "Type 1 Real 'Si' Clause formula",
        back: "**Si + Present Indicative, + Future / Present / Imperative**: *Si tengo tiempo, iré al cine.* (NEVER present subjunctive *si tenga*!)",
      },
      {
        front: "Core contrast: **por** vs **para**",
        back: "**Para** = goal/in order to, recipient, destination, deadline, *para mí*; **Por** = cause (*gracias por*), price/exchange, duration, through, means, *por desgracia / por ejemplo*.",
      },
      {
        front: "How do you say 'Thank you for your help' and 'I'm looking for my phone'?",
        back: "**Gracias por tu ayuda** (NEVER *gracias para*) and **Busco mi móvil** (NEVER *busco para/por mi móvil* — *buscar* includes 'for'!).",
      },
      {
        front: "Why does *Le lo di* become **Se lo di**?",
        back: "Indirect object pronouns **le / les** always turn into **se** immediately before direct object pronouns **lo / la / los / las**.",
      },
      {
        front: "Contrast **saber** vs **conocer**",
        back: "**Saber** = facts or *saber + infinitive* ('know how to': *sé nadar*); **Conocer** = people (with personal *a*: *conozco a Luis*) and places (*conozco Madrid*).",
      },
      {
        front: "Contrast **pedir** vs **preguntar**",
        back: "**Pedir** = ask for / order an item (*pedir el menú*); **Preguntar** = ask a question (*preguntar dónde está la estación*).",
      },
    ],
    mustKnow: [
      "Can you conjugate any regular, *yo-go* (*tenga, haga, salga, diga, venga*), *-zco* (*conozca*), or *-car/-gar/-zar* (*busque, llegue, empiece*) verb in the present subjunctive?",
      "Can you recall all 6 **DISHES** present subjunctives (**dé, vaya, sea, haya, esté, sepa**) with accurate accents on **dé** and **esté**?",
      "Can you switch cleanly between **creo que es** (indicative certainty) and **no creo que sea** (subjunctive doubt)?",
      "Can you write a future time clause with **cuando / en cuanto + present subjunctive** + simple future (*Cuando termine mis exámenes, iré…*)?",
      "Can you deploy **para que**, **antes de que**, **sin que**, and **a menos que** with the subjunctive whenever the subject changes?",
      "Can you build a flawless **Si + imperfect subjunctive + conditional** sentence (*Si fuera el director, cambiaría…*) without ever writing *si tendría*?",
      "Can you choose **por** vs **para** accurately across purpose, cause, deadline, exchange, duration, and fixed idioms?",
      "Can you combine indirect + direct object pronouns in **ID order** and convert *le/les + lo/la/los/las* to **se lo / se la / se los / se las**?",
      "Can you avoid the zero-preposition traps on **buscar**, **pedir**, and **esperar**, and distinguish **saber + inf** from **conocer (a)**?",
    ],
    misconceptions: [
      {
        wrong: "*Cuando tendré 18 años, iré a la universidad.*",
        right:
          "*Cuando tenga 18 años, iré a la universidad.* — NEVER put the future tense directly after future *cuando / en cuanto*; use the **present subjunctive** (*tenga*) in the time clause and keep the future (*iré*) in the main clause!",
      },
      {
        wrong: "*Si tendría más dinero, viajaría por todo el mundo.*",
        right:
          "*Si tuviera (or tuviese) más dinero, viajaría por todo el mundo.* — NEVER put the conditional (*-ía*) right after conditional *si*; pair **si + imperfect subjunctive** with the conditional!",
      },
      {
        wrong: "*Creo que sea verdad.* / *No creo que es verdad.*",
        right:
          "*Creo que es verdad.* / *No creo que sea verdad.* — Affirmative *creo que / pienso que* declares belief (**indicative**); negated *no creo que / no pienso que* introduces doubt (**subjunctive**)!",
      },
      {
        wrong: "*Gracias para tu ayuda.*",
        right:
          "*Gracias por tu ayuda.* — Gratitude looks back at the **cause / exchange**, so Spanish ALWAYS says *gracias **por*** (never *gracias para*)!",
      },
      {
        wrong: "*Compré el regalo y le lo di a mi hermano.*",
        right:
          "*Compré el regalo y se lo di a mi hermano.* — *le* and *les* ALWAYS flip to **se** before *lo, la, los, las*!",
      },
      {
        wrong: "*Busco para mi móvil.* / *Espero por el tren.*",
        right:
          "*Busco mi móvil.* / *Espero el tren.* — *buscar* ('to look for'), *esperar* ('to wait for'), and *pedir* ('to ask for') already contain 'for' inside the verb!",
      },
      {
        wrong: "*Sé cómo nadar muy bien.*",
        right:
          "*Sé nadar muy bien.* — Express 'know how to + verb' with **saber + infinitive** directly (drop *cómo*)!",
      },
      {
        wrong: "*Si tenga tiempo mañana, te llamaré.*",
        right:
          "*Si tengo tiempo mañana, te llamaré.* — Conditional *si* NEVER takes the present subjunctive! Use **present indicative** for likely Type 1 conditions or **imperfect subjunctive** for hypothetical Type 2.",
      },
    ],
    examMistakes: [
      "**Paper 2 Question 3c (Grammar Gap-Fill)**: Seeing *No pienso que los exámenes ___ (ser) fáciles* and writing *son* instead of **sean** — check BOTH negation (*no pienso*) AND plural subject agreement (*los exámenes → sean*)!",
      "**Paper 2 Question 3c Accent Marks**: Writing *de* or *este* without accents when the prompt requires the present subjunctive of *dar* (**dé**) or *estar* (**esté**) — in auto-marked & Edexcel grammar items, missing accents change the word entirely.",
      "**Paper 2 Question 6 (60–75w) & Question 7 (130–150w)**: Forgetting to change the subject after *quiero que / para que* (*Quiero que voy* ❌ instead of *Quiero ir* ✅ for same subject, or *Mis padres quieren que vaya* ✅ for different subjects).",
      "**Paper 2 Question 7 Top-Band Checklist**: Writing 140 accurate words using only *pero*, *porque*, and indicative tenses — swap one *porque* for **dado que**, one *pero* for **sin embargo**, add **Es imprescindible que + subjunctive**, and finish with **Si pudiera…, + conditional** to lock in top-band Linguistic Knowledge!",
      "**Paper 1 Listening Inference**: Hearing *No creo que vayamos al concierto* or *Iremos a menos que llueva* and ticking 'They are definitely going' — listen carefully for negative opinion triggers (*no creo, dudo*) and *a menos que* ('unless')!",
      "**Paper 3 Speaking Spontaneous Follow-Ups**: When the examiner asks a hypothetical or future question (*¿Qué harías si ganaras mucho dinero?* / *¿Qué harás cuando termines el colegio?*), echo their exact grammar frame back: *Si ganara mucho dinero, compraría…* / *Cuando termine el colegio, estudiaré…*.",
    ],
    mnemonics: [
      {
        topic: "Subjunctive Clauses",
        device: "W · E · I · R · D · O",
        explanation:
          "**W**ishes (*quiero que*), **E**motions (*me alegra que*), **I**mpersonal judgments (*es imprescindible que*), **R**ecommendations (*recomiendo que*), **D**oubt/Denial (*dudo que, no creo que*), **O**jalá.",
      },
      {
        topic: "6 Irregular Present Subjunctives",
        device: "D · I · S · H · E · S",
        explanation:
          "**D**ar (*dé*), **I**r (*vaya*), **S**er (*sea*), **H**aber (*haya*), **E**star (*esté*), **S**aber (*sepa*) — the 6 verbs whose present *yo* does not end in *-o*.",
      },
      {
        topic: "Always-Subjunctive Conjunctions",
        device: "E · S · C · A · P · A",
        explanation:
          "**E**n caso de que, **S**in que, **C**on tal de que, **A**ntes de que, **P**ara que, **A** menos que — 100% subjunctive every time!",
      },
      {
        topic: "Ser vs Estar & Double Pronouns",
        device: "DOCTOR vs PLACE  &  ID → SE LO",
        explanation:
          "**Ser** = Description, Occupation, Characteristic, Time, Origin, Relationship (+ event location); **Estar** = Position, Location, Action, Condition, Emotion. Pronouns go **I**ndirect then **D**irect, and *le/les → se* before *lo/la/los/las*.",
      },
    ],
    realWorld: [
      {
        title: "¡Que tengas un buen viaje! — Everyday Wishes in Spain & Latin America",
        detail:
          "Whenever someone sneezes (*¡Que te mejores!*), boards a train (*¡Que tengas buen viaje!*), or sits down to eat (*¡Que aproveche!*), Spanish drops the opening *[Espero] que…* and uses a standalone present subjunctive!",
        emoji: "🚄",
      },
      {
        title: "From Arabic 'Inshallah' to Spanish '¡Ojalá!'",
        detail:
          "Walk through Seville, Granada, or Mexico City and you'll hear *¡Ojalá no llueva!* or *¡Ojalá gane nuestro equipo!* dozens of times a day — a living linguistic bridge from medieval Al-Andalus into modern Spanish.",
        emoji: "🕌",
      },
      {
        title: "-ra vs -se Across the Hispanosphere",
        detail:
          "In everyday conversation from Madrid to Bogotá and Buenos Aires, *-ra* (*si tuviera, si fuera*) appears roughly 85–90% of the time, while *-se* (*si tuviese, si fuese*) lends a crisp literary polish in Spanish journalism and novels.",
        emoji: "📰",
      },
      {
        title: "Tapas Bar Commands & Clitic Pronouns",
        detail:
          "Order *una ración de patatas bravas* in Madrid and you'll hear rapid attached double pronouns with crisp stress accents: *¡Tráigamela, por favor!* ('Bring it to me, please!') and *¡Pásamelo!* ('Pass it to me!').",
        emoji: "🥘",
      },
    ],
    videos: [
      {
        title: "Present Subjunctive in Spanish — Yo-Go, Stem Changes & DISHES",
        channel: "Butterfly Spanish",
        url: "https://www.youtube.com/results?search_query=butterfly+spanish+present+subjunctive+weirdo+dishes",
      },
      {
        title: "IGCSE & GCSE Spanish Grade 9 Structures — Si Clauses & Cuando + Subjunctive",
        channel: "Spanish with Vicente / IGCSE Spanish",
        url: "https://www.youtube.com/results?search_query=igcse+spanish+grade+9+structures+subjunctive+si+tuviera",
      },
      {
        title: "Por vs Para & Double Object Pronouns (Se lo) Masterclass",
        channel: "Why Not Spanish?",
        url: "https://www.youtube.com/results?search_query=spanish+por+vs+para+and+double+object+pronouns+se+lo",
      },
    ],
    formulas: [
      {
        name: "Present Subjunctive Recipe",
        formula: "Present **yo** − *-o* + Opposite Ending (**-ar → -e**; **-er/-ir → -a**)",
        note: "Plus -car→-qu, -gar→-gu, -zar→-c and DISHES (dé, vaya, sea, haya, esté, sepa).",
      },
      {
        name: "WEIRDO Subject-Change Frame",
        formula: "[WEIRDO Trigger] + **que** + [New Subject] + **Present Subjunctive**",
        note: "Same subject → drop 'que' and use Infinitive (Quiero ir vs Quiero que vayas).",
      },
      {
        name: "Certainty vs Doubt Switch",
        formula: "**Creo que** + Indicative (*es*)  ↔  **No creo que / Dudo que** + Subjunctive (*sea*)",
        note: "Also Indicative after 'pienso que', 'es verdad que', 'es evidente que'.",
      },
      {
        name: "Future Time Clause Frame",
        formula: "**Cuando / En cuanto** + **Present Subjunctive**, + **Simple Future**",
        note: "Cuando tenga 18 años, iré a la universidad (NEVER 'cuando tendré'!).",
      },
      {
        name: "Imperfect Subjunctive Generator",
        formula: "**Ellos Preterite** − *-ron* + **-ra, -ras, -ra, -ramos, -rais, -ran** (or **-se**)",
        note: "Zero exceptions! tuvieron → tuviera; fueron → fuera; pudieron → pudiera.",
      },
      {
        name: "Grade-9 Type 2 'Si' Clause",
        formula: "**Si** + **Imperfect Subjunctive** (*tuviera / fuera*), + **Conditional** (*haría*)",
        note: "NEVER conditional right after 'si' ('si tendría' is always wrong).",
      },
      {
        name: "Double Object Pronoun Mutation",
        formula: "**Indirect** + **Direct** → *le / les* + *lo / la / los / las* = **se lo / se la / se los / se las**",
        note: "Before finite verb (Se lo di) or attached with accent (¡Dámelo! / Voy a dárselo).",
      },
    ],
  },
};
