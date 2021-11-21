import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import DialogLink from '../dialogLink';
import { ReadMoreDialog } from '../readMoreDialog';

const MandelbrotDialog = function MandelbrotDialog() {
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
            <Link href="/mandelbrot" passHref>
              <DialogLink>
                HTML Explorer
              </DialogLink>
            </Link>
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
                  <Typography>x Value: -0.765</Typography>
                </li>
                <li>
                  <Typography>Y Value: 0.1</Typography>
                </li>
                <li>
                  <Typography>Zoom: 240</Typography>
                </li>
                <li>
                  <Typography>
                    Max Iterations: 300
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
};

export default MandelbrotDialog;
