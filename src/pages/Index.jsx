import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Lock, Key, FileText, Star, Search } from "lucide-react";

const AIToolCard = ({ name, description, cost, dataRequirements, previewImage, vendorLogo, rating, reviews }) => (
  <Card className="mb-4">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg">{name}</CardTitle>
        <img src={vendorLogo} alt="Vendor Logo" className="h-8 w-8" />
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src={previewImage} alt={name} className="w-full h-40 object-cover mb-4 rounded" />
      <p><strong>Cost:</strong> {cost}</p>
      <p><strong>Data Needs:</strong> {dataRequirements}</p>
      <div className="flex items-center mt-2">
        <Star className="text-yellow-400 mr-1" />
        <span>{rating} ({reviews} reviews)</span>
      </div>
      <Button className="mt-4 w-full bg-orange-500 hover:bg-orange-600">Install Now</Button>
    </CardContent>
  </Card>
);

const AIMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const tools = [
    {
      name: "Smart Analytics",
      description: "Advanced analytics tool powered by AI",
      cost: "$500/month + $0.01 per analysis",
      dataRequirements: "Company financial data",
      previewImage: "https://example.com/smart-analytics-preview.jpg",
      vendorLogo: "https://example.com/vendor-logo-1.png",
      rating: 4.5,
      reviews: 120,
      category: "Analytics"
    },
    {
      name: "AI Customer Service",
      description: "24/7 AI-powered customer support",
      cost: "$1000/month for up to 10,000 interactions",
      dataRequirements: "CRM system integration",
      previewImage: "https://example.com/ai-customer-service-preview.jpg",
      vendorLogo: "https://example.com/vendor-logo-2.png",
      rating: 4.2,
      reviews: 85,
      category: "Customer Support"
    },
    {
      name: "Predictive Maintenance",
      description: "AI tool for predicting equipment failures",
      cost: "$2000/month + $100 per connected device",
      dataRequirements: "IoT sensor data",
      previewImage: "https://example.com/predictive-maintenance-preview.jpg",
      vendorLogo: "https://example.com/vendor-logo-3.png",
      rating: 4.7,
      reviews: 200,
      category: "Maintenance"
    },
  ];

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === '' || tool.category === filterCategory)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">AI Tool Marketplace</h2>
      <div className="flex mb-4 gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search tools..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Categories</SelectItem>
            <SelectItem value="Analytics">Analytics</SelectItem>
            <SelectItem value="Customer Support">Customer Support</SelectItem>
            <SelectItem value="Maintenance">Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool, index) => (
          <AIToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

const EnterpriseSettings = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Enterprise Settings</h2>
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Permissions and RBAC</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Configure role-based access control and user permissions here.</p>
        <Button className="mt-2 bg-orange-500 hover:bg-orange-600">Manage Roles</Button>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Set up security protocols and data access policies.</p>
        <Button className="mt-2 bg-orange-500 hover:bg-orange-600">Configure Security</Button>
      </CardContent>
    </Card>
  </div>
);

const APIDocumentation = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">API Documentation</h2>
    <Card>
      <CardHeader>
        <CardTitle>Standardized API Access</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Access our comprehensive API documentation for seamless integration.</p>
        <Button className="mt-2 bg-orange-500 hover:bg-orange-600">View API Docs</Button>
      </CardContent>
    </Card>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <header className="bg-orange-500 text-white p-4">
        <h1 className="text-2xl font-bold">Connective Dashboard</h1>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <Tabs defaultValue="marketplace">
          <TabsList className="mb-4">
            <TabsTrigger value="marketplace"><BarChart3 className="mr-2" />Marketplace</TabsTrigger>
            <TabsTrigger value="settings"><Lock className="mr-2" />Enterprise Settings</TabsTrigger>
            <TabsTrigger value="api"><FileText className="mr-2" />API Docs</TabsTrigger>
          </TabsList>
          <TabsContent value="marketplace">
            <AIMarketplace />
          </TabsContent>
          <TabsContent value="settings">
            <EnterpriseSettings />
          </TabsContent>
          <TabsContent value="api">
            <APIDocumentation />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
