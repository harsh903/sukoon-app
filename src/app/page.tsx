// app/page.tsx
import { Brain, Coffee, Moon, Users, Heart, Flower2, ArrowRight, Mail, Phone, MapPin, Bot, MessageSquare, BarChart, Gamepad, Book } from 'lucide-react';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SignedOut>
        {/* Hero Section */}
        <section id="home" className="pt-28 pb-16 bg-gradient-to-br from-teal-50 via-sage-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h1 className="text-5xl font-bold text-teal-900 mb-6 leading-tight">
                  Your Mental Health Journey, 
                  <span className="bg-gradient-to-r from-teal-500 to-emerald-400 text-transparent bg-clip-text"> Powered by AI</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connect with our AI counselor, join a supportive community, and track your mood - all in one safe space. No judgment, just growth. 🌱✨
                </p>
                <div className="flex gap-4">
                  <SignInButton mode="modal">
                    <button className="px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
                      Get Started <Bot className="h-5 w-5" />
                    </button>
                  </SignUpButton>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-[400px] bg-gradient-to-br from-teal-200 to-emerald-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg text-teal-800">Interactive 3D Counselor Avatar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-teal-900 mb-16">
              Features that <span className="text-emerald-500">Actually Help</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Bot,
                  title: "AI Counselor",
                  description: "24/7 support from our AI counselor trained to understand and guide you through tough times.",
                  gradient: "from-teal-500 to-emerald-400"
                },
                {
                  icon: MessageSquare,
                  title: "Safe Community",
                  description: "Share experiences, connect with peers, and find support in our welcoming community.",
                  gradient: "from-sky-400 to-teal-500"
                },
                {
                  icon: Gamepad,
                  title: "Wellness Playground",
                  description: "Interactive games and activities designed to reduce stress and promote mental well-being.",
                  gradient: "from-emerald-400 to-green-400"
                },
                {
                  icon: Book,
                  title: "Resource Library",
                  description: "Access curated articles, modules, and expert content for your mental health journey.",
                  gradient: "from-blue-400 to-sky-400"
                }
              ].map((feature, index) => (
                <div key={index} className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Counselor Demo Section */}
        <section id="ai-counselor" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-teal-900">AI Counselor</h3>
                    <p className="text-gray-600">Online • Ready to chat</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="bg-teal-50 p-4 rounded-lg max-w-[80%]">
                    <p className="text-gray-700">Hi! I'm here to listen and support you. How are you feeling today?</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg max-w-[80%] ml-auto">
                    <p className="text-gray-700">I've been feeling a bit overwhelmed lately...</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg max-w-[80%]">
                    <p className="text-gray-700">I understand. Let's talk about what's causing these feelings...</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90">
                    Send
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-teal-900 mb-6">
                  24/7 Support from our AI Counselor
                </h2>
                <p className="text-gray-600 mb-8">
                  Our AI counselor combines empathy with evidence-based techniques to provide support whenever you need it. 
                  Private, judgment-free conversations to help you process emotions and develop coping strategies.
                </p>
                <SignUpButton mode="modal">
                  <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all">
                    Start Chatting
                  </button>
                </SignUpButton>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Playground Section */}
        <section id="playground" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-teal-900 mb-6">
                  Wellness Playground
                </h2>
                <p className="text-gray-600 mb-8">
                  Discover our collection of interactive games and mindfulness activities designed to help you relax,
                  reduce stress, and improve your mental well-being. Find what works best for you and make wellness fun.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    {
                      title: "Relaxation Games",
                      description: "Interactive games for stress relief",
                      icon: Gamepad
                    },
                    {
                      title: "Mindfulness",
                      description: "Guided meditation exercises",
                      icon: Brain
                    },
                    {
                      title: "Brain Training",
                      description: "Cognitive enhancement activities",
                      icon: Coffee
                    },
                    {
                      title: "Mood Boosters",
                      description: "Fun activities to lift your spirits",
                      icon: Heart
                    }
                  ].map((activity, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl">
                      <activity.icon className="h-6 w-6 text-teal-600 mb-2" />
                      <h4 className="font-semibold text-teal-900">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                  ))}
                </div>
                <SignUpButton mode="modal">
                  <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all">
                    Start Playing
                  </button>
                </SignUpButton>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-[400px] bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center">
                  <span className="text-lg text-teal-800">Interactive Game Preview</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Library Section */}
        <section id="resources" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Articles & Guides",
                      count: "100+",
                      description: "Expert-written content",
                      icon: Book
                    },
                    {
                      title: "Learning Modules",
                      count: "50+",
                      description: "Self-paced courses",
                      icon: Brain
                    },
                    {
                      title: "Worksheets",
                      count: "75+",
                      description: "Practical exercises",
                      icon: MessageSquare
                    },
                    {
                      title: "Video Content",
                      count: "30+",
                      description: "Expert presentations",
                      icon: Flower2
                    }
                  ].map((resource, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl">
                      <resource.icon className="h-8 w-8 text-teal-600 mb-2" />
                      <h4 className="font-semibold text-teal-900">{resource.title}</h4>
                      <p className="text-emerald-600 font-bold">{resource.count}</p>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-teal-900 mb-6">
                  Comprehensive Resource Library
                </h2>
                <p className="text-gray-600 mb-8">
                  Access our extensive collection of mental health resources, including expert articles, 
                  self-paced learning modules, practical exercises, and comprehensive guides. All content 
                  is professionally curated to support your mental wellness journey.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Evidence-based content from mental health experts",
                    "Self-paced learning modules for personal growth",
                    "Practical exercises and worksheets",
                    "Regular updates with new resources"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-600 to-emerald-400 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <SignUpButton mode="modal">
                  <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all">
                    Explore Resources
                  </button>
                </SignUpButton>
              </div>
            </div>
          </div>
        </section>

        {/* Mood Tracking Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-teal-900 mb-6">
                  Track Your Mood Journey
                </h2>
                <p className="text-gray-600 mb-8">
                  Visualize your emotional patterns, identify triggers, and celebrate progress. 
                  Our intelligent system provides personalized insights and suggestions to help you thrive.
                </p>
                <div className="space-y-4">
                  {[
                    "Interactive mood logging",
                    "Pattern recognition",
                    "Personalized insights",
                    "Progress celebrations"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-gradient-to-r from-teal-600 to-emerald-400 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-full h-[300px] bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center">
                  <span className="text-lg text-teal-800">Mood Tracking Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-teal-900 mb-16">
              Meet Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Aakashdeep Srivastava",
                  role: "AI Developer",
                  specialty: "ML/AI Expert",
                  image: "/Assets/Aakash.png",
                  linkedin: "https://www.linkedin.com/in/aakashdeep0551/"
                },
                {
                  name: "Harsh Singh",
                  role: "ML Engineer",
                  specialty: "NLP Specialist",
                  image: "/Assets/Harsh.png",
                  linkedin: "https://www.linkedin.com/in/harshsingh12/"
                },
                {
                  name: "Suchi Bansal",
                  role: "Product Manager",
                  specialty: "Mental Health Advocate",
                  image: "/Assets/suchi.jpeg",
                  linkedin: "https://www.linkedin.com/in/suchi-bansal-41452777/"
                }
              ].map((member, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="relative group">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-teal-500/20 ring-offset-2">
                      <Image 
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-[#0A66C2] hover:text-[#004182] transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-teal-900">{member.name}</h3>
                    <p className="text-teal-600">{member.role}</p>
                    <p className="text-gray-600">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-teal-900 mb-16">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-teal-900 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="text-teal-600 h-6 w-6" />
                      <span className="text-gray-600">help@mindfulpath.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="text-teal-600 h-6 w-6" />
                      <span className="text-gray-600">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="text-teal-600 h-6 w-6" />
                      <span className="text-gray-600">123 Wellness Street, NY 10001</span>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl">
                    <h4 className="text-lg font-semibold text-teal-900 mb-4">24/7 Support</h4>
                    <p className="text-gray-600">
                      Our AI counselor is always available. For emergency support,
                      please contact your local crisis hotline.
                    </p>
                  </div>
                </div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-teal-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="text-white h-6 w-6" />
                  <span className="text-xl font-bold">MindfulPath</span>
                </div>
                <p className="text-teal-200">
                  Your trusted partner in mental health and emotional well-being.
                  Making mental healthcare accessible through AI and community support.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-teal-200 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#ai-counselor" className="text-teal-200 hover:text-white transition-colors">AI Counselor</a></li>
                  <li><a href="#playground" className="text-teal-200 hover:text-white transition-colors">Playground</a></li>
                  <li><a href="#resources" className="text-teal-200 hover:text-white transition-colors">Resources</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-teal-200 hover:text-white transition-colors">Mental Health Blog</a></li>
                  <li><a href="#" className="text-teal-200 hover:text-white transition-colors">Support Groups</a></li>
                  <li><a href="#" className="text-teal-200 hover:text-white transition-colors">Crisis Support</a></li>
                  <li><a href="#" className="text-teal-200 hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-600"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-lg hover:opacity-90 transition-all"
                  >
                    Subscribe to Newsletter
                  </button>
                </form>
                <div className="mt-6">
                  <p className="text-sm text-teal-200">
                    Get weekly insights on mental wellness and community updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-teal-800 mt-8 pt-8 text-center text-teal-200">
              <p>© 2024 MindfulPath. All rights reserved.</p>
              <div className="mt-4 flex justify-center gap-4">
                <a href="#" className="text-teal-200 hover:text-white transition-colors">Privacy Policy</a>
                <span className="text-teal-600">•</span>
                <a href="#" className="text-teal-200 hover:text-white transition-colors">Terms of Service</a>
                <span className="text-teal-600">•</span>
                <a href="#" className="text-teal-200 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </SignedOut>

      {/* Signed In Content */}
      <SignedIn>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-sage-50 to-blue-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-teal-900 mb-6">Welcome to MindfulPath!</h1>
            <p className="text-xl text-gray-600 mb-8">Your mental wellness journey continues.</p>
            <Link 
              href="/dashboard"
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-lg hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              Go to Dashboard <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </SignedIn>
    </main>
  );
}