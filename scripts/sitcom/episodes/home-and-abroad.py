# "¡Rumbo al Nueve!" S01E01 "Check-In Chaos" (Topic: home-and-abroad)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(
    topic="home-and-abroad",
    logline="Dad tries to book a family trip to Andalucía without checking a single preposition or hotel review. Holidays, accommodation complaints, transport, weather across three tenses, Spanish festivals, and Grade-9 Paper 2 traps."
)

# ---------------- COLD OPEN ----------------
scene("living", [("vani", 300), ("dad", 760)])
L("dad", "Pack your suitcases! I just booked our summer trip to Málaga! Yo busco para un hotel barato y yo visito a Madrid!", mood="excited", shot="close", prop="tablet")
L("vani", "Dad. Stop typing. Two errors in nine words is a record even for you.", mood="deadpan", shot="close")
sfx("squawk")
poof("lola", 1040)
L("lola", "Put the tablet down! First, [[buscar]] already means to look for. Never add [[para]]! Say [[busco un hotel barato]].", mood="annoyed", shot="close",
  boardClear=True, board="[[buscar]] = to look for (NO para!)")
L("vani", "And you only use the personal [[a]] for people and pets, not cities! [[Visité Madrid]], not a Madrid.", mood="teach", shot="close",
  board="[[Visité Madrid]] · [[Visité a mi abuela]]")
L("dad", "What if I really love Madrid like a person?", mood="smug", shot="close")
L("lola", "The Edexcel examiner does not care about your romance with a motorway ring road.", mood="eyeroll", shot="close")
freeze("NO A BEFORE CITIES!", 2.4, narrator="Narrator: Seven units to the exam. One parrot with a red pen.")

confess("vani", "VANI · Year Eleven · Target Grade Nine")
L("vani", "My IGCSE Spanish exam has three papers. Listening, Reading and Writing, and Speaking.", mood="determined")
L("vani", "Lola moved onto my desk in September and corrects Dad before breakfast every single morning.", mood="deadpan", gap=0.4)

title()

# ---------------- ACT 1: REGIONS, HOLIDAYS & ACCOMMODATION ----------------
scene("living", [("mum", 240), ("pablo", 560), ("vani", 880)], caption="ACT ONE · Booking The Trip")
L("pablo", "If you come to Spain, start with where things are! [[Málaga está situada en la costa del sur, mientras que Madrid está en el centro.]]", mood="happy", shot="close", prop="map",
  boardClear=True, board="[[está situada en la costa del sur]]")
L("vani", "Describe your own town too! [[Vivo en las afueras de una ciudad moderna donde hay zonas verdes, aunque hay demasiado tráfico en la hora punta.]]", mood="neutral", shot="close",
  board="[[en las afueras · en la hora punta]]")
L("mum", "Where should we stay in Málaga? [[Prefiero alojarme en un hotel de cuatro estrellas con media pensión.]]", mood="happy", shot="close",
  board="[[alojarse]] = to stay · [[media pensión]]")
L("pablo", "Or [[un albergue juvenil]] if Dad is paying, or [[una casa rural tranquila en la montaña]].", mood="smug", shot="close",
  board="[[un albergue juvenil · una casa rural]]")
poof("dad", 1080)
L("dad", "Look at this bargain! Five euros a night! The review says [[el aire acondicionado no funciona y la habitación está sucia]]. Sounds rustic!", mood="excited", shot="close", prop="tablet")
sfx("buzzer")
L("mum", "Vikram! [[No funciona]] means it doesn't work, and [[está sucia]] means it is dirty!", mood="shock", shot="close")
L("pablo", "In the Paper Three role play, you always get an unexpected hotel problem! Say [[quiero cambiar de habitación]].", mood="teach", shot="close",
  boardClear=True, board="[[Quiero cambiar de habitación]]")
L("vani", "And give two concrete details! [[El ascensor está averiado, no hay papel higiénico y hay muchísimo ruido por la noche.]]", mood="teach", shot="close",
  board="[[está averiado · hay muchísimo ruido]]")
