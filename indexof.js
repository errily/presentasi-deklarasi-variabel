var situs = "duniailkom";
console.log(situs.indexOf("k"));   // 7
console.log(situs.indexOf("i"));   // 3
console.log(situs.indexOf("i",4)); 
// 5 (pencarian dimulai dari karakter ke-5)
  
var belajar = "Saya sedang belajar javaScript di duniailkom.com";
console.log(belajar.indexOf("sedang"));    // 4
 
//  (pencarian dimulai dari karakter ke-18)
console.log(belajar.indexOf("ja",17));     // 20 
 
console.log(belajar.indexOf("php"));       // -1 (tidak ditemukan)