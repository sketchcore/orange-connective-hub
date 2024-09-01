import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ResizableBox } from 'react-resizable';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AIToolWidget = ({ id, tool }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating AI tool processing
    setOutput(`Processed by ${tool.name}: ${input}`);
  };

  return (
    <ResizableBox width={300} height={400} minConstraints={[200, 200]} maxConstraints={[500, 600]}>
      <Card className="h-full overflow-auto">
        <CardHeader>
          <CardTitle>{tool.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
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
  { date: '2023-03-01', usage: 20 },
  { date: '2023-03-02', usage: 15 },
  { date: '2023-03-03', usage: 25 },
  { date: '2023-03-04', usage: 22 },
  { date: '2023-03-05', usage: 30 },
  { date: '2023-03-06', usage: 28 },
  { date: '2023-03-07', usage: 35 },
];

const EmployeeDashboard = () => {
  const [tools, setTools] = useState([
    { id: 'tool1', name: 'Tableau', category: 'Analytics' },
    { id: 'tool2', name: 'Claude 3', category: 'AI Language Model' },
    { id: 'tool3', name: 'Jasper', category: 'Content Generation' },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tools);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTools(items);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hello Product Designer Leon Lee!</h2>
      <h3 className="text-xl font-semibold mb-4">Your AI Toolkit Dashboard</h3>
      
      <Tabs defaultValue="workspace">
        <TabsList>
          <TabsTrigger value="workspace">Workspace</TabsTrigger>
          <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="workspace">
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
                          <AIToolWidget id={tool.id} tool={tool} />
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
          <Card>
            <CardHeader>
              <CardTitle>Your AI Tool Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="usage" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmployeeDashboard;