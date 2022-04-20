import React from "react";

function TeacherForm(props) {
  return (
    <div className="bg-white h-[63%] w-[70%] rounded-xl">
      <form className="border-solid border-4 w-[100%]">
        <h3>Lehrer/in hinzufügen</h3>

        <input
          type="text"
          name="firstName"
          required="required"
          placeholder=" Vorname"
          className="border-solid" 
        />
        <input
          type="text"
          name="lastName"
          required="required"
          placeholder=" Nachname"
        />

        <input type="email" name="email" placeholder=" email" />
        <input
          type="Date"
          name="birthday"
          required="required"
          placeholder="Birthday"
        />

        <button className="addtolist">Add to List</button>
      </form>
    </div>
  );
}
export default TeacherForm;
