/**
* Scrivere qui il codice delle funzioni mcd(x, y) e mcdRecursive(x, y)
**/

function mcd(x, y) {
  let r = x % y;
  while (r != 0) {
    x = y;
    y = r;
    r = x % y;
  }
  let MCD = y;
  return MCD;
}

console.log(mcd(34, 20));



function mcdRecursive(x, y) {
  if (y === 0) {
    return x;
  } else {
    return mcdRecursive(y, x % y);
  }
}

console.log(mcdRecursive(34, 20));