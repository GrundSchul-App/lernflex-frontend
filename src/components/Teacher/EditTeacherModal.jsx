import React,{useContext} from 'react';
import {Context} from '../../context/context'


import { EditTeacherForm } from './EditTeacherForm'

 function EditTeacherModal(props) {
     const {closeEditModale}=useContext(Context)
    
    

    return (
        <div  className="absolute inset-0 bg-black bg-opacity-75   flex justify-center items-center ">
            <div className="w-[800px] h-[500px] bg-white  flex justify-center items-center relative rounded-xl">
            
              <button onClick={closeEditModale} className="absolute top-[10px] right-[10px]">Close</button>
              
              <EditTeacherForm/>
            </div>
            
        </div>
    )
}
export default EditTeacherModal;