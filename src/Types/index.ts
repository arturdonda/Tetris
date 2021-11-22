import { COLORS } from '../utils/constants.js';

export type BoardType = COLORS[][];

export type TetrominoType = {
	shapes: RotationStates;
	color: COLORS;
};

type RotationStates = [RotationState, RotationState, RotationState, RotationState];

export type RotationState = [[0 | 1, 0 | 1, 0 | 1, 0 | 1], [0 | 1, 0 | 1, 0 | 1, 0 | 1], [0 | 1, 0 | 1, 0 | 1, 0 | 1], [0 | 1, 0 | 1, 0 | 1, 0 | 1]];
