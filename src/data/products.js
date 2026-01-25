// Mock product data
const products = [
  {
    id: 1,
    name: "كرسي استرخاء فاخر",
    description: "كرسي مريح بتفاصيل أنيقة وقاعدة متينة—مثالي لغرفة المعيشة والزوايا الهادئة. تصميمه يجمع بين الراحة والمظهر الراقي.",
    price: 24999,
    rating: 4.7,
    reviewCount: 42,
    category: "soft-seating",
    categoryName: "شراشف",
    stock: 15,
    dimensions: "31.5\"W x 35\"D x 33.5\"H",
    materials: ["خشب", "قماش", "إسفنج"],
    colors: ["رمادي", "بيج", "أزرق"],
    images: [
      "/images/products/armchair-gray.jpg"
    ],
    featured: true,
  },
  {
    id: 2,
    name: "كرسي طاولة بتصميم عصري",
    description: "كرسي بطابع عصري وخطوط نظيفة يمنح مساحة الطعام مظهرًا متوازنًا. مناسب للتنسيقات الحديثة مع راحة جلوس ممتازة.",
    price: 3499,
    rating: 4.5,
    reviewCount: 38,
    category: "seating",
    categoryName: "مخدات",
    stock: 24,
    dimensions: "18\"W x 21\"D x 30\"H",
    materials: ["خشب", "قشرة خشبية"],
    colors: ["طبيعي", "أسود", "أبيض"],
    images: [
      "/images/products/dining-chair.jpg"
    ],
    featured: true,
  },
  {
    id: 3,
    name: "طاولة طعام بخطوط بسيطة",
    description: "طاولة طعام أنيقة تناسب التجمعات اليومية وتنسيقات الضيافة. مظهرها العصري يمنح المكان اتساعًا وهدوءًا بصريًا.",
    price: 4499,
    rating: 4.8,
    reviewCount: 26,
    category: "tables",
    categoryName: "بطانيات",
    stock: 10,
    dimensions: "72\"W x 36\"D x 30\"H",
    materials: ["خشب", "خشب صلب"],
    colors: ["خشب طبيعي"],
    images: [
      "/images/products/dining-table.jpg"
    ],
    featured: true,
  },
  {
    id: 4,
    name: "مرتبة نوم فاخرة ",
    description: "قطعة تخزين عملية بتصميم راقٍ تناسب غرفة الطعام أو الممر. توفر مساحة منظمة مع لمسة فخامة هادئة.",
    price: 39999,
    rating: 4.6,
    reviewCount: 19,
    category: "storage",
    categoryName: "مراتب",
    stock: 8,
    dimensions: "60\"W x 18\"D x 30\"H",
    materials: ["خشب", "MDF"],
    colors: ["جوزي"],
    images: [
      "/images/products/sideboard.jpg"
    ],
    featured: false,
  },
  {
    id: 5,
    name: "سرير بتصميم عصري",
    description: "هيكل سرير بخطوط هادئة ولوح خلفي أنيق—يمنح غرفة النوم مظهرًا مرتبًا ومريحًا مع طابع فاخر.",
    price: 54999,
    rating: 4.9,
    reviewCount: 31,
    category: "bedroom",
    categoryName: "غرف نوم",
    stock: 7,
    dimensions: "Queen: 63\"W x 83\"D x 35\"H",
    materials: ["خشب", "خشب رقائقي"],
    colors: ["خشبي", "جوزي", "أبيض"],
    images: [
      "/images/products/bed-frame.jpg"
    ],
    featured: true,
  },
  {
    id: 6,
    name: "سجادة بنقشة هندسية",
    description: "سجادة بملمس ناعم ونقشة هندسية عصرية تضيف دفئًا وعمقًا للتنسيق. مناسبة لغرفة المعيشة أو النوم.",
    price: 1799,
    rating: 4.4,
    reviewCount: 22,
    category: "rugs",
    categoryName: "سجاد",
    stock: 15,
    dimensions: "5' x 8'",
    materials: ["صوف", "قطن"],
    colors: ["متعدد الألوان"],
    images: [
      "/images/products/geometric-rug.jpg"
    ],
    featured: false,
  },
  {
    id: 7,
    name: "كنبة استرخاء ثلاثية",
    description: "كنبة بثلاث مقاعد ووسائد مريحة تمنحك جلسة فاخرة. تصميمها المتوازن يناسب المساحات العصرية ويضيف حضورًا قويًا.",
    price: 64999,
    rating: 4.7,
    reviewCount: 48,
    category: "soft-seating",
    categoryName: "شراشف",
    stock: 5,
    dimensions: "84\"W x 38\"D x 34\"H",
    materials: ["خشب", "قماش", "إسفنج"],
    colors: ["رمادي فاتح", "رمادي غامق", "أزرق", "بيج"],
    images: [
      "/images/products/lounge-sofa.jpg"
    ],
    featured: true,
  },
  {
    id: 8,
    name: "كرسي مرتفع للمطبخ",
    description: "كرسي مرتفع بتصميم عملي ومساند مريحة—مناسب للجزيرة أو طاولة البار ويكمل الطابع العصري للمكان.",
    price: 3299,
    rating: 4.3,
    reviewCount: 17,
    category: "seating",
    categoryName: "مخدات",
    stock: 20,
    dimensions: "17\"W x 17\"D x 30\"H",
    materials: ["معدن", "خشب"],
    colors: ["أسود", "أبيض", "طبيعي"],
    images: [
      "/images/products/bar-stool.jpg"
    ],
    featured: false,
  },
  {
    id: 9,
    name: "طاولة قهوة أنيقة",
    description: "طاولة قهوة بخطوط نظيفة ورف سفلي للتخزين—تعطي الصالة ترتيبًا وأناقة دون ازدحام بصري.",
    price: 22499,
    rating: 4.6,
    reviewCount: 29,
    category: "tables",
    categoryName: "بطانيات",
    stock: 12,
    dimensions: "47\"W x 24\"D x 16\"H",
    materials: ["خشب", "زجاج"],
    colors: ["خشبي/زجاج"],
    images: [
      "/images/products/coffee-table.jpg"
    ],
    featured: true,
  },
  {
    id: 10,
    name: "مرتبة نوم فاخرة ",
    description: "وحدة رفوف متعددة الاستخدام تضيف تنظيمًا وأناقة للمكان. مناسبة للكتب، الديكور، والإكسسوارات.",
    price: 14999,
    rating: 4.5,
    reviewCount: 23,
    category: "storage",
    categoryName: "مراتب",
    stock: 18,
    dimensions: "32\"W x 12\"D x 72\"H",
    materials: ["MDF", "لامينيت"],
    colors: ["أبيض", "أسود", "خشبي"],
    images: [
      "/images/products/bookshelf.jpg"
    ],
    featured: false,
  },
  {
    id: 11,
    name: "تسريحة أدراج واسعة",
    description: "تسريحة بأدراج متعددة لتخزين منظم. تصميمها الهادئ ينسجم مع أغلب تنسيقات غرف النوم.",
    price: 37499,
    rating: 4.7,
    reviewCount: 15,
    category: "bedroom",
    categoryName: "غرف نوم",
    stock: 9,
    dimensions: "58\"W x 18\"D x 32\"H",
    materials: ["خشب", "MDF"],
    colors: ["أبيض", "جوزي"],
    images: [
      "/images/products/dresser.jpg"
    ],
    featured: false,
  },
  {
    id: 12,
    name: "سجادة بألياف طبيعية",
    description: "سجادة بألياف طبيعية وملمس ناعم تضيف دفئًا وأناقة هادئة للمكان. عملية ومناسبة للمساحات كثيرة الاستخدام.",
    price: 1999,
    rating: 4.2,
    reviewCount: 11,
    category: "rugs",
    categoryName: "سجاد",
    stock: 25,
    dimensions: "4' x 6'",
    materials: ["جوت", "قطن"],
    colors: ["طبيعي"],
    images: [
      "/images/products/area-rug.jpg"
    ],
    featured: false,
  }
];

export default products;

// Get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Get single product
export const getProductById = (id) => {
  return products.find(product => product.id === Number(id));
};

// Get all categories with products
export const getCategories = () => {
  const categories = [
    { id: 'soft-seating', name: 'شراشف' },
    { id: 'seating', name: 'مخدات' },
    { id: 'tables', name: 'بطانيات' },
    { id: 'storage', name: 'مراتب' },
    { id: 'bedroom', name: 'غرف نوم' },
    { id: 'rugs', name: 'سجاد' },
  ];
  
  return categories;
};