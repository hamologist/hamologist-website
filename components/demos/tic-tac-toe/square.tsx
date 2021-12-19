import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import styles from './square.module.css';
import Circle from './circle';
import Cross from './cross';
import {
  Players, SessionStates, SquareStates, TicTacToeManager,
} from './hooks/ticTacToe';

export type SquareProps = React.PropsWithChildren<{
  currentPlayer: TicTacToeManager['currentPlayer'];
  sessionState: TicTacToeManager['sessionState']
  processPlayerMove: TicTacToeManager['processPlayerMove'];
  initialSquareState: SquareStates;
  x: number;
  y: number;
}>;

export function Square(
  {
    currentPlayer,
    sessionState,
    processPlayerMove,
    initialSquareState,
    x,
    y,
  }: SquareProps,
) {
  const [currentSquare, setCurrentSquare] = useState<SquareStates>(initialSquareState);

  const handleClick = () => {
    processPlayerMove({ x, y });
    if (currentPlayer === Players.PlayerOne) {
      setCurrentSquare(SquareStates.Cross);
    } else {
      setCurrentSquare(SquareStates.Circle);
    }
  };

  let gamePiece: JSX.Element = (
    <div
      role="button"
      aria-label="Clickable game square"
      tabIndex={0}
      style={{ width: '100%', height: '100%' }}
      onClick={handleClick}
      onKeyDown={handleClick}
    />
  );
  if (currentSquare === SquareStates.Cross) {
    gamePiece = Cross();
  } else if (currentSquare === SquareStates.Circle) {
    gamePiece = Circle();
  } else if (sessionState !== SessionStates.Playing) {
    gamePiece = <div style={{ width: '100%', height: '100%' }} />;
  }

  return (
    <Grid className={styles.item} item xs={4}>
      {gamePiece}
    </Grid>
  );
}
