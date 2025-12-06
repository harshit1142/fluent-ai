export type Screen = 'HOME' | 'PLAYER' | 'QUIZ' | 'CALL' | 'PROFILE';

export interface Story {
  id: string;
  title: string;
  author?: string;
  image: string;
  color: string;
  duration: string;
}

export interface HumanTutor {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

export interface AICharacter {
  id: string;
  name: string;
  avatar: string;
  bgColor: string;
}