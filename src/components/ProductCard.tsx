import { Session } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { Products as Product } from '@prisma/client'

import CartButton from '@/components/CartButton'

export type ProductCardProps = {
  product: Product
  session: Session | null | true | false
}

const ProductCard = ({ product, session }: ProductCardProps) => {
  return (
    <div className="max-w-xs h-[400px] w-80 relative group">
      {!!session && <CartButton id={`${product.id}`} />}

      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.img}
          alt={product.name}
          priority
          quality={100}
          height={400}
          width={320}
          className="absolute rounded-xl pointer-events-none"
        />

        <div className="bg-black/20 text-center backdrop-blur-sm border-solid border-mygraylight/20 rounded-xl rounded-t-none absolute bottom-0 right-0 left-0 h-28 opacity-0 group-hover:opacity-100 transition-opacity duration-200 max-md:opacity-100 max-md:transition-none">
          <p className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.7)] text-2xl">
            {product.name.length > 41
              ? `${product.name.slice(0, 41)}...`
              : product.name}
          </p>
          <div className="pt-3">
            <span className="text-white text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 px-2 rounded-2xl mt-2">
              {`$ ${product.price}`}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
