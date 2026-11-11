import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { AppTextBox } from '../AppTextBox';

const meta: Meta<typeof AppTextBox> = {
  title: 'Components/AppTextBox',
  component: AppTextBox,
  tags: ['autodocs'],
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <AppTextBox
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Normal: Story = {
  args: {
    mode: 'normal',
    placeholder: '通常テキスト',
  },
};

export const Account: Story = {
  args: {
    mode: 'account',
    placeholder: 'アカウント',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'disabled',
  },
};
