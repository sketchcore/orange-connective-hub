import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, BarChart3, Lock, FileText, Users } from 'lucide-react';
import ConnectiveMarketplace from '../components/ConnectiveMarketplace';
import EmployeeDashboard from '../components/EmployeeDashboard';
import Analytics from './Analytics';

const queryClient = new QueryClient();

const Dashboard = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Hello CEO Leon Lee!</h2>
    <h3 className="text-xl font-semibold mb-4">Acme Inc. Dashboard</h3>
    {/* Add dashboard content here */}
  </div>
);

const EnterpriseSettings = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Hello CISO Leon Lee!</h2>
    <h3 className="text-xl font-semibold mb-4">Enterprise Settings</h3>
    {/* Add enterprise settings content here */}
  </div>
);

const ConnectiveStudio = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Hello CTO Leon Lee!</h2>
    <h3 className="text-xl font-semibold mb-4">CONNECTIVE Studio</h3>
    {/* Add CONNECTIVE Studio content here */}
  </div>
);

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
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
          <Routes>
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default Index;