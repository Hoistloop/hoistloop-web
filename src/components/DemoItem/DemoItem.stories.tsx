import type { Meta, StoryObj } from "@storybook/react";
import DemoItem from "./DemoItem";

const meta = {
  title: "DemoItem",
  component: DemoItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DemoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: "E-Commerce Platform for Fashion Hub",
    imageUrl: "https://place-hold.it/600x423",
    title: "Chic Boutique",
    url: "https://place-hold.it/",
    description:
      "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
};
