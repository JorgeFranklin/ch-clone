import { PrismaClient } from '@prisma/client'
import { PrismaSlug } from 'prisma-slug'

declare global {
  var prisma: PrismaClient | undefined
}

const db = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db

const slugMiddleware: any = PrismaSlug()

db.$use(slugMiddleware)

export default db
