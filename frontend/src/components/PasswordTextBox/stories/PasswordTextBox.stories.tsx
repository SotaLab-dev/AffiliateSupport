import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { PasswordTextBox } from '@/components/PasswordTextBox/PasswordTextBox';
  
const meta: Meta<typeof PasswordTextBox> = {
  title: 'Components/PasswordTextBox',
  component: PasswordTextBox,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'パスワード',
    disabled: false,
    onChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    onChange: fn(),
}
};

export const WithValue: Story = {
  args: {
    value: 'password123',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'password123',
  },
};
