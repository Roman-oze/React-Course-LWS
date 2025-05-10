import Avatar from "./Avatar";

export default function PersonInfo(){

    const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
  hobbies: ["Reading", "Hiking", "Coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  theme: {
    backgroundColor: "skyblue",
    color: "white",
    fontSize: "20px",
    padding: "1rem",
    borderRadius: "8px",
  },
};
    return (
        <>
         <div style={person.theme}>
                  <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t45.1600-4/392787299_23862196860690316_3884763505948143472_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444_tt6&_nc_cat=1&ccb=1-7&_nc_sid=b81fdb&_nc_ohc=DOk6I4cpXU8Q7kNvwGCIrVs&_nc_oc=AdnUSljvdKhBevf3WlPPNuB4htbgl_HCEgNNIx0unm6B8N0SSHbcauYBEdh1EdHJJ00&_nc_zt=1&_nc_ht=scontent.fdac99-1.fna&_nc_gid=C2KEwBZ2zFMi8eVR4Mg_KA&oh=00_AfKJRZl9GyXPexiP_LyaOT_mN34EGeX5T20GHLRyq9wENw&oe=6823D6CA" alt="" />
                  
                  <h2 className="text-lg font-bold mb-2">{person.name}</h2>
                  <p>Occupation: {person.occupation}</p>
                  <p>Age: {person.age}</p>
                  <p>Hobbies: {person.hobbies.join(", ")}</p>
                  <p>
                    Address:{" "}
                    {`${person.address.street}, ${person.address.city}, ${person.address.state} ${person.address.zip}`}
                  </p>
                </div>
        </>
    );
}