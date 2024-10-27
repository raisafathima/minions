const pairs = [
    { equation: "3 + 4", answer: 7 },
    { equation: "5 + 2", answer: 7 },
    { equation: "6 + 3", answer: 9 },
    { equation: "4 + 5", answer: 9 },
];
let selectedCards = [];
let matchedPairs = 0;

function setupGame() {
    const gameBoard = document.getElementById('game-board');
    const shuffledPairs = [...pairs, ...pairs].sort(() => 0.5 - Math.random());

    shuffledPairs.forEach((pair, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.value = pair.answer;
        card.textContent = index % 2 === 0 ? pair.equation : pair.answer;
        card.onclick = () => selectCard(card);
        gameBoard.appendChild(card);
    });
}

function selectCard(card) {
    if (selectedCards.length < 2 && !card.classList.contains('matched')) {
        card.style.backgroundColor = '#ccc';
        selectedCards.push(card);

        if (selectedCards.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    const [card1, card2] = selectedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        if (matchedPairs === pairs.length) {
            alert('Congratulations! You matched all pairs!');
        }
    } else {
        setTimeout(() => {
            card1.style.backgroundColor = '#eee';
            card2.style.backgroundColor = '#eee';
        }, 1000);
    }
    selectedCards = [];
}

// Initialize the game
setupGame();