import { TetrominoType } from '../types';
import { COLORS, SQUARE_SIZE } from './constants';

const canvasElement = document.getElementById('holdedTetromino') as HTMLCanvasElement;
const context = canvasElement.getContext('2d') as CanvasRenderingContext2D;

export default (tetromino: TetrominoType) => {
	clear();

	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			if (!tetromino.shapes[0][col][row]) continue;

			context.fillStyle = tetromino.color;
			context.fillRect(row * SQUARE_SIZE, col * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);

			context.strokeStyle = COLORS.black;
			context.strokeRect(row * SQUARE_SIZE, col * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
		}
	}
};

const clear = () => {
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			context.fillStyle = COLORS.vacant;
			context.fillRect(row * SQUARE_SIZE, col * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);

			context.strokeStyle = COLORS.vacant;
			context.strokeRect(row * SQUARE_SIZE, col * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
		}
	}
};
