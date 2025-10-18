import { Button } from '@/components/ui/button';
import { RoutesPage } from '@/constants/Routes';
import { Link, useLocation, useNavigate } from '@tanstack/react-router';
import { Home, LogOut } from 'lucide-react';

export default function Sidebar() {
   const location = useLocation();
   const navigate = useNavigate();

   const token = localStorage.getItem('token');
   const isDashboardActive = location.pathname === RoutesPage.DASHBOARD;

   if (!token) {
      return null;
   }

   const handleLogout = () => {
      localStorage.clear();
      navigate({ to: RoutesPage.LOGIN });
   };

   return (
      <aside className="fixed left-0 top-0 h-screen w-64 bg-black text-white flex flex-col justify-between">
         <div>
            <div className="flex items-center gap-2 px-6 py-5 cursor-pointer" onClick={() => navigate({ to: '/' })}>
               <div className="bg-orange-500 size-8 rounded-full flex items-center justify-center font-bold text-lg">P</div>
               <span className="text-xl font-semibold">Promage</span>
            </div>

            <nav className="flex flex-col gap-2 px-4">
               <Link
                  to={RoutesPage.DASHBOARD}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition ${
                     isDashboardActive ? 'bg-gray-700' : ''
                  }`}
               >
                  <Home className="size-5" /> Dashboard
               </Link>
            </nav>
         </div>

         <div className="px-4 pb-6">
            <Button
               variant="ghost"
               className="w-full flex items-center justify-start gap-3 text-white cursor-pointer"
               onClick={handleLogout}
            >
               <LogOut className="size-5" /> Logout
            </Button>
         </div>
      </aside>
   );
}
