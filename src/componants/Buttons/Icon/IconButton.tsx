import "./IconButton.css";

import { MdAdd, MdRemove } from "react-icons/md";

const IconTypes = {
  add: () => <MdAdd />,
  remove: () => <MdRemove />,
} as const;

export type IconButtonProps = {
  type: keyof typeof IconTypes;
  onClick: () => void;
};

export function IconButton({ type, onClick }: IconButtonProps) {
  return (
    <button className={`icon-button icon-button--${type}`} onClick={onClick}>
      {IconTypes[type]()}
    </button>
  );
}
