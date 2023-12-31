import type { Meta, StoryObj } from "@storybook/react";
import Label from "../../components/atoms/labels/Label";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Atoms/Labels/Label",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
