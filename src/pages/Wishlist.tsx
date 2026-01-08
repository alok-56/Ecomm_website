import { Trash2, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Wishlist = () => {
  const { items: wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof wishlistItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      size: "M",
      color: "Default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">{wishlistItems.length} items saved</p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-accent text-accent-foreground">
                      {item.discount}% OFF
                    </Badge>
                  </div>
                  <Button 
                    onClick={() => removeFromWishlist(item.id)}
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  >
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-base mb-2 line-clamp-2">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold">₹{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{item.originalPrice}
                    </span>
                  </div>

                  {item.inStock ? (
                    <Button onClick={() => handleAddToCart(item)} className="w-full" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  ) : (
                    <Button variant="outline" className="w-full" size="sm" disabled>
                      Out of Stock
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">
                Save items you love to your wishlist and shop them later.
              </p>
              <Button size="lg">Continue Shopping</Button>
            </div>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
