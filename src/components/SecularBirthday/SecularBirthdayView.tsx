import React from 'react';
import { motion } from 'motion/react';
import { Heart, ChevronRight, Home, Sparkles, Gift } from 'lucide-react';
import { ChecklistSection } from './ChecklistSection';
import { WheelOfFortune } from './WheelOfFortune';

interface SecularBirthdayViewProps {
  onBackToHub: () => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export const SecularBirthdayView: React.FC<SecularBirthdayViewProps> = ({
  onBackToHub,
}) => {
  return (
    <div className="relative z-10 flex flex-col items-center min-h-[calc(100vh-60px)] px-3 sm:px-4 py-5 max-w-lg mx-auto text-center space-y-6">
      {/* Top Navigation Bar */}
      <div className="w-full flex items-center justify-between pb-2 border-b border-[#f0d9df]">
        <button
          type="button"
          onClick={onBackToHub}
          className="flex items-center gap-1.5 text-xs text-[#be123c] hover:text-[#881337] py-1.5 px-3 rounded-xl bg-white border border-[#eed0d7] shadow-xs font-medium transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
          <span>האזור של אורי ומיכל</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs font-serif text-[#9b4059]">
          <Heart className="w-3.5 h-3.5 text-[#be123c] fill-[#be123c]" />
          <span>יום הולדת לועזי</span>
        </div>
      </div>

      {/* Intro Warm Message (Exact request from user) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.26, ease: CALM_EASE }}
        className="w-full bg-[#fffdfa] rounded-3xl p-6 sm:p-7 border border-[#eed0d7] shadow-sm text-center"
      >
        <div className="w-12 h-12 rounded-full bg-[#fde8ed] text-[#be123c] flex items-center justify-center mx-auto mb-3 shadow-xs">
          <Gift className="w-6 h-6" />
        </div>

        <span className="text-[11px] font-sans font-semibold text-[#be123c] bg-[#fff0f3] px-3 py-1 rounded-full border border-[#fbd0dc]">
          מזל טוב אהובה שלי 🎂
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#34111d] mt-3 mb-3 leading-snug">
          יום ההולדת הלועזי של מיכלי
        </h1>

        <p className="font-serif text-lg sm:text-[19px] text-[#2c141e] leading-relaxed max-w-md mx-auto">
          ״רגע לפני שתקראי את הברכה היפה שכתבתי לך, הכנתי כמה הפתעות קטנות לפני...״
        </p>
      </motion.div>

      {/* Part 1: Interactive 20-Item Checklist */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.28, ease: CALM_EASE }}
        className="w-full"
      >
        <ChecklistSection />
      </motion.div>

      {/* Part 2: Interactive Wheel of Fortune */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.28, ease: CALM_EASE }}
        className="w-full"
      >
        <WheelOfFortune />
      </motion.div>

      {/* Featured Photo Between Wheel and Blessing */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.28, ease: CALM_EASE }}
        className="w-full bg-[#fffdfa] rounded-3xl p-4 sm:p-5 border border-[#eed0d7] shadow-sm flex flex-col items-center"
      >
        <div className="w-full aspect-[4/5] sm:aspect-[3/4] max-h-[460px] rounded-2xl overflow-hidden bg-[#faf2f4] border border-[#f2d3dc] shadow-xs flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dqsxisjlg/image/upload/v1792000914/WhatsApp_Image_2026-10-14_at_20.58.18_ivunvq.jpg"
            alt="מיכל ואורי"
            className="w-full h-full object-contain sm:object-cover select-none"
            loading="eager"
          />
        </div>
        <div className="pt-3 pb-1 flex items-center gap-1.5 text-xs text-[#be123c] font-serif">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span className="font-medium">עוד רגע קטן של שנינו ששמור בלב ❤️</span>
        </div>
      </motion.div>

