'use client';

import { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Smile, 
  Frown, 
  Meh, 
  Calendar, 
  Activity, 
  Heart, 
  Brain,
  Sun,
  Moon,
  Coffee,
  BookOpen,
  Music,
  Users
} from 'lucide-react';

// Mock data - Replace with actual data from your backend
const moodData = [
  { date: '2024-01-10', mood: 4, activities: ['meditation', 'exercise'], sleep: 7 },
  { date: '2024-01-11', mood: 3, activities: ['reading', 'social'], sleep: 6 },
  { date: '2024-01-12', mood: 5, activities: ['meditation', 'music'], sleep: 8 },
  // ... more data
];

const activityImpact = [
  { name: 'Meditation', impact: 85 },
  { name: 'Exercise', impact: 75 },
  { name: 'Reading', impact: 65 },
  { name: 'Social', impact: 70 },
  { name: 'Music', impact: 80 },
];

const moodDistribution = [
  { name: 'Very Happy', value: 30, color: '#10B981' },
  { name: 'Happy', value: 25, color: '#34D399' },
  { name: 'Neutral', value: 20, color: '#6EE7B7' },
  { name: 'Sad', value: 15, color: '#F87171' },
  { name: 'Very Sad', value: 10, color: '#EF4444' },
];

export default function MoodTrackingDashboard({ userId }: { userId: string }) {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex gap-4">
          {['week', 'month', '3months', 'year'].map((range) => (
            <div
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                timeRange === range
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* Current Mood Input */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">How are you feeling today?</h2>
        <div className="flex justify-between max-w-md">
          {[
            { icon: Frown, label: 'Very Sad', value: 1 },
            { icon: Meh, label: 'Sad', value: 2 },
            { icon: Smile, label: 'Neutral', value: 3 },
            { icon: Smile, label: 'Happy', value: 4 },
            { icon: Smile, label: 'Very Happy', value: 5 },
          ].map((mood) => (
            <div
              key={mood.value}
              className="flex flex-col items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50"
            >
              <mood.icon className="h-8 w-8 text-teal-600" />
              <span className="text-sm text-gray-600">{mood.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mood Trend Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Mood Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#0D9488" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Impact & Sleep Quality */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Activity Impact</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityImpact}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="impact" fill="#0D9488" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Mood Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={moodDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                >
                  {moodDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Wellness Activities */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Activities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Brain, label: 'Meditation', time: '15 mins' },
            { icon: Activity, label: 'Exercise', time: '30 mins' },
            { icon: BookOpen, label: 'Reading', time: '20 mins' },
            { icon: Music, label: 'Music Therapy', time: '25 mins' },
            { icon: Users, label: 'Social', time: '45 mins' },
            { icon: Moon, label: 'Sleep', time: '8 hours' },
            { icon: Coffee, label: 'Breaks', count: '3' },
            { icon: Heart, label: 'Self-Care', time: '1 hour' },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
            >
              <div className="p-2 bg-teal-100 rounded-lg">
                <activity.icon className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{activity.label}</p>
                <p className="text-sm text-gray-500">{activity.time || activity.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Insights & Recommendations</h2>
        <div className="space-y-4">
          <div className="p-4 bg-teal-50 rounded-lg">
            <p className="text-teal-900">Your mood tends to be better on days with morning meditation.</p>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg">
            <p className="text-emerald-900">Exercise has shown a positive impact on your emotional well-being.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-900">Social activities correlate with improved mood scores.</p>
          </div>
        </div>
      </div>
    </div>
  );
}