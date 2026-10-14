import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, RotateCcw } from 'lucide-react';
import { SECULAR_CHECKLIST_CATEGORIES } from '../../types';

const STORAGE_KEY = 'om_completed_vouchers_v1';

export const ChecklistSection: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedItems)));
    } catch {
      // Ignore
    }
  }, [completedItems]);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const totalItems = SECULAR_CHECKLIST_CATEGORIES.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );
  const completedCount = completedItems.size;

  return (
    <div className="w-full bg-[#fffdfa] rounded-3xl p-5 sm:p-6 border border-[#eed0d7] shadow-sm text-right">
      {/* Header & Progress Counter */}
      <div className="flex items-center justify-between border-b border-[#f3d7df] pb-3.5 mb-4">
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#34111d] flex items-center gap-2">
            <span>צ׳ק ליסט הפינוקים שלך</span>
            <span className="text-sm">✨</span>
          </h2>
          <p className="text-xs text-[#7d3b4e] font-sans mt-0.5">
            סמני V על כל פינוק שבוצע – פתוח לשימוש מתי שרק תרצי!
          </p>
        </div>

        <div className="text-left bg-[#fdf2f4] px-3 py-1.5 rounded-xl border border-[#fbcfe8]">
          <span className="text-xs font-medium text-[#be123c] block">
            מומשו: {completedCount}/{totalItems}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-[#fae8ec] rounded-full overflow-hidden mb-5">
        <motion.div
          className="h-full bg-gradient-to-l from-[#be123c] to-[#f43f5e]"
          initial={{ width: 0 }}
          animate={{ width: `${(completedCount / totalItems) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Categories & Checklist Items */}
      <div className="space-y-5">
        {SECULAR_CHECKLIST_CATEGORIES.map((category) => (
          <div key={category.id} className="space-y-2">
            {/* Category Title */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#881337] bg-[#fff5f7] px-3 py-1 rounded-lg border border-[#f5d5dd]">
              <span>{category.icon}</span>
              <span>{category.title}</span>
            </div>

            {/* Category Items (Titles only as requested!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {category.items.map((item) => {
                const isChecked = completedItems.has(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`w-full p-3 rounded-xl border text-right flex items-center justify-between gap-2.5 transition-all duration-150 cursor-pointer ${
                      isChecked
                        ? 'bg-[#fcf1f4] border-[#e2a8b7] text-[#831843]'
                        : 'bg-white border-[#f0d0d8] text-[#2c141e] hover:bg-[#fffbfd]'
                    }`}
                  >
                    <span
                      className={`font-serif text-sm font-medium ${
                        isChecked ? 'line-through text-[#9b4059] opacity-75' : ''
                      }`}
                    >
                      {item.title}
                    </span>

                    {/* Checkbox Icon */}
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                        isChecked
                          ? 'bg-[#be123c] border-[#be123c] text-white'
                          : 'border-[#d8a4b2] bg-white'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
