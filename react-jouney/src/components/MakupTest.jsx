export default function Photo() {
  return (
   <>
      <h1 className="font-bold">Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        style={{
          borderRadius : '50%'
        }}
      />
      <ul style={
        {
            listStyle: "none",
            padding: "10px",
            fontWeight:'bold',
            border : '1px solid black',
            borderRadius : '14px',
           

        }
      }>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
