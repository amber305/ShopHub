import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AccountPage: React.FC = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, City, Country",
  });

  const [orders] = useState([
    { id: "#12345", date: "Feb 20, 2025", status: "Delivered", total: "$199.99" },
    { id: "#12346", date: "Feb 10, 2025", status: "Processing", total: "$89.99" },
  ]);

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="flex space-x-4 bg-gray-100 p-2 rounded-lg">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <Label>Name</Label>
                  <Input value={user.name} readOnly className="bg-gray-100" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input value={user.email} readOnly className="bg-gray-100" />
                </div>
                <div>
                  <Label>Phone</Label>
                  <Input value={user.phone} readOnly className="bg-gray-100" />
                </div>
                <div>
                  <Label>Address</Label>
                  <Input value={user.address} readOnly className="bg-gray-100" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="p-4 border rounded-lg flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <p className="text-sm">{order.status}</p>
                      <p className="font-semibold">{order.total}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No orders found.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <Label>Change Password</Label>
                  <Input type="password" placeholder="New password" />
                </div>
                <div>
                  <Label>Confirm Password</Label>
                  <Input type="password" placeholder="Confirm password" />
                </div>
                <Button className="mt-4">Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountPage;
