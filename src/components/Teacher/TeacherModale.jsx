import React,{ useContext} from 'react'
import TeacherForm from './TeacherForm';
import {Context} from '../../context/context';
import {GrFormClose} from 'react-icons/gr'


 function TeacherModale(props) {
    const {closeModale} =useContext(Context)
    





    return (
        <div  className="absolute inset-0 bg-black bg-opacity-75   flex justify-center items-center ">
            <div className="w-[800px] h-[500px] bg-white  flex justify-center items-center relative rounded-xl">
            
              <button onClick={closeModale} className="absolute top-[10px] right-[10px]"> <GrFormClose/></button>
              
              <TeacherForm/>
            </div>
            
        </div>
    )
}
export default TeacherModale