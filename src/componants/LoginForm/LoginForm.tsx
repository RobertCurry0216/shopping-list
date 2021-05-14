import React from "react";

//styles
import "./LoginForm.css";

export type LoginFormProps = {
  username?: string;
  listId?: string | null;
  createNewList?: boolean;
  onClick: (username: string, id: string | null) => void;
};

export function LoginForm({
  username = "",
  listId = null,
  createNewList = true,
  onClick,
}: LoginFormProps) {
  const [usernameInput, setUsernameInput] = React.useState(username);
  const [listIdInput, setListIdInput] = React.useState(listId);
  const [createNewListInput, setCreateNewListInput] = React.useState(
    createNewList
  );

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onClick(usernameInput, listIdInput);
  }

  return (
    <form className="login-form" onSubmit={onSubmitHandler}>
      <h2 className="login-form__full-row">Log In</h2>
      <label className="login-form__label" htmlFor="username">
        Name
      </label>
      <input
        className="login-form__input"
        type="text"
        id="username"
        placeholder="your name"
        onChange={(e) => setUsernameInput(e.target.value)}
        required
      />

      <div className="login-form__full-row">
        <input
          className="login-form__check"
          type="checkbox"
          id="ex-list-check"
          checked={!createNewListInput}
          onChange={() => setCreateNewListInput((b) => !b)}
        />
        <label htmlFor="ex-list-check" className="login-form__label">
          Join existing shopping list
        </label>
      </div>

      <label htmlFor="list-id" className="login-form__label">
        List ID
      </label>
      <input
        type="text"
        className="login-form__input"
        id="list-id"
        placeholder="12345"
        onChange={(e) => setListIdInput(e.target.value)}
        disabled={createNewListInput}
        minLength={5}
        maxLength={5}
        required={!createNewList}
      />
      <button
        className="login-form__submit-button login-form__full-row"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
