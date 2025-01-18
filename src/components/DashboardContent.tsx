'use client';

import { 
  Bot, 
  BarChart, 
  Users, 
  Gamepad, 
  BookOpen, 
  CheckSquare,
  ArrowRight,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardContent() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* AI Buddy Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-teal-100 rounded-lg">
              <Bot className="h-6 w-6 text-teal-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Buddy</h3>
              <p className="text-sm text-gray-600">Start a conversation</p>
            </div>
          </div>
          <Link href="/ai-counselor" className="w-full inline-block">
            <div className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all text-center flex items-center justify-center gap-2">
              Chat Now
              <Bot className="h-4 w-4" />
            </div>
          </Link>
        </div>

        {/* Mood Tracking Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <BarChart className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Mood Tracking</h3>
              <p className="text-sm text-gray-600">View your progress</p>
            </div>
          </div>
          <Link href="/mood-tracker" className="w-full inline-block">
            <div className="w-full px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all text-center flex items-center justify-center gap-2">
              View Analytics
              <BarChart className="h-4 w-4" />
            </div>
          </Link>
        </div>

        {/* Community Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Community</h3>
              <p className="text-sm text-gray-600">Connect with others</p>
            </div>
          </div>
          <Link href="/community" className="w-full inline-block">
            <div className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg hover:opacity-90 transition-all text-center flex items-center justify-center gap-2">
              Join Discussion
              <Users className="h-4 w-4" />
            </div>
          </Link>
        </div>

        {/* Resource Library Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-amber-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Resource Library</h3>
              <p className="text-sm text-gray-600">Articles and guides</p>
            </div>
          </div>
          <Link href="/resources" className="w-full inline-block">
            <div className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-lg hover:opacity-90 transition-all text-center flex items-center justify-center gap-2">
              Browse Resources
              <BookOpen className="h-4 w-4" />
            </div>
          </Link>
        </div>

        {/* Wellness Playground Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Gamepad className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Wellness Playground</h3>
              <p className="text-sm text-gray-600">Mindfulness games & activities</p>
            </div>
          </div>
          <Link href="/playground" className="w-full inline-block">
            <div className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-lg hover:opacity-90 transition-all text-center flex items-center justify-center gap-2">
              Explore Games
              <Gamepad className="h-4 w-4" />
            </div>
          </Link>
        </div>

        {/* Challenges & Tasks Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <CheckSquare className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Challenges & Tasks</h3>
              <p className="text-sm text-gray-600">Daily wellness activities</p>
            </div>
          </div>
          <Link href="/challenges" className="w-full inline-block">
            <div className="w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white rounded-lg hover:opacity-90 transition-all text-center flex items-center justify-center gap-2">
              View Challenges
              <CheckSquare className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="p-2 bg-purple-100 rounded-full">
              <Clock className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600">Completed a mindfulness game session</p>
              <p className="text-sm text-gray-400">1 hour ago</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="p-2 bg-teal-100 rounded-full">
              <Bot className="h-4 w-4 text-teal-600" />
            </div>
            <div>
              <p className="text-gray-600">Started a new conversation with AI Buddy</p>
              <p className="text-sm text-gray-400">2 hours ago</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="p-2 bg-amber-100 rounded-full">
              <BookOpen className="h-4 w-4 text-amber-600" />
            </div>
            <div>
              <p className="text-gray-600">Read article: "Managing Daily Stress"</p>
              <p className="text-sm text-gray-400">Yesterday</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="p-2 bg-emerald-100 rounded-full">
              <BarChart className="h-4 w-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-gray-600">Updated your mood tracker</p>
              <p className="text-sm text-gray-400">Yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}