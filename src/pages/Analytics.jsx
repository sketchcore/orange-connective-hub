import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Smart Analytics', usage: 4000 },
  { name: 'AI Customer Service', usage: 3000 },
  { name: 'Predictive Maintenance', usage: 2000 },
  { name: 'AI Chatbot', usage: 2780 },
  { name: 'Data Visualization', usage: 1890 },
  { name: 'Sentiment Analysis', usage: 2390 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Tool Usage Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>AI Tool Usage in the Past Month</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usage" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;