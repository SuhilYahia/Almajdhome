import { useEffect } from 'react'
import products from '../data/products'
import ProductList from '../components/products/ProductList'

export default function CatalogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">الكتالوج</h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          استعرض مجموعة مختارة من المفروشات والتصاميم بعناية—مزيج من الراحة، الجودة، والذوق الرفيع.
        </p>
      </div>

      <ProductList products={products} />
    </div>
  )
}

