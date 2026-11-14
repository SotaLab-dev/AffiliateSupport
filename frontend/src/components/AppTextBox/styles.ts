import type { SystemStyleObject, Theme } from "@mui/system";

export const StyledTextBox: Record<string, SystemStyleObject <Theme>> = {
    main: {
        width: '150px',
        minWidth: '50px',
        '& .MuiOutlinedInput-root': {
            height: '40px',
        },
        minHeight: '20px',
    }
};
