'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, BookOpen, FileText, Mic, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren, scaleIn, slideIn } from '../utils/animations'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center align-center min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <header className="hidden px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
        <motion.a 
          className="flex items-center justify-center" 
          href="#"
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <FileText className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ContentAI</span>
        </motion.a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <motion.a 
            className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" 
            href="#"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Features
          </motion.a>
          <motion.a 
            className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" 
            href="#"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            Pricing
          </motion.a>
          <motion.a 
            className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" 
            href="#"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            About
          </motion.a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center space-y-4 text-center"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.div className="space-y-2" variants={fadeIn}>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">
                  Transform Your Content
                  <br />
                  Amplify Your Reach
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  Automatically repurpose your existing content into engaging social media posts, catchy headlines, and more with the power of AI.
                </p>
              </motion.div>
              <motion.div className="w-full max-w-sm space-y-2" variants={scaleIn}>
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Start repurposing your content in minutes. No credit card required.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              How It Works
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                { icon: BookOpen, title: "Blog Posts", description: "Turn your long-form articles into bite-sized content" },
                { icon: Youtube, title: "YouTube Transcripts", description: "Extract key points from your video content" },
                { icon: Mic, title: "Podcast Episodes", description: "Convert audio insights into shareable text" },
                { icon: FileText, title: "Notes", description: "Transform your ideas into polished content" },
              ].map((item, index) => (
                <motion.div key={index} className="flex flex-col items-center text-center" variants={scaleIn}>
                  <item.icon className="h-12 w-12 mb-4 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Features
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                { title: "Social Media Posts", description: "Optimized for Twitter, LinkedIn, and Instagram" },
                { title: "Catchy Headlines", description: "Grab attention with compelling titles" },
                { title: "Email Newsletters", description: "Create engaging snippets for your subscribers" },
                { title: "Short-form Marketing Copy", description: "Craft concise and impactful messages" },
                { title: "AI-Powered", description: "Leverage advanced AI for intelligent repurposing" },
                { title: "Time-Saving", description: "Automate your content creation process" },
              ].map((item, index) => (
                <motion.div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" variants={scaleIn}>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-600 dark:bg-indigo-900">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="flex flex-col items-center space-y-4 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.div className="space-y-2" variants={fadeIn}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Amplify Your Content?</h2>
                <p className="mx-auto max-w-[600px] text-indigo-100 md:text-xl">
                  Join thousands of content creators who are saving time and increasing their reach with our AI-powered tool.
                </p>
              </motion.div>
              <motion.div className="w-full max-w-sm space-y-2" variants={scaleIn}>
                <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50" size="lg">
                  <Link href='/dashboard'>Get Started for Free</Link>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-indigo-100">
                  No credit card required. 14-day free trial.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white/30 dark:bg-gray-800/30 backdrop-blur-md">
        <p className="text-xs text-gray-700 dark:text-gray-300">© 2023 ContentAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-700 dark:text-gray-300" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

