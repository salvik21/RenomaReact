import "./App.css";
import Test from"./Ttestclick";
import Nav from "./componets/Organisms/Nav/Nav";
import Carousel from "./componets/Organisms/Carousel/Carousel";
import About from "./componets/Organisms/About/About";
import Gallery from "./componets/Organisms/Gallery/Gallery";
import Footer from "./componets/Organisms/Footer/Footer";

function App() {
  return (
    <>
    {/* <Test> <Car /> </Test> */}
    
      <Nav />
      <Carousel />
      <About />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
