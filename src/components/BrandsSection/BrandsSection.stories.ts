import { Meta, StoryObj } from "@storybook/react";
import BrandsSection, { BrandsProps } from "./BrandsSection";

const meta = {
  title: "BrandsSection",
  component: BrandsSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BrandsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const brands: BrandsProps["brands"] = [
  { type: "FaAws", size: 40, color: "##E6E6E6" },
  { type: "FaReact", size: 40, color: "##E6E6E6" },
  { type: "FaNode", size: 40, color: "##E6E6E6" },
  { type: "RiNextjsLine", size: 40, color: "##E6E6E6" },
  { type: "FaPhp", size: 40, color: "##E6E6E6" },
];

export const Default: Story = {
  args: {
    brands,
  },
};
