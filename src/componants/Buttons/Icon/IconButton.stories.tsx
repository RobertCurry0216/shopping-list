import { Story, Meta } from "@storybook/react";

import { IconButton, IconButtonProps } from "./IconButton";

export default {
  title: "UI Componants/Buttons",
  component: IconButton,
  argTypes: {},
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Add = Template.bind({});
Add.args = {
  type: "add",
};

export const Remove = Template.bind({});
Remove.args = {
  type: "remove",
};
