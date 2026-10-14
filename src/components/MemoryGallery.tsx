import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { GALLERY_ITEMS } from '../types';

interface MemoryGalleryProps {
  onContinue: () => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ onContinue }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const currentItem = GALLERY_ITEMS[currentIndex];
  const isLast = currentIndex === GALLERY_ITEMS.length - 1;

  // Preload neighboring images
  useEffect(() => {
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    [currentIndex, nextIdx, prevIdx].forEach((idx) => {
      const img = new Image();
      img.src = GALLERY_ITEMS[idx].url;
    });
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < GALLERY_ITEMS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    // In RTL: swipe left goes to next, swipe right goes to prev
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-3 sm:px-4 py-4 max-w-sm mx-auto">
      {/* Step label */}
      <div className="text-center mb-2.5">
        <span className="text-xs text-[#9b4059] font-medium">
          זיכרון {currentIndex + 1} מתוך {GALLERY_ITEMS.length}
        </span>
      </div>

      {/* Main Card with Stable Height Frame */}
      <div
        className="w-full bg-[#fffdfa] rounded-2xl p-4 border border-[#eed0d7] shadow-sm flex flex-col items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Fixed height photo frame - prevents layout jumps and shows full image without cropping faces */}
        <div className="w-full h-[320px] sm:h-[350px] rounded-xl overflow-hidden bg-[#faf2f4] flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentItem.id}
              src={currentItem.url}
              alt={`זיכרון ${currentIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
              className="w-full h-full object-contain select-none"
              loading="eager"
            />
          </AnimatePresence>
        </div>

        {/* Stable height caption area so buttons never jump */}
        <div className="w-full min-h-[76px] flex items-center justify-center pt-3 pb-1 text-center px-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2, ease: CALM_EASE }}
              className="font-serif text-base sm:text-[17px] text-[#2c141e] leading-relaxed font-normal"
            >
              ״{currentItem.caption.replace(/^״|״$/g, '')}״
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-1.5 py-1">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`תמונה ${idx + 1}`}
              className={`transition-colors duration-150 rounded-full ${
                idx === currentIndex
                  ? 'w-4 h-1.5 bg-[#be185d]'
                  : 'w-1.5 h-1.5 bg-[#eec2cd] hover:bg-[#be185d]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="w-full mt-3 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2.5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex-1 py-2 px-3 rounded-lg border text-xs font-medium flex items-center justify-center gap-1 transition-colors duration-150 ${
              currentIndex === 0
                ? 'border-[#eed0d7] text-[#cbb0b8] cursor-not-allowed opacity-50'
                : 'border-[#eed0d7] bg-white text-[#7d3b4e] hover:bg-[#fff5f7] cursor-pointer hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
            <span>לתמונה הקודמת</span>
          </button>

          <button
            onClick={handleNext}
            disabled={isLast}
            className={`flex-1 py-2 px-3 rounded-lg border text-xs font-medium flex items-center justify-center gap-1 transition-colors duration-150 ${
              isLast
                ? 'border-[#eed0d7] text-[#cbb0b8] cursor-not-allowed opacity-50'
                : 'border-[#eed0d7] bg-white text-[#7d3b4e] hover:bg-[#fff5f7] cursor-pointer hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            <span>לתמונה הבאה</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={onContinue}
          className="w-full py-2.5 px-4 bg-[#be185d] hover:bg-[#a2124d] text-white rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0"
        >
          דברים קטנים שאני אוהב בך
        </button>
      </div>
    </div>
  );
};
