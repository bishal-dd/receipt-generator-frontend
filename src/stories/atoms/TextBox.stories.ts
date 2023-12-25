import type { Meta, StoryObj } from "@storybook/react";
import TextBox from "../../components/atoms/textboxes/TextBox";

const meta: Meta<typeof TextBox> = {
  component: TextBox,
  title: "Atoms/TextBoxs/TextBox",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    width: "auto",
  },
};

export const Error: Story = {
  args: {
    width: "auto",
    isInvalid: true,
    errorBorderColor: "crimson",
    placeholder: "Here is a sample placeholder",
  },
};
