import React from "react";
import { actions } from "../../../data/home"
import { ActionBubble } from "./ActionBubble"


export const TakeAction = () => {
  return (
    <div className="takeAction">
      <h3>What brings you here?</h3>
      <section>
        <ul className="actionBubble-container">
          { actions.map(a => <ActionBubble key={a.text} action={a} /> )}
        </ul>
      </section>
    </div>
  );
};

export default TakeAction;
