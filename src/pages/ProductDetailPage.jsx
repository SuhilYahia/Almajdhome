import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProductById } from '../data/products'
import { getSiteBaseUrl } from '../config'
import { FiStar } from 'react-icons/fi'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = getProductById(productId)
  
  useEffect(() => {
    if (!product) {
      navigate('/catalog')
      return
    }
    
    window.scrollTo(0, 0)
  }, [product, navigate, productId])
  
  if (!product) return null

  const waLines = [
    'مرحباً، أود طلب المنتج التالي:',
    '',
    `📌 الاسم: ${product.name}`,
    `📂 القسم: ${product.categoryName || '—'}`,
  ]
  if (product.dimensions) waLines.push(`📐 الأبعاد: ${product.dimensions}`)
  const baseUrl = getSiteBaseUrl()
  if (baseUrl) waLines.push('', `🔗 الرابط: ${baseUrl}/catalog/${product.id}`)
  const waMessage = waLines.join('\n')
  const waHref = `https://wa.me/966558177119?text=${encodeURIComponent(waMessage)}`
  
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar 
        key={i} 
        className={`${i < Math.floor(rating) 
          ? 'text-yellow-500 fill-yellow-500' 
          : i < rating 
            ? 'text-yellow-500 fill-yellow-500 opacity-50' 
            : 'text-gray-300'}`} 
      />
    ))
  }
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link to="/catalog" className="text-primary-700 hover:text-primary-800 inline-flex items-center gap-2">
          <span>العودة إلى الكتالوج</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-50 flex items-center justify-center p-8">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="max-w-full max-h-[500px] object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4 gap-2">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviewCount} تقييم)
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">الأبعاد</h3>
            <p className="text-gray-600">{product.dimensions}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">الخامات</h3>
            <p className="text-gray-600">{product.materials.join('، ')}</p>
          </div>
          
          {product.colors.length > 0 && (
            <div className="mb-8">
              <h3 className="font-medium mb-3">الألوان المتاحة</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <div key={color} className="flex flex-col items-center">
                    <div 
                      className="w-8 h-8 rounded-full border border-gray-300 mb-1"
                      style={{
                        backgroundColor: 
                          color.toLowerCase() === 'natural' || color.toLowerCase() === 'natural oak' 
                            ? '#D7BC8D' 
                            : color.toLowerCase() === 'walnut' 
                              ? '#5C4033'
                              : color.toLowerCase() === 'oak'
                                ? '#E8D0A9'
                                : color.toLowerCase(),
                      }}
                    ></div>
                    <span className="text-xs">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full sm:w-auto text-center"
            >
              استفسار عن هذه القطعة
            </a>
            <Link to="/gallery" className="btn btn-secondary w-full sm:w-auto text-center">
              مشاهدة تنسيقات مشابهة
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}