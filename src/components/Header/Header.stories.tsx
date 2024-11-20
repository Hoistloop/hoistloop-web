import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta = {
  title: "Header",
  component: Header,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://place-hold.it/1596x796",
    title: "A Digital Product Studio that will Work",
    worksText: "Our Works",
    contactText: "Contact Us",
    worksHref: "https://fakeurl.com",
    contactHref: "https://contact.com",
    description:
      "For startups, enterprise leaders, media & publishers, and social good.",
    words: [
      "startups",
      "enterprise leaders",
      "media & publishers",
      "social good",
    ],
  },
};
