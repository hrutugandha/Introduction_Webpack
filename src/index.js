import("./index.css");
//import icon from '../src/icon.png';
let root = document.getElementById("root");


function add(a,b){
    return a + b;
}

console.log(add(7,3));

function input(){

}

let h1 = document.createElement("h1");
h1.innerHTML = "take notes!";
h1.classList.add('redtext');

let text = document.createElement("textarea");
text.setAttribute("type", "text");
text.setAttribute("id", "text");
text.setAttribute('maxlength', 1000);
text.setAttribute('cols',40);
text.setAttribute('rows', 10);
text.setAttribute('placeholder',"start typing...");

let button = document.createElement("input");
button.setAttribute("type", "submit");
button.setAttribute("placeholder","submit");

button.onclick = function() {
    console.log(text.value);
    displaytext.innerHTML = text.value;
};

let displaytext = document.createElement("h3");
displaytext.setAttribute("id", "displaytext");

// var img = new Image();
// img.src = icon;

root.append(displaytext,h1,text,button);

