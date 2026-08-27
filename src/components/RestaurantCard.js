import { useState, useEffect } from "react";

// Placeholder SVG data URLs
const placeholderSVG = (color = "#e0f2f1") =>
  `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect width='400' height='200' fill='${encodeURIComponent(color)}'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='%23555' text-anchor='middle' dy='.3em'%3E🍽️%3C/text%3E%3C/svg%3E`;

const fallbackImages = [
  placeholderSVG("#c8e6c9"), // Light green
  placeholderSVG("#fff9c4"), // Light yellow
  placeholderSVG("#ffe0b2"), // Light orange
  placeholderSVG("#ffccbc"), // Light peach
  placeholderSVG("#f8bbd0"), // Light pink
];

const RestaurantCard = ({ resData, index = 0 }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  const [imageSrc, setImageSrc] = useState(cloudinaryImageId);
  const fallbackImage = fallbackImages[index % fallbackImages.length];

  useEffect(() => {
    setImageSrc(cloudinaryImageId);
  }, [cloudinaryImageId]);

  const handleImageError = () => {
    setImageSrc(fallbackImage);
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={imageSrc}
          onError={handleImageError}
          alt="restaurant"
        />
        <div className="absolute top-3 right-3 bg-primary text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg flex items-center gap-1">
          ⭐ {avgRating}
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {name}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-2">
            {cuisines.join(", ")}
          </p>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500 font-semibold">
            Tap to view menu
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
