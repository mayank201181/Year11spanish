# "¡Rumbo al Nueve!" S01E04 "El Problema Verde" (Topic: world-around-us)
# Format and helpers: see common.py; check with lint_episode.py.

EP = dict(
    topic="world-around-us",
    logline="Dad launches an eco-campaign at home by banning hot showers and misgendering every Greek-origin noun in Spanish. Climate change, sustainability, Greek '-ma' nouns, charity volunteering, and digital risks vs benefits."
)

# ---------------- COLD OPEN ----------------
scene("kitchen", [("dad", 280), ("mum", 600), ("vani", 920)])
L("dad", "Family meeting! From today, we save la planeta! La cambio climático es una problema muy seria!", mood="determined", shot="close", prop="broom")
sfx("buzzer")
poof("lola", 1100)
L("lola", "Three gender disasters in one breath! Greek-origin nouns ending in M A are MASCULINE! [[El problema grave]], [[el planeta]], [[el clima]], [[el sistema]], [[el programa]]!", mood="annoyed", shot="close",
  boardClear=True, board="Greek -ma = MASC: [[el problema · el planeta]]")
L("vani", "And [[el cambio climático]] is masculine too! Plus watch [[el agua limpia]]: [[agua]] is feminine, it only borrows [[el]] in the singular before stressed A, so the adjective stays [[limpia]]!", mood="teach", shot="close",
  board="[[el agua limpia]] (el + feminine adj.!)")
L("mum", "Save the grammar first, Vikram, then turn the hot water back on.", mood="deadpan", shot="close")
L("dad", "Cold showers build character AND save energy!", mood="smug", shot="close")
freeze("EL PROBLEMA GRAVE!", 2.4, narrator="Narrator: Every examiner underlines la problema in bright red ink.")

title()

# ---------------- ACT 1: CLIMATE CHANGE, POLLUTION & SUSTAINABILITY ----------------
scene("living", [("vani", 260), ("pablo", 580), ("lola", 920)], caption="ACT ONE · Saving El Planeta")
L("pablo", "Area D rewards precise environmental vocabulary! [[Hoy en día el calentamiento global, la deforestación y la contaminación del aire amenazan la biodiversidad.]]", mood="teach", shot="close",
  boardClear=True, board="[[el calentamiento global · la sequía]]")
L("vani", "Link causes to consequences! [[Debido a los combustibles fósiles y los gases de efecto invernadero, hay cada vez más sequías e inundaciones.]]", mood="teach", shot="close",
  board="[[debido a]] = due to · [[sequías e inundaciones]]")
L("lola", "Spot that Grade Nine detail! Before a word starting with I or H I, [[y]] changes to [[e]]: [[sequías e inundaciones]]!", mood="excited", shot="close",
  board="[[y]] → [[e]] before i-/hi-")
L("pablo", "Now give solutions at three levels! Personal habits first: [[Suelo separar la basura, apagar las luces y usar bolsas reutilizables para reducir mi huella de carbono.]]", mood="happy", shot="close",
  board="[[reducir mi huella de carbono]]")
L("vani", "Also mention saving resources at home: [[Me ducho en vez de bañarme para ahorrar agua y desenchufamos los aparatos eléctricos.]]", mood="neutral", shot="close",
  board="[[en vez de bañarme · ahorrar agua]]")
L("pablo", "Second, impersonal obligation: [[Se debería invertir más en las energías renovables y mejorar el transporte público.]]", mood="determined", shot="close",
  boardClear=True, board="[[Se debería + infinitive]]",
  diagram='<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="580" height="240" rx="16" fill="#0f172a" stroke="#4ade80" stroke-width="3"/><text x="300" y="50" fill="#fde047" font-family="sans-serif" font-size="30" font-weight="bold" text-anchor="middle">3 TIERS OF ECO-ACTION</text><text x="300" y="106" fill="#f8fafc" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">1. Hay que / Se debe + inf.</text><text x="300" y="158" fill="#38bdf8" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">2. Para proteger el planeta</text><text x="300" y="214" fill="#4ade80" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">3. Es vital que prohíba plástico</text></svg>')
L("vani", "And third, Grade Nine Subjunctive: [[Es imprescindible que protejamos el medio ambiente antes de que sea demasiado tarde.]] Notice [[proteger]] flips G to J: [[protejamos]]!", mood="excited", shot="close",
  board="[[Es imprescindible que protejamos…]]")

# ---------------- ACT 2: GLOBAL ISSUES, CHARITY & VOLUNTEERING ----------------
card("CHARITY & SOLIDARITY", "Global issues and volunteering.", 2.3)
scene("park", [("mum", 260), ("vani", 580), ("pablo", 900)], caption="COMMUNITY DRIVE · Volunteering")
L("mum", "Area D also covers social issues: [[la pobreza]], [[el hambre]], [[el desempleo]], [[la desigualdad]] and homelessness, [[las personas sin hogar]].", mood="teach", shot="close",
  boardClear=True, board="[[la desigualdad · las personas sin hogar]]")
