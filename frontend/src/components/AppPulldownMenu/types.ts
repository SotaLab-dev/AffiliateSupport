export type Option = {
  id: number;
  value: string;
};

export type AppPulldownMenuProps = {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
};