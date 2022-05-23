import React, { useContext,useEffect } from "react";
import { Context } from "../../context/context";
import { ImBooks } from "react-icons/im";

 function SelectSubject(props) {
  const { subjects, setSubjectId, setSubjectName,getAllSubjects,setSubjects } = useContext(Context);

  const getSubjectIdAndName = (e) => {
    console.log(e.target.value);
    console.log(e.target.options[e.target.selectedIndex].text);
    setSubjectId(e.target.value);
    setSubjectName(e.target.options[e.target.selectedIndex].text);
  };







  useEffect(() => {
    // getAllClasses(token, userId)
  
    getAllSubjects().then((res) => {
      if (res.message === "success") {
        setSubjects(res.data);
        // console.log(res.data);
      }
    }).catch((err) => {
        console.log(err);
    });
  }, []);


  return (
    <div className="flex flex-col justify-center     ">
      <form>
        <div className="flex   p-2 rounded-xl bg-white h-19  items-center ">
          <ImBooks className="w-12 h-10 mr-2 "/>
          <span className="  w-full">Fächer</span>

          <select
            className="form-select 
      block
      
     
      py-2
      mr-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
       border border-solid border-gray-300 
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-green-600
       focus:outline-none"
            /*  aria-label="Default select example" */
            name=""
            id=""
            /*  value="state.classId" */
            onChange={getSubjectIdAndName}
            defaultValue={"default"}
          >
            {/* <option selected>Klassen...</option> */}
            <option value={"default"} disabled>
              ...
            </option>
            {subjects.map((subject, index) => {
              return (
                <option className="p-2" key={index} value={subject._id}>
                  {subject.subject_title}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
}
export default SelectSubject