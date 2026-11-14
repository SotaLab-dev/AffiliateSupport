export const searchPanelStyles = {
  root: {
    mb: 3,
  },

  actions: {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    flexWrap: 'wrap'
  },
} as const;

export const SEARCH_PANEL_GRID_SIZE = {
  xs: 12,
  sm: 6,
  md: 2,
} as const;

export const SEARCH_PANEL_ACTION_SIZE = {
  xs: 12,
  sm: 6,
  md: 4,
} as const;
