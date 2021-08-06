function SetCookie(name,value)
{
    var Days = 30; 
    var exp  = new Date();
    exp.setTime(exp.getTime() + 100000000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)  
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
        if(arr != null) return unescape(arr[2]); return null;
}
    
var gfid        =   "123456789"
var gencode     =   getCookie("Price_Calculator")
if (gencode == null)
{
    gencode = ""
}
    
var fstl =  gencode.split("#")
    
function commitFood()
{
    
    var total = 0
    var fns   = new Array()
    var ratioArray = new Array()
    var nums  = new Array()
    var encode= ""
    var totalPrice = 0      
    for (idx in foods)
    {
        var ratioSelect = document.getElementById("rat"+foods[idx].tag)
        var ff = document.getElementById(foods[idx].tag)
        var ratio= parseFloat(ratioSelect.value)
        var num = parseInt(ff.value)
        var num2 = parseInt(ff.value*foods[idx].price)
        

        
        total+=num;
        totalPrice+=num2;
        
        //console.log(foods[idx].tag,ff.value*foods[idx].price,total)
        if (num > 0)
        {
            fns.push(foods[idx].en)
            ratioArray.push(ratio)
            nums.push(num)
            total   =   total + num  
            totalPrice = totalPrice + num2         
            encode  =   encode + foods[idx].tag + "#" + num + "#"
        }
        
    }        
        
var dis=""

    for (idx in fns)
    {      
        dis = dis + "1/" + ratioArray[idx] + " " +fns[idx] + " = " + nums[idx] + "\n";        
    }
    var x = dis;
var totalBems= 0
var list = x.split("\n");
list.pop();
    for( i=0; i<list.length;i++){
        console.log(list[i]);
        totalBems = totalBems + calculate(list[i]);
        }

    dis = dis + " \n";
    dis = dis + "Total Foods= " + total/2 + "\n";
    dis = dis + "Total Bems Required= " + totalBems + "\n";
    dis = dis + "Total Price (1x MP)= " + totalPrice/2 + "\n";
    document.getElementById("display").innerHTML = dis;
    
    SetCookie("Price_Calculator", encode)
    //document.write(encode)
}
 
function calculate(item) 
{
    var n = item.indexOf("/");
    var sp= item.indexOf(" ");
    var ratio= item.substring(n+1,sp);
    var quantity = item.indexOf("=");
    var quan = item.substring(quantity+1, quantity+10);
    var bems = Math.round((quan/ratio)*100)/100;
    return bems;
}
    
function resetFood()
{
    for (idx in foods)
    {
        var ff = document.getElementById(foods[idx].tag)
        ff.value    =   "0"
        var ratioSelect = document.getElementById("rat"+foods[idx].tag)
        ratioSelect.value = "0"
    }
    
    onFoodChange()
}



function Food(en, lvl, price, fn)
{
        
        this.fn     =   fn
        this.en     =   en
        this.lvl    =   lvl
        this.price  =   price
        this.tag    =   en.replace(/ /g , "");
        this.bc     =   ""
            for (var i = 1; i <= (22 - this.en.length); i++) 
            {
                this.bc =   this.bc + "&nbsp;"
            }
}
            
