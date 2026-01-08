import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share2, Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();

  const product = {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: 799,
    originalPrice: 1499,
    discount: 47,
    rating: 4.5,
    reviews: 1245,
    sold: "10K+",
    inStock: true,
    images: [product1, product2, product3],
    description: "Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this t-shirt offers a soft, breathable feel perfect for everyday wear. The classic design features a crew neck and short sleeves, making it versatile for any casual occasion.",
    features: [
      "100% Organic Cotton",
      "Breathable and comfortable",
      "Machine washable",
      "Pre-shrunk fabric",
      "Classic fit",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Classic Denim Jeans",
      price: 1999,
      originalPrice: 2999,
      image: product2,
      rating: 4.3,
      reviews: 892,
      discount: 33,
    },
    {
      id: "3",
      name: "Casual Hoodie",
      price: 1299,
      originalPrice: 2199,
      image: product3,
      rating: 4.7,
      reviews: 2156,
      discount: 41,
    },
    {
      id: "4",
      name: "Elegant Dress Shirt",
      price: 1499,
      originalPrice: 2499,
      image: product1,
      rating: 4.4,
      reviews: 567,
      discount: 40,
    },
  ];

  const reviews = [
    {
      id: 1,
      author: "Rahul S.",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent quality! The fabric is soft and comfortable. Perfect fit.",
      helpful: 24,
    },
    {
      id: 2,
      author: "Priya M.",
      rating: 4,
      date: "1 week ago",
      comment: "Good product for the price. Color is as shown in pictures.",
      helpful: 18,
    },
    {
      id: 3,
      author: "Amit K.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best purchase! Highly recommended. Will buy more colors.",
      helpful: 32,
    },
  ];

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: selectedSize,
      color: "Default",
    });
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.images[0],
        discount: product.discount,
        inStock: product.inStock,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Images */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden border border-border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <Badge className="mb-2">{product.discount}% OFF</Badge>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded">
                  <span className="font-semibold">{product.rating}</span>
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <span className="text-muted-foreground">
                  {product.reviews.toLocaleString()} Ratings & Reviews
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold">₹{product.price}</span>
                <span className="text-xl text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="text-accent font-semibold">{product.discount}% off</span>
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Select Size</h3>
                <Button variant="link" className="h-auto p-0 text-sm">Size Guide</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    className="w-16 h-12"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <Button onClick={handleAddToCart} className="flex-1" size="lg">
                Add to Cart
              </Button>
              <Button variant="accent" className="flex-1" size="lg">
                Buy Now
              </Button>
            </div>

            <div className="flex gap-3 mb-6">
              <Button onClick={handleWishlistToggle} variant="outline" className="flex-1">
                <Heart className={`h-5 w-5 mr-2 ${inWishlist ? 'fill-accent text-accent' : ''}`} />
                {inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </Button>
              <Button variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">Get it delivered in 2-3 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Easy Returns</h4>
                  <p className="text-sm text-muted-foreground">30-day return policy for all products</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">Secure Payment</h4>
                  <p className="text-sm text-muted-foreground">100% secure payment options</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Card className="mb-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
              <TabsTrigger value="description" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Description
              </TabsTrigger>
              <TabsTrigger value="specifications" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary">
                Reviews ({product.reviews})
              </TabsTrigger>
            </TabsList>
            
            <CardContent className="p-6">
              <TabsContent value="description">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <Separator />
                  <div>
                    <h3 className="font-semibold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium">100% Organic Cotton</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Fit</span>
                    <span className="font-medium">Classic Fit</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Sleeve Type</span>
                    <span className="font-medium">Short Sleeve</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Neck Type</span>
                    <span className="font-medium">Crew Neck</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Care Instructions</span>
                    <span className="font-medium">Machine Wash</span>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-6">
                  {/* Rating Summary */}
                  <div className="bg-secondary p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-5xl font-bold mb-2">{product.rating}</div>
                        <div className="flex items-center gap-2 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{product.reviews.toLocaleString()} Ratings</p>
                      </div>
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center gap-3">
                            <span className="text-sm w-8">{rating}★</span>
                            <Progress value={rating * 20} className="flex-1" />
                            <span className="text-sm text-muted-foreground w-12 text-right">
                              {Math.floor(Math.random() * 500)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="font-semibold">{review.author}</span>
                              <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs">
                                <span>{review.rating}</span>
                                <Star className="h-3 w-3 fill-current" />
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-2">{review.comment}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{review.date}</span>
                              <Button variant="link" className="h-auto p-0 text-sm">
                                Helpful ({review.helpful})
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full">Load More Reviews</Button>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
