import type { TopicGuide } from "../../types.ts";

const SVG_INFINITIVE_HABITS =
  '<svg viewBox="0 0 620 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing Spanish preposition and verb triggers followed strictly by the infinitive for healthy living">' +
  '<rect x="6" y="6" width="608" height="198" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="310" y="32" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#0f172a">Spanish Infinitive Rule: Preposition or Preference Verb + INFINITIVE (Never -ndo!)</text>' +
  '<rect x="24" y="50" width="175" height="134" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
  '<text x="111" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0369a1">1. Trigger / Preposition</text>' +
  '<text x="111" y="95" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#0f172a">para (in order to)</text>' +
  '<text x="111" y="115" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#0f172a">en vez de (instead of)</text>' +
  '<text x="111" y="135" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#0f172a">antes de / sin (before / without)</text>' +
  '<text x="111" y="155" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#0f172a">evitar / intentar / me gusta</text>' +
  '<line x1="205" y1="117" x2="238" y2="117" stroke="#0284c7" stroke-width="2.5"/>' +
  '<polygon points="238,111 250,117 238,123" fill="#0284c7"/>' +
  '<rect x="255" y="50" width="165" height="134" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>' +
  '<text x="337" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#15803d">2. Always -AR / -ER / -IR</text>' +
  '<text x="337" y="96" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#166534">mantenerme en forma</text>' +
  '<text x="337" y="118" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#166534">comer comida basura</text>' +
  '<text x="337" y="140" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#166534">desayunar bien</text>' +
  '<text x="337" y="162" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#166534">dormir ocho horas</text>' +
  '<rect x="438" y="50" width="158" height="134" rx="12" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>' +
  '<text x="517" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#b91c1c">English Gerund Trap</text>' +
  '<text x="517" y="98" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#7f1d1d">Never write: sin desayunando</text>' +
  '<text x="517" y="120" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#7f1d1d">Never write: evito comiendo</text>' +
  '<text x="517" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#7f1d1d">Never write: me gusta corriendo</text>' +
  '<text x="517" y="166" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#991b1b">Gerund = ONLY estar/llevar/seguir!</text>' +
  '</svg>';

const SVG_DOLER_REVERSE =
  '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing how reverse verbs doler and gustar agree with the grammatical subject on the right">' +
  '<rect x="6" y="6" width="608" height="208" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="310" y="30" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#0f172a">Reverse-Verb Architecture: Doler, Gustar, Encantar &amp; Hacer Falta</text>' +
  '<rect x="24" y="48" width="160" height="146" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>' +
  '<text x="104" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#5b21b6">Indirect Object (Who?)</text>' +
  '<text x="104" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e1b4b">(a mí) me</text>' +
  '<text x="104" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e1b4b">(a ti) te</text>' +
  '<text x="104" y="134" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e1b4b">(a él / ella) le</text>' +
  '<text x="104" y="154" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e1b4b">(a nosotros) nos</text>' +
  '<text x="104" y="174" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#1e1b4b">(a ellos) les</text>' +
  '<rect x="210" y="48" width="175" height="66" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>' +
  '<text x="297" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#1d4ed8">duele / gusta</text>' +
  '<text x="297" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#1e3a8a">3rd person SINGULAR</text>' +
  '<rect x="210" y="128" width="175" height="66" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>' +
  '<text x="297" y="152" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#b45309">duelen / gustan</text>' +
  '<text x="297" y="174" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#78350f">3rd person PLURAL (-n)</text>' +
  '<rect x="415" y="48" width="181" height="66" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>' +
  '<text x="505" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1e3a8a">la cabeza / la garganta</text>' +
  '<text x="505" y="94" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#1d4ed8">or INFINITIVE: hacer deporte</text>' +
  '<rect x="415" y="128" width="181" height="66" rx="12" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>' +
  '<text x="505" y="152" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#78350f">las muelas / los pulmones</text>' +
  '<text x="505" y="174" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#b45309">plural noun drives the -n!</text>' +
  '<line x1="415" y1="81" x2="391" y2="81" stroke="#2563eb" stroke-width="2.5"/>' +
  '<polygon points="393,76 385,81 393,86" fill="#2563eb"/>' +
  '<line x1="415" y1="161" x2="391" y2="161" stroke="#d97706" stroke-width="2.5"/>' +
  '<polygon points="393,156 385,161 393,166" fill="#d97706"/>' +
  '</svg>';

const SVG_SPORTS_DURATION =
  '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram comparing jugar a, hacer and tocar alongside Spanish duration idioms llevar plus gerund and desde hace">' +
  '<rect x="6" y="6" width="608" height="208" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="310" y="28" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#0f172a">Three Verbs for "Play / Do" + Two Grade-9 Duration Idioms</text>' +
  '<rect x="20" y="42" width="182" height="76" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>' +
  '<text x="111" y="62" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#15803d">JUGAR A (ball / board)</text>' +
  '<text x="111" y="82" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#14532d">juego al tenis / al fútbol</text>' +
  '<text x="111" y="100" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#14532d">juego a las cartas (u→ue)</text>' +
  '<rect x="219" y="42" width="182" height="76" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
  '<text x="310" y="62" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#0369a1">HACER / PRACTICAR</text>' +
  '<text x="310" y="82" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0c4a6e">hago natación / atletismo</text>' +
  '<text x="310" y="100" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0c4a6e">hago artes marciales (hago!)</text>' +
  '<rect x="418" y="42" width="182" height="76" rx="10" fill="#fae8ff" stroke="#a21caf" stroke-width="1.5"/>' +
  '<text x="509" y="62" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#86198f">TOCAR (instruments)</text>' +
  '<text x="509" y="82" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#4a044e">toco la guitarra / el piano</text>' +
  '<text x="509" y="100" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#4a044e">pret. yo: toqué (c→qu)</text>' +
  '<rect x="20" y="132" width="580" height="68" rx="10" fill="#fffbeb" stroke="#d97706" stroke-width="1.5"/>' +
  '<text x="310" y="152" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#92400e">Ongoing Duration ("I have been playing for 5 years" — NEVER he estado jugando!)</text>' +
  '<text x="170" y="178" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#78350f">1) Llevo cinco años jugando al tenis.</text>' +
  '<text x="450" y="178" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#78350f">2) Juego al tenis desde hace cinco años.</text>' +
  '</svg>';

