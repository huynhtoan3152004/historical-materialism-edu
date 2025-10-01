"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { GraduationCap, Heart, HandHeart } from "lucide-react"
import { siteData } from "@/lib/data"
import { useLanguage } from "@/hooks/use-language"

const iconMap = {
  GraduationCap,
  Heart,
  HandHeart,
}

export function YouthSection() {
  const { language } = useLanguage()
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("youth-checklist")
    if (saved) {
      setCheckedItems(JSON.parse(saved))
    }
  }, [])

  // Save to localStorage when changed
  const handleCheck = (id: string) => {
    const newChecked = { ...checkedItems, [id]: !checkedItems[id] }
    setCheckedItems(newChecked)
    localStorage.setItem("youth-checklist", JSON.stringify(newChecked))
  }

  return (
    <section id="youth" className="py-20 bg-gradient-to-b from-[#f7f6f3] to-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#2e5e4e] text-white">
            {language === "vi" ? "Góc nhìn giới trẻ" : "Youth Perspectives"}
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-4">
            {language === "vi" ? "Áp dụng vào đời sống" : "Apply to Daily Life"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "vi"
              ? "Những hành động nhỏ hàng ngày để thực hành các nguyên lý duy vật lịch sử"
              : "Small daily actions to practice historical materialism principles"}
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {siteData.youthCases.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-[#f0c240]/20 rounded-lg">
                        <Icon className="h-6 w-6 text-[#f0c240]" />
                      </div>
                      <CardTitle className="text-lg">{language === "vi" ? item.title : item.titleEn}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {language === "vi" ? item.tip : item.tipEn}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Action Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto border-2 border-[#b51e1e]/20">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">
                {language === "vi" ? "📝 Checklist hành động tuần này" : "📝 This Week's Action Checklist"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {siteData.checklist.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Checkbox
                    id={item.id}
                    checked={checkedItems[item.id] || false}
                    onCheckedChange={() => handleCheck(item.id)}
                  />
                  <label
                    htmlFor={item.id}
                    className={`text-sm font-medium leading-relaxed cursor-pointer flex-1 ${
                      checkedItems[item.id] ? "line-through text-muted-foreground" : ""
                    }`}
                  >
                    {language === "vi" ? item.label : item.labelEn}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
