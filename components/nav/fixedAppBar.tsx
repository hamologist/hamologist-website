import { styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const FixedAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export default FixedAppBar;
