'use client'

import Link from 'next/link'
import { Session } from 'next-auth'
import { LogIn, Search, ShoppingCart, User } from 'lucide-react'

import Button from '@/components/ui/Button'
import useCart from '@/hooks/use-cart'

export type MenuProps = {
  session: Session | null
}

const Menu = ({ session }: MenuProps) => {
  const { cartItems } = useCart()

  return (
    <div>
      <div className="flex items-center gap-8 max-md:hidden">
        <Link href="/search">
          <Button>
            <Search />
          </Button>
        </Link>
        {!!session ? (
          <>
            <Link href="/cart">
              <Button>
                <div className="relative">
                  {cartItems.length > 0 && (
                    <span className="absolute -right-1 -top-[1px] rounded-full bg-gradient-to-r from-pink-500 to-red-500 w-3 h-3 text-white" />
                  )}
                  <ShoppingCart />
                </div>
              </Button>
            </Link>
            <Link href="/account">
              <Button>
                <User />
              </Button>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <Button>
              <LogIn />
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Menu
