import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/catalog/${product.id}`} className="product-card group block">
      <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-square">
        <img
          src={product.images[0]} 
          alt={product.name}
          className="product-image w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
      <p className="text-gray-600 text-sm mt-1">{product.categoryName}</p>
    </Link>
  )
}