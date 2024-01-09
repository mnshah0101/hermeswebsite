'use client';
import React, { useEffect, useRef } from "react";
import Link from "next/link";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import appData from "@/data/app.json";

import "@/styles/navbar.css";

const Navbar = ({ lr, theme }) => {
  const navbar = useRef();

  function handleScroll() {
    try{
    if (window.scrollY > 300) {
      navbar.current.classList.add("nav-scroll");
    } else {
      navbar.current.classList.remove("nav-scroll");
    }
  }catch(e){
    ;
  }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav ref={navbar} className={`navbar navbar-expand-lg change ${theme === "light" ? "light" : ""}`}>
      <div className="container">
        <Link className="logo" href="/">
          {theme ? (
            theme === "light" ? (
              <span className="logo_text light_logo">HERMES</span>
            ) : (
              <span className="logo_text">HERMES</span>
            )
          ) : (
              <span className="logo_text">HERMES</span>
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href={`/`}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={`/about`}>
                About
              </a>
            </li>
              <li className="nav-item">
              <a className="nav-link" href={`/works`}>
                Portfolio
              </a>
            </li>
            
            <li className="nav-item">
              <a href={`/contact`} className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