L("vani", "Watch [[el hambre]] — just like [[el agua]], it takes [[el]] in the singular before stressed H A, even though it is feminine!", mood="teach", shot="close",
  board="[[el hambre]] · [[el agua]] (stressed a-)")
L("pablo", "Tell the examiner what charity work you did AND will do! [[El mes pasado trabajé como voluntario en un banco de alimentos y recaudamos fondos para una organización benéfica.]]", mood="happy", shot="close",
  board="[[recaudar fondos · un banco de alimentos]]")
L("vani", "And future commitment: [[El próximo fin de semana donaré ropa usada y juguetes para ayudar a los necesitados.]]", mood="happy", shot="close",
  board="[[para ayudar a los necesitados]]")

# ---------------- ACT 3: DIGITAL MEDIA & TECHNOLOGY RISKS VS BENEFITS ----------------
scene("bedroom", [("dad", 260), ("vani", 580), ("pablo", 900)], caption="ACT THREE · Digital World")
L("dad", "At least technology uses zero paper! Look, I spend six hours a day on social media to save trees!", mood="smug", shot="close", prop="phone")
L("vani", "Balanced arguments win top marks in Paper Two Question Seven! [[Por un lado, las redes sociales nos permiten mantenernos en contacto y descargar información al instante.]]", mood="teach", shot="close",
  boardClear=True, board="[[Por un lado… nos permiten + inf.]]")
L("pablo", "[[Por otro lado, entrañan riesgos graves como el ciberacoso, el robo de identidad, las noticias falsas y la adicción a las pantallas.]]", mood="worried", shot="close",
  board="[[el ciberacoso · la adicción a las pantallas]]")
L("vani", "Finish with wise advice: [[Por lo tanto, es aconsejable que configuremos la privacidad y limitemos el tiempo frente a la pantalla.]]", mood="determined", shot="close",
  board="[[Es aconsejable que limitemos…]]")

# ---------------- EXAMINER GRADE-9 TRAP ----------------
card("EXAMINER GRADE-9 TRAP", "Gender traps, 'para + infinitive' & double verbs!", 2.8)
scene("classroom", [("teacher", 280), ("dad", 600), ("lola", 940)], caption="SEÑOR GARCÍA'S EXAM CLINIC")
L("teacher", "Look at this common Paper Two mistake: Se debería reciclamos plástico por proteger la planeta.", mood="worried", shot="close",
  boardClear=True, board="3 traps: reciclamos · por · la planeta")
L("lola", "Never conjugate two verbs side by side! After [[se debería]], [[hay que]], [[podemos]], or [[debemos]], the second verb MUST stay in the infinitive: [[se debería reciclar]]!", mood="teach", shot="close",
  board="1. [[Se debería reciclar]] (infinitive!)")
L("teacher", "Second, 'in order to' is ALWAYS [[para]] plus infinitive, never [[por]]! [[Para proteger]]. And third, [[el planeta]] and [[el medio ambiente]] are masculine!", mood="teach", shot="close",
  board="2. [[para proteger el planeta]]")
L("dad", "Let me redeem myself! [[Es urgente que reduzcamos la contaminación para proteger el planeta y el agua limpia.]]", mood="determined", shot="close")
sfx("ding")
L("lola", "[[Reduzcamos]], [[para proteger]], [[el planeta]], AND [[el agua limpia]]! Somebody frame that sentence!", mood="excited", shot="wide", gap=0.5)

confess("vani", "VANI · Area D Exam Summary")
L("vani", "Check every Area D essay: [[el problema grave]], [[el planeta]], [[el cambio climático]], [[se debería]] plus infinitive, and [[para proteger el medio ambiente]]!", mood="happy",
  boardClear=True, board="[[el problema · se debería + inf.]]", gap=0.4)

# ---------------- PAUSE CHALLENGE ----------------
card("PAUSE CHALLENGE", "Five seconds to save the planet — and your marks!", 2.8)
challenge(
    1,
    "Fix both gender errors: “La problema afecta a la planeta.”",
    "[[El problema afecta al planeta]]",
    "Greek -ma = [[el problema]], [[el planeta]] + [[a + el = al]]",
    "Question one. Fix the gender mistakes: The problem affects the planet.",
    "[[El problema afecta al planeta.]] Both nouns are masculine, and [[a]] plus [[el]] contracts to [[al]]!"
)
challenge(
    2,
    "Say: “In order to save energy.”",
    "[[Para ahorrar energía]]",
    "Purpose ('in order to') = [[para]] + infinitive",
    "Question two. How do you say: in order to save energy?",
    "[[Para ahorrar energía.]] Always [[para]] plus infinitive for purpose!"
)
challenge(
    3,
    "Fix the verb: “Se debería reciclamos el vidrio.”",
    "[[Se debería reciclar el vidrio]]",
    "Modal [[se debería]] + infinitive [[reciclar]]",
    "Question three. Fix the double-conjugated verb: One ought to recycle glass.",
    "[[Se debería reciclar el vidrio.]] Keep the second verb in the infinitive!"
)
end_card()
