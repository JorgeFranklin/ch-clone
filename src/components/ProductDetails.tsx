import { Session } from 'next-auth'
import Image from 'next/image'
import { Products as Product } from '@prisma/client'

import CartButton from '@/components/CartButton'

export type ProductDetailsProps = {
  product: Product
  session: Session | null
}

const ProductDetails = ({ product, session }: ProductDetailsProps) => {
  return (
    <div className="flex gap-8 text-white max-lg:flex-col">
      <Image
        src={product.img}
        alt={product.name}
        priority
        quality={100}
        height={400}
        width={320}
        className="rounded-xl self-center"
      />
      <div className="w-full">
        <h1 className="text-white font-bold text-3xl max-md:text-center mb-6">
          {product.name}
        </h1>
        <p className="max-md:text-center">{product.details}</p>
        <div className="flex max-md:justify-between justify-end items-center mt-8">
          <span className="bg-gradient-to-r from-pink-500 to-red-500 rounded-full py-2 px-4 text-2xl font-bold mr-auto max-md:m-0">{`$ ${product.price}`}</span>

          {!!session && <CartButton id={`${product.id}`} variant="details" />}
          <button className="bg-gradient-to-r from-pink-500 to-red-500 rounded-full py-2 px-8 text-2xl font-bold ml-4 max-md:m-0 hover:brightness-75 transition-all duration-200">
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
