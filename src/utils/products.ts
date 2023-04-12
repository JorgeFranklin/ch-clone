import { Prisma } from '@prisma/client'

import db from '@/libs/db'

export const getProduct = async (slug: string) => {
  try {
    const product = await db.products.findFirst({
      where: {
        slug,
      },
    })

    return product
  } catch (error) {
    console.log(error)

    return null
  }
}

export const getProducts = async (options?: Prisma.ProductsFindManyArgs) => {
  const products = await db.products.findMany(options)

  return products
}

export const getBanners = async (options?: Prisma.BannersFindManyArgs) => {
  const banners = await db.banners.findMany(options)

  return banners
}
