import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);

  const allProducts = [
    { id: "1", name: "Premium Cotton T-Shirt", price: 799, originalPrice: 1499, image: product1, rating: 4.5, reviews: 234 },
    { id: "2", name: "Classic Denim Jeans", price: 1999, originalPrice: 2999, image: product2, rating: 4.3, reviews: 189 },
    { id: "3", name: "Casual Hoodie", price: 1299, originalPrice: 2199, image: product3, rating: 4.7, reviews: 456 },
  ];

  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto mb-6">
            <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..." 
              className="pl-12 h-12"
            />
          </div>
          <h1 className="text-2xl font-bold">
            {searchQuery ? `Search results for "${searchQuery}"` : 'Search Products'}
          </h1>
          <p className="text-muted-foreground">{filteredProducts.length} products found</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your search.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Search;
