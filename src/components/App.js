import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [favoritedItems, setFavoritedItems] = useState([])
  //Add to array of Favorited Items using spread
  const [searchItem, setSearchitem] = useState("")

    useEffect(() => {
      console.log("Fetching Data...")
      fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then(itemsData => {
        console.log("Fetch Complete")
        setItems(itemsData)
      });
    }, [])

    function handleAddFavoritedItem(favItem){
      setFavoritedItems([...favoritedItems, favItem])
    }

    function handleRemoveFavoritedItem(favItemDescrip){
      const updatedFavoritedItems = favoritedItems.filter((description) => description !== favItemDescrip)
      setFavoritedItems(updatedFavoritedItems)
    }

    function deleteItem(deletedItem){
      const updatedItems = items.filter((item) => 
        item.description === deletedItem ? false : true
      );      
      setItems(updatedItems)
    }

    function handleSearch(searchValue){
      setSearchitem(searchValue)
    }
                                                                      // .includes returns a Boolean, this checks for EACH item that includes same characters regardless of casing // 
    const visibleItems = items.filter((item) => searchItem === "" || item.description.toLowerCase().includes(searchItem.toLowerCase()))



  return (
    

    <div className="app">
      <Header searchItem={searchItem} setSearchitem={setSearchitem} handleSearch={handleSearch}/>
      <ListingsContainer 
      items={visibleItems} 
      handleAddFavoritedItem={handleAddFavoritedItem}
      handleRemoveFavoritedItem={handleRemoveFavoritedItem} 
      favoritedItems={favoritedItems} 
      deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
