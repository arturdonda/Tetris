import { BoardType, LevelType } from '../types/index';
import { COLORS, COLS, LEVEL_SYSTEM, ROWS, SCORING_SYSTEM } from '../utils/constants';
import drawTetromino from '../utils/drawTetromino';
import drawSquare from '../utils/drawSquare';
import { Tetromino } from './Tetromino';

export class Board {
	rows: number;
	columns: number;
	grid: BoardType;
	activeTetromino: Tetromino;
	nextTetromino: Tetromino;
	holdedTetromino: Tetromino;
	gameOver: boolean;
	score: number;
	linesCleared: number;
	level: LevelType;

	constructor(rows: number = ROWS, columns: number = COLS) {
		this.rows = rows;
		this.columns = columns;
		this.grid = new Array(this.rows);
		this.activeTetromino = new Tetromino();
		this.nextTetromino = new Tetromino();
		this.gameOver = false;
		this.score = 0;
		this.linesCleared = 0;
		this.level = LEVEL_SYSTEM[0];
	}

	generateTetromino() {
		this.activeTetromino = this.nextTetromino;
		this.nextTetromino = new Tetromino();
		drawTetromino.next(this.nextTetromino.tetromino);
	}

	private drawBoard() {
		for (let row = 0; row < ROWS; row++) {
			for (let col = 0; col < COLS; col++) {
				drawSquare(col, row, this.grid[row][col]);
			}
		}
	}

	private removeFullRows() {
		let rowCount = 0;
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
				rowCount++;
			}
		}

		this.score += rowCount ? SCORING_SYSTEM[rowCount - 1] * (this.level.number + 1) : 0;
		this.linesCleared += rowCount;

		if (this.linesCleared >= this.level.requiredLines && this.level.number < LEVEL_SYSTEM[LEVEL_SYSTEM.length - 1].number)
			this.level = LEVEL_SYSTEM[this.level.number + 1];

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

		if (!this.gameOver) this.generateTetromino();
	}

	holdTetromino() {
		this.activeTetromino.reset();

		if (this.holdedTetromino) {
			const auxTetromino = this.activeTetromino;
			this.activeTetromino = this.holdedTetromino;
			this.holdedTetromino = auxTetromino;
		} else {
			this.holdedTetromino = this.activeTetromino;
			this.generateTetromino();
		}

		drawTetromino.holded(this.holdedTetromino.tetromino);
	}

	startBoard() {
		for (let row = 0; row < this.rows; row++) {
			this.grid[row] = [];

			for (let col = 0; col < this.columns; col++) {
				this.grid[row][col] = COLORS.vacant;
			}
		}

		this.drawBoard();
		drawTetromino.next(this.nextTetromino.tetromino);
	}
}
