import React ,{useContext,useEffect} from 'react'
import { GrFormClose } from "react-icons/gr";
import { Context } from "../../../context/context";
import HomeworkTable from '../../Student/selectStudentHomeWorks/HomeWorkTable';

function StudentHomeWorkModal() {
 const { closeHomeworkModale } = useContext(Context);









//  useEffect(() => {

//     getAllHomeworks()
//     .then((res) => {
//       if (res.message === "success") {
       
//         setAllHomeworks(res.data);
//          console.log("data allHomeworks modale studenthomework ", res.data);
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, []);





  return (
    <div className="absolute inset-0 bg-black bg-opacity-75   flex justify-center items-center ">
      <div className="w-[900px] h-[500px] bg-white  flex justify-center items-center relative rounded-xl">
        <button
          onClick={closeHomeworkModale}
          className="absolute top-[10px] right-[10px]"
        >
          {" "}
          <GrFormClose />
        </button>
        <div className="flex">
        

          
        <HomeworkTable/>
        </div>
        
      </div>
    </div>
  )
}
export default StudentHomeWorkModal