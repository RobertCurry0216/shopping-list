import React from "react";
import { ShoppingListItemProps } from "../../componants/ShoppingListItem";

export interface IShoppingList {
  status: "ready" | "pending";
  listId: string;
  username: string;
  items: ShoppingListItemProps[];
}

type actionType =
  | {
      type: "fetch list";
    }
  | {
      type: "add item";
      payload: { item: ShoppingListItemProps };
    }
  | {
      type: "update item";
      payload: { item: ShoppingListItemProps };
    };

export type listDispatch = React.Dispatch<actionType>;

export function listReducer(
  state: IShoppingList,
  action: actionType
): IShoppingList {
  switch (action.type) {
    case "add item":
      return { ...state, items: [...state.items, action.payload.item] };
    case "update item":
      return state;
    case "fetch list":
      return {
        ...state,
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
    default:
      throw new Error(`unknown action: ${action}`);
  }
}
