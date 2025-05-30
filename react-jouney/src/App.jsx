import Cards from "./components/Card";
import Gallery, { CardBox as Box, Profile } from "./components/Gallery";
import Header from "./components/Header";
import PersonInfo from "./components/PersonInfo";
import Photo from "./components/MakupTest";
import Nav from "./components/nav";
import People from "./components/Object";
import Avatar from "./components/Avatar";
import PropsAvatar from "./components/Avatar";
import Roman from "./components/PropsAvatar";
import ProfileFile from "./components/profile";
import PackingList from "./components/Packing";

const style1 = {
  backgroundColor: "yellow",
};
const style2 = {
  backgroundColor: "blue",
};

const color = {
  color: "blue",
};

let style = "";

if (color === "yellow") {
  style = style1;
} else {
  style = style2;
}

// card props children
function CardDetail({ children }) {
  return (
    <div className="card">
      <div className="content">{children}</div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="font-sans">
        {/* Navbar */}
        <Nav />
        {/* Hero / Cover Page */}
        <Header />
        {/* Three Cards Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Cards />
        </section>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        {/* <Box />
        <Profile />
        <Gallery /> */}
        <Photo />
      </div>

      <div className="">
        <CardDetail>
          <h1>Roman oze</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quae
            placeat perferendis necessitatibus corporis laboriosam rem, deserunt
            culpa harum adipisci porro, ratione fugit quidem praesentium facilis
            aliquam inventore minus ipsa?
          </p>
        </CardDetail>
      </div>


<br />
<br />
<br />
 <PackingList/>


      <br />
    </>
  );
}

export default App;
