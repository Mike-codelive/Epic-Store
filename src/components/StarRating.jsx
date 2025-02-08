import { Star, StarHalf, StarBorder } from "@mui/icons-material";

export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="text-yellow-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarBorder key={i} className="text-yellow-400" />
      ))}
    </div>
  );
};
