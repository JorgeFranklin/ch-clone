'use client'

import { useState } from 'react'
import { Session } from 'next-auth'
import Link from 'next/link'
import {
  Home,
  LogIn,
  MoreHorizontal,
  Search,
  ShoppingCart,
  User,
  X,
} from 'lucide-react'

import Button from '@/components/ui/Button'
import useCart from '@/hooks/use-cart'

export type MobileMenuProps = {
  session: Session | null
}

const MobileMenu = ({ session }: MobileMenuProps) => {
  const { cartItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const togglenMenu = () => setIsOpen(!isOpen)

  return (
    <div className="hidden justify-center text-white max-md:flex">
      {isOpen ? (
        <div className="border border-t-0 border-solid border-mygraylight bg-black/50 backdrop-blur-sm h-screen top-0 w-full fixed z-50 flex items-center justify-center overflow-y-hidden">
          <Button
            onClick={togglenMenu}
            className="absolute right-5 top-24 py-7"
          >
            <X size={50} />
          </Button>
          <nav className="flex flex-col items-center gap-6">
            <Link href="/" className="w-fit">
              <Button className="h-14 w-48 text-3xl">
                <Home size={35} className="mr-4" /> Home
              </Button>
            </Link>
            <Link href="/search" className="w-fit pl-4">
              <Button className="h-14 text-3xl">
                <Search size={35} className="mr-4" /> Search
              </Button>
            </Link>
            {!!session ? (
              <>
                <Link href="/account" className="w-fit pl-8">
                  <Button className="h-14 text-3xl">
                    <User size={35} className="mr-4" /> Account
                  </Button>
                </Link>
                <Link href="/cart" className="w-fit">
                  <Button className="h-14 text-3xl pr-8">
                    <div className="relative mr-4">
                      {cartItems.length > 0 && (
                        <span className="absolute -right-1 top-[2px] rounded-full bg-gradient-to-r from-pink-500 to-red-500 w-4 h-4 text-white" />
                      )}
                      <ShoppingCart size={35} />
                    </div>
                    Cart
                  </Button>
                </Link>
              </>
            ) : (
              <Button className="h-14 text-3xl pl-0">
                <LogIn size={35} className="mr-4" /> Sign in
              </Button>
            )}
          </nav>
        </div>
      ) : (
        <button
          onClick={togglenMenu}
          className="border border-t-0 border-solid border-mygraylight bg-black/50 backdrop-blur-sm pb-1 px-6 rounded-b-xl"
        >
          <MoreHorizontal />
        </button>
      )}
    </div>
  )
}

export default MobileMenu
