var kalimat = "Saya sedang belajar PHP di Tutorial PHP duniailkom.com";
 
// cari semua kata "PHP", ganti menjadi "JavaScript";
var hasil = kalimat.replace(/PHP/g,"JavaScript"); 
 
// hasil: Saya sedang belajar JavaScript di Tutorial 
// JavaScript duniailkom.com
console.log(hasil); 