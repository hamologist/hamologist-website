import React, { Dispatch, useEffect, useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import styles from './app.module.css';
import createSquare, { SquareStates } from './square';

export enum Players {
  PlayerOne,
  PlayerTwo,
}

type BoardRow = [SquareStates, SquareStates, SquareStates];

export default function TicTacToe() {
  const [player, setPlayer] = useState<Players>(Players.PlayerTwo);
  const squares: Array<[
    Dispatch<React.SetStateAction<SquareStates>>,
    SquareStates,
    JSX.Element,
  ]> = new Array(9);

  for (let i = 0; i < 9; i++) {
    squares[i] = createSquare(player);
  }

  const board: [BoardRow, BoardRow, BoardRow] = [
    [squares[0][1], squares[1][1], squares[2][1]],
    [squares[3][1], squares[4][1], squares[5][1]],
    [squares[6][1], squares[7][1], squares[8][1]],
  ];

  useEffect(() => {
    if (player === Players.PlayerOne) {
      setPlayer(Players.PlayerTwo);
    } else {
      setPlayer(Players.PlayerOne);
    }
  }, [...board[0], ...board[1], ...board[2]]);

  return (
    <div>
      <Box className={styles.gameContainer} sx={{ flexGrow: 1 }}>
        <Grid className={styles.gameBoard} container spacing={0}>
          {squares[0][2]}
          {squares[1][2]}
          {squares[2][2]}

          {squares[3][2]}
          {squares[4][2]}
          {squares[5][2]}

          {squares[6][2]}
          {squares[7][2]}
          {squares[8][2]}
        </Grid>
      </Box>
    </div>
  );
}
