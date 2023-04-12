'use client'

import { ButtonHTMLAttributes, useState } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { Check, ShoppingCart } from 'lucide-react'

import useCart from '@/hooks/use-cart'

export const cartButtonVariants = cva(
  'bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full transition-all duration-200',
  {
    variants: {
      variant: {
        card: 'opacity-0 group-hover:opacity-100 absolute left-2.5 top-2.5 z-10 max-md:opacity-100 max-md:transition-none p-4 hover:brightness-90',
        details: 'py-3 px-8 text-2xl font-bold hover:brightness-75',
      },
    },
    defaultVariants: {
      variant: 'card',
    },
  }
)

export type CartButtonProps = {
  id: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof cartButtonVariants>

const CartButton = ({ className, variant, id, ...props }: CartButtonProps) => {
  const { addItem, removeItem, inTheCart } = useCart()
  const [insideTheCart, setInsideTheCart] = useState(inTheCart(id))

  const handleCart = () => {
    if (inTheCart(id)) {
      removeItem(id)
      setInsideTheCart(false)
    } else {
      addItem(id)
      setInsideTheCart(true)
    }
  }

  return (
    <button
      onClick={handleCart}
      className={cartButtonVariants({ className, variant })}
      {...props}
    >
      {insideTheCart ? <Check /> : <ShoppingCart />}
    </button>
  )
}

export default CartButton
