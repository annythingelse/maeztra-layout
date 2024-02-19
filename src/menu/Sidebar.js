import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

// eslint-disable-next-line
export default (props) => {
  return (
    <Menu>
      <div className="menu-item-novidades">
        <a className="menu-item" href="/">
          Novidades
        </a>
      </div>
      <a className="menu-item" href="/">
        Vestidos
      </a>
      <a className="menu-item" href="/">
        Roupas
      </a>
      <a className="menu-item" href="/">
        Sapatos
      </a>
      <a className="menu-item" href="/">
        Lingerie
      </a>
      <a className="menu-item" href="/">
        Acessórios
      </a>
      <a className="menu-item" href="/">
        OUTLET
      </a>
    </Menu>
  );
};
