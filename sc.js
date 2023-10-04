var button = document.querySelector("#changeColorText"); 
var text = document.querySelector("#mainText");
button.onclick = function() { 
    text.classList.add("textGreen");
};