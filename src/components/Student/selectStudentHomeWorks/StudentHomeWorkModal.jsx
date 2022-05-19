import React, { useContext } from "react";
import { GrFormClose } from "react-icons/gr";
import { Context } from "../../../context/context";
import HomeworkTable from "../../Student/selectStudentHomeWorks/HomeWorkTable";

function StudentHomeWorkModal() {
  const { closeHomeworkModale } = useContext(Context);

  return (
    <div className="absolute inset-0 bg-black bg-opacity-75   flex justify-center items-center ">
      <div className="min-w-[900px] min-h-[500px]  flex justify-center items-center relative rounded-xl">
        <button
          onClick={closeHomeworkModale}
          className="absolute top-[25px] right-[30px]"
        >
          {" "}
          <GrFormClose />
        </button>
        <div className="flex">
          <HomeworkTable />
        </div>
      </div>
    </div>
  );
}
export default StudentHomeWorkModal;
