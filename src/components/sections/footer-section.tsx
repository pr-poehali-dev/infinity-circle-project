import { motion } from "framer-motion"

export function FooterSection() {
  return (
    <footer className="relative bg-background px-6 py-24 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 via-rose-100 to-amber-100 opacity-30 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-6">
            Ждём вас
          </p>

          <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-4">
            6 июня 2026
          </h2>

          <p className="text-xl font-serif text-muted-foreground mb-12">
            Нина Эдуардовна Мухамедьянова
            <br />
            <span className="text-primary">&</span>
            <br />
            Пяткин Дмитрий Сергеевич
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-border" />
            <span className="text-2xl animate-heartbeat">♥</span>
            <div className="h-px w-16 bg-border" />
          </div>

          <div className="space-y-2 text-muted-foreground">
            <p>ЗАГС: ул. Ленина, 94</p>
            <p>Банкет: база «Айвенго», ул. Отдыха, 5</p>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            С любовью, Нина & Дмитрий · 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
