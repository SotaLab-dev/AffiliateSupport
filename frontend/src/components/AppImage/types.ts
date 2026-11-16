export type AppImageProps = {
  src?: string | null;
  alt: string;

  width?: string | number;
  height?: string | number;

  fallbackSrc?: string;

  preview?: boolean;
  aspectRatio: 'square' | 'landscape' 

  objectFit?: 'cover' | 'contain';

  className?: string;
};
