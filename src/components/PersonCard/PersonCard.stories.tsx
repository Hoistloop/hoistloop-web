import type { Meta, StoryObj } from "@storybook/react";

import PersonCard from "@components/PersonCard";

const meta = {
  title: "PersonCard",
  component: PersonCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PersonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John Doe",
    title: "CEO of HositLoop",
    anchorHref: "https://fakeurl.com",
    anchorText: "Open Website",
    imageSrc: "https://place-hold.it/60x60",
    imageAltText: "John Doe Photo",
  },
};
