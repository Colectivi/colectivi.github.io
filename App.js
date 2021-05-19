
function myOverFunction_mob() {
    document.getElementById("sm").style.visibility = "visible";
    document.getElementById("erti").style.display = "flex";
}

function mouseOutFunction_mob(){
    document.getElementById("sm").style.visibility = "hidden"
    document.getElementById("erti").style.display = "none";
}

function myOverFunction_lap() {
    document.getElementById("sm").style.visibility = "visible";
    document.getElementById("ori").style.display = "flex";
}

function mouseOutFunction_lap(){
    document.getElementById("sm").style.visibility = "hidden"
    document.getElementById("ori").style.display = "none";
}
function myOverFunction_acc() {
    document.getElementById("sm").style.visibility = "visible";   
    document.getElementById("sami").style.display = "flex";
}

function mouseOutFunction_acc(){
    document.getElementById("sm").style.visibility = "hidden";
    document.getElementById("sami").style.display = "none";
}
function myOverFunction_photo() {
    document.getElementById("sm").style.visibility = "visible";
    
    document.getElementById("otxi").style.display = "flex";
}

function mouseOutFunction_photo(){
    document.getElementById("sm").style.visibility = "hidden";
    document.getElementById("otxi").style.display = "none";
}
function myOverFunction_console() {
    document.getElementById("sm").style.visibility = "visible";
    document.getElementById("xuti").style.display = "flex";
}

function mouseOutFunction_console(){
    document.getElementById("sm").style.visibility = "hidden";
    document.getElementById("xuti").style.display = "none";
}
var counter = parseInt(document.getElementById("add_to_cart")).value = 0;
console.log(counter);
console.log(typeof(counter));
function onClickFunction(){
    document.getElementById("add_to_cart").style.visibility = "visible";    
     counter ++;
    document.getElementById("add_to_cart").innerHTML = counter;

}

function addNewFunction (){
    var grid_container = document.getElementById("grid-container");
    var grid_item = document.createElement("div");
    var pp = document.createElement("p");
    var pn = document.createElement("p");
    grid_item.classList.add("grid-item"); 
    var price = prompt("გთხოვთ შეიყვანოთ ნივთის ფასი: ");
    var name = prompt("გთხოვთ შეიყვანოთ ნივთის დასახელება: ");
    var image = prompt("გთხოვთ შეიყვანეთ სურათის ლინკი ან მდებარეობა: ");
    var img = document.createElement('img');
    img.src = image;
    img.classList.add("product-img");
    price = document.createTextNode(price);
    name = document.createTextNode(name);
    grid_container.appendChild(grid_item);
    pp.appendChild(price);
    pn.appendChild(name);
    grid_item.appendChild(img);
    grid_item.appendChild(pp);
    grid_item.appendChild(pn);
    grid_container.insertBefore(grid_item ,grid_container.childNodes[0]);
}


