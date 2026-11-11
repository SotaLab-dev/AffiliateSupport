import type { ReactNode } from 'react';
import { useState } from 'react';

import { AppSnackbar } from './AppSnackbar';
import { AppSnackbarContext } from './hooks/useAppSnackbar';
import type {
  SnackbarSeverity,
  SnackbarState,
} from './types';

type AppSnackbarProviderProps = {
  children: ReactNode;
};

export const AppSnackbarProvider = ({
  children,
}: AppSnackbarProviderProps) => {
  const [snackbar, setSnackbar] =
    useState<SnackbarState>({
      open: false,
      message: '',
      severity: 'info',
    });

  const showSnackbar = (
    message: string,
    severity: SnackbarSeverity = 'info',
  ) => {
    setSnackbar({
      open: true,
      message,
      severity,
    });
  };

  const handleClose = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  return (
    <AppSnackbarContext.Provider
      value={{ showSnackbar }}
    >
      {children}

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleClose}
      />
    </AppSnackbarContext.Provider>
  );
};