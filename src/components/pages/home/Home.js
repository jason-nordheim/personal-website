import React from "react";
import { Hero } from './Hero'


export const Home = () => {
  return (
    <div className="home">
      <section>
        <h1>Hello and Welcome!</h1>
        <p>
          Please allow me to introduce myself... 
        </p>
      </section>
      <section>
        <Hero /> 
      </section>
    </div>
  );
};

export default Home;
