import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Lock, Key, FileText, Star, Search, LayoutDashboard } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AIToolCard = ({ name, description, cost, workflow, previewImage, vendorLogo, rating, reviews, quote }) => (
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
      <p><strong>Workflow:</strong></p>
      <ol className="list-decimal list-inside mb-2">
        {workflow.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <div className="flex items-center mt-2">
        <Star className="text-yellow-400 mr-1" />
        <span>{rating} ({reviews} reviews)</span>
      </div>
      <p className="text-sm italic mt-2">"{quote.text}" - {quote.author}</p>
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
      workflow: ["Connect data sources", "Create visualizations", "Share insights"],
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/tableau.com",
      rating: 4.5,
      reviews: 1200,
      category: "Analytics",
      quote: { text: "Transformed our data into actionable insights", author: "Sarah from Business Intelligence" }
    },
    {
      name: "Intercom",
      description: "Customer messaging platform with AI-powered features",
      cost: "Starting at $74/month (billed annually)",
      workflow: ["Set up chatbot", "Engage with customers", "Analyze conversations"],
      previewImage: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/intercom.com",
      rating: 4.4,
      reviews: 850,
      category: "Customer Support",
      quote: { text: "Streamlined our customer support process", author: "Mike from Customer Success" }
    },
    {
      name: "IBM Maximo",
      description: "AI-powered asset management and predictive maintenance",
      cost: "Custom pricing based on deployment",
      workflow: ["Monitor assets", "Predict maintenance needs", "Schedule repairs"],
      previewImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/ibm.com",
      rating: 4.3,
      reviews: 320,
      category: "Maintenance",
      quote: { text: "Reduced downtime by 30%", author: "Alex from Operations" }
    },
    {
      name: "Claude 3",
      description: "Advanced AI language model for various tasks",
      cost: "Starting at $20/month for Claude Pro",
      workflow: ["Input your query", "Receive AI-generated response", "Refine and iterate"],
      previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/anthropic.com",
      rating: 4.8,
      reviews: 500,
      category: "AI Language Model",
      quote: { text: "Boosted our content creation efficiency", author: "Emma from Marketing" }
    },
    {
      name: "Cursor",
      description: "AI-powered code editor and assistant",
      cost: "$20/month per user",
      workflow: ["Write code", "Get AI suggestions", "Debug efficiently"],
      previewImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/cursor.sh",
      rating: 4.6,
      reviews: 280,
      category: "Development Tools",
      quote: { text: "Increased coding productivity by 40%", author: "David from Engineering" }
    },
    {
      name: "Rossum",
      description: "AI-powered document processing and data extraction",
      cost: "Custom pricing based on volume",
      workflow: ["Upload documents", "AI extracts data", "Review and approve"],
      previewImage: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/rossum.ai",
      rating: 4.5,
      reviews: 150,
      category: "Document Processing",
      quote: { text: "Cut invoice processing time in half", author: "Linda from Finance" }
    },
    {
      name: "Scale AI",
      description: "AI-powered data labeling and annotation",
      cost: "Custom pricing based on project",
      workflow: ["Upload raw data", "AI labels data", "Human review"],
      previewImage: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/scale.com",
      rating: 4.7,
      reviews: 220,
      category: "Data Labeling",
      quote: { text: "Accelerated our ML model development", author: "Tom from Data Science" }
    },
    {
      name: "ChatGPT",
      description: "Conversational AI for various applications",
      cost: "$20/month for ChatGPT Plus",
      workflow: ["Ask a question", "Receive AI response", "Refine or follow up"],
      previewImage: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/openai.com",
      rating: 4.9,
      reviews: 2000,
      category: "AI Language Model",
      quote: { text: "Revolutionized our customer interactions", author: "Rachel from Sales" }
    },
    {
      name: "Jasper",
      description: "AI content generation for marketing and copywriting",
      cost: "Starting at $49/month",
      workflow: ["Input content brief", "AI generates content", "Edit and refine"],
      previewImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/jasper.ai",
      rating: 4.5,
      reviews: 950,
      category: "Marketing",
      quote: { text: "Doubled our content output", author: "Chris from Content Marketing" }
    },
    {
      name: "Dataiku",
      description: "End-to-end AI and machine learning platform",
      cost: "Custom pricing based on deployment",
      workflow: ["Prepare data", "Build ML models", "Deploy and monitor"],
      previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://logo.clearbit.com/dataiku.com",
      rating: 4.6,
      reviews: 380,
      category: "Machine Learning",
      quote: { text: "Unified our data science workflow", author: "Olivia from Analytics" }
    }
  ];

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || tool.category === filterCategory)
  );

  const displayTools = filteredTools.length > 0 ? filteredTools : tools.slice(0, 10);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hello Jane from Product Design Department</h2>
      <h3 className="text-xl font-semibold mb-4">CONNECTIVE Marketplace</h3>
      <div className="flex flex-col md:flex-row mb-4 gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search tools..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
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
  const costData = [
    { month: 'Jan', cost: 4000 },
    { month: 'Feb', cost: 3000 },
    { month: 'Mar', cost: 5000 },
    { month: 'Apr', cost: 4500 },
    { month: 'May', cost: 6000 },
    { month: 'Jun', cost: 5500 },
  ];

  const toolUsage = [
    { name: 'Tableau', users: 50 },
    { name: 'Intercom', users: 30 },
    { name: 'IBM Maximo', users: 20 },
    { name: 'Claude 3', users: 40 },
    { name: 'Cursor', users: 25 },
    { name: 'Rossum', users: 15 },
    { name: 'Scale AI', users: 10 },
    { name: 'ChatGPT', users: 60 },
    { name: 'Jasper', users: 35 },
    { name: 'Dataiku', users: 18 },
  ];

  const dataSources = [
    'CRM System',
    'ERP Database',
    'IoT Sensor Network',
    'Customer Support Tickets',
    'Sales Data Warehouse',
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Hello CEO Leon Lee!</h2>
      <h3 className="text-xl font-semibold mb-4">Acme Inc. Dashboard</h3>
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
