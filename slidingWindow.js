
export function findLongestWord(text) {
  if (!text || typeof text !== 'string') return '';

  const words = text.split(' ');
  let longestWord = words[0] || '';

  return longestWord;
}

const texto = "JavaScript es un lenguaje asombroso";
console.log('Texto:', texto);
console.log('Primera palabra detectada:', findLongestWord(texto));