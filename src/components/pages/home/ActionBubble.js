import React from "react";
import { getActionColor } from "../../../data/home"

export const ActionBubble = ({ action }) => {
  return (
    <li className="actionBubble" >
        {action.text}
    </li>
  );
};

export default ActionBubble;
