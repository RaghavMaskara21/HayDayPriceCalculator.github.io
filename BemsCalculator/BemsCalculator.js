

function myFunction() {
var x = document.getElementById("myText").value;
console.log(x);
var total=0;
var list = x.split("\n");
var listNew = [];
for( i=0; i<list.length;i++){
    var index = list[i].indexOf("/");
    if(index !== -1){
    listNew[i]= list[i] + " ";  
    }
}
var filtered = listNew.filter(function (el) {
    return el != null;
  });
  
console.log(filtered);

var calcArray="";
for( i=0; i<filtered.length;i++){
calcArray = calcArray + (filtered[i] + " --> " + calculate(filtered[i]) + "\n");
total = total + calculate(filtered[i]);
}
calcArray= calcArray+ "\n Total Bems= " + Math.round(total*100)/100;
document.getElementById("display").innerHTML = calcArray;
document.getElementById("demo2").innerHTML = "Total Bems= " + Math.round(total*100)/100;
}

function calculate(item) {
var n = item.indexOf("/");
var sp= item.indexOf(" ",n);
var ratio= item.substring(n+1,sp);
var quantity = item.indexOf("=");
var quan = item.substring(quantity+1, quantity+6);
var bems = Math.round((quan/ratio)*100)/100;
return bems;
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
$("h3").css("color","red" );