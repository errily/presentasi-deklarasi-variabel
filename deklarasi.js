const a = 5;
const b = 3;

{
  const a = 2; // variable baru
  const c = 2; // variable baru
 // b = 3; // error (konstan tak dapat diubah)

  console.log("a lokal: ", a); // a = 2
  console.log("b lokal: ", b); // b = 3
  console.log("c lokal: ", c); // c = 2
}

console.log("a global: ", a); // a = 5
console.log("b global: ", b); // b = 3
//console.log("c global: ", c); // error (variable belum dideklarasikan)

for(i = 0; i <= 5; i++) {
      console.log(i + 1);
    }


