'use client';

import React from 'react';
import { BookmarkCheck, Plus, ArrowLeft, Sparkles, Star, Trash2 } from 'lucide-react';
import { Skill } from '../types/skill';
import SkillCard from './SkillCard';

interface MySkillsViewProps {
  userSkills: Skill[];
  onBackToHome: () => void;
  onOpenCreateModal: () => void;
  onViewSkill: (skill: Skill) => void;
}

export default function MySkillsView({
  userSkills,
  onBackToHome,
  onOpenCreateModal,
  onViewSkill,
}: MySkillsViewProps) {
  return (
    <div className="py-12 md:py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 mb-2 transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </button>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Exchanged & Created Skills
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Skills you have authored, forked, or added to your personal AI workflow collection.
          </p>
        </div>

        <button
          onClick={onOpenCreateModal}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 hover:bg-indigo-500 transition"
        >
          <Plus className="h-4 w-4" />
          <span>Create New Skill</span>
        </button>
      </div>

      {userSkills.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {userSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} onViewSkill={onViewSkill} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-12 text-center max-w-xl mx-auto my-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 mb-4">
            <BookmarkCheck className="h-7 w-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No skills in your collection yet
          </h3>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Click "Exchange Skill" on any featured skill from the homepage or create your very own workflow to see it listed here.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={onBackToHome}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50"
            >
              Browse Featured Skills
            </button>
            <button
              onClick={onOpenCreateModal}
              className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500"
            >
              Create Your First Skill
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
