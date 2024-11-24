import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "@components/Navbar";
import withRouter from "@components/RouterWrapper";

const meta = {
  title: "Navbar",
  component: Navbar,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