const SVG_RESTAURANT_INSPECTOR =
  '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram contrasting pedir versus preguntar and ser versus estar in Spanish restaurant interactions">' +
  '<rect x="6" y="6" width="608" height="208" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="310" y="30" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#0f172a">Restaurant Precision: Ordering &amp; Complaining Without Losing Marks</text>' +
  '<rect x="22" y="46" width="278" height="152" rx="12" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
  '<text x="161" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#0369a1">PEDIR vs PREGUNTAR</text>' +
  '<text x="161" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0c4a6e">pedir (e→i) = request / order</text>' +
  '<text x="161" y="110" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0f172a">Pedí la cuenta / el menú del día.</text>' +
  '<text x="161" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0c4a6e">preguntar = ask information</text>' +
  '<text x="161" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0f172a">Pregunté si llevaba frutos secos.</text>' +
  '<text x="161" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b91c1c">Never write: pedir por / preguntar la cuenta!</text>' +
  '<rect x="320" y="46" width="278" height="152" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>' +
  '<text x="459" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#15803d">SER vs ESTAR WITH FOOD</text>' +
  '<text x="459" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#14532d">ser = inherent nature / category</text>' +
  '<text x="459" y="110" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0f172a">El helado es frío. El pescado es sano.</text>' +
  '<text x="459" y="138" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#14532d">estar = current state / taste today</text>' +
  '<text x="459" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#0f172a">¡La sopa está fría! La paella está riquísima.</text>' +
  '<text x="459" y="180" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#166534">El tenedor está sucio (dirty right now).</text>' +
  '</svg>';

