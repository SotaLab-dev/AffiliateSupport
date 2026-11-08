import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import AppHeader from '@/components/AppHeader/AppHeader';

const meta = {
    title: 'Components/AppHeader',
    component: AppHeader,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof AppHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        setOpen: () => {},
    },
    render: function Render() {
        const [, setOpen] = useState(false);

        return (
            <AppHeader
                setOpen={setOpen}
            />
        );
    },
};