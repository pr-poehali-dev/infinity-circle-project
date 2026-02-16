import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const schedule = [
  {
    time: "13:40",
    title: "Церемония в ЗАГСе",
    description: "ул. Ленина, 94",
    icon: "Heart",
  },
  {
    time: "15:00",
    title: "Сбор гостей",
    description: "База «Айвенго», ул. Отдыха, 5",
    icon: "MapPin",
  },
  {
    time: "17:00",
    title: "Фотосессия",
    description: "Сбор гостей у главного входа",
    icon: "Camera",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Программа дня
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-serif text-foreground text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          6 июня 2026
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className={`flex-1 text-center ${i % 2 === 0 ? "md:text-right" : "md:text-right md:order-first"}`}>
                  {i % 2 === 0 ? (
                    <>
                      <span className="text-4xl md:text-5xl font-serif text-primary">{item.time}</span>
                      <h3 className="text-xl font-serif text-foreground mt-2">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </>
                  ) : (
                    <div className="md:invisible">
                      <span className="text-4xl md:text-5xl font-serif text-primary">{item.time}</span>
                    </div>
                  )}
                </div>

                <div className="relative z-10 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={22} className="text-primary" />
                </div>

                <div className={`flex-1 text-center ${i % 2 === 0 ? "md:text-left md:invisible" : "md:text-left"}`}>
                  {i % 2 !== 0 ? (
                    <>
                      <span className="text-4xl md:text-5xl font-serif text-primary">{item.time}</span>
                      <h3 className="text-xl font-serif text-foreground mt-2">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
