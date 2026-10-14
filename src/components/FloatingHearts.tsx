import React from 'react';

/**
 * Static, subtle background hearts (at most 2-3 small hearts, very low opacity, no movement)
 */
export const FloatingHearts: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 2-3 small, completely static decorative hearts with very low opacity */}
      <div
        className="absolute top-16 left-6 text-[#be185d] text-sm opacity-[0.09]"
      >
        ❤
      </div>
      <div
        className="absolute bottom-24 right-8 text-[#be185d] text-base opacity-[0.08]"
      >
        ❤
      </div>
      <div
        className="absolute top-1/2 left-4 text-[#be185d] text-xs opacity-[0.06] hidden sm:block"
      >
        ❤
      </div>
    </div>
  );
};
