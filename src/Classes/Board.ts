import { BoardType } from '../Types/index.js';
import { COLORS, COLS, ROWS } from '../utils/constants.js';
import { drawSquare } from '../utils/drawSquare.js';
import { Tetromino } from './Tetromino.js';

export class Board {
	rows: number;
	columns: number;
	grid: BoardType;
	activeTetromino: Tetromino;
	gameOver: boolean;
	score: number;

	constructor(rows: number = ROWS, columns: number = COLS) {
		this.rows = rows;
		this.columns = columns;
		this.grid = new Array(this.rows);
		this.activeTetromino = this.generateTetromino();
		this.gameOver = false;
		this.score = 0;
	}

	generateTetromino() {
		return new Tetromino();
	}

	drawBoard() {
		for (let row = 0; row < ROWS; row++) {
			for (let col = 0; col < COLS; col++) {
				drawSquare(col, row, this.grid[row][col]);
			}
		}
	}

	removeFullRows() {
		for (let row = 0; row < ROWS; row++) {
			let isRowFull = true;

			for (let col = 0; col < COLS; col++) {
				isRowFull = isRowFull && this.grid[row][col] !== COLORS.vacant;
			}

			if (isRowFull) {
				for (let r = row; r > 1; r--) {
					for (let c = 0; c < COLS; c++) {
						this.grid[r][c] = this.grid[r - 1][c];
					}
				}

				for (let c = 0; c < COLS; c++) {
					this.grid[0][c] = COLORS.vacant;
				}
				this.score += 10;
			}
		}

		this.drawBoard();
	}

	lockTetromino() {
		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 4; col++) {
				if (!this.activeTetromino.activeShape[row][col]) continue;

				if (this.activeTetromino.y + row < 0) {
					this.gameOver = true;
					break;
				}

				this.grid[this.activeTetromino.y + row][this.activeTetromino.x + col] = this.activeTetromino.tetromino.color;
			}
		}

		this.removeFullRows();
	}

	startBoard() {
		for (let row = 0; row < this.rows; row++) {
			this.grid[row] = [];

			for (let col = 0; col < this.columns; col++) {
				this.grid[row][col] = COLORS.vacant;
			}
		}

		this.drawBoard();
	}

	isGameOver() {
		return this.gameOver;
	}

	getScore() {
		return this.score;
	}
}
