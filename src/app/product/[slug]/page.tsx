import { getServerSession } from 'next-auth'

import { getProduct, getProducts } from '@/utils/products'
import capitalizeFirstLetter from '@/utils/capital-first-letter'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import ProductDetails from '@/components/ProductDetails'
import ShowCase from '@/components/ShowCase'

type Context = {
  params: {
    slug: string
  }
}

const Product = async ({ params: { slug } }: Context) => {
  const session = await getServerSession(authOptions)

  const product = await getProduct(slug)
  const relatedProducts = await getProducts({
    take: 6,
    where: { category: product?.category, NOT: { name: product?.name } },
  })

  if (product) {
    return (
      <main className="h-fit">
        <section>
          <ProductDetails product={product} session={session} />
        </section>
        <section className="mt-24">
          <ShowCase
            title={capitalizeFirstLetter(product.category)}
            products={relatedProducts}
            session={session}
          />
        </section>
      </main>
    )
  }
}

export default Product
