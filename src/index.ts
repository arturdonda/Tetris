import { Board } from './classes/Board';
import keydownListener from './utils/keydownListener';
const scoreElement = document.getElementById('score') as HTMLDivElement;
const linesElement = document.getElementById('lines') as HTMLDivElement;
import './assets/style.css';

const board = new Board();
let dropStart = Date.now();

const drop = () => {
	if (Date.now() - dropStart > 1000) {
		board.activeTetromino.moveDown(board);
		dropStart = Date.now();
	}

	if (board.gameOver === true) {
		alert('Game Over!');
	} else {
		scoreElement.innerHTML = board.score.toString();
		linesElement.innerHTML = board.linesCleared.toString();
		requestAnimationFrame(drop);
	}
};

const startGame = () => {
	keydownListener(board);
	board.startBoard();
	drop();
};

startGame();
