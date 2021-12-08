import React, {
  Dispatch, useEffect, useRef, useState,
} from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import styles from './app.module.css';
import createSquare, { SquareStates } from './square';

export enum Players {
  PlayerOne,
  PlayerTwo,
}

export enum GameStates {
  Playing,
  Win,
  Draw,
}

type BoardRow = [SquareStates, SquareStates, SquareStates];

export default function TicTacToe() {
  const initialUpdate = useRef(true);
  const [player, setPlayer] = useState<Players>(Players.PlayerOne);
  const [gameState, setGameState] = useState<GameStates>(GameStates.Playing);
  const [movesMade, setMovesMade] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const squares: Array<[
    Dispatch<React.SetStateAction<SquareStates>>,
    SquareStates,
    JSX.Element,
  ]> = new Array(9);

  for (let i = 0; i < 9; i++) {
    squares[i] = createSquare(player, gameState);
  }

  const board: [BoardRow, BoardRow, BoardRow] = [
    [squares[0][1], squares[1][1], squares[2][1]],
    [squares[3][1], squares[4][1], squares[5][1]],
    [squares[6][1], squares[7][1], squares[8][1]],
  ];

  function isNotEmpty(one: SquareStates, two: SquareStates, three: SquareStates) {
    return (
      one !== SquareStates.Empty
      && two !== SquareStates.Empty
      && three !== SquareStates.Empty
    );
  }

  function winnerExists(): boolean {
    let win = false;

    for (let i = 0; i < 3 && gameState === GameStates.Playing; i++) {
      // Check columns
      if (
        isNotEmpty(board[0][i], board[1][i], board[2][i])
        && board[0][i] === board[1][i] && board[1][i] === board[2][i]
      ) {
        setGameState(GameStates.Win);
        win = true;
      }

      // Check rows
      if (
        isNotEmpty(board[i][0], board[i][1], board[i][2])
        && board[i][0] === board[i][1] && board[i][1] === board[i][2]
      ) {
        setGameState(GameStates.Win);
        win = true;
      }
    }

    // Check diagonally
    if (
      (
        isNotEmpty(board[0][0], board[1][1], board[2][2])
        && board[0][0] === board[1][1] && board[1][1] === board[2][2]
      )
      || (
        isNotEmpty(board[0][2], board[1][1], board[2][0])
        && board[0][2] === board[1][1] && board[1][1] === board[2][0]
      )
    ) {
      setGameState(GameStates.Win);
      win = true;
    }

    return win;
  }

  function prettyPrintPlayer(_player: Players): string {
    return `Player ${_player === Players.PlayerOne ? 'One' : 'Two'}`;
  }

  useEffect(() => {
    if (initialUpdate.current) {
      initialUpdate.current = false;
      return;
    }

    if (!winnerExists()) {
      if (player === Players.PlayerOne) {
        setPlayer(Players.PlayerTwo);
      } else {
        setPlayer(Players.PlayerOne);
      }
    }
    setMovesMade(movesMade + 1);
  }, [...board[0], ...board[1], ...board[2]]);

  useEffect(() => {
    if (gameState === GameStates.Win) {
      setMessage(`${prettyPrintPlayer(player)}, Wins!`);
    } else if (gameState === GameStates.Draw) {
      setMessage('Draw!');
    }
  }, [gameState]);

  useEffect(() => {
    if (movesMade === 9 && gameState === GameStates.Playing) {
      setGameState(GameStates.Draw);
    }
  }, [movesMade]);

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
      <Box className={styles.messageBox}>
        <Typography>{message}</Typography>
      </Box>
    </div>
  );
}
