"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Layers, Lightbulb, Users, Network, RefreshCw } from "lucide-react"
import { siteData } from "@/lib/data"
import { useLanguage } from "@/hooks/use-language"

const iconMap = {
  Layers,
  Lightbulb,
  Users,
  Network,
  RefreshCw,
}

export function TheorySection() {
  const { language } = useLanguage()

  return (
    <section id="theory" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#2e5e4e] text-white">
            {language === "vi" ? "Cơ sở lý luận" : "Theoretical Foundation"}
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-4">
            {language === "vi" ? "5 Phạm trù trọng tâm" : "5 Core Categories"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "vi"
              ? "Khám phá các khái niệm nền tảng của Chủ nghĩa duy vật lịch sử qua lịch sử Việt Nam và đời sống hiện đại"
              : "Explore foundational concepts of Historical Materialism through Vietnamese history and modern life"}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteData.coSoLyLuan.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#b51e1e]">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#b51e1e]/10 rounded-lg">
                        <Icon className="h-6 w-6 text-[#b51e1e]" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">
                          {index + 1}
                        </Badge>
                        <CardTitle className="text-lg leading-tight">
                          {language === "vi" ? item.title : item.titleEn}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="details" className="border-none">
                        <AccordionTrigger className="text-sm font-medium hover:no-underline">
                          {language === "vi" ? "Xem chi tiết" : "View details"}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4 pt-2">
                          <div>
                            <p className="text-sm font-semibold text-[#b51e1e] mb-1">
                              {language === "vi" ? "📜 Lịch sử:" : "📜 History:"}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {language === "vi" ? item.history : item.historyEn}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#f0c240] mb-1">
                              {language === "vi" ? "🌟 Giới trẻ:" : "🌟 Youth:"}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {language === "vi" ? item.youth : item.youthEn}
                            </p>
                          </div>
                          <div className="pt-2 border-t">
                            <p className="text-sm font-semibold text-[#2e5e4e] mb-1">
                              {language === "vi" ? "💭 Tự hỏi:" : "💭 Reflect:"}
                            </p>
                            <p className="text-sm italic text-muted-foreground leading-relaxed">
                              {language === "vi" ? item.reflect : item.reflectEn}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
