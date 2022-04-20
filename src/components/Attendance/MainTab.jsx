import React from 'react';
import { IoIosPeople } from "react-icons/io";

const MainTab = ({classes}) => {
  return (
    <div className="flex mt-4 py-[25px] px-[45px] rounded-2xl bg-white max-w-[30%] h-[75px] items-center justify-center">
      <h3 className="mr-[50px]">{classes}</h3>
      <IoIosPeople className="w-9 h-9"  />
      
      <select className="" name="" id="">
        <option value="">C01</option>
        <option value="">D02</option>
        <option value="">D02</option>
      </select>
    </div>
  );
}

export default MainTab