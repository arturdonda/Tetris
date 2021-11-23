import { Board } from './classes/Board';
import keydownListener from './utils/keydownListener';
const scoreElement = document.getElementById('score') as HTMLDivElement;
import './assets/style.css';

const board = new Board();
let dropStart = Date.now();

const drop = () => {
	if (Date.now() - dropStart > 1000) {
		board.activeTetromino.moveDown(board);
		dropStart = Date.now();
	}

	if (board.isGameOver()) {
		alert('Game Over!');
	} else {
		scoreElement.innerHTML = board.score.toString();
		requestAnimationFrame(drop);
	}
};

const startGame = () => {
	keydownListener(board);
	board.startBoard();
	drop();
};

startGame();
