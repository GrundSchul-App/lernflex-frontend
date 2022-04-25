import React from 'react'
import TeacherForm from './TeacherForm';


 function TeacherModale(props) {
    





    return (
        <div  className="absolute inset-0 bg-black bg-opacity-75   flex justify-center items-center ">
            <div className="w-[800px] h-[500px] bg-white  flex justify-center items-center relative rounded-xl">
            
              <button onClick={props.closeFunk} className="absolute top-[10px] right-[10px]">Close</button>
              
              <TeacherForm/>
            </div>
            
        </div>
    )
}
export default TeacherModale