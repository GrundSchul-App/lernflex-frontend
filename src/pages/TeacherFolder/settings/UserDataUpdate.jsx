import React, { useContext, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Context } from "../../../context/context";
import ProfileForm from "../settings/ProfileForm";

const UserDataUpdate = () => {
  const [toggleEditModal, setToggleEditModal] = useState(false);

  return (
    <div className="border-2 border-gray-400 w-[45%] my-4 mx-6 rounded-lg relative">
      <h1 className="text-center mt-6 text-2xl font-bold">Profildaten</h1>
      <div className="flex items-center m-8">
        <img
          className="rounded-full"
          width="100"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160"
          alt=""
        />
        <div className="ml-6 grow leading-8">
          <h2 className="font-semibold text-xl">Name</h2>
          <p className="text-gray-500">Lehrer</p>
        </div>
        <AiFillEdit
          onClick={() => setToggleEditModal(!toggleEditModal)}
          className="w-8 h-8 text-gray-500 hover:text-gray-900 hover:cursor-pointer"
        />
      </div>
      <div className="m-8 leading-8">
        <p>Geschlecht: Männlich</p>
        <p>Geburtsdatum: 18.02.2010</p>
        <p>Email: max-musterman@gmail.com</p>
        <p>Telefonnummer: 0153 632 634</p>
        <p>Fächer: Deutsch, Englisch</p>
        <p>Adresse: max-musterman-str. 15, 22155 Hamburg</p>
      </div>
      {toggleEditModal && <ProfileForm />}
    </div>
  );
};

export default UserDataUpdate;
