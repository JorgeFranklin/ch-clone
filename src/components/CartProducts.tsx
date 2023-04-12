'use client'

import useSWR from 'swr'

import { Loader2 } from 'lucide-react'

import useCart from '@/hooks/use-cart'
import ProductsGrid from '@/components/ProductsGrid'

const getCartProducts = async (url: string, ids: string[]) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cartItems: ids }),
  })

  if (!res) {
    throw new Error('Failed to fetch products.')
  }

  return res.json()
}

const CartProducts = () => {
  const { cartItems } = useCart()

  const { data: cartProducts, isLoading } = useSWR(
    ['/api/products/cart', cartItems],
    (params) => getCartProducts(...params)
  )

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-80 w-full">
        <Loader2 className="animate-spin text-white w-12 h-12" />
      </div>
    )

  if (cartProducts.length === 0)
    return (
      <h2 className="flex items-center justify-center h-80 w-full text-white text-5xl text-center max-md:text-3xl">
        No items in cart :(
      </h2>
    )

  return (
    <div className="flex flex-col gap-8 items-center">
      <ProductsGrid products={cartProducts} />
      <button className="bg-gradient-to-r from-pink-500 to-red-500 rounded-full py-2 px-8 text-2xl font-bold ml-4 max-md:m-0 hover:brightness-75 transition-all duration-200 text-white">
        Buy all
      </button>
    </div>
  )
}

export default CartProducts
