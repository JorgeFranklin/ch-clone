import { Products as Product } from '@prisma/client'
import ProductCard from '@/components/ProductCard'

export type ProductsGridProps = {
  products: Product[]
  session?: 'authenticated' | 'loading' | 'unauthenticated'
}

const ProductsGrid = ({ products, session }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          session={session === 'unauthenticated' ? false : true}
        />
      ))}
    </div>
  )
}

export default ProductsGrid
