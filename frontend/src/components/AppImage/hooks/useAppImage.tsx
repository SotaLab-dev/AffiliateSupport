import { useState } from 'react';

type UseAppImageProps = {
  src?: string | null;
  fallbackSrc?: string;
};

export const useAppImage = ({
  src,
  fallbackSrc,
}: UseAppImageProps) => {
  const [open, setOpen] = useState(false);

  const [imageSrc, setImageSrc] = useState(
    src || fallbackSrc || '',
  );

  const handleError = () => {
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    imageSrc,
    handleError,
    handleOpen,
    handleClose,
  };
};