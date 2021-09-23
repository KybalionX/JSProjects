let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let number = button.textContent;
        if (number == 'C') {
            input.value = "";
            return;
        }
        if (number == '=') {
            if (input.value == "") {
                input.placeholder = "Digite algo!";
            }
            input.value = eval(input.value);
            return;
        }
        if (number == '<') {
            input.value = input.value.slice(0,-1);
            return;
        }
        input.value += number;
    });
});