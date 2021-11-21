import React from 'react';
import styles from './mainSection.module.css';

const MainSection = function MainSection({ children }: React.PropsWithChildren<{}>) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default MainSection;
