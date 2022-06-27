import React from "react";
import LogoutIcon from "../../assets/images/icon-logout.png";

export default function Logout() {
  return (
    <>
          <button className="btn btn-primary bg-red rounded-lg text-white text-13 h-[36px] w-[110px] flex items-center justify-center">
            <img src={LogoutIcon} alt="" className="mr-2"/> Logout
          </button> 
    </>
  );
}
