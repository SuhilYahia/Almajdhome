import { useEffect } from 'react'
import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          يسعدنا خدمتك. للتواصل والاستفسار عن المقاسات، الخامات، وتنسيق المفروشات.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* الهاتف */}
        <div className="bg-white p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <FiPhone className="text-primary-800" />
            <h2 className="font-semibold text-lg">الهاتف / واتساب</h2>
          </div>
          <a
            href="https://wa.me/966558177119"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:underline"
          >
            0558177119
          </a>
          <p className="text-sm text-gray-500 mt-2">
            متاح اتصال وواتساب
          </p>
        </div>

        {/* العنوان */}
        <div className="bg-white p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <FiMapPin className="text-primary-800" />
            <h2 className="font-semibold text-lg">العنوان</h2>
          </div>
          <p className="text-gray-600">
            حي اليرموك – قبل مطعم العميد
          </p>
        </div>

        {/* ساعات العمل */}
        <div className="bg-white p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <FiClock className="text-primary-800" />
            <h2 className="font-semibold text-lg">ساعات العمل</h2>
          </div>
          <p className="text-gray-600">متواجدون دائمًا لخدمتكم، 24 ساعة بلا توقف</p>
        
        </div>
      </div>
    </div>
  )
}