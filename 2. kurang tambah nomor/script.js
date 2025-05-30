let nomor = document.getElementById("number");
let kurang = document.getElementById("kurang");
let tambah = document.getElementById("tambah");
let reset = document.getElementById("reset");
let text = document.getElementById("text"); //text ini bakal jadi keluarnya nomor
let nomorAwal= 0 //ini nomor awalan yang ada saat baru masuk

kurang.onclick = function(){
    nomorAwal--; //nomor awal nya akan di kurangin -1 dengan -- setiap tombol di pencet
    nomor.textContent= nomorAwal;
    text.textContent= "angka telah dikurangi"
}

tambah.onclick = function(){
    nomorAwal++; //nomor awal nya akan di tambah +1 dengan ++ stiap tombol di pencet
    nomor.textContent= nomorAwal;
    text.textContent= "angka telah di tambah"
}

reset.onclick = function(){
    nomorAwal= 0; //dikembalikan lagi nomor awalnya menjadi 0, krn tadi telah di tambah/kurang
    nomor.textContent= nomorAwal;
    text.textContent= ""
}
