import React from "react";

import { Action } from "./Action";
import { actions } from "../../../data/home";

export const ActionsContainer = () => (
  <ul className="action-container">
    {actions.map((a) => (
      <Action key={a.text} action={a} />
    ))}
  </ul>
);

export default ActionsContainer;
