import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-primary-50 text-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and social */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-primary-900 font-bold text-3xl">
              المجد هوم
            </Link>
            <div className="flex items-center mt-4 gap-4">
              <a href="#" className="text-gray-700 hover:text-primary-800" aria-label="فيسبوك">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-800" aria-label="إنستغرام">
                <FiInstagram size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm ">
              المجد هوم للمفروشات—تصاميم راقية وجودة عالية تعكس ذوقك. تابع جديدنا وعروضنا عبر قنوات التواصل.
            </p>
            <div className="flex mt-4">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="px-4 py-2 w-full bg-white border border-gray-300 focus:outline-none focus:border-primary-500"
              />
              <button 
                className="bg-primary-800 text-white px-4 hover:bg-primary-900 transition-colors"
              >
                إرسال
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">عن المجد هوم</h3>
            <ul className="space-y-2">
              <li><Link to="/" className=" hover:text-primary-800">الرؤية والهوية</Link></li>
              <li><Link to="/" className=" hover:text-primary-800">الجودة والخامات</Link></li>
              <li><Link to="/" className=" hover:text-primary-800">التفاصيل والتشطيبات</Link></li>
              <li><Link to="/contact" className=" hover:text-primary-800">خدمة العملاء</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">الكتالوج</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className=" hover:text-primary-800">شراشف</Link></li>
              <li><Link to="/catalog" className=" hover:text-primary-800">غرف نوم</Link></li>
              <li><Link to="/catalog" className=" hover:text-primary-800">بطانيات</Link></li>
              <li><Link to="/catalog" className=" hover:text-primary-800">مراتب</Link></li>
              <li><Link to="/catalog" className=" hover:text-primary-800">سجاد</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/gallery" className=" hover:text-primary-800">المعرض</Link></li>
              <li><Link to="/catalog" className=" hover:text-primary-800">الكتالوج</Link></li>
              <li><Link to="/contact" className=" hover:text-primary-800">تواصل معنا</Link></li>
              <li><Link to="/" className=" hover:text-primary-800">سياسة الخصوصية</Link></li>
              <li><Link to="/" className=" hover:text-primary-800">الشروط والأحكام</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-sm ">
          <p>© {new Date().getFullYear()} المجد هوم للمفروشات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}