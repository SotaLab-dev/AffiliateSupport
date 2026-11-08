import Menu from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

import useAppHeader from "./hooks/useAppHeader";
import { styles } from "./styles";
import type { AppHeaderProps } from "./types";

const AppHeader = ({
    setOpen,
}: AppHeaderProps) => {
    const { handleOpenMenu } = useAppHeader({ setOpen });
    const APP_NAME = "Affiliate Support"; // AppHeaderのアプリ名を定義

    return (
        <AppBar
            sx={
                styles.header
            }
        >
            <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => handleOpenMenu()}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {APP_NAME}
            </Typography>
            </ Toolbar>
        </AppBar>
    );
};

export default AppHeader;