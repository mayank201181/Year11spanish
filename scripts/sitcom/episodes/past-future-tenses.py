# "¡Rumbo al Nueve!" S01E06 "Tres Tiempos, Un Desastre" (Topic: past-future-tenses)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(
    topic="past-future-tenses",
    logline="Vani builds the ultimate Paper Two 150-word timeline machine while Dad drops accents that accidentally change time travel. Preterite vs Imperfect, Perfect & Pluperfect, Simple Future & Conditional, and Grade-9 verbal idioms."
)

# ---------------- COLD OPEN ----------------
scene("bedroom", [("vani", 280), ("dad", 620), ("lola", 960)])
L("vani", "To hit the top band on Edexcel Paper Two Question Seven, every essay needs past, present and future time frames working smoothly together!", mood="determined", shot="close", prop="book")
L("dad", "Piece of cake! Look at my story: Ayer mi amigo hablo conmigo y yo fui con tilde a su casa!", mood="smug", shot="close")
sfx("buzzer")
L("lola", "Two catastrophic accent blunders! [[Hablo]] without an accent means I speak, right now! For 'he spoke yesterday', you NEED the accent: [[habló]]!", mood="annoyed", shot="close",
  boardClear=True, board="[[hablo]] (now) ≠ [[habló]] (he spoke!)")
L("vani", "And [[fui]], [[fue]], [[di]], [[dio]], [[vi]], [[vio]], plus strong preterites [[tuve]], [[hice]], [[puse]], [[estuve]], [[pude]], [[supe]], [[dije]] take ZERO written accents!", mood="teach", shot="close",
  board="NO accent: [[fui · fue · tuve · hice · dije]]")
freeze("ACCENTS CHANGE TENSE!", 2.4, narrator="Narrator: In Paper Two Q Three C, one missing accent costs the whole mark.")

title()

# ---------------- ACT 1: PRETERITE VS IMPERFECT IN NARRATIVES ----------------
scene("classroom", [("teacher", 250), ("vani", 580), ("pablo", 910)], caption="ACT ONE · Snapshot vs Background Film")
L("teacher", "Think of past narratives like cinema! The Imperfect is the background camera filming what was happening: [[Llovía, eran las ocho y yo estudiaba en mi cuarto.]]", mood="teach", shot="close",
  boardClear=True, board="Imperfect = background ([[estudiaba]])")
L("pablo", "And the Preterite is the sudden snapshot that interrupts the scene! [[Mientras estudiaba en mi cuarto, de repente se fue la luz y sonó mi móvil.]]", mood="excited", shot="close", prop="phone",
  board="[[Mientras estudiaba, sonó mi móvil]]",
  diagram='<svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="490" height="155" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/><text x="260" y="42" fill="#fde047" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle">PRETERITE vs IMPERFECT TIMELINE</text><line x1="55" y1="95" x2="465" y2="95" stroke="#38bdf8" stroke-width="6" stroke-dasharray="12 6"/><text x="175" y="80" fill="#38bdf8" font-family="sans-serif" font-size="14" text-anchor="middle">Mientras estudiaba (Imperfect)</text><circle cx="355" cy="95" r="13" fill="#f87171" stroke="#fff" stroke-width="3"/><text x="355" y="132" fill="#f87171" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">¡sonó el móvil! (Preterite)</text><text x="260" y="158" fill="#4ade80" font-family="sans-serif" font-size="13" text-anchor="middle">Ongoing background (-aba/-ía) interrupted by single event</text></svg>')
L("vani", "Don't forget third-person I R sandal verbs in the preterite! [[Dormir]] becomes [[durmió]] and [[durmieron]]; [[pedir]] becomes [[pidió]]; [[preferir]] becomes [[prefirió]]!", mood="teach", shot="close",
  board="Sandal -IR: [[durmió · pidió · prefirió]]")
L("teacher", "And verbs with a vowel before the ending change I to Y in the third person: [[leer]] gives [[leyó]] and [[leyeron]], and [[oír]] gives [[oyó]] and [[oyeron]]!", mood="teach", shot="close",
  boardClear=True, board="[[leer → leyó · oír → oyó]]")

# ---------------- ACT 2: PERFECT, PLUPERFECT, FUTURE & CONDITIONAL ----------------
card("COMPOUND & FUTURE TENSES", "Haber + participle & the twelve irregular stems!", 2.4)
scene("living", [("mum", 260), ("vani", 580), ("lola", 920)], caption="ACT TWO · Six More Tenses Unlocked")
L("lola", "Present Perfect is [[he, has, ha, hemos, habéis, han]] plus the past participle — and Pluperfect swaps in [[había]] for 'had done'!", mood="teach", shot="close",
  boardClear=True, board="[[he hecho]] · [[había visto]]")
L("vani", "Memorise the irregular participles: [[abierto, cubierto, dicho, escrito, hecho, muerto, puesto, roto, visto, vuelto, descubierto]].", mood="determined", shot="close",
  board="[[hecho · visto · escrito · puesto · roto]]")
L("vani", "And never split [[haber]] from its participle! Put negatives and pronouns right in front: [[todavía no lo he visto]], [[ya habíamos cenado]].", mood="teach", shot="close",
  board="[[todavía no lo he visto]] ✔")
