import service1  from  "../assets/image/coins-and-banknotes.webp"
import service2  from  "../assets/image/card03.png"
import service3  from  "../assets/image/card01.png"


export default function Card() {
  const cards = [
    {
      id: 1,
      name: "google",
      description: "This image card no:1",
      image:
        service1,
      alt: "product-image",
    },
    {
      id: 2,
      name: "facebook",
      description: "This image card no:2",
      image:
        service2,
      alt: "product-image",
    },
    {
      id: 3,
      name: "google",
      description: "This image card no:3",
      image:
       service3,
      alt: "product-image",
      profession: "Web developer",
    },
  ];

 

  return (
    <>
      {/* // Render this inside your component */}
      
      {cards.map((card) => (
        <div key={card.id}>
          <div className="rounded-2xl shadow-md border border-gray-200 p-5 bg-white hover:shadow-lg transition-shadow duration-300">
            {/* Badge */}
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {card.name}
            </span>

            {/* Image */}
            <img src={card.image} alt={card.name} className=" rounded-lg" />

            {/* Description */}
            {/* <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {card.description}
            </p> */}
<br />
            {/* Button */}
            <button className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full shadow hover:from-blue-700 hover:to-blue-800 transition-transform transform hover:scale-105">
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
