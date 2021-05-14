//styles
import "./shoppinglist.css";

// componants
import { ShoppingListItem } from "../ShoppingListItem";
import { useShoppingList } from "../../utils/hooks";
import React from "react";

function ShoppingList() {
  const {
    state: { items },
    dispatch,
  } = useShoppingList();

  React.useEffect(() => dispatch({ type: "fetch list" }), [dispatch]);

  return (
    <section className={"shopping-list"}>
      {items.map((item) => (
        <ShoppingListItem key={item.id} {...item} />
      ))}
    </section>
  );
}

export { ShoppingList };
