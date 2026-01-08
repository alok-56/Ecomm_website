import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Sparkles, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const Index = () => {
  const featuredProducts = [
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
  ];

  const categories = [
    { name: "Men's Fashion", link: "/products?category=men", count: "2.5k+ items" },
    { name: "Women's Fashion", link: "/products?category=women", count: "3.2k+ items" },
    { name: "Kids' Fashion", link: "/products?category=kids", count: "1.8k+ items" },
    { name: "Accessories", link: "/products?category=accessories", count: "850+ items" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBanner})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-primary-foreground">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-wider">New Season Collection</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Elevate Your Style
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Discover the latest trends in fashion. Up to 50% off on selected items. Limited time offer!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button variant="hero" size="xl" className="group">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/products?sale=true">
                  <Button variant="outline" size="xl" className="bg-background/10 backdrop-blur-sm text-primary-foreground border-primary-foreground hover:bg-background/20">
                    View Deals
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-8 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Get it in 2-3 days</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Easy Returns</h3>
                  <p className="text-sm text-muted-foreground">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground">100% authentic products</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.link}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Products</h2>
              <Link to="/products">
                <Button variant="outline">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Deals Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Limited Time Offer</h2>
            <p className="text-xl mb-8 opacity-90">
              Get up to 50% off on selected items. Don't miss out!
            </p>
            <Link to="/products?sale=true">
              <Button variant="hero" size="xl" className="bg-background text-foreground hover:bg-background/90">
                Shop Deals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
