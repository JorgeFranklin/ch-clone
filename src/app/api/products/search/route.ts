import db from '@/libs/db'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const searchTerm = searchParams.get('q')
    const skip = searchParams.get('skip')
    const take = searchParams.get('take')

    const skipNumber = skip === null ? undefined : Number(skip)
    const takeNumber = take === null ? undefined : Number(take)

    if (!searchTerm) {
      return new Response('Parameter "q" has not been defined.')
    }

    const searchedProducts = await db.products.findMany({
      take: takeNumber,
      skip: skipNumber,
      where: {
        name: {
          contains: searchTerm,
        },
      },
    })

    const res = JSON.stringify(searchedProducts)

    return new Response(res)
  } catch (error) {
    console.log(error)
    return new Response('Internal Server Error')
  }
}
