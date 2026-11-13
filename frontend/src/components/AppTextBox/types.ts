import type { SnackbarSeverity } from "../AppSnackbar/types";

export type AppTextBoxMode = 'normal' | 'account';

export type AppTextBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  mode?: AppTextBoxMode;showSnackbar?: (
    message: string,
    severity?: SnackbarSeverity,
  ) => void;

};

export type UseAppTextBoxProps = {
  mode?: AppTextBoxMode;
  onChange: (value: string) => void;
  showSnackbar?: (
    message: string,
    severity?: SnackbarSeverity,
  ) => void;
};