'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import Button from '@/components/ui/Button'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()

    if (searchTerm.length > 0) {
      const encodedsearchTerm = encodeURI(searchTerm)
      router.push(`/search?q=${encodedsearchTerm}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex px-4 gap-4">
      <input
        type="text"
        className="bg-transparent outline-none w-full placeholder:text-gray-200"
        placeholder="Find products & articles..."
        value={searchTerm}
        autoFocus
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button>Search</Button>
    </form>
  )
}

export default SearchBar
