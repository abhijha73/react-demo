import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RestaurentDetailsURL } from "../utils/constants";

const RestaurantDetails = () => {
  const [resDetail, setResDetail] = useState(null);
  const params = useParams();
  useEffect(() => {
    getRestaurentDetails();
  }, []);

  async function getRestaurentDetails() {
    const res = await fetch(RestaurentDetailsURL + params.id);
    const detailsOfRestaurent = await res.json();
    setResDetail(detailsOfRestaurent.data.cards[2].card.card.info);
  }

  return !resDetail ? (
    <div>Welcome to restaurent!!</div>
  ) : (
    <div>
      <h3>Welcome to {resDetail.name} restaurent!!</h3>
      <div>Menu:</div>
      <ul>
        {resDetail.cuisines.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
