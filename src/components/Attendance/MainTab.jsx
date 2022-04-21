import React from 'react';
import { IoIosPeople } from "react-icons/io";

const MainTab = ({classes}) => {
  return (
    <div className="flex mt-4 p-[1%] rounded-xl bg-white max-w-[20%]  items-center justify-center">
      <h3 className="mr-[5px]">{classes}</h3>
      <IoIosPeople className="w-6 h-6"  />
      
      <select className="ml-[1%]" name="" id="">
        <option value="">C01</option>
        <option value="">D02</option>
        <option value="">D02</option>
      </select>
    </div>
  );
}

export default MainTab