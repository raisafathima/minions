let time = 30; // seconds
let score = 0;
let correctAnswer = 0;
let timer;

function startGame() {
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('feedback').textContent = '';
    timer = setInterval(countdown, 1000);
    generateQuestion();
}

function countdown() {
    if (time <= 0) {
        clearInterval(timer);
        document.getElementById('feedback').textContent = 'Time\'s up! Your final score: ' + score;
    } else {
        time--;
        document.getElementById('time').textContent = time;
    }
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    document.getElementById('question').textContent = ${num1} + ${num2} = ?;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = 'Incorrect!';
    }
    document.getElementById('answer').value = '';
    generateQuestion();
}

// Start the game when the page loads
window.onload = startGame;