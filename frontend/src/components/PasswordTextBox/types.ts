import type { SnackbarSeverity } from "../AppSnackbar/types";

export type PasswordTextBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  showSnackbar: (
    message: string,
    severity?: SnackbarSeverity,
  ) => void;
};

export type UsePasswordTextBoxProps = {
  onChange: (value: string) => void;
  showSnackbar: (
    message: string,
    severity?: SnackbarSeverity,
  ) => void;
};