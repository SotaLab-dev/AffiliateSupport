import { Button } from '@mui/material';

import { appButtonStyle, AppButtonStyleProps } from "./styles"
import { type AppButtonProps } from './types';

export const AppButton = ({
  children,
  onClick,
  ...props
}: AppButtonProps) => {
  return (
        <Button
            onClick={onClick}
            sx={{appButtonStyle}}
            {...AppButtonStyleProps}
            {...props}
        >
            {children}
        </Button>
  );
};