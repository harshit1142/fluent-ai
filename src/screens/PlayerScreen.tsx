import { useEffect, useState } from 'react';
import { ArrowLeft, MoreHorizontal, Play, Pause, SkipBack, SkipForward, Heart, Volume2 } from 'lucide-react';
import type { Story } from '../types/index';

interface PlayerScreenProps {
  story: Story;
  onBack: () => void;
}

function parseDurationToSeconds(d?: string | number) {
  if (!d) return 138; 
  if (typeof d === 'number') return Math.round(d * 60);
  if (typeof d === 'string') {
    if (d.includes(':')) {
      const parts = d.split(':').map((p) => parseInt(p, 10));
      if (parts.length === 2) return parts[0] * 60 + parts[1];
      if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    const n = parseInt(d, 10);
    if (!isNaN(n)) return n;
  }
  return 138;
}

export function PlayerScreen({ story, onBack }: PlayerScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); 
  const duration = parseDurationToSeconds((story as any).duration);

  useEffect(() => {
    let timer: number | undefined;
    if (isPlaying) {
      timer = window.setInterval(() => {
        setProgress((p) => {
          if (p >= duration) {
            window.clearInterval(timer);
            setIsPlaying(false);
            return duration;
          }
          return p + 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [isPlaying, duration]);

  useEffect(() => {
    setProgress(0);
    setIsPlaying(false);
  }, [story]);

  const formatTime = (s: number) => {
    const mm = Math.floor(s / 60)
      .toString()
      .padStart(2, '0');
    const ss = Math.floor(s % 60)
      .toString()
      .padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const progressPercent = Math.min(100, Math.round((progress / Math.max(1, duration)) * 100));

  return (
    <div className="h-full flex flex-col bg-white animate-in duration-300">
      <div className="px-4 py-4 flex items-center justify-between sticky top-0 bg-white z-10 border-b border-gray-100">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-50 transition">
          <ArrowLeft size={20} className="text-gray-700" />
        </button>
        <div className="text-center">
          <div className="text-xs text-gray-500">NOW PLAYING</div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-50 transition">
          <MoreHorizontal size={20} className="text-gray-700" />
        </button>
      </div>

      <div className="flex-1 px-6 py-6 flex flex-col items-center overflow-auto">
        <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl mb-6 ring-8 ring-green-50">
          <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
        </div>

        <div className="w-full max-w-xl">
          <h2 className="text-xl font-bold text-gray-900">{story.title}</h2>
          <p className="text-sm text-gray-600 mt-1">A heartwarming story about friendship and courage</p>

          <div className="mt-4 flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition">
              <span className="text-sm font-semibold text-green-600">Test Your Understanding</span>
              <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">7 Questions</span>
            </button>
            <button className="ml-auto p-2 rounded-full hover:bg-gray-50 transition">
              <Heart size={18} className="text-gray-600" />
            </button>
          </div>

          <div className="mt-6">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: `${progressPercent}%` }} />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <SkipBack size={20} />
            </button>
            <button
              onClick={() => setIsPlaying((s) => !s)}
              className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition"
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} />}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <SkipForward size={20} />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-gray-50 transition">
                <Volume2 size={18} />
              </button>
            </div>
            <div className="text-xs text-gray-500">{formatTime(progress)} / {formatTime(duration)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}