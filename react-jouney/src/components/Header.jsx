export default function Header() {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat py-32 px-6 text-center text-white mt-5"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-university-admissions-association-recruits-new-image_169447.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Welcome to the Somiti
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-100">
          Empowering communities through collaboration, knowledge sharing, and innovation.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base font-semibold rounded-full shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
