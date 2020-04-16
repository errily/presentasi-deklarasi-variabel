var c = "c";
console.log(c.localeCompare("c"));    // 0
console.log(c.localeCompare("a"));    // 1
console.log(c.localeCompare("d"));    // -1
  
var kota = "Jakarta";
console.log(kota.localeCompare("jakarta"));   // 1 (case sensitif)
console.log(kota.localeCompare("padang"));    // -1
console.log(kota.localeCompare("bandung"));   // 1