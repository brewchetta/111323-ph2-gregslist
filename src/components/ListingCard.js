import React, { useState } from "react";

function ListingCard({ item, listings, setListings }) {

  const [isFavorited, setIsFavorited] = useState(false)

  function handleClick() {
    setIsFavorited(prevValue => !prevValue )
  }

  function handleDelete() {
    // take list of listings and filter this item out
    // remove the card from the page
    const filteredListings = listings.filter(eachListing => eachListing.id !== item.id)
    setListings( filteredListings )

    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE'
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
