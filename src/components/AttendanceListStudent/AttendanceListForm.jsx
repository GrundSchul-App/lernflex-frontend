import React,{useContext} from "react";
import {Context} from '../../context/context'

function AttendanceListForm(props) {
    const {getAnwiesenheitsListe,setGetAnwiesenheitsListe} = useContext(Context)




  return (
    <form >
        <div className="flex border items-center mt-2 rounded-md">
        <div className="m-4 ">
        <label className="mr-5 ">Klasse</label>
        <input
          className="border border-black rounded-md"
          name="firstName"
          type="text"
        
        />
      </div>

      <div className="m-4 ">
        <label className="mr-5">Fach</label>
        <input
          className="border border-black rounded-md"
          name="fach"
          type="text"
        />
      </div>
      <div className="m-4 ">
        <label className="mr-5">Datum</label>
        <input
          className="border border-black rounded-md"
          name="Datum"
          type="text"
        />
      </div>
        </div>
      
    </form>
  );
}
export default AttendanceListForm;
