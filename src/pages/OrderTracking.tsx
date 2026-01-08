import { useState } from "react";
import { Package, Truck, CheckCircle, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.jpg";

const OrderTracking = () => {
  const [orderId] = useState("ORD-2024-12345");

  const trackingSteps = [
    { status: "Order Placed", date: "Dec 20, 2:30 PM", completed: true, icon: CheckCircle },
    { status: "Packed", date: "Dec 20, 5:45 PM", completed: true, icon: Package },
    { status: "Shipped", date: "Dec 21, 9:00 AM", completed: true, icon: Truck },
    { status: "Out for Delivery", date: "Dec 22, 8:00 AM", completed: false, icon: MapPin },
    { status: "Delivered", date: "Expected by Dec 22", completed: false, icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Order ID Search */}
            <Card>
              <CardHeader>
                <CardTitle>Enter Order ID</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="ORD-2024-XXXXX" defaultValue={orderId} />
                  <Button>Track</Button>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex gap-4 relative">
                        {index !== trackingSteps.length - 1 && (
                          <div className={`absolute left-5 top-10 w-0.5 h-12 ${step.completed ? 'bg-primary' : 'bg-border'}`} />
                        )}
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className={`font-semibold ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {step.status}
                            </h3>
                            {index === 2 && <Badge>Current Status</Badge>}
                          </div>
                          <p className="text-sm text-muted-foreground">{step.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Details */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-semibold">{orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Address</p>
                  <p className="text-sm">123, MG Road, Bangalore - 560001</p>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex gap-3">
                    <img src={product1} alt="Product" className="w-16 h-16 object-cover rounded" />
                    <div>
                      <p className="font-semibold text-sm">Premium Cotton T-Shirt</p>
                      <p className="text-sm text-muted-foreground">Size: M | Qty: 2</p>
                      <p className="font-semibold">₹1,598</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderTracking;
