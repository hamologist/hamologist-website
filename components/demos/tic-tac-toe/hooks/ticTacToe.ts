export enum Players {
  PlayerOne,
  PlayerTwo,
}

export enum SessionStates {
  Playing,
  Win,
  Draw,
}

export enum SquareStates {
  Empty,
  Circle,
  Cross,
}

export enum Errors {
  GameIsNotActive,
  SquareIsNotEmpty,
}

export type BoardRow = [SquareStates, SquareStates, SquareStates];

export type Board = [BoardRow, BoardRow, BoardRow];

export interface MoveEffect {
  currentPlayersTurn: Players;
  sessionState: SessionStates;
  error: string | null;
}

export interface GameState {
  currentPlayersTurn: Players;
  sessionState: SessionStates;
  board: Board;
}

export interface TicTacToeManager {
  startNewGame: () => void;
  processPlayerMove: ({ x, y }: { x: number, y: number }) => Errors;
  sessionState: SessionStates;
  currentPlayer: Players;
}
