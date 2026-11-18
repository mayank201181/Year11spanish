# "¡Rumbo al Nueve!" S01E03 "Cuando Era Pequeño" (Topic: personal-life-relationships)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(
    topic="personal-life-relationships",
    logline="Mum opens the childhood photo album while Dad tries to describe family relationships. Reflexive relationship verbs, marriage debates, childhood memories in the Imperfect, personal 'a', and role models."
)

# ---------------- COLD OPEN ----------------
scene("living", [("mum", 260), ("dad", 580), ("vani", 900)])
L("mum", "Look at this baby photo! Vani, how old were you here?", mood="happy", shot="close", prop="book")
L("dad", "Oh, let me say it! Cuando Vani era cinco años, ella era muy simpático!", mood="excited", shot="close")
sfx("buzzer")
poof("lola", 1100)
L("lola", "My feathers just curled! In Spanish you ARE NOT years, you HAVE years! Present: [[tengo dieciséis años]]. Childhood past: [[cuando tenía cinco años]]!", mood="annoyed", shot="close",
  boardClear=True, board="[[tenía cinco años]] (NEVER era años!)")
L("vani", "And adjective agreement, Dad! I'm female, so [[era muy simpática]], ending in A!", mood="deadpan", shot="close",
  board="[[Vani era simpática y curiosa]]")
L("dad", "Wait — so I have forty-two years in my pocket?", mood="thinking", shot="close")
L("lola", "Along with forty-two grammar mistakes. Sit down and take notes.", mood="eyeroll", shot="close")
freeze("TENER FOR AGE!", 2.4, narrator="Narrator: Dad was still trying to be forty-two years.")

title()

# ---------------- ACT 1: FAMILY DYNAMICS & REFLEXIVE RELATIONSHIPS ----------------
scene("living", [("vani", 260), ("pablo", 580), ("mum", 900)], caption="ACT ONE · Getting On & Falling Out")
L("pablo", "In Area C, examiners love reflexive relationship verbs! [[Me llevo fenomenal con mi madre porque siempre me apoya y tiene buen sentido del humor.]]", mood="happy", shot="close",
  boardClear=True, board="[[llevarse bien con]] = get on well with")
L("vani", "And when siblings argue: [[A veces me peleo con mi hermano menor porque es un poco terco y egoísta, pero nos reconciliamos enseguida.]]", mood="neutral", shot="close",
  board="[[pelearse con]] = argue / fall out with")
L("mum", "Watch collective singular nouns! [[Mi familia]] is singular feminine: [[Mi familia es muy unida y comprensiva]].", mood="teach", shot="close",
  board="[[Mi familia es unida]] (singular!)")
L("mum", "Only switch to a plural verb if the subject itself is plural: [[Mis padres son comprensivos y cariñosos.]]", mood="teach", shot="close",
  board="[[Mis padres son cariñosos]] (plural!)")
L("pablo", "What about peer pressure and the generation gap? [[Hoy en día hay una brecha generacional porque algunos adultos critican a los jóvenes.]]", mood="thinking", shot="close",
  boardClear=True, board="[[la brecha generacional · los jóvenes]]")
L("vani", "And a true friend: [[Un buen amigo es alguien en quien puedes confiar, que guarda tus secretos y que nunca te juzga.]]", mood="happy", shot="close",
  board="[[confiar en alguien]] = to trust someone")

# ---------------- ACT 2: MARRIAGE, PARTNERSHIPS & PREPOSITIONS ----------------
card("RELATIONSHIP DEBATES", "Marriage, independence and prepositions.", 2.3)
scene("kitchen", [("mum", 260), ("dad", 580), ("lola", 920)], caption="THE KITCHEN · Modern Partnerships")
L("mum", "Edexcel Paper Two loves asking your opinion on marriage! [[En mi opinión, no hace falta casarse para ser feliz; muchas parejas prefieren convivir primero.]]", mood="teach", shot="close",
  boardClear=True, board="[[convivir]] = to live together")
L("lola", "Check the preposition! In English you marry someone, or get married TO someone. In Spanish it is ALWAYS [[casarse con]]!", mood="teach", shot="close",
  board="[[casarse CON alguien]] = marry someone")
L("lola", "[[Mi prima se casó con su novio el mes pasado, y fue una boda preciosa.]] Never casarse a!", mood="happy", shot="close",
  board="[[una boda preciosa]] = a lovely wedding")
L("dad", "Just like dreaming! [[Sueño con jubilarme temprano y viajar contigo.]] I dream of retiring early!", mood="happy", shot="close", prop="plate")
L("mum", "That [[soñar con]] was spotless, Vikram. Now wash those plates.", mood="smug", shot="close",
  board="[[soñar CON + inf.]] = to dream of")

# ---------------- ACT 3: CHILDHOOD MEMORIES IN THE IMPERFECT & ROLE MODELS ----------------
scene("bedroom", [("vani", 280), ("pablo", 620), ("lola", 960)], caption="ACT THREE · Imperfect Childhood & Role Models")
L("lola", "To describe what you USED to be like or USED to do every week as a child, use the Imperfect tense!", mood="teach", shot="close",
  boardClear=True, board="Imperfect = habitual childhood past")
