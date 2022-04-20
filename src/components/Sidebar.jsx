import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { CgCopy } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { RiCalendarEventLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {

  return (
    <aside className="bg-white w-[20%] rounded-xl mt-4 py-12 px-6 relative min-h-[892px]">
      <ul className="list-none text-lg font-semibold text-gray-500 hover:cursor-pointer space-y-10 overflow-hidden">
        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <FaRegListAlt />
            <span className="ml-2 hidden sm:flex">Anwesenheitsliste</span>
          </a>
        </li>
        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <AiOutlineCalendar />
            <span className="ml-2 hidden sm:flex">Remote Unterricht</span>
          </a>
        </li>
        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <IoIosPeople />
            <span className="ml-2 hidden sm:flex">Schüler/innen</span>
          </a>
        </li>
        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <CgCopy />
            <span className="ml-2 hidden sm:flex">HA/Dateien</span>
          </a>
        </li>

        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <GiTeacher />
            <span className="ml-2 hidden sm:flex">Lehrkräfte</span>
          </a>
        </li>
        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <ImBooks />
            <span className="ml-2 hidden sm:flex">Fächer</span>
          </a>
        </li>
        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <SiGoogleclassroom />
            <span className="ml-2 hidden sm:flex">Klassen</span>
          </a>
        </li>
        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <RiCalendarEventLine />
            <span className="ml-2 hidden sm:flex">Events</span>
          </a>
        </li>
        <li className="">
          <a
            href="www.google.com"
            className="hover:text-teal-400 flex items-center"
          >
            <FiSettings />
            <span className="ml-2 hidden sm:flex">Einstellungen</span>
          </a>
        </li>
      </ul>
      <div className="flex items-center absolute bottom-14 text-xl font-semibold text-gray-500 hover:cursor-pointer space-x-2 hover:text-red-400">
        <RiLogoutBoxRLine />
        <h3 className="hidden sm:flex">Logout</h3>
      </div>
    </aside>
  );
};

export default Sidebar;
