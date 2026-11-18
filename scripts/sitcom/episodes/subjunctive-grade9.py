# "¡Rumbo al Nueve!" S01E07 "Ojalá Aprobemos" (Topic: subjunctive-grade9) — SEASON FINALE
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(
    topic="subjunctive-grade9",
    logline="Exam eve! Lola opens the Grade-Nine Vault: forming the Present Subjunctive, WEIRDO triggers, future 'cuando', 'si + imperfect subjunctive + conditional', 'por' vs 'para', and 'se lo' double pronouns."
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 280), ("vani", 600), ("pablo", 920)])
L("dad", "My big exam-eve speech for Vani! Cuando tendrás dieciocho años, si tendrías mucho dinero, gracias para recordar a tu padre!", mood="excited", shot="close", prop="guitar")
sfx("buzzer")
poof("lola", 1100)
L("lola", "That sentence broke three laws of Spanish physics! Never put future tense after future [[cuando]]! Never put conditional right after [[si]]! And thank you FOR is [[gracias por]], never para!", mood="annoyed", shot="close",
  boardClear=True, board="NO future after [[cuando]] · NO cond. after [[si]]")
L("vani", "Watch the Grade Nine upgrade, Dad: [[Cuando tengas dieciocho años, si tuvieras mucho dinero, ¡gracias por acordarte de tu padre!]]", mood="smug", shot="close",
  board="[[Cuando tengas · Si tuvieras · Gracias por]]")
freeze("WELCOME TO GRADE NINE!", 2.4, narrator="Narrator: Unlock these structures, and the examiner starts smiling.")

title()

# ---------------- ACT 1: FORMING THE PRESENT SUBJUNCTIVE & WEIRDO ----------------
scene("classroom", [("teacher", 250), ("vani", 580), ("lola", 920)], caption="ACT ONE · The Subjunctive Machine")
L("teacher", "How do we build the Present Subjunctive? Three steps: take the [[yo]] present form, drop the O, and swap the ending vowel! A R verbs take E; E R and I R verbs take A!", mood="teach", shot="close",
  boardClear=True, board="yo form → drop -o → swap vowel!",
  diagram='<svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="490" height="155" rx="14" fill="#0f172a" stroke="#facc15" stroke-width="2"/><text x="260" y="42" fill="#fde047" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">YO-GO TO SUBJUNCTIVE MACHINE</text><text x="145" y="84" fill="#38bdf8" font-family="sans-serif" font-size="15" text-anchor="middle">tengo → tenga, tengas</text><text x="145" y="112" fill="#38bdf8" font-family="sans-serif" font-size="15" text-anchor="middle">hago → haga · digo → diga</text><text x="385" y="84" fill="#4ade80" font-family="sans-serif" font-size="15" text-anchor="middle">DISHES Irregulars:</text><text x="385" y="112" fill="#4ade80" font-family="sans-serif" font-size="15" text-anchor="middle">dé, vaya, sea, haya, esté, sepa</text><text x="260" y="150" fill="#f472b6" font-family="sans-serif" font-size="14" text-anchor="middle">Creo que ES verdad (Indicative) vs No creo que SEA verdad (Subj.)</text></svg>')
L("vani", "Because we start from [[yo]], all [[yo]] irregulars carry straight over: [[tener, tenga; hacer, haga; decir, diga; salir, salga; poner, ponga; venir, venga; conocer, conozca]].", mood="excited", shot="close",
  board="[[tenga · haga · diga · salga · conozca]]")
L("lola", "Plus the six DISHES irregulars: [[dar, dé; ir, vaya; ser, sea; haber, haya; estar, esté; saber, sepa]]. Now when do we fire it? Remember WEIRDO!", mood="teach", shot="close",
  board="DISHES: [[dé · vaya · sea · haya · esté · sepa]]")
L("teacher", "Wishes, Emotions, Impersonal expressions, Recommendations, Doubt, and [[Ojalá]] — whenever there is a trigger plus [[que]] and a change of subject!", mood="happy", shot="close",
  boardClear=True, board="[[Es imprescindible que + subjunctive]]")
L("vani", "[[Es imprescindible que reciclemos. Mis padres quieren que estudie medicina. ¡Ojalá saquemos un nueve!]]", mood="excited", shot="close",
  board="[[¡Ojalá saquemos un nueve!]]")

# ---------------- ACT 2: FUTURE CUANDO & HYPOTHETICAL SI CLAUSES ----------------
card("CUANDO & SI CLAUSES", "Two structures that scream Grade Nine!", 2.4)
scene("living", [("pablo", 260), ("vani", 580), ("mum", 900)], caption="ACT TWO · Future Cuando & Hypothetical Si")
L("pablo", "Rule one: after [[cuando]], [[en cuanto]], [[tan pronto como]], [[antes de que]], or [[para que]] referring to a FUTURE action, Spanish requires the Present Subjunctive!", mood="teach", shot="close",
  boardClear=True, board="Future [[cuando / en cuanto]] + Subjunctive!")
L("vani", "Compare! Habitual present takes indicative: [[Cuando tengo tiempo, leo]]. Future plan takes subjunctive: [[Cuando tenga tiempo mañana, leeré una novela]]!", mood="determined", shot="close",
  board="[[Cuando termine mis exámenes, viajaré]]")
