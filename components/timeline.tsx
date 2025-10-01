"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { siteData } from "@/lib/data"
import { useLanguage } from "@/hooks/use-language"

export function Timeline() {
  const { language } = useLanguage()

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white to-[#f7f6f3]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#f0c240] text-black">{language === "vi" ? "Dòng thời gian" : "Timeline"}</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-4">
            {language === "vi" ? "Hành trình lịch sử Việt Nam" : "Vietnam's Historical Journey"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "vi"
              ? "Từ Cách mạng Tháng Tám đến kỷ nguyên AI – Minh chứng cho sự tác động qua lại giữa tồn tại và ý thức xã hội"
              : "From August Revolution to AI Era – Evidence of mutual interaction between existence and social consciousness"}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#b51e1e] via-[#f0c240] to-[#2e5e4e] hidden md:block" />

          <div className="space-y-12">
            {siteData.timeline.map((item, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:w-[calc(50%-2rem)]">
                    <div
                      className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                        index === 0
                          ? "border-l-[#b51e1e]"
                          : index === siteData.timeline.length - 1
                            ? "border-l-[#2e5e4e]"
                            : "border-l-[#f0c240]"
                      } hover:shadow-lg transition-shadow duration-300`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-lg font-bold font-serif">
                          {item.year}
                        </Badge>
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-2">
                        {language === "vi" ? item.label : item.labelEn}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {language === "vi" ? item.note : item.noteEn}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-[#b51e1e] border-4 border-white shadow-md" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-2rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
