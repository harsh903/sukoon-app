'use client';

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useState } from 'react';
import { Users, Image, Lock, Globe, Shield } from 'lucide-react';

export default function CreateCommunityPage() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle community creation
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-teal-900 mb-2">Create a New Community</h1>
          <p className="text-gray-600 mb-8">Create a safe space for people to connect and support each other</p>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Community Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Enter community name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Describe your community's purpose and goals"
                />
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  <option value="anxiety">Anxiety Support</option>
                  <option value="depression">Depression Support</option>
                  <option value="mindfulness">Mindfulness</option>
                  <option value="stress">Stress Management</option>
                  <option value="wellness">General Wellness</option>
                </select>
              </div>

              {/* Privacy Settings */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Privacy Settings</label>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="public"
                      name="privacy"
                      checked={!isPrivate}
                      onChange={() => setIsPrivate(false)}
                      className="w-4 h-4 text-teal-600"
                    />
                    <label htmlFor="public" className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium text-gray-900">Public Community</p>
                        <p className="text-sm text-gray-600">Anyone can view and join</p>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="private"
                      name="privacy"
                      checked={isPrivate}
                      onChange={() => setIsPrivate(true)}
                      className="w-4 h-4 text-teal-600"
                    />
                    <label htmlFor="private" className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium text-gray-900">Private Community</p>
                        <p className="text-sm text-gray-600">Members must be approved to join</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Guidelines */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Community Guidelines</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Set guidelines for your community members"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <Users className="h-5 w-5" />
                Create Community
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}