import { Moon, Diamond, Sparkles, MoreHorizontal, Video, Phone, BookOpen, Bot } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { ActionIcon } from '../components/ui/ActionIcon';
import { STORIES } from '../data/mockData';
import type { Story } from '../types';

interface HomeScreenProps {
  onPlay: (s: Story) => void;
}

export function HomeScreen({ onPlay }: HomeScreenProps) {
  return (
    <div className="flex flex-col mb-20 animate-fade-in max-w-full">
      {/* Header Section */}
      <div className="bg-[#2ecc71] pt-10 mb-10 pb-10 px-6 rounded-b-[2.5rem] relative">
        <div className="flex flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-200 border-2 border-white overflow-hidden shadow-sm">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            </div>
            <div className="text-white">
              <p className="text-xs opacity-90 font-medium">Good Afternoon</p>
              <h1 className="text-xl font-bold leading-none tracking-tight">Felix</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition">
              <Moon size={16} />
            </button>
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white font-bold text-sm">
              <Diamond size={14} className="fill-yellow-400 text-yellow-400" />
              <span>30</span>
            </div>
            <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1.5 rounded-lg shadow-sm">
              PRO
            </div>
          </div>
        </div>

        {/* XP Progress Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold border border-white/10">
              L1
            </div>
            <p className="text-white text-xs font-bold tracking-wider uppercase opacity-90">XP Progress</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="h-2.5 bg-black/20 rounded-full overflow-hidden">
                <div className="h-full w-[0%] bg-white rounded-full transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between mt-1.5 text-[10px] text-white/90 font-medium">
                <span>0/100 XP</span>
                <span>Next: L2</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
               <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg text-white text-xs font-bold">
                  <Sparkles size={10} className="fill-current" />
                  <span>0 XP</span>
               </div>
               <button className="text-white opacity-80 hover:opacity-100">
                 <MoreHorizontal size={18} />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Circles */}
      <div className="-mt-9 px-4 flex justify-between gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden py-2">
        <ActionIcon icon={<Video size={20} />} label="Video Learning" color="text-blue-500" />
        <ActionIcon icon={<Phone size={20} />} label="Peer Calls" color="text-cyan-500" />
        <ActionIcon icon={<BookOpen size={20} />} label="Stories" color="text-orange-500" />
        <ActionIcon icon={<Bot size={20} />} label="AI Calls" color="text-red-500" />
      </div>

      <div className="space-y-8 mt-4">
        <Section title="Audio Stories" onShowAll={() => {}}>
          <div className="flex gap-4 overflow-x-auto px-6 pb-4 [&::-webkit-scrollbar]:hidden">
            {STORIES.map((story) => (
              <div key={story.id} className="flex-shrink-0 w-28 flex flex-col gap-2 cursor-pointer group" onClick={() => onPlay(story)}>
                <div className={`w-28 h-28 rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ${story.color}`}>
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xs font-bold text-gray-800 leading-tight line-clamp-2 text-center px-1">
                  {story.title}
                </h3>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 2: Practice with Humans */}
        <Section title="Practice with Humans" icon={<Phone size={18} className="text-purple-500" />}>
          <div className="flex gap-4 overflow-x-auto px-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex-shrink-0 w-80 h-48 rounded-2xl overflow-hidden relative shadow-md group">
              <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&q=80" alt="Favorite Animals" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-gray-900/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wide">
                Be first!
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 pt-10">
                <h3 className="text-white font-bold text-sm mb-0.5">Favorite Animals</h3>
                <p className="text-white/80 text-[10px] mb-3 line-clamp-1">Talk about your favorite animals and pets</p>
                <button className="w-full bg-white/95 text-green-600 font-bold text-xs py-2.5 rounded-full hover:bg-white transition-colors shadow-sm">
                  Join & Start Call
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 w-80 h-48 rounded-2xl overflow-hidden relative shadow-md group">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80" alt="Hobbies & Fun" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-gray-900/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wide">
                Be first!
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 pt-10">
                <h3 className="text-white font-bold text-sm mb-0.5">Hobbies & Fun</h3>
                <p className="text-white/80 text-[10px] mb-3 line-clamp-1">Share what you love to do in your free time</p>
                <button className="w-full bg-white/95 text-green-600 font-bold text-xs py-2.5 rounded-full hover:bg-white transition-colors shadow-sm">
                  Join & Start Call
                </button>
              </div>
            </div>

            <div className="flex-shrink-0 w-80 h-48 rounded-2xl overflow-hidden relative shadow-md group">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80" alt="School Life" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 pt-10">
                <h3 className="text-white font-bold text-sm mb-0.5">School Life</h3>
                <p className="text-white/80 text-[10px] mb-3 line-clamp-1">Chat about school, friends, and learning</p>
                <button className="w-full bg-white/95 text-green-600 font-bold text-xs py-2.5 rounded-full hover:bg-white transition-colors shadow-sm">
                  Join
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 3: Practice with AI */}
        <Section title="Practice with AI" icon={<Bot size={18} className="text-pink-500" />}>
          <div className="flex gap-3 overflow-x-auto px-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex-shrink-0 w-24 flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-all">
                <img src="https://app.speakgenie.com/images/Homescreen/Practice%20with%20Ai/doremon.svg" alt="Doraemon" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Talk with</p>
                <p className="text-xs font-bold text-gray-800 line-clamp-1">Doraemon</p>
              </div>
            </div>

            <div className="flex-shrink-0 w-24 flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-all">
                <img src="https://app.speakgenie.com/images/Homescreen/Practice%20with%20Ai/spiderman.svg" alt="Spider Man" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Talk with</p>
                <p className="text-xs font-bold text-gray-800 line-clamp-1">Spider Man</p>
              </div>
            </div>

            <div className="flex-shrink-0 w-24 flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-24 h-24 bg-yellow-100 rounded-2xl flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-all">
                <img src="https://app.speakgenie.com/images/call/shinchan.png" alt="Shinchan" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Talk with</p>
                <p className="text-xs font-bold text-gray-800 line-clamp-1">Shinchan</p>
              </div>
            </div>

            <div className="flex-shrink-0 w-24 flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-all">
                <img src="https://app.speakgenie.com/images/call/king_virat_kohlii.webp" alt="Virat Kohli" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Talk with</p>
                <p className="text-xs font-bold text-gray-800 line-clamp-1">Virat Kohli</p>
              </div>
            </div>

            <div className="flex-shrink-0 w-24 flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-24 h-24 bg-orange-100 rounded-2xl flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-all">
                <img src="https://app.speakgenie.com/images/call/shashi__tharoor.webp" alt="Shashi Tharoor" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Talk with</p>
                <p className="text-xs font-bold text-gray-800 line-clamp-1">Shashi Tharoor</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}