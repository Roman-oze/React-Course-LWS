// import { useEffect, useState } from "react";

export default function Homepage() {
  // return (
  //     <>
  //     <div>
  //         <input type="text"  className="border border-gray-500"/>
  //         <button className="border border-gray-500 px-3 ">Add Task</button>
  //     </div>
  //     </>
  // );
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup on unmount
//   }, []);


const dates = new Date();
  dates.toISOString();

  return <span className=" text-red">Live Time: {dates.toLocaleDateString()}</span>;



  
}
