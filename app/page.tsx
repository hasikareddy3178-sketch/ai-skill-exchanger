'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSkills from './components/FeaturedSkills';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import SkillModal from './components/SkillModal';
import CreateSkillModal from './components/CreateSkillModal';
import LoginModal from './components/LoginModal';
import MySkillsView from './components/MySkillsView';
import ProfileView from './components/ProfileView';
import { SAMPLE_SKILLS } from './data/skills';
import { Skill } from './types/skill';

export default function HomePage() {
  const [skills, setSkills] = useState<Skill[]>(SAMPLE_SKILLS);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals state
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  // User state (frontend mock)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('Alex Rivera');
  const [userSkills, setUserSkills] = useState<Skill[]>([
    SAMPLE_SKILLS[0], // Prompt Engineering added by default to user's collection
  ]);

  // Toast / notification feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSkillCreated = (newSkill: Skill) => {
    setSkills((prev) => [newSkill, ...prev]);
    setUserSkills((prev) => [newSkill, ...prev]);
    showToast(`"${newSkill.name}" has been published to the exchange!`);
  };

  const handleExchangeSkill = (skill: Skill) => {
    if (!userSkills.some((s) => s.id === skill.id)) {
      setUserSkills((prev) => [skill, ...prev]);
      showToast(`Exchanged "${skill.name}"! Added to My Skills.`);
    } else {
      showToast(`"${skill.name}" is already in your My Skills collection.`);
    }
  };

  const handleLoginSuccess = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    showToast(`Welcome back, ${name}!`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('Signed out of demo session.');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Global Notification Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 animate-bounce duration-300">
          <div className="flex items-center gap-2 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-3 text-xs font-semibold shadow-xl border border-slate-700/50">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* 1. Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCreateModal={() => setIsCreateModalOpen(true)}
        onLoginClick={() => setIsLoginModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'home' || activeTab === 'explore' ? (
          <>
            {/* 2. Hero Section */}
            <Hero
              onOpenCreateModal={() => setIsCreateModalOpen(true)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* 3. Featured Skills Section */}
            <FeaturedSkills
              skills={skills}
              onViewSkill={(skill) => setSelectedSkill(skill)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {/* How It Works Section */}
            <HowItWorks />
          </>
        ) : activeTab === 'my-skills' ? (
          <MySkillsView
            userSkills={userSkills}
            onBackToHome={() => setActiveTab('home')}
            onOpenCreateModal={() => setIsCreateModalOpen(true)}
            onViewSkill={(skill) => setSelectedSkill(skill)}
          />
        ) : activeTab === 'profile' ? (
          <ProfileView
            userName={userName}
            onBackToHome={() => setActiveTab('home')}
          />
        ) : null}
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* Modals */}
      <SkillModal
        skill={selectedSkill}
        onClose={() => setSelectedSkill(null)}
        onExchange={handleExchangeSkill}
      />

      <CreateSkillModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSkillCreated={handleSkillCreated}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
    </div>
  );
}
