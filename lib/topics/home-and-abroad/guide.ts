import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "home-and-abroad",
  title: "Area A — Home & Abroad (La vida en casa y en el extranjero)",
  strand: "Home, Study & Work",
  icon: "✈️",
  summary:
    "Master describing cities and regions, booking accommodation, solving travel problems, giving polite directions, forecasting weather across three time frames, and narrating Hispanic festivals for Grade 9.",
  intro:
    "Area A (*La vida en casa y en el extranjero*) is one of the highest-yield themes across all three Edexcel IGCSE Spanish (`4SP0`) papers: Listening announcements at train stations and airports (Paper 1), Reading brochures, Q3c verb gap-fills, and Q6/Q7 holiday narratives (Paper 2), plus Picture-Card descriptions and Role-Play hotel/travel situations (Paper 3). Every section below pairs an AoPS discovery puzzle with the exact grammar switches that separate a Grade-6 script from an effortless Grade-9 distinction.",
  guide: [
    {
      id: "regions-and-towns",
      heading: "Regions, towns & describing where you live",
      discovery: {
        problem:
          "Compare two sentences written by IGCSE candidates:\n1. *Sevilla **es** una ciudad histórica y **está** en el sur de España.*\n2. *Sevilla **es** en el sur de España y **está** una ciudad histórica.*\nOnly Sentence 1 earns full grammar credit. Why does Spanish switch from **es** to **está** inside the very same sentence about Seville?",
        idea:
          "**Ser** (*es*) defines **what** a place inherently is (its identity and permanent character: *es una ciudad histórica, animada y turística*), whereas **estar** (*está*) pins **where** a place sits on a map — even when that location never moves (*está en el sur*, *está situada en la costa*).",
      },
      body: "### Pinning Location vs Character: *Estar* (PLACE) vs *Ser* (DOCTOR)\n\nEven though Singapore or Madrid will never walk across the map, geographical **location** in Spanish ALWAYS uses **estar** (or **encontrarse**), never *ser*:\n\n| Function | Verb | Grade-9 Spanish Model | English |\n|---|---|---|---|\n| **Location on a map** | **estar** (+ *situado/a*) / **encontrarse** | *Mi ciudad **está situada** en el sudeste asiático, en la costa.* | My city is located in SE Asia, on the coast. |\n| **Inherent character** | **ser** | *Es una metrópoli moderna, cosmopolita y muy segura.* | It is a modern, cosmopolitan, very safe metropolis. |\n| **Temporary state** | **estar** | *Hoy el centro **está** lleno de turistas y las calles **están** limpias.* | Today the centre is full of tourists and the streets are clean. |\n| **Existence ('there is/are')** | **hay** (present) / **había** (past) | *En mi barrio **hay** muchos espacios verdes y una zona peatonal.* | In my neighbourhood there are many green spaces and a pedestrian zone. |\n\n### Compass Points & Urban Geography\n- **Compass points**: *en el norte* (north), *en el sur* (south), *en el este* (east), *en el oeste* (west), *en el noreste / suroeste*, *en el centro del país*.\n- **Where exactly you live**: *Vivo en las afueras* (on the outskirts — always plural!), *en el casco antiguo* (in the old quarter), *en el campo* (in the countryside), *en la sierra* (in the mountains).\n\n### High-Scoring Comparisons & Evaluations (Paper 2 Q7 & Paper 3)\nMove beyond flat *me gusta mi ciudad* with comparative and cleft structures:\n- **Superiority / Inferiority**: *Singapur es **más** moderno **que** un pueblo tradicional, pero es **menos** tranquilo **que** el campo.*\n- **Equality**: *El transporte público aquí es **tan** eficiente **como** en Tokio* (*tan + adjective/adverb + como*) / *Hay **tantos** rascacielos **como** parques* (*tanto/a/os/as + noun + como*).\n- **Irregular comparatives**: *mejor que* (better than — NEVER *más bueno*), *peor que* (worse than — NEVER *más malo*).\n- **Grade-9 evaluation frames**: *Lo mejor de mi región es que…* (The best thing about my region is that…) · *Lo peor es que el alquiler es carísimo* (The worst thing is that rent is extremely expensive).",
      diagram:
        '<svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compass and Ser versus Estar map for describing towns and regions"><rect x="8" y="8" width="604" height="214" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><circle cx="145" cy="115" r="72" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/><line x1="145" y1="32" x2="145" y2="198" stroke="#2563eb" stroke-width="2"/><line x1="62" y1="115" x2="228" y2="115" stroke="#2563eb" stroke-width="2"/><text x="145" y="26" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">el norte</text><text x="145" y="214" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">el sur</text><text x="40" y="119" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">oeste</text><text x="252" y="119" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">este</text><circle cx="145" cy="115" r="5" fill="#1d4ed8"/><text x="145" y="103" text-anchor="middle" font-size="11" fill="#1e40af">el centro</text><rect x="295" y="24" width="300" height="86" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="311" y="47" font-size="13" font-weight="bold" fill="#14532d">ESTAR = Geographical Location &amp; State</text><text x="311" y="69" font-size="12" fill="#166534">• Está situada en la costa / en las afueras.</text><text x="311" y="90" font-size="12" fill="#166534">• Hoy la plaza está muy animada / limpia.</text><rect x="295" y="122" width="300" height="86" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="311" y="145" font-size="13" font-weight="bold" fill="#78350f">SER = Permanent Identity &amp; Traits</text><text x="311" y="167" font-size="12" fill="#92400e">• Es una ciudad histórica y pintoresca.</text><text x="311" y="188" font-size="12" fill="#92400e">• Lo mejor es que es tan segura como moderna.</text></svg>',
      diagramCaption:
        "Use ESTAR for map coordinates and temporary states, and SER for what kind of town or region it inherently is.",
      workedExamples: [
        {
          title: "Upgrading a flat town description to Grade 9",
          problem:
            "Complete the gap with the correct present-tense form of **estar** or **ser**:\n*Valencia _______ situada en la costa este de España y _______ famosa por su arquitectura moderna.*",
          steps: [
            "First gap: *situada en la costa este* expresses **geographical location** + past participle state → use **está** (from *estar*). Make sure *situada* agrees with feminine *Valencia*!",
            "Second gap: *famosa por su arquitectura* expresses an **inherent defining characteristic** of Valencia → use **es** (from *ser*).",
            "Mind the accent on **está** (3rd person singular verb) versus *esta* ('this').",
          ],
          answer: "está … es",
          yourTurn: {
            question:
              "Complete the sentence with the correct present-tense form of **estar** (*él/ella* — remember the accent!): *Mi pueblo _______ situado en el norte del país.* (Write ONLY the missing verb.)",
            answer: { type: "text", accept: ["está"] },
            solution:
              "Geographical location always requires **estar**, and the 3rd-person singular present form carries a written accent: **está**.",
          },
        },
      ],
      keyPoints: [
        "Geographical location ALWAYS takes **estar** (*está en el norte*, *está situada en la costa*), never *ser*.",
        "Make *situado/a/os/as* agree in gender and number with the place (*el pueblo está situado*, *la ciudad está situada*, *las islas están situadas*).",
        "Equality with adjectives uses **tan + adj + como** (*tan limpia como*); equality with nouns uses **tanto/a/os/as + noun + como** (*tantos parques como*).",
        "Never use the personal *a* before cities or countries: write **visité Madrid** and **conozco España** (NOT *visité a Madrid*).",
      ],
      whyItWorks:
        "Latin *stare* ('to stand at a spot') evolved into Spanish *estar*, so anything anchored at map coordinates 'stands' there with *estar*, whereas Latin *esse* ('to be in essence') became *ser* for identity and enduring traits.",
      strategies: [
        "Map-Pin Test: if you could drop a Google Maps pin to answer the clause, choose **estar**.",
        "Balance every Paper 2/3 town answer with **Lo mejor es que… sin embargo, lo peor es que…** to unlock evaluation marks automatically.",
      ],
      thinkDeeper:
        "Notice the contrast between *Mi barrio **es** tranquilo* ('My neighbourhood is peaceful by nature') and *Hoy mi barrio **está** tranquilo* ('Today my neighbourhood is quiet — unusually or right now'). How can switching *es* to *está* with the same adjective subtly change your meaning in Paper 2 Reading?",
    },
    {
      id: "holidays-and-accommodation",
      heading: "Holidays, accommodation & resolving problems",
      discovery: {
        problem:
          "Read this hotel complaint written for Edexcel Paper 2 Q7:\n*Cuando **llegamos** al albergue juvenil, la habitación **estaba** sucia y el aire acondicionado no **funcionaba**, así que **hablé** con el recepcionista.*\nWhy are **llegamos** and **hablé** in the Preterite, while **estaba** and **funcionaba** are in the Imperfect?",
        idea:
          "**Preterite** (*llegamos*, *hablé*) advances the plot with single, completed actions ('we arrived', 'I spoke'), while **Imperfect** (*estaba*, *funcionaba*) paints the ongoing background state of the room when you walked in ('it was dirty', 'it wasn't working').",
      },
      body: "### Essential Holiday & Preposition Precision\nThree tiny prepositions trap hundreds of IGCSE candidates every June:\n1. **ir de vacaciones** = to go on holiday (NEVER *ir en vacaciones*!).\n2. **viajar en avión / en tren / en autocar / en barco** = to travel by plane/train/coach/boat (use **en** with NO article; exception: **ir a pie** = on foot, **a caballo** = on horseback).\n3. **buscar un hotel / pagar la cuenta / esperar el autobús** = *buscar* ('to look for'), *pagar* ('to pay for'), and *esperar* ('to wait for') ALREADY include 'for' inside the verb — NEVER add *para* or *por* (*busqué un hotel*, NOT *busqué para un hotel*!).\n\n### Accommodation & Booking Vocabulary\n- **Where you stay**: *alojarse en* / *quedarse en* + *un hotel de cinco estrellas*, *un parador* (historic castle/monastery hotel), *una pensión* (guesthouse), *un albergue juvenil* (youth hostel), *un apartamento turístico*, *un camping*.\n- **Booking details**: *reservar con antelación* (to book in advance), *una habitación individual / doble con vistas al mar*, *con pensión completa* (full board) vs *media pensión* (half board).\n\n### Narrating & Resolving Hotel Complaints (Paper 2 Q7 & Paper 3 Role-Play)\n\n| Situation | Present (Live Role-Play: Paper 3) | Past Narrative (Essay: Paper 2 Q7) |\n|---|---|---|\n| **Broken equipment** | *El aire acondicionado no **funciona** / el ascensor **está** averiado.* | *El aire acondicionado no **funcionaba** / el ascensor **estaba** averiado.* |\n| **Dirty / noisy room** | *La habitación **está** sucia y es demasiado ruidosa.* | *La habitación **estaba** sucia y **había** muchísimo ruido.* |\n| **Missing items** | *No **hay** toallas ni papel higiénico en el baño.* | *No **había** toallas ni jabón cuando **entramos**.* |\n| **Polite action / resolution** | *¿**Podría** cambiarme de habitación, por favor?* | ***Me quejé** en recepción y nos **dieron** otra habitación gratis.* |",
      diagram:
        '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hotel complaint timeline contrasting Imperfect background states with Preterite completed actions"><rect x="8" y="8" width="604" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><rect x="30" y="28" width="560" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/><text x="48" y="52" font-size="13" font-weight="bold" fill="#4c1d95">IMPERFECTO = Ongoing Background Scene (Camera Photo)</text><text x="48" y="75" font-size="12" fill="#5b21b6">La habitación estaba sucia · No había toallas · El ascensor no funcionaba</text><line x1="45" y1="145" x2="575" y2="145" stroke="#0f172a" stroke-width="2.5"/><circle cx="120" cy="145" r="8" fill="#dc2626"/><text x="120" y="128" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">1. Llegamos</text><text x="120" y="172" text-anchor="middle" font-size="11" fill="#334155">(we arrived)</text><circle cx="310" cy="145" r="8" fill="#dc2626"/><text x="310" y="128" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">2. Me quejé</text><text x="310" y="172" text-anchor="middle" font-size="11" fill="#334155">(I complained)</text><circle cx="500" cy="145" r="8" fill="#16a34a"/><text x="500" y="128" text-anchor="middle" font-size="12" font-weight="bold" fill="#14532d">3. Nos cambiaron</text><text x="500" y="172" text-anchor="middle" font-size="11" fill="#334155">(they moved us)</text><text x="310" y="198" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">PRETÉRITO = Completed Plot Events Along the Timeline</text></svg>',
      diagramCaption:
        "Combine Imperfect background descriptions with Preterite plot steps to hit the top grammar band in Paper 2 Q7.",
      workedExamples: [
        {
          title: "Preterite -car spelling shift + Imperfect background",
          problem:
            "Fill the two gaps with (1) Preterite of **buscar** (*yo*) and (2) Imperfect of **haber** (impersonal 'there were'):\n*El verano pasado _______ (1) una pensión barata, pero por desgracia no _______ (2) toallas limpias.*",
          steps: [
            "Gap 1: **buscar** ends in **-car**. In the *yo* form of the Preterite, *c → qu* before *-é* to keep the hard /k/ sound → **busqué** (remember: NO *para* after *buscar*!).",
            "Gap 2: Impersonal 'there was / there were' as an ongoing past background condition is ALWAYS singular **había** (NEVER plural *habían*!).",
          ],
          answer: "busqué … había",
          yourTurn: {
            question:
              "Complete the sentence with the **preterite** form of **sacar** (*yo* — watch the *-car* spelling change and accent!): *En Mallorca _______ muchísimas fotos del castillo.* (Write ONLY the missing verb.)",
            answer: { type: "text", accept: ["saqué", "yo saqué"] },
            solution:
              "Verbs ending in **-car** change **c → qu** in the *yo* preterite before *-é*: *sacar → **saqué***.",
          },
        },
      ],
      keyPoints: [
        "Always write **ir de vacaciones** (never *en vacaciones*) and **en avión / en tren** (no article) vs **a pie**.",
        "Never put *para* after **buscar** (*busco mi pasaporte* = I am looking for my passport).",
        "Impersonal *haber* in the past background is ALWAYS singular **había** ('there was / there were'), even before plural nouns (*no había toallas*).",
        "Watch reflexive **alojarse** and **quedarse**: *nos alojamos en un parador*, *me quedé una semana*.",
      ],
      whyItWorks:
        "Because *haber* used impersonally ('there exists') treats the noun that follows as a direct object rather than a grammatical subject, it stays frozen in the 3rd-person singular across every tense: *hay*, *había*, *hubo*, *habrá*, *haya*.",
      strategies: [
        "In Paper 2 Q7 holiday essays, plant one 2-sentence 'mini-disaster + resolution' paragraph to showcase Imperfect + Preterite naturally.",
        "In Paper 3 Role-Plays, use **¿Podría + infinitive…?** ('Could you…?') whenever the prompt says 'Ask the receptionist if…'.",
      ],
      thinkDeeper:
        "What is the gender difference between **el guía** and **la guía**? (*El/la guía turístico/a* = the human tour guide; *la guía turística* = the printed guidebook — a classic Edexcel Paper 1 Listening & Paper 2 Reading distractor!)",
    },
    {
      id: "transport-and-directions",
      heading: "Transport, travel & polite directions",
      discovery: {
        problem:
          "A tourist stops you outside Madrid's Atocha station and asks: *«Perdone, ¿para ir al Museo del Prado?»*\nWhy must you answer **Siga todo recto, cruce la plaza y gire a la derecha** instead of *Sigue todo recto, cruza la plaza y gira a la derecha*?",
        idea:
          "The stranger addressed you with polite **Perdone** (*usted*), so you must reply in the formal **usted imperative** (**siga, cruce, gire**), which uses the exact same vowel-flipped forms as the **Present Subjunctive** (*-ar → -e*, *-er/-ir → -a*).",
      },
      body: "### Station & Airport Survival Kit (Paper 1 Listening Hotspots)\nEdexcel Paper 1 loves station and airport PA announcements filled with numbers, platforms, and delays:\n- **Tickets**: *un billete sencillo* (single) vs *un billete de ida y vuelta* (return); *sacar / comprar un billete en la taquilla*.\n- **Trains**: *el tren con destino a Sevilla sale del **andén** cuatro / de la **vía** dos* · *hay que **hacer transbordo** en Córdoba* (you have to change trains).\n- **Flights**: *facturar el equipaje* (check in luggage), *enseñar el pasaporte y la tarjeta de embarque*, *pasar por el control de seguridad*, *dirigirse a la puerta de embarque*.\n- **Disruptions**: *el vuelo **lleva** media hora de **retraso*** (is half an hour delayed), *el tren ha sido **cancelado***, ***perdí** el autobús* (I missed the bus — Spanish says 'lose' the bus/train, *perder*, NEVER *extrañar*!).\n- **Immediate past idiom**: **acabar de + infinitive** = to have just done something (*El tren **acaba de salir*** = The train has just left; *Acabamos de aterrizar* = We have just landed).\n\n### Giving Directions: Informal *tú* vs Polite *usted*\n\n| English Instruction | Informal **tú** (to a friend) | Polite **usted** (stranger / Paper 3 Role-Play) | Spelling Note |\n|---|---|---|---|\n| Go straight ahead | **Sigue** todo recto | **Siga** todo recto | *seguir*: *yo sigo* → drops *u* before *o/a*! |\n| Turn right / left | **Gira** / **Tuerce** a la derecha | **Gire** / **Tuerza** a la derecha | *girar* (-ar → -e); *torcer* (o→ue, c→z) |\n| Cross the bridge / street | **Cruza** el puente | **Cruce** el puente | *-zar* changes *z → c* before *-e*! |\n| Take the second street | **Toma** / **Coge** la segunda calle | **Tome** / **Coja** la segunda calle | *coger* changes *g → j* before *-a* (*coja*) |\n| Go past the traffic lights | **Pasa** el semáforo | **Pase** el semáforo | regular *-ar* |\n\n- **Ordinal numbers before feminine *calle*** drop nothing, though *primero* and *tercero* drop *-o* before masculine singular nouns (*el **primer** semáforo*, *el **tercer** cruce*, *la **primera** calle a la izquierda*).",
      diagram:
        '<svg viewBox="0 0 620 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Street map showing polite usted directions from the station across the bridge to the museum"><rect x="8" y="8" width="604" height="209" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><rect x="40" y="95" width="540" height="36" fill="#e2e8f0"/><rect x="290" y="25" width="40" height="175" fill="#e2e8f0"/><rect x="155" y="88" width="56" height="50" rx="4" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/><text x="183" y="80" text-anchor="middle" font-size="11" font-weight="bold" fill="#0369a1">el puente</text><circle cx="72" cy="113" r="10" fill="#dc2626"/><text x="72" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">Estación</text><path d="M 88 113 L 310 113 L 310 52" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-dasharray="6,4"/><polygon points="310,42 303,56 317,56" fill="#2563eb"/><rect x="342" y="28" width="110" height="44" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="397" y="54" text-anchor="middle" font-size="12" font-weight="bold" fill="#14532d">Museo (meta)</text><rect x="342" y="144" width="248" height="60" rx="8" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/><text x="354" y="164" font-size="11" font-weight="bold" fill="#92400e">Ruta formal (usted):</text><text x="354" y="180" font-size="11" fill="#78350f">1. Siga todo recto y cruce el puente.</text><text x="354" y="195" font-size="11" fill="#78350f">2. En el semáforo, gire a la izquierda.</text></svg>',
      diagramCaption:
        "Polite usted commands mirror the Present Subjunctive: siga (keep going), cruce (cross), gire (turn).",
      workedExamples: [
        {
          title: "Forming polite usted imperatives & acabar de",
          problem:
            "1. Give the polite **usted** command of **cruzar**: *_______ la plaza mayor.*\n2. Translate the time frame accurately: what does *El vuelo acaba de aterrizar* mean?",
          steps: [
            "1. Take present *yo* of *cruzar* (*cruzo*), drop *-o*, add opposite *-ar* vowel *-e*, and apply *-zar → -ce* spelling rule → **Cruce**.",
            "2. Present of *acabar* (*acaba*) + *de* + infinitive (*aterrizar*) means 'has just landed' (NOT 'is finishing landing').",
          ],
          answer: "1. Cruce · 2. The flight has just landed.",
          yourTurn: {
            question:
              "Complete the polite direction to a stranger (**usted** command of **seguir**): *Perdone, señor, _______ todo recto hasta la rotonda.* (Write ONLY the missing verb.)",
            answer: { type: "text", accept: ["siga", "usted siga"] },
            solution:
              "From *yo sigo*, drop *-o* and add *-a* for an *-ir* verb in the polite *usted* imperative: **siga**.",
          },
        },
      ],
      keyPoints: [
        "Parts of the day take **por** in standard Spanish: **por la mañana**, **por la tarde**, **por la noche** (NOT *en la mañana*); with a specific clock hour use **de** (*a las ocho de la mañana*).",
        "To 'miss' transport is **perder** (*perdí el tren*); to 'be delayed' is **llevar retraso** (*el avión lleva retraso*).",
        "Polite **usted** commands flip the ending vowel (*gire, pase, cruce, siga, tome*) — keep the register consistent throughout a conversation!",
        "**Acabar de + infinitive** in the Present = 'to have just…' (*acabo de llegar*); in the Imperfect = 'had just…' (*acababa de salir*).",
      ],
      whyItWorks:
        "Spanish uses subjunctive forms for **usted** commands because historically polite requests softened direct orders into wishes ('may Your Grace continue straight ahead' → *siga usted todo recto*).",
      strategies: [
        "In Paper 1 Listening, watch out for **primero… pero ahora…** announcements where a platform or departure time is corrected mid-sentence!",
        "Before masculine singular nouns, drop *-o* on **primer** and **tercer** (*el primer cruce*, *el tercer andén*).",
      ],
      thinkDeeper:
        "In Spain, *coger el autobús / el metro* is everyday standard Spanish, whereas in much of Latin America *tomar el autobús* is strongly preferred because *coger* is taboo slang there. Both *coger* and *tomar* are 100% accepted by Edexcel `4SP0` examiners!",
    },
    {
      id: "weather-and-climate",
      heading: "Weather & climate across three time frames",
      discovery: {
        problem:
          "Why are BOTH of these sentences wrong in Spanish, and how do you fix each one?\n1. ❌ *En verano en Singapur **hace muy calor**.*\n2. ❌ *Ayer **estuvo calor** y **hizo lluvioso**.*",
        idea:
          "Spanish splits weather across FOUR distinct verb patterns that CANNOT be mixed: **hacer + noun** (*calor, frío, sol, viento* — so it takes **mucho**, NEVER *muy*!), **estar + adjective** (*nublado, despejado*), **haber + noun** (*tormenta, niebla*), and **standalone weather verbs** (*llover, nevar*).",
      },
      body: "### The Four-Pillar Weather Matrix Across Three Time Frames\nIn Paper 2 Q7 and Paper 3, shifting weather smoothly across Past (Imperfect background vs Preterite event), Present, and Future is one of the fastest ways to prove 3-time-frame mastery:\n\n| Pillar | Present (*Hoy…*) | Imperfect Background (*Cuando salimos…*) | Preterite Event (*Ayer…*) | Simple Future (*Mañana…*) |\n|---|---|---|---|---|\n| **1. HACER + noun** (*calor, frío, sol, viento, buen/mal tiempo*) | **hace** (mucho) calor / buen tiempo | **hacía** sol / mucho frío | **hizo** un tiempo horrible | **hará** buen tiempo |\n| **2. ESTAR + adjective** (*nublado, despejado, lluvioso*) | **está** despejado / nublado | **estaba** muy nublado | **estuvo** nublado todo el día | **estará** despejado |\n| **3. HABER + noun** (*tormenta, niebla, chubascos, relámpagos*) | **hay** tormenta / niebla | **había** mucha niebla | **hubo** una tormenta fuerte | **habrá** chubascos |\n| **4. Pure Verbs** (*llover* o→ue, *nevar* e→ie) | **llueve** / **nieva** | **llovía** / **nevaba** | **llovió** a cántaros / **nevó** | **lloverá** / **nevará** |\n\n### Critical Grade-9 Weather Distinctions\n- **Mucho vs Muy**: Because *el calor*, *el frío*, *el viento*, and *el sol* are **nouns** after *hacer*, you MUST write *hace **mucho** calor*, *hacía **mucho** viento*, *hay **mucha** niebla*. Use **muy** ONLY before true adjectives after *estar*: *está **muy** nublado*.\n- **Imperfect (*hacía / llovía*) vs Preterite (*hizo / llovió*)**:\n  - Scene-setting background: *Cuando **llegamos** a los Pirineos, **nevaba** y **hacía** mucho frío.*\n  - Completed summary of a whole day/trip: *El martes **llovió** todo el día e **hizo** un tiempo espantoso* (note *y → e* before *(h)i-*!).",
      diagram:
        '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four weather verb pillars in Spanish: Hacer plus noun, Estar plus adjective, Haber plus noun, and pure verbs Llover and Nevar"><rect x="8" y="8" width="604" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/><rect x="22" y="24" width="280" height="82" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="36" y="46" font-size="12" font-weight="bold" fill="#92400e">1. HACER + NOUN (takes MUCHO!)</text><text x="36" y="66" font-size="11" fill="#78350f">hace / hacía / hizo / hará</text><text x="36" y="86" font-size="11" fill="#78350f">+ mucho calor, frío, sol, viento, buen tiempo</text><rect x="318" y="24" width="280" height="82" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/><text x="332" y="46" font-size="12" font-weight="bold" fill="#075985">2. ESTAR + ADJECTIVE (takes MUY!)</text><text x="332" y="66" font-size="11" fill="#0369a1">está / estaba / estuvo / estará</text><text x="332" y="86" font-size="11" fill="#0369a1">+ muy nublado, despejado, tormentoso</text><rect x="22" y="116" width="280" height="82" rx="10" fill="#f3e8ff" stroke="#9333ea" stroke-width="1.5"/><text x="36" y="138" font-size="12" font-weight="bold" fill="#581c87">3. HABER + NOUN (always 3rd sg.)</text><text x="36" y="158" font-size="11" fill="#6b21a8">hay / había / hubo / habrá</text><text x="36" y="178" font-size="11" fill="#6b21a8">+ tormenta, mucha niebla, chubascos</text><rect x="318" y="116" width="280" height="82" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="332" y="138" font-size="12" font-weight="bold" fill="#14532d">4. PURE WEATHER VERBS</text><text x="332" y="158" font-size="11" fill="#166534">llueve / llovía / llovió / lloverá</text><text x="332" y="178" font-size="11" fill="#166534">nieva / nevaba / nevó / nevará</text></svg>',
      diagramCaption:
        "Never mix pillars: nouns pair with hacer/haber + mucho, adjectives pair with estar + muy, and rain/snow are single verbs.",
      workedExamples: [
        {
          title: "Forecasting tomorrow's weather in the Simple Future",
          problem:
            "Complete this weather forecast with the Simple Future (3rd person singular) of **hacer** and **haber**:\n*Según el pronóstico, mañana _______ (1) sol por la mañana, pero por la tarde _______ (2) tormentas.*",
          steps: [
            "Both **hacer** and **haber** have irregular Simple Future stems: *hacer → har-* and *haber → habr-*.",
            "Add the 3rd-person singular future ending **-á** (with a mandatory written accent!): **hará** and **habrá**.",
            "Notice *habrá tormentas* stays singular **habrá** even though *tormentas* is plural!",
          ],
          answer: "hará … habrá",
          yourTurn: {
            question:
              "Complete the sentence with **mucho** or **muy**: *En agosto en Andalucía hace _______ calor.* (Write ONLY the missing word.)",
            answer: { type: "text", accept: ["mucho"] },
            solution:
              "In *hace calor*, *calor* is a masculine singular noun ('it makes much heat'), so it requires the adjective **mucho**, never the adverb *muy*.",
          },
        },
      ],
      keyPoints: [
        "Write **hace mucho calor / mucho frío / mucho viento** (NEVER *muy calor*), and **está muy nublado** (NEVER *hace nublado*).",
        "Memorise the irregular future weather stems: **hará** (*hacer*) and **habrá** (*haber*).",
        "Remember **el clima** is masculine (*un clima mediterráneo / tropical*) because it is a Greek *-ma* noun!",
        "Use **llover a cántaros** ('to rain cats and dogs / pour down') for instant idiomatic flair in Paper 2/3.",
      ],
      whyItWorks:
        "In Spanish, *hacer calor* literally means 'the sky makes heat'. Since you say 'much heat' (*mucho calor*) rather than 'very heat' (*muy calor*), the noun grammar makes the *mucho* rule 100% logical.",
      strategies: [
        "Spot the time marker first in Paper 1 Listening weather reports: *ayer / anoche* (past), *actualmente / ahora mismo* (present), *mañana / el fin de semana que viene* (future).",
        "Pair weather with a *si* clause for easy Grade-9 complexity: *Si hace buen tiempo mañana, iremos a la playa; si llueve, visitaremos el museo.*",
      ],
      thinkDeeper:
        "Why do we change *y* ('and') to **e** in *llovió **e** hizo frío*? Before any word starting with the sound /i/ (spelt *i-* or *hi-*, except diphthong *hie-* like *y hielo*), Spanish replaces *y* with **e** to avoid two identical vowel sounds colliding!",
    },
    {
      id: "festivals-and-customs",
      heading: "Hispanic festivals, traditions & passive 'se'",
      discovery: {
        problem:
          "Look at two facts about *Las Fallas* in Valencia:\n- *La fiesta **se celebra** en marzo.* (singular: *celebra*)\n- *La última noche **se queman** enormes monumentos de cartón.* (plural: *queman*)\nWhy did the verb jump from singular **se celebra** to plural **se queman**?",
        idea:
          "In the **passive `se` construction** (*pasiva refleja*), the thing being celebrated or burned is the grammatical subject! Singular noun → 3rd-person singular verb (*se celebra la fiesta*); plural noun → 3rd-person plural verb (*se queman monumentos*, *se lanzan tomates*).",
      },
      body: "### Five Iconic Hispanic Festivals You Should Know for Edexcel `4SP0`\nCultural specificity impresses examiners in Paper 2 Q7 and Paper 3 Topic Conversations:\n\n| Festival & Location | When | Signature Customs (with Passive / Reflexive `se`) |\n|---|---|---|\n| **Las Fallas** (Valencia, Spain) | March (15–19) | ***Se construyen** estatuas satíricas (*ninots*), **se tiran** fuegos artificiales y el día 19 **se queman** en grandes hogueras (*la Cremà*).* |\n| **La Tomatina** (Buñol, near Valencia) | Last Wednesday of August | *Miles de participantes **se reúnen** en la plaza y **se lanzan** más de cien toneladas de tomates maduros durante una hora.* |\n| **Los Sanfermines** (Pamplona, Spain) | July (6–14) | *La gente **se viste** de blanco con un pañuelo rojo y cada mañana a las ocho **se corre** el famoso **encierro** delante de los toros.* |\n| **Semana Santa** (Seville, Málaga & across Hispanosphere) | March / April | ***Se organizan** procesiones solemnes por las calles con pasos religiosos, música de tambores y trajes tradicionales.* |\n| **El Día de los Muertos** (Mexico) | 1–2 November | ***Se montan** altares coloridos con flores, velas, fotos y calaveras de azúcar para honrar y recordar a los difuntos.* |\n\n### Mastering Passive `se` (*Pasiva Refleja*) vs Reflexive Plural\n1. **Passive `se` + singular noun / infinitive / clause** → **3rd-person singular**:\n   - *En mi país **se come** muy bien* · ***Se celebra** una fiesta increíble.*\n2. **Passive `se` + plural noun** → **3rd-person plural**:\n   - *Durante el desfile **se cantan** canciones tradicionales y **se bailan** danzas regionales.*\n3. **Narrating a Festival Across Three Time Frames (Grade-9 Blueprint)**:\n   - **Past**: *El año pasado **asistí a** Las Fallas en Valencia; el ambiente **era** inolvidable y **vi** cómo **se quemaron** los monumentos.*\n   - **Present**: *Hoy en día esta tradición **atrae** a millones de visitantes, aunque a veces las calles **están** demasiado llenas.*\n   - **Future / Conditional**: *En el futuro **me encantaría** ir a México para que **pueda** experimentar el Día de los Muertos en persona.*",
      workedExamples: [
        {
          title: "Passive 'se' singular vs plural agreement in Paper 2 Q3c",
          problem:
            "Complete the sentence about *La Tomatina* with the correct present-tense form of **lanzar** in the passive *se* construction:\n*En Buñol se _______ miles de tomates cada agosto.*",
          steps: [
            "Identify what is being thrown: *miles de tomates* (plural noun!).",
            "In passive *se*, the verb agrees in number with that noun → 3rd-person plural present of *lanzar* (*ellos/ellas*).",
            "Conjugate *lanzar* in 3rd-person plural present: **lanzan** (*se lanzan miles de tomates*).",
          ],
          answer: "lanzan",
          yourTurn: {
            question:
              "Complete the passive *se* sentence about *Las Fallas* with the correct **present-tense** form of **quemar**: *El diecinueve de marzo se _______ los monumentos en Valencia.* (Write ONLY the missing verb.)",
            answer: { type: "text", accept: ["queman"] },
            solution:
              "Because *los monumentos* is plural, the passive *se* verb must be 3rd-person plural: **queman** (*se queman los monumentos*).",
          },
        },
      ],
      keyPoints: [
        "Passive **se** agrees with the noun that follows: **se celebra** *el festival* (singular) vs **se celebran** *las fiestas* (plural).",
        "Remember **asistir a** ('to attend') ALWAYS requires the preposition **a**: *asistí a un desfile* (NOT *asistí un desfile*), and is a false friend — it does NOT mean 'to assist/help' (*ayudar*)!",
        "**La costumbre** ('custom/habit') is feminine (*una costumbre española*), whereas *el disfraz* ('costume/fancy dress') is masculine!",
        "Weighing pros and cons of mass festivals (*genera empleo y turismo, sin embargo produce mucha basura y ruido*) hits top AoPS/Edexcel evaluation bands.",
      ],
      whyItWorks:
        "English loves true passives ('monuments are burned'), which sound heavy and journalistic in Spanish (*los monumentos son quemados*). Native Spanish speakers overwhelmingly prefer the crisp *pasiva refleja* (**se queman los monumentos** — literally 'monuments burn themselves / get burned').",
      strategies: [
        "Memorise TWO concrete Hispanic festivals (one in Spain like *Las Fallas*, one in Latin America like *El Día de los Muertos*) with 3 vivid details each — you can deploy them in Paper 2 Q7 AND Paper 3!",
        "Use **valió la pena** ('it was worth it') or **fue una experiencia inolvidable** ('it was an unforgettable experience') as your past-tense evaluation clincher.",
      ],
      thinkDeeper:
        "In Buñol's *Tomatina*, critics argue that throwing food wastes resources, while defenders point out that the town uses overripe, non-marketable tomatoes and earns vital tourism revenue. How would you express both sides in Spanish using *Por un lado… por otro lado…*?",
    },
  ],
  learn: {
    flashcards: [
      { front: "How do you say 'I went on holiday to Spain'?", back: "**Fui de vacaciones a España.** (NEVER *fui en vacaciones*!)" },
      { front: "Why is *visité a Barcelona* wrong?", back: "No personal *a* before cities or countries! Write **visité Barcelona** (keep personal *a* for people: *visité a mis primos*)." },
      { front: "Why is *Madrid es en el centro* wrong?", back: "Geographical location ALWAYS uses **estar**: **Madrid está en el centro de España.**" },
      { front: "How do you say 'I looked for a cheap hotel'?", back: "**Busqué un hotel barato.** (*buscar* already means 'to look for' — NEVER add *para* and remember *-car → -qué* in *yo* preterite!)" },
      { front: "How do you say 'in the morning / in the afternoon' (general)?", back: "**por la mañana / por la tarde** (NEVER *en la mañana*; use *de la mañana* only after a specific clock hour like *a las nueve de la mañana*)." },
      { front: "Why is *hace muy calor* wrong?", back: "*Calor* is a masculine noun after *hacer*, so use **mucho**: **hace mucho calor**." },
      { front: "Give the 4 weather verbs in the Simple Future ('tomorrow…').", back: "**hará** (*hacer*: *hará sol*), **estará** (*estar*: *estará nublado*), **habrá** (*haber*: *habrá tormenta*), **lloverá / nevará**." },
      { front: "Difference between *el guía* and *la guía*?", back: "**el/la guía (turístico/a)** = the human tour guide · **la guía (turística)** = the guidebook." },
      { front: "Polite *usted* commands for 'go straight on, cross, turn right'?", back: "**Siga todo recto, cruce (la calle) y gire (o tuerza) a la derecha.**" },
      { front: "How do you say 'a return ticket' and 'to change trains'?", back: "**un billete de ida y vuelta** · **hacer transbordo**" },
      { front: "How do you say 'the flight is delayed' and 'I missed the train'?", back: "**El vuelo lleva retraso.** · **Perdí el tren.**" },
      { front: "What does *Acabo de llegar al aeropuerto* mean?", back: "**I have just arrived at the airport.** (*acabar de + infinitive*)" },
      { front: "Difference between *la pensión completa* and *la media pensión*?", back: "**la pensión completa** = full board (all meals) · **la media pensión** = half board (breakfast + dinner)." },
      { front: "Why is *no habían toallas* wrong?", back: "Impersonal *haber* ('there was / there were') is ALWAYS singular: **no había toallas**." },
      { front: "Passive *se*: *En Valencia se (quemar) _______ monumentos.*", back: "**se queman** (plural verb agrees with plural *monumentos*!)." },
      { front: "False friend alert: *asistir a un festival* vs *la costumbre*?", back: "**asistir a** = to attend (needs **a**, NOT 'assist'!) · **la costumbre** = custom/tradition (*el disfraz* = fancy-dress costume)." },
    ],
    mustKnow: [
      "Can you contrast **ser** (inherent town character: *es histórica y animada*) with **estar** (map location & temporary state: *está situada en la costa, está limpia*)?",
      "Can you build comparisons of inequality (*más/menos… que*, *mejor/peor que*) and equality (*tan + adj + como*, *tantos/as + noun + como*)?",
      "Can you narrate a holiday problem combining **Imperfect** background states (*la habitación estaba sucia, el aire acondicionado no funcionaba, no había toallas*) with **Preterite** events (*me quejé, nos cambiaron de habitación*)?",
      "Can you make polite **usted** hotel requests (*¿Podría darme otra habitación?*) and give **usted** street directions (*siga, cruce, gire, tome*) without slipping into *tú*?",
      "Can you decode station/airport announcements (*el andén, la vía, hacer transbordo, llevar retraso, facturar el equipaje, la puerta de embarque*)?",
      "Can you express weather accurately across **Past, Present, and Future** without mixing the 4 verb pillars (*hace mucho calor, está nublado, hay niebla, llovió, hará buen tiempo*)?",
      "Can you use passive **se** accurately in singular and plural (*se celebra*, *se queman*, *se lanzan*) to describe Hispanic festivals?",
      "Can you deploy **acabar de + infinitive**, **lo mejor / lo peor es que…**, and a Grade-9 **si tuviera… viajaría…** clause in a 130–150 word Paper 2 Q7 travel essay?",
    ],
    misconceptions: [
      {
        wrong: "Never write ❌: *El verano pasado fui en vacaciones a Mallorca.*",
        right: "Write instead ✅: **El verano pasado fui de vacaciones a Mallorca.** — 'On holiday' is ALWAYS **de vacaciones**, and *las vacaciones* is always plural.",
      },
      {
        wrong: "Never write ❌: *Visité a Madrid y conocí a España.*",
        right: "Write instead ✅: **Visité Madrid y conocí España.** — Never use the personal *a* before cities, regions, or countries; keep personal *a* strictly for people and pets (*visité a mis abuelos*).",
      },
      {
        wrong: "Never write ❌: *Busqué para un albergue juvenil barato.*",
        right: "Write instead ✅: **Busqué un albergue juvenil barato.** — *Buscar* ('to look for'), *pagar* ('to pay for'), and *esperar* ('to wait for') NEVER take *para* or *por* before the thing sought/paid/awaited.",
      },
      {
        wrong: "Never write ❌: *Salimos en la mañana por el avión.*",
        right: "Write instead ✅: **Salimos por la mañana en avión.** — Parts of the day take **por** (*por la mañana / tarde / noche*), and transport takes **en** with NO article (*en avión, en tren, en autocar*).",
      },
      {
        wrong: "Never write ❌: *Hace muy calor y hace lluvioso en julio.*",
        right: "Write instead ✅: **Hace mucho calor y llueve (o está lluvioso) en julio.** — *Calor/frío/viento/sol* are nouns after *hacer* (so they take **mucho**), while rain is a verb (**llueve**) or an adjective after *estar* (*está lluvioso*).",
      },
      {
        wrong: "Never write ❌: *Sevilla es en el sur de España.*",
        right: "Write instead ✅: **Sevilla está (situada) en el sur de España.** — Geographical location ALWAYS takes **estar**, even though cities never move!",
      },
      {
        wrong: "Never write ❌: *En mi hotel no habían toallas limpias.*",
        right: "Write instead ✅: **En mi hotel no había toallas limpias.** — Impersonal 'there was / there were' is frozen in the 3rd-person singular across all tenses (*hay, había, hubo, habrá*).",
      },
      {
        wrong: "Never write ❌: *En La Tomatina se lanza miles de tomates.*",
        right: "Write instead ✅: **En La Tomatina se lanzan miles de tomates.** — In the passive *se* construction, a plural noun requires the 3rd-person plural verb.",
      },
    ],
    examMistakes: [
      "**Paper 1 Listening (Platform & Gate Switches)**: Announcements regularly give an initial platform or gate and then correct it (*El tren para Valencia saldrá del andén seis… atención, cambio de andén: saldrá del **andén nueve***). Wait until the end of the sentence before ticking!",
      "**Paper 1/2 False Friends**: *la costumbre* = custom/habit (NOT fancy-dress costume, which is *el disfraz*); *asistir a* = to attend (NOT to help); *el largo viaje* = the long trip (*largo* = long, NOT large!).",
      "**Paper 2 Q3c Preterite Accents & -car/-gar/-zar**: Writing *viajo* ('I travel') instead of **viajó** ('he/she travelled'), or *llegé / buscé / empezé* instead of **llegué / busqué / empecé**, drops instant Q3c grammar marks.",
      "**Paper 2 Q6 & Q7 Time-Frame Trap**: Bullet points in Q7 always test **past**, **present**, and **future/conditional**. If a bullet asks *¿Qué hiciste el año pasado?* and you write only Imperfect (*iba a la playa*), make sure you include clear Preterite events (*nadé, visité, comimos*) too!",
      "**Paper 3 Role-Play Register Slip**: In Section A Role-Plays set at a hotel reception or tourist office, the examiner addresses you as **usted**. Keep your questions in *usted* (**¿Tiene una habitación libre? ¿Cuánto cuesta? ¿Dónde está el ascensor?**) rather than *tienes*.",
      "**Gender Traps on Travel Nouns**: Don't write *la mapa*, *la clima*, *la problema*, or *la viaje*! Memorise **el mapa**, **el clima**, **el problema**, **el idioma**, and all *-aje* nouns (**el viaje**, **el equipaje**, **el paisaje**, **el alojamiento**).",
      "**Ordinal Dropping Before Masculine Nouns**: Write **el primer día** and **el tercer cruce** (dropping *-o* before masculine singular nouns), but keep **la primera calle** for feminine nouns.",
    ],
    mnemonics: [
      {
        topic: "Masculine -aje & Greek -ma Travel Nouns",
        device: "EL VIAJE DEL MAPA Y DEL CLIMA",
        explanation:
          "Every noun ending in **-aje** is masculine (*el viaje, el equipaje, el paisaje, el garaje*), plus **el mapa** and Greek *-ma* words (**el clima, el problema, el idioma, el programa**).",
      },
      {
        topic: "Polite Usted Direction Commands",
        device: "YO → DROP -O → FLIP THE VOWEL (SIGA · CRUCE · GIRE)",
        explanation:
          "Take the present *yo* stem (*sigo, cruzo, giro*), drop *-o*, and swap *-ar → -e* (*cruce, gire*) or *-er/-ir → -a* (*siga*) — identical to the Present Subjunctive!",
      },
      {
        topic: "Four Weather Verb Pillars",
        device: "H-E-H-V: Hacer (+ noun) · Estar (+ adj) · Haber (+ noun) · Verbs (llover/nevar)",
        explanation:
          "Check which pillar your weather word belongs to before choosing *mucho* (with *hacer/haber* nouns: *hace mucho calor, hay mucha niebla*) vs *muy* (with *estar* adjectives: *está muy nublado*).",
      },
    ],
    realWorld: [
      {
        title: "Las Fallas de Valencia (UNESCO Heritage)",
        detail:
          "Every March, Valencia fills over 700 streets and squares with giant satirical monuments (*fallas*), daily 2 p.m. gunpowder firework symphonies (*la mascletà*), floral offerings, and the fiery midnight finale (*la Cremà*) on 19 March.",
        emoji: "🔥",
      },
      {
        title: "Spain's AVE High-Speed Rail Network",
        detail:
          "Operated by Renfe at speeds up to 310 km/h, the *AVE* connects Madrid with Barcelona, Seville, Málaga, Valencia, and Alicante — a model case study when comparing eco-friendly train travel with short-haul flights in IGCSE Spanish.",
        emoji: "🚄",
      },
      {
        title: "El Día de los Muertos in Oaxaca & Michoacán",
        detail:
          "On 1–2 November across Mexico, families decorate home altars (*ofrendas*) and candlelit cemeteries with orange marigolds (*cempasúchil*), *papel picado*, and the favourite dishes of deceased relatives in a joyful celebration of memory.",
        emoji: "🌼",
      },
      {
        title: "Paradores de Turismo de España",
        detail:
          "Nearly 100 state-run *Paradores* allow travellers to sleep inside historic palaces, convents, and castles — such as the *Parador de Granada* inside the Alhambra grounds or the medieval *Hostal dos Reis Católicos* in Santiago de Compostela.",
        emoji: "🏰",
      },
      {
        title: "Comparing Singapore & Hispanic Cities in Paper 3",
        detail:
          "Tanglin candidates shine in Paper 3 Speaking by contrasting tropical, ultra-modern Singapore (*hace calor y humedad todo el año; el metro es limpísimo y puntual*) with historic Spanish cities (*el casco antiguo, las plazas peatonales y las cuatro estaciones*).",
        emoji: "🌆",
      },
    ],
    videos: [
      {
        title: "IGCSE Spanish Holidays, Accommodation & Past Tenses Mastery",
        channel: "YouTube Search — Edexcel IGCSE Spanish",
        url: "https://www.youtube.com/results?search_query=igcse+spanish+holidays+accommodation+preterite+imperfect",
      },
      {
        title: "Giving Polite Directions in Spanish (Tú vs Usted Imperatives)",
        channel: "YouTube Search — Spanish Grammar",
        url: "https://www.youtube.com/results?search_query=spanish+directions+usted+commands+siga+gire+cruce",
      },
      {
        title: "Spanish Weather Expressions Across Past, Present & Future",
        channel: "YouTube Search — Spanish Weather Tenses",
        url: "https://www.youtube.com/results?search_query=spanish+weather+past+present+future+tenses+igcse",
      },
      {
        title: "Las Fallas, La Tomatina & El Día de los Muertos Cultural Guide",
        channel: "YouTube Search — Hispanic Festivals",
        url: "https://www.youtube.com/results?search_query=fiestas+espanolas+las+fallas+la+tomatina+dia+de+muertos+spanish",
      },
    ],
    formulas: [
      {
        name: "Town Location vs Character Frame",
        formula: "Mi ciudad **está situada en** [región/costa] y **es** [2 adjetivos], aunque **lo peor es que**…",
        note: "Pairs estar (location) + ser (character) + balanced evaluation.",
      },
      {
        name: "Equality Comparison Pair",
        formula: "**tan** + adjetivo/adverbio + **como**  |  **tanto/a/os/as** + sustantivo + **como**",
        note: "e.g. tan segura como Tokio · tantos parques como museos.",
      },
      {
        name: "Imperfect + Preterite Hotel Complaint",
        formula: "Cuando **llegamos**, la habitación **estaba** [estado] y no **había** [objeto], así que **me quejé**.",
        note: "Instant Band-5 past-tense contrast for Paper 2 Q7.",
      },
      {
        name: "Immediate Past Travel Idiom",
        formula: "**acabar de** (presente / imperfecto) + **infinitivo**",
        note: "Acabo de facturar el equipaje = I have just checked in the luggage.",
      },
      {
        name: "3-Time-Frame Weather Trio",
        formula: "Ayer **hizo / llovió** … · Hoy **hace mucho calor / está despejado** · Mañana **hará / habrá** …",
        note: "Never write *muy calor* or *habían tormentas*!",
      },
      {
        name: "Passive 'Se' Festival Pattern",
        formula: "**se** + verbo (3ª sing.) + sustantivo sing.  |  **se** + verbo (3ª pl.) + sustantivo plural",
        note: "Se celebra la fiesta (sg.) vs Se queman los monumentos (pl.).",
      },
      {
        name: "Grade-9 Hypothetical Travel 'Si' Clause",
        formula: "**Si tuviera** más tiempo y dinero, **viajaría** por Sudamérica y **me alojaría** en un parador.",
        note: "Imperfect Subjunctive (-ra) + Conditional — NEVER conditional right after si!",
      },
    ],
  },
};
