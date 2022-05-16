import React,{useState} from 'react'


import "./settingsTab.css";




function SettingsTab() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
      };
    
  return (
   
    <div className="container">
        
      <div className="bloc-tabs">
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

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div>
            <div className="flex justify-around bg-[#8DD4C3]  items-center h-24 rounded-md ">
          
              
             
            <div className=" border text-lg mt-2 rounded-md p-5 text-center">
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, veritatis vitae? Soluta magni doloremque enim dignissimos accusantium iusto adipisci ad!
           </p>
            
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
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, 
           </p>
            
          </div>
             
            </div>
          </div>
     
         
        </div>

        
          

         

         
        </div>

       
      </div>
    
  )
}

export default SettingsTab