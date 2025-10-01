"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  const menuItems = [
    { href: "#home", label: "Trang chủ", labelEn: "Home" },
    { href: "#theory", label: "Cơ sở lý luận", labelEn: "Theory" },
    { href: "#timeline", label: "Dòng thời gian", labelEn: "Timeline" },
    { href: "#matrix", label: "Ma trận", labelEn: "Matrix" },
    { href: "#youth", label: "Góc nhìn trẻ", labelEn: "Youth View" },
    { href: "#faq", label: "Hỏi–Đáp", labelEn: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="font-serif text-xl font-bold text-[#b51e1e]">{language === "vi" ? "CNĐVLS" : "HM"}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-[#b51e1e]">
              {language === "vi" ? item.label : item.labelEn}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
            <Globe className="h-5 w-5" />
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-[#b51e1e]"
                  >
                    {language === "vi" ? item.label : item.labelEn}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
