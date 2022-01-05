import { getSuggestedQuery } from "@testing-library/react";
import React from "react";
// Styling

const SearchBar = ({ setQuery }) => {
  return (
    <input
      className="searchBar"
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search for a cookie name"
    />
  );
};

export default SearchBar;
