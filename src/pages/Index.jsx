import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Lock, Key, FileText, Star, Search } from "lucide-react";

const AIToolCard = ({ name, description, cost, dataRequirements, previewImage, vendorLogo, rating, reviews }) => (
  <Card className="mb-4 transition-all duration-300 hover:shadow-lg hover:scale-105">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg">{name}</CardTitle>
        <img src={vendorLogo} alt="Vendor Logo" className="h-8 w-8" />
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src={previewImage} alt={name} className="w-full h-40 object-cover mb-4 rounded transition-opacity duration-300 hover:opacity-80" />
      <p><strong>Cost:</strong> {cost}</p>
      <p><strong>Data Needs:</strong> {dataRequirements}</p>
      <div className="flex items-center mt-2">
        <Star className="text-yellow-400 mr-1" />
        <span>{rating} ({reviews} reviews)</span>
      </div>
      <Button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300">Install Now</Button>
    </CardContent>
  </Card>
);

const ConnectiveMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const tools = [
    {
      name: "Smart Analytics",
      description: "Advanced analytics tool powered by AI",
      cost: "$500/month + $0.01 per analysis",
      dataRequirements: "Company financial data",
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      previewImage: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
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
      previewImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/ge.com",
      rating: 4.7,
      reviews: 200,
      category: "Maintenance"
    },
    {
      name: "Claude 3.5",
      description: "Advanced AI language model for various tasks",
      cost: "$0.03 per 1K tokens",
      dataRequirements: "Text input",
      previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/anthropic.com",
      rating: 4.8,
      reviews: 300,
      category: "AI Language Model"
    },
    {
      name: "Cursor",
      description: "AI-powered code editor and assistant",
      cost: "$20/month per user",
      dataRequirements: "Code repositories",
      previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/cursor.sh",
      rating: 4.6,
      reviews: 180,
      category: "Development Tools"
    },
    {
      name: "Staple.ai",
      description: "AI-driven document processing and analysis",
      cost: "$500/month for 1000 pages",
      dataRequirements: "Document uploads",
      previewImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/staple.ai",
      rating: 4.3,
      reviews: 95,
      category: "Document Processing"
    },
    {
      name: "Scale.ai",
      description: "AI-powered data labeling and annotation",
      cost: "Custom pricing based on project",
      dataRequirements: "Raw data for labeling",
      previewImage: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      vendorLogo: "https://logo.clearbit.com/scale.com",
      rating: 4.7,
      reviews: 220,
      category: "Data Labeling"
    },
    {
      name: "ChatGPT",
      description: "Conversational AI for various applications",
      cost: "$20/month for ChatGPT Plus",
      dataRequirements: "Text input",
      previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/openai.com",
      rating: 4.9,
      reviews: 500,
      category: "AI Language Model"
    },
    {
      name: "AI Content Generator",
      description: "Generate marketing content with AI",
      cost: "$500/month for unlimited content generation",
      dataRequirements: "Brand guidelines and target audience info",
      previewImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      vendorLogo: "https://logo.clearbit.com/copy.ai",
      rating: 4.1,
      reviews: 95,
      category: "Marketing"
    }
  ];

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || tool.category === filterCategory)
  );

  const displayTools = filteredTools.length > 0 ? filteredTools : tools.slice(0, 10);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">CONNECTIVE Marketplace</h2>
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
        <h1 className="text-2xl font-bold">CONNECTIVE Hub</h1>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <Tabs defaultValue="marketplace">
          <TabsList className="mb-4">
            <TabsTrigger value="marketplace"><BarChart3 className="mr-2" />Marketplace</TabsTrigger>
            <TabsTrigger value="settings"><Lock className="mr-2" />Enterprise Settings</TabsTrigger>
            <TabsTrigger value="api"><FileText className="mr-2" />API Docs</TabsTrigger>
          </TabsList>
          <TabsContent value="marketplace">
            <ConnectiveMarketplace />
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
