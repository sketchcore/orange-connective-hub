import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Search } from 'lucide-react';

const AIToolCard = ({ name, description, workflow, previewImage, vendorLogo, rating, reviews, quote, githubUrl, websiteUrl }) => (
  <Card className="mb-4 transition-all duration-300 hover:shadow-lg hover:bg-orange-50">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg">{name}</CardTitle>
        <img src={vendorLogo} alt="Vendor Logo" className="h-8 w-8" />
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src={previewImage} alt={name} className="w-full h-40 object-cover mb-4 rounded transition-all duration-300 hover:opacity-80 hover:shadow-md" />
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
      <div className="flex justify-between mt-4">
        <Button as="a" href={githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900">
          GitHub
        </Button>
        <Button as="a" href={websiteUrl} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600">
          Website
        </Button>
      </div>
    </CardContent>
  </Card>
);

const ConnectiveMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const tools = [
    {
      name: "FFmpeg",
      description: "A complete, cross-platform solution to record, convert and stream audio and video.",
      workflow: ["Input video/audio file", "Apply filters or conversions", "Output processed file"],
      previewImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://ffmpeg.org/favicon.ico",
      rating: 4.8,
      reviews: 2500,
      category: "Multimedia",
      quote: { text: "FFmpeg is the Swiss Army knife of multimedia", author: "John from Video Production" },
      githubUrl: "https://github.com/FFmpeg/FFmpeg",
      websiteUrl: "https://ffmpeg.org/"
    },
    {
      name: "ImageMagick",
      description: "Create, edit, compose, or convert digital images from the command line.",
      workflow: ["Select input image", "Apply transformations or effects", "Save output image"],
      previewImage: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://imagemagick.org/image/wand.ico",
      rating: 4.7,
      reviews: 1800,
      category: "Image Processing",
      quote: { text: "ImageMagick has been indispensable for our batch image processing", author: "Emma from Graphic Design" },
      githubUrl: "https://github.com/ImageMagick/ImageMagick",
      websiteUrl: "https://imagemagick.org/"
    },
    {
      name: "Pandoc",
      description: "Universal document converter for various markup formats.",
      workflow: ["Specify input document", "Set conversion options", "Generate output document"],
      previewImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://pandoc.org/favicon.ico",
      rating: 4.6,
      reviews: 1200,
      category: "Document Processing",
      quote: { text: "Pandoc simplifies our documentation workflow across multiple formats", author: "Alex from Technical Writing" },
      githubUrl: "https://github.com/jgm/pandoc",
      websiteUrl: "https://pandoc.org/"
    },
    {
      name: "OpenCV",
      description: "Open Source Computer Vision Library for image and video analysis.",
      workflow: ["Load image/video", "Apply computer vision algorithms", "Visualize or export results"],
      previewImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://opencv.org/wp-content/uploads/2022/05/favicon.ico",
      rating: 4.9,
      reviews: 3000,
      category: "Computer Vision",
      quote: { text: "OpenCV has revolutionized our approach to visual data analysis", author: "Sarah from AI Research" },
      githubUrl: "https://github.com/opencv/opencv",
      websiteUrl: "https://opencv.org/"
    },
    {
      name: "Audacity",
      description: "Free, open source, cross-platform audio software for multi-track recording and editing.",
      workflow: ["Record or import audio", "Edit and apply effects", "Export final audio"],
      previewImage: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vendorLogo: "https://www.audacityteam.org/wp-content/themes/wp_audacity/img/favicon.ico",
      rating: 4.5,
      reviews: 2200,
      category: "Audio Editing",
      quote: { text: "Audacity is our go-to tool for podcast production", author: "Mike from Podcasting" },
      githubUrl: "https://github.com/audacity/audacity",
      websiteUrl: "https://www.audacityteam.org/"
    }
  ];

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || tool.category === filterCategory)
  );

  const displayTools = filteredTools.length > 0 ? filteredTools : tools;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hello Product Designer Leon Lee!</h2>
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
            <SelectItem value="Multimedia">Multimedia</SelectItem>
            <SelectItem value="Image Processing">Image Processing</SelectItem>
            <SelectItem value="Document Processing">Document Processing</SelectItem>
            <SelectItem value="Computer Vision">Computer Vision</SelectItem>
            <SelectItem value="Audio Editing">Audio Editing</SelectItem>
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

export default ConnectiveMarketplace;