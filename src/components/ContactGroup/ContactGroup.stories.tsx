import type { Meta, StoryObj } from "@storybook/react";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";

import ContactGroup from "@components/ContactGroup";

const meta = {
  title: "ContactGroup",
  component: ContactGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ContactGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contacts: [
      {
        text: "hello@hoistloop",
        icon: <CursorArrowRippleIcon />,
      },
      {
        text: "hello@hoistloop",
        icon: <CursorArrowRippleIcon />,
      },
    ],
  },
};
