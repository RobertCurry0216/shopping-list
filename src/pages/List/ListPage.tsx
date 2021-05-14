import { useParams, useLocation } from "react-router";
import { ShoppingList } from "../../componants/ShoppingList";
import { ListProvider } from "../../context/ListContext/ListProvider";

import "./ListPage.css";

export function ListPage() {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const username = new URLSearchParams(search).get("username") || "anonymous";

  return (
    <ListProvider listId={id} username={username}>
      <div className="list-page">
        <ShoppingList />
      </div>
    </ListProvider>
  );
}
