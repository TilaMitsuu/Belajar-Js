//jadi switch ini penggantinya if else
//jadi kalo kondisi(?) nya banyak mending pake ini
let nilai =40
let hasil; //kek nya ini variabel yang belom di beri nilai

switch(true){
    case nilai >= 90:
        hasil= "A" //nah di beri nilainya di sini
        break;//pemotong kondisi di atas, kalo ga di potong dia bakal neluarin hasil dari semua yang gaada breaknya
        case nilai >= 80:
        hasil= "B"
        break;
    case nilai >= 70:
        hasil= "C"
        break;
    case nilai >= 60:
        hasil= "D"
        break;
    default: //buat nampilin statment terakhir. jadi ngebuat yang 60 ke bawah isinya F gitu
        hasil="F";  
}

console.log(hasil);