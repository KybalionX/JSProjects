let count = document.querySelector("h1");
counter = 0;
window.addEventListener("keyup", (event) => {
    if(event.code == 'Space'){
        counter++;
    }
    count.innerHTML = counter
});