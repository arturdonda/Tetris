import { LevelType, TetrominoType } from '../types/index';

export const ROWS = 20;
export const COLS = 10;

export const SQUARE_SIZE = 20;

export const SCORING_SYSTEM = [40, 100, 300, 1200];

export const LEVEL_SYSTEM: LevelType[] = [
	{ number: 0, refreshRate: 798.7, requiredLines: 10 },
	{ number: 1, refreshRate: 715.5, requiredLines: 30 },
	{ number: 2, refreshRate: 632.3, requiredLines: 60 },
	{ number: 3, refreshRate: 549.1, requiredLines: 100 },
	{ number: 4, refreshRate: 465.9, requiredLines: 150 },
	{ number: 5, refreshRate: 382.7, requiredLines: 210 },
	{ number: 6, refreshRate: 299.5, requiredLines: 280 },
	{ number: 7, refreshRate: 216.3, requiredLines: 360 },
	{ number: 8, refreshRate: 133.1, requiredLines: 450 },
	{ number: 9, refreshRate: 99.85, requiredLines: 550 },
	{ number: 10, refreshRate: 83.2, requiredLines: 650 },
	{ number: 11, refreshRate: 83.2, requiredLines: 750 },
	{ number: 12, refreshRate: 83.2, requiredLines: 850 },
	{ number: 13, refreshRate: 66.55, requiredLines: 950 },
	{ number: 14, refreshRate: 66.55, requiredLines: 1050 },
	{ number: 15, refreshRate: 66.55, requiredLines: 1150 },
	{ number: 16, refreshRate: 49.9, requiredLines: 1260 },
	{ number: 17, refreshRate: 49.9, requiredLines: 1380 },
	{ number: 18, refreshRate: 49.9, requiredLines: 1510 },
	{ number: 19, refreshRate: 33.3, requiredLines: 1650 },
	{ number: 20, refreshRate: 33.3, requiredLines: 1800 },
	{ number: 21, refreshRate: 33.3, requiredLines: 1960 },
	{ number: 22, refreshRate: 33.3, requiredLines: 2130 },
	{ number: 23, refreshRate: 33.3, requiredLines: 2310 },
	{ number: 24, refreshRate: 33.3, requiredLines: 2500 },
	{ number: 25, refreshRate: 33.3, requiredLines: 2700 },
	{ number: 26, refreshRate: 33.3, requiredLines: 2910 },
	{ number: 27, refreshRate: 33.3, requiredLines: 3130 },
	{ number: 28, refreshRate: 33.3, requiredLines: 3360 },
	{ number: 29, refreshRate: 16.65, requiredLines: 3600 },
];

export enum COLORS {
	black = '#000000',
	cyan = '#07F0F3',
	darkBlue = '#005A9D',
	green = '#00DB00',
	orange = '#EDA100',
	purple = '#9A02E7',
	red = '#F00100',
	vacant = '#FFFFFF',
	white = '#FFFFFF',
	yellow = '#F0F001',
}

const I: TetrominoType = {
	color: COLORS.cyan,
	shapes: [
		[
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 1, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[1, 1, 1, 1],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
		],
	],
};

const J: TetrominoType = {
	color: COLORS.darkBlue,
	shapes: [
		[
			[1, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
		],
	],
};

const L: TetrominoType = {
	color: COLORS.orange,
	shapes: [
		[
			[0, 0, 1, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
	],
};

const O: TetrominoType = {
	color: COLORS.yellow,
	shapes: [
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
	],
};

const S: TetrominoType = {
	color: COLORS.green,
	shapes: [
		[
			[0, 1, 1, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[1, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[1, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
	],
};

const T: TetrominoType = {
	color: COLORS.purple,
	shapes: [
		[
			[0, 1, 0, 0],
			[1, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
	],
};

const Z: TetrominoType = {
	color: COLORS.red,
	shapes: [
		[
			[1, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 1, 0],
			[0, 1, 1, 0],
			[0, 1, 0, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[1, 1, 0, 0],
			[0, 1, 1, 0],
			[0, 0, 0, 0],
		],
		[
			[0, 1, 0, 0],
			[1, 1, 0, 0],
			[1, 0, 0, 0],
			[0, 0, 0, 0],
		],
	],
};

export const tetrominoes = [I, J, L, O, S, T, Z];
