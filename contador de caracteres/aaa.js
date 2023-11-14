var desc = document.querySelector("#descricao");

console.log(desc);

desc.addEventListener("keypress", function(e){

    var inputLength= desc.nodeValue.length
    const maxChars = 1000;

    if(inputLength >= maxChars){
        console.log("MAXCARACTERES");
        e.preventDefault();
    }

});

const input = document.querySelector('#input');
const counter = document.querySelector("couter");
const togglebutton = document.querySelector("#toggle");

let mode = "chatacters";

togglebutton.addEventListener("click" , () => {


}

input.addEventListener("input", () => {
let count = 0;


if (mode == "characters") {
    count = input.value.lenght;

    counter.textContent = '${count} caractere(s)';
} else {
}
}
}); 