import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import { cn } from "@/lib/utils"
import type React from "react" // Import React

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata = {
  title: "Glowstrand - Expert Skincare Solutions",
  description: "Expert skincare solutions for healthier, radiant skin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-white font-sans antialiased", spaceGrotesk.variable)}>{children}</body>
    </html>
  )
}

