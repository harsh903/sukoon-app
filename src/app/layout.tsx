// app/layout.tsx
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sukoon - Mental Health Journey',
  description: 'Your Mental Health Journey, Powered by AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClerkProvider afterSignOutUrl="/">
          {/* Navigation */}
          <header className="fixed top-0 left-0 right-0 z-50">
            <SignedOut>
              <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex-shrink-0 flex items-center">
                      <Link href="/" className="flex items-center space-x-2">
                        <Heart className="h-8 w-8 text-teal-600" />
                        <span className="text-xl font-bold text-teal-900">Sukoon</span>
                      </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                      <Link href="/#home" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        Home
                      </Link>
                      <Link href="/#features" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        Features
                      </Link>
                      <Link href="/#ai-counselor" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        AI Counselor
                      </Link>
                      <Link href="/#community" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        Community
                      </Link>
                      <Link href="/#team" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        Team
                      </Link>
                      <Link href="/#contact" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        Contact
                      </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                      <SignInButton mode="modal">
                        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors">
                          Sign In
                        </button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-400 rounded-lg hover:opacity-90 transition-all">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </div>
                  </div>
                </div>
              </nav>
            </SignedOut>

            <SignedIn>
              <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex-shrink-0 flex items-center">
                      <Link href="/dashboard" className="flex items-center space-x-2">
                        <Heart className="h-8 w-8 text-teal-600" />
                        <span className="text-xl font-bold text-teal-900">Sukoon</span>
                      </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                      <Link href="/dashboard" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        Dashboard
                      </Link>
                      <Link href="/ai-counselor" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        AI Counselor
                      </Link>
                      <Link href="/community" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        Community
                      </Link>
                      <Link href="/profile" className="text-gray-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
                        Profile
                      </Link>
                    </div>

                    {/* User Button */}
                    <div className="flex items-center space-x-4">
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
            </SignedIn>

            {/* Mobile Menu - Only shown when signed out */}
            <SignedOut>
              <div className="md:hidden">
                <div className="fixed inset-0 z-40 bg-white transform translate-x-full transition-transform duration-300">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <Heart className="h-8 w-8 text-teal-600" />
                      </div>
                      <button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-4">
                        {[
                          ['Home', '/#home'],
                          ['Features', '/#features'],
                          ['AI Counselor', '/#ai-counselor'],
                          ['Community', '/#community'],
                          ['Team', '/#team'],
                          ['Contact', '/#contact'],
                        ].map(([name, href]) => (
                          <Link
                            key={name}
                            href={href}
                            className="text-base font-medium text-gray-900 hover:text-teal-600 transition-colors"
                          >
                            {name}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </SignedOut>
          </header>

          {/* Main Content */}
          <main className="min-h-screen pt-16">
            {children}
          </main>

          {/* Footer can be added here if needed */}
        </ClerkProvider>
      </body>
    </html>
  );
}