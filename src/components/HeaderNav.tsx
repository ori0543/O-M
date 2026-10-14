import React from 'react';
import { Heart, ChevronRight, Home } from 'lucide-react';
import { ExperienceStep } from '../types';

interface HeaderNavProps {
  currentStep: ExperienceStep;
  onNavigate: (step: ExperienceStep) => void;
  unlockedSteps: Set<ExperienceStep>;
  onGoToHub?: () => void;
}

const STEPS_ORDER: { step: ExperienceStep; label: string }[] = [
  { step: 'intro', label: 'פתיחה' },
  { step: 'origin', label: 'הרגע שהתחיל' },
  { step: 'gallery', label: 'זיכרונות' },
  { step: 'littleThings', label: 'דברים קטנים' },
  { step: 'letter', label: 'מכתב' },
];

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentStep,
  onNavigate,
  unlockedSteps,
  onGoToHub,
}) => {
  const currentIndex = STEPS_ORDER.findIndex((s) => s.step === currentStep);

  return (
    <header className="sticky top-0 z-30 w-full bg-[#faf5f5]/95 border-b border-[#f0d9df]">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {onGoToHub && (
            <button
              onClick={onGoToHub}
              className="flex items-center gap-1 text-xs text-[#be123c] hover:text-[#881337] py-1 px-1.5 rounded transition-colors duration-150 font-medium"
              title="חזרה לעמוד הראשי — האזור של אורי ומיכל"
              aria-label="האזור של אורי ומיכל"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">האזור שלנו</span>
            </button>
          )}

          {currentIndex > 0 ? (
            <button
              onClick={() => onNavigate(STEPS_ORDER[currentIndex - 1].step)}
              className="flex items-center gap-0.5 text-xs text-[#8f3a53] hover:text-[#5c1b2c] py-1 px-1.5 rounded transition-colors duration-150"
              aria-label="חזרה לשלב הקודם"
            >
              <ChevronRight className="w-4 h-4" />
              <span>שלב קודם</span>
            </button>
          ) : (
            <div className="flex items-center gap-1 text-xs font-serif text-[#9b4059]">
              <Heart className="w-3.5 h-3.5 text-[#be185d] fill-[#be185d]" />
              <span>יום הולדת עברי</span>
            </div>
          )}
        </div>

        {/* Subtle step indicators */}
        <div className="flex items-center gap-1.5">
          {STEPS_ORDER.map((item) => {
            const isCurrent = item.step === currentStep;
            const isUnlocked = unlockedSteps.has(item.step);
            return (
              <button
                key={item.step}
                disabled={!isUnlocked}
                onClick={() => isUnlocked && onNavigate(item.step)}
                title={item.label}
                aria-label={item.label}
                className={`transition-colors duration-150 rounded-full flex items-center justify-center ${
                  isCurrent
                    ? 'w-5 h-1.5 bg-[#be185d]'
                    : isUnlocked
                    ? 'w-1.5 h-1.5 bg-[#f472b6] hover:bg-[#be185d]'
                    : 'w-1.5 h-1.5 bg-[#ebd0d7]'
                }`}
              />
            );
          })}
        </div>

        {/* Strictly visual "1/5", "2/5" in LTR to prevent RTL slash inversion */}
        <div className="text-xs text-[#9b4059] font-sans">
          <span dir="ltr" className="inline-block font-medium">
            {currentIndex + 1}/5
          </span>
        </div>
      </div>
    </header>
  );
};
