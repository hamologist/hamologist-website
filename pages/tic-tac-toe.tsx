import React from 'react';
import BasePage from '../components/basePage';
import App from '../components/demos/tic-tac-toe/app';

export default function TicTacToe() {
  return (
    <BasePage
      title="Hamologist - Tic-Tac-Toe"
      description="Online Tic-Tac-Toe"
    >
      <App />
    </BasePage>
  );
}
