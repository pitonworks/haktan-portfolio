import { ThemeToggle } from "@/components/theme-toggle"
import { Scene } from "@/components/3d/scene"
import { MobileNav } from "@/components/mobile-nav"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Ticaret Platformu",
    description: "Next.js ve Stripe ile geliştirilmiş modern bir e-ticaret platformu.",
    image: "/projects/ecommerce.jpg",
    demoUrl: "https://ecommerce.haktanyuruk.com",
    githubUrl: "https://github.com/haktanyuruk/ecommerce",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
  },
  {
    title: "AI Chat Uygulaması",
    description: "OpenAI API kullanılarak geliştirilmiş yapay zeka sohbet uygulaması.",
    image: "/projects/ai-chat.jpg",
    demoUrl: "https://ai-chat.haktanyuruk.com",
    githubUrl: "https://github.com/haktanyuruk/ai-chat",
    tags: ["React", "Node.js", "OpenAI", "WebSocket"],
  },
  {
    title: "Blog Platformu",
    description: "Next.js ve Prisma ile geliştirilmiş modern bir blog platformu.",
    image: "/projects/blog.jpg",
    demoUrl: "https://blog.haktanyuruk.com",
    githubUrl: "https://github.com/haktanyuruk/blog",
    tags: ["Next.js", "Prisma", "PostgreSQL", "MDX"],
  },
]

const skills = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL"] },
  { name: "Design", items: ["Figma", "Adobe XD", "Photoshop"] },
  { name: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="backdrop-blur-md bg-background/50 rounded-2xl border border-border/50 shadow-lg">
            <div className="flex h-16 items-center justify-between px-6">
              <div className="text-lg font-bold">Haktan Yürük</div>
              <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="#" className="hover:text-primary transition-colors">
                  Ana Sayfa
                </a>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfolyo
                </a>
                <a href="#about" className="hover:text-primary transition-colors">
                  Hakkımda
                </a>
                <a href="#contact" className="hover:text-primary transition-colors">
                  İletişim
                </a>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 overflow-hidden">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            <div className="flex flex-col items-start gap-6 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              >
                Full Stack Developer & Designer
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Merhaba, ben{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Haktan Yürük
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground sm:text-xl max-w-[600px]"
              >
                Modern web teknolojileri ile yaratıcı ve kullanıcı dostu dijital deneyimler tasarlıyorum.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="rounded-lg bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  İletişime Geç
                </a>
                <a
                  href="#portfolio"
                  className="rounded-lg border px-6 py-3 text-lg font-medium bg-background hover:bg-accent transition-colors"
                >
                  Projelerimi Gör
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="lg:w-1/2 w-full aspect-square"
            >
              <Scene />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium text-muted-foreground">Aşağı Kaydır</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground" />
        </motion.div>

        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-accent/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Hakkımda</h2>
              <p className="text-lg text-muted-foreground">
                Merhaba! Ben Haktan Yürük, Full Stack Developer ve UI/UX tasarımcısıyım. Modern web teknolojileri konusunda uzmanlaşmış bir yazılım geliştiriciyim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {skills.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border bg-card"
                >
                  <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <a
                href="https://github.com/haktanyuruk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/haktanyuruk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com/haktanyuruk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Portfolyo</h2>
            <p className="text-lg text-muted-foreground">Son projelerimden bazıları</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">İletişim</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Projeleriniz için benimle iletişime geçebilirsiniz.
            </p>
            
            <div className="flex flex-col gap-8">
              <ContactForm />
              
              <div className="flex justify-center gap-6">
                <a
                  href="mailto:contact@haktanyuruk.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <Mail size={20} />
                  contact@haktanyuruk.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