L("mum", "And remember [[para que]] and [[antes de que]] ALWAYS trigger the subjunctive: [[Te explico la regla para que la entiendas]].", mood="teach", shot="close",
  board="[[para que / antes de que]] → ALWAYS Subj.!")
L("mum", "Rule two: the hypothetical [[si]] clause! Combine [[si]] plus Imperfect Subjunctive with the Conditional!", mood="teach", shot="close",
  boardClear=True, board="[[Si tuviera / Si fuera / Si pudiera + -ía]]")
L("pablo", "[[Si tuviera más dinero, viajaría por todo el mundo. Si fuera el director, cambiaría el horario. Si pudiera elegir, viviría junto al mar.]]", mood="excited", shot="close",
  board="Golden 3: [[si pudiera · si tuviera · si fuera]]")

# ---------------- ACT 3: POR VS PARA & DOUBLE OBJECT PRONOUNS ----------------
scene("kitchen", [("mum", 260), ("dad", 580), ("vani", 900)], caption="ACT THREE · Por vs Para & Se Lo")
L("vani", "Quick [[por]] versus [[para]] check! [[Para]] is destination, recipient, deadline and purpose: [[Este regalo es para ti. Estudio para aprobar. Salimos para Madrid.]]", mood="teach", shot="close",
  boardClear=True, board="[[PARA]] = goal, recipient, deadline, purpose")
L("mum", "[[Por]] is cause, duration, exchange, means of communication, and thank you! [[Gracias por tu ayuda. Pagué veinte euros por la camiseta. Hablamos por teléfono.]]", mood="teach", shot="close",
  board="[[POR]] = cause, price, duration, [[gracias por]]")
L("vani", "And double object pronouns! When [[le]] or [[les]] meets [[lo]], [[la]], [[los]], or [[las]], [[le]] transforms into [[se]] so you don't stutter L L! [[Mi madre compró el libro y se lo dio a Pablo.]]", mood="excited", shot="close", prop="book",
  board="[[le + lo]] → [[se lo di]] (never le lo!)")

# ---------------- EXAMINER GRADE-9 TRAP ----------------
card("EXAMINER GRADE-9 TRAP", "'Creo que' vs 'No creo que' — the affirmative trap!", 2.8)
scene("classroom", [("teacher", 250), ("dad", 560), ("vani", 860), ("lola", 1080)], caption="FINAL EXAM CLINIC")
L("teacher", "Watch out! Ambitious students learn the subjunctive and then put it everywhere — writing Creo que el transporte público sea caro!", mood="worried", shot="close",
  boardClear=True, board="Trap: affirmative [[creo que]] + sea ❌")
L("lola", "Affirmative certainty declares a fact, so it stays INDICATIVE: [[Creo que es caro]], [[pienso que es importante]], [[es evidente que tenemos un problema]]!", mood="teach", shot="close",
  board="[[Creo que ES]] · [[No creo que SEA]] ✔")
L("vani", "Flip it negative to introduce doubt, and THEN the subjunctive fires: [[No creo que sea justo]], [[no pienso que baste]], [[dudo que haya suficiente tiempo]]!", mood="determined", shot="close",
  board="Negated doubt → [[No creo que sea justo]]")
L("dad", "Wait — let me put the whole season together! [[Aunque creo que el español es exigente, cuando haga mi examen usaré tres tiempos verbales, y si tuviera una duda, escucharía a Lola. ¡Gracias por todo!]]", mood="determined", shot="close")
sfx("flamenco")
L("teacher", "Indicative after [[creo que]], subjunctive after future [[cuando]], [[si tuviera]] plus conditional, AND [[gracias por]]! Vikram, that is a Grade Nine!", mood="excited", shot="close")
L("lola", "I promised not to cry. It's just chalk dust in my beak. [[¡Mucha suerte, Vani! ¡Rumbo al nueve!]]", mood="happy", shot="wide", gap=0.6)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Final Boss Challenge — three Grade-Nine winners!", 2.8)
challenge(
    1,
    "Future time clause: “Cuando ___ (terminar, yo), viajaré.”",
    "[[Cuando termine, viajaré]]",
    "Future [[cuando]] + Present Subjunctive [[termine]]",
    "Question one. Complete the future time clause: When I finish, I will travel.",
    "[[Cuando termine, viajaré.]] Future [[cuando]] always triggers the Present Subjunctive!"
)
challenge(
    2,
    "Indicative or Subjunctive? “No creo que ___ (ser) justo.”",
    "[[No creo que sea justo]]",
    "Negated [[no creo que]] = doubt → Subjunctive [[sea]]",
    "Question two. Complete: I don't think it is fair — [[No creo que]], blank, [[justo]].",
    "[[No creo que sea justo.]] Affirmative [[creo que es]], negative [[no creo que sea]]!"
)
challenge(
    3,
    "Fix both errors: “Si tendría dinero…” / “Gracias para todo.”",
    "[[Si tuviera dinero · Gracias por]]",
    "[[Si]] + Imperfect Subjunctive [[tuviera]]; [[gracias por]]",
    "Question three. Fix both mistakes: Si tendría dinero, and gracias para todo.",
    "[[Si tuviera dinero]], and [[gracias por todo]]. Never conditional after [[si]], and always [[gracias por]]! Good luck on Edexcel Spanish!"
)
end_card()
