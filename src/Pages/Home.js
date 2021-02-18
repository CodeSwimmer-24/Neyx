import React from "react";
import Header from "./Header";
import Poster from "./Poster";
import Midbar from "./Midbar";
import Team from "./Team";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <Poster />
      <Midbar />
      <Team />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
