import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Trophy, X, RotateCcw, Heart, RefreshCw } from 'lucide-react';
import { WHEEL_PRIZES, WheelPrize } from '../../types';

const STORAGE_WON_KEY = 'om_wheel_won_prize_v3';
const STORAGE_CAN_SPIN_KEY = 'om_wheel_can_spin_v3';

export const WheelOfFortune: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState<WheelPrize | null>(null);
  const [modalPrize, setModalPrize] = useState<WheelPrize | null>(null);

  // Clear any legacy test data from previous versions immediately
  useEffect(() => {
    try {
      localStorage.removeItem('om_wheel_won_prize_v1');
      localStorage.removeItem('om_wheel_can_spin_v1');
      localStorage.removeItem('om_wheel_won_prize_v2');
      localStorage.removeItem('om_wheel_can_spin_v2');
    } catch {
      // Ignore
    }
  }, []);

  const [hasSpun, setHasSpun] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_CAN_SPIN_KEY) === 'completed';
    } catch {
      return false;
    }
  });

  const isOri = typeof window !== 'undefined' && localStorage.getItem('om_auth_user') === 'אורי';

  // Load existing won prize if already spun in v3
  useEffect(() => {
    try {
      const savedPrizeId = localStorage.getItem(STORAGE_WON_KEY);
      if (savedPrizeId) {
        const found = WHEEL_PRIZES.find((p) => p.id === savedPrizeId);
        if (found) {
          setSelectedPrize(found);
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const resetWheel = () => {
    try {
      localStorage.removeItem(STORAGE_CAN_SPIN_KEY);
      localStorage.removeItem(STORAGE_WON_KEY);
      localStorage.removeItem('om_wheel_won_prize_v1');
      localStorage.removeItem('om_wheel_can_spin_v1');
      localStorage.removeItem('om_wheel_won_prize_v2');
      localStorage.removeItem('om_wheel_can_spin_v2');
      localStorage.removeItem('om_wheel_won_prize_v3');
      localStorage.removeItem('om_wheel_can_spin_v3');
    } catch {
      // Ignore
    }
    setHasSpun(false);
    setSelectedPrize(null);
    setModalPrize(null);
    setRotation(0);
  };

  const numSlices = WHEEL_PRIZES.length;
  const sliceAngle = 360 / numSlices;

  const handleSpin = () => {
    if (isSpinning || (hasSpun && !selectedPrize?.isBonus)) return;

    setIsSpinning(true);

    // Pick a random prize index
    const targetIndex = Math.floor(Math.random() * numSlices);
    const targetPrize = WHEEL_PRIZES[targetIndex];

    // Pointer is at the top (angle 270 degrees in SVG coordinates)
    const extraRotations = 5 + Math.floor(Math.random() * 3); // 5 to 7 full spins
    const targetSliceCenter = targetIndex * sliceAngle + sliceAngle / 2;
    const finalAngle = 270 - targetSliceCenter + extraRotations * 360;

    const currentBase = rotation - (rotation % 360);
    const targetRotation = currentBase + finalAngle;

    setRotation(targetRotation);

    // Wait for spin to complete (4.5s)
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedPrize(targetPrize);
      setModalPrize(targetPrize);

      if (!targetPrize.isBonus) {
        setHasSpun(true);
        try {
          localStorage.setItem(STORAGE_CAN_SPIN_KEY, 'completed');
          localStorage.setItem(STORAGE_WON_KEY, targetPrize.id);
        } catch {
          // Ignore
        }
      }
    }, 4500);
  };

  const createSlicePath = (index: number) => {
    const startAngle = (index * sliceAngle * Math.PI) / 180;
    const endAngle = (((index + 1) * sliceAngle) * Math.PI) / 180;
    const radius = 130;
    const cx = 140;
    const cy = 140;

    const x1 = cx + radius * Math.cos(startAngle);
    const y1 = cy + radius * Math.sin(startAngle);
    const x2 = cx + radius * Math.cos(endAngle);
    const y2 = cy + radius * Math.sin(endAngle);

    return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="w-full bg-[#fffdfa] rounded-3xl p-5 sm:p-6 border border-[#eed0d7] shadow-sm text-center flex flex-col items-center">
      {/* Title */}
      <div className="mb-4">
        <span className="text-[11px] font-sans font-semibold text-[#be123c] bg-[#fdf2f4] px-3 py-1 rounded-full border border-[#fbcfe8]">
          הפרסים הגדולים והמושקעים
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#34111d] mt-2 mb-1">
          גלגל המזל של יום ההולדת 🎡
        </h2>
        <p className="text-xs text-[#7d3b4e] font-sans max-w-[280px] mx-auto">
          {hasSpun && selectedPrize && !selectedPrize.isBonus
            ? 'סובבת את הגלגל והפרס שלך מוכן!'
            : 'יש לך סיבוב אחד בגלגל – לחצי על המרכז כדי לסובב!'}
        </p>
      </div>

      {/* The Wheel Container */}
      <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] my-3 flex items-center justify-center">
        {/* Top Pointer */}
        <div className="absolute -top-3 z-30 pointer-events-none drop-shadow-md">
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[18px] border-t-[#881337]" />
        </div>

        {/* Outer Wheel Rim */}
        <div className="absolute inset-0 rounded-full border-4 border-[#e2a8b7] shadow-lg pointer-events-none z-10" />

        {/* SVG Wheel with Wedges */}
        <div
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? 'transform 4.5s cubic-bezier(0.15, 0.9, 0.2, 1)'
              : 'none',
          }}
          className="w-full h-full rounded-full overflow-hidden will-change-transform"
        >
          <svg viewBox="0 0 280 280" className="w-full h-full select-none">
            {WHEEL_PRIZES.map((prize, idx) => {
              const textAngle = idx * sliceAngle + sliceAngle / 2;
              const textRadius = 88;
              const textRad = (textAngle * Math.PI) / 180;
              const textX = 140 + textRadius * Math.cos(textRad);
              const textY = 140 + textRadius * Math.sin(textRad);

              return (
                <g key={prize.id}>
                  {/* Slice Wedge */}
                  <path
                    d={createSlicePath(idx)}
                    fill={prize.color}
                    stroke="#fffdfa"
                    strokeWidth="1.5"
                  />

                  {/* Slice Text */}
                  <text
                    x={textX}
                    y={textY}
                    fill="#ffffff"
                    fontSize="9.5"
                    fontWeight="700"
                    fontFamily="'Frank Ruhl Libre', serif"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                    className="select-none pointer-events-none drop-shadow-xs"
                  >
                    {prize.title.length > 14
                      ? prize.title.slice(0, 13) + '..'
                      : prize.title}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Center Spin Button / Hub */}
        <button
          type="button"
          onClick={handleSpin}
          disabled={isSpinning || (hasSpun && !selectedPrize?.isBonus)}
          className={`absolute z-20 w-16 h-16 rounded-full flex flex-col items-center justify-center font-serif text-white font-bold text-xs shadow-md border-2 border-white transition-transform duration-150 select-none cursor-pointer ${
            isSpinning || (hasSpun && !selectedPrize?.isBonus)
              ? 'bg-[#9f1239] opacity-90 cursor-default'
              : 'bg-gradient-to-br from-[#dc2626] to-[#991b1b] hover:scale-105 active:scale-95'
          }`}
          aria-label="סובבי את הגלגל"
        >
          <Heart className="w-4 h-4 fill-current mb-0.5" />
          <span>{isSpinning ? '...' : hasSpun && !selectedPrize?.isBonus ? 'זכית!' : 'סובבי!'}</span>
        </button>
      </div>

      {/* Won Prize Badge / Trigger button to re-read description */}
      {selectedPrize && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 w-full max-w-xs bg-[#fff0f4] border border-[#f5c6d3] rounded-2xl p-4 flex flex-col items-center"
        >
          <span className="text-[11px] font-semibold text-[#be123c] flex items-center gap-1 mb-1">
            <Trophy className="w-3.5 h-3.5" />
            <span>הפרס שלך בגלגל:</span>
          </span>
          <p className="font-serif text-lg font-bold text-[#881337] mb-2">
            {selectedPrize.title}
          </p>
          <button
            type="button"
            onClick={() => setModalPrize(selectedPrize)}
            className="text-xs text-[#be123c] font-medium underline hover:text-[#9f1239] cursor-pointer"
          >
            לחצי לצפייה בתיאור הפרס המלא
          </button>
        </motion.div>
      )}

      {/* Admin Reset for Ori */}
      {isOri && hasSpun && (
        <button
          type="button"
          onClick={resetWheel}
          className="mt-3 text-xs text-[#881337]/75 hover:text-[#881337] flex items-center gap-1 py-1 px-3 bg-[#fce7ed]/60 hover:bg-[#fce7ed] rounded-lg transition-colors cursor-pointer"
          title="מאפשר לאורי לבצע בדיקה חוזרת לפני שמיכל מסובבת"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>איפוס גלגל לבדיקה נוספת (מצב אורי)</span>
        </button>
      )}

      {/* Winning Popup Modal with Full Description */}
      <AnimatePresence>
        {modalPrize && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-sm bg-[#fffdfa] rounded-3xl p-6 border-2 border-[#fbcfe8] shadow-2xl text-center relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalPrize(null)}
                className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#fce7ed] text-[#881337] flex items-center justify-center hover:bg-[#fbd0dc] transition-colors"
                aria-label="סגור"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-14 h-14 rounded-full bg-[#fde8ed] text-[#be123c] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Trophy className="w-7 h-7" />
              </div>

              <span className="text-xs font-sans font-semibold text-[#be123c] bg-[#fff0f3] px-3 py-1 rounded-full border border-[#fbd0dc]">
                {modalPrize.isBonus ? 'בונוס מיוחד!' : 'זכית בפרס! 🎉'}
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#34111d] mt-3 mb-3">
                {modalPrize.title}
              </h3>

              {/* Exact detailed description requested by user */}
              <p className="font-serif text-base text-[#3b1522] leading-relaxed mb-5 text-right bg-[#fff7f9] p-4 rounded-xl border border-[#f5d9e1]">
                {modalPrize.description}
              </p>

              {modalPrize.isBonus ? (
                <button
                  type="button"
                  onClick={() => {
                    setModalPrize(null);
                    handleSpin();
                  }}
                  className="w-full py-3 px-4 bg-[#be123c] hover:bg-[#9f1239] text-white rounded-xl text-sm font-medium transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>סובבי עכשיו את הסיבוב הנוסף!</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setModalPrize(null)}
                  className="w-full py-3 px-4 bg-[#be123c] hover:bg-[#9f1239] text-white rounded-xl text-sm font-medium transition-colors shadow-sm cursor-pointer"
                >
                  יש! שומרים את הפרס ❤️
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
