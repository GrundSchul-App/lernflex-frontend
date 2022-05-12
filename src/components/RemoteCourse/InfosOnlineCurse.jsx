import React,{useContext,useEffect} from "react";
import {Context} from '../../context/context'

function InfosOnlineCurse(props) {
  const {getHomeworksByType,onlineHomework, setOnlineHomework, setOption
  }=useContext(Context)

useEffect(() => {
const type='online'
  getHomeworksByType(type)
      .then((res) => {
        if (res.message === "success") {
         
          setOnlineHomework(res.data);
           console.log("data allHomeworks modale studenthomework ", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
      setOption("");
     
},[])




  return (
    <div className="bg-white mt-4 rounded-xl min-h-[420px] w-full p-[25px]">
      <h2 className="bold text-slate-500">Alles über unsere Onlinekurse </h2>

      {onlineHomework.length !==0 && onlineHomework.map((homework,index)=>{

 return (  <div className="w-18rem border p-5 mt-3 max-w-sm ">
 <img src={homework.link} className="w-[20%] h-[20%] p-2" alt=''/>
 <div className="card-body">
   <h6 className="p-2 text-center text-gray-800">{homework.fileName}</h6>
   <p className="text-left inline text-sm text-gray-700">{homework.description}</p>
   <button className="bg-blue-300 rounded-md p-3 m-3 bold text-white hover:text-red-600 hover:bg-blue-800">Sehe mehr Infos</button>
   
 </div>
</div>)

      })}
    
    </div>
  );
}
export default InfosOnlineCurse;
