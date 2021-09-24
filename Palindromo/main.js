let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', () => {
    let text = input.value;
    if(text==""){
        alert("Ingrese algo!");
        return;
    }
    if(palindromo(text)){
        input.className="palindromo";
    }else{
        input.className="noPalindromo";
    }
});

input.addEventListener('input', () => {
    if(input.value == ""){
        input.className="";
    }
});

const palindromo = (word) => {
    return word.split("").reverse().join("") == word ? true : false;
}