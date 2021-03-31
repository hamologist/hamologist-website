import { Link, Typography } from "@material-ui/core";
import { readMoreDialogStyles, ReadMoreDialog } from "./ReadMoreDialog";
import React from "react";
import { useTheme } from "@material-ui/core/styles";

function DiceRollDialog() {
  const theme = useTheme();
  const classes = readMoreDialogStyles(theme);
  return (
    <ReadMoreDialog title={"Dice Roll"}>
      <Typography>
        Dice Roll simulates rolling virtual dice via a number of different services.
        <br />
        <br />
        Services available:
        <ul>
          <li>
            <Link
              href={"https://github.com/hamologist/dice-roll#public-resource"}
              target={"_blank"}
              className={classes.dialogLink}>Public AWS Lambda</Link>
          </li>
          <li>
            <Link
              href={"https://github.com/hamologist/dice-roll#dice-roll-webserver"}
              target={"_blank"}
              className={classes.dialogLink}>Personal Web Server</Link>
          </li>
        </ul>
        GitHub Repos:
        <ul>
          <li>
            <Link
              href={"https://github.com/hamologist/dice-roll"}
              target={"_blank"}
              className={classes.dialogLink}>Dice Roll</Link>
          </li>
          <li>
            <Link
              href={"https://github.com/hamologist/dice-roll-sam"}
              target={"_blank"}
              className={classes.dialogLink}>Dice Roll SAM</Link>
          </li>
        </ul>
      </Typography>
    </ReadMoreDialog>
  );
}

export default DiceRollDialog;
