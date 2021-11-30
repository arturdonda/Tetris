import { Board } from '../classes/Board';

export default (board: Board) => {
	window.addEventListener('keydown', (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowLeft':
				board.activeTetromino.moveLeft();
				break;
			case 'ArrowUp':
				board.activeTetromino.rotate();
				break;
			case 'ArrowRight':
				board.activeTetromino.moveRight();
				break;
			case 'ArrowDown':
				board.activeTetromino.moveDown();
				break;
			case ' ':
				board.activeTetromino.hardDrop();
				break;
			case 'c':
			case 'C':
				board.holdTetromino();
				break;
		}
	});
};