export const guide: TopicGuide = {
  id: "social-fitness-health",
  title: "Area E — Social Activities, Fitness & Health (Ocio, deporte y salud)",
  strand: "People, World & Health",
  icon: "🏃",
  summary:
    "Master Edexcel 4SP0 Area E: healthy lifestyles, addictions & doler, sports & duration idioms, cultural reviews, and polite restaurant complaints.",
  intro:
    "Area E (*Ocio, deporte y salud*) appears across every paper in Pearson Edexcel IGCSE Spanish (`4SP0`): listening to teenagers debate vaping or cinema genres in Paper 1, filling Q3c grammar gaps and writing 130–150 words on healthy living in Paper 2, and handling spontaneous restaurant or leisure follow-ups in Paper 3. This guide turns every classic English-interference trap—gerunds after prepositions, *doler/gustar* agreement, *jugar a* vs *hacer* vs *tocar*, and *pedir* vs *preguntar*—into automatic Grade-9 precision.",
  guide: [
    {
      id: "healthy-living-and-diet",
      heading: "Healthy vs unhealthy diet & daily habits",
      discovery: {
        problem:
          "Spot the TWO English-interference mistakes in this IGCSE draft: *«Para manteniendo en forma, evito comiendo comida basura y me gusta corriendo por el parque.»* Why does Spanish reject all three *-ndo* forms here?",
        idea:
          "In Spanish, **every preposition** (*para, sin, antes de, después de, en vez de*) and **preference/control verb** (*gustar, encantar, evitar, intentar, decidir, querer, poder, soler*) MUST be followed by the **infinitive** (*-ar / -er / -ir*), never the gerund (*-ndo*). Correct Grade-9 Spanish: *«Para **mantenerme** en forma, evito **comer** comida basura y me gusta **correr** por el parque.»*",
      },
      body:
        "To score top marks on Edexcel `4SP0` Paper 2 Q6/Q7 essays about *la vida sana*, pair precise nutritional vocabulary with infinitive purpose and contrast frames.\n\n" +
        "**1. Core Nutrition & Routine Vocabulary**\n\n" +
        "| Healthy Habits (*Hábitos saludables*) | Unhealthy Traps (*Malos hábitos*) |\n" +
        "|---|---|\n" +
        "| *llevar una vida sana / activa* (to lead a healthy/active life) | *llevar un estilo de vida sedentario* (to lead a sedentary lifestyle) |\n" +
        "| *seguir una dieta equilibrada* (to follow a balanced diet) | *comer demasiada comida basura / rápida* (to eat too much junk/fast food) |\n" +
        "| *comer fruta fresca, verduras y legumbres* (fresh fruit, veg & pulses) | *consumir grasas saturadas y bebidas azucaradas* (saturated fats & sugary drinks) |\n" +
        "| *beber dos litros de agua al día* (to drink 2L of water a day) | *saltarse el desayuno* (to skip breakfast) |\n" +
        "| *dormir ocho horas diarias* (to sleep 8 hours a day) | *acostarse tarde pegado a la pantalla* (to go to bed late glued to a screen) |\n\n" +
        "**2. The Golden Infinitive Rule (Zero Unauthorised Gerunds!)**\n" +
        "English uses *-ing* as a verbal noun (*\"instead of eating\", \"I avoid eating\", \"before sleeping\"*). Spanish **never** uses *-ando/-iendo* as a noun or after a preposition:\n" +
        "- **Purpose**: *Para **estar** en forma, entreno tres veces por semana.* (Notice *para* = in order to; never *por estar en forma*!)\n" +
        "- **Substitution**: *En vez de **beber** refrescos, tomo agua mineral.*\n" +
        "- **Routine sequence**: *Antes de **acostarme**, leo veinte minutos sin **mirar** el móvil.* (Attach the reflexive pronoun *me/te/se* to the end of the infinitive!)\n" +
        "- **Control & habit verbs**: *Intento **evitar** el azúcar y suelo **desayunar** cereales integrales.*",
      diagram: SVG_INFINITIVE_HABITS,
      diagramCaption:
        "Grade-9 mark-saver: after prepositions (para, sin, antes de, en vez de) and verbs like evitar or me gusta, Spanish always uses the infinitive.",
      workedExamples: [
        {
          title: "Upgrading a flat diet sentence to Band-5 Grade-9 Spanish",
          problem:
            "Upgrade *«Como verdura. No como comida rápida. Quiero estar sano.»* into one cohesive Grade-9 sentence using *para + infinitive*, *en vez de + infinitive*, and *soler*.",
          steps: [
            "Open with a *para + infinitive* purpose clause (attaching the reflexive pronoun to *mantenerse*): *Para mantenerme en forma...*",
            "Replace plain *como* with the stem-changing habit verb *soler (o→ue)*: *suelo seguir una dieta equilibrada rica en verduras...*",
            "Link the negative idea with *en vez de + infinitive*: *...en vez de consumir comida basura llena de grasas saturadas.*",
          ],
          answer:
            "Para mantenerme en forma, suelo seguir una dieta equilibrada rica en verduras en vez de consumir comida basura llena de grasas saturadas.",
          yourTurn: {
            question:
              "Complete the healthy-lifestyle sentence with the correct form of **mantenerse** (for *yo* after *para*): *Para _______ en forma, duermo ocho horas diarias.* (Write ONLY the missing Spanish word.)",
            answer: {
              type: "text",
              accept: ["mantenerme"],
              display: "mantenerme",
            },
            solution:
              "After the preposition *para* ('in order to'), Spanish requires the infinitive *mantener* with the *yo* reflexive pronoun *me* attached to the end: **mantenerme**.",
          },
        },
      ],
      keyPoints: [
        "Use *llevar una vida sana* and *seguir una dieta equilibrada* rather than repeating *ser sano* in every line.",
        "After *para, sin, antes de, después de, en vez de*, and *evitar / intentar / me gusta*, ALWAYS use the infinitive — never *-ando/-iendo*.",
        "Attach reflexive pronouns directly to an infinitive after a preposition (*para relajarme*, *antes de acostarme*, *sin estresarse*).",
        "Remember *el azúcar* is masculine (*demasiado azúcar*) while *la sal*, *la fibra*, *las grasas* and *las proteínas* are feminine.",
      ],
      whyItWorks:
        "In Spanish grammar, the **infinitive** is the only verb form that can act as a noun or object of a preposition (*el comer bien*, *para vivir*). The Spanish gerund (*comiendo*) is strictly an adverbial form restricted to ongoing progressive actions with *estar*, *llevar*, or *seguir*.",
      strategies: [
        "Scan every *-ndo* word in your Paper 2 draft: if the word before it is NOT *estar*, *llevar*, or *seguir/continuar*, turn it back into an infinitive!",
        "Check reflexive attachment on infinitives so the pronoun matches the subject (*yo → para mantenerme*, *nosotros → para mantenernos*).",
      ],
      thinkDeeper:
        "Why can you say *«El azúcar es malo»* OR *«El azúcar blanca»*? *Azúcar* is an uncommon 'ambiguous-gender' noun in Spanish, though with articles and quantifiers in IGCSE Spanish you will safest-score using masculine: *el azúcar / mucho azúcar*.",
    },
    {
      id: "smoking-alcohol-stress",
      heading: "Smoking, alcohol, addictions & managing stress",
      discovery: {
        problem:
          "Compare these two patient complaints at a Madrid pharmacy: (1) *«Me duele la garganta.»* (2) *«Me duelen los pulmones.»* Why did *duele* gain an **-n** in sentence 2 even though the speaker is still *yo* (*me*)?",
        idea:
          "*Doler* (*o→ue*) works backwards like *gustar*: literally *\"the throat hurts to me\"* vs *\"the lungs hurt to me\"*. The verb agrees with the **body part** (singular → *duele*, plural → *duelen*), while the person in pain is expressed by the indirect object pronoun (*me, te, le, nos, os, les*).",
      },
      body:
        "Edexcel Area E frequently tests the health risks of *el tabaco*, *el vapeo*, *el alcohol* and exam stress (*el estrés escolar*), alongside pharmacy/doctor role-plays using **doler**.\n\n" +
        "**1. Mastering *Doler* & Illness Expressions**\n\n" +
        "| Indirect Pronoun | + Singular Body Part / Infinitive | + Plural Body Part |\n" +
        "|---|---|---|\n" +
        "| *me / te / le* | *duele la cabeza / el estómago / la espalda* | *duelen las muelas / los ojos / las piernas* |\n" +
        "| *nos / os / les* | *duele mucho tragar* (it hurts to swallow) | *duelen los pulmones / los oídos* |\n\n" +
        "- Notice Spanish uses the **definite article** (*la cabeza*, NOT *mi cabeza*) because the pronoun *me* already shows whose head it is!\n" +
        "- Pair *doler* with *tener* idioms: *tener dolor de cabeza*, *tener fiebre*, *tener tos* (to have a cough), and *estar* states: *estar resfriado/a* (to have a cold), *estar mareado/a* (to feel dizzy), *estar agotado/a* (to be exhausted).\n\n" +
        "**2. Debating Smoking, Vaping, Alcohol & Stress**\n" +
        "- **Quitting a habit**: **dejar de + infinitive** = to stop/quit (*Mi tío dejó de fumar hace dos años*; NEVER *dejó fumando*).\n" +
        "- **Health consequences**: *Fumar es muy perjudicial para la salud porque daña los pulmones, mancha los dientes y provoca enfermedades graves.*\n" +
        "- **Peer pressure & alcohol**: *Muchos jóvenes empiezan a vapear o a emborracharse por la presión del grupo, pero crea una adicción peligrosa.*\n" +
        "- **Managing IGCSE stress**: *Para aliviar el estrés de los exámenes, aconsejo que descanses bien y que desconectes de las redes sociales.*",
      diagram: SVG_DOLER_REVERSE,
      diagramCaption:
        "Doler & gustar agree rightwards with the grammatical subject: singular noun/infinitive → duele/gusta; plural noun → duelen/gustan.",
      workedExamples: [
        {
          title: "Solving Paper 2 Q3c gaps with doler and dejar de",
          problem:
            "Complete both gaps accurately: (a) *A mi abuelo le _______ (doler, present) las rodillas.* (b) *El médico recomienda dejar de _______ (fumar).* ",
          steps: [
            "In (a), check the grammatical subject after the gap: *las rodillas* (plural). *Doler* stem-changes *o→ue* in the 3rd person plural: **duelen**.",
            "Double-check that *le* is already in front of the gap, so only the verb **duelen** is needed.",
            "In (b), *dejar de* ends in the preposition *de*, which must take the infinitive: **fumar**.",
          ],
          answer: "(a) duelen; (b) fumar",
          yourTurn: {
            question:
              "Complete the sentence with the **present tense** form of **doler**: *Después de estudiar diez horas, me _______ los ojos.* (Write ONLY the missing verb.)",
            answer: {
              type: "text",
              accept: ["duelen"],
              display: "duelen",
            },
            solution:
              "The grammatical subject is *los ojos* (plural), and *doler* is an *o→ue* boot verb, giving 3rd person plural **duelen**.",
          },
        },
      ],
      keyPoints: [
        "With *doler*, match the verb to the body part (*me duele la espalda* vs *me duelen las muelas*) and use *el/la/los/las*, not *mi/mis*.",
        "Use **dejar de + infinitive** to mean 'to quit / stop doing' (*dejar de fumar*, *dejar de beber*) and **empezar a + infinitive** for 'to start doing'.",
        "Learn high-impact Area E collocations: *ser perjudicial para la salud*, *provocar enfermedades*, *crear adicción*, and *aliviar el estrés*.",
      ],
      whyItWorks:
        "Like English *\"disgust\"* or *\"please\"*, Spanish *gustar*, *encantar*, *doler*, *faltar* and *interesar* place the stimulus as the grammatical subject and the human experiencer in the dative (*me/te/le/nos/os/les*). Once you look **to the right** of the verb to find its number, agreement mistakes vanish.",
      strategies: [
        "Arrow-Right Check: whenever you write *gustar*, *encantar*, *doler*, or *interesar*, draw a mental arrow to the noun/infinitive after it before choosing *-e/-a* vs *-en/-an*.",
        "In Paper 2 essays on unhealthy habits, add a subjunctive advice frame (*Es imprescindible que el gobierno prohíba... / Aconsejo que los jóvenes eviten...*) for instant top-band grammar credit.",
      ],
      thinkDeeper:
        "How does *doler* work in the Preterite vs Imperfect? *Ayer me dolió el estómago de repente* (sudden sharp pain, no stem change in preterite *o→u* because *doler* is *-er*, not *-ir*!) vs *Antes me dolía la cabeza todos los días* (ongoing/habitual pain).",
    },
    {
      id: "sports-and-events",
      heading: "Sports, duration idioms & major sporting events",
      discovery: {
        problem:
          "An English speaker translates *\"I have been playing basketball for four years\"* word-for-word as *«He estado jugando al baloncesto por cuatro años.»* Why do Edexcel examiners flag this as unnatural, and what TWO authentic present-tense structures do native speakers use instead?",
        idea:
          "For an action that **started in the past and is STILL true today**, Spanish uses the **present tense**, never *he estado + gerund* and never *por* for ongoing duration! Use either **(1) llevar + time + gerund** (*Llevo cuatro años jugando al baloncesto*) OR **(2) present tense + desde hace + time** (*Juego al baloncesto desde hace cuatro años*).",
      },
      body:
        "Sports and international tournaments (*los Juegos Olímpicos, el Mundial*) are prime territory for testing verb selection and ongoing duration.\n\n" +
        "**1. Choosing the Exact Verb: *Jugar a* vs *Hacer / Practicar* vs *Tocar***\n\n" +
        "| Verb | Exact Domain | Essential Examples & Stem Traps |\n" +
        "|---|---|---|\n" +
        "| **jugar a** (*u→ue*) | Ball sports, racket sports & board/video games | *juego **al** fútbol, jugamos **al** tenis, juegan **a los** videojuegos* (*a + el = al*!) |\n" +
        "| **hacer / practicar** | Individual, water, combat & track sports (no ball) | *hago natación, hago atletismo, hago ciclismo, practico artes marciales* (*yo hago*; pret. *hice / hizo*) |\n" +
        "| **tocar** | Musical instruments ONLY | *toco el piano, toca la batería, toqué la guitarra* (pret. *yo: c→qu → toqué*) |\n\n" +
        "**2. The Two Grade-9 Duration Formulas**\n" +
        "To say how long someone **has been doing** a sport or hobby that continues now:\n" +
        "1. **llevar + [time] + gerund (*-ando / -iendo*)**: *Llevo seis años **haciendo** natación.* / *Mi hermana lleva tres meses **entrenando** para el maratón.* (Negation: **llevar + [time] + sin + infinitive**, e.g. *Llevo una semana sin entrenar* = I haven't trained for a week!)\n" +
        "2. **[Present tense] + desde hace + [time]**: *Hago natación **desde hace** seis años.* / * ¿Desde hace cuánto tiempo juegas al bádminton?*\n\n" +
        "**3. Major Sporting Events — Benefits & Drawbacks**\n" +
        "- **Pros**: *Los Juegos Olímpicos fomentan el espíritu deportivo, unen a la gente, inspiran a los jóvenes y atraen turismo.*\n" +
        "- **Cons**: *Por otro lado, organizar un torneo internacional cuesta millones, provoca atascos y a veces hay escándalos de dopaje.*",
      diagram: SVG_SPORTS_DURATION,
      diagramCaption:
        "Match jugar a / hacer / tocar to the activity type, and express ongoing duration with llevar + time + gerund or present + desde hace.",
      workedExamples: [
        {
          title: "Converting 'desde hace' into 'llevar + gerund'",
          problem:
            "Rewrite *«Practicamos atletismo desde hace tres años»* using **llevar + gerund** with the exact same meaning.",
          steps: [
            "Conjugate *llevar* in the present tense to match *nosotros* (*practicamos*): **llevamos**.",
            "Insert the time duration directly after *llevar* (no *por* or *desde*!): **llevamos tres años**.",
            "Turn *practicar* into its regular *-ar* gerund (*-ando*): **practicando atletismo**.",
          ],
          answer: "Llevamos tres años practicando atletismo.",
          yourTurn: {
            question:
              "Complete the duration idiom with the **gerund** (*-ando/-iendo*) of **jugar**: *Mi hermano lleva cinco años _______ al tenis en este club.* (Write ONLY the missing verb form.)",
            answer: {
              type: "text",
              accept: ["jugando"],
              display: "jugando",
            },
            solution:
              "In the structure *llevar + time + gerund*, *-ar* verbs form their gerund with *-ando*: *jugar →* **jugando**.",
          },
        },
      ],
      keyPoints: [
        "Contract **a + el → al** after *jugar* before masculine sports (*jugar al tenis, al rugby, al voleibol*), and never use *jugar* for musical instruments (*tocar*!).",
        "Mind the spelling/stem shifts in the Preterite *yo* forms: *jugar → **jugué*** (*g→gu*) and *tocar → **toqué*** (*c→qu*).",
        "Express 'have been doing for X time' with **llevar + time + gerund** or **present + desde hace + time** — never *he estado... por*.",
      ],
      whyItWorks:
        "Spanish views an unbroken activity up to the present moment as still belonging to the **present** time frame (*vivo aquí desde 2020*, *llevo cuatro años viviendo aquí*), whereas *llevar* ('to carry') vividly pictures you 'carrying' five years of experience while doing the sport.",
      strategies: [
        "Drop at least one *llevar + time + gerund* sentence into every Paper 2 Q7 and Paper 3 Speaking answer — examiners explicitly reward idiomatic duration structures.",
        "When *llevar* is negated ('haven't done X for Y time'), swap the gerund for **sin + infinitive**: *Llevo dos meses sin ir al gimnasio*.",
      ],
      thinkDeeper:
        "What if you WERE been playing for five years **before** an injury in the past ('I had been playing for five years when I got injured')? Simply shift *llevar* or the main verb into the **Imperfect**: *Llevaba cinco años jugando al fútbol cuando me lesioné*!",
    },
    {
      id: "cinema-music-reading",
      heading: "Cinema, music, reading & cultural reviews",
      discovery: {
        problem:
          "In a film review, a student writes: *«Ayer vi una película de ciencia ficción. La película es sobre un robot y fue muy bueno.»* Find TWO precision upgrades and ONE gender-agreement error.",
        idea:
          "First, *la película* is feminine, so *bueno* must agree (*buena* — or better, *inolvidable / entretenida*!). Second, instead of literal *es sobre*, idiomatic Spanish uses **tratar de** (*La película trata de un robot...*) in the **present tense** to summarise a plot, while using the **preterite** (*vi, me encantó, actuó*) for your viewing reaction!",
      },
      body:
        "Whether you are reviewing a film, a live concert (*un concierto en directo*) or a novel (*una novela policíaca*), top-band candidates replace *interesante / aburrido / bueno* with nuanced cultural vocabulary.\n\n" +
        "**1. High-Scoring Cinema, Music & Literature Lexicon**\n\n" +
        "| Element | Spanish Term | Grade-9 Review Adjectives |\n" +
        "|---|---|---|\n" +
        "| The plot / storyline | *la trama / el argumento* | *apasionante* (gripping), *predecible* (predictable), *compleja* |\n" +
        "| Lead actor / character | *el / la protagonista* (*masc./fem. -ista!*) | *creíble* (believable), *carismático/a*, *conmovedor(a)* (moving) |\n" +
        "| Soundtrack / lyrics | *la banda sonora / la letra* | *pegadiza* (catchy), *emotiva*, *inolvidable* (unforgettable) |\n" +
        "| Special effects | *los efectos especiales* | *impresionantes*, *espectaculares*, *decepcionantes* (disappointing) |\n\n" +
        "**2. Tense Discipline in Cultural Reviews**\n" +
        "- **Viewing event & verdict → Preterite**: *El sábado pasado **fui** al cine con mis amigos y **vimos** un documental. Me **impresionó** muchísimo.*\n" +
        "- **Plot summary → Present**: *La historia **trata de** una científica que **descubre** un secreto.* (Notice *tratar de* = to be about; *tratar de + infinitive* = to try to!)\n" +
        "- **Background description → Imperfect**: *El cine **estaba** lleno y la música **sonaba** altísima.*\n\n" +
        "**3. Reading Habits: Digital vs Print**\n" +
        "In Paper 2/3 debates (*libros impresos vs libros electrónicos*): *Prefiero leer novelas en papel para desconectar de las pantallas, aunque descargar libros electrónicos en una tableta es más práctico y económico cuando viajo.*",
      workedExamples: [
        {
          title: "Writing a nuanced past-tense cinema review",
          problem:
            "Combine these ideas in Spanish: 'Last night I watched a horror film. It is about an abandoned house. Although the soundtrack was gripping, the ending was predictable.'",
          steps: [
            "Set the viewing event in the Preterite (*ver* has NO accents in *vi / vio*!): *Anoche vi una película de terror.*",
            "Summarise the plot in the Present with *tratar de*: *Trata de una casa abandonada.*",
            "Balance two review adjectives with *aunque* (matching gender to *la banda sonora* and *el final*): *Aunque la banda sonora era apasionante, el final fue bastante predecible.*",
          ],
          answer:
            "Anoche vi una película de terror que trata de una casa abandonada; aunque la banda sonora era apasionante, el final fue bastante predecible.",
          yourTurn: {
            question:
              "Complete the plot-summary phrase with the two-word Spanish verb meaning **'is about'** (*ella / la novela*, present tense of **tratar de**): *La última novela que leí _______ _______ un detective en Barcelona.* (Write ONLY the two missing Spanish words.)",
            answer: {
              type: "text",
              accept: ["trata de"],
              display: "trata de",
            },
            solution:
              "To say what a book or film 'is about', Spanish uses **tratar de** in the 3rd person singular present: **trata de**.",
          },
        },
      ],
      keyPoints: [
        "Remember *el/la protagonista* ends in *-a* for BOTH genders (*el protagonista principal* vs *la protagonista principal*), just like *el/la artista* and *el/la deportista*.",
        "Never put accents on the monosyllabic preterite forms of *ver*: **vi** (I watched) and **vio** (he/she watched).",
        "Use **tratar de + noun** for 'to be about' (*trata de una guerra*), and upgrade *bueno/malo* to *inolvidable, conmovedor, entretenido, predecible, decepcionante*.",
      ],
      whyItWorks:
        "Examiners mark Paper 2 Q7 and Paper 3 against the *Range of Vocabulary and Structures* grid: swapping generic A1 adjectives (*bueno, divertido*) for C1-flavoured cognates (*conmovedor, decepcionante, predecible*) and contrasting plot-present with verdict-preterite signals confident control across registers.",
      strategies: [
        "Use a balanced concession (*Aunque la trama era un poco lenta, los efectos especiales fueron espectaculares*) to earn justified-opinion credit every time.",
        "Check adjective endings on invariable-e/consonant adjectives: *predecible, inolvidable, decepcionante* only change for plural (*-s*), whereas *conmovedor → conmovedora* adds *-a* in the feminine!",
      ],
      thinkDeeper:
        "Notice how *papel* means both 'paper' (*leer en papel*) and 'acting role' (*interpretar el papel principal*). Context makes it 100% unambiguous in Paper 1 Listening and Paper 2 Reading!",
    },
    {
      id: "eating-out-and-complaints",
      heading: "Eating out, ordering & restaurant complaints",
      discovery: {
        problem:
          "At a tapas restaurant in Seville, an IGCSE student says: *«Pregunté por la cuenta porque mi sopa es fría y mi tenedor es sucio.»* Every native waiter understands, yet this single sentence contains THREE classic IGCSE grammar errors. Can you fix all three?",
        idea:
          "1) **Pedir** = to ask for / order an object (*Pedí la cuenta* — with NO *por*!); **preguntar** = to ask a question for information. 2) *La sopa **está** fría* (it is cold right now — an unwanted temporary state, whereas *el gazpacho **es** frío* by nature!). 3) *El tenedor **está** sucio* (temporary condition of cleanliness always takes **estar**).",
      },
      body:
        "Restaurant role-plays and holiday meal narratives combine high-frequency transactional phrases with two of Spanish's sharpest grammar distinctions.\n\n" +
        "**1. Ordering Polite Meals (*En el restaurante*)**\n" +
        "- **Starter / Main / Dessert**: **De primer plato** *voy a tomar la sopa de marisco*; **de segundo plato** *quisiera el pollo asado*; **de postre** *me gustaría el flan casero*.\n" +
        "- **Polite requests** (use *usted* with strangers in service roles!): *Perdone, ¿me **puede traer** otro vaso / un cuchillo limpio / la carta, por favor?*\n" +
        "- **Paying**: *¿Nos trae **la cuenta**, por favor? Dejamos una **propina** porque el servicio fue excelente.*\n\n" +
        "**2. *Pedir* vs *Preguntar* (Zero *Por* After *Pedir*!)**\n\n" +
        "| Verb | Meaning & Preterite Stem | Authentic Restaurant Example |\n" +
        "|---|---|---|\n" +
        "| **pedir** (*e→i*) | To ask for / order a thing (built-in 'for'!) | *Yo **pedí** paella, pero mi madre **pidió** merluza y luego **pedimos** la cuenta.* |\n" +
        "| **preguntar** (regular *-ar*) | To ask a question / enquire *si, qué, cuánto, dónde* | *Le **pregunté** al camarero si el plato llevaba cacahuetes.* |\n\n" +
        "**3. *Ser* vs *Estar* at the Dinner Table**\n" +
        "- **SER** = permanent definition, origin, dietary category, or normal characteristic: *La dieta mediterránea **es** muy sana; este restaurante **es** caro; el chile **es** picante; soy alérgico/a a los frutos secos.*\n" +
        "- **ESTAR** = how this specific dish tastes, feels or looks **right now**: *¡Qué rica **está** la tortilla! La carne **está** demasiado hecha / cruda; la sopa **está** fría; el vaso **está** roto; la mesa **está** sucia.*",
      diagram: SVG_RESTAURANT_INSPECTOR,
      diagramCaption:
        "Use pedir (no por!) to order items and la cuenta, and use estar for how a specific dish tastes or whether cutlery/food is cold or dirty right now.",
      workedExamples: [
        {
          title: "Narrating a disastrous restaurant meal across Preterite & Imperfect",
          problem:
            "Translate accurately into Spanish: 'My brother ordered roast chicken, but the meat was cold and the fork was dirty, so we complained to the waiter.'",
          steps: [
            "Action 1 (single completed order) → Preterite of *pedir* (*e→i* in 3rd person!): *Mi hermano **pidió** pollo asado...*",
            "Background state / complaint right then → Imperfect of **estar** (not *ser*!): *...pero la carne **estaba** fría y el tenedor **estaba** sucio...*",
            "Action 2 (completed complaint) → Preterite of *quejarse*: *...así que **nos quejamos** al camarero.*",
          ],
          answer:
            "Mi hermano pidió pollo asado, pero la carne estaba fría y el tenedor estaba sucio, así que nos quejamos al camarero.",
          yourTurn: {
            question:
              "Complete the restaurant complaint with the correct **present tense** verb (**es** or **está**): *Perdone, camarero, no puedo tomar esta sopa porque _______ completamente fría.* (Write ONLY the missing Spanish word.)",
            answer: {
              type: "text",
              accept: ["está", "ella está"],
              display: "está",
            },
            solution:
              "Soup being cold is an unwanted **temporary state** right now (as opposed to gazpacho or ice cream being inherently cold), so Spanish uses **está** (with the written accent on *á*!).",
          },
        },
      ],
      keyPoints: [
        "Use **de primer plato / de segundo plato / de postre** (with *de*, not *por* or *para*) when stating courses.",
        "Remember *pedir* already includes 'for' (*pedí ayuda, pidió la cuenta* — NEVER *pedí por*), and shifts *e→i* in 3rd-person preterite (**pidió, pidieron**).",
        "Use **estar** for food temperature/taste/cleanliness complaints (*está fría, está salada, está riquísima, está sucio*) and **ser** for inherent traits (*es picante, es vegetariano, es saludable*).",
      ],
      whyItWorks:
        "Spanish separates essence (*ser*, from Latin *esse*) from state (*estar*, from Latin *stare*, 'to stand'). Calling *la paella es buena* merely classifies paella as a good dish in general; saying *¡la paella está buenísima!* praises the chef for how this exact plate turned out tonight!",
      strategies: [
        "In Paper 3 Speaking role-plays, combine *Perdone* + polite *usted* (*¿Me puede traer...?*) + *quisiera* for full politeness & register credit.",
        "When narrating a past restaurant disaster in Paper 2 Q7, pair **Preterite events** (*reservamos, pedí, tardó una hora, nos quejamos*) with **Imperfect states** (*había mucho ruido, el plato estaba frío*).",
      ],
      thinkDeeper:
        "Notice how **rico/a** changes meaning completely between *ser* and *estar*: *El dueño es muy rico* ('The owner is very rich/wealthy') vs *¡El postre está muy rico!* ('The dessert is delicious!').",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "How do you say 'to lead a healthy life' and 'to follow a balanced diet'?",
        back: "**llevar una vida sana** · **seguir una dieta equilibrada**",
      },
      {
        front: "Why is *«para manteniendo en forma»* wrong, and what is right?",
        back: "After any preposition (*para, sin, antes de, en vez de*), Spanish ALWAYS uses the **infinitive** (with reflexive pronoun attached): **para mantenerme en forma**.",
      },
      {
        front: "Singular vs plural *doler*: 'My head hurts' vs 'My molars/teeth hurt'",
        back: "**Me duele la cabeza** (singular subject) vs **Me duelen las muelas** (plural subject — *doler* agrees with the body part!).",
      },
      {
        front: "How do you say 'to quit smoking' in Spanish?",
        back: "**dejar de fumar** (*dejar de + infinitive*, NEVER gerund!).",
      },
      {
        front: "Distinguish *jugar a*, *hacer*, and *tocar*.",
        back: "**jugar a** = ball/racket/board games (*juego al tenis*); **hacer** = non-ball sports (*hago natación / atletismo*); **tocar** = musical instruments (*toco la guitarra*).",
      },
      {
        front: "Give the TWO Grade-9 ways to say 'I have been playing football for five years'.",
        back: "1) **Llevo cinco años jugando al fútbol.**\n2) **Juego al fútbol desde hace cinco años.**",
      },
      {
        front: "How do you say 'I haven't been to the gym for two weeks' using *llevar*?",
        back: "**Llevo dos semanas sin ir al gimnasio.** (*llevar + time + sin + infinitive*)",
      },
      {
        front: "Preterite *yo* spelling changes of *jugar* and *tocar*",
        back: "**jugué** (*g → gu* before *-é*) · **toqué** (*c → qu* before *-é*).",
      },
      {
        front: "How do you say 'The film is about...' in idiomatic Spanish?",
        back: "**La película trata de...** (present tense for plot summaries; never literal *es sobre*).",
      },
      {
        front: "Five Grade-9 review adjectives to replace *bueno / malo / interesante*",
        back: "**inolvidable** (unforgettable), **conmovedor(a)** (moving), **apasionante** (gripping), **predecible** (predictable), **decepcionante** (disappointing).",
      },
      {
        front: "Gender trap: *el/la protagonista* and *el azúcar*",
        back: "**el protagonista / la protagonista** keeps *-a* for both genders; **el azúcar** is masculine (*demasiado azúcar*).",
      },
      {
        front: "*Pedir* vs *preguntar* in a restaurant",
        back: "**pedir** (*e→i: pido, pidió*) = ask for / order an item (*pedí la cuenta* — NO *por*!);\n**preguntar** = ask a question (*pregunté si había mesa libre*).",
      },
      {
        front: "*La sopa está fría* vs *El gazpacho es frío* — why the change of verb?",
        back: "**está fría** = temporary unwanted state right now (**estar**);\n**es frío** = inherent permanent nature of gazpacho (**ser**).",
      },
      {
        front: "*Ser rico* vs *Estar rico*",
        back: "**ser rico** = to be wealthy/rich;\n**estar rico** = to taste delicious!",
      },
      {
        front: "How do you say 'For starter / For main course / For dessert'?",
        back: "**De primer plato... · De segundo plato... · De postre...**",
      },
      {
        front: "Polite *usted* request to ask a waiter 'Could you bring me a clean fork?'",
        back: "**Perdone, ¿me puede traer un tenedor limpio, por favor?**",
      },
    ],
    mustKnow: [
      "Use the **infinitive** (never *-ndo*) after prepositions (*para, sin, antes de, después de, en vez de*) and verbs like *gustar, encantar, evitar, intentar, dejar de*.",
      "Match reverse verbs (*doler, gustar, encantar, faltar*) to the noun/infinitive that follows: *me duele la garganta* vs *me duelen los pulmones*.",
      "Select *jugar al / a la* for ball & board games, *hacer / practicar* for athletics/swimming/cycling/martial arts, and *tocar* for musical instruments.",
      "Express ongoing duration accurately using **llevar + time + gerund** or **present tense + desde hace + time**.",
      "Spell Preterite *yo* forms *-car/-gar* accurately (*toqué, practiqué, jugué*) and 3rd-person *-ir* sandal preterites (*pidió, pidieron, durmió, prefirió*).",
      "Summarise film/book plots with **tratar de** + nuanced adjectives (*conmovedor, inolvidable, predecible, decepcionante*).",
      "Distinguish **pedir** (order/ask for an object, no *por*) from **preguntar** (ask a question/information).",
      "Use **estar** for temporary food states and complaints (*está fría, está salada, está sucio, está riquísimo*) vs **ser** for inherent traits (*es saludable, es vegetariano*).",
      "Balance pros and cons of major sporting events (*fomentan el deporte / unen a la gente* vs *cuestan millones / provocan atascos*).",
      "Combine 3+ time frames cleanly when writing 130–150 words on health or leisure in Edexcel Paper 2 Q7.",
    ],
    misconceptions: [
      {
        wrong: "*Me gusta jugando al tenis y evito comiendo grasas.*",
        right: "*Me gusta **jugar** al tenis y evito **comer** grasas.* — After *gustar, encantar, evitar, dejar de* and all prepositions, Spanish uses the **infinitive**, never the gerund!",
      },
      {
        wrong: "*Me duelen la cabeza y mi espalda.*",
        right: "*Me **duele** la cabeza y **la** espalda.* — *Doler* agrees with the singular/plural body part (*duele* vs *duelen*), and Spanish uses the definite article (*la*), not *mi*.",
      },
      {
        wrong: "*Pregunté por la cuenta al camarero.*",
        right: "***Pedí** la cuenta al camarero.* — **Pedir** means 'to ask for / order' (and NEVER takes *por*); **preguntar** only means 'to ask a question'.",
      },
      {
        wrong: "*¡Camarero, la sopa es fría y el vaso es sucio!*",
        right: "*¡Camarero, la sopa **está** fría y el vaso **está** sucio!* — Temperature and cleanliness right now are temporary states (**estar**); *el helado es frío* describes inherent nature (**ser**).",
      },
      {
        wrong: "*Juego la guitarra y toco al baloncesto.*",
        right: "***Toco** la guitarra y **juego al** baloncesto.* — **Tocar** is for musical instruments; **jugar a** (*a + el = al*) is for ball/board sports; **hacer** is for non-ball sports (*hago natación*).",
      },
      {
        wrong: "*He estado jugando al fútbol por cinco años.*",
        right: "***Llevo cinco años jugando** al fútbol* / ***Juego** al fútbol **desde hace** cinco años.* — Ongoing actions up to the present use *llevar + gerund* or *present + desde hace*.",
      },
      {
        wrong: "*Mi padre dejó fumando el año pasado.*",
        right: "*Mi padre **dejó de fumar** el año pasado.* — 'To stop/quit doing' is always **dejar de + infinitive**.",
      },
      {
        wrong: "*Para mantener en forma, me acuesto temprano.*",
        right: "*Para **mantenerme** en forma, me acuesto temprano.* — Keep the reflexive pronoun on *mantenerse* and match it to the subject (*yo → mantenerme*).",
      },
    ],
    examMistakes: [
      "**Paper 1 Listening Negation & Duration Traps**: *«Llevo tres meses sin comer carne»* means the speaker has **NOT** eaten meat for three months (*llevar + time + sin + inf*), whereas *«Antes fumaba, pero lo dejé»* means they **used to** smoke and no longer do!",
      "**Paper 2 Q3c Gap-Fill Spelling**: Forgetting *g → gu* in *yo jugué* or *e → i* in *él pidió / ellos pidieron* costs the full mark even if you chose the right tense.",
      "**Paper 2 Q3c Accent Trap**: Writing *esta fría* without the accent on **está** turns 'is' into 'this' (*esta*) and loses the grammar mark.",
      "**Paper 2 Q6/Q7 Preposition Errors**: Writing *por estar sano* instead of **para estar sano** ('in order to be healthy') or omitting **al** after *jugar* (*juego fútbol* instead of *juego al fútbol*).",
      "**Paper 2 Q7 Word-Count & Time-Frame Balance**: Spending 110 words listing foods in the present tense and forgetting a specific past meal/sporting experience (*El domingo pasado pedí... / participé en...*) plus a future health resolution (*A partir de mañana voy a reducir...*).",
      "**Paper 3 Speaking Restaurant Role-Play**: Using informal *tú* (*¿Me traes...?*) when the prompt specifies speaking to a waiter — play it safe with polite *usted* (*¿Me puede traer...? / Quisiera...*).",
      "**False Friends in Area E**: *sano* = healthy (NOT 'sane' = *cuerdo*); *decepcionante* = disappointing (NOT 'deceptive' = *engañoso*); *la lectura* = reading (NOT 'lecture' = *la conferencia*).",
    ],
    mnemonics: [
      {
        topic: "Jugar a vs Hacer vs Tocar",
        device: "B-A-M: Ball → jugar A · Activity → hacer · Music → tocar",
        explanation:
          "If there is a **B**all, shuttlecock, or board, use **jugar a** (*al tenis*); if it is a solo fitness **A**ctivity, use **hacer** (*hago natación*); if it makes **M**usic, use **tocar** (*toco el violín*).",
      },
      {
        topic: "Ongoing Duration Without Literal English",
        device: "LLEVO + -NDO or DESDE HACE + Present",
        explanation:
          "Ban *he estado -ndo por...* from your IGCSE toolkit! Either start with **Llevo [tiempo] + gerundio** (*Llevo dos años nadando*) or end with **desde hace [tiempo]** (*Nado desde hace dos años*).",
      },
      {
        topic: "Ser vs Estar on the Menu",
        device: "SER = Menu Category · ESTAR = Plate Today",
        explanation:
          "What is printed on the menu forever uses **ser** (*es un plato vegano, es picante*); what happens on your plate tonight uses **estar** (*está frío, está riquísimo, está crudo*).",
      },
    ],
    realWorld: [
      {
        title: "La Dieta Mediterránea (UNESCO Intangible Heritage)",
        detail:
          "Built around olive oil (*el aceite de oliva*), fresh vegetables, legumes (*las legumbres*), and fish, Spain's Mediterranean diet helps give Spain one of the highest life expectancies in the world—and regularly anchors Edexcel Area E reading texts.",
        emoji: "🫒",
      },
      {
        title: "El Menú del Día & Late Spanish Meal Times",
        detail:
          "Across Spain, weekday restaurants offer *el menú del día* around 14:00–16:00 (*el almuerzo / la comida* is the main meal of the day!), including *primer plato, segundo plato, pan, bebida y postre o café* for a fixed price, while dinner (*la cena*) often starts after 21:00.",
        emoji: "🥘",
      },
      {
        title: "Spanish & Latin American Sporting Giants",
        detail:
          "From Barcelona's 1992 Olympic transformation and Rafa Nadal / Carlos Alcaraz on clay courts (*pistas de tierra batida*) to football passion across Argentina, Colombia and Spain, *los grandes eventos deportivos* bridge health, tourism and national identity.",
        emoji: "🏅",
      },
      {
        title: "Spanish-Language Cinema on the Global Stage",
        detail:
          "Directors such as Pedro Almodóvar (Spain), Guillermo del Toro and Alfonso Cuarón (Mexico), alongside Spanish series and Latin music, make *el cine y la música en español* authentic topics to cite by name in Paper 3 Speaking!",
        emoji: "🎬",
      },
    ],
    videos: [
      {
        title: "IGCSE Spanish — Healthy Living, Diet & Lifestyle Vocabulary",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=igcse+spanish+healthy+living+vida+sana",
      },
      {
        title: "Spanish Grammar — Doler, Gustar & Reverse Verbs Explained",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=spanish+doler+and+gustar+grammar+igcse",
      },
      {
        title: "Spanish Duration Idioms — Llevar + Gerundio & Desde Hace",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=spanish+llevar+gerundio+desde+hace",
      },
      {
        title: "Ordering Food & Restaurant Complaints in Spanish (Pedir vs Preguntar)",
        channel: "YouTube Search",
        url: "https://www.youtube.com/results?search_query=spanish+restaurant+ordering+complaints+pedir+vs+preguntar",
      },
    ],
    formulas: [
      {
        name: "Purpose + Reflexive Infinitive",
        formula: "Para + infinitivo (+ me/te/se/nos) → *Para mantenerme en forma, intento...*",
        note: "Never use por or a gerund (-ndo) for 'in order to'!",
      },
      {
        name: "Ongoing Duration Pattern A",
        formula: "llevar (presente) + [tiempo] + gerundio → *Llevo cinco años jugando al tenis.*",
        note: "Negation swaps gerund for sin + infinitive: Llevo un mes sin fumar.",
      },
      {
        name: "Ongoing Duration Pattern B",
        formula: "[Verbo en presente] + desde hace + [tiempo] → *Juego al tenis desde hace cinco años.*",
        note: "Use imperfect + desde hacía for 'had been doing': Jugaba desde hacía cinco años.",
      },
      {
        name: "Reverse-Verb Agreement (Doler / Gustar)",
        formula: "(A mí) me + duele [singular / inf.] · me + duelen [plural]",
        note: "Look to the right of the verb to pick singular vs plural (-n)!",
      },
      {
        name: "Quitting vs Starting a Habit",
        formula: "dejar de + infinitivo (to quit) · empezar a + infinitivo (to start)",
        note: "Dejó de vapear hace seis meses.",
      },
      {
        name: "Plot Summary + Balanced Review",
        formula: "La película trata de...; aunque la trama era..., los efectos fueron...",
        note: "Present for the plot; preterite/imperfect for your viewing experience.",
      },
      {
        name: "Polite Restaurant Complaint",
        formula: "Perdone, pedí..., pero [el plato] está frío/salado · ¿Me puede traer...?",
        note: "Pedir (no por!) for ordering; estar for temporary food/cutlery states.",
      },
      {
        name: "Subjunctive Health Recommendation",
        formula: "Es aconsejable / imprescindible que + subjuntivo → *Aconsejo que duermas ocho horas.*",
        note: "Instant Grade-9 complexity in Area E essays.",
      },
    ],
  },
};
