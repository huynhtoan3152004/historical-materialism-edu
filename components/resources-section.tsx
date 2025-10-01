"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, ExternalLink } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function ResourcesSection() {
  const { language } = useLanguage()

  const resources = [
    {
      title: "Giáo trình Triết học Mác–Lênin",
      titleEn: "Marxist-Leninist Philosophy Textbook",
      type: "Sách giáo trình",
      typeEn: "Textbook",
      icon: BookOpen,
    },
    {
      title: "Tóm tắt 5 phạm trù (PDF)",
      titleEn: "5 Categories Summary (PDF)",
      type: "Tài liệu",
      typeEn: "Document",
      icon: Download,
    },
    {
      title: "Ma trận & Câu hỏi phản tư",
      titleEn: "Matrix & Reflection Questions",
      type: "Bảng tương tác",
      typeEn: "Interactive Sheet",
      icon: ExternalLink,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f7f6f3]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#2e5e4e] text-white">{language === "vi" ? "Tài nguyên" : "Resources"}</Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-4">
            {language === "vi" ? "Tài liệu tham khảo" : "Reference Materials"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "vi" ? "Tải xuống tài liệu và tìm hiểu thêm" : "Download materials and learn more"}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#b51e1e]/10 rounded-lg">
                        <Icon className="h-5 w-5 text-[#b51e1e]" />
                      </div>
                      <Badge variant="outline">{language === "vi" ? resource.type : resource.typeEn}</Badge>
                    </div>
                    <CardTitle className="text-lg">{language === "vi" ? resource.title : resource.titleEn}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" disabled>
                      {language === "vi" ? "Sắp có" : "Coming Soon"}
                    </Button>
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
