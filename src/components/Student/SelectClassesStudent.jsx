import React, {useContext,useEffect} from 'react'
import {Context} from '../../context/context';
import { IoIosPeople } from "react-icons/io";

function SelectClassesStudent(props) {
    const {classes,setClassId,setClasses,setClassName, getAllClasses,refDataBase} = useContext(Context)

    const getClassIdWithName = (e) => {
     getAllClasses();
        setClassId(e.target.value);
         console.log(e.target.value);
        setClassName(e.target.options[e.target.selectedIndex].text);
         console.log(e.target.options[e.target.selectedIndex].text);
      };

      
    useEffect(() => {
      // getAllClasses(token, userId)
      getAllClasses().then((res) => {
        if (res.message === "success") {
          setClasses(res.data);
          // console.log(res.data);
        }

        // getAllStudents().then((res) => {
        //           if (res.message === "success") {
        //             setStudents(res.data);
        //             console.log("result", res.data);
        //           }
        //         });
              

      });


    }, [refDataBase]);
    

    return (
        <div className="flex flex-col justify-center     ">
        <form>

<div className="flex   p-2 rounded-xl bg-white h-19  items-center ">
            <IoIosPeople className="w-12 h-10 mr-2 " />
            <span className="mr-2  w-full">Klasse</span>

            <select
              className="form-select 
      block
      
      px-8
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
              onChange={getClassIdWithName}
              defaultValue={"default"}
            >
              {/* <option selected>Klassen...</option> */}
              <option value={"default"} disabled>
                ...
              </option>
              {classes.map((classes, index) => {
                return (
                  <option className="p-2" key={index} value={classes._id}>
                    {classes.className}
                  </option>
                );
              })}
            </select>
          </div>
            
        </form>
        </div>
    )
}
export default  SelectClassesStudent ;
