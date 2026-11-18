import type { TopicGuide } from "../../types.ts";
import { acceptedForms } from "../../spanish/verbs.ts";

export const guide: TopicGuide = {
  id: "past-future-tenses",
  title: "IGCSE Tense Mastery — Preterite, Imperfect, Perfect, Future & Conditional",
  strand: "IGCSE Grammar Mastery",
  icon: "⏳",
  summary: "Master all 6 indicative tenses, conquer irregular stems and accent traps in Paper 2 Q3c, and weave 3+ time frames seamlessly into Grade-9 essays and speaking.",
  intro:
    "Tense accuracy is the single highest-yield multiplier in Pearson Edexcel IGCSE Spanish (`4SP0`). In **Paper 2 Question 3c**, a single missing accent (*hablo* instead of *habló*) or regularised stem (*haceré* instead of *haré*) costs an instant mark. In **Paper 2 Question 7 (130–150 words)** and **Paper 3 Speaking**, moving effortlessly between **Past** (Preterite + Imperfect), **Present**, and **Future/Conditional** — enriched with idioms like *acabo de*, *solía*, and *llevo tres años estudiando* — unlocks the top Linguistic Knowledge & Accuracy band.",
  guide: [
    {
      id: "preterite-irregs-and-accents",
      heading: "Preterite mastery: accents, spelling shifts & strong stems",
      discovery: {
        problem:
          "Spot the odd pair out and explain why: (1) *hablé / habló*, (2) *comí / comió*, (3) *tuve / tuvo*, (4) *fui / fue*. Why do pairs (1) and (2) carry written accents on the final vowel while pairs (3) and (4) have **zero** accents?",
        idea:
          "Regular preterites stress the **ending** (*habl-É, habl-Ó*), so they need written accents — especially to separate *hablo* ('I speak', stressed HA-blo) from *habló* ('he/she spoke', stressed ha-BLÓ). Strong-stem preterites (*tuv-, hic-, pus-, pud-*) stress the **stem** (*TU-ve, TU-vo*), and one-syllable preterites (*fui, fue, vi, dio*) have only one syllable, so **neither** group ever takes a written accent!",
      },
      body:
        "The **Preterite (*pretérito indefinido*)** narrates single, completed actions in the past (*ayer, anoche, el año pasado, hace dos semanas, una vez*).\n\n" +
        "### 1. Regular Preterite Endings (Mind the *yo* and *él/ella* Accents!)\n\n" +
        "| Person | *-ar* (*hablar*) | *-er / -ir* (*comer / vivir*) | Exam Trap Alert |\n" +
        "|---|---|---|---|\n" +
        "| *yo* | **hablé** | **comí** / **viví** | Without accent, *hablo* = Present *yo*! |\n" +
        "| *tú* | hablaste | comiste / viviste | Never add *-s* (*hablastes* ❌) |\n" +
        "| *él / ella / usted* | **habló** | **comió** / **vivió** | Accent carries the past meaning! |\n" +
        "| *nosotros/as* | hablamos | comimos / vivimos | *-ar* matches Present — context (*ayer*) decides! |\n" +
        "| *vosotros/as* | hablasteis | comisteis / vivisteis | Regular plural *tú* |\n" +
        "| *ellos / ellas / ustedes* | hablaron | comieron / vivieron | *-aron* vs *-ieron* |\n\n" +
        "### 2. Three Predictable Spelling & Sandal Shifts\n" +
        "- **Yo-only *-car / -gar / -zar* spelling protection** (before *-é*): *buscar → **busqué***, *llegar → **llegué***, *pagar → **pagué***, *jugar → **jugué***, *empezar → **empecé***, *organizar → **organicé***. All other persons stay normal (*buscó, llegaron*).\n" +
        "- **3rd-person *i → y* vowel-bridge verbs** (*leer, oír, construir, destruir*): unaccented *i* between two vowels turns to *y* in *él/ellos*, while *tú/nosotros/vosotros* keep a written accent on *í* (*leí, leíste, **leyó**, leímos, leísteis, **leyeron***; *oí, oíste, **oyó**, **oyeron***; *construyó, construyeron*).\n" +
        "- **3rd-person *-ir* 'sandal' stem-changers** (*pedir, preferir, seguir, servir, vestirse, dormir, morir*): ONLY *él/ella* and *ellos/ellas* shift **e → i** or **o → u** (*pedí, pediste, **pidió**, pedimos, pedisteis, **pidieron***; *dormí, dormiste, **durmió**, **durmieron***; *prefirió, prefirieron*). *-ar* and *-er* stem-changers (*pensar, volver, jugar*) NEVER stem-change in the preterite!\n\n" +
        "### 3. Strong-Stem & Monosyllabic Irregulars (ZERO Accents!)\n" +
        "Strong preterites use irregular stems + shared unaccented endings (**-e, -iste, -o, -imos, -isteis, -ieron** — or **-eron** after *j*):\n\n" +
        "| Group | Infinitive → Strong Stem | *yo* | *él / ella* | *ellos / ellas* |\n" +
        "|---|---|---|---|---|\n" +
        "| **U-stems** | *tener → tuv-*, *estar → estuv-*, *poder → pud-*, *poner → pus-*, *saber → sup-*, *andar → anduv-* | tuve, estuve, pude, puse, supe | tuvo, estuvo, pudo, puso, supo | tuvieron, estuvieron, pudieron, pusieron, supieron |\n" +
        "| **I-stems** | *hacer → hic-*, *querer → quis-*, *venir → vin-* | hice, quise, vine | **hizo** (*c→z!*), quiso, vino | hicieron, quisieron, vinieron |\n" +
        "| **J-stems** (drop *i* in *-eron*!) | *decir → dij-*, *traer → traj-*, *conducir → conduj-*, *producir → produj-* | dije, traje, conduje | dijo, trajo, condujo | **dijeron, trajeron, condujeron** |\n" +
        "| **Twins & Short** | *ir / ser*, *dar*, *ver* | **fui**, di, vi | **fue**, dio, vio | **fueron**, dieron, vieron |",
      diagram:
        '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Preterite decision map showing accented regular forms versus unaccented strong stems">' +
        '<rect x="8" y="8" width="624" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">Edexcel Paper 2 Q3c — Preterite Accent &amp; Stem Map</text>' +
        '<rect x="22" y="48" width="188" height="150" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>' +
        '<text x="116" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">1. Regulars (ACCENT!)</text>' +
        '<text x="116" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">-AR: hablé / habló</text>' +
        '<text x="116" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">-ER/-IR: comí / comió</text>' +
        '<text x="116" y="132" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">Yo -car/-gar/-zar:</text>' +
        '<text x="116" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">busqué · llegué · empecé</text>' +
        '<text x="116" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">hablo (pres.) ≠ habló (pret.)</text>' +
        '<rect x="226" y="48" width="188" height="150" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>' +
        '<text x="320" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#a16207">2. 3rd-Person Shifts</text>' +
        '<text x="320" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#713f12">-IR Sandal (él / ellos):</text>' +
        '<text x="320" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">pidió · prefirieron · durmió</text>' +
        '<text x="320" y="134" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#713f12">Vowel-Bridge i → y:</text>' +
        '<text x="320" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">leyó / leyeron · oyó</text>' +
        '<text x="320" y="176" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">construyó / construyeron</text>' +
        '<rect x="430" y="48" width="188" height="150" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>' +
        '<text x="524" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#b91c1c">3. Strong &amp; Short (NO ´!)</text>' +
        '<text x="524" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">tuve · estuve · pude · puse</text>' +
        '<text x="524" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">supe · quise · vine</text>' +
        '<text x="524" y="126" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">hice → hizo (c → z!)</text>' +
        '<text x="524" y="144" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">dije → dijeron · trajeron</text>' +
        '<text x="524" y="164" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">fui · fue · vi · vio · dio</text>' +
        '<text x="524" y="182" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#7f1d1d">Zero accents on group 3!</text>' +
        "</svg>",
      diagramCaption: "Three families of Preterite verbs: regular accented endings, 3rd-person sandal/y-shifts, and unaccented strong or monosyllabic forms.",
      workedExamples: [
        {
          title: "Edexcel Paper 2 Q3c — Spelling shift vs strong stem",
          problem:
            "Complete both gaps in the Preterite: (a) *Ayer yo _______ (llegar) tarde al instituto.* (b) *Mi hermano _______ (hacer) la cena anoche.*",
          steps: [
            "In (a), *ayer* signals a single completed past action (Preterite) and the subject is *yo*.",
            "*Llegar* ends in *-gar*; before *-é*, *g → gu* to preserve the hard 'g' sound: **llegué** (keep the accent on *-é*!).",
            "In (b), *anoche* signals Preterite and *mi hermano* = *él* (3rd person singular).",
            "*Hacer* has the strong stem *hic-*, which shifts *c → z* before *-o* with **no** accent: **hizo**.",
          ],
          answer: "(a) llegué · (b) hizo",
          yourTurn: {
            question:
              "Complete with the **preterite** form of **pedir** (*ellos*): Anoche mis padres _______ paella en el restaurante. (Write ONLY the missing verb.)",
            answer: { type: "text", accept: acceptedForms("pedir", "preterite", "ellos"), display: "pidieron" },
            solution: "*Pedir* is an *-ir* sandal verb (*e → i* in 3rd person preterite): *ellos* → **pidieron**.",
          },
        },
      ],
      keyPoints: [
        "Regular preterites MUST carry accents on *yo* (*-é / -í*) and *él/ella/usted* (*-ó / -ió*) — *hablo* ('I speak') vs *habló* ('he/she spoke').",
        "*-car / -gar / -zar* change spelling ONLY in *yo* preterite (*busqué, llegué, empecé*).",
        "*-ir* stem-changing verbs shift *e → i* or *o → u* ONLY in 3rd-person preterite (*pidió/pidieron, durmió/durmieron*).",
        "Strong stems (*tuve, estuve, hice/hizo, pude, puse, supe, quise, vine, dije/dijeron*) and 1-syllable forms (*fui, fue, vi, vio, di, dio*) NEVER take written accents.",
      ],
      whyItWorks:
        "Spanish spelling follows pronunciation faithfully: *-qu-*, *-gu-*, and *-c-* keep the consonant sound identical to the infinitive before *-e*, while *hizo* swaps *c → z* before *-o* so it isn't pronounced 'hiko'!",
      strategies: [
        "Ask 'Regular or Strong Stem?' before placing an accent: strong stems stress the root, so adding an accent (*tuvó* ❌) is always wrong.",
        "Check *j*-stems (*dije, traje, conduje, produje*) in *ellos*: they absorb the *i* and end in **-eron** (*dijeron, trajeron*), never *-ieron*.",
      ],
      thinkDeeper:
        "Why do *ir* ('to go') and *ser* ('to be') have the exact same Preterite forms (*fui, fuiste, fue, fuimos, fuisteis, fueron*), yet native speakers never confuse them in conversation?",
    },
    {
      id: "imperfect-and-contrast",
      heading: "Imperfect vs Preterite: camera photo vs video clip",
      discovery: {
        problem:
          "Compare these two sentences: (A) *Cuando tenía diez años, jugaba al tenis todos los sábados.* (B) *El sábado pasado jugué un partido y gané.* Both happen in the past — what is the difference in how the speaker views the time?",
        idea:
          "Sentence (A) uses the **Imperfect** (*tenía, jugaba*) like an ongoing **background video clip**: age, habitual 'used to' actions, and open-ended scenes with no start/stop boundary. Sentence (B) uses the **Preterite** (*jugué, gané*) like a **camera snapshot**: bounded events that started, finished, and moved the story forward!",
      },
      body:
        "The **Imperfect (*pretérito imperfecto*)** is the easiest tense to form in Spanish — and pairing it accurately with the Preterite is a hallmark of Grade-9 storytelling.\n\n" +
        "### 1. Forming the Imperfect (99.9% Regular!)\n" +
        "- **-ar verbs** (*hablar, jugar, estar*): **hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban** (accent ONLY on *nosotros*: *-ábamos*!).\n" +
        "- **-er / -ir verbs** (*comer, tener, vivir, hacer*): **comía, comías, comía, comíamos, comíais, comían** (written accent on **í** in ALL six persons!).\n" +
        "- **The ONLY 3 irregular verbs in the entire Imperfect tense**:\n" +
        "  1. **ser** → *era, eras, era, éramos, erais, eran*\n" +
        "  2. **ir** → *iba, ibas, iba, íbamos, ibais, iban*\n" +
        "  3. **ver** → *veía, veías, veía, veíamos, veíais, veían* (keeps the *-e-*!)\n\n" +
        "### 2. Imperfect vs Preterite Decision Grid\n\n" +
        "| Use the **Imperfect** (Background Video 🎞️) | Use the **Preterite** (Camera Snapshot 📸) |\n" +
        "|---|---|\n" +
        "| **Habitual / repeated past** ('used to / would'): *De niño íbamos a la playa cada verano.* | **Single completed event**: *El verano pasado fuimos a Valencia.* |\n" +
        "| **Scene-setting** (weather, time, age, feelings, *había*): *Eran las nueve, llovía y había mucha gente.* | **Plot-advancing event** (*hubo* = event!): *De repente hubo una tormenta y empezó a tronar.* |\n" +
        "| **Ongoing action in progress** ('was -ing'): *Mientras caminaba por el centro…* | **Interrupting action**: *…vi a mi profesora de español.* |\n" +
        "| **Two simultaneous ongoing actions** (*mientras*): *Mientras yo cocinaba, mi madre leía.* | **Sequence of completed steps**: *Primero desayuné, luego salí y cogí el autobús.* |",
      diagram:
        '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline contrasting continuous Imperfect background wave with sharp Preterite interrupting snapshot">' +
        '<rect x="8" y="8" width="624" height="199" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">Imperfect Background Film vs Preterite Interrupting Snapshot</text>' +
        '<line x1="40" y1="125" x2="600" y2="125" stroke="#64748b" stroke-width="2"/>' +
        '<polygon points="600,125 590,120 590,130" fill="#64748b"/>' +
        '<text x="585" y="145" text-anchor="end" font-family="system-ui, sans-serif" font-size="11" fill="#475569">Past Timeline →</text>' +
        '<path d="M 55 95 Q 95 75, 135 95 T 215 95 T 295 95 T 375 95 T 455 95 T 535 95" fill="none" stroke="#2563eb" stroke-width="4"/>' +
        '<rect x="55" y="46" width="250" height="28" rx="7" fill="#dbeafe" stroke="#3b82f6"/>' +
        '<text x="180" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e40af">🎞️ IMPERFECT: Mientras estudiaba...</text>' +
        '<text x="180" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#1d4ed8">Ongoing scene: hacía frío · eran las ocho · estaba cansada</text>' +
        '<line x1="395" y1="52" x2="395" y2="165" stroke="#dc2626" stroke-width="3" stroke-dasharray="5,3"/>' +
        '<circle cx="395" cy="125" r="9" fill="#dc2626"/>' +
        '<rect x="330" y="46" width="265" height="28" rx="7" fill="#fee2e2" stroke="#ef4444"/>' +
        '<text x="462" y="64" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#991b1b">📸 PRETERITE: ...sonó mi móvil</text>' +
        '<text x="462" y="182" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Single completed interruption!</text>' +
        "</svg>",
      diagramCaption: "In 'Mientras estudiaba en mi cuarto, sonó mi móvil', the Imperfect sets the ongoing film while the Preterite snaps the single interruption.",
      workedExamples: [
        {
          title: "Choosing Imperfect vs Preterite in a holiday narrative",
          problem:
            "Fill in the correct past tense (*imperfect* or *preterite*): *El domingo pasado _______ (hacer) mucho sol cuando nosotros _______ (salir) del hotel.*",
          steps: [
            "Weather acting as background scenery when something else happened uses the **Imperfect**: *hacer* (3rd sing.) → **hacía** (*hacía mucho sol*).",
            "'When we left the hotel' is the single completed action that happened against that sunny backdrop → **Preterite**: *salir* (*nosotros*) → **salimos**.",
          ],
          answer: "hacía · salimos",
          yourTurn: {
            question:
              "Complete the background + interruption sentence with the **imperfect** form of **ir** (*nosotros*): Cuando _______ al cine, vimos un accidente. (Write ONLY the missing verb.)",
            answer: { type: "text", accept: acceptedForms("ir", "imperfect", "nosotros"), display: "íbamos" },
            solution: "'When we were going to the cinema' is an ongoing action in progress → Imperfect of *ir* (*nosotros*): **íbamos** (don't forget the accent on *í*!).",
          },
        },
      ],
      keyPoints: [
        "Only 3 verbs are irregular in the Imperfect: **era** (*ser*), **iba** (*ir*), **veía** (*ver*).",
        "Notice *yo* and *él/ella* are identical in the Imperfect (*hablaba, tenía, era*), so clarify with *yo* or a name if context is ambiguous.",
        "Use **había** ('there was/were') for background descriptions (*había mucha cola*) and **hubo** for sudden events (*hubo un incendio*).",
        "Pair both tenses in Paper 2 Q7 to guarantee past-tense range: *Aunque llovía (imperfect), decidimos salir (preterite).*",
      ],
      whyItWorks:
        "English often hides this aspect difference behind one word ('it rained' / 'I was'), whereas Spanish separates **unbounded background** (Imperfect) from **bounded events** (Preterite) so listeners instantly know what is scenery versus plot.",
      strategies: [
        "Scan for time-frame signposts: *de niño, antes, todos los días, mientras* → Imperfect; *ayer, anoche, de repente, una vez, el lunes pasado* → Preterite.",
        "Use the 'Was -ing / Used to' test: if English naturally allows 'was doing' or 'used to do', choose the Imperfect.",
      ],
      thinkDeeper:
        "How does switching the tense change the meaning between *Mi abuelo tenía setenta años* and *Ayer mi abuelo cumplió setenta años*?",
    },
    {
      id: "perfect-and-pluperfect",
      heading: "Perfect (he hecho) & Pluperfect (había hecho)",
      discovery: {
        problem:
          "Look at these two sentences: *Mi hermana ha roto su móvil* and *Mis padres ya habían abierto las ventanas*. Does the past participle (*roto, abierto*) change to *-a* or *-os* to match *hermana* or *ventanas*?",
        idea:
          "Never! When paired with the auxiliary verb **haber** (*he, has, ha…* or *había, habías…*), the past participle is **100% invariable** — it ALWAYS ends in **-o** (*ha roto, hemos escrito, habían abierto*). Moreover, *haber* + participle is an unbreakable unit: pronouns and adverbs NEVER squeeze between them!",
      },
      body:
        "Compound tenses join a conjugated form of **haber** with an invariable **past participle** (*-ar → -ado*, *-er/-ir → -ido*).\n\n" +
        "### 1. Present Perfect vs Pluperfect Auxiliary Table\n\n" +
        "| Person | **Perfect** ('have/has done' — *haber* present) | **Pluperfect** ('had done' — *haber* imperfect) | Regular Participles |\n" +
        "|---|---|---|---|\n" +
        "| *yo* | **he** | **había** | *hablar → hablado* |\n" +
        "| *tú* | **has** | **habías** | *comer → comido* |\n" +
        "| *él / ella / usted* | **ha** (never *es* or *tiene*!) | **había** | *vivir → vivido* |\n" +
        "| *nosotros/as* | **hemos** (never *habemos*!) | **habíamos** | Accent on *-ído* after *a/e/o*: |\n" +
        "| *vosotros/as* | **habéis** | **habíais** | *leer → **leído***, *oír → **oído***, |\n" +
        "| *ellos / ellas / ustedes* | **han** | **habían** | *traer → **traído*** |\n\n" +
        "### 2. The Essential Irregular Past Participles (*REVV MAC PHDD*)\n" +
        "Memorise these high-frequency irregulars tested every year in Edexcel Paper 1 & Paper 2:\n" +
        "- **hacer → hecho** (done/made) · **decir → dicho** (said/told)\n" +
        "- **ver → visto** (seen/watched) · **escribir → escrito** (written)\n" +
        "- **poner → puesto** (put) · **volver → vuelto** (returned) · **resolver → resuelto** (solved)\n" +
        "- **abrir → abierto** (opened) · **descubrir → descubierto** (discovered) · **cubrir → cubierto** (covered)\n" +
        "- **romper → roto** (broken) · **morir → muerto** (died)\n\n" +
        "### 3. The Unbreakable Glue Rule\n" +
        "- Object/reflexive pronouns and *no* go **BEFORE** *haber*: **No lo he visto nunca** (NEVER *He no visto* ❌). **Me he levantado temprano** (NEVER *He me levantado* ❌).\n" +
        "- Adverbs (*ya, siempre, todavía*) go before *haber* or after the participle: **Ya hemos cenado** / **Hemos cenado ya** (NEVER *Hemos ya cenado* ❌).\n" +
        "- Use the **Perfect** with recent/unfinished time frames (*hoy, esta mañana, este año, ya, todavía no, alguna vez*) and the **Pluperfect** for 'the past before the past' (*Cuando llegué a la estación, el tren ya había salido*).",
      workedExamples: [
        {
          title: "Combining Preterite with Pluperfect ('had already done')",
          problem:
            "Complete the sentence with the **pluperfect** of **escribir** (*yo*): *Cuando el profesor entró, yo ya _______ _______ el ensayo.*",
          steps: [
            "'Had already written' before another past event (*entró*) requires the **Pluperfect**: Imperfect of *haber* + past participle.",
            "For *yo*, Imperfect of *haber* is **había**.",
            "*Escribir* has the irregular past participle **escrito** (invariable *-o*). Notice *ya* stays outside *había escrito*!",
          ],
          answer: "había escrito",
          yourTurn: {
            question:
              "Complete with the **perfect** tense of **hacer** (*nosotros*): Este trimestre _______ _______ un proyecto ecológico. (Write BOTH words: auxiliary + participle.)",
            answer: { type: "text", accept: acceptedForms("hacer", "perfect", "nosotros"), display: "hemos hecho" },
            solution: "Present of *haber* (*nosotros*) = **hemos** + irregular participle of *hacer* = **hecho** → **hemos hecho**.",
          },
        },
      ],
      keyPoints: [
        "Always use **haber** (*he, has, ha, hemos, habéis, han*), NEVER *tener* ('to own') for 'have done': *he comido* ✅ (*tengo comido* ❌).",
        "Past participles after *haber* NEVER change gender or number (*ellas han vuelto*, *nosotros hemos abierto*).",
        "Never insert *no*, *ya*, *siempre*, *nunca*, or pronouns (*me, lo, se*) between *haber* and the participle.",
        "Stems ending in *-a, -e, -o* in *-er/-ir* verbs take an accent on **-ído** (*leído, oído, caído, traído*).",
      ],
      whyItWorks:
        "In Spanish, *tener* retains its concrete meaning of possession, while *haber* became a pure grammatical auxiliary — keeping *haber + participle* glued together as one verb unit.",
      strategies: [
        "Spot *ya* ('already'), *todavía no* ('not yet'), or *¿alguna vez...?* ('have you ever...?') as instant triggers for the Perfect or Pluperfect.",
        "Upgrade a Paper 2 Q7 past paragraph by adding one Pluperfect clause: *Fue inolvidable porque nunca había visitado Madrid antes.*",
      ],
      thinkDeeper:
        "When a participle is used as an **adjective** after *estar* instead of with *haber* — e.g. *Las tiendas están abiertas* vs *Han abierto las tiendas* — why does *abiertas* change ending in the first sentence?",
    },
    {
      id: "simple-future-and-conditional",
      heading: "Simple Future (hablaré) & Conditional (hablaría)",
      discovery: {
        problem:
          "Compare *hablaré* ('I will speak'), *comeré* ('I will eat'), and *viviré* ('I will live') with *hablaría* ('I would speak'), *comería*, and *viviría*. Why don't *-ar*, *-er*, and *-ir* verbs have three different sets of endings here?",
        idea:
          "Because BOTH the **Simple Future** and the **Conditional** attach their endings onto the **whole infinitive** (or one of the **12 shared irregular stems**)! Learn one set of Future endings, one set of Conditional endings, and the 12 shared stems, and you instantly unlock **both** tenses across every verb in Spanish!",
      },
      body:
        "### 1. Future & Conditional Endings (Same for *-ar*, *-er*, and *-ir*!)\n\n" +
        "| Person | **Simple Future** ('will') | **Conditional** ('would') | Accent Check |\n" +
        "|---|---|---|---|\n" +
        "| *yo* | infinitive + **-é** (*hablaré*) | infinitive + **-ía** (*hablaría*) | Future: ALL accented **except *nosotros***! |\n" +
        "| *tú* | infinitive + **-ás** (*hablarás*) | infinitive + **-ías** (*hablarías*) | Conditional: ALL six carry **-ía-**! |\n" +
        "| *él / ella / usted* | infinitive + **-á** (*hablará*) | infinitive + **-ía** (*hablaría*) | *hablará* (will) vs *hablara* (imp. subj.)! |\n" +
        "| *nosotros/as* | infinitive + **-emos** (*hablaremos*) | infinitive + **-íamos** (*hablaríamos*) | **NO accent** on *hablaremos*! |\n" +
        "| *vosotros/as* | infinitive + **-éis** (*hablaréis*) | infinitive + **-íais** (*hablaríais*) | Keep the accent! |\n" +
        "| *ellos / ellas / ustedes* | infinitive + **-án** (*hablarán*) | infinitive + **-ían** (*hablarían*) | Keep the accent! |\n\n" +
        "### 2. The Famous 12 Shared Irregular Stems (Identical in Future & Conditional!)\n" +
        "Group them into three phonetic patterns — every stem ends in **r**, and the endings never change:\n" +
        "1. **Drop the *-e-*** (5 verbs): *poder → **podr-***, *saber → **sabr-***, *haber → **habr-*** (**habrá** = there will be / **habría** = there would be), *querer → **querr-*** (double *rr*!), *caber → **cabr-***.\n" +
        "2. **Swap *-e/-i* for cushion *-d-*** (5 verbs): *tener → **tendr-***, *poner → **pondr-***, *salir → **saldr-***, *venir → **vendr-***, *valer → **valdr-*** (**valdría la pena** = it would be worth it).\n" +
        "3. **Ultra-short stems** (2 verbs): *hacer → **har-*** (*haré, haría*), *decir → **dir-*** (*diré, diría*).\n\n" +
        "### 3. Near Future (*ir a + infinitive*) vs Simple Future vs Conditional\n" +
        "- **Near Future** (*voy a estudiar* = 'I am going to study'): great for immediate plans, **plus** reflexive pronouns can attach to the infinitive (*voy a relajarme*) or precede *ir* (*me voy a relajar*).\n" +
        "- **Simple Future** (*estudiaré, tendré, habrá*): essential for Paper 2 Q7 higher-register predictions (*dentro de diez años trabajaré en el extranjero*).\n" +
        "- **Conditional** (*me gustaría, debería, podríamos, tendría*): expresses polite wishes, hypothetical outcomes, and advice (*En tu lugar, hablaría con el profesor*).",
      diagram:
        '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Engine diagram showing the 12 shared irregular stems feeding into both Simple Future and Conditional endings">' +
        '<rect x="8" y="8" width="624" height="204" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="31" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">The 12 Shared Irregular Stems → Two Tenses for the Price of One</text>' +
        '<rect x="20" y="46" width="335" height="152" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>' +
        '<text x="187" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d">Shared Irregular Stems (all end in -r)</text>' +
        '<text x="34" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534">Drop -e-:</text>' +
        '<text x="100" y="90" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">podr- · sabr- · habr- · querr- · cabr-</text>' +
        '<text x="34" y="118" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534">Add -d-:</text>' +
        '<text x="100" y="118" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">tendr- · pondr- · saldr- · vendr- · valdr-</text>' +
        '<text x="34" y="146" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#166534">Short:</text>' +
        '<text x="100" y="146" font-family="system-ui, sans-serif" font-size="11" fill="#1e293b">hacer → har- · decir → dir-</text>' +
        '<text x="187" y="180" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#475569">Compounds obey too: mantener → mantendr-</text>' +
        '<line x1="355" y1="92" x2="395" y2="92" stroke="#16a34a" stroke-width="2.5"/>' +
        '<polygon points="395,92 387,87 387,97" fill="#16a34a"/>' +
        '<line x1="355" y1="156" x2="395" y2="156" stroke="#7c3aed" stroke-width="2.5"/>' +
        '<polygon points="395,156 387,151 387,161" fill="#7c3aed"/>' +
        '<rect x="398" y="46" width="220" height="70" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>' +
        '<text x="508" y="66" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#047857">+ Future (' + "'will'" + ')</text>' +
        '<text x="508" y="86" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#0f172a">-é · -ás · -á · -emos · -éis · -án</text>' +
        '<text x="508" y="104" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#047857">tendré · harás · habrá</text>' +
        '<rect x="398" y="128" width="220" height="70" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>' +
        '<text x="508" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6d28d9">+ Conditional (' + "'would'" + ')</text>' +
        '<text x="508" y="168" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" fill="#0f172a">-ía · -ías · -ía · -íamos · -íais · -ían</text>' +
        '<text x="508" y="186" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6d28d9">tendría · harías · habría</text>' +
        "</svg>",
      diagramCaption: "One irregular stem table powers both the Simple Future ('will') and Conditional ('would').",
      workedExamples: [
        {
          title: "Transforming Present into Simple Future & Conditional",
          problem:
            "Rewrite *tenemos tiempo* ('we have time') in (a) the **Simple Future** ('we will have time') and (b) the **Conditional** ('we would have time').",
          steps: [
            "*Tener* is one of the Cushion-*-d-* verbs: its shared Future/Conditional stem is **tendr-**.",
            "(a) Simple Future *nosotros* ending is **-emos** (the ONLY Future form with NO written accent!): **tendremos tiempo**.",
            "(b) Conditional *nosotros* ending is **-íamos** (with written accent on *í*): **tendríamos tiempo**.",
          ],
          answer: "(a) tendremos tiempo · (b) tendríamos tiempo",
          yourTurn: {
            question:
              "Complete with the **simple future** form of **hacer** (*yo*): El verano que viene _______ un curso de buceo. (Write ONLY the missing verb.)",
            answer: { type: "text", accept: acceptedForms("hacer", "future", "yo"), display: "haré" },
            solution: "*Hacer* uses the irregular stem **har-** + *yo* Future ending **-é** → **haré**.",
          },
        },
      ],
      keyPoints: [
        "Regular Simple Future and Conditional keep the **entire infinitive** (*comeré, viviríamos*) — never chop off *-ar/-er/-ir* first!",
        "Simple Future takes an accent on EVERY person **except *nosotros*** (*hablaremos, tendremos*). Conditional takes **-ía-** on ALL six persons.",
        "Compound verbs inherit their root's irregular stem: *mantener → mantendré*, *suponer → supondría*, *deshacer → desharé*.",
        "Use **dentro de + time** (*dentro de cinco años*) for 'in five years' time' — NEVER *en cinco años* when referring to a future delay!",
      ],
      whyItWorks:
        "Historically, *hablaré* came from *hablar + he* (present of *haber*) and *hablaría* came from *hablar + había* (imperfect of *haber*) — that is why Conditional endings (*-ía, -ías, -ía, -íamos, -íais, -ían*) are identical to *-er/-ir* Imperfect endings!",
      strategies: [
        "Never rely solely on *voy a + infinitive* in Paper 2 Q7: pair *voy a* with at least two Simple Future verbs (*iré, será, habrá*) and two Conditionals (*me gustaría, debería*).",
        "Watch out for *querré / querría* ('I will want / I would like'): double **rr** distinguishes *querré* from any confusion with *querer*.",
      ],
      thinkDeeper:
        "Spanish also uses the Simple Future for present-time **probability** (*¿Dónde estará mi móvil?* = 'I wonder where my phone is / Where could it be?'). How could you spot this in a Paper 1 Listening dialogue?",
    },
    {
      id: "grade9-verbal-idioms",
      heading: "Grade-9 verbal idioms & 3-time-frame architecture",
      discovery: {
        problem:
          "An English speaker translates 'I have been studying Spanish for three years' word-for-word as *He estado estudiando español por tres años* ❌. How does a native speaker in Madrid express this naturally in half as many words?",
        idea:
          "Because the action is **still happening right now**, Spanish uses the **Present tense** with either **llevar + time + gerund** (*Llevo tres años estudiando español*) or **present + desde hace + time** (*Estudio español desde hace tres años*) — never a literal translation of English 'have been -ing'!",
      },
      body:
        "Examiners marking Edexcel `4SP0` Paper 2 Q7 and Paper 3 Speaking look specifically for **idiomatic verbal structures** (*perífrasis verbales*) and smooth transitions across **past, present, and future**.\n\n" +
        "### 1. Seven High-Scoring IGCSE Verbal Idioms\n\n" +
        "| Idiom Formula | Meaning | Grade-9 Example (Present & Past Upgrades!) |\n" +
        "|---|---|---|\n" +
        "| **acabar de** + infinitive | to have just done (*acababa de* = had just done!) | *Acabo de terminar mis deberes.* / *Acababa de llegar cuando llovió.* |\n" +
        "| **soler** (*o→ue*) + infinitive | to usually do (*solía* = used to do!) | *Suelo repasar por la tarde.* / *De niña solía leer cómics.* |\n" +
        "| **llevar** + time + **gerund** | to have been doing for [time] | *Llevo cuatro años tocando el piano.* (*Llevaba dos horas esperando.*) |\n" +
        "| Present + **desde hace** + time | have/has been doing since [time] ago | *Vivo aquí desde hace diez años.* (Imperfect + *desde hacía* = had been!) |\n" +
        "| **seguir / continuar** + **gerund** | to keep on / continue doing | *Sigo aprendiendo vocabulario nuevo.* (*sin* = *llevar dos días sin dormir*!) |\n" +
        "| **volver a** + infinitive | to do [something] again | *El año que viene volveré a visitar Sevilla.* (Better than *visitaré otra vez*!) |\n" +
        "| **al** / **antes de** / **después de** + inf. | upon -ing / before -ing / after -ing | *Al llegar al hotel, descansamos.* / *Antes de cenar, hice deporte.* |\n\n" +
        "### 2. Gerund (*-ando / -iendo*) Precision Rules\n" +
        "- Regular: *-ar → **-ando*** (*hablando*), *-er/-ir → **-iendo*** (*comiendo, viviendo*).\n" +
        "- Vowel-bridge *i → y*: *leer → **leyendo***, *oír → **oyendo***, *ir → **yendo***, *traer → **trayendo***, *construir → **construyendo***.\n" +
        "- *-ir* stem-changers shift *e → i* or *o → u* (just like 3rd-person preterite!): *pedir → **pidiendo***, *preferir → **prefiriendo***, *seguir → **siguiendo***, *dormir → **durmiendo***, *vestirse → **vistiéndose***.\n" +
        "- **CRITICAL TRAP**: After prepositions (*para, sin, antes de, después de, en vez de, al*) and verbs like *gustar, evitar, dejar de*, Spanish ALWAYS uses the **infinitive**, NEVER the gerund (*Antes de salir* ✅, NEVER *Antes de saliendo* ❌)!\n\n" +
        "### 3. The 4-Pillar Paper 2 Q7 Essay Blueprint (130–150 Words)\n" +
        "Every Q7 prompt has **four bullet points** — typically spanning past, present/opinion, and future plans. Hit every bullet cleanly with one time-frame pillar per paragraph!",
      diagram:
        '<svg viewBox="0 0 640 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four-pillar Paper 2 Question 7 essay blueprint linking Past, Present, Future and Conditional">' +
        '<rect x="8" y="8" width="624" height="209" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="320" y="31" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#0f172a">Edexcel Paper 2 Q7 (130–150w) — 3-Time-Frame Grade-9 Blueprint</text>' +
        '<rect x="18" y="48" width="144" height="152" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>' +
        '<text x="90" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">1. PAST ANCHOR</text>' +
        '<text x="90" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">Imperfect scene +</text>' +
        '<text x="90" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">Preterite events +</text>' +
        '<text x="90" y="122" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">Pluperfect flash:</text>' +
        '<text x="90" y="148" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e40af">Aunque llovía, fuimos...</text>' +
        '<text x="90" y="166" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#1e40af">nunca había visto...</text>' +
        '<rect x="172" y="48" width="144" height="152" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>' +
        '<text x="244" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d">2. PRESENT + IDIOM</text>' +
        '<text x="244" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">Routine + duration</text>' +
        '<text x="244" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">periphrasis:</text>' +
        '<text x="244" y="134" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534">Hoy en día suelo...</text>' +
        '<text x="244" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534">Llevo 3 años + gerund</text>' +
        '<text x="244" y="170" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#166534">Acabo de descubrir...</text>' +
        '<rect x="326" y="48" width="144" height="152" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>' +
        '<text x="398" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#a16207">3. BALANCED VIEW</text>' +
        '<text x="398" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">Justified pros/cons</text>' +
        '<text x="398" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">+ Perfect tense:</text>' +
        '<text x="398" y="134" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#854d0e">Por un lado... sin</text>' +
        '<text x="398" y="150" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#854d0e">embargo... Siempre</text>' +
        '<text x="398" y="166" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#854d0e">he pensado que...</text>' +
        '<rect x="480" y="48" width="142" height="152" rx="10" fill="#f5f3ff" stroke="#8b5cf6" stroke-width="1.5"/>' +
        '<text x="551" y="68" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#6d28d9">4. FUTURE + COND.</text>' +
        '<text x="551" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">Simple Future +</text>' +
        '<text x="551" y="106" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" fill="#1e293b">Conditional payoff:</text>' +
        '<text x="551" y="134" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b21b6">El próximo año haré...</text>' +
        '<text x="551" y="152" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b21b6">Volveré a ir...</text>' +
        '<text x="551" y="170" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" fill="#5b21b6">Me encantaría...</text>' +
        "</svg>",
      diagramCaption: "Mapping the 4 bullet points of Paper 2 Q7 onto Past, Present + Idiom, Opinion + Perfect, and Future + Conditional guarantees top-band range.",
      workedExamples: [
        {
          title: "Upgrading English 'have been doing' & 'again' into Grade-9 Spanish",
          problem:
            "Express naturally in Spanish: (a) *I have just finished the book* (*terminar el libro*), and (b) *We have been living here for five years* (*vivir aquí, cinco años* — using *llevar*).",
          steps: [
            "(a) 'Have just done' uses **present of *acabar* + *de* + infinitive**: *yo* → **Acabo de terminar el libro**.",
            "(b) Ongoing duration uses **present of *llevar* + time + gerund**: *nosotros* → *llevamos* + *cinco años* + gerund of *vivir* (*viviendo*) → **Llevamos cinco años viviendo aquí**.",
          ],
          answer: "(a) Acabo de terminar el libro. · (b) Llevamos cinco años viviendo aquí.",
          yourTurn: {
            question:
              "Complete the duration idiom with the **gerund** of **dormir**: Mi perro lleva tres horas _______. (Write ONLY the missing gerund.)",
            answer: { type: "text", accept: ["durmiendo"], display: "durmiendo" },
            solution: "*Dormir* is an *-ir* stem-changer (*o → u* in the gerund as well as 3rd-person preterite): **durmiendo**.",
          },
        },
      ],
      keyPoints: [
        "**acabar de + infinitive** in the Present (*acabo de ver*) = 'have just seen'; in the Imperfect (*acababa de ver*) = 'had just seen'!",
        "**soler + infinitive** works in Present (*suelo ir* = 'I usually go') and Imperfect (*solía ir* = 'I used to go') — avoid using *soler* in Preterite or Future.",
        "**llevar + time + gerund** (*llevo dos años estudiando*) = **present + desde hace + time** (*estudio desde hace dos años*).",
        "**seguir + gerund** (*sigo pensando*) uses the gerund, whereas **volver a + infinitive** (*volví a leer*) and **al + infinitive** (*al despertar*) use the infinitive!",
      ],
      whyItWorks:
        "Verbal periphrases pack aspectual nuance (immediacy, habit, continuity, repetition) into simple helper verbs that you already know how to conjugate, letting you sound effortlessly idiomatic without memorising extra endings.",
      strategies: [
        "Before handing in Paper 2 Q7, run a **3-Time-Frame Audit**: underline at least 2 Past tenses (Preterite + Imperfect), 2 Present/Perfect verbs, and 2 Future/Conditional verbs.",
        "Replace clumsy adverbs (*usualmente, otra vez*) with conjugated verbal idioms (*suelo + inf., volver a + inf.*).",
      ],
      thinkDeeper:
        "How do you express 'I have **not** played football for two months' using *llevar*? (Hint: compare *Llevo dos meses jugando* with *Llevo dos meses **sin jugar***!)",
    },
  ],
  learn: {
    flashcards: [
      { front: "*hablo* vs *habló*", back: "**hablo** (no accent) = I speak (Present) · **habló** (accent) = he/she/usted spoke (Preterite)." },
      { front: "*-car / -gar / -zar* in *yo* Preterite", back: "*buscar → **busqué***, *llegar → **llegué***, *empezar → **empecé*** (spelling change in *yo* ONLY)." },
      { front: "*-ir* Sandal Preterites (3rd person)", back: "*pedir → **pidió / pidieron***, *preferir → **prefirió / prefirieron***, *dormir → **durmió / durmieron***." },
      { front: "Strong Preterites of *tener, estar, poder, poner, saber*", back: "**tuve, estuve, pude, puse, supe** — endings *-e, -iste, -o, -imos, -isteis, -ieron* with **ZERO** written accents!" },
      { front: "Preterite of *hacer* (all 6 forms)", back: "**hice, hiciste, hizo, hicimos, hicisteis, hicieron** (watch *c → z* in **hizo**, no accents!)." },
      { front: "Preterite of *ir* AND *ser*", back: "**fui, fuiste, fue, fuimos, fuisteis, fueron** — identical forms, **NO** accents on *fui* or *fue*!" },
      { front: "J-stem Preterites in *ellos*", back: "**dijeron, trajeron, condujeron, produjeron** — drop the *i* in *-eron*!" },
      { front: "The ONLY 3 Irregular Imperfects", back: "**ser → era** (*éramos*), **ir → iba** (*íbamos*), **ver → veía** (*veíamos*)." },
      { front: "*había* vs *hubo* vs *habrá* vs *habría*", back: "**había** = there was/were (background) · **hubo** = there was/were (event) · **habrá** = there will be · **habría** = there would be." },
      { front: "10 Essential Irregular Past Participles", back: "**hecho, visto, escrito, puesto, dicho, vuelto, abierto, descubierto, roto, muerto** (plus *resuelto*)." },
      { front: "Perfect vs Pluperfect of *ver* (*yo*)", back: "**he visto** ('I have seen') vs **había visto** ('I had seen') — never split *haber* + participle!" },
      { front: "Simple Future Endings", back: "Infinitive/stem + **-é, -ás, -á, -emos, -éis, -án** (accent on every person EXCEPT *nosotros*!)." },
      { front: "12 Shared Future & Conditional Irregular Stems", back: "**tendr-, pondr-, saldr-, vendr-, valdr-, podr-, sabr-, habr-, querr-, cabr-, har-, dir-**." },
      { front: "*acabo de + inf.* vs *acababa de + inf.*", back: "**acabo de llegar** = I have just arrived · **acababa de llegar** = I had just arrived." },
      { front: "Two ways to say 'I have been studying for 3 years'", back: "**Llevo tres años estudiando** OR **Estudio desde hace tres años** (Present tense!)." },
      { front: "*seguir + gerund* vs *volver a + infinitive*", back: "**sigo estudiando** = I keep on studying · **volví a estudiar** = I studied again." },
    ],
    mustKnow: [
      "Can you distinguish *hablo / compro / trabajo* (Present *yo*) from *habló / compró / trabajó* (Preterite *él/ella*) by the final accent?",
      "Can you conjugate strong preterites (*tuve, estuve, hice/hizo, pude, puse, supe, quise, vine, dije/dijeron, fui/fue*) with **zero** written accents?",
      "Can you apply *-car/-gar/-zar* shifts in *yo* preterite (*busqué, llegué, empecé*) and *i → y* / *-ir* sandal shifts in 3rd-person preterite (*leyó, pidió, durmieron*)?",
      "Can you combine **Imperfect** background (*llovía, eran las ocho, mientras caminaba*) with **Preterite** events (*vi, empezó, hubo*) in a past narrative?",
      "Can you form the **Perfect** (*he hecho*) and **Pluperfect** (*había hecho*) with all irregular participles while keeping *haber + participle* unsplit?",
      "Can you form the **Simple Future** and **Conditional** across all 12 shared irregular stems (*tendré/tendría, haré/haría, habrá/habría*)?",
      "Can you express ongoing duration naturally with **llevar + time + gerund** and **present + desde hace + time**?",
      "Can you deploy **acabar de + inf.**, **soler + inf.**, **seguir + gerund**, **volver a + inf.**, and **al + inf.** accurately in Paper 2 Q7?",
      "Can you keep prepositions (*antes de, después de, sin, para, al*) followed strictly by the **infinitive**, never the *-ndo* gerund?",
      "Can you audit a 130–150 word Paper 2 Q7 essay to confirm past, present, future, and conditional time frames are all represented?",
    ],
    misconceptions: [
      {
        wrong: "*Ayer mi padre hablo con el médico y compro medicinas.* ❌",
        right: "**Ayer mi padre habló con el médico y compró medicinas.** ✅ — Without the accent on *-ó*, *hablo* and *compro* mean 'I speak' and 'I buy' in the Present tense, costing instant marks in Paper 2 Q3c!",
      },
      {
        wrong: "*El verano pasado fuí a España, ví el museo y tuvó mucho éxito.* ❌",
        right: "**El verano pasado fui a España, vi el museo y tuvo mucho éxito.** ✅ — Monosyllables (*fui, fue, vi, vio, di, dio*) and strong-stem preterites (*tuve/tuvo, hice/hizo, puse/puso, pude/pudo*) **never** carry written accents!",
      },
      {
        wrong: "*Mi amigo hico sus deberes y mis padres dijieron la verdad.* ❌",
        right: "**Mi amigo hizo sus deberes y mis padres dijeron la verdad.** ✅ — *Hacer* changes *c → z* before *-o* (**hizo**), and *j*-stem preterites drop the *i* in *ellos* (**dijeron, trajeron, condujeron**).",
      },
      {
        wrong: "*He no visto esa película / Hemos siempre vivido aquí.* ❌",
        right: "**No he visto esa película / Siempre hemos vivido aquí.** ✅ — Auxiliary *haber* and the past participle form an unbreakable unit; *no*, object pronouns, and adverbs never sit between them.",
      },
      {
        wrong: "*El año que viene teneré diecisiete años y haceré voluntariado.* ❌",
        right: "**El año que viene tendré diecisiete años y haré voluntariado.** ✅ — Never regularise the 12 shared Future/Conditional stems (*tendré, pondré, saldré, vendré, podré, sabré, habré, querré, haré, diré*).",
      },
      {
        wrong: "*He estado jugando al bádminton por cuatro años.* ❌",
        right: "**Llevo cuatro años jugando al bádminton.** / **Juego al bádminton desde hace cuatro años.** ✅ — For an action that started in the past and continues now, Spanish uses *llevar + time + gerund* or Present + *desde hace*.",
      },
      {
        wrong: "*Mientras caminé al colegio, llovió.* ❌",
        right: "**Mientras caminaba al colegio, empezó a llover / llovía.** ✅ — *Mientras* ('while') introduces an ongoing action in progress and takes the **Imperfect** (*caminaba*).",
      },
      {
        wrong: "*Después de comiendo, sigo estudiar en mi cuarto.* ❌",
        right: "**Después de comer, sigo estudiando en mi cuarto.** ✅ — Prepositions (*después de, antes de, sin, para, al*) ALWAYS take the **infinitive**, whereas *seguir / continuar* ALWAYS take the **gerund**!",
      },
    ],
    examMistakes: [
      "**Paper 2 Q3c (Grammar Gap-Fill)**: Ignoring the time marker at the start of the sentence (*El mes pasado…*, *Dentro de dos años…*, *De pequeña…*) and writing a Present tense form instead of Preterite, Future, or Imperfect.",
      "**Paper 2 Q3c**: Confusing *nosotros* Present and Preterite in *-ar*/*-ir* verbs vs *-er* verbs (*comemos* = Present, **comimos** = Preterite!), or putting an accent on *hablaremos* (Future *nosotros* has NO accent).",
      "**Paper 1 Listening**: Missing future vs past meaning when hearing final-syllable stress — *trabajará* ('will work') and *trabajó* ('worked') are stressed on the **last** syllable, whereas *trabajo* ('I work') and *trabajaba* ('used to work') are stressed earlier!",
      "**Paper 2 Q6 (60–75w) & Q7 (130–150w)**: Answering a past bullet point entirely in the Imperfect (*iba a Madrid, comía paella*) so it reads 'I used to go every day' instead of 'I went last weekend' (*fui a Madrid, comí paella*).",
      "**Paper 2 Q7**: Using only *voy a + infinitive* four times in a row for the future bullet instead of mixing *espero + inf.*, Simple Future (*estudiaré, habrá*), and Conditional (*me encantaría*).",
      "**Paper 3 Speaking**: Freezing when the examiner switches from Present (*¿Qué sueles hacer los fines de semana?*) to Past (*¿Qué hiciste el sábado pasado?*) or Future (*¿Qué planes tienes para el verano que viene?*) — mirror the examiner's tense immediately in your very first verb!",
      "**Confusing *por* vs *dentro de* for future time**: Writing *En diez años viviré…* (Anglicism) instead of **Dentro de diez años viviré…** ('In ten years' time I will live…').",
    ],
    mnemonics: [
      {
        topic: "The ONLY 3 Irregular Imperfects",
        device: "SIV → era, iba, veía",
        explanation: "**S**er (*era*), **I**r (*iba*), **V**er (*veía*) — the 'SIV' sieve lets every single other Spanish verb pass straight through regularly!",
      },
      {
        topic: "Irregular Past Participles",
        device: "REVV MAC PHDD",
        explanation: "**R**oto, **E**scrito, **V**isto, **V**uelto · **M**uerto, **A**bierto, **C**ubierto (*descubierto*) · **P**uesto, **H**echo, **D**icho, **D**evuelto.",
      },
      {
        topic: "Imperfect Scene-Setting Uses",
        device: "WATERS",
        explanation: "**W**eather (*llovía*), **A**ge (*tenía 10 años*), **T**ime (*eran las seis*), **E**motion/state (*estaba feliz*), **R**epeated habit (*iba cada día*), **S**etting/ongoing (*mientras leía*).",
      },
      {
        topic: "Future Cushion -D- Stems",
        device: "Ten-Pon-Sal-Ven-Val → add D!",
        explanation: "*tener (tendr-), poner (pondr-), salir (saldr-), venir (vendr-), valer (valdr-)* all swap their vowel for a crisp **d** before *-r-*.",
      },
    ],
    realWorld: [
      {
        title: "Madrid's 'Hoy he desayunado' vs Mexico City's 'Hoy desayuné'",
        detail:
          "Order breakfast in Madrid at 11 a.m. and a waiter will ask *¿Qué ha tomado hoy?* using the **Perfect** tense because 'today' is not over yet. In Bogotá, Buenos Aires, or Mexico City, you will hear *¿Qué tomaste hoy?* in the **Preterite**, reserving the Perfect for life experiences (*Nunca he estado allí*).",
        emoji: "☕",
      },
      {
        title: "Sports Commentary on Radio Marca & ESPN Deportes",
        detail:
          "Spanish football commentators switch tenses every three seconds: Imperfect for build-up (*Controlaba el balón en el área…*), Preterite for the strike (*…disparó y marcó un golazo*), and *acabar de* for instant replay (*¡Acaba de batir el récord!*).",
        emoji: "⚽",
      },
      {
        title: "Weather Forecasts on RTVE El Tiempo",
        detail:
          "Spanish TV meteorologists showcase **habrá** and **hará** constantly: *Mañana habrá cielos despejados en el sur, hará calor en Andalucía y lloverá en Galicia* — exact models for Area A & Tense Mastery questions.",
        emoji: "🌦️",
      },
      {
        title: "Polite Requests in Cafés & Hotels: Conditional & Quisiera",
        detail:
          "Instead of blunt *Quiero una mesa*, Spanish speakers soften requests with the Conditional (*¿Podría traerme la carta?*, *Me gustaría reservar…*) or *Quisiera…* — an effortless Grade-9 upgrade for Paper 3 role-plays.",
        emoji: "🍽️",
      },
    ],
    videos: [
      {
        title: "Preterite vs Imperfect in Spanish — Complete IGCSE Story Guide",
        channel: "Butterfly Spanish",
        url: "https://www.youtube.com/results?search_query=butterfly+spanish+preterite+vs+imperfect",
      },
      {
        title: "Irregular Preterite Verbs & Strong Stems Made Easy",
        channel: "The Language Tutor — Spanish",
        url: "https://www.youtube.com/results?search_query=spanish+irregular+preterite+strong+stems+igcse",
      },
      {
        title: "Spanish Simple Future & Conditional — 12 Irregular Stems",
        channel: "Español con Juan",
        url: "https://www.youtube.com/results?search_query=espanol+con+juan+futuro+y+condicional+irregulares",
      },
      {
        title: "Llevar + Gerundio, Acabar de & Soler — Grade 9 Spanish Idioms",
        channel: "Why Not Spanish?",
        url: "https://www.youtube.com/results?search_query=spanish+llevar+gerundio+acabar+de+soler",
      },
    ],
    formulas: [
      {
        name: "Interrupting Past Narrative Frame",
        formula: "*Mientras* + **Imperfect** (*estudiaba*), + **Preterite** (*sonó el teléfono*).",
        note: "Background video clip interrupted by a single camera snapshot.",
      },
      {
        name: "Ongoing Duration Formula A (Llevar)",
        formula: "**llevar** (present) + [time] + **gerund** (*-ando / -iendo*)",
        note: "Example: *Llevo cinco años estudiando español.* Negated: *Llevo dos días sin dormir.*",
      },
      {
        name: "Ongoing Duration Formula B (Desde hace)",
        formula: "**Present tense** + **desde hace** + [time]",
        note: "Example: *Toco la guitarra desde hace cuatro años.* Past version: Imperfect + *desde hacía*.",
      },
      {
        name: "Immediate Past & Pluperfect Shortcut (Acabar de)",
        formula: "**acabo de** + inf. ('have just') · **acababa de** + inf. ('had just')",
        note: "Example: *Acabábamos de llegar cuando empezó a llover.*",
      },
      {
        name: "Habitual Present & Past (Soler)",
        formula: "**suelo** + inf. ('I usually…') · **solía** + inf. ('I used to…')",
        note: "Stem-changes *o → ue* in present boot (*suelo, sueles, suele, solemos, soléis, suelen*).",
      },
      {
        name: "Perfect & Pluperfect Compound Frame",
        formula: "**he/has/ha/hemos/habéis/han** (or **había…**) + **past participle (-ado/-ido/irregular)**",
        note: "Never split auxiliary and participle; participle always ends in *-o*!",
      },
      {
        name: "Future & Conditional Shared Stems",
        formula: "(Infinitive or **tendr-/pondr-/saldr-/vendr-/podr-/sabr-/habr-/querr-/valdr-/cabr-/har-/dir-**) + **-é/-ás/-á/-emos/-éis/-án** or **-ía…**",
        note: "All Future forms carry an accent EXCEPT *nosotros* (*tendremos*).",
      },
    ],
  },
};
