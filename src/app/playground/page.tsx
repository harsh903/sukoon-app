'use client';

import { Gamepad, Brain, Puzzle, Heart, Timer, Star } from 'lucide-react';

export default function PlaygroundPage() {
  const games = [
    {
      title: "Mindfulness Meditation",
      description: "A peaceful meditation game to help you relax and focus",
      icon: <Heart className="h-6 w-6 text-teal-600" />,
      comingSoon: false,
      href: "/playground/meditation"
    },
    {
      title: "Memory Challenge",
      description: "Exercise your brain with memory-enhancing activities",
      icon: <Brain className="h-6 w-6 text-emerald-600" />,
      comingSoon: true,
      href: "/playground/memory"
    },
    {
      title: "Stress Relief Puzzles",
      description: "Engaging puzzles designed to reduce anxiety",
      icon: <Puzzle className="h-6 w-6 text-blue-600" />,
      comingSoon: true,
      href: "/playground/puzzles"
    },
    {
      title: "Breathing Exercise Game",
      description: "Interactive breathing exercises with calming visuals",
      icon: <Timer className="h-6 w-6 text-purple-600" />,
      comingSoon: true,
      href: "/playground/breathing"
    },
    {
      title: "Focus Flow",
      description: "Simple games to improve concentration and mindfulness",
      icon: <Star className="h-6 w-6 text-amber-600" />,
      comingSoon: true,
      href: "/playground/focus"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-sage-50 to-blue-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad className="h-8 w-8 text-teal-600" />
            <h1 className="text-3xl font-bold text-teal-900">
              Wellness Playground
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of mindfulness games and activities designed to reduce stress,
            improve focus, and promote emotional well-being.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg">
                  {game.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{game.title}</h3>
                  <p className="text-sm text-gray-600">{game.description}</p>
                </div>
              </div>
              <button
                className={`w-full px-4 py-2 rounded-lg transition-all text-center ${
                  game.comingSoon
                    ? 'border-2 border-gray-300 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-teal-500 to-emerald-400 text-white hover:opacity-90'
                }`}
                disabled={game.comingSoon}
              >
                {game.comingSoon ? 'Coming Soon' : 'Play Now'}
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-teal-900 mb-8 text-center">
            Benefits of Wellness Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Stress Reduction",
                description: "Engaging activities designed to lower stress and anxiety levels"
              },
              {
                title: "Better Focus",
                description: "Improve concentration through mindful gaming experiences"
              },
              {
                title: "Emotional Balance",
                description: "Activities that help regulate emotions and promote calm"
              },
              {
                title: "Mental Clarity",
                description: "Clear your mind with purposeful play and meditation"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-400 mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            New games and activities are added regularly. Check back often for updates!
          </p>
          <div className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors">
            <Star className="h-5 w-5" />
            <span>Coming Soon: Daily Challenges and Achievements</span>
          </div>
        </div>
      </div>
    </div>
  );
}