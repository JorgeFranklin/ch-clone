'use client'

import { Session } from 'next-auth'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Products as Product } from '@prisma/client'

import ProductCard from '@/components/ProductCard'

export type ProductsProps = {
  products: Product[]
  session: Session | null
}

const Products = ({ products, session }: ProductsProps) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef<any>()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div ref={carousel} className="overflow-x-hidden cursor-grab">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.5}
        className="flex gap-10"
      >
        {products.map((product) => (
          <div key={product.slug}>
            <ProductCard product={product} session={session} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Products
