import React, { useEffect } from "react";
import $ from "jquery";
import { Fragment } from "react";
import "./assets/styles/scrollbutton.css";
import useScrolled from "../../hooks/useScrolled";

const ScrollToTopButton = () => {
  const { height, isScrolled, setIsScrolled } = useScrolled(300);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, [height, setIsScrolled]);
  const scrollUp = () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
  };
  return (
    <Fragment>
      <div
        className={`scroll-button ${isScrolled && "scroll-button-show"}`}
        onClick={scrollUp}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16L11.2929 8.70711C11.6834 8.31658 12.3166 8.31658 12.7071 8.70711L20 16"
            stroke="#121219"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Fragment>
  );
};

export default ScrollToTopButton;
