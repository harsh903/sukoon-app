import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Smile } from 'lucide-react';
import DashboardContent from '@/components/DashboardContent';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-teal-900">Welcome to Your Dashboard</h1>
            <p className="text-gray-600 mt-1">Track your progress and access resources</p>
          </div>
          <div className="flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-lg">
            <Smile className="h-5 w-5 text-teal-600" />
            <span className="text-teal-600 font-medium">Current Mood: Calm</span>
          </div>
        </div>

        <DashboardContent />
      </div>
    </div>
  );
}