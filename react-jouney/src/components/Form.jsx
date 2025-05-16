import { useState } from "react";

export default function Form(){

    const [firstName , setFirstName] = useState ("");
    const [lastName , setLastName] = useState ("");

   function handleChangeFirstName(e){
    setFirstName(e.target.value);
   }
   
   function handleChangeLastName(e){
    setLastName(e.target.value);
   }


    function HandleRest(){
        setFirstName("");
        setLastName("");
    }



    return (
        <>
        
        <form onSubmit={e=>{e.preventDefault}}>
            <input placeholder="First Name" value={firstName}  onChange={handleChangeFirstName} className="border p-2 rounded mr-2"/>
            <input placeholder="First Name" value={lastName}  onChange={handleChangeLastName}  className="border p-2 rounded mr-2" />
            <button type="submit" className="border border-green-700-600 rounded-full px-4 py-2">Submit</button>

            <h1>{firstName} : {lastName}</h1>

            <button onClick={HandleRest} className="border border-gray-600 rounded-full px-4 py-2 ">Rest </button>

        </form>
        
        </>
        
    );
}

