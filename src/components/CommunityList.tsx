'use client';

import { Users } from 'lucide-react';
import Link from 'next/link';

interface Community {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  activityLevel: string;
  category: string;
}

const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'Anxiety Support Group',
    description: 'A safe space to share experiences and support each other through anxiety.',
    memberCount: 2500,
    activityLevel: 'Very Active',
    category: 'Anxiety'
  },
  {
    id: '2',
    name: 'Mindfulness Masters',
    description: 'Daily mindfulness practices and meditation techniques for mental wellness.',
    memberCount: 1800,
    activityLevel: 'Active',
    category: 'Mindfulness'
  },
  {
    id: '3',
    name: 'Stress Management',
    description: 'Learn and share effective strategies for managing daily stress.',
    memberCount: 3200,
    activityLevel: 'Very Active',
    category: 'Stress'
  }
];

export default function CommunityList() {
  return (
    <div className="space-y-6">
      {mockCommunities.map((community) => (
        <Link href={`/community/${community.id}`} key={community.id}>
          <div className="border rounded-lg p-4 hover:shadow-md transition-all cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{community.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{community.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{community.memberCount.toLocaleString()} members</span>
                    <span>•</span>
                    <span>{community.activityLevel}</span>
                    <span>•</span>
                    <span className="text-teal-600">{community.category}</span>
                  </div>
                </div>
              </div>
              <button 
                className="px-4 py-2 border-2 border-teal-500 text-teal-600 rounded-lg hover:bg-teal-50 transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle join/leave logic here
                }}
              >
                Join
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}