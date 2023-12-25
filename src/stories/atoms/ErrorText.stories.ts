import type { Meta, StoryObj } from "@storybook/react";
import ErrorText from "../../components/atoms/error/ErrorText";

const meta: Meta<typeof ErrorText> = {
  component: ErrorText,
  title: "Atoms/ErrorTexts/ErrorText",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    textColor: "red",
  },
};
