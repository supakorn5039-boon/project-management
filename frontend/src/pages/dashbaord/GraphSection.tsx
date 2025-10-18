import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const progressData = [
   { name: 'Jan', progress: 45 },
   { name: 'Feb', progress: 60 },
   { name: 'Mar', progress: 75 },
   { name: 'Apr', progress: 80 },
   { name: 'May', progress: 90 },
   { name: 'Jun', progress: 95 },
];

export default function GraphSection() {
   return (
      <Card className="p-6">
         <CardHeader className="flex items-center justify-between">
            <div>
               <CardTitle className="text-xl font-bold">Project Progress Overview</CardTitle>
               <p className="text-sm text-gray-500">Last 6 months</p>
            </div>
            <BarChart3 className="w-6 h-6 text-gray-400" />
         </CardHeader>
         <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
               <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Line type="monotone" dataKey="progress" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
               </LineChart>
            </ResponsiveContainer>
         </CardContent>
      </Card>
   );
}
