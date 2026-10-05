'use client';

import React from 'react';
import { Star, ArrowUpRight, Sparkles, Download, Layers, ShieldCheck } from 'lucide-react';
import { Skill, SkillDifficulty } from '../types/skill';

interface SkillCardProps {
  skill: Skill;
  onViewSkill: (skill: Skill) => void;
}

export default function SkillCard({ skill, onViewSkill }: SkillCardProps) {
  const getDifficultyBadge = (difficulty: SkillDifficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60';
      case 'Intermediate':
        return 'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60';
      case 'Advanced':
        return 'bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300';
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300/80 dark:hover:border-indigo-500/40">
      <div>
        {/* Top Meta: Category & Difficulty */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center rounded-lg bg-indigo-50/80 dark:bg-indigo-950/50 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50">
            {skill.category}
          </span>
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${getDifficultyBadge(
              skill.difficulty
            )}`}
          >
            {skill.difficulty}
          </span>
        </div>

        {/* Skill Name */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {skill.name}
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
          {skill.shortDescription}
        </p>

        {/* Model tags preview */}
        {skill.modelCompatibility && skill.modelCompatibility.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {skill.modelCompatibility.slice(0, 3).map((model) => (
              <span
                key={model}
                className="rounded-md bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300"
              >
                {model}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer Details */}
      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
        {/* Author info & Rating */}
        <div className="flex items-center justify-between gap-3 mb-4">
          {/* Author */}
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={skill.author.avatar}
              alt={skill.author.name}
              className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
              loading="lazy"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 truncate">
                {skill.author.name}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                {skill.author.role}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 shrink-0 bg-amber-50 dark:bg-amber-950/30 px-2 py-1 rounded-md border border-amber-200/50 dark:border-amber-800/40">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
            <span className="text-xs font-bold text-amber-900 dark:text-amber-300">
              {skill.rating.toFixed(1)}
            </span>
            <span className="text-[10px] text-slate-400">
              ({skill.reviewsCount})
            </span>
          </div>
        </div>

        {/* View Skill Button */}
        <button
          onClick={() => onViewSkill(skill)}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 py-2.5 px-4 text-xs font-semibold text-white shadow-sm transition-all duration-200 group-hover:shadow-md"
        >
          <span>View Skill</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}
