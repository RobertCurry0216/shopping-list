import { Story, Meta } from "@storybook/react";

import { ShoppingList } from "./ShoppingList";

export default {
  title: "UI Componants/ShoppingList",
  component: ShoppingList,
  argTypes: {},
} as Meta;

const Template: Story<{}> = (args) => <ShoppingList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
