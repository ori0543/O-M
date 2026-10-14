import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Sparkles } from 'lucide-react';
import { HeartButton } from './HeartButton';

interface HomePortalProps {
  onOpenBirthdayExperience: () => void;
  onOpenGalleryDirect: () => void;
  onOpenLetterDirect: () => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export const HomePortal: React.FC<HomePortalProps> = ({
  onOpenBirthdayExperience,
  onOpenGalleryDirect,
  onOpenLetterDirect,
}) => {
  const [modalContent, setModalContent] = useState<{
    title: string;
    text: string;
  } | null>(null);

  const handleOpenUpcomingBirthday = () => {
    setModalContent({
      title: 'יום הולדת לועזי 🎂',
      text: 'ההפתעה ליום ההולדת הלועזי שלך כבר בהכנה סודית... יש למה לחכות יפה שלי! סבלנות 😉❤️',
    });
  };

  const handleOpenPromises = () => {
    setModalContent({
      title: 'ההבטחות שלנו 💍',
      text: 'ארבע שמלות בחתונה (כבר סגרנו על זה ואין חרטות!), עוד אינסוף טיולים ביחד, לצחוק עד שכואבת הבטן, ושלא ייגמרו לנו השטויות לעולם😂❤️',
    });
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-between min-h-[calc(100vh-60px)] px-4 py-5 max-w-md mx-auto text-center">
      {/* Top Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: CALM_EASE }}
        className="w-full flex flex-col items-center pt-2 mb-6"
      >
        {/* Couple Monogram Crest */}
        <div className="w-12 h-12 rounded-full bg-[#fce7ed] border border-[#f3cad5] flex items-center justify-center text-[#9f1239] shadow-xs mb-3">
          <span className="font-serif font-bold text-base tracking-widest text-[#881337]">
            M & O
          </span>
        </div>

        <p className="text-xs text-[#9b4059] font-medium tracking-wide mb-1 font-sans">
          המקום האישי שלנו
        </p>

        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#34111d] tracking-tight mb-2">
          האזור של אורי ומיכל
        </h1>

        <p className="text-sm font-serif text-[#6d2d40] max-w-xs leading-relaxed">
          כאן יחכו לך כל ההפתעות, הזיכרונות והדברים הקטנים שהכנתי רק בשבילך.
        </p>
      </motion.div>

      {/* Heart Buttons Section: Some Red, Some Pink */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.3, ease: CALM_EASE }}
        className="w-full flex-1 flex flex-col items-center justify-center py-2"
      >
        <div className="text-xs text-[#9b4059] font-medium mb-4 flex items-center gap-1.5 bg-[#fff8fa] px-3.5 py-1 rounded-full border border-[#f5d5de] shadow-xs">
          <Heart className="w-3.5 h-3.5 text-[#e11d48] fill-[#e11d48]" />
          <span>בחרי לב כדי לפתוח</span>
        </div>

        {/* Heart Buttons Grid - Placed cleanly in a balanced couple's layout */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* Main Hero Button: יום הולדת עברי (Red Heart) */}
          <div className="flex justify-center w-full">
            <HeartButton
              title="יום הולדת עברי"
              subtitle="המסע שלנו"
              color="red"
              size="lg"
              badge="התחילי כאן 💌"
              onClick={onOpenBirthdayExperience}
            />
          </div>

          {/* Row of Two Hearts: Red & Pink */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full">
            <HeartButton
              title="אלבום זיכרונות"
              subtitle="הרגעים שלנו"
              color="pink"
              size="md"
              onClick={onOpenGalleryDirect}
            />
            <HeartButton
              title="המכתב שלי"
              subtitle="מילים מהלב"
              color="red"
              size="md"
              onClick={onOpenLetterDirect}
            />
          </div>

          {/* Row of Two Additional Future / Sweet Hearts */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full">
            <HeartButton
              title="ההבטחות שלנו"
              subtitle="4 שמלות ועוד..."
              color="red"
              size="md"
              onClick={handleOpenPromises}
            />
            <HeartButton
              title="יום הולדת לועזי"
              subtitle="הפתעה נוספת"
              color="pink"
              size="md"
              badge="בקרוב 🔒"
              onClick={handleOpenUpcomingBirthday}
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer Note */}
      <div className="w-full pt-4 pb-2 text-center">
        <p className="text-[11px] text-[#9b4059] font-serif">
          תמיד שלך, אורי ❤️
        </p>
      </div>

      {/* Interactive Modal for Teaser Hearts */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.2, ease: CALM_EASE }}
              className="w-full max-w-xs bg-[#fffefb] rounded-2xl p-5 border border-[#eed0d7] shadow-xl text-center relative"
            >
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="absolute top-3 left-3 w-7 h-7 rounded-full bg-[#faf0f3] text-[#7d3246] hover:bg-[#f5dce3] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="סגירה"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-10 h-10 rounded-full bg-[#fde8ed] text-[#e11d48] flex items-center justify-center mx-auto mb-3">
                <Heart className="w-5 h-5 fill-current" />
              </div>

              <h3 className="font-serif text-lg font-bold text-[#831843] mb-2">
                {modalContent.title}
              </h3>

              <p className="font-serif text-sm text-[#2c141e] leading-relaxed mb-4">
                {modalContent.text}
              </p>

              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="w-full py-2 px-4 bg-[#be185d] hover:bg-[#a2124d] text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                הבנתי, מחכה בסבלנות 🥰
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
