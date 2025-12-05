import React from 'react';
import { ChevronRight } from 'lucide-react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  onShowAll?: () => void;
  children: React.ReactNode;
}

export function Section({ title, icon, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
           {icon && <div className="p-1.5 bg-white rounded-lg shadow-sm border border-gray-100 text-gray-700">{icon}</div>}
           <h2 className="font-bold text-lg text-gray-800 tracking-tight">{title}</h2>
        </div>
        <button className="text-[#2ecc71] text-xs font-bold flex items-center gap-0.5 hover:opacity-80 transition">
          Show all <ChevronRight size={14} />
        </button>
      </div>
      {children}
    </div>
  );
}