import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LayoutDashboard, BarChart3, Lock, FileText, Users, MessageSquare } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import EmployeeDashboard from '../components/EmployeeDashboard';

// Import other components
import { ConnectiveMarketplace } from './ConnectiveMarketplace';
import { EnterpriseSettings } from './EnterpriseSettings';
import { ConnectiveStudio } from './ConnectiveStudio';

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
    { name: 'Tableau', users: 50, timeSpent: 120, roi: 2.5, effective: true },
    { name: 'Intercom', users: 30, timeSpent: 90, roi: 2.1, effective: true },
    { name: 'IBM Maximo', users: 20, timeSpent: 60, roi: 1.8, effective: true },
    { name: 'Claude 3', users: 40, timeSpent: 100, roi: 2.3, effective: true },
    { name: 'Cursor', users: 25, timeSpent: 75, roi: 1.9, effective: true },
    { name: 'Rossum', users: 15, timeSpent: 45, roi: 1.5, effective: false },
    { name: 'Scale AI', users: 10, timeSpent: 30, roi: 1.2, effective: false },
    { name: 'ChatGPT', users: 60, timeSpent: 150, roi: 2.8, effective: true },
    { name: 'Jasper', users: 35, timeSpent: 85, roi: 2.0, effective: true },
    { name: 'Dataiku', users: 18, timeSpent: 55, roi: 1.7, effective: true },
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
                    <th>ROI</th>
                    <th>Effective</th>
                  </tr>
                </thead>
                <tbody>
                  {toolUsage.map((tool, index) => (
                    <tr key={index}>
                      <td>{tool.name}</td>
                      <td>{tool.users}</td>
                      <td>{tool.timeSpent}</td>
                      <td>{tool.roi.toFixed(2)}x</td>
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
            <TabsTrigger value="studio"><FileText className="mr-2" />CONNECTIVE Studio</TabsTrigger>
            <TabsTrigger value="employee"><Users className="mr-2" />Employee Dashboard</TabsTrigger>
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
          <TabsContent value="studio">
            <ConnectiveStudio />
          </TabsContent>
          <TabsContent value="employee">
            <EmployeeDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;