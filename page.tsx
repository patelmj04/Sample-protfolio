import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Version 1 */}
      <div className="min-h-screen bg-black">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              MJ
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-white hover:text-gray-300 transition">
                About me
              </Link>
              <Link href="#skills" className="text-white hover:text-gray-300 transition">
                Skills
              </Link>
              <Link href="#portfolio" className="text-white hover:text-gray-300 transition">
                Portfolio
              </Link>
              <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
                CONTACT ME
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative min-h-screen">
          {/* Background split */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 w-1/2 bg-[#e5e5e5]" />
            <div className="absolute right-0 inset-y-0 w-1/2 bg-black" />
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 45% 100%, 0 100%)",
                background: "#e5e5e5",
              }}
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen pt-20">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl">Hi, I am</h2>
                  <h1 className="text-6xl font-bold">Mit Patel</h1>
                </div>
                <p className="text-xl text-gray-600">
                  Front-end Developer / UI Designer
                  <br />
                  Freelance Editor
                </p>
                <div className="flex gap-4">
                  <Link
                    href="mailto:contact@example.com"
                    className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                  >
                    <Mail className="w-6 h-6" />
                  </Link>
                  <Link href="https://github.com" className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link href="https://linkedin.com" className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div className="relative h-[600px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio.mj-WidMW5TtYVg2YMSrDKSMekHXRE10NF.png"
                  alt="Professional portrait"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Version 1 to Version 2 Transition */}
        <div className="bg-black py-12 text-center">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black"
            onClick={() => document.getElementById("version-2")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="w-4 h-4 mr-2" />
            View Detailed Version
          </Button>
        </div>
      </div>

      {/* Version 2 */}
      <div id="version-2" className="bg-[#e5e5e5]">
        {/* About Section */}
        <section id="about-v2" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block border-2 border-black px-8 py-2 mb-8">
                <h2 className="text-2xl font-bold">ABOUT ME</h2>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed mb-8">
                My toolbox includes HTML, CSS, JavaScript, and modern frameworks like React & tailwind/css. I'm
                passionate about creating pixel-perfect designs that deliver a seamless user experience in whatever I
                create—whether it's perfecting a gradient, nailing a micro-interaction, or ensuring accessibility. My
                editing work has honed my creative instincts, teaching me how to balance aesthetics and purpose in every
                project with minimal efforts and by meeting deadlines.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills-v2" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block border-2 border-black px-8 py-2 mb-12">
                <h2 className="text-2xl font-bold">SKILLS</h2>
              </div>

              {/* Using Now */}
              <div className="mb-16">
                <h3 className="text-lg font-semibold mb-6">USING NOW:</h3>
                <div className="grid grid-cols-4 gap-8 justify-items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#E44D26] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold">H5</span>
                    </div>
                    <span className="text-sm">HTML5</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#264DE4] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold">CSS</span>
                    </div>
                    <span className="text-sm">CSS3</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#31A8FF] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold">Ps</span>
                    </div>
                    <span className="text-sm">PHOTOSHOP</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#F7DF1E] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-black font-bold">JS</span>
                    </div>
                    <span className="text-sm">JAVASCRIPT</span>
                  </div>
                </div>
              </div>

              {/* Learning */}
              <div className="mb-16">
                <h3 className="text-lg font-semibold mb-6">LEARNING:</h3>
                <div className="grid grid-cols-4 gap-8 justify-items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#539E43] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white text-sm">NODE</span>
                    </div>
                    <span className="text-sm">NODEJS</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#00758F] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white text-sm">SQL</span>
                    </div>
                    <span className="text-sm">MySQL</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4DB33D] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white text-sm">M</span>
                    </div>
                    <span className="text-sm">MONGODB</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#3178C6] rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white text-sm">TS</span>
                    </div>
                    <span className="text-sm">TYPESCRIPT</span>
                  </div>
                </div>
              </div>

              {/* Other Skills */}
              <div>
                <h3 className="text-lg font-semibold mb-6">OTHER SKILLS:</h3>
                <div className="grid grid-cols-4 gap-8 justify-items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 border-2 border-gray-400">
                      <span className="text-sm">EN</span>
                    </div>
                    <span className="text-sm">ENGLISH</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 border-2 border-gray-400">
                      <span className="text-sm">PY</span>
                    </div>
                    <span className="text-sm">PYTHON</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 border-2 border-gray-400">
                      <span className="text-sm">C++</span>
                    </div>
                    <span className="text-sm">C++</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 border-2 border-gray-400">
                      <span className="text-sm">C</span>
                    </div>
                    <span className="text-sm">C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects-v2" className="bg-black py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block border-2 border-white px-8 py-2 mb-12">
                <h2 className="text-2xl font-bold text-white">PROJECTS</h2>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">coded.</h3>
                <h3 className="text-3xl font-bold text-white mb-8">designed</h3>

                <div className="bg-black/50 p-8 rounded-lg mb-8">
                  <h4 className="text-2xl font-bold text-white mb-4">eatsome.</h4>
                  <p className="text-gray-300 mb-6">Restaurant browsing in React.js (Using Yelp API)</p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      DEMO
                    </Button>
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                      MORE
                    </Button>
                  </div>
                </div>

                <p className="text-gray-400">And many more to come!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12">
          <div className="container mx-auto px-4 text-center">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black mb-8"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              BACK TO TOP
            </Button>

            <div className="flex justify-center gap-6 mb-6">
              <Link href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                FB
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                TW
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                IG
              </Link>
              <Link href="#" className="text-white hover:text-gray-300">
                <span className="sr-only">Email</span>
                EM
              </Link>
            </div>

            <p className="text-gray-400 text-sm">©2024 Mit Patel. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

