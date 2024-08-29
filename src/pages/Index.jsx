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
  const [filterCategory, setFilterCategory] = useState('all');

  const tools = [
    {
      name: "Smart Analytics",
      description: "Advanced analytics tool powered by AI",
      cost: "$500/month + $0.01 per analysis",
      dataRequirements: "Company financial data",
      previewImage: "https://picsum.photos/seed/smartanalytics/300/200",
      vendorLogo: "https://logo.clearbit.com/tableau.com",
      rating: 4.5,
      reviews: 120,
      category: "Analytics"
    },
    {
      name: "AI Customer Service",
      description: "24/7 AI-powered customer support",
      cost: "$1000/month for up to 10,000 interactions",
      dataRequirements: "CRM system integration",
      previewImage: "https://picsum.photos/seed/aicustomerservice/300/200",
      vendorLogo: "https://logo.clearbit.com/zendesk.com",
      rating: 4.2,
      reviews: 85,
      category: "Customer Support"
    },
    {
      name: "Predictive Maintenance",
      description: "AI tool for predicting equipment failures",
      cost: "$2000/month + $100 per connected device",
      dataRequirements: "IoT sensor data",
      previewImage: "https://picsum.photos/seed/predictivemaintenance/300/200",
      vendorLogo: "https://logo.clearbit.com/ge.com",
      rating: 4.7,
      reviews: 200,
      category: "Maintenance"
    },
    {
      name: "AI Chatbot",
      description: "Intelligent chatbot for website integration",
      cost: "$750/month for unlimited chats",
      dataRequirements: "Website integration",
      previewImage: "https://picsum.photos/seed/aichatbot/300/200",
      vendorLogo: "https://logo.clearbit.com/intercom.com",
      rating: 4.3,
      reviews: 150,
      category: "Customer Support"
    },
    {
      name: "Data Visualization",
      description: "AI-powered data visualization tool",
      cost: "$600/month + $0.05 per visualization",
      dataRequirements: "Data warehouse connection",
      previewImage: "https://picsum.photos/seed/datavisualization/300/200",
      vendorLogo: "https://logo.clearbit.com/looker.com",
      rating: 4.6,
      reviews: 180,
      category: "Analytics"
    },
    {
      name: "Sentiment Analysis",
      description: "AI tool for analyzing customer sentiment",
      cost: "$800/month for up to 100,000 analyses",
      dataRequirements: "Customer feedback data",
      previewImage: "https://picsum.photos/seed/sentimentanalysis/300/200",
      vendorLogo: "https://logo.clearbit.com/brandwatch.com",
      rating: 4.4,
      reviews: 110,
      category: "Analytics"
    },
    {
      name: "AI-Powered CRM",
      description: "CRM system with AI-driven insights",
      cost: "$1500/month for up to 50 users",
      dataRequirements: "Customer data import",
      previewImage: "https://picsum.photos/seed/aipoweredcrm/300/200",
      vendorLogo: "https://logo.clearbit.com/salesforce.com",
      rating: 4.8,
      reviews: 250,
      category: "Customer Support"
    },
    {
      name: "Predictive Sales",
      description: "AI tool for sales forecasting",
      cost: "$1200/month + 1% of forecasted sales",
      dataRequirements: "Sales history data",
      previewImage: "https://picsum.photos/seed/predictivesales/300/200",
      vendorLogo: "https://logo.clearbit.com/salesforce.com",
      rating: 4.5,
      reviews: 140,
      category: "Sales"
    },
    {
      name: "AI Content Generator",
      description: "Generate marketing content with AI",
      cost: "$500/month for unlimited content generation",
      dataRequirements: "Brand guidelines and target audience info",
      previewImage: "https://picsum.photos/seed/aicontentgenerator/300/200",
      vendorLogo: "https://logo.clearbit.com/copy.ai",
      rating: 4.1,
      reviews: 95,
      category: "Marketing"
    },
    {
      name: "AI-Driven Inventory Management",
      description: "Optimize inventory with AI predictions",
      cost: "$1800/month + $50 per warehouse",
      dataRequirements: "Inventory and sales data",
      previewImage: "https://picsum.photos/seed/aiinventory/300/200",
      vendorLogo: "https://logo.clearbit.com/sap.com",
      rating: 4.6,
      reviews: 170,
      category: "Operations"
    }
  ];

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || tool.category === filterCategory)
  );

  const displayTools = filteredTools.length > 0 ? filteredTools : tools.slice(0, 10);

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
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Analytics">Analytics</SelectItem>
            <SelectItem value="Customer Support">Customer Support</SelectItem>
            <SelectItem value="Maintenance">Maintenance</SelectItem>
            <SelectItem value="Sales">Sales</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
            <SelectItem value="Operations">Operations</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayTools.map((tool, index) => (
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
