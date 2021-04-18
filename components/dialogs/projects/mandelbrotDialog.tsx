import React from 'react';
import { Typography } from '@material-ui/core';
import DialogLink from '../dialogLink';
import { ReadMoreDialog } from '../readMoreDialog';

export default function MandelbrotDialog() {
  return (
    <ReadMoreDialog title="Mandelbrot">
      <Typography>
        The Mandelbrot project includes both a desktop and HTML explorer.
        The desktop application should be built using code provided in the Mandelbrot GitHub repo
        below.
        <br />
        <br />
        Services available:
      </Typography>
      <ul>
        <li>
          <Typography>
            <DialogLink
              href="https://www.hamologist.com/mandelbrot/"
              target="_blank"
            >
              HTML Explorer
            </DialogLink>
          </Typography>
          <ul>
            <li>
              <Typography>
                Please allow time on initial page load and during compute for the set snapshot to
                generate.
              </Typography>
            </li>
            <li>
              <Typography>
                Interested in seeing another point of interest? Try using the following values:
              </Typography>
              <ul>
                <li>
                  <Typography>x Value: -0.7746806106269039</Typography>
                </li>
                <li>
                  <Typography>Y Value: -0.1374168856037867</Typography>
                </li>
                <li>
                  <Typography>Zoom: 160000000.0</Typography>
                </li>
                <li>
                  <Typography>
                    Max Iterations: 8000 (if you&apos;d like a better color gradient for the set
                    snapshot)
                  </Typography>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <Typography>GitHub Repos:</Typography>
      <ul>
        <li>
          <Typography>
            <DialogLink
              href="https://github.com/hamologist/mandelbrot"
              target="_blank"
            >
              Mandelbrot
            </DialogLink>
          </Typography>
        </li>
      </ul>
    </ReadMoreDialog>
  );
}
