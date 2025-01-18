'use client';

import { 
  CheckSquare, 
  Trophy, 
  Target, 
  Calendar,
  Heart,
  Brain,
  Medal,
  Sparkles 
} from 'lucide-react';

export default function ChallengesPage() {
  const dailyChallenges = [
    {
      title: "Morning Mindfulness",
      description: "Start your day with 5 minutes of mindful breathing",
      icon: <Heart className="h-6 w-6 text-rose-600" />,
      points: 50,
      completed: false,
      timeEstimate: "5 mins"
    },
    {
      title: "Brain Booster",
      description: "Complete one memory exercise challenge",
      icon: <Brain className="h-6 w-6 text-emerald-600" />,
      points: 30,
      completed: true,
      timeEstimate: "10 mins"
    },
    {
      title: "Gratitude Journal",
      description: "Write down three things you're grateful for today",
      icon: <CheckSquare className="h-6 w-6 text-blue-600" />,
      points: 20,
      completed: false,
      timeEstimate: "3 mins"
    }
  ];

  const weeklyGoals = [
    {
      title: "Meditation Master",
      description: "Complete 5 meditation sessions this week",
      progress: 3,
      total: 5,
      reward: "Gold Badge",
      icon: <Trophy className="h-6 w-6 text-amber-600" />
    },
    {
      title: "Consistency King",
      description: "Log your mood for 7 days straight",
      progress: 5,
      total: 7,
      reward: "150 Points",
      icon: <Target className="h-6 w-6 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Medal className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-indigo-900">
              Daily Challenges & Tasks
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete daily challenges to improve your mental well-being and earn rewards.
            Track your progress and maintain your wellness streak!
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Trophy className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Current Streak</p>
                <p className="text-2xl font-bold text-indigo-900">5 Days</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-purple-900">750</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-100 rounded-lg">
                <Medal className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed Tasks</p>
                <p className="text-2xl font-bold text-pink-900">24</p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Challenges Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">
            Today's Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                    {challenge.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                    <p className="text-sm text-gray-600">{challenge.timeEstimate}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-purple-600">{challenge.points} points</span>
                  <span className={`text-sm ${challenge.completed ? 'text-green-600' : 'text-gray-400'}`}>
                    {challenge.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>
                <button
                  className={`w-full px-4 py-2 rounded-lg transition-all text-center ${
                    challenge.completed
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90'
                  }`}
                  disabled={challenge.completed}
                >
                  {challenge.completed ? 'Done' : 'Complete Challenge'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Goals Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">
            Weekly Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                    <p className="text-sm text-gray-600">Reward: {goal.reward}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{goal.description}</p>
                <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full"
                    style={{ width: `${(goal.progress / goal.total) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">
                  Progress: {goal.progress}/{goal.total}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-indigo-900">Monthly Overview</h2>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-600">January 2025</span>
            </div>
          </div>
          <div className="text-center text-gray-600">
            <p>Your streak calendar will be displayed here</p>
            <p className="text-sm mt-2">Coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
}