"use client"

import { useEffect } from "react"
import Image from "next/image"
import  ModeToggle from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Plus, ArrowRight, Leaf } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

 function Navbar(){
    return(
        <header className=" container fixed top-0 left-0 right-0 z-50 bg-[#FFFDF8]/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4 px-2">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-[#ADFF00]" />
              <span className="text-xl font-medium tracking-tight">GlowStrand</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm hover:text-[#ADFF00] transition-colors">
                Products
              </a>
              <a href="#" className="text-sm hover:text-[#ADFF00] transition-colors">
                About
              </a>
              <a href="#" className="text-sm hover:text-[#ADFF00] transition-colors">
                Services
              </a>
              <a href="#" className="text-sm hover:text-[#ADFF00] transition-colors">
                Contact
              </a>
            </nav>
          </div>
          <Button
          size="lg"  className="bg-[#ADFF00] hover:bg-[#ADFF00]/90 h-12 text-black rounded-full    shadow-lg shadow-[#ADFF00]/20"
              >
                Get Started
              </Button>
        </div>
      </header>
    )
}
export default Navbar