/**
* Scrivere qui il codice dell'esercizio 1 del capitolo 4 di eloquentJS
**/

//FUNZIONE RANGE
const x = function range(start, end) {
  let arrayRange = [];
  while (start <= end) {
    arrayRange.push(start);
    start++;
  }
  return arrayRange;
}

let y = x(1, 27);
console.log(y);


//FUNZIONE SOMMA
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log (sum([1, 5, 7, 11]))


//FUNZIONE RANGE CON STEP
function rangeStep(start, end, step = 1) {
  let arrayRange = [];
  while (start <= end) {
    arrayRange.push(start);
    start = start + step;
  }
  return arrayRange;
}

console.log (rangeStep(1, 27, 3))