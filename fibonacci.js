/**
* Scrivere qui il codice della funzione fibonacci(n)
**/

let x = 0;
let y = 1;

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  else {
    return fibonacci(n -1) + fibonacci(n - 2);
  }
}

for (let i = 0; i < 10; i++){
  console.log(fibonacci(i));
}