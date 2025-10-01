"use client"

import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-[#2e5e4e] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              {language === "vi" ? "CNĐVLS" : "Historical Materialism"}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              {language === "vi"
                ? "Nền tảng giáo dục triết học hiện đại, kết nối lịch sử và đời sống."
                : "Modern philosophy education platform, connecting history and life."}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{language === "vi" ? "Liên kết" : "Links"}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#theory" className="hover:text-white transition-colors">
                  {language === "vi" ? "Cơ sở lý luận" : "Theory"}
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-white transition-colors">
                  {language === "vi" ? "Dòng thời gian" : "Timeline"}
                </a>
              </li>
              <li>
                <a href="#matrix" className="hover:text-white transition-colors">
                  {language === "vi" ? "Ma trận" : "Matrix"}
                </a>
              </li>
              <li>
                <a href="#youth" className="hover:text-white transition-colors">
                  {language === "vi" ? "Góc nhìn trẻ" : "Youth View"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{language === "vi" ? "Về dự án" : "About"}</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              {language === "vi"
                ? "Dự án giáo dục phi lợi nhuận nhằm phổ biến triết học Mác–Lênin cho giới trẻ."
                : "Non-profit educational project to popularize Marxist-Leninist philosophy for youth."}
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © 2025 {language === "vi" ? "Chủ nghĩa duy vật lịch sử" : "Historical Materialism"}.{" "}
            {language === "vi" ? "Giấy phép CC BY-NC-SA 4.0" : "CC BY-NC-SA 4.0 License"}.
          </p>
          <p>{language === "vi" ? "Được xây dựng với" : "Built with"} Next.js & ❤️</p>
        </div>
      </div>
    </footer>
  )
}
