import React from "react";
import { useLocation } from "react-router-dom";
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
import { Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-white max-w-[25%] rounded-xl mt-4 py-12 px-6 relative min-h-[892px]">
      <ul className="list-none text-md font-semibold text-gray-500 hover:cursor-pointer space-y-10 overflow-hidden">
        <li className="">
          <Link
            to="/attendance"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/attendance"
                ? "font-bold bg-teal-400 p-1 rounded-md text-white"
                : ""
            }`}
          >
            <FaRegListAlt />
            <span className="ml-2 hidden sm:flex">Anwesenheitsliste</span>
          </Link>
        </li>
        <li className="">
          <Link
            to="/remote"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/remote"
                ? "font-bold bg-teal-400 pl-1 rounded-md text-white truncate"
                : ""
            }`}
          >
            <AiOutlineCalendar />
            <span className="ml-2 hidden sm:flex">Remote Unterricht</span>
          </Link>
        </li>
        <li className="">
          <Link
            to="/students"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/students"
                ? "font-bold bg-teal-400 p-1 rounded-md text-white"
                : ""
            }`}
          >
            <IoIosPeople />
            <span className="ml-2 hidden sm:flex">Schüler/innen</span>
          </Link>
        </li>
        <li className="">
          <Link
            to="/homeworks"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/homeworks"
                ? "font-bold bg-teal-400 p-1 rounded-md text-white"
                : ""
            }`}
          >
            <CgCopy />
            <span className="ml-2 hidden sm:flex">HA/Dateien</span>
          </Link>
        </li>

        <li className="">
          <Link
            to="/teachers"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/teachers"
                ? "font-bold bg-teal-400 p-1 rounded-md text-white"
                : ""
            }`}
          >
            <GiTeacher />
            <span className="ml-2 hidden sm:flex">Lehrkräfte</span>
          </Link>
        </li>
        <li className="">
          <Link
            to="/subjects"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/subjects"
                ? "font-bold bg-teal-400 p-1 rounded-md text-white"
                : ""
            }`}
          >
            <ImBooks />
            <span className="ml-2 hidden sm:flex">Fächer</span>
          </Link>
        </li>
        <li className="">
          <Link
            to="/classes"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/classes"
                ? "font-bold bg-teal-400 p-1 rounded-md text-white"
                : ""
            }`}
          >
            <SiGoogleclassroom />
            <span className="ml-2 hidden sm:flex">Klassen</span>
          </Link>
        </li>
        <li className="">
          <Link
            to="/calendar"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/calendar"
                ? "font-bold bg-teal-400 p-1 rounded-md text-white"
                : ""
            }`}
          >
            <RiCalendarEventLine />
            <span className="ml-2 hidden sm:flex">Events</span>
          </Link>
        </li>
        <li className="">
          <Link
            to="/settings"
            className={`hover:text-gray-800 flex items-center ${
              location.pathname === "/settings"
                ? "font-bold bg-teal-400 p-1 rounded-md text-white"
                : ""
            }`}
          >
            <FiSettings />
            <span className="ml-2 hidden sm:flex">Einstellungen</span>
          </Link>
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
