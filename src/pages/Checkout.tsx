import { useState } from "react";
import { Check, CreditCard, Wallet } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState("1");
  const [selectedPayment, setSelectedPayment] = useState("card");

  const addresses = [
    {
      id: "1",
      type: "Home",
      name: "Rahul Sharma",
      address: "123, MG Road, Bangalore - 560001",
      phone: "+91 9876543210",
    },
    {
      id: "2",
      type: "Office",
      name: "Rahul Sharma",
      address: "456, Tech Park, Whitefield, Bangalore - 560066",
      phone: "+91 9876543210",
    },
  ];

  const cartItems = [
    {
      id: "1",
      name: "Premium Cotton T-Shirt",
      price: 799,
      image: product1,
      size: "M",
      quantity: 2,
    },
    {
      id: "2",
      name: "Classic Denim Jeans",
      price: 1999,
      image: product2,
      size: "32",
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryCharges = 0;
  const total = subtotal + deliveryCharges;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Steps */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Delivery Address */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      1
                    </div>
                    <CardTitle>Delivery Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                    <div className="space-y-4">
                      {addresses.map((address) => (
                        <div 
                          key={address.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedAddress === address.id 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <RadioGroupItem value={address.id} id={address.id} />
                            <Label htmlFor={address.id} className="flex-1 cursor-pointer">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline">{address.type}</Badge>
                                <span className="font-semibold">{address.name}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-1">
                                {address.address}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Phone: {address.phone}
                              </p>
                            </Label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  <Button variant="outline" className="mt-4">Add New Address</Button>
                </CardContent>
              </Card>

              {/* Step 2: Order Summary */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      2
                    </div>
                    <CardTitle>Order Summary</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-1">
                            Size: {item.size} | Qty: {item.quantity}
                          </p>
                          <p className="font-semibold">₹{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Step 3: Payment Method */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      3
                    </div>
                    <CardTitle>Payment Method</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment}>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg cursor-pointer">
                        <div className="flex items-start gap-3">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-2">
                              <CreditCard className="h-5 w-5" />
                              <span className="font-semibold">Credit/Debit Card</span>
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg cursor-pointer">
                        <div className="flex items-start gap-3">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi" className="flex-1 cursor-pointer">
                            <div className="flex items-center gap-2">
                              <Wallet className="h-5 w-5" />
                              <span className="font-semibold">UPI</span>
                            </div>
                          </Label>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg cursor-pointer">
                        <div className="flex items-start gap-3">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">
                            <span className="font-semibold">Cash on Delivery</span>
                          </Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Price Details */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Price Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price ({cartItems.length} items)</span>
                      <span className="font-medium">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Charges</span>
                      <span className="font-medium text-primary">FREE</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between mb-6">
                    <span className="font-bold text-lg">Total Amount</span>
                    <span className="font-bold text-2xl">₹{total}</span>
                  </div>

                  <Button className="w-full" size="lg">
                    <Check className="mr-2 h-5 w-5" />
                    Place Order
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    By placing this order, you agree to our Terms & Conditions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
