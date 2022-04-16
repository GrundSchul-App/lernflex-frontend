import React from "react";
import logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <header className="h-[75px] bg-gray-200">
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
