import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import db from '@/libs/db'

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response('Unauthorized')
    }

    const { cartItems } = await req.json()

    const convertingToAListOfNumbers = cartItems.map((id: string) => Number(id))

    const products = await db.products.findMany({
      where: {
        id: {
          in: convertingToAListOfNumbers,
        },
      },
    })

    const res = JSON.stringify(products)

    return new Response(res)
  } catch (error) {
    console.log(error)
    return new Response('Internal Server Error')
  }
}
