var a = 2;
var b = 3;

{
  var a = 1; // nilainya berubah
  var c = 4; // variable baru
  b = 2; // nilainya berubah

  console.log("a lokal: ", a); // a = 1
  console.log("b lokal: ", b); // b = 2
  console.log("c lokal: ", c); // c = 4
}

console.log("a global: ", a); // a = 1
console.log("b global: ", b); // b = 2
console.log("c global: ", c); // masih dapat diakses (c = 4)
