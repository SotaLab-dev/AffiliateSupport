import EditNoteIcon from "@mui/icons-material/EditNote";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Card,
  IconButton,
  Link,
} from "@mui/material";

import { AppImage } from "../AppImage/AppImage";
import { AppLabel } from "../AppLabel/AppLabel";
import { useAppWorkInfoCard } from "./hooks/useAppWorkInfoCard";
import {
  actionAreaStyle,
  actressLinkStyle,
  cardStyle,
  contentStyle,
  imageWrapperStyle,
} from "./styles";
import type { AppWorkInfoCardProps } from "./types";

export const AppWorkInfoCard = ({
  imageUrl,
  title,
  actressName,
  onClickActress,
  onClickX,
  onClickCreatePost,
}: AppWorkInfoCardProps) => {
  const {
    handleClickActress,
    handleClickX,
    handleClickCreatePost,
  } = useAppWorkInfoCard({
    onClickActress,
    onClickX,
    onClickCreatePost,
  });

  return (
    <Card sx={cardStyle}>
      <Box sx={imageWrapperStyle}>
        <AppImage
            src={imageUrl}
            alt={title}
            objectFit="contain"
            aspectRatio='square'
        />
        </Box>

      <Box sx={contentStyle}>
        <AppLabel
          name={title}
        />

        <Link
          component="button"
          underline="hover"
          onClick={handleClickActress}
          sx={actressLinkStyle}
        >
          {actressName}
        </Link>

        <Box sx={actionAreaStyle}>
          <IconButton
            size="small"
            onClick={handleClickX}
          >
            <XIcon fontSize="small" />
          </IconButton>

          <IconButton
            size="small"
            onClick={handleClickCreatePost}
          >
            <EditNoteIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};