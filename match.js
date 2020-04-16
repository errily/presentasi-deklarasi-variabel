var kalimat = "1 tambah 2 sama dengan 3";
var hasil = kalimat.match(/\d+/g); // cari semua angka
console.log(hasil);     // hasil: ["1", "2", "3"]