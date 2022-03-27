import { useState } from 'react'

import{ Navbar , Welcome ,Footer ,Services , Transaction } from "../components" ;

const Home = () => {
  return (
    <div className="gradient-bg-welcome">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
}

export default Home;
