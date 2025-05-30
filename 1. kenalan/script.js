//manggil semua id 
let namaku = document.getElementById("namaku")
let halo = document.getElementById("halo")
let send = document.getElementById("send")
let nanya = document.getElementById("nanya")
let namaKamu = document.getElementById("namaKamu")
let udah = document.getElementById("udah")
let sapaNama = document.getElementById("sapaNama")
let reset = document.getElementById("reset")


halo.disabled= false //biar bisa disabled nantinya||cuman gatau harus di taro manaa WKWKWKWKWKWKKW
send.addEventListener("click", function(){
if(halo.value !== ""){ //!=="" itu biar js ngecek di value/isinya tidak kosong
    namaku.textContent= ""
    nanya.textContent= `HALLOOO!! NAMA KAMU SIAPA???`
    send.style.display= "none"//biar button send nya ilank
    halo.disabled= true //nah kan disabled, biar gabisa di ubah ubah
    namaKamu.disabled=false //biar input bawah nya gak ke disabled
}else {
    alert("kamu gmw nyapa aku:D?")
}
})

udah.addEventListener("click", function(){
if(namaKamu.value!==""){
    let nama = namaKamu.value.toUpperCase(); //toUpperCase biar di textcontent saat memanggil value nya menjadi berhurup KAPITAL
    sapaNama.textContent= `HAII HAII ${nama}, MAKASIH UDAH MAU KENALAN!!
    SALAM KENAL YAAA`
    nanya.textContent= "";
    udah.style.display="none";
    namaKamu.disabled= true;
}else{
    alert("ga mau kenalan sama aq:(?")
}
})

reset.addEventListener("click", function(){ //reset tinggal masukin yang berubah dan di balikan kondisinya
    namaku.textContent= "halooww nama aku tila!!"
    send.style.display= ""
    halo.disabled= false
    nanya.textContent=""
    sapaNama.textContent= ""
    udah.style.display=""
    halo.value=""
    namaKamu.value=""
})
