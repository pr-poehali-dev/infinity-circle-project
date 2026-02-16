import { motion } from "framer-motion"

export function PricingSection() {
  return (
    <section className="bg-secondary/50 px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Обращение
        </motion.p>

        <motion.div
          className="bg-background rounded-2xl p-8 md:p-12 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-lg md:text-xl font-serif text-foreground leading-relaxed mb-8">
            Дорогие наши друзья и родные!
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Мы, Нина и Дмитрий, с радостью приглашаем вас разделить с нами самый счастливый день в нашей жизни — день нашей свадьбы!
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Мы будем бесконечно счастливы видеть вас среди наших гостей! Чтобы этот день остался в памяти как нежный и трогательный праздник, мы хотели бы поделиться с вами парой тёплых пожеланий.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary/30" />
            <span className="text-primary text-lg">♥</span>
            <div className="h-px w-12 bg-primary/30" />
          </div>

          <p className="text-lg font-serif text-foreground">
            С любовью и нетерпением ждём вас!
          </p>
          <p className="text-muted-foreground mt-2 font-serif italic">
            С уважением, Нина и Дмитрий
          </p>
        </motion.div>
      </div>
    </section>
  )
}