L("lola", "Only three verbs are irregular in the entire Imperfect tense: [[ser]] becomes [[era]], [[ir]] becomes [[iba]], and [[ver]] becomes [[veía]] with an accent on the I!", mood="teach", shot="close",
  board="Imperfect irregulars: [[era · iba · veía]]",
  diagram='<svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="490" height="155" rx="14" fill="#0f172a" stroke="#a78bfa" stroke-width="2"/><text x="260" y="44" fill="#fde047" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">CHILDHOOD IMPERFECT + SOLÍA</text><text x="170" y="88" fill="#c4b5fd" font-family="sans-serif" font-size="15" text-anchor="middle">-AR: jugaba, cantábamos</text><text x="170" y="116" fill="#c4b5fd" font-family="sans-serif" font-size="15" text-anchor="middle">-ER/-IR: vivía, teníamos</text><text x="385" y="88" fill="#4ade80" font-family="sans-serif" font-size="15" text-anchor="middle">ser → era · ir → iba</text><text x="385" y="116" fill="#4ade80" font-family="sans-serif" font-size="15" text-anchor="middle">ver → veía (keep the e!)</text><text x="260" y="150" fill="#38bdf8" font-family="sans-serif" font-size="15" text-anchor="middle">De niña solía pasar los veranos con mis abuelos</text></svg>')
L("vani", "And [[soler]] in the imperfect is an instant Grade Nine phrase! [[De niña solía jugar al escondite en el parque, iba a casa de mis abuelos y veía dibujos animados.]]", mood="happy", shot="close",
  board="[[De niña solía + infinitive]] = I used to…")
L("pablo", "Then contrast past and present! [[Antes era bastante tímido, pero ahora soy mucho más abierto y seguro de mí mismo.]]", mood="determined", shot="close",
  boardClear=True, board="[[Antes era tímido · ahora soy abierto]]")
L("vani", "And for role models, remember the personal [[a]] before people! [[Admiro muchísimo a mi abuela porque superó muchos obstáculos y siempre ayuda a los demás.]]", mood="happy", shot="close",
  boardClear=True, board="[[Admiro A mi abuela]] (personal a!)")
L("pablo", "Notice [[superó]] in the Preterite for obstacles she overcame, alongside [[ayuda]] in the Present for what she still does today!", mood="excited", shot="close",
  board="[[superó]] (past) + [[ayuda]] (present)")

# ---------------- EXAMINER GRADE-9 TRAP ----------------
card("EXAMINER GRADE-9 TRAP", "Personal 'a', collective nouns & Imperfect vs Preterite!", 2.8)
scene("classroom", [("teacher", 280), ("dad", 600), ("vani", 920)], caption="SEÑOR GARCÍA'S EXAM CLINIC")
L("teacher", "Spot the three classic Paper Two traps in this sentence: Admiro mi padre porque mi familia son simpáticos y ayer jugaba al tenis una vez.", mood="worried", shot="close",
  boardClear=True, board="3 traps: personal a · collective · tense")
L("vani", "Trap one: [[Admiro a mi padre]] needs personal [[a]] because my dad is a specific person! Trap two: [[mi familia es simpática]], singular!", mood="determined", shot="close",
  board="1. [[Admiro a…]]  2. [[Mi familia es…]]")
L("teacher", "And trap three?", mood="thinking", shot="close")
L("dad", "[[Ayer]] is a single finished event, NOT a childhood habit! So use the Preterite: [[ayer jugué al tenis]]!", mood="excited", shot="close",
  board="3. Single finished event → [[ayer jugué]]")
sfx("ding")
L("teacher", "Magnificent! Habitual childhood background gets Imperfect [[jugaba]], single completed event gets Preterite [[jugué]]!", mood="happy", shot="wide", gap=0.5)

confess("lola", "LOLA · Area C Quick Checklist")
L("lola", "Lock it in! [[Tenía diez años]] for age, [[me llevo bien con]], [[casarse con]], [[solía]] plus infinitive, and personal [[a]] in [[admiro a mi abuela]]!", mood="teach",
  boardClear=True, board="[[tenía · casarse con · admiro a]]", gap=0.4)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Three Area C traps — beat Lola in five seconds!", 2.8)
challenge(
    1,
    "Say: “When I was ten years old…”",
    "[[Cuando tenía diez años]]",
    "Age in childhood = Imperfect of [[tener]]: [[tenía]]",
    "Question one. Translate the opening clause: When I was ten years old.",
    "[[Cuando tenía diez años.]] Spanish uses [[tener]] for age, never [[era]]!"
)
challenge(
    2,
    "Fill in the preposition: “Mi hermana se casó ___ su novio.”",
    "[[con]]",
    "[[casarse con alguien]] = to marry someone",
    "Question two. Fill in the missing preposition: [[Mi hermana se casó]], blank, [[su novio]].",
    "[[¡Con!]] [[Mi hermana se casó con su novio.]] Always [[casarse con]] and [[soñar con]]!"
)
challenge(
    3,
    "Fix both errors: “Admiro mi madre.” / “Mi familia son unidos.”",
    "[[Admiro a mi madre · es unida]]",
    "Personal [[a]] before person + singular [[mi familia es unida]]",
    "Question three. Fix both mistakes: Admiro mi madre, and mi familia son unidos.",
    "[[Admiro a mi madre]], with personal [[a]], and [[mi familia es unida]], singular feminine!"
)
end_card()
