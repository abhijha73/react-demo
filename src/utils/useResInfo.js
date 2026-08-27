import { useState, useEffect } from "react";
import { RestaurentDetailsURL } from "./constants";
import { restaurantDetails } from "./../utils/sample-data";

const useResInfo = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResData(resId);
  }, []);

  async function fetchResData(resId) {
    // const res = await fetch(RestaurentDetailsURL + resId);
    // const detailsOfRestaurent = res;
    setResInfo(restaurantDetails);
  }
  console.log("123123");
  return resInfo;
};

export default useResInfo;
