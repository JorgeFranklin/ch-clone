import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import CartProducts from '@/components/CartProducts'
import Heading from '@/components/ui/Heading'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const Cart = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="bg-black/50 border border-mygraylight rounded-xl flex flex-col gap-8 py-8 items-center min-h-[500px]">
      <Heading>Your Cart</Heading>

      <CartProducts />
    </div>
  )
}

export default Cart
