const styleCard = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  margin: "10px",
};

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="img-container" src={cloudinaryImageId} alt="restaurant" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
