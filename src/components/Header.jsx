import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.svg";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";



const Header = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userProfile = userData.user.avatar;
    setProfile(userProfile);
    setUser(userData.user.firstName + " " + userData.user.lastName);
  }, [])
  return (
    <header className="flex h-[80px] items-center pt-4 px-4 ">
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
            <img className="h-auto -ml-4 object-top" src={logo} alt="" />
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
                <BiMessageDetail className="w-6 h-6 " />
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-green-400" href="#">
                <AiOutlineMail className="w-6 h-6" />
              </a>
            </li>
            <li className="flex self-center">
              <div className="m-1 items-center relative rounded-full bg-gray-500 ">
                <img src={`${profile} || "https://picsum.photos/100" `} alt="avatar" className="rounded-full w-10" />
              </div>
            </li>
            <li className="flex">
              <a
                href="#"
                className="md:m-2 self-center hover:text-green-400 text-gray-500 truncate font-bold capitalize">
                {user}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
