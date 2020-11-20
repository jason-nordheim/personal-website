import React from "react";

import { Terminal } from "./Terminal";
import { ActionSection } from "./ActionSection";

export const Home = () => {
  return (
    <div className="home">
      <section className="flex-center">
        <h1>Hello and Welcome!</h1>
      </section>
      <Terminal />
      <ActionSection />
    </div>
  );
};

export default Home;
