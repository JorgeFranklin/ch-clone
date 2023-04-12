import db from '@/libs/db'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const take = searchParams.get('take')

    const takeNumber = take === null ? undefined : Number(take)

    const products = await db.products.findMany({
      take: takeNumber,
    })

    const res = JSON.stringify(products)

    return new Response(res)
  } catch (error) {
    console.log(error)
    return new Response('Internal Server Error')
  }
}
