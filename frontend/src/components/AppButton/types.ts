import type { ButtonProps } from '@mui/material';
import type { ReactNode } from 'react';

export type AppButtonProps = {
  children: ReactNode;
  onClick: () => void;
} & ButtonProps;
