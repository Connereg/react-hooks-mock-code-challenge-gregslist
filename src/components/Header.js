import React from "react";
import Search from "./Search";

function Header(props) {
  const {searchItem, setSearchitem, handleSearch} = props;
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchItem={searchItem} setSearchitem={setSearchitem} handleSearch={handleSearch}/>
    </header>
  );
}

export default Header;
