import React from 'react';
import { Typography } from '@material-ui/core';
import DialogLink from '../dialogLink';
import { ReadMoreDialog } from '../readMoreDialog';

const EmojifyDialog = function EmojifyDialog() {
  return (
    <ReadMoreDialog title="Emojify">
      <Typography>
        Emojify consists of a number services that enable users to uniquely emojify a message.
        <br />
        <br />
        Services available:
      </Typography>
      <ul>
        <li>
          <Typography>
            <DialogLink
              href="https://www.hamologist.com/emojify/"
              target="_blank"
            >
              Web App
            </DialogLink>
          </Typography>
        </li>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/emojify-sam#public-resource"
              target="_blank"
            >
              Public AWS Lambda
            </DialogLink>
          </Typography>
        </li>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/emojify#emojifying-web-server"
              target="_blank"
            >
              Personal Web Server
            </DialogLink>
          </Typography>
        </li>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/emojify#command-line-emojifier"
              target="_blank"
            >
              Command Line Application
            </DialogLink>
          </Typography>
        </li>
      </ul>

      <Typography>GitHub Repos:</Typography>
      <ul>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/emojify"
              target="_blank"
            >
              Emojify
            </DialogLink>
          </Typography>
          <ul>
            <li>
              <Typography>
                Main repo for the project. Holds all of the application logic.
              </Typography>
            </li>
          </ul>
        </li>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/emojify-sam"
              target="_blank"
            >
              Emojify SAM
            </DialogLink>
          </Typography>
          <ul>
            <li>
              <Typography>
                AWS SAM project for hosting an Emojify API endpoint and Discord slash command.
              </Typography>
            </li>
          </ul>
        </li>
      </ul>
    </ReadMoreDialog>
  );
};

export default EmojifyDialog;
