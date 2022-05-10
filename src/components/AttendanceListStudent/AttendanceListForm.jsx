import React from "react";


function AttendanceListForm(props) {
   




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
