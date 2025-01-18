import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Users, Search, Plus, TrendingUp, Bookmark } from 'lucide-react';
import Link from 'next/link';
import CommunityList from "@/components/CommunityList";
import PopularCommunities from "@/components/PopularCommunities";

export default async function CommunityPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-teal-900 mb-2">Mental Wellness Communities</h1>
            <p className="text-gray-600">Connect, share, and grow together</p>
          </div>
          <Link href="/community/create">
            <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create Community
            </button>
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search communities..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg pl-10 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent">
              <option value="">All Categories</option>
              <option value="anxiety">Anxiety Support</option>
              <option value="depression">Depression Support</option>
              <option value="mindfulness">Mindfulness</option>
              <option value="stress">Stress Management</option>
              <option value="wellness">General Wellness</option>
            </select>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Communities List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Community Categories Tabs */}
              <div className="flex border-b">
                <button className="px-6 py-3 text-teal-600 border-b-2 border-teal-600 font-medium">All</button>
                <button className="px-6 py-3 text-gray-600 hover:text-teal-600">My Communities</button>
                <button className="px-6 py-3 text-gray-600 hover:text-teal-600">Recommended</button>
              </div>
              
              {/* Communities Grid */}
              <div className="p-6 grid gap-6">
                {[1, 2, 3, 4, 5].map((community) => (
                  <div key={community} className="border rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg flex items-center justify-center">
                          <Users className="h-8 w-8 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Anxiety Support Group</h3>
                          <p className="text-sm text-gray-600 mb-2">A safe space to share experiences and support each other</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>2.5k members</span>
                            <span>•</span>
                            <span>Very Active</span>
                          </div>
                        </div>
                      </div>
                      <button className="px-4 py-2 border-2 border-teal-500 text-teal-600 rounded-lg hover:bg-teal-50 transition-all">
                        Join
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Communities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-teal-600" />
                <h2 className="text-lg font-semibold text-gray-900">Trending Communities</h2>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((community) => (
                  <div key={community} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">Mindfulness Daily</h3>
                      <p className="text-sm text-gray-600">1.2k members</p>
                    </div>
                    <button className="text-sm text-teal-600 hover:text-teal-700">Join</button>
                  </div>
                ))}
              </div>
            </div>

            {/* My Communities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bookmark className="h-5 w-5 text-teal-600" />
                <h2 className="text-lg font-semibold text-gray-900">My Communities</h2>
              </div>
              <div className="space-y-4">
                {[1, 2].map((community) => (
                  <div key={community} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Stress Relief Group</h3>
                      <p className="text-sm text-gray-600">Admin • 3 new posts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}