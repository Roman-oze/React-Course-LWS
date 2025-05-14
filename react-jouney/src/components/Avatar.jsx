import logo  from  "../assets/image/logo1.png"
export default function Avatar(){

  const url = logo;
  const description = "Association Logo";

  // style = {{
  //   borderRadius: "50%",
  //   width: "200px",
  //   height: "200px",

  // }}

    return (

      <img src={url} alt={description}  className="h-10 w-10 rounded-full object-cover"/>
        

    );
}


