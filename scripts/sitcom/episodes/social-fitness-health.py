# "¡Rumbo al Nueve!" S01E05 "Me Duele La Cuenta" (Topic: social-fitness-health)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(
    topic="social-fitness-health",
    logline="Dad starts a five-minute fitness kick before ordering everything on the tapas menu. Healthy lifestyles, reverse verbs like 'doler' and 'gustar', 'jugar' vs 'hacer' vs 'tocar', restaurant complaints, and 'pedir' vs 'preguntar'."
)

# ---------------- COLD OPEN ----------------
scene("park", [("dad", 280), ("vani", 600), ("pablo", 920)])
L("dad", "Watch my new marathon training! Me gusta corriendo por el parque, pero ahora me duelen la espalda!", mood="excited", shot="close", prop="ball")
sfx("buzzer")
poof("lola", 1100)
L("lola", "Stop jogging and listen! After [[me gusta]], [[me encanta]], [[prefiero]], or [[evito]], Spanish uses the INFINITIVE, never the gerund! Say [[me gusta correr]]!", mood="annoyed", shot="close",
  boardClear=True, board="[[Me gusta correr]] (NEVER corriendo!)")
L("vani", "And [[doler]] works backwards like [[gustar]]: singular body part takes [[duele]], plural takes [[duelen]]! [[Me duele la espalda]], [[me duelen las piernas]]!", mood="teach", shot="close",
  board="[[Me duele la espalda · Me duelen los pies]]")
L("dad", "Actually everything hurts, so plural was fair.", mood="sad", shot="close")
freeze("GUSTAR + INFINITIVE!", 2.4, narrator="Narrator: Dad's marathon lasted ninety metres.")

title()

# ---------------- ACT 1: HEALTHY LIVING, DIET & STRESS ----------------
scene("kitchen", [("mum", 260), ("vani", 580), ("pablo", 900)], caption="ACT ONE · Vida Sana vs Estrés")
L("mum", "Area E asks how you stay healthy! [[Para llevar una vida sana, intento seguir una dieta equilibrada, beber dos litros de agua al día y dormir ocho horas.]]", mood="teach", shot="close", prop="plate",
  boardClear=True, board="[[llevar una vida sana · dieta equilibrada]]")
L("vani", "Talk about avoiding unhealthy habits too! [[Evito comer comida basura y bebidas azucaradas porque contienen demasiada grasa y azúcar.]]", mood="happy", shot="close",
  board="[[evitar + inf. · la comida basura]]")
L("pablo", "In Higher reading and writing, you also debate smoking, alcohol and exam stress!", mood="teach", shot="close")
L("pablo", "[[Fumar perjudica gravemente la salud, mancha los dientes y causa enfermedades pulmonares.]]", mood="worried", shot="close",
  board="[[perjudicar la salud]] = harm health")
L("vani", "[[Cuando estoy estresada por los exámenes, hago yoga o salgo a caminar al aire libre para desconectar y despejar la mente.]]", mood="determined", shot="close",
  boardClear=True, board="[[desconectar y despejar la mente]]")
L("mum", "And at the pharmacy or doctor's role play: [[Tengo fiebre, estoy resfriada y me duele la garganta desde ayer.]]", mood="teach", shot="close",
  board="[[estoy resfriada · me duele la garganta]]")

# ---------------- ACT 2: SPORTS, CINEMA, MUSIC & READING ----------------
card("LEISURE & CULTURE", "Jugar a, hacer, tocar — and live reviews.", 2.3)
scene("living", [("pablo", 260), ("vani", 580), ("lola", 920)], caption="THE LIVING ROOM · Three Verbs For Leisure")
L("lola", "Three verbs that English speakers mix up every week! Ball games take [[jugar a]]: [[juego al baloncesto]]. Individual sports take [[hacer]] or [[practicar]]: [[hago natación]], [[practico el atletismo]].", mood="teach", shot="close",
  boardClear=True, board="[[jugar al tenis · hacer natación]]",
  diagram='<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="580" height="240" rx="16" fill="#0f172a" stroke="#f472b6" stroke-width="3"/><text x="300" y="50" fill="#fde047" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle">JUGAR vs HACER vs TOCAR</text><text x="300" y="106" fill="#38bdf8" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">jugar a → al fútbol / al tenis</text><text x="300" y="158" fill="#4ade80" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">hacer → natación / ciclismo</text><text x="300" y="214" fill="#f472b6" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">tocar → la guitarra / el piano</text></svg>')
L("pablo", "And musical instruments take [[tocar]], NEVER jugar! [[Toco la guitarra desde hace cuatro años.]] Notice [[desde hace]] plus present tense for how long you have been doing something!", mood="happy", shot="close", prop="guitar",
  board="[[Toco la guitarra desde hace cuatro años]]")
