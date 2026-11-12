import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppButton } from '@/components/AppButton/AppButton';

const meta: Meta<typeof AppButton> = {
  title: 'Components/AppButton',
  component: AppButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '検索',
    onClick: () => {},
  },
};