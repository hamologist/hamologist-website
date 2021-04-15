import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle, makeStyles,
} from "@material-ui/core";
import React from "react";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";
import { useTheme } from "@material-ui/core/styles";

export const readMoreDialogStyles = makeStyles(theme => ({
  borderedButton: {
    marginTop: 15,
    border: '1px solid',
  },
  dialogLink: {
    color: '#58a6ff',
  },
}));

export function ReadMoreDialog(props: DefaultComponentProps<any>) {
  const theme = useTheme();
  const classes = readMoreDialogStyles(theme);
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => {setOpen(true)}} className={classes.borderedButton}>Read More</Button>
      <Dialog
        open={open}
        onClose={() => {setOpen(false)}}
      >
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setOpen(false)}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReadMoreDialog;