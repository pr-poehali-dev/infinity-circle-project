import { motion } from "framer-motion"

const words = ["любовь", "♥", "счастье", "♥", "нежность", "♥", "радость", "♥", "семья", "♥", "вместе", "♥"]

export function CarouselSection() {
  const items = [...words, ...words]

  return (
    <section className="bg-primary py-16 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((word, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-3xl md:text-5xl font-serif text-primary-foreground/90 whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
