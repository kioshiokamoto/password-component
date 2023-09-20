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
  argTypes: {
    toggleMask: {
      defaultValue: true,
      description: "Show toggle password mask button",
      type: { name: "boolean", required: false },
    },
    parentClassName: {
      description:
        "Class name to modify every element of the component. You need to add css to file",
      type: { name: "string", required: false },
    },
    options: {
      description: "Password rules to validate",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Principal: Story = {
  args: {
    options: [
      "hasNumber",
      "hasNoConsecutiveLetter",
      "hasUpperCase",
      "hasSpecialChar",
    ],
  },
};
