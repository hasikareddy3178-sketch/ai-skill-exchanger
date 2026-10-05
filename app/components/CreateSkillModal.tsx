'use client';

import React, { useState } from 'react';
import { X, Sparkles, Check, Plus, AlertCircle } from 'lucide-react';
import { Skill, SkillDifficulty } from '../types/skill';
import { CATEGORIES } from '../data/skills';

interface CreateSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkillCreated: (newSkill: Skill) => void;
}

export default function CreateSkillModal({
  isOpen,
  onClose,
  onSkillCreated,
}: CreateSkillModalProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Prompt Craft');
  const [difficulty, setDifficulty] = useState<SkillDifficulty>('Intermediate');
  const [shortDescription, setShortDescription] = useState('');
  const [samplePrompt, setSamplePrompt] = useState('');
  const [modelCompatibility, setModelCompatibility] = useState('GPT-4o, Claude 3.5 Sonnet');
  const [useCase, setUseCase] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide a skill name.');
      return;
    }
    if (!shortDescription.trim()) {
      setError('Please provide a brief description.');
      return;
    }
    if (!samplePrompt.trim()) {
      setError('Please provide the prompt or workflow instructions.');
      return;
    }

    const models = modelCompatibility
      .split(',')
      .map((m) => m.trim())
      .filter(Boolean);

    const newSkill: Skill = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      shortDescription: shortDescription.trim(),
      fullDescription: `${shortDescription.trim()} Custom skill created and published to the exchange.`,
      category,
      difficulty,
      author: {
        name: 'You (Creator)',
        handle: '@creator',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        role: 'Community Exchanger',
        rating: 5.0,
        exchangesCount: 1,
      },
      rating: 5.0,
      reviewsCount: 1,
      downloadsCount: 1,
      tags: ['Custom', category, difficulty],
      modelCompatibility: models.length ? models : ['GPT-4o', 'Claude 3.5 Sonnet'],
      samplePrompt: samplePrompt.trim(),
      useCase: useCase.trim() || 'General AI workflow acceleration',
      updatedAt: 'Just now',
    };

    onSkillCreated(newSkill);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setShortDescription('');
      setSamplePrompt('');
      setUseCase('');
      setError('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-4 bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Create a New AI Skill
              </h3>
              <p className="text-xs text-slate-500">
                Share your prompt or workflow with the community
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {error && (
            <div className="flex items-center gap-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 p-3 text-xs text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 p-3 text-xs text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900">
              <Check className="h-4 w-4 shrink-0" />
              <span>Skill published successfully to the exchange!</span>
            </div>
          )}

          {/* Skill Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Skill Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Autonomous Bug Triager"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Category & Difficulty Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Category
              </label>
              <select
                aria-label="Skill Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                {CATEGORIES.filter((c) => c !== 'All').map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Difficulty Level
              </label>
              <select
                aria-label="Difficulty Level"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as SkillDifficulty)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 px-3 py-2 text-sm text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Short Description *
            </label>
            <textarea
              required
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="What makes this AI skill unique or valuable?"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Prompt / Instructions */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Prompt Instructions or Workflow Logic *
            </label>
            <textarea
              required
              rows={4}
              value={samplePrompt}
              onChange={(e) => setSamplePrompt(e.target.value)}
              placeholder="Paste the core system instructions, reasoning rules, or prompt template..."
              className="w-full font-mono text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 px-3.5 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Compatible Models */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Compatible Models (comma-separated)
            </label>
            <input
              type="text"
              value={modelCompatibility}
              onChange={(e) => setModelCompatibility(e.target.value)}
              placeholder="e.g. GPT-4o, Claude 3.5 Sonnet, Cursor"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Ideal Use Case */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Ideal Use Case (Optional)
            </label>
            <input
              type="text"
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              placeholder="e.g. Automated triage of GitHub issues and pull requests"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Footer buttons */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={success}
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-600/30 hover:bg-indigo-500 transition disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
              <span>Publish Skill to Exchange</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
