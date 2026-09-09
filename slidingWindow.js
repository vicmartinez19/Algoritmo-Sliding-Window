
/**
 * Limpia un texto eliminando signos de puntuacion y caracteres especiales
 * @param {string} text 
 * @returns {string[]} Arreglo de palabras limpias
 */
export function tokenizarTexto(text) {
  if (!text || typeof text !== 'string') return [];
  return text
    .replace(/[.,/#!$%^&*;:{}=\-_`~()"'?¡!¿]/g, '')
    .trim()
    .split(/\s+/)
    .filter((palabra) => palabra.length > 0);
}

/**
 * Encuentra la palabra mas larga en un texto utilizando la tecnica de Ventana Deslizante (Sliding Window).
 * Complejidad de Tiempo: O(n)
 * Complejidad de Espacio: O(n)
 * 
 * @param {string} text - Cadena de texto de entrada
 * @returns {string} La palabra mas larga encontrada
 */
export function findLongestWord(text) {
  const words = tokenizarTexto(text);
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}

/**
 * Version detallada que retorna un reporte con longitud, posicion y metricas
 * @param {string} text 
 * @returns {Object}
 */
export function findLongestWordDetails(text) {
  const words = tokenizarTexto(text);
  if (words.length === 0) {
    return { palabra: '', longitud: 0, posicion: -1, totalPalabras: 0 };
  }

  let longestWord = '';
  let posicion = -1;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
      posicion = i + 1;
    }
  }

  return {
    palabra: longestWord,
    longitud: longestWord.length,
    posicion,
    totalPalabras: words.length
  };
}

// ============================================================
// DEMOSTRACION Y CASOS DE PRUEBA
// ============================================================
const ejecutarDemostracion = () => {
  console.log('======================================================');
  console.log('   ALGORITMO SLIDING WINDOW: PALABRA MAS LARGA        ');
  console.log('======================================================\n');

  // Caso oficial del curso
  const text1 = "JavaScript es un lenguaje de programación increíble para aprender.";
  console.log('Texto de entrada 1:');
  console.log(`"${text1}"`);
  const resultado1 = findLongestWord(text1);
  console.log(`-> Palabra más larga: "${resultado1}" (Longitud: ${resultado1.length} letras)`);
  console.log('   Detalles:', findLongestWordDetails(text1));
  console.log('------------------------------------------------------');

  // Caso 2: Parrafo con puntuacion y terminos cientificos
  const text2 = "La desoxirribonucleótido y la fotosíntesis son conceptos biológicos fascinantes.";
  console.log('\nTexto de entrada 2:');
  console.log(`"${text2}"`);
  const resultado2 = findLongestWordDetails(text2);
  console.log('-> Reporte detallado:', resultado2);
  console.log('------------------------------------------------------');

  // Caso 3: Palabras con igual longitud maxima
  const text3 = "gato perro pato loro";
  console.log('\nTexto de entrada 3:');
  console.log(`"${text3}"`);
  console.log(`-> Palabra más larga: "${findLongestWord(text3)}"`);
  console.log('------------------------------------------------------');

  // Caso 4: Texto vacio
  console.log('\nTexto vacío:', findLongestWordDetails(''));
  console.log('======================================================\n');
};

ejecutarDemostracion();