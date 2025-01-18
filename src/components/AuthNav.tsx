import { UserButton } from "@clerk/nextjs";
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function AuthNav() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-teal-600 h-6 w-6" />
            <span className="text-xl font-bold text-teal-900">Sukoon</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-gray-600 hover:text-teal-600">
              Dashboard
            </Link>
            <Link href="/ai-counselor" className="text-gray-600 hover:text-teal-600">
              AI Buddy
            </Link>
            <Link href="/mood-tracker" className="text-gray-600 hover:text-teal-600">
              Mood Tracker
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-teal-600">
              Community
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-teal-600">
              Resources
            </Link>
            <Link href="/playground" className="text-gray-600 hover:text-teal-600">
              Playground
            </Link>
            <Link href="/challenges" className="text-gray-600 hover:text-teal-600">
              Challenges
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-teal-600">
              Profile
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8 rounded-full ring-2 ring-teal-500",
                  userButtonPopoverCard: "rounded-lg shadow-lg",
                  userButtonPopoverActionButton: "rounded-md",
                  userButtonPopoverActionButtonText: "font-medium",
                  userButtonPopoverFooter: "hidden"
                }
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}