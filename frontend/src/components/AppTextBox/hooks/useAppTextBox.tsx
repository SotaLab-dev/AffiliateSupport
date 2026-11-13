import type { ChangeEvent } from 'react';

import { MESSAGE } from '@/constants/message';
import { isHalfWidth } from '@/utils/isHalfWidth';

import type { UseAppTextBoxProps } from '../types';

export const useAppTextBox = ({
  mode,
  onChange,
  showSnackbar
}: UseAppTextBoxProps) => {

  const handleChange = (
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      
      const inputValue = event.target.value;
      if (mode === 'account' &&
      !isHalfWidth(inputValue)
    ) {
      showSnackbar?.(
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