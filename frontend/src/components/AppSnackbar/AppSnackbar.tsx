import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import type { AppSnackbarProps } from './types';

export const AppSnackbar = ({
  open,
  severity,
  message,
  onClose,
}: AppSnackbarProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert
        severity={severity}
        onClose={onClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};