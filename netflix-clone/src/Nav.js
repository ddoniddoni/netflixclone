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
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73774b40-1708-43c9-b667-fd7c2d6bd8de/das00oc-54f2f5c7-2049-4294-b234-4808cb4f05b6.png/v1/fill/w_512,h_512,strp/netflix_honeycomb_icon_by_roxor470_das00oc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC83Mzc3NGI0MC0xNzA4LTQzYzktYjY2Ny1mZDdjMmQ2YmQ4ZGVcL2RhczAwb2MtNTRmMmY1YzctMjA0OS00Mjk0LWIyMzQtNDgwOGNiNGYwNWI2LnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1zjczmQvFQ_7pIY1eSGe6Xl_4084cEM8uG5YbVhorfU"
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
