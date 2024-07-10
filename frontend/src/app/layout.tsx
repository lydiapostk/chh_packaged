import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CHH Caseworker Allocation',
  description: 'Automated allocation of caseworkers to CHH supervisees',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} bg-gray-100`}>{children}</body> */}
      <body className={`bg-gray-100`}>{children}</body>
    </html>
  )
}
