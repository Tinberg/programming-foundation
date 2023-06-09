window.onload = function() {
    alert("This is not Apple's original website!");
}

// IPHONE //

var iphone = {
    brand: "Apple",
    model: "Iphone 14",
    color: ["black", "gold", "silver", "blue"],
    storageCapacity: ["156 gb", "256 gb", "558 gb", "1 gb"],
    price: [8000, 10000, 12999, 15000],
    background: false
    } 

    var availability = [
      {inStock: true },
      {inStock: false }
    ];

console.log(iphone);

//object: iphone - key: brand
document.getElementById("brand").innerHTML = iphone.brand;

// object: iphone - key: model
document.getElementById("model").innerHTML = iphone.model;

//object: iphone - key:price
document.getElementById("price").innerHTML = iphone.price;


//function0// //object: iphone - key: background

//i make variables to target my html
var backgroundSwitch = document.getElementById("switch-toggle");
var body = document.getElementById("mybody");
var html = document.getElementById("myhtml")


backgroundSwitch.addEventListener("change", function(){
  iphone.background = !iphone.background;//use my bolean value to change colours 
  body.style.border = iphone.background ? "groove 1px white" : "groove 1px black"
  body.style.backgroundColor = iphone.background ? "black" : "white";
  html.style.color = iphone.background ? "white" : "black";
  html.style.backgroundColor = iphone.background ? "black" : "white";
  
});


//function 1// //object: availability - key: instock

//in this function i should make a loop so my text disappear when i click another.
var blackStock = document.getElementById("black-stock")
var goldStock = document.getElementById("gold-stock")
var silverStock = document.getElementById("silver-stock")
var blueStock = document.getElementById("blue-stock")



//here i use my object and use [] to select if its true or false i hardcoded the textContent but i know it probably is not the best way to do it.
black.addEventListener("click", function() {
  if (availability[0].inStock) {
    blackStock.textContent = "In stock";
    blackStock.style.color = "green";
  } else {
    blackStock.textContent = "Out of stock";
    blackStock.style.color = "red";
  }
});

gold.addEventListener("click", function() {
  if (availability[1].inStock) {
    goldStock.textContent = "In stock";
    goldStock.style.color = "green";
  } else {
    goldStock.textContent = "Out of stock";
    goldStock.style.color = "red";
  }
});

silver.addEventListener("click", function() {
  if (availability[0].inStock) {
    silverStock.textContent = "In stock";
    silverStock.style.color = "green";
  } else {
    silverStock.textContent = "Out of stock";
    silverStock.style.color = "red";
  }
});

blue.addEventListener("click", function() {
  if (availability[1].inStock) {
    blueStock.textContent = "In stock";
    blueStock.style.color = "green";
  } else {
    blueStock.textContent = "Out of stock";
    blueStock.style.color = "red";
  }
});










//function1//

// i used all may variables to not hardcode it for my textContent.
function storageAndPrice(storage, number){
    var sizeButton = document.getElementById(storage);
    var priceText = "Total:";
    var currency = "KR";
    sizeButton.addEventListener("click", function(){
        document.getElementById("price").textContent = priceText + iphone.price[number] + currency;
    });
}

//i take the function and target the divs in html and set a number to them so i can use it in my funciton above
storageAndPrice("size1", 0);
storageAndPrice("size2", 1);
storageAndPrice("size3", 2);
storageAndPrice("size4", 3);



//variable IPHONE and innerHTML to make text with javascript in HTML






//readme i described my functions and my javascript in my js file. i know my javascript code is not optimal, but i tried out different ways to write it, and learned alot. variation iphone has a brand and model that i wrote in javascript to add to html. 
// storageCapacity is how much hard drive each phone has, and i used function1 link storageCapacity to price. background is my bolean, and it's function is to set background to dark mode or light mode. function2 is just a test, and i know the code is bad. later i will change it and make a loop for it so it functions better. 


















