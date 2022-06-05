import React from "react";

export default function Header({ pageTitle = "" }) {
  return (
    <header className="flex items-center justify-between h-40 py-12">
      <h1 className="text-25 font-semibold">{pageTitle}</h1>
      <section className="header-right flex justify-end items-center">
        
      </section>
    </header>
  );
}
