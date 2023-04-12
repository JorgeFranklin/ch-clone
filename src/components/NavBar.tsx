import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Container from '@/components/ui/Container'
import Menu from '@/components/Menu'
import MobileMenu from '@/components/MobileMenu'

const NavBar = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className="border-b h-20 border-solid border-mygraylight fixed top-0 right-0 left-0 z-20 bg-black/50  backdrop-blur-sm">
      <Container className="h-full flex items-center justify-between max-md:justify-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={340} height={23} priority />
        </Link>
        <Menu session={session} />
      </Container>
      <MobileMenu session={session} />
    </div>
  )
}

export default NavBar
