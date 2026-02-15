export interface Product {
  slug: string
  image: string
  en: {
    name: string
    shortDescription: string
    description: string
    benefits: string[]
  }
  ar: {
    name: string
    shortDescription: string
    description: string
    benefits: string[]
  }
}

export const products: Product[] = [
  {
    slug: "orca-whey",
    image: "/images/1.png",
    en: {
      name: "ORCA Pre-Workout Fury",
      shortDescription: " is a highly effective, fully dosed supplement designed for athletes who demand real and noticeable results. ",
      description: " This synergistic formula combines research-backed ingredients to ignite extreme energy levels, enhance focus, and boost overall strength during every training session. Whether you are hitting the gym or preparing for intense athletic competition, ORCA Fury helps you push past your limits and achieve your ftness goals faster.",
      benefits: ["Explosive Energy & Drive: Powered by 300mg of Caffeine and 500mg of Tyrosine to provide intense energy and mental alertness.", "Maximum Muscle Endurance: Formulated with 2500mg of Beta-alanine to help you sustain high-intensity performance for longer durations.", "Superior Muscle Pumps: Includes 1500mg of Citrulline Malate and 100mg of L-norvaline to support nitric oxide production and blood flow."],
    },
    ar: {
      name: "ORCA Pre-Workout Fury",
      shortDescription: "  مكمل فعال للغاية، مُعطى بالجرعات الكاملة، مصمم للرياضيين الذين يطلبون نتائج حقيقية وملموسة.",
      description: "  هذه التركيبة المتكاملة تجمع بين مكونات مدعومة بالأبحاث لإشعال مستويات طاقة هائلة، وتعزيز التركيز، وزيادة القوة العامة خلال كل جلسة تدريبية. سواء كنت تتدرب في الصالة الرياضية أو تستعد لمنافسة رياضية مكثفة، يساعدك ORCA Fury على تجاوز حدودك وتحقيق أهدافك اللياقية بشكل أسرع.",
      benefits: ["طاقة وانطلاق هائل: مدعوم بـ 300 مجم من الكافيين و500 مجم من التيروسين لتوفير طاقة قوية وتنبيه ذهني عالي.", "تحمل عضلي أقصى: مُركب بـ 2500 مجم من بيتا-ألانين لمساعدتك على الحفاظ على أداء عالي الكثافة لفترات أطول.", "ضخ عضلي ممتاز: يحتوي على 1500 مجم من سترات السيتروتين و100 مجم من L-نورفالين لدعم إنتاج أكسيد النيتريك وزيادة تدفق الدم."],
    },
  },
  {
    slug: "orca-mass",
    image: "/images/2.png",
    en: {
         name: "ORCA Vitargo",
        shortDescription: "High-performance carbohydrate fuel designed to act like nitrous oxide for your body's engine.",
        description: "Specifically formulated with fractionated barley amylopectin, it ensures that your energy levels remain stable and prevents them from dropping during intense workouts. This premium supplement supports strength, recovery, and energy, making it an essential tool for athletes who push their limits.",
         benefits: [
         "Instant Energy Fuel: Provides 30g of fast-acting carbohydrates from Vitargo to power your training sessions.",
        "Enhanced Blood Flow: Features AAKG (Arginine Alpha-Ketoglutarate) to dilate blood vessels, allowing for better delivery of oxygen and nutrients to working muscles.",
     "Improved Muscle Endurance: Contains Beta-alanine to positively affect muscle endurance, allowing you to train harder for longer."
  ]
},

    ar: {
  name: "ORCA Vitargo",
  shortDescription: "وقود كربوهيدرات عالي الأداء مصمم ليعمل كأكسيد النيتروز لمحرك جسمك.",
  description: "مصمّم خصيصًا باستخدام أميلوبيكتين الشعير المجزأ، لضمان بقاء مستويات طاقتك مستقرة ومنع انخفاضها أثناء التمارين المكثفة. هذا المكمل الفاخر يدعم القوة، التعافي، والطاقة، مما يجعله أداة أساسية للرياضيين الذين يتجاوزون حدودهم.",
  benefits: [
    "وقود طاقة فوري: يوفر 30 جم من الكربوهيدرات سريعة المفعول من Vitargo لتغذية جلسات تدريبك.",
    "تعزيز تدفق الدم: يحتوي على AAKG (أرجينين ألفا-كيتوجلوتارات) لتوسيع الأوعية الدموية، مما يسمح بتوصيل أفضل للأكسجين والمغذيات للعضلات العاملة.",
    "تحمل عضلي محسّن: يحتوي على بيتا-ألانين لتعزيز تحمل العضلات، مما يتيح لك التدريب بشكل أقوى ولمدة أطول."
  ]
},

  },
  {
    slug: "iso-orca",
    image: "/images/3.png",
    en: {
      name: "ORCA Tornado",
      shortDescription: " is a fully dosed and highly effective pre-workout supplement designed to deliver exactly what you need for peak performance.",
      description: " This formula helps you push your limits and achieve your ftness goals faster by preparing your body for intense training sessions. It is engineered to provide extreme energy and superior results through a potent blend of amino acids and vitamins.",
      benefits: ["Explosive Energy: Packed with 400mg of Caffeine Anhydrous (per 2 servings) to ignite your focus and drive.",
                "Muscle Endurance: Contains 4000mg of Beta-Alanine (per 2 servings) to enhance muscle exercise capacity and endurance.",  
                "Nitric Oxide Boost: Features Arginine AKG and Citrulline Malate to support blood fl   ow and muscle pumps during training."],
    },
    ar: {
  name: "ORCA Tornado",
  shortDescription: "مكمل قبل التمرين فعال للغاية ومُعطى بالجرعات الكاملة، مصمم لتوفير بالضبط ما تحتاجه لأداء ذروة.",
  description: "تساعدك هذه التركيبة على تجاوز حدودك وتحقيق أهدافك اللياقية بشكل أسرع من خلال تجهيز جسمك لجلسات تدريب مكثفة. تم تصميمها لتوفير طاقة هائلة ونتائج متفوقة عبر مزيج قوي من الأحماض الأمينية والفيتامينات.",
  benefits: [
    "طاقة وانفجار: يحتوي على 400 مجم من الكافيين اللامائي (لكل حصتين) لإشعال تركيزك وانطلاقك.",
    "تحمل عضلي: يحتوي على 4000 مجم من بيتا-ألانين (لكل حصتين) لتعزيز قدرة العضلات على الأداء والتحمل.",
    "تعزيز أكسيد النيتريك: يحتوي على أرجينين AKG وسترالين ماليت لدعم تدفق الدم وضخ العضلات أثناء التدريب."
  ]
},

  },
  {
    slug: "cera-orca",
    image: "/images/14.png",
    en: {
      name: "ORCA Multivitamin ",
      shortDescription: " is a comprehensive daily supplement scientifcally formulated to support the overall health of active individuals.",
      description: "This advanced formula delivers a wide range of essential vitamins and minerals, combined with specialized herbal and amino acid matrices to enhance recovery, focus, and digestive health.",
      benefits: ["Total Health Support: A complete profle of essential vitamins and minerals to support daily bodily functions.", "Enhanced Recovery: Features an Amino Matrix (Glycine, Arginine) specifcally designed for muscle support and repair", "Vitality & Focus: Includes a Herbal Matrix (Ginseng, Green Tea) to support mental focus and provide antioxidant protection."],
    },
    ar: {
  name: "ORCA Multivitamin",
  shortDescription: "مكمل يومي شامل مصمم علميًا لدعم الصحة العامة للأفراد النشطين.",
  description: "تقدم هذه التركيبة المتقدمة مجموعة واسعة من الفيتامينات والمعادن الأساسية، مجتمعة مع مصفوفات خاصة من الأعشاب والأحماض الأمينية لتعزيز التعافي، التركيز، وصحة الجهاز الهضمي.",
  benefits: [
             "دعم الصحة العامة: ملف كامل من الفيتامينات والمعادن الأساسية لدعم وظائف الجسم اليومية.",
             "تعزيز التعافي: يحتوي على مصفوفة أحماض أمينية (Glycine, Arginine) مصممة خصيصًا لدعم العضلات وإصلاحها.",
             "الحيوية والتركيز: يتضمن مصفوفة أعشاب (Ginseng, Green Tea) لدعم التركيز الذهني وتوفير الحماية المضادة للأكسدة."
           ]
    },
  },
  {
    slug: "l-carnitine-3000",
    image: "/images/15.png",
    en: {
      name: "ORCA Max",
      shortDescription: " Testosterone is a powerful, science-backed performance blend designed to naturally support male vitality and athletic excellence. ",
      description: " This High Creatine Dose formula is engineered for athletes who want to push their physical limits, focusing on hormonal balance, strength, and overall workout performance. It combines traditional herbal extracts with essential minerals to create a comprehensive anabolic support system.",
      benefits: ["Strength & Power: Formulated to signifcantly boost physical strength and explosive muscle power.", "Natural Testosterone Support: Contains a specialized matrix to support and maintain natural testosterone levels within the body.", "Performance & Endurance: Enhances overall workout performance and increases stamina for longer, more intense training sessions.", "Muscle Recovery: Aids in faster muscle recovery after strenuous exercise, helping you stay consistent with your training."],
    },
    ar:{
  name: "ORCA Max",
  shortDescription: "التستوستيرون هو مزيج قوي مدعوم علميًا مصمم لدعم الحيوية الذكورية والأداء الرياضي بشكل طبيعي.",
  description: "تم تصميم هذه التركيبة عالية الجرعة من الكرياتين للرياضيين الذين يرغبون في دفع حدودهم البدنية، مع التركيز على التوازن الهرموني، القوة، والأداء العام أثناء التمرين. تجمع بين مستخلصات الأعشاب التقليدية والمعادن الأساسية لإنشاء نظام دعم أنابولي شامل.",
  benefits: [
             "القوة والطاقة: مُركب لزيادة القوة البدنية والطاقة العضلية المتفجرة بشكل ملحوظ.",
             "دعم طبيعي للتستوستيرون: يحتوي على مصفوفة متخصصة لدعم والحفاظ على مستويات التستوستيرون الطبيعية داخل الجسم.",
             "الأداء والتحمل: يعزز الأداء العام أثناء التمرين ويزيد من القدرة على التحمل لجلسات تدريب أطول وأكثر كثافة.",
            "التعافي العضلي: يساعد على التعافي السريع للعضلات بعد التمارين الشاقة، مما يدعم استمرارية تدريبك."
           ]
    },

  },
  {
    slug: "amino-max",
    image: "/images/6.png",
    en: {
      name: "ORCA CLA+CARNITINE ",
      shortDescription: " is a powerful Energy Burn Formula specifcally designed for athletes looking for extreme workout results. ",
      description: " This premium supplement combines high dosages of L-Carnitine with a specialized CLA matrix to boost energy, endurance, and performance. It is the ultimate solution for those aiming to burn stubborn fat while maintaining high energy levels during intense physical activity.",
      benefits: ["Powerful Fat Burning: Contains a unique formula with Green Tea Chromium, and Green Coffee to help burn stubborn fats effectively.",
                "Energy & Endurance Boost: Provides 2000mg of L-Carnitine in just two servings to enhance performance and reduce the depletion of muscle glycogen.",
                ],
    },
    ar: {
  name: "ORCA CLA+CARNITINE",
  shortDescription: "تركيبة قوية لحرق الطاقة مصممة خصيصًا للرياضيين الذين يبحثون عن نتائج تدريبية مكثفة.",
  description: "يجمع هذا المكمل الفاخر بين جرعات عالية من L-Carnitine ومصفوفة CLA متخصصة لتعزيز الطاقة والتحمل والأداء. إنه الحل الأمثل لمن يسعى لحرق الدهون العنيدة مع الحفاظ على مستويات طاقة عالية أثناء النشاط البدني المكثف.",
  benefits: [
    "حرق الدهون بفعالية: يحتوي على تركيبة فريدة من Green Tea و Chromium و Green Coffee للمساعدة في حرق الدهون العنيدة بفعالية.",
    "تعزيز الطاقة والتحمل: يوفر 2000 مجم من L-Carnitine في حصتين فقط لتعزيز الأداء وتقليل استهلاك الجليكوجين العضلي."
        ]
    },

  },
  {
    slug: "orcavit",
    image: "/images/7.png",
    en: {
      name: "ORCA Creatine",
      shortDescription: " is a premium dietary supplement designed for athletes who demand maximum effciency and performance. ",
      description: " This advanced formula combines 5 highly anabolic forms of creatine specifcally engineered to enhance lean muscle growth, boost strength, and improve endurance. With 0g of carbs and 0g of sugar, it provides a 100% pure pharmaceutical-grade supplement to help you perform at your peak.",
      benefits: ["5-Type Creatine Blend: Includes Creatine Monohydrate, Hydrochloride,Dicreatine Malate, Alphaketoglutarate, and Micronized Creatine for optimized absorption.", "Enhanced Endurance: Contains Beta-alanine to increase muscle exercise capacity and allow for quicker recovery between sets.", "Muscle Replenishment: Supports the restoration of creatine reserves that deplete during intense exercise."],
    },
    ar: {
  name: "ORCA Creatine",
  shortDescription: "مكمل غذائي فاخر مصمم للرياضيين الذين يطلبون أقصى كفاءة وأداء.",
  description: "تجمع هذه التركيبة المتقدمة بين 5 أشكال أنابولية عالية من الكرياتين مصممة خصيصًا لتعزيز نمو العضلات الخالية من الدهون، زيادة القوة، وتحسين التحمل. مع 0 جم كربوهيدرات و0 جم سكر، يوفر مكمل نقي 100٪ بمستوى صيدلاني لمساعدتك على الأداء بأقصى طاقتك.",
  benefits: [
             "خليط كرياتين 5 أنواع: يشمل Creatine Monohydrate، Hydrochloride، Dicreatine Malate، Alphaketoglutarate، وMicronized Creatine لامتصاص مثالي.",
             "تعزيز التحمل: يحتوي على بيتا-ألانين لزيادة قدرة العضلات على الأداء والسماح بالتعافي السريع بين المجموعات.",
             "استعادة العضلات: يدعم تجديد مخزون الكرياتين الذي ينفد أثناء التمارين المكثفة."
            ]
        },

  },
  {
    slug: "burning-sea",
    image: "/images/8.png",
    en: {
      name: "ORCA Arginine",
      shortDescription: " Citrulline is an advanced pre-workout formula designed to provide an excellent refreshing boost to your training sessions.",
      description: " By combining high dosages of L-Arginine and L-Citrulline with a complete profle of essential vitamins, this supplement is specifcally intended to meet the expenditure of intense muscular effort. It is the perfect choice for athletes looking to improve blood fow, muscle pumps, and overall endurance.",
      benefits: ["Superior Muscle Pumps: Contains 2500mg of L-Arginine and 2500mg of L-Citrulline DL-Malate per serving to maximize nitric oxide production and vasodilation.",
                 "Intense Muscular Support: Specially designed for athletes undergoing high-intensity physical exertion to sustain power and performance.",
                 "Comprehensive Vitamin Matrix: Fortifed with a wide range of vitamins including B-Complex (B1, B2, B3, B5, B6, B9, B12), Vitamin C, E, D, and K to support energy metabolism and overall health.",
        ],
        },
    ar: {
  name: "ORCA Arginine",
  shortDescription: "Citrulline هي تركيبة متقدمة قبل التمرين مصممة لتوفير دفعة منعشة ممتازة لجلسات تدريبك.",
  description: "من خلال الجمع بين جرعات عالية من L-Arginine و L-Citrulline مع ملف كامل من الفيتامينات الأساسية، يُعد هذا المكمل مصممًا خصيصًا لتلبية متطلبات المجهود العضلي المكثف. إنه الاختيار الأمثل للرياضيين الذين يسعون لتحسين تدفق الدم، الضخ العضلي، والتحمل العام.",
  benefits: [
              "ضخ عضلي ممتاز: يحتوي على 2500 مجم من L-Arginine و 2500 مجم من L-Citrulline DL-Malate لكل حصة لتعظيم إنتاج أكسيد النيتريك وتوسيع الأوعية الدموية.",
             "دعم عضلي مكثف: مصمم خصيصًا للرياضيين الذين يمارسون مجهودًا بدنيًا عالي الكثافة للحفاظ على القوة والأداء.",
              "مصفوفة فيتامينات شاملة: معززة بمجموعة واسعة من الفيتامينات بما في ذلك B-Complex (B1, B2, B3, B5, B6, B9, B12)، والفيتامين C، E، D، و K لدعم استقلاب الطاقة والصحة العامة."
        ]
        },

  },
  {
    slug: "pre-workout-power",
    image: "/images/9.png",
    en: {
      name: "ORCA Anabolic", 
      shortDescription: "E Amino 10,000 is a high-potency amino acid supplement designed to support serious athletes in their quest for strength and superior recovery.",
      description: "This premium blend delivers a massive 10,000mg of amino acids per serving, derived from high-quality peptides. It is engineered to maintain a positive nitrogen balance, which is essential for optimal muscle function and preventing muscle breakdown during and after intense training.",
      benefits: ["Massive Amino Support: Delivers 10,000mg of a comprehensive amino acid profle to fuel muscle growth.",
                "Strength & Recovery: Specifcally formulated to support physical strength and accelerate the recovery process.",
                "Immune & Cellular Health: Supports the immune system and aids in cellular repair and maintenance. lar repair, ensuring your body stays resilient",

              ],
            },
    ar: {
         name: "ORCA Anabolic",
         shortDescription: "E Amino 10,000 هو مكمل أحماض أمينية عالي الفاعلية مصمم لدعم الرياضيين الجادين في سعيهم للقوة والتعافي المتفوق.",
        description: "يوفر هذا المزيج الفاخر 10,000 مجم من الأحماض الأمينية لكل حصة، مستمدة من ببتيدات عالية الجودة. تم تصميمه للحفاظ على توازن نيتروجيني إيجابي، وهو أمر أساسي لوظيفة العضلات المثلى ومنع تحلل العضلات أثناء وبعد التدريب المكثف.",
        benefits: [
                 "دعم أحماض أمينية ضخم: يوفر 10,000 مجم من ملف كامل للأحماض الأمينية لتغذية نمو العضلات.",
                 "القوة والتعافي: مصمم خصيصًا لدعم القوة البدنية وتسريع عملية التعافي.",
                 "صحة الجهاز المناعي والخلايا: يدعم الجهاز المناعي ويساعد في إصلاح وصيانة الخلايا، لضمان بقاء جسمك قويًا ومقاومًا."
             ]
          },  
  },
  {
    slug: "muscle-pump-extreme",
    image: "/images/10.png",
    en: {
      name: "ORCA Amino + EAA",
      shortDescription: " is a comprehensive intra-workout and post-workout formula designed to provide complete muscle support.",
      description: "This advanced blend features all 9 Essential Amino Acids (EAAs) that the body cannot produce on its own, ensuring you have the necessary building blocks for muscle protein synthesis and recovery. Whether you are looking to reduce fatigue during training or minimize muscle soreness afterward, this 100% premium formula is engineered for peak athletic performance.",
      benefits: ["Comprehensive Muscle Support: Contains all 9 Essential Amino Acids to provide a complete profile for muscle maintenance.",
                "Accelerated Protein Synthesis: Helps speed up the process of muscle repair and growth while reducing overall fatigue.",
                "Enhanced Endurance & Recovery: Specifcally formulated to improve your stamina during sets and shorten the time needed for recovery between workouts.",
            ],  
            },
    ar: {
  name: "ORCA Amino + EAA",
  shortDescription: "تركيبة شاملة أثناء وبعد التمرين مصممة لتوفير دعم كامل للعضلات.",
  description: "تتميز هذه التركيبة المتقدمة بكل الأحماض الأمينية الأساسية التسعة (EAAs) التي لا يستطيع الجسم إنتاجها بنفسه، مما يضمن توافر العناصر اللازمة لتخليق بروتين العضلات والتعافي. سواء كنت تسعى لتقليل التعب أثناء التمرين أو تقليل آلام العضلات بعده، فإن هذه التركيبة الفاخرة 100٪ مصممة لتحقيق أقصى أداء رياضي.",
  benefits: [
            "دعم عضلي شامل: يحتوي على جميع الأحماض الأمينية الأساسية التسعة لتوفير ملف كامل لصيانة العضلات.",
            "تسريع تخليق البروتين: يساعد على تسريع عملية إصلاح العضلات ونموها مع تقليل التعب العام.",
           "تحمل وتعافي محسّن: مصمم خصيصًا لتحسين قدرتك على التحمل أثناء التمارين وتقليل الوقت اللازم للتعافي بين الجلسات."
     ]
    },
  },
  {
    slug: "sleep-recovery-max",
    image: "/images/11.png",
    en: {
      name: "ORCA Whey",
      shortDescription: "is a high-quality natural food supplement extracted from cow's milk.",
      description: " This premium whey protein blend is processed using cross-fow ultra and microfltration to ensure high bioavailability and perfect absorption. It is designed for athletes who need a clean, effcient protein source that is low in carbohydrates and fats to support their training goals.",
      benefits: ["Triple Protein Source: Features a blend of Whey Protein Isolate, Whey Protein Concentrate, and Whey Protein Hydrolysate.",
                "High Protein Delivery: Provides 25g of high-quality protein per serving to support muscle growth. ",       
                "Rich Amino Acid Profle: Contains 5g of BCAAs and 5g of Glutamine per serving to aid in muscle recovery and maintenance.",

            ],
        },
    ar: {
  name: "ORCA Whey",
  shortDescription: "مكمل غذائي طبيعي عالي الجودة مستخلص من حليب الأبقار.",
  description: "هذا المزيج الفاخر من بروتين مصل اللبن مُعالج باستخدام تقنية الترشيح المتقاطع والفائق لضمان توافر حيوي عالي وامتصاص مثالي. صُمم للرياضيين الذين يحتاجون إلى مصدر بروتين نظيف وفعال منخفض الكربوهيدرات والدهون لدعم أهدافهم التدريبية.",
  benefits: [
              "مصدر بروتين ثلاثي: يحتوي على مزيج من Whey Protein Isolate، Whey Protein Concentrate، و Whey Protein Hydrolysate.",
             "توفير بروتين عالي الجودة: يوفر 25 جم من البروتين عالي الجودة لكل حصة لدعم نمو العضلات.",
            "ملف غني بالأحماض الأمينية: يحتوي على 5 جم من BCAAs و5 جم من Glutamine لكل حصة للمساعدة في تعافي العضلات وصيانتها."
         ]
     },
  },
  {
    slug: "joint-care-pro",
    image: "/images/12.png",
    en: {
      name: "ORCA ISO",
      shortDescription: "is a premium supplement formula designed for the most demanding athletes. ",
      description: "It is based on the highest quality whey protein isolate, offering exceptional favor and high solubility. This product is an ideal post-workout protein source, providing high-speed amino acids to maximize the growth and maintenance of muscle mass while supporting healthy bones",
      benefits: ["High Protein Content: Delivers 27 grams of pure and complete protein per serving.",
                "Anabolic Support: Packed with 5 grams of BCAA and 5 grams of Glutamine to fuel muscle recovery.",
                "RPure Formula: Features a trace amount of carbohydrates, including lactose, and zero fat.",
        ],
    },
    ar: {
  name: "ORCA ISO",
  shortDescription: "تركيبة مكمل فاخر مصممة لأكثر الرياضيين تطلبًا.",
  description: "يعتمد على أعلى جودة من Whey Protein Isolate، ويقدم مذاقًا استثنائيًا وقابلية ذوبان عالية. هذا المنتج هو مصدر بروتين مثالي بعد التمرين، حيث يوفر الأحماض الأمينية بسرعة عالية لتعظيم نمو وصيانة كتلة العضلات مع دعم صحة العظام.",
  benefits: [
             "محتوى بروتين عالي: يوفر 27 جم من البروتين النقي والكامل لكل حصة.",
             "دعم أنابولي: يحتوي على 5 جم من BCAA و5 جم من Glutamine لتعزيز تعافي العضلات.",
            "تركيبة نقية: يحتوي على كمية ضئيلة من الكربوهيدرات، بما في ذلك اللاكتوز، وبدون دهون."
         ]
     },
  },
  {
    slug: "immune-shield",
    image: "/images/13.png",
    en: {
      name: "ORCA Mass Gainer ",
      shortDescription: "is a cutting-edge weight gain supplement specifcally formulated for athletes and hard gainers looking to build signifcant muscle mass and strength quickly.",
      description: " This nutrient-dense formula provides a massive 60 grams of pure protein per serving, derived from a triple protein blend to fuel muscle growth. With a high-calorie and carbohydrate profle, it is the ideal recipe for bulking up and improving overall physical power.",
      benefits: ["Extreme Mass Gain Formula: Specifcally designed to help you grow bigger and stronger through a high-quality, nutrient-rich recipe.",
                 "Massive Protein Load: Delivers 60g of protein per serving to maximize muscle development.",
                "High in Recovery Nutrients: Rich in BCAAs (10g) and EAAs, which are essential for increasing strength and muscle volume.",
                "Quality Certifed: Manufactured under GMP standards, ISO certifed, and produced in compliance with Halal specifcations.",
                ],
         },
    ar: {
  name: "ORCA Mass Gainer",
  shortDescription: "مكمل زيادة الوزن المتطور مصمم خصيصًا للرياضيين والأشخاص الذين يجدون صعوبة في زيادة الكتلة العضلية، والذين يسعون لبناء عضلات وقوة كبيرة بسرعة.",
  description: "توفر هذه التركيبة الغنية بالمغذيات 60 جم من البروتين النقي لكل حصة، مستمدة من مزيج ثلاثي من البروتين لتعزيز نمو العضلات. مع محتوى عالي من السعرات الحرارية والكربوهيدرات، تعد الوصفة المثالية لزيادة الحجم وتحسين القوة البدنية العامة.",
  benefits: [
             "تركيبة زيادة كتلة متطورة: مصممة خصيصًا لمساعدتك على النمو بشكل أكبر وأقوى من خلال وصفة غنية بالمغذيات وعالية الجودة.",
            "حمولة بروتين ضخمة: توفر 60 جم من البروتين لكل حصة لتعظيم نمو العضلات.",
            "غنية بمغذيات التعافي: تحتوي على BCAAs (10 جم) والأحماض الأمينية الأساسية EAAs الضرورية لزيادة القوة وحجم العضلات.",
            "معتمدة الجودة: مصنعة وفق معايير GMP، ومعتمدة ISO، ومنتجة وفق المواصفات الحلال."
  ]
},

  },
]
