import React from 'react';
import styles from './mainSection.module.css';

export default function MainSection({ children }: React.PropsWithChildren<{}>) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}
