import React, { Dispatch, useState } from 'react';
import { Grid } from '@material-ui/core';
import styles from './square.module.css';
import Circle from './circle';
import Cross from './cross';
import { Players } from './app';

export enum SquareStates {
  Empty,
  Circle,
  Cross,
}

export type SquareProps = React.PropsWithChildren<{
  setState: Dispatch<React.SetStateAction<SquareStates>>,
  state: SquareStates,
  player: Players,
}>;

export function Square(
  {
    setState,
    state,
    player,
  }: SquareProps,
) {
  const handleClick = () => {
    if (player === Players.PlayerOne) {
      setState(SquareStates.Cross);
    } else {
      setState(SquareStates.Circle);
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
  if (state === SquareStates.Cross) {
    gamePiece = Cross();
  } else if (state === SquareStates.Circle) {
    gamePiece = Circle();
  }

  return (
    <Grid className={styles.item} item xs={4}>
      {gamePiece}
    </Grid>
  );
}

export default function createSquare(player: Players): [
  Dispatch<React.SetStateAction<SquareStates>>,
  SquareStates,
  JSX.Element,
] {
  const [state, setState] = useState<SquareStates>(SquareStates.Empty);

  return [setState, state, Square({ setState, state, player })];
}
