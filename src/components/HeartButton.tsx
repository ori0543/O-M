import React from 'react';

interface HeartButtonProps {
  title: string;
  subtitle?: string;
  color: 'red' | 'pink';
  badge?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  isPrimary?: boolean;
}

export const HeartButton: React.FC<HeartButtonProps> = ({
  title,
  subtitle,
  color,
  badge,
  onClick,
  icon,
  isPrimary = false,
}) => {
  const isRed = color === 'red';

  // Realistic, refined rounded heart SVG path (viewBox: 0 0 120 110)
  // Max width in center: X: 12 to 108 (96px), Y: 25 to 65 (40px)
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center p-0 transition-transform duration-150 cursor-pointer select-none focus:outline-none hover:-translate-y-1 active:translate-y-0 ${
        isPrimary ? 'w-[155px] h-[140px] sm:w-[170px] sm:h-[150px]' : 'w-[135px] h-[122px] sm:w-[145px] sm:h-[130px]'
      }`}
      aria-label={title}
    >
      {/* SVG Heart Shape */}
      <svg
        viewBox="0 0 120 110"
        className={`w-full h-full drop-shadow-md transition-colors duration-150 ${
          isRed
            ? 'text-[#be123c] group-hover:text-[#9f1239]'
            : 'text-[#f472b6] group-hover:text-[#e11d48]'
        }`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Heart Path */}
        <path
          d="M 60,102 C 16,68 4,44 4,28 C 4,12 16,2 32,2 C 45,2 54,9 60,19 C 66,9 75,2 88,2 C 104,2 116,12 116,28 C 116,44 104,68 60,102 Z"
        />
        {/* Subtle inner highlight border line */}
        <path
          d="M 60,98 C 19,65 8,42 8,28 C 8,14 18,5 32,5 C 44,5 52,12 58,21 L 60,24 L 62,21 C 68,12 76,5 88,5 C 102,5 112,14 112,28 C 112,42 101,65 60,98 Z"
          fill="none"
          stroke={isRed ? '#fca5a5' : '#fed7aa'}
          strokeWidth="1.2"
          opacity="0.35"
        />
      </svg>

      {/* Centered Content over Heart */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-1 pointer-events-none">
        {badge && (
          <span className="text-[9px] font-sans font-semibold bg-white/90 text-[#831843] px-2 py-0.2 rounded-full mb-1 shadow-xs tracking-tight">
            {badge}
          </span>
        )}

        {icon && <div className="text-white/90 mb-0.5">{icon}</div>}

        <span
          className={`font-serif font-bold text-white tracking-tight leading-tight drop-shadow-xs ${
            isPrimary ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
          }`}
        >
          {title}
        </span>

        {subtitle && (
          <span className="text-[11px] font-sans text-white/85 font-medium mt-0.5 leading-none">
            {subtitle}
          </span>
        )}
      </div>
    </button>
  );
};
