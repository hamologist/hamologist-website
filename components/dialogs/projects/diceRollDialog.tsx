import { Typography } from '@material-ui/core';
import React from 'react';
import DialogLink from '../dialogLink';
import { ReadMoreDialog } from '../readMoreDialog';

const DiceRollDialog = function DiceRollDialog() {
  return (
    <ReadMoreDialog title="Dice Roll">
      <Typography>
        Dice Roll simulates rolling virtual dice via a number of different services.
        <br />
        <br />
        Services available:
      </Typography>
      <ul>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/dice-roll#public-resource"
              target="_blank"
            >
              Public AWS Lambda
            </DialogLink>
          </Typography>
        </li>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/dice-roll#dice-roll-webserver"
              target="_blank"
            >
              Personal Web Server
            </DialogLink>
          </Typography>
        </li>
      </ul>
      <Typography>GitHub Repos:</Typography>
      <ul>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/dice-roll"
              target="_blank"
            >
              Dice Roll
            </DialogLink>
          </Typography>
        </li>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/dice-roll-sam"
              target="_blank"
            >
              Dice Roll SAM
            </DialogLink>
          </Typography>
        </li>
      </ul>
    </ReadMoreDialog>
  );
};

export default DiceRollDialog;
