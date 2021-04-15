import { Link, Typography } from "@material-ui/core";
import { readMoreDialogStyles, ReadMoreDialog } from "./readMoreDialog";
import React from "react";
import { useTheme } from "@material-ui/core/styles";

function Chip8Dialog() {
  const theme = useTheme();
  const classes = readMoreDialogStyles(theme);
  return (
    <ReadMoreDialog title={"CHIP-8 Interpreter"}>
      <Typography>
        The CHIP-8 project includes both a desktop and HTML interpreter.
        The desktop application should be built using code provided in the CHIP-8 GitHub repo below.
        <br />
        <br />
        Services available:
        <ul>
          <li>
            <Link
              href={"https://www.hamologist.com/chip-eight/"}
              target={"_blank"}
              className={classes.dialogLink}>HTML Interpreter</Link>
            <ul>
              <li>
                Controls can be found <Link
                href={"https://github.com/hamologist/chip-8/blob/master/README.md#controls"}
                target={"_blank"}
                className={classes.dialogLink}
              >here</Link>
              </li>
              <li>
                To speed up the games, try changing the framerate (listed as FPS)
              </li>
            </ul>
          </li>
        </ul>
        GitHub Repos:
        <ul>
          <li>
            <Link
              href={"https://github.com/hamologist/mandelbrot"}
              target={"_blank"}
              className={classes.dialogLink}>Mandelbrot</Link>
          </li>
        </ul>
      </Typography>
    </ReadMoreDialog>
  );
}

export default Chip8Dialog;
