import React from 'react';

export default function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
   return (
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
         {icon}
         <h3 className="text-xl font-semibold mt-3">{title}</h3>
         <p className="text-gray-600 mt-2 text-sm">{desc}</p>
      </div>
   );
}
