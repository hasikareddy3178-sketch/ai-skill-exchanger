'use client';

import React from 'react';
import { Sparkles, ArrowRight, PlusCircle, Compass, Zap, ShieldCheck, Users, Search } from 'lucide-react';

interface HeroProps {
  onOpenCreateModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Hero({ onOpenCreateModal, searchQuery, setSearchQuery }: HeroProps) {
  const scrollToExplore = () => {
    const el = document.getElementById('featured-skills');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32 bg-gradient-to-b from-indigo-50/60 via-slate-50/40 to-white dark:from-slate-950 dark:via-slate-900/90 dark:to-slate-900">
      {/* Decorative Background Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-80">
        <div
          aria-hidden="true"
          className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-indigo-500/25 via-cyan-400/20 to-purple-500/25 opacity-70"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-white/90 px-3.5 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-md dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300 mb-8 transition-transform hover:scale-105">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
          <span>The Open Marketplace for AI Workflows & Prompts</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-[1.12]">
          Exchange Skills.{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Build Smarter with AI.
          </span>
        </h1>

        {/* Hero Description */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Discover, create, share, and exchange useful AI skills and workflows.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <button
            onClick={scrollToExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Compass className="h-5 w-5" />
            <span>Explore Skills</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={onOpenCreateModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-7 py-3.5 text-base font-semibold text-slate-800 dark:text-slate-100 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-700/80 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-0.5 active:translate-y-0"
          >
            <PlusCircle className="h-5 w-5 text-indigo-500" />
            <span>Create a Skill</span>
          </button>
        </div>

        {/* Hero Quick Search Bar */}
        <div className="mt-10 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill name, role, model or topic (e.g. Prompt Engineering)..."
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/90 py-3.5 pl-11 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 shadow-lg shadow-slate-200/50 dark:shadow-none focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-medium text-slate-600 dark:text-slate-300">Popular:</span>
            {['Prompt Engineering', 'Coding Assistant', 'AI Research', 'Content Writer'].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  scrollToExplore();
                }}
                className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/50 dark:hover:text-indigo-300 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Trust Badges / Stats Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-200/80 dark:border-slate-800/80 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              1,400+
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              Curated AI Skills
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              28,000+
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              Workflows Exchanged
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              4.9 / 5.0
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              Community Satisfaction
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              100% Free
            </span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              Open Community Exchange
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
