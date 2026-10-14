import React from 'react';
import { motion } from 'motion/react';

interface OriginMomentProps {
  onContinue: () => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export const OriginMoment: React.FC<OriginMomentProps> = ({ onContinue }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-4 py-4 max-w-sm mx-auto text-center">
      {/* Clean minimal composition container */}
      <div className="w-full bg-[#fffdfa] rounded-2xl p-6 border border-[#eed0d7] shadow-sm mb-5 text-center">
        {/* Subtle, delicate line-art sea horizon with brief 200ms touch lines in center */}
        <div className="w-full h-24 mb-5 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 280 80"
            className="w-full max-w-[260px] h-20 text-[#be185d]"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horizon line */}
            <line
              x1="10"
              y1="40"
              x2="270"
              y2="40"
              stroke="#e5b8c4"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            {/* Gentle distant water ripples (minimal line art) */}
            <path
              d="M 60 48 Q 75 46 90 48 T 120 48"
              stroke="#f2c8d4"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M 160 52 Q 180 50 200 52 T 230 52"
              stroke="#f2c8d4"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* Subtle meeting of two small lines/marks in the center (200ms touch) */}
            <motion.line
              x1="118"
              y1="40"
              x2="134"
              y2="40"
              stroke="#be185d"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
            />
            <motion.circle
              cx="140"
              cy="40"
              r="2"
              fill="#be185d"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, duration: 0.2, ease: CALM_EASE }}
            />
            <motion.line
              x1="162"
              y1="40"
              x2="146"
              y2="40"
              stroke="#be185d"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
            />
          </svg>
        </div>

        {/* Lead sentence */}
        <h2 className="font-serif text-lg sm:text-xl font-bold text-[#831843] mb-3">
          הים. החברים. כיף אגרוף אחד.
        </h2>

        {/* Existing personal story */}
        <p className="font-serif text-base sm:text-lg text-[#32131d] leading-relaxed">
          היינו בים עם חברים. נתת לי כיף אגרוף, ואני לא ידעתי שבאותו רגע קטן אני מתחיל להתאהב בך.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onContinue}
        className="w-full max-w-[260px] py-2.5 px-4 bg-[#be185d] hover:bg-[#a2124d] text-white rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0"
      >
        ומה קרה מאז?
      </button>
    </div>
  );
};
