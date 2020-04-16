var kalimat = "Satu,Dua,Tiga,Empat,Lima";
// pisahkan String "kalimat" menjadi array dengan pemisah tanda koma
var hasil = kalimat.split(",")
console.log(hasil);    // ["Satu"," Dua", "Tiga", "Empat", "Lima"]
  
var kalimat2 = "Satu;Dua;Tiga;Empat;Lima";
// pisahkan String "kalimat" menjadi array dengan pemisah tanda ";"
// batasi array hanya 3 isian
var hasil2 = kalimat2.split(";",3)
console.log(hasil2);    // ["Satu", "Dua", "Tiga"]