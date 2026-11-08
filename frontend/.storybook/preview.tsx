import { ThemeProvider } from '@mui/material/styles';
import type { Preview } from '@storybook/react';

import { theme } from '../src/themes/theme';

const preview: Preview = {
    decorators: [
        (Story) => (
            // Routerを使用するコンポーネントのStoryでは、MemoryRouterでラップする
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
        ),
    ],
};

export default preview;