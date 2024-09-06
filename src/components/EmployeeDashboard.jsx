import React, { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ResizableBox } from 'react-resizable';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUploader } from "react-drag-drop-files";
import { FileText, Plus, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AIToolWidget = ({ id, tool, onRemove }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [file, setFile] = useState(null);
  const [selectedModel, setSelectedModel] = useState(tool.defaultModel || '');

  const handleFileChange = (file) => {
    setFile(file);
    setInput(`Processing file: ${file.name}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let processedInput = input;
    if (file) {
      processedInput = `File processed: ${file.name}`;
    }
    setOutput(`Processed by ${tool.name} using ${selectedModel}: ${processedInput}`);
  };

  const renderToolSpecificInputs = () => {
    switch (tool.type) {
      case 'language-model':
        return (
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger>
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              {tool.models.map((model) => (
                <SelectItem key={model} value={model}>{model}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case 'image-generation':
        return (
          <Input
            type="text"
            placeholder="Enter image description"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        );
      default:
        return (
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Enter input for ${tool.name}...`}
            className="mb-2"
          />
        );
    }
  };

  return (
    <ResizableBox width={300} height={400} minConstraints={[200, 200]} maxConstraints={[500, 600]}>
      <Card className="h-full overflow-auto relative">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{tool.name}</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => onRemove(id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {renderToolSpecificInputs()}
            <div className="flex space-x-2 mb-2">
              <FileUploader handleChange={handleFileChange} name="file" types={tool.acceptedFileTypes}>
                <Button type="button" variant="outline" size="icon">
                  <FileText className="h-4 w-4" />
                </Button>
              </FileUploader>
            </div>
            <Button type="submit" className="w-full mb-2">Process</Button>
          </form>
          {output && (
            <div className="mt-4">
              <h4 className="font-bold">Output:</h4>
              <p>{output}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </ResizableBox>
  );
};

const UsageAnalytics = ({ toolUsage }) => (
  <Card>
    <CardHeader>
      <CardTitle>Tool Usage Analytics</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={toolUsage}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="usageTime" fill="#8884d8" name="Usage Time (hours)" />
          <Bar dataKey="taskCompletion" fill="#82ca9d" name="Tasks Completed" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <h4 className="font-bold">AI-Generated Recommendations:</h4>
        <ul className="list-disc pl-5 mt-2">
          <li>Increase usage of Tableau for more data-driven decision making.</li>
          <li>Explore advanced features of ChatGPT to improve productivity.</li>
          <li>Consider additional training for Jasper to maximize content creation efficiency.</li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

const EmployeeDashboard = () => {
  const [installedTools, setInstalledTools] = useState([
    { id: 'tool1', name: 'GPT-4', type: 'language-model', models: ['GPT-4', 'GPT-3.5-Turbo'], defaultModel: 'GPT-4', acceptedFileTypes: ["TXT", "PDF", "DOC"] },
    { id: 'tool2', name: 'DALL-E 3', type: 'image-generation', acceptedFileTypes: ["JPG", "PNG"] },
    { id: 'tool3', name: 'Jasper', type: 'content-generation', acceptedFileTypes: ["TXT", "PDF", "DOC"] },
  ]);

  const [activeTools, setActiveTools] = useState([]);
  const [showAddTool, setShowAddTool] = useState(false);

  const toolUsage = [
    { name: 'GPT-4', usageTime: 10, taskCompletion: 15 },
    { name: 'DALL-E 3', usageTime: 5, taskCompletion: 8 },
    { name: 'Jasper', usageTime: 7, taskCompletion: 12 },
  ];

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;
    const items = Array.from(activeTools);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setActiveTools(items);
  }, [activeTools]);

  const handleAddTool = useCallback((toolId) => {
    const toolToAdd = installedTools.find(tool => tool.id === toolId);
    if (toolToAdd && !activeTools.some(tool => tool.id === toolId)) {
      setActiveTools(prevTools => [...prevTools, toolToAdd]);
    }
    setShowAddTool(false);
  }, [installedTools, activeTools]);

  const handleRemoveTool = useCallback((id) => {
    setActiveTools(prevTools => prevTools.filter(tool => tool.id !== id));
  }, []);

  return (
    <div className="p-4 bg-gradient-to-r from-orange-100 to-orange-200 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-orange-800">Hello Product Designer Leon Lee!</h2>
        <h3 className="text-xl font-semibold mb-6 text-orange-700">Your Personalized AI Toolkit Dashboard</h3>
        
        <Tabs defaultValue="workspace" className="bg-white rounded-lg shadow-lg p-6">
          <TabsList className="mb-6">
            <TabsTrigger value="workspace">Workspace</TabsTrigger>
            <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workspace">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-orange-700">Your Active AI Tools</h4>
              <Button onClick={() => setShowAddTool(true)} className="bg-orange-500 hover:bg-orange-600">
                <Plus className="mr-2 h-4 w-4" /> Add Tool to Workspace
              </Button>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="tools" direction="horizontal">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-wrap gap-4">
                    {activeTools.map((tool, index) => (
                      <Draggable key={tool.id} draggableId={tool.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <AIToolWidget id={tool.id} tool={tool} onRemove={handleRemoveTool} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </TabsContent>
          
          <TabsContent value="usage">
            <UsageAnalytics toolUsage={toolUsage} />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={showAddTool} onOpenChange={setShowAddTool}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Tool to Workspace</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <h4 className="mb-2 font-semibold">Available Tools:</h4>
            {installedTools.map((tool) => (
              <Button
                key={tool.id}
                onClick={() => handleAddTool(tool.id)}
                className="mr-2 mb-2"
                disabled={activeTools.some(activeTool => activeTool.id === tool.id)}
              >
                {tool.name}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeDashboard;