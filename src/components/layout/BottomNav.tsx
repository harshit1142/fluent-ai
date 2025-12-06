import { Home, Trophy, Phone, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'Home', icon: Home },
    { id: 'Learn', icon: Trophy },
    { id: 'Call', icon: Phone },
    { id: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 pt-3 pb-6 flex justify-between items-end z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button 
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 flex-1 ${isActive ? 'text-[#2ecc71]' : 'text-gray-300 hover:text-gray-400'}`}
          >
            {isActive ? (
                <div className="bg-[#2ecc71] p-1.5 rounded-xl text-white mb-0.5 shadow-lg shadow-green-200 transform scale-110 transition-all">
                     <tab.icon size={20} className="stroke-[2.5px]" />
                </div>
            ) : (
                <tab.icon size={24} className="stroke-[2px]" />
            )}
            <span className={`text-[10px] font-bold ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 hidden'} transition-all duration-300`}>{tab.id}</span>
          </button>
        );
      })}
    </div>
  );
}