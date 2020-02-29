/**
* Scrivere qui il codice dell'esercizio 2 del capitolo 4 di eloquentJS
* Vi ricordo che le funzioni DEVONO ESSERE PURE e implementate una in modo IMPERATIVO e una in modo DICHIARATIVO
**/


//IMPERATIVO
function reverseArray (array) {
  let arrayCopied = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayCopied.push(array[i])
  }
  return arrayCopied;
}

console.log(reverseArray([1, 2, 3, 4, 5]));



//DICHIARATIVO
