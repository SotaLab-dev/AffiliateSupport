import { type SxProps, type Theme } from "@mui/system";

export const cardStyle: SxProps<Theme> = {
  width: 150,
  height: 400,
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ddd",
  borderRadius: 2,
  overflow: "hidden",
};

export const imageWrapperStyle = {
  height: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  borderBottom: "1px solid #eee",
  width: "100%",
  aspectRatio: '4/5'
};

export const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  p: 2,
};

export const actressLinkStyle: SxProps<Theme> = {
  mt: 1,
  cursor: "pointer",
  color: "primary.main",
};

export const actionAreaStyle = {
  mt: "auto",
  display: "flex",
  justifyContent: "flex-end",
  alignContent: "flex-end",
  gap: 0.5,
};