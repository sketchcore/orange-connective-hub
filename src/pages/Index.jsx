import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Lock, Key, FileText } from "lucide-react";

const AIToolCard = ({ name, description, cost, dataRequirements }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p><strong>Cost:</strong> {cost}</p>
      <p><strong>Data Requirements:</strong> {dataRequirements}</p>
      <Button className="mt-2 bg-orange-500 hover:bg-orange-600">Install</Button>
    </CardContent>
  </Card>
);

const AIMarketplace = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">AI Tool Marketplace</h2>
    <AIToolCard
      name="Smart Analytics"
      description="Advanced analytics tool powered by AI"
      cost="$500/month + $0.01 per analysis"
      dataRequirements="Requires access to company financial data"
    />
    <AIToolCard
      name="AI Customer Service"
      description="24/7 AI-powered customer support"
      cost="$1000/month for up to 10,000 interactions"
      dataRequirements="Needs integration with CRM system"
    />
    <AIToolCard
      name="Predictive Maintenance"
      description="AI tool for predicting equipment failures"
      cost="$2000/month + $100 per connected device"
      dataRequirements="Requires IoT sensor data"
    />
  </div>
);

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
