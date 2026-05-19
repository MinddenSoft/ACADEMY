import { Terminal, BarChart3, Bot, BrainCircuit, Sparkles, Rocket } from 'lucide-react'

export const modules = [
  {
    id: 1,
    slug: 'fundamentos-ia-herramientas',
    title: 'Fundamentos de IA y Entorno de Desarrollo',
    level: 'Nivel Inicial',
    levelKey: 'inicial',
    icon: Terminal,
    objective: 'Comprender los fundamentos de la IA y configurar un entorno de desarrollo profesional para construir proyectos de inteligencia artificial.',
    description: 'Este módulo introductorio te llevará desde los conceptos fundamentales de la inteligencia artificial hasta la configuración completa de tu entorno de desarrollo. Aprenderás Python desde cero, dominarás Git y GitHub para control de versiones, y prepararás todo lo necesario para el resto del programa.',
    duration: '4 semanas',
    sections: [
      {
        title: '1.1. Introducción a la Programación con Python para IA',
        content: `Bienvenido al primer paso de tu viaje como desarrollador de inteligencia artificial. Python es el lenguaje más utilizado en IA y machine learning, y por buenas razones: su sintaxis clara, su enorme ecosistema de bibliotecas científicas, y una comunidad global que contribuye constantemente con nuevas herramientas.\n\n---\n\n**¿Por qué Python es el lenguaje estándar para IA?**\n\nPython se ha convertido en el estándar de facto por varias razones. Su sintaxis es increíblemente legible y su ecosistema de bibliotecas (NumPy, Pandas, PyTorch, Scikit-learn) no tiene rival.\n\n> **Concepto Clave:** Python es el "pegamento" que conecta todas las piezas de un proyecto de IA.\n\n**Variables y tipos de datos fundamentales**\n\nLos tipos básicos que usarás en IA son:\n- int: números enteros. Ejemplo: epochs = 100\n- float: números decimales. Ejemplo: learning_rate = 0.001\n- str: cadenas de texto. Ejemplo: model_name = "resnet50"\n- bool: verdadero o falso. Ejemplo: is_trained = True\n- list: colección ordenada. Ejemplo: accuracy = [0.85, 0.89, 0.92]\n- dict: pares clave-valor. Ejemplo: config = {"lr": 0.001, "batch_size": 32}\n\n**Estructuras de control**\n\nLos condicionales if/elif/else te permiten ejecutar código diferente según condiciones:\n\naccuracy = 0.92\nif accuracy >= 0.95:\n    print("Modelo excelente")\nelif accuracy >= 0.85:\n    print("Modelo bueno")\nelse:\n    print("Necesita mejora")\n\nLos bucles for te permiten repetir operaciones:\n\nfor i in range(5):\n    print(f"Época {i+1} completada")\n\n**Funciones: organiza y reutiliza tu código**\n\ndef calcular_media(valores):\n    return sum(valores) / len(valores)\n\ndef evaluar_modelo(accuracy, threshold=0.85):\n    if accuracy >= threshold:\n        return "Aprobado"\n    return "Reintentar"\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es la razón PRINCIPAL por la que Python domina el desarrollo de IA?\na) Es el lenguaje más rápido en ejecución\nb) Tiene bibliotecas especializadas como NumPy, PyTorch y Scikit-learn\nc) Es el único lenguaje que soporta redes neuronales\nd) No necesita instalación\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '1.2. Configuración del Entorno de Desarrollo Profesional',
        content: `**VS Code: el editor que necesitas**\n\nVisual Studio Code es el editor más popular para desarrollo de IA. Extensiones esenciales:\n\n- Python (Microsoft): autocompletado, linting y debugging\n- Jupyter: notebooks interactivos\n- GitLens: visualiza la historia de Git\n- Pylance: servidor de lenguaje Python\n\n**Atajos de teclado clave:**\n- Ctrl+P: abre archivos rápidamente\n- Ctrl+Shift+P: paleta de comandos\n- Ctrl+ñ: terminal integrada\n- F5: iniciar debugging\n\n**pip y gestión de paquetes**\n\n- pip install numpy: instala NumPy\n- pip install -r requirements.txt: instala dependencias\n- pip freeze > requirements.txt: guarda dependencias\n\n**Jupyter Notebooks**\n\nCombinan código, texto y visualizaciones en celdas interactivas. Ideales para experimentación.\n\n**Estructura de un proyecto de IA**\n\nmi-proyecto-ia/\n|-- data/raw/\n|-- data/processed/\n|-- notebooks/\n|-- src/data/\n|-- src/models/\n|-- models/\n|-- requirements.txt\n|-- .gitignore\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Qué comando instala todas las dependencias de requirements.txt?\na) pip install requirements.txt\nb) pip install -r requirements.txt\nc) pip install --all\nd) pip dependencies\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '1.3. Git y GitHub: Control de Versiones para Proyectos de IA',
        content: `**Por qué el control de versiones es obligatorio en IA**\n\nGit registra cada cambio en tu código. GitHub aloja repositorios y facilita la colaboración.\n\n**Comandos fundamentales:**\n- git init: inicia un repositorio\n- git status: muestra el estado actual\n- git add .: prepara archivos para commit\n- git commit -m "mensaje": guarda un snapshot\n- git log: historial de cambios\n\n**Ramas (branches):**\n- git branch nombre: crea rama\n- git checkout -b nombre: crea y cambia a nueva rama\n- git merge nombre: fusiona ramas\n\n**Buenas prácticas:**\n- Un commit por cambio lógico\n- Mensajes descriptivos\n- No subas datos grandes a Git (usa .gitignore)\n\n**El archivo .gitignore para proyectos de IA:**\n\nvenv/\ndata/raw/\ndata/processed/\n*.csv\n*.pkl\n*.h5\n__pycache__/\n.ipynb_checkpoints/\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Qué archivos NO deberías subir a Git en un proyecto de IA?\na) Scripts de preprocesamiento\nb) Datasets crudos y modelos entrenados\nc) README.md\nd) requirements.txt\n\n**Respuesta correcta: b.**`,
      },
    ],
  },
  {
    id: 2,
    slug: 'python-datos-visualizacion',
    title: 'Python para Ciencia de Datos',
    level: 'Nivel Intermedio',
    levelKey: 'intermedio',
    icon: BarChart3,
    objective: 'Dominar las bibliotecas fundamentales de Python para la manipulación, análisis y visualización de datos.',
    description: 'En este módulo aprenderás a usar NumPy, Pandas, Matplotlib y Seaborn. Transformarás datos crudos en información lista para modelos de IA.',
    duration: '5 semanas',
    sections: [
      {
        title: '2.1. Estructuras de Datos y Bibliotecas Esenciales',
        content: `**NumPy: el motor numérico de Python**\n\nNumPy proporciona el array multidimensional (ndarray) con operaciones vectorizadas.\n\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5])\nceros = np.zeros((3, 4))\nunos = np.ones((2, 3))\naleatorio = np.random.randn(3, 3)\n\n**Operaciones vectorizadas:**\n\na = np.array([1, 2, 3, 4])\nprint(a * 2)  # [2, 4, 6, 8]\nprint(a > 2)  # [False, False, True, True]\nprint(np.mean(a))  # 2.5\n\n**Indexación y slicing:**\n\narr = np.array([10, 20, 30, 40, 50])\nprint(arr[1:4])  # [20, 30, 40]\nprint(arr[arr > 30])  # [40, 50]\n\n**Pandas: manipulación de datos tabulares**\n\nimport pandas as pd\n\ndf = pd.read_csv("datos.csv")\ndf.head()\ndf.info()\ndf.describe()\n\ndf["columna"]  # Seleccionar columna\ndf[df["edad"] > 30]  # Filtrar filas\ndf.groupby("categoria")["valor"].mean()  # Agrupar y agregar\n\n**Operaciones comunes en IA:**\n\ndf.isnull().sum()\ndf.dropna()\ndf.fillna(0)\ndf.sort_values("columna", ascending=False)\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es la principal ventaja de las operaciones vectorizadas en NumPy?\na) Son más fáciles de leer\nb) Son órdenes de magnitud más rápidas porque ejecutan C compilado\nc) Ocupan menos memoria\nd) Permiten tipos dinámicos\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '2.2. Manipulación Avanzada con Pandas y NumPy',
        content: `**Merge, join y concatenación**\n\npd.concat([df1, df2], axis=0)  # Vertical\npd.merge(clientes, pedidos, on="id", how="left")\n\n**Preprocesamiento para Machine Learning**\n\n# Codificación One-Hot\npd.get_dummies(df, columns=["categoria"])\n\n# Estandarización\nfrom sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\ndf["edad_std"] = scaler.fit_transform(df[["edad"]])\n\n**Manejo de valores faltantes:**\n- dropna(): eliminar filas con nulos\n- fillna(valor): rellenar con constante\n- fillna(mediana): imputar con mediana\n- ffill/bfill: propagar último valor conocido\n\n**Feature Engineering**\n\ndf["interaccion"] = df["precio"] * df["cantidad"]\ndf["edad_cuadrada"] = df["edad"] ** 2\ndf["salario_medio_dept"] = df.groupby("dept")["salario"].transform("mean")\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Qué tipo de join conserva todas las filas de la tabla izquierda?\na) Inner join\nb) Left join\nc) Outer join\nd) Cross join\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '2.3. Visualización de Datos con Matplotlib y Seaborn',
        content: `**Matplotlib: el estándar de visualización**\n\nimport matplotlib.pyplot as plt\n\nplt.figure(figsize=(10, 6))\nplt.plot(x, y, marker="o")\nplt.title("Título")\nplt.xlabel("Eje X")\nplt.ylabel("Eje Y")\nplt.grid(True, alpha=0.3)\nplt.show()\n\n**Seaborn: visualización estadística**\n\nimport seaborn as sns\n\nsns.boxplot(x="categoria", y="valor", data=df)\nsns.pairplot(df, hue="categoria")\nsns.heatmap(df.corr(), annot=True, cmap="coolwarm")\nsns.kdeplot(data=df, x="valor", hue="categoria", fill=True)\n\n**Visualizaciones para ML**\n\nfrom sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay\nConfusionMatrixDisplay.from_predictions(y_test, y_pred)\n\nfrom sklearn.metrics import RocCurveDisplay\nRocCurveDisplay.from_predictions(y_test, y_pred_proba)\n\n**Principios de diseño:**\n1. Simplifica: elimina lo innecesario\n2. Elige el tipo de gráfico correcto\n3. Usa color con propósito\n4. Etiqueta todo (ejes, títulos, leyendas)\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Qué gráfico es mejor para mostrar la distribución de una variable numérica?\na) Líneas\nb) Histograma o KDE\nc) Barras\nd) Dispersión\n\n**Respuesta correcta: b.**`,
      },
    ],
  },
  {
    id: 3,
    slug: 'machine-learning-fundamentos',
    title: 'Machine Learning: Fundamentos y Algoritmos',
    level: 'Nivel Intermedio-Avanzado',
    levelKey: 'intermedio-avanzado',
    icon: Bot,
    objective: 'Comprender y aplicar los algoritmos fundamentales de Machine Learning para problemas reales de clasificación, regresión y clustering.',
    description: 'Este módulo te sumerge en el corazón del Machine Learning. Aprenderás algoritmos supervisados y no supervisados, cómo evaluar modelos correctamente, y cómo evitar errores como el sobreajuste con Scikit-learn.',
    duration: '5 semanas',
    sections: [
      {
        title: '3.1. Aprendizaje Supervisado: Regresión y Clasificación',
        content: `**¿Qué es el aprendizaje supervisado?**\n\nEl modelo aprende de datos etiquetados: pares de (entrada, salida_esperada).\n\n- Regresión: la salida es un valor numérico continuo\n- Clasificación: la salida es una categoría discreta\n\n**Regresión lineal**\n\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodelo = LinearRegression()\nmodelo.fit(X_train, y_train)\ny_pred = modelo.predict(X_test)\n\n**Regresión logística (clasificación binaria)**\n\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, classification_report\n\nclf = LogisticRegression()\nclf.fit(X_train, y_train)\nprint(classification_report(y_test, clf.predict(X_test)))\n\n**Random Forest**\n\nfrom sklearn.ensemble import RandomForestClassifier\n\nrf = RandomForestClassifier(n_estimators=100, max_depth=10)\nrf.fit(X_train, y_train)\nprint(rf.feature_importances_)\n\n**El problema del sobreajuste (overfitting)**\n\nOcurre cuando el modelo memoriza el entrenamiento pero falla en datos nuevos.\n\nCómo evitarlo:\n- Validación cruzada (cross-validation)\n- Simplificar el modelo\n- Regularización (L1, L2)\n- Más datos de entrenamiento\n\nfrom sklearn.model_selection import cross_val_score\nscores = cross_val_score(rf, X_train, y_train, cv=5)\nprint(f"Media: {scores.mean():.3f}")\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es la principal diferencia entre regresión y clasificación?\na) La regresión es supervisada y la clasificación no\nb) La regresión predice valores numéricos continuos; la clasificación predice categorías\nd) No hay diferencia\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '3.2. Aprendizaje No Supervisado y Reducción de Dimensionalidad',
        content: `**¿Qué es el aprendizaje no supervisado?**\n\nTrabaja con datos sin etiquetas para encontrar patrones ocultos.\n\n- Clustering: agrupar datos similares\n- Reducción de dimensionalidad: comprimir datos preservando información\n\n**K-Means**\n\nfrom sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\n\nX_scaled = StandardScaler().fit_transform(X)\nkmeans = KMeans(n_clusters=3, random_state=42)\ndf["cluster"] = kmeans.fit_predict(X_scaled)\n\n**Método del codo (elbow method)**\n\ninercias = []\nfor k in range(1, 11):\n    kmeans = KMeans(n_clusters=k, n_init=10)\n    kmeans.fit(X_scaled)\n    inercias.append(kmeans.inertia_)\nplt.plot(range(1, 11), inercias, marker="o")\nplt.show()\n\n**PCA: Análisis de Componentes Principales**\n\nfrom sklearn.decomposition import PCA\n\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X_scaled)\nprint(f"Varianza explicada: {sum(pca.explained_variance_ratio_):.3f}")\n\n**DBSCAN: clustering basado en densidad**\n\nfrom sklearn.cluster import DBSCAN\ndbscan = DBSCAN(eps=0.5, min_samples=5)\ndf["cluster_db"] = dbscan.fit_predict(X_scaled)\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Qué ventaja tiene DBSCAN sobre K-Means?\na) Es más rápido\nb) No requiere especificar el número de clusters y detecta outliers\nc) Solo funciona con datos etiquetados\nd) Produce resultados más interpretables\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '3.3. Evaluación, Validación y Optimización de Modelos',
        content: `**Métricas según el problema**\n\n# Clasificación\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score\n\naccuracy = accuracy_score(y_test, y_pred)\nprecision = precision_score(y_test, y_pred)\nrecall = recall_score(y_test, y_pred)\nf1 = f1_score(y_test, y_pred)\n\n# Regresión\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\n\nmae = mean_absolute_error(y_test, y_pred)\nrmse = np.sqrt(mean_squared_error(y_test, y_pred))\nr2 = r2_score(y_test, y_pred)\n\n**Validación cruzada**\n\nfrom sklearn.model_selection import cross_val_score, StratifiedKFold\n\nskf = StratifiedKFold(n_splits=5, shuffle=True)\nscores = cross_val_score(modelo, X, y, cv=skf, scoring="f1")\n\n**Búsqueda de hiperparámetros**\n\nfrom sklearn.model_selection import GridSearchCV\n\nparam_grid = {"n_estimators": [50, 100, 200], "max_depth": [5, 10, None]}\ngrid = GridSearchCV(RandomForestClassifier(), param_grid, cv=5, scoring="f1")\ngrid.fit(X_train, y_train)\nprint(grid.best_params_)\n\n**El dilema sesgo-varianza**\n\n- Alto sesgo (underfitting): modelo demasiado simple\n- Alta varianza (overfitting): modelo demasiado complejo\n- Objetivo: encontrar el equilibrio\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Por qué la accuracy es engañosa en clases desbalanceadas?\na) Es difícil de calcular\nb) Un modelo que clasifique todo como la clase mayoritaria tendría alta accuracy sin detectar la minoritaria\nc) No funciona con clases binarias\nd) Solo mide errores positivos\n\n**Respuesta correcta: b.**`,
      },
    ],
  },
  {
    id: 4,
    slug: 'deep-learning-redes-neuronales',
    title: 'Deep Learning y Redes Neuronales',
    level: 'Nivel Avanzado',
    levelKey: 'avanzado',
    icon: BrainCircuit,
    objective: 'Diseñar, entrenar y optimizar redes neuronales profundas usando PyTorch.',
    description: 'Las redes neuronales profundas son el motor de la revolución actual de la IA. En este módulo entenderás cómo funcionan, desde el perceptrón hasta los transformers, implementando arquitecturas modernas con PyTorch.',
    duration: '6 semanas',
    sections: [
      {
        title: '4.1. Arquitectura de Redes Neuronales y Retropropagación',
        content: `**Del perceptrón a las redes profundas**\n\nUna neurona recibe entradas, las multiplica por pesos, suma un sesgo, y aplica una función de activación.\n\n**Funciones de activación**\n\n- ReLU: f(x) = max(0, x) - la más usada en capas ocultas\n- Sigmoid: comprime entre 0 y 1 - para clasificación binaria\n- Softmax: probabilidades que suman 1 - para clasificación multiclase\n\n**PyTorch**\n\nimport torch\nimport torch.nn as nn\n\nclass RedSimple(nn.Module):\n    def __init__(self, input_size, hidden_size, num_classes):\n        super().__init__()\n        self.capa1 = nn.Linear(input_size, hidden_size)\n        self.capa2 = nn.Linear(hidden_size, num_classes)\n        self.dropout = nn.Dropout(0.3)\n\n    def forward(self, x):\n        x = torch.relu(self.capa1(x))\n        x = self.dropout(x)\n        x = self.capa2(x)\n        return x\n\n**Retropropagación (backpropagation)**\n\n1. Forward pass: calcula la salida y el error (loss)\n2. Backward pass: calcula gradientes del error respecto a cada peso\n3. Optimizer.step(): actualiza los pesos\n\n**Bucle de entrenamiento**\n\noptimizer = torch.optim.Adam(modelo.parameters(), lr=0.001)\ncriterion = nn.CrossEntropyLoss()\n\nfor epoch in range(epochs):\n    output = modelo(X_batch)\n    loss = criterion(output, y_batch)\n    optimizer.zero_grad()\n    loss.backward()\n    optimizer.step()\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es el propósito de ReLU?\na) Comprimir entre 0 y 1\nb) Introducir no linealidad: f(x) = max(0, x)\nc) Calcular probabilidades\nd) Regularizar el modelo\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '4.2. Redes Convolucionales para Visión por Computador',
        content: `**¿Por qué las CNN son especiales?**\n\nUsan tres ideas clave:\n1. Conexiones locales: cada neurona ve solo una pequeña región\n2. Compartición de pesos: el mismo filtro se aplica a toda la imagen\n3. Pooling: reduce el tamaño de la representación\n\n**Capas convolucionales**\n\nnn.Conv2d(in_channels=3, out_channels=32, kernel_size=3, padding=1)\nnn.MaxPool2d(kernel_size=2, stride=2)\n\n**Arquitectura CNN completa**\n\nclass CNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(3, 32, 3, padding=1)\n        self.conv2 = nn.Conv2d(32, 64, 3, padding=1)\n        self.pool = nn.MaxPool2d(2, 2)\n        self.fc1 = nn.Linear(64 * 56 * 56, 256)\n        self.fc2 = nn.Linear(256, 10)\n\n    def forward(self, x):\n        x = self.pool(torch.relu(self.conv1(x)))\n        x = self.pool(torch.relu(self.conv2(x)))\n        x = x.view(x.size(0), -1)\n        x = torch.relu(self.fc1(x))\n        x = self.fc2(x)\n        return x\n\n**Transfer Learning**\n\nfrom torchvision import models\n\nmodelo = models.resnet18(pretrained=True)\nfor param in modelo.parameters():\n    param.requires_grad = False\nmodelo.fc = nn.Linear(modelo.fc.in_features, num_clases)\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es la principal ventaja de las CNN frente a capas densas para imágenes?\na) Son más fáciles de implementar\nb) Explotan la estructura espacial con conexiones locales y compartición de pesos\nc) Requieren menos memoria\nd) Solo funcionan con color\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '4.3. Transformers y Mecanismos de Atención',
        content: `**La arquitectura que cambió la IA**\n\nEl Transformer (2017) introdujo el mecanismo de atención, permitiendo al modelo pesar la importancia de cada parte de la entrada. Es la base de GPT, BERT, y todos los LLMs.\n\n**El mecanismo de atención**\n\nConsulta (Q), Clave (K), Valor (V):\n- Q: qué busco\n- K: qué tengo\n- V: qué entrego\n\nLa atención calcula la compatibilidad entre Q y K para ponderar V.\n\n**Componentes del Transformer**\n\nEncoder: procesa la entrada con self-attention + feed-forward\nDecoder: genera la salida con atención enmascarada + cross-attention\n\n**Atención multi-cabeza**\n\nMúltiples cabezas de atención en paralelo, cada una aprendiendo diferentes tipos de relaciones.\n\n**Positional Encoding**\n\nAñade información de posición porque la atención no tiene orden inherente.\n\n**De Transformers a GPT**\n\nGPT usa solo el decodificador. Entrena con predicción de la siguiente palabra. Al escalar, emergen capacidades como razonamiento y generación de código.\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es la innovación clave del Transformer?\na) Procesa secuencias en orden\nb) Usa atención para procesar elementos en paralelo, pesando su importancia\nc) Es más pequeño y rápido\nd) No necesita entrenamiento\n\n**Respuesta correcta: b.**`,
      },
    ],
  },
  {
    id: 5,
    slug: 'llms-genai-avanzado',
    title: 'Grandes Modelos de Lenguaje e IA Generativa',
    level: 'Nivel Avanzado',
    levelKey: 'avanzado',
    icon: Sparkles,
    objective: 'Dominar los LLMs, la ingeniería de prompts, RAG, fine-tuning y la integración de modelos generativos en aplicaciones reales.',
    description: 'Los LLMs han democratizado la IA generativa. Este módulo te enseña a aprovecharlos al máximo: desde prompts hasta sistemas RAG con LangChain y fine-tuning.',
    duration: '5 semanas',
    sections: [
      {
        title: '5.1. Introducción a los LLMs y Modelos Generativos',
        content: `**¿Qué es un LLM?**\n\nUn Large Language Model predice la siguiente palabra en una secuencia. De esa capacidad emergen: responder preguntas, escribir código, traducir, razonar.\n\n**Parámetros clave de generación:**\n- temperature: controla la aleatoriedad (0 = determinista, 1 = creativo)\n- top_p: considera solo tokens con probabilidad acumulada hasta p\n- max_tokens: longitud máxima de la respuesta\n\n**Hugging Face**\n\nfrom transformers import AutoModelForCausalLM, AutoTokenizer\n\ntokenizer = AutoTokenizer.from_pretrained("mistralai/Mistral-7B-Instruct")\nmodel = AutoModelForCausalLM.from_pretrained("mistralai/Mistral-7B-Instruct")\n\n**APIs de LLMs**\n\nimport openai\nclient = openai.OpenAI(api_key="...")\nresponse = client.chat.completions.create(\n    model="gpt-4",\n    messages=[{"role": "user", "content": "Hola"}]\n)\n\n**Limitaciones**\n- Alucinaciones: información falsa pero verosímil\n- Ventana de contexto limitada\n- Sesgos de los datos de entrenamiento\n- Coste computacional\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Qué controla el parámetro temperature?\na) La temperatura del servidor\nb) El nivel de aleatoriedad en la selección de tokens\nc) El número de tokens a generar\nd) La longitud del prompt\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '5.2. Ingeniería de Prompts y RAG con LangChain',
        content: `**Componentes de un buen prompt**\n\n1. Rol: define quién es el asistente\n2. Contexto: información relevante\n3. Tarea: qué debe hacer\n4. Formato: cómo estructurar la respuesta\n\n**Técnicas avanzadas**\n\nChain-of-Thought: "Resuelve paso a paso"\nFew-shot: proporciona ejemplos en el prompt\n\n**RAG: Retrieval Augmented Generation**\n\nCombina la generación del LLM con búsqueda en tu base de conocimiento.\n\nPasos:\n1. Indexación: divide documentos en chunks, genera embeddings, almacena en base vectorial\n2. Recuperación: busca chunks similares a la pregunta\n3. Generación: pasa chunks + pregunta al LLM\n\n**LangChain**\n\nfrom langchain_community.document_loaders import TextLoader\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\nfrom langchain_community.vectorstores import Chroma\nfrom langchain.chains import RetrievalQA\n\nchunks = RecursiveCharacterTextSplitter(chunk_size=500).split_documents(docs)\nvectorstore = Chroma.from_documents(chunks, embeddings)\nqa = RetrievalQA.from_chain_type(llm=llm, retriever=vectorstore.as_retriever())\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Qué problema resuelve RAG?\na) Es más rápido que un LLM\nb) Permite al LLM acceder a información actualizada sin reentrenar\nc) Elimina las alucinaciones\nd) No requiere LLM\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '5.3. Fine-tuning e Integración de Modelos',
        content: `**¿Cuándo usar fine-tuning vs RAG?**\n\nRAG: información actualizada frecuentemente, base de conocimiento grande.\nFine-tuning: dominio especializado, formato específico, reducir tamaño del prompt.\n\n**LoRA: Low-Rank Adaptation**\n\nEntrena solo ~1% de los parámetros, reduciendo requisitos de memoria.\n\nfrom peft import LoraConfig, get_peft_model\n\nlora_config = LoraConfig(r=8, lora_alpha=32, target_modules=["q_proj", "v_proj"])\nmodel = get_peft_model(model, lora_config)\n\n**FastAPI: sirve tu modelo**\n\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Input(BaseModel):\n    texto: str\n\n@app.post("/predict")\nasync def predict(data: Input):\n    resultado = modelo.predict(data.texto)\n    return {"prediccion": resultado}\n\n**vLLM: inferencia optimizada**\n\nfrom vllm import LLM, SamplingParams\nllm = LLM(model="mistralai/Mistral-7B-Instruct")\noutputs = llm.generate([prompt], SamplingParams(temperature=0.7))\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es la principal ventaja de LoRA?\na) Entrena solo una pequeña fracción de parámetros, reduciendo memoria y tiempo\nb) No modifica los pesos del modelo\nc) Funciona sin GPU\nd) Es más preciso que fine-tuning completo\n\n**Respuesta correcta: a.**`,
      },
    ],
  },
  {
    id: 6,
    slug: 'mlops-ingenieria-produccion',
    title: 'MLOps e Ingeniería de Producción',
    level: 'Nivel Experto',
    levelKey: 'experto',
    icon: Rocket,
    objective: 'Aprender a desplegar, monitorizar y mantener sistemas de IA en producción con Docker, CI/CD y mejores prácticas de MLOps.',
    description: 'Este módulo te prepara para llevar modelos a producción: Docker, GitHub Actions, MLflow, monitorización de deriva (drift), y sistemas fiables y escalables.',
    duration: '6 semanas',
    sections: [
      {
        title: '6.1. Despliegue de Modelos con Docker y FastAPI',
        content: `**Del notebook a producción**\n\nFastAPI es el framework estándar para servir modelos.\n\n# app.py\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\nimport joblib\n\napp = FastAPI()\nmodelo = joblib.load("modelo.pkl")\n\nclass Input(BaseModel):\n    feature1: float\n    feature2: float\n\n@app.post("/predict")\nasync def predict(data: Input):\n    pred = modelo.predict([[data.feature1, data.feature2]])\n    return {"prediction": pred[0]}\n\n**Docker**\n\nFROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]\n\ndocker build -t ml-api .\ndocker run -p 8000:8000 ml-api\n\n**Estrategias de despliegue**\n- Blue-Green: dos entornos idénticos\n- Canary: tráfico gradual al nuevo modelo\n- Rolling update: actualización progresiva\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es la principal ventaja de Docker?\na) Hace el modelo más preciso\nb) Garantiza consistencia entre entornos al empaquetar todo\nc) Reduce el tamaño del modelo\nd) Elimina la necesidad de GPU\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '6.2. Pipelines de ML y CI/CD',
        content: `**El ciclo MLOps**\n\nData ingestion -> Validation -> Features -> Training -> Evaluation -> Deployment -> Monitoring\n\n**GitHub Actions**\n\nname: ML Pipeline\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - run: pip install -r requirements.txt\n      - run: pytest tests/\n\n  train:\n    needs: test\n    steps:\n      - run: python src/train.py\n\n  deploy:\n    needs: train\n    steps:\n      - run: echo "Desplegando..."\n\n**MLflow**\n\nimport mlflow\n\nwith mlflow.start_run():\n    mlflow.log_param("n_estimators", 100)\n    mlflow.log_metric("f1", 0.92)\n    mlflow.sklearn.log_model(modelo, "modelo_rf")\n\n**DVC: Data Version Control**\n\ndvc init\ndvc add data/dataset.csv\ngit add data/dataset.csv.dvc\ndvc push\n\n**Tests específicos para ML**\n\ndef test_calidad_minima():\n    f1 = f1_score(y_test, modelo.predict(X_test))\n    assert f1 >= 0.80\n\ndef test_rango_predicciones():\n    preds = modelo.predict(X_test)\n    assert all(0 <= p <= 1 for p in preds)\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Cuál es el propósito principal de MLflow?\na) Desplegar modelos\nb) Rastrear experimentos, registrar parámetros, métricas y gestionar versiones\nc) Entrenar más rápido\nd) Visualizar datos\n\n**Respuesta correcta: b.**`,
      },
      {
        title: '6.3. Ética, Seguridad y Responsabilidad en IA',
        content: `**Sesgo algorítmico**\n\nLos modelos aprenden de datos históricos. Si esos datos contienen sesgos, el modelo los perpetúa.\n\nTipos: selección, confirmación, medición, agregación.\n\n**Mitigación de sesgo**\n\nfrom fairlearn.metrics import demographic_parity_difference\n\n# Analizar composición del dataset\nfor grupo in df["genero"].unique():\n    print(f"{grupo}: {df[df['genero']==grupo]['aceptado'].mean():.2%}")\n\n**Privacidad**\n- Minimización de datos\n- Anonimización\n- Privacidad diferencial\n- Consentimiento informado\n\n**Ataques adversariales**\n\nPequeñas modificaciones imperceptibles en la entrada que causan errores.\n\nDefensas:\n- Entrenamiento adversarial\n- Preprocesamiento de entrada\n- Detección de anomalías\n- Ensembles\n\n**Explicabilidad (XAI)**\n\nfrom shap import TreeExplainer\nimport shap\n\nexplainer = TreeExplainer(modelo)\nshap_values = explainer.shap_values(X_test)\nshap.summary_plot(shap_values, X_test)\n\n**Regulación**\n- EU AI Act: clasifica sistemas por nivel de riesgo\n- GDPR: derecho a explicación\n- NIST AI RMF: gestión de riesgos\n\n---\n\n**Cuestionario de Autoevaluación**\n\n**Pregunta 1:** ¿Qué es un sesgo algorítmico?\na) Un error en el código de entrenamiento\nb) Sesgo sistemático en predicciones que perjudica a ciertos grupos\nc) Preferencia por un algoritmo\nd) Error de overflow\n\n**Respuesta correcta: b.**`,
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
    color: 'from-emerald-400 to-teal-400',
    bg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    bgDark: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-400',
    border: 'border-emerald-500/20',
  },
  intermedio: {
    color: 'from-teal-400 to-blue-400',
    bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
    bgDark: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    dot: 'bg-teal-400',
    border: 'border-teal-500/20',
  },
  'intermedio-avanzado': {
    color: 'from-blue-400 to-indigo-400',
    bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    bgDark: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    dot: 'bg-blue-400',
    border: 'border-blue-500/20',
  },
  avanzado: {
    color: 'from-indigo-400 to-pink-400',
    bg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    bgDark: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    dot: 'bg-indigo-400',
    border: 'border-indigo-500/20',
  },
  experto: {
    color: 'from-pink-400 to-rose-400',
    bg: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
    bgDark: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    dot: 'bg-pink-400',
    border: 'border-pink-500/20',
  },
}