var foods   =   new Array
(


    new Food("Axes", 5, 36 , "Tools"),
    new Food("Saws", 5, 54 , "Tools"),
    new Food("Dynamites", 5, 25 , "Tools"),
    new Food("TNT barrels", 5, 72 , "Tools"),
    new Food("Shovels", 5, 108 , "Tools"),
    new Food("Pickaxe", 34, 126 , "Tools"),

    new Food("Lemon Lotion", 84, 403 , "Bath Kiosk"),
    new Food("Honey Soap", 84, 327 , "Bath Kiosk"),
    new Food("Exfoliating Soap", 93, 363 , "Bath Kiosk"),
    new Food("Honey Mask", 99, 320 , "Bath Kiosk"),

    new Food("Bread", 2, 21 , "Bakery"),
    new Food("Cookie", 10, 104 , "Bakery"),
    new Food("Corn Bread", 7, 72 , "Bakery"),
    new Food("Pizza", 33, 190 , "Bakery"),
    new Food("Spicy Pizza", 37, 226 , "Bakery"),
    new Food("Raspberry Muffin", 19, 140 , "Bakery"),
    new Food("Blackberry Muffin", 26, 226 , "Bakery"),
    new Food("Potato Bread", 39, 284 , "Bakery"),
    new Food("Frutti di Mare Pizza", 45, 403 , "Bakery"),
    new Food("Banana Bread", 91, 424 , "Bakery"),
    new Food("Gingerbread Cookie", 86, 273 , "Bakery"),

    new Food("Pancakes", 9, 108 , "BBQ Grill"),
    new Food("Bacon and Eggs", 11, 201 , "BBQ Grill"),
    new Food("Hamburger", 18, 180 , "BBQ Grill"),
    new Food("Roasted Tomatoes", 30, 118 , "BBQ Grill"),
    new Food("Baked Potato", 35, 298 , "BBQ Grill"),
    new Food("Fishburger", 27, 226 , "BBQ Grill"),
    new Food("Fish and Chips", 41, 244 , "BBQ Grill"),
    new Food("Lobster Skewer", 48, 417 , "BBQ Grill"),
    new Food("Grilled Onion", 68, 190 , "BBQ Grill"),
    new Food("Banana Pancakes", 94, 352 , "BBQ Grill"),
    new Food("Grilled Eggplant", 90, 324 , "BBQ Grill"),
    new Food("Fish Skewer", 96, 176 , "BBQ Grill"),
    new Food("Winter Veggies", 72, 198 , "BBQ Grill"),
    new Food("Garlic Bread", 60, 198 , "BBQ Grill"),
    new Food("Stuffed Peppers", 80, 352 , "BBQ Grill"),

    new Food("Cheese Cake", 24, 284 , "Cake Oven"),
    new Food("Carrot Cake", 21, 165 , "Cake Oven"),
    new Food("Cream Cake", 23, 219 , "Cake Oven"),
    new Food("Chocolate Cake", 36, 320 , "Cake Oven"),
    new Food("Strawberry Cake", 35, 316 , "Cake Oven"),
    new Food("Red Berry Cake", 23, 255 , "Cake Oven"),
    new Food("Potato Feta Cake", 38, 309 , "Cake Oven"),
    new Food("Lemon Cake", 68, 896 , "Cake Oven"),
    new Food("Honey Apple Cake", 42, 482 , "Cake Oven"),
    new Food("Fruit Cake", 89, 450 , "Cake Oven"),
    new Food("Pineapple Cake", 65, 259 , "Cake Oven"),
    new Food("Fancy Cake", 54, 450 , "Cake Oven"),
    new Food("Chocolate Roll", 95, 604 , "Cake Oven"),

    new Food("Strawberry Candle", 48, 370 , "Candle Maker"),
    new Food("Raspberry Candle", 52, 360 , "Candle Maker"),
    new Food("Lemon Candle", 72, 457 , "Candle Maker"),
    new Food("Colorful Candle", 84, 324 , "Candle Maker"),
    new Food("Floral Candle", 95, 442 , "Candle Maker"),

    new Food("Caramel Apple", 51, 255 , "Candy Machine"),
    new Food("Toffee", 52, 176 , "Candy Machine"),
    new Food("Chocolate", 54, 460 , "Candy Machine"),
    new Food("Lollipop", 57, 342 , "Candy Machine"),
    new Food("Jelly Beans", 60, 684 , "Candy Machine"),
    new Food("Cotton Candy", 75, 226 , "Candy Machine"),
    new Food("Sesame Brittle", 78, 270 , "Candy Machine"),
    new Food("Honey Peanuts", 63, 468 , "Candy Machine"),

    new Food("Espresso", 42, 248 , "Coffee Kiosk"),
    new Food("caffe Latte", 43, 219 , "Coffee Kiosk"),
    new Food("Caffe Mocha", 45, 291 , "Coffee Kiosk"),
    new Food("Raspberry Mocha", 46, 259 , "Coffee Kiosk"),
    new Food("Hot Chocolate", 47, 316 , "Coffee Kiosk"),
    new Food("Iced Banana Latte", 88, 277 , "Coffee Kiosk"),
    new Food("Caramel Latte", 62, 345 , "Coffee Kiosk"),

    new Food("Cream", 6, 50 , "Dairy"),
    new Food("Butter", 9, 82 , "Dairy"),
    new Food("Cheese", 12, 122 , "Dairy"),
    new Food("Goat Cheese", 33, 162 , "Dairy"),      

    new Food("Bacon Fries", 87, 302 , "Deep Fryer"),
    new Food("Chili Poppers", 98, 406 , "Deep Fryer"),
    new Food("Hand Pies", 91, 295 , "Deep Fryer"),
    new Food("Fried Candy Bar", 100, 658 , "Deep Fryer"),

    new Food("Fish Fillets", 27, 54 , "Fishing"),
    new Food("Lobsters", 44, 201 , "Fishing"),
    new Food("Duck Feather", 50, 140 , "Fishing"),

    new Food("Plain Donut", 76, 129 , "Donut Maker"),
    new Food("Sprinkled Donut", 79, 313 , "Donut Maker"),
    new Food("Crunchy Donut", 82, 594 , "Donut Maker"),
    new Food("Cream Donut", 86, 230 , "Donut Maker"),
    new Food("Bacon Donut", 88, 388 , "Donut Maker"),
    new Food("Filled Donut", 93, 403 , "Donut Maker"),

    new Food("Rustic Bouquet", 49, 208 , "Flowershop"),
    new Food("Bright Bouquet", 65, 338 , "Flowershop"),
    new Food("Soft Bouquet", 93, 298 , "Flowershop"),
    new Food("Candy Bouquet", 90, 554 , "Flowershop"),
    new Food("Gracious Bouquet", 73, 500 , "Flowershop"),
    new Food("Birthday Bouquet", 92, 349 , "Flowershop"),
    new Food("Veggie Bouquet", 106, 352 , "Flowershop"),

    new Food("Cheese Fondue", 91, 493 , "Fondue Pot"),
    new Food("Bacon Fondue", 86, 507 , "Fondue Pot"),
    new Food("Chocolate Fondue", 81, 626 , "Fondue Pot"),    

    new Food("Cloche Hat", 70, 468 , "Hat Maker"),
    new Food("Top Hat", 72, 619 , "Hat Maker"),
    new Food("Sun Hat", 74, 558 , "Hat Maker"),
    new Food("Flower Crown", 86, 331 , "Hat Maker"),

    new Food("Honey", 39, 154 , "Honey Extractor"),
    new Food("Beeswax", 48, 234 , "Honey Extractor"),

    new Food("Hot Dog", 75, 370 , "Hot Dog Stand"),
    new Food("Tofu Dog", 76, 367 , "Hot Dog Stand"),
    new Food("Corn Dog", 78, 529 , "Hot Dog Stand"),
    new Food("Onion Dog", 80, 306 , "Hot Dog Stand"),

    new Food("Vanilla Ice Cream", 29, 172 , "Ice Cream Maker"),
    new Food("Cherry Popsicle", 33, 352 , "Ice Cream Maker"),
    new Food("Strawberry Ice Cream", 34, 331 , "Ice Cream Maker"),
    new Food("Chocolate Ice Cream", 39, 342 , "Ice Cream Maker"),
    new Food("Orange Sorbet", 78, 399 , "Ice Cream Maker"),
    new Food("Peach Ice Cream", 83, 450 , "Ice Cream Maker"),
    new Food("Banana Split", 96, 403 , "Ice Cream Maker"),
    new Food("Mint Ice Cream", 85, 288 , "Ice Cream Maker"),
    new Food("Sesame Ice Cream", 50, 176 , "Ice Cream Maker"),
    new Food("Peanut Butter Milkshake", 68, 619 , "Ice Cream Maker"),

    new Food("Apple Jam", 35, 219 , "Jam Maker"),
    new Food("Raspberry Jam", 36, 252 , "Jam Maker"),
    new Food("Blackberry Jam", 37, 388 , "Jam Maker"),
    new Food("Cherry Jam", 38, 334 , "Jam Maker"),
    new Food("Strawberry Jam", 50, 270 , "Jam Maker"),
    new Food("Marmelade", 74, 457 , "Jam Maker"),
    new Food("Peach Jam", 79, 464 , "Jam Maker"),
    new Food("Grape Jam", 85, 162 , "Jam Maker"),
    new Food("Plum Jam", 94, 385 , "Jam Maker"),

    new Food("Bracelet", 38, 514 , "Jeweler"),
    new Food("Necklace", 39, 727 , "Jeweler"),
    new Food("Diamond Ring", 40, 824 , "Jeweler"),
    new Food("Iron Bracelet", 41, 658 , "Jeweler"),
    new Food("Flower Pendant", 98, 698 , "Jeweler"),

    new Food("Carrot Juice", 26, 46 , "Juice Press"),
    new Food("Tomato Juice", 31, 162 , "Juice Press"),
    new Food("Apple Juice", 28, 129 , "Juice Press"),
    new Food("Cherry Juice", 30, 216 , "Juice Press"),
    new Food("Berry Juice", 31, 205 , "Juice Press"),
    new Food("Orange Juice", 71, 234 , "Juice Press"),
    new Food("Grape Juice", 84, 104 , "Juice Press"),
    new Food("Watermelon Juice", 92, 108 , "Juice Press"),
    new Food("Pineapple Juice", 52, 68 , "Juice Press"),

    new Food("Sweater", 17, 151 , "Loom"),
    new Food("Blue Woolly Hat", 19, 111 , "Loom"),
    new Food("Blue Sweater", 20, 208 , "Loom"),
    new Food("Red Scarf", 48, 288 , "Loom"),
    new Food("Cotton Fabrics", 18, 108 , "Loom"),
    new Food("Flower Shawl", 71, 295 , "Loom"),

    new Food("Gnocchi", 72, 475 , "Pasta Kitchen"),
    new Food("Veggie Lasagna", 74, 532 , "Pasta Kitchen"),
    new Food("Lobster Pasta", 79, 637 , "Pasta Kitchen"),
    new Food("Pasta Carbonara", 83, 410 , "Pasta Kitchen"),
    new Food("Spicy Pasta", 87, 576 , "Pasta Kitchen"),
    new Food("Broccoli Pasta", 83, 345 , "Pasta Kitchen"),
    new Food("Mushroom Pasta", 101, 280 , "Pasta Kitchen"),

    new Food("Fresh Pasta", 67, 43 , "Pasta Maker"),
    new Food("Rice Noodles", 73, 100 , "Pasta Maker"),

    new Food("Carrot Pie", 14, 82 , "Pie Oven"),
    new Food("Bacon Pie", 18, 219 , "Pie Oven"),
    new Food("Pumpkin Pie", 15, 158 , "Pie Oven"),
    new Food("Apple Pie", 28, 270 , "Pie Oven"),
    new Food("Feta Pie", 34, 223 , "Pie Oven"),
    new Food("Casserole", 36, 367 , "Pie Oven"),
    new Food("Shepherds Pie", 39, 280 , "Pie Oven"),
    new Food("Fish Pie", 28, 226 , "Pie Oven"),
    new Food("Lemon Pie", 67, 446 , "Pie Oven"),
    new Food("Peach Tart", 76, 435 , "Pie Oven"),
    new Food("Mushroom Pot Pie", 97, 162 , "Pie Oven"),
    new Food("Eggplant Parmesan", 99, 442 , "Pie Oven"),
    new Food("Chocolate Pie", 65, 514 , "Pie Oven"),

    new Food("Popcorn", 8, 32 , "Popcorn Pot"),
    new Food("Butter Popcorn", 16, 126 , "Popcorn Pot"),
    new Food("Chili Popcorn", 25, 122 , "Popcorn Pot"),
    new Food("Chocolate Popcorn", 44, 248 , "Popcorn Pot"),
    new Food("Honey Popcorn", 40, 360 , "Popcorn Pot"),
    new Food("Snack Mix", 64, 309 , "Popcorn Pot"),

    new Food("Feta Salad", 58, 745 , "Salad Bar"),
    new Food("BLT Salad", 62, 723 , "Salad Bar"),
    new Food("Seafood Salad", 64, 763 , "Salad Bar"),
    new Food("Pasta Salad", 67, 759 , "Salad Bar"),
    new Food("Fruit Salad", 82, 597 , "Salad Bar"),
    new Food("Summer Salad", 84, 554 , "Salad Bar"),
    new Food("Summer Rolls", 78, 316 , "Salad Bar"),
    new Food("Coleslaw", 75, 468 , "Salad Bar"),
    new Food("Veggie Platter", 74, 266 , "Salad Bar"),
    new Food("Mushroom Salad", 89, 216 , "Salad Bar"),
    new Food("Beetroot Salad", 76, 234 , "Salad Bar"),

    new Food("Bacon Toast", 65, 648 , "Sandwich Bar"),
    new Food("Veggie Bagel", 61, 532 , "Sandwich Bar"),
    new Food("Egg Sandwich", 66, 583 , "Sandwich Bar"),
    new Food("Honey Toast", 69, 255 , "Sandwich Bar"),
    new Food("Goat Cheese Toast", 92, 302 , "Sandwich Bar"),
    new Food("Onion Melt", 84, 471 , "Sandwich Bar"),
    new Food("Cucumber Sandwich", 79, 464 , "Sandwich Bar"),
    new Food("Peanut Butter Sandwich", 71, 601 , "Sandwich Bar"),

    new Food("Soy Sauce", 54, 154 , "Sauce Maker"),
    new Food("Olive Oil", 60, 277 , "Sauce Maker"),
    new Food("Mayonaise", 62, 367 , "Sauce Maker"),
    new Food("Lemon Curd", 66, 378 , "Sauce Maker"),
    new Food("Tomato Sauce", 69, 230 , "Sauce Maker"),
    new Food("Salsa", 77, 252 , "Sauce Maker"),
    new Food("Olive Dip", 62, 468 , "Sauce Maker"),

    new Food("Cotton Shirt", 19, 241 , "Sewing Machine"),
    new Food("Wooly Pants", 21, 309 , "Sewing Machine"),
    new Food("Violet Dress", 25, 327 , "Sewing Machine"),
    new Food("Pillow", 51, 676 , "Sewing Machine"),
    new Food("Blanket", 59, 1098 , "Sewing Machine"),

    new Food("Silver Bar", 24, 147 , "Smelter"),
    new Food("Gold Bar", 25, 180 , "Smelter"),
    new Food("Platinum Bar", 25, 205 , "Smelter"),
    new Food("Coal Bar", 33, 108 , "Smelter"),
    new Food("Iron Bar", 34, 129 , "Smelter"),

    new Food("Green Smoothie", 66, 320 , "Smoothie Mixer"),
    new Food("Berry Smoothie", 64, 547 , "Smoothie Mixer"),
    new Food("Yogurt Smoothie", 70, 349 , "Smoothie Mixer"),
    new Food("Mixed Smoothie", 88, 504 , "Smoothie Mixer"),
    new Food("Cocoa Smoothie", 100, 511 , "Smoothie Mixer"),
    new Food("Plum Smoothie", 102, 522 , "Smoothie Mixer"),
    new Food("Cucumber Smoothie", 70, 266 , "Smoothie Mixer"),
    new Food("Black Sesame Smoothie", 93, 313 , "Smoothie Mixer"),

    new Food("Lobster Soup", 46, 612 , "Soup Kitchen"),
    new Food("Tomato Soup", 47, 478 , "Soup Kitchen"),
    new Food("Fish Soup", 53, 298 , "Soup Kitchen"),
    new Food("Pumpkin Soup", 49, 392 , "Soup Kitchen"),
    new Food("Onion Soup", 72, 327 , "Soup Kitchen"),
    new Food("Noodle Soup", 73, 432 , "Soup Kitchen"),
    new Food("Cabbage Soup", 65, 270 , "Soup Kitchen"),             
    new Food("Potato Soup", 78, 255 , "Soup Kitchen"),
    new Food("Bell Pepper Soup", 81, 439 , "Soup Kitchen"),
    new Food("Broccoli Soup", 87, 237 , "Soup Kitchen"),
    new Food("Mushroom Soup", 104, 176 , "Soup Kitchen"),

    new Food("Peanuts", 62, 234 , "Squirrel Tree"),

    new Food("Brown Sugar", 7, 32 , "Sugar Mill"),
    new Food("White Sugar", 13, 50 , "Sugar Mill"),
    new Food("Syrup", 18, 90 , "Sugar Mill"),

    new Food("SushiRoll", 56, 489 , "Sushi Bar"),
    new Food("LobsterSushi", 59, 637 , "Sushi Bar"),
    new Food("Egg Sushi", 63, 550 , "Sushi Bar"),
    new Food("Big Sushi Roll", 76, 648 , "Sushi Bar"),
    new Food("Rice Ball", 110, 464 , "Sushi Bar"),

    new Food("Taco", 77, 396 , "Taco Kitchen"),
    new Food("Fish Taco", 79, 392 , "Taco Kitchen"),
    new Food("Quesadilla", 82, 241 , "Taco Kitchen"),
    new Food("Nachos", 87, 432 , "Taco Kitchen"),

    new Food("Green Tea", 80, 241 , "Tea Stand"),
    new Food("Milk Tea", 81, 190 , "Tea Stand"),
    new Food("Honey Tea", 83, 313 , "Tea Stand"),
    new Food("Lemon Tea", 86, 241 , "Tea Stand"),
    new Food("Orange Tea", 89, 255 , "Tea Stand"),
    new Food("Ice Tea", 92, 252 , "Tea Stand"),
    new Food("Mint Tea", 97, 255 , "Tea Stand"),
    new Food("Apple Ginger Tea", 88, 169 , "Tea Stand"),

    new Food("Fried Rice", 69, 205 , "Wok Kitchen"),
    new Food("Tofu Stir Fry", 306 , 100 , "Wok Kitchen"),
    new Food("Spicy Fish", 79, 543 , "Wok Kitchen"),
    new Food("Peanut Noodles", 86, 597 , "Wok Kitchen"),

)

