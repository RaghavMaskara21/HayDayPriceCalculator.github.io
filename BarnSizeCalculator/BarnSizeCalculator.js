function calculate() {

var initial = document.getElementById("initial");
var final = document.getElementById("final");

var ini = Number(initial.value);
var fin = Number(final.value);




var nou;
var total=0;
if(ini<1000 && fin<=1000 && ini%25==0 && fin%25==0 && ini<fin) {
    nou= (fin-ini)/25;
    in_bem = (ini/25)-1;
    for ( var i=1; i<=nou;i++)
       {
       total=total + in_bem;
       in_bem +=1;
       }
    console.log(total);
    document.getElementById("display1").innerHTML = total;
    document.getElementById("display2").innerHTML = total;
    document.getElementById("display3").innerHTML = total;
    document.getElementById("displayNull").innerHTML = " ";
}
else if (ini<1000 && fin>1000 && ini%25==0 && fin%25==0 && ini<fin) {
nou= ((1000-ini)/25) + ((fin-1000)/50);
in_bem = (ini/25)-1;
for ( var i=1; i<=nou;i++)
{
total=total + in_bem;
in_bem +=1;
}
console.log(total);
document.getElementById("display1").innerHTML = total;
document.getElementById("display2").innerHTML = total;
document.getElementById("display3").innerHTML = total;
document.getElementById("displayNull").innerHTML = " ";
}
else if (ini>= 1000 && fin>1000 && ini%25==0 && fin%25==0 && ini<fin) {
    nou= (fin-ini)/50;
in_bem = 39 + ((ini-1000)/50);
for ( var i=1; i<=nou;i++)
{
total=total + in_bem;
in_bem +=1;
}
console.log(total);
document.getElementById("display1").innerHTML = total;
document.getElementById("display2").innerHTML = total;
document.getElementById("display3").innerHTML = total;
document.getElementById("displayNull").innerHTML = " ";
}
else{
    document.getElementById("display1").innerHTML = " ";
    document.getElementById("display2").innerHTML = " ";
    document.getElementById("display3").innerHTML = " ";
    document.getElementById("displayNull").innerHTML = "Enter A Valid Barn Size";
}


}

