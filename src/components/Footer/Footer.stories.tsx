import type { Meta, StoryObj } from "@storybook/react";

import Footer from "@components/Footer";
import withRouter from "@components/RouterWrapper";

const meta = {
  title: "Footer",
  component: Footer,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
