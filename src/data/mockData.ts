import type { Story, HumanTutor, AICharacter } from '../types/index';

export const STORIES: Story[] = [
  { id: '1', title: 'Choosing the Right Path', image: 'https://app.speakgenie.com/audiostory/age14-16/coverimages/Choosing%20the%20Right%20Path.png', color: 'bg-emerald-100', duration: '5:10' },
  { id: '2', title: 'The Fountain and the Mayor', image: 'https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20Fountain%20and%20the%20Mayor.png', color: 'bg-blue-100', duration: '4:40' },
  { id: '3', title: 'The Lesson of the Sapling', image: 'https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20Lesson%20of%20the%20Sapling%20%E2%80%93%20A%20Story%20on%20Bad%20Habits.png', color: 'bg-amber-100', duration: '4:15' },
  { id: '4', title: 'The Magical Pot', image: 'https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20Magical%20Pot%20%E2%80%93%20A%20Story%20on%20Letting%20Go.png', color: 'bg-purple-100', duration: '6:00' },
  { id: '5', title: 'The Path of Purpose', image: 'https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20path%20of%20purpose.png', color: 'bg-orange-100', duration: '3:45' },
  { id: '6', title: 'The Three Little Pigs Incident', image: 'https://app.speakgenie.com/audiostory/age14-16/coverimages/The%20Three%20Little%20Pigs%20Incident.png', color: 'bg-sky-100', duration: '7:20' },
  { id: '7', title: 'The Wise Child', image: 'https://app.speakgenie.com/audiostory/age14-16/coverimages/the%20wise%20child.png', color: 'bg-amber-100', duration: '5:50' },
];

export const TUTORS: HumanTutor[] = [
  { id: '1', title: 'Favorite Animals', subtitle: 'Talk about your favorite animals and pets', image: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&q=80', tags: ['Be first!'] },
  { id: '2', title: 'Hobbies & Fun', subtitle: 'Share what you love to do in your free time', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80', tags: ['Be first!'] },
  { id: '3', title: 'School Life', subtitle: 'Chat about school, friends, and learning', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80', tags: [] },
];

export const CHARACTERS: AICharacter[] = [
  { id: '1', name: 'Doraemon', avatar: 'https://app.speakgenie.com/images/Homescreen/Practice%20with%20Ai/doremon.svg', bgColor: 'bg-blue-100' },
  { id: '2', name: 'Spider Man', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Spidey', bgColor: 'bg-red-100' },
  { id: '3', name: 'Shinchan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shin', bgColor: 'bg-yellow-100' },
  { id: '4', name: 'Virat Kohli', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Virat', bgColor: 'bg-green-100' },
  { id: '5', name: 'Shashi Tharoor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Shashi', bgColor: 'bg-orange-100' },
];