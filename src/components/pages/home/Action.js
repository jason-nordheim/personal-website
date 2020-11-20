import React from "react";
import { Link } from "react-router-dom"
import { getActionRoute } from "../../../data/home"

export const Action = ({ action }) => {
  return (
    <li className="action no-select" >
        <Link to={getActionRoute(action.category)}>{action.text}</Link>
    </li>
  );
};

export default Action;
