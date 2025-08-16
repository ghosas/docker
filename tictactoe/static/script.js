const boardElement = document.getElementById("board");
const statusElement = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");

let board = Array(9).fill("");
let currentPlayer = "X"; // Player is always "X"
let gameOver = false;

function renderBoard() {
    boardElement.innerHTML = "";
    board.forEach((cell, index) => {
        const div = document.createElement("div");
        div.className = "cell";
        div.innerText = cell;
        div.addEventListener("click", () => handleMove(index));
        boardElement.appendChild(div);
    });
    if (!gameOver) {
        statusElement.innerText = currentPlayer === "X" 
            ? "Your turn (X)" 
            : "Computer's turn (O)";
    }
}

function handleMove(index) {
    if (board[index] !== "" || gameOver || currentPlayer !== "X") return;
    board[index] = "X";
    if (checkWinner("X")) {
        statusElement.innerText = "🎉 You win!";
        gameOver = true;
    } else if (board.every(cell => cell !== "")) {
        statusElement.innerText = "It's a Draw!";
        gameOver = true;
    } else {
        currentPlayer = "O";
        renderBoard();
        setTimeout(computerMove, 500); // slight delay for realism
    }
    renderBoard();
}

function computerMove() {
    if (gameOver) return;

    const emptyIndices = board.map((v,i) => v === "" ? i : null).filter(v => v !== null);
    const choice = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    board[choice] = "O";

    if (checkWinner("O")) {
        statusElement.innerText = "💻 Computer wins!";
        gameOver = true;
    } else if (board.every(cell => cell !== "")) {
        statusElement.innerText = "It's a Draw!";
        gameOver = true;
    } else {
        currentPlayer = "X";
    }
    renderBoard();
}

function checkWinner(player) {
    const winPatterns = [
        [0,1,2], [3,4,5], [6,7,8], // rows
        [0,3,6], [1,4,7], [2,5,8], // cols
        [0,4,8], [2,4,6]           // diagonals
    ];
    return winPatterns.some(pattern =>
        pattern.every(i => board[i] === player)
    );
}

resetBtn.addEventListener("click", resetGame);

function resetGame() {
    board = Array(9).fill("");
    currentPlayer = "X";
    gameOver = false;
    renderBoard();
}

renderBoard();
