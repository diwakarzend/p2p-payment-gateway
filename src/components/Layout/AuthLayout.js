import React from "react";
import Header from "../Header";
import Navigation from "../Navigation";

export default function AuthLayout({ children, pageTitle = "" }) {
  return (
    <div className="flex">
      <aside className="py-12 px-10 w-80 bg-white relative">
        <Navigation />        
      </aside>
      <div className="flex-auto px-12">
        <Header pageTitle={pageTitle} />
        {children}
      </div>
    </div>
  );
}
