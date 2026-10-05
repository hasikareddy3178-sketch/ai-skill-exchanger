'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X, ArrowRight, UserCheck, Search, BookOpen, Compass, BookmarkCheck, User } from 'lucide-react';

interface NavbarProps {
  onOpenCreateModal?: () => void;
  onLoginClick?: () => void;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export default function Navbar({
  onOpenCreateModal,
  onLoginClick,
  activeTab = 'home',
  setActiveTab,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavClick = (tab: string, e?: React.MouseEvent) => {
    if (setActiveTab) {
      setActiveTab(tab);
    }
    setMobileMenuOpen(false);
  };

  const handleLoginToggle = () => {
    if (onLoginClick) {
      onLoginClick();
    } else {
      setIsLoggedIn(!isLoggedIn);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/85 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            onClick={(e) => handleNavClick('home', e)}
            className="group flex items-center gap-2.5 transition-transform hover:scale-[1.02]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 text-white shadow-md shadow-indigo-500/25 ring-1 ring-white/20">
              <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                AI Skill Exchanger
                <span className="hidden sm:inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-500/10 dark:bg-indigo-950/60 dark:text-indigo-400 dark:ring-indigo-400/20">
                  Beta
                </span>
              </span>
              <span className="hidden sm:block text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
                Share & Trade Smart Workflows
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'home'
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
            }`}
          >
            Home
          </button>
          <a
            href="#featured-skills"
            onClick={() => handleNavClick('explore')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'explore'
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
            }`}
          >
            Explore Skills
          </a>
          <button
            onClick={() => handleNavClick('my-skills')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'my-skills'
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
            }`}
          >
            My Skills
          </button>
          <button
            onClick={() => handleNavClick('profile')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'profile'
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/70 dark:bg-indigo-950/40'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
            }`}
          >
            Profile
          </button>
        </nav>

        {/* Right CTA / Auth Action */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenCreateModal && (
            <button
              onClick={onOpenCreateModal}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm transition hover:bg-slate-50 dark:hover:bg-slate-700/60 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <span>+ Create Skill</span>
            </button>
          )}

          <button
            onClick={handleLoginToggle}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition-all duration-200 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            {isLoggedIn ? (
              <>
                <UserCheck className="h-4 w-4" />
                <span>Alex Rivera</span>
              </>
            ) : (
              <>
                <span>Login</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-6 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 transition-all animate-fade-in">
          <div className="flex flex-col space-y-2 pt-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-left ${
                activeTab === 'home'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                  : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60'
              }`}
            >
              <Compass className="h-5 w-5 text-indigo-500" />
              Home
            </button>
            <a
              href="#featured-skills"
              onClick={() => handleNavClick('explore')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-left ${
                activeTab === 'explore'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                  : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="h-5 w-5 text-indigo-500" />
              Explore Skills
            </a>
            <button
              onClick={() => handleNavClick('my-skills')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-left ${
                activeTab === 'my-skills'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                  : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60'
              }`}
            >
              <BookmarkCheck className="h-5 w-5 text-indigo-500" />
              My Skills
            </button>
            <button
              onClick={() => handleNavClick('profile')}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-left ${
                activeTab === 'profile'
                  ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400'
                  : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60'
              }`}
            >
              <User className="h-5 w-5 text-indigo-500" />
              Profile
            </button>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              {onOpenCreateModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCreateModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  + Create a Skill
                </button>
              )}
              <button
                onClick={handleLoginToggle}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500"
              >
                {isLoggedIn ? (
                  <>
                    <UserCheck className="h-4 w-4" />
                    <span>Logged in as Alex Rivera</span>
                  </>
                ) : (
                  <span>Login</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
