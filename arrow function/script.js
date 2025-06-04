function hallo(){//ini contoh tanpa arrow function/ function biasa
    console.log("apa kabar");
}
hallo()

//ini conto arrow function ()=>
    const hai= (nama)=> console.log(`haii ${nama}`);
hai('tila');
hai('fio');

const sapa= (name, age)=>
    console.log(`halo nama saya ${name} umur saya ${age}`);
sapa('tila', 17);
sapa('kaes', 17);
//halo nama saya (name/yg pertama) umur saya 17(yang ke dua)



//arrow function harus ditetapkan ke suatu variabel, properti, atau parameter
//jadi gabisa tanpa const, let, var