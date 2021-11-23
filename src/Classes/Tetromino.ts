import { RotationState, TetrominoType } from '../types/index';
import { COLORS, COLS, ROWS, tetrominoes } from '../utils/constants';
import { drawSquare } from '../utils/drawSquare';
import { Board } from './Board';

export class Tetromino {
	rotationIndex: number;
	tetromino: TetrominoType;
	activeShape: RotationState;
	x: number;
	y: number;

	constructor() {
		this.rotationIndex = 0;
		this.tetromino = this.generateRandom();
		this.activeShape = this.tetromino.shapes[this.rotationIndex];
		this.x = 3;
		this.y = -2;
	}

	private getNewRotationIndex() {
		return (this.rotationIndex + 1) % this.tetromino.shapes.length;
	}

	private generateRandom() {
		return tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
	}

	private fill(color: COLORS) {
		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 4; col++) {
				if (this.activeShape[row][col]) {
					drawSquare(this.x + col, this.y + row, color);
				}
			}
		}
	}

	private draw() {
		this.fill(this.tetromino.color);
	}

	private unDraw() {
		this.fill(COLORS.vacant);
	}

	willColide(x: number, y: number, board: Board, shape: RotationState = this.activeShape) {
		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 4; col++) {
				let newX = this.x + col + x;
				let newY = this.y + row + y;

				if (!shape[row][col] || newY < 0) continue;
				if (newX < 0 || newX >= COLS || newY >= ROWS || board.grid[newY][newX] != COLORS.vacant) return true;
			}
		}
		return false;
	}

	moveDown(board: Board) {
		if (this.willColide(0, 1, board)) {
			board.lockTetromino();
			if (!board.isGameOver()) board.activeTetromino = board.generateTetromino();
		} else {
			this.unDraw();
			this.y++;
			this.draw();
		}
	}
	moveRight(board: Board) {
		if (this.willColide(1, 0, board)) return;

		this.unDraw();
		this.x++;
		this.draw();
	}
	moveLeft(board: Board) {
		if (this.willColide(-1, 0, board)) return;

		this.unDraw();
		this.x--;
		this.draw();
	}
	rotate(board: Board) {
		let nextShape = this.tetromino.shapes[this.getNewRotationIndex()];
		let kick = 0;

		if (this.willColide(0, 0, board, nextShape)) kick = this.x > COLS / 2 ? -1 : 1;
		if (this.willColide(kick, 0, board, nextShape)) return;

		this.unDraw();
		this.x += kick;
		this.rotationIndex = this.getNewRotationIndex();
		this.activeShape = this.tetromino.shapes[this.rotationIndex];
		this.draw();
	}
}
