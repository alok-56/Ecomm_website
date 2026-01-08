import { useState } from "react";
import { Filter, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const products = [
    {
      id: "1",
      name: "Premium Cotton T-Shirt",
      price: 799,
      originalPrice: 1499,
      image: product1,
      rating: 4.5,
      reviews: 1245,
      discount: 47,
      isNew: true,
    },
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
      isNew: true,
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
    {
      id: "5",
      name: "Summer Polo Shirt",
      price: 999,
      originalPrice: 1799,
      image: product2,
      rating: 4.2,
      reviews: 423,
      discount: 44,
    },
    {
      id: "6",
      name: "Formal Trousers",
      price: 2199,
      originalPrice: 3499,
      image: product3,
      rating: 4.6,
      reviews: 789,
      discount: 37,
    },
  ];

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-3">
          {["Men", "Women", "Kids", "Accessories"].map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={5000}
          step={100}
          className="mb-4"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="font-semibold mb-4">Size</h3>
        <div className="space-y-3">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox id={size} />
              <label htmlFor={size} className="text-sm cursor-pointer">
                {size}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="font-semibold mb-4">Color</h3>
        <div className="space-y-3">
          {["Black", "White", "Blue", "Red", "Green"].map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox id={color} />
              <label htmlFor={color} className="text-sm cursor-pointer">
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-4">Rating</h3>
        <div className="space-y-3">
          {["4★ & above", "3★ & above", "2★ & above"].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={rating} />
              <label htmlFor={rating} className="text-sm cursor-pointer">
                {rating}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Discount */}
      <div>
        <h3 className="font-semibold mb-4">Discount</h3>
        <div className="space-y-3">
          {["50% or more", "40% or more", "30% or more", "20% or more"].map((discount) => (
            <div key={discount} className="flex items-center space-x-2">
              <Checkbox id={discount} />
              <label htmlFor={discount} className="text-sm cursor-pointer">
                {discount}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-muted-foreground">Showing {products.length} products</p>
          </div>
          
          <div className="flex gap-4 items-center">
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
                <SelectItem value="new">Newest First</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Filter */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Content */}
        <div className="flex gap-8">
          {/* Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-semibold text-lg">Filters</h2>
                <Button variant="ghost" size="sm">
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              </div>
              <FilterSidebar />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
