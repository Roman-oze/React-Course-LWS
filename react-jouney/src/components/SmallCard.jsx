
export default function SmallCard(){

      const people = [
    {
      id: 1,
      name: "Rumu",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Eeh9MWtklhYqR4ewRmTcxKs4V7AzUU00gIRfNZzKqzeUcDev8nbcZoJLA1z476STyh8&usqp=CAU",
      alt: "Roman profile image",
      profession: "Junior Software Engineer",
    },
    {
      id: 2,
      name: "Rumu",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWywJbFyrpNExJsC2uSRWmbZUDlTdTMQIQQ&s",
      alt: "Rumu profile image",
      profession: "Software Developer",
    },
    {
      id: 3,
      name: "Rumu",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/055/563/865/small/golden-coin-with-dollar-symbol-representing-investment-and-wealth-vector.jpg",
      alt: "Rumu profile image",
      profession: "Student",
    },
  ];


   const person = people.filter((person) => person.name === "Rumu");

  const Items =
    person.length > 0 ? (
      person.map((person) => (
        <li
          key={person.id}
          className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md shadow-sm"
        >
          <img
            src={person.image}
            alt={person.alt}
            className="w-15 h-15 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{person.name}</p>
            <p className="text-sm text-gray-500">
              {person.profession || "No profession listed"}
            </p>
          </div>
        </li>
      ))
    ) : (
      <li className="text-gray-500 italic">No person found with that name.</li>
    );

    
    return (
        <ul className="space-y-4">{Items}</ul>
    );
}