import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Root = styled(Box)({
  width: '100vw',
  height: '100vh',

  minWidth: '1600px',
  minHeight: '900px',

  overflowX: 'auto',
  overflowY: 'hidden',
});

export const Layout = styled(Box)({
  display: 'flex',

  width: '100%',
  height: '100%',
});

export const Main = styled(Box)({
  display: 'flex',
  flexDirection: 'column',

  flex: 1,

  minWidth: 0,
  minHeight: 0,

  overflow: 'hidden',
});

export const Content = styled(Box)({
  flex: 1,

  minWidth: 0,
  minHeight: 0,

  padding: '24px',

  overflowY: 'auto',
  overflowX: 'hidden',
});

export const Z_INDEX = {
  header: 100,
  sideMenu: 90,
  toast: 900,
  modal: 1000,
} as const;