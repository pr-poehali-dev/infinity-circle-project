import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const weddingImage = "https://cdn.poehali.dev/projects/d6449d7f-47a7-491e-b5e7-a1550e645f09/files/f731a791-3b85-447d-b5f0-1ccbfb923322.jpg"
const venueImage = "https://cdn.poehali.dev/projects/d6449d7f-47a7-491e-b5e7-a1550e645f09/files/3eb8d206-4de7-4144-830b-91ee8cbb661b.jpg"

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [120, -120])

  return (
    <section ref={containerRef} className="bg-secondary/50 px-6 py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Место торжества
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          База «Айвенго»
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
            style={{ y: y1 }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={weddingImage}
              alt="Свадебная атмосфера"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden group"
            style={{ y: y2 }}
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src={venueImage}
              alt="Место торжества"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </div>

        <motion.p
          className="text-center text-muted-foreground mt-8 text-lg font-serif"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          ул. Отдыха, 5
        </motion.p>
      </div>
    </section>
  )
}