L("mum", "Notice [[está sucia]] and [[está averiado]] take [[estar]] for temporary states, whereas [[el hotel es antiguo]] takes [[ser]] for a permanent trait!", mood="teach", shot="close",
  board="[[está sucia]] (state) · [[es antiguo]] (trait)")

# ---------------- ACT 2: TRANSPORT & DIRECTIONS ----------------
card("THE AIRPORT RUN", "Luggage, platforms and directions.", 2.3)
scene("mall", [("dad", 260), ("vani", 580), ("lola", 920)], caption="CHANGI DEPARTURES · Practice Run")
L("lola", "Quick check-in drill! [[Primero tenemos que facturar el equipaje y pasar por el control de seguridad.]]", mood="teach", shot="close",
  boardClear=True, board="[[facturar el equipaje]] = check in bags")
L("dad", "What if the flight is delayed?", mood="thinking", shot="close")
L("vani", "Listen out for this in Paper One Listening: [[El vuelo con destino a Barcelona lleva media hora de retraso en la puerta de embarque.]]", mood="teach", shot="close",
  board="[[llevar retraso · puerta de embarque]]")
L("lola", "And at the train station in Madrid: [[Quisiera un billete de ida y vuelta para Sevilla.]]", mood="teach", shot="close",
  board="[[un billete de ida y vuelta]]")
L("vani", "[[¿De qué andén sale el tren de alta velocidad y tengo que hacer transbordo?]] Which platform, and do I have to change trains?", mood="happy", shot="close",
  board="[[el andén · hacer transbordo]]")
L("dad", "Easy! And if we get lost in Sevilla, I ask politely: [[Perdone, ¿para ir a la catedral?]]", mood="determined", shot="close", prop="map")
L("lola", "Hold on, that was actually grammatical! Now understand the formal [[usted]] reply:", mood="shock", shot="close",
  boardClear=True, board="[[todo recto · cruce · doble · tome]]",
  diagram='<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="580" height="240" rx="16" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/><text x="300" y="50" fill="#fde047" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle">USTED DIRECTIONS</text><text x="300" y="106" fill="#f8fafc" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">siga todo recto → straight on</text><text x="300" y="158" fill="#38bdf8" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">cruce el puente → cross bridge</text><text x="300" y="214" fill="#4ade80" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">doble a la izquierda / derecha</text></svg>')
L("lola", "[[Siga todo recto, cruce la plaza, doble a la izquierda en el semáforo y está al final de la calle.]]", mood="teach", shot="close",
  board="[[en el semáforo · al final de la calle]]")
L("vani", "Those polite [[usted]] commands flip the vowel: [[siga]], [[cruce]], [[doble]], [[tome]]! And remember [[por la mañana]], never en la mañana!", mood="teach", shot="close",
  board="[[por la mañana / por la tarde]]")

# ---------------- ACT 3: WEATHER ACROSS THREE TENSES & FESTIVALS ----------------
scene("plaza", [("pablo", 260), ("vani", 580), ("mum", 900)], caption="LA PLAZA · Weather & Fiestas")
L("pablo", "For top marks in Paper Two Writing, link the weather across three time frames!", mood="teach", shot="close",
  boardClear=True, board="Weather across 3 time frames!")
L("pablo", "Present: [[En verano hace sol y hace buen tiempo, aunque a veces hay tormenta y niebla en la costa.]]", mood="happy", shot="close",
  board="Present: [[hace sol · hay tormenta]]")
L("vani", "Past narrative! Imperfect sets the scene while Preterite interrupts: [[Hacía mucho calor cuando de repente empezó a llover.]]", mood="excited", shot="close", prop="umbrella",
  board="Past: [[Hacía calor cuando empezó a llover]]")
L("mum", "And Future: [[Mañana hará fresco en el norte, así que llevaré un chubasquero.]]", mood="happy", shot="close",
  board="Future: [[Mañana hará fresco]]")
poof("lola", 1100)
L("lola", "Don't forget Area A cultural customs! [[Las Fallas de Valencia]], [[La Feria de Abril en Sevilla]], and [[La Tomatina en Buñol]].", mood="teach", shot="close",
  boardClear=True, board="[[Las Fallas · La Feria de Abril]]")
