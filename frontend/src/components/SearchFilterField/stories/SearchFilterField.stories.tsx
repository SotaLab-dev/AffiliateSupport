import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppPulldownMenu } from '@/components/AppPulldownMenu/AppPulldownMenu';
import { AppTextBox } from '@/components/AppTextBox/AppTextBox';
import { SearchFilterField } from '@/components/SearchFilterField/SearchFilterField';

const meta: Meta<typeof SearchFilterField> = {
  title: 'Components/SearchFilterField',
  component: SearchFilterField,
  tags: ['autodocs'],
};


export default meta;

type Story = StoryObj<typeof SearchFilterField>;

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

export const TextInput: Story = {
  render: () => (
    <SearchFilterField label="サイト名">
      <AppTextBox
        value=""
        onChange={() => {}}
        placeholder="サイト名を入力"
      />
    </SearchFilterField>
  ),
};

export const Pulldown: Story = {
  render: () => (
    <SearchFilterField label="承認状態">
      <AppPulldownMenu
        options={mockOptions}
        value=""
        onChange={() => {}}
      />
    </SearchFilterField>
  ),
};

export const MultipleFields: Story = {
  render: () => (
    <>
      <SearchFilterField label="サイト名">
        <AppTextBox
          value=""
          onChange={() => {}}
          placeholder="サイト名を入力"
        />
      </SearchFilterField>

      <SearchFilterField label="アフィリエイトID">
        <AppTextBox
          value=""
          onChange={() => {}}
          placeholder="IDを入力"
        />
      </SearchFilterField>

      <SearchFilterField label="承認状態">
        <AppPulldownMenu
          options={mockOptions}
          value=""
          onChange={() => {}}
        />
      </SearchFilterField>
    </>
  ),
};