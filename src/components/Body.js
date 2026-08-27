import { RestaurentListApiURL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import HighOrderComponent from "./HighOrderComponent";
import { useState, useEffect } from "react";
import { resList } from "./../utils/sample-data";

const VegRestaurent = HighOrderComponent(RestaurantCard);

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    console.log("calling api to get data");
    getData();
  }, []);

  async function getData() {
    // const response = await fetch(
    //   `https://proxy-ap.corsfix.com/?https://namastedev.com/api/v1/listRestaurants`,
    // );

    const json = resList;
    console.log(json);

    console.log("data is: ", json);
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
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-gray-50 pt-2">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary mb-8">
            🍽️ Discover Delicious Restaurants
          </h2>
          <div className="flex gap-3">
            <div className="flex-1">
              <input
                placeholder="🔍 Search restaurants by name or cuisine..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-6 py-3 rounded-full border-2 border-gray-300 focus:border-primary focus:outline-none text-lg shadow-sm hover:shadow-md transition"
              />
            </div>
            <button
              onClick={() => {
                const filteredRes = restaurantsList.filter((ele) =>
                  ele.info.name.toLowerCase().includes(searchInput),
                );
                setFilteredRestaurantsList(filteredRes);
              }}
              className="bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition shadow-md"
            >
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRestaurantsList.map((restaurant, index) => (
            <Link
              to={`/restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              {restaurant.info.veg ? (
                <VegRestaurent resData={restaurant.info} />
              ) : (
                <RestaurantCard resData={restaurant.info} index={index} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