function onFoodChange(id)
    {
            var total = 0
        for (idx in foods)
            {

            var ff = document.getElementById(foods[idx].tag)
            //document.write(foods[idx].tag)
            //document.write(ff.value)
            total   =   total + parseInt(ff.value)
            }

        var t = document.getElementById("total")
        t.innerHTML="Total Food Number: " + total;

        var last_fn = ""
        for (idx in foods)
        {
                if (idx == 0)
                {
                    //var t = document.getElementById(foods[idx].fn)
                    //t.innerHTML    =    foods[idx].fn + "(Total:" + total + ")"
                    last_fn  = foods[idx].fn
                }
                else
                {
                    if (last_fn != foods[idx].fn)
                    {
                        var t = document.getElementById(foods[idx].fn)
                        t.innerHTML    =    foods[idx].fn + " (Total:" + total + ")"
                        last_fn  = foods[idx].fn
                    }
                }
        }
    }

    function getDefaultFoodValue(foodTag)
    {
            for (var idx = 0; idx < fstl.length; idx++)
               {
               if (fstl[idx] == foodTag)
                     {
                return parseInt(fstl[idx + 1])
                     }
                }
        return 0
    }

    var last_fn = ""

    for (idx in foods) 
    {
        if (idx == 0)
        {
        console.log(foods[idx].fn);
        
        document.write("<div class=" + "col-12"  + ">");
            document.write("<h3 class=\"machineHeading\"> " + foods[idx].fn + "</h3>")
            document.write("<ul type=\"" + foods[idx].fn + "\">")
        document.write("</div>");
        document.write("<div class=\"col-3 heading\">");
            document.write( "<h4>Name</h4>");
        document.write("</div>");
        document.write("<div class=\"col-3 heading\">");
            document.write("<h4>Level</h4> ");
        document.write("</div>");
        document.write("<div class=\"col-3 heading\">");
            document.write("<h4>Ratio</h4>" );
        document.write("</div>");
        document.write("<div class=\"col-3 heading\">");
            document.write("<h4>Quantity</h4>");
        document.write("</div>");
        last_fn  = foods[idx].fn
        }
        else
        {
            if (last_fn != foods[idx].fn)
            {                  
                document.write("<hr>");
                document.write("<div class=" + "col-12 " + ">");
                    document.write("<h3 id=\"" + foods[idx].fn + "\"  + class=\"machineHeading\" >" + foods[idx].fn + "</h3>")
                    document.write("<ul type=\"" + foods[idx].fn + "\">")
                document.write("</div>");                
                document.write("<div class=\"col-3 heading\">");
                    document.write( "<h4>Name</h4>");
                document.write("</div>");
                document.write("<div class=\"col-3 heading\">");
                    document.write("<h4>Level</h4> ");
                document.write("</div>");
                document.write("<div class=\"col-3 heading\">");
                    document.write("<h4>Ratio</h4>" );
                document.write("</div>");
                document.write("<div class=\"col-3 heading\">");
                    document.write("<h4>Quantity</h4>");
                document.write("</div>");
                last_fn  = foods[idx].fn
            }
        }

        document.write("<div class=\"col-3 foodName\">");
            document.write( foods[idx].en);
        document.write("</div>");
        document.write("<div class=\"col-3 foodLevel\">");
            document.write( foods[idx].lvl );
        document.write("</div>");
        document.write("<div class=\"col-3 ratioInput\">");
            document.write("<input class=" + "ratio" + " type=\"number\" id=\"" + "rat" + foods[idx].tag + "\" step=\"0.5\" min=\"0\" value=\"" + getDefaultFoodValue(foods[idx].tag) + "\" onchange=\"onFoodChange(this.id)\">" );
        document.write("</div>");
        document.write("<div class=\"col-3 quantityInput\">");
            document.write("<input class=" + "numinp" + " type=\"number\" id=\"" + foods[idx].tag + "\" step=\"1\" min=\"0\" value=\"" + getDefaultFoodValue(foods[idx].tag) + "\" onchange=\"onFoodChange(this.id)\">" );
        document.write("</div>");
    
    }

onFoodChange()


function copyToClipboard(element) {
    var $temp = $("<textarea>");
    var brRegex = /<br\s*[\/]?>/gi;
    $("body").append($temp);
    $temp.val($(element).html().replace(brRegex, "\r\n")).select();
    document.execCommand("copy");
    $temp.remove();
}

function toggleRatio() {
    // Get the checkbox
    var checkBox = document.getElementById("toggle");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
}





// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
//   }
  
/*
foods = array of foods
Foods = class
        this.fn     =   fn  - machine
        this.en     =   en - food name
        this.lvl    =   lvl - level
        this.price  =   price 
        this.tag    =   en.replace(/ /g , ""); - food name without space
        this.bc     =   ""
idx= index from 0 to end
ratio button id = "rat" + foods[idx].tag
numinp id = foods[idx].tag


*/
