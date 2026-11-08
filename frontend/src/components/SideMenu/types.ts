export type SideMenuItem = {
  label: string;
  path: string;
};

export type SideMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
