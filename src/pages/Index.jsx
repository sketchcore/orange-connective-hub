import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Lock, Key, FileText, Star, Search, LayoutDashboard, Users, Shield, MessageSquare } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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

const EnterpriseSettings = () => {
  const roles = [
    { name: 'C-Suite', permissions: ['Full Access', 'Strategic Decision Making'] },
    { name: 'Department Head', permissions: ['Department-wide Access', 'Approve Department Tools'] },
    { name: 'Manager', permissions: ['Team Access', 'Approve Team Tools', 'View Reports'] },
    { name: 'Employee', permissions: ['Use Approved Tools', 'Submit Requests'] },
    { name: 'IT Admin', permissions: ['Manage All Tools', 'Security Configuration', 'User Management'] },
    { name: 'HR', permissions: ['Employee Data Access', 'Onboarding/Offboarding'] },
    { name: 'Finance', permissions: ['Financial Data Access', 'Budget Approval'] },
    { name: 'Legal', permissions: ['Compliance Monitoring', 'Contract Review'] },
    { name: 'External Consultant', permissions: ['Limited Access', 'Project-specific Tools'] },
  ];

  const departments = ['Executive', 'IT', 'HR', 'Finance', 'Legal', 'Marketing', 'Sales', 'Product', 'Engineering', 'Customer Support'];

  const securitySettings = [
    { name: 'Multi-Factor Authentication', enabled: true, description: 'Requires 2FA for all user logins' },
    { name: 'Single Sign-On (SSO)', enabled: true, description: 'Integrated with company-wide SSO solution' },
    { name: 'IP Whitelisting', enabled: true, description: 'Restricts access to approved IP ranges' },
    { name: 'Data Encryption at Rest', enabled: true, description: 'All stored data is encrypted' },
    { name: 'Data Encryption in Transit', enabled: true, description: 'All data transfers use TLS 1.3' },
    { name: 'Regular Security Audits', enabled: true, description: 'Quarterly third-party security assessments' },
    { name: 'User Activity Logging', enabled: true, description: 'Detailed logs of all user actions' },
    { name: 'Data Loss Prevention (DLP)', enabled: true, description: 'Prevents unauthorized data exfiltration' },
    { name: 'GDPR Compliance', enabled: true, description: 'Adheres to EU data protection regulations' },
    { name: 'CCPA Compliance', enabled: true, description: 'Complies with California Consumer Privacy Act' },
    { name: 'SOC 2 Compliance', enabled: true, description: 'Annual SOC 2 Type II audit' },
    { name: 'Vendor Risk Assessment', enabled: true, description: 'Regular security reviews of all integrated tools' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Hello CISO Leon Lee!</h2>
      <h3 className="text-xl font-semibold mb-4">Enterprise Settings</h3>
      <Tabs defaultValue="rbac">
        <TabsList>
          <TabsTrigger value="rbac">RBAC</TabsTrigger>
          <TabsTrigger value="security">Security Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="rbac">
          <Card>
            <CardHeader>
              <CardTitle>Role-Based Access Control (RBAC)</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Permissions</TableHead>
                    <TableHead>Departments</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role, index) => (
                    <TableRow key={index}>
                      <TableCell>{role.name}</TableCell>
                      <TableCell>
                        <ul className="list-disc list-inside">
                          {role.permissions.map((perm, i) => (
                            <li key={i}>{perm}</li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell>
                        {role.name === 'C-Suite' || role.name === 'IT Admin'
                          ? 'All Departments'
                          : departments.filter(() => Math.random() > 0.5).join(', ')}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600">Manage Roles</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security and Compliance Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Setting</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {securitySettings.map((setting, index) => (
                    <TableRow key={index}>
                      <TableCell>{setting.name}</TableCell>
                      <TableCell>
                        <Badge variant={setting.enabled ? "success" : "destructive"}>
                          {setting.enabled ? 'Enabled' : 'Disabled'}
                        </Badge>
                      </TableCell>
                      <TableCell>{setting.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600">Configure Security</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Connective Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Need immediate assistance? Our AI-powered support is here to help!</p>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <MessageSquare className="mr-2 h-4 w-4" /> Chat with Support
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

const APIDocumentation = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Hello CTO Leon Lee!</h2>
    <h3 className="text-xl font-semibold mb-4">API Documentation</h3>
    <Card>
      <CardHeader>
        <CardTitle>Standardized API Access</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Access our comprehensive API documentation for seamless integration.</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Authentication endpoints</li>
          <li>Data retrieval methods</li>
          <li>Webhook integrations</li>
          <li>Rate limiting information</li>
        </ul>
        <Button className="mt-4 bg-orange-500 hover:bg-orange-600">View API Docs</Button>
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
    { name: 'Tableau', users: 50, timeSpent: 120, businessValue: 15000, effective: true },
    { name: 'Intercom', users: 30, timeSpent: 90, businessValue: 10000, effective: true },
    { name: 'IBM Maximo', users: 20, timeSpent: 60, businessValue: 8000, effective: true },
    { name: 'Claude 3', users: 40, timeSpent: 100, businessValue: 12000, effective: true },
    { name: 'Cursor', users: 25, timeSpent: 75, businessValue: 9000, effective: true },
    { name: 'Rossum', users: 15, timeSpent: 45, businessValue: 6000, effective: false },
    { name: 'Scale AI', users: 10, timeSpent: 30, businessValue: 4000, effective: false },
    { name: 'ChatGPT', users: 60, timeSpent: 150, businessValue: 18000, effective: true },
    { name: 'Jasper', users: 35, timeSpent: 85, businessValue: 11000, effective: true },
    { name: 'Dataiku', users: 18, timeSpent: 55, businessValue: 7000, effective: true },
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
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip formatter={(value) => `$${value}`} />
              <Legend />
              <Line type="monotone" dataKey="cost" stroke="#f97316" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Tabs defaultValue="usage">
        <TabsList>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="usage">
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
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Tool Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr>
                    <th>Tool</th>
                    <th>Users</th>
                    <th>Time Spent (hrs/month)</th>
                    <th>Business Value ($)</th>
                    <th>Effective</th>
                  </tr>
                </thead>
                <tbody>
                  {toolUsage.map((tool, index) => (
                    <tr key={index}>
                      <td>{tool.name}</td>
                      <td>{tool.users}</td>
                      <td>{tool.timeSpent}</td>
                      <td>${tool.businessValue}</td>
                      <td>{tool.effective ? '✅' : '❌'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Card className="mt-6">
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
