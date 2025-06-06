let nama1 = document.getElementById("nama1");
let nama2 = document.getElementById("nama2");
let hitung = document.getElementById("hitung");
let hasil = document.getElementById("hasil");
let reset = document.getElementById("reset");


hitung.onclick=function(){
    if(nama1.value ==""){
        alert("nama tidak boleh kosong, kamu gapunya nama yh")
    }if(nama2.value ==""){
        alert("nama tidak boleh kosong, kamu gapunya pacar yh")
    }else{
        
        let persen= Math.floor(Math.random()*100)
        hasil.innerText= `kecocokan kamu adalahhhh ${persen}%`
        hitung.disabled= true;
    }
}

reset.onclick=function(){
    nama1.value= ""
    nama2.value= ""
    hasil.innerText= ""
    hitung.disabled= false;
}