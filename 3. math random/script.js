//kalo math random itu untuk menampilkan angka random
//jadi kalo math floor itu buat membulatkan angka misalnya 1,8 jadi 2
const x = Math.floor(Math.random()*10);
const y = Math.floor(Math.random()* 100);
const z = Math.floor(Math.random()*1000);

//tanpa math.floor() dia akan menghasilkan angka desimal
const a = Math.random();

console.log(x);
console.log(y);
console.log(z);
console.log(a);//ini keluarnya angka random(0,angka random)
