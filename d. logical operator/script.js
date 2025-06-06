//logical operator
//AND = &&  kedua nya harus true untuk menghasilkan true
//OR = ||   jika ada satu true akan menghasilkan true
//NOT = !
const suhu= 50;
const cuacaCerah= true;

//&& (AND)
if(suhu>0 && suhu<=30){//suhunya 50, menjadikannya false karena
                        //keduanya menjadi tidak true(50<30 salah)
    console.log('suhu bagus');
}
else{
    console.log('suhu tidak bagus');//dia akan mengeluarkan statment false
}

// || (or)
if(suhu>0 || suhu<=30){//suhunya 50, menjadikannya true karena
                        //salah satunya menghasilkan true(50>0 benar)
    console.log('suhu bagus');
}
else{
    console.log('suhu tidak bagus');
}

// ! (NOT)
if(!cuacaCerah){//membalikan yang tadinya true menjadi false
                //menjadikan false menjadi true
                //membalikkan nilai boolean
    console.log('ini mendung');
}
else{
    console.log('ini cerah');
}
