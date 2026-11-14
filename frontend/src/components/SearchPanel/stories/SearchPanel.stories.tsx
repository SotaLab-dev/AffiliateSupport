import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchPanel } from '../SearchPanel';

const meta = {
  title: 'Components/SearchPanel',
  component: SearchPanel,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SearchPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSearch: async (params) => {
      console.log('search params', params);
    },
  },
};

export const Loading: Story = {
      args: {
    onSearch: async () => {
      await new Promise((resolve) =>
        setTimeout(resolve, 3000),
      );
    },
  },
    render: (args) => (
        <SearchPanel {...args} />
    ),
};