      {/* Part 3: The 18th Birthday Letter from Ori to Michal */}
      <motion.article
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.28, ease: CALM_EASE }}
        className="w-full bg-[#fffefb] rounded-3xl p-6 sm:p-8 border border-[#eed0d7] shadow-sm text-right relative overflow-hidden"
      >
        {/* Subtle decorative crest */}
        <div className="flex items-center justify-between border-b border-[#f3d9e0] pb-4 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#fde8ed] text-[#be123c] flex items-center justify-center shadow-xs">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <span className="text-[10px] font-sans font-semibold text-[#be123c] bg-[#fff0f3] px-2 py-0.5 rounded-full border border-[#fbd0dc]">
                יום הולדת 18 🎂
              </span>
            </div>
          </div>
          <span className="text-xs text-[#9b4059] font-serif">
            מכתב מהלב מאורי
          </span>
        </div>

        {/* Salutation / Title */}
        <h2 className="font-serif text-2xl sm:text-[26px] font-bold text-[#831843] mb-4 leading-snug">
          למיכלי שלי, לחיים שלי❤️
        </h2>

        {/* Letter Paragraphs */}
        <div className="space-y-4 font-serif text-[16px] sm:text-[17px] leading-relaxed text-[#2c141e]">
          <p>
            יואווו יפה שלי את בת 18!!! מה זההה איך הגענו לזה כבררר😍❤️
            <br />
            נכון שכבר חגגנו לך ביום הולדת העברי, אבל נראה לך שאני אפספס עוד הזדמנות להגיד לך כמה אני אוהב אותך וכמה זכיתי בך?😘
          </p>

          <p>
            בייבי שלי, כבר יותר משנתיים שאנחנו ביחד, ועדיין לפעמים אני מסתכל עלייך ופשוט לא מבין איך זכיתי שהילדה המדהימה הזאת היא החברה שלי❤️. זאת שאני יכול לדבר איתה על הכל, לצחוק איתה על שטויות, לשתף אותה במה שעובר עליי, או סתם להיות לידה ולא לרצות להיות בשום מקום אחר😍.
          </p>

          <p>
            אני אוהב את העיניים היפות שלך שאני יכול לבהות בהן בלי סוף, את החיוך שלך, את היופי שלך שמשגע אותי, אבל גם את כל הדברים הקטנים שעושים אותך מיכלי שלי❤️. את האכפתיות שלך, את הלב הטוב שלך, את הדרך שבה את דואגת, ואת הכל הכל הכל בך😂❤️. את יפה שלי, מבחוץ ומבפנים, ואני מקווה שאת יודעת כמה אני מעריך אותך וכמה את חשובה לי.
          </p>

          <p>
            השנה גם חגגנו שנתיים ביחד בבודפשט, וכשאני חושב על זה אני פשוט מחייך❤️. להיות איתך, לטייל איתך, לאכול ביחד ולצבור עוד זיכרונות שלנו, אלה הדברים שאני רוצה עוד ועוד מהם. יש לנו כבר כל כך הרבה רגעים שאני אוהב, והכי כיף לי לחשוב על כל מה שעוד מחכה לנו😍😘.
          </p>

          <p>
            נסיכה שלי, לכבוד גיל 18 אני רוצה לאחל לך קודם כל שתהיי בריאה ומאושרת❤️. שתצחקי מלא, שתצליחי בכל מה שתרצי לעשות, שתהיי מוקפת באנשים שאוהבים אותך ושיודעים להעריך את מי שאת. שתאמיני בעצמך, שתלכי אחרי הדברים שאת רוצה ושתראי בעצמך את כל מה שאני רואה בך. אני כל כך מאמין בך, יפה שלי, ואני רוצה לראות אותך מגשימה את החלומות שלך ושמחה בדרך❤️.
          </p>

          <p>
            ואני מאחל גם לנו שנמשיך לאהוב ככה, לצחוק, לטייל, לדאוג אחד לשנייה ולהיות ביחד בכל הרגעים, גם כשכיף וגם כשקצת פחות. שנמשיך לגדול ביחד ושיהיו לנו עוד מלא ימי הולדת לחגוג, עוד טיולים, עוד חוויות ועוד סיבות להגיד כמה זכינו אחד בשנייה❤️😍.
          </p>

          <p>
            אני מקווה שתאהבי את ההפתעות שהכנתי לך😘 אבל יותר מהכל אני רוצה שתרגישי היום כמה את אהובה. כמה אני אוהב אותך וכמה אני שמח שאת בחיים שלי. הייתי בוחר בך שוב ושוב, יפה שלי❤️.
          </p>

          <p className="font-semibold text-lg text-[#be123c] pt-1">
            מזל טוב חיים שליייי, יום הולדת 18 שמחחח🥳❤️
          </p>

          <p>
            אני אוהב אותך הכי ביקום, נסיכה שלי, ומחכה כבר לחבק אותך ולתת לך מלא נשיקות😘😘😘
          </p>

          <div className="pt-4 mt-2 border-t border-[#f3d9e0] text-[#881337] font-semibold text-[17px]">
            <p>שלך, אורי❤️</p>
            <p className="text-sm font-normal text-[#9b4059] mt-0.5">
              ובעתיד בעלך, אז תתרגלי כבר מעכשיו😉💍
            </p>
          </div>
        </div>
      </motion.article>

      {/* Back to Home Button */}
      <div className="w-full pt-2 pb-6">
        <button
          type="button"
          onClick={onBackToHub}
          className="w-full py-3 px-4 bg-[#be123c] hover:bg-[#9f1239] text-white rounded-xl text-sm font-medium transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>חזרה לאזור של אורי ומיכל</span>
        </button>
      </div>
    </div>
  );
};
