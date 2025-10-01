"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Sparkles } from "lucide-react"
import { siteData } from "@/lib/data"
import { useLanguage } from "@/hooks/use-language"
import { QuizDialog } from "@/components/quiz-dialog"

export function Hero() {
  const { language } = useLanguage()
  const hero = siteData.hero

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7f6f3] via-[#f7f6f3] to-[#e8e6e0]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23b51e1e' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Badge className="mb-4 bg-[#b51e1e] text-white hover:bg-[#8b1616]">
                <Sparkles className="mr-1 h-3 w-3" />
                {language === "vi" ? "Chương 3" : "Chapter 3"}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-[#b51e1e]"
            >
              {language === "vi" ? hero.title : hero.titleEn}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed"
            >
              {language === "vi" ? hero.subtitle : hero.subtitleEn}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-[#b51e1e] hover:bg-[#8b1616] text-white" asChild>
                <a href="#theory">
                  {language === "vi" ? hero.ctaPrimary : hero.ctaPrimaryEn}
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <QuizDialog />
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#b51e1e]/20 to-[#f0c240]/20 rounded-full blur-3xl" />
              <div className="relative h-full flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Timeline circles */}
                  {[1945, 1954, 1975, 1986, 2025].map((year, i) => (
                    <motion.circle
                      key={year}
                      cx={200}
                      cy={200}
                      r={60 + i * 30}
                      fill="none"
                      stroke="#b51e1e"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity={0.3 - i * 0.05}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 1.5 }}
                    />
                  ))}
                  {/* Center star */}
                  <motion.path
                    d="M200,150 L210,180 L240,180 L215,200 L225,230 L200,210 L175,230 L185,200 L160,180 L190,180 Z"
                    fill="#f0c240"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ArrowDown className="h-6 w-6 text-[#b51e1e]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
