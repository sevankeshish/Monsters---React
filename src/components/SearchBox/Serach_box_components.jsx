import React from "react";
import "./search_box_style.css";

export const SearchBox = ({ text, handlechange }) => (
  <input
    className="search"
    type="search"
    placeholder={text}
    chnage={handlechange}
  />
);
