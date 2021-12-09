import { TetrominoType } from '../types';
import { COLORS, SQUARE_SIZE } from './constants';

const holdedCanvasElement = document.getElementById('holdedTetromino') as HTMLCanvasElement;
const holdedContext = holdedCanvasElement.getContext('2d') as CanvasRenderingContext2D;

const nextCanvasElement = document.getElementById('nextTetromino') as HTMLCanvasElement;
const nextContext = nextCanvasElement.getContext('2d') as CanvasRenderingContext2D;

const drawTetromino = (tetromino: TetrominoType, context: CanvasRenderingContext2D) => {
	clear(context);

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

const clear = (context: CanvasRenderingContext2D) => {
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			context.fillStyle = COLORS.vacant;
			context.fillRect(row * SQUARE_SIZE, col * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);

			context.strokeStyle = COLORS.vacant;
			context.strokeRect(row * SQUARE_SIZE, col * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
		}
	}
};

export default {
	next: (tetromino: TetrominoType) => drawTetromino(tetromino, nextContext),
	holded: (tetromino: TetrominoType) => drawTetromino(tetromino, holdedContext),
	clear: (context: 'next' | 'hold') => clear(context === 'next' ? nextContext : holdedContext),
};
