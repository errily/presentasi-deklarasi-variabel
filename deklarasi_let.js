let a = 3;
let b = 1;

{
  let a = 1; // variable baru
  let c = 2; // variable baru
  b = 4; // nilainya berubah

  console.log("a lokal: ", a); // a = 1
  console.log("b lokal: ", b); // b = 4
  console.log("c lokal: ", c); // c = 2
}

console.log("a global: ", a); // a = 3
console.log("b global: ", b); // b = 4
console.log("c global: ", c); // error (variable belum dideklarasikan)