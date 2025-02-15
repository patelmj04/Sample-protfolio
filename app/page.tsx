// app/page.tsx
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import mjImage from "./Images/Mj.png";
import logoimage from "./Images/logo.png"
export default function Page() {
  return (
    <div className="min-h-screen">
      {/*  Minimal Intro */}
      <div className="min-h-screen bg-black">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
          <Image
            src={logoimage} // Replace with your logo image path or import
            alt="logo"
            width={40} // Adjust width to make it smaller
            height={40} // Adjust height to make it smaller
            className="object-cover rounded-lg shadow-xl"
            priority
             />   
             </Link>
                <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-white hover:text-gray-300 transition">
                About
              </Link>
              <Link href="#skills" className="text-white hover:text-gray-300 transition">
                Skills
              </Link>
              <Link href="#projects" className="text-white hover:text-gray-300 transition">
                Projects
              </Link>
              <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
                Contact
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen pt-20">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl md:text-6xl font-bold">
                Front-End Developer
                <span className="block text-gray-400 mt-2 text-3xl md:text-4xl">
                  & UI Designer
                </span>
              </h1>
              <p className="text-lg text-gray-300">
                Turning ideas into intuitive digital experiences
              </p>
              <div className="flex gap-4">
                <Link
                  href="patelmj@rknec.edu"
                  className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition"
                >
                  <Mail className="w-6 h-6" />
                </Link>
                <Link 
                  href="https://github.com/patelmj04"
                  className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link 
                  href="https://linkedin.com/in/patelmj04"
                  className="p-2 bg-white/10 rounded-md hover:bg-white/20 transition"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="relative h-[500px]">
            <Image
              src={mjImage}
              alt="Professional portrait"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
            </div>
          </div>
        </div>
      </div>

      //I'll continue to work on the below
      
    </div>
  )
}