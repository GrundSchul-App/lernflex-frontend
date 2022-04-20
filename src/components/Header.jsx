import React from "react";
import logo from "../assets/images/Logo.svg";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex h-[80px] items-center ">
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          p-2
          px-1
          text-lg text-gray-700
          bg-white
          rounded-xl
        "
      >
        <div>
          <a href="">
            <img className="h-auto -ml-4" src={logo} />
          </a>
        </div>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-green-400" href="#">
                <BiMessageDetail className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-green-400" href="#">
                <AiOutlineMail className="w-6 h-6" />
              </a>
            </li>
            <li>
              <div class="m-1 w-12 h-12 relative rounded-full bg-gray-500 ">
                <img
                  src="http://source.unsplash.com/50x50/?girl"
                  alt="avatar"
                  className="rounded-full"
                />
              </div>
            </li>
            <li>
              <a
                href="#"
                className="md:p-4 block hover:text-green-400 text-gray-500"
              >
                User Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
