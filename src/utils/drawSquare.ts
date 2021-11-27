import { COLORS, SQUARE_SIZE } from './constants';

const canvasElement = document.getElementById('tetris') as HTMLCanvasElement;
const context = canvasElement.getContext('2d') as CanvasRenderingContext2D;

export default (row: number, col: number, color: COLORS) => {
	context.fillStyle = color;
	context.fillRect(row * SQUARE_SIZE, col * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);

	context.strokeStyle = COLORS.black;
	context.strokeRect(row * SQUARE_SIZE, col * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
};