L("mum", "Now look ahead! Simple Future and Conditional share the EXACT same stem — the full infinitive, OR one of the twelve irregular stems!", mood="teach", shot="close",
  boardClear=True, board="Same stem for Future & Conditional!")
L("lola", "Chant the big stems: [[tener, tendr. Poder, podr. Hacer, har. Decir, dir. Poner, pondr. Salir, saldr. Venir, vendr. Saber, sabr. Haber, habr. Querer, querr.]]", mood="excited", shot="close",
  board="[[tendré / tendría · haré / haría]]")
L("vani", "So [[mañana tendré tiempo]], tomorrow I will have time, and [[me gustaría viajar más, pero habría demasiado tráfico]]!", mood="happy", shot="close",
  board="[[habrá]] (will be) · [[habría]] (would be)")

# ---------------- ACT 3: GRADE-9 VERBAL IDIOMS ----------------
scene("living", [("pablo", 260), ("vani", 580), ("dad", 900)], caption="ACT THREE · Verbal Idioms Examiners Love")
L("pablo", "Want instant complexity marks? Drop these four verbal structures into Paper Two and Paper Three! One: [[Acabo de terminar mis deberes]] — I have just finished my homework!", mood="excited", shot="close",
  boardClear=True, board="1. [[acabar de + inf.]] = to have just…")
L("vani", "Two: [[Llevo cinco años estudiando español]] — I have been studying Spanish for five years! Never translate word-for-word as he estado estudiando por cinco años!", mood="teach", shot="close",
  board="2. [[llevar + time + gerund]] = have been -ing")
L("pablo", "Three: [[Suelo repasar cada tarde]], and in the past [[solía jugar fuera]]. Four: [[Seguir]] plus gerund — [[sigo aprendiendo cosas nuevas]]!", mood="happy", shot="close",
  board="3. [[soler + inf.]] · 4. [[seguir + gerund]]")
L("dad", "Plus [[volver a]] plus infinitive to say 'again'! [[¡No volveré a olvidar un acento!]] I will never forget an accent again!", mood="determined", shot="close",
  board="5. [[volver a + inf.]] = to do again")

# ---------------- EXAMINER GRADE-9 TRAP ----------------
card("EXAMINER GRADE-9 TRAP", "Duration, splitting 'haber' & regularised stems!", 2.8)
scene("classroom", [("teacher", 280), ("dad", 600), ("vani", 920)], caption="SEÑOR GARCÍA'S EXAM CLINIC")
L("teacher", "Spot the three errors here: He nunca visto Madrid, pero mañana haceré turismo porque he estado estudiando español por tres años.", mood="worried", shot="close",
  boardClear=True, board="3 traps: he nunca · haceré · por tres años")
L("vani", "First, [[haber]] and its participle are glued together! Put [[nunca]] in front: [[Nunca he visto Madrid]]. Second, [[hacer]] has the irregular stem [[har]]: [[mañana haré turismo]]!", mood="determined", shot="close",
  board="[[Nunca he visto · mañana haré]]")
L("dad", "And third, ongoing duration up to now uses [[llevar]] plus gerund: [[¡Llevo tres años estudiando español!]]", mood="excited", shot="close",
  board="[[Llevo tres años estudiando español]] ✔")
sfx("ding")
L("teacher", "Past, present duration, AND irregular future in one breath! That is pure Grade Nine architecture!", mood="happy", shot="wide", gap=0.5)

confess("lola", "LOLA · Tense Mastery Checklist")
L("lola", "Check your verbs before handing in Paper Two! [[Habló]] has an accent, [[fui]] and [[tuve]] do NOT, [[no lo he hecho]] stays together, and [[llevo años estudiando]] wins top marks!", mood="teach",
  boardClear=True, board="[[habló · tuve · no lo he hecho]]", gap=0.4)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Three tense-mastery tests — five seconds!", 2.8)
challenge(
    1,
    "Say: “While I was studying, my phone rang.”",
    "[[Mientras estudiaba, sonó mi móvil]]",
    "Imperfect [[estudiaba]] + Preterite [[sonó]]",
    "Question one. Translate: While I was studying, my phone rang.",
    "[[Mientras estudiaba, sonó mi móvil.]] Ongoing Imperfect interrupted by snapshot Preterite!"
)
challenge(
    2,
    "Fix both mistakes: “He no escribido la carta.”",
    "[[No he escrito la carta]]",
    "Never split [[haber]]; irregular participle [[escrito]]",
    "Question two. Fix both mistakes in: I have not written the letter.",
    "[[No he escrito la carta.]] [[No]] goes before [[he]], and the irregular participle is [[escrito]]!"
)
challenge(
    3,
    "Idiomatic Spanish: “I have been living here for two years.”",
    "[[Llevo dos años viviendo aquí]]",
    "[[llevar + time + gerund]]",
    "Question three. Say idiomatic Grade Nine Spanish for: I have been living here for two years.",
    "[[Llevo dos años viviendo aquí]], or [[Vivo aquí desde hace dos años]]. Examiners love both!"
)
end_card()
