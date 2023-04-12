import { Session } from 'next-auth'
import { Products as Product } from '@prisma/client'

import Heading from '@/components/ui/Heading'
import Products from '@/components/products/Products'

export type ShowCaseProps = {
  title: string
  products: Product[]
  session: Session | null
}

const ShowCase = ({ title, products, session }: ShowCaseProps) => {
  return (
    <div>
      <Heading className="mb-6">{title}</Heading>
      <Products products={products} session={session} />
    </div>
  )
}

export default ShowCase
