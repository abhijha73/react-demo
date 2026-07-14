import resList from "../utils/sample-data.js";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="search-container">
        <button
          onClick={() => {
            let filteredList = resList.filter((res) => res.rating > 4);
            console.log("button clicked");
            console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
          className="filter-btn"
        >
          Top rated restaurants
        </button>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => {
            setFilteredRestaurants(resList);
          }}
          className="filter-btn"
        >
          Show All
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
