import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import SideMenu from '@/components/SideMenu/SideMenu';

const meta = {
    title: 'Components/SideMenu',
    component: SideMenu,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

const SideMenuTemplate = () => {
    const [open, setOpen] = useState(true);

    return (
        <MemoryRouter>
        <SideMenu
            open={open}
            setOpen={setOpen}
        />
        </MemoryRouter>
    );
};

export const Default: Story = {
    args: {
        open: true,
        setOpen: () => {},
    },
    render: () => <SideMenuTemplate />,
};