export default function Nav(){
    return (
        <>
        <nav className="bg-white shadow-md" >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
        </>
    );
}