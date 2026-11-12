import type { SxProps, Theme } from '@mui/material';

export const styles: {
  formControl: SxProps<Theme>;
  formLabel: SxProps<Theme>;
} = {
  formControl: {
    mb: 2,
    display: "flex",
    flexDirection: "row",
    gap: 3
  },
  formLabel: {
    alignContent: "center"
  }
};