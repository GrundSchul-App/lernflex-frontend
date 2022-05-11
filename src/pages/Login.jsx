import React, { useState, useContext } from "react";
import studentImg from "../assets/images/student-laptop.jpg";
import logo from "../assets/images/Logo.svg";
import {Context} from "../context/context";


const Login = () => {
  const { BACKEND_URL } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const user = { email, password };

    try {
      const url = `${BACKEND_URL}/login`;

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      setPassword("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };


  return (
      <div className="absolute top-8 right-8 w-[30vw] min-h-[320px] h-[30vh] bg-white rounded-xl p-6 min-w-[200px] opacity-100 hover:opacity-100">
        <form className="">
          <div>
            <img className="h-12 w-40 -ml-6 " src={logo} alt="logo" />
          </div>
          <div className="mx-auto overflow-hidden">
            <h3 className="font-semibold">
              Einloggen oder{" "}
              <span className="underline hover:cursor-pointer">
                Konto erstellen
              </span>
            </h3>
            <div className="mt-4 ">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
                placeholder="email..."
                className="bg-gray-300 text-gray-800 py-2 pl-4 rounded-lg mb-6 focus:ring-offset-2 focus:ring-2 w-full"
              />
            </div>
            <div className="">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                value={password}
                placeholder="passwort..."
                className="bg-gray-300 text-gray-800 py-2 pl-4 rounded-lg focus:ring-offset-2 focus:ring-2 w-full"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="border-2 p-2 rounded-lg  mt-6 w-full font-bold  bg-gray-300 hover:bg-gray-400"
            >
              Einloggen
            </button>
          </div>
        </form>
      </div>

  );
};

export default Login;
