
import { useState } from "react";


// export default function Button() {
//   function handleClick() {
//     console.log("Button clicked");
//   }
//   return (
//     <>
//       <button
//         class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onSmash={handleClick}
//       >
//         Button
//       </button>
//     </>
//   );
// }

// function Button({ onSmash, children }) {
//   return (
//     <button onSmash={onSmash} className="bg-amber-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
//       {children}
//     </button>
//   );
// }

// export default function Toolbar({ onPlayMovie, onUploadImage , onDownloadImage}) {

//   return (
//     <div>
//       <Button onSmash={onPlayMovie}>Play Movie</Button>
//       <Button onSmash={onUploadImage}>Upload Image</Button>
//       <Button onSmash={onDownloadImage}>Download Image</Button>
//     </div>

//   );
// }

// EVent Propagation
function Button({ onClick, children }) {
  return (
    <>

    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }} className="border border-gray-300 px-4 py-2 text-gray-500 hover:bg-amber-300 rounded mt-3">
      {children}
    </button>
    </>
  );
}

export default function Toolbar() {
  return (
    <>
       <Hook/>
   <hr />
    <div className="Toolbar" onClick={() => {
      console.log('You clicked on the toolbar!');
    }}>
      <Button onClick={() => console.log('Playing!')}>
        Play Movie
      </Button>
      <Button onClick={() => console.log('Uploading!')}>
        Upload Image
      </Button>
    </div>
    </>
  );
}







// export default function SignUp() {
//   const handle = () => {
//     console.log('Submitted');
//   };

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         handle();
//       }}
//     >
//       <input type="text" className="border px-2 py-1 rounded" />
//       <button className="border border-gray-300 px-4 py-2 text-gray-500 hover:bg-amber-300 rounded mt-3 ml-2">
//         Submit
//       </button>
//     </form>
//   );
// }





//  function Hook(){

//     const [count , setCount] = useState(1);

//     // function IncrementNumber(){
//     //     setCount(count+1);
//     // }

//     return (

//         <>
//         <h1>
//             Total Counter No :{count}
//         </h1>
//         <button onClick={()=>{
//             setCount(count+1);
//             setCount(count+1);
//             setCount(count+1);
//         }} className="border border-yellow-200 px-4 ">click Me</button>
        
//         </>
//     );
// }



