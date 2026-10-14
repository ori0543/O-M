import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { BITE_IMAGE_URL } from '../types';

interface LittleThingsProps {
  onContinue: () => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export const LittleThings: React.FC<LittleThingsProps> = ({ onContinue }) => {
  const [activeHeart, setActiveHeart] = useState<number>(1);
  const [visitedHearts, setVisitedHearts] = useState<Set<number>>(new Set([1]));

  const handleSelectHeart = (id: number) => {
    setActiveHeart(id);
    setVisitedHearts((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const allVisited = visitedHearts.size >= 4;

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-3 sm:px-4 py-4 max-w-sm mx-auto text-center">
      {/* Title */}
      <div className="mb-3 text-center">
        <span className="text-xs text-[#9b4059] font-medium">
          דברים קטנים שאני אוהב בך
        </span>
        <h2 className="text-lg sm:text-xl font-serif font-bold text-[#32131d] mt-0.5">
          ארבעה רגעים מהלב
        </h2>
      </div>

      {/* Four Simple Heart Buttons */}
      <div className="w-full flex items-center justify-center gap-3">
        {[1, 2, 3, 4].map((id) => {
          const isSelected = activeHeart === id;
          return (
            <button
              key={id}
              onClick={() => handleSelectHeart(id)}
              className={`flex-1 py-2 px-1 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-colors duration-150 cursor-pointer ${
                isSelected
                  ? 'bg-[#fce7ed] text-[#be185d] border-[#e8b5c2]'
                  : 'bg-white text-[#8f475a] border-[#eed0d7] hover:bg-[#fff5f7]'
              }`}
              aria-label={`סיבה ${id}`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  isSelected ? 'fill-[#be185d] text-[#be185d]' : 'text-[#be185d]'
                }`}
              />
              <span>{id}</span>
            </button>
          );
        })}
      </div>

      {/* Content panel placed directly under the buttons (16-20px gap) */}
      <div className="w-full mt-4 bg-[#fffdfa] rounded-2xl p-5 border border-[#eed0d7] shadow-sm flex flex-col items-center justify-center min-h-[260px]">
        <AnimatePresence mode="wait">
          {activeHeart === 1 && (
            <motion.div
              key="reason-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
              className="w-full flex flex-col items-center"
            >
              {/* Photo 8858: keep both faces fully in frame */}
              <div className="w-full h-44 rounded-xl overflow-hidden bg-[#faf2f4] mb-3.5 flex items-center justify-center">
                <img
                  src={BITE_IMAGE_URL}
                  alt="התמונה שבה היא נושכת אותי"
                  className="w-full h-full object-contain select-none"
                />
              </div>
              <p className="font-serif text-base sm:text-[18px] text-[#2c141e] leading-relaxed">
                ״אני אוהב את הצד השובב והמשוגע שלך — אפילו כשאת נושכת אותי.״
              </p>
            </motion.div>
          )}

          {activeHeart === 2 && (
            <motion.div
              key="reason-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
              className="w-full py-6 flex flex-col items-center justify-center text-center"
            >
              <p className="font-serif text-base sm:text-[18px] text-[#2c141e] leading-relaxed">
                אני אוהב את הקול החמוד של ה׳
                <span className="text-[#be185d] font-semibold">
                  אבל אבל אבלללל
                </span>
                ׳ שלך. הוא תמיד גורם לי לחייך.
              </p>
            </motion.div>
          )}

          {activeHeart === 3 && (
            <motion.div
              key="reason-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
              className="w-full py-6 flex flex-col items-center justify-center text-center"
            >
              <p className="font-serif text-base sm:text-[18px] text-[#2c141e] leading-relaxed">
                ״אני אוהב שאנחנו יכולים לעשות שטויות ולהרגיש הכי בנוח בעולם.״
              </p>
            </motion.div>
          )}

          {activeHeart === 4 && (
            <motion.div
              key="reason-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
              className="w-full py-6 flex flex-col items-center justify-center text-center"
            >
              <p className="font-serif text-base sm:text-[18px] text-[#2c141e] leading-relaxed">
                ״אני אוהב את הרגעים שבהם את מתקרבת אליי, ופתאום הכול מרגיש במקום.״
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progression button */}
      <div className="w-full mt-4">
        {allVisited ? (
          <button
            onClick={onContinue}
            className="w-full py-2.5 px-4 bg-[#be185d] hover:bg-[#a2124d] text-white rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            נשאר לי עוד משהו להגיד לך 💌
          </button>
        ) : (
          <div className="text-xs text-[#9b4059] py-1 text-center">
            צפית ב־{visitedHearts.size} מתוך 4
          </div>
        )}
      </div>
    </div>
  );
};
