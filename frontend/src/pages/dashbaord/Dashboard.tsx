import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, AlertTriangle, ArrowUpRight, CheckCircle2, Clock, Hourglass, Users } from 'lucide-react';
import React from 'react';

export default function Dashboard(): React.ReactElement {
   return (
      <div className="space-y-8">
         <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-4">
               <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Active Projects</CardTitle>
                  <Activity className="size-6 text-blue-500" />
               </CardHeader>
               <CardContent>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                  <div className="flex items-center text-sm text-green-600">
                     <ArrowUpRight className="w-4 h-4 mr-1" /> +2 new this week
                  </div>
               </CardContent>
            </Card>

            <Card className="p-4">
               <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Tasks in Progress</CardTitle>
                  <Clock className="size-6 text-yellow-500" />
               </CardHeader>
               <CardContent>
                  <p className="text-3xl font-bold text-gray-900">85</p>
                  <div className="flex items-center text-sm text-green-600">
                     <ArrowUpRight className="w-4 h-4 mr-1" /> +5 since yesterday
                  </div>
               </CardContent>
            </Card>

            <Card className="p-4">
               <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Completed Tasks</CardTitle>
                  <CheckCircle2 className="size-6 text-green-500" />
               </CardHeader>
               <CardContent>
                  <p className="text-3xl font-bold text-gray-900">142</p>
                  <div className="flex items-center text-sm text-green-600">
                     <ArrowUpRight className="w-4 h-4 mr-1" /> +12 this week
                  </div>
               </CardContent>
            </Card>

            <Card className="p-4">
               <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Team Members</CardTitle>
                  <Users className="size-6 text-purple-500" />
               </CardHeader>
               <CardContent>
                  <p className="text-3xl font-bold text-gray-900">26</p>
                  <div className="flex items-center text-sm text-green-600">
                     <ArrowUpRight className="w-4 h-4 mr-1" /> +3 joined
                  </div>
               </CardContent>
            </Card>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-5">
               <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">Completed</CardTitle>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
               </CardHeader>
               <CardContent>
                  <p className="text-2xl font-bold text-gray-900">68%</p>
                  <p className="text-sm text-gray-500">of all tasks</p>
               </CardContent>
            </Card>

            <Card className="p-5">
               <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">In Progress</CardTitle>
                  <Clock className="w-5 h-5 text-yellow-500" />
               </CardHeader>
               <CardContent>
                  <p className="text-2xl font-bold text-gray-900">22%</p>
                  <p className="text-sm text-gray-500">actively being worked on</p>
               </CardContent>
            </Card>

            <Card className="p-5">
               <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">Pending</CardTitle>
                  <Hourglass className="w-5 h-5 text-blue-500" />
               </CardHeader>
               <CardContent>
                  <p className="text-2xl font-bold text-gray-900">7%</p>
                  <p className="text-sm text-gray-500">awaiting start</p>
               </CardContent>
            </Card>

            <Card className="p-5">
               <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">Overdue</CardTitle>
                  <AlertTriangle className="w-5 h-5 text-red-500" />
               </CardHeader>
               <CardContent>
                  <p className="text-2xl font-bold text-gray-900">3%</p>
                  <p className="text-sm text-gray-500">need attention</p>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}
