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

 

console.log(iphone);

//object: iphone - key: brand
document.getElementById("brand").innerHTML = iphone.brand;

// object: iphone - key: model
document.getElementById("model").innerHTML = iphone.model;


//function0// //object: iphone - key: background

var backgroundSwitch = document.getElementById("switch-toggle");
var body = document.getElementById("mybody");
var html = document.getElementById("myhtml");
var storageBorder1 = document.getElementById("small");
var storageBorder2 = document.getElementById("medium");
var storageBorder3 = document.getElementById("large");
var storageBorder4 = document.getElementById("xl");


backgroundSwitch.addEventListener("change", function backgroundDarkOrLight(){
  iphone.background = !iphone.background;//use my bolean value to change colours 
  body.style.border = iphone.background ? "groove 1px white" : "groove 1px black";
  body.style.backgroundColor = iphone.background ? "black" : "white";
  html.style.color = iphone.background ? "white" : "black";
  html.style.backgroundColor = iphone.background ? "black" : "white";
  storageBorder1.style.border = iphone.background ? "groove 1px white" : "groove 1px black";
  storageBorder2.style.border = iphone.background ? "groove 1px white" : "groove 1px black";
  storageBorder3.style.border = iphone.background ? "groove 1px white" : "groove 1px black";
  storageBorder4.style.border = iphone.background ? "groove 1px white" : "groove 1px black";
});





//function 1// //object: availability - key: instock

//could i make a loop so my text disappear when i click another to make the function more functional to a real website?

var blackStock = document.getElementById("black-stock")
var goldStock = document.getElementById("gold-stock")
var silverStock = document.getElementById("silver-stock")
var blueStock = document.getElementById("blue-stock")

var availability = [
  {inStock: true },
  {inStock: false }
];

//here i use my object and use [] to select if its true or false i hardcoded the textContent but i know it probably is not the best way to do it.
black.addEventListener("click", function stockBlack() {
  if (availability[0].inStock) {
    blackStock.textContent = "In stock";
    blackStock.style.color = "green";
  } else {
    blackStock.textContent = "Out of stock";
    blackStock.style.color = "red";
  }
});

gold.addEventListener("click", function stockGold() {
  if (availability[1].inStock) {
    goldStock.textContent = "In stock";
    goldStock.style.color = "green";
  } else {
    goldStock.textContent = "Out of stock";
    goldStock.style.color = "red";
  }
});

silver.addEventListener("click", function stockSilver() {
  if (availability[0].inStock) {
    silverStock.textContent = "In stock";
    silverStock.style.color = "green";
  } else {
    silverStock.textContent = "Out of stock";
    silverStock.style.color = "red";
  }
});

blue.addEventListener("click", function stockBlue() {
  if (availability[1].inStock) {
    blueStock.textContent = "In stock";
    blueStock.style.color = "green";
  } else {
    blueStock.textContent = "Out of stock";
    blueStock.style.color = "red";
  }
});





//function2//

// i used all may variables to not hardcode it for my textContent.
function setTotalPrice(storage, number){
  var sizeButton = document.getElementById(storage);
  var priceText = "Total:";
  var currency = "KR";
  sizeButton.addEventListener("click", function(){
      document.getElementById("price").textContent = priceText + iphone.price[number] + currency;
  });
}

//i take the function and target the divs in html and set a number to them so i can use it in my funciton above
setTotalPrice("small", 0);
setTotalPrice("medium", 1);
setTotalPrice("large", 2);
setTotalPrice("xl", 3);














