//string method

let nama = "radioHead";
console.log(nama.charAt(0));//dia akan mengeluarkan r karena mengambil karakter 0 atau pertama

let band = "radioHead";
console.log(band.indexOf("H"));//akan mengeluarkan 5 karena dia mengambil karakter yang ada di index of dan h itu ada di 5

let buku = "lastTrain"
console.log(buku.lastIndexOf("a"));//sama aja kaya indexof tapi jikalau ada 2 karakter yang sama dia akan mengambil karakter terakhir

let book = "tereLiye"
console.log(book.length);//akan menghitung berapa panjang karakter yang ada di string

let gelas = "minum "
gelas = gelas.trim();
console.log(gelas);//memotong spasi yang ada di awal/akhir

console.log (gelas.toUpperCase());//membuat string menjadi CAPSLOCK

let tisu = "lap"
tisu = tisu.repeat(5)
console.log(tisu);//membuat string berulang sebanyak yang di tentukan

let earPhone = "musik"
check = earPhone.startsWith("m");
console.log(check);//mengecek apakah karakter awalnya sama dengan yang di tentukan

let check2 = check? earPhone : "salah vroh";
console.log(check2);

let emot = "angry"
hasil = emot.endsWith(("r"));
console.log(hasil);//kaya startswith bedannya dia mengambil karakter akhir

let emot2 = hasil? emot : "salah bre"
console.log(emot2);

let lippen = "lip balm"
let lip = lippen.includes(" ");//mengecek apakah string memiliki karakter yang di tentukan

if (lip) {
    console.log("tidak boleh ada spasi")
}else{
    console.log(lippen)
}

let notelp = "0897-9877-5678"
notelp = notelp.replaceAll("-", "/");
console.log(notelp);//menggantikan karakter yang di inginkan ke karakter lainnya yang diinginkan

noTelp = notelp.padStart(20, "1");
console.log(noTelp);//akan mengisi karakter hingga seluruh jumlahnya 20 dengan 1


