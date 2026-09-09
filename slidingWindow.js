
export function findLongestWord(text) {
  if (!text || typeof text !== 'string') return '';

  const words = text.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    // Ventana deslizante: Si la palabra actual supera a la recordada, actualizamos
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }

  return longestWord;
}

const texto = "JavaScript es un lenguaje asombroso";
console.log('Texto:', texto);
console.log('Palabra más larga:', findLongestWord(texto));