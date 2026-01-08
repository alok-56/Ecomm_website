import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  isNew?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  discount,
  isNew 
}: ProductCardProps) => {
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(id);

  const handleWishlistClick = () => {
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id,
        name,
        price,
        originalPrice: originalPrice || price,
        image,
        discount: discount || 0,
        inStock: true,
      });
    }
  };
  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount && (
            <Badge className="bg-accent text-accent-foreground">
              {discount}% OFF
            </Badge>
          )}
          {isNew && (
            <Badge className="bg-primary text-primary-foreground">
              NEW
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button 
          onClick={handleWishlistClick}
          variant="ghost" 
          size="icon" 
          className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity ${
            inWishlist ? 'opacity-100' : ''
          }`}
        >
          <Heart className={`h-5 w-5 ${inWishlist ? 'fill-accent text-accent' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-base mb-2 line-clamp-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center gap-1 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            <span className="font-semibold">{rating}</span>
            <Star className="h-3 w-3 fill-current" />
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full" size="sm">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
