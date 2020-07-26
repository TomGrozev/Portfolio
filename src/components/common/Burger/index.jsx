import React from "react";

const Burger = ({ open, onToggle }) => (
  <button
    className="flex flex-col justify-around w-6 h-6 bg-transparent p-0 focus:outline-none"
    title="Menu"
    onClick={onToggle}
  >
    <div
      style={{ transformOrigin: "1px" }}
      className={
        "w-6 h-1 bg-black rounded transition-all duration-300 ease-linear relative transform " +
        (open ? "rotate-45" : "rotate-0")
      }
    />
    <div
      style={{ transformOrigin: "1px" }}
      className={
        "w-6 h-1 bg-black rounded transition-all duration-300 ease-linear relative transform " +
        (open ? "opacity-0 translate-x-3" : "opacity-1 translate-x-0")
      }
    />
    <div
      style={{ transformOrigin: "1px" }}
      className={
        "w-6 h-1 bg-black rounded transition-all duration-300 ease-linear relative transform " +
        (open ? "-rotate-45" : "rotate-0")
      }
    />
  </button>
);

export default Burger;
