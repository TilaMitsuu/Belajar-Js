const fullName = "cantik atila"
const email = "tila@gmail.com"

let firstName = fullName.slice(0, 6);//0 awal karakter yang akan di potong, dan 6 akhirannya
//jadi .slice akan memotong dari nomor ini ke nomor ini
let lastName = fullName.slice(7, 12);
let lastName2 = fullName.slice(7);//kalo hanya ada 1 angka
//dia akan mengambil angka itu, kebelakang(kaya lastName)

//dia akan memotong 3 huruf di awal
let firstChar = fullName.slice(3);
//dia akan mengambil 3 huruf di akhir
let lastChar = fullName.slice(-3);

//kalo ada 0, di awalnya dia akan mengambil char ke 0>" " yang di panggil dengan indexOf
let firstName3 = fullName.slice(0, fullName.indexOf(" "));
//kalo nggak ada 0, dia mengambil dari " ">akhir
//+1 untuk menghilangkan " "(spasi) yang terikut saat memanggil lastName3
let lastName3 = fullName.slice(fullName.indexOf(" ")+1);

let username = email.slice(0, email.indexOf("@"));
//+1 untuk menghilangkan "@" yang terikut saat memanggil extension
let extension = email.slice(email.indexOf("@")+1);

console.log(firstName);
console.log(lastName);
console.log(lastName2);

console.log(firstChar);
console.log(lastChar);

console.log(firstName3);
console.log(lastName3);

console.log(username);
console.log(extension);
