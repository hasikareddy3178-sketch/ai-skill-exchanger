'use client';

import React, { useState, useMemo } from 'react';
import { Filter, Search, Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Skill } from '../types/skill';
import SkillCard from './SkillCard';
import { CATEGORIES } from '../data/skills';

interface FeaturedSkillsProps {
  skills: Skill[];
  onViewSkill: (skill: Skill) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function FeaturedSkills({
  skills,
  onViewSkill,
  searchQuery,
  setSearchQuery,
}: FeaturedSkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'popular' | 'name'>('popular');

  const filteredSkills = useMemo(() => {
    return skills
      .filter((skill) => {
        // Category filter
        if (selectedCategory !== 'All' && skill.category !== selectedCategory) {
          return false;
        }
        // Difficulty filter
        if (selectedDifficulty !== 'All' && skill.difficulty !== selectedDifficulty) {
          return false;
        }
        // Search query
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = skill.name.toLowerCase().includes(q);
          const matchDesc = skill.shortDescription.toLowerCase().includes(q);
          const matchAuthor = skill.author.name.toLowerCase().includes(q);
          const matchTags = skill.tags?.some((t) => t.toLowerCase().includes(q));
          const matchCategory = skill.category.toLowerCase().includes(q);
          const matchModel = skill.modelCompatibility?.some((m) => m.toLowerCase().includes(q));
          return matchName || matchDesc || matchAuthor || matchTags || matchCategory || matchModel;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'popular') return b.reviewsCount - a.reviewsCount;
        return a.name.localeCompare(b.name);
      });
  }, [skills, selectedCategory, selectedDifficulty, searchQuery, sortBy]);

  return (
    <section id="featured-skills" className="py-16 md:py-24 bg-slate-50/50 dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Verified AI Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured AI Skills
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Battle-tested prompts, custom GPTs, and agentic workflows shared by community experts.
            </p>
          </div>

          {/* Quick Filters / Sorting */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Difficulty selector */}
            <div className="flex items-center gap-1 bg-white dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700 text-xs shadow-sm">
              <span className="px-2 text-slate-400 font-medium">Level:</span>
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition ${
                    selectedDifficulty === diff
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 rounded-xl px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-xs shadow-sm">
              <ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />
              <select
                aria-label="Sort skills"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent border-none text-slate-700 dark:text-slate-200 focus:outline-none font-medium cursor-pointer"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-150 ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/90 dark:border-slate-700/80 hover:bg-slate-100/80 dark:hover:bg-slate-700/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} onViewSkill={onViewSkill} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
              No matching AI skills found
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Try adjusting your search terms or clearing category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="mt-5 inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
