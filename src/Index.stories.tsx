import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "./index";

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  title: "Marbella/ToggleGroup",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <FontBoldIcon className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <FontItalicIcon className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
      <UnderlineIcon className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
