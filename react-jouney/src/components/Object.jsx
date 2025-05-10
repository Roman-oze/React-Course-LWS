import Avatar from "./Avatar";

export default function People() {
  const Person = {
    name: "Roman oze",
    age: 27,
    occupation: "Web Developer",
    hobbies: ["Traveling", "Cricket", "Fashion"],
    address: {
      Country: "Bangladesh",
      division: "Brahmanbaria",
      Zilla: "Brahmanbaria",
      Upazila: "Akhaura",
      PostCode: "3464",
      PostOffice: "Monianda",
      Village: "Joypur",
      Phone: "01759676488",
    },
    theme: {
      backgroundColor: "skyblue",
      color: "Black",
      fontSize: "18px",
      padding: "10px",
      borderRadius: "6px",
    },
  };

  return (
    <>
      <div style={Person.theme}>
        {/* this avatar image come from another page */}
        <Avatar />

        <h1>Name : {Person.name}</h1>
        <h2>Age : {Person.age}</h2>
        <h3>Occupation : {Person.occupation}</h3>
        <h4>Hobbies : {Person.hobbies.join(" , ")}</h4>
        <p>
          {" "}
          Address :{" "}
          {`${Person.address.Country}',${Person.address.division} , ${Person.address.Zilla}, ${Person.address.Upazila},${Person.address.PostCode},${Person.address.Village}`}{" "}
        </p>
      </div>
    </>
  );
}
