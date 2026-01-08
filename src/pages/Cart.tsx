import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const Cart = () => {
  const { items: cartItems, removeFromCart, updateQuantity, subtotal } = useCart();

  const discount = cartItems.reduce((total, item) => total + (item.originalPrice - item.price) * item.quantity, 0);
  const deliveryCharges = subtotal > 999 ? 0 : 99;
  const total = subtotal + deliveryCharges;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Size: {item.size} | Color: {item.color}
                          </p>
                        </div>
                        <Button onClick={() => removeFromCart(item.id)} variant="ghost" size="icon">
                          <Trash2 className="h-5 w-5 text-destructive" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl font-bold">₹{item.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{item.originalPrice}
                        </span>
                        <span className="text-sm text-accent font-semibold">
                          {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border rounded-md">
                          <Button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
                          <Button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Subtotal: ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Wishlist Suggestion */}
            <Card className="bg-secondary">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  💝 Don't want to buy now? <Link to="/wishlist" className="text-primary font-medium hover:underline">Save to Wishlist</Link>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-bold text-xl mb-6">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                    <span className="font-medium">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="font-medium text-accent">-₹{discount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Charges</span>
                    <span className="font-medium">
                      {deliveryCharges === 0 ? (
                        <span className="text-primary">FREE</span>
                      ) : (
                        `₹${deliveryCharges}`
                      )}
                    </span>
                  </div>
                </div>

                {deliveryCharges > 0 && (
                  <p className="text-sm text-muted-foreground mb-4 p-3 bg-secondary rounded-md">
                    Add items worth ₹{999 - subtotal} more to get FREE delivery
                  </p>
                )}

                <Separator className="my-4" />

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl">₹{total}</span>
                </div>

                {/* Coupon */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Apply Coupon</label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter coupon code" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Safe and Secure Payments. 100% Authentic products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
