import type { Theme } from '@mui/material';
import type { SystemStyleObject  } from '@mui/system';


const APP_HEADER_HEIGHT = 64; // AppHeaderの高さを定義

export const styles: Record<string, SystemStyleObject <Theme>> = {
    header: {
    height: `${APP_HEADER_HEIGHT}px`,
    position: "sticky",
    top: 0,
    display: "flex",
    }
}