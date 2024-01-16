import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import ActiveSlider from "./components/ActiveSlider";
import ButtonWithAnimation from "./components/ButtonWithAnimation";
import { toast, ToastContainer } from "react-toastify";
import Image from "./assets/vecteezy_abstract-blue-gradient-background_5433382_cleanup_flipped.jpg";

const App = () => {
  return (
    <div
      className="bg-no-repeat bg-cover overflow-hidden"
      // style={{ backgroundColor: "black" }}
    >
      <div
        className="bg-tester bg-no-repeat bg-cover bg-center overflow-hidden"
        // Add your background image style or class here
      >
        <Header />
        <Banner />
      </div>
      <ActiveSlider />
      <Nav />
      <About />
      <Services />
      <Work />
      <Reviews />
      {/* Add ToastContainer here */}
      <ToastContainer />
      <Contact />
      {/* <ActiveSlider /> */}
      <ButtonWithAnimation />
    </div>
  );
};

export default App;

{
  /* <div
  className="bg-site bg-no-repeat bg-cover overflow-hidden"
  style={{ background: "white", color: "black" }}
></div>; */
}
