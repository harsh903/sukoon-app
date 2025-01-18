'use client';

import { 
  BookOpen, 
  VideoIcon, 
  Search, 
  Tag,
  ThumbsUp,
  Clock,
  BookmarkPlus
} from 'lucide-react';
import Link from 'next/link';
import { Resource } from '@/app/resources/data';

export function SearchFilter({ categories }: { categories: { name: string; count: number }[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
          <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent">
          <option value="">All Types</option>
          <option value="articles">Articles</option>
          <option value="videos">Videos</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent">
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.name} value={category.name.toLowerCase()}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link href={`/resources/${resource.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
        <div className="aspect-video bg-gradient-to-br from-teal-50 to-emerald-50 rounded-t-xl flex items-center justify-center">
          {resource.type === 'video' ? (
            <VideoIcon className="h-12 w-12 text-teal-600" />
          ) : (
            <BookOpen className="h-12 w-12 text-teal-600" />
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="h-4 w-4 text-teal-600" />
            <span className="text-sm text-teal-600">{resource.category}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{resource.readTime || resource.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{resource.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function VideoCard({ video }: { video: Resource }) {
  return (
    <Link href={`/resources/${video.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center relative group">
          <VideoIcon className="h-12 w-12 text-teal-600 group-hover:scale-110 transition-transform" />
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Tag className="h-4 w-4 text-teal-600" />
            <span className="text-sm text-teal-600">{video.category}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{video.author.name}</span>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{video.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function NewsletterSignup() {
  return (
    <div className="mt-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl shadow-sm p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Get the latest mental wellness resources and tips delivered to your inbox</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
          />
          <div className="px-6 py-2 bg-white text-teal-600 rounded-lg hover:bg-teal-50 transition-colors cursor-pointer">
            Subscribe
          </div>
        </form>
      </div>
    </div>
  );
}