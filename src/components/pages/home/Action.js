import React from "react";

export const Action = ({ action }) => {
  return (
    <li className="action no-select" >
        {action.text}
    </li>
  );
};

export default Action;
