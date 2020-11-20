import React from "react";

import { Hero } from "./Hero";
import { TakeAction } from './TakeAction'

export const Home = () => {
  return (
    <div className="home">
      <section className="flex-center">
        <h1>Hello and Welcome!</h1>
        <p>Please allow me to introduce myself...</p>
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <TakeAction /> 
      </section>
    </div>
  );
};

export default Home;
