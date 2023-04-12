import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Heading from '@/components/ui/Heading'
import LoginButton from '@/components/LoginButton'

const Login = async () => {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return (
    <div className="bg-black/50 border border-mygraylight rounded-xl flex flex-col gap-8 py-8 items-center px-4">
      <Heading className="max-lg:after:hidden text-center mb-8">
        Sign in with your Google account.
      </Heading>
      <LoginButton />
    </div>
  )
}

export default Login
