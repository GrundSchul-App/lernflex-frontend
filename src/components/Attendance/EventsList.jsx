import React ,{useContext,useEffect} from 'react';
import {Context} from '../../context/context'

const EventsList = () => {
  const {selectDate,getAllEventByDate,setEventList,eventList}=useContext(Context);

  const date= selectDate ? new Date(selectDate).toLocaleDateString() : "";

 
    const dateSuche = date.split("/").reverse().join("-");
    console.log(dateSuche);

    // useEffect(() => {
    //   getAllEventByDate(dateSuche).then((res) => {
    //     if(res.message === "success"){
    //   setEventList(res.data);
    //   console.log("eventsList", res.data);
    //     }
    //   })

    // },[])
    

   



  return (
    <div className="bg-white mt-4 rounded-xl h-[480px] w-full p-[25px] font-medium  text-gray-600">
    
    <form >
  <fieldset className="border border-black-500   rounded-md w-[10%]  ">
    <legend  >Events Info</legend>
    {eventList.length !==0 && 
    eventList.map((event,index)=>{
      return (
        <div key={index}>
    <div className=" w-[250px]  mt-5">
    <label className="m-1">Eventsdatum:</label>
    <input className="w-[40%] bg-slate-200 text-red-700 bold " defaultValue={date} type="text "/>
    </div>
    <div className=" w-[250px] mt-5">
    <label className="m-1">Titel:</label>
    <input className="w-[40%] bg-slate-200 ml-10" defaultValue={event.title}  type="text"/>
    </div>
    <div className=" w-[250px] mt-5">
    <label className="m-1"> beschreibung:</label>
    <textarea className="w-[80%] bg-slate-200 " type="text" defaultValue={event.description}>
   
    </textarea>
    </div>
    </div>
      )
    })}
    

   
  </fieldset>
</form>
    
    </div>
  )
}

export default EventsList