import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface EnvelopeIntroProps {
  onContinue: () => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onContinue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-3 sm:px-4 py-4 max-w-sm mx-auto text-center">
      {/* Title header */}
      <div className="mb-4 text-center">
        <p className="text-xs text-[#9b4059] font-medium tracking-wide mb-1.5 font-sans">
          יום הולדת שמח, אהובה שלי
        </p>
        <h1 className="text-2xl sm:text-[26px] font-serif font-bold text-[#34111d] leading-snug tracking-tight">
          ״מיכל, הלוואי שיכולת לראות את עצמך דרך העיניים שלי״
        </h1>
      </div>

      {/* Main Stationery Experience Container */}
      <div className="w-full max-w-[340px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED ENVELOPE: Authentic bespoke letter envelope */
            <motion.div
              key="closed-envelope"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: CALM_EASE }}
              onClick={handleOpen}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen();
              }}
              className="w-full cursor-pointer select-none group"
              aria-label="לחצי כדי לפתוח את המעטפה"
            >
              {/* Envelope Body with Realistic Stationery Aesthetics */}
              <div className="relative w-full aspect-[16/11] bg-[#f8d7df] rounded-2xl border border-[#e3b5c1] shadow-md overflow-hidden flex flex-col justify-between p-4 transition-transform duration-150 group-hover:-translate-y-0.5">
                {/* Diagonal Envelope Fold Seams */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
                    backgroundColor: '#f2c7d2',
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none border-b border-[#dfabb9]/80 shadow-xs"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    backgroundColor: '#f6ced7',
                  }}
                />

                {/* Top Corner Details: Vintage Postage Stamp & Postmark */}
                <div className="relative z-10 w-full flex items-start justify-between">
                  {/* Left Postmark stamp */}
                  <div className="w-12 h-12 rounded-full border border-dashed border-[#b66679]/60 flex flex-col items-center justify-center rotate-[-8deg] opacity-75 select-none pointer-events-none">
                    <span className="text-[8px] font-sans font-semibold text-[#8a3348]">דואר אישי</span>
                    <span className="text-[7px] font-mono text-[#8a3348]">2026</span>
                    <span className="text-[7px] text-[#8a3348]">באהבה</span>
                  </div>

                  {/* Right Postage Stamp (vintage perforated edge look) */}
                  <div className="w-10 h-12 bg-[#fffcf9] border-2 border-dashed border-[#d98fa0] rounded-xs shadow-xs p-1 flex flex-col items-center justify-between rotate-[3deg] select-none pointer-events-none">
                    <span className="text-[7px] font-serif text-[#a13b52] font-bold">MICHAL</span>
                    <Heart className="w-3.5 h-3.5 text-[#e11d48] fill-[#e11d48]" />
                    <span className="text-[6px] font-mono text-[#9b4a5d]">❤️</span>
                  </div>
                </div>

                {/* Center: Wax Seal (חותמת שעווה יוקרתית) */}
                <div className="relative z-20 flex flex-col items-center my-auto">
                  <div className="relative w-13 h-13 rounded-full bg-gradient-to-br from-[#a61c38] via-[#881337] to-[#600d24] flex items-center justify-center shadow-lg border-2 border-[#fbcfe8]/40 group-hover:scale-105 transition-transform duration-150">
                    {/* Inner pressed ring */}
                    <div className="w-9 h-9 rounded-full border border-[#f472b6]/40 flex items-center justify-center bg-[#7a102f] shadow-inner">
                      <Heart className="w-4 h-4 text-[#ffd6e0] fill-[#ffd6e0] drop-shadow-xs" />
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-[#7d3246] mt-2 bg-[#fffbfd]/90 px-3 py-0.5 rounded-full border border-[#edd0d7] shadow-xs">
                    לחצי על החותמת לפתיחה
                  </span>
                </div>

                {/* Bottom Address lines (written with calligraphy feel) */}
                <div className="relative z-10 text-right pr-2 pb-0.5 select-none pointer-events-none">
                  <p className="font-serif text-[13px] text-[#5c1c2e] font-semibold leading-tight">
                    לכבוד: מיכלי שלי
                  </p>
                  <p className="font-serif text-[11px] text-[#853c4f] font-normal">
                    מאת: אורי
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* OPENED LETTER: High-quality luxury letter parchment */
            <motion.div
              key="opened-letter"
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: CALM_EASE }}
              className="w-full bg-[#fffefb] rounded-2xl p-6 sm:p-7 border border-[#e8ccd3] shadow-md flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Decorative inner parchment border */}
              <div className="absolute inset-2.5 border border-[#f0d4dc] rounded-xl pointer-events-none" />

              {/* Classic Monogram Crest Header */}
              <div className="relative z-10 flex flex-col items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#faf0f3] border border-[#ebd0d7] flex items-center justify-center text-[#9f1239] shadow-xs mb-1.5">
                  <span className="font-serif font-bold text-sm tracking-widest text-[#881337]">
                    M & O
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#9b4059] font-serif">
                  <span>✦</span>
                  <span>מכתב אישי מהלב</span>
                  <span>✦</span>
                </div>
              </div>

              {/* Exact greeting text */}
              <div className="relative z-10 my-1 px-1">
                <span className="text-xl text-[#e11d48] font-serif leading-none block mb-1 select-none">
                  “
                </span>
                <p className="font-serif text-lg sm:text-[19px] text-[#2c141e] leading-relaxed font-normal">
                  מיכל שלי, הכנתי לך משהו קטן ליום ההולדת. זה מתחיל ברגע אחד שאולי את אפילו לא יודעת שאני זוכר כל כך טוב...
                </p>
              </div>

              {/* Continue button: Luxurious, clear, completely unobscured */}
              <div className="relative z-10 w-full mt-6">
                <button
                  type="button"
                  onClick={onContinue}
                  className="w-full py-3.5 px-6 bg-[#9f1239] hover:bg-[#881337] active:bg-[#720e2c] text-[#fff5f7] rounded-xl text-base font-medium tracking-wide shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 border border-[#fbcfe8]/40"
                  aria-label="תראי לי"
                >
                  <span className="font-serif font-semibold text-lg">תראי לי</span>
                  <span className="text-base">💗</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
