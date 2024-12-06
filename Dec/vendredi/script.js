
class Cell {
    constructor(index) {
        this.index = index;
        this.value = null;
        this.element = document.createElement("div");
        this.element.classList.add("cell");
        this.element.addEventListener("click", () => this.handleClick());
    }

    handleClick() {
        if (this.value || Game.isOver) return;
        this.value = Game.currentPlayer;
        this.element.textContent = this.value;
        this.element.classList.add("taken");
        Game.makeMove(this.index);
    }
}

class Player {
    constructor(symbol) {
        this.symbol = symbol;
    }
}

class Game {
    static board = [];
    static currentPlayer = "X";
    static isOver = false;

    static init() {

        const boardElement = document.getElementById("board");
        boardElement.innerHTML = "";
        this.board = [];
        this.currentPlayer = "X";
        this.isOver = false;
        document.getElementById("game-status").textContent = "Tour du joueur " + this.currentPlayer;

        for (let i = 0; i < 9; i++) {
            const cell = new Cell(i);
            this.board.push(cell);
            boardElement.appendChild(cell.element);
        }

        document.getElementById("restart").addEventListener("click", () => this.init());
    }

    static makeMove(index) {
        if (this.checkWin()) {
            document.getElementById("game-status").textContent = `Joueur ${this.currentPlayer} a gagné !`;
            this.isOver = true;
            return;
        }

        if (this.board.every(cell => cell.value)) {
            document.getElementById("game-status").textContent = "Match nul !";
            this.isOver = true;
            return;
        }

        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        document.getElementById("game-status").textContent = `Tour du joueur ${this.currentPlayer}`;
    }

    static checkWin() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return (
                this.board[a].value &&
                this.board[a].value === this.board[b].value &&
                this.board[a].value === this.board[c].value
            );
        });
    }
}

document.addEventListener("DOMContentLoaded", () => Game.init());