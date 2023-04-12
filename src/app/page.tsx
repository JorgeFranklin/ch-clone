import { getServerSession } from 'next-auth'

import { getBanners, getProducts } from '@/utils/products'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ShowCase from '@/components/ShowCase'
import Banners from '@/components/banner/Banners'

export default async function Home() {
  const session = await getServerSession(authOptions)

  const banners = await getBanners()

  const fragrancesProducts = await getProducts({
    take: 6,
    where: { category: 'fragrances' },
  })

  const accessoriesProducts = await getProducts({
    take: 6,
    where: { category: 'accessories' },
  })

  const makeupProducts = await getProducts({
    take: 6,
    where: { category: 'makeup' },
  })

  return (
    <main>
      <section>
        <Banners banners={banners} />
      </section>
      <section className="mt-24">
        <ShowCase
          title="Fragrances"
          products={fragrancesProducts}
          session={session}
        />
      </section>
      <section className="mt-24">
        <ShowCase
          title="Accessories"
          products={accessoriesProducts}
          session={session}
        />
      </section>
      <section className="mt-24">
        <ShowCase title="Makeup" products={makeupProducts} session={session} />
      </section>
    </main>
  )
}
