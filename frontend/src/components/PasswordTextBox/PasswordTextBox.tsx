import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { usePasswordTextBox } from '@/components/PasswordTextBox/hooks/usePasswordTextBox';

import { StyledPasswordTextBox } from './styles';
import type { PasswordTextBoxProps } from './types';

export const PasswordTextBox = ({
  value,
  onChange,
  showSnackbar,
  ...props
}: PasswordTextBoxProps) => {
  
  const { 
    showPassword, 
    setShowPassword, 
    handleChange, 
    handlePaste 
  } = usePasswordTextBox({onChange, showSnackbar});

  return (
    <TextField
      value={value}
      type={showPassword ? 'text' : 'password'}
      sx={StyledPasswordTextBox}
      onChange={handleChange}
      onPaste={handlePaste}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};