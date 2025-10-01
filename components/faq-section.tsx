"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteData } from "@/lib/data"
import { useLanguage } from "@/hooks/use-language"

export function FAQSection() {
  const { language } = useLanguage()

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#f0c240] text-black">{language === "vi" ? "Hỏi–Đáp" : "FAQ"}</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-4">
            {language === "vi" ? "Câu hỏi thường gặp" : "Frequently Asked Questions"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "vi"
              ? "Giải đáp những thắc mắc phổ biến về Chủ nghĩa duy vật lịch sử"
              : "Answers to common questions about Historical Materialism"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {siteData.faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {language === "vi" ? item.q : item.qEn}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {language === "vi" ? item.a : item.aEn}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
