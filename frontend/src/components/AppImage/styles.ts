import { Box, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ImageWrapper = styled(Box)`
  cursor: pointer;
`;

export const StyledImage = styled('img')<{
  objectFit: 'contain' | 'cover';
}>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
`;

export const PreviewDialog = styled(Dialog)`
  .MuiDialog-paper {
    max-width: 90vw;
    max-height: 90vh;
    background: transparent;
    box-shadow: none;
  }
`;

export const PreviewImage = styled('img')`
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
`;
