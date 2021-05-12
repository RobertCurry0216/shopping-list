import React from "react";
import { Story, Meta } from "@storybook/react";

import { Navbar, NavbarProps } from "./Navbar";

export default {
  title: "UI Componants/Navbar",
  component: Navbar,
  argTypes: {},
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: <a href="#">Primary</a>,
  children: [
    <a href="#">Home</a>,
    <a href="#">About</a>,
    <a href="#">Log in</a>,
  ],
};

export const Empty = Template.bind({});
Empty.args = {};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  title: "Title",
};

export const LinksOnly = Template.bind({});
LinksOnly.args = {
  children: [
    <a href="#">Home</a>,
    <a href="#">About</a>,
    <a href="#">Log in</a>,
  ],
};
