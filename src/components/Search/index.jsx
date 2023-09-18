import React from "react";
import { TextField, Theme } from "@lumx/react";
import { mdiMagnify } from "@lumx/icons";

const Search = ({ setSearch, search }) => {
  const handleSearch = (e) => {
    setSearch(e);
  };

  return (
    <TextField
      theme={Theme.dark}
      placeholder="Search ..."
      icon={mdiMagnify}
      value={search}
      onChange={handleSearch}
    />
  );
};
export default Search;
