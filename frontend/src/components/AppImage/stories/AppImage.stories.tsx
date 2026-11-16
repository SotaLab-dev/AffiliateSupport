import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppImage } from '../AppImage';

const meta: Meta<typeof AppImage> = {
  title: 'Components/AppImage',
  component: AppImage,
};

export default meta;

type Story = StoryObj<typeof AppImage>;

export const LocalImage: Story = {
  args: {
    src: '/images/sample.jpg',
    alt: 'local image',
  },
};

export const ApiImage: Story = {
  args: {
    src: 'https://picsum.photos/600/400',
    alt: 'api image',
  },
};

export const FallbackImage: Story = {
  args: {
    src: 'https://dummy-url/not-found.jpg',
    fallbackSrc: '/images/no-image.png',
    alt: 'fallback image',
  },
};

export const NoPreview: Story = {
  args: {
    src: 'https://picsum.photos/600/400',
    alt: 'no preview',
    preview: false,
  },
};

export const Square: Story = {
  args: {
    src: 'https://picsum.photos/600',
    alt: 'square',
    aspectRatio: 'square',
  },
};

export const Landscape: Story = {
  args: {
    src: 'https://picsum.photos/800/400',
    alt: 'landscape',
    aspectRatio: 'landscape',
  },
};