"use client"

import { useEffect } from "react"
import Image from "next/image"
import  ModeToggle from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Plus, ArrowRight, Leaf } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

export default function Home() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }))
  }, [controls])

  const testimonials = [
    {
      name: "Sarah M",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
      role: "Verified Client",
      quote: "I'm delighted with what we have. The team is incredibly helpful, and my skin has never looked better!",
    },
    {
      name: "Emma R",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=800",
      role: "Pro Member",
      quote: "The personalized treatment plan made all the difference. Truly amazing results!",
    },
    {
      name: "Lisa W",
      image: "https://images.pexels.com/photos/1181579/pexels-photo-1181579.jpeg?auto=compress&cs=tinysrgb&w=800",
      role: "Premium Client",
      quote: "Finally found a skincare routine that works for my sensitive skin.",
    },
  ]

  const categories = ["Moisturizer", "Cleanser", "Sunscreen"]

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#FFFDF8]">
      {/* Header */}
      <header className=" fixed top-0 left-0 right-0 z-50 bg-[#FFFDF8]/80 backdrop-blur-md">
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

      {/* Hero Section */}
      <section className="px-2 pt-32 pb-20">
        <div className="relative">
          <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-[#ADFF00]/20 blur-3xl" />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              custom={0}
              className="flex items-center gap-2 rounded-full bg-black/5  py-1.5 pr-8 text-sm w-fit mb-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=${i * 100}`}
                    alt="User"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="font-medium">25K+ Users Glow with Confidence</span>
            </motion.div>

          <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                custom={1}
                className="font-display text-[clamp(5rem,20vw,12rem)] font-bold leading-[0.8] tracking-tight"
              >
                Radiant
                <span className="text-sm ml-2 align-top">(20)</span>
              </motion.h1>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                custom={2}
                className="font-display text-[clamp(5rem,20vw,12rem)] font-bold leading-[0.8] tracking-tight text-right"
              >
                Beauty
              </motion.h1>
            </div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              custom={3}
              className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="group bg-[#ADFF00] hover:bg-[#ADFF00]/90 text-black rounded-full h-14 px-8 animate-float shadow-lg shadow-[#ADFF00]/20"
              >
                Try Free Analysis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-neutral-500 max-w-md">
              We're dedicated to helping you restore and maintain healthy hair. Our AI-driven analysis offers personalized solutions tailored to address your unique hair concerns and needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-2  md:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-neutral-100"
        >
          <Image
            src="https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Happy clients using skincare products"
            width={1400}
            height={700}
            className=" h-[500px] md:h-[700px] w-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2">
            <Leaf className="h-4 w-4 text-[#ADFF00]" />
            <span className="text-sm font-medium">Connect With Us For Personalized Advice</span>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-[clamp(5rem,15vw,8rem)] font-bold leading-none tracking-tighter">
              1000
              <span className="text-[#FF9EAA]">+</span>
            </h2>
            <p className="mt-4 text-3xl font-light">From Happy Clients.</p>
            <div className="mt-12 flex gap-4">
              {testimonials.map((client, i) => (
                <Image
                  key={i}
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-white"
                />
              ))}
              <Button size="icon" variant="outline" className="h-20 w-20 rounded-full border-dashed">
                <Plus className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:text-right"
          >
            <div className="inline-block rounded-[2rem] bg-black p-8 text-white">
              <blockquote className="text-xl font-light leading-relaxed">"{testimonials[0].quote}"</blockquote>
              <cite className="mt-6 block text-sm text-neutral-400">
                {testimonials[0].name} — {testimonials[0].role}
              </cite>
            </div>

            <div className="mt-12 flex items-center justify-end gap-16">
              <div>
                <div className="text-6xl font-bold tracking-tighter">95%</div>
                <div className="mt-1 text-sm text-neutral-500">Clients Report</div>
              </div>
              <div>
                <div className="text-6xl font-bold tracking-tighter">9/10</div>
                <div className="mt-1 text-sm text-neutral-500">Clients Recommend</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
 {/* Treatments Section */}
 <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[2.5rem] bg-black p-12 text-white"
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight">
                Advanced Acne
                <span className="block text-[hsl(var(--accent-1))]">Treatments</span>
              </h2>
              <p className="mt-6 text-lg text-neutral-400">
                We offer a range of proven acne solutions and treatments, targeting different types of acne with
                personalized approaches.
              </p>
              <Button
              size="lg"
               className="mt-8 rounded-full bg-white text-black hover:bg-neutral-100 h-14">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Advanced skincare treatment"
                width={600}
                height={400}
                className="rounded-[2rem] object-cover h-[400px]"
              />
              <div className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--accent-1))]">
                <Plus className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Skincare Section */}
      <section className="container py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-[clamp(4rem,12vw,8rem)] font-bold leading-none tracking-tighter">
              Skincare
              <span className="block text-neutral-200">Essentials</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category, i) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-full bg-black px-4 py-2 text-sm text-white"
                >
                  {category}
                </motion.span>
              ))}
            </div>
            <p className="mt-6 text-xl font-light text-neutral-600">Handpicked Products For Your Skin's Needs</p>
            <Button className="mt-12 rounded-full bg-[#ADFF00] text-black hover:bg-[#ADFF00]/90 h-14 px-8">
              See Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Skincare products"
              width={600}
              height={400}
              className="rounded-[2rem] object-cover h-[500px]"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <Leaf className="h-6 w-6 text-[#ADFF00]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-display text-4xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-xl font-light text-neutral-600">Your Journey To Healthy Skin Starts Here</p>
          <div className="mt-8 text-5xl font-medium tracking-tight">
            hello@pure
            <span className="text-[#ADFF00]">glow.com</span>
          </div>
          <Button className="mt-8 rounded-full" variant="outline" size="lg">
            Fill Your Email Details
            <Leaf className="ml-2 h-4 w-4 text-[#ADFF00]" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-100">
        <div className="container py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-600 hover:text-[#ADFF00] transition-colors">
                Terms
              </a>
              <a href="#" className="text-neutral-600 hover:text-[#ADFF00] transition-colors">
                About Us
              </a>
              <a href="#" className="text-neutral-600 hover:text-[#ADFF00] transition-colors">
                Services
              </a>
              <a href="#" className="text-neutral-600 hover:text-[#ADFF00] transition-colors">
                Blog
              </a>
              <a href="#" className="text-neutral-600 hover:text-[#ADFF00] transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400">© 2024 Pure Glow. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

