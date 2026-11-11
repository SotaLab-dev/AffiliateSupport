import TextField from '@mui/material/TextField';

import { useAppTextBox } from './hooks/useAppTextBox';
import type { AppTextBoxProps } from './types';

export const AppTextBox = ({
  value,
  onChange,
  mode = 'normal',
  ...props
}: AppTextBoxProps) => {
  const { handleChange } = useAppTextBox({mode, onChange});

  return (
    <TextField
      value={value}
      onChange={handleChange}
      fullWidth
      {...props}
    />
  );
}