import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useResInfo from "./../utils/useResInfo";
import Items from "./Items";

const RestaurantDetails = () => {
  const params = useParams();
  const resDetail = useResInfo(params.id);
  const [showIndex, setShowIndex] = useState(0);

  return !resDetail ? (
    <div>Welcome to restaurent!!</div>
  ) : (
    <div className="flex flex-col">
      <h2 className="text-center">Welcome to {resDetail.name} !!</h2>
      <h4 className="mt-4 mb-2">Explore Our Menu:</h4>
      <div>
        {resDetail.menu.map((category, index) => (
          <div
            className="border border-blue-300 p-4 mb-1 rounded-sm"
            key={Math.random()}
          >
            <Items
              showItems={showIndex === index ? true : false}
              setShowIndex={() => setShowIndex(index)}
              category={category}
              key={Math.random()}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
