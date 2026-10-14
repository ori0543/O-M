import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Heart, ArrowLeft, KeyRound } from 'lucide-react';

interface LoginGateProps {
  onSuccess: (user: string) => void;
}

const CALM_EASE = [0.22, 1, 0.36, 1] as const;

export const LoginGate: React.FC<LoginGateProps> = ({ onSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanUser = username.trim();
    const cleanPass = password.trim();

    const isMichal = cleanUser === 'מיכל' && cleanPass === '667315';
    const isOri = cleanUser === 'אורי' && cleanPass === '667315';

    if (isMichal || isOri) {
      localStorage.setItem('om_auth_user', cleanUser);
      onSuccess(cleanUser);
    } else {
      setError('שם המשתמש או הסיסמה שגויים');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf5f5] text-[#2c1a22] flex flex-col items-center justify-center px-4 py-8 relative selection:bg-[#fce7ed] selection:text-[#831843]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: CALM_EASE }}
        className="w-full max-w-sm bg-[#fffdfa] rounded-3xl p-6 sm:p-8 border border-[#eed0d7] shadow-lg text-center relative"
      >
        {/* Monogram / Lock Emblem */}
        <div className="w-14 h-14 rounded-full bg-[#fde8ed] text-[#be123c] flex items-center justify-center mx-auto mb-4 border border-[#fbcfe8] shadow-xs">
          <Heart className="w-6 h-6 fill-current" />
        </div>

        <span className="text-[11px] font-sans font-semibold text-[#be123c] bg-[#fff0f3] px-3 py-1 rounded-full border border-[#fbd0dc]">
          כניסה פרטית
        </span>

        <h1 className="font-serif text-2xl font-bold text-[#34111d] mt-2.5 mb-1">
          האזור של אורי ומיכל
        </h1>

        <p className="text-xs text-[#7d3b4e] font-sans mb-6">
          הזיכרונות, הרגעים וההפתעות שלנו
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-right">
          <div>
            <label className="block text-xs font-medium text-[#5c1c2b] mb-1 mr-1">
              שם משתמש
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              placeholder="מיכל / אורי"
              autoComplete="username"
              required
              className="w-full px-4 py-2.5 bg-white border border-[#e5b8c4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e11d48]/40 focus:border-[#be123c] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#5c1c2b] mb-1 mr-1">
              סיסמה
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="הקלידו את הסיסמה"
              autoComplete="current-password"
              required
              className="w-full px-4 py-2.5 bg-white border border-[#e5b8c4] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#e11d48]/40 focus:border-[#be123c] transition-colors"
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-[#dc2626] text-center font-medium py-1"
            >
              {error}
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#be123c] hover:bg-[#9f1239] text-white rounded-xl text-sm font-medium transition-colors duration-150 cursor-pointer shadow-sm flex items-center justify-center gap-2 mt-2"
          >
            <span>כניסה לאזור שלנו</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#f4d2da] text-center">
          <p className="text-[11px] text-[#9b4a5d] font-serif">
            שמור באהבה ענקית מאורי למיכל ❤️
          </p>
        </div>
      </motion.div>
    </div>
  );
};
