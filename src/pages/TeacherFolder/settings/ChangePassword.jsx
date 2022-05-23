import React from 'react'

const ChangePassword = () => {
  return (
    <div className="border-2 border-gray-400 w-[45%] my-4 mx-6 rounded-lg">
      <h1 className="text-center mt-6 text-2xl font-bold">Passwort ändern</h1>
      <form className="flex mt-36 mx-6 flex-col ">
        <div className="mb-4 flex justify-between">
          <label className="font-semibold mr-4" htmlFor="">
            Aktuelles Passwort
          </label>
          <input
            className="border-2 border-gray-400 rounded-lg w-64"
            type="text"
          />
        </div>
        <div className="mb-4 flex justify-between">
          <label className="font-semibold mr-4" htmlFor="">
            Neues Passwort
          </label>
          <input
            className="border-2 border-gray-400 rounded-lg w-64"
            type="text"
          />
        </div>
        <div className="flex justify-between">
          <label className="font-semibold mr-4" htmlFor="">
            Passwort bestätigen
          </label>
          <input
            className="border-2 border-gray-400 rounded-lg w-64"
            type="text"
          />
        </div>

        <button className="mt-8 bg-transparent ring-2 ring-gray-400 p-2 rounded-lg font-semibold hover:bg-[#73d3aa]">
          Bestätigen
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;