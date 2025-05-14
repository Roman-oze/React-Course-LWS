import Avatar from "./Avatar";

export default function Nav() {
  return (
    <nav className="bg-gray-900 text-gray-200 top-0 z-50 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
         <Avatar />
          <span className="text-2xl font-bold text-[rgb(229,235,239)] ">
            Grameen Somiti
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-400 font-medium">
          <li className="hover:text-blue-300 transition cursor-pointer ">Home</li>
          <li className="hover:text-blue-300 transition cursor-pointer">About Us</li>
          <li className="hover:text-blue-300 transition cursor-pointer">Programs</li>
          <li className="hover:text-blue-300 transition cursor-pointer">Events</li>
          <li className="hover:text-blue-300 transition cursor-pointer">News</li>
          <li className="hover:text-blue-300 transition cursor-pointer">Contact</li>
        </ul>

        {/* Call to Action */}
        <div className="hidden md:block">
          <button className="px-8 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition">
            Join
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
