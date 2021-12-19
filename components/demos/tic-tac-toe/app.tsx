import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import styles from './app.module.css';
import useLocalTicTacToe from './hooks/useLocalTicTacToe';
import { Players, SessionStates, SquareStates } from './hooks/ticTacToe';
import { Square } from './square';

export default function TicTacToe() {
  const manager = useLocalTicTacToe();
  const [message, setMessage] = useState<string>('');
  const squares: Array<JSX.Element> = new Array(9);

  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      squares[y * 3 + x] = (
        <Square
          currentPlayer={manager.currentPlayer}
          sessionState={manager.sessionState}
          processPlayerMove={manager.processPlayerMove}
          initialSquareState={SquareStates.Empty}
          x={y}
          y={x}
        />
      );
    }
  }

  function prettyPrintPlayer(player: Players): string {
    return `Player ${player === Players.PlayerOne ? 'One' : 'Two'}`;
  }

  useEffect(() => {
    if (manager.sessionState === SessionStates.Win) {
      setMessage(`${prettyPrintPlayer(manager.currentPlayer)}, Wins!`);
    } else if (manager.sessionState === SessionStates.Draw) {
      setMessage('Draw!');
    }
  }, [manager.sessionState]);

  return (
    <div>
      <Box className={styles.gameContainer} sx={{ flexGrow: 1 }}>
        <Grid className={styles.gameBoard} container spacing={0}>
          {squares[0]}
          {squares[1]}
          {squares[2]}

          {squares[3]}
          {squares[4]}
          {squares[5]}

          {squares[6]}
          {squares[7]}
          {squares[8]}
        </Grid>
      </Box>
      <Box className={styles.messageBox}>
        <Typography>{message}</Typography>
      </Box>
    </div>
  );
}
