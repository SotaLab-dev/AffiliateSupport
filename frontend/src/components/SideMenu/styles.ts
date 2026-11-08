import type { Theme } from '@mui/material';
import type { SystemStyleObject  } from '@mui/system';
export const DRAWER_WIDTH = 240;

export const styles: Record<string, SystemStyleObject <Theme>> = {
  drawerPaper: {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 56,
    px: 1,
  },

  menuItem: {
    borderLeft: '4px solid transparent',
  },

  activeMenuItem: {
    borderLeft: '4px solid',
    borderColor: 'primary.main',
    backgroundColor: 'action.selected',
  },
};