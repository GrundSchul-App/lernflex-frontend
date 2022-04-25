import React,{ useContext,useEffect} from 'react'
import SelectClasses from '../Attendance/SelectClasses'
import SelectSubjects from '../Attendance/SelectSubjects'
import {Context} from '../../context/context';
import {FcSearch} from "react-icons/fc"




 function TeacherMain(props) {
    const { getAllClasses,
        getAllSubjects,
        setClasses,setSubjects} = useContext(Context);
    useEffect(() => {
        // getAllClasses(token, userId)
        getAllClasses().then((res) => {
          if (res.message === "success") {
            setClasses(res.data);
            console.log(res.data);
          }
        });
        getAllSubjects().then((res) => {
          if (res.message === "success") {
            setSubjects(res.data);
            console.log('result2', res.data);
          }
        });
      }, []);

    return (
        <div className="flex-col w-full mr-0 sm:w-[100%] sm:mr-4 mt-4">
            <div className="flex justify-between ml-4  gap-4 flex-wrap">
                <SelectClasses/>
                <SelectSubjects/>

                <button className="flex grow  
        rounded-2xl bg-green-200 h-[75px] 
        items-center justify-center transition-all
         hover:bg-green-500 text-black-800  text-l "><FcSearch className="m-2"/>Suchen</button>

            </div>
            
        </div>
    )
}
export default TeacherMain
