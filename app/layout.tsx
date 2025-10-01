import type React from "react"
import type { Metadata } from "next"
import { DM_Serif_Display, Inter } from "next/font/google"
import "./globals.css"

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chủ nghĩa duy vật lịch sử – Từ trang sử đến đời sống số",
  description:
    "Hiểu bản chất tồn tại xã hội ↔ ý thức xã hội qua các mốc lịch sử Việt Nam và cách giới trẻ định hình tương lai trong thời đại AI.",
  openGraph: {
    title: "Chủ nghĩa duy vật lịch sử",
    description: "Từ trang sử đến đời sống số - Khám phá triết học lịch sử qua góc nhìn hiện đại",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${dmSerif.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
