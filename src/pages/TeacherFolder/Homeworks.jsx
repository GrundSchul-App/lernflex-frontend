import React, { useEffect, useContext } from "react";
import HomeworksMain from "../../components/homeworks/HomeworksMain";
import { Context } from "../../context/context";

function Homeworks() {
  const { setMessageBackend } = useContext(Context);
  useEffect(() => {
    setMessageBackend("");
  }, []);

  return (
    <div className="flex flex-row w-full justify-between mr-4">
      
      <HomeworksMain />
    
    </div>
  );
}


export default Homeworks;