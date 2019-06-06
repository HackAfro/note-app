import React from "react";
import Logo from "./files-and-folders.svg";
import "./header.css";

const Header = () => (
  <header className='header'>
    <div className="brand">
      <img src={Logo} alt="avatar" />
      <h5>For Notes</h5>
    </div>
  </header>
);

export default Header;