L("pablo", "[[Durante las fiestas tradicionales, las calles se llenan de gente, hay fuegos artificiales y desfiles impresionantes.]]", mood="excited", shot="close",
  board="[[fuegos artificiales · desfiles]]")
L("vani", "And add a justified opinion! [[Vale la pena visitar una fiesta española porque el ambiente es acogedor e inolvidable.]]", mood="happy", shot="close",
  board="[[Vale la pena visitar…]] = it's worth it")

# ---------------- EXAMINER GRADE-9 TRAP ----------------
card("EXAMINER GRADE-9 TRAP", "What loses marks vs what wins Grade Nine!", 2.8)
scene("classroom", [("teacher", 280), ("vani", 620), ("dad", 940)], caption="SEÑOR GARCÍA'S EXAM CLINIC")
L("teacher", "Every June, candidates write: fui en vacaciones por avión y hace lluvioso.", mood="worried", shot="close",
  boardClear=True, board="Trap: en vacaciones / por avión")
L("vani", "Holiday is ALWAYS [[de vacaciones]], and transport takes [[en]], except on foot!", mood="determined", shot="close",
  board="[[ir de vacaciones · en avión · a pie]]")
L("vani", "[[El verano pasado fui de vacaciones a España en avión, y paseamos a pie por el casco antiguo.]]", mood="happy", shot="close",
  board="[[paseamos a pie por el casco antiguo]]")
L("teacher", "Bravo, Vani! Only [[en barco]], [[en tren]], [[en autocar]], [[en avión]] — never por avión!", mood="happy", shot="close")
L("dad", "And why was hace lluvioso wrong?", mood="thinking", shot="close")
L("teacher", "[[Hace]] takes nouns like [[calor]], [[frío]], [[viento]], [[sol]]. With adjectives or verbs, say [[está nublado]] or [[llueve]] and [[nieva]]!", mood="teach", shot="close",
  boardClear=True, board="[[hace sol · está nublado · llueve]]")
L("dad", "Right! [[El año pasado fuimos de vacaciones en tren, hizo buen tiempo y fue una experiencia inolvidable.]]", mood="determined", shot="close")
sfx("ding")
L("vani", "Dad! Full marks on Area A!", mood="excited", shot="wide", gap=0.5)

confess("lola", "LOLA · Examiner Parrot · Area A Checklist")
L("lola", "Quick recap before the buzzer! [[Ir de vacaciones]], [[viajar en avión]], [[ir a pie]], [[buscar un hotel]] with zero para, and [[visité Madrid]] with zero personal a!", mood="teach",
  boardClear=True, board="[[de vacaciones · en avión · a pie]]", gap=0.4)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Five seconds per question with Lola!", 2.8)
challenge(
    1,
    "Fix the error: “Fui en vacaciones a Madrid.”",
    "[[Fui de vacaciones a Madrid]]",
    "Holiday idiom = [[ir de vacaciones]] (never en vacaciones)",
    "Question one. Fix the preposition mistake: I went on holiday to Madrid.",
    "[[Fui de vacaciones a Madrid.]] Always [[de vacaciones]], and no personal [[a]] before a city!"
)
challenge(
    2,
    "Say: “I want to change rooms.”",
    "[[Quiero cambiar de habitación]]",
    "[[cambiar de habitación · hay demasiado ruido]]",
    "Question two. How do you tell hotel reception: I want to change rooms?",
    "[[Quiero cambiar de habitación]], and add [[porque hay demasiado ruido]] for your Paper Three role play!"
)
challenge(
    3,
    "Past weather: “It was sunny when it started to rain.”",
    "[[Hacía sol cuando empezó a llover]]",
    "Imperfect background [[hacía]] + Preterite event [[empezó]]",
    "Question three. Combine background and event: It was sunny when it started to rain.",
    "[[Hacía sol cuando empezó a llover.]] Imperfect sets the scene, Preterite snaps the action!"
)
end_card()
