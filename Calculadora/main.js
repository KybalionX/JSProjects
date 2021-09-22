let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        let number = button.textContent;
        if(number == 'C'){
            input.value = "";
            return;
        }
        if(number == '='){
            if(input.value == ""){
                input.placeholder = "Digite algo!";
            }
            console.log(eval(input.value));
            return;
        }
        input.value+=number;
    });
});