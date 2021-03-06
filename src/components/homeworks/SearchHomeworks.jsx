import React, { useContext } from "react";
import { Context } from "../../context/context";
import { IoIosSearch } from "react-icons/io";

function SearchHomeworks() {
  const {
    allHomeworks,
    setHomeworks,
    searchInput,
    setSearchInput,
    setMessageBackend,
  } = useContext(Context);

  function searchAndGetHomeworks() {
    const foundArr = allHomeworks.filter((homework) => {
      return (
        homework.title.toLowerCase().includes(searchInput.toLowerCase())
        || homework.fileName.toLowerCase().includes(searchInput.toLowerCase())
        || homework.type.toLowerCase().includes(searchInput.toLowerCase())
        || homework.subject.subject_code.toLowerCase().includes(searchInput.toLowerCase())
        || homework.teacher.lastName.toLowerCase().includes(searchInput.toLowerCase())
        /* JSON.stringify(homework)
          .toLowerCase()
          .search(searchInput.toLowerCase()) !== -1 */
      );
    });

    setHomeworks(foundArr);
  }

  return (
    <div className="flex grow  p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
      <div className=" ">
        <div className="input-group flex items-stretch w-full rounded">
          <span
            className="input-group-text flex items-center px-3 py-1.5 text-base
               font-normal text-gray-700 text-center whitespace-nowrap rounded"
          >
            <IoIosSearch
              className="w-6 h-6 mr-2 transition-all hover:text-green-600 hover:cursor-pointer"
              onClick={searchAndGetHomeworks}
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
            placeholder="Suchen..."
            onChange={(e) => {
              setSearchInput(e.target.value);
              setMessageBackend("");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchHomeworks;
