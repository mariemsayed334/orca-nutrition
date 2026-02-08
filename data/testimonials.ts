export interface Testimonial {
  en: {
    text: string
    name: string
    role: string
  }
  ar: {
    text: string
    name: string
    role: string
  }
  date: string
}

export const testimonials: Testimonial[] = [
  {
    en: {
      text: "As a bodybuilder, I'm always looking for quality supplements. Orca Nutrition protein has become an essential part of my daily routine. The results speak for themselves.",
      name: "Ahmed Hassan",
      role: "Professional Bodybuilder",
    },
    ar: {
      text: "بصفتي لاعب كمال أجسام، أبحث دائماً عن مكملات عالية الجودة. بروتين أوركا نيوتريشن أصبح جزءاً أساسياً من روتيني اليومي. النتائج تتحدث عن نفسها.",
      name: "أحمد حسن",
      role: "لاعب كمال أجسام محترف",
    },
    date: "2025-03-22",
  },
  {
    en: {
      text: "I've tried many protein brands, but Orca Whey stands out for its taste and mixability. It dissolves perfectly every time and the flavors are incredible.",
      name: "Sarah Mitchell",
      role: "Fitness Coach",
    },
    ar: {
      text: "جربت العديد من ماركات البروتين، لكن أوركا واي يتميز بطعمه وقابلية الخلط. يذوب بشكل مثالي في كل مرة والنكهات رائعة.",
      name: "سارة ميتشل",
      role: "مدربة لياقة بدنية",
    },
    date: "2025-05-10",
  },
  {
    en: {
      text: "Orca Mass helped me gain 8kg of lean muscle in just 3 months. The high protein content and clean ingredients make it the best mass gainer on the market.",
      name: "Omar Al-Rashid",
      role: "Amateur Athlete",
    },
    ar: {
      text: "أوركا ماس ساعدني في اكتساب 8 كيلو من العضلات الصافية في 3 أشهر فقط. المحتوى العالي من البروتين والمكونات النظيفة تجعله أفضل مكمل لزيادة الكتلة في السوق.",
      name: "عمر الرشيد",
      role: "رياضي هاوٍ",
    },
    date: "2025-08-15",
  },
  {
    en: {
      text: "The L-Carnitine 3000 has been a game changer for my cutting phase. I've noticed significant improvements in fat loss while maintaining my strength levels.",
      name: "James Cooper",
      role: "CrossFit Athlete",
    },
    ar: {
      text: "إل-كارنتين 3000 غير قواعد اللعبة في مرحلة التنشيف. لاحظت تحسينات كبيرة في فقدان الدهون مع الحفاظ على مستويات قوتي.",
      name: "جيمس كوبر",
      role: "رياضي كروس فيت",
    },
    date: "2025-11-02",
  },
]
