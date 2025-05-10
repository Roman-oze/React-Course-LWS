// export default function Roman({person , size = 0}){
//     return (

//         <div>
//             <div>
//                     <h1>{person.name}</h1>
//                     <h1>{person.imageId}</h1>
//                     <h1>{size}</h1>
//             </div>
//         </div>
        
//     );
// }



export default function Roman({person , size}){
    return (
        <div>
            <div>
                <h1 className="font-bold text-5xl" >{person.name}</h1>
                <h1>{person.imageId}</h1>
                <h1>{size}</h1>
            </div>
        </div>
    );
}