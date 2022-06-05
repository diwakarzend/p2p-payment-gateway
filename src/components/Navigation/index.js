import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navData } from "./constants";
import NavList from "./NavList";
import Logout from "./Logout";
import Copyright from "./Copyright";
import Logo from "../../assets/images/logo.png";
export default function Navigation() {
  const [navigationData, setNavigationData] = useState([...navData]);
  return (
    <>
      <Link className="logo" to="/">
        <img src={Logo} alt="Payments" />
      </Link>
      <nav className="mt-12">
        <NavList navData={navigationData} className="navlist" />
      </nav>
      <div className="Logout-copyright absolute left-15 bottom-[82px]">
          <Logout />
          <Copyright />
      </div>
    </>
  );
}
