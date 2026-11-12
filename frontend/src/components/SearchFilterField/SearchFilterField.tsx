import { Box, FormControl, FormLabel } from '@mui/material';

import { styles } from './styles';
import type { SearchFilterFieldProps } from './types';


export const SearchFilterField = ({
  label,
  children,
}: SearchFilterFieldProps) => {
  return (
    <FormControl fullWidth sx={styles.formControl}>
      <FormLabel  sx={styles.formLabel}>
        {label}
      </FormLabel>

      <Box>
        {children}
      </Box>
    </FormControl>
  );
};