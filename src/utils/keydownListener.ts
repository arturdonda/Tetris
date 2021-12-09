import { Board } from '../classes/Board';

export default (board: Board) => {
	window.addEventListener('keydown', (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowLeft':
				board.gameStatus === 'playing' && board.activeTetromino.moveLeft();
				break;
			case 'ArrowUp':
				board.gameStatus === 'playing' && board.activeTetromino.rotate();
				break;
			case 'ArrowRight':
				board.gameStatus === 'playing' && board.activeTetromino.moveRight();
				break;
			case 'ArrowDown':
				board.gameStatus === 'playing' && board.activeTetromino.moveDown();
				break;
			case ' ':
				board.gameStatus === 'playing' && board.activeTetromino.hardDrop();
				break;
			case 'c':
			case 'C':
				board.gameStatus === 'playing' && board.holdTetromino();
				break;
			case 'Enter':
				board.startButton.click();
				break;
		}
	});
};
