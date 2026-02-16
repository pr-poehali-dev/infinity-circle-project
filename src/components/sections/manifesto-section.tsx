import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const clipPath = useTransform(scrollYProgress, [0.2, 0.6], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center bg-background px-6 py-32"
    >
      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-relaxed text-center text-foreground/10">
          Дорогие наши друзья и родные! Мы с радостью приглашаем вас разделить с нами самый счастливый день.
        </h2>

        <motion.h2
          className="absolute inset-0 text-3xl md:text-5xl lg:text-6xl font-serif leading-relaxed text-center bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
          style={{ clipPath }}
        >
          Дорогие наши друзья и родные! Мы с радостью приглашаем вас разделить с нами самый счастливый день.
        </motion.h2>
      </div>
    </section>
  )
}
