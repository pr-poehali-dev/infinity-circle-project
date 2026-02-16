import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const wishes = [
  {
    icon: "HeartOff",
    title: "Без «горько»",
    description: "Пожалуйста, воздержитесь от традиционного «горько» — нам хочется, чтобы атмосфера была лёгкой и романтичной.",
  },
  {
    icon: "Palette",
    title: "Пастельные тона",
    description: "Будем благодарны, если вы выберете для праздника одежду в пастельных тонах — это поможет создать утончённый и гармоничный образ торжества.",
  },
  {
    icon: "Smile",
    title: "Хорошее настроение",
    description: "Самый лучший подарок — ваши искренние улыбки и тёплые пожелания в этот особенный день.",
  },
]

export function InsightsSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Наши пожелания
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Пара тёплых просьб
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wishes.map((wish, i) => (
            <motion.div
              key={i}
              className="text-center p-8 rounded-xl bg-secondary/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Icon name={wish.icon} size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{wish.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{wish.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
