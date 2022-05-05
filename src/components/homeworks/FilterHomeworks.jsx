import React, { useContext, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { Context } from "../../context/context";
import FilterBySubject from "./FilterBySubject";
import FilterByType from "./FilterByType";
import FilterByTeacher from "./FilterByTeacher";

const FilterHomeworks = () => {
  const { option, setOption, setSearchInput, setMessageBackend } =
    useContext(Context);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex grow  p-2 rounded-2xl bg-white  h-[75px] items-center justify-center">
        <BiFilterAlt className="w-6 h-6 mr-4 text-gray-500" />

        <select
          className="form-select 
          block
          px-3
          py-1.5
          mr-2
          text-base
          font-normal
          text-gray-700
          bg-gray-200 bg-clip-padding bg-no-repeat
          border-solid border-gray-200 
          rounded
          transition
          ease-in-out
          m-0
          border-2
          focus:text-gray-700 focus:bg-white focus:border-green-500
          focus:outline-none w-full"
          name=""
          id=""
          onChange={(e) => {
            setOption(e.target.value);
            setShowModal(true);
            setSearchInput("");
            setMessageBackend("");
          }}
          defaultValue={"default"}
        >
          <option value={"default"} disabled>
            Filter nach...
          </option>
          <option value={"teacher"}>Lehrer/in</option>
          <option value={"subject"}>Fach</option>
          <option value={"type"}>Type</option>
        </select>
      </div>
      {option === "teacher" && showModal && (
        <FilterByTeacher setShowModal={setShowModal} />
      )}
      {option === "subject" && showModal && (
        <FilterBySubject setShowModal={setShowModal} />
      )}
      {option === "type" && showModal && (
        <FilterByType setShowModal={setShowModal} />
      )}
    </>
  );
};

export default FilterHomeworks;
