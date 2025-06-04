function selamat(username, age){
    console.log(`slmt`);
    console.log(`slmt y ${username}`);
    console.log(`lu skrng ${age} taon y`);
}
selamat("tila", 17);//ini cara memanggilkan function di atas
selamat("kaes", 19);//dan jika di panggil ulang dia akan menjalankannya kembali lognya(akan keluar *2)
//di panggilan ke 2 jika kita masukan angka yg berbeda dy akan mengeluarkan angka tersebut?yg bru

function add(x, y){
    let result = x+y
    return result;
}

console.log(add(9, 11));//bisa lngsng console.log

let answer = add(9, 1);//atw pake let untuk mngluarknnya
console.log(answer);


function kasihLima(angka) {
  return `kasih ${angka}`;//return ini kaya ngejawb si kasihLima di atas/ mungkin ky ngasih isian si kasihLima
}
console.log(kasihLima(5));


function isEmailValid(email){
    return email.includes(`@gmail.com`)? true : false //ini pake yg singkatnya if else
}
console.log(isEmailValid(`ppk@reddit.com`));
console.log(isEmailValid(`ppk@gmail.com`));
