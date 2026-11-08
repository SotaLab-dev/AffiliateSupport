import type { AppHeaderProps } from "../types";

export const useAppHeader = ({
    setOpen,
}: AppHeaderProps) => {
    const handleOpenMenu = () => {
        setOpen(true);
    };

    return {
        handleOpenMenu,
    }
}
export default useAppHeader;