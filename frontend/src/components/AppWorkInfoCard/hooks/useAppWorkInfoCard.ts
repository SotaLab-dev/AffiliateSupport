import type { AppWorkInfoCardProps } from "../types";

export const useAppWorkInfoCard = ({
  onClickActress,
  onClickX,
  onClickCreatePost,
}: Pick<
  AppWorkInfoCardProps,
  "onClickActress" | "onClickX" | "onClickCreatePost"
>) => {
  const handleClickActress = () => {
    onClickActress?.();
  };

  const handleClickX = () => {
    onClickX?.();
  };

  const handleClickCreatePost = () => {
    onClickCreatePost?.();
  };

  return {
    handleClickActress,
    handleClickX,
    handleClickCreatePost,
  };
};