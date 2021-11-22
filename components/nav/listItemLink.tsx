import React from 'react';
import { ListItem, ListItemIcon } from '@material-ui/core';

export default function ListItemLink(
  {
    href,
    children,
  }: React.PropsWithChildren<{ href: string }>,
) {
  return (
    <ListItem button component="a" disableGutters target="_blank" href={href}>
      <ListItemIcon>
        {children}
      </ListItemIcon>
    </ListItem>
  );
}
