import { useAppImage } from './hooks/useAppImage';
import {
  ImageWrapper,
  PreviewDialog,
  PreviewImage,
  StyledImage,
} from './styles';
import type { AppImageProps } from './types';

export const AppImage = ({
  src,
  alt,
  fallbackSrc,
  preview = true,
}: AppImageProps) => {
  const {
    open,
    imageSrc,
    handleError,
    handleOpen,
    handleClose,
  } = useAppImage({
    src,
    fallbackSrc,
  });

  return (
    <>
      <ImageWrapper
        onClick={preview ? handleOpen : undefined}
      >
        <StyledImage
          src={imageSrc}
          alt={alt}
          onError={handleError}
          loading="lazy"
          objectFit="contain"
        />
      </ImageWrapper>

      {preview && (
        <PreviewDialog
          open={open}
          onClose={handleClose}
        >
          <PreviewImage
            src={imageSrc}
            alt={alt}
          />
        </PreviewDialog>
      )}
    </>
  );
};