interface ActionIconProps {
  icon: React.ReactNode;
  label: string;
  color: string;
}

export function ActionIcon({ icon, label, color }: ActionIconProps) {
  return (
    <div className="flex flex-col items-center gap-3 min-w-[80px] cursor-pointer group">
      <div className="w-16 h-16 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-center text-gray-700 group-hover:scale-105 group-hover:shadow-md transition-all duration-300 border border-gray-50">
         <span className={`${color} group-hover:scale-110 transition-transform`}>{icon}</span>
      </div>
      <span className="text-[10px] font-bold text-gray-500 text-center w-20 leading-tight group-hover:text-gray-800 transition-colors">{label}</span>
    </div>
  );
}