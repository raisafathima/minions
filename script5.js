let score = 0;
let missingNumber;

function startGame() {
    score = 0;
    document.getElementById('score').textContent = score;
    document.getElementById('feedback').textContent = '';
    generateSequence();
}

function generateSequence() {
    const startNumber = Math.floor(Math.random() * 10) + 1;   // Starting number of the sequence
    const difference = Math.floor(Math.random() * 5) + 1;     // Common difference between terms
    const length = 5;                                         // Length of the sequence
    
    const sequence = [];
    let missingIndex = Math.floor(Math.random() * length);    // Randomly select which number to hide

    for (let i = 0; i < length; i++) {
        const currentNumber = startNumber + i * difference;
        if (i === missingIndex) {
            sequence.push('_');     // Placeholder for missing number
            missingNumber = currentNumber;
        } else {
            sequence.push(currentNumber);
        }
    }
    
    document.getElementById('sequence').textContent = sequence.join(' , ');
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    
    if (userAnswer === missingNumber) {
        score++;
        document.getElementById('score').textContent = score;
        document.getElementById('feedback').textContent = 'Correct!';
    } else {
        document.getElementById('feedback').textContent = 'Incorrect. Try again!';
    }
    document.getElementById('answer').value = '';
    generateSequence();
}

// Start the game on page load
window.onload = startGame;