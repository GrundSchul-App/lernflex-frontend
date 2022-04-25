import React,{useState} from 'react'
import SelectClasses from '../Attendance/SelectClasses'
import SelectSubjects from '../Attendance/SelectSubjects'

export function EditTeacherForm(props) {
    const [editTeacher,setEditTeacher]=useState('')
    

    return (
        <div className="flex flex-col justify-center mt-4 border-solid border-2 w-[90%] h-[75%]">
      <form >
        <h1 className="text-3xl m-5"> Änderung der Lehrerdaten</h1>
        <div className="m-4 flex">
          <SelectClasses />
          <SelectSubjects />
        </div>
        <div className="m-4 ">
          <label  className="mr-5">Vorname</label>
          <input 
            className="border border-black rounded-md"
            name='firstName'
            
            type="text" 
          />
        </div>
        <div className="m-4">
          <label className="mr-2">Nachname</label>
          <input 
            className="border border-black rounded-md"
            name='lastName'
            
            type="text"
            
          />
        </div>
        <div className="m-4">
          <label className="mr-11">Email</label>
          <input  
            className="border border-black rounded-md"
            name='email'
         
            type="email"
          />
        </div>
       

        <div className="flex justify-center">
          <button  className="bg-cyan-500 hover:bg-cyan-600  font-bold text-white px-2 py-1 rounded-xl mt-5 ">
            Speichern
          </button>
        </div>
      </form>
    </div>
    )
}
