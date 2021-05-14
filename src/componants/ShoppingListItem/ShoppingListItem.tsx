import React from "react";
import "./shoppinglistitem.css";

// icons
import { MdCheck } from "react-icons/md";

// units
const unitTypes = ["x", "g", "mg", "kg", "ml", "l"] as const;

export type ShoppingListItemProps = {
  id: number;
  title: string;
  quantity: number;
  unit?: typeof unitTypes[number];
  isBought?: boolean;
};

export function ShoppingListItem({
  title,
  quantity,
  unit = "x",
  isBought = false,
}: ShoppingListItemProps) {
  const [bought, setBought] = React.useState(isBought);

  const onCheckHandler = () => setBought((v) => !v);

  return (
    <article className={`sl-item ${bought ? "bought" : ""}`}>
      <h3 className="sl-item__quantity">
        <strong>{quantity}</strong>
        {unit}
      </h3>
      <h3 className="sl-item__title">{title}</h3>
      <button className="sl-item__check" onClick={onCheckHandler}>
        {bought && <MdCheck className="sl-item__icon sl-item__icon--check" />}
      </button>
    </article>
  );
}
