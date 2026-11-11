export type SnackbarSeverity =
  | 'success'
  | 'error'
  | 'warning'
  | 'info';

export type SnackbarState = {
  open: boolean;
  message: string;
  severity: SnackbarSeverity;
}

export type AppSnackbarProps = SnackbarState & {
  onClose: () => void;
};

export type ShowSnackbar = (
  message: string,
  severity?: SnackbarSeverity,
) => void;
