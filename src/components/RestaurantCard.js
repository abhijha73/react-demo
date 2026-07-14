const styleCard = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  margin: "10px",
};
const RestaurantCard = ({ resData }) => {
  const { name, cuisine, rating, imgLink } = resData;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="img-container" src={imgLink} alt="restaurant" />
      <h2>{name}</h2>
      <h3>{cuisine}</h3>
      <h4>{rating}</h4>
    </div>
  );
};

export default RestaurantCard;
