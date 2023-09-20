import type { Meta, StoryObj } from "@storybook/react";

import PasswordInput from "./PasswordInput";

const meta = {
  title: "Example/PasswordInput",
  component: PasswordInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PasswordNumber: Story = {
  args: {
    label: "PasswordInput",
    options: ["hasNumber"],
  },
};
