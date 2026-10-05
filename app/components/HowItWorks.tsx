'use client';

import React from 'react';
import { Search, Shuffle, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover Tested Skills',
      description: 'Find production-grade prompts and AI workflows across coding, research, writing, and design.',
      icon: Search,
      highlight: 'Peer-reviewed & scored',
    },
    {
      number: '02',
      title: 'Exchange & Collaborate',
      description: 'Share your own proprietary skills to unlock workflows from the world’s top prompt engineers.',
      icon: Shuffle,
      highlight: 'Zero vendor lock-in',
    },
    {
      number: '03',
      title: 'Deploy to Any Model',
      description: 'Instantly paste or export prompts into Claude, GPT-4o, Cursor, or your local LLM agents.',
      icon: Rocket,
      highlight: 'Cross-LLM compatible',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Supercharge Your AI Capabilities in Minutes
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A frictionless platform built for prompt engineers, software developers, and knowledge workers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-8 transition hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-lg hover:shadow-indigo-500/5"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 dark:text-slate-800">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
