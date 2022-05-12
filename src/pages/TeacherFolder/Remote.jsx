import React, { useEffect, useContext } from "react";

import RemoteMain from "../../components/remote/RemoteMain";

import { Context } from "../../context/context";

function Remote() {
  const { setMessageBackend } = useContext(Context);
  useEffect(() => {
    setMessageBackend("");
  }, []);

  return (
    <div className="flex flex-row w-full justify-between mr-4 ">
      
      <RemoteMain />
      
    </div>
  );
}


export default Remote;