import type { ChangeEvent } from 'react';

import { useAppSnackbar } from '@/components/AppSnackbar/hooks/useAppSnackbar';
import { MESSAGE } from '@/constants/message';
import { isHalfWidth } from '@/utils/isHalfWidth';

import type { AppTextBoxProps } from '../types';

export const useAppTextBox = ({
  mode,
  onChange,
}: Pick<AppTextBoxProps, 'mode' | 'onChange'>) => {
  const { showSnackbar } = useAppSnackbar();

  const handleChange = (
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      
      const inputValue = event.target.value;
      if (mode === 'account' &&
      !isHalfWidth(inputValue)
    ) {
      showSnackbar(
        MESSAGE.INPUT.HALF_WIDTH_ONLY,
        'warning',
      );

      return;
    }
    onChange(inputValue);
  }
  return {
    handleChange,
  };
}