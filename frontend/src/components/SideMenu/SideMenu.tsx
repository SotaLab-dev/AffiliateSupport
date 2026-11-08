import ChevronLeft from '@mui/icons-material/ChevronLeft';
import  { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { useSideMenu } from "./hooks/useSideMenu";
import { styles } from "./styles";
import type { SideMenuProps } from "./types";

const SideMenu = ({
    open,
    setOpen,
}: SideMenuProps) => {
    const { menuItems, handleClose, handleMenuClick, isActive } = useSideMenu({ setOpen });

    return (
        <Box>        
        <Drawer
            anchor="left"
            open={open}
            slotProps={{
                paper: {
                    sx: styles.drawerPaper,
                },
            }}
            onClose={(_, reason) => {
                if (reason === 'backdropClick') {
                return;
                }

                setOpen(false);
            }}
        >
            <Box>
                <IconButton onClick={handleClose}>
                    <ChevronLeft />
                </IconButton>
            </Box>
            <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            disablePadding
          >
            <ListItemButton
              sx={
                isActive(item.path)
                    ? {
                        ...styles.menuItem,
                        ...styles.activeMenuItem,
                    }
                    : styles.menuItem
                }
              onClick={() =>
                handleMenuClick(item.path)
              }
            >
              <ListItemText
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        </Drawer>
        </Box>
    )
}

export default SideMenu;