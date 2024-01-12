function getValue(x) { 
document.getElementById("input-box").value += x;
}

function clearValue(y){
document.getElementById("input-box").value = y;
}

function output(){
var output =eval(document.getElementById("input-box").value);
document.getElementById("input-box").value = output;
}
