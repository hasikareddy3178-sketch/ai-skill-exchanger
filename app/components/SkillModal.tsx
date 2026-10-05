'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Star, Download, ShieldCheck, Cpu, Sparkles, ExternalLink, Bookmark, Share2 } from 'lucide-react';
import { Skill } from '../types/skill';

interface SkillModalProps {
  skill: Skill | null;
  onClose: () => void;
  onExchange?: (skill: Skill) => void;
}

export default function SkillModal({ skill, onClose, onExchange }: SkillModalProps) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [exchanged, setExchanged] = useState(false);

  if (!skill) return null;

  const handleCopy = () => {
    if (skill.samplePrompt) {
      navigator.clipboard.writeText(skill.samplePrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExchange = () => {
    setExchanged(true);
    if (onExchange) onExchange(skill);
    setTimeout(() => setExchanged(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-4 bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              {skill.category}
            </span>
            <span className="rounded-full bg-slate-200/80 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              {skill.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              aria-label="Bookmark this skill"
              className={`p-2 rounded-xl border transition ${
                bookmarked
                  ? 'border-indigo-300 bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:border-indigo-800'
                  : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${bookmarked ? 'fill-indigo-600' : ''}`} />
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Title & Author row */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {skill.name}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <img
                  src={skill.author.avatar}
                  alt={skill.author.name}
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {skill.author.name}
                </span>
                <span className="text-slate-400">{skill.author.handle}</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500 font-semibold bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-md">
                <Star className="h-3.5 w-3.5 fill-amber-400" />
                <span>{skill.rating.toFixed(1)}</span>
                <span className="text-slate-400 font-normal">({skill.reviewsCount} reviews)</span>
              </div>
              <span className="text-slate-400">Updated {skill.updatedAt}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Overview & Capabilities
            </h4>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {skill.fullDescription || skill.shortDescription}
            </p>
          </div>

          {/* Use Case Box */}
          {skill.useCase && (
            <div className="rounded-xl border border-indigo-100 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/30 p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-300 mb-1">
                <Sparkles className="h-4 w-4 text-indigo-500" />
                <span>Ideal Use Case</span>
              </div>
              <p className="text-xs text-indigo-950/80 dark:text-indigo-200">
                {skill.useCase}
              </p>
            </div>
          )}

          {/* Compatible AI Models */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
              <Cpu className="h-3.5 w-3.5" />
              <span>Compatible AI Systems</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {skill.modelCompatibility.map((model) => (
                <span
                  key={model}
                  className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>

          {/* Sample Prompt / Instruction snippet */}
          {skill.samplePrompt && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Core Prompt / Skill Logic
                </h4>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-2xl bg-slate-900 p-4 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
                <pre className="whitespace-pre-wrap">{skill.samplePrompt}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="border-t border-slate-100 dark:border-slate-800 px-6 py-4 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>Community Verified • Safe & Tested</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleExchange}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 hover:bg-indigo-500 transition"
            >
              {exchanged ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Exchanged! Added to My Skills</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Exchange Skill</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
