import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, X, Music, Image as ImageIcon, MessageSquareHeart, Calendar } from 'lucide-react';
import { HeartButton } from './HeartButton';

interface MainHubProps {
  onOpenHebrewBirthday: () => void;
  onOpenSecularBirthday: () => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

interface NoteModalContent {
  title: string;
  badge: string;
  text: string[];
  footer?: string;
}

export const MainHub: React.FC<MainHubProps> = ({
  onOpenHebrewBirthday,
  onOpenSecularBirthday,
}) => {
  const [modalContent, setModalContent] = useState<NoteModalContent | null>(null);

  const handleOpenLoveNotes = () => {
    setModalContent({
      title: 'פתקים קטנים מהלב',
      badge: 'תזכורות מאורי',
      text: [
        '״תזכורת יומית: את הבחורה הכי יפה בעולם, גם בבוקר בלי להתאמץ בכלל.״',
        '״אם היה לי שקל על כל פעם שאמרת לי ׳אבל אבל אבלללל׳ כבר היינו קונים בית.😂״',
        '״את החברה הכי טובה שלי והבן אדם שאני הכי אוהב בעולם. תמיד פה בשבילך.❤️״',
      ],
      footer: 'אורי',
    });
  };

  const handleOpenSongs = () => {
    setModalContent({
      title: 'השירים שלנו',
      badge: 'מוזיקה',
      text: [
        'כל השירים שמזכירים לי אותך, את הנסיעות שלנו יחד באוטו, ואת הרגעים שאנחנו שרים ביחד בזיופים קשים😂🎵',
        'הרשימה המלאה שלנו תעלה לכאן ממש בקרוב!',
      ],
      footer: 'עוד הפתעה בדרך... ❤️',
    });
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-between min-h-[calc(100vh-60px)] px-4 py-6 max-w-md mx-auto text-center">
      {/* Top Welcome & Monogram */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.26, ease: CALM_EASE }}
        className="w-full flex flex-col items-center mb-6"
      >
        {/* Monogram Crest */}
        <div className="w-14 h-14 rounded-full bg-[#fffdfa] border border-[#ebd0d7] shadow-sm flex items-center justify-center text-[#881337] mb-3">
          <span className="font-serif font-bold text-base tracking-widest">
            M & O
          </span>
        </div>

        <p className="text-xs text-[#9b4059] font-medium tracking-wide mb-1 font-sans">
          הפינה המיוחדת שלנו
        </p>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#34111d] leading-tight">
          האזור של אורי ומיכל
        </h1>
        <p className="text-xs sm:text-sm text-[#703b49] font-sans mt-1 max-w-[280px]">
          רגעים, זיכרונות והפתעות ששמורים רק לנו
        </p>
      </motion.div>

      {/* Main Grid of Heart Buttons - Red & Pink Hearts */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: CALM_EASE }}
        className="w-full flex flex-col items-center gap-4 my-auto py-2"
      >
        {/* Primary Row: יום הולדת לועזי (Featured for Today!) */}
        <div className="flex flex-col items-center">
          <HeartButton
            title="יום הולדת לועזי"
            subtitle="החגיגה מתחילה! • גיל 18"
            badge="היום! 🎂"
            color="red"
            isPrimary={true}
            onClick={onOpenSecularBirthday}
          />
          <span className="text-[11px] text-[#8a3348] font-medium mt-1">
            פינוקים, גלגל מזל ומכתב אישי
          </span>
        </div>

        {/* Secondary Row of Hearts: Mix of Red & Pink */}
        <div className="w-full flex items-center justify-center gap-3 sm:gap-4 flex-wrap pt-2">
          {/* Heart: יום הולדת עברי (Pink) */}
          <HeartButton
            title="יום הולדת עברי"
            subtitle="המסע המלא"
            badge="💌"
            color="pink"
            onClick={onOpenHebrewBirthday}
          />

          {/* Heart: השירים שלנו (Red) */}
          <HeartButton
            title="השירים שלנו"
            subtitle="פלייליסט"
            badge="🎵"
            color="red"
            onClick={handleOpenSongs}
          />

          {/* Heart: פתקים מאורי (Pink) */}
          <HeartButton
            title="פתקים מאורי"
            subtitle="תזכורות"
            badge="❤️"
            color="pink"
            onClick={handleOpenLoveNotes}
          />
        </div>
      </motion.div>

      {/* Footer Tagline */}
      <div className="w-full pt-6 pb-2 text-center text-xs text-[#9b4059]/80 font-sans">
        <span>עוצב באהבה ענקית מאורי למיכלי ❤️</span>
      </div>

      {/* Popup Modal for info hearts */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
              className="w-full max-w-xs bg-[#fffdfa] rounded-2xl p-6 border border-[#eed0d7] shadow-xl text-center relative"
            >
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#fce7ed] text-[#881337] flex items-center justify-center hover:bg-[#fbd0dc] transition-colors"
                aria-label="סגור"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-10 h-10 rounded-full bg-[#fce7ed] text-[#be123c] flex items-center justify-center mx-auto mb-3">
                <Heart className="w-5 h-5 fill-current" />
              </div>

              <span className="text-[10px] font-sans font-semibold text-[#be123c] bg-[#ffe4e9] px-2.5 py-0.5 rounded-full">
                {modalContent.badge}
              </span>

              <h3 className="font-serif text-xl font-bold text-[#34111d] mt-2 mb-3">
                {modalContent.title}
              </h3>

              <div className="space-y-2 text-right font-serif text-sm text-[#3b1522] leading-relaxed mb-4">
                {modalContent.text.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {modalContent.footer && (
                <p className="text-xs text-[#881337] font-semibold border-t border-[#f4d2da] pt-2.5">
                  {modalContent.footer}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
