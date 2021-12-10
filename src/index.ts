import { Board } from './classes/Board';
import './assets/style.css';

const scoreElement = document.getElementById('score') as HTMLDivElement;
const highscoreElement = document.getElementById('highscore') as HTMLDivElement;
const linesElement = document.getElementById('lines') as HTMLDivElement;
const levelElement = document.getElementById('level') as HTMLDivElement;
const buttonElement = document.getElementById('startBtn') as HTMLButtonElement;

new Board(buttonElement, scoreElement, highscoreElement, linesElement, levelElement);
