import { useState } from 'react';

import { MESSAGE } from '@/constants/message';
import { isHalfWidth } from '@/utils/isHalfWidth';

import type { UsePasswordTextBoxProps } from '../types';


export const usePasswordTextBox = ({
  showSnackbar,
  onChange,
}: UsePasswordTextBoxProps) => {
 
 const [showPassword, setShowPassword] =
    useState(false);

  const handleChange = (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const value = event.target.value;

  if (!isHalfWidth(value)) {
    showSnackbar(
      MESSAGE.INPUT.HALF_WIDTH_ONLY,
      'warning',
    );

    return;
  }

  onChange(value);
};

  const handlePaste = (
  event: React.ClipboardEvent<HTMLInputElement>,
) => {
  const value =
    event.clipboardData.getData('text');

  if (!isHalfWidth(value)) {
    event.preventDefault();

    showSnackbar(
      MESSAGE.INPUT.HALF_WIDTH_ONLY,
      'warning',
    );
  }
};
return {
    showPassword,
    setShowPassword,
    handleChange,
    handlePaste,
  };
}