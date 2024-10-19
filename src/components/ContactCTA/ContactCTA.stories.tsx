import type { Meta, StoryObj } from "@storybook/react";
import ContactCTA from "./ContactCTA";

const meta = {
  title: "ContactCTA",
  component: ContactCTA,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: "https://place-hold.it/80x80",
    imageUrl: "https://place-hold.it/1595x624",
    title: "Let us Bring your Ideas to Life in the Digital World.",
    subtitle:
      "No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.",
    buttonText: "Start Project",
    contactHref: "https://fakeurl.com",
  },
};
