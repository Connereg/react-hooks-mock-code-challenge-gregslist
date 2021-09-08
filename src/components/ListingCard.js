import React from "react";

function ListingCard(props) {
  const { id, description, image, location, handleAddFavoritedItem, handleRemoveFavoritedItem, favoritedItems, deleteItem } = props;

  function handleAddFavorite(){
    handleAddFavoritedItem(description)
  }

  function handleRemoveFavorite(){
    handleRemoveFavoritedItem(description)
  }

  const itemIsFavorited = favoritedItems.includes(description)

  function handleDeletedItem(){
    fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
    console.log("Item Deleted")

    deleteItem(description)
  }

  return (
    <li id={id} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {!itemIsFavorited ? (
          <button className="emoji-button favorite" onClick={handleAddFavorite}>☆</button>
        ) : (
          <button className="emoji-button favorite active" onClick={handleRemoveFavorite}>★</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeletedItem}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
