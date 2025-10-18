import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/ui/FeatureCard';
import { useNavigate } from '@tanstack/react-router';
import { BarChart3, Calendar, ClipboardList, Users } from 'lucide-react';

export default function Home() {
   const navigate = useNavigate();

   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6ebe2] text-gray-900 px-6 overflow-hidden">
         <div className="max-w-3xl text-center space-y-6 animate-fadeInUp">
            <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
               Manage Projects <span className="text-[#d97706]">Smarter</span>, Not Harder
            </h1>

            <p className="text-lg text-gray-600">
               Organize your team, track tasks, and deliver projects on time with your all-in-one project management dashboard.
            </p>

            <div className="flex justify-center gap-4 pt-4">
               <Button
                  onClick={() => navigate({ to: '/dashboard' })}
                  className="bg-[#d97706] hover:bg-[#b45309] text-white px-6 py-3 rounded-full text-lg shadow-md transition-all duration-300 hover:scale-105 cursor-pointer"
               >
                  Go to Dashboard
               </Button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 max-w-4xl animate-fadeIn delay-300">
            <FeatureCard
               icon={<ClipboardList className="w-8 h-8 text-[#d97706]" />}
               title="Task Management"
               desc="Easily create, assign, and track tasks for your team."
            />
            <FeatureCard
               icon={<Users className="w-8 h-8 text-[#d97706]" />}
               title="Team Collaboration"
               desc="Communicate and share updates in one place."
            />
            <FeatureCard
               icon={<Calendar className="w-8 h-8 text-[#d97706]" />}
               title="Smart Scheduling"
               desc="Stay ahead with clear project timelines and deadlines."
            />
            <FeatureCard
               icon={<BarChart3 className="w-8 h-8 text-[#d97706]" />}
               title="Insightful Analytics"
               desc="Monitor progress and performance effortlessly."
            />
         </div>
      </div>
   );
}
