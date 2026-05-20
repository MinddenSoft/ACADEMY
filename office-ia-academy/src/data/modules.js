import { GraduationCap, FileText, BarChart3, Zap, Palette, Building2 } from 'lucide-react'

export const modules = [
  {
    id: 1,
    slug: 'alfabetizacion-digital-ia',
    title: 'Alfabetización Digital en IA y Herramientas Base',
    level: 'Nivel Inicial',
    levelKey: 'inicial',
    icon: GraduationCap,
    objective: 'Entender qué es la IA en el día a día y dominar la comunicación con ella para tareas de oficina.',
    description: 'Este módulo introductorio te llevará desde los conceptos más básicos de la inteligencia artificial hasta dominar la comunicación efectiva con herramientas como ChatGPT, Claude y Gemini. Aprenderás a crear prompts efectivos, entender las limitaciones de la IA y configurar asistentes personalizados para tu empresa.',
    duration: '4 semanas',
    sections: [
      {
        title: '1.1. Introducción Práctica a la IA',
        content: `Bienvenido al primer paso de tu transformación digital. En esta sección vamos a sentar las bases de todo lo que vendrá después. No necesitas ningún conocimiento técnico previo. Solo trae tu experiencia en el día a día de la oficina y la curiosidad por descubrir cómo la IA puede convertirse en tu mejor aliada.

---

**¿Qué es la IA Generativa y qué puede (y no puede) hacer en una oficina?**

Empecemos con una definición sencilla, alejada por completo de la jerga matemática o informática.

Imagina que trabajas con un asistente humano excepcionalmente rápido, que ha leído millones de documentos, correos, informes, libros y artículos. Este asistente no duerme, no se cansa y puede escribir un borrador en segundos. Pero tiene una particularidad: todo lo que sabe lo ha aprendido de esa ingente cantidad de textos, y su talento consiste en predecir la siguiente palabra más probable para formar una respuesta coherente.

Eso es, en esencia, un modelo de IA Generativa. "Generativa" significa que no se limita a clasificar información (como hace un filtro de spam), sino que es capaz de crear contenido nuevo: texto, resúmenes, análisis, traducciones, correos, incluso imágenes y código. Para un profesional de oficina, esto se traduce en una herramienta que puede redactar, estructurar, sintetizar y transformar información a una velocidad que multiplica tu productividad.

**Qué PUEDE hacer la IA Generativa en tu oficina**

La lista de tareas prácticas para las que puedes usar la IA desde el primer día es amplia y crece cada semana. Estas son las más relevantes para tu día a día:

- **Redactar correos electrónicos complejos:** Puedes darle unas notas sueltas y pedirle que redacte un correo formal para un cliente, una reclamación a un proveedor o una comunicación interna. Ejemplo: "Redacta un correo para informar a todo el equipo de que la reunión semanal pasa del lunes al martes, con tono cordial y claro."

- **Resumir actas de reuniones y documentos extensos:** Si tienes la transcripción de una reunión de una hora o un informe de 30 páginas, la IA puede resumirlo en unos pocos párrafos extrayendo los puntos clave, las decisiones tomadas y los próximos pasos.

- **Estructurar y organizar ideas:** Cuando tienes muchas ideas desordenadas en la cabeza o en una nota, la IA puede organizarlas en un esquema, crear una escaleta para una presentación o agrupar conceptos por temas.

- **Traducir documentos manteniendo el tono profesional:** Puedes traducir un contrato, un correo o un informe al inglés, francés o alemán, y además pedirle que adapte el tono al registro formal que requiere cada idioma.

- **Generar borradores de informes, propuestas y presentaciones:** A partir de datos o ideas clave, la IA puede producir un primer borrador que luego tú refinas. Esto reduce drásticamente el tiempo de "página en blanco".

- **Reformular textos para diferentes audiencias:** Puedes pedirle que convierta un texto técnico en uno comprensible para clientes, o que transforme un correo informal en uno ejecutivo.

> **Consejo Práctico:** Piensa en la IA como un becario excepcionalmente rápido y con un conocimiento enciclopédico, pero que necesita supervisión. Tú eres el jefe: tú marcas la dirección, revisas el resultado y pones el criterio final.

**Qué NO PUEDE hacer la IA Generativa (y es importante saberlo)**

Conocer las limitaciones es tan importante como conocer las capacidades. Esto evitará frustraciones y errores graves.

- **No tiene criterio humano:** La IA no entiende realmente lo que dice. Manipula lenguaje con enorme sofisticación, pero no tiene intuición, empatía real ni sentido común. Puede redactar un correo con tono empático, pero no sentir la emoción. Tú eres quien debe valorar si el tono es el adecuado.

- **No toma decisiones críticas por sí sola:** La IA puede ayudarte a analizar opciones y presentar argumentos a favor y en contra, pero la decisión final debe tomarla siempre un humano. Especialmente en temas legales, financieros, de recursos humanos o de relaciones con clientes.

- **No conoce el contexto interno de tu empresa a menos que se lo proporciones:** La IA no sabe quién es tu jefe, cuál es la política interna de tu empresa, qué proyecto es prioritario ni qué cliente es delicado. Toda esta información debes aportarla tú en el momento de hacer la consulta.

- **No tiene acceso en tiempo real a tu correo, calendario o sistemas internos (en su versión básica):** A menos que uses versiones empresariales con integraciones específicas, la IA no puede consultar tu bandeja de entrada ni tu calendario. Tú debes extraer la información y proporcionársela.

- **No es fiable al 100% en datos concretos y actualizados:** Especialmente si trabajas con cifras, estadísticas o fechas, la IA puede equivocarse o inventar datos. Esto nos lleva directamente al siguiente punto.

---

**Mitos y realidades: El problema de las "alucinaciones"**

Este es, probablemente, el concepto más importante que debes entender antes de usar IA en un entorno profesional.

**¿Qué es una alucinación?**

En el contexto de la IA, una alucinación ocurre cuando el modelo genera información que parece verosímil pero es completamente falsa. El nombre no es casual: la IA "alucina" porque inventa datos, citas, cifras o referencias que no existen.

**¿Por qué ocurre a nivel técnico?**

Para entenderlo, piensa en un piano mecánico que toca una melodía. El piano no sabe qué nota sigue por "comprensión musical", sino porque ha sido programado para seguir una secuencia. De manera similar, la IA Generativa funciona como un prodigioso predictor de palabras. Cuando le haces una pregunta, el modelo calcula estadísticamente cuál es la siguiente palabra más probable, luego la siguiente, y así sucesivamente. No está verificando hechos en una base de datos; está construyendo una respuesta que suene plausible.

Por eso, si no ha visto suficientes datos fiables sobre un tema concreto, o si interpreta mal el contexto, "inventa" algo que estadísticamente encaja pero que es falso.

**Ejemplos reales y específicos de oficina donde una IA podría alucinar**

- **Inventar una ley o un artículo legal:** Si le pides que te resuma "la normativa vigente sobre protección de datos en México", puede citar artículos que no existen o mezclar leyes de diferentes países.

- **Atribuir citas falsas:** Puede decir que "según un estudio de Harvard de 2023, el 75% de las empresas usa IA", pero ese dato o ese estudio pueden no existir. La IA lo ha "construido" porque es una afirmación estadísticamente plausible.

- **Inventar cifras en un informe:** Si le pides "incluye datos de crecimiento del sector automotriz en España en 2024", puede generar números que parecen reales pero no lo son.

- **Crear referencias bibliográficas falsas:** Es muy común que la IA genere autores, títulos de libros y editoriales que suenan reales pero son completamente inventados.

> **Alerta de Seguridad:** Una alucinación no es un error técnico evidente; es una información falsa presentada con la misma apariencia de seguridad y fluidez que una correcta. Por eso es tan peligrosa si no se verifica.

**Guía paso a paso para detectar y mitigar alucinaciones**

Sigue este protocolo cada vez que uses IA para trabajar:

1. **Desconfía de cifras concretas:** Cualquier número, porcentaje o estadística debe ser verificado con la fuente original. Pregúntate: ¿esto es un hecho conocido o podría haberlo inventado?

2. **Verifica citas y referencias:** Si la IA menciona un estudio, una ley o un artículo, búscalo por tu cuenta. No asumas que existe solo porque la IA lo describe con detalle.

3. **Contrasta con tu conocimiento:** Si algo te parece extraño, contradictorio o "demasiado perfecto", probablemente es una alucinación. Confía en tu instinto profesional.

4. **Pide a la IA que identifique sus fuentes:** En herramientas como ChatGPT o Claude, puedes pedir explícitamente "¿Puedes proporcionar las fuentes de esa afirmación?" Si no puede hacerlo, considera esa información como no verificada.

5. **Divide y vencerás:** Si trabajas con un documento grande, pide a la IA que procese secciones por separado. Esto reduce las posibilidades de que invente conexiones entre partes que no existen.

6. **Adopta el rol de editor final:** Tú eres la última línea de defensa. Considera siempre el output de la IA como un borrador que requiere revisión humana. Nunca copies y pegues sin leer y verificar.

> **Ejemplo Real:** Imagina que pides a la IA: "Redacta un párrafo sobre los beneficios fiscales de la Ley de Startups en España para incluir en un informe." La IA podría afirmar que "la Ley de Startups permite una deducción del 40% en el IRPF para inversores". Esta cifra puede estar desactualizada o ser incorrecta. Un profesional prudente buscaría el texto oficial de la ley y ajustaría o eliminaría esa afirmación.

---

**Ejercicios Prácticos - Sección 1.1**

**Ejercicio 1: Tu primera conversación con IA**

*Objetivo:* Familiarizarte con el funcionamiento básico de una IA conversacional.

*Instrucciones:*
1. Abre ChatGPT (chatgpt.com), Claude (claude.ai) o Gemini (gemini.google.com). Si no tienes cuenta, crea una gratuita.
2. Escribe el siguiente prompt: "Hola, soy [tu nombre] y trabajo en [tu sector]. Explícame en 5 líneas qué tipo de tareas de oficina puedes ayudarme a hacer."
3. Lee la respuesta y anota en un cuaderno o documento: ¿Qué tareas te sorprendieron? ¿Cuáles ya sabías que podías hacer?
4. Ahora prueba con: "Dame 3 ejemplos concretos de cómo podrías ayudarme a redactar un correo a un cliente."
5. Compara las respuestas de las tres herramientas si tienes acceso a más de una.

*Tiempo estimado:* 15 minutos.

*Reflexión:* ¿Qué herramienta te ha parecido más clara y útil? ¿Por qué?

---

**Ejercicio 2: Detectar alucinaciones**

*Objetivo:* Aprender a identificar cuando la IA inventa información.

*Instrucciones:*
1. Pide a la IA: "¿Cuál es la ley española que regula el teletrabajo y qué dice sobre el derecho a la desconexión digital?"
2. Busca en internet la ley real (es la Ley 10/2021) y compara lo que dice la IA con el texto oficial.
3. Anota las diferencias: ¿La IA citó artículos que no existen? ¿Inventó porcentajes o plazos?
4. Ahora prueba con: "Dame 5 estadísticas sobre el uso de IA en empresas españolas en 2025."
5. Intenta verificar al menos 2 de esas estadísticas en fuentes oficiales (INE, Eurostat, etc.).

*Tiempo estimado:* 20 minutos.

*Reflexión:* ¿Cuántas de las afirmaciones de la IA pudiste verificar? ¿Te sorprendió alguno de los errores?

---

**Ejercicio 3: Anonimizar información real**

*Objetivo:* Practicar la técnica de anonimización antes de subir datos a una IA.

*Instrucciones:*
1. Piensa en un documento real de tu trabajo: un correo, un informe, una minuta de reunión.
2. Copia el texto (o una parte) en un documento aparte.
3. Aplica estas transformaciones:
   - Cambia todos los nombres reales por etiquetas como [Cliente A], [Proveedor B], [Director].
   - Sustituye cifras exactas por aproximaciones (ej: "1.234.567 €" → "aproximadamente 1,2 millones de euros").
   - Cambia fechas concretas por referencias relativas ("el 15 de marzo" → "a mediados del primer trimestre").
   - Elimina nombres de empresas, direcciones, emails, teléfonos.
4. Ahora pega el texto anonimizado en una IA y pide: "Redacta un resumen ejecutivo de este documento."
5. Verifica que el resultado no contiene ningún dato sensible.

*Tiempo estimado:* 25 minutos.

*Reflexión:* ¿Fue difícil anonimizar? ¿Qué tipo de datos son más complicados de ocultar?

---

**Ejercicio 4: Crear tu "lista negra" personal**

*Objetivo:* Definir qué datos de tu empresa nunca subirás a una IA pública.

*Instrucciones:*
1. Piensa en los documentos que manejas en tu día a día.
2. Crea una lista con 10 categorías de datos que NUNCA subirías a una IA pública.
3. Para cada categoría, escribe un ejemplo concreto de tu trabajo.
4. Guarda esta lista en un lugar accesible (un documento en tu escritorio, una nota en el móvil).
5. Antes de cada uso de IA, consulta esta lista como checklist.

*Tiempo estimado:* 15 minutos.

*Reflexión:* ¿Hay algún dato que antes considerabas seguro y ahora reconsideras?

---

**Cuestionario de Autoevaluación**

Responde estas tres preguntas para comprobar que has asimilado los conceptos clave de esta introducción. Al final encontrarás las respuestas explicadas.

**Pregunta 1:**

¿Cuál de las siguientes afirmaciones describe MEJOR cómo funciona internamente una IA Generativa como ChatGPT o Claude?

a) Consulta una base de datos actualizada donde busca la respuesta exacta a cada pregunta.
b) Predice estadísticamente la siguiente palabra más probable para construir una respuesta coherente, sin verificar hechos.
c) Analiza el correo electrónico y el calendario del usuario para dar una respuesta personalizada.
d) Ejecuta un programa informático que calcula matemáticamente la solución correcta.

**Pregunta 2:**

Trabajas en el departamento de compras y necesitas que la IA te redacte una reclamación a un proveedor que ha incumplido un plazo de entrega. El contrato con ese proveedor incluye cláusulas confidenciales. ¿Cuál es el mejor enfoque?

a) Pegar el contrato completo para que la IA lo analice a fondo y redacte la reclamación perfecta.
b) No usar IA para este tipo de tareas porque es demasiado sensible.
c) Extraer los puntos clave del contrato sin incluir datos confidenciales, anonimizar nombres y cifras, y pedir a la IA que redacte el borrador a partir de esa información.
d) Pedir a la IA que redacte la reclamación sin darle ningún contexto y confiar en su criterio general.

**Pregunta 3:**

Un compañero te dice que la IA le ha proporcionado una estadística sobre el sector de la logística en España citando un estudio de una consultora reconocida. ¿Cuál debe ser tu primera reacción?

a) Dar la estadística por válida, ya que la IA ha citado una fuente fiable.
b) Desconfiar de la estadística y verificar la fuente antes de usarla, porque la IA puede inventar referencias que parecen reales.
c) Pedir a la IA que repita la estadística tres veces para asegurarse de que no se equivoca.
d) Asumir que, si la IA lo dice con suficiente convicción, es correcto.

---

**Respuestas explicadas**

**Respuesta Pregunta 1: b**

La opción correcta es la b. Los modelos de IA Generativa son esencialmente predictores de lenguaje. No consultan bases de datos (opción a), no acceden a tu información personal a menos que se la proporciones (opción c), y no son programas que calculen soluciones matemáticas exactas (opción d). Funcionan analizando patrones estadísticos aprendidos de miles de millones de textos para predecir qué palabra tiene más probabilidades de venir a continuación. Esta es la razón principal por la que pueden "alucinar": porque no verifican hechos, solo construyen texto coherente.

**Respuesta Pregunta 2: c**

La opción correcta es la c. Pegar el contrato completo (opción a) violaría la confidencialidad del acuerdo. No usar IA en absoluto (opción b) sería una oportunidad perdida, ya que la IA puede ser de gran ayuda en esta tarea. Pedir a la IA que redacte sin contexto (opción d) daría un resultado genérico y poco útil. El enfoque profesional es extraer y anonimizar la información relevante: sustituir el nombre del proveedor por "[Proveedor X]", las fechas concretas por "[fecha acordada]", las penalizaciones por "la cláusula de penalización estándar", y luego pedir a la IA que redacte el borrador. Conservas la utilidad de la IA sin comprometer la confidencialidad.

**Respuesta Pregunta 3: b**

La opción correcta es la b. Las alucinaciones son especialmente peligrosas cuando la IA cita fuentes que parecen legítimas. La opción a es ingenua: la IA puede inventar tanto el estudio como la consultora. La opción c no tiene sentido técnico, la IA no es más fiable por repetir la misma respuesta. La opción d es la más peligrosa, ya que la IA expresa toda la información con la misma seguridad, sea correcta o falsa. La conducta profesional es siempre verificar la fuente de forma independiente antes de utilizar cualquier dato concreto proporcionado por la IA.`,
      },
      {
        title: '1.2. El Arte de Hablar con la IA (Prompt Engineering para Oficinas)',
        content: `**Que es un Prompt y por que deberia importarle a usted?**

Imagine que llega a su puesto de trabajo y tiene delante a un asistente brillante, con acceso a toda la informacion del mundo, capaz de escribir, resumir, analizar datos y generar ideas en segundos. Pero hay un problema: ese asistente no lee la mente. Usted tiene que darle instrucciones claras, precisas, bien estructuradas. Eso, exactamente eso, es un **prompt**: la instruccion que usted escribe para decirle a la IA que necesita.

En terminos sencillos, un prompt es como darle instrucciones a un becario recien llegado. Si usted le dice "hazme un documento", el becario se quedara paralizado sin saber por donde empezar. Pero si usted le dice "necesito un correo electronico de dos parrafos dirigido al cliente Martinez, explicando que su factura de noviembre tiene un error de calculo y que ya lo estamos corrigiendo, con un tono amable y profesional", entonces el becario sabra exactamente que hacer. Con la IA ocurre exactamente lo mismo.

El **Prompt Engineering** no es mas que el arte y la ciencia de disenar estas instrucciones para obtener los mejores resultados posibles. No necesita saber programar, ni entender de inteligencia artificial, ni tener conocimientos tecnicos. Solo necesita aprender a comunicarse con claridad. Y como cualquier habilidad de comunicacion, se practica y se mejora.

**La Estructura de un Prompt Perfecto: La Formula R-C-T-F**

Despues de miles de pruebas y errores, los expertos han identificado cuatro componentes clave que transforman un prompt mediocre en uno excelente. Lo llamamos la **formula R-C-T-F**: Rol, Contexto, Tarea y Formato de salida. Veamos cada uno.

**Rol:** Asignele una personalidad o perfil profesional a la IA. Esto no es un truco de marketing; funciona porque la IA ajusta su lenguaje, su tono y su nivel de detalle segun el rol que usted le asigne. Por ejemplo: "Actua como un contador senior con 20 anos de experiencia" producira una respuesta muy diferente a "Actua como un becario de contabilidad". Para oficinas, roles utiles incluyen "asistente administrativo", "redactor de informes ejecutivos", "analista de datos", "corrector de estilo" o "experto en atencion al cliente".

**Contexto:** Proporcione los antecedentes necesarios. Quien es el destinatario? Cual es la situacion previa? Que ha ocurrido hasta ahora? Hay algun dato relevante que deba considerar? El contexto es como los cimientos de un edificio: cuanto mas solidos sean, mejor se sostendra el resultado. Incluya fechas, nombres, datos concretos y cualquier informacion que un humano necesitaria saber para hacer bien el trabajo.

**Tarea:** Sea explicito sobre lo que quiere que haga. Use verbos de accion concretos: "redacta", "resume", "compara", "analiza", "traduce", "extrae", "lista", "prioriza", "reestructura", "corrige". Cuanto mas especifico sea el verbo, mas especifico sera el resultado. Evite verbos vagos como "haz" o "procesa".

**Formato de salida:** Indique como quiere que le entreguen el resultado. Lo quiere en parrafos? En vinetas? En una tabla? En un correo electronico ya redactado? Con un asunto incluido? En tono formal o informal? Extension maxima? Idioma? No asuma que la IA sabe lo que usted prefiere; digaselo claramente.

Veamos un ejemplo practico de la diferencia que marca esta estructura.

**Prompt malo:** "Hazme un correo para un cliente."

**Prompt bueno usando R-C-T-F:**
- **Rol:** "Actua como un ejecutivo de cuentas senior en una empresa de consultoria tecnologica."
- **Contexto:** "El cliente es Marta Garcia, directora de operaciones en TechSolutions S.A. Llevamos dos semanas esperando su firma en el contrato de renovacion anual del servicio de soporte tecnico, valorado en 12.000 euros. Hemos intentado contactarla por telefono tres veces sin exito."
- **Tarea:** "Redacta un correo electronico de seguimiento amable pero profesional que la motive a revisar y firmar el contrato cuanto antes."
- **Formato:** "El correo debe tener un asunto llamativo pero profesional, tres parrafos como maximo, tono cercano pero formal, e incluir mi nombre ficticio como remitente."

El resultado del segundo prompt sera un correo que probablemente podria enviar sin modificar ni una coma. El primero le devolvera algo generico que tendra que reescribir entero.

**Ejemplos Detallados: Bueno vs Malo en Escenarios de Oficina**

**Escenario 1: Resumir un informe extenso**

Prompt malo: "Resume esto." (acompanado de un PDF de 40 paginas)
Resultado tipico: Un resumen generico de tres lineas que omite los datos financieros clave.

Prompt bueno: "Actua como un analista de negocio. Te voy a pasar el informe trimestral de ventas del Q3 2025. Necesito que extraigas exclusivamente los siguientes puntos: ingresos totales vs objetivo, producto mas vendido y producto menos vendido, variacion porcentual respecto al Q2, y las tres conclusiones principales que menciona el informe. Presentalo en una tabla con esos cuatro apartados y anade al final un parrafo de maximo cinco lineas con tu valoracion ejecutiva."

**Escenario 2: Escribir una politica interna**

Prompt malo: "Escribe una politica de teletrabajo."

Prompt bueno: "Escribe una politica de teletrabajo para una empresa espanola de 50 empleados del sector tecnologico. Debe incluir: horario recomendado, obligaciones de disponibilidad, herramientas tecnologicas requeridas, procedimiento para solicitar dias presenciales, y normas de ciberseguridad basica. El tono debe ser claro y directo pero no autoritario. Extension maxima: dos paginas. Dividela en secciones con encabezados."

**Escenario 3: Responder una queja de cliente**

Prompt malo: "Respondele a este cliente que esta enfadado."

Prompt bueno: "Actua como agente de atencion al cliente de primer nivel. El cliente, Roberto Sanchez, ha escrito quejandose de que su pedido numero 45871 llego con tres dias de retraso y que uno de los productos tiene un aranazo. Sabemos que el retraso fue por culpa de la transportista, no nuestra, pero queremos asumir la responsabilidad para mantener la relacion comercial. Redacta una respuesta empatica que incluya: disculpa sincera, explicacion breve del retraso, compromiso de reemplazar el producto en 48 horas y un codigo de descuento del 15% para su proxima compra. El tono debe ser calido pero profesional."

**Iteracion: Como Refinar Resultados como un Profesional**

Rara vez el primer prompt produce el resultado perfecto. La clave esta en la **iteracion**: tratar el dialogo con la IA como una conversacion, no como un mandato unico. Usted le pide algo, evalua el resultado, y luego le pide ajustes. Este proceso se llama refinamiento progresivo.

Tecnicas de iteracion utiles:

**La tecnica del "si, pero...":** No empiece de cero. Sobre el resultado que ya tiene, pida cambios concretos. Ejemplo: "Si, me gusta el tono, pero acorta el segundo parrafo a tres lineas y cambia 'estimado cliente' por 'estimado colega'."

**Division de tareas complejas:** En lugar de pedir todo de golpe, divida el trabajo en fases. Por ejemplo, para preparar una presentacion: Fase 1: "Genera el esquema de una presentacion sobre resultados anuales." Fase 2: "Ahora desarrolla la diapositiva 3 con mas detalle, incluyendo los datos de ingresos." Fase 3: "Reescribe la conclusion con un tono mas motivador."

**Especificacion progresiva:** Comience con una instruccion amplia y luego anada restricciones. "Escribe un borrador de informe. Ahora haz que no supere las 500 palabras. Ahora cambia el tono a mas formal. Ahora anade una seccion de recomendaciones."

> **Consejo practico:** Si la IA no le da lo que quiere, no asuma que es culpa de la IA. Preguntese: he sido especifico? le he dado suficiente contexto? he indicado el formato? El 90% de las veces, el problema esta en el prompt, no en la maquina.

**Bibliotecas y Plantillas de Prompts para Tareas Repetitivas**

En una oficina, muchas tareas se repiten semanal o mensualmente: informes de estado, correos de seguimiento, actas de reuniones, evaluaciones de desempeno, newsletters internas. Para estas tareas, vale la pena crear **plantillas de prompts** que pueda reutilizar con solo cambiar los datos especificos.

Ejemplo de plantilla para un informe de estado semanal:

"Actua como un jefe de proyecto. Voy a darte los datos de la semana. Necesito que generes un informe de estado en formato ejecutivo con tres secciones: Logros de la semana, Pendientes y obstaculos, Objetivos para la proxima semana. Los datos son: [insertar datos aqui]. El tono debe ser directo y profesional. Sin parrafos largos, usa vinetas."

Cree un documento compartido en su equipo con sus 10 o 15 plantillas mas usadas. Asi, cuando llegue el momento, solo tiene que copiar, pegar y rellenar los datos.

Algunas plantillas utiles para oficinas:
- Plantilla para redactar minutas de reunion: "Actua como secretario de reunion. Aqui tienes la transcripcion de la reunion sobre [tema]. Extrae: acuerdos tomados, tareas asignadas con responsable y fecha limite, y puntos pendientes. Presentalo en tres secciones con vinetas."
- Plantilla para evaluar proveedores: "Compara a estos tres proveedores segun los siguientes criterios: precio, plazo de entrega, calidad del producto, servicio postventa. Presenta la comparacion en una tabla y anade una recomendacion final."
- Plantilla para redactar comunicados internos: "Redacta un comunicado interno para anunciar [cambio]. Tono: formal o informal. Incluye: motivo del cambio, fecha de efectividad, impacto en los empleados, y pasos a seguir."

**Errores Comunes al Escribir Prompts (y Como Evitarlos)**

**Error 1: Ser demasiado vago o generico.** "Haz algo bonito" no es una instruccion. Sea tan especifico como si le estuviera explicando la tarea a un companero nuevo.

**Error 2: Asumir que la IA sabe cosas que usted no le ha dicho.** La IA no sabe que usted se refiere al cliente del proyecto Marte, ni que su empresa prefiere un tono informal. Digaselo todo.

**Error 3: No indicar el formato de salida.** Si no especifica que quiere vinetas, la IA le dara parrafos. Si no especifica extension, recibira una respuesta larguisima o cortisima. Usted manda.

**Error 4: Aceptar el primer resultado sin critica.** Revise siempre los datos numericos, las fechas y los nombres propios. Las alucinaciones son mas comunes de lo que cree.

**Error 5: Usar un solo prompt para tareas complejas.** Si necesita un informe completo de 10 secciones, no se lo pida todo de una vez. Pida el esquema, luego desarrolle seccion por seccion, luego pida un resumen ejecutivo.

**Error 6: Olvidar el idioma y la audiencia.** Sea explicito: "Redacta esto para un publico de directivos con poco tiempo, maximo 200 palabras."

**Error 7: Incluir informacion confidencial sin cuidado.** Nunca ponga datos bancarios reales, contrasenas, numeros de identificacion fiscal o secretos comerciales en un prompt.

> **Alerta de seguridad:** Recuerde: todo lo que escribe en un prompt puede ser leido por la plataforma. No comparta informacion clasificada ni datos personales sin anonimizar.

---

**Ejercicios Prácticos - Sección 1.2**

**Ejercicio 1: Transformar un prompt malo en uno bueno**

*Objetivo:* Practicar la fórmula R-C-T-F con situaciones reales de tu trabajo.

*Instrucciones:*
1. Piensa en 5 tareas que hagas frecuentemente en tu oficina.
2. Para cada tarea, escribe primero un "prompt malo" (vago, genérico).
3. Luego reescríbelo aplicando R-C-T-F:
   - **Rol:** ¿Qué perfil profesional debería adoptar la IA?
   - **Contexto:** ¿Qué información necesita saber?
   - **Tarea:** ¿Qué acción exacta debe realizar?
   - **Formato:** ¿Cómo quieres que te entregue el resultado?
4. Prueba ambos prompts en una IA y compara los resultados.

*Ejemplo:*
- Malo: "Escribe un correo para un proveedor."
- Bueno: "Actúa como responsable de compras con 10 años de experiencia. El proveedor XYZ nos ha subido los precios un 15% sin previo aviso. Redacta un correo formal solicitando una reunión para negociar, mencionando que llevamos 5 años como clientes y que valoramos la relación. Tono: firme pero cordial. Máximo 3 párrafos."

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 2: La técnica de iteración**

*Objetivo:* Aprender a refinar resultados paso a paso.

*Instrucciones:*
1. Abre una IA y pide: "Redacta un correo para informar a los empleados de que la cafetería estará cerrada por reformas la próxima semana."
2. Lee el resultado y pide al menos 3 ajustes:
   - "Acorta el primer párrafo a 2 líneas."
   - "Añade una alternativa: informa de que habrá máquinas de café temporales en la planta 2."
   - "Cambia el tono a más cercano y menos formal."
3. Compara el resultado final con el primero. ¿Cuánto mejoró?
4. Repite el ejercicio con una tarea real de tu trabajo.

*Tiempo estimado:* 20 minutos.

---

**Ejercicio 3: Crear tu biblioteca de plantillas**

*Objetivo:* Construir un repositorio de prompts reutilizables para tu día a día.

*Instrucciones:*
1. Abre un documento nuevo (Word, Google Docs, Notion, etc.).
2. Crea una tabla con estas columnas: Nombre del prompt | Prompt completo | Frecuencia de uso | Resultados.
3. Crea al menos 5 plantillas para tareas que repites semanal o mensualmente:
   - Minuta de reunión
   - Informe de estado semanal
   - Correo de seguimiento a cliente
   - Evaluación de proveedor
   - Comunicado interno
4. Para cada plantilla, aplica la fórmula R-C-T-F.
5. Prueba cada plantilla con datos reales y ajusta según el resultado.
6. Guarda el documento en un lugar accesible y compártelo con tu equipo si es apropiado.

*Tiempo estimado:* 45 minutos.

---

**Ejercicio 4: El desafío del formato**

*Objetivo:* Comprobar la importancia de especificar el formato de salida.

*Instrucciones:*
1. Pide a la IA: "Dame información sobre las ventajas del teletrabajo para las empresas."
2. Anota cómo te presenta la información (probablemente en párrafos largos).
3. Ahora pide lo mismo pero especificando: "Dame información sobre las ventajas del teletrabajo para las empresas. Presenta cada ventaja en una viñeta de máximo 2 líneas. Incluye un dato o ejemplo concreto por cada ventaja. Máximo 6 ventajas."
4. Compara ambos resultados. ¿Cuál es más útil para tu trabajo?
5. Repite con otra tarea, probando diferentes formatos: tabla, lista numerada, email, esquema.

*Tiempo estimado:* 15 minutos.

---

**Cuestionario de Autoevaluacion - Seccion 1.2**

**Pregunta 1:** Cual es la estructura recomendada para escribir un prompt eficaz?
a) Saludar, despedirse, pedir por favor
b) Rol + Contexto + Tarea + Formato de salida
c) Titulo, cuerpo, firma
d) Pregunta, respuesta, ejemplo

**Respuesta correcta: b.** La formula R-C-T-F (Rol, Contexto, Tarea, Formato) es el estandar probado para obtener resultados precisos y utiles de la IA.

**Pregunta 2:** Que debe hacer si el primer resultado que le da la IA no es exactamente lo que necesita?
a) Cerrar la sesion y empezar de nuevo en otra plataforma
b) Iterar: pedir ajustes especificos sobre el resultado obtenido
c) Aceptarlo tal cual porque la IA siempre tiene razon
d) Escribir el mismo prompt pero en mayusculas

**Respuesta correcta: b.** La iteracion es la tecnica correcta. Usted evalua el resultado y pide cambios concretos.

**Pregunta 3:** Cual de los siguientes es un error grave al escribir prompts?
a) Pedir la informacion en un formato especifico
b) Proporcionar contexto detallado sobre la situacion
c) Incluir datos bancarios reales o contrasenas en el prompt
d) Asignar un rol profesional a la IA

**Respuesta correcta: c.** Nunca debe compartir informacion confidencial real en los prompts, ya que las plataformas pueden usar estas conversaciones para entrenamiento.`,
      },
      {
        title: '1.3. Dominio de los Grandes Asistentes (ChatGPT, Claude, Gemini)',
        content: `**El Ecosistema de los Asistentes de IA**

Si el prompt engineering es el arte de hablar con la IA, conocer a los asistentes es conocer a los interpretes con los que usted va a conversar. Hoy en dia, tres grandes plataformas dominan el mercado de la IA conversacional para oficinas: **ChatGPT** (de OpenAI), **Claude** (de Anthropic) y **Gemini** (de Google). Cada uno tiene su personalidad, sus fortalezas y sus debilidades. Y aunque los tres pueden hacer tareas similares, cada uno brilla en escenarios distintos.

Piense en ellos como tres consultores especializados. ChatGPT es el todoterreno, rapido y versatil, capaz de pasar de un analisis financiero a un poema en segundos. Claude es el analista meticuloso, ideal para documentos largos y tareas que requieren precision y estructura. Gemini es el integrador nativo de Google, que vive y respira dentro del ecosistema de Gmail, Drive y Google Docs. La clave no esta en declarar uno mejor que otro, sino en saber cual usar segun la tarea que tiene entre manos.

**Comparativa General de los Tres Asistentes**

ChatGPT, creado por OpenAI, utiliza modelos GPT-4 y GPT-4o con una ventana de contexto de 128k tokens. Permite subida de archivos (PDF, Word, Excel, imagenes), busqueda web manual, y generacion de imagenes con DALL-E integrado. Su version gratuita es limitada (GPT-4o mini) y la version de pago ChatGPT Plus cuesta alrededor de 22 euros al mes.

Claude, creado por Anthropic, utiliza modelos Claude 3.5 Sonnet y Opus con una ventana de contexto de 200k tokens (superior a ChatGPT). Tambien permite subida de archivos y busqueda web manual, pero no genera imagenes (solo las analiza). Su version gratuita tiene restricciones y la version de pago Claude Pro cuesta unos 20 euros al mes.

Gemini, creado por Google, utiliza modelos Gemini 1.5 y 2.0 con una ventana de contexto de hasta 1 millon de tokens en algunos modelos. Permite subida de archivos con integracion nativa de Google Drive, busqueda web automatica, y generacion de imagenes con Imagen 2/3. Su version gratuita es generosa y la version de pago Gemini Advanced cuesta alrededor de 22 euros al mes.

**Fortalezas y Debilidades de Cada Asistente para Trabajo de Oficina**

**ChatGPT: El todoterreno versatil**

Fortalezas:
- Es el mas conocido y el que tiene mas recursos educativos disponibles en internet.
- Su generacion de imagenes con DALL-E es util para crear graficos rapidos, presentaciones visuales o iconos.
- Tiene un modo de voz conversacional muy natural, ideal para reuniones virtuales o para dictar ideas.
- Su capacidad para cambiar de tema y de tono rapidamente lo hace excelente para tareas variadas en un mismo dia.
- Los GPTs personalizados permiten crear asistentes a medida sin programar.

Debilidades:
- En documentos muy largos o complejos, puede perder el hilo o generar respuestas menos precisas.
- Su politica de privacidad ha generado preocupaciones en empresas con datos sensibles.
- La version gratuita es bastante limitada.

**Claude: El analista de documentos**

Fortalezas:
- Su ventana de contexto de 200k tokens le permite procesar documentos enormes (hasta 150.000 palabras).
- Es excepcional para tareas que requieren seguir instrucciones complejas y estructuradas.
- Sus respuestas suelen ser mas matizadas y cuidadosas, con menos errores factuales.
- Los Proyectos de Claude permiten organizar conversaciones y documentos por tema, ideal para equipos.
- Es especialmente bueno extrayendo datos de PDFs extensos, como informes anuales, contratos legales o estudios de mercado.

Debilidades:
- No genera imagenes, solo las analiza.
- Su tono puede resultar demasiado formal o cauteloso para comunicaciones informales.
- La integracion con otras plataformas es mas limitada que la de Gemini o ChatGPT.

**Gemini: El integrador de Google**

Fortalezas:
- Integracion nativa con Gmail, Google Drive, Google Docs, Google Sheets y Google Calendar.
- Su busqueda web es automatica y fluida, ideal para tareas que requieren informacion actualizada.
- La ventana de contexto de 1 millon de tokens permite procesar cantidades ingentes de informacion.
- Es gratuito y generoso en su version sin pago.

Debilidades:
- Historicamente ha sido menos preciso que ChatGPT y Claude en tareas de razonamiento profundo.
- Su personalidad puede sentirse menos "humana" y mas robotica en conversaciones largas.
- La dependencia del ecosistema Google puede ser una desventaja si su empresa usa Microsoft 365.

**Funciones Nativas de Cada Plataforma**

Una de las grandes ventajas de estos asistentes modernos es que no solo procesan texto. Todos ellos aceptan **archivos adjuntos** y los incorporan a la conversacion. Pero cada uno lo hace de manera diferente.

En ChatGPT, usted puede arrastrar un PDF, un archivo de Word, una imagen o incluso un archivo de Excel directamente a la ventana de chat. La IA leera el contenido y podra trabajar con el. Por ejemplo, puede subir un PDF de 30 paginas con el informe anual de su empresa y pedirle: "Extrae todos los datos financieros de la pagina 12 a la 18 y presentamelos en una tabla." O subir una foto de una pizarra y pedirle: "Transcribe y organiza estas ideas en categorias."

En Claude, el proceso es similar, pero su capacidad para manejar documentos largos es superior. Puede subir un contrato legal de 100 paginas y pedirle: "Identifica todas las clausulas que podrian ser problematicas para la parte contratante y explicamelas en lenguaje sencillo."

En Gemini, la subida de archivos esta profundamente integrada con Google Drive. Puede decirle directamente: "Busca en mi Drive el informe de ventas del mes pasado y resumelo." O incluso: "Encuentra los correos de la semana pasada relacionados con el proyecto Alfa y haz un resumen de los acuerdos alcanzados."

**Busqueda web:**

Los tres asistentes ofrecen busqueda en internet, pero con enfoques distintos. En ChatGPT y Claude, la busqueda web debe activarse manualmente. Cuando esta activada, la IA consulta internet y le devuelve informacion actualizada con citas y enlaces. En Gemini, la busqueda web es automatica.

> **Consejo practico:** Si necesita informacion fresca (noticias de hoy, datos de mercado recientes, cambios legales), active la busqueda web. Si esta trabajando con informacion interna de la empresa, desactivela para evitar distracciones.

**Generacion de imagenes:**

Solo ChatGPT y Gemini generan imagenes. Claude las analiza pero no las crea. ChatGPT usa DALL-E, que produce imagenes de alta calidad a partir de descripciones textuales. Gemini usa Imagen, que tambien ofrece buena calidad. Para la oficina, la generacion de imagenes es util para: crear graficos para presentaciones, disenar iconos para documentos internos, generar visuales para newsletters, e ilustrar manuales de procedimientos.

**Instrucciones Personalizadas y System Prompts**

Una de las funciones mas poderosas y menos utilizadas de estos asistentes son las **instrucciones personalizadas**. Esto le permite decirle a la IA como quiere que sea de forma permanente.

En ChatGPT, esta funcion se llama "Instrucciones personalizadas" y se encuentra en el menu de configuracion. Alli puede escribir informacion permanente como: "Soy directora financiera de una empresa mediana. Trabajo en espanol e ingles. Prefiero respuestas estructuradas con vinetas y tablas. Evita lenguaje demasiado tecnico."

En Claude, la funcion equivalente se llama "Estilo de respuesta" en la configuracion de perfil. Ademas, en los Proyectos de Claude, puede definir instrucciones especificas para cada proyecto.

En Gemini, las instrucciones personalizadas se configuran desde la pagina de configuracion de Gemini. Puede definir preferencias como el tono, la longitud de las respuestas y los temas que mas le interesan.

**Ejemplo practico de instrucciones personalizadas para un perfil de oficina:**

"Trabajo como coordinadora de recursos humanos en una empresa de 200 empleados. Necesito respuestas practicas y aplicables, no teorias. Cuando te pida que redactes un correo o un documento, incluye siempre un asunto sugerido. Si hablamos de leyes o normativas, recuerda que soy de Espana y las referencias deben ser a la legislacion espanola. No uses jerga tecnica sin explicarla."

Una vez configuradas estas instrucciones, la IA recordara estas preferencias en todas las conversaciones.

**Cuando Usar Cada Herramienta Segun la Tarea**

No existe el mejor asistente en terminos absolutos. Existe el asistente mas adecuado para cada tarea.

Use ChatGPT cuando necesite generar imagenes, tenga tareas variadas, quiera explorar ideas creativas, o trabaje con GPTs personalizados.

Use Claude cuando tenga que analizar documentos extensos, necesite precision en tareas detalladas, quiera organizar proyectos con multiples documentos, o trabaje con textos complejos que requieren matices.

Use Gemini cuando su empresa use intensivamente el ecosistema Google, necesite buscar en correos o documentos sin descargarlos, requiera busqueda web integrada, o quiera una opcion gratuita potente.

**Funciones Ocultas y Consejos de Productividad**

**Compartir conversaciones:** En ChatGPT y Claude, puede generar un enlace para compartir una conversacion completa con sus companeros. Ideal para documentar resultados.

**Conversaciones multiples y proyectos:** No mezcle temas diferentes en una misma conversacion. Abra conversaciones separadas para cada proyecto.

**El arte de encadenar prompts:** No pida todo de golpe. Para un documento complejo: primero pida el esquema, luego desarrolle seccion por seccion, luego pida el resumen ejecutivo.

**Modo de voz y dictado:** ChatGPT y Gemini ofrecen modo de voz. Use esto para dictar correos o grabar ideas rapidas.

**Personalizacion visual:** En ChatGPT y Claude, puede personalizar el nombre de la IA. Aunque parezca trivial, personalizar la herramienta aumenta la sensacion de control.

> **Consejo de productividad:** Cree un sistema de prompts para su dia a dia. Dedique 10 minutos cada lunes a planificar la semana con la IA.

---

**Ejercicios Prácticos - Sección 1.3**

**Ejercicio 1: Prueba comparativa de los tres asistentes**

*Objetivo:* Descubrir las fortalezas de cada herramienta con una misma tarea.

*Instrucciones:*
1. Elige una tarea real de tu trabajo (por ejemplo: resumir un documento, redactar un correo, analizar datos).
2. Ejecuta la misma tarea en ChatGPT, Claude y Gemini (usa las versiones gratuitas si no tienes acceso a las de pago).
3. Para cada herramienta, anota:
   - ¿Qué tan rápido fue el resultado?
   - ¿Qué tan preciso fue?
   - ¿Qué formato usó para presentar la información?
   - ¿Qué te gustó y qué no?
4. Crea una tabla comparativa con tus observaciones.
5. Decide cuál usarás para cada tipo de tarea.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 2: Configurar tus instrucciones personalizadas**

*Objetivo:* Personalizar una IA para que se adapte a tu forma de trabajar.

*Instrucciones:*
1. En ChatGPT, ve a Configuración > Instrucciones personalizadas (o en Claude: Estilo de respuesta, o en Gemini: Configuración).
2. Escribe tu perfil profesional. Incluye:
   - Tu puesto y sector
   - El idioma en que trabajas
   - Tu formato preferido (viñetas, tablas, párrafos cortos)
   - Tu tono preferido (formal, cercano, directo)
   - Cualquier preferencia específica (ej: "siempre incluye un resumen ejecutivo", "no uses jerga técnica")
3. Haz una prueba: pide algo que normalmente harías y verifica si la IA aplica tus preferencias.
4. Ajusta las instrucciones según el resultado.
5. Repite en al menos una segunda herramienta.

*Ejemplo de instrucciones personalizadas:*
"Soy coordinadora administrativa en una empresa de logística de 80 empleados. Trabajo en español. Prefiero respuestas con viñetas y tablas cuando hay datos. Evita lenguaje demasiado técnico. Si redactas correos, incluye siempre un asunto sugerido. Cuando hables de leyes, refiere siempre a la legislación española."

*Tiempo estimado:* 20 minutos.

---

**Ejercicio 3: Subir y analizar un archivo real**

*Objetivo:* Practicar la subida de archivos y el análisis con IA.

*Instrucciones:*
1. Elige un documento de tu trabajo que no sea confidencial: un informe, una presentación, un manual de procedimientos.
2. Súbelo a ChatGPT, Claude o Gemini (arrastra el archivo al chat).
3. Pide: "Analiza este documento y dame un resumen de 5 puntos clave."
4. Luego pide: "Extrae todas las fechas y plazos mencionados en este documento y preséntalos en una tabla cronológica."
5. Finalmente pide: "Identifica 3 áreas de mejora o puntos que podrían necesitar más detalle."
6. Verifica que los resultados son correctos comparándolos con el documento original.

*Tiempo estimado:* 25 minutos.

---

**Ejercicio 4: Crear un flujo de trabajo semanal con IA**

*Objetivo:* Diseñar cómo integrarás la IA en tu rutina semanal.

*Instrucciones:*
1. Haz una lista de todas las tareas que haces en una semana típica.
2. Para cada tarea, pregúntate: ¿Podría la IA ayudarme con esto? Si la respuesta es sí, ¿cómo?
3. Crea un "plan de lunes a viernes" donde asignes tareas de IA a días concretos:
   - Lunes: Planificar la semana con IA (generar esquema de tareas prioritarias)
   - Martes: Redactar informes con IA
   - Miércoles: Analizar datos con IA
   - Jueves: Preparar presentaciones con IA
   - Viernes: Resumir la semana y organizar archivos con IA
4. Prueba este plan durante una semana real.
5. Al final de la semana, anota cuánto tiempo ahorraste y qué funcionó mejor.

*Tiempo estimado:* 20 minutos de planificación + 1 semana de práctica.

---

**Cuestionario de Autoevaluacion - Seccion 1.3**

**Pregunta 1:** Cual de los siguientes asistentes es mas recomendable para analizar un contrato legal de 150 paginas?
a) Gemini, por su integracion con Google Drive
b) ChatGPT, por su generacion de imagenes
c) Claude, por su ventana de contexto de 200k tokens y su precision en documentos largos
d) Cualquiera de los tres funciona exactamente igual

**Respuesta correcta: c.** Claude tiene una ventana de contexto de 200k tokens y esta especificamente optimizado para tareas que requieren seguir instrucciones complejas en documentos extensos.

**Pregunta 2:** Para que sirven las instrucciones personalizadas (custom instructions)?
a) Para que la IA recuerde nuestras preferencias de tono, idioma y formato en todas las conversaciones
b) Para cambiar el color de la interfaz de la plataforma
c) Para que la IA aprenda a escribir como una persona especifica
d) Para compartir nuestra conversacion con otros usuarios

**Respuesta correcta: a.** Las instrucciones personalizadas permiten configurar preferencias permanentes que la IA aplicara en todas las conversaciones.

**Pregunta 3:** Cuando es mas ventajoso usar Gemini frente a ChatGPT o Claude?
a) Cuando necesitamos generar imagenes de alta calidad
b) Cuando trabajamos intensivamente con el ecosistema Google (Gmail, Drive, Docs)
c) Cuando necesitamos analizar documentos legales extensos
d) Cuando queremos usar plugins de terceros

**Respuesta correcta: b.** La principal ventaja competitiva de Gemini es su integracion nativa con el ecosistema Google.`,
      },
    ],
  },
  {
    id: 2,
    slug: 'gestion-documental-comunicacion',
    title: 'IA aplicada a la Gestión Documental y Comunicación',
    level: 'Nivel Intermedio',
    levelKey: 'intermedio',
    icon: FileText,
    objective: 'Externalizar en la IA las tareas de redacción, traducción y gestión de reuniones.',
    description: 'En este módulo aprenderás a delegar en la IA las tareas más consumidoras de tiempo: redacción de correos complejos, transcripción y análisis de reuniones, y traducción profesional de documentos. Transformarás horas de trabajo en minutos.',
    duration: '4 semanas',
    sections: [
      {
        title: '2.1. Redacción y Edición de Contenido Profesional',
        content: `Imagina que llegas a la oficina un lunes por la manana y tienes 47 correos sin leer. Entre ellos, una reclamacion de un cliente frustrado, una solicitud de propuesta comercial con fecha limite hoy, y un informe que tu jefe necesita para las 11:00. Tu bandeja de entrada parece un campo de batalla. La IA generativa, bien utilizada, se convierte en tu asistente personal de redaccion. No se trata de pulsar un boton y enviar lo que salga. Se trata de aprender a orquestar la voz de la IA para que suene como tu, pero en version mejorada: mas rapida, mas precisa, mas adaptativa.

**Redaccion automatizada de correos complejos**

Comencemos con los correos de servicio al cliente. Cuando un cliente escribe enfadado porque su pedido llego equivocado, la tentacion es responder a la defensiva. Con IA, puedes redactar una respuesta empatica y profesional en segundos, pero necesitas darle el tono correcto. Aqui tienes un patron de prompt probado:

> "Actua como un agente de atencion al cliente con 10 anos de experiencia en resolucion de conflictos. El cliente escribio lo siguiente: [pegar queja]. Responde con empatia, reconociendo el error especifico, explicando el primer paso concreto que vamos a tomar, y ofreciendo una compensacion o solucion clara. Tono: profesional pero calido, sin ser servil. Extension: maximo 4 parrafos."

Fijate en los elementos clave: le damos un **rol** (agente experto), un **contexto** (la queja), una **estructura** (empatia + reconocimiento + accion + solucion), un **tono** (profesional pero calido), y un **limite** de extension. Sin estas instrucciones, la IA tiende a ser generica o excesivamente formal.

Para propuestas comerciales, el enfoque cambia radicalmente. Aqui no buscas resolver un problema, sino **vender** una solucion. Un prompt efectivo para una propuesta comercial seria:

> "Redacta un correo de propuesta comercial para [nombre del cliente potencial]. La empresa [tu empresa] ofrece [servicio/producto]. Los beneficios clave son: [lista de 3 beneficios]. El cliente previamente mostro interes en [aspecto concreto]. El correo debe incluir: linea de asunto atractiva, apertura personalizada mencionando nuestra conversacion anterior, propuesta de valor en 3 puntos, prueba social breve, y llamada a la accion clara. Tono: consultivo, no de vendedor agresivo."

**Transformacion de textos entre registros**

Una de las habilidades mas poderosas es cambiar el **registro linguistico** de un texto. Un empleado escribe a su companero: "Oye, tienes esos datos de ventas del mes pasado? Es que los necesito para la reunion de manana y no los encuentro por ningun lado." No puedes enviar eso a un consejero delegado. Con IA, transformas ese mensaje informal en un correo ejecutivo.

Prompt: "Transforma el siguiente mensaje informal en un correo profesional de nivel ejecutivo. Manten el mismo proposito y urgencia, pero eleva el tono: se formal sin ser rigido, directo sin ser brusco. El destinatario es un directivo. Incluye saludo y despedida formales."

El resultado sera algo como: "Estimado [nombre]: Te escribo para solicitar amablemente los datos de ventas del mes pasado, dado que los requiero para preparar la presentacion de manana. Agradeceria tu ayuda para localizar esta informacion. Quedo atento a tu respuesta."

Del mismo modo, puedes convertir jerga tecnica en explicaciones para clientes no expertos. Un desarrollador escribe: "El fallo se debe a una excepcion no controlada en el modulo de autenticacion OAuth." Tu necesitas decirle al cliente: "Hemos identificado un problema en el sistema de inicio de sesion. Nuestro equipo ya esta trabajando en la solucion y estara resuelto en 24 horas."

**Generacion de informes ejecutivos a partir de notas dispersas**

Esta es quizas la aplicacion que mas tiempo ahorra. Tienes notas de una reunion, mensajes de WhatsApp del equipo, correos sueltos y un par de documentos. Necesitas un informe ejecutivo. La IA puede estructurar todo ese caos.

Prompt: "Actua como un asistente ejecutivo experto en sintetizar informacion. Te voy a dar un conjunto de notas desorganizadas sobre [tema del informe]. Tu tarea es generar un informe ejecutivo con esta estructura:
1. Resumen ejecutivo (maximo 5 lineas)
2. Contexto y antecedentes
3. Hallazgos principales (numerados, priorizados por impacto)
4. Recomendaciones accionables
5. Proximos pasos con responsables y fechas sugeridas

Elimina informacion redundante. Si falta informacion critica, senalalo como [PENDIENTE DE CONFIRMAR]. Manten un tono neutro y basado en hechos."

**Plantillas de prompt por tipo de comunicacion escrita**

Vamos a crear un pequeno **banco de plantillas** que puedes reutilizar:

- **Para correo formal de agradecimiento:** "Redacta un correo de agradecimiento profesional a [nombre] por [motivo]. Menciona especificamente [detalle concreto que valoraste]. Tono: calido pero profesional. Cierra con una invitacion a futura colaboracion."
- **Para correo de rechazo (candidatos, propuestas):** "Redacta un correo rechazando cortesmente a [destinatario] para [propuesta/candidatura]. Reconoce el esfuerzo invertido. Da una razon generica pero amable. Tono: respetuoso y claro."
- **Para mensaje interno de cambio de proceso:** "Redacta un comunicado interno anunciando un cambio en [proceso especifico]. Explica: que cambia, por que cambia, cuando entra en vigor, que debe hacer cada persona, donde ir con dudas. Tono: transparente y motivacional."
- **Para minuta de acuerdo verbal:** "Tras nuestra conversacion telefonica del [fecha], redacta un correo de confirmacion que resuma los acuerdos alcanzados: [lista de puntos]. Pide confirmacion por respuesta."

**Correccion de estilo y adaptacion de tono**

La IA puede actuar como un **editor de estilo**. Puedes tomar un borrador tuyo y pedirle que lo revise:

"Revisa el siguiente texto y sugiere mejoras. Verifica: ortografia, gramatica, claridad, concision, tono (debe ser [formal/semiformal/cercano]), y estructura. Para cada sugerencia, explica BREVEMENTE por que mejora el texto."

Si trabajas con equipos internacionales, puedes incluso adaptar el tono a culturas especificas. Un correo para un cliente aleman debe ser directo y eficiente, mientras que uno para un cliente japones requiere mas cortesia y contexto.

> **Consejo practico:** Crea en tu herramienta de IA una carpeta de "prompts guardados" con estas plantillas. Con el tiempo, afinalas segun tu propio estilo.

---

**Ejercicios Prácticos - Sección 2.1**

**Ejercicio 1: Redactar 5 correos reales con IA**

*Objetivo:* Practicar la redacción de diferentes tipos de correos profesionales.

*Instrucciones:*
1. Piensa en 5 correos que necesites enviar esta semana (o que hayas enviado recientemente).
2. Para cada correo, crea un prompt usando la fórmula R-C-T-F.
3. Genera los borradores con IA.
4. Revisa cada borrador y haz al menos 2 ajustes manuales.
5. Envía los correos y anota: ¿Cuánto tiempo te ahorraste respecto a escribirlos desde cero? ¿El tono fue adecuado? ¿Hubo algún error?

*Tipos de correo sugeridos:*
- Correo de seguimiento a un cliente
- Correo de agradecimiento a un proveedor
- Correo interno anunciando un cambio
- Correo rechazando una propuesta
- Correo solicitando información a un compañero

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 2: Transformar registros lingüísticos**

*Objetivo:* Practicar la adaptación de tono y registro.

*Instrucciones:*
1. Escribe un mensaje informal como si se lo enviaras a un compañero de confianza. Ejemplo: "Oye, ¿tienes los datos de ventas del mes? Es que los necesito para la reunión de mañana y no los encuentro."
2. Pide a la IA: "Transforma este mensaje en un correo ejecutivo formal."
3. Ahora pide: "Transforma el mismo mensaje en un tono muy cercano y amable."
4. Finalmente pide: "Transforma el mismo mensaje en un tono urgente pero profesional."
5. Compara las tres versiones. ¿Cuál usarías en cada situación?
6. Repite con un texto técnico que necesites explicar a un cliente no experto.

*Tiempo estimado:* 20 minutos.

---

**Ejercicio 3: Generar un informe ejecutivo desde notas dispersas**

*Objetivo:* Practicar la síntesis de información desorganizada.

*Instrucciones:*
1. Recopila notas de una reunión reciente, mensajes de WhatsApp del equipo, correos sueltos o cualquier información fragmentada sobre un tema de tu trabajo.
2. Pega todo ese contenido en la IA con el siguiente prompt:
   "Actúa como un asistente ejecutivo experto en sintetizar información. Te voy a dar un conjunto de notas desorganizadas. Genera un informe ejecutivo con: 1) Resumen ejecutivo (máx. 5 líneas), 2) Contexto y antecedentes, 3) Hallazgos principales (numerados, priorizados), 4) Recomendaciones accionables, 5) Próximos pasos con responsables y fechas. Elimina información redundante. Si falta información crítica, señálalo como [PENDIENTE DE CONFIRMAR]."
3. Revisa el resultado y verifica que no haya información inventada.
4. Ajusta el informe según necesites.

*Tiempo estimado:* 25 minutos.

---

**Ejercicio 4: Crear tu banco de plantillas de comunicación**

*Objetivo:* Construir un repositorio de prompts para tareas de comunicación repetitivas.

*Instrucciones:*
1. Abre un documento nuevo.
2. Crea al menos 8 plantillas de prompts para las comunicaciones que más repites:
   - Minuta de reunión
   - Correo de seguimiento
   - Comunicado interno
   - Respuesta a queja de cliente
   - Propuesta comercial
   - Correo de agradecimiento
   - Correo de rechazo
   - Informe de estado
3. Para cada plantilla, aplica R-C-T-F y deja espacios marcados con [DATOS] para rellenar cada vez.
4. Prueba cada plantilla con datos reales durante la semana.
5. Ajusta las plantillas según los resultados.

*Tiempo estimado:* 40 minutos.

---

**Cuestionario de Autoevaluacion 2.1**

**1. Cual es el elemento MAS importante para que un prompt genere un correo de reclamacion eficaz?**
a) Pedir que sea breve
b) Incluir el nombre del cliente
c) Especificar el tono, la estructura y el rol de la IA
d) Usar palabras tecnicas

**Respuesta correcta: c). El tono, la estructura y el rol definen como la IA debe abordar el texto. Sin estas instrucciones, el resultado tiende a ser generico.**

**2. Al transformar un mensaje informal en uno ejecutivo, que debes preservar?**
a) Las mismas palabras exactas
b) El proposito y la urgencia del mensaje original
c) El tono coloquial
d) La longitud del texto original

**Respuesta correcta: b). El proposito y la urgencia son el nucleo del mensaje; el resto debe adaptarse al nuevo registro.**

**3. Que debe hacer un prompt para generar un informe ejecutivo a partir de notas desorganizadas?**
a) Pedir un resumen de una linea
b) Indicar una estructura clara (resumen, hallazgos, recomendaciones, proximos pasos)
c) Copiar las notas sin instrucciones adicionales
d) Especificar solo el tema del informe

**Respuesta correcta: b). La estructura es clave para que la IA organice la informacion caotica.**`,
      },
      {
        title: '2.2. Gestión de Reuniones y Transcripciones con IA',
        content: `Si hay una actividad que consume horas de trabajo inutil en las oficinas, son las reuniones. Pero casi peor que la reunion en si es lo que viene despues: el correo con "quien apunto los acuerdos?", la persona que dice "eso no se decidio", y el clasico "yo creo que lo que dijo Maria fue otra cosa". La IA aplicada a la gestion de reuniones elimina todo ese desgaste.

**Herramientas de transcripcion automatica**

Existen varias herramientas lideres en el mercado. **Otter.ai** es excelente para reuniones en ingles y se integra con Zoom, Google Meet y Teams. Transcribe en tiempo real, identifica a cada orador, y genera un resumen automatico. **Fireflies.ai** funciona como un "robot" que se une a tus reuniones y no solo transcribe, sino que analiza el contenido: extrae tareas, compromisos, preguntas sin respuesta, y sentimiento general.

Las plataformas nativas tambien han mejorado mucho. **Microsoft Teams** tiene transcripcion en vivo, pero su nueva funcion de "IA recapitulativa" genera automaticamente los puntos clave, los proximos pasos, y hasta las menciones a personas. **Zoom IQ** hace algo similar: despues de la reunion, recibes un resumen estructurado sin que nadie haya tenido que tomar notas.

Para un usuario no tecnico, la configuracion es simple. En Teams, grabas la reunion, activas la transcripcion, y al finalizar tienes un archivo de texto con todo lo dicho. Copias y pegas ese texto en ChatGPT o Claude, y aplicas los patrones que veremos a continuacion.

**Extraccion inteligente de informacion de reuniones**

El verdadero valor no esta en la transcripcion, sino en la **extraccion inteligente**. Necesitas convertir ese mar de palabras en:
- **Puntos clave:** Las 3-5 ideas centrales que cualquier asistente deberia recordar.
- **Compromisos (Action Items):** Quien se comprometio a hacer que y para cuando.
- **Decisiones tomadas:** Acuerdos firmes, no solo discusiones.
- **Puntos abiertos:** Temas que quedaron pendientes para la siguiente reunion.
- **Minuta estructurada:** Un documento formal que sirva como acta.

Aqui tienes un prompt probado para este proposito:

> "Has asistido a una reunion de trabajo. A continuacion recibiras la transcripcion completa. Tu tarea es generar una minuta estructurada con los siguientes apartados:
1. DATOS BASICOS: Asunto de la reunion, fecha, duracion, asistentes.
2. RESUMEN EJECUTIVO: 3-5 lineas que resuman el proposito y el resultado principal.
3. PUNTOS TRATADOS: Lista numerada de cada tema discutido. Para cada tema, indica que se dijo, que se decidio, y quien participo.
4. ACUERDOS Y COMPROMISOS: Tabla con tres columnas: Tarea, Responsable, Fecha limite.
5. PROXIMOS PASOS: Fecha de la proxima reunion si se menciona, y temas pendientes.
IMPORTANTE: Basa tu minuta ESTRICTAMENTE en lo que aparece en la transcripcion. No inventes informacion."

**Patrones de prompt para resumir reuniones largas**

A veces no necesitas una minuta completa, sino un resumen ultra-rapido:

**El patron "5 lineas":** Ideal para cuando llegas tarde a una reunion o solo quieres saber si te afecta.
> "Resume la siguiente reunion en EXACTAMENTE 5 lineas. Cada linea debe responder a: (1) De que se hablo? (2) Que se decidio? (3) Quien hace que? (4) Que sigue? (5) Algo que requiera mi atencion urgente?"

**El patron "rol especifico":** Util si eres el responsable de marketing y solo te interesa lo que afecta a tu area.
> "Actua como un filtro de informacion para el departamento de Marketing. De la siguiente transcripcion, extrae UNICAMENTE: menciones a campanas, presupuesto de marketing, o contenido, tareas asignadas al equipo de marketing, fechas relacionadas con lanzamientos o comunicaciones."

**El patron "seguimiento temporal":** Para reuniones recurrentes donde solo quieres saber que cambio desde la ultima vez.
> "Identifica UNICAMENTE: (1) que acuerdos nuevos hay que no estuvieran en la reunion anterior, (2) que tareas anteriores se reportan como completadas, (3) que tareas anteriores siguen abiertas."

**Integracion con calendarios y herramientas de tareas**

El siguiente nivel es la **automatizacion del flujo de trabajo**. Una vez que tienes los action items extraidos, puedes usar herramientas como Zapier o Make para que, sin intervencion humana, se cree una tarea en Asana, Trello o Monday.

El flujo ideal es:
1. La reunion termina y la transcripcion se genera automaticamente.
2. La IA procesa la transcripcion con tu prompt de minuta.
3. Una integracion lee los action items y crea tarjetas en tu tablero.
4. Se envia un resumen por correo o Slack a todos los asistentes.
5. Las tareas se asignan automaticamente a los responsables con sus fechas.

**Ejemplo realista:** Maria tiene una reunion de 45 minutos con el equipo de producto. Antes, Maria pasaba 30 minutos despues de cada reunion escribiendo el acta y otro tanto creando tareas. Ahora: la reunion termina, la IA genera la minuta en 10 segundos, Maria la revisa en 2 minutos, y las tareas se crean automaticamente. Ha ahorrado 55 minutos de una hora de reunion.

> **Alerta practica:** La IA puede alucinar compromisos. Siempre revisa la minuta generada antes de distribuirla. Un "Juan se comprometio a entregar el informe" que Juan nunca dijo puede generar un conflicto innecesario.

---

**Ejercicios Prácticos - Sección 2.2**

**Ejercicio 1: Transcribir y resumir una reunión real**

*Objetivo:* Practicar la extracción de información de reuniones con IA.

*Instrucciones:*
1. Graba una reunión de trabajo (con el consentimiento de los asistentes) o usa una reunión pasada si ya tienes la grabación.
2. Usa una herramienta gratuita de transcripción como Otter.ai (versión gratuita), o la transcripción automática de Google Meet/Teams/Zoom.
3. Copia la transcripción y pégala en una IA con este prompt:
   "Has asistido a una reunión de trabajo. A continuación recibirás la transcripción completa. Genera una minuta con: 1) Datos básicos (asunto, fecha, asistentes), 2) Resumen ejecutivo (3-5 líneas), 3) Puntos tratados (lista numerada), 4) Acuerdos y compromisos (tabla: Tarea, Responsable, Fecha), 5) Próximos pasos. Basa tu minuta ESTRICTAMENTE en la transcripción. No inventes información."
4. Revisa la minuta generada y compárala con lo que realmente se dijo.
5. Identifica errores o alucinaciones y anótalos.
6. Envía la minuta corregida a los asistentes.

*Tiempo estimado:* 40 minutos.

---

**Ejercicio 2: El patrón "5 líneas" aplicado**

*Objetivo:* Practicar los resúmenes ultra-rápidos de reuniones.

*Instrucciones:*
1. Usa la transcripción del ejercicio anterior (o una nueva).
2. Aplica el patrón "5 líneas": "Resume la siguiente reunión en EXACTAMENTE 5 líneas. Cada línea debe responder a: (1) ¿De qué se habló? (2) ¿Qué se decidió? (3) ¿Quién hace qué? (4) ¿Qué sigue? (5) ¿Algo que requiera mi atención urgente?"
3. Lee el resultado. ¿Captura lo esencial?
4. Ahora aplica el patrón "rol específico": "Actúa como filtro para el departamento de [tu departamento]. Extrae ÚNICAMENTE: menciones a [tu área], tareas asignadas a tu equipo, fechas relacionadas con tus proyectos."
5. Compara ambos resúmenes. ¿Cuál te resulta más útil?

*Tiempo estimado:* 15 minutos.

---

**Ejercicio 3: Crear action items automáticos**

*Objetivo:* Extraer tareas y compromisos de reuniones de forma estructurada.

*Instrucciones:*
1. Toma la transcripción de una reunión.
2. Pide a la IA: "De la siguiente transcripción, extrae TODOS los compromisos y tareas mencionados. Para cada uno, indica: qué hay que hacer, quién es responsable, y cuál es el plazo. Si falta alguna de estas tres informaciones, marca como [NO ESPECIFICADO]. Presenta el resultado en una tabla."
3. Revisa la tabla y verifica cada tarea con los asistentes.
4. Copia la tabla en tu herramienta de gestión de tareas (Trello, Asana, Microsoft To Do, o incluso un Excel).
5. Asigna las tareas a los responsables reales.

*Tiempo estimado:* 20 minutos.

---

**Ejercicio 4: Simular una reunión y practicar**

*Objetivo:* Si no tienes reuniones reales disponibles, practica con una simulación.

*Instrucciones:*
1. Escribe un diálogo ficticio de una reunión de 10 minutos sobre un tema de tu trabajo. Incluye al menos 3 personas, 2 decisiones tomadas, 3 tareas asignadas y 1 punto pendiente.
2. Pega el diálogo en la IA y aplica los tres patrones de prompt:
   - Minuta completa
   - Patrón "5 líneas"
   - Patrón "rol específico"
3. Verifica que la IA capturó correctamente todas las decisiones, tareas y puntos pendientes.
4. Identifica si la IA inventó algo que no estaba en el diálogo.

*Tiempo estimado:* 25 minutos.

---

**Cuestionario de Autoevaluacion 2.2**

**1. Cual es la principal ventaja de usar herramientas como Otter.ai o Fireflies.ai en una reunion?**
a) Eliminan la necesidad de que los asistentes hablen
b) Transcriben automaticamente y extraen informacion estructurada (tareas, acuerdos, puntos clave)
c) Graban video en 4K
d) Traducen simultaneamente a 50 idiomas

**Respuesta correcta: b). La transcripcion automatica mas la extraccion estructurada son el core de estas herramientas.**

**2. Por que es importante incluir "Basada ESTRICTAMENTE en la transcripcion, no inventes informacion"?**
a) Porque la IA tiende a alucinar y puede inventar acuerdos o tareas que no ocurrieron
b) Porque es un requisito legal
c) Porque la transcripcion es demasiado larga
d) Porque la IA solo entiende instrucciones en mayusculas

**Respuesta correcta: a). Las IAs generativas tienen tendencia a rellenar informacion que no esta en el texto original.**

**3. Que patron de prompt usarias si solo te interesan los temas que afectan a tu departamento especifico?**
a) El patron "5 lineas"
b) El patron "rol especifico" indicando que actue como filtro para tu departamento
c) El patron "seguimiento temporal"
d) El prompt de minuta completa

**Respuesta correcta: b). El patron "rol especifico" le indica a la IA que ignore informacion irrelevante para tu area.**`,
      },
      {
        title: '2.3. Traducción y Adaptación Cultural de Documentos',
        content: `Traducir no es cambiar palabras de un idioma a otro. Traducir es **transportar significado** de una cultura a otra. Un contrato redactado en ingles con terminos como "best efforts" no tiene un equivalente directo en espanol juridico; "mejores esfuerzos" suena extrano en un documento legal hispanohablante, donde se usarian terminos como "diligencia debida" o "maxima dedicacion". La IA puede ayudarte con esto, pero solo si le das el contexto adecuado.

**Traduccion avanzada con contexto de negocio**

Los traductores automaticos tradicionales tratan cada frase como una isla. La IA generativa, en cambio, puede considerar el **contexto completo** del documento, el **sector** al que pertenece, y el **proposito** de la traduccion.

Veamos un ejemplo concreto. Una clausula de un contrato de confidencialidad en ingles dice:
"The Receiving Party shall not disclose any Confidential Information to third parties for a period of five (5) years from the Effective Date, except as required by law."

Una traduccion literal seria: "La Parte Receptora no divulgara ninguna Informacion Confidencial a terceros durante un periodo de cinco (5) anos a partir de la Fecha de Efectividad, excepto segun lo requerido por la ley."

Pero un abogado espanol redactaria: "La Parte Receptora se obliga a no divulgar Informacion Confidencial a terceros durante un plazo de cinco (5) anos contados desde la Fecha de Vigencia del presente Contrato, salvo que dicha divulgacion sea exigida por ley."

Las diferencias son sutiles pero importantes: "shall not disclose" es juridicamente mas preciso como "se obliga a no divulgar" que como "no divulgara". "Effective Date" en contratos espanoles es "Fecha de Vigencia", no "Fecha de Efectividad".

El prompt para este nivel de precision debe incluir:

> "Eres un traductor juridico especializado en contratos comerciales ingles-espanol con 15 anos de experiencia. Traduce el siguiente texto al espanol de Espana. Usa terminologia juridica propia del derecho contractual espanol. Terminos como 'shall', 'hereby', 'hereinafter' deben traducirse segun la practica notarial espanola. Manten la estructura de parrafos y numeracion del original."

Para manuales tecnicos, el enfoque cambia. No necesitas precision juridica, necesitas **claridad instructiva**. Un manual de una maquina industrial dice: "Ensure the safety lock is engaged before performing maintenance operations. Failure to do so may result in serious personal injury."

Traduccion literal: "Asegurese de que el bloqueo de seguridad este acoplado antes de realizar operaciones de mantenimiento. No hacerlo puede resultar en lesiones personales graves."

Mejor traduccion tecnica: "Antes de realizar cualquier operacion de mantenimiento, verifique que el bloqueo de seguridad esta activado. El incumplimiento de esta instruccion puede provocar lesiones graves."

**Adaptacion cultural: mas alla de la traduccion literal**

Aqui es donde la IA realmente brilla. La adaptacion cultural implica cambiar referencias, ejemplos, formatos, y hasta el tono para que el mensaje sea efectivo en la cultura de destino.

Imagina que una campana de marketing estadounidense usa la frase: "We'll go the extra mile for our customers." Traducir literalmente al espanol ("Iremos la milla extra por nuestros clientes") no funciona en paises donde el sistema metrico es kilometrico y la expresion no existe. Una adaptacion cultural seria: "Haremos todo lo posible por nuestros clientes."

Otro ejemplo: un boletin interno de una empresa global dice "Please join us for a potluck lunch on Friday." El concepto "potluck" no existe en muchas culturas. Una adaptacion para Espana seria: "Os invitamos a un almuerzo de traje el viernes. Cada uno trae algo para compartir."

El prompt de adaptacion cultural:

> "Eres un consultor de comunicacion intercultural. Necesito adaptar el siguiente texto del ingles (cultura estadounidense) al espanol para [pais especifico]. Debes: identificar referencias culturales que no funcionen en la cultura de destino, reemplazarlas por equivalentes locales, ajustar el nivel de formalidad, y adaptar ejemplos de deportes, celebraciones, unidades de medida y monedas al contexto local."

**Conversion de formatos internacionales**

Un aspecto que parece menor pero causa caos es la diferencia en formatos entre paises. En Estados Unidos las fechas son MM/DD/AAAA, en Europa DD/MM/AAAA, y en Japon AAAA/MM/DD. Del mismo modo, los numeros: 1,000.50 en EE.UU. es mil con 50 centavos; en Espana es 1.000,50.

Un prompt para conversion integral de formatos:

> "Convierte el siguiente documento comercial al formato estandar de [pais de destino]. Aplica: formato de fecha de MM/DD/AAAA a DD/MM/AAAA, formato numerico de 1,000.00 a 1.000,00, moneda: convierte USD a [moneda local], unidades de pulgadas/pies a centimetros/metros, formato telefonico al local, y tratamientos de 'Mr./Ms.' a 'Sr./Sra.'"

**Flujo de trabajo de verificacion de calidad para traducciones IA**

Ninguna traduccion automatica debe usarse sin verificacion. Pero puedes establecer un flujo de trabajo eficiente en tres capas:

Capa 1: Traduccion inicial. Usas la IA con el prompt detallado con contexto. Obtienes un primer borrador.

Capa 2: Autoverificacion con IA. Pides a la misma IA que revise su propio trabajo:
> "Eres un revisor de traducciones. Compara el texto original en [idioma A] con la traduccion al [idioma B] que acabas de generar. Verifica: hay errores de terminologia? Hay frases que suenen a traduccion literal? Se han adaptado correctamente las referencias culturales? Los formatos (fechas, numeros, monedas) son correctos? Marca cada problema con [REVISAR] y sugiere una correccion."

Capa 3: Revision humana experta. Una persona bilingue con conocimiento del sector revisa los puntos marcados como [REVISAR]. En documentos criticos (contratos, manuales de seguridad), esta revision es obligatoria.

> **Alerta importante:** Nunca traduzcas documentos legales, financieros o de seguridad sin revision humana. Un error en una clausula contractual o en una instruccion de seguridad puede tener consecuencias graves.

---

**Ejercicios Prácticos - Sección 2.3**

**Ejercicio 1: Traducir un documento real con contexto**

*Objetivo:* Practicar la traducción profesional con contexto de negocio.

*Instrucciones:*
1. Elige un documento de tu trabajo que necesite traducción (o busca uno en internet): un correo, un informe, un manual, una política.
2. Primero, tradúcelo con Google Translate o DeepL (traducción automática tradicional).
3. Luego, usa una IA generativa con este prompt:
   "Eres un traductor profesional especializado en [sector: legal/técnico/comercial]. Traduce el siguiente texto del español al inglés. Usa terminología propia del sector [tu sector]. Mantén el tono [formal/técnico/cercano]. Si hay expresiones idiomáticas, adáptalas culturalmente."
4. Compara ambas traducciones. ¿Cuál es más precisa? ¿Cuál suena más natural?
5. Pide a la IA que revise su propia traducción: "Revisa tu traducción. ¿Hay errores de terminología? ¿Hay frases que suenen a traducción literal? ¿Se adaptaron las referencias culturales?"
6. Si es posible, pide a alguien bilingüe que revise el resultado.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 2: Adaptación cultural de un mensaje**

*Objetivo:* Practicar la adaptación cultural más allá de la traducción literal.

*Instrucciones:*
1. Busca un texto publicitario, un boletín interno o un comunicado de una empresa extranjera (en inglés).
2. Pide a la IA: "Eres un consultor de comunicación intercultural. Adapta el siguiente texto del inglés (cultura estadounidense) al español para España. Identifica referencias culturales que no funcionen, reemplázalas por equivalentes locales, ajusta el nivel de formalidad, y adapta ejemplos de deportes, celebraciones, unidades de medida y monedas."
3. Lee el resultado y verifica:
   - ¿Se adaptaron las expresiones idiomáticas?
   - ¿Se cambiaron las unidades de medida (millas → kilómetros, Fahrenheit → Celsius)?
   - ¿Se adaptaron las referencias culturales?
   - ¿El tono es apropiado para la cultura de destino?
4. Repite el ejercicio adaptando el mismo texto para otro país hispanohablante (México, Argentina, Colombia) y compara las diferencias.

*Tiempo estimado:* 25 minutos.

---

**Ejercicio 3: Convertir formatos internacionales**

*Objetivo:* Practicar la conversión de formatos entre países.

*Instrucciones:*
1. Crea un documento ficticio con datos en formato estadounidense:
   - Fechas en MM/DD/AAAA
   - Números con comas como separador de miles (1,234.56)
   - Moneda en USD ($)
   - Unidades en pulgadas y pies
   - Tratamientos con Mr./Ms.
2. Pide a la IA: "Convierte el siguiente documento comercial al formato estándar de España. Aplica: formato de fecha de MM/DD/AAAA a DD/MM/AAAA, formato numérico de 1,000.00 a 1.000,00, moneda: convierte USD a EUR (usa el tipo de cambio actual), unidades de pulgadas/pies a centímetros/metros, formato telefónico al local, y tratamientos de 'Mr./Ms.' a 'Sr./Sra.'"
3. Verifica cada conversión. ¿La IA usó el tipo de cambio correcto? ¿Las conversiones de unidades son precisas?
4. Repite convirtiendo el mismo documento al formato de otro país (Japón, Brasil, Alemania).

*Tiempo estimado:* 20 minutos.

---

**Ejercicio 4: Crear un flujo de verificación de traducciones**

*Objetivo:* Establecer un protocolo de calidad para traducciones con IA.

*Instrucciones:*
1. Elige un texto de 2-3 párrafos de tu trabajo.
2. Aplica el flujo de tres capas:
   - **Capa 1:** Traduce con IA usando un prompt detallado con contexto.
   - **Capa 2:** Pide a la IA que revise su propia traducción marcando problemas con [REVISAR].
   - **Capa 3:** Revisa manualmente los puntos marcados como [REVISAR].
3. Documenta los errores que encontró la IA en la autoverificación.
4. Crea una checklist de verificación personalizada basada en los errores más comunes que detectes.
5. Guarda esta checklist para usarla en futuras traducciones.

*Tiempo estimado:* 25 minutos.

---

**Cuestionario de Autoevaluacion 2.3**

**1. Por que "Iremos la milla extra por nuestros clientes" NO es una buena traduccion al espanol, aunque sea literalmente correcta?**
a) Porque es demasiado larga
b) Porque la expresion "milla extra" no es culturalmente significativa en paises con sistema metrico y no transmite el mismo significado emocional
c) Porque "cliente" esta mal escrito
d) Porque no incluye el nombre de la empresa

**Respuesta correcta: b). La expresion idiomatica "go the extra mile" pierde su significado figurado al traducirse literalmente en una cultura que no usa millas.**

**2. Cual es el flujo de verificacion de calidad recomendado para traducciones con IA?**
a) Usar DeepL y enviar directamente
b) Traduccion inicial con contexto + autoverificacion con IA + revision humana experta en documentos criticos
c) Pedir a un companero que lo lea por encima
d) Traducir dos veces con IAs distintas y comparar

**Respuesta correcta: b). El flujo de tres capas equilibra velocidad y calidad.**

**3. Que tipo de documento NUNCA debe distribuirse basandose solo en traduccion automatica sin revision humana?**
a) Un correo informal entre companeros
b) Un boletin interno de noticias de la empresa
c) Un contrato legal o un manual de seguridad de maquinaria
d) Una invitacion a una cena de empresa

**Respuesta correcta: c). Los documentos con implicaciones legales o de seguridad requieren revision humana obligatoria.**`,
      },
    ],
  },
  {
    id: 3,
    slug: 'analisis-datos-reportes',
    title: 'Análisis de Datos y Reportes SIN Programar',
    level: 'Nivel Intermedio-Avanzado',
    levelKey: 'intermedio-avanzado',
    icon: BarChart3,
    objective: 'Usar la IA como tu analista de datos personal para crear reportes y entender gráficos.',
    description: 'Descubre cómo usar la IA para analizar datos, generar fórmulas complejas en Excel, crear gráficos profesionales y generar presentaciones automáticas, todo sin escribir una sola línea de código.',
    duration: '5 semanas',
    sections: [
      {
        title: '3.1. Inteligencia Artificial en Excel y Google Sheets',
        content: `--- INICIO 3.1 ---

**A) Herramientas de IA integradas en hojas de cálculo**

Imagina que tienes un asistente experto en Excel y Google Sheets sentado a tu lado, listo para ayudarte en cualquier momento con solo escribir lo que necesitas. Eso es exactamente lo que la IA está trayendo a las hojas de cálculo. Hasta hace muy poco, trabajar con datos exigía memorizar cientos de fórmulas, conocer atajos de teclado y dedicar horas a tareas repetitivas. Hoy, puedes limitarte a describir lo que necesitas en español y dejar que la IA lo ejecute por ti.

**Microsoft Copilot en Excel**

Copilot es la apuesta de Microsoft para integrar inteligencia artificial directamente en su suite de Office, y Excel es uno de los programas donde más se nota su impacto. Copilot no es un complemento externo ni una extensión: está integrado de forma nativa en Excel 365, lo que significa que funciona dentro de tu libro de trabajo sin que tengas que salir de la aplicación ni copiar y pegar datos.

**¿Qué puede hacer exactamente Copilot en Excel?**

La lista de capacidades es extensa y crece con cada actualización. Estas son las más relevantes para tu trabajo diario:

Analizar datos y encontrar patrones: Puedes seleccionar un rango de datos y pedirle a Copilot "Analiza estas ventas y dime qué tendencias observas". Copilot examinará los datos, aplicará análisis estadísticos básicos y te devolverá conclusiones en lenguaje natural, escritas directamente en un panel lateral.

Crear gráficos y visualizaciones con lenguaje natural: En lugar de perder tiempo buscando el tipo de gráfico adecuado en los menús de Excel, puedes escribir "Crea un gráfico de barras apiladas que muestre las ventas por región y por trimestre". Copilot generará el gráfico al instante y te permitirá personalizarlo después.

Identificar insights automáticamente: Copilot puede examinar tus datos y señalar hallazgos que quizás habías pasado por alto, como valores atípicos, correlaciones inesperadas o tendencias estacionales. Por ejemplo, puede decirte "He detectado que las ventas del producto X caen sistemáticamente en el mes de agosto durante los últimos tres años".

Generar columnas calculadas y fórmulas complejas: Esta quizás sea la funcionalidad que más tiempo te ahorrará. Puedes escribir algo como "Añade una columna que calcule el margen de beneficio restando el coste del precio de venta y dividiendo el resultado por el precio de venta". Copilot generará la fórmula exacta y la insertará en tu tabla.

Crear tablas dinámicas y resúmenes: Puedes pedir "Crea una tabla dinámica que muestre el total de ventas por vendedor y por mes". Copilot construirá la tabla dinámica con la estructura que has solicitado sin que toques ni un solo campo de configuración.

Aplicar formato condicional inteligente: "Resalta en rojo todas las celdas donde las ventas sean inferiores al objetivo del mes". Copilot aplicará el formato condicional exacto que necesitas.

**¿Cómo se activa Copilot en Excel?**

Activar Copilot es sencillo si tienes una suscripción a Microsoft 365 que incluya Copilot. Busca el botón de Copilot en la pestaña Inicio de Excel, en el grupo de herramientas de la derecha. Al hacer clic, se abrirá un panel lateral donde puedes escribir tus solicitudes en lenguaje natural. Si no ves el botón, es posible que tu administrador de TI no haya habilitado la funcionalidad aún, o que tu plan de suscripción no lo incluya. En ese caso, puedes consultar con tu departamento de sistemas sobre la disponibilidad.

**Ejemplos detallados de uso de Copilot en Excel**

Ejemplo 1: Análisis de rendimiento de ventas. Tienes un libro con 12 meses de datos de ventas, 50 vendedores y 4 regiones. Le dices a Copilot: "Analiza las ventas por vendedor y dime quiénes están por debajo del promedio de su región". Copilot examina los datos, calcula promedios regionales, compara cada vendedor con su región, y te devuelve una tabla resumen con los nombres de los vendedores que necesitan atención, junto con el porcentaje de desviación respecto al promedio. Incluso puede sugerirte que crees un gráfico de barras para visualizar la brecha.

Ejemplo 2: Proyección de gastos. Tienes el histórico de gastos operativos de los últimos 24 meses y necesitas una estimación para el próximo trimestre. Le pides: "Con estos datos históricos, haz una proyección lineal para los próximos 3 meses". Copilot aplica una regresión lineal simple sobre tus datos y genera una nueva columna con los valores proyectados, incluyendo un intervalo de confianza.

Ejemplo 3: Segmentación de clientes. Tu tabla contiene el historial de compras de 500 clientes. Escribes: "Clasifica los clientes en tres grupos según su frecuencia de compra: frecuencia alta (más de 12 compras al año), frecuencia media (entre 6 y 12) y frecuencia baja (menos de 6)". Copilot añade una nueva columna con las etiquetas correspondientes.

> **Consejo Práctico:** Copilot funciona mejor cuando tus datos están bien estructurados en formato tabla (con encabezados claros en la primera fila y sin filas ni columnas vacías). Antes de pedirle un análisis, asegúrate de que tus datos sigan esta estructura. Si trabajas con datos desordenados, dedica unos minutos a limpiarlos primero o pídele a Copilot que te ayude a hacerlo.

**Extensiones de IA para Google Sheets**

Si tu empresa trabaja con Google Sheets en lugar de Excel, no estás fuera de juego. Existen varias extensiones potentes que llevan la IA a tus hojas de cálculo de Google. Las dos más destacadas son AI for Sheets y Sheet+AI.

**AI for Sheets**

AI for Sheets es una extensión que se instala directamente desde Google Workspace Marketplace. Una vez instalada, añade un menú lateral en tu hoja de cálculo con múltiples funcionalidades de IA.

**¿Cómo se instala?**

Abre Google Sheets, ve al menú Extensiones, selecciona Complementos y luego Obtener complementos. En el buscador, escribe "AI for Sheets" y haz clic en Instalar. La extensión te pedirá los permisos necesarios para leer y escribir datos en tu hoja de cálculo. Una vez instalada, la encontrarás en el menú Extensiones > AI for Sheets.

**¿Qué puedes hacer con AI for Sheets?**

Generar fórmulas complejas: Escribe tu solicitud en lenguaje natural dentro de una celda usando la función =AI() y describe lo que necesitas. Por ejemplo, escribe =AI("Calcula la comisión del 5% sobre el precio si es mayor de 100 euros, y del 3% si es menor") y la extensión generará automáticamente la fórmula de Excel que necesitas.

Clasificar y categorizar datos: Selecciona una columna con descripciones de productos y pide "Clasifica cada producto en una de estas categorías: Electrónica, Hogar, Jardinería, Deportes". AI for Sheets analizará cada descripción y asignará la categoría correspondiente.

Extraer información de texto: Si tienes una columna con direcciones completas, puedes pedir "Extrae el código postal de cada dirección" y la IA generará una nueva columna con solo los códigos postales.

Traducir contenido: Selecciona un rango de celdas y pide "Traduce este contenido del español al inglés manteniendo el tono profesional". La extensión traducirá celda por celda.

Analizar sentimiento: Si tienes una columna con comentarios de clientes, puedes pedir "Analiza el sentimiento de cada comentario: positivo, negativo o neutral". La IA procesará cada comentario y asignará una etiqueta.

> **Consejo Práctico:** La versión gratuita de AI for Sheets tiene un límite de uso diario. Para uso intensivo, considera la versión de pago o combínala con otras herramientas según la tarea que necesites realizar.

**Sheet+AI**

Sheet+AI es otra extensión potente para Google Sheets que se centra especialmente en la generación de fórmulas y el análisis de datos. Su instalación sigue el mismo proceso que AI for Sheets: desde el menú Extensiones > Complementos > Obtener complementos.

**Capacidades destacadas de Sheet+AI**

Generación de fórmulas con ventana de chat: A diferencia de AI for Sheets que usa una función dentro de la celda, Sheet+AI abre una ventana de chat lateral donde describes lo que necesitas y la fórmula aparece directamente en tu hoja. Esto resulta más natural si prefieres una conversación fluida.

Explicación de fórmulas existentes: Esta es una funcionalidad muy valiosa para el aprendizaje. Si recibes un archivo de Excel o Sheets creado por otra persona y contiene fórmulas complejas que no entiendes, puedes seleccionar la celda con la fórmula y pedir "Explica qué hace esta fórmula paso a paso". Sheet+AI desglosará cada componente y te explicará su función.

Depuración de errores: Cuando una fórmula te da error, puedes pedir "Esta fórmula está dando error. ¿Puedes corregirla?". Sheet+AI analizará el error, identificará la causa y te propondrá la corrección.

Optimización de fórmulas: Puedes tener una fórmula que funciona pero es demasiado larga o lenta. Pide "Optimiza esta fórmula para que sea más eficiente" y la IA te devolverá una versión simplificada.

**Comparativa de capacidades entre Excel Copilot, AI for Sheets y Sheet+AI**

Para que puedas elegir la herramienta adecuada según tus necesidades, aquí tienes una comparativa detallada:

**Integración nativa**: Copilot en Excel está completamente integrado en el programa y no requiere instalación adicional. AI for Sheets y Sheet+AI son extensiones de terceros que se instalan desde el marketplace de Google. Copilot ofrece la experiencia más fluida al ser parte del ecosistema Microsoft.

**Generación de fórmulas**: Las tres herramientas permiten generar fórmulas desde lenguaje natural, pero con matices diferentes. Copilot puede insertar directamente la fórmula en tu celda sin que tengas que copiar y pegar. AI for Sheets usa una función especial =AI() que devuelve el resultado. Sheet+AI usa un chat lateral y te muestra la fórmula para que la copies.

**Análisis de datos avanzado**: Copilot destaca por su capacidad de analizar grandes volúmenes de datos directamente en Excel, identificando tendencias, patrones y anomalías. AI for Sheets puede hacer análisis básicos pero está más limitado. Sheet+AI se centra más en fórmulas que en análisis profundo.

**Generación de gráficos**: Copilot puede crear gráficos directamente. AI for Sheets y Sheet+AI no generan gráficos de forma nativa; tendrías que usar las funciones de gráficos de Google Sheets por separado.

**Explicación de fórmulas**: Sheet+AI es el mejor en esta categoría, ya que fue diseñado específicamente para ayudar a entender y depurar fórmulas. Copilot también puede explicar fórmulas pero de forma más básica. AI for Sheets tiene esta capacidad pero es menos precisa.

**Precio**: Copilot en Excel requiere una suscripción a Microsoft 365 Copilot. AI for Sheets tiene versión gratuita limitada y versión de pago. Sheet+AI funciona con créditos o suscripción mensual.

**Idioma**: Las tres herramientas funcionan en español, aunque Copilot y Sheet+AI tienen un mejor manejo del lenguaje natural en español que AI for Sheets.

> **Consejo Práctico:** No necesitas elegir una sola herramienta. Muchos profesionales usan Excel con Copilot para el análisis pesado y Google Sheets con Sheet+AI para trabajos colaborativos rápidos. Conoce ambas y usa la que mejor se adapte a cada tarea.

---

**B) Generación de fórmulas con lenguaje natural**

Esta es, probablemente, la habilidad que más te sorprenderá por su utilidad inmediata. Durante años, los profesionales de oficina hemos tenido que memorizar la sintaxis exacta de decenas de fórmulas: BUSCARV con su cuarto argumento, los anidamientos de SI con sus paréntesis de cierre, las combinaciones de INDICE y COINCIDIR que parecen un trabalenguas. La IA elimina por completo esta barrera.

**¿Cómo funciona la generación de fórmulas con IA?**

El proceso es sorprendentemente simple. Describes en español qué necesitas que haga la fórmula, y la IA te devuelve la fórmula exacta, lista para copiar y pegar en tu hoja de cálculo. La clave está en ser específico en tu descripción: cuantos más detalles le des, más precisa será la fórmula generada.

**Ejemplo 1: Búsqueda de datos con BUSCARV**

Imagina que tienes dos tablas. En la primera tienes una lista de productos con su código y necesitas traer el precio desde una segunda tabla donde están todos los códigos con sus precios.

Le dices a la IA: "Tengo en la columna A los códigos de producto. En otra hoja llamada Precios, tengo los códigos en la columna A y los precios en la columna B. Necesito una fórmula que busque cada código en la hoja Precios y me devuelva el precio correspondiente."

La IA te responderá con esta fórmula y su explicación: =BUSCARV(A2;Precios!A:B;2;FALSO)

La fórmula se compone de cuatro partes: A2 es el valor que quieres buscar, Precios!A:B es la tabla donde buscar, el número 2 indica que quieres el valor de la segunda columna de esa tabla, y FALSO significa que quieres una coincidencia exacta, que es lo habitual en búsquedas de códigos.

**Ejemplo 2: Clasificación condicional con SI anidados**

Necesitas clasificar las puntuaciones de una evaluación de desempeño. Si la puntuación es mayor o igual a 90, la calificación es Excelente. Si está entre 70 y 89, es Bueno. Si está entre 50 y 69, es Regular. Si es menor de 50, es Insuficiente.

Le pides a la IA: "Tengo las puntuaciones en la columna B. Necesito una fórmula que ponga Excelente si es 90 o más, Bueno si es entre 70 y 89, Regular si es entre 50 y 69, e Insuficiente si es menos de 50."

La IA genera: =SI(B2>=90;"Excelente";SI(B2>=70;"Bueno";SI(B2>=50;"Regular";"Insuficiente")))

La lógica es simple pero la sintaxis puede ser tediosa de escribir a mano. La IA se encarga de los paréntesis de cierre y el orden correcto de las condiciones.

**Ejemplo 3: Búsqueda flexible con INDICE y COINCIDIR**

BUSCARV tiene limitaciones importantes: solo puede buscar en la primera columna de la tabla y devolver valores a la derecha. Cuando necesitas más flexibilidad, INDICE y COINCIDIR son la solución.

Le dices a la IA: "Tengo una tabla con empleados donde los nombres están en la columna B, los departamentos en la columna C y los salarios en la columna D. Quiero buscar a un empleado por su nombre y obtener su salario. El nombre a buscar está en la celda A1."

La IA genera: =INDICE(D:D;COINCIDIR(A1;B:B;0))

COINCIDIR encuentra la fila donde está el nombre en la columna B, e INDICE devuelve el valor de la columna D en esa misma fila. Esta combinación es más potente que BUSCARV porque puedes buscar en cualquier dirección.

**Ejemplo 4: Sumas condicionales con SUMAR.SI.CONJUNTO**

Necesitas sumar las ventas de un producto específico en un mes concreto.

Le dices a la IA: "Tengo las ventas en la columna D, los nombres de producto en la columna B y los meses en la columna C. Quiero sumar las ventas del producto 'Widget' en el mes de 'Enero'."

La IA genera: =SUMAR.SI.CONJUNTO(D:D;B:B;"Widget";C:C;"Enero")

SUMAR.SI.CONJUNTO acepta múltiples criterios, cada uno con su rango y condición. Puedes añadir tantos criterios como necesites, lo que la convierte en una de las fórmulas más útiles para análisis de datos.

**Ejemplo 5: Cálculo de antigüedad con SIFECHA**

Necesitas calcular los años de antigüedad de cada empleado desde su fecha de contratación hasta hoy.

Le pides: "Tengo las fechas de contratación en la columna C. Quiero calcular cuántos años completos lleva cada empleado en la empresa, usando la fecha de hoy."

La IA genera: =SIFECHA(C2;HOY();"Y")

SIFECHA es una fórmula poco conocida pero extremadamente útil. El argumento "Y" indica que queremos años completos. También puedes usar "YM" para meses descontando años, o "MD" para días descontando meses y años.

**Ejemplo 6: Extraer partes de texto con IZQUIERDA, DERECHA y EXTRAE**

Tienes una columna con códigos como "PROD-1234-XX" y necesitas extraer solo la parte numérica.

Le pides: "Tengo códigos en la columna A con el formato PROD-1234-XX. Quiero extraer solo los números que están entre los dos guiones."

La IA genera: =EXTRAE(A2;ENCONTRAR("-";A2)+1;ENCONTRAR("-";A2;ENCONTRAR("-";A2)+1)-ENCONTRAR("-";A2)-1)

Esta fórmula parece compleja, pero la IA la construye por ti paso a paso. ENCONTRAR localiza la posición de los guiones, y EXTRAE toma los caracteres entre ellos.

**Cómo pedir a la IA que explique qué hace una fórmula**

Una de las funcionalidades más útiles no es generar fórmulas nuevas, sino entender las que ya existen en tu libro. Cuando recibes un archivo de un compañero, de un cliente o de un sistema externo, puedes encontrar fórmulas que parecen escritas en otro idioma.

El prompt para esto es sencillo: copia la fórmula y pide "Explícame paso a paso qué hace esta fórmula como si fuera la primera vez que veo Excel".

Por ejemplo, si pegas esta fórmula: =SI(Y(B2>1000;C2="Premium");B2*0,15;SI(C2="Standard";B2*0,1;0))

La IA te explicará: "Esta fórmula primero comprueba si el valor en B2 es mayor que 1000 y si en C2 pone Premium. Si ambas condiciones se cumplen, aplica un 15% de descuento. Si no, comprueba si en C2 pone Standard y, en ese caso, aplica un 10% de descuento. Si no se cumple ninguna condición, devuelve 0."

Esta capacidad de explicación es una herramienta de aprendizaje increíble. Cada vez que pides una explicación, estás aprendiendo lógica de fórmulas sin esfuerzo consciente.

> **Alerta:** Cuando la IA te genera una fórmula, pruébala siempre con datos conocidos antes de aplicarla a toda tu base de datos. Una fórmula visualmente correcta puede tener un error lógico sutil que solo detectas al ver los resultados. Este paso de verificación es parte de tu responsabilidad como profesional.

---

**C) Limpieza y preparación de datos con IA**

Los datos del mundo real son desordenados. Llegan de diferentes fuentes, con diferentes formatos, con errores tipográficos, con campos incompletos y con inconsistencias que hacen que cualquier análisis posterior sea poco fiable. Se estima que los profesionales de datos dedican entre el 60% y el 80% de su tiempo a limpiar y preparar datos antes de poder analizarlos. La IA puede reducir drásticamente ese tiempo.

**Separar nombres completos en componentes**

Uno de los problemas más comunes es tener nombres completos en una sola columna y necesitarlos separados en nombre, primer apellido y segundo apellido.

Le dices a la IA: "Tengo en la columna A nombres completos en formato 'Nombre PrimerApellido SegundoApellido'. Necesito separarlos en tres columnas: nombre en B, primer apellido en C y segundo apellido en D. Algunos nombres tienen dos palabras como 'María José'."

La IA puede generar múltiples soluciones. Una fórmula sencilla para extraer el primer nombre sería: =IZQUIERDA(A2;ENCONTRAR(" ";A2)-1). Para el último elemento (segundo apellido): =EXTRAE(A2;ENCONTRAR("@";SUSTITUIR(A2;" "; "@";LARGO(A2)-LARGO(SUSTITUIR(A2;" ";""))))+1;LARGO(A2)). La IA también puede sugerir usar Texto en Columnas de Excel o SPLIT en Google Sheets.

**Corregir formatos de fecha inconsistentes**

Las fechas son una fuente constante de problemas. En un mismo archivo puedes tener fechas en formato DD/MM/AAAA, MM/DD/AAAA, "15 de marzo de 2026", "2026-03-15", o incluso fechas escritas como texto que Excel no reconoce como fechas.

Prompt para la IA: "Tengo una columna de fechas en varios formatos mezclados: algunas en DD/MM/AAAA, otras como '15 marzo 2026' y algunas en formato USA MM/DD/AAAA. Necesito estandarizarlas todas al formato DD/MM/AAAA como fechas reales de Excel."

La IA te guiará en el proceso: primero identificar qué formato tiene cada fila usando funciones como TEXTO o ESFECHA, luego aplicar la conversión correspondiente, y finalmente unificar todo en un solo formato. También puede sugerir el uso de la función FECHA para construir fechas desde sus componentes: =FECHA(AÑO(A2);MES(A2);DIA(A2)).

**Rellenar datos faltantes de forma inteligente**

Los datos faltantes son inevitables. Un cliente sin teléfono, un producto sin categoría, un vendedor sin región asignada. La IA puede ayudarte a rellenar estos vacíos de forma lógica, no aleatoria.

Prompt: "En mi tabla de clientes, la columna C (Región) tiene celdas vacías. Sé que los clientes con código que empieza por NOR son del norte, los que empiezan por SUR son del sur y los que empiezan por EST son del este. Genera una fórmula que rellene automáticamente la región según el código."

La IA genera: =SI(IZQUIERDA(A2;3)="NOR";"Norte";SI(IZQUIERDA(A2;3)="SUR";"Sur";SI(IZQUIERDA(A2;3)="EST";"Este";"Por definir")))

Para casos más complejos donde no hay una regla tan clara, la IA puede sugerir enfoques como: rellenar con el valor más frecuente de la columna, con la media cuando son datos numéricos, o marcar las celdas vacías para revisión manual si el dato es crítico.

**Estandarizar categorías**

Es muy común que la misma categoría aparezca escrita de formas diferentes: "Electrónica", "electronica", "ELECTRÓNICA", "Elec.", "Electronicos". Para un análisis agregado, esto es un desastre porque Excel tratará cada variante como una categoría diferente.

Prompt: "En la columna D tengo categorías de producto escritas de forma inconsistente: 'Electrónica', 'electronica', 'Elec.', 'Hogar', 'HOGAR', 'Jardin', 'Jardinería', 'JARDIN', 'Deportes', 'depor', 'DEPORTES'. Necesito una fórmula que estandarice todas estas variantes a solo cuatro categorías: Electrónica, Hogar, Jardinería, Deportes."

La IA puede generar una fórmula con SI anidados o BUSCARV con una tabla auxiliar de equivalencias. El enfoque más profesional es crear una tabla de estandarización donde cada variante se asigna a su categoría canónica, y luego usar BUSCARV. Así, si aparecen nuevas variantes en el futuro, solo añades una fila a la tabla auxiliar sin tocar la fórmula.

**Detectar y eliminar duplicados**

Los duplicados pueden distorsionar completamente un análisis. Si el mismo cliente aparece tres veces en una base de datos, cualquier cálculo de número de clientes o de venta media será incorrecto.

Prompt: "Tengo una tabla de clientes con las columnas A (ID de cliente), B (Nombre), C (Email), D (Teléfono). Quiero identificar qué filas están duplicadas basándome en el ID de cliente, y también quiero detectar posibles duplicados donde el ID sea diferente pero el email sea el mismo."

La IA te sugerirá usar formato condicional con la función CONTAR.SI para resaltar duplicados: =CONTAR.SI(A:A;A2)>1 para marcar en rojo los ID repetidos. Para detectar emails duplicados con diferente ID, puedes usar: =Y(CONTAR.SI(C:C;C2)>1;CONTAR.SI.SI(A:A;A2)=1). También puede guiarte en el uso de la herramienta Quitar Duplicados de Excel, explicando qué columna usar como criterio.

> **Consejo Práctico:** Siempre haz una copia de seguridad de tus datos originales antes de aplicar cualquier limpieza masiva. Crea una hoja llamada "Original" con los datos sin tocar y otra hoja "Limpia" donde aplicas las transformaciones. Esto te permite retroceder si algo sale mal.

---

**Ejercicios Prácticos - Sección 3.1**

**Ejercicio 1: Generar 5 fórmulas con lenguaje natural**

*Objetivo:* Practicar la generación de fórmulas de Excel/Sheets describiéndolas en español.

*Instrucciones:*
1. Abre una hoja de cálculo nueva (Excel o Google Sheets).
2. Crea una tabla con datos ficticios: Nombre, Departamento, Salario, Fecha de contratación, Ventas del mes, Objetivo de ventas.
3. Para cada una de estas necesidades, pide a la IA que te genere la fórmula:
   - "Calcula la comisión: 5% si las ventas superan el objetivo, 3% si no."
   - "Calcula los años de antigüedad desde la fecha de contratación hasta hoy."
   - "Clasifica el salario: 'Alto' si es mayor de 3000, 'Medio' si está entre 2000 y 3000, 'Bajo' si es menor de 2000."
   - "Busca el nombre del departamento basado en un código de departamento que está en otra hoja."
   - "Suma las ventas totales solo del departamento 'Ventas'."
4. Copia cada fórmula en tu hoja de cálculo y verifica que funciona correctamente.
5. Si alguna fórmula da error, pide a la IA: "Esta fórmula da error. ¿Puedes corregirla?"

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 2: Limpiar un dataset desordenado**

*Objetivo:* Practicar la limpieza de datos con IA.

*Instrucciones:*
1. Crea una hoja de cálculo con datos intencionalmente desordenados:
   - Nombres completos en una sola columna (ej: "María García López")
   - Fechas en formatos mezclados (15/03/2026, "15 marzo 2026", 03-15-2026)
   - Categorías escritas de formas diferentes ("Electrónica", "electronica", "Elec.")
   - Emails duplicados con diferente ID
   - Celdas vacías en columnas importantes
2. Pide a la IA que te ayude a limpiar cada problema:
   - "Separa los nombres completos en nombre, primer apellido y segundo apellido."
   - "Estandariza todas las fechas al formato DD/MM/AAAA."
   - "Unifica las categorías: Electrónica, Hogar, Jardinería, Deportes."
   - "Identifica las filas duplicadas basándome en el email."
   - "Rellena las celdas vacías con [PENDIENTE] para revisión manual."
3. Aplica las soluciones en tu hoja de cálculo.
4. Verifica que los datos quedan limpios y consistentes.

*Tiempo estimado:* 35 minutos.

---

**Ejercicio 3: Analizar datos reales y extraer insights**

*Objetivo:* Practicar el análisis de datos y la extracción de conclusiones.

*Instrucciones:*
1. Usa datos reales de tu trabajo (ventas, gastos, encuestas, etc.) o crea un dataset ficticio con al menos 50 filas y 6 columnas.
2. Pide a la IA: "Eres un analista de negocio senior. Analiza estos datos y dame: 1) Tendencias principales, 2) Valores atípicos, 3) Correlaciones entre variables, 4) Tres recomendaciones accionables."
3. Lee el análisis y verifica cada afirmación con los datos originales.
4. Pide a la IA que genere un gráfico: "Crea un gráfico de barras que muestre [variable] por [categoría]. Ordena de mayor a menor. Usa colores corporativos."
5. Descarga el gráfico e insértalo en un documento.
6. Escribe un párrafo de conclusión basado en el análisis.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 4: Explicar fórmulas existentes**

*Objetivo:* Aprender a entender fórmulas complejas que ya existen en tus hojas.

*Instrucciones:*
1. Abre una hoja de cálculo que hayas recibido de un compañero o descargado de un sistema.
2. Identifica 3 fórmulas que no entiendas completamente.
3. Para cada fórmula, copia el contenido y pide a la IA: "Explícame paso a paso qué hace esta fórmula como si fuera la primera vez que veo Excel. Usa un lenguaje sencillo y pon un ejemplo con datos ficticios."
4. Lee la explicación y verifica que la entiendes.
5. Intenta modificar la fórmula para un caso ligeramente diferente y verifica que funciona.
6. Anota las fórmulas que más te sorprendieron y por qué.

*Tiempo estimado:* 25 minutos.

---

**Cuestionario de Autoevaluación - Sección 3.1**

**Pregunta 1:**

Trabajas en una empresa que usa Google Sheets y necesitas generar fórmulas complejas a partir de descripciones en español. También quieres que la IA te explique qué hacen las fórmulas que ya tienes en tu hoja. ¿Qué extensión sería la más adecuada para ambas tareas?

a) AI for Sheets, porque es la extensión más conocida y tiene la función =AI() para generar fórmulas.
b) Sheet+AI, porque incluye tanto generación de fórmulas como explicación de fórmulas existentes y depuración de errores.
c) Microsoft Copilot, porque está integrado en Excel y es más potente.
d) No existen extensiones que puedan explicar fórmulas existentes; eso solo es posible con Copilot en Excel.

**Pregunta 2:**

Tienes una columna con fechas en múltiples formatos (DD/MM/AAAA, "15 marzo 2026", MM/DD/AAAA) y necesitas estandarizarlas todas a fecha real de Excel en formato DD/MM/AAAA. ¿Cuál es el enfoque más recomendable para usar IA en esta tarea?

a) Pedir a la IA que genere una fórmula única que convierta todos los formatos automáticamente sin necesidad de inspeccionar los datos primero.
b) Primero analizar los datos para identificar cuántos formatos diferentes existen, luego pedir a la IA que genere fórmulas específicas para cada formato detectado, y finalmente unificar.
c) Borrar todas las fechas y pedir a la IA que las reescriba desde cero basándose en los datos de las celdas adyacentes.
d) Usar la función de texto en columnas de Excel y pedir a la IA que adivine el formato correcto.

**Pregunta 3:**

La IA ha analizado tus datos de ventas y ha encontrado una correlación del 85% entre el número de llamadas al servicio técnico y las ventas del producto X. ¿Cuál debe ser tu interpretación profesional de este dato?

a) Conclusión inmediata: hacer más llamadas al servicio técnico aumenta las ventas del producto X, así que hay que promover las llamadas.
b) La correlación es tan alta que estadísticamente es imposible que sea casualidad; la relación causal está demostrada.
c) Existe una correlación fuerte, pero podría ser espuria o inversa. Por ejemplo, podría ser que vender más producto X genere más llamadas al servicio técnico, no al revés. Se necesita más análisis para determinar causalidad.
d) Ignorar el hallazgo porque las correlaciones en datos de ventas nunca son fiables.

---

**Respuestas explicadas**

**Respuesta Pregunta 1: b**

La opción correcta es Sheet+AI. Aunque AI for Sheets (opción a) permite generar fórmulas, Sheet+AI está específicamente diseñado no solo para generarlas sino también para explicar fórmulas existentes y depurar errores, que es exactamente lo que necesitas. Copilot en Excel (opción c) no funciona en Google Sheets. La opción d es incorrecta porque tanto Sheet+AI como Copilot pueden explicar fórmulas existentes.

**Respuesta Pregunta 2: b**

La opción correcta es analizar primero los datos. La IA no puede saber mágicamente cuántos formatos diferentes hay en tu columna sin que explores los datos. El enfoque profesional (opción b) consiste en: primero inspeccionar visualmente los datos o usar la IA para que te ayude a identificar los formatos presentes, luego pedir fórmulas específicas para cada caso, y finalmente combinarlo todo en una única solución. La opción a es arriesgada porque una fórmula única rara vez puede manejar formatos muy dispares. La opción c destruye información valiosa. La opción d no resuelve el problema de los múltiples formatos.

**Respuesta Pregunta 3: c**

La opción correcta es la c. Correlación no implica causalidad, una de las reglas de oro del análisis de datos. Una correlación del 85% es estadísticamente significativa y merece atención, pero no demuestra que una variable cause la otra. Podría tratarse de una correlación espuria (ambas variables dependen de una tercera, como el crecimiento económico general) o de causalidad inversa (mayores ventes generan más llamadas). La opción a comete el error de asumir causalidad en la dirección equivocada. La opción b es incorrecta porque ninguna correlación, por alta que sea, demuestra causalidad por sí misma. La opción d es derrotista: las correlaciones son útiles para generar hipótesis, pero requieren interpretación profesional.

--- FIN 3.1 ---`,
      },
      {
        title: '3.2. Análisis Avanzado con Intérpretes de Código Visuales',
        content: `--- INICIO 3.2 ---

**A) El modo "Análisis de Datos" de ChatGPT y Claude**

Imagina que tienes un analista de datos trabajando exclusivamente para ti. Alguien que puede recibir tus archivos de Excel, CSV o incluso PDFs, procesarlos al instante, realizar análisis estadísticos complejos, generar gráficos profesionales y explicarte los resultados en un lenguaje que entiendes. Eso es exactamente lo que ofrecen los modos de análisis de datos de ChatGPT (llamado Advanced Data Analysis o antes Code Interpreter) y Claude (con su capacidad de procesamiento de archivos y análisis).

**¿Qué es exactamente el modo de análisis de datos?**

Tanto ChatGPT como Claude permiten subir archivos directamente a la conversación. Pero la diferencia entre simplemente subir un archivo y usar el modo de análisis de datos es que, en este último, la IA no se limita a leer el archivo: lo procesa activamente. Esto significa que puede ejecutar análisis estadísticos sobre los datos, generar gráficos, calcular métricas, identificar patrones y, en el caso de ChatGPT, incluso escribir y ejecutar código Python real para realizar manipulaciones complejas.

En ChatGPT, esta funcionalidad se llama Advanced Data Analysis (análisis avanzado de datos). Cuando subes un archivo, ChatGPT lo lee, lo interpreta, y si necesita hacer cálculos o gráficos, escribe código Python, lo ejecuta en un entorno seguro, y te devuelve los resultados. Todo esto ocurre en segundos y sin que tú veas ni una línea de código a menos que quieras.

En Claude, el proceso es similar pero con un enfoque más conversacional. Claude puede leer archivos directamente, analizar su contenido, y aunque no ejecuta código Python de la misma manera que ChatGPT, su capacidad de razonamiento le permite hacer análisis profundos, identificar patrones y generar insights de forma muy precisa.

**¿Cómo se activa?**

En ChatGPT, la función de análisis de datos está disponible en las versiones de pago (ChatGPT Plus, Pro y Team). Para usarla, simplemente arrastra tu archivo directamente al cuadro de texto de la conversación o haz clic en el botón de adjuntar archivo. Una vez que el archivo se ha cargado, escribe tu solicitud de análisis en lenguaje natural. ChatGPT automáticamente activará el modo de análisis si detecta que tu petición requiere procesamiento de datos.

En Claude, también puedes subir archivos directamente a la conversación. Claude los leerá y procesará. Para análisis más complejos, puedes usar la versión de pago (Claude Pro) que tiene mayor capacidad de procesamiento.

**Capacidades principales del análisis de datos con IA**

Las capacidades son sorprendentemente amplias y cubren prácticamente cualquier necesidad de análisis que puedas tener en tu oficina:

**Lectura de múltiples formatos de archivo**: Puedes subir archivos Excel (.xlsx, .xls), CSV, PDF, archivos de texto, JSON, e incluso imágenes con datos. La IA leerá y estructurará la información de cada formato.

**Análisis estadístico completo**: La IA puede calcular medias, medianas, desviaciones estándar, percentiles, correlaciones, pruebas de significancia, y cualquier métrica estadística que necesites.

**Generación de gráficos profesionales**: Creará gráficos de barras, líneas, circulares, dispersión, histogramas, mapas de calor, box plots, y muchos más, listos para ser descargados e insertados en tus informes.

**Limpieza y transformación de datos**: Puede detectar y corregir errores, rellenar valores faltantes, transformar formatos, y preparar los datos para el análisis.

**Identificación de patrones y tendencias**: Examina los datos en busca de tendencias, estacionalidad, patrones repetitivos y anomalías.

**Respuestas a preguntas de negocio**: No solo hace cálculos, sino que responde a preguntas complejas como: "¿Qué factores influyen más en la satisfacción del cliente?" o "¿Qué perfil de cliente tiene mayor probabilidad de comprar este producto?"

**Generación de tablas resumen**: Crea tablas dinámicas, tablas de frecuencias, matrices de correlación y cualquier otra estructura tabular que necesites.

**Limitaciones y mejores prácticas**

Es importante conocer las limitaciones para usar la herramienta de forma profesional:

**Límite de tamaño de archivo**: ChatGPT tiene un límite de tamaño para los archivos que puedes subir (generalmente 100-500 MB dependiendo del plan). Para archivos muy grandes, considera dividirlos en partes más pequeñas.

**Privacidad de datos**: Al igual que con cualquier herramienta de IA pública, no debes subir datos confidenciales, personales o sujetos a protección legal sin anonimizarlos primero. Repasa las pautas de privacidad de la sección 1.1.

**Precisión en datos numéricos específicos**: Aunque la IA es muy precisa con análisis generales, para cálculos financieros exactos o reportes que requieran precisión milimétrica, siempre verifica los resultados críticos.

**Dependencia de la calidad de los datos**: El análisis solo será tan bueno como los datos que le proporciones. Si tus datos tienen errores, la IA los heredará. Dedica tiempo a la limpieza previa.

**Interpretación contextual**: La IA puede identificar patrones, pero la interpretación final de qué significan esos patrones para tu negocio debe ser siempre humana.

> **Consejo Práctico:** Para obtener los mejores resultados, trata a la IA como tratarías a un analista júnior: dale contexto sobre qué representan los datos, cuál es el objetivo del análisis, y qué tipo de respuesta esperas. Un buen prompt de análisis incluye el contexto de negocio, no solo los datos.

---

**B) Análisis de datos subiendo archivos**

La verdadera potencia de esta funcionalidad se despliega cuando trabajas con tus archivos reales. A continuación, desarrollamos múltiples ejemplos completos con prompts detallados que puedes adaptar directamente a tu trabajo.

**Ejemplo 1: Análisis de ventas para reunión comercial**

Escenario: Eres el asistente de dirección de una empresa que vende material de oficina. Tienes un Excel con las ventas de los últimos 12 meses. Necesitas preparar un informe para la reunión comercial de mañana.

Prompt completo para la IA: "Te voy a subir un archivo Excel con las ventas de los últimos 12 meses de nuestra empresa de material de oficina. Las columnas son: Fecha, Producto, Categoría (Papelería, Tóner, Mobiliario, Informática), Cantidad, Precio unitario, Coste unitario, Vendedor, Región. Necesito que realices el siguiente análisis y me lo entregues como un informe ejecutivo listo para presentar:

1. Calcula las ventas totales por mes y presenta los datos en una tabla y un gráfico de líneas.
2. Ranking de productos más vendidos (top 10) con gráfico de barras.
3. Margen de beneficio por categoría (ingresos menos costes, dividido por ingresos). Identifica qué categoría es más rentable y cuál menos.
4. Comparativa de rendimiento entre vendedores: ventas totales, número de transacciones y ticket medio.
5. Rendimiento por región: qué región vende más y cuál tiene mejor margen.
6. Identifica valores atípicos: ventas inusualmente altas o bajas que merezcan atención.
7. Dame tres recomendaciones accionables basadas en los datos."

La IA procesará el archivo y generará un informe completo con tablas y gráficos. Las recomendaciones serán específicas para tus datos, no genéricas.

**Ejemplo 2: Análisis de encuesta de satisfacción de clientes**

Escenario: Tu departamento ha realizado una encuesta de satisfacción con 15 preguntas valoradas del 1 al 5, más preguntas abiertas de comentarios. Tienes 1.200 respuestas en un archivo CSV.

Prompt: "Subo un CSV con las respuestas de nuestra última encuesta de satisfacción. Las columnas son: ID Cliente, Fecha, y las puntuaciones de las 15 preguntas (P1 a P15), más una columna de Comentarios abiertos. Necesito el siguiente análisis:

1. Puntuación media general y por cada pregunta. Identifica las 3 preguntas con puntuación más alta y las 3 con puntuación más baja.
2. Distribución de respuestas para cada pregunta: cuántos 1s, 2s, 3s, 4s y 5s ha recibido cada una.
3. Calcula el Net Promoter Score (NPS) asumiendo que las preguntas P1, P2 y P3 miden satisfacción general. El NPS se calcula como: (Promotores (4-5) - Detractores (1-2)) / Total * 100.
4. Análisis de sentimiento de los comentarios abiertos: clasifícalos como positivos, negativos o neutrales, y dime cuáles son los temas más mencionados en cada categoría.
5. ¿Hay alguna correlación entre la puntuación de una pregunta y otra? Por ejemplo, ¿los clientes que puntúan bajo en P1 también tienden a puntuar bajo en alguna otra?
6. Genera un gráfico de barras apiladas que muestre la distribución de respuestas por pregunta, con colores que vayan de rojo (puntuación 1) a verde (puntuación 5)."

La IA no solo te dará los números, sino que podrá decirte que, por ejemplo, "el 40% de los clientes que puntúan bajo en 'tiempo de entrega' también puntúan bajo en 'comunicación con el vendedor'", lo que te da una pista sobre dónde intervenir.

**Ejemplo 3: Análisis financiero de gastos departamentales**

Escenario: Eres el asistente de la dirección financiera y te han pedido un análisis de los gastos del último trimestre para identificar oportunidades de ahorro.

Prompt: "Subo un archivo Excel con todos los gastos del tercer trimestre de 2025. Las columnas son: Fecha, Departamento, Categoría de gasto (Viajes, Material, Servicios, Formación, Equipos), Proveedor, Importe, Centro de coste, y Aprobado por. Necesito:

1. Gasto total por departamento y por categoría, en una tabla dinámica con departamentos en filas y categorías en columnas.
2. Identifica qué departamentos se han saltado el presupuesto mensual (presupuesto mensual por departamento: Ventas 50.000, Marketing 30.000, Operaciones 40.000, RRHH 15.000, IT 25.000).
3. Top 10 de proveedores por volumen de gasto.
4. Evolución del gasto semana a semana durante el trimestre, con gráfico de líneas.
5. Identifica gastos inusuales o potencialmente erróneos (importes muy superiores a la media de esa categoría).
6. Dame una lista de 5 oportunidades de ahorro basadas en los datos, con el importe estimado de ahorro cada una."

**Ejemplo 4: Análisis de recursos humanos (rotación y absentismo)**

Escenario: En RRHH te piden un análisis de los datos de empleados para identificar patrones de rotación.

Prompt: "Adjunto un archivo con datos de empleados de los últimos 3 años. Las columnas incluyen: ID Empleado, Departamento, Fecha de contratación, Fecha de salida (si aplica), Edad, Género, Salario, Nivel educativo, Número de ausencias en el último año, Puntuación en evaluación de desempeño. Quiero:

1. Tasa de rotación anual por departamento (empleados que se fueron / plantilla media).
2. Perfil del empleado que se va: ¿hay patrones por edad, salario, departamento o nivel educativo?
3. Relación entre absentismo y desempeño: ¿los empleados con más ausencias tienen peores evaluaciones?
4. Distribución salarial por departamento y nivel educativo.
5. Antigüedad media de los empleados actuales por departamento.
6. Genera un gráfico que muestre la evolución de la plantilla en el tiempo (altas y bajas por mes)."

**Cómo hacer preguntas de negocio y obtener respuestas accionables**

La diferencia entre un análisis descriptivo y uno valioso para la empresa está en cómo formulas las preguntas. Las preguntas de negocio efectivas tienen estas características:

**Son específicas**: En lugar de "analiza estos datos", di "dime qué producto tiene el peor margen y por qué".

**Piden acción**: En lugar de "muéstrame las ventas por región", di "dime en qué región deberíamos invertir más marketing según el rendimiento actual".

**Incluyen contexto**: Explica qué significan los datos y qué objetivo persigues.

**Solicitan comparaciones**: "Compara el rendimiento de este año con el del año anterior", "Compara nuestra tasa de conversión con el promedio del sector".

**Piden priorización**: "Ordena los departamentos por eficiencia de gasto", "Identifica los 3 problemas más urgentes según los datos".

> **Ejemplo de negocio real:** En lugar de preguntar "¿Cuántos clientes compraron en diciembre?", una pregunta de negocio sería: "¿Qué perfil de cliente que compró en diciembre tiene mayor probabilidad de volver a comprar en enero? Dame una descripción detallada de ese perfil para orientar nuestra campaña de retargeting."

---

**C) Generación de gráficos con lenguaje natural**

La capacidad de generar gráficos profesionales simplemente describiéndolos es quizás la funcionalidad más visualmente impactante de estas herramientas. Ya no necesitas navegar por menús interminables de Excel ni recordar qué tipo de gráfico es mejor para cada tipo de dato. Simplemente describes lo que quieres visualizar y la IA lo crea.

**Tipos de gráficos y cuándo usar cada uno**

Cada tipo de gráfico tiene un propósito específico. Saber cuál elegir según tus datos y tu objetivo es una habilidad profesional valiosa.

**Gráfico de barras**: Es el más versátil y el más utilizado. Sirve para comparar categorías entre sí: ventas por producto, gastos por departamento, resultados por región. Las barras pueden ser verticales (columnas) u horizontales (barras). Las barras horizontales son mejores cuando tienes muchas categorías o nombres largos. Úsalo siempre que necesites comparar valores discretos.

**Gráfico de líneas**: Es el rey de las series temporales. Muestra la evolución de una o varias variables a lo largo del tiempo: ventas por mes, precio de un producto en el tiempo, crecimiento de la plantilla. Las líneas permiten ver tendencias, estacionalidad y puntos de inflexión. No uses líneas para datos que no son temporales; para eso están las barras.

**Gráfico circular o de pastel**: Muestra la proporción de cada categoría respecto al total. Sirve para ver la composición de un todo: cuota de mercado, distribución del presupuesto, porcentaje de ventas por canal. Limitación: no funciona bien con más de 5 o 6 categorías. Si tienes muchas categorías pequeñas, agrúpalas en "Otros".

**Gráfico de dispersión**: Muestra la relación entre dos variables numéricas. Cada punto representa un dato con sus valores en el eje X y el eje Y. Úsalo para explorar correlaciones: relación entre inversión en publicidad y ventas, entre precio y demanda, entre años de experiencia y salario. La IA puede añadir la línea de tendencia para hacer la relación más visible.

**Histograma**: Muestra la distribución de una variable numérica agrupada en intervalos. Sirve para ver cómo se distribuyen los datos: distribución de edades de clientes, distribución de importes de factura, distribución de puntuaciones. Es ideal para identificar si los datos siguen una distribución normal o tienen sesgos.

**Mapa de calor**: Visualiza la intensidad de una variable en una matriz bidimensional usando colores. Muy útil para ver patrones en datos con dos dimensiones: ventas por producto y por mes, incidencias por día de la semana y hora, correlaciones entre múltiples variables.

**Box plot o diagrama de caja y bigotes**: Muestra la distribución de una variable numérica mostrando mediana, cuartiles y valores atípicos. Es excelente para comparar distribuciones entre grupos: distribución salarial por departamento, distribución de tiempos de entrega por transportista.

**Prompts para generar gráficos específicos**

**Gráfico de barras**: "Con los datos de ventas por producto que acabas de calcular, genera un gráfico de barras horizontales. En el eje Y pon los nombres de los productos y en el eje X las ventas totales. Ordena las barras de mayor a menor. Usa un color azul degradado y añade las etiquetas con los valores al final de cada barra."

**Gráfico de líneas**: "Crea un gráfico de líneas que muestre la evolución mensual de las ventas de los últimos dos años. Quiero dos líneas: una para ventas online y otra para ventas en tienda física. La línea online en azul y la de tienda en naranja. Añade marcadores en cada punto de datos. Incluye una leyenda y un título que diga 'Evolución de ventas 2024-2025 por canal'."

**Gráfico circular**: "Genera un gráfico circular con la distribución de gastos por departamento. Usa colores diferentes para cada departamento. Muestra el porcentaje dentro de cada porción. Si algún departamento representa menos del 5%, agrúpalo en una categoría 'Otros'. Extrae la porción más grande separándola del resto."

**Gráfico de dispersión con tendencia**: "Crea un gráfico de dispersión donde el eje X sea el gasto en marketing y el eje Y sean las ventas. Cada punto debe representar un mes diferente. Añade la línea de regresión lineal y muéstrame la ecuación de la recta y el valor de R cuadrado debajo del gráfico."

**Histograma**: "Genera un histograma con la distribución de edades de nuestros clientes. Usa intervalos de 5 años (20-25, 26-30, etc.). Colorea las barras en un gradiente de azul claro a oscuro según la frecuencia. Añade una línea vertical que marque la edad media."

**Personalización de colores, etiquetas y formatos**

La IA te permite un nivel de personalización que haría que cualquier diseñador gráfico quedara impresionado. Puedes controlar prácticamente todos los aspectos visuales del gráfico mediante instrucciones en lenguaje natural.

**Colores**: "Usa la paleta de colores corporativos de nuestra empresa: azul marino #1B2A4A, gris corporativo #6B7280, y verde accent #10B981. El título debe ir en azul marino y las barras en gris con la barra más alta en verde accent."

**Etiquetas**: "Añade etiquetas de valor encima de cada barra. Las etiquetas deben tener tamaño de fuente 10 y color gris oscuro. El título del gráfico debe ser 'Ventas por Región - 2025' en negrita y tamaño 14. Los títulos de los ejes deben ser 'Región' para el eje X y 'Ventas en euros' para el eje Y."

**Formato de números**: "Los valores en el eje Y deben mostrarse con formato de miles (1K, 2K, etc.). Las etiquetas de valor deben mostrar dos decimales. La leyenda debe ir en la parte inferior del gráfico, no en la derecha."

**Anotaciones**: "Añade una anotación en el punto más alto del gráfico de líneas con la fecha y el valor exacto. Dibuja una línea punteada horizontal en el valor medio de todas las ventas y etiquétala como 'Media anual'."

**Exportación**: Una vez que el gráfico está generado, puedes descargarlo como imagen PNG, SVG o incluso pedir a la IA que te dé los datos en formato tabla para que puedas recrear el gráfico en Excel con más control.

> **Consejo Práctico:** Cuando pidas un gráfico, incluye siempre el propósito del mismo, no solo el tipo. Decir "Quiero un gráfico de barras de ventas por producto" es funcional. Pero decir "Necesito un gráfico de barras de ventas por producto para mostrar en una reunión de dirección cuáles son nuestros productos estrella y cuáles los que lastran los resultados" permite a la IA adaptar colores, etiquetas y enfoque al contexto.

---

**D) Generación automática de presentaciones**

El paso final del flujo de análisis de datos es comunicar los hallazgos. Y aquí también la IA puede ahorrarte horas de trabajo. Existen herramientas diseñadas específicamente para convertir tus datos y análisis en presentaciones profesionales listas para exponer.

**Gamma App: de datos a presentación en segundos**

Gamma es una herramienta de presentaciones impulsada por IA que puede generar diapositivas completas a partir de texto, datos o archivos. A diferencia de PowerPoint tradicional, en Gamma no arrastras elementos uno a uno: describes lo que quieres y la IA construye las diapositivas.

**¿Cómo funciona Gamma?**

El flujo típico es: 1) Subes tu documento, PDF o datos, o pegas un texto con el contenido. 2) Seleccionas una plantilla de diseño. 3) La IA genera una presentación completa con diapositivas, texto, tablas y gráficos. 4) Revisas, editas y personalizas al gusto. 5) Exportas a PDF, PPTX o compartes online.

**Prompt para Gamma**: "Crea una presentación de 8 diapositivas sobre el análisis de ventas del último año de nuestra empresa de material de oficina. La audiencia es el equipo directivo. La estructura debe ser: 1) Portada con título 'Análisis de Ventas 2025' y subtítulo 'Informe para Dirección', 2) Resumen ejecutivo con los 3 hallazgos principales, 3) Evolución mensual de ventas, 4) Productos más vendidos y márgenes, 5) Rendimiento por canal (online, tienda, B2B), 6) Análisis por regiones, 7) Oportunidades de mejora identificadas, 8) Próximos pasos y recomendaciones. Usa tono profesional, colores corporativos azul y blanco, e incluye espacio para gráficos."

**Copilot en PowerPoint: la IA dentro de tu presentación**

Microsoft ha integrado Copilot directamente en PowerPoint, permitiéndote crear presentaciones a partir de documentos existentes o de prompts.

**¿Cómo funciona Copilot en PowerPoint?**

Dentro de PowerPoint, puedes abrir el panel de Copilot y usar comandos como: "Crea una presentación a partir de este archivo de Word", "Añade una diapositiva que resuma los datos de este Excel", "Rediseña esta diapositiva con un diseño más moderno", "Añade un gráfico de barras con los datos de ventas por región", "Convierte esta lista con viñetas en tres diapositivas separadas con imágenes".

Copilot leerá el contenido de tu documento o los datos de tu Excel y generará diapositivas con texto, tablas y gráficos. Las transiciones y animaciones se aplican automáticamente.

**Flujo completo con Copilot en PowerPoint**: 

1. Tienes un análisis de datos generado por ChatGPT o Claude.
2. Copias las conclusiones principales.
3. Abres PowerPoint y activas Copilot.
4. Escribes: "Crea una presentación de 6 diapositivas sobre el análisis de ventas anuales usando estas conclusiones: [pegas tus conclusiones]."
5. Copilot genera la presentación con estructura, diseño y formato.
6. Revisas y ajustas detalles.

**Beautiful.ai: presentaciones con diseño inteligente**

Beautiful.ai es otra herramienta que merece mención porque automatiza el diseño gráfico de las presentaciones. A diferencia de Gamma que genera contenido, Beautiful.ai se centra en que el diseño sea impecable sin que tú hagas nada. Tú añades contenido y la herramienta ajusta automáticamente la maquetación, los espaciados, las alineaciones y la jerarquía visual.

**¿Cuándo usar Beautiful.ai?**

Es ideal cuando ya tienes el contenido y los gráficos preparados (quizás generados con ChatGPT o Claude) y necesitas que la presentación luzca profesional sin perder horas en diseño. Simplemente pegas tus gráficos y texto, y Beautiful.ai se encarga del diseño.

**Flujo completo: De Excel a presentación lista en 4 pasos**

Este es el flujo de trabajo que transformará tu productividad como profesional de análisis de datos:

**Paso 1: Prepara tus datos en Excel o Google Sheets.** Asegúrate de que estén limpios y estructurados. Nombra bien las columnas y elimina filas o columnas vacías.

**Paso 2: Sube los datos a ChatGPT o Claude y pide el análisis.** Usa los prompts detallados que hemos visto en la sección B. Pide tanto el análisis como los gráficos. Descarga los gráficos generados en formato PNG.

**Paso 3: Copia las conclusiones y los gráficos.** Extrae los insights más importantes y las visualizaciones clave. Puedes pedir a la IA que resuma el análisis en 5-7 puntos clave que serán tus diapositivas.

**Paso 4: Genera la presentación.** Tienes tres opciones según la herramienta que prefieras:

Opción A (Gamma): Pega todo el análisis en Gamma y pide que genere la presentación. En menos de 2 minutos tendrás una presentación completa con diseño profesional, gráficos incluidos y estructura lógica.

Opción B (Copilot en PowerPoint): Abre PowerPoint, activa Copilot y pega el resumen del análisis. Copilot generará las diapositivas. Luego inserta manualmente los gráficos descargados.

Opción C (Beautiful.ai): Crea una presentación nueva, pega el contenido diapositiva por diapositiva, inserta los gráficos descargados, y Beautiful.ai ajustará el diseño automáticamente para que todo se vea profesional.

**Ejemplo completo del flujo:**

1. Tienes un Excel con 12 meses de ventas de tu empresa.
2. Se lo subes a ChatGPT y le pides: "Analiza estas ventas en profundidad y dame un informe ejecutivo con gráficos."
3. ChatGPT devuelve: 4 gráficos (evolución mensual, top productos, margen por categoría, rendimiento por región) y 5 conclusiones clave.
4. Abres Gamma.app, creas nuevo proyecto, pegas el texto del análisis y subes los gráficos.
5. Gamma genera una presentación de 6 diapositivas con los gráficos insertados.
6. Revisas, ajustas algún texto, y exportas en PDF para compartir con la dirección.
7. Tiempo total invertido: 15-20 minutos. Sin IA, el mismo trabajo te habría llevado 3-4 horas.

> **Alerta:** Aunque la IA genera presentaciones rápidamente, siempre revisa el contenido antes de presentarlo. La IA puede cometer errores en los datos, generar textos genéricos que no reflejen exactamente tu realidad, o incluir afirmaciones que necesiten matizarse. La presentación final debe llevar tu firma profesional, no la de la IA.

> **Consejo Práctico:** Crea una plantilla de presentación corporativa en Gamma, PowerPoint o Beautiful.ai con los colores, logos y tipografía de tu empresa. Así, cuando generes presentaciones con IA, el resultado será consistente con la imagen de marca. Una inversión de 30 minutos en crear la plantilla te ahorrará horas cada vez que generes una presentación.

---

**Ejercicios Prácticos - Sección 3.2**

**Ejercicio 1: Subir un archivo y pedir un análisis completo**

*Objetivo:* Practicar el análisis de datos subiendo archivos reales a una IA.

*Instrucciones:*
1. Prepara un archivo Excel o CSV con datos de tu trabajo (ventas, gastos, encuestas, etc.). Si no tienes datos reales, crea uno ficticio con al menos 100 filas.
2. Abre ChatGPT Plus (o Claude Pro) y sube el archivo arrastrándolo al chat.
3. Pide: "Analiza estos datos en profundidad. Dame: 1) Resumen ejecutivo con los 3 hallazgos principales, 2) Tabla de totales por categoría, 3) Gráfico de evolución temporal, 4) Valores atípicos, 5) Tres recomendaciones accionables."
4. Revisa cada sección del análisis. ¿Los números coinciden con tus datos?
5. Descarga los gráficos generados.
6. Pide ajustes: "Regenera el gráfico de barras pero ordenado de mayor a menor y con etiquetas de valor."

*Tiempo estimado:* 25 minutos.

---

**Ejercicio 2: Generar gráficos con descripciones en lenguaje natural**

*Objetivo:* Practicar la creación de gráficos profesionales sin usar menús.

*Instrucciones:*
1. Usa los datos del ejercicio anterior (o sube un nuevo archivo).
2. Genera estos 5 gráficos, cada uno con una descripción en lenguaje natural:
   - "Crea un gráfico de barras horizontales con las ventas por producto, ordenadas de mayor a menor. Usa color azul corporativo. Añade etiquetas de valor al final de cada barra."
   - "Genera un gráfico de líneas con la evolución mensual de ventas de los últimos 12 meses. Añade una línea punteada que marque el promedio."
   - "Crea un gráfico circular con la distribución de gastos por departamento. Extrae la porción más grande."
   - "Genera un gráfico de dispersión con gasto en marketing (eje X) vs ventas (eje Y). Añade la línea de tendencia y muestra el R²."
   - "Crea un histograma con la distribución de edades de clientes en intervalos de 10 años."
3. Descarga cada gráfico y compáralo con lo que pediste.
4. Ajusta los que no quedaron como esperabas pidiendo cambios específicos.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 3: Crear una presentación automática**

*Objetivo:* Practicar el flujo completo de datos a presentación.

*Instrucciones:*
1. Usa el análisis del ejercicio 1.
2. Pide a la IA: "Resume este análisis en 5 puntos clave que servirán como diapositivas para una presentación ejecutiva."
3. Abre Gamma.app (gamma.app) y crea una nueva presentación.
4. Pega el resumen y pide que genere la presentación.
5. Revisa las diapositivas generadas: ¿El contenido es correcto? ¿El diseño es profesional?
6. Inserta los gráficos que descargaste en el ejercicio 2.
7. Ajusta textos, colores y diseño según las necesidades de tu empresa.
8. Exporta la presentación en PDF.
9. Mide el tiempo total: ¿Cuánto tardaste vs. cuánto habrías tardado haciéndolo manualmente?

*Tiempo estimado:* 35 minutos.

---

**Ejercicio 4: Análisis de encuesta de satisfacción**

*Objetivo:* Practicar un caso de uso real y completo.

*Instrucciones:*
1. Crea un archivo CSV con datos ficticios de una encuesta de satisfacción con 50 respuestas y 5 preguntas valoradas del 1 al 5.
2. Sube el archivo a ChatGPT o Claude.
3. Pide: "Analiza esta encuesta de satisfacción. Dame: 1) Puntuación media general y por pregunta, 2) Las 2 preguntas con mejor y peor puntuación, 3) Distribución de respuestas (cuántos 1s, 2s, 3s, 4s y 5s por pregunta), 4) Gráfico de barras apiladas con la distribución, 5) Tres conclusiones y dos recomendaciones."
4. Verifica los cálculos manualmente con una muestra de los datos.
5. Pide un análisis adicional: "¿Hay correlación entre la pregunta 1 y la pregunta 3? ¿Los clientes que puntúan bajo en una también puntúan bajo en la otra?"
6. Genera un informe de una página con los hallazgos principales.

*Tiempo estimado:* 30 minutos.

---

**Cuestionario de Autoevaluación - Sección 3.2**

**Pregunta 1:**

Has subido los datos de ventas anuales a ChatGPT y te ha generado un análisis completo con varios gráficos. Para convertirlo en una presentación ejecutiva para la dirección, ¿cuál de las siguientes opciones representa el flujo más eficiente y profesional?

a) Abrir PowerPoint y copiar manualmente cada número y gráfico desde la respuesta de ChatGPT, diapositiva por diapositiva, y luego ajustar el diseño manualmente.
b) Usar exclusivamente la función de Copilot en PowerPoint para que genere la presentación desde cero sin necesidad de pasar por ChatGPT.
c) Usar un flujo combinado: generar análisis y gráficos con ChatGPT, y luego importar los resultados en una herramienta como Gamma o Copilot en PowerPoint para la generación automática de la presentación, revisando y ajustando antes de finalizar.
d) Pedir a ChatGPT que genere directamente un archivo PowerPoint descargable con todas las diapositivas.

**Pregunta 2:**

Estás analizando datos de una encuesta de satisfacción con preguntas valoradas del 1 al 5. Necesitas entender la distribución de respuestas para cada pregunta y comparar visualmente todas las preguntas entre sí. ¿Qué tipo de gráfico es el más adecuado para este propósito?

a) Un gráfico de líneas que conecte las puntuaciones medias de cada pregunta.
b) Un gráfico de barras apiladas que muestre, para cada pregunta, cuántas respuestas de cada valor (1 a 5) se recibieron, usando colores degradados del rojo al verde.
c) Un gráfico circular para cada pregunta que muestre la proporción de cada puntuación.
d) Una tabla con los porcentajes de cada puntuación sin gráfico, porque los gráficos de encuestas son engañosos.

**Pregunta 3:**

La IA te ha generado un gráfico de dispersión que muestra la relación entre el gasto en publicidad y las ventas mensuales, con una línea de tendencia y un valor de R cuadrado de 0,85. ¿Cuál de las siguientes interpretaciones es la correcta desde un punto de vista profesional?

a) El R cuadrado de 0,85 demuestra que la publicidad causa el 85% de las ventas, por lo que duplicar la publicidad duplicaría las ventas.
b) El R cuadrado de 0,85 indica que el 85% de la variación en las ventas se explica por el gasto en publicidad según el modelo lineal. Esto sugiere una relación fuerte, pero no implica causalidad y no garantiza que la relación se mantenga si se duplica el gasto.
c) Un R cuadrado de 0,85 es bajo, lo que significa que la publicidad no está relacionada con las ventas.
d) El R cuadrado solo sirve para gráficos de barras; en gráficos de dispersión no es una métrica válida.

---

**Respuestas explicadas**

**Respuesta Pregunta 1: c**

La opción correcta es la c. El flujo combinado es el más eficiente y profesional: usas ChatGPT o Claude para el análisis pesado (donde son más potentes) y luego herramientas especializadas en presentaciones (Gamma, Copilot en PowerPoint, Beautiful.ai) para la parte visual y narrativa. Copiar manualmente (opción a) es ineficiente y propenso a errores. Usar solo Copilot (opción b) es limitado porque el análisis de datos de ChatGPT suele ser más profundo. La opción d no es técnicamente posible; ChatGPT no genera archivos PowerPoint descargables.

**Respuesta Pregunta 2: b**

La opción correcta es la b. Un gráfico de barras apiladas es ideal para este caso porque permite ver simultáneamente la distribución de respuestas para cada pregunta (cuántos 1s, 2s, 3s, 4s y 5s) y comparar visualmente entre preguntas los patrones de respuesta. El degradado de colores del rojo al verde aporta una dimensión semántica intuitiva. El gráfico de líneas (opción a) solo mostraría medias, perdiendo información sobre la distribución. Los gráficos circulares individuales (opción c) serían tediosos de comparar entre 15 preguntas. La tabla sin gráfico (opción d) es menos visual y más difícil de interpretar rápidamente en una presentación.

**Respuesta Pregunta 3: b**

La opción correcta es la b. El R cuadrado de 0,85 indica que el modelo lineal explica el 85% de la variación observada en las ventas, lo que sugiere una relación estadística fuerte entre gasto en publicidad y ventas. Sin embargo, esto no demuestra causalidad (opción a incorrecta) y no garantiza que la relación sea lineal fuera del rango de datos observados. Un R cuadrado de 0,85 se considera alto en la mayoría de contextos (opción c incorrecta). El R cuadrado es perfectamente válido en regresión lineal con gráficos de dispersión (opción d incorrecta). La interpretación profesional correcta es: hay una relación fuerte, investiga si es causal con análisis adicional, y sé prudente al hacer predicciones fuera del rango de datos observados.

--- FIN 3.2 ---`,
      },
    ],
  },
  {
    id: 4,
    slug: 'automatizacion-procesos-ia',
    title: 'Automatización de Procesos con IA',
    level: 'Nivel Avanzado',
    levelKey: 'avanzado',
    icon: Zap,
    objective: 'Hacer que las herramientas trabajen solas en segundo plano.',
    description: 'El salto definitivo: aprenderás a crear flujos de trabajo automatizados donde la IA toma decisiones, procesa información y ejecuta tareas sin intervención humana. El nivel experto para un administrativo.',
    duration: '5 semanas',
    sections: [
      {
        title: '4.1. Automatización No-Code (Sin Código) con IA',
        content: `Imagina que cada manana llegas a tu oficina, enciendes el ordenador y te encuentras con 47 correos. De esos, 12 son facturas de proveedores que alguien tiene que procesar una por una. Abres cada PDF, copias el importe, el numero de factura, el proveedor y la fecha, y luego pegas esos datos en una hoja de Excel. Despues escribes un correo de confirmacion al proveedor. Todo esto te lleva unos 3 o 4 minutos por factura. Casi una hora cada dia.

La automatizacion **No-Code** (sin codigo) es exactamente la solucion para esto. No necesitas saber programar ni escribir ni una sola linea de codigo. Necesitas saber disenar procesos: "Si ocurre A, entonces haz B, y luego C". Es como crear una receta de cocina.

**El concepto fundamental: los triggers y las acciones**

Toda automatizacion comienza con un **Trigger** (disparador). Es el evento que pone en marcha todo el proceso. Puede ser "cuando llegue un correo", "cuando se anada una fila en Google Sheets", "cuando alguien suba un archivo a una carpeta". Despues del trigger vienen las **Acciones**: lo que quieres que ocurra como consecuencia. Y entre medias, la IA actua como el cerebro que entiende, clasifica, extrae y decide.

**Zapier: la navaja suiza de la automatizacion**

Zapier es probablemente la herramienta mas conocida del mundo No-Code. Un **Zap** es una receta que conecta dos o mas aplicaciones. Zapier se conecta con mas de 5000 aplicaciones: Gmail, Outlook, Google Sheets, Excel Online, Slack, Trello, Notion, Salesforce, y muchisimas mas.

Un Zap sigue siempre la misma estructura. Primero defines la aplicacion que actuara como disparador. Por ejemplo, "Gmail". Luego eliges el evento exacto: "Cuando llegue un correo con una etiqueta especifica". Despues configuras la conexion: "Buscar correos en la bandeja de entrada que tengan la etiqueta Facturas". Una vez que el Zap se activa, Zapier recoge la informacion del correo.

A continuacion vienen los pasos de accion. Puedes anadir un paso de **Chat con IA** donde le dices al modelo: "Extrae el numero de factura, el importe total, el nombre del proveedor y la fecha de vencimiento del siguiente texto". El modelo analiza el contenido y te devuelve exactamente los campos que le has pedido.

**Ejemplo practico detallado: La factura que se procesa sola**

Pongamos un ejemplo realista. Trabajas en una PYME que recibe entre 20 y 30 facturas al dia. Cada factura llega por correo en formato PDF. Con Zapier, disenas un Zap que hace lo siguiente:

Paso 1 - Trigger: Gmail. Cuando llegue un correo con la etiqueta "FacturasPendientes".

Paso 2 - Accion: Extraer archivo PDF del correo. Zapier descarga automaticamente el PDF adjunto.

Paso 3 - Accion de IA: "Analizar Documento con IA". Le das instrucciones: "Eres un asistente de administracion. Del siguiente documento PDF, extrae estos campos exactos: numero_factura, importe_total en euros, proveedor, fecha_emision en formato DD/MM/AAAA, fecha_vencimiento en formato DD/MM/AAAA, y concepto. Devuelve los resultados en formato JSON."

Paso 4 - Accion: Google Sheets. Anade una nueva fila al final de la hoja "RegistroFacturas" con los valores extraidos.

Paso 5 - Accion: Google Drive. Guarda el PDF original en la carpeta "Facturas/Recibidas/2025".

Paso 6 - Accion: Gmail. Envia un correo de respuesta al proveedor confirmando la recepcion.

Este proceso, que antes te tomaba 3-4 minutos por factura y una hora al dia, ahora ocurre en aproximadamente 30 segundos.

**Make (antes Integromat): el constructor visual de flujos**

Si Zapier es como conectar tuberias sencillas, Make es como construir un panel de control de una nave espacial. Make utiliza un editor visual donde arrastras modulos, los conectas con flechas, y puedes ver el flujo completo de tu automatizacion como si fuera un diagrama.

Make tiene ventajas importantes sobre Zapier: puedes crear bucles ("Para cada archivo en esta carpeta, haz lo siguiente"), filtrar datos ("Solo continua si el importe es mayor de 1000 euros"), almacenar variables temporalmente, y manejar errores ("Si falla la conexion con Excel, intenta de nuevo 2 veces y si vuelve a fallar, enviame un correo de alerta").

**Ejemplo practico con Make: Clasificacion inteligente de correos**

Imagina que trabajas en soporte tecnico y recibes 100 correos al dia. Con Make puedes crear un escenario que:

Trigger: Outlook 365 - Cuando llegue un correo nuevo.

Paso 1 - Modulo de IA: Clasifica el correo. Instruccion: "Clasifica el siguiente correo en UNA de estas categorias: Urgente_Soporte, Pregunta_Facturacion, Solicitud_Nuevo_Servicio, Consulta_General, Correo_Interno, o Spam."

Paso 2 - Filtro: Segun la categoria, el flujo toma un camino distinto. Si es "Spam", termina. Si es "Urgente_Soporte", continua por una ruta especial.

Paso 3A - Ruta Urgencia: Se envia un mensaje inmediato al canal de Slack de soporte con el asunto y el nombre del remitente. Se crea un ticket urgente con prioridad "Critica". Se envia una respuesta automatica al cliente.

Paso 3B - Ruta Facturacion: El sistema busca en una base de datos si el cliente tiene facturas pendientes y adapta la respuesta.

Paso 4 - Registro: Independientemente de la ruta, cada correo se registra en una hoja de Google Sheets con la categoria y la accion tomada.

**Consejos practicos para crear tu primera automatizacion**

1. Identifica el proceso: Elige una tarea que hagas a diario y que siga siempre el mismo patron.
2. Documenta los pasos: Escribe exactamente que haces, en que orden, y que informacion necesitas en cada paso.
3. Busca la herramienta adecuada: Para algo sencillo (2-3 pasos), Zapier es perfecto. Para algo mas complejo, Make es mejor.
4. Construye paso a paso: No crees la automatizacion completa de una vez. Haz el primer paso, pruebalo. Anade el segundo paso, pruebalo otra vez.
5. Prueba con datos reales: Usa un correo verdadero, un archivo real. La IA necesita ver el formato real de tus documentos.
6. Revisa los resultados: Durante la primera semana, revisa cada automatizacion para asegurarte de que funciona correctamente.

**El factor humano: la IA como asistente, no como sustituto**

Estas herramientas no estan aqui para quitarte el trabajo. Estan aqui para quitarte las partes aburridas de tu trabajo. La IA no puede tener una reunion con un cliente complicado, no puede negociar un contrato, no puede entender el contexto politico de una decision empresarial. Pero puede clasificar 200 correos en 3 segundos.

El objetivo es que dejes de ser la persona que copia datos de un PDF a un Excel y te conviertas en la persona que disena el sistema que hace eso automaticamente.

---

**Ejercicios Prácticos - Sección 4.1**

**Ejercicio 1: Mapear un proceso de tu día a día**

*Objetivo:* Identificar una tarea repetitiva y documentarla paso a paso.

*Instrucciones:*
1. Elige una tarea que hagas al menos 3 veces por semana y que siga siempre el mismo patrón.
2. Cronometra cuánto tiempo te lleva cada vez que la haces.
3. Escribe cada paso del proceso como si se lo explicaras a alguien que nunca lo ha hecho.
4. Para cada paso, anota: ¿Cuánto tiempo tarda? ¿Requiere criterio humano o es mecánico?
5. Identifica qué pasos podrían automatizarse con IA.
6. Calcula: Si automatizas esta tarea, ¿cuántas horas ahorrarías al mes?

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 2: Crear tu primera automatización con Zapier (versión gratuita)**

*Objetivo:* Construir un Zap sencillo que conecte dos aplicaciones.

*Instrucciones:*
1. Crea una cuenta gratuita en Zapier (zapier.com).
2. Crea un Zap con este flujo:
   - **Trigger:** Cuando llegue un correo en Gmail con una etiqueta específica.
   - **Acción:** Enviar un mensaje a Slack o un correo de confirmación.
3. Envía un correo de prueba y verifica que el Zap se activa.
4. Añade un paso intermedio de IA: "Extrae el asunto y el remitente del correo."
5. Prueba el Zap completo.
6. Documenta: ¿Qué funcionó bien? ¿Qué fue confuso?

*Nota:* Si no tienes acceso a Zapier, haz el ejercicio conceptualmente: escribe en un documento cómo sería el Zap paso a paso.

*Tiempo estimado:* 40 minutos.

---

**Ejercicio 3: Diseñar un flujo de clasificación de correos**

*Objetivo:* Practicar el diseño de un flujo con IA.

*Instrucciones:*
1. Piensa en los tipos de correos que recibes a diario.
2. Crea una tabla: Tipo de correo | Frecuencia diaria | Tiempo que tarda | ¿Se puede automatizar? | ¿Cómo?
3. Para los correos automatizables, diseña el flujo:
   - Trigger: ¿Qué evento activa el proceso?
   - Paso de IA: ¿Qué debe hacer la IA?
   - Acción final: ¿Qué ocurre después?
4. Elige el flujo más prometedor y escríbelo como un "recetario" paso a paso.

*Tiempo estimado:* 35 minutos.

---

**Ejercicio 4: Calcular el ROI de una automatización**

*Objetivo:* Aprender a justificar una inversión en automatización con datos.

*Instrucciones:*
1. Elige una tarea que hayas mapeado en el ejercicio 1.
2. Calcula: horas semanales, coste por hora, coste anual actual, coste de la herramienta, ahorro neto, ROI.
3. Escribe un "caso de negocio" de un párrafo para presentar a tu jefe.
4. Practica presentar este caso en voz alta.

*Tiempo estimado:* 25 minutos.

---

**Cuestionario de Autoevaluacion - Seccion 4.1**

**Pregunta 1:** En una automatizacion No-Code con Zapier, como se llama el evento que pone en marcha todo el proceso?
a) Accion
b) Trigger (disparador)
c) Flujo
d) Modulo

**Respuesta correcta: b) Trigger (disparador). Es el evento inicial que activa la automatizacion.**

**Pregunta 2:** Tu equipo recibe 100 correos de soporte al dia. Que herramienta y enfoque recomendarias?
a) Hacer una macro de Excel con Visual Basic
b) Usar Make con un modulo de clasificacion por IA y filtros condicionales
c) Contratar a un programador para que cree un sistema desde cero
d) Crear una base de datos en Access con formularios

**Respuesta correcta: b) Make permite crear flujos visuales con modulos de IA, filtros y rutas condicionales.**

**Pregunta 3:** Cual de los siguientes NO es un consejo recomendado para tu primera automatizacion?
a) Identificar una tarea repetitiva que hagas a diario
b) Documentar todos los pasos manuales antes de automatizar
c) Intentar automatizar todos los procesos de tu departamento a la vez
d) Probar la automatizacion paso a paso

**Respuesta correcta: c) Intentar automatizar todo a la vez es la receta segura para el fracaso.**`,
      },
      {
        title: '4.2. Creación de "Asistentes Personalizados" (GPTs o Proyectos)',
        content: `Un **GPT personalizado** es una version adaptada de ChatGPT a la que le has dado instrucciones especificas, conocimientos propios de tu empresa, y una personalidad concreta. Es como tener a un empleado nuevo al que le has entregado el manual de la empresa, le has explicado cual es su rol, y le has dicho exactamente como quieres que hable y se comporte.

**Que es un GPT personalizado y en que se diferencia del ChatGPT normal**

Cuando abres ChatGPT normal, tienes un asistente generalista. Sabe de todo un poco, pero no sabe nada especifico de tu empresa. Si le preguntas "Cual es la politica de devoluciones de nuestra empresa?", ChatGPT normal no tiene ni idea. Un GPT personalizado resuelve exactamente ese problema. Tu le dices de una vez como debe comportarse y le subes los documentos de la empresa. A partir de ahi, cada vez que alguien abre ese GPT, ya tiene toda esa informacion cargada.

**Componentes de un GPT personalizado**

Para crear un GPT, necesitas definir tres grandes bloques:

1. Las instrucciones: Es el corazon de tu asistente. Aqui le explicas que quieres que haga, como quieres que se comporte, que limites debe respetar, y como debe estructurar sus respuestas.

2. Los conocimientos: Son los archivos que le subes para que aprenda la informacion especifica de tu empresa. Pueden ser PDFs, documentos de texto, archivos de Excel, presentaciones, etc. Si la respuesta a una pregunta no esta en esos documentos, el GPT debe decir que no lo sabe.

3. La configuracion: Aqui defines si el GPT puede navegar por internet, generar imagenes, analizar archivos, y cual es el nivel de creatividad de las respuestas.

**Paso a paso: Creando tu primer GPT**

Vamos a crear un GPT para el departamento de recursos humanos. El objetivo: que los empleados puedan preguntar sobre politicas internas, beneficios, procedimientos de vacaciones, etc.

Paso 1: Accede al creador de GPTs. Dentro de ChatGPT, en el menu lateral, haz clic en "Explorar GPTs" y luego en "Crear un GPT".

Paso 2: Describe tu GPT en lenguaje natural: "Voy a crear un asistente para RRHH. Quiero que responda preguntas sobre politicas internas, beneficios, permisos, vacaciones y formacion. Debe usar solo la informacion de los documentos que le suba. Si no sabe algo, debe decirlo claramente."

Paso 3: Sube los documentos de conocimiento. Por ejemplo: el manual del empleado, la politica de vacaciones, el catalogo de beneficios, las preguntas frecuentes de RRHH, el procedimiento para solicitar formacion.

Paso 4: Ajusta las instrucciones detalladas: "Cuando te pregunten sobre vacaciones, primero pregunta al empleado cual es su departamento y antiguedad. Si te preguntan algo que no esta en los documentos, responde que no tienes esa informacion."

Paso 5: Define el tono y estilo: "Responde siempre en espanol neutro. Usa un tono cercano pero profesional. Si la respuesta es larga, estructurala en parrafos cortos con puntos clave."

Paso 6: Prueba el GPT. Preguntale cosas que sepas que estan en los documentos y verifica que las respuestas son correctas.

Paso 7: Compartelo con tu equipo. Tienes tres opciones: solo visible para ti, cualquier persona con el enlace, o publico en la tienda de GPTs.

**Ejemplo practico: GPT de atencion al cliente para una tienda online**

Imagina que trabajas en una tienda online de electronica. Tu equipo recibe decenas de preguntas repetitivas cada dia. Un GPT personalizado puede responder a estas preguntas automaticamente.

Los documentos que subirias serian: el catalogo de productos actualizado, la politica de devoluciones y garantias, los plazos de entrega, las preguntas frecuentes, y los terminos y condiciones de venta.

Las instrucciones detalladas serian: "Eres el asistente virtual de atencion al cliente. Responde preguntas sobre productos, pedidos, envios y devoluciones. Usa SOLO la informacion de los documentos proporcionados. No inventes precios ni especificaciones. Si no encuentras la respuesta, di que no tienes esa informacion."

**Claude Projects: la alternativa para trabajo en equipo**

Mientras que los GPTs de ChatGPT son individuales, **Claude Projects** ofrece un enfoque diferente orientado al trabajo colaborativo. Un Project de Claude es un espacio de trabajo compartido donde un equipo puede subir documentos, tener conversaciones que mantienen el contexto, definir instrucciones personalizadas, e invitar a miembros del equipo.

Diferencias clave: Los GPTs son asistentes independientes que se comparten por enlace. Claude Projects son espacios de trabajo colaborativos donde el contexto se mantiene entre chats y los documentos son gestionados por el equipo.

**Ejemplo practico de Claude Projects:**

Un equipo de marketing crea un Project donde suben el brief del producto, el analisis de la competencia, los datos de investigacion de mercado, y las guias de tono y voz. Cada miembro puede hacer preguntas y todos obtienen las mismas respuestas basadas en los mismos documentos.

**Casos de uso avanzados:**

- Auditor de documentos internos: Un despacho de abogados sube plantillas de contratos y legislacion. Los abogados pegan un contrato y preguntan si cumple la normativa.
- Asistente de onboarding: RRHH crea un GPT con toda la informacion que un nuevo empleado necesita en sus primeros dias.
- Generador de informes corporativos: Un equipo directivo crea un GPT con plantillas oficiales y datos financieros para generar informes.
- Asistente de compliance: Una empresa regulada sube manuales de compliance y normativas internas.

**Buenas practicas y limitaciones**

- Hazlo especializado, no generalista. Es mejor crear asistentes especificos para cada area.
- Revisa y actualiza los documentos periodicamente. La informacion de tu empresa cambia.
- Prueba antes de compartir. Haz pruebas exhaustivas con preguntas reales.
- Ten cuidado con la informacion confidencial. No subas datos personales de clientes ni secretos industriales sin consultar al departamento de seguridad.
- El asistente no reemplaza el juicio humano. Las decisiones importantes siguen siendo humanas.

---

**Ejercicios Prácticos - Sección 4.2**

**Ejercicio 1: Crear tu primer GPT personalizado**

*Objetivo:* Construir un asistente personalizado para una tarea de tu trabajo.

*Instrucciones:*
1. Accede a ChatGPT y ve a "Explorar GPTs" > "Crear un GPT".
2. Elige un área de tu trabajo donde un asistente sería útil. Ejemplos:
   - Asistente de RRHH: responde preguntas sobre políticas internas.
   - Asistente de compras: compara proveedores y genera órdenes.
   - Asistente de marketing: genera copys para redes sociales.
3. Define las instrucciones usando R-C-T-F.
4. Sube al menos 2 documentos de conocimiento (pueden ser ficticios para practicar).
5. Prueba el GPT con al menos 5 preguntas diferentes.
6. Ajusta las instrucciones según los resultados.
7. Si quedas satisfecho, compártelo con un compañero.

*Tiempo estimado:* 45 minutos.

---

**Ejercicio 2: Crear un Claude Project para tu equipo**

*Objetivo:* Practicar la creación de un espacio de trabajo colaborativo.

*Instrucciones:*
1. Si tienes acceso a Claude Pro, crea un nuevo Project.
2. Elige un tema de trabajo en equipo (un proyecto, una campaña, un proceso).
3. Sube al menos 3 documentos relevantes: briefs, datos, guías de estilo, etc.
4. Define las instrucciones del Project: "Este espacio es para [objetivo]. Usa solo la información de los documentos subidos."
5. Invita a un compañero (si es posible) o haz pruebas tú mismo.
6. Haz al menos 5 preguntas diferentes y verifica que las respuestas se basan en los documentos.
7. Anota: ¿Qué preguntas respondió bien? ¿Cuáles no pudo responder?

*Tiempo estimado:* 35 minutos.

---

**Ejercicio 3: Diseñar 3 GPTs para 3 departamentos**

*Objetivo:* Practicar el diseño conceptual de asistentes especializados.

*Instrucciones:*
1. Piensa en 3 departamentos de tu empresa (o de una empresa ficticia).
2. Para cada departamento, diseña un GPT conceptual:
   - Nombre del GPT
   - Rol y propósito
   - Lista de documentos que subirías
   - Instrucciones principales (R-C-T-F)
   - 5 preguntas de prueba
   - Limitaciones y restricciones
3. Compara los 3 diseños: ¿Qué tienen en común? ¿Qué es diferente?
4. Si tienes acceso a ChatGPT Plus, implementa al menos uno de ellos.

*Tiempo estimado:* 40 minutos.

---

**Ejercicio 4: Auditoría de un GPT existente**

*Objetivo:* Aprender a evaluar la calidad de un asistente personalizado.

*Instrucciones:*
1. Si creaste un GPT en el ejercicio 1, úsalo para este ejercicio. Si no, usa uno público de la tienda de GPTs.
2. Haz estas 10 pruebas:
   - Pregunta algo que esté en los documentos.
   - Pregunta algo que NO esté en los documentos.
   - Pide que redacte un documento con un tono específico.
   - Pide que compare dos opciones.
   - Pide que resuma un documento largo.
   - Pide que genere una tabla con datos.
   - Haz una pregunta ambigua para ver cómo la maneja.
   - Pide que explique un concepto técnico en lenguaje sencillo.
   - Pide que identifique errores en un texto.
   - Pide que genere ideas creativas sobre un tema.
3. Para cada prueba, anota: ¿La respuesta fue correcta? ¿El tono fue adecuado? ¿Hubo alucinaciones?
4. Crea un informe de evaluación con puntuación del 1 al 10 para cada categoría.
5. Identifica áreas de mejora y ajusta las instrucciones.

*Tiempo estimado:* 35 minutos.

---

**Cuestionario de Autoevaluacion - Seccion 4.2**

**Pregunta 1:** Que diferencia principal tiene un GPT personalizado de ChatGPT normal?
a) El GPT personalizado es mas rapido
b) El GPT personalizado tiene instrucciones fijas y una base de conocimiento propia que se carga de una vez
c) ChatGPT normal solo funciona en ingles
d) El GPT personalizado puede usar WhatsApp

**Respuesta correcta: b) El GPT personalizado ya tiene las instrucciones y los documentos cargados permanentemente.**

**Pregunta 2:** Tu equipo de marketing quiere usar un asistente con IA para trabajar juntos. Que herramienta es la mas adecuada?
a) Un GPT personalizado publicado como publico
b) Un Project de Claude, porque permite trabajo colaborativo con documentos compartidos
c) ChatGPT normal sin personalizar
d) Una hoja de Excel compartida

**Respuesta correcta: b) Claude Projects esta disenado para equipos que trabajan juntos con la misma base de conocimiento.**

**Pregunta 3:** Al subir documentos a un GPT, cual de las siguientes practicas es INCORRECTA?
a) Subir documentos con informacion actualizada y relevante
b) Subir documentos con datos bancarios de clientes sin consultar al departamento de seguridad
c) Revisar y actualizar los documentos mensualmente
d) Probar el GPT con preguntas reales antes de compartirlo

**Respuesta correcta: b) Es una practica peligrosa incluir datos personales sensibles sin consultar primero con seguridad.**`,
      },
    ],
  },
  {
    id: 5,
    slug: 'creacion-contenido-multimedia',
    title: 'Creación de Contenido y Herramientas Multimedia',
    level: 'Nivel Experto',
    levelKey: 'experto',
    icon: Palette,
    objective: 'Uso de la IA para el soporte visual en presentaciones, manuales de procesos o marketing básico.',
    description: 'Explora el mundo de la creación visual con IA: desde generar imágenes corporativas hasta crear videos de capacitación con avatares digitales. Todo sin necesidad de ser diseñador ni videógrafo.',
    duration: '4 semanas',
    sections: [
      {
        title: '5.1. Generación de Imágenes y Gráficos Profesionales',
        content: `Bienvenidos al corazon de la creacion visual con inteligencia artificial. La IA nos ayuda a redactar textos, analizar datos y organizar ideas. Pero hay un area donde la IA esta revolucionando el dia a dia de las empresas: la generacion de imagenes y graficos. Y no hablo solo de hacer dibujos bonitos. Hablo de crear activos visuales profesionales, listos para produccion, sin necesidad de tener un departamento de diseno ni saber usar Photoshop.

**Midjourney**

Midjourney funciona exclusivamente a traves de Discord. La comunidad comparte sus creaciones, lo que te permite aprender observando lo que otros hacen. Midjourney produce los resultados mas artisticos y sorprendentes. Si necesitas una imagen conceptual de alto impacto, como la portada de un informe anual o una visualizacion metaforica para una presentacion ejecutiva, Midjourney es tu mejor opcion. El comando basico es /imagine prompt, seguido de una descripcion. El verdadero poder esta en los parametros: --ar 16:9 para formato widescreen, --v 6 para usar la version mas reciente, --style raw para obtener imagenes mas fieles a la descripcion.

Ejemplo practico: trabajas en RRHH y necesitas una imagen para una campana interna de bienestar financiero. Tu prompt podria ser: "/imagine prompt professional corporate illustration, diverse team members reviewing financial documents together, warm lighting, clean modern office environment, photorealistic style, soft pastel colors --ar 16:9 --v 6". Midjourney genera cuatro variantes. Puedes usar los botones U (upscale) para ampliar una y V (variate) para crear variaciones.

**DALL-E 3**

DALL-E 3, integrado en ChatGPT Plus y Enterprise, es accesible, conversacional y mucho mas facil de usar. DALL-E 3 entiende prompts largos y complejos con precision asombrosa. Su principal ventaja para entornos corporativos es que no necesitas aprender comandos especiales. Simplemente describes lo que quieres en lenguaje natural. Ademas, al estar dentro de ChatGPT, puedes iterar: "ahora cambia el fondo a blanco", "haz los iconos mas grandes", "pon el logotipo en la esquina superior derecha". Cada vez que pides un cambio, DALL-E regenera la imagen.

**Adobe Firefly**

Adobe Firefly es la apuesta mas corporativa. Firefly esta entrenado con imagenes de Adobe Stock y contenido con licencia, lo que significa que las imagenes generadas son legalmente seguras para uso comercial. Esto es critico cuando trabajas para una empresa que no puede arriesgarse a problemas de copyright. Firefly se integra directamente con Photoshop, Illustrator y Express. Su funcionalidad de "relleno generativo" (generative fill) te permite seleccionar un area de una imagen existente y pedirle a la IA que la rellene con contenido coherente.

**Casos de uso corporativos**

El mas comun son las imagenes para presentaciones. Una presentacion con imagenes genericas de stock transmite "esto lo ha hecho cualquiera". En cambio, imagenes generadas con IA, coherentes en estilo y adaptadas al contenido, transmiten profesionalidad.

Segundo caso: iconos personalizados. Con DALL-E 3, puedes generar sets completos de iconos en un estilo uniforme. Por ejemplo: "iconos de estilo lineal, trazo de 2px, esquinas redondeadas, color azul corporativo, para ventas, marketing, recursos humanos, finanzas, tecnologia."

Tercer caso: contenido para redes sociales. Las empresas necesitan producir imagenes para LinkedIn e Instagram de forma constante. La IA permite generar banners, citas visuales y graficos promocionales en minutos.

Cuarto caso: banners internos. Carteleria digital para la oficina, comunicados visuales para la intranet, o fondos personalizados para videoconferencias.

**Canva con IA integrada**

Canva ha pasado de ser una herramienta de diseno sencilla a una plataforma completa potenciada por IA. Su propuesta de valor es clara: cualquier persona sin conocimientos de diseno puede crear documentos visualmente profesionales.

**Magic Design** te permite subir una imagen o un concepto, y Canva te genera multiples plantillas completas. Por ejemplo, subes una foto de tu equipo y seleccionas "presentacion corporativa". Magic Design genera 10 o 15 presentaciones disenadas, con paletas de colores y tipografias, listas para rellenar.

**Magic Write** es el generador de texto dentro de Canva. Si necesitas redactar el texto de un folleto o una descripcion de producto, puedes hacerlo directamente en el editor sin saltar a otra herramienta.

**Magic Edit** permite modificar elementos especificos de una imagen. Seleccionas un objeto y escribes lo que quieres en su lugar. La IA elimina el objeto original y lo reemplaza manteniendo la iluminacion y sombras coherentes.

**Patrones de prompt para generacion de imagenes corporativas**

Un prompt efectivo tiene varios componentes: el sujeto (que queremos ver), el entorno y contexto (donde ocurre la escena), el estilo visual (realista, ilustracion, plano, 3D), la composicion y formato, la iluminacion y color, y lo que NO queremos.

Ejemplo completo para el header del boletin interno: "Corporate workspace photography style, a diverse team of professionals collaborating around a glass table with digital tablets, bright airy office with floor-to-ceiling windows, natural daylight, warm color palette with beige and soft green accents, photorealistic, 8K quality, wide angle shot --ar 3:1 --v 6"

---

**Ejercicios Prácticos - Sección 5.1**

**Ejercicio 1: Generar tu primera imagen con DALL-E 3**

*Objetivo:* Familiarizarte con la generación de imágenes desde cero.

*Instrucciones:*
1. Abre ChatGPT Plus (o usa la versión gratuita de Bing Image Creator que usa DALL-E 3).
2. Genera estas 5 imágenes, cada una con un prompt diferente:
   - "Icono de estilo lineal, trazo de 2px, color azul, representando 'ventas', fondo blanco."
   - "Ilustración corporativa de un equipo diverso trabajando en una oficina moderna, estilo扁平, colores suaves."
   - "Banner para LinkedIn: fondo azul corporativo con texto 'Innovación en IA' en blanco, estilo profesional."
   - "Infografía visual: 3 pasos para implementar IA en la oficina, estilo minimalista."
   - "Fondo para videoconferencia: oficina virtual moderna con estantería de libros, iluminación cálida."
3. Para cada imagen, anota: ¿El resultado se parece a lo que pediste? ¿Qué cambiarías?
4. Elige la mejor imagen y pide iteraciones: "Ahora cambia el fondo a blanco", "Haz los iconos más grandes".
5. Descarga las imágenes y guárdalas en una carpeta.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 2: Crear un set de iconos corporativos**

*Objetivo:* Practicar la generación de elementos visuales consistentes.

*Instrucciones:*
1. Decide un estilo visual para tus iconos (lineal, relleno, 3D, etc.).
2. Genera un set de 8 iconos para estos conceptos: Ventas, Marketing, RRHH, Finanzas, Tecnología, Operaciones, Legal, Dirección.
3. Usa el mismo prompt base cambiando solo el concepto: "Icono de estilo lineal, trazo de 2px, esquinas redondeadas, color azul corporativo #2563EB, representando [CONCEPTO], fondo blanco, estilo minimalista."
4. Verifica que todos los iconos tienen el mismo estilo visual.
5. Si alguno no encaja, regéneralo ajustando el prompt.
6. Descarga todos los iconos y úsalos en una presentación o documento.

*Tiempo estimado:* 25 minutos.

---

**Ejercicio 3: Diseñar una presentación visual con Canva + IA**

*Objetivo:* Practicar el flujo completo de diseño con IA.

*Instrucciones:*
1. Abre Canva (canva.com) y crea una cuenta gratuita.
2. Usa Magic Design: sube una imagen o escribe un concepto y selecciona "Presentación corporativa".
3. Elige una de las plantillas generadas.
4. Usa Magic Write para generar el texto de 3 diapositivas.
5. Usa Magic Edit para modificar un elemento de una imagen.
6. Exporta la presentación en PDF.
7. Compara el resultado con lo que habrías hecho manualmente. ¿Cuánto tiempo ahorraste?

*Tiempo estimado:* 35 minutos.

---

**Ejercicio 4: Crear imágenes para redes sociales de tu empresa**

*Objetivo:* Practicar la generación de contenido visual para comunicación externa.

*Instrucciones:*
1. Elige 3 publicaciones que tu empresa podría hacer en LinkedIn esta semana.
2. Para cada publicación, genera una imagen con IA:
   - Publicación 1: "Imagen profesional para LinkedIn sobre la importancia de la IA en la gestión administrativa. Estilo corporativo, colores azul y blanco, con espacio para texto."
   - Publicación 2: "Cita visual motivacional sobre innovación tecnológica. Fondo degradado azul-violeta, texto en blanco, estilo moderno."
   - Publicación 3: "Infografía simple: 5 beneficios de usar IA en la oficina. Estilo limpio, iconos, colores corporativos."
3. Añade el texto de la publicación a cada imagen usando Canva o directamente en la herramienta de IA.
4. Revisa que las imágenes son coherentes con la marca de tu empresa.
5. Guarda las 3 publicaciones listas para publicar.

*Tiempo estimado:* 30 minutos.

---

**Cuestionario de Autoevaluacion 5.1**

**Pregunta 1:** Cual de las siguientes afirmaciones sobre Midjourney es correcta?
a) Funciona exclusivamente mediante una API REST
b) Funciona a traves de Discord mediante comandos como /imagine
c) Es gratuita sin limitaciones de uso comercial
d) Solo permite generar imagenes cuadradas

**Respuesta correcta: b) Midjourney opera exclusivamente a traves de Discord.**

**Pregunta 2:** Que ventaja ofrece Adobe Firefly frente a Midjourney o DALL-E 3 para entornos corporativos?
a) Es completamente gratuito
b) Genera videos ademas de imagenes
c) Esta entrenado con contenido con licencia, proporcionando seguridad legal para uso comercial
d) No requiere conexion a internet

**Respuesta correcta: c) Adobe Firefly se entreno con imagenes de Adobe Stock, reduciendo riesgos de copyright.**

**Pregunta 3:** Cual es la funcion de Magic Edit en Canva?
a) Corrige la ortografia del texto en un diseno
b) Permite seleccionar un elemento de una imagen y reemplazarlo por otro manteniendo coherencia visual
c) Genera textos automaticos basados en palabras clave
d) Organiza los elementos en una cuadricula

**Respuesta correcta: b) Magic Edit permite reemplazar objetos manteniendo iluminacion, sombras y perspectiva.**`,
      },
      {
        title: '5.2. Avatares y Videos de Capacitación Automatizados',
        content: `El video es el formato de comunicacion mas efectivo en el entorno corporativo actual. Pero tambien es el mas costoso y complejo de producir. Grabar un video de formacion requiere un estudio, camara, iluminacion, un presentador comodo frente a camara, tiempo de grabacion y edicion. El resultado final puede tardar dias o semanas. La IA ha cambiado esto con los generadores de video con avatares digitales.

**HeyGen**

HeyGen permite crear videos con avatares digitales fotorrealistas a partir de un texto. El proceso es simple: escribes un guion, seleccionas un avatar, eliges un idioma y una voz, y la plataforma genera el video en minutos. Los avatares son representaciones digitales de personas reales que hablan, gesticulan y expresan emociones de forma natural.

HeyGen ofrece decenas de avatares prefabricados, pero su funcionalidad mas potente es la creacion de avatares personalizados. Puedes grabar a una persona real durante unos minutos, y HeyGen aprende sus gestos, expresiones y forma de hablar. A partir de ese momento, puedes generar videos en los que esa persona dice cualquier texto que le escribas.

**Synthesia**

Synthesia es el competidor mas directo. Su catalogo incluye mas de 140 avatares diversos en terminos de etnia, edad, genero y estilo profesional. La plataforma esta disenada especificamente para uso corporativo, con funciones como plantillas de video para onboarding, seguridad, compliance y formacion de producto.

La gran diferencia: HeyGen destaca por la naturalidad de sus avatares y la calidad del lip-sync. Synthesia destaca por su plataforma mas madura y sus plantillas especificas para formacion corporativa.

**Casos de uso en la empresa**

**Manuales de induccion para nuevos empleados.** Cuando una persona nueva se incorpora, necesita absorber mucha informacion. Con avatares de IA, creas videos cortos donde un presentador virtual explica la cultura de la empresa, las politicas, el uso de herramientas y los beneficios. Se reduce el tiempo de onboarding de dias a horas.

**Videos explicativos de procesos.** Tu empresa implementa un nuevo sistema de gestion de gastos. En lugar de enviar un PDF con instrucciones, creas un video donde un avatar muestra paso a paso como usar la herramienta. Cuando el sistema se actualiza, solo actualizas el texto y el video se regenera.

**Comunicaciones internas de la direccion.** Los CEOs rara vez tienen tiempo para grabar videos. Con la clonacion de avatares, el CEO se graba una vez durante 30 minutos, y a partir de ahi se generan videos semanales con su imagen y voz diciendo exactamente lo que se le ha escrito.

**Clonacion de voz**

HeyGen y Synthesia permiten clonar la voz de una persona a partir de una muestra de audio de entre 30 segundos y 5 minutos. La voz clonada mantiene el tono, ritmo y entonacion de la persona original. La combinacion de avatar personalizado y voz clonada produce un resultado tan realista que cuesta distinguirlo de una grabacion real. Hay que usar esta tecnologia con responsabilidad y transparencia.

**Traduccion automatica con sincronizacion de labios**

HeyGen permite tomar un video en espanol y traducirlo automaticamente a mas de 40 idiomas, ajustando el movimiento de los labios del avatar para que coincida con el nuevo audio. Para empresas multinacionales, esto elimina la necesidad de contratar actores de doblaje para cada mercado.

**Proceso paso a paso: del guion al video publicado en 30 minutos**

Vamos a crear un video de 3 minutos explicando el procedimiento para solicitar vacaciones.

Minuto 0 a 5: Escribir el guion. Abrimos ChatGPT y pedimos: "Escribe un guion de 3 minutos para un video de formacion corporativa sobre como solicitar vacaciones. Incluye introduccion, tres pasos claros y un cierre."

Minuto 5 a 10: Preparamos los elementos visuales. Elegimos un avatar profesional y preparamos el logotipo de la empresa.

Minuto 10 a 15: Configuramos el video en la plataforma. Pegamos el guion, seleccionamos idioma, configuramos subtitulos.

Minuto 15 a 20: Generamos el video. La IA procesa el texto, genera el audio, sincroniza los labios y anade gestos.

Minuto 20 a 25: Revision y ajustes. Vemos el video completo y ajustamos pausas o enfasis.

Minuto 25 a 30: Exportar y publicar. Descargamos en MP4, subimos a la plataforma de formacion y compartimos.

**Consejos practicos**

- Escribe el guion pensando en como suena, no solo en como se lee. Lee en voz alta antes de usarlo.
- Usa pausas. Los avatares respetan los signos de puntuacion.
- No abuses de gestos exagerados. Los gestos sutiles son mas naturales.
- Prueba diferentes voces. Una voz no sirve para todos los contenidos.
- Usa subtitulos siempre. Mejoran la accesibilidad y la retencion.

El impacto en los departamentos de formacion es enorme. Antes, producir 20 videos de formacion podia llevar meses y costar decenas de miles de euros. Hoy se hace en una semana. Y cuando una politica cambia, no necesitas regrabar. Solo actualizas el texto y el video se regenera.

---

**Ejercicios Prácticos - Sección 5.2**

**Ejercicio 1: Crear un video de formación con avatar digital**

*Objetivo:* Practicar el flujo completo de creación de video con IA.

*Instrucciones:*
1. Abre HeyGen (heygen.com) o Synthesia (synthesia.io) y crea una cuenta gratuita de prueba.
2. Elige un tema de formación sencillo: "Cómo solicitar vacaciones", "Cómo usar la impresora", "Protocolo de visitas".
3. Escribe un guion de 1-2 minutos usando ChatGPT: "Escribe un guion de 1 minuto para un video de formación corporativa sobre [tema]. Incluye introducción, 3 pasos claros y un cierre."
4. En la plataforma de video:
   - Selecciona un avatar profesional.
   - Elige una voz en español.
   - Pega el guion.
   - Activa los subtítulos.
5. Genera el video.
6. Revisa el resultado: ¿El avatar habla con naturalidad? ¿Los subtítulos son correctos?
7. Descarga el video en MP4.
8. Anota el tiempo total invertido y compáralo con lo que habría costado grabar un video real.

*Tiempo estimado:* 40 minutos.

---

**Ejercicio 2: Escribir y optimizar un guion para avatar**

*Objetivo:* Aprender a escribir guiones pensados para ser hablados por un avatar.

*Instrucciones:*
1. Escribe un guion de 2 minutos sobre un proceso de tu trabajo.
2. Lee el guion en voz alta y cronometra cuánto tarda.
3. Ajusta el guion para que dure exactamente 2 minutos:
   - Si es demasiado largo: elimina información redundante.
   - Si es demasiado corto: añade ejemplos o detalles.
4. Añade pausas estratégicas usando signos de puntuación: puntos, comas, puntos y aparte.
5. Marca las palabras que quieres que el avatar enfatice (puedes usar mayúsculas o negritas según la plataforma).
6. Pide a un compañero que lea el guion y te diga si suena natural.
7. Ajusta según el feedback.

*Tiempo estimado:* 25 minutos.

---

**Ejercicio 3: Traducir un video existente con IA**

*Objetivo:* Practicar la traducción automática con sincronización de labios.

*Instrucciones:*
1. Si tienes acceso a HeyGen, sube un video corto (puede ser uno que hayas creado en el ejercicio 1 o un video público).
2. Usa la función de traducción de video para traducirlo a otro idioma (inglés, francés, etc.).
3. Revisa el resultado:
   - ¿Los labios del avatar se sincronizan con el nuevo audio?
   - ¿La traducción es correcta?
   - ¿El tono se mantiene?
4. Si no tienes acceso a esta función, simula el ejercicio:
   - Toma el guion de tu video.
   - Pide a una IA que lo traduzca a otro idioma.
   - Lee la traducción en voz alta y compara el ritmo con el original.
   - Anota las diferencias de longitud y ritmo.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 4: Planificar una biblioteca de videos de formación**

*Objetivo:* Diseñar una estrategia de contenido de formación con avatares.

*Instrucciones:*
1. Haz una lista de todos los procesos y procedimientos de tu empresa que podrían explicarse en video.
2. Para cada uno, calcula:
   - Duración estimada del video.
   - Frecuencia con la que se necesitaría actualizar.
   - Número de empleados que lo verían.
   - Coste estimado de producción con avatar vs. producción tradicional.
3. Prioriza los videos por impacto (más empleados × más frecuencia de uso).
4. Crea un calendario de producción para los 5 videos más prioritarios.
5. Para el video número 1, escribe el guion completo y genera el video (si tienes acceso a la herramienta).

*Tiempo estimado:* 35 minutos.

---

**Cuestionario de Autoevaluacion 5.2**

**Pregunta 1:** Que ventaja ofrece la clonacion de voz combinada con avatares personalizados?
a) Permite que el avatar cante canciones
b) Hace que el avatar tenga la apariencia, el tono y los matices vocales de una persona real
c) Elimina la necesidad de escribir guiones
d) Permite generar video sin conexion a internet

**Respuesta correcta: b) La clonacion de voz captura los matices unicos de la voz de una persona para un resultado extremadamente realista.**

**Pregunta 2:** Cuanto tiempo aproximado se necesita para crear un video de formacion con avatar digital desde cero?
a) Entre 5 y 10 minutos
b) Entre 30 minutos y 1 hora
c) Entre 24 y 48 horas
d) Una semana completa

**Respuesta correcta: b) Es posible ir del guion al video publicado en aproximadamente 30 minutos a 1 hora.**

**Pregunta 3:** Que funcion cumple la traduccion automatica con sincronizacion de labios?
a) Traduce el texto y lo muestra como subtitulos
b) Traduce el audio y ajusta el movimiento de los labios del avatar al nuevo idioma
c) Cambia el idioma de la interfaz de la herramienta
d) Traduce los comentarios de los usuarios

**Respuesta correcta: b) La traduccion con lip-sync modifica los labios del avatar para que parezca que habla el nuevo idioma de forma nativa.**`,
      },
    ],
  },
  {
    id: 6,
    slug: 'implementacion-consultoria-ia',
    title: 'Implementación, Auditoría y Consultoría de IA en Empresas',
    level: 'Nivel Experto / Líder de Proyecto',
    levelKey: 'experto',
    icon: Building2,
    objective: 'Convertirte en la persona que lidera la adopción de IA en cualquier organización o departamento.',
    description: 'El módulo final te prepara para ser el líder de transformación digital en tu empresa. Aprenderás a auditar procesos, calcular ROI, crear políticas de uso de IA y gestionar el cambio organizacional.',
    duration: '5 semanas',
    sections: [
      {
        title: '6.1. Auditoría de Procesos de Oficina',
        content: `Imagine que es el encargado de organizar la cocina de un restaurante. Antes de comprar una freidora de ultima generacion, lo primero que haria seria observar como trabajan sus cocineros: que pasos siguen, donde pierden tiempo, que tareas se repiten sin sentido. Eso exactamente es una auditoria de procesos aplicada a la inteligencia artificial. No se trata de comprar tecnologia por comprar, sino de entender primero que esta pasando en el dia a dia de su equipo para decidir donde la IA puede realmente ayudar.

**La Metodologia de Mapeo de Tareas**

El corazon de cualquier auditoria de procesos es el mapeo de tareas. Cada miembro del equipo, durante una semana completa, anota absolutamente todo lo que hace en su jornada laboral, desglosado en fragmentos de al menos 15 o 30 minutos.

Pongamos un ejemplo real. Maria trabaja en RRHH. Durante una semana anota sus tareas:
- Lunes 9:00 a 9:30: Revisar correos (45 mensajes).
- Lunes 9:30 a 10:30: Preparar plantilla de contrato para nuevo empleado.
- Lunes 10:30 a 11:00: Reunion semanal del equipo.
- Lunes 11:00 a 13:00: Revisar curriculums (32 CVs).
- Lunes 13:00 a 14:00: Redactar respuestas a candidatos rechazados.
- Lunes 15:00 a 16:30: Actualizar base de datos de empleados.
- Lunes 16:30 a 17:00: Organizar carpeta digital de documentos.

Cuando Maria analiza esta lista, algo salta a la vista: hay tareas puramente administrativas y repetitivas (actualizar bases de datos, organizar carpetas, redactar respuestas tipo) y tareas que requieren juicio humano (evaluar un curriculum, decidir si un candidato encaja).

**La Matriz de Automatizacion**

Para clasificar las tareas, utilizamos una matriz de cuatro cuadrantes:

- **Alto volumen y baja complejidad** (automatizar YA): Tareas repetitivas que siguen un patron claro. Ejemplos: introducir datos en Excel, enviar correos de confirmacion, generar informes estandar, transcribir reuniones, organizar archivos.

- **Bajo volumen y baja complejidad** (automatizar si sobra presupuesto): Tareas sencillas pero que ocurren pocas veces.

- **Alto volumen y alta complejidad** (asistir con IA, no automatizar del todo): Tareas que requieren criterio humano pero consumen mucho tiempo. Ejemplos: revisar curriculums, redactar borradores de informes, resumir documentos legales.

- **Bajo volumen y alta complejidad** (dejar como estan): Tareas que requieren mucha experiencia y ocurren rara vez.

En el caso de Maria, tras aplicar esta matriz, identifico que dedicaba 10 horas semanales a tareas del primer cuadrante y 8 horas a tareas del tercer cuadrante. Eso significaba que 18 de sus 40 horas semanales podian optimizarse con IA.

**Calculo del ROI**

El ROI (Retorno de la Inversion) sigue esta formula: ROI = (Ahorro anual - Coste anual de la IA) / Coste anual de la IA x 100

Sigamos con el ejemplo de Maria. Maria gana 30.000 euros brutos al ano. Su coste real para la empresa es de aproximadamente 40.000 euros al ano. Trabaja 40 horas semanales, 48 semanas al ano. Eso son 1.920 horas al ano. Su coste por hora es: 40.000 / 1.920 = 20,83 euros por hora.

Maria dedica 10 horas semanales a tareas automatizables. Eso son 480 horas al ano. El coste actual de esas horas es: 480 x 20,83 = 9.998,40 euros al ano.

Supongamos que la solucion de IA cuesta 2.400 euros al ano. El ahorro neto seria: 9.998,40 - 2.400 = 7.598,40 euros al ano. El ROI seria: (7.598,40 / 2.400) x 100 = 316,6%. Esto significa que por cada euro invertido, la empresa recupera 3,16 euros.

**Ejemplo de auditoria completa: el caso de "Distribuciones Garcia"**

Distribuciones Garcia tiene 30 empleados en oficinas. La auditoria se realizo durante tres semanas. Los resultados fueron reveladores:

- Administracion (4 personas): 60 horas semanales introduciendo facturas manualmente. Una IA de reconocimiento reducia eso a 2,5 horas.

- Atencion al Cliente (6 personas): 40 horas semanales respondiendo preguntas frecuentes repetitivas. Un chatbot podia resolver el 70%, liberando 28 horas semanales.

- Ventas (5 personas): 15 horas semanales transcribiendo notas de reuniones. Una herramienta de transcripcion con IA reducia esto a 2 horas.

El informe final incluyo: un mapa visual de procesos, el calculo de ROI detallado, una recomendacion priorizada (empezar por facturas con ROI del 420%), y un cronograma de implantacion a seis meses.

Seis meses despues, la empresa habia ahorrado 85.000 euros anuales y la satisfaccion de los empleados habia aumentado un 40%.

> **Consejo:** No intente auditar todo de golpe. Empiece por un departamento o incluso por una sola persona. Los resultados iniciales seran sus mejores argumentos.

**El Principio de Pareto aplicado a la IA**

El 80% del ahorro potencial suele concentrarse en el 20% de las tareas automatizables. Busque tareas que cumplan tres condiciones: alta frecuencia (a diario), alto consumo de tiempo (al menos 30 minutos cada vez), y baja complejidad cognitiva (no requieren decisiones complejas).

---

**Ejercicios Prácticos - Sección 6.1**

**Ejercicio 1: Mapear tus tareas durante una semana**

*Objetivo:* Practicar la metodología de mapeo de tareas.

*Instrucciones:*
1. Durante 3 días laborables, anota TODO lo que haces en fragmentos de 15-30 minutos.
2. Usa una tabla con estas columnas: Día | Hora inicio | Hora fin | Tarea | Tipo (repetitiva/analítica/creativa) | ¿Requiere criterio humano?
3. Al final de los 3 días, analiza tu registro:
   - ¿Cuántas horas dedicaste a tareas repetitivas?
   - ¿Cuántas horas dedicaste a tareas que requieren criterio humano?
   - ¿Cuáles son las 3 tareas que más tiempo consumen?
   - ¿Cuáles de esas tareas siguen siempre el mismo patrón?
4. Aplica la Matriz de Automatización a cada tarea.
5. Identifica las 3 tareas con mayor potencial de automatización.

*Tiempo estimado:* 3 días de registro + 30 minutos de análisis.

---

**Ejercicio 2: Aplicar la Matriz de Automatización a un departamento**

*Objetivo:* Practicar la clasificación de tareas de un equipo completo.

*Instrucciones:*
1. Elige un departamento (el tuyo u otro que conozcas bien).
2. Haz una lista de las 15-20 tareas principales que se realizan en ese departamento.
3. Para cada tarea, clasifícala en la matriz:
   - Alto volumen + baja complejidad → Automatizar YA
   - Bajo volumen + baja complejidad → Automatizar si sobra presupuesto
   - Alto volumen + alta complejidad → Asistir con IA
   - Bajo volumen + alta complejidad → Dejar como está
4. Calcula el tiempo total semanal dedicado a cada cuadrante.
5. Identifica las 3 tareas del cuadrante "Automatizar YA" con mayor impacto.
6. Para cada una, escribe un breve caso de automatización: qué herramienta usarías y cuánto tiempo ahorrarías.

*Tiempo estimado:* 40 minutos.

---

**Ejercicio 3: Calcular el ROI de una automatización real**

*Objetivo:* Practicar el cálculo de ROI con datos reales.

*Instrucciones:*
1. Elige una tarea que hayas identificado como automatizable.
2. Recopila los datos necesarios:
   - Salario anual del empleado que realiza la tarea.
   - Horas semanales dedicadas a esa tarea.
   - Semanas laborables al año.
   - Coste anual de la herramienta de IA que usarías.
3. Calcula:
   - Coste por hora del empleado.
   - Coste anual actual de esa tarea.
   - Ahorro neto anual.
   - ROI = (Ahorro neto / Coste herramienta) × 100.
4. Escribe un informe de una página con:
   - Descripción de la tarea actual.
   - Propuesta de automatización.
   - Cálculo de ROI detallado.
   - Recomendación final.
5. Si es posible, presenta este informe a tu jefe o al responsable del departamento.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 4: Simular una auditoría completa**

*Objetivo:* Practicar el proceso completo de auditoría con un caso ficticio.

*Instrucciones:*
1. Imagina una empresa ficticia de 20 empleados en 4 departamentos: Administración (4), Atención al Cliente (6), Ventas (5), RRHH (5).
2. Para cada departamento, inventa 5 tareas principales con su frecuencia y tiempo dedicado.
3. Aplica la Matriz de Automatización a las 20 tareas.
4. Calcula el ROI de automatizar las 5 tareas más prometedoras.
5. Crea un informe de auditoría con:
   - Mapa visual de procesos (puedes hacerlo en PowerPoint o Canva).
   - Tabla de ROI por tarea.
   - Recomendaciones priorizadas.
   - Cronograma de implantación a 6 meses.
6. Presenta el informe como si fueras un consultor externo.

*Tiempo estimado:* 50 minutos.

---

**Cuestionario de Autoevaluacion - 6.1**

**Pregunta 1:** Durante una auditoria, clasificamos las tareas en cuatro cuadrantes. Cual pertenece a "Alto volumen y baja complejidad" (automatizar YA)?
a) Decidir la estrategia de precios para el proximo trimestre
b) Introducir manualmente 200 facturas semanales en el sistema contable
c) Resolver una queja grave de un cliente insatisfecho
d) Negociar las condiciones de un contrato clave

**Respuesta correcta: b) Introducir facturas es repetitivo, de alto volumen y no requiere criterio humano.**

**Pregunta 2:** Un empleado dedica 8 horas semanales a tareas automatizables. Su coste anual es 36.000 euros y trabaja 48 semanas. La herramienta cuesta 1.800 euros anuales. Cual es el ROI aproximado?
a) 100%
b) 233%
c) 500%
d) 50%

**Respuesta correcta: b) Considerando costes de implantacion, el ROI realista ronda el 233%.**

**Pregunta 3:** Cual es el principal objetivo de la Matriz de Automatizacion?
a) Decidir que empleados deben ser reemplazados por IA
b) Clasificar las tareas segun su idoneidad para ser automatizadas o asistidas por IA
c) Calcular el salario de cada empleado
d) Determinar que departamentos deben reducir plantilla

**Respuesta correcta: b) La matriz ayuda a identificar que tareas pueden automatizarse para liberar tiempo del equipo.**`,
      },
      {
        title: '6.2. Creación de una "Política de Uso de IA" corporativa',
        content: `Imagine que le regala un coche deportivo a un familiar que acaba de sacarse el carnet. Le daria las llaves sin mas? Probablemente no. Le explicaria como funciona, que precauciones tomar, que carreteras evitar. Eso es una politica de uso de IA: el manual de instrucciones y las normas de circulacion para que sus empleados conduzcan la IA de forma segura y responsable.

Muchas empresas lanzan herramientas de IA sin directrices claras. Los resultados suelen ser desastrosos: empleados que introducen datos personales de clientes en ChatGPT, informacion confidencial que aparece en los modelos sin control, errores en informes que nadie reviso. Una politica bien disenada no solo protege a la empresa, sino que hace que los empleados se sientan mas seguros.

**El Decalogo de Oro de la Politica de IA**

1. La IA es una herramienta, no un sustituto. El criterio humano es el responsable final.
2. Todo lo que genere la IA debe ser verificado. Asuma que puede equivocarse o alucinar.
3. No comparta informacion confidencial. Nunca introduzca datos personales, financieros o secretos comerciales.
4. Sea transparente. Si un contenido ha sido generado por IA, debe indicarse.
5. Respete la propiedad intelectual. No copie trabajo protegido con IA.
6. Proteja los datos segun la normativa. Cumpla con el GDPR y leyes locales.
7. Use la IA para mejorar, no reemplazar relaciones. El tono final debe ser humano.
8. Informe de errores y sesgos. Reporte cualquier problema detectado.
9. Actualicese continuamente. La IA evoluciona cada semana.
10. Ante la duda, pregunte. Consulte con su responsable o el comite de IA.

**Clasificacion de datos: el sistema de semaforo**

Datos VERDES (pueden subirse sin restriccion): informacion publica, conocimiento general, borradores de baja sensibilidad.

Datos AMARILLOS (con precaucion): datos internos no confidenciales, comunicaciones de bajo riesgo, datos anonimizados.

Datos ROJOS (NUNCA): datos personales (nombres, DNIs, direcciones, datos bancarios), informacion financiera confidencial, secretos comerciales, informacion bajo NDA, credenciales de acceso.

> **Alerta:** Muchas herramientas de IA gratuitas usan sus datos para entrenar modelos. Si introduce un documento confidencial en ChatGPT gratuito, podria aparecer en respuestas a otros usuarios. Use siempre versiones empresariales con garantias de privacidad.

**Protocolo de verificacion TRIPLE**

PASO 1 - Revision de hechos: Las cifras coinciden con fuentes oficiales? Las fechas y nombres son correctos? Las fuentes citadas existen realmente?

PASO 2 - Revision de coherencia: El texto tiene estructura logica? Las conclusiones derivan correctamente de los argumentos? Hay contradicciones internas?

PASO 3 - Revision de tono: El tono es apropiado para la audiencia? La longitud y el detalle son adecuados? Se ha indicado que el contenido fue generado por IA?

Este protocolo se aplica siempre en comunicaciones externas, documentos legales, contenido publicable, y analisis de datos para toma de decisiones.

**Aspectos legales basicos**

Copyright: El contenido generado exclusivamente por IA no puede registrarse como obra protegida. Si un humano realiza contribuciones creativas significativas, la obra resultante puede considerarse original.

Proteccion de datos (GDPR): No introduzca datos personales en herramientas sin garantias contractuales. Si una IA procesa datos personales, debe existir un Acuerdo de Tratamiento de Datos.

Transparencia: Informe a clientes y empleados cuando interactuen con un sistema de IA.

Responsabilidad: La responsabilidad final recae en la persona que usa la IA. La IA es una herramienta, no una excusa.

**Plantilla de politica corporativa de IA**

POLITICA DE USO DE INTELIGENCIA ARTIFICIAL DE [EMPRESA]

1. Ambito de aplicacion: Todos los empleados y contratistas.
2. Herramientas autorizadas: [listar herramientas aprobadas]. Prohibido el uso de versiones gratuitas para informacion de la empresa.
3. Clasificacion de datos: Sistema de semaforo verde/amarillo/rojo.
4. Verificacion obligatoria: Protocolo TRIPLE antes de usar cualquier contenido generado por IA.
5. Transparencia: Indicar cuando un contenido ha sido generado con IA.
6. Formacion: Todos deben completar la formacion en uso responsable de IA.
7. Reporte de incidentes: Reportar usos indebidos o errores a [direccion].
8. Consecuencias: El incumplimiento puede conllevar medidas disciplinarias.
9. Revision: Anual o cuando cambien la legislacion o las herramientas.

---

**Ejercicios Prácticos - Sección 6.2**

**Ejercicio 1: Clasificar datos de tu empresa con el sistema de semáforo**

*Objetivo:* Practicar la clasificación de datos según su sensibilidad.

*Instrucciones:*
1. Haz una lista de 15 tipos de datos que manejas en tu trabajo diario.
2. Para cada tipo de dato, clasifícalo en verde, amarillo o rojo:
   - Verde: información pública, conocimiento general.
   - Amarillo: datos internos no confidenciales, comunicaciones de bajo riesgo.
   - Rojo: datos personales, información financiera confidencial, secretos comerciales.
3. Para los datos rojos, escribe una alternativa anonimizada que sí podrías usar con IA.
4. Crea una tabla resumen con las 15 clasificaciones.
5. Comparte la tabla con un compañero y compara clasificaciones. ¿Coincidieron en todas?

*Tiempo estimado:* 25 minutos.

---

**Ejercicio 2: Aplicar el protocolo TRIPLE a un documento real**

*Objetivo:* Practicar la verificación de contenido generado por IA.

*Instrucciones:*
1. Pide a una IA que genere un documento: un informe, un correo formal, un análisis de datos o una propuesta comercial.
2. Aplica el protocolo TRIPLE:
   - **Paso 1 - Revisión de hechos:** Verifica cada cifra, fecha y nombre. ¿Coinciden con fuentes oficiales? ¿Las fuentes citadas existen?
   - **Paso 2 - Revisión de coherencia:** ¿El texto tiene estructura lógica? ¿Las conclusiones derivan de los argumentos? ¿Hay contradicciones?
   - **Paso 3 - Revisión de tono:** ¿El tono es apropiado para la audiencia? ¿La longitud es adecuada?
3. Anota cada problema que encuentres en una tabla: Problema | Tipo (hecho/coherencia/tono) | Corrección aplicada.
4. Corrige todos los problemas identificados.
5. Compara el documento original con el corregido. ¿Cuántos errores encontraste?

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 3: Redactar una política de IA para tu empresa**

*Objetivo:* Crear un documento real de política corporativa.

*Instrucciones:*
1. Usa la plantilla del decálogo y la política corporativa como base.
2. Adapta cada sección a tu empresa real:
   - Lista las herramientas de IA autorizadas (las que tu empresa usa o podría usar).
   - Define el sistema de semáforo con ejemplos concretos de tu empresa.
   - Establece el protocolo de verificación adaptado a tus tipos de documento.
   - Define las consecuencias del incumplimiento según la cultura de tu empresa.
3. Añade secciones específicas que necesite tu empresa:
   - ¿Hay regulaciones sectoriales específicas?
   - ¿Hay clientes con requisitos especiales de privacidad?
   - ¿Hay procesos que requieren aprobación previa antes de usar IA?
4. Revisa el documento con un compañero o superior.
5. Si es posible, presenta el borrador al responsable de tu departamento.

*Tiempo estimado:* 45 minutos.

---

**Ejercicio 4: Simular un caso de uso indebido de IA**

*Objetivo:* Practicar la identificación y respuesta ante usos indebidos.

*Instrucciones:*
1. Lee estos 5 escenarios y decide qué harías en cada caso:
   - Escenario A: Un compañero pega datos de clientes (nombres, emails, teléfonos) en ChatGPT para generar correos personalizados.
   - Escenario B: Un informe generado por IA con cifras inventadas se envía a un cliente sin revisión.
   - Escenario C: Un empleado usa una IA gratuita para traducir un contrato confidencial con un proveedor.
   - Escenario D: Un directivo publica en LinkedIn un artículo generado 100% por IA sin indicarlo.
   - Escenario E: Un compañero usa IA para redactar respuestas a quejas de clientes, pero las respuestas son genéricas y no resuelven el problema.
2. Para cada escenario, escribe:
   - ¿Qué regla de la política se viola?
   - ¿Qué riesgo implica?
   - ¿Qué acción tomarías?
   - ¿Cómo lo prevenirías en el futuro?
3. Comparte tus respuestas con un compañero y debate las diferencias.

*Tiempo estimado:* 30 minutos.

---

**Cuestionario de Autoevaluacion - 6.2**

**Pregunta 1:** Segun la clasificacion de datos en semaforo, de que color son los datos personales de clientes?
a) Verdes, porque son necesarios para el trabajo
b) Amarillos, porque pueden subirse con precaucion
c) Rojos, porque nunca deben subirse a herramientas de IA publicas
d) Depende del pais del cliente

**Respuesta correcta: c) Los datos personales son sensibles y no deben introducirse en herramientas de IA publicas.**

**Pregunta 2:** Cual es correcta sobre copyright y IA segun la legislacion actual?
a) Todo lo que genera una IA tiene copyright automatico
b) El contenido generado exclusivamente por IA no puede registrarse como obra protegida
c) La IA es legalmente responsable del contenido que genera
d) El prompt que utilizo es el autor

**Respuesta correcta: b) El autor debe ser una persona fisica segun la legislacion actual.**

**Pregunta 3:** Que debe hacer un empleado si detecta que una IA genera respuestas sesgadas?
a) Ignorarlo, es responsabilidad del proveedor
b) Dejar de usar la herramienta sin avisar
c) Reportarlo inmediatamente segun el protocolo de la empresa
d) Intentar solucionarlo modificando los prompts

**Respuesta correcta: c) Cualquier sesgo debe reportarse para que la empresa tome medidas.**`,
      },
      {
        title: '6.3. Gestión del Cambio en la Empresa',
        content: `Existe una estadistica que todo consultor de IA conoce: aproximadamente el 70% de los proyectos de transformacion digital fracasan, y la mayoria no lo hacen por problemas tecnicos, sino por resistencia al cambio. Puede tener la mejor herramienta de IA del mundo, pero si sus empleados no confian en ella, no la usan o la usan mal, todo el dinero invertido se habra perdido.

**El metodo de los 4 niveles de formacion**

NIVEL 1 - Alfabetizacion basica en IA (para todos): Que es la IA explicado sin tecnicismos, que puede hacer hoy, que no puede hacer, conceptos clave como prompt, alucinacion, sesgo y privacidad. Duracion: 2 horas presenciales mas 4 horas online.

NIVEL 2 - IA aplicada al puesto (por departamentos): Ejemplos concretos de como la IA ayuda en su area especifica, ejercicios practicos con las herramientas que usaran, casos de uso reales. Duracion: 4 horas presenciales en grupos reducidos.

NIVEL 3 - IA para la toma de decisiones (mandos intermedios): Como interpretar analisis generados por IA, supervisar trabajos asistidos por IA, identificar nuevas oportunidades de automatizacion, evaluar impacto y ROI. Duracion: 8 horas en dos jornadas.

NIVEL 4 - IA estrategica (direccion y comite): Implicaciones legales, hoja de ruta de IA a 1, 2 y 5 anos, evaluacion de riesgos, gobernanza y etica. Duracion: 16 horas en taller intensivo.

> **Consejo:** No lance todos los niveles a la vez. Empiece por el Nivel 1 para toda la empresa. Dos semanas despues, lance el Nivel 2 para departamentos piloto. Un mes despues, el Nivel 3. El Nivel 4 solo cuando la direccion este comprometida.

**Identificar early adopters y crear embajadores**

En toda organizacion hay personas con curiosidad natural por la tecnologia. Son los que ya han probado ChatGPT, los que ven videos de IA, los que preguntan "y si probamos esto con IA?". Estos son los early adopters.

Senales para identificarlos: preguntan en reuniones si se puede automatizar algo, han asistido a webinars sobre IA, comparten articulos de tecnologia, son los que el equipo busca cuando tiene problemas.

Una vez identificados, conviertalos en embajadores:
1. Formacion preferente: reciben primero los niveles avanzados.
2. Acceso anticipado: prueban herramientas antes del lanzamiento.
3. Reconocimiento explicito: su labor se reconoce publicamente.
4. Tiempo dedicado: dos horas semanales para ayudar a companeros.
5. Canal directo: acceso al equipo de implantacion.

**Superar la resistencia al cambio**

Objecion 1: "Me va a reemplazar la IA". Respuesta: "La IA no reemplaza tu trabajo, reemplaza tareas repetitivas. Te libera tiempo para tareas de mayor valor."

Objecion 2: "No tengo tiempo para aprender". Respuesta: "Precisamente la IA te ahorrara tiempo. La formacion es en horario laboral y empezamos con algo que te llevara 15 minutos.

Objecion 3: "Esto es una moda, ya pasara". Respuesta: Mostrar ejemplos concretos de como la IA ya esta cambiando su sector y compartir casos de competidores.

Objecion 4: "La IA se equivoca mucho". Respuesta: "Exactamente, por eso necesitamos que tu la supervises. Tu criterio garantiza la calidad."

Objecion 5: "Mi metodo funciona, no quiero cambiar". Respuesta: "No te pedimos que abandones tu metodo. Prueba la herramienta una semana. Si no te gusta, vuelves al tuyo."

**Plan de implantacion gradual: 4 fases**

FASE 1 - Preparacion y diagnostico (semanas 1 a 3): Auditoria de procesos, identificacion de casos de uso prioritarios, formacion a directivos, nombramiento de embajadores, seleccion de herramientas, redaccion de politica de IA.

FASE 2 - Piloto controlado (semanas 4 a 8): Seleccionar un equipo pequeno (5-15 personas), implementar primera herramienta, establecer metricas de exito, documentar aprendizajes.

FASE 3 - Expansion controlada (semanas 9 a 16): Extender a otros departamentos uno cada dos semanas, los embajadores del piloto ayudan a formar, recoger datos de uso semanalmente, celebrar casos de exito.

FASE 4 - Consolidacion (semanas 17 en adelante): Evaluacion global del ROI, encuesta de satisfaccion, creacion de biblioteca interna de recursos, ciclo de revision trimestral, el comite de IA se reune mensualmente.

**Creacion de una biblioteca interna de recursos de IA**

Seccion 1 - Guias rapidas: "Como redactar un buen prompt paso a paso", "Como resumir reuniones en 3 clics", "Como NO usar la IA".

Seccion 2 - Tutoriales en video: Grabaciones de sesiones formativas, videos cortos de embajadores resolviendo problemas.

Seccion 3 - Casos de exito internos: "Como Maria redujo su tiempo de 10 horas a 2 horas", "Como Ventas duplico sus informes".

Seccion 4 - Foro de preguntas: Espacio donde cualquier empleado pregunta y los embajadores responden.

Seccion 5 - Actualizaciones: Novedades de herramientas, cambios en la politica, nuevas sesiones formativas.

> **Consejo:** No construya la biblioteca entera antes de lanzar la IA. Empiece con un documento compartido con 3 guias rapidas. La biblioteca debe crecer organicamente.

---

**Ejercicios Prácticos - Sección 6.3**

**Ejercicio 1: Identificar early adopters en tu empresa**

*Objetivo:* Practicar la identificación de embajadores de IA.

*Instrucciones:*
1. Piensa en los compañeros de tu empresa (o de un departamento que conozcas bien).
2. Para cada persona, evalúa estas señales de early adopter:
   - ¿Ha preguntado en reuniones si se puede automatizar algo?
   - ¿Ha asistido a webinars o cursos sobre IA?
   - ¿Comparte artículos de tecnología con el equipo?
   - ¿Es la persona a quien acuden los compañeros cuando tienen problemas técnicos?
   - ¿Ha probado ChatGPT u otras herramientas de IA por su cuenta?
3. Crea una lista con los 3-5 early adopters identificados.
4. Para cada uno, escribe:
   - Por qué crees que es un early adopter.
   - Qué rol podría tener como embajador.
   - Qué formación adicional necesitaría.
5. Si es posible, habla con uno de ellos y pregúntale su opinión sobre la IA en la empresa.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 2: Diseñar un plan de formación en 4 niveles**

*Objetivo:* Crear un plan de formación adaptado a tu empresa.

*Instrucciones:*
1. Adapta los 4 niveles de formación a tu empresa real:
   - **Nivel 1:** ¿Qué conceptos básicos necesita entender TODO el mundo? Escribe el temario de las 2 horas presenciales.
   - **Nivel 2:** ¿Qué herramientas específicas usará cada departamento? Escribe un ejemplo de ejercicio práctico para tu departamento.
   - **Nivel 3:** ¿Qué necesitan saber los mandos intermedios? Escribe 3 casos de estudio reales.
   - **Nivel 4:** ¿Qué debe decidir la dirección? Escribe la agenda del taller de 16 horas.
2. Crea un cronograma de implantación:
   - Semana 1-2: Nivel 1 para todos.
   - Semana 3-4: Nivel 2 para departamento piloto.
   - Semana 5-8: Nivel 2 para el resto de departamentos.
   - Semana 9-10: Nivel 3 para mandos.
   - Semana 11-12: Nivel 4 para dirección.
3. Identifica qué recursos necesitas: formadores, salas, herramientas, presupuesto.
4. Presenta el plan a un compañero o superior para recibir feedback.

*Tiempo estimado:* 45 minutos.

---

**Ejercicio 3: Simular respuestas a objeciones**

*Objetivo:* Practicar la gestión de la resistencia al cambio.

*Instrucciones:*
1. Escribe las 5 objeciones más comunes que esperarías en tu empresa:
   - "Me va a reemplazar la IA."
   - "No tengo tiempo para aprender."
   - "Esto es una moda, ya pasará."
   - "La IA se equivoca mucho."
   - "Mi método funciona, no quiero cambiar."
2. Para cada objeción, escribe TU respuesta personalizada (no copies la del contenido, adáptala a tu contexto).
3. Practica las respuestas en voz alta como si estuvieras en una reunión real.
4. Pide a un compañero que haga el papel de "empleado escéptico" y te lance las objeciones.
5. Anota qué respuestas funcionaron mejor y cuáles necesitan mejora.

*Tiempo estimado:* 30 minutos.

---

**Ejercicio 4: Crear la primera versión de tu biblioteca de recursos**

*Objetivo:* Construir un repositorio básico de recursos de IA.

*Instrucciones:*
1. Crea un documento compartido (Google Docs, SharePoint, Notion, etc.).
2. Empieza con las 3 guías rápidas más urgentes:
   - Guía 1: "Cómo redactar un buen prompt paso a paso" (máximo 1 página).
   - Guía 2: "Cómo NO usar la IA: lista de errores comunes" (máximo 1 página).
   - Guía 3: "Cómo resumir una reunión en 3 clics" (máximo 1 página).
3. Añade una sección de "Casos de éxito": escribe 2 casos ficticios (o reales si los tienes) de compañeros que han ahorrado tiempo con IA.
4. Añade una sección de "Preguntas frecuentes" con las 5 preguntas que más te hacen sobre IA.
5. Comparte el documento con 2-3 compañeros y pide feedback.
6. Planifica cómo harás crecer la biblioteca: ¿quién añade contenido? ¿con qué frecuencia?

*Tiempo estimado:* 40 minutos.

---

**Cuestionario de Autoevaluacion - 6.3**

**Pregunta 1:** Un empleado dice "No tengo tiempo para aprender IA". Cual es la mejor respuesta?
a) "Si no aprendes, te quedaras atras"
b) "Entiendo. Precisamente la IA te ahorrara tiempo. La formacion es en horario laboral y empezamos con algo que te llevara 15 minutos"
c) "Cada uno es responsable de su formacion"
d) "Usa la IA solo para las tareas que quieras"

**Respuesta correcta: b) Valida la preocupacion y conecta directamente con el interes del empleado (ahorrar tiempo).**

**Pregunta 2:** Cual es el orden correcto de las 4 fases de implantacion?
a) Piloto, Preparacion, Expansion, Consolidacion
b) Preparacion, Piloto controlado, Expansion, Consolidacion
c) Preparacion, Expansion, Piloto, Consolidacion
d) Consolidacion, Preparacion, Piloto, Expansion

**Respuesta correcta: b) Primero preparacion, luego piloto, luego expansion, luego consolidacion.**

**Pregunta 3:** Cual es el papel principal de un embajador de IA?
a) Decidir que herramientas comprar
b) Ayudar a sus companeros a usar la IA, resolver dudas y documentar casos de exito
c) Sustituir al departamento de TI
d) Vigilar que nadie use la IA incorrectamente

**Respuesta correcta: b) El embajador ayuda, resuelve dudas y comparte experiencias. No es un policia ni un directivo.**`,
      },
    ],
  },
]

export function getModuleBySlug(slug) {
  return modules.find((m) => m.slug === slug)
}

export function getModuleById(id) {
  return modules.find((m) => m.id === id)
}

export const levelConfig = {
  inicial: {
    color: 'from-accent-400 to-primary-500',
    bg: 'bg-primary-700 text-white dark:bg-primary-300 dark:text-primary-900 border-0',
  },
  intermedio: {
    color: 'from-accent-400 to-primary-600',
    bg: 'bg-primary-700 text-white dark:bg-primary-300 dark:text-primary-900 border-0',
  },
  'intermedio-avanzado': {
    color: 'from-accent-500 to-primary-700',
    bg: 'bg-primary-700 text-white dark:bg-primary-300 dark:text-primary-900 border-0',
  },
  avanzado: {
    color: 'from-accent-500 to-primary-800',
    bg: 'bg-primary-700 text-white dark:bg-primary-300 dark:text-primary-900 border-0',
  },
  experto: {
    color: 'from-accent-600 to-primary-900',
    bg: 'bg-primary-700 text-white dark:bg-primary-300 dark:text-primary-900 border-0',
  },
}
