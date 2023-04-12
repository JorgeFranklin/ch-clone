'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { Loader2 } from 'lucide-react'

import Button from '@/components/ui/Button'

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      await signOut({ callbackUrl: '/' })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleLogout}
      className="text-lg text-center h-10 w-60 text-red-600"
      variant="outline"
    >
      <span className="text-red-600">
        {isLoading ? <Loader2 className="animate-spin mx-auto" /> : 'Sign out'}
      </span>
    </Button>
  )
}

export default LogoutButton
