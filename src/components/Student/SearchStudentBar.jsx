import React ,{useContext,useState,useEffect} from "react";
import { BiFilterAlt } from "react-icons/bi";
import {Context} from '../../context/context'

function SearchStudentBar(props) {
  // const [selectValue, setSelectValue]=useState([])
  const {setSelectValue}=useContext(Context)

  // const getClassIdWithName = (e) => {
  //   getAllClasses();
  //      setClassId(e.target.value);
  //       console.log(e.target.value);
  //      setClassName(e.target.options[e.target.selectedIndex].text);
  //       console.log(e.target.options[e.target.selectedIndex].text);
  //    };
const getFilterStudents=(e)=>{
console.log(e.target.value);
setSelectValue(e.target.value);

}
// useEffect(()=>{
 
//     if(selectValue === 'All'){
//       getAllStudents().then((res) => {
//         if (res.message === "success") {
//           setStudents(res.data);
//           console.log("result", res.data);
//         }
//       });
//     }
 
// },[])








  return (
    <div className="flex  p-2 rounded-xl bg-white max-w-[30%]   justify-center">
    
      <BiFilterAlt className="w-6 h-6 mr-3" />
      <h3 className="mr-[5px]">Filter nach</h3>

      <select
        className="form-select 
      block
      
      px-3
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
        name=""
        id=""
        defaultValue={"default"}
        onChange={getFilterStudents}
      >
        <option value={"default"} disabled>
          ...
        </option>
        <option value="All">All</option>
        <option value="Name">Name</option>
        <option value="Klasse">Klasse</option>
       
      </select>

      
      </div>
  
  );
}
export default SearchStudentBar;
