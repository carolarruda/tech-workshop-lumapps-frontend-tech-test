import React from "react";
import { FlexBox, Alignment } from "@lumx/react";
import Search from "../Search";

const Header = ({ setSearch, search }) => (
  <header className="lumx-spacing-padding-big header">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
      className="small-logo"
    />
    <FlexBox vAlign={Alignment.right}>
      <Search setSearch={setSearch} search={search}/>
    </FlexBox>
  </header>
);

export default Header;
