import React from "react";
import { Link } from "react-router-dom";

export default function NavList({ navData }) {
  return (
    <ul className="navlist">
      {navData.map(({ id, title, link, icon }) => (
        <li key={id} className="mb-4">
          <Link to={link} className="text-13 flex item-center">
            <span className="flex item-center items-center w-7 h-7">{icon}</span>
            <span className="ml-4">{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
