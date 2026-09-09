# Actividad 5: Algoritmo Sliding Window (Encontrar la Palabra Más Larga)

## Descripción
Implementación de la técnica **Sliding Window (Ventana Deslizante)** para analizar secuencias continuas de texto y determinar con máxima eficiencia la palabra de mayor longitud dentro de una cadena o párrafo.

---

## Análisis de Complejidad
- **Complejidad Temporal:** $O(n)$ — Un solo recorrido lineal sobre las $n$ palabras del texto.
- **Complejidad Espacial:** $O(n)$ — Almacenamiento del arreglo de palabras tokenizadas.

---

## Guía de Commits Paso a Paso (6 Commits)

### Commit 1: Estructura Base y Variable de Estado
- **Mensaje:** `feat: crear estructura inicial de findLongestWord y variable longestWord`
- **Archivos:** `slidingWindow.js`, `package.json`

### Commit 2: División de Texto en Palabras
- **Mensaje:** `feat: implementar division de texto en palabras usando split`
- **Archivos:** `slidingWindow.js`

### Commit 3: Comparación con Ventana Deslizante
- **Mensaje:** `feat: implementar comparacion de longitud palabra por palabra con ventana deslizante`
- **Archivos:** `slidingWindow.js`

### Commit 4: Limpieza de Signos de Puntuación
- **Mensaje:** `feat: anadir limpieza de signos de puntuacion y caracteres especiales`
- **Archivos:** `slidingWindow.js`

### Commit 5: Retorno de Métricas y Función Detallada
- **Mensaje:** `feat: extender funcionalidad para devolver longitud y posicion de la palabra`
- **Archivos:** `slidingWindow.js`

### Commit 6: Interfaz Web y Documentación
- **Mensaje:** `docs: agregar interfaz web index.html y documentacion de Sliding Window en README`
- **Archivos:** `index.html`, `README.md`
- **Descripción:** Incorporación de la interfaz web interactiva (`index.html`) para ejecutar en navegador y la documentación oficial (`README.md`) con instrucciones completas.
---

## Ejecución y Pruebas
### Opción 1: Ejecución en Consola (Node.js)
```bash
node slidingWindow.js
```

### Opción 2: Ejecución Visual en Navegador
Abre `index.html` en el navegador, escribe cualquier frase en el campo de texto y haz clic en "Analizar Texto con Sliding Window".
