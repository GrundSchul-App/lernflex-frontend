import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className="bg-white w-[296px] rounded-xl mt-4 p-12 relative min-h-[892px]">
      <ui className="list-none text-2xl font-semibold text-gray-500 hover:cursor-pointer space-y-10">
        <li className="hover:text-teal-400">Dashboard</li>
        <li className="hover:text-teal-400">Remote Unterricht</li>
        <li className="hover:text-teal-400">Schüler/innen</li>
        <li className="hover:text-teal-400">Hausaufgaben</li>
        <li className="hover:text-teal-400">Events</li>
        <li className="hover:text-teal-400">Lehrkräfte</li>
        <li className="hover:text-teal-400">Fächer</li>
        <li className="hover:text-teal-400">Klasse</li>
        <li className="hover:text-teal-400">Einstellungen</li>
      </ui>
      <div className="flex items-center absolute bottom-14 text-2xl font-semibold text-gray-500 hover:cursor-pointer space-x-2 hover:text-red-400">
        <RiLogoutBoxRLine />
        <h3>Logout</h3>
      </div>
    </aside>
  );
};

export default Sidebar;
