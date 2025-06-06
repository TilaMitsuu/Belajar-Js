
const buah= [//ini kumpulan data
    {nama: 'apple', warna: 'merah', kalori: 105 },
    {nama: 'pisang', warna: 'kuning', kalori:120},
    {nama: 'jeruk', warna: 'oren', kalori: 70},
    {nama: 'salak', warna: 'coklat', kalori: 90}]

//forEach untuk mengeluarkan data yang ada di (buah.data yang akan di)
buah.forEach(buah =>console.log(buah.warna))
buah.forEach(buah =>console.log(buah.nama))

//menampilkan warna dari buah buah tersebut 
const wrnBuah = buah.map(buah => buah.warna)
buah.splice(1, 2);//akan memotong array yang ada di urutan 1, 2
                    //bagian pisang dan jeruk


const yellowFruits = buah.filter(buah => buah.warna === "kuning");
//buah akan di filter dengan .filter() yang kalorinya di bawah 100(kalori<100)
const lowCalFruits = buah.filter(buah => buah.kalori < 100);
////buah akan di filter dengan .filter() yang kalorinya di atas 100(kalori>100)
const highCalFruits = buah.filter(buah => buah.kalori >= 100);

console.log(yellowFruits);    
console.log(lowCalFruits);    
console.log(highCalFruits);   

//mengambil data ke 0 atau pertama di kalori dan di tampilkan
console.log(buah[0].kalori);


console.log(wrnBuah)
console.log(buah)
