import { Story, Meta } from "@storybook/react";

import { ShoppingList, ShoppingListProps } from "./ShoppingList";

export default {
  title: "UI Componants/ShoppingList",
  component: ShoppingList,
  argTypes: {},
} as Meta;

const Template: Story<ShoppingListProps> = (args) => (
  <div style={{ maxHeight: "500px", width: "100%", display: "flex" }}>
    <ShoppingList {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { id: 1, title: "bread", quantity: 2 },
    { id: 2, title: "eggs", quantity: 12 },
    { id: 3, title: "milk", quantity: 1.5, unit: "l" },
  ],
};

export const Overflow = Template.bind({});
Overflow.args = {
  items: [
    { id: 1, title: "bread", quantity: 2 },
    { id: 2, title: "eggs", quantity: 12 },
    { id: 3, title: "milk", quantity: 1.5, unit: "l" },
    { id: 4, title: "bread", quantity: 2 },
    { id: 5, title: "eggs", quantity: 12 },
    { id: 6, title: "milk", quantity: 1.5, unit: "l" },
    { id: 7, title: "bread", quantity: 2 },
    { id: 8, title: "eggs", quantity: 12 },
    { id: 9, title: "milk", quantity: 1.5, unit: "l" },
    { id: 10, title: "bread", quantity: 2 },
    { id: 11, title: "eggs", quantity: 12 },
    { id: 12, title: "milk", quantity: 1.5, unit: "l" },
    { id: 13, title: "bread", quantity: 2 },
    { id: 14, title: "eggs", quantity: 12 },
    { id: 15, title: "milk", quantity: 1.5, unit: "l" },
  ],
};
