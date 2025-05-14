// export default function Profile() {
//     return (
//       <img
//         src="https://i.imgur.com/MK3eW3As.jpg"
//         alt="Katherine Johnson"
//       />
//     );
//   }


export default function ProfileFile({children}) {
    return (

        <div>
            
            <h1> Im, from children {children}</h1>
            <p>Im your parents</p>
        </div>
        
    );
}