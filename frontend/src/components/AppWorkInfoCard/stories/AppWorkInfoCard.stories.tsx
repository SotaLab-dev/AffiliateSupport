import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppWorkInfoCard } from "../AppWorkInfoCard";

const meta: Meta<typeof AppWorkInfoCard> = {
  title: "Components/AppWorkInfoCard",
  component: AppWorkInfoCard,
};

export default meta;

type Story = StoryObj<typeof AppWorkInfoCard>;

export const Default: Story = {
  args: {
    imageUrl: "https://picsum.photos/400/600",
    title: "作品タイトル",
    actressName: "サンプル女優",
  },
};

export const MultipleCards: Story = {
  render: () => {
    const works = [
      {
        imageUrl: "https://picsum.photos/400/600?1",
        title: "作品タイトル001",
        actressName: "女優A",
      },
      {
        imageUrl: "https://picsum.photos/400/600?2",
        title: "作品タイトル002",
        actressName: "女優B",
      },
      {
        imageUrl: "https://picsum.photos/400/600?3",
        title: "作品タイトル003",
        actressName: "女優C",
      },
      {
        imageUrl: "https://picsum.photos/400/600?4",
        title: "作品タイトル004",
        actressName: "女優D",
      },
    ];

    return (
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {works.map((work) => (
          <AppWorkInfoCard
            key={work.title}
            {...work}
          />
        ))}
      </Box>
    );
  },
};