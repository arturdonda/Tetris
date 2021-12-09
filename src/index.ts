import { Board } from './classes/Board';
import './assets/style.css';

const scoreElement = document.getElementById('score') as HTMLDivElement;
const linesElement = document.getElementById('lines') as HTMLDivElement;
const levelElement = document.getElementById('level') as HTMLDivElement;
const buttonElement = document.getElementById('startBtn') as HTMLButtonElement;

const board = new Board(buttonElement, () => {
	scoreElement.innerHTML = board.score.toString();
	linesElement.innerHTML = board.linesCleared.toString();
	levelElement.innerHTML = board.level.number.toString();
});
