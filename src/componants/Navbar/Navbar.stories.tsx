import React from "react";
import { Story, Meta } from "@storybook/react";

import { Navbar } from "./Navbar";

export default {
  title: "UI Componants/Navbar",
  component: Navbar,
  argTypes: {},
} as Meta;

const Template: Story<{}> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
