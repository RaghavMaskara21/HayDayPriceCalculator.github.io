var buildingMenu=  document.getElementById('buildingsDropDown');

var data={
    "GroceryStore":["Bolt","Duct_Tape","Stone_Block"],
    "Cinema":["Hammer","Nail","Wood_Panel"],
    "Diner":["Paint_Bucket","Plank","Screw"],
    "BedAndBreakfast":["Brick","Hand_Drill","Paint_Bucket"],
    "Spa":["Brick","Stone_Block","Tar_Bucket"],
    "GiftShop":["Hammer","Stone_Block","Tar_Bucket"],
    "BeachCafe":["Hammer","Hand_Drill","Tar_Bucket"],
    "PersonalTrain":["Refined_Coal","Iron_Bar","Silver_Bar","Gold_Bar","Platinum_Bar"],
    "TownHall":["Hammer","Paint_Bucket","Stone_Block"],
    "TrainStation":["Brick","Hand_Drill","Tar_Bucket"],
}
var level= document.getElementById('initial');
level.addEventListener('change', function () {
    var val = buildingMenu.value;
    if(val!="PersonalTrain"){
    document.getElementById("display1").innerHTML = parseInt(level.value)+1;
    document.getElementById("display2").innerHTML = parseInt(level.value)+1;
    document.getElementById("display3").innerHTML = parseInt(level.value)+1;
    }else{
        var x=parseInt(level.value);
        var y=5;
        if(x==2 || x==3 || x==4){y=5};
        if(x==5 || x==6 || x==7){y=10};
        if(x==8 || x==9 || x==10){y=15};
        if(x==11 || x==12 || x==13){y=20};
        if(x==14 || x==15 || x==16){y=25};
        if(x==17 || x==18 || x==19){y=30};
        if(x==2 || x==5 || x==8 || x==11 || x==14 || x==17)
        {
            document.getElementById("img3").src = "../images/Silver_Bar.png";
        }
        if(x==3 || x==6 || x==9 || x==12 || x==15 || x==18){
            document.getElementById("img3").src = "../images/Gold_Bar.png";
        }
        if(x==4 || x==7 || x==10 || x==13 || x==16 || x==19){
            document.getElementById("img3").src = "../images/Platinum_Bar.png";
        }
        
        document.getElementById("display1").innerHTML = y;
        document.getElementById("display2").innerHTML = y;
        document.getElementById("display3").innerHTML = y;
    }
});

buildingMenu.addEventListener('change', function () {
    var val = buildingMenu.value;
    console.log(val);    
    if(val=="GroceryStore" || val=="Cinema" || val=="Diner" || val=="BedAndBreakfast" || val=="Spa" || val=="GiftShop" || val=="BeachCafe"){
        var req = data[val];
        level.max="38";
        document.getElementById("img1").src = "../images/"+req[0]+".png";
        document.getElementById("img2").src = "../images/"+req[1]+".png";
        document.getElementById("img3").src = "../images/"+req[2]+".png";        
        console.log(req);
    }
    if(val=="TownHall" || val=="TrainStation"){
        var req = data[val];
        level.max="12";
        document.getElementById("img1").src = "../images/"+req[0]+".png";
        document.getElementById("img2").src = "../images/"+req[1]+".png";
        document.getElementById("img3").src = "../images/"+req[2]+".png";        
        console.log(req);
    }
    if(val=="PersonalTrain"){
        var req = data[val];
        level.max="19";
        document.getElementById("img1").src = "../images/Refined_Coal.png";
        document.getElementById("img2").src = "../images/Iron_Bar.png";
        document.getElementById("img3").src = "../images/Silver_Bar.png";
        document.getElementById("display1").innerHTML = 5;
        document.getElementById("display2").innerHTML = 5;
        document.getElementById("display3").innerHTML = 5;
    }
});

