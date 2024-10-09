import type { Meta, StoryObj } from "@storybook/react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import { CursorArrowRippleIcon } from "@heroicons/react/20/solid";

import ContactItem from "@components/ContactItem";
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
    children: (
      <>
        <ContactItem
          text="hello@hoistloop"
          icon={<CursorArrowRippleIcon />}
        />
        <ContactItem
          text="hello@hoistloop"
          icon={<PaintBrushIcon />}
        />
      </>
    ),
  },
};
