'use client';

import { 
  Bot, 
  BarChart, 
  Users, 
  Gamepad, 
  BookOpen, 
  Heart,
  VideoIcon,
  FileText,
  Brain,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

export function AICounselorCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-teal-100 rounded-lg">
          <Bot className="h-6 w-6 text-teal-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">AI Counselor</h3>
          <p className="text-sm text-gray-600">Start a conversation</p>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="p-3 bg-teal-50 rounded-lg">
          <p className="text-sm text-teal-600">Available 24/7 for support</p>
        </div>
        <div className="p-3 bg-teal-50 rounded-lg">
          <p className="text-sm text-teal-600">Private & confidential</p>
        </div>
      </div>
      <Link href="/ai-counselor">
        <div className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
          Chat Now
          <MessageSquare className="h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}

export function MoodTrackingCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-emerald-100 rounded-lg">
          <BarChart className="h-6 w-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Mood Tracking</h3>
          <p className="text-sm text-gray-600">Monitor your emotional health</p>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg mb-4">
        <div className="text-sm text-emerald-600">Weekly mood average</div>
        <div className="font-medium text-emerald-600">Positive ↑</div>
      </div>
      <Link href="/mood-tracker">
        <div className="w-full px-4 py-2 border-2 border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
          View Analytics
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}

export function CommunityCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Users className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Community</h3>
          <p className="text-sm text-gray-600">Connect with others</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600 text-sm text-center">
          5 Active Groups
        </div>
        <div className="p-2 bg-blue-50 rounded-lg text-blue-600 text-sm text-center">
          2.5k Members
        </div>
      </div>
      <Link href="/community">
        <div className="w-full px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
          Join Discussion
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}

export function ResourceLibraryCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-amber-100 rounded-lg">
          <BookOpen className="h-6 w-6 text-amber-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Resource Library</h3>
          <p className="text-sm text-gray-600">Articles, videos & guides</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="p-2 bg-amber-50 rounded-lg text-amber-600 text-sm flex items-center gap-2">
          <VideoIcon className="h-4 w-4" />
          <span>15+ Videos</span>
        </div>
        <div className="p-2 bg-amber-50 rounded-lg text-amber-600 text-sm flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <span>25+ Articles</span>
        </div>
        <div className="p-2 bg-amber-50 rounded-lg text-amber-600 text-sm flex items-center gap-2">
          <Brain className="h-4 w-4" />
          <span>Mindfulness</span>
        </div>
        <div className="p-2 bg-amber-50 rounded-lg text-amber-600 text-sm flex items-center gap-2">
          <Heart className="h-4 w-4" />
          <span>Self-Care</span>
        </div>
      </div>
      <Link href="/resources">
        <div className="w-full px-4 py-2 border-2 border-amber-500 text-amber-600 rounded-lg hover:bg-amber-50 transition-all flex items-center justify-center gap-2">
          Browse Resources
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}

export function PlaygroundCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-purple-100 rounded-lg">
          <Gamepad className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Wellness Playground</h3>
          <p className="text-sm text-gray-600">Fun activities for stress relief</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="p-2 bg-purple-50 rounded-lg text-purple-600 text-sm text-center">
          5 New Games
        </div>
        <div className="p-2 bg-purple-50 rounded-lg text-purple-600 text-sm text-center">
          Daily Challenges
        </div>
      </div>
      <Link href="/playground">
        <div className="w-full px-4 py-2 border-2 border-purple-500 text-purple-600 rounded-lg hover:bg-purple-50 transition-all flex items-center justify-center gap-2">
          Play Now
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}

export function QuickSupportCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-rose-100 rounded-lg">
          <Heart className="h-6 w-6 text-rose-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Quick Support</h3>
          <p className="text-sm text-gray-600">Coping strategies</p>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="p-3 bg-rose-50 rounded-lg">
          <p className="text-sm text-rose-600">Breathing exercises</p>
        </div>
        <div className="p-3 bg-rose-50 rounded-lg">
          <p className="text-sm text-rose-600">Quick meditation</p>
        </div>
      </div>
      <Link href="/quick-support">
        <div className="w-full px-4 py-2 border-2 border-rose-500 text-rose-600 rounded-lg hover:bg-rose-50 transition-all flex items-center justify-center gap-2">
          Get Tips
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}

export function RecentActivitySection() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="p-2 bg-purple-100 rounded-full">
            <Gamepad className="h-4 w-4 text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-600">Completed a mindfulness game session</p>
            <p className="text-sm text-gray-400">1 hour ago</p>
          </div>
          <div className="text-sm text-purple-600">+50 points</div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="p-2 bg-teal-100 rounded-full">
            <Bot className="h-4 w-4 text-teal-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-600">Started a new conversation with AI Counselor</p>
            <p className="text-sm text-gray-400">2 hours ago</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="p-2 bg-amber-100 rounded-full">
            <BookOpen className="h-4 w-4 text-amber-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-600">Read article: "Managing Daily Stress"</p>
            <p className="text-sm text-gray-400">Yesterday</p>
          </div>
          <div className="text-sm text-amber-600">+30 points</div>
        </div>

        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="p-2 bg-emerald-100 rounded-full">
            <BarChart className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="text-gray-600">Updated your mood tracker</p>
            <p className="text-sm text-gray-400">Yesterday</p>
          </div>
          <div className="text-sm text-emerald-600">+10 points</div>
        </div>
      </div>
    </div>
  );
}