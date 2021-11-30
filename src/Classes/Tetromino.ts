import { RotationState, TetrominoType } from '../types/index';
import { COLORS, COLS, ROWS, tetrominoes } from '../utils/constants';
import drawSquare from '../utils/drawSquare';
import { Board } from './Board';

export class Tetromino {
	board: Board;
	rotationIndex: number;
	tetromino: TetrominoType;
	activeShape: RotationState;
	x: number;
	y: number;

	constructor(board: Board) {
		this.board = board;
		this.rotationIndex = 0;
		this.tetromino = this.generateRandom();
		this.activeShape = this.tetromino.shapes[this.rotationIndex];
		this.x = 3;
		this.y = -2;
	}

	reset() {
		this.unDraw();
		this.rotationIndex = 0;
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

	private fill(color: COLORS, yDesloc: number = 0) {
		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 4; col++) {
				if (this.activeShape[row][col]) {
					drawSquare(this.x + col, this.y + row + yDesloc, color);
				}
			}
		}
	}

	private draw() {
		this.fill(this.tetromino.color);
		this.fill(`${this.tetromino.color}44` as COLORS, this.calculateHeight());
	}

	private unDraw() {
		this.fill(COLORS.vacant);
		this.fill(COLORS.vacant, this.calculateHeight());
	}

	private willColide(x: number, y: number, shape: RotationState = this.activeShape) {
		for (let row = 0; row < 4; row++) {
			for (let col = 0; col < 4; col++) {
				const newX = this.x + col + x;
				const newY = this.y + row + y;

				if (!shape[row][col] || newY < 0) continue;
				if (newX < 0 || newX >= COLS || newY >= ROWS || this.board.grid[newY][newX] != COLORS.vacant) return true;
			}
		}
		return false;
	}

	moveRight() {
		if (this.willColide(1, 0)) return;

		this.unDraw();
		this.x++;
		this.draw();
	}

	moveLeft() {
		if (this.willColide(-1, 0)) return;

		this.unDraw();
		this.x--;
		this.draw();
	}

	moveDown(y: number = 1) {
		if (this.willColide(0, y)) return this.board.lockTetromino();

		this.unDraw();
		this.y += y;
		this.draw();
	}

	private calculateHeight() {
		let downSpaces = 0;

		while (!this.willColide(0, downSpaces)) {
			downSpaces++;
		}
		return downSpaces - 1;
	}

	hardDrop() {
		this.moveDown(this.calculateHeight());
		this.board.lockTetromino();
	}

	rotate() {
		const nextShape = this.tetromino.shapes[this.getNewRotationIndex()];
		let kick = 0;

		if (this.willColide(0, 0, nextShape)) kick = this.x > COLS / 2 ? -1 : 1;
		if (this.willColide(kick, 0, nextShape)) return;

		this.unDraw();
		this.x += kick;
		this.rotationIndex = this.getNewRotationIndex();
		this.activeShape = this.tetromino.shapes[this.rotationIndex];
		this.draw();
	}
}
