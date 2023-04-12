import { Poppins } from 'next/font/google'

import '@/styles/globals.css'
import NavBar from '@/components/NavBar'
import Container from '@/components/ui/Container'
import Providers from '@/components/Providers'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Carolina herrera',
  description: 'Carolina herrera',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen bg-mygray antialiased selection:bg-cyan-500/30">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <NavBar />
          <div className="pt-32">
            <Container>{children}</Container>
          </div>
          <footer className="border-t h-20 border-solid border-mygraylight bg-black/50 flex flex-col items-center justify-center mt-12">
            <p className="text-white">Carolina herrera | 2023 ©</p>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
