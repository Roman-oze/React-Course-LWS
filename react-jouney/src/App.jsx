
// import Nav from "./components/nav";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

import ContactForm from "./components/Button";
import ToolBar from "./components/Button";
import Toolbar from "./components/Button";
import Form from "./components/Form";
import CardSection from "./components/SliderSection";
import Hook from "./components/SliderSection";



export default function App() {
  return (
    <>
      {/* <Toolbar
        onPlayMovie={() => console.log("Playing!")}
        onUploadImage={() => console.log("Uploading!")}
        onDownloadImage={() => console.log("Downloading!")}
      /> */}
      <br />
      <hr />
      <br />
      <Form/>
      <hr />
      <Hook/>
      <hr />
      <CardSection/>

    </>
  );
}

