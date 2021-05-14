import { useContext } from "react";
import { ListContext } from "../../context";

export function useShoppingList() {
  return useContext(ListContext);
}
