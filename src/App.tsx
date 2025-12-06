import { useState } from 'react';
import type { Story } from './types';
import { HomeScreen } from './screens/HomeScreen';
import { PlayerScreen } from './screens/PlayerScreen';
import { QuizScreen } from './screens/QuizScreen';
import { CallScreen } from './screens/CallScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { BottomNav } from './components/layout/BottomNav';

import type { Screen } from './types';

export default function App() {
  const [screen, setScreen] = useState<Screen>('HOME');
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const navigateToPlayer = (story: Story) => {
    setSelectedStory(story);
    setScreen('PLAYER');
  };



  const goHome = () => {
    setScreen('HOME');
    setActiveTab('Home');
  };

  return (
    <div className="app flex justify-center min-h-screen w-screen max-w-full overflow-x-hidden bg-gray-100 font-sans text-gray-900">
      <div className="w-full  bg-white shadow-2xl overflow-hidden relative min-h-screen flex flex-col">
        
        {/* Screen Routing */}
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {screen === 'HOME' && <HomeScreen onPlay={navigateToPlayer} />}
          {screen === 'PLAYER' && selectedStory && <PlayerScreen story={selectedStory} onBack={goHome} />}
          {screen === 'QUIZ' && <QuizScreen onBack={goHome} />}
          {screen === 'CALL' && <CallScreen />}
          {screen === 'PROFILE' && <ProfileScreen />}
        </div>
        
        {/* Bottom Navigation */}
        {screen !== 'PLAYER' && (
          <BottomNav 
            activeTab={activeTab} 
            onTabChange={(tab: string) => {
              setActiveTab(tab);
              if (tab === 'Home') setScreen('HOME');
              if (tab === 'Learn') setScreen('QUIZ');
              if (tab === 'Call') setScreen('CALL');
              if (tab === 'Profile') setScreen('PROFILE');
            }} 
          />
        )}
      </div>
    </div>
  );
}

