let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', () => {
    let text = input.value;
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
    let reverse="";
    if(word===""){
        alert("Debe ingresar una palabra!");
        return false;
    }
    for(i=word.length-1; i>=0; i--){
        reverse += word[i];
    }
    return reverse == word ? true : false; 
}