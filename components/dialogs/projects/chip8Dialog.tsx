import { Typography } from '@material-ui/core';
import React from 'react';
import DialogLink from '../dialogLink';
import { ReadMoreDialog } from '../readMoreDialog';

export default function Chip8Dialog() {
  return (
    <ReadMoreDialog title="CHIP-8 Interpreter">
      <Typography>
        The CHIP-8 project includes both a desktop and HTML interpreter.
        The desktop application should be built using code provided in the CHIP-8 GitHub repo below.
        <br />
        <br />
        Services available:
      </Typography>
      <ul>
        <li>
          <Typography>
            <DialogLink
              href="https://www.hamologist.com/chip-eight/"
              target="_blank"
            >
              HTML Interpreter
            </DialogLink>
          </Typography>
          <ul>
            <li>
              <Typography>
                Controls can be found&nbsp;
                <DialogLink
                  href="https://github.com/hamologist/chip-8/blob/master/README.md#controls"
                  target="_blank"
                >
                  here
                </DialogLink>
              </Typography>
            </li>
            <li>
              <Typography>
                To speed up the games, try changing the framerate (listed as FPS)
              </Typography>
            </li>
          </ul>
        </li>
      </ul>
      <Typography>GitHub Repos:</Typography>
      <ul>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/chip-8"
              target="_blank"
            >
              Chip-8
            </DialogLink>
          </Typography>
        </li>
      </ul>
    </ReadMoreDialog>
  );
}
