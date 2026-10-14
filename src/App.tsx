/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AppView, ExperienceStep, GALLERY_ITEMS, BITE_IMAGE_URL, SECULAR_BIRTHDAY_PHOTO_URL } from './types';
import { LoginGate } from './components/LoginGate';
import { HeaderNav } from './components/HeaderNav';
import { FloatingHearts } from './components/FloatingHearts';
import { MainHub } from './components/MainHub';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { OriginMoment } from './components/OriginMoment';
import { MemoryGallery } from './components/MemoryGallery';
import { LittleThings } from './components/LittleThings';
import { FinalLetter } from './components/FinalLetter';
import { SecularBirthdayView } from './components/SecularBirthday/SecularBirthdayView';

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export default function App() {
  const [authUser, setAuthUser] = useState<string | null>(() => {
    try {
      return localStorage.getItem('om_auth_user');
    } catch {
      return null;
    }
  });

  const [currentView, setCurrentView] = useState<AppView>('hub');
  const [currentStep, setCurrentStep] = useState<ExperienceStep>('intro');
  const [unlockedSteps, setUnlockedSteps] = useState<Set<ExperienceStep>>(
    new Set(['intro'])
  );

  // Preload all photos immediately for lightning-fast mobile experience
  useEffect(() => {
    const urls = [
      ...GALLERY_ITEMS.map((item) => item.url),
      BITE_IMAGE_URL,
      SECULAR_BIRTHDAY_PHOTO_URL,
    ];
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  const handleOpenHebrewBirthday = () => {
    setCurrentStep('intro');
    setCurrentView('hebrewBirthday');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSecularBirthday = () => {
    setCurrentView('secularBirthday');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToStep = (step: ExperienceStep) => {
    setUnlockedSteps((prev) => {
      const next = new Set(prev);
      next.add(step);
      return next;
    });
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReturnToHub = () => {
    setCurrentView('hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('om_auth_user');
    } catch {
      // Ignore
    }
    setAuthUser(null);
  };

  const viewTransition = {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.26, ease: CALM_EASE },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.16, ease: CALM_EASE },
    },
  };

  // If not authenticated, require password & username (Michal or Ori with 667315)
  if (!authUser) {
    return <LoginGate onSuccess={(user) => setAuthUser(user)} />;
  }

  return (
    <div className="min-h-screen bg-[#faf5f5] text-[#2c1a22] relative flex flex-col font-sans selection:bg-[#fce7ed] selection:text-[#831843]">
      {/* 2-3 static, motionless, low opacity background decorative hearts */}
      <FloatingHearts />

      {/* Header bar only appears when inside the Hebrew Birthday experience */}
      {currentView === 'hebrewBirthday' && (
        <HeaderNav
          currentStep={currentStep}
          onNavigate={(step) => {
            setCurrentStep(step);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          unlockedSteps={unlockedSteps}
          onGoToHub={handleReturnToHub}
        />
      )}

      {/* Main Container */}
      <main className="flex-1 w-full max-w-md mx-auto relative z-10 flex flex-col">
        <AnimatePresence mode="wait">
          {currentView === 'hub' && (
            <motion.div
              key="main-hub"
              {...viewTransition}
              className="w-full flex-1 flex flex-col justify-center"
            >
              <MainHub
                onOpenHebrewBirthday={handleOpenHebrewBirthday}
                onOpenSecularBirthday={handleOpenSecularBirthday}
              />
            </motion.div>
          )}

          {currentView === 'secularBirthday' && (
            <motion.div
              key="secular-birthday"
              {...viewTransition}
              className="w-full flex-1 flex flex-col"
            >
              <SecularBirthdayView onBackToHub={handleReturnToHub} />
            </motion.div>
          )}

          {currentView === 'hebrewBirthday' && (
            <motion.div
              key="hebrew-birthday-experience"
              {...viewTransition}
              className="w-full flex-1 flex flex-col"
            >
              <AnimatePresence mode="wait">
                {currentStep === 'intro' && (
                  <motion.div
                    key="intro"
                    {...viewTransition}
                    className="w-full flex-1 flex flex-col justify-center"
                  >
                    <EnvelopeIntro onContinue={() => handleGoToStep('origin')} />
                  </motion.div>
                )}

                {currentStep === 'origin' && (
                  <motion.div
                    key="origin"
                    {...viewTransition}
                    className="w-full flex-1 flex flex-col justify-center"
                  >
                    <OriginMoment onContinue={() => handleGoToStep('gallery')} />
                  </motion.div>
                )}

                {currentStep === 'gallery' && (
                  <motion.div
                    key="gallery"
                    {...viewTransition}
                    className="w-full flex-1 flex flex-col justify-center"
                  >
                    <MemoryGallery onContinue={() => handleGoToStep('littleThings')} />
                  </motion.div>
                )}

                {currentStep === 'littleThings' && (
                  <motion.div
                    key="littleThings"
                    {...viewTransition}
                    className="w-full flex-1 flex flex-col justify-center"
                  >
                    <LittleThings onContinue={() => handleGoToStep('letter')} />
                  </motion.div>
                )}

                {currentStep === 'letter' && (
                  <motion.div
                    key="letter"
                    {...viewTransition}
                    className="w-full flex-1 flex flex-col justify-center"
                  >
                    <FinalLetter
                      onRevisit={() => handleGoToStep('gallery')}
                      onGoToHub={handleReturnToHub}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Discreet bottom sign-out link on main hub */}
      {currentView === 'hub' && (
        <footer className="w-full py-2 text-center relative z-20">
          <button
            type="button"
            onClick={handleLogout}
            className="text-[11px] text-[#881337]/60 hover:text-[#881337] transition-colors"
          >
            מחובר/ת בתור {authUser} • התנתקות
          </button>
        </footer>
      )}
    </div>
  );
}
