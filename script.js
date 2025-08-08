const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameArea = document.getElementById("game-area");

let score = 0;
let timeLeft = 30;
let moveCircleInterval;
let countdownInterval;
let gameTimeout;
let circle;

function startGame() {

    score = 0;
    timeLeft = 30;
    scoreDisplay.innerText = "Score: 0";
    timerDisplay.innerText = "Time Left: 30s";
    startBtn.disabled = true;


    if (!circle) {
        circle = document.createElement("div");
        circle.classList.add("circle");
        gameArea.appendChild(circle);
    }

    moveCircle();

    circle.addEventListener("click", handleCircleClick);

    moveCircleInterval = setInterval(moveCircle, 1000);

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;
    }, 1000);

    gameTimeout = setTimeout(endGame, 30000);
}

function handleCircleClick() {
    score++;
    scoreDisplay.innerText = "Score: " + score;
    moveCircle();
}

function moveCircle() {
    const maxX = gameArea.clientWidth - 50;
    const maxY = gameArea.clientHeight - 50;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    circle.style.left = `${randomX}px`;
    circle.style.top = `${randomY}px`;
}

function endGame() {
    clearInterval(moveCircleInterval);
    clearInterval(countdownInterval);
    circle.removeEventListener("click", handleCircleClick);
    startBtn.disabled = false;
    alert("Game Over! Your final score is: " + score);
}

startBtn.addEventListener("click", startGame);


// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable common inspect shortcuts
document.addEventListener("keydown", function (e) {
    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
        e.preventDefault();
    }

    // Ctrl+U
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
});
    