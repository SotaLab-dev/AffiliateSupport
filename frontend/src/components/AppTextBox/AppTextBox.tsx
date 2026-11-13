import TextField from '@mui/material/TextField';

import { useAppTextBox } from './hooks/useAppTextBox';
import { StyledTextBox } from './styles';
import type { AppTextBoxProps } from './types';

export const AppTextBox = ({
  value,
  onChange,
  mode,
  showSnackbar,
  ...props
}: AppTextBoxProps) => {
  const { handleChange } = useAppTextBox({mode, onChange, showSnackbar});

  return (
    <TextField
      value={value}
      onChange={handleChange}
      {...props}
      sx={StyledTextBox}
    />
  );
}