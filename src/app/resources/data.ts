// Resource Types and Interfaces
export interface Resource {
    id: string;
    title: string;
    type: 'article' | 'video';
    category: string;
    description: string;
    duration?: string;
    readTime?: string;
    likes: number;
    author: {
      name: string;
      role: string;
      image?: string;
    };
    publishDate: string;
    thumbnail?: string;
    featured?: boolean;
    content?: string;
    videoUrl?: string;
  }
  
  // Fixed Resource Data
  export const RESOURCES: Resource[] = [
    {
      id: '1',
      title: 'Understanding and Managing Anxiety',
      type: 'article',
      category: 'Anxiety',
      description: 'Learn about the common triggers of anxiety and effective coping strategies for daily life.',
      readTime: '8 min read',
      likes: 245,
      author: {
        name: 'Dr. Sarah Johnson',
        role: 'Clinical Psychologist',
      },
      publishDate: '2024-01-15',
      featured: true,
      content: `
        <h2>Understanding Anxiety</h2>
        <p>Anxiety is a natural response to stress and can be beneficial in certain situations. However, when anxiety becomes overwhelming, it can interfere with daily life. Understanding your anxiety triggers is the first step toward managing them effectively.</p>
        
        <h2>Common Symptoms</h2>
        <ul>
          <li>Excessive worrying about everyday situations</li>
          <li>Restlessness or feeling on edge</li>
          <li>Difficulty concentrating</li>
          <li>Sleep problems</li>
          <li>Physical symptoms like rapid heartbeat or sweating</li>
        </ul>
  
        <h2>Management Strategies</h2>
        <p>There are several effective strategies for managing anxiety:</p>
        <ul>
          <li>Deep breathing exercises</li>
          <li>Regular physical exercise</li>
          <li>Mindfulness meditation</li>
          <li>Maintaining a regular sleep schedule</li>
          <li>Limiting caffeine and alcohol</li>
        </ul>
      `
    },
    {
      id: '2',
      title: 'Guided Meditation for Stress Relief',
      type: 'video',
      category: 'Mindfulness',
      description: 'A calming 15-minute guided meditation session to help reduce stress and promote relaxation.',
      duration: '15 min',
      likes: 342,
      author: {
        name: 'Maria Chen',
        role: 'Mindfulness Coach',
      },
      publishDate: '2024-01-20',
      videoUrl: 'https://example.com/meditation-video',
      featured: true
    },
    {
      id: '3',
      title: 'Building Healthy Sleep Habits',
      type: 'article',
      category: 'Sleep',
      description: 'Discover practical tips for improving your sleep quality and establishing a healthy sleep routine.',
      readTime: '10 min read',
      likes: 189,
      author: {
        name: 'Dr. Michael Brown',
        role: 'Sleep Specialist',
      },
      publishDate: '2024-01-18',
      content: `
        <h2>The Importance of Sleep</h2>
        <p>Quality sleep is essential for both mental and physical health. Poor sleep can affect mood, cognitive function, and overall well-being.</p>
  
        <h2>Tips for Better Sleep</h2>
        <ul>
          <li>Maintain a consistent sleep schedule</li>
          <li>Create a relaxing bedtime routine</li>
          <li>Optimize your sleep environment</li>
          <li>Limit screen time before bed</li>
          <li>Watch your diet and exercise habits</li>
        </ul>
      `
    },
    {
      id: '4',
      title: 'Mindful Breathing Exercises',
      type: 'video',
      category: 'Mindfulness',
      description: 'Learn simple breathing techniques to reduce anxiety and increase mindfulness.',
      duration: '10 min',
      likes: 276,
      author: {
        name: 'Emma Wilson',
        role: 'Yoga Instructor',
      },
      publishDate: '2024-01-22',
      videoUrl: 'https://example.com/breathing-video'
    },
    {
      id: '5',
      title: 'Understanding Depression: Signs and Support',
      type: 'article',
      category: 'Depression',
      description: 'Learn about the signs of depression and ways to seek support and treatment.',
      readTime: '12 min read',
      likes: 421,
      author: {
        name: 'Dr. James Wilson',
        role: 'Psychiatrist',
      },
      publishDate: '2024-01-25',
      content: `
        <h2>Recognizing Depression</h2>
        <p>Depression is more than just feeling sad. It's a complex mental health condition that affects millions of people worldwide.</p>
  
        <h2>Common Signs</h2>
        <ul>
          <li>Persistent sadness or empty mood</li>
          <li>Loss of interest in activities</li>
          <li>Changes in appetite or weight</li>
          <li>Sleep disturbances</li>
          <li>Difficulty concentrating</li>
        </ul>
  
        <h2>Seeking Help</h2>
        <p>If you're experiencing symptoms of depression, know that help is available...</p>
      `
    },
    {
      id: '6',
      title: 'Morning Yoga for Mental Clarity',
      type: 'video',
      category: 'Self-Care',
      description: 'Start your day with this energizing yoga routine designed to promote mental clarity and emotional balance.',
      duration: '20 min',
      likes: 312,
      author: {
        name: 'Sofia Martinez',
        role: 'Wellness Coach',
      },
      publishDate: '2024-01-28',
      videoUrl: 'https://example.com/yoga-video'
    },
    {
      id: '7',
      title: 'Building Resilience in Difficult Times',
      type: 'article',
      category: 'Mental Wellness',
      description: 'Strategies for developing emotional resilience and coping with life\'s challenges.',
      readTime: '15 min read',
      likes: 367,
      author: {
        name: 'Dr. Rachel Lee',
        role: 'Psychologist',
      },
      publishDate: '2024-01-30',
      content: `
        <h2>What is Resilience?</h2>
        <p>Resilience is the ability to bounce back from adversity and adapt to challenging circumstances.</p>
  
        <h2>Building Resilience</h2>
        <ul>
          <li>Develop strong relationships</li>
          <li>Practice self-compassion</li>
          <li>Maintain perspective</li>
          <li>Set realistic goals</li>
          <li>Learn from experience</li>
        </ul>
      `
    },
    {
      id: '8',
      title: 'Stress Management at Work',
      type: 'video',
      category: 'Stress Management',
      description: 'Quick and effective techniques for managing workplace stress.',
      duration: '12 min',
      likes: 289,
      author: {
        name: 'David Chen',
        role: 'Corporate Wellness Consultant',
      },
      publishDate: '2024-02-01',
      videoUrl: 'https://example.com/workplace-stress'
    }
  ];
  
  export const RESOURCE_CATEGORIES = [
    { name: 'Anxiety', count: RESOURCES.filter(r => r.category === 'Anxiety').length },
    { name: 'Depression', count: RESOURCES.filter(r => r.category === 'Depression').length },
    { name: 'Mindfulness', count: RESOURCES.filter(r => r.category === 'Mindfulness').length },
    { name: 'Sleep', count: RESOURCES.filter(r => r.category === 'Sleep').length },
    { name: 'Stress Management', count: RESOURCES.filter(r => r.category === 'Stress Management').length },
    { name: 'Self-Care', count: RESOURCES.filter(r => r.category === 'Self-Care').length },
    { name: 'Mental Wellness', count: RESOURCES.filter(r => r.category === 'Mental Wellness').length }
  ];