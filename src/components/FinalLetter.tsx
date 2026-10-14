import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw } from 'lucide-react';

interface FinalLetterProps {
  onRevisit: () => void;
  onGoToHub?: () => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export const FinalLetter: React.FC<FinalLetterProps> = ({ onRevisit, onGoToHub }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start min-h-[calc(100vh-60px)] px-3 sm:px-4 py-5 max-w-md mx-auto text-right">
      {/* Letter Card: single smooth fade on entrance, completely stable */}
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.26, ease: CALM_EASE }}
        className="w-full bg-[#fffdfa] rounded-2xl p-5 sm:p-7 border border-[#eed0d7] shadow-sm relative overflow-hidden"
      >
        {/* Featured couple photo at the top of the letter */}
        <div className="relative mb-5 rounded-xl overflow-hidden bg-[#faf2f4] border border-[#f0d4dc] h-52 sm:h-56 w-full flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513352/09-11500_n9zsc4.jpg"
            alt="מיכל ואורי"
            className="w-full h-full object-cover select-none"
          />
        </div>

        {/* Salutation / Header */}
        <h2 className="font-serif text-2xl sm:text-[26px] text-[#831843] font-bold mb-4 tracking-tight leading-snug">
          למיכלי שלי, לחיים שלי❤️
        </h2>

        {/* Letter Paragraphs - Exact text provided by user */}
        <div className="space-y-4 font-serif text-[16px] sm:text-[17px] leading-relaxed text-[#2c141e]">
          <p>
            יום הולדת שמח יפה שלי!!! אני מסתכל על התמונות שלנו ולא קולט כמה רגעים כבר יש לנו ביחד. יש תמונות שאנחנו נראים בהן חמודים, יש תמונות שאנחנו עושים שטויות, ויש אחת שאת נושכת אותי ואני עדיין לא מבין איך יצא שאני כל כך אוהב את המשוגעת הזאת😂❤️
          </p>

          <p>
            אבל הרגע שאני תמיד חוזר אליו הוא דווקא מהים, כשהיינו עם כולם. היית שומרת נגיעה, ואז נתת לי כיף אגרוף. כיף אגרוף!!! מי היה מאמין שמדבר כזה קטן אני אתאהב בך ככה? אני זוכר שהסתכלתי עלייך שם, עם הבגד ים הוורוד והעיניים היפות שלך, ופשוט לא הצלחתי להפסיק לחשוב עלייך😍
          </p>

          <p>
            מיכלי, אני אוהב בך כל כך הרבה דברים. את העיניים שלך שאני יכול לבהות בהן שעות, את הלב הטוב שלך, כמה שאת אכפתית ונותנת מעצמך, וכמובן את הקול החמוד הזה שלך כשאת אומרת ״אבל אבל אבלללל״ ואני כבר לא יכול להגיד לך לא😂❤️ אני אוהב שאת יכולה להיות הכי שובבה ומצחיקה בעולם, ושנייה אחר כך להיות הבן אדם שהכי נעים לי להיות לידו.
          </p>

          <p>
            אני באמת לא יודע איך להסביר לך כמה את חשובה לי. את החברה שלי, האהבה שלי, והבן אדם שאני הכי רוצה לספר לו כל דבר שקורה לי. גם ברגעים הכי רגילים שלנו, כשאנחנו סתם ביחד ועושים פרצופים למצלמה, אני מסתכל עלייך וחושב לעצמי כמה זכיתי בך❤️
          </p>

          <p>
            אז יפה שלי, אני מאחל לך שתהיי בריאה, מאושרת ושמחה, שתצליחי בכל מה שתרצי, ושלא תשכחי אף פעם כמה את מדהימה וכמה אני אוהב אותך. אני פה בשבילך תמיד, ואני לא אוותר עלייך❤️
          </p>

          <p className="font-semibold text-lg text-[#be185d]">
            אני אוהב אותך הכי ביקום, נסיכה שלי. מזל טובבבבב❤️❤️❤️
          </p>

          <p className="text-[#6d283c]">
            וכמובן שיהיו לך מלא מתנות שוות ומלא כסףףף🤑😂❤️
          </p>

          <p className="pt-2 font-semibold text-[#831843] border-t border-[#f3d9e0]">
            שלך, אורי — בעתיד בעלך, אם כבר סגרנו על ארבע שמלות בחתונה😂❤️
          </p>
        </div>
      </motion.article>

      {/* Action buttons */}
      <div className="w-full mt-4 pb-6 flex flex-col gap-2.5">
        <button
          type="button"
          onClick={onRevisit}
          className="w-full py-3 px-4 bg-white hover:bg-[#fff5f7] text-[#831843] border border-[#eed0d7] rounded-xl text-sm font-medium transition-colors duration-150 cursor-pointer flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
        >
          <RotateCcw className="w-4 h-4 text-[#be185d]" />
          <span>לראות שוב את הזיכרונות</span>
        </button>

        {onGoToHub && (
          <button
            type="button"
            onClick={onGoToHub}
            className="w-full py-3 px-4 bg-[#be123c] hover:bg-[#9f1239] text-white rounded-xl text-sm font-medium transition-colors duration-150 cursor-pointer flex items-center justify-center gap-2 shadow-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>האזור של אורי ומיכל</span>
            <span>❤️</span>
          </button>
        )}
      </div>
    </div>
  );
};
