import { Link } from 'react-router-dom'

const categories = [
  { title: 'شراشف', image: '/images/categories/soft-seating.jpg' },
  { title: 'بطانيات', image: '/images/categories/tables.jpg' },
  { title: 'غرف نوم', image: '/images/categories/bedroom.jpg' },
  { title: 'مراتب', image: '/images/categories/mattresses.jpg' },
  { title: 'سجاد', image: '/images/categories/rugs.jpg' },
  { title: 'مخدات', image: '/images/categories/seating.jpg' },
]

export default function HomePage() {
  return (
    <div className="bg-[#faf9f7]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/categories/bedroom.jpg"
            alt="المجد هوم للمفروشات"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-black/10" />
        </div>

        <div className="container mx-auto relative py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-white/85 tracking-wide mb-3">
              المجد هوم للمفروشات
            </p>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              فخامة تُرى… وراحة تُحسّ
            </h1>
            <p className="text-white/85 mt-5 text-lg leading-relaxed">
              ننسّق مفروشات تمنح منزلك حضورًا مميزًا—خامات مختارة، تشطيبات دقيقة، وتصاميم تناسب الذوق العصري.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/catalog" className="btn btn-primary">
                استعرض الكتالوج
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="container mx-auto py-14 md:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              هوية تليق بذوقك
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              في <span className="font-semibold text-gray-900">المجد هوم</span> نؤمن أن المفروشات ليست قطعًا فقط—
              بل تجربة حياة. لذلك نركز على التفاصيل: تناسق الألوان، راحة الاستخدام، وجودة التصنيع.
            </p>
            <p className="text-gray-600 leading-relaxed">
              هدفنا أن يكون منزلك انعكاسًا لفخامة هادئة… وأناقة تدوم.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-6 md:p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-primary-900 text-3xl font-bold">+10</p>
                <p className="text-gray-600 mt-1">أنماط تصميم</p>
              </div>
              <div>
                <p className="text-primary-900 text-3xl font-bold">100%</p>
                <p className="text-gray-600 mt-1">اهتمام بالتفاصيل</p>
              </div>
              <div>
                <p className="text-primary-900 text-3xl font-bold">مختارة</p>
                <p className="text-gray-600 mt-1">خامات وتشطيبات</p>
              </div>
              <div>
                <p className="text-primary-900 text-3xl font-bold">ذوق</p>
                <p className="text-gray-600 mt-1">عصري وفاخر</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto pb-14 md:pb-18">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              أقسام مختارة
            </h2>
            <p className="text-gray-600 mt-2">
              تنسيقات تناسب غرف المعيشة، النوم، والاستقبال—بلمسة راقية.
            </p>
          </div>
          <Link to="/catalog" className="text-primary-800 hover:text-primary-900 font-medium">
            عرض الكتالوج
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link key={c.title} to="/catalog" className="group overflow-hidden bg-white border border-gray-100">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">استعراض تصاميم مختارة ضمن هذا القسم</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Showcase banner */}
      <section className="container mx-auto pb-16">
        <div className="relative overflow-hidden bg-primary-900 text-white">
          <img
            src="/images/comfor.png"
            alt="تنسيقات المجد هوم"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="relative p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">لمسة فخامة… في كل زاوية</h2>
              <p className="mt-4 text-white/85 leading-relaxed">
                اختر من الكتالوج أو شاركنا ذوقك—وسنساعدك بتنسيق يناسب مساحة منزلك.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Link to="/gallery" className="btn bg-white text-primary-900 hover:bg-primary-50">
                شاهد المعرض
              </Link>
              <Link to="/contact" className="btn bg-accent-500 text-white hover:bg-accent-600">
                اطلب استشارة
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}