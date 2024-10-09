import type { Meta, StoryObj } from "@storybook/react";

import Testimonial from "@components/Testimonial";

const meta = {
  title: "Testimonial",
  component: Testimonial,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading:
      "HoistLoop has been Instrumental in Transforming our Online Presence.",
    quote:
      "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    personCardProps: {
      name: "John Doe",
      title: "CEO of HositLoop",
      anchorHref: "https://fakeurl.com",
      anchorText: "Open Website",
      imageSrc: "https://place-hold.it/60x60",
      imageAltText: "John Doe Photo",
    },
  },
};