L("vani", "For cinema, concerts and books, move beyond [[interesante]]: [[Anoche vi una película de suspense en versión original.]]", mood="excited", shot="close",
  board="[[en versión original]] = subtitled / VO")
L("vani", "[[La banda sonora era impresionante y los efectos especiales fueron espectaculares, aunque el final fue predecible.]]", mood="happy", shot="close",
  boardClear=True, board="[[la banda sonora · el argumento]]")

# ---------------- ACT 3: EATING OUT & RESTAURANT COMPLAINTS ----------------
scene("hawker", [("uncle", 1000), ("dad", 280), ("mum", 600)], caption="TAPAS NIGHT · Ordering & Complaining")
L("mum", "Let's practise a Paper Three restaurant role play! [[De primer plato voy a tomar la sopa de marisco, de segundo plato el pollo asado, y de postre el flan casero.]]", mood="happy", shot="close",
  boardClear=True, board="[[de primer plato · de segundo · de postre]]")
L("uncle", "Any allergies or problems at the table?", mood="neutral", shot="close")
L("dad", "Yes! [[¡Soy alérgico a los frutos secos, el tenedor está sucio y la sopa está fría!]] Wait — wait — earlier I nearly said la sopa es fría!", mood="annoyed", shot="close", prop="plate")
poof("lola", 820)
L("lola", "Good save! [[La sopa es fría]] means soup is inherently cold by nature, like gazpacho! Hot soup that has gone cold is a temporary state, so use [[estar]]: [[¡La sopa está fría!]]", mood="teach", shot="close",
  board="[[La sopa está fría]] (temporary state!)")

# ---------------- EXAMINER GRADE-9 TRAP ----------------
card("EXAMINER GRADE-9 TRAP", "'Pedir' vs 'Preguntar' — the classic restaurant trap!", 2.8)
scene("classroom", [("teacher", 280), ("dad", 600), ("vani", 920)], caption="SEÑOR GARCÍA'S EXAM CLINIC")
L("teacher", "In Paper Two Q Three C and Paper Three role plays, students always write: Pregunté por la cuenta y pregunté una paella.", mood="worried", shot="close",
  boardClear=True, board="Trap: preguntar vs pedir")
L("vani", "Because English uses 'ask' for both! In Spanish, [[preguntar]] is ONLY to ask a question for information: [[Pregunté a qué hora cerraba el restaurante]].", mood="teach", shot="close",
  board="[[preguntar]] = ask a question (info)")
L("teacher", "Whereas to ask FOR an object or order food is [[pedir]], stem-changing E to I in the third-person preterite!", mood="teach", shot="close",
  board="[[pedir]] = ask for / order (NO por!)")
L("dad", "Let me try! [[Yo pedí la cuenta, y mi mujer pidió una ensalada mixta. ¡Estaba riquísima!]]", mood="determined", shot="close")
sfx("ding")
L("teacher", "[[Pedí]], [[pidió]], AND [[estaba riquísima]] for how a specific dish tasted! Grade Nine served hot!", mood="happy", shot="wide", gap=0.5)

confess("lola", "LOLA · Area E Quick Checklist")
L("lola", "Remember: [[me gusta correr]], [[me duelen las piernas]], [[tocar el piano]], [[la sopa está fría]], and [[pedí la cuenta]]!", mood="teach",
  boardClear=True, board="[[tocar · está fría · pedí la cuenta]]", gap=0.4)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Three Area E marks-savers in five seconds!", 2.8)
challenge(
    1,
    "Fix both errors: “Me gusta jugando al piano.”",
    "[[Me gusta tocar el piano]]",
    "[[gustar]] + infinitive; musical instruments take [[tocar]]",
    "Question one. Fix both mistakes: I like playing the piano.",
    "[[Me gusta tocar el piano.]] Infinitive after [[gustar]], and [[tocar]] for instruments!"
)
challenge(
    2,
    "Say: “I asked for the bill.”",
    "[[Pedí la cuenta]]",
    "[[pedir]] = order / ask for (zero por!)",
    "Question two. Translate: I asked for the bill.",
    "[[Pedí la cuenta.]] [[Pedir]] means to ask for or order — never [[preguntar]] and zero [[por]]!"
)
challenge(
    3,
    "Say: “My legs hurt.”",
    "[[Me duelen las piernas]]",
    "Plural noun [[las piernas]] → plural [[duelen]]",
    "Question three. How do you say: My legs hurt?",
    "[[Me duelen las piernas.]] Plural [[las piernas]] triggers [[duelen]]!"
)
end_card()
