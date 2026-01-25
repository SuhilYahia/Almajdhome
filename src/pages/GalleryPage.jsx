import { useEffect } from 'react'

const galleryImages = [
  '/images/products/lounge-sofa.jpg',
  '/images/products/armchair-gray.jpg',
  '/images/products/dining-table.jpg',
  '/images/products/coffee-table.jpg',
  '/images/products/sideboard.jpg',
  '/images/products/bed-frame.jpg',
  '/images/products/dresser.jpg',
  '/images/products/geometric-rug.jpg',
]

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">المعرض</h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          لمحات من تصاميمنا وتنسيقاتنا—تفاصيل تبرز الفخامة وتمنح المكان روحًا دافئة.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((src) => (
          <div key={src} className="overflow-hidden bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={src}
                alt="معرض المجد هوم"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

