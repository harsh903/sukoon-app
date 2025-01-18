import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { RESOURCES, RESOURCE_CATEGORIES } from './data';
import Link from 'next/link';
import { Search, Book, Video, Clock, BookOpen, ArrowRight } from 'lucide-react';

const ResourceCard = ({ resource }) => (
  <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all border border-gray-100">
    {resource.type === 'video' && (
      <div className="relative aspect-video bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center bg-black/5">
          <Video className="h-8 w-8 text-gray-400" />
        </div>
      </div>
    )}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          resource.type === 'video' 
            ? 'bg-purple-50 text-purple-700' 
            : 'bg-teal-50 text-teal-700'
        }`}>
          {resource.category}
        </span>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          {resource.readTime || resource.duration}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
        {resource.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">
        {resource.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          {resource.author.image ? (
            <img 
              src={resource.author.image} 
              alt={resource.author.name}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">
                {resource.author.name[0]}
              </span>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-900">{resource.author.name}</p>
            <p className="text-xs text-gray-500">{resource.author.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center text-gray-500 text-sm">
            <BookOpen className="h-4 w-4 mr-1" />
            {resource.likes}
          </span>
          <Link 
            href={`/resources/${resource.id}`}
            className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1"
          >
            {resource.type === 'video' ? 'Watch now' : 'Read more'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const CategoryCard = ({ category }) => (
  <Link href={`/resources/category/${category.name.toLowerCase()}`}>
    <div className="group bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
          {category.name}
        </h3>
        <span className="px-2 py-1 bg-gray-100 rounded-lg text-sm text-gray-600">
          {category.count}
        </span>
      </div>
      <p className="text-sm text-gray-500">
        Browse {category.count} resources
      </p>
    </div>
  </Link>
);

export default async function ResourceLibraryPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const featuredResources = RESOURCES.filter(resource => resource.featured);
  const latestArticles = RESOURCES
    .filter(resource => resource.type === 'article')
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);
  const featuredVideos = RESOURCES.filter(r => r.type === 'video').slice(0, 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mental Health Resource Library
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore our curated collection of expert-reviewed resources to support your mental wellness journey
          </p>
          
          {/* Search */}
          <div className="flex gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <button className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
            <Link href="/resources/categories" className="text-teal-600 hover:text-teal-700 font-medium">
              View all categories
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {RESOURCE_CATEGORIES.map(category => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/resources/articles" className="text-teal-600 hover:text-teal-700 font-medium">
              View all articles
            </Link>
          </div>
          <div className="space-y-6">
            {latestArticles.map(article => (
              <ResourceCard key={article.id} resource={article} />
            ))}
          </div>
        </div>

        {/* Featured Videos */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Videos</h2>
            <Link href="/resources/videos" className="text-teal-600 hover:text-teal-700 font-medium">
              View all videos
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredVideos.map(video => (
              <ResourceCard key={video.id} resource={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}