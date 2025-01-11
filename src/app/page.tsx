import { ThemeToggle } from "@/components/theme-toggle"
import { Scene } from "@/components/3d/scene"
import { MobileNav } from "@/components/mobile-nav"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
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
                  href="#projects"
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
    </main>
  )
}
