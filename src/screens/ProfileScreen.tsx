import { User } from 'lucide-react';

export function ProfileScreen() {
  return (
    <div className="h-full flex flex-col bg-white">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 py-4">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full ring-4 ring-white shadow-md mb-2 overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=ProfileUser"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm text-gray-500">Profile</div>
            <div className="font-bold text-lg text-gray-900 mt-1">Felix</div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-6 py-6">
        <div className="max-w-5xl mx-auto">
          {/* Top stat bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
              <div className="text-xs text-blue-500 font-bold">0%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4 shadow-sm">
              <div className="text-xs text-emerald-600 font-bold">1</div>
              <div className="text-xs text-gray-500">Level</div>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 shadow-sm">
              <div className="text-xs text-pink-600 font-bold">22 mins</div>
              <div className="text-xs text-gray-500">Time Spent</div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 shadow-sm">
              <div className="text-xs text-amber-600 font-bold">0</div>
              <div className="text-xs text-gray-500">XP Points</div>
            </div>
          </div>

          {/* Options list */}
          <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100 mb-6">
            {[
              'Manage Membership',
              'Student Report',
              'Leaderboard',
              'Personal Information',
              'Customer Support',
              'Invite Friends',
            ].map((item) => (
              <div key={item} className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                    <User size={18} />
                  </div>
                  <div className="text-sm text-gray-700">{item}</div>
                </div>
                <div className="text-gray-300">›</div>
              </div>
            ))}
          </div>

          {/* Achievements grid */}
          <div>
            <h4 className="text-sm font-bold text-gray-700 mb-3">Achievements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-6 shadow-md">
                <div className="text-sm font-bold">Journey Starter</div>
                <div className="text-xs mt-2">Unlocked</div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-400 shadow-inner">
                <div className="text-sm font-bold">Rising Star</div>
                <div className="text-xs mt-2">Locked</div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-400 shadow-inner">
                <div className="text-sm font-bold">Vocab Wizard</div>
                <div className="text-xs mt-2">Locked</div>
              </div>

              <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-400 shadow-inner">
                <div className="text-sm font-bold">Grammar Guru</div>
                <div className="text-xs mt-2">Locked</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-24" />
    </div>
  );
}
