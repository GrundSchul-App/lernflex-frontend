import { useState } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { CgCopy } from "react-icons/cg";
import { GiTeacher } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { VscRemoteExplorer } from "react-icons/vsc";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Anwesenheitsliste", src: <FaRegListAlt /> },
    { title: "Remote Unterricht", src: <AiOutlineCalendar /> },
    { title: "Schüler/innen", src: <IoIosPeople />, gap: true },
    { title: "HA/Dateien ", src: <CgCopy /> },
    { title: "Lehrkräfte", src: <GiTeacher /> },
    { title: "Fächer", src: <ImBooks /> },
    { title: "Klassen ", src: <IoIosPeople /> },
    { title: "Events", src: <VscRemoteExplorer /> },
  ];

  return (
    <aside className="bg-white w-[20%] rounded-xl mt-4 p-12 relative min-h-[892px]">
      <ul className="list-none text-lg font-semibold text-gray-500 hover:cursor-pointer space-y-10">
        <li className="hover:text-teal-400">Anwesenheitsliste</li>
        <li className="hover:text-teal-400">Remote Unterricht</li>
        <li className="hover:text-teal-400">Schüler/innen</li>
        <li className="hover:text-teal-400">HA/Dateien</li>
        <li className="hover:text-teal-400">Lehrkräfte</li>
        <li className="hover:text-teal-400">Fächer</li>
        <li className="hover:text-teal-400">Klassen</li>
        <li className="hover:text-teal-400">Events</li>
        <li className="hover:text-teal-400">Einstellungen</li>
      </ul>
      <div className="flex items-center absolute bottom-14 text-xl font-semibold text-gray-500 hover:cursor-pointer space-x-2 hover:text-red-400">
        <RiLogoutBoxRLine />
        <h3>Logout</h3>
      </div>
    </aside>
  );
};

export default Sidebar;
