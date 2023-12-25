import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../components/atoms/buttons/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Atoms/Buttons/Button",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    buttonLabel: "Login",
    colorScheme: "blue",
    rounded: "full",
    size: "lg",
    variant: "outline",
  },
};

export const Logout: Story = {
  args: {
    buttonLabel: "Logout",
    colorScheme: "red",
    rounded: "full",
    size: "lg",
    variant: "outline",
  },
};

export const Signup: Story = {
  args: {
    buttonLabel: "Signup",
    colorScheme: "blue",
    rounded: "full",
    size: "lg",
    variant: "outline",
  },
};
