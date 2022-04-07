import("./index.css");
import icon from './icon.jpeg';


function add(a,b){
    return a + b;
}

console.log(add(7,3));


let h1 = document.createElement("h1");
h1.innerHTML = "I am Very Happy!";
h1.classList.add('redtext');

let img = document.createElement("img");
img.src = icon;
img.classList.add('image')

let note = document.getElementById("submit").value;
console.log(note);

document.getElementById('root').appendChild(h1);
document.getElementById('img').appendChild(img);

