export interface MoodEntry {
    id: string;
    userId: string;
    date: string;
    mood: number;
    activities: string[];
    sleep: number;
    notes?: string;
    createdAt: string;
  }
  
  export interface Activity {
    id: string;
    name: string;
    type: 'meditation' | 'exercise' | 'reading' | 'social' | 'music' | 'other';
    duration: number;
    impact: number;
  }
  
  export interface MoodStats {
    averageMood: number;
    topActivities: Activity[];
    moodDistribution: {
      name: string;
      value: number;
      color: string;
    }[];
    sleepQuality: number;
  }
  
  export interface WellnessRecommendation {
    type: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    basedonActivity?: string;
  }