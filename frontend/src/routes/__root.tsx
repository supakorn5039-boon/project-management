import Sidebar from '@/components/Sidebar';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
   component: RootLayout,
});

function RootLayout() {
   return (
      <div className="flex min-h-screen bg-[#f6ebe2] text-gray-900">
         <Sidebar />
         <div className="flex flex-col flex-1 ml-[16rem]">
            <main className="flex-1 p-6">
               <Outlet />
            </main>
         </div>
      </div>
   );
}
