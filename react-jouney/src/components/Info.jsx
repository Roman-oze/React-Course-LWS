import Avatar from "./Test";

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
                  <Avatar/>
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