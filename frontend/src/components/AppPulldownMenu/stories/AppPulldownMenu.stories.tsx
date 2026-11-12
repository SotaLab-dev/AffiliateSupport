import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppPulldownMenu } from '@/components/AppPulldownMenu/AppPulldownMenu';

const meta: Meta<typeof AppPulldownMenu> = {
  title: 'Components/AppPulldownMenu',
  component: AppPulldownMenu,
};

export default meta;

type Story = StoryObj<typeof AppPulldownMenu>;

const mockOptions = [
  {
    id: 1,
    value: '承認済み',
  },
  {
    id: 2,
    value: '審査中',
  },
  {
    id: 3,
    value: '却下',
  },
];

export const Default: Story = {
  args: {
    options: mockOptions,
  },
};

export const ManyOptions: Story = {
  args: {
    options: [
      {
        id: 1,
        value: '商品情報API用登録-001',
      },
      {
        id: 2,
        value: '商品情報API用登録-002',
      },
      {
        id: 3,
        value: '商品情報API用登録-003',
      },
      {
        id: 4,
        value: '商品情報API用登録-004',
      },
      {
        id: 5,
        value: '商品情報API用登録-005',
      },
    ],
  },
};