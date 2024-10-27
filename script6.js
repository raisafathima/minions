// 9x9 Sudoku puzzle (0 represents empty cells)
const puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function createBoard() {
    const board = document.getElementById('sudoku-board');
    board.innerHTML = ''; // Clear board

    puzzle.forEach((row, rowIndex) => {
        row.forEach((value, colIndex) => {
            const cell = document.createElement(value === 0 ? 'input' : 'div');
            cell.className = 'cell';
            if (value === 0) {
                cell.type = 'number';
                cell.min = 1;
                cell.max = 9;
                cell.dataset.row = rowIndex;
                cell.dataset.col = colIndex;
            } else {
                cell.textContent = value;
            }
            board.appendChild(cell);
        });
    });
}

function checkSolution() {
    const board = document.querySelectorAll('#sudoku-board .cell');
    const solution = Array.from(puzzle.map(row => [...row]));

    // Populate solution array with user input
    board.forEach(cell => {
        if (cell.tagName === 'INPUT') {
            const value = parseInt(cell.value);
            const row = cell.dataset.row;
            const col = cell.dataset.col;
            solution[row][col] = value;
        }
    });

    if (isSolved(solution)) {
        document.getElementById('feedback').textContent = 'Congratulations! You solved the puzzle!';
    } else {
        document.getElementById('feedback').textContent = 'Incorrect solution. Try again!';
    }
}

function isSolved(board) {
    const size = board.length;
    const subgridSize = Math.sqrt(size);

    for (let row = 0; row < size; row++) {
        const rowSet = new Set();
        const colSet = new Set();

        for (let col = 0; col < size; col++) {
            const rowVal = board[row][col];
            const colVal = board[col][row];

            if (rowVal < 1 || rowVal > size || colVal < 1 || colVal > size ||
                rowSet.has(rowVal) || colSet.has(colVal)) {
                return false;
            }
            rowSet.add(rowVal);
            colSet.add(colVal);
        }
    }

    for (let row = 0; row < size; row += subgridSize) {
        for (let col = 0; col < size; col += subgridSize) {
            const subgridSet = new Set();

            for (let r = 0; r < subgridSize; r++) {
                for (let c = 0; c < subgridSize; c++) {
                    const val = board[row + r][col + c];
                    if (subgridSet.has(val)) {
                        return false;
                    }
                    subgridSet.add(val);
                }
            }
        }
    }

    return true;
}

// Initialize the game
createBoard();