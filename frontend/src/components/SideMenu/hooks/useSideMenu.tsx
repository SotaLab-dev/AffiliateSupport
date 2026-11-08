
import { useNavigate } from "react-router-dom";

import path from "@/constants/path";

import type { SideMenuItem, SideMenuProps } from "../types";

export const useSideMenu = ({
    setOpen,
}: Pick<SideMenuProps, `setOpen`>) => {

    const navigate = useNavigate();
    const menuItems: SideMenuItem[] = [
        {
        label: "ダッシュボード",
        path: path.Dashboard,
        },
    ];

    const handleClose = () => {
        setOpen(false);
    };

    const handleMenuClick = (path: string) => {
        navigate(path);
        setOpen(false);
        };

    const isActive = (path: string) => 
        location.pathname === path;

    return {
        menuItems,
        handleClose,
        handleMenuClick,
        isActive,
    };
};