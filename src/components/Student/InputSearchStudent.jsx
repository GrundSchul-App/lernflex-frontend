import React, {useContext} from 'react'
import { IoIosSearch } from "react-icons/io";
import {Context} from '../../context/context'

 function InputSearchStudent(props) {
    const {setMessageBackend,setSearchInput,searchInput}=useContext(Context);

    return (
        <div className=" w-[30%] p-[1%] rounded-xl bg-white max-w-[30%] ">
           <div className="input-group flex items-stretch w-full rounded">
          <span
            className="input-group-text flex items-center px-3 py-1.5 text-base
               font-normal text-gray-700 text-center whitespace-nowrap rounded"
          >
            <IoIosSearch
              className="w-6 h-6 mr-2 transition-all hover:text-green-600 hover:cursor-pointer"
              
            />
          </span>
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full
               px-3 py-1.5 text-base font-normal text-gray-700 bg-white 
               bg-clip-padding border border-solid border-gray-300 rounded 
               transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                focus:border-green-600 focus:outline-none"
            value={searchInput}
            placeholder="Search.."
            onChange={(e) => {
              setSearchInput(e.target.value);
              setMessageBackend("");
            }}
          />
        </div> 
        </div>
    )
}
export default InputSearchStudent