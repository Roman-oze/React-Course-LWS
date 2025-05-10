
export function Profile(){
  return (
        
    <div>
      <p className="text-gray-600 mt-2">
        This Export From Profile
      </p>
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    </div>
  );
}

export function CardBox (){
  return (
     <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Card"
        className="rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
      <p className="text-gray-600 mt-2">
        This is a description for the card. It gives a short summary or content snippet.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  )
}

  export default function Gallery() {
    return (
      <section>
        <h1>This Export come from gellary function </h1>
      </section>
    );
  }



