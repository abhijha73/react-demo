import RestaurantCard from "./RestaurantCard";
export const HighOrderComponent = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div>Veg</div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default HighOrderComponent;
