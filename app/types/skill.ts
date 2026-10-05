export type SkillDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Author {
  name: string;
  avatar: string;
  role: string;
  handle: string;
  rating?: number;
  exchangesCount?: number;
}

export interface Skill {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  difficulty: SkillDifficulty;
  author: Author;
  rating: number;
  reviewsCount: number;
  downloadsCount: number;
  tags: string[];
  featured?: boolean;
  modelCompatibility: string[];
  samplePrompt?: string;
  useCase?: string;
  updatedAt: string;
}
