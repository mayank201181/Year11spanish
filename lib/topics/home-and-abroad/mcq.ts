import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "home-and-abroad-m1",
    title: "Home & Abroad — MCQ Paper 1: Foundations & Core Traps",
    questions: [
      {
        id: "home-and-abroad-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "regions-and-towns",
        question:
          "Choose the grammatically correct sentence to say **'Málaga is located on the south coast of Spain'**.",
        options: [
          "Málaga está situada en la costa sur de España.",
          "Málaga es situada en la costa sur de España.",
          "Málaga está situado en la costa sur de España.",
          "Málaga tiene situada en la costa sur de España.",
        ],
        answerIndex: 0,
        hints: [
          "Geographical location on a map always uses **estar**, never *ser*.",
          "Make the participle agree with feminine *Málaga* (*la ciudad*).",
        ],
        explanation:
          "Geographical location requires **está** (from *estar*), and *situada* takes feminine *-a* to agree with the city *Málaga*; *es situada* wrongly uses *ser*, and *situado* misses feminine agreement.",
      },
      {
        id: "home-and-abroad-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "holidays-and-accommodation",
        question:
          "How do you say **'Last summer I went on holiday to Greece'** in idiomatic Spanish?",
        options: [
          "El verano pasado fui en vacaciones a Grecia.",
          "El verano pasado fui de vacaciones a Grecia.",
          "El verano pasado iba en vacación a Grecia.",
          "El verano pasado fui por vacaciones a Grecia.",
        ],
        answerIndex: 1,
        hints: [
          "Think of the fixed preposition in the idiom *ir ___ vacaciones*.",
          "*Las vacaciones* is always plural and never uses *en*.",
        ],
        explanation:
          "The fixed Spanish idiom for 'to go on holiday' is **ir de vacaciones** (*fui de vacaciones*). Writing *en vacaciones* or singular *vacación* is an Anglicism that loses marks.",
      },
      {
        id: "home-and-abroad-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "holidays-and-accommodation",
        question:
          "Complete the sentence correctly: *El año pasado _______ Madrid y Toledo con mi familia.*",
        options: [
          "visité a",
          "visito a",
          "visité",
          "visitaré",
        ],
        answerIndex: 2,
        hints: [
          "*El año pasado* ('last year') triggers the Preterite tense.",
          "Does Spanish use the personal *a* before cities?",
        ],
        explanation:
          "**Visité** is the *yo* preterite of *visitar*, and Spanish NEVER uses the personal *a* before cities or countries (*visité Madrid*, NOT *visité a Madrid*).",
      },
      {
        id: "home-and-abroad-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "transport-and-directions",
        question:
          "Which phrase correctly completes: *Salimos a las siete _______ para ir al aeropuerto ___ autocar*?",
        options: [
          "en la mañana … por el",
          "por la mañana … por el",
          "de la mañana … en el",
          "de la mañana … en",
        ],
        answerIndex: 3,
        hints: [
          "After a specific clock time (*a las siete*), Spanish uses **de** for a.m./p.m.",
          "Means of transport take **en** with NO definite article.",
        ],
        explanation:
          "Specific clock hours take **de la mañana** (*a las siete de la mañana*, whereas general 'in the morning' is *por la mañana*), and transport takes **en** without an article (**en autocar**).",
      },
      {
        id: "home-and-abroad-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "weather-and-climate",
        question:
          "Which sentence correctly expresses **'In August it is very hot on the island'**?",
        options: [
          "En agosto hace mucho calor en la isla.",
          "En agosto hace muy calor en la isla.",
          "En agosto está mucho calor en la isla.",
          "En agosto es muy caliente en la isla.",
        ],
        answerIndex: 0,
        hints: [
          "Weather heat uses *hacer* + the masculine noun *calor*.",
          "Nouns are modified by *mucho*, never the adverb *muy*.",
        ],
        explanation:
          "**Hace mucho calor** is right because *calor* is a masculine singular noun ('it makes much heat'). *Hace muy calor* and *es muy caliente* are classic Anglicisms.",
      },
      {
        id: "home-and-abroad-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "regions-and-towns",
        question:
          "Complete the comparison of equality: *En mi barrio hay _______ espacios verdes _______ en el centro.*",
        options: [
          "tan … como",
          "tantos … como",
          "tantas … como",
          "tanto … que",
        ],
        answerIndex: 1,
        hints: [
          "Look at what follows the first blank: *espacios verdes* is a masculine plural noun.",
          "Adjectives take *tan … como*, whereas nouns take *tanto/a/os/as … como*.",
        ],
        explanation:
          "Before a masculine plural noun (*espacios verdes*), 'as many … as' requires **tantos … como**. *Tan … como* is only used before adjectives or adverbs.",
      },
      {
        id: "home-and-abroad-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holidays-and-accommodation",
        question:
          "Which option accurately completes the past-tense hotel complaint: *Cuando abrimos la puerta, la habitación _______ sucia y no _______ toallas*?",
        options: [
          "fue … hubo",
          "era … habían",
          "estaba … había",
          "estuvo … habían",
        ],
        answerIndex: 2,
        hints: [
          "Being dirty is a temporary ongoing background state when you opened the door → Imperfect of *estar*.",
          "Impersonal 'there were' in the past background is ALWAYS singular!",
        ],
        explanation:
          "Ongoing room cleanliness takes **estaba** (Imperfect of *estar*), and impersonal 'there was/were' is strictly singular **había** (never plural *habían*).",
      },
      {
        id: "home-and-abroad-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holidays-and-accommodation",
        question:
          "Choose the correct *yo* Preterite sentence for **'I looked for a cheap guesthouse online'**.",
        options: [
          "Buscé para una pensión barata en línea.",
          "Busqué para una pensión barata en línea.",
          "Buscé una pensión barata en línea.",
          "Busqué una pensión barata en línea.",
        ],
        answerIndex: 3,
        hints: [
          "Verbs ending in *-car* change *c → qu* before *-é* in the *yo* Preterite.",
          "Remember that *buscar* already includes 'for' in its meaning!",
        ],
        explanation:
          "**Busqué una pensión barata en línea** applies the *-car → -qué* spelling shift and avoids the incorrect preposition *para* after *buscar*.",
      },
      {
        id: "home-and-abroad-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transport-and-directions",
        question:
          "At Madrid-Barajas airport you hear: *«El vuelo IB342 con destino a Bogotá lleva cuarenta minutos de retraso.»* What is happening?",
        options: [
          "The flight to Bogotá is delayed by forty minutes.",
          "The flight to Bogotá leaves from Gate 40.",
          "The flight to Bogotá has been cancelled.",
          "Boarding closes in forty minutes.",
        ],
        answerIndex: 0,
        hints: [
          "Focus on the idiom *llevar … de retraso*.",
          "*Cuarenta minutos* tells you the length of that delay.",
        ],
        explanation:
          "**Llevar cuarenta minutos de retraso** means to be forty minutes delayed. 'Cancelled' would be *cancelado*, and 'boarding gate' would be *puerta de embarque*.",
      },
      {
        id: "home-and-abroad-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transport-and-directions",
        question:
          "A polite elderly stranger asks *«Perdone, ¿dónde está el ayuntamiento?»* Which reply keeps the correct **usted** register throughout?",
        options: [
          "Sigue todo recto y cruza la plaza.",
          "Siga todo recto y cruce la plaza.",
          "Siga todo recto y cruza la plaza.",
          "Sigues todo recto y cruces la plaza.",
        ],
        answerIndex: 1,
        hints: [
          "Because the stranger used *Perdone* (*usted*), both imperatives must be formal **usted** forms.",
          "Check the *-zar → -ce* spelling change in *cruzar*.",
        ],
        explanation:
          "**Siga todo recto y cruce la plaza** keeps both verbs in the polite *usted* imperative (*seguir → siga*, *cruzar → cruce*). *Sigue/cruza* are informal *tú* commands.",
      },
      {
        id: "home-and-abroad-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-and-climate",
        question:
          "Complete the weather forecast for tomorrow: *Mañana en el norte _______ lluvias fuertes y _______ mucho viento.*",
        options: [
          "habrán … hace",
          "hay … hará",
          "habrá … hará",
          "habría … hizo",
        ],
        answerIndex: 2,
        hints: [
          "*Mañana* triggers the Simple Future tense.",
          "Impersonal *haber* stays singular even before plural *lluvias fuertes*!",
        ],
        explanation:
          "Simple Future of impersonal *haber* is strictly singular **habrá** (*habrá lluvias fuertes*), and Simple Future of *hacer* is **hará** (*hará mucho viento*).",
      },
      {
        id: "home-and-abroad-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festivals-and-customs",
        question:
          "Complete the sentence about *Las Fallas* using passive *se*: *En marzo se _______ enormes estatuas de madera en las calles de Valencia.*",
        options: [
          "construye",
          "construyó",
          "construir",
          "construyen",
        ],
        answerIndex: 3,
        hints: [
          "*En marzo* indicates a habitual present custom.",
          "In passive *se*, the verb agrees in number with *enormes estatuas* (plural!).",
        ],
        explanation:
          "Because *enormes estatuas* is plural and the sentence describes an annual tradition in the present, passive *se* requires 3rd-person plural **construyen** (*se construyen*).",
      },
      {
        id: "home-and-abroad-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festivals-and-customs",
        question:
          "Read: *«El año pasado asistí a la Semana Santa en Sevilla; es una costumbre muy antigua.»* Which English translation is completely accurate?",
        options: [
          "Last year I attended Holy Week in Seville; it is a very old custom.",
          "Last year I assisted at Holy Week in Seville; it is a very old costume.",
          "Last year I attended Holy Week in Seville; it is a very old costume.",
          "Last year I helped with Holy Week in Seville; it is a very old habit.",
        ],
        answerIndex: 0,
        hints: [
          "Watch out for TWO classic IGCSE false friends: *asistir a* and *la costumbre*!",
          "'Costume' in Spanish is *el disfraz* or *el traje*, NOT *la costumbre*.",
        ],
        explanation:
          "**Asistir a** means 'to attend' (not 'assist/help', which is *ayudar*), and **la costumbre** means 'custom/tradition' (not 'costume', which is *el disfraz*).",
      },
      {
        id: "home-and-abroad-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "weather-and-climate",
        question:
          "How do you say **'While we were walking through the old quarter, it suddenly started to pour with rain'**?",
        options: [
          "Mientras caminábamos por el casco antiguo, empezará a llover a cántaros de repente.",
          "Mientras caminábamos por el casco antiguo, de repente empezó a llover a cántaros.",
          "Mientras caminamos ayer por el casco antiguo, de repente empezaba a llover a cántaros.",
          "Mientras caminábamos por el casco antiguo, de repente hizo lloviendo a cántaros.",
        ],
        answerIndex: 1,
        hints: [
          "*Mientras* ('while') introduces the ongoing action in progress → Imperfect (*caminábamos*).",
          "The sudden start of heavy rain (*de repente*) interrupts that walk → Preterite (*empezó*).",
          "Eliminate future *empezará*, inverted *caminamos … empezaba*, and ungrammatical *hizo lloviendo*.",
        ],
        explanation:
          "**Mientras caminábamos … de repente empezó a llover a cántaros** sets the ongoing walk in the Imperfect (*caminábamos*) and marks the sudden interruption with the Preterite (*empezó*).",
      },
      {
        id: "home-and-abroad-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "regions-and-towns",
        question:
          "Spot the ONLY noun phrase below where the article and adjective agreement are **100% correct**:",
        options: [
          "una mapa turística muy útil",
          "la clima mediterránea agradable",
          "un paisaje pintoresco e inolvidable",
          "una viaje larga y cara",
        ],
        answerIndex: 2,
        hints: [
          "Check the gender of *mapa*, *clima*, *paisaje*, and *viaje*.",
          "Remember *-aje* nouns (*viaje, paisaje*), *el mapa*, and Greek *-ma* nouns (*el clima*) are ALL masculine!",
          "Also check *y → e* before *in-* in *pintoresco e inolvidable*.",
        ],
        explanation:
          "**Un paisaje pintoresco e inolvidable** is completely accurate: *el paisaje* is masculine and *y* becomes *e* before *i-*, whereas *el mapa*, *el clima*, and *el viaje* are all masculine (making *una mapa*, *la clima*, and *una viaje* wrong).",
      },
    ],
  },
  {
    id: "home-and-abroad-m2",
    title: "Home & Abroad — MCQ Paper 2: Reading Brochures, Announcements & Grammar",
    questions: [
      {
        id: "home-and-abroad-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "transport-and-directions",
        question:
          "You want to travel from Madrid to Valencia and come back two days later. What ticket do you ask for at *la taquilla*?",
        options: [
          "un billete sencillo",
          "una tarjeta de embarque",
          "un folleto turístico",
          "un billete de ida y vuelta",
        ],
        answerIndex: 3,
        hints: [
          "*Ida* = outward journey; *vuelta* = return journey.",
          "*Un billete sencillo* is only one-way.",
        ],
        explanation:
          "**Un billete de ida y vuelta** is a return (round-trip) ticket. *Un billete sencillo* is a single one-way ticket, and *una tarjeta de embarque* is a flight boarding pass.",
      },
      {
        id: "home-and-abroad-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "holidays-and-accommodation",
        question:
          "Read the hotel brochure extract: *«El precio incluye alojamiento con media pensión y acceso gratuito a la piscina climatizada.»* What meals are included?",
        options: [
          "Breakfast and one main meal (usually dinner)",
          "Breakfast, lunch, dinner, and snacks",
          "Room only with no meals included",
          "Breakfast only alongside outdoor pool entry",
        ],
        answerIndex: 0,
        hints: [
          "Contrast *pensión completa* (all three meals) with *media pensión* (*media* = half).",
          "*Alojamiento y desayuno* would be B&B.",
        ],
        explanation:
          "**Media pensión** ('half board') includes breakfast plus one main meal (typically dinner), whereas *pensión completa* ('full board') covers all meals.",
      },
      {
        id: "home-and-abroad-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "regions-and-towns",
        question:
          "What does *«Mis tíos viven en las afueras porque es menos ruidoso que el centro»* tell us?",
        options: [
          "They live abroad because the city centre is too expensive.",
          "They live on the outskirts because it is less noisy than the centre.",
          "They live in the countryside because it is noisier than the centre.",
          "They live in the old town because it is quieter than the suburbs.",
        ],
        answerIndex: 1,
        hints: [
          "Don't confuse *las afueras* ('the outskirts/suburbs') with *el extranjero* ('abroad')!",
          "*Menos ruidoso que* = less noisy than.",
        ],
        explanation:
          "**En las afueras** means 'on the outskirts / in the suburbs' (whereas 'abroad' is *en el extranjero*), and *menos ruidoso que* means 'less noisy than'.",
      },
      {
        id: "home-and-abroad-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transport-and-directions",
        question:
          "What is the exact meaning of: *«Acabamos de facturar las maletas y ahora vamos al control de seguridad»*?",
        options: [
          "We finished packing our suitcases and are waiting at customs.",
          "We are going to check in our suitcases after security.",
          "We have just checked in our suitcases and now we are going to security.",
          "We usually check in our luggage before buying our boarding pass.",
        ],
        answerIndex: 2,
        hints: [
          "Recall the verbal idiom **acabar de + infinitive** in the Present tense.",
          "*Facturar las maletas* = to check in suitcases (packing is *hacer la maleta*).",
        ],
        explanation:
          "Present-tense **acabamos de facturar** means 'we have just checked in', and *el control de seguridad* is the airport security check.",
      },
      {
        id: "home-and-abroad-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transport-and-directions",
        question:
          "Choose the grammatically accurate phrase for **'take the first street on the left and cross at the third crossroads'** (informal *tú*):",
        options: [
          "toma la primer calle a la izquierda y cruza en el tercero cruce",
          "tome la primera calle a la izquierda y cruce en el tercer cruce",
          "toma la primera calle en la izquierda y cruza al tercero cruce",
          "toma la primera calle a la izquierda y cruza en el tercer cruce",
        ],
        answerIndex: 3,
        hints: [
          "Informal *tú* imperatives of *tomar* and *cruzar* are *toma* and *cruza*.",
          "*Primero* and *tercero* drop *-o* ONLY before masculine singular nouns (*el tercer cruce*, NOT feminine *la primera calle*!).",
        ],
        explanation:
          "Feminine *calle* keeps full **la primera calle**, while masculine singular *cruce* triggers apocopation to **el tercer cruce**, paired with *tú* commands *toma* and *cruza*.",
      },
      {
        id: "home-and-abroad-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-and-climate",
        question:
          "Select the sentence that uses **estar**, **hacer**, and **haber** completely accurately for today's weather:",
        options: [
          "Hoy el cielo está despejado, aunque hay viento suave y hace fresco.",
          "Hoy el cielo es despejado, aunque hace niebla y está fresco.",
          "Hoy el cielo está despejado, aunque está viento suave y hay fresco.",
          "Hoy el cielo hay despejado, aunque hace mucho nublado.",
        ],
        answerIndex: 0,
        hints: [
          "Sky condition (*despejado* = clear) is a temporary state → *estar*.",
          "*Fresco* ('cool weather') pairs with *hacer* (*hace fresco*), and *viento* can follow *hay* or *hace* (never *está viento*!).",
        ],
        explanation:
          "**El cielo está despejado** (adjective state with *estar*), **hay viento suave** (noun with *hay*), and **hace fresco** (weather expression with *hacer*) follow all Spanish weather rules.",
      },
      {
        id: "home-and-abroad-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holidays-and-accommodation",
        question:
          "Read Lucas's review: *«Nos alojamos en un parador precioso, aunque el ascensor estaba averiado y tuvimos que subir las maletas a pie.»* What was the downside?",
        options: [
          "The air conditioning was noisy so they asked for a refund.",
          "The lift was out of order so they had to carry their suitcases up on foot.",
          "The hotel was too far from the station so they walked into town.",
          "The room had no view of the castle and the stairs were dirty.",
        ],
        answerIndex: 1,
        hints: [
          "Key vocabulary: *el ascensor* (lift) + *averiado* (broken down / out of order).",
          "*Tuvimos que subir … a pie* = we had to go up / carry up … on foot.",
        ],
        explanation:
          "**El ascensor estaba averiado** means the lift was broken down, forcing them (*tuvimos que*, preterite of *tener que*) to carry their suitcases upstairs on foot (*a pie*).",
      },
      {
        id: "home-and-abroad-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festivals-and-customs",
        question:
          "Which festival matches this description: *«Cada noviembre en México las familias decoran altares con velas, flores naranjas y fotos para recordar con alegría a sus seres queridos»*?",
        options: [
          "Las Fallas de Valencia",
          "Los Sanfermines de Pamplona",
          "El Día de los Muertos",
          "La Tomatina de Buñol",
        ],
        answerIndex: 2,
        hints: [
          "Spot the country (*México*), month (*noviembre*), and *altares con velas y flores*.",
          "*Recordar a sus seres queridos* = to remember their loved ones.",
        ],
        explanation:
          "**El Día de los Muertos** takes place on 1–2 November in Mexico with home *altares* (*ofrendas*), candles, marigolds, and photographs honouring departed relatives.",
      },
      {
        id: "home-and-abroad-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "regions-and-towns",
        question:
          "Complete with the correct comparative: *El tren de alta velocidad es mucho _______ rápido y cómodo _______ el autocar, así que es _______ opción para viajar lejos.*",
        options: [
          "más … como … la más buena",
          "tan … que … la mejor",
          "más … de … la mejor",
          "más … que … la mejor",
        ],
        answerIndex: 3,
        hints: [
          "Inequality comparisons use *más + adjective + que*.",
          "Never write *más buena* — use the irregular comparative/superlative **mejor**!",
        ],
        explanation:
          "Comparisons of superiority take **más … que**, and the irregular superlative of *buena* is **la mejor opción** (never *la más buena*).",
      },
      {
        id: "home-and-abroad-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holidays-and-accommodation",
        question:
          "Read the receptionist's reply: *«Lo siento muchísimo, señora; ahora mismo le doy la llave de otra habitación doble en la cuarta planta, más tranquila.»* How does the hotel solve the problem?",
        options: [
          "By immediately giving her the key to a quieter double room on the fourth floor.",
          "By repairing the lock on her fourth-floor single room straight away.",
          "By offering her a discount on her room bill when she checks out tomorrow.",
          "By moving her to a twin room on the ground floor near reception.",
        ],
        answerIndex: 0,
        hints: [
          "*Ahora mismo le doy la llave* = right now I'll give you the key.",
          "*Cuarta planta, más tranquila* = fourth floor, quieter.",
        ],
        explanation:
          "*Otra habitación doble en la cuarta planta, más tranquila* means another, quieter double room on the fourth floor.",
      },
      {
        id: "home-and-abroad-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-and-climate",
        question:
          "Choose the correct Preterite forms to complete: *El sábado en la sierra _______ muchísimo y por la noche _______ cinco grados bajo cero.*",
        options: [
          "nieva … hace",
          "nevó … hizo",
          "nevaba … hará",
          "nevaron … hicieron",
        ],
        answerIndex: 1,
        hints: [
          "The sentence narrates completed weather events last Saturday (*El sábado…*).",
          "Weather verbs *nevar* and *hacer* stay in the 3rd-person singular (*nevó*, *hizo*)!",
        ],
        explanation:
          "Single-day completed past weather uses 3rd-person singular Preterite: **nevó** (it snowed) and **hizo** (*hizo cinco grados bajo cero* — never plural *hicieron* for temperature!).",
      },
      {
        id: "home-and-abroad-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festivals-and-customs",
        question:
          "In *Los Sanfermines* in Pamplona, what does *«La gente se viste de blanco y lleva un pañuelo rojo al cuello antes del encierro»* describe?",
        options: [
          "Spectators throwing red paint before the evening fireworks.",
          "Dancers wearing red dresses around a midnight bonfire.",
          "People dressing in white with a red neckerchief before the bull run.",
          "Musicians marching through the cathedral square in white cloaks.",
        ],
        answerIndex: 2,
        hints: [
          "*Vestirse de blanco* = to dress in white (*vestirse* is an *e → i* stem-changer: *se viste*).",
          "*Un pañuelo rojo* = red neckerchief/scarf; *el encierro* = running of the bulls.",
        ],
        explanation:
          "During *San Fermín* in Pamplona, participants dress in white (*se viste de blanco*) with a red kerchief (*pañuelo rojo*) before the morning running of the bulls (*el encierro*).",
      },
      {
        id: "home-and-abroad-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "transport-and-directions",
        question:
          "Station announcement: *«Atención, pasajeros del tren AVE a Sevilla de las diez y cuarto: debido a una avería en la vía tres, la salida se efectuará desde el andén ocho en vez del andén cinco, tras hacer transbordo en Córdoba.»* Which statement is TRUE?",
        options: [
          "The train leaves from Platform 5 and runs non-stop to Seville.",
          "The train is delayed until 10:45 and leaves from Track 3.",
          "Passengers must change trains at Platform 5 before reaching Madrid.",
          "Instead of Platform 5, the train departs from Platform 8 and requires a transfer in Córdoba.",
        ],
        answerIndex: 3,
        hints: [
          "Look carefully at the connector **en vez de** ('instead of')!",
          "*Desde el andén ocho en vez del andén cinco* flips the platform number.",
          "*Tras hacer transbordo en Córdoba* = with a train change in Córdoba.",
        ],
        explanation:
          "**En vez del andén cinco** means 'instead of Platform 5', so departure is from **Platform 8** (*el andén ocho*), and *hacer transbordo en Córdoba* means changing trains in Córdoba.",
      },
      {
        id: "home-and-abroad-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holidays-and-accommodation",
        question:
          "Identify the sentence that correctly distinguishes **el guía** from **la guía**:",
        options: [
          "Compramos una guía turística de Perú y contratamos a un guía muy simpático en Cuzco.",
          "Compramos un guía turístico de Perú y contratamos a una guía muy simpático en Cuzco.",
          "Compramos la guía turístico de Perú y hablamos con el guía artística.",
          "Compramos una guía turístico de Perú y visitamos un guía antiguo.",
        ],
        answerIndex: 0,
        hints: [
          "Which gender means the printed **guidebook** that you buy (*comprar*)?",
          "Which form means the **person** you hire (*contratar a* — with personal *a*!)?",
          "Check adjective agreement on *turística* and *simpático*.",
        ],
        explanation:
          "**Una guía turística** (feminine) is a printed guidebook, whereas **un guía muy simpático** (masculine — or *una guía muy simpática* for a woman) is the human tour guide, preceded by personal **a** after *contratamos*.",
      },
      {
        id: "home-and-abroad-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "festivals-and-customs",
        question:
          "Which Grade-9 sentence correctly uses a **purpose conjunction + Present Subjunctive** to explain why you want to visit Valencia?",
        options: [
          "Quiero ir a Valencia el año que viene para que puedo ver Las Fallas.",
          "Quiero ir a Valencia el año que viene para que mis padres puedan ver Las Fallas.",
          "Quiero ir a Valencia el año que viene para mis padres pueden ver Las Fallas.",
          "Quiero ir a Valencia el año que viene para que podré ver Las Fallas.",
        ],
        answerIndex: 1,
        hints: [
          "Same-subject 'in order to' uses *para + infinitive* (*Quiero ir … para ver*).",
          "When the subject changes ('so that my parents can see'), Spanish uses **para que + Present Subjunctive**!",
          "Check the 3rd-person plural Present Subjunctive of *poder* (*puedan*).",
        ],
        explanation:
          "**Para que** ('so that', with a change of subject to *mis padres*) ALWAYS triggers the Present Subjunctive: **puedan** (never indicative *pueden* or future *podrán*).",
      },
    ],
  },
  {
    id: "home-and-abroad-m3",
    title: "Home & Abroad — MCQ Paper 3: Grade-9 Nuance, Idioms & Subjunctive Stretch",
    questions: [
      {
        id: "home-and-abroad-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "regions-and-towns",
        question:
          "How do you say **'The worst thing about living in the historic centre is that there is too much noise'**?",
        options: [
          "El más malo de vivir en el centro histórico es que hay demasiado ruido.",
          "La peor de vivir en el centro histórico es que hay demasiado ruido.",
          "Lo peor de vivir en el centro histórico es que hay demasiado ruido.",
          "Lo menos malo de vivir en el centro histórico es que hay muy ruido.",
        ],
        answerIndex: 2,
        hints: [
          "Abstract 'the best thing / the worst thing' uses the neuter article **lo**.",
          "The irregular superlative of *malo* is *peor* (never *más malo*).",
        ],
        explanation:
          "Neuter **lo peor de + infinitive** expresses 'the worst thing about -ing…'. Feminine *la peor* needs a feminine noun, and *más malo* is ungrammatical here.",
      },
      {
        id: "home-and-abroad-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "transport-and-directions",
        question:
          "Complete the sentence in the Preterite: *Ayer me levanté tarde y por desgracia _______ el último tren a Barcelona.*",
        options: [
          "extrañé",
          "eché de menos",
          "falté",
          "perdí",
        ],
        answerIndex: 3,
        hints: [
          "In English we 'miss' a train, emotional 'miss' (*echar de menos*) and 'be absent from' (*faltar a*) are different verbs in Spanish!",
          "Spanish says 'I lost the train'.",
        ],
        explanation:
          "To miss a train, bus, or flight in Spanish is ALWAYS **perder** (**perdí el último tren**). *Echar de menos* / *extrañar* means missing a person or home emotionally!",
      },
      {
        id: "home-and-abroad-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "festivals-and-customs",
        question:
          "Which festival takes place on the **last Wednesday of August in Buñol** and involves throwing overripe tomatoes?",
        options: [
          "La Tomatina",
          "Las Fallas",
          "La Feria de Abril",
          "Los Sanfermines",
        ],
        answerIndex: 0,
        hints: [
          "Look at the town (*Buñol*, near Valencia) and the main ingredient (*tomates*).",
          "*Las Fallas* burns sculptures in March; *Sanfermines* has bull runs in July.",
        ],
        explanation:
          "**La Tomatina** is held on the last Wednesday of August in Buñol, where participants throw tonnes of squashed tomatoes (*se lanzan tomates*).",
      },
      {
        id: "home-and-abroad-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holidays-and-accommodation",
        question:
          "Complete the sentence with the correct Preterite form of **llegar** (*yo*) and **alojarse** (*nosotros*): *Anoche _______ a Granada a medianoche y _______ en una pensión céntrica.*",
        options: [
          "llegé … alojamos",
          "llegué … nos alojamos",
          "llegué … se alojamos",
          "llegó … nos alojábamos",
        ],
        answerIndex: 1,
        hints: [
          "*Llegar* ends in *-gar*, so *yo* in the Preterite changes *g → gu* before *-é*.",
          "*Alojarse* is reflexive, so *nosotros* requires the reflexive pronoun **nos**!",
        ],
        explanation:
          "**Llegué** preserves the hard /g/ sound before *-é* (*-gar → -gué*), and reflexive *alojarse* in *nosotros* Preterite is **nos alojamos**.",
      },
      {
        id: "home-and-abroad-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-and-climate",
        question:
          "Why did Sofia cancel her boat excursion in this text? *«Tuvimos que cancelar el paseo en barco porque había una niebla espesísima y el mar estaba muy agitado.»*",
        options: [
          "Because there was a thunderstorm and freezing snow.",
          "Because the boat engine broke down in the harbour.",
          "Because there was thick fog and the sea was very rough.",
          "Because it was boiling hot and there was no wind at all.",
        ],
        answerIndex: 2,
        hints: [
          "*La niebla* = fog (*espesísima* = extremely thick).",
          "*El mar estaba muy agitado* = the sea was very rough/choppy.",
        ],
        explanation:
          "**Había una niebla espesísima** means there was extremely thick fog, and **el mar estaba muy agitado** means the sea was very rough.",
      },
      {
        id: "home-and-abroad-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "regions-and-towns",
        question:
          "Look at the contrast between **ser** and **estar** with *tranquilo*: Which sentence specifically means **'My village is normally lively, yet today the main square is unusually quiet'**?",
        options: [
          "Mi pueblo está normalmente animado, pero hoy la plaza mayor es inusualmente tranquila.",
          "Mi pueblo es normalmente animado, pero hoy la plaza mayor es inusualmente tranquila.",
          "Mi pueblo está normalmente animado, pero hoy la plaza mayor está inusualmente tranquila.",
          "Mi pueblo es normalmente animado, pero hoy la plaza mayor está inusualmente tranquila.",
        ],
        answerIndex: 3,
        hints: [
          "A village's normal defining character uses **ser** (*es animado*).",
          "A temporary or unusual state right now (*hoy … inusualmente*) uses **estar** (*está tranquila*).",
        ],
        explanation:
          "**Es normalmente animado** uses *ser* for the village's usual character, while **hoy … está inusualmente tranquila** switches to *estar* for a temporary state that differs from the norm.",
      },
      {
        id: "home-and-abroad-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transport-and-directions",
        question:
          "Choose the polite **usted** imperative of **coger** ('to take') and **torcer** ('to turn', *o → ue*) to complete: *_______ el autobús número diez y luego _______ a la derecha.*",
        options: [
          "Coja … tuerza",
          "Coge … tuerce",
          "Coje … torza",
          "Coga … tuerce",
        ],
        answerIndex: 0,
        hints: [
          "*Coger* has *yo cojo* (*g → j* before *o/a* to keep the /x/ sound) → *usted* imperative **coja**.",
          "*Torcer* is a boot stem-changer (*yo tuerzo*) → *usted* imperative **tuerza**.",
        ],
        explanation:
          "Polite *usted* imperatives derive from the *yo* present stem: *cojo → **coja*** and *tuerzo → **tuerza***. *Coge … tuerce* is informal *tú*.",
      },
      {
        id: "home-and-abroad-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "holidays-and-accommodation",
        question:
          "In an Edexcel Paper 3 Role-Play at a tourist office, the card says: **'Ask politely if there is a map of the city.'** Which question is completely accurate in the formal **usted** register?",
        options: [
          "¿Tienes una mapa de la ciudad, por favor?",
          "¿Tiene un mapa de la ciudad, por favor?",
          "¿Hay una mapa de la ciudad, por favor?",
          "¿Puedo preguntar por la mapa de la ciudad?",
        ],
        answerIndex: 1,
        hints: [
          "Check BOTH the polite *usted* verb (*tiene* or *hay*) AND the gender of *mapa*!",
          "Remember: *el mapa* is masculine despite ending in *-a*!",
        ],
        explanation:
          "**¿Tiene un mapa de la ciudad, por favor?** uses polite *usted* (*tiene*) AND the correct masculine article **un mapa** (all other options wrongly treat *mapa* as feminine!).",
      },
      {
        id: "home-and-abroad-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "weather-and-climate",
        question:
          "Choose the sentence with **100% accurate spelling** for **'Yesterday it rained heavily and was cold'**.",
        options: [
          "Ayer llovió mucho y hizo frío.",
          "Ayer llueve mucho e hizo frío.",
          "Ayer llovió mucho e hizo frío.",
          "Ayer lluvío mucho e hizo frío.",
        ],
        answerIndex: 2,
        hints: [
          "Preterite of *llover* (regular *-er* in the preterite — stem-change *o → ue* is Present only!) is *llovió*.",
          "What happens to the conjunction *y* ('and') immediately before *hizo* (which starts with the /i/ sound)?",
        ],
        explanation:
          "**Ayer llovió mucho e hizo frío** conjugates *llover* accurately in the Preterite (**llovió**) and changes *y → **e*** before the /i/ sound of *hizo*.",
      },
      {
        id: "home-and-abroad-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "festivals-and-customs",
        question:
          "Read: *«Aunque las fiestas populares atraen a miles de turistas y crean empleo, algunos vecinos se quejan de la basura y del ruido nocturno.»* What is the author doing?",
        options: [
          "Arguing that traditional festivals should be banned completely.",
          "Explaining why tourists refuse to visit noisy Spanish neighbourhoods.",
          "Describing how local residents clean the streets before parades start.",
          "Weighing economic benefits of festivals against local noise and litter drawbacks.",
        ],
        answerIndex: 3,
        hints: [
          "*Aunque* ('although') balances two sides of an argument.",
          "Positive side: *atraen a miles de turistas y crean empleo*; negative side: *se quejan de la basura y del ruido*.",
        ],
        explanation:
          "The sentence balances tourism and job creation (*atraen a miles de turistas y crean empleo*) against residents' complaints about litter and night-time noise (*la basura y el ruido nocturno*).",
      },
      {
        id: "home-and-abroad-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "holidays-and-accommodation",
        question:
          "Select the Grade-9 **Type-2 hypothetical `si` clause** meaning **'If I had more money, I would travel around South America'**.",
        options: [
          "Si tuviera más dinero, viajaría por Sudamérica.",
          "Si tendría más dinero, viajaría por Sudamérica.",
          "Si tengo más dinero, viajaría por Sudamérica.",
          "Si tuviera más dinero, viajaré por Sudamérica.",
        ],
        answerIndex: 0,
        hints: [
          "NEVER put the Conditional (*tendría*) directly after *si* ('if')!",
          "Hypothetical Type-2 *si* clauses follow: **Si + Imperfect Subjunctive (-ra/-se) → Conditional (-ía)**.",
          "Check both halves: *tuviera* + *viajaría*.",
        ],
        explanation:
          "**Si tuviera más dinero, viajaría por Sudamérica** pairs the Imperfect Subjunctive (*tuviera*) in the *si*-clause with the Conditional (*viajaría*) in the main clause.",
      },
      {
        id: "home-and-abroad-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "transport-and-directions",
        question:
          "Choose the grammatically flawless future time-clause sentence for **'As soon as we arrive at the hotel, we will unpack our suitcases'**.",
        options: [
          "En cuanto llegaremos al hotel, desharemos las maletas.",
          "En cuanto lleguemos al hotel, desharemos las maletas.",
          "En cuanto llegamos al hotel, desharíamos las maletas.",
          "En cuanto llegáramos al hotel, desharemos las maletas.",
        ],
        answerIndex: 1,
        hints: [
          "Time conjunctions like **cuando** and **en cuanto** ('as soon as') referring to a **future** action ALWAYS take the **Present Subjunctive**!",
          "Never use Simple Future (*llegaremos*) right after *en cuanto*.",
          "Check the *-gar → -guemos* spelling shift in *llegar*.",
        ],
        explanation:
          "Future-referring **en cuanto** triggers the Present Subjunctive (**lleguemos**, with *g → gu* before *-e*), followed by the Simple Future (**desharemos**) in the main clause.",
      },
      {
        id: "home-and-abroad-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "regions-and-towns",
        question:
          "Complete the WEIRDO impersonal recommendation about sustainable tourism: *Es imprescindible que el ayuntamiento _______ el casco antiguo y _______ más carriles bici.*",
        options: [
          "protege … construye",
          "protegerá … construirá",
          "proteja … construya",
          "protega … construya",
        ],
        answerIndex: 2,
        hints: [
          "**Es imprescindible que** ('It is essential that') triggers the **Present Subjunctive** in both verbs.",
          "*Proteger* changes *g → j* before *-a* (*yo protejo → proteja*).",
          "*Construir* inserts *-y-* (*yo construyo → construya*).",
        ],
        explanation:
          "After **Es imprescindible que**, both verbs must be Present Subjunctive: *proteger → **proteja*** (*g → j* to keep the /x/ sound, NEVER *protega*) and *construir → **construya***.",
      },
      {
        id: "home-and-abroad-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "weather-and-climate",
        question:
          "Which sentence uses **por** and **para** completely accurately in a holiday context?",
        options: [
          "El vuelo fue cancelado para la niebla, así que salimos por Madrid al día siguiente.",
          "Gracias para tu postal; estuvimos en Mallorca para dos semanas.",
          "Compramos recuerdos por mis abuelos y paseamos para la playa.",
          "El vuelo fue cancelado por la niebla, así que salimos para Madrid al día siguiente.",
        ],
        answerIndex: 3,
        hints: [
          "Cause / 'because of' the fog takes **por** (*por la niebla*).",
          "Destination ('setting off for Madrid') takes **para** (*salir para Madrid*).",
          "Check the distractors: *gracias por*, *por/durante dos semanas*, *para mis abuelos* (recipient), *por la playa* (along/through).",
        ],
        explanation:
          "**Por la niebla** expresses cause ('because of the fog') and **salimos para Madrid** expresses destination ('left for Madrid').",
      },
      {
        id: "home-and-abroad-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "festivals-and-customs",
        question:
          "Read: *«Lo que más me impresionó de Las Fallas fue ver cómo los artistas llevaban doce meses trabajando en monumentos que luego ardieron en pocos minutos.»* What impressed the writer most?",
        options: [
          "Seeing that artists had spent twelve months working on monuments that then burned in minutes.",
          "Learning that the monuments would be preserved in a museum for twelve months.",
          "Watching tourists build wooden statues in just a few minutes before the parade.",
          "Hearing that the festival had been celebrated in Valencia for twelve centuries.",
        ],
        answerIndex: 0,
        hints: [
          "Recall the duration idiom in the Imperfect: **llevaban doce meses trabajando** ('they had been working for twelve months').",
          "*Que luego ardieron en pocos minutos* = which then burned (*arder* in Preterite) in a few minutes.",
          "Match both halves carefully.",
        ],
        explanation:
          "**Llevaban doce meses trabajando** ('had spent twelve months working') + **ardieron en pocos minutos** ('burned in a few minutes') captures the bittersweet magic of *Las Fallas*.",
      },
    ],
  },
];
