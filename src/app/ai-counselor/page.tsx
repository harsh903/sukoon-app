import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Bot, Brain, Heart, RefreshCcw } from 'lucide-react';
import ChatInterface from "../../components/ChatInterface";  // Updated import path for correct location

export default async function AICounselorPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <h1 className="text-2xl font-bold text-teal-900 mb-8">AI Counseling Session</h1>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Bot className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-600">Always here to help</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Our AI counselor is available anytime you need support or guidance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Brain className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Personalized Care</h3>
                <p className="text-sm text-gray-600">Tailored to your needs</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Get personalized support based on your unique situation and needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Safe Space</h3>
                <p className="text-sm text-gray-600">Confidential chats</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Your conversations are private and secure in our safe environment.
            </p>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <ChatInterface userId={userId} />
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Tips for Your Session</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-teal-100 rounded-full mt-1">
                <RefreshCcw className="h-4 w-4 text-teal-600" />
              </div>
              <div>
                <p className="text-gray-600">Take your time to express yourself clearly</p>
                <p className="text-sm text-gray-400">There's no rush in our conversations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-teal-100 rounded-full mt-1">
                <RefreshCcw className="h-4 w-4 text-teal-600" />
              </div>
              <div>
                <p className="text-gray-600">Be honest about your feelings</p>
                <p className="text-sm text-gray-400">This helps us provide better support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}