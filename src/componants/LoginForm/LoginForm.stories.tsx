import { Story, Meta } from "@storybook/react";

import { LoginForm, LoginFormProps } from "./LoginForm";

export default {
  title: "Forms/LoginForm",
  component: LoginForm,
  argTypes: {},
} as Meta;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const NewList = Template.bind({});
NewList.args = {
  onClick: (username, id) => console.log(username + id),
  createNewList: true,
};

export const ExistingList = Template.bind({});
ExistingList.args = {
  onClick: (username, id) => console.log(username + id),
  createNewList: false,
};
