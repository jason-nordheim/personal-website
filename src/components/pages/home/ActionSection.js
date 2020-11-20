import React from "react";

import { ActionsContainer } from './ActionsContainer'

export const ActionSection = () => (
    <section className="action-section">
      <h2>What brings you here?</h2>
      <p>Feel free to explore yourself, or use an action bubble below to get started!</p>
      <ActionsContainer />
    </section>
);

export default ActionSection;
