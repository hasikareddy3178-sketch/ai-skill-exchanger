'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Github, Twitter, MessageSquare, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand info (2 cols on large screen) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white shadow-md shadow-indigo-500/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AI Skill Exchanger
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The premier open marketplace for discovering, sharing, and exchanging high-performance AI skills, system prompts, and automated workflows.
            </p>

            {/* Newsletter input */}
            <div className="pt-2 max-w-sm">
              <p className="text-xs font-semibold text-slate-200 mb-2">
                Stay updated with new featured skills
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/90 px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition"
                >
                  {subscribed ? <Check className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
                  <span>{subscribed ? 'Subscribed' : 'Join'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Column: About */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition">
                  About AI Skill Exchanger
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-indigo-400 transition">
                  How Skill Trading Works
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-indigo-400 transition">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#verification" className="hover:text-indigo-400 transition">
                  Skill Verification Process
                </a>
              </li>
              <li>
                <a href="#open-source" className="hover:text-indigo-400 transition">
                  Open Source Manifesto
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Explore */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#featured-skills" className="hover:text-indigo-400 transition">
                  Prompt Engineering
                </a>
              </li>
              <li>
                <a href="#featured-skills" className="hover:text-indigo-400 transition">
                  AI Research Assistant
                </a>
              </li>
              <li>
                <a href="#featured-skills" className="hover:text-indigo-400 transition">
                  Coding Assistant
                </a>
              </li>
              <li>
                <a href="#featured-skills" className="hover:text-indigo-400 transition">
                  Content Writer
                </a>
              </li>
              <li>
                <a href="#featured-skills" className="hover:text-indigo-400 transition">
                  Browse All Categories
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="mailto:support@aiskillexchanger.dev" className="hover:text-indigo-400 transition">
                  support@aiskillexchanger.dev
                </a>
              </li>
              <li>
                <a href="#partnerships" className="hover:text-indigo-400 transition">
                  Model Partnerships
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:text-indigo-400 transition">
                  Submit Feedback
                </a>
              </li>
              <li>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repository"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter community"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Discord chat"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                  >
                    <MessageSquare className="h-4 w-4" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AI Skill Exchanger. Built with Next.js, TypeScript & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition">Terms of Service</a>
            <a href="#cookies" className="hover:text-slate-400 transition">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
