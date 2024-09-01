import React, { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ResizableBox } from 'react-resizable';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FileUploader } from "react-drag-drop-files";
import { Mic, Camera, FileText, Plus, Trash2, Settings, RefreshCcw } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const AIToolWidget = ({ id, tool, onRemove }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [file, setFile] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const handleFileChange = (file) => {
    setFile(file);
    setInput(`Processing file: ${file.name}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating AI tool processing
    let processedInput = input;
    if (file) {
      processedInput = `File processed: ${file.name}`;
    } else if (isRecording) {
      processedInput = "Audio input processed";
    } else if (isCameraOn) {
      processedInput = "Image/Video input processed";
    }
    setOutput(`Processed by ${tool.name}: ${processedInput}`);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setInput("Recording audio...");
    }
  };

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
    if (!isCameraOn) {
      setInput("Camera activated...");
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
            <div className="flex space-x-2 mb-2">
              <FileUploader handleChange={handleFileChange} name="file" types={["JPG", "PNG", "GIF", "MP4", "MP3", "PDF", "DOC"]}>
                <Button type="button" variant="outline" size="icon">
                  <FileText className="h-4 w-4" />
                </Button>
              </FileUploader>
              <Button type="button" variant="outline" size="icon" onClick={toggleRecording}>
                <Mic className={`h-4 w-4 ${isRecording ? 'text-red-500' : ''}`} />
              </Button>
              <Button type="button" variant="outline" size="icon" onClick={toggleCamera}>
                <Camera className={`h-4 w-4 ${isCameraOn ? 'text-green-500' : ''}`} />
              </Button>
            </div>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter input for ${tool.name}...`}
              className="mb-2"
            />
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

const usageData = [
  { date: '2023-03-01', usage: 20, efficiency: 80 },
  { date: '2023-03-02', usage: 15, efficiency: 75 },
  { date: '2023-03-03', usage: 25, efficiency: 85 },
  { date: '2023-03-04', usage: 22, efficiency: 82 },
  { date: '2023-03-05', usage: 30, efficiency: 88 },
  { date: '2023-03-06', usage: 28, efficiency: 86 },
  { date: '2023-03-07', usage: 35, efficiency: 90 },
];

const toolUsageData = [
  { name: 'Tableau', value: 30 },
  { name: 'Claude 3', value: 40 },
  { name: 'Jasper', value: 20 },
  { name: 'Other Tools', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const EmployeeDashboard = () => {
  const [tools, setTools] = useState([
    { id: 'tool1', name: 'Tableau', category: 'Analytics' },
    { id: 'tool2', name: 'Claude 3', category: 'AI Language Model' },
    { id: 'tool3', name: 'Jasper', category: 'Content Generation' },
  ]);

  const [showAddTool, setShowAddTool] = useState(false);
  const [newToolName, setNewToolName] = useState('');
  const [newToolCategory, setNewToolCategory] = useState('');

  const onDragEnd = useCallback((result) => {
    if (!result.destination) return;
    const items = Array.from(tools);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTools(items);
  }, [tools]);

  const handleAddTool = useCallback(() => {
    if (newToolName && newToolCategory) {
      setTools(prevTools => [
        ...prevTools,
        { id: `tool${prevTools.length + 1}`, name: newToolName, category: newToolCategory }
      ]);
      setNewToolName('');
      setNewToolCategory('');
      setShowAddTool(false);
    }
  }, [newToolName, newToolCategory]);

  const handleRemoveTool = useCallback((id) => {
    setTools(prevTools => prevTools.filter(tool => tool.id !== id));
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
              <h4 className="text-lg font-semibold text-orange-700">Your AI Tools</h4>
              <Button onClick={() => setShowAddTool(true)} className="bg-orange-500 hover:bg-orange-600">
                <Plus className="mr-2 h-4 w-4" /> Add New Tool
              </Button>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="tools" direction="horizontal">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-wrap gap-4">
                    {tools.map((tool, index) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Tool Usage Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={usageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="usage" stroke="#f97316" activeDot={{ r: 8 }} name="Usage (hours)" />
                      <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#4ade80" name="Efficiency (%)" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tool Usage Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={toolUsageData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {toolUsageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Productivity Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Your AI tool usage has increased by 25% this week, leading to a 15% boost in overall productivity!</p>
                <h5 className="font-semibold mb-2">Recommendations:</h5>
                <ul className="list-disc list-inside">
                  <li>Try integrating Tableau with your project management tool for better data visualization.</li>
                  <li>Explore advanced features of Claude 3 for more efficient content generation.</li>
                  <li>Consider adding a project planning AI tool to complement your current toolkit.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={showAddTool} onOpenChange={setShowAddTool}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New AI Tool</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right">
                Name
              </label>
              <Input
                id="name"
                value={newToolName}
                onChange={(e) => setNewToolName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="category" className="text-right">
                Category
              </label>
              <Input
                id="category"
                value={newToolCategory}
                onChange={(e) => setNewToolCategory(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogDescription>
            This will add a new AI tool to your workspace.
          </DialogDescription>
          <Button onClick={handleAddTool} className="bg-orange-500 hover:bg-orange-600">Add Tool</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeDashboard;
