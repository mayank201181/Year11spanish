# "¡Rumbo al Nueve!" S01E02 "Quiero Ser Jefe" (Topic: education-and-employment)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(
    topic="education-and-employment",
    logline="Vani prepares for work experience while Dad conducts a chaotic mock job interview in Spanish. School life, rules, post-sixteen plans, part-time jobs, career articles, and false friends."
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 300), ("vani", 760)])
L("dad", "Welcome to your mock job interview! Repeat after me: Yo quiero ser un médico porque ya pasé todos mis exámenes en el colegio!", mood="smug", shot="close", prop="book")
L("vani", "Dad, you just failed three IGCSE grammar points before sitting down.", mood="deadpan", shot="close")
sfx("squawk")
poof("lola", 1040)
L("lola", "Drop the [[un]] before an unmodified profession! Say [[quiero ser médico]], or [[quiero ser ingeniera]].", mood="teach", shot="close",
  boardClear=True, board="[[Quiero ser médico]] (drop un/una!)")
L("lola", "Only keep [[un]] or [[una]] when an adjective modifies the job: [[quiero ser una médica excelente]].", mood="teach", shot="close",
  board="[[una médica excelente]] (with adj.!)")
L("vani", "Second, [[aprobar un examen]] means to pass an exam! [[Pasar]] just means to spend time, and [[suspender]] means to fail!", mood="teach", shot="close",
  board="[[aprobar]] = pass · [[suspender]] = fail")
L("lola", "And [[el colegio]] is school, NOT university! University is [[la universidad]], and secondary school is [[el instituto]].", mood="eyeroll", shot="close",
  board="[[el instituto]] = secondary school")
freeze("APROBAR, NOT PASAR!", 2.4, narrator="Narrator: Dad was fired from HR after forty seconds.")

title()

# ---------------- ACT 1: SCHOOL LIFE, FACILITIES & RULES ----------------
scene("classroom", [("teacher", 250), ("vani", 580), ("pablo", 910)], caption="ACT ONE · School Life & Rules")
L("teacher", "In Area B, never stop at me gusta! Justify subjects with rich adjectives!", mood="teach", shot="close",
  boardClear=True, board="[[exigente]] = demanding · [[útil]] = useful")
L("vani", "[[Mi asignatura preferida es la informática porque es útil y práctica, aunque las ciencias son bastante exigentes.]]", mood="happy", shot="close",
  board="[[las ciencias son exigentes]]")
L("pablo", "Describe your school facilities too! [[En mi instituto tenemos laboratorios modernos, una biblioteca bien equipada y canchas deportivas.]]", mood="happy", shot="close",
  board="[[una biblioteca bien equipada]]")
L("teacher", "Add a balanced criticism for top marks! [[Sin embargo, las jornadas escolares son demasiado largas y el comedor es caro.]]", mood="teach", shot="close",
  board="[[las jornadas escolares]] = school days")
L("vani", "And for school rules, instead of repeating [[tengo que]] five times, use impersonal modal structures plus the infinitive!", mood="determined", shot="close")
L("teacher", "Exacto! [[Está prohibido usar el móvil en los pasillos. No se permite mascar chicle ni llevar joyas.]]", mood="teach", shot="close",
  boardClear=True, board="[[Está prohibido / No se permite + inf.]]",
  diagram='<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="580" height="240" rx="16" fill="#0f172a" stroke="#f59e0b" stroke-width="3"/><text x="300" y="50" fill="#fde047" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle">MODALS + INFINITIVE</text><text x="300" y="106" fill="#f87171" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">✘ Está prohibido / No se permite</text><text x="300" y="158" fill="#4ade80" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">✔ Hay que / Se debe + inf.</text><text x="300" y="214" fill="#38bdf8" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">G9: Es injusto que tengamos...</text></svg>')
L("pablo", "[[Hay que llevar el uniforme todos los días y ser puntual, pero fomenta la disciplina y la igualdad.]]", mood="neutral", shot="close",
  board="[[fomenta la igualdad]] = promotes equality")
L("vani", "And when you criticise exam pressure, trigger the subjunctive! [[Me parece injusto que tengamos tantos deberes y tanta presión escolar.]]", mood="smug", shot="close",
  board="[[Es injusto que tengamos…]]")

# ---------------- ACT 2: POST-16, GAP YEAR & UNIVERSITY ----------------
card("POST-SIXTEEN PLANS", "Bachillerato, degrees and gap years.", 2.3)
scene("living", [("mum", 260), ("vani", 580), ("pablo", 900)], caption="THE DINING TABLE · Future Plans")
L("mum", "What are your plans after Year Eleven? [[Cuando termine mis exámenes, tengo la intención de estudiar el bachillerato.]]", mood="teach", shot="close",
  boardClear=True, board="[[Cuando termine… tengo la intención de…]]")
L("vani", "Notice [[cuando termine]] in the subjunctive for a future milestone! Then: [[Espero ir a la universidad para estudiar una carrera de derecho.]]", mood="excited", shot="close",
  board="[[una carrera]] = a university degree!")
L("mum", "Or vocational training: [[También se puede hacer una formación profesional o un aprendizaje práctico.]]", mood="happy", shot="close",
  board="[[un aprendizaje]] = an apprenticeship")
L("pablo", "And I want a gap year! [[Si tuviera suficiente dinero, tomaría un año sabático para viajar por Sudamérica y ganar experiencia.]]", mood="happy", shot="close",
  board="[[tomar un año sabático]] = gap year")
poof("lola", 1100)
L("lola", "Watch the false friend [[asistir a]]! [[Asisto a cinco clases al día]] means I ATTEND five classes a day — it always needs [[a]], and helping is [[ayudar]]!", mood="teach", shot="close",
  boardClear=True, board="[[asistir a]] = attend · [[ayudar]] = help")

# ---------------- ACT 3: WORK EXPERIENCE, PART-TIME JOBS & INTERVIEWS ----------------
scene("hawker", [("uncle", 1000), ("vani", 300), ("pablo", 620)], caption="UNCLE HOCK'S STALL · Work Experience")
L("vani", "Last term I did work experience! [[El trimestre pasado hice mis prácticas laborales en una clínica veterinaria durante dos semanas.]]", mood="happy", shot="close",
  boardClear=True, board="[[hacer prácticas laborales]] = work exp.")
L("uncle", "Did they pay you?", mood="thinking", shot="close")
L("vani", "[[No gané un sueldo, pero aprendí a trabajar en equipo, a resolver problemas y a tratar con los clientes.]]", mood="determined", shot="close",
  board="[[trabajar en equipo · ganar un sueldo]]")
L("pablo", "Meanwhile I have a Saturday job! [[Trabajo a tiempo parcial como camarero los sábados para ahorrar dinero y ser más independiente.]]", mood="happy", shot="close", prop="plate",
  board="[[trabajar a tiempo parcial]] = part-time")
L("uncle", "Good lad! Just stop dropping the mango juice.", mood="smug", shot="close")

# ---------------- EXAMINER GRADE-9 TRAP ----------------
card("EXAMINER GRADE-9 TRAP", "Area B prepositions & false friends that sink marks!", 2.8)
scene("living", [("dad", 260), ("vani", 580), ("lola", 920)], caption="MOCK INTERVIEW · Round Two")
L("dad", "Okay, let me apply for the job properly: Quiero aplicar para un trabajo bien pagado!", mood="determined", shot="close", prop="phone")
sfx("buzzer")
L("lola", "English interference alert! Never write aplicar para! To apply for a job is [[solicitar un puesto de trabajo]] or [[presentar una solicitud]], with zero [[para]]!", mood="annoyed", shot="close",
  boardClear=True, board="[[solicitar un puesto]] = apply for a job")
L("vani", "And remember the four deadly Area B false friends: [[el colegio]] is school, [[una carrera]] is a degree, [[asistir a]] is to attend, and [[el éxito]] means success, NOT the exit!", mood="teach", shot="close",
  board="[[el éxito]] = success · [[la salida]] = exit")
L("dad", "Got it! [[En el futuro quiero solicitar un puesto bien pagado porque soy trabajador, puntual y ambicioso. ¡Tendré mucho éxito!]]", mood="excited", shot="close")
sfx("ding")
L("lola", "Hired! Provided you don't wear that yellow shirt to the office.", mood="smug", shot="wide", gap=0.5)

confess("vani", "VANI · Area B Exam Summary")
L("vani", "Remember: [[quiero ser médico]] without un, [[aprobar]] to pass, [[suspender]] to fail, [[hacer prácticas laborales]], and [[solicitar un puesto]]!", mood="happy",
  boardClear=True, board="[[ser médico · aprobar · solicitar]]", gap=0.4)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Three Area B exam questions — five seconds each!", 2.8)
challenge(
    1,
    "Say: “I want to be a doctor.” (no adjective!)",
    "[[Quiero ser médico]]",
    "Drop [[un/una]] before an unmodified profession",
    "Question one. How do you say in Spanish: I want to be a doctor?",
    "[[Quiero ser médico]], or [[quiero ser médica]], with NO [[un]] or [[una]]!"
)
challenge(
    2,
    "Say: “It is forbidden to use phones.”",
    "[[Está prohibido usar el móvil]]",
    "[[Está prohibido]] / [[No se permite]] + infinitive",
    "Question two. How do you say: It is forbidden to use phones?",
    "[[Está prohibido usar el móvil]], or [[No se permite usar el móvil]]. Always follow with the infinitive!"
)
challenge(
    3,
    "How do you say “to apply for a job” in Spanish?",
    "[[solicitar un puesto]]",
    "Never write aplicar para! Use [[solicitar un puesto / empleo]]",
    "Question three. How do you say, to apply for a job, without falling into the English trap?",
    "[[Solicitar un puesto]], or [[solicitar un empleo]]. Zero [[para]]!"
)
end_card()
