'use client';

import React from 'react';
import { User, Award, Zap, Sparkles, ArrowLeft, ShieldCheck, Mail, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface ProfileViewProps {
  onBackToHome: () => void;
  userName?: string;
}

export default function ProfileView({ onBackToHome, userName = 'Alex Rivera' }: ProfileViewProps) {
  return (
    <div className="py-12 md:py-16 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <button
        onClick={onBackToHome}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 mb-6 transition"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to Home</span>
      </button>

      {/* Profile Header Card */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80"
              alt={userName}
              className="h-24 w-24 rounded-2xl object-cover ring-4 ring-indigo-500/20 shadow-md"
            />
            <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white shadow">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-2">
                  <span>{userName}</span>
                  <span className="rounded-full bg-emerald-50 text-emerald-600 px-2 py-0.5 text-[11px] font-semibold border border-emerald-200">
                    Pro Exchanger
                  </span>
                </h2>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                  @alex_rivera • Full-Stack AI Engineer
                </p>
              </div>

              <div className="flex justify-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs text-slate-600 dark:text-slate-300 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  Verified Exchanger
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Passionate about building autonomous agent workflows, chain-of-thought prompt templates, and next-gen developer productivity tooling with LLMs.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> San Francisco, CA
              </span>
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" /> alex@example.com
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> Joined March 2026
              </span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 text-center">
            <span className="text-2xl font-black text-slate-900 dark:text-white">14</span>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">Skills Exchanged</p>
          </div>
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 text-center">
            <span className="text-2xl font-black text-slate-900 dark:text-white">4</span>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">Skills Authored</p>
          </div>
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 text-center">
            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">4.95</span>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">Creator Rating</p>
          </div>
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-4 text-center">
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">920+</span>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">Community Upvotes</p>
          </div>
        </div>
      </div>

      {/* Connected AI Environments */}
      <div className="mt-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
          Configured AI Workspaces (Local Mock)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: 'Cursor / VS Code AI Assistant', status: 'Active & Synced', model: 'Claude 3.5 Sonnet' },
            { name: 'OpenAI ChatGPT Plus', status: 'Custom GPT Ready', model: 'GPT-4o' },
            { name: 'Google Antigravity / Gemini Workspace', status: 'Integrated', model: 'Gemini 1.5 Pro' },
            { name: 'Local Ollama Instance', status: 'Configured', model: 'Llama 3.1 70B' },
          ].map((env) => (
            <div
              key={env.name}
              className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40"
            >
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">{env.name}</p>
                <p className="text-[11px] text-slate-500">{env.model}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                <CheckCircle className="h-3 w-3" />
                {env.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
