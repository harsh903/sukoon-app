import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from 'next/link';
import { Search, Clock, BookOpen, Video, Heart, Mail, Phone, MapPin } from 'lucide-react';

const RESOURCES = {
  categories: [
    { name: 'Research', count: 15 },
    { name: 'Psychology', count: 23 },
    { name: 'Self-Help', count: 18 },
    { name: 'Therapy', count: 20 },
    { name: 'Educational', count: 12 }
  ],
  articles: [
    {
      id: 1,
      category: 'Research',
      readTime: '15 min read',
      title: 'Solution-Focused Approaches in Adult Mental Health Research',
      description: 'This conceptual review synthesizes how solution-focused approaches have been understood in adult mental health literature over the past five decades, highlighting their application in modern mental healthcare services.',
      author: {
        name: 'NCBI Research Team',
        role: 'Research Institute',
        initial: 'N'
      },
      views: 245,
      featured: true
    },
    {
      id: 2,
      category: 'Psychology',
      readTime: '12 min read',
      title: 'The Connections Between Positive Psychology & Mental Health',
      description: 'This article explores the association between positive psychology and mental health, discussing how integrating both is essential for promoting well-being and successful therapeutic outcomes.',
      author: {
        name: 'PositivePsychology Team',
        role: 'Mental Health Experts',
        initial: 'P'
      },
      views: 189,
      featured: true
    },
    {
      id: 3,
      category: 'Self-Help',
      readTime: '8 min read',
      title: 'Sure, Positive Self-Talk May Seem a Little Cringey. But Science Says It Works.',
      description: 'This article discusses the impact of positive self-talk and its scientifically-backed benefits, explaining how it can enhance mental and physical health by reframing perspectives.',
      author: {
        name: 'POPSUGAR Fitness',
        role: 'Health & Wellness',
        initial: 'P'
      },
      views: 156,
      featured: false
    }
  ],
  videos: [
    {
      id: 4,
      category: 'Educational',
      duration: '18 min',
      title: 'Solution-Focused Approach: Helping Others Through Positive Goals',
      description: 'This video provides an overview of the solution-focused approach in therapy, emphasizing how focusing on positive goals can help individuals achieve meaningful change in their lives.',
      author: {
        name: 'Mental Health Channel',
        role: 'Educational Content',
        initial: 'M'
      },
      views: 328
    },
    {
      id: 5,
      category: 'Therapy',
      duration: '12 min',
      title: 'What is Solution-Focused Therapy?',
      description: 'This video introduces solution-focused therapy, explaining its principles and how it can be used to help individuals focus on solutions rather than problems to foster positive change.',
      author: {
        name: 'Ellie Mental Health',
        role: 'Mental Health Provider',
        initial: 'E'
      },
      views: 245
    }
  ]
};

const CategoryCard = ({ category }) => (
  <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-gray-900 font-medium">{category.name}</h3>
        <p className="text-sm text-gray-500">Browse {category.count} resources</p>
      </div>
      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
        {category.count}
      </span>
    </div>
  </div>
);

const ResourcePreview = ({ item, type = 'article' }) => (
  <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all">
    {type === 'video' && (
      <div className="relative aspect-video bg-gray-100 flex items-center justify-center">
        <Video className="h-12 w-12 text-gray-400" />
      </div>
    )}
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          type === 'video' ? 'bg-purple-50 text-purple-700' : 'bg-teal-50 text-teal-700'
        }`}>
          {item.category}
        </span>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          {item.readTime || item.duration}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-gray-600 mb-6 line-clamp-2">
        {item.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-teal-700">{item.author.initial}</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{item.author.name}</p>
            <p className="text-xs text-gray-500">{item.author.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center text-gray-500 text-sm">
            <BookOpen className="h-4 w-4 mr-1" />
            {item.views}
          </span>
          <button className="ml-4 px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
            {type === 'video' ? 'Watch now' : 'Read more'} →
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default async function ResourceLibraryPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  return (
    <div className="min-h-screen bg-gray-50">
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {RESOURCES.categories.map(category => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.articles
              .filter(article => article.featured)
              .map(article => (
                <ResourcePreview key={article.id} item={article} type="article" />
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
            {RESOURCES.articles.map(article => (
              <ResourcePreview key={article.id} item={article} type="article" />
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
            {RESOURCES.videos.map(video => (
              <ResourcePreview key={video.id} item={video} type="video" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}