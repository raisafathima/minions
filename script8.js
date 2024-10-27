const questions = [
    // Existing questions
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "Who wrote the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HyperText Makeup Language", "Hyperlink and Text Markup Language", "HighText Markup Language"],
        answer: "HyperText Markup Language"
    },

    // New Science questions
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "3,000 km/s"],
        answer: "300,000 km/s"
    },
    {
        question: "What is the main gas found in the air we breathe?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "What is the most abundant element in the universe?",
        options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
        answer: "Hydrogen"
    },
    
    // New General Knowledge questions
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan"
    },
    
    // New Technical questions
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "Java", "HTML", "C++"],
        answer: "HTML"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which is not a programming language?",
        options: ["Python", "JavaScript", "HTML", "Ruby"],
        answer: "HTML"
    },
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Application Program Interface", "Advanced Programming Interface", "Application Protocol Interface"],
        answer: "Application Programming Interface"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('scoreContainer').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz');
    
    quizContainer.innerHTML = <h2>${currentQuestion.question}</h2>;
    currentQuestion.options.forEach(option => {
        quizContainer.innerHTML += `
            <div>
                <input type="radio" name="option" value="${option}" id="${option}">
                <label for="${option}">${option}</label>
            </div>
        `;
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    } else {
        alert("Please select an answer!");
    }
}

function showScore() {
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('score').innerText = score;
    document.getElementById('scoreContainer').style.display = 'block';
    document.getElementById('nextButton').style.display = 'none';
}

function restartQuiz() {
    startQuiz();
}

// Start the quiz when the page loads
startQuiz();