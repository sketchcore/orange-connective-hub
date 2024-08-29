import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Lock, Key, FileText, Star, Search, LayoutDashboard } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AIToolCard = ({ name, description, cost, dataRequirements, previewImage, vendorLogo, rating, reviews }) => (
  <Card className="mb-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-orange-50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg">{name}</CardTitle>
        <img src={vendorLogo} alt="Vendor Logo" className="h-8 w-8" />
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src={previewImage} alt={name} className="w-full h-40 object-cover mb-4 rounded transition-all duration-300 hover:opacity-80 hover:shadow-md" />
      <p><strong>Cost:</strong> {cost}</p>
      <p><strong>Data Needs:</strong> {dataRequirements}</p>
      <div className="flex items-center mt-2">
        <Star className="text-yellow-400 mr-1" />
        <span>{rating} ({reviews} reviews)</span>
      </div>
      <Button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">Install Now</Button>
    </CardContent>
  </Card>
);

const ConnectiveMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const tools = [
    {
      name: "Tableau",
      description: "Advanced analytics and data visualization platform",
      cost: "$70/user/month (billed annually)",
      dataRequirements: "Various data sources (databases, spreadsheets, cloud services)",
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/tableau.com",
      rating: 4.5,
      reviews: 1200,
      category: "Analytics",
      businessValue: 85,
      usage: 90
    },
    {
      name: "Intercom",
      description: "Customer messaging platform with AI-powered features",
      cost: "Starting at $74/month (billed annually)",
      dataRequirements: "CRM system integration, customer data",
      previewImage: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      vendorLogo: "https://logo.clearbit.com/intercom.com",
      rating: 4.4,
      reviews: 850,
      category: "Customer Support",
      businessValue: 80,
      usage: 85
    },
    {
      name: "IBM Maximo",
      description: "AI-powered asset management and predictive maintenance",
      cost: "Custom pricing based on deployment",
      dataRequirements: "IoT sensor data, equipment information",
      previewImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/ibm.com",
      rating: 4.3,
      reviews: 320,
      category: "Maintenance",
      businessValue: 75,
      usage: 70
    },
    {
      name: "Claude 3",
      description: "Advanced AI language model for various tasks",
      cost: "Starting at $20/month for Claude Pro",
      dataRequirements: "Text input",
      previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/anthropic.com",
      rating: 4.8,
      reviews: 500,
      category: "AI Language Model",
      businessValue: 90,
      usage: 95
    },
    {
      name: "Cursor",
      description: "AI-powered code editor and assistant",
      cost: "$20/month per user",
      dataRequirements: "Code repositories",
      previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/cursor.sh",
      rating: 4.6,
      reviews: 280,
      category: "Development Tools",
      businessValue: 70,
      usage: 65
    },
    {
      name: "Rossum",
      description: "AI-powered document processing and data extraction",
      cost: "Custom pricing based on volume",
      dataRequirements: "Document uploads (invoices, receipts, etc.)",
      previewImage: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      vendorLogo: "https://logo.clearbit.com/rossum.ai",
      rating: 4.5,
      reviews: 150,
      category: "Document Processing",
      businessValue: 85,
      usage: 80
    },
    {
      name: "Scale AI",
      description: "AI-powered data labeling and annotation",
      cost: "Custom pricing based on project",
      dataRequirements: "Raw data for labeling",
      previewImage: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      vendorLogo: "https://logo.clearbit.com/scale.com",
      rating: 4.7,
      reviews: 220,
      category: "Data Labeling",
      businessValue: 75,
      usage: 70
    },
    {
      name: "ChatGPT",
      description: "Conversational AI for various applications",
      cost: "$20/month for ChatGPT Plus",
      dataRequirements: "Text input",
      previewImage: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/openai.com",
      rating: 4.9,
      reviews: 2000,
      category: "AI Language Model",
      businessValue: 95,
      usage: 100
    },
    {
      name: "Jasper",
      description: "AI content generation for marketing and copywriting",
      cost: "Starting at $49/month",
      dataRequirements: "Brand guidelines and target audience info",
      previewImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      vendorLogo: "https://logo.clearbit.com/jasper.ai",
      rating: 4.5,
      reviews: 950,
      category: "Marketing",
      businessValue: 80,
      usage: 85
    },
    {
      name: "Dataiku",
      description: "End-to-end AI and machine learning platform",
      cost: "Custom pricing based on deployment",
      dataRequirements: "Various data sources, ML models",
      previewImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/dataiku.com",
      rating: 4.6,
      reviews: 380,
      category: "Machine Learning",
      businessValue: 85,
      usage: 80
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

const Dashboard = () => {
  const tools = [
    {
      name: "Tableau",
      description: "Advanced analytics and data visualization platform",
      cost: "$70/user/month (billed annually)",
      dataRequirements: "Various data sources (databases, spreadsheets, cloud services)",
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/tableau.com",
      rating: 4.5,
      reviews: 1200,
      category: "Analytics",
      businessValue: 85,
      usage: 90
    },
    {
      name: "Intercom",
      description: "Customer messaging platform with AI-powered features",
      cost: "Starting at $74/month (billed annually)",
      dataRequirements: "CRM system integration, customer data",
      previewImage: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      vendorLogo: "https://logo.clearbit.com/intercom.com",
      rating: 4.4,
      reviews: 850,
      category: "Customer Support",
      businessValue: 80,
      usage: 85
    },
    {
      name: "IBM Maximo",
      description: "AI-powered asset management and predictive maintenance",
      cost: "Custom pricing based on deployment",
      dataRequirements: "IoT sensor data, equipment information",
      previewImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/ibm.com",
      rating: 4.3,
      reviews: 320,
      category: "Maintenance",
      businessValue: 75,
      usage: 70
    },
    {
      name: "Claude 3",
      description: "Advanced AI language model for various tasks",
      cost: "Starting at $20/month for Claude Pro",
      dataRequirements: "Text input",
      previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/anthropic.com",
      rating: 4.8,
      reviews: 500,
      category: "AI Language Model",
      businessValue: 90,
      usage: 95
    },
    {
      name: "Cursor",
      description: "AI-powered code editor and assistant",
      cost: "$20/month per user",
      dataRequirements: "Code repositories",
      previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/cursor.sh",
      rating: 4.6,
      reviews: 280,
      category: "Development Tools",
      businessValue: 70,
      usage: 65
    },
    {
      name: "Rossum",
      description: "AI-powered document processing and data extraction",
      cost: "Custom pricing based on volume",
      dataRequirements: "Document uploads (invoices, receipts, etc.)",
      previewImage: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      vendorLogo: "https://logo.clearbit.com/rossum.ai",
      rating: 4.5,
      reviews: 150,
      category: "Document Processing",
      businessValue: 85,
      usage: 80
    },
    {
      name: "Scale AI",
      description: "AI-powered data labeling and annotation",
      cost: "Custom pricing based on project",
      dataRequirements: "Raw data for labeling",
      previewImage: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      vendorLogo: "https://logo.clearbit.com/scale.com",
      rating: 4.7,
      reviews: 220,
      category: "Data Labeling",
      businessValue: 75,
      usage: 70
    },
    {
      name: "ChatGPT",
      description: "Conversational AI for various applications",
      cost: "$20/month for ChatGPT Plus",
      dataRequirements: "Text input",
      previewImage: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/openai.com",
      rating: 4.9,
      reviews: 2000,
      category: "AI Language Model",
      businessValue: 95,
      usage: 100
    },
    {
      name: "Jasper",
      description: "AI content generation for marketing and copywriting",
      cost: "Starting at $49/month",
      dataRequirements: "Brand guidelines and target audience info",
      previewImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      vendorLogo: "https://logo.clearbit.com/jasper.ai",
      rating: 4.5,
      reviews: 950,
      category: "Marketing",
      businessValue: 80,
      usage: 85
    },
    {
      name: "Dataiku",
      description: "End-to-end AI and machine learning platform",
      cost: "Custom pricing based on deployment",
      dataRequirements: "Various data sources, ML models",
      previewImage: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      vendorLogo: "https://logo.clearbit.com/dataiku.com",
      rating: 4.6,
      reviews: 380,
      category: "Machine Learning",
      businessValue: 85,
      usage: 80
    }
  ];

  const costData = [
    { month: 'Jan', cost: 4000 },
    { month: 'Feb', cost: 3000 },
    { month: 'Mar', cost: 5000 },
    { month: 'Apr', cost: 4500 },
    { month: 'May', cost: 6000 },
    { month: 'Jun', cost: 5500 },
  ];

  const toolUsage = tools.map(tool => ({ name: tool.name, users: Math.floor(tool.usage * 2) }));

  const dataSources = [
    'CRM System',
    'ERP Database',
    'IoT Sensor Network',
    'Customer Support Tickets',
    'Sales Data Warehouse',
  ];

  const productivityData = tools.map(tool => ({
    name: tool.name,
    productivity: (tool.businessValue + tool.usage) / 2,
  })).sort((a, b) => b.productivity - a.productivity);

  const discontinuedTools = [
    { name: 'Legacy CRM', reason: 'Replaced by Intercom' },
    { name: 'Old Analytics Tool', reason: 'Replaced by Tableau' },
    { name: 'Manual Data Entry System', reason: 'Replaced by Rossum' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Hello CEO Leon Lee!</h2>
      <h3 className="text-xl font-semibold mb-4">Acme Inc. Dashboard</h3>
      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="discontinued">Discontinued Tools</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Tool Cost Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cost" stroke="#f97316" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Tool Usage by Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {toolUsage.map((tool, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{tool.name}</span>
                      <span className="font-semibold">{tool.users} users</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Connected Data Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dataSources.map((source, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {source}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="productivity">
          <Card>
            <CardHeader>
              <CardTitle>Tool Productivity (Usage vs Business Value)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={productivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="productivity" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="discontinued">
          <Card>
            <CardHeader>
              <CardTitle>Discontinued Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {discontinuedTools.map((tool, index) => (
                  <li key={index} className="border-b pb-2">
                    <h4 className="font-semibold">{tool.name}</h4>
                    <p className="text-sm text-gray-600">Reason: {tool.reason}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <header className="bg-orange-500 text-white p-4">
        <h1 className="text-2xl font-bold">CONNECTIVE Hub</h1>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <Tabs defaultValue="dashboard">
          <TabsList className="mb-4">
            <TabsTrigger value="dashboard"><LayoutDashboard className="mr-2" />Dashboard</TabsTrigger>
            <TabsTrigger value="marketplace"><BarChart3 className="mr-2" />CONNECTIVE Marketplace</TabsTrigger>
            <TabsTrigger value="settings"><Lock className="mr-2" />Enterprise Settings</TabsTrigger>
            <TabsTrigger value="api"><FileText className="mr-2" />API Docs</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
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
