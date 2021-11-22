import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';
import styles from './readMoreDialog.module.css';

export interface ReadMoreDialogProps {
  title: string,
}

export function ReadMoreDialog(
  {
    title,
    children,
  }: React.PropsWithChildren<ReadMoreDialogProps>,
) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button
        onClick={() => { setOpen(true); }}
        className={styles.borderedButton}
      >
        Read More
      </Button>
      <Dialog
        open={open}
        onClose={() => { setOpen(false); }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpen(false); }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
