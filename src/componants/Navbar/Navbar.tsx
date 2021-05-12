import { ReactNode } from "react";

import "./navbar.css";

export type NavbarProps = {
  children?: ReactNode | ReactNode[];
  title?: ReactNode;
};

function Navbar({ title, children }: NavbarProps) {
  const navItems = Array.isArray(children) ? children : [children];

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        {title && <h2 className="navbar__title">{title}</h2>}
        {children && (
          <ul className="navbar__items">
            {navItems.map((item, i) => (
              <NavItem key={i}>{item}</NavItem>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

function NavItem({ children }: { children: ReactNode }) {
  return <li className="navbar__item">{children}</li>;
}

export { Navbar };
