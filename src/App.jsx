import { useState } from "react";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Jumbotron from "./components/Jumbotron";
import Carrrousel from "./components/Carousel";

function App() {
  return (
    <div className="vw-100 vh-100">
      <Navbar />
      <Location />
      <Jumbotron />
      <Carrrousel />
    </div>
  );
}

export default App;
