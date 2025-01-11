import { ThemeToggle } from "@/components/theme-toggle"
import { Scene } from "@/components/3d/scene"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="fixed w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-lg font-bold">Haktan Yürük</div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="container flex min-h-screen items-center pt-16">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Merhaba, ben{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Haktan Yürük
            </span>
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Full Stack Developer & Designer
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            >
              İletişime Geç
            </a>
            <a
              href="#projects"
              className="rounded-lg border bg-background px-4 py-2 hover:bg-accent"
            >
              Projelerimi Gör
            </a>
          </div>
          <div className="mt-8 w-full">
            <Scene />
          </div>
        </div>
      </section>
    </main>
  )
}
