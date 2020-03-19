export const CIRCLE = 'O';
export const CROSS = 'X';
export const EMPTY = '-';
export const DRAW = 'draw';
export const USER_FIGURE = CIRCLE;
export const AI_FIGURE = CROSS;

export const VICTORY_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const FIGURE_SIZE = 100;
export const STROKE_WIDTH = 8;
export const FIGURE_PADDING = 20;
