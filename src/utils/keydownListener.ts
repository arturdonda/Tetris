import { Board } from '../classes/Board';

export default (board: Board) => {
	window.addEventListener('keydown', (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowLeft':
				board.activeTetromino.moveLeft(board);
				break;
			case 'ArrowUp':
				board.activeTetromino.rotate(board);
				break;
			case 'ArrowRight':
				board.activeTetromino.moveRight(board);
				break;
			case 'ArrowDown':
				board.activeTetromino.moveDown(board);
				break;
			case ' ':
				board.activeTetromino.hardDrop(board);
				break;
			case 'c':
				board.holdTetromino();
				break;
		}
	});
};
