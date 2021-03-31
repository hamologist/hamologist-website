import { Link, Typography } from "@material-ui/core";
import { readMoreDialogStyles, ReadMoreDialog } from "./ReadMoreDialog";
import React from "react";
import { useTheme } from "@material-ui/core/styles";

function EmojifyDialog() {
  const theme = useTheme();
  const classes = readMoreDialogStyles(theme);
  return (
    <ReadMoreDialog title={"Emojify"}>
      <Typography>
        Emojify consists of a number services that enable users to uniquely emojify a message.
        <br />
        <br />
        Services available:
        <ul>
          <li>
            <Link
              href={"https://www.hamologist.com/emojify/"}
              target={"_blank"}
              className={classes.dialogLink}>Web App</Link>
          </li>
          <li>
            <Link
              href={"https://github.com/hamologist/emojify-sam#public-resource"}
              target={"_blank"}
              className={classes.dialogLink}>Public AWS Lambda</Link>
          </li>
          <li>
            <Link
              href={"https://github.com/hamologist/emojify#emojifying-web-server"}
              target={"_blank"}
              className={classes.dialogLink}>Personal Web Server</Link>
          </li>
          <li>
            <Link
              href={"https://github.com/hamologist/emojify#command-line-emojifier"}
              target={"_blank"}
              className={classes.dialogLink}>Command Line Application</Link>
          </li>
        </ul>

        GitHub Repos:
        <ul>
          <li>
            <Link
              href={"https://github.com/hamologist/emojify"}
              target={"_blank"}
              className={classes.dialogLink}>Emojify</Link>
            <ul>
              <li>
                Main repo for the project. Holds all of the application logic.
              </li>
            </ul>
          </li>
          <li>
            <Link
              href={"https://github.com/hamologist/emojify-sam"}
              target={"_blank"}
              className={classes.dialogLink}>Emojify SAM</Link>
            <ul>
              <li>
                AWS SAM project for hosting an Emojify API endpoint and Discord slash command.
              </li>
            </ul>
          </li>
        </ul>
      </Typography>
    </ReadMoreDialog>
  );
}

export default EmojifyDialog;
