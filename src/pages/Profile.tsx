import { User, Package, Heart, MapPin, CreditCard, Bell, LogOut } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const Profile = () => {
  const orders = [
    {
      id: "ORD123456",
      date: "Jan 15, 2025",
      status: "Delivered",
      total: 1598,
      items: [
        { name: "Premium Cotton T-Shirt", image: product1, quantity: 2 },
      ],
    },
    {
      id: "ORD123455",
      date: "Jan 10, 2025",
      status: "In Transit",
      total: 1999,
      items: [
        { name: "Classic Denim Jeans", image: product2, quantity: 1 },
      ],
    },
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Rahul Sharma",
      address: "123, MG Road, Bangalore",
      pincode: "560001",
      phone: "+91 9876543210",
      isDefault: true,
    },
    {
      id: 2,
      type: "Office",
      name: "Rahul Sharma",
      address: "456, Tech Park, Whitefield, Bangalore",
      pincode: "560066",
      phone: "+91 9876543210",
      isDefault: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarFallback className="text-2xl">RS</AvatarFallback>
                    </Avatar>
                    <h2 className="font-bold text-xl">Rahul Sharma</h2>
                    <p className="text-sm text-muted-foreground">rahul.sharma@email.com</p>
                  </div>

                  <Separator className="my-4" />

                  <nav className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      My Profile
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Package className="h-4 w-4 mr-2" />
                      My Orders
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Heart className="h-4 w-4 mr-2" />
                      Wishlist
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MapPin className="h-4 w-4 mr-2" />
                      Addresses
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Payment Methods
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </Button>
                  </nav>

                  <Separator className="my-4" />

                  <Button variant="ghost" className="w-full justify-start text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="orders" className="w-full">
                <TabsList className="w-full justify-start mb-6">
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="addresses">Addresses</TabsTrigger>
                </TabsList>

                {/* Orders Tab */}
                <TabsContent value="orders" className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Order #{order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              Placed on {order.date}
                            </p>
                          </div>
                          <Badge 
                            className={
                              order.status === "Delivered" 
                                ? "bg-primary" 
                                : "bg-accent"
                            }
                          >
                            {order.status}
                          </Badge>
                        </div>

                        <div className="flex gap-4 mb-4">
                          {order.items.map((item, index) => (
                            <img 
                              key={index}
                              src={item.image} 
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Total: ₹{order.total}</span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Track Order</Button>
                            <Button variant="outline" size="sm">View Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                {/* Profile Tab */}
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">First Name</label>
                          <input 
                            type="text" 
                            value="Rahul" 
                            className="w-full px-3 py-2 border border-border rounded-md"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Last Name</label>
                          <input 
                            type="text" 
                            value="Sharma" 
                            className="w-full px-3 py-2 border border-border rounded-md"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email</label>
                          <input 
                            type="email" 
                            value="rahul.sharma@email.com" 
                            className="w-full px-3 py-2 border border-border rounded-md"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Phone</label>
                          <input 
                            type="tel" 
                            value="+91 9876543210" 
                            className="w-full px-3 py-2 border border-border rounded-md"
                          />
                        </div>
                      </div>
                      <Button>Update Profile</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Addresses Tab */}
                <TabsContent value="addresses" className="space-y-4">
                  {addresses.map((address) => (
                    <Card key={address.id}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline">{address.type}</Badge>
                              {address.isDefault && (
                                <Badge>Default</Badge>
                              )}
                            </div>
                            <h3 className="font-semibold mb-1">{address.name}</h3>
                            <p className="text-sm text-muted-foreground mb-1">
                              {address.address}
                            </p>
                            <p className="text-sm text-muted-foreground mb-1">
                              Pincode: {address.pincode}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Phone: {address.phone}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Delete</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button>Add New Address</Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
