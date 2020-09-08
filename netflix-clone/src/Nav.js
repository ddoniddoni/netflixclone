import React, { useEffect, useState } from "react";
import "./Nav.css";

export const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://w.namu.la/s/e73d00d283513f086ecee75aa1edfef3449d97bccceda03ba0d9c240d28545645902a68011c5c2a3716044813aa5ff58326efd747daa413aea3de07c3ec21dbb06efbec6df03cc4815978c9ae6c43d237f6735c974798333f5a89cd366f9781e"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix Logo"
      />
    </div>
  );
};
