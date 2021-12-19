import { useState } from 'react';
import {
  Board, Errors,
  Players,
  SessionStates, SquareStates,
  TicTacToeManager,
} from './ticTacToe';

function createBoard(): Board {
  return [
    [SquareStates.Empty, SquareStates.Empty, SquareStates.Empty],
    [SquareStates.Empty, SquareStates.Empty, SquareStates.Empty],
    [SquareStates.Empty, SquareStates.Empty, SquareStates.Empty],
  ];
}

export default function useLocalTicTacToe(): TicTacToeManager {
  const [currentPlayer, setCurrentPlayer] = useState<Players>(Players.PlayerOne);
  const [sessionState, setSessionState] = useState<SessionStates>(SessionStates.Playing);
  const [board, setBoard] = useState<Board>(createBoard());
  const [movesMade, setMovesMade] = useState<number>(0);

  function startNewGame() {
    setCurrentPlayer(Players.PlayerOne);
    setSessionState(SessionStates.Playing);
    setMovesMade(0);
    setBoard(createBoard());
  }

  function processPlayerMove({
    x,
    y,
  }: { x: number, y: number }): Errors {
    if (sessionState !== SessionStates.Playing) {
      return Errors.GameIsNotActive;
    }

    if (board[y][x] !== SquareStates.Empty) {
      return Errors.SquareIsNotEmpty;
    }

    const squareState = (
      currentPlayer === Players.PlayerOne
        ? SquareStates.Cross
        : SquareStates.Circle
    );
    board[y][x] = squareState;
    setMovesMade((prevState) => prevState + 1);

    let win = false;
    // Check column
    let hits = 0;
    for (let i = 0; i < 3; i++) {
      if (board[i][x] === squareState) {
        hits += 1;
      }
    }
    if (hits === 3) {
      win = true;
    }

    // Check rows
    hits = 0;
    for (let i = 0; i < 3 && win === false; i++) {
      if (board[y][i] === squareState) {
        hits += 1;
      }
    }
    if (hits === 3) {
      win = true;
    }

    // Check diagonally
    hits = 0;
    if (!win && ((y === 0 && x === 0) || (y === 1 && x === 1) || (y === 2 && x === 2))) {
      for (let i = 0; i < 3; i++) {
        if (board[i][i] === squareState) {
          hits += 1;
        }
      }
    }
    if (hits === 3) {
      win = true;
    }

    hits = 0;
    if (!win && ((y === 0 && x === 2) || (y === 1 && x === 1) || (y === 2 && x === 0))) {
      for (let i = 0; i < 3; i++) {
        if (board[i][2 - i] === squareState) {
          hits += 1;
        }
      }
    }
    if (hits === 3) {
      win = true;
    }

    if (win) {
      setSessionState(SessionStates.Win);
    } else if (movesMade === 8) {
      setSessionState(SessionStates.Draw);
    } else {
      setCurrentPlayer(
        (prevState) => (prevState === Players.PlayerOne ? Players.PlayerTwo : Players.PlayerOne),
      );
    }

    return null;
  }

  return {
    startNewGame,
    processPlayerMove,
    sessionState,
    currentPlayer,
  };
}
