import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const {items, handleAddFavoritedItem, handleRemoveFavoritedItem, favoritedItems, deleteItem} = props;

  const itemOfferCards = items.map((item) => {
    return (
      <ListingCard
        key={item.id}
        id={item.id}
        description={item.description}
        image={item.image}
        location={item.location}
        handleAddFavoritedItem={handleAddFavoritedItem}
        handleRemoveFavoritedItem={handleRemoveFavoritedItem}
        favoritedItems={favoritedItems}
        deleteItem={deleteItem}

      />
    )
  })



  return (
    <main>
      <ul className="cards">
        {itemOfferCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
