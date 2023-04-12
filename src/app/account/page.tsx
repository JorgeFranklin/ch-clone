import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LogoutButton from '@/components/LogoutButton'

const Account = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="bg-black/50 border border-mygraylight rounded-xl">
      <div className="flex flex-col items-center justify-center gap-4 p-20">
        <Image
          src={session.user?.image!}
          alt={session.user?.name!}
          width={80}
          height={80}
          className="rounded-full"
        />
        <h2 className="text-white text-2xl">{session.user?.name}</h2>
        <LogoutButton />
      </div>
    </div>
  )
}

export default Account
