import React from 'react'
import logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="flex max-w-[1420px] mt-0 mx-auto bg-gray-200 h-[80px] shadow-gray-500/50 items-center">
      <div>
        <img className="h-[70px]" src={logo}/>
      </div>

    </div>
  );
}

export default Header