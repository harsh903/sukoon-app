import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MoodTrackingDashboard from "@/components/MoodTrackingDashboard";

export default async function MoodTrackerPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-teal-900">Mood Tracking & Analytics</h1>
            <p className="text-gray-600 mt-1">Monitor your emotional well-being and track your progress</p>
          </div>
        </div>
        
        <MoodTrackingDashboard userId={userId} />
      </div>
    </div>
  );
}