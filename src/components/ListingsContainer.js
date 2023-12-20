import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  return (
    <main>
      <ul className="cards">
        { listings.map( item => <ListingCard key={item.id} item={item} listings={listings} setListings={setListings} /> ) }
      </ul>
    </main>
  );
}

export default ListingsContainer;
