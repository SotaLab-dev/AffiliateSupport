export interface AppWorkInfoCardProps {
  imageUrl: string;
  title: string;
  actressName: string;

  onClickActress?: () => void;
  onClickX?: () => void;
  onClickCreatePost?: () => void;
}