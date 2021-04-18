import React from 'react';
import { Container, Divider, List } from '@material-ui/core';
import BasePage from '../components/basePage';
import { SplashContainer } from '../components/containers/splashContainer';
import MainSection from '../components/sections/mainSection';
import { IntroContainer } from '../components/containers/introContainer';
import EmojifyDialog from '../components/dialogs/projects/emojifyDialog';
import MandelbrotDialog from '../components/dialogs/projects/mandelbrotDialog';
import Chip8Dialog from '../components/dialogs/projects/chip8Dialog';
import DiceRollDialog from '../components/dialogs/projects/diceRollDialog';
import styles from '../styles/projects.module.css';

export default function Projects() {
  return (
    <BasePage
      title="Hamologist - Projects"
      description="Projects page for Jordan Paris, aka: Hamologist"
    >
      <div className="fillPage">
        <SplashContainer
          header="Projects"
          subHeader={[
            'Applications are spells',
            'These ones didn\'t fizzle',
          ]}
        />
        <Divider />
        <Container className="fullWidth">
          <MainSection>
            <List>
              <IntroContainer
                header="Emojify"
                headerHref="https://www.hamologist.com/emojify/"
                openInNewTab
                dek="Liven up a message with a randomized assortment of emojis."
              >
                <EmojifyDialog />
              </IntroContainer>
              <Divider className={styles.projectDivider} />
              <IntroContainer
                header="Mandelbrot"
                headerHref="https://www.hamologist.com/mandelbrot/"
                openInNewTab
                dek="Peer into the mandelbrot set and visualize the power of fractals."
              >
                <MandelbrotDialog />
              </IntroContainer>
              <Divider className={styles.projectDivider} />
              <IntroContainer
                header="CHIP-8 Interpreter"
                headerHref="https://www.hamologist.com/chip-eight/"
                openInNewTab
                dek="Interpret the ancient text and run CHIP-8 applications."
              >
                <Chip8Dialog />
              </IntroContainer>
              <Divider className={styles.projectDivider} />
              <IntroContainer
                header="Dice Roll"
                headerHref="https://github.com/hamologist/dice-roll"
                openInNewTab
                dek="It's time to let luck decide! Grab your D20 and hope for the best!"
              >
                <DiceRollDialog />
              </IntroContainer>
              <Divider className={styles.projectDivider} />
              <IntroContainer
                header="hamologist.com"
                headerHref="https://www.hamologist.com"
                dek="Yup, the site you are on right now. What? This still counts..."
                openInNewTab={false}
              />
            </List>
          </MainSection>
        </Container>
      </div>
    </BasePage>
  );
}
