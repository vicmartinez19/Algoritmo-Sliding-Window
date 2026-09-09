
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

const texto = "¡JavaScript, sin duda, es un lenguaje increíble para aprender!";
console.log('Texto:', texto);
console.log('Palabra más larga limpia:', findLongestWord(texto));