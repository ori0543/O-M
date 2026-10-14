export type AppView = 'hub' | 'hebrewBirthday' | 'secularBirthday';

export type ExperienceStep = 'intro' | 'origin' | 'gallery' | 'littleThings' | 'letter';

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '14229',
    url: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513349/01-14229_e4ooyd.jpg',
    caption: 'יש רגעים שלא קרה בהם שום דבר גדול. פשוט היית קרובה אליי, וזה הספיק כדי שאזכור אותם.',
  },
  {
    id: '14224',
    url: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513350/02-14224_iqv0nj.jpg',
    caption: 'אני אוהב את הרגעים שבהם את פשוט את, וגם מבט קטן שלך מצליח לגרום לי לחייך.',
  },
  {
    id: '8829',
    url: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513350/04-8829_h54ipc.jpg',
    caption: 'אני אוהב את איך שאנחנו נראים יחד, אבל עוד יותר את איך שאני מרגיש כשאנחנו יחד.',
  },
  {
    id: '7461',
    url: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513350/05-7461_hy5brc.jpg',
    caption: 'אני אוהב שיש לנו שטויות קטנות שאולי אף אחד אחר לא יבין, אבל בשבילי הן זיכרונות יקרים.',
  },
  {
    id: '6213',
    url: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513351/06-6213_yjwu4x.jpg',
    caption: 'לפעמים האושר שלי נראה פשוט ככה: את לידי, ואין שום מקום אחר שאני רוצה להיות בו.',
  },
  {
    id: '7450',
    url: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513352/07-7450_qhrm21.jpg',
    caption: 'אני אוהב שאנחנו יכולים לצחוק ולהיות מוזרים ביחד בלי לחשוב פעמיים.',
  },
  {
    id: '11314',
    url: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513352/08-11314_o3sqqo.jpg',
    caption: 'הלוואי שיכולת לראות את עצמך ברגעים כאלה דרך העיניים שלי.',
  },
  {
    id: '11500',
    url: 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513352/09-11500_n9zsc4.jpg',
    caption: 'אני מסתכל על התמונה הזאת וחושב כמה רגעים קטנים כבר אספנו יחד — וכמה אני מחכה לאלה שעוד יבואו.',
  },
];

export const BITE_IMAGE_URL = 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1790513349/03-8858_gpo7tu.jpg';

export const SECULAR_BIRTHDAY_PHOTO_URL = 'https://res.cloudinary.com/dqsxisjlg/image/upload/v1792000914/WhatsApp_Image_2026-10-14_at_20.58.18_ivunvq.jpg';

/* --- Secular Birthday Types & Data --- */

export interface ChecklistCategory {
  id: string;
  title: string;
  icon: string;
  items: {
    id: string;
    title: string;
  }[];
}

export const SECULAR_CHECKLIST_CATEGORIES: ChecklistCategory[] = [
  {
    id: 'car_travel',
    title: 'שירותי רכב ונסיעות',
    icon: '🚗',
    items: [
      { id: 'c1', title: 'נהג בוס אישי' },
      { id: 'c2', title: 'עצירה לנשנוש על הדרך' },
      { id: 'c3', title: 'וטו על המוזיקה ברכב' },
      { id: 'c4', title: 'רכב מצוחצח' },
    ],
  },
  {
    id: 'pampering_peace',
    title: 'פינוק, רוגע וזמן שקט',
    icon: '💆‍♀️',
    items: [
      { id: 'p1', title: 'מסאז׳ רגיל' },
      { id: 'p2', title: 'אמבטיית VIP' },
      { id: 'p3', title: 'חיבוק דוב של 5 דקות' },
      { id: 'p4', title: 'שיחת פריקה נטולת ביקורת' },
      { id: 'p5', title: 'לישון עוד חצי שעה' },
    ],
  },
  {
    id: 'food_treats',
    title: 'אוכל ופינוקי יום-יום',
    icon: '☕',
    items: [
      { id: 'f1', title: 'קפה ופינוק למיטה' },
      { id: 'f2', title: 'אני בוחרת – אתה מזמין' },
      { id: 'f3', title: 'משלוח הפתעה באמצע היום' },
      { id: 'f4', title: 'קפיצה לילית לגלידה' },
      { id: 'f5', title: 'נשנוש VIP לקולנוע הביתי' },
    ],
  },
  {
    id: 'help_chores',
    title: 'עזרה ומטלות',
    icon: '🧹',
    items: [
      { id: 'h1', title: 'פטור מלא מכלים / סדר' },
      { id: 'h2', title: 'סידורים במקומך' },
    ],
  },
  {
    id: 'humor_couples',
    title: 'הומור וכיף זוגי',
    icon: '📸',
    items: [
      { id: 'u1', title: 'שליטה מוחלטת בשלט' },
      { id: 'u2', title: 'כרטיס ״את צודקת״' },
      { id: 'u3', title: 'צלם אישי ל-15 דקות' },
      { id: 'u4', title: 'ערב משחק קופסה / קלפים' },
    ],
  },
];

export interface WheelPrize {
  id: string;
  title: string;
  description: string;
  isBonus?: boolean;
  color: string;
}

export const WHEEL_PRIZES: WheelPrize[] = [
  {
    id: 'w1',
    title: 'דייט בהפתעה מוחלטת',
    description: 'ערב שלם שמתוכנן מא׳ ועד ת׳ בלי שתדעי לאן נוסעים – כולל לוקיישן, אוכל ופעילות מפנקת במיוחד.',
    color: '#be123c',
  },
  {
    id: 'w2',
    title: 'שף פרטי לערב אחד',
    description: 'ארוחת ערב מושקעת של 3 מנות שאני מבשל לך מאפס בבית, כולל עריכת שולחן ופינוי מלא.',
    color: '#e11d48',
  },
  {
    id: 'w3',
    title: 'ספא זוגי מפנק',
    description: 'יום או אחה״צ של בריכה, ג׳קוזי ומסאז׳ מקצועי לשנינו להירגע יחד מהכל.',
    color: '#f43f5e',
  },
  {
    id: 'w4',
    title: 'קניות / פינוק עליי',
    description: 'תקציב מוגדר מראש לבזבוזים בחנות האהובה עלייך (Shopping Spree), בלי שאלות של ״כמה זה עלה?״!',
    color: '#fb7185',
  },
  {
    id: 'w5',
    title: 'סופ״ש / לילה של בריחה',
    description: 'לילה מושלם בצימר רומנטי או במלון בוטיק בהזדמנות הקרובה רק שנינו.',
    color: '#9f1239',
  },
  {
    id: 'w6',
    title: 'סדנה זוגית חווייתית',
    description: 'סדנת בישול, קרמיקה, טעימות יין או פעילות חדשה ומצחיקה ששנינו עוד לא ניסינו יחד.',
    color: '#db2777',
  },
  {
    id: 'w7',
    title: 'סובבי שוב + בונוס',
    description: 'משבצת קלאסית של סיבוב נוסף בגלגל שמוסיפה גם קינוח מושחת על הדרך!',
    isBonus: true,
    color: '#ec4899',
  },
];
