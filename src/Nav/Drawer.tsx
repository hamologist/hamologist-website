import React from 'react';
import {
  Drawer, IconButton, List,
  ListItem, ListItemIcon, ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  menu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
}));

function ListItemLink(props: DefaultComponentProps<any>) {
  return (
    <ListItem button component="a" {...props} >
      <ListItemIcon>
        {props.children}
      </ListItemIcon>
    </ListItem>
  );
}

function NavDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <IconButton onClick={() => setOpen(!open)} edge="end" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <List className={classes.list}>
          <ListItemLink href={"#"}>
            <ListItemText primary={"Projects"} />
          </ListItemLink>
        </List>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
