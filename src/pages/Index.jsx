import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, Lock, FileText, Star, Search, LayoutDashboard, Users, Shield, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import EmployeeDashboard from '../components/EmployeeDashboard';

const OpenSourceToolCard = ({ name, description, category, githubUrl, websiteUrl }) => {
  return (
    <Card className="mb-4 transition-all duration-300 hover:shadow-lg hover:bg-orange-50">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge className="mb-2">{category}</Badge>
        <div className="flex space-x-2 mt-4">
          <Button asChild variant="outline" size="sm">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">Website</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ConnectiveMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const tools = [
    {
      name: "FFmpeg",
      description: "A complete, cross-platform solution to record, convert and stream audio and video.",
      category: "Multimedia",
      githubUrl: "https://github.com/FFmpeg/FFmpeg",
      websiteUrl: "https://ffmpeg.org/"
    },
    {
      name: "ImageMagick",
      description: "Use ImageMagick to create, edit, compose, or convert digital images.",
      category: "Image Processing",
      githubUrl: "https://github.com/ImageMagick/ImageMagick",
      websiteUrl: "https://imagemagick.org/"
    },
    {
      name: "Pandoc",
      description: "Universal document converter.",
      category: "Document Conversion",
      githubUrl: "https://github.com/jgm/pandoc",
      websiteUrl: "https://pandoc.org/"
    },
    {
      name: "youtube-dl",
      description: "Command-line program to download videos from YouTube and other video sites.",
      category: "Video Download",
      githubUrl: "https://github.com/ytdl-org/youtube-dl",
      websiteUrl: "https://youtube-dl.org/"
    },
    {
      name: "Tesseract OCR",
      description: "An optical character recognition engine for various operating systems.",
      category: "OCR",
      githubUrl: "https://github.com/tesseract-ocr/tesseract",
      websiteUrl: "https://tesseract-ocr.github.io/"
    },
    {
      name: "AutoHotkey",
      description: "The ultimate automation scripting language for Windows.",
      category: "Automation",
      githubUrl: "https://github.com/AutoHotkey/AutoHotkey",
      websiteUrl: "https://www.autohotkey.com/"
    },
    {
      name: "Calibre",
      description: "E-book management software.",
      category: "E-books",
      githubUrl: "https://github.com/kovidgoyal/calibre",
      websiteUrl: "https://calibre-ebook.com/"
    },
    {
      name: "Audacity",
      description: "Audio software for multi-track recording and editing.",
      category: "Audio Editing",
      githubUrl: "https://github.com/audacity/audacity",
      websiteUrl: "https://www.audacityteam.org/"
    },
    {
      name: "KeePassXC",
      description: "Cross-platform password manager.",
      category: "Security",
      githubUrl: "https://github.com/keepassxreboot/keepassxc",
      websiteUrl: "https://keepassxc.org/"
    },
    {
      name: "Syncthing",
      description: "Open Source Continuous File Synchronization.",
      category: "File Sync",
      githubUrl: "https://github.com/syncthing/syncthing",
      websiteUrl: "https://syncthing.net/"
    }
  ];

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || tool.category === filterCategory)
  );

  const categories = ['all', ...new Set(tools.map(tool => tool.category))];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Open Source Tools Marketplace</h2>
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
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool, index) => (
          <OpenSourceToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

// ... (rest of the code remains unchanged)

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
            <TabsTrigger value="marketplace"><BarChart3 className="mr-2" />Open Source Tools</TabsTrigger>
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