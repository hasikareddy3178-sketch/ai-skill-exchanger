'use client';

import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, User } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onLoginSuccess,
  isLoggedIn,
  onLogout,
}: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleDemoLogin = () => {
    onLoginSuccess('Alex Rivera');
    onClose();
  };

  const handleFormLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess(email.split('@')[0] || 'Alex Rivera');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-4 bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {isLoggedIn ? 'Account Settings' : 'Sign In to AI Skill Exchanger'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isLoggedIn ? (
            <div className="text-center py-4 space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <User className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Alex Rivera
                </h4>
                <p className="text-xs text-slate-500">alex.rivera@example.com</p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-600 border border-emerald-200 dark:border-emerald-800">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Frontend Demo Session Active</span>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="flex-1 rounded-xl bg-rose-600 py-2.5 text-xs font-semibold text-white hover:bg-rose-500"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 p-3 text-xs text-indigo-900 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50">
                💡 <strong>Frontend Prototype:</strong> Backend authentication is mocked for instant testing. Click below to sign in instantly with a demo profile.
              </div>

              {/* Quick Demo Sign In */}
              <button
                onClick={handleDemoLogin}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/30 hover:bg-indigo-500 transition"
              >
                <span>Continue as Alex Rivera (Demo)</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                </div>
                <span className="relative bg-white dark:bg-slate-900 px-3 text-xs text-slate-400">
                  or sign in with email
                </span>
              </div>

              <form onSubmit={handleFormLogin} className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@domain.com"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-3.5 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 py-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  Sign In
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
