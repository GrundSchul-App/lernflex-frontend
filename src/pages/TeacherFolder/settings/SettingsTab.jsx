import React, { useState,useEffect } from "react";
// import {Context} from '../../../context/context'

import "./settingsTab.css";

function SettingsTab() {
  // const {email,getUserByEmail}=useContext(Context);
  const [toggleState, setToggleState] = useState(1);
  const [userFirstname, setUserFirstName] = useState(null);
  const [userLastname, setUserLastname] = useState(null);
  const [profile, setProfile] = useState(null);
  const [userEmail, setEmail] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
  };


  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userProfile = userData.user.avatar;
    setProfile(userProfile);
    setUserFirstName(userData.user.firstName );
    setUserLastname( userData.user.lastName);
    setEmail( userData.user.email)
  }, [])

// useEffect(() => {
//   getUserByEmail(email).then((res) =>{
//     console.log("email", email);
//     if (res.message === "success"){
//      setUser(res.data)
//      console.log("user", res.data);
//     }
//   })
 
// },[]
// )






  return (
    <div className="container max-h-[500px]">
      <div className="bloc-tabs ">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Einstellungen
        </button>

        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Password ändern
        </button>
      </div>

      <div className="content-tabs ">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="flex mt-8">
            <div className="flex justify-around   h-24 rounded-md ">
              <div className=" border text-lg mt-2 rounded-md p-5 text-center  ">
              <div className="m-1 items-center relative rounded-full ">
                <img src={`${profile} || "https://picsum.photos/100" `} alt="avatar" className="rounded-full w-10" />
              </div>
              <div className="mt-6">
                 <label className="font-bold">Name</label>
                 
                <span className="mx-5"> {userLastname}</span>
                 </div >
                 <div className="mt-6">
                 <label className="font-bold">Vorname</label>
                <span className="mx-5">{userFirstname}</span>

                 </div>
                 <div className="mt-6">
                 <label className="font-bold">Email</label>
                <span className="mx-5">{userEmail}</span>

                 </div>
                 
                
                
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div>
            <div className="flex justify-around bg-[#8DD4C3]  items-center h-24 rounded-md ">
              <div className=" border text-lg mt-2 rounded-md p-5 text-center">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsTab;
