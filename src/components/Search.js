import React from "react";


function Search(props) {
  const { searchItem, setSearchitem, handleSearch} = props;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted search");
    handleSearch(searchItem)
    setSearchitem("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={(e) => setSearchitem(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
