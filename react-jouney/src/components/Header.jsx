 export default function Header(){
     return (
         <>
         <header className="bg-blue-50 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Website
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Build fast and modern UI with React and Tailwind CSS.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </header>
         </>
     );
 }