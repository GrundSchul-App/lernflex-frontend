import React, { useState, useContext } from "react";
import studentImg from "../assets/images/student-laptop.jpg";
import logo from "../assets/images/Logo.svg";
import axios from "axios";
import { Context } from "../context/context.js";
import { useNavigate } from "react-router-dom"; 


const Landing = () => {
  const { setAuth,BACKEND_URL } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setLastName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  // const [ role, setRole ] = useState("admin");
  const [userLogIn, setUserLogIn] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
    const response = await axios.post(
      `${BACKEND_URL}/users/register`,
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
      }),
      {
        headers: { "Content-Type": "application/json" },
        // withCredentials: true,
      }
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    const resToken = response?.data?.token;
    const resAdmin = response?.data?.admin;
    localStorage.setItem("user", JSON.stringify(response?.data.data));

    setAuth({ email, password, resAdmin, resToken });
    console.log(response?.data);
    navigate("/attendance");
    } catch (error) {
      throw new Error("Error: " + error.message);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try{
      setLoading(true);
      if (!email || !password) return;
      axios
        .post(`${BACKEND_URL}/landing`, {
          email,
          password,
        })
        .then(
          function (response) {
            const user = response?.data.data;
            console.log('this is my user', user);
            localStorage.setItem("user", JSON.stringify(user));
            
            const resToken = response?.data.data.token;
            const resAdmin = response?.data?.admin;
            setAuth({ email, password, resAdmin, resToken });
            window.location.href = "/attendance";
          },
          { withCredentials: true }
        )
    } catch(error) {
      console.log(error);
    };
    // setLoading(true);
    // if (!email || !password) return;
    // axios
    //   .post(`${BACKEND_URL}/landing`, {
    //     email,
    //     password,
    //   })
    //   .then(
    //     function (response) {
    //       const user = response?.data.data;
    //       console.log('this is my user', user);
    //       localStorage.setItem("user", JSON.stringify(user));
          
    //       const resToken = response?.data.data.token;
    //       const resAdmin = response?.data?.admin;
    //       setAuth({ email, password, resAdmin, resToken });
    //       window.location.href = "/attendance";
    //     },
    //     { withCredentials: true }
    //   )
      
  }

  const backgroundImageStyle = {
    backgroundImage: `url("${studentImg}")`,
    backgroundSize: "cover",
  };
  return (
    <div
      style={backgroundImageStyle}
      className="relative h-screen w-full bg-center bg-no-repeat"
    >
      <div className="absolute top-8 right-8 w-[30vw] min-h-[380px] h-[30vh] bg-white rounded-xl p-6 min-w-[200px] opacity-100 hover:opacity-100">
        <form >
          <div>
            <img className="h-12 w-40 -ml-6 " src={logo} alt="logo" />
          </div>
          {!userLogIn ? (
            <div className="mx-auto overflow-hidden">
              <h3 className="font-semibold text-center">
                Einloggen oder{" "}
                <span
                  onClick={() =>
                    setUserLogIn((prevState) => {
                      return (prevState = !prevState);
                    })
                  }
                  className="underline hover:cursor-pointer"
                >
                  Konto erstellen
                </span>
              </h3>
              <div className="mt-4 ">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  placeholder="Email..."
                  className="bg-gray-300 text-gray-800 py-2 pl-4 rounded-lg mb-6 focus:ring-offset-2 focus:ring-2 w-full"
                />
              </div>
              <div className="">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="Passwort..."
                  className="bg-gray-300 text-gray-800 py-2 pl-4 rounded-lg focus:ring-offset-2 focus:ring-2 w-full"
                />
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="border-2 p-2 rounded-lg  mt-6 w-full font-bold  bg-gray-300 hover:bg-gray-400"
              >
                Einloggen
              </button>
            </div>
          ) : (
            <div className="mx-auto overflow-hidden">
              <h3 className="font-semibold text-center">
                Registerieren oder{" "}
                <span
                  onClick={() =>
                    setUserLogIn((prevState) => {
                      return (prevState = !prevState);
                    })
                  }
                  className="underline hover:cursor-pointer"
                >
                  Einloggen
                </span>
              </h3>
              <div className="mt-3 ">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  value={firstName}
                  placeholder="Vorname..."
                  className="bg-gray-300 text-gray-800 py-2 pl-4 rounded-lg mb-2 focus:ring-offset-2 focus:ring-2 w-full"
                />
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  value={lastName}
                  placeholder="Nachname..."
                  className="bg-gray-300 text-gray-800 py-2 pl-4 rounded-lg mb-2 focus:ring-offset-2 focus:ring-2 w-full"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  value={email}
                  placeholder="Email..."
                  className="bg-gray-300 text-gray-800 py-2 pl-4 rounded-lg mb-2 focus:ring-offset-2 focus:ring-2 w-full"
                />
              </div>
              <div className="">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  placeholder="Passwort..."
                  className="bg-gray-300 text-gray-800 py-2 pl-4 rounded-lg focus:ring-offset-2 focus:ring-2 w-full"
                />
              </div>
              <button
                onClick={handleRegister}
                type="submit"
                className="border-2 p-2 rounded-lg  mt-4 w-full font-bold  bg-gray-300 hover:bg-gray-400"
              >
                Registerieren
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Landing;
