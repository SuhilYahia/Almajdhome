import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products, initialFilters = {} }) {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({
    category: initialFilters.category || 'all',
    sortBy: initialFilters.sortBy || 'featured',
  })

  useEffect(() => {
    applyFilters()
  }, [filters, products])

  const applyFilters = () => {
    let result = [...products]
    
    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter((product) => product.category === filters.category)
    }
    
    // Apply sorting
    if (filters.sortBy === 'rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    } else if (filters.sortBy === 'featured') {
      result.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
    }
    
    setFilteredProducts(result)
  }

  const handleCategoryChange = (e) => {
    setFilters({
      ...filters,
      category: e.target.value,
    })
  }

  const handleSortChange = (e) => {
    setFilters({
      ...filters,
      sortBy: e.target.value,
    })
  }

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row gap-4 bg-gray-50 p-4">
        <div className="sm:w-1/2">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            القسم
          </label>
          <select
            id="category"
            value={filters.category}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">كل الأقسام</option>
            <option value="soft-seating">شراشف</option>
            <option value="seating">مخدات</option>
            <option value="tables">بطانيات</option>
            <option value="storage">مراتب</option>
            <option value="bedroom">غرف نوم</option>
            <option value="rugs">سجاد</option>
          </select>
        </div>
        
        <div className="sm:w-1/2">
          <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
            ترتيب حسب
          </label>
          <select
            id="sortBy"
            value={filters.sortBy}
            onChange={handleSortChange}
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="featured">الأبرز</option>
            <option value="rating">الأعلى تقييمًا</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">لا توجد عناصر مطابقة لخياراتك الحالية.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}