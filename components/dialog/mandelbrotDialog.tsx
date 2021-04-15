import { Link, Typography } from "@material-ui/core";
import { readMoreDialogStyles, ReadMoreDialog } from "./readMoreDialog";
import React from "react";
import { useTheme } from "@material-ui/core/styles";

function MandelbrotDialog() {
  const theme = useTheme();
  const classes = readMoreDialogStyles(theme);
  return (
    <ReadMoreDialog title={"Mandelbrot"}>
      <Typography>
        The Mandelbrot project includes both a desktop and HTML explorer.
        The desktop application should be built using code provided in the Mandelbrot GitHub repo below.
        <br />
        <br />
        Services available:
        <ul>
          <li>
            <Link
              href={"https://www.hamologist.com/mandelbrot/"}
              target={"_blank"}
              className={classes.dialogLink}>HTML Explorer</Link>
            <ul>
              <li>
                Please allow time on initial page load and during compute for the set snapshot to generate.
              </li>
              <li>
                Interested in seeing another point of interest? Try using the following values:
                <ul>
                  <li>
                    x Value: -0.7746806106269039
                  </li>
                  <li>
                    Y Value: -0.1374168856037867
                  </li>
                  <li>
                    Zoom: 160000000.0
                  </li>
                  <li>
                    Max Iterations: 8000 (if you'd like a better color gradient for the set snapshot)
                  </li>
                </ul>
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

export default MandelbrotDialog;
