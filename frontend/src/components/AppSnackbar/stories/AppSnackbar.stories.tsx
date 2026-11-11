import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { AppSnackbar } from '../AppSnackbar';

const meta:Meta <typeof AppSnackbar>= {
  component: AppSnackbar,
    render: (args) => {
    const [open, setOpen] = useState(false);
        return (
            <AppSnackbar
                {...args}
                open={open}
                severity='success'
                onClose={() => setOpen(!open)}
            />
        );
    }
};


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message:"投稿しました"

    }
};