import { Link } from 'react-router-dom'
import { getSiteBaseUrl } from '../../config'

const WHATSAPP_PHONE = '966558177119'

function buildOrderMessage(product) {
  const lines = [
    'مرحباً، أود طلب المنتج التالي:',
    '',
    `📌 الاسم: ${product.name}`,
    `📂 القسم: ${product.categoryName || '—'}`,
  ]
  if (product.dimensions) lines.push(`📐 الأبعاد: ${product.dimensions}`)
  const baseUrl = getSiteBaseUrl()
  if (baseUrl) lines.push('', `🔗 الرابط: ${baseUrl}/catalog/${product.id}`)
  return lines.join('\n')
}

export default function ProductCard({ product }) {
  const waMessage = buildOrderMessage(product)
  const waHref = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waMessage)}`

  return (
    <div className="product-card group block">
      <Link to={`/catalog/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-square">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-image w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        </div>
        <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.categoryName}</p>
      </Link>
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-primary-600 bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        اطلب الآن
      </a>
    </div>
  )
}