let seconds = 0;
let minutes = 0;
let hours = 0;
let miliseconds = 0;

let pause = true;

let secondsDOM = document.getElementById("seconds");
let minutesDOM = document.getElementById("minutes");
let hoursDOM = document.getElementById("hours");

let btnPlay = document.getElementById("play");
let btnPause = document.getElementById("pause");
let btnReset = document.getElementById("reset");


for (let index = 0; index < hoursDOM.textContent.length; index++) {
    console.log(hoursDOM.textContent[index]);

}

setInterval(() => {

    if (pause) {
        btnPause.className = "hide";
        return;
    }

    miliseconds++;
    if (miliseconds % 100 == 0) {
        seconds++;
        if (seconds % 60 == 0) {
            minutes++;
            seconds = 0;
            if (minutes % 60 == 0) {
                hours++;
                minutes = 0;
            }
        }
    }

    hoursDOM.textContent = hours + " : ";
    minutesDOM.textContent = minutes + " : ";
    secondsDOM.textContent = seconds + "";


}, 10);


btnReset.addEventListener('click', () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
});


btnPlay.addEventListener("click", () => {
    if (pause) {
        pause = false;
        btnPlay.firstChild.className = "bi bi-pause";
    } else {
        pause = true;
        btnPlay.firstChild.className = "bi bi-play-fill";
    }
});

