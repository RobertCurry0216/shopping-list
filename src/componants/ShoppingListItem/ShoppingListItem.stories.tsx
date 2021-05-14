import { Story, Meta } from "@storybook/react";

import { ShoppingListItem, ShoppingListItemProps } from "./ShoppingListItem";

export default {
  title: "UI Componants/ShoppingListItem",
  component: ShoppingListItem,
  argTypes: {},
} as Meta;

const Template: Story<ShoppingListItemProps> = (args) => (
  <ShoppingListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  id: 1,
  title: "bread",
  quantity: 2,
};

export const Bought = Template.bind({});
Bought.args = {
  id: 1,
  title: "bread",
  quantity: 2,
  isBought: true,
};
