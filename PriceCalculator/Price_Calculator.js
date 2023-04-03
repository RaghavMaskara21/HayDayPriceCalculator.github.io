    
        //scroll to bottom
        const backToBottomButton = document.querySelector(".back-to-bottom");
        const scrollContainer = () => {
            return document.documentElement || document.body;
          };
          
          document.addEventListener("scroll", () => {
            
            if (scrollContainer().scrollTop < scrollContainer().scrollHeight - 2000) {
                backToBottomButton.classList.remove("hidden")
            } else {
                backToBottomButton.classList.add("hidden")
            }
          })

          
        const goToBottom = () => {

            document.body.scrollIntoView({
                block: "end", 
                inline: "nearest",
                behavior: "smooth",
              });
            commitFood();
          };
          backToBottomButton.addEventListener("click", goToBottom)


        //cookie

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
            var nums  = new Array()
            var encode= ""
            var totalPrice = 0        
            for (idx in foods)
            {
                
                var ff = document.getElementById(foods[idx].tag)
                var num = parseInt(ff.value)
                var num2 = parseInt(ff.value*foods[idx].price)
                
                total+=num;
                totalPrice+=num2;
                // console.log(foods[idx].tag,ff.value*foods[idx].price,total)
                if (num > 0)
                {
                    fns.push(foods[idx].en)
                    nums.push(num)
                    total   =   total + num
                    totalPrice = totalPrice + num2
                    
                    encode  =   encode + foods[idx].tag + "#" + num + "#"
                }
                
            }

            var mult=document.getElementById("mult").value;
            var dis="";

            /* 
            

    for (idx in fns)
    {      
        dis = dis +  "1/" + ratioArray[idx] + " " +fns[idx] + " = " + nums[idx] + "\n";        
    }
    var x = dis;
var totalBems= 0
var list = x.split("\n");
list.pop();
    for( i=0; i<list.length;i++){
        console.log(list[i]);
        totalBems = totalBems + calculate(list[i]);
        }


    dis = dis + "Total Foods= " + total/2 + "\n";
    dis = dis + "Total Bems Required= " + totalBems;
    document.getElementById("display").innerHTML = dis;
    
    SetCookie("Price_Calculator", encode)
    //document.write(encode)
            */







    
            
            /*
            var fid     =   document.getElementById("fid")
            fid.value   =   gfid
            var fid     =   document.getElementById("fencode")
            fencode.value   =   encode
            
            var form     =   document.getElementById("foodForm")
            form.submit()
            */
        //    document.write("<body style=" + "background-image:url('https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png');" + ">")
        //     document.write("<div class=" + "container" + ">")
            for (idx in fns)
            {
               dis = dis + " &#9679; " +  fns[idx] + " = " + nums[idx] + "\n";   
                // document.write("<h4 style= " + "padding-top:1px;padding-left:48px;" + ">" +fns[idx] + " = " + nums[idx] + "</h4>")
            }

            dis = dis + " \n";
            dis = dis + "Total Foods = " + total/2 + "\n";
            dis = dis + "Total Price = " + totalPrice/2 + "\n";
            dis = dis + "Total Price * " + mult + " = " + (totalPrice/2)*mult + "\n";
            dis = dis + "Total Blankets Required = " + ((totalPrice*mult/2)/1098).toFixed(2)+ "\n";
            dis = dis + "Total Rings Required = " + ((totalPrice*mult/2)/824).toFixed(2)+ "\n";
            document.getElementById("display").innerHTML = dis;
            SetCookie("Price_Calculator", encode)
            //document.write(encode)
        }
        
        
        function resetFood()
        {
            for (idx in foods)
            {
                var ff = document.getElementById(foods[idx].tag)
                ff.value    =   "0"
            }
            document.getElementById("display").innerHTML = "";
            onFoodChange()
        }
        
      
    
            function Food(en, lvl, price, fn, imgid)
            {
                this.fn     =   fn
                this.en     =   en
                this.lvl    =   lvl
                this.price  =   price
                this.imgid  =   imgid
                this.tag    =   en.replace(/ /g , "");
                this.bc     =   ""
                        for (var i = 1; i <= (22 - this.en.length); i++) 
                {
                    this.bc =   this.bc + "&nbsp;"
                }
            }
            
            var foods   =   new Array
            (
        

                new Food("Axe", 5, 36 , "Tools", "Axes"),
                new Food("Saw", 5, 54 , "Tools", "Saw"),
                new Food("Dynamite", 5, 25 , "Tools", "Dynamite"),
                new Food("TNT barrel", 5, 72 , "Tools", "TNT_Barrel"),
                new Food("Shovel", 5, 108 , "Tools", "Shovel"),
                new Food("Pickaxe", 34, 126 , "Tools", "Pickaxe"),
        
                new Food("Lemon Lotion", 84, 403 , "Bath Kiosk", "Lemon_Lotion"),
                new Food("Honey Soap", 84, 327 , "Bath Kiosk", "Honey_Soap"),
                new Food("Exfoliating Soap", 93, 363 , "Bath Kiosk", "Exfoliating_Soap"),
                new Food("Honey Face Mask", 99, 320 , "Bath Kiosk", "Honey_Face_Mask"),
                
                new Food("Bread", 2, 21 , "Bakery", "Bread"),
                new Food("Cookie", 10, 104 , "Bakery", "Cookie"),
                new Food("Corn Bread", 7, 72 , "Bakery", "Corn_Bread"),
                new Food("Pizza", 33, 190 , "Bakery", "Pizza"),
                new Food("Spicy Pizza", 37, 226 , "Bakery", "Spicy_Pizza"),
                new Food("Raspberry Muffin", 19, 140 , "Bakery", "Raspberry_Muffin"),
                new Food("Blackberry Muffin", 26, 226 , "Bakery", "Blackberry_Muffin"),
                new Food("Potato Bread", 39, 284 , "Bakery", "Potato_Bread"),
                new Food("Frutti di Mare Pizza", 45, 403 , "Bakery", "Frutti_di_Mare_Pizza"),
                new Food("Banana Bread", 91, 424 , "Bakery", "Banana_Bread"),
                new Food("Gingerbread Cookie", 86, 273 , "Bakery", "Gingerbread_Cookie"),
                new Food("Macaroon", 101, 421 , "Bakery", "Macaroon"),
        
                new Food("Pancakes", 9, 108 , "BBQ Grill", "Pancake"),
                new Food("Bacon and Eggs", 11, 201 , "BBQ Grill", "Bacon_and_Eggs"),
                new Food("Hamburger", 18, 180 , "BBQ Grill", "Hamburger"),
                new Food("Roasted Tomatoes", 30, 118 , "BBQ Grill", "Roasted_Tomatoes"),
                new Food("Baked Potato", 35, 298 , "BBQ Grill", "Baked_Potato"),
                new Food("Fish burger", 27, 226 , "BBQ Grill", "Fish_burgers"),
                new Food("Fish and Chips", 41, 244 , "BBQ Grill", "Fish_and_Chips"),
                new Food("Lobster Skewer", 48, 417 , "BBQ Grill", "Lobster_Skewer"),
                new Food("Grilled Onion", 68, 190 , "BBQ Grill", "Grilled_Onion"),
                new Food("Banana Pancakes", 94, 352 , "BBQ Grill", "Banana_Pancakes"),
                new Food("Grilled Eggplant", 90, 324 , "BBQ Grill", "Grilled_Eggplant"),
                new Food("Fish Skewer", 96, 176 , "BBQ Grill", "Fish_Skewer"),
                new Food("Winter Veggies", 72, 198 , "BBQ Grill", "Winter_Veggies"),
                new Food("Garlic Bread", 60, 198 , "BBQ Grill", "Garlic_Bread"),
                new Food("Stuffed Peppers", 80, 352 , "BBQ Grill", "Stuffed_Peppers"),
                
                new Food("Cheese Cake", 24, 284 , "Cake Oven", "Cheese_cake"),
                new Food("Carrot Cake", 21, 165 , "Cake Oven", "Carrot_Cake"),
                new Food("Cream Cake", 23, 219 , "Cake Oven", "Cream_Cake"),
                new Food("Chocolate Cake", 36, 320 , "Cake Oven", "Chocolate_Cake"),
                new Food("Strawberry Cake", 35, 316 , "Cake Oven", "Strawberry_Cake"),
                new Food("Red Berry Cake", 23, 255 , "Cake Oven", "Red_Berry_Cake"),
                new Food("Potato Feta Cake", 38, 309 , "Cake Oven", "Potato_Feta_Cake"),
                new Food("Lemon Cake", 68, 896 , "Cake Oven", "Lemon_Cake"),
                new Food("Honey Apple Cake", 42, 482 , "Cake Oven", "Honey_Apple_Cake"),
                new Food("Fruit Cake", 89, 450 , "Cake Oven", "Fruit_Cake"),
                new Food("Pineapple Cake", 65, 259 , "Cake Oven", "Pineapple_Cake"),
                new Food("Fancy Cake", 54, 450 , "Cake Oven", "Fancy_Cake"),
                new Food("Chocolate Roll", 95, 604 , "Cake Oven", "Chocolate_Roll"),
                new Food("Pomegranate Cake", 108, 316 , "Cake Oven", "Pomegranate_Cake"),
                
                new Food("Strawberry Candle", 48, 370 , "Candle Maker", "Strawberry_Candle"),
                new Food("Raspberry Candle", 52, 360 , "Candle Maker", "Raspberry_Candle"),
                new Food("Lemon Candle", 72, 457 , "Candle Maker", "Lemon_Candle"),
                new Food("Colorful Candle", 84, 324 , "Candle Maker", "Colorful_Candles"),
                new Food("Floral Candle", 95, 442 , "Candle Maker", "Floral_Candle"),
                
                new Food("Caramel Apple", 51, 255 , "Candy Machine", "Caramel_Apple"),
                new Food("Toffee", 52, 176 , "Candy Machine", "Toffee"),
                new Food("Chocolate", 54, 460 , "Candy Machine", "Chocolate"),
                new Food("Lollipop", 57, 342 , "Candy Machine", "Lollipop"),
                new Food("Jelly Beans", 60, 684 , "Candy Machine", "Jelly_Beans"),
                new Food("Cotton Candy", 75, 226 , "Candy Machine", "Cotton_Candy"),
                new Food("Sesame Brittle", 78, 270 , "Candy Machine", "Sesame_Brittle"),
                new Food("Honey Peanuts", 63, 468 , "Candy Machine", "Honey_Peanuts"),
                
                new Food("Espresso", 42, 248 , "Coffee Kiosk", "Espresso"),
                new Food("caffe Latte", 43, 219 , "Coffee Kiosk", "Caffe_Latte"),
                new Food("Caffe Mocha", 45, 291 , "Coffee Kiosk", "Caffe_Mocha"),
                new Food("Raspberry Mocha", 46, 259 , "Coffee Kiosk", "Raspberry_Mocha"),
                new Food("Hot Chocolate", 47, 316 , "Coffee Kiosk", "Hot_Chocolate"),
                new Food("Iced Banana Latte", 88, 277 , "Coffee Kiosk", "Iced_Banana_Latte"),
                new Food("Caramel Latte", 62, 345 , "Coffee Kiosk", "Caramel_Latte"),

                new Food("Plain Cupcake", 109, 280 , "Cupcake Maker", "Plain_Cupcake"),
                new Food("Guava Cupcake", 109, 583 , "Cupcake Maker", "Guava_Cupcake"),
                new Food("Tropical Cupcake", 112, 572 , "Cupcake Maker", "Tropical_Cupcake"),
                new Food("Cookie Cupcake", 114, 712 , "Cupcake Maker", "Cookie_Cupcake"),
                
                new Food("Cream", 6, 50 , "Dairy", "Cream"),
                new Food("Butter", 9, 82 , "Dairy", "Butter"),
                new Food("Cheese", 12, 122 , "Dairy", "Cheese"),
                new Food("Goat Cheese", 33, 162 , "Dairy", "Goat_Cheese"),
                
                new Food("Bacon Fries", 87, 302 , "Deep Fryer", "Bacon_Fries"),
                new Food("Chili Poppers", 98, 406 , "Deep Fryer", "Chili_Poppers"),
                new Food("Hand Pies", 91, 295 , "Deep Fryer", "Hand_Pies"),
                new Food("Falafel", 98, 226 , "Deep Fryer", "Falafel"),
                new Food("Fried Candy Bar", 100, 658 , "Deep Fryer", "Fried_Candy_Bar"),
                new Food("Samosa", 103, 223 , "Deep Fryer", "Samosa"),
                
                new Food("Plain Donut", 76, 129 , "Donut Maker", "Plain_Donut"),
                new Food("Sprinkled Donut", 79, 313 , "Donut Maker", "Sprinkled_Donut"),
                new Food("Crunchy Donut", 82, 594 , "Donut Maker", "Crunchy_Donut"),
                new Food("Cream Donut", 86, 230 , "Donut Maker", "Cream_Donut"),
                new Food("Bacon Donut", 88, 388 , "Donut Maker", "Bacon_Donut"),
                new Food("Filled Donut", 93, 403 , "Donut Maker", "Filled_Donut"),
                
                new Food("Fish Fillet", 27, 54 , "Fishing", "Fish_Fillet"),
                new Food("Lobster Tail", 44, 201 , "Fishing", "Lobster_Tail"),
                new Food("Duck Feather", 50, 140 , "Fishing", "Duck_Feather"),
                
                new Food("Rustic Bouquet", 49, 208 , "Flowershop", "Rustic_Bouquet"),
                new Food("Bright Bouquet", 65, 338 , "Flowershop", "Bright_Bouquet"),
                new Food("Gracious Bouquet", 73, 500 , "Flowershop", "Gracious_Bouquet"),
                new Food("Candy Bouquet", 90, 554 , "Flowershop", "Candy_Bouquet"),
                new Food("Birthday Bouquet", 92, 349 , "Flowershop", "Birthday_Bouquet"),
                new Food("Soft Bouquet", 93, 298 , "Flowershop", "Soft_Bouquet"),           
                new Food("Veggie Bouquet", 106, 352 , "Flowershop", "Veggie_Bouquet"),
                
                
                
                new Food("Chocolate Fondue", 81, 626 , "Fondue Pot", "Chocolate_Fondue"),
                new Food("Bacon Fondue", 86, 507 , "Fondue Pot", "Bacon_Fondue"),
                new Food("Cheese Fondue", 91, 493 , "Fondue Pot", "Cheese_Fondue"),
                new Food("Tropical Fondue", 100, 417 , "Fondue Pot", "Tropical_Fondue"),

                new Food("Rich Fudge", 99, 644 , "Fudge Shop", "Rich_Fudge"),
                new Food("Mint Fudge", 102, 522 , "Fudge Shop", "Mint_Fudge"),
                new Food("Chili Fudge", 104, 540 , "Fudge Shop", "Chili_Fudge"),
                new Food("Lemon Fudge", 108, 590 , "Fudge Shop", "Lemon_Fudge"),
                new Food("Peanut Fudge", 111, 1141 , "Fudge Shop", "Peanut_Fudge"),
                
                new Food("Cloche Hat", 70, 468 , "Hat Maker", "Cloche_Hat"),
                new Food("Top Hat", 72, 619 , "Hat Maker", "Top_Hat"),
                new Food("Sun Hat", 74, 558 , "Hat Maker", "Sun_Hat"),
                new Food("Flower Crown", 86, 331 , "Hat Maker", "Flower_Crown"),
                
                new Food("Honey", 39, 154 , "Honey Extractor", "Honey"),
                new Food("Beeswax", 48, 234 , "Honey Extractor", "Beeswax"),
                
                new Food("Hot Dog", 75, 370 , "Hot Dog Stand", "Hot_Dog"),
                new Food("Tofu Dog", 76, 367 , "Hot Dog Stand", "Tofu_Dog"),
                new Food("Corn Dog", 78, 529 , "Hot Dog Stand", "Corn_Dog"),
                new Food("Onion Dog", 80, 306 , "Hot Dog Stand", "Onion_Dog"),
                
                new Food("Vanilla Ice Cream", 29, 172 , "Ice Cream Maker", "Vanilla_Ice_Cream"),
                new Food("Cherry Popsicle", 33, 352 , "Ice Cream Maker", "Cherry_Popsicle"),
                new Food("Strawberry Ice Cream", 34, 331 , "Ice Cream Maker", "Strawberry_Ice_Cream"),
                new Food("Chocolate Ice Cream", 39, 342 , "Ice Cream Maker", "Chocolate_Ice_Cream"),
                new Food("Orange Sorbet", 78, 399 , "Ice Cream Maker", "Orange_Sorbet"),
                new Food("Affogato", 78, 435 , "Ice Cream Maker", "Affogato"),
                new Food("Peach Ice Cream", 83, 450 , "Ice Cream Maker", "Peach_Ice_Cream"),
                new Food("Banana Split", 96, 403 , "Ice Cream Maker", "Banana_Split"),
                new Food("Mint Ice Cream", 85, 288 , "Ice Cream Maker", "Mint_Ice_Cream"),
                new Food("Sesame Ice Cream", 50, 176 , "Ice Cream Maker", "Sesame_Ice_Cream"),
                new Food("Peanut Butter Milkshake", 68, 619 , "Ice Cream Maker", "Peanut_Butter_Milkshake"),
                new Food("Coconut ice cream", 102, 320 , "Ice Cream Maker", "Coconut_Ice_Cream"),
                new Food("Fruit Sorbet", 106, 518 , "Ice Cream Maker", "Fruit_Sorbet"),
                
                new Food("Apple Jam", 35, 219 , "Jam Maker", "Apple_Jam"),
                new Food("Raspberry Jam", 36, 252 , "Jam Maker", "Raspberry_Jam"),
                new Food("Blackberry Jam", 37, 388 , "Jam Maker", "Blackberry_Jam"),
                new Food("Cherry Jam", 38, 334 , "Jam Maker", "Cherry_Jam"),
                new Food("Strawberry Jam", 50, 270 , "Jam Maker", "Strawberry_Jam"),
                new Food("Marmalade", 74, 457 , "Jam Maker", "Marmalade"),
                new Food("Peach Jam", 79, 464 , "Jam Maker", "Peach_Jam"),
                new Food("Grape Jam", 85, 162 , "Jam Maker", "Grape_Jam"),
                new Food("Plum Jam", 94, 385 , "Jam Maker", "Plum_Jam"),
                new Food("Passion Fruit Jam", 96, 118 , "Jam Maker", "Passion_Fruit_Jam"),
                
                new Food("Bracelet", 38, 514 , "Jeweler", "Bracelet"),
                new Food("Necklace", 39, 727 , "Jeweler", "Necklace"),
                new Food("Diamond Ring", 40, 824 , "Jeweler", "Diamond_Ring"),
                new Food("Iron Bracelet", 41, 658 , "Jeweler", "Iron_Bracelet"),
                new Food("Flower Pendant", 98, 698 , "Jeweler", "Flower_Pendant"),
                
                new Food("Carrot Juice", 26, 46 , "Juice Press", "Carrot_Juice"),
                new Food("Tomato Juice", 31, 162 , "Juice Press", "Tomato_Juice"),
                new Food("Apple Juice", 28, 129 , "Juice Press", "Apple_Juice"),
                new Food("Cherry Juice", 30, 216 , "Juice Press", "Cherry_Juice"),
                new Food("Berry Juice", 31, 205 , "Juice Press", "Berry_Juice"),
                new Food("Orange Juice", 71, 234 , "Juice Press", "Orange_Juice"),
                new Food("Grape Juice", 84, 104 , "Juice Press", "Grape_Juice"),
                new Food("Passion Fruit Juice", 88, 64 , "Juice Press", "Passion_Fruit_Juice"),
                new Food("Watermelon Juice", 92, 108 , "Juice Press", "Watermelon_Juice"),
                new Food("Mango Juice", 97, 230 , "Juice Press", "Mango_Juice"),
                new Food("Pineapple Juice", 52, 68 , "Juice Press", "Pineapple_Juice"),
                new Food("Guava Juice", 104, 252 , "Juice Press", "Guava_Juice"),
                
                new Food("Sweater", 17, 151 , "Loom", "Sweater"),
                new Food("Blue Woolly Hat", 19, 111 , "Loom", "Blue_Woolly_Hat"),
                new Food("Blue Sweater", 20, 208 , "Loom", "Blue_Sweater"),
                new Food("Red Scarf", 48, 288 , "Loom", "Red_Scarf"),
                new Food("Cotton Fabric", 18, 108 , "Loom", "Cotton_Fabric"),
                new Food("Flower Shawl", 71, 295 , "Loom", "Flower_Shawl"),
                
                new Food("Gnocchi", 72, 475 , "Pasta Kitchen", "Gnocchi"),
                new Food("Veggie Lasagna", 74, 532 , "Pasta Kitchen", "Veggie_Lasagna"),
                new Food("Lobster Pasta", 79, 637 , "Pasta Kitchen", "Lobster_Pasta"),
                new Food("Pasta Carbonara", 83, 410 , "Pasta Kitchen", "Pasta_Carbonara"),
                new Food("Spicy Pasta", 87, 576 , "Pasta Kitchen", "Spicy_Pasta"),
                new Food("Broccoli Pasta", 83, 345 , "Pasta Kitchen", "Broccoli_Pasta"),
                new Food("Mushroom Pasta", 101, 280 , "Pasta Kitchen", "Mushroom_Pasta"),
                
                new Food("Fresh Pasta", 67, 43 , "Pasta Maker", "Fresh_Pasta"),
                new Food("Rice Noodles", 73, 100 , "Pasta Maker", "Rice_Noodles"),
                
                new Food("Carrot Pie", 14, 82 , "Pie Oven", "Carrot_Pie"),
                new Food("Bacon Pie", 18, 219 , "Pie Oven", "Bacon_Pie"),
                new Food("Pumpkin Pie", 15, 158 , "Pie Oven", "Pumpkin_Pie"),
                new Food("Apple Pie", 28, 270 , "Pie Oven", "Apple_Pie"),
                new Food("Feta Pie", 34, 223 , "Pie Oven", "Feta_Pie"),
                new Food("Casserole", 36, 367 , "Pie Oven", "Casserole"),
                new Food("Shepherds Pie", 39, 280 , "Pie Oven", "Shepherds_Pie"),
                new Food("Fish Pie", 28, 226 , "Pie Oven", "Fish_Pie"),
                new Food("Lemon Pie", 67, 446 , "Pie Oven", "Lemon_Pie"),
                new Food("Peach Tart", 76, 435 , "Pie Oven", "Peach_Tart"),
                new Food("Passion Fruit Pie", 92, 111 , "Pie Oven", "Passion_Fruit_Pie"),
                new Food("Mushroom Pot Pie", 97, 162 , "Pie Oven", "Mushroom_Pot_Pie"),
                new Food("Eggplant Parmesan", 99, 442 , "Pie Oven", "Eggplant_Parmesan"),
                new Food("Chocolate Pie", 65, 514 , "Pie Oven", "Chocolate_Pie"),
                
                new Food("Popcorn", 8, 32 , "Popcorn Pot", "Popcorn"),
                new Food("Buttered Popcorn", 16, 126 , "Popcorn Pot", "Buttered_Popcorn"),
                new Food("Chili Popcorn", 25, 122 , "Popcorn Pot", "Chili_Popcorn"),
                new Food("Chocolate Popcorn", 44, 248 , "Popcorn Pot", "Chocolate_Popcorn"),
                new Food("Honey Popcorn", 40, 360 , "Popcorn Pot", "Honey_Popcorn"),
                new Food("Snack Mix", 64, 309 , "Popcorn Pot", "Snack_Mix"),

                new Food("Tea Pot", 94, 219 , "Pottery studio", "Tea_Pot"),
                new Food("Potted Plant", 96, 151 , "Pottery studio", "Potted_Plant"),
                new Food("Clay Mug", 99, 212 , "Pottery studio", "Clay_Mug"),

                new Food("Pickles", 91, 270 , "Preservation Station", "Pickles"),
                new Food("Canned fish", 95, 471 , "Preservation Station", "Canned_Fish"),
                new Food("Kimchi", 98, 219 , "Preservation Station", "Kimchi"),
                new Food("Dried fruit", 102, 266 , "Preservation Station", "Dried_Fruit"),
                new Food("Guava Compote", 104, 421 , "Preservation Station", "Guava_Compote"),
                
                new Food("Feta Salad", 58, 745 , "Salad Bar", "Feta_Salad"),
                new Food("BLT Salad", 62, 723 , "Salad Bar", "BLT_Salad"),
                new Food("Seafood Salad", 64, 763 , "Salad Bar", "Seafood_Salad"),
                new Food("Pasta Salad", 67, 759 , "Salad Bar", "Pasta_Salad"),
                new Food("Fruit Salad", 82, 597 , "Salad Bar", "Fruit_Salad"),
                new Food("Summer Salad", 84, 554 , "Salad Bar", "Summer_Salad"),
                new Food("Summer Rolls", 78, 316 , "Salad Bar", "Summer_Rolls"),
                new Food("Coleslaw", 75, 468 , "Salad Bar", "Coleslaw"),
                new Food("Veggie Platter", 74, 266 , "Salad Bar", "Veggie_Platter"),
                new Food("Mushroom Salad", 89, 216 , "Salad Bar", "Mushroom_Salad"),
                new Food("Beetroot Salad", 76, 234 , "Salad Bar", "Beetroot_Salad"),
                
                new Food("Bacon Toast", 65, 648 , "Sandwich Bar", "Bacon_Toast"),
                new Food("Veggie Bagel", 61, 532 , "Sandwich Bar", "Veggie_Bagel"),
                new Food("Egg Sandwich", 66, 583 , "Sandwich Bar", "Egg_Sandwich"),
                new Food("Honey Toast", 69, 255 , "Sandwich Bar", "Honey_Toast"),
                new Food("Goat Cheese Toast", 92, 302 , "Sandwich Bar", "Goat_Cheese_Toast"),
                new Food("Onion Melt", 84, 471 , "Sandwich Bar", "Onion_Melt"),
                new Food("Cucumber Sandwich", 79, 464 , "Sandwich Bar", "Cucumber_Sandwich"),
                new Food("Peanut Butter and Jelly Sandwich", 71, 601 , "Sandwich Bar", "Peanut_Butter_and_Jelly_Sandwich"),
                new Food("Hummus Wrap", 109, 374 , "Sandwich Bar", "Hummus_Wrap"), 
                
                new Food("Soy Sauce", 54, 154 , "Sauce Maker", "Soy_Sauce"),
                new Food("Olive Oil", 60, 277 , "Sauce Maker", "Olive_Oil"),
                new Food("Mayonnaise", 62, 367 , "Sauce Maker", "Mayonnaise"),
                new Food("Lemon Curd", 66, 378 , "Sauce Maker", "Lemon_Curd"),
                new Food("Tomato Sauce", 69, 230 , "Sauce Maker", "Tomato_Sauce"),
                new Food("Salsa", 77, 252 , "Sauce Maker", "Salsa"),
                new Food("Olive Dip", 62, 468 , "Sauce Maker", "Olive_Dip"),
                new Food("Hummus", 95, 277 , "Sauce Maker", "Hummus"),
                new Food("Tart Dressing", 100, 288 , "Sauce Maker", "Tart_Dressing"),

                
                
                new Food("Cotton Shirt", 19, 241 , "Sewing Machine", "Cotton_Shirt"),
                new Food("Wooly Chaps", 21, 309 , "Sewing Machine", "Wooly_Chaps"),
                new Food("Violet Dress", 25, 327 , "Sewing Machine", "Violet_Dress"),
                new Food("Pillow", 51, 676 , "Sewing Machine", "Pillow"),
                new Food("Blanket", 59, 1098 , "Sewing Machine", "Blanket"),
                
                new Food("Silver Bar", 24, 147 , "Smelter", "Silver_Bar"),
                new Food("Gold Bar", 25, 180 , "Smelter", "Gold_Bar"),
                new Food("Platinum Bar", 25, 205 , "Smelter", "Platinum_Bar"),
                new Food("Refined Coal", 33, 108 , "Smelter", "Refined_Coal"),
                new Food("Iron Bar", 34, 129 , "Smelter", "Iron_Bar"),
                
                new Food("Green Smoothie", 66, 320 , "Smoothie Mixer", "Green_Smoothie"),
                new Food("Berry Smoothie", 64, 547 , "Smoothie Mixer", "Berry_Smoothie"),
                new Food("Yogurt Smoothie", 70, 349 , "Smoothie Mixer", "Yogurt_Smoothie"),
                new Food("Mixed Smoothie", 88, 504 , "Smoothie Mixer", "Mixed_Smoothie"),
                new Food("Cocoa Smoothie", 100, 511 , "Smoothie Mixer", "Cocoa_Smoothie"),
                new Food("Plum Smoothie", 102, 522 , "Smoothie Mixer", "Plum_Smoothie"),
                new Food("Cucumber Smoothie", 70, 266 , "Smoothie Mixer", "Cucumber_Smoothie"),
                new Food("Black Sesame Smoothie", 93, 313 , "Smoothie Mixer", "Black_Sesame_Smoothie"),
                new Food("Tropical Smoothie", 104, 475 , "Smoothie Mixer", "Tropical_Smoothie"),
                
                new Food("Lobster Soup", 46, 612 , "Soup Kitchen", "Lobster_Soup"),
                new Food("Tomato Soup", 47, 478 , "Soup Kitchen", "Tomato_Soup"),
                new Food("Fish Soup", 53, 298 , "Soup Kitchen", "Fish_Soup"),
                new Food("Pumpkin Soup", 49, 392 , "Soup Kitchen", "Pumpkin_Soup"),
                new Food("Onion Soup", 72, 327 , "Soup Kitchen", "Onion_Soup"),
                new Food("Noodle Soup", 73, 432 , "Soup Kitchen", "Noodle_Soup"),
                new Food("Cabbage Soup", 65, 270 , "Soup Kitchen", "Cabbage_Soup"),
                new Food("Potato Soup", 78, 255 , "Soup Kitchen", "Potato_Soup"),
                new Food("Bell Pepper Soup", 81, 439 , "Soup Kitchen", "Bell_Pepper_Soup"),
                new Food("Broccoli Soup", 87, 237 , "Soup Kitchen", "Broccoli_Soup"),
                new Food("Mushroom Soup", 104, 176 , "Soup Kitchen", "Mushroom_Soup"),
                
                new Food("Peanuts", 62, 234 , "Squirrel Tree", "Peanuts"),
                
                new Food("Chickpea Stew", 106, 284 , "Stew Pot", "Chickpea_Stew"),
                new Food("Chili Stew", 109, 370 , "Stew Pot", "Chili_Stew"),
                new Food("Winter Stew", 112, 295 , "Stew Pot", "Winter_Stew"),

                new Food("Brown Sugar", 7, 32 , "Sugar Mill", "Brown_Sugar"),
                new Food("White Sugar", 13, 50 , "Sugar Mill", "White_Sugar"),
                new Food("Syrup", 18, 90 , "Sugar Mill", "Syrup"),
                
                new Food("Sushi Roll", 56, 489 , "Sushi Bar", "Sushi_Roll"),
                new Food("Lobster Sushi", 59, 637 , "Sushi Bar", "Lobster_Sushi"),
                new Food("Egg Sushi", 63, 550 , "Sushi Bar", "Egg_Sushi"),
                new Food("Big Sushi Roll", 76, 648 , "Sushi Bar", "Big_Sushi_Roll"),
                new Food("Rice Ball", 110, 464 , "Sushi Bar", "Rice_Ball"),
                
                new Food("Taco", 77, 396 , "Taco Kitchen", "Taco"),
                new Food("Fish Taco", 79, 392 , "Taco Kitchen", "Fish_Taco"),
                new Food("Quesadilla", 82, 241 , "Taco Kitchen", "Quesadilla"),
                new Food("Nachos", 87, 432 , "Taco Kitchen", "Nachos"),
                
                new Food("Green Tea", 80, 241 , "Tea Stand", "Green_Tea"),
                new Food("Milk Tea", 81, 190 , "Tea Stand", "Milk_Tea"),
                new Food("Honey Tea", 83, 313 , "Tea Stand", "Honey_Tea"),
                new Food("Lemon Tea", 86, 241 , "Tea Stand", "Lemon_Tea"),
                new Food("Orange Tea", 89, 255 , "Tea Stand", "Orange_Tea"),
                new Food("Iced Tea", 92, 252 , "Tea Stand", "Iced_Tea"),
                new Food("Mint Tea", 97, 255 , "Tea Stand", "Mint_Tea"),
                new Food("Apple Ginger Tea", 88, 169 , "Tea Stand", "Apple_Ginger_Tea"),
                new Food("Pomegranate Tea", 107, 313 , "Tea Stand", "Pomegranate_Tea"),

                new Food("Plain Waffle", 114, 198 , "Waffle Maker", "Plain_Waffle"),
                new Food("Berry Waffle", 114, 604 , "Waffle Maker", "Berry_Waffle"),
                
                new Food("Fried Rice", 69, 205 , "Wok Kitchen", "Fried_Rice"),
                new Food("Tofu Stir Fry", 89, 306 , "Wok Kitchen", "Tofu_Stir_Fry"),
                new Food("Spicy Fish", 79, 543 , "Wok Kitchen", "Spicy_Fish"),
                new Food("Peanut Noodles", 86, 597 , "Wok Kitchen", "Peanut_Noodles"),

                new Food("Plain Yogurt", 103, 234 , "Yogurt Maker", "Plain_Yogurt"),
                new Food("Strawberry Yogurt", 105, 529 , "Yogurt Maker", "Strawberry_Yogurt"),
                new Food("Tropical Yogurt", 109, 457 , "Yogurt Maker", "Tropical_Yogurt"),
        
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
                        // var t = document.getElementById(foods[idx].fn)
                        // t.innerHTML    =    foods[idx].fn + "(Total:" + total + ")"
                        last_fn  = foods[idx].fn
                    }
                    else
                    {
                        if (last_fn != foods[idx].fn)
                        {
                            var t = document.getElementById(foods[idx].fn)
                            t.innerHTML    =    foods[idx].fn + "(Total:" + total + ")"
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

                    document.write("<div class=\"col-5 heading\">");
                        document.write( "<h4>Name</h4>");
                    document.write("</div>");
                //     document.write("<div class=\"col-1 heading\">");
                //     document.write("<h4></h4>");
                // document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Level</h4> ");
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Price</h4>" );
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
                        document.write("<div class=\"col-5 heading\">");
                        document.write( "<h4>Name</h4>");
                    document.write("</div>");
                    // document.write("<div class=\"col-3 heading\">");
                    //     document.write("<h4></h4>");
                    // document.write("</div>");            
                        document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Level</h4> ");
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Price</h4>" );
                    document.write("</div>");
                    document.write("<div class=\"col-2 heading\">");
                        document.write("<h4>Quantity</h4>");
                    document.write("</div>");
                    
                        last_fn  = foods[idx].fn
                    }
                }
                
                document.write("<div class=\"col-3 foodName\">");
                          document.write( foods[idx].en);
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodPic\">");
                            document.write("<img class=\"foodPicSize\" src=\"../HD_Foods/"+ foods[idx].imgid +".png\">");
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodLevel\">");
                            document.write( foods[idx].lvl );
                        document.write("</div>");
                        document.write("<div class=\"col-2 foodPrice\">");
                            document.write( foods[idx].price );
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