import React, {
  ChangeEvent,
  Dispatch,
  FormEvent,
  useState,
} from 'react';
import {
  Button,
  Drawer,
  List,
  ListItem,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styles from './configurationDrawer.module.css';
import { MandelbrotWorkOrder } from './config';

export type ConfigurationDrawerProps = React.PropsWithChildren<{
  setWorkOrder: Dispatch<React.SetStateAction<MandelbrotWorkOrder>>,
  workOrder: MandelbrotWorkOrder,
}>

export default function ConfigurationDrawer(
  {
    setWorkOrder,
    workOrder,
  }: ConfigurationDrawerProps,
) {
  const [form, setForm] = useState<{
    x: number,
    y: number,
    zoom: number,
    maxIterations: number,
    escapePoint: number
  }>({
    x: workOrder.xC,
    y: workOrder.yC,
    zoom: workOrder.zoom,
    maxIterations: workOrder.maxIterations,
    escapePoint: workOrder.escapePoint,
  });

  const handleChange = (event: ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      {name: string, value: number}
    >) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: Number(event.target.value),
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    setWorkOrder((prevState) => ({
      ...prevState,
      xC: form.x,
      yC: form.y,
      zoom: form.zoom,
      maxIterations: form.maxIterations,
      escapePoint: form.escapePoint,
    }));
    event.preventDefault();
  };

  return (
    <Drawer
      className={styles.drawer}
      variant="permanent"
      classes={{
        paper: styles.drawerPaper,
      }}
    >
      <Toolbar variant="dense" />
      <div className={styles.drawerContainer}>
        <form onSubmit={handleSubmit} className={styles.root} noValidate autoComplete="off">
          <List>
            <ListItem>
              <TextField
                name="x"
                id="standard-basic"
                label="X-Value"
                type="number"
                onChange={handleChange}
                defaultValue={workOrder.xC}
              />
            </ListItem>
            <ListItem>
              <TextField
                name="y"
                id="standard-basic"
                label="Y-Value"
                type="number"
                onChange={handleChange}
                defaultValue={workOrder.yC}
              />
            </ListItem>
            <ListItem>
              <TextField
                name="zoom"
                id="standard-basic"
                label="Zoom"
                type="number"
                onChange={handleChange}
                defaultValue={workOrder.zoom}
              />
            </ListItem>
            <ListItem>
              <TextField
                name="maxIterations"
                id="standard-basic"
                label="Max Iterations"
                type="number"
                onChange={handleChange}
                defaultValue={workOrder.maxIterations}
                inputProps={{
                  min: '0',
                  step: '1',
                }}
              />
            </ListItem>
            <ListItem>
              <TextField
                name="escapePoint"
                id="standard-basic"
                label="Escape Point"
                type="number"
                onChange={handleChange}
                defaultValue={workOrder.escapePoint}
              />
            </ListItem>
            <ListItem>
              <Button type="submit" value="Submit">
                <Typography>Compute</Typography>
              </Button>
            </ListItem>
          </List>
        </form>
      </div>
      <Toolbar variant="dense" />
    </Drawer>
  );
}
