import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppLabel } from "@/components/AppLabel/AppLabel";

const meta: Meta<typeof AppLabel> = {
  title: "Components/AppLabel",
  component: AppLabel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AppLabel>;

export const Default: Story = {
  args: {
    name: "ラベル",
  },
};

export const LongText: Story = {
  args: {
    name: "商品情報API用登録001",
  },
};

export const English: Story = {
  args: {
    name: "Affiliate ID",
  },
};