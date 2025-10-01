"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Info } from "lucide-react"
import { siteData } from "@/lib/data"
import { useLanguage } from "@/hooks/use-language"

export function MatrixSection() {
  const { language } = useLanguage()
  const [selectedItem, setSelectedItem] = useState<(typeof siteData.matrix)[0] | null>(null)

  return (
    <section id="matrix" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#b51e1e] text-white">
            {language === "vi" ? "Ma trận tương tác" : "Interactive Matrix"}
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-balance mb-4">
            {language === "vi"
              ? "Chiến công ↔ Phạm trù ↔ Góc nhìn giới trẻ"
              : "Achievements ↔ Categories ↔ Youth Perspectives"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {language === "vi"
              ? "Khám phá mối liên hệ giữa lịch sử, lý thuyết và đời sống. Click vào từng ô để tìm hiểu thêm."
              : "Explore connections between history, theory, and life. Click each cell to learn more."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="overflow-x-auto"
        >
          <Table className="border">
            <TableHeader>
              <TableRow className="bg-[#b51e1e]/5">
                <TableHead className="font-bold">{language === "vi" ? "Phạm trù" : "Category"}</TableHead>
                <TableHead className="font-bold">{language === "vi" ? "Chiến công VN" : "VN Achievement"}</TableHead>
                <TableHead className="font-bold">
                  {language === "vi" ? "Câu hỏi phản tư" : "Reflection Question"}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {siteData.matrix.map((item, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-[#f0c240]/10 transition-colors cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <TableCell className="font-medium">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-2">
                          <span>{language === "vi" ? item.phamTru : item.phamTruEn}</span>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <p className="text-sm">
                          {language === "vi"
                            ? "Click để xem chi tiết và câu hỏi phản tư"
                            : "Click to view details and reflection questions"}
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{language === "vi" ? item.chienCong : item.chienCongEn}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {language === "vi" ? item.cauHoi.substring(0, 50) + "..." : item.cauHoiEn.substring(0, 50) + "..."}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>

        {/* Dialog for detailed view */}
        <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">
                {selectedItem && (language === "vi" ? selectedItem.phamTru : selectedItem.phamTruEn)}
              </DialogTitle>
              <DialogDescription>
                {selectedItem && (
                  <Badge className="mt-2 bg-[#b51e1e] text-white">
                    {language === "vi" ? selectedItem.chienCong : selectedItem.chienCongEn}
                  </Badge>
                )}
              </DialogDescription>
            </DialogHeader>
            {selectedItem && (
              <div className="space-y-6 pt-4">
                <div className="p-4 bg-[#f0c240]/10 rounded-lg border-l-4 border-l-[#f0c240]">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>💭</span>
                    {language === "vi" ? "Câu hỏi phản tư:" : "Reflection Question:"}
                  </h4>
                  <p className="text-lg leading-relaxed">
                    {language === "vi" ? selectedItem.cauHoi : selectedItem.cauHoiEn}
                  </p>
                </div>
                <div className="p-4 bg-[#2e5e4e]/10 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    {language === "vi" ? "💡 Gợi ý suy ngẫm:" : "💡 Reflection Tips:"}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>
                      {language === "vi"
                        ? "Viết nhật ký cá nhân về câu hỏi này"
                        : "Write a personal journal about this question"}
                    </li>
                    <li>
                      {language === "vi" ? "Thảo luận với bạn bè hoặc gia đình" : "Discuss with friends or family"}
                    </li>
                    <li>
                      {language === "vi"
                        ? "Tìm ví dụ cụ thể từ cuộc sống của bạn"
                        : "Find specific examples from your life"}
                    </li>
                  </ul>
                </div>
                <Button onClick={() => setSelectedItem(null)} className="w-full bg-[#b51e1e] hover:bg-[#8b1616]">
                  {language === "vi" ? "Đóng" : "Close"}
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
