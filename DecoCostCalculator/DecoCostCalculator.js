function calculate() {

    var ini = document.getElementById("initial");
    var fin = document.getElementById("final");
    var quan =  document.getElementById("quantity");
    
    var initial = Number(ini.value);
    var final = Number(fin.value);
    var quantity = Number(quan.value);

    var change = final - initial;

    var total = quantity/2*(2*initial+(quantity-1)*change);
    document.getElementById("display").innerHTML = total + " Coins Needed to Decorate";
}