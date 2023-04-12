'use client'

import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import useSWR from 'swr'

import SearchBar from '@/components/SearchBar'
import Heading from '@/components/ui/Heading'
import ProductsGrid from '@/components/ProductsGrid'
import Button from '@/components/ui/Button'
import { Products } from '@prisma/client'

const quantityToTake = 9

const getSearchedProducts = async (url: string) => {
  const res = await fetch(url)

  if (!res) {
    throw new Error('Failed to fetch products.')
  }

  return res.json()
}

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [noMoreProducts, setNoMoreProducts] = useState(false)
  const [oldProducts, setOldProducts] = useState<Products[]>([])
  const [newProducts, setNewProducts] = useState<Products[]>([])
  const [skipProducts, setSkipProducts] = useState(quantityToTake)

  const { status } = useSession({
    required: false,
  })

  const params = useSearchParams()
  const searchTerm = params.get('q')

  const { data: searchedProducts } = useSWR(
    `/api/products/search?q=${searchTerm}&skip=${0}&take=${quantityToTake}`,
    getSearchedProducts
  )

  const handleLoadMore = async () => {
    setLoading(true)
    setSkipProducts(skipProducts + searchedProducts.length)

    const res = await getSearchedProducts(
      `/api/products/search?q=${searchTerm}&skip=${skipProducts}&take=${quantityToTake}`
    )

    const hasMoreProducts = res.length < quantityToTake

    setOldProducts(newProducts)
    setNewProducts(res)
    setNoMoreProducts(hasMoreProducts)
    setLoading(false)
  }

  return (
    <main className="h-fit">
      <div className="flex flex-col gap-8">
        <div className="bg-black/50 text-white border border-mygraysuperlight rounded-xl backdrop-blur-sm py-2">
          <SearchBar />
        </div>
        {searchedProducts?.length > 0 ? (
          <div className="flex flex-col items-center max-md:h-fit min-h-screen">
            <Heading className="mb-8" size="lg">
              Results
            </Heading>

            <ProductsGrid
              products={
                searchedProducts?.length < quantityToTake
                  ? searchedProducts
                  : [...searchedProducts, ...oldProducts].concat(newProducts)
              }
              session={status}
            />

            {noMoreProducts || searchedProducts.length < quantityToTake ? (
              ''
            ) : (
              <Button
                onClick={handleLoadMore}
                className="mt-8 w-32 h-16 text-white"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin w-full h-full" />
                ) : (
                  <ChevronDown className="w-full h-full" />
                )}
              </Button>
            )}
          </div>
        ) : (
          <div className="h-screen" />
        )}
      </div>
    </main>
  )
}

export default Search
