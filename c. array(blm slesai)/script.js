//array= kumpulan data keknya
//hitungan dari kiri mulai dari 0, 1, 2, 3, 4
let buah = ['apple', 'jeruk', 'nanas'];
let ttlBuah = buah.length;//.length menghitung banyaknya data
let index = buah.indexOf('jeruk')//menunjukan data ke berapa data yang di panggil
//contohnya jeruk merupakan

buah[0] = 'apel' //mengganti data di urutan di dalam []
buah.push("kelapa"); //menambah data buah
buah.push("mouse");
//buah.pop(); //menghapus data terakhir
//buah.unshift("buku"); //memasukan data dari atas(awalan/data pertama)
//buah.shift(); //menghapus data pertama

console.log(buah[0]);
console.log(buah[1]);
console.log(buah[2]);
console.log(buah[3]);
console.log(buah[4]);

console.log(ttlBuah);
console.log(index);

