const subscribe = document.getElementById("subscribe");
const paypal = document.getElementById("paypal");
const dana = document.getElementById("dana");
const gopay = document.getElementById("gopay");
const submit = document.getElementById("submit");
const subtext = document.getElementById("subtext");
const text = document.getElementById("text");

submit.onclick = function(){
    if (subscribe.checked) {
        subtext.textContent= "kamu telah mensubcribe!!"
    }else{
        subtext.textContent= "kamu BELUM mensubscribe"
    }

    if(paypal.checked){
        text.textContent= "kamu bayar pake paypal"
    }
    else if(dana.checked){
        text.textContent= "kamu bayar pake dana"
    }
    else if(gopay.checked){
        text.textContent= "kamu bayar pake gopay"
    }
    else{
        text.textContent= "kamu harus memilih pembayaran"
    }
}
