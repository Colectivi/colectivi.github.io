
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


