import { RestaurentListApiURL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    console.log("calling api to get data");
    getData();
  }, []);

  async function getData() {
    const data = await fetch(RestaurentListApiURL);
    const json = await data.json();
    setRestaurantsList(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredRestaurantsList(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    console.log(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  }
  if (filteredRestaurantsList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search-container">
        <input
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>{" "}
        <button
          onClick={() => {
            const filteredRes = restaurantsList.filter((ele) =>
              ele.info.name.toLowerCase().includes(searchInput),
            );
            setFilteredRestaurantsList(filteredRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurantsList.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
