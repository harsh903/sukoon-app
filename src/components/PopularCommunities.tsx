'use client';

import { Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface PopularCommunity {
  id: string;
  name: string;
  memberCount: number;
  isJoined: boolean;
}

const mockPopularCommunities: PopularCommunity[] = [
  {
    id: '1',
    name: 'Mindfulness Daily',
    memberCount: 1200,
    isJoined: false
  },
  {
    id: '2',
    name: 'Anxiety Warriors',
    memberCount: 3500,
    isJoined: true
  },
  {
    id: '3',
    name: 'Wellness Circle',
    memberCount: 2800,
    isJoined: false
  }
];

export default function PopularCommunities() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-teal-600" />
        <h2 className="text-lg font-semibold text-gray-900">Trending Communities</h2>
      </div>
      <div className="space-y-4">
        {mockPopularCommunities.map((community) => (
          <Link href={`/community/${community.id}`} key={community.id}>
            <div className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{community.name}</h3>
                <p className="text-sm text-gray-600">{community.memberCount.toLocaleString()} members</p>
              </div>
              <button 
                className={`text-sm ${
                  community.isJoined 
                    ? 'text-gray-600 hover:text-gray-700' 
                    : 'text-teal-600 hover:text-teal-700'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  // Handle join/leave logic here
                }}
              >
                {community.isJoined ? 'Joined' : 'Join'}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}