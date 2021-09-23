let count = document.querySelector("h1");
let counter = 0;
let msg = document.querySelector('p');
window.addEventListener("keyup", (event) => {
    if (event.code == 'Space') {
        counter++;
    }
    count.innerHTML = counter;
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    msg.innerHTML = "Touch screen"
    window.addEventListener('touchend', () => {
        counter++;
        count.innerHTML = counter;
    });
}
