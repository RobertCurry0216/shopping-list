//styles
import "./shoppinglist.css";

import { ShoppingListItem, ShoppingListItemProps } from "../ShoppingListItem";

export type ShoppingListProps = {
  items: (ShoppingListItemProps & { id: number })[];
};

function ShoppingList({ items }: ShoppingListProps) {
  return (
    <section className={"shopping-list"}>
      {items.map((item) => (
        <ShoppingListItem key={item.id} {...item} />
      ))}
    </section>
  );
}

export { ShoppingList };
