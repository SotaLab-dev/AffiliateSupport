import { createContext, useContext } from 'react';

import type { SnackbarSeverity } from '../types';

export type AppSnackbarContextType = {
  showSnackbar: (
    message: string,
    severity?: SnackbarSeverity,
  ) => void;
};

export const AppSnackbarContext =
  createContext<AppSnackbarContextType | null>(
    null,
  );

export const useAppSnackbar = () => {
  const context = useContext(
    AppSnackbarContext,
  );

  if (!context) {
    throw new Error(
      'AppSnackbarProvider内で使用してください。',
    );
  }

  return context;
